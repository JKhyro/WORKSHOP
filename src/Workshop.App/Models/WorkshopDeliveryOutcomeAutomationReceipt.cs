namespace Workshop.App;

public sealed record WorkshopDeliveryOutcomeAutomationReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string AutomationId,
    string ServiceRequestId,
    string RevenueOutcomeId,
    string DeliveryResultReceiptId,
    string LifecycleStatusId,
    string TimingAwareRenewalReceiptId,
    string Kind,
    string Status,
    string Summary,
    string CustomerSafeMessage,
    string NextAction,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool AraReviewComplete,
    bool RenewalReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopDeliveryOutcomeAutomationReceipt FromAutomation(
        WorkshopDeliveryOutcomeAutomationRecord automation,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-delivery-outcome-automation-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..73];
        bool customerSafe =
            automation.CustomerSafe &&
            automation.WebportalExportReady &&
            automation.EpochTimingProviderOnly &&
            automation.AraReviewComplete &&
            automation.NativeExecutionReady &&
            automation.RenewalReady &&
            !automation.WorkshopCalendarOwnership &&
            !automation.MonitorWorkflowExposed &&
            !automation.PaymentLiveEnabled &&
            !automation.RequiresEpochTimingRequest;

        return new WorkshopDeliveryOutcomeAutomationReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.DeliveryOutcomeAutomationReceipt",
            automation.AutomationId,
            automation.ServiceRequestId,
            automation.RevenueOutcomeId,
            automation.DeliveryResultReceiptId,
            automation.LifecycleStatusId,
            automation.TimingAwareRenewalReceiptId,
            "delivery-outcome-automation",
            customerSafe ? "customer-safe-delivery-outcome-ready" : "customer-safe-delivery-outcome-blocked",
            "WORKSHOP prepared a customer-safe delivery outcome automation receipt from native revenue execution, service lifecycle status, and timing-aware renewal context.",
            automation.CustomerSafeMessage,
            "Review the delivery outcome receipt in WORKSHOP. If another appointment or deadline is needed, request timing through EPOCH.",
            customerSafe,
            customerSafe,
            customerSafe,
            automation.EpochTimingProviderOnly,
            automation.WorkshopCalendarOwnership,
            automation.MonitorWorkflowExposed,
            automation.PaymentLiveEnabled,
            automation.AraReviewComplete,
            automation.RenewalReady,
            automation.RequiresEpochTimingRequest);
    }
}
