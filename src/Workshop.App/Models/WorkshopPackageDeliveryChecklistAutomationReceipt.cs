namespace Workshop.App;

public sealed record WorkshopPackageDeliveryChecklistAutomationReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string AutomationId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
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
    bool OperatorReviewed,
    bool AraReviewComplete,
    bool HumanReviewComplete,
    bool PackageSupportReady,
    bool LowLaborReuseReady,
    bool ChecklistReady,
    bool AutomationReady,
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryChecklistAutomationReceipt FromAutomation(
        WorkshopPackageDeliveryChecklistAutomationRecord automation,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-package-checklist-automation-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            automation.CustomerSafeForReceipt &&
            automation.OperatorReviewed &&
            automation.AraReviewComplete &&
            automation.HumanReviewComplete &&
            automation.PackageSupportReady &&
            automation.LowLaborReuseReady &&
            automation.ChecklistReady &&
            automation.AutomationReady &&
            automation.NativeExecutionReady &&
            automation.EpochTimingProviderOnly &&
            !automation.RequiresEpochTimingRequest &&
            !automation.CustomerVisible &&
            !automation.WebportalExportReady &&
            !automation.WorkshopCalendarOwnership &&
            !automation.MonitorWorkflowExposed &&
            !automation.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryChecklistAutomationReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryChecklistAutomationReceipt",
            automation.AutomationId,
            automation.ServiceRequestId,
            automation.ServiceLane,
            automation.PackageId,
            "package-delivery-checklist-automation",
            customerSafe ? "customer-safe-package-delivery-automation-ready" : "customer-safe-package-delivery-automation-blocked",
            "WORKSHOP prepared repeatable package delivery automation from an internal checklist without exposing internal packet, queue, decision, materialization, reuse, checklist, automation-control, or package-control records.",
            customerSafe
                ? "Repeatable package delivery preparation is ready for this service path."
                : "Repeatable package delivery preparation is waiting for a quality gate.",
            "Review the customer-safe package delivery automation status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            automation.EpochTimingProviderOnly,
            automation.WorkshopCalendarOwnership,
            automation.MonitorWorkflowExposed,
            automation.PaymentLiveEnabled,
            automation.OperatorReviewed,
            automation.AraReviewComplete,
            automation.HumanReviewComplete,
            automation.PackageSupportReady,
            automation.LowLaborReuseReady,
            automation.ChecklistReady,
            automation.AutomationReady,
            automation.RequiresEpochTimingRequest,
            automation.NativeExecutionReady);
    }
}
