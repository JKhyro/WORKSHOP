namespace Workshop.App;

public sealed record WorkshopTimingAwareServiceFollowUp(
    string FollowUpId,
    string CreatedAtUtc,
    string SourceSurface,
    string TimingStatusId,
    string RevisedTimingPayloadId,
    string RevisedTimingReceiptId,
    string SourceHandoffId,
    string RequestId,
    string ActionKind,
    string Status,
    string CustomerSafeSummary,
    string OperatorNextAction,
    bool CustomerSafe,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool RenewalPromptReady)
{
    public static WorkshopTimingAwareServiceFollowUp FromRevisedTimingStatus(
        WorkshopEpochRevisedCalendarTimingPayload payload,
        WorkshopRevisedCalendarTimingReceipt receipt,
        WorkshopRevisedCalendarTimingStatusRecord status,
        DateTimeOffset createdAtUtc)
    {
        string followUpId = $"workshop-timing-follow-up-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..58];
        bool epochTimingProviderOnly =
            payload.EpochTimingProviderOnly &&
            receipt.EpochTimingProviderOnly &&
            status.EpochTimingProviderOnly;
        bool workshopCalendarOwnership =
            payload.WorkshopCalendarOwnership ||
            receipt.WorkshopCalendarOwnership ||
            status.WorkshopCalendarOwnership;
        bool monitorWorkflowExposed =
            payload.MonitorWorkflowExposed ||
            receipt.MonitorWorkflowExposed ||
            status.MonitorWorkflowExposed;
        bool customerSafe =
            payload.CustomerSafe &&
            receipt.CustomerSafe &&
            status.CustomerSafe &&
            status.WebportalExportReady &&
            !payload.ProviderGoLiveRequested &&
            epochTimingProviderOnly &&
            !workshopCalendarOwnership &&
            !monitorWorkflowExposed;

        return new WorkshopTimingAwareServiceFollowUp(
            followUpId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.TimingAwareServiceFollowUp",
            status.StatusId,
            payload.PayloadId,
            receipt.ReceiptId,
            payload.SourceHandoffId,
            payload.RequestId,
            "timing-aware-service-follow-up",
            "follow-up-ready",
            "EPOCH returned revised timing context; WORKSHOP can prepare the service follow-up without owning calendar rules.",
            "Prepare the customer-safe renewal or follow-up message, and request EPOCH timing only if a new service session is needed.",
            customerSafe,
            customerSafe,
            epochTimingProviderOnly,
            workshopCalendarOwnership,
            monitorWorkflowExposed,
            customerSafe);
    }
}
