namespace Workshop.App;

public sealed record WorkshopPackageDeliveryGrowthActionReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
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
    bool FollowUpReady,
    bool RenewalReady,
    bool QualityReviewReady,
    bool OutcomeReady,
    bool AccountGrowthReady,
    bool RetentionReady,
    bool ReferralReady,
    bool ExpansionReady,
    bool QualityOutcomeReceiptMatched,
    bool RetentionReportingReady,
    bool GrowthActionReady,
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryGrowthActionReceipt FromAction(
        WorkshopPackageDeliveryGrowthActionRecord action,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-package-delivery-growth-action-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            action.CustomerSafeForReceipt &&
            action.OperatorReviewed &&
            action.AraReviewComplete &&
            action.HumanReviewComplete &&
            action.PackageSupportReady &&
            action.LowLaborReuseReady &&
            action.ChecklistReady &&
            action.AutomationReady &&
            action.ExecutionReady &&
            action.FollowUpReady &&
            action.RenewalReady &&
            action.QualityReviewReady &&
            action.OutcomeReady &&
            action.AccountGrowthReady &&
            action.RetentionReady &&
            action.ReferralReady &&
            action.ExpansionReady &&
            action.QualityOutcomeReceiptMatched &&
            action.RetentionReportingReady &&
            action.GrowthActionReady &&
            action.NativeExecutionReady &&
            action.EpochTimingProviderOnly &&
            !action.RequiresEpochTimingRequest &&
            !action.CustomerVisible &&
            !action.WebportalExportReady &&
            !action.WorkshopCalendarOwnership &&
            !action.MonitorWorkflowExposed &&
            !action.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryGrowthActionReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryGrowthActionReceipt",
            action.ServiceRequestId,
            action.ServiceLane,
            action.PackageId,
            "package-delivery-growth-action",
            customerSafe ? "customer-safe-package-delivery-growth-action-ready" : "customer-safe-package-delivery-growth-action-blocked",
            "WORKSHOP prepared a customer-safe growth action receipt from retention reporting without exposing internal report, account-growth, quality/outcome, signal, packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, retention-reporting-control, growth-action-control, or package-control records.",
            customerSafe
                ? "A repeat-service, referral, or expansion action is ready for this service path."
                : "The package delivery growth action is waiting for a review or safety gate.",
            "Review the customer-safe growth action in WORKSHOP. Request EPOCH timing only if another appointment, deadline, or service window is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            action.EpochTimingProviderOnly,
            action.WorkshopCalendarOwnership,
            action.MonitorWorkflowExposed,
            action.PaymentLiveEnabled,
            action.OperatorReviewed,
            action.AraReviewComplete,
            action.HumanReviewComplete,
            action.PackageSupportReady,
            action.LowLaborReuseReady,
            action.ChecklistReady,
            action.AutomationReady,
            action.ExecutionReady,
            action.FollowUpReady,
            action.RenewalReady,
            action.QualityReviewReady,
            action.OutcomeReady,
            action.AccountGrowthReady,
            action.RetentionReady,
            action.ReferralReady,
            action.ExpansionReady,
            action.QualityOutcomeReceiptMatched,
            action.RetentionReportingReady,
            action.GrowthActionReady,
            action.RequiresEpochTimingRequest,
            action.NativeExecutionReady);
    }
}
