namespace Workshop.App;

public sealed record WorkshopDeliveryOutcomeAutomationRecord(
    string AutomationId,
    string CreatedAtUtc,
    string SourceSurface,
    string ServiceRequestId,
    string RevenueOutcomeId,
    string DeliveryResultReceiptId,
    string ExecutionHistoryId,
    string LifecycleStatusId,
    string TimingAwareRenewalReceiptId,
    string AutomationKind,
    string Status,
    string CustomerSafeMessage,
    string OperatorNextAction,
    bool CustomerSafe,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool AraReviewComplete,
    bool RenewalReady,
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopDeliveryOutcomeAutomationRecord FromOutcomeChain(
        WorkshopRevenueExecutionHistoryEntry history,
        WorkshopServiceLifecycleStatusRecord lifecycleStatus,
        WorkshopTimingAwareRenewalReceipt renewalReceipt,
        DateTimeOffset createdAtUtc)
    {
        string automationId = $"workshop-delivery-outcome-automation-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..65];
        bool epochTimingProviderOnly =
            lifecycleStatus.EpochTimingProviderOnly &&
            renewalReceipt.EpochTimingProviderOnly;
        bool araReviewComplete =
            history.AraOperatorReviewComplete &&
            lifecycleStatus.AraReviewComplete;
        bool customerSafe =
            history.CustomerVisibleReceiptReady &&
            history.NativeExecutionReady &&
            history.EpochTimingRequested &&
            araReviewComplete &&
            lifecycleStatus.CustomerSafe &&
            lifecycleStatus.WebportalExportReady &&
            renewalReceipt.CustomerSafe &&
            renewalReceipt.CustomerVisibleReceiptReady &&
            renewalReceipt.RenewalReady &&
            epochTimingProviderOnly &&
            !history.MonitorWorkflowExposed &&
            !lifecycleStatus.MonitorWorkflowExposed &&
            !renewalReceipt.MonitorWorkflowExposed &&
            !renewalReceipt.WorkshopCalendarOwnership &&
            !renewalReceipt.RequiresEpochTimingRequest;

        return new WorkshopDeliveryOutcomeAutomationRecord(
            automationId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.DeliveryOutcomeAutomation",
            history.ServiceRequestId,
            history.RevenueOutcomeId,
            history.DeliveryResultReceiptId,
            history.HistoryId,
            lifecycleStatus.StatusId,
            renewalReceipt.ReceiptId,
            "delivery-outcome-automation",
            customerSafe ? "delivery-outcome-automation-ready" : "delivery-outcome-automation-blocked",
            "Your WORKSHOP delivery outcome is ready for customer-safe follow-up. EPOCH remains timing-provider-only for any appointment or deadline.",
            "Review the customer-safe delivery outcome automation receipt, then send the follow-up or request EPOCH timing only if a new service window is needed.",
            customerSafe,
            customerSafe,
            epochTimingProviderOnly,
            renewalReceipt.WorkshopCalendarOwnership,
            history.MonitorWorkflowExposed ||
                lifecycleStatus.MonitorWorkflowExposed ||
                renewalReceipt.MonitorWorkflowExposed,
            false,
            araReviewComplete,
            renewalReceipt.RenewalReady,
            renewalReceipt.RequiresEpochTimingRequest,
            history.NativeExecutionReady);
    }
}
