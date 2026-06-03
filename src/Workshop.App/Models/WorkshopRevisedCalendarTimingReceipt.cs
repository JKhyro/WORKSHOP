namespace Workshop.App;

public sealed record WorkshopRevisedCalendarTimingReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string PayloadId,
    string SourceHandoffId,
    string RequestId,
    string Kind,
    string Status,
    string Summary,
    string CustomerSafeStatus,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed)
{
    public static WorkshopRevisedCalendarTimingReceipt FromPayload(
        WorkshopEpochRevisedCalendarTimingPayload payload,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-revised-timing-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..58];
        bool customerSafe =
            payload.CustomerSafe &&
            payload.EpochTimingProviderOnly &&
            !payload.ProviderGoLiveRequested &&
            !payload.WorkshopCalendarOwnership &&
            !payload.MonitorWorkflowExposed;

        return new WorkshopRevisedCalendarTimingReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            payload.PayloadId,
            payload.SourceHandoffId,
            payload.RequestId,
            "epoch-revised-calendar-timing",
            "recurring-exception-action-required",
            "WORKSHOP consumed EPOCH revised timing context as service status only.",
            "Revised timing context is available from EPOCH; WORKSHOP is preparing the service step without calendar ownership.",
            customerSafe,
            customerSafe,
            payload.EpochTimingProviderOnly,
            payload.WorkshopCalendarOwnership,
            payload.MonitorWorkflowExposed);
    }
}
