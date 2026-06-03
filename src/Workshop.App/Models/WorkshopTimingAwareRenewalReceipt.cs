namespace Workshop.App;

public sealed record WorkshopTimingAwareRenewalReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string FollowUpId,
    string RequestId,
    string TimingStatusId,
    string RevisedTimingPayloadId,
    string Kind,
    string Status,
    string Summary,
    string CustomerSafeStatus,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool RenewalReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopTimingAwareRenewalReceipt FromFollowUp(
        WorkshopTimingAwareServiceFollowUp followUp,
        WorkshopRevisedCalendarTimingStatusRecord status,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-timing-renewal-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..60];
        bool customerSafe =
            followUp.CustomerSafe &&
            status.CustomerSafe &&
            followUp.WebportalExportReady &&
            status.WebportalExportReady &&
            followUp.EpochTimingProviderOnly &&
            status.EpochTimingProviderOnly &&
            !followUp.WorkshopCalendarOwnership &&
            !status.WorkshopCalendarOwnership &&
            !followUp.MonitorWorkflowExposed &&
            !status.MonitorWorkflowExposed;

        return new WorkshopTimingAwareRenewalReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.TimingAwareRenewalReceipt",
            followUp.FollowUpId,
            followUp.RequestId,
            status.StatusId,
            followUp.RevisedTimingPayloadId,
            "timing-aware-renewal",
            "renewal-follow-up-ready",
            "WORKSHOP prepared a renewal/follow-up receipt from customer-safe EPOCH timing context.",
            "Your service follow-up is ready; EPOCH remains the timing provider if another appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            followUp.EpochTimingProviderOnly && status.EpochTimingProviderOnly,
            followUp.WorkshopCalendarOwnership || status.WorkshopCalendarOwnership,
            followUp.MonitorWorkflowExposed || status.MonitorWorkflowExposed,
            customerSafe,
            false);
    }
}
