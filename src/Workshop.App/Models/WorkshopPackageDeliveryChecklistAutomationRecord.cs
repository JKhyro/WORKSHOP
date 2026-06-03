namespace Workshop.App;

public sealed record WorkshopPackageDeliveryChecklistAutomationRecord(
    string AutomationId,
    string CreatedAtUtc,
    string SourceSurface,
    string ChecklistId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string AutomationKind,
    string Status,
    string RepeatDeliveryPlan,
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
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryChecklistAutomationRecord FromChecklist(
        WorkshopPackageDeliveryChecklistRecord checklist,
        DateTimeOffset createdAtUtc)
    {
        string automationId = $"workshop-package-checklist-automation-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..74];
        bool safeForAutomation =
            checklist.CustomerSafeForReceipt &&
            checklist.OperatorReviewed &&
            checklist.AraReviewComplete &&
            checklist.HumanReviewComplete &&
            checklist.PackageSupportReady &&
            checklist.LowLaborReuseReady &&
            checklist.ChecklistReady &&
            checklist.NativeExecutionReady &&
            checklist.EpochTimingProviderOnly &&
            !checklist.CustomerVisible &&
            !checklist.WebportalExportReady &&
            !checklist.WorkshopCalendarOwnership &&
            !checklist.MonitorWorkflowExposed &&
            !checklist.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryChecklistAutomationRecord(
            automationId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryChecklistAutomation",
            checklist.ChecklistId,
            checklist.ServiceRequestId,
            checklist.ServiceLane,
            checklist.PackageId,
            "package-delivery-checklist-automation",
            safeForAutomation ? "package-delivery-checklist-automation-ready" : "package-delivery-checklist-automation-blocked",
            $"Repeat delivery can reuse the {checklist.PackageId} checklist with operator review before customer-visible output.",
            safeForAutomation
                ? "WORKSHOP has prepared repeatable package delivery automation for this service path. EPOCH remains timing-provider-only."
                : "WORKSHOP package delivery automation is waiting for checklist, review, or boundary gates.",
            safeForAutomation
                ? "Use this automation to prepare the next package delivery draft, then export only the customer-safe automation receipt."
                : "Resolve checklist, review, or boundary blockers before automation status becomes customer-safe.",
            false,
            safeForAutomation,
            false,
            checklist.EpochTimingProviderOnly,
            false,
            checklist.MonitorWorkflowExposed,
            checklist.PaymentLiveEnabled,
            checklist.OperatorReviewed,
            checklist.AraReviewComplete,
            checklist.HumanReviewComplete,
            checklist.PackageSupportReady,
            checklist.LowLaborReuseReady,
            checklist.ChecklistReady,
            safeForAutomation,
            false,
            checklist.NativeExecutionReady);
    }
}
