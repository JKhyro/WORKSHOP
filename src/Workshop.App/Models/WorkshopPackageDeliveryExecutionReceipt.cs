namespace Workshop.App;

public sealed record WorkshopPackageDeliveryExecutionReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string ExecutionId,
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
    bool ExecutionReady,
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryExecutionReceipt FromExecution(
        WorkshopPackageDeliveryExecutionRecord execution,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-package-delivery-execution-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            execution.CustomerSafeForReceipt &&
            execution.OperatorReviewed &&
            execution.AraReviewComplete &&
            execution.HumanReviewComplete &&
            execution.PackageSupportReady &&
            execution.LowLaborReuseReady &&
            execution.ChecklistReady &&
            execution.AutomationReady &&
            execution.ExecutionReady &&
            execution.NativeExecutionReady &&
            execution.EpochTimingProviderOnly &&
            !execution.RequiresEpochTimingRequest &&
            !execution.CustomerVisible &&
            !execution.WebportalExportReady &&
            !execution.WorkshopCalendarOwnership &&
            !execution.MonitorWorkflowExposed &&
            !execution.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryExecutionReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryExecutionReceipt",
            execution.ExecutionId,
            execution.AutomationId,
            execution.ServiceRequestId,
            execution.ServiceLane,
            execution.PackageId,
            "package-delivery-execution",
            customerSafe ? "customer-safe-package-delivery-execution-ready" : "customer-safe-package-delivery-execution-blocked",
            "WORKSHOP prepared package delivery execution from reviewed automation without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution-control, or package-control records.",
            customerSafe
                ? "Package delivery execution is ready for this service path."
                : "Package delivery execution is waiting for a quality gate.",
            "Review the customer-safe package delivery execution status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            execution.EpochTimingProviderOnly,
            execution.WorkshopCalendarOwnership,
            execution.MonitorWorkflowExposed,
            execution.PaymentLiveEnabled,
            execution.OperatorReviewed,
            execution.AraReviewComplete,
            execution.HumanReviewComplete,
            execution.PackageSupportReady,
            execution.LowLaborReuseReady,
            execution.ChecklistReady,
            execution.AutomationReady,
            execution.ExecutionReady,
            execution.RequiresEpochTimingRequest,
            execution.NativeExecutionReady);
    }
}
