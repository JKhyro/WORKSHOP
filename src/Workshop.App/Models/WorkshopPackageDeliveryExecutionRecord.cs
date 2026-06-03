namespace Workshop.App;

public sealed record WorkshopPackageDeliveryExecutionRecord(
    string ExecutionId,
    string CreatedAtUtc,
    string SourceSurface,
    string AutomationId,
    string ChecklistId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string ExecutionKind,
    string Status,
    string DeliveryExecutionPlan,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
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
    public static WorkshopPackageDeliveryExecutionRecord FromAutomation(
        WorkshopPackageDeliveryChecklistAutomationRecord automation,
        DateTimeOffset createdAtUtc)
    {
        string executionId = $"workshop-package-delivery-execution-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..74];
        bool safeForExecution =
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

        return new WorkshopPackageDeliveryExecutionRecord(
            executionId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryExecution",
            automation.AutomationId,
            automation.ChecklistId,
            automation.ServiceRequestId,
            automation.ServiceLane,
            automation.PackageId,
            "package-delivery-execution",
            safeForExecution ? "package-delivery-execution-ready" : "package-delivery-execution-blocked",
            $"Execute the {automation.PackageId} package delivery path from reviewed automation with operator approval before any customer-visible output.",
            safeForExecution
                ? "WORKSHOP has prepared repeatable package delivery execution for this service path. EPOCH remains timing-provider-only."
                : "WORKSHOP package delivery execution is waiting for automation, review, or boundary gates.",
            safeForExecution
                ? "Use this execution record to complete the next package delivery step, then export only the customer-safe execution receipt."
                : "Resolve automation, review, or boundary blockers before execution status becomes customer-safe.",
            false,
            safeForExecution,
            false,
            automation.EpochTimingProviderOnly,
            false,
            automation.MonitorWorkflowExposed,
            automation.PaymentLiveEnabled,
            automation.OperatorReviewed,
            automation.AraReviewComplete,
            automation.HumanReviewComplete,
            automation.PackageSupportReady,
            automation.LowLaborReuseReady,
            automation.ChecklistReady,
            automation.AutomationReady,
            safeForExecution,
            false,
            automation.NativeExecutionReady);
    }
}
