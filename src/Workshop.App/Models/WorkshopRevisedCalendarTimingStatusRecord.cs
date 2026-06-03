namespace Workshop.App;

public sealed record WorkshopRevisedCalendarTimingStatusRecord(
    string StatusId,
    string CreatedAtUtc,
    string SourceSurface,
    string PayloadId,
    string ReceiptId,
    string SourceHandoffId,
    string RequestId,
    string Status,
    string CustomerSafeMessage,
    string NextAction,
    bool CustomerSafe,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed)
{
    public static WorkshopRevisedCalendarTimingStatusRecord FromTimingReceipt(
        WorkshopEpochRevisedCalendarTimingPayload payload,
        WorkshopRevisedCalendarTimingReceipt receipt,
        DateTimeOffset createdAtUtc)
    {
        string statusId = $"workshop-revised-timing-status-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..57];
        bool epochTimingProviderOnly =
            payload.EpochTimingProviderOnly &&
            receipt.EpochTimingProviderOnly;
        bool workshopCalendarOwnership =
            payload.WorkshopCalendarOwnership ||
            receipt.WorkshopCalendarOwnership;
        bool monitorWorkflowExposed =
            payload.MonitorWorkflowExposed ||
            receipt.MonitorWorkflowExposed;
        bool customerSafe =
            payload.CustomerSafe &&
            receipt.CustomerSafe &&
            receipt.CustomerVisibleReceiptReady &&
            epochTimingProviderOnly &&
            !payload.ProviderGoLiveRequested &&
            !workshopCalendarOwnership &&
            !monitorWorkflowExposed;

        return new WorkshopRevisedCalendarTimingStatusRecord(
            statusId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.RevisedCalendarTimingStatusExport",
            payload.PayloadId,
            receipt.ReceiptId,
            payload.SourceHandoffId,
            payload.RequestId,
            receipt.Status,
            "Your service has EPOCH-provided revised timing context. WORKSHOP is preparing the service step and does not control calendar rules.",
            "Review the customer-safe revised timing context in the Webportal, then send any timing change back to EPOCH.",
            customerSafe,
            customerSafe,
            epochTimingProviderOnly,
            workshopCalendarOwnership,
            monitorWorkflowExposed);
    }
}
