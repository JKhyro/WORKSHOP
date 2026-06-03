namespace Workshop.App;

public sealed record WorkshopPackageDeliveryAccountGrowthReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string LinkageId,
    string QualityOutcomeReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string AccountGrowthPlanId,
    string RetentionSignalId,
    string ReferralSignalId,
    string ExpansionSignalId,
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
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryAccountGrowthReceipt FromLinkage(
        WorkshopPackageDeliveryAccountGrowthLinkageRecord linkage,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-package-delivery-account-growth-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            linkage.CustomerSafeForReceipt &&
            linkage.OperatorReviewed &&
            linkage.AraReviewComplete &&
            linkage.HumanReviewComplete &&
            linkage.PackageSupportReady &&
            linkage.LowLaborReuseReady &&
            linkage.ChecklistReady &&
            linkage.AutomationReady &&
            linkage.ExecutionReady &&
            linkage.FollowUpReady &&
            linkage.RenewalReady &&
            linkage.QualityReviewReady &&
            linkage.OutcomeReady &&
            linkage.AccountGrowthReady &&
            linkage.RetentionReady &&
            linkage.ReferralReady &&
            linkage.ExpansionReady &&
            linkage.NativeExecutionReady &&
            linkage.EpochTimingProviderOnly &&
            !linkage.RequiresEpochTimingRequest &&
            !linkage.CustomerVisible &&
            !linkage.WebportalExportReady &&
            !linkage.WorkshopCalendarOwnership &&
            !linkage.MonitorWorkflowExposed &&
            !linkage.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryAccountGrowthReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryAccountGrowthReceipt",
            linkage.LinkageId,
            linkage.QualityOutcomeReceiptId,
            linkage.ServiceRequestId,
            linkage.ServiceLane,
            linkage.PackageId,
            linkage.AccountGrowthPlanId,
            linkage.RetentionSignalId,
            linkage.ReferralSignalId,
            linkage.ExpansionSignalId,
            "package-delivery-account-growth",
            customerSafe ? "customer-safe-package-delivery-account-growth-ready" : "customer-safe-package-delivery-account-growth-blocked",
            "WORKSHOP prepared a package delivery account-growth loop from a customer-safe quality/outcome receipt without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, account-growth-control, or package-control records.",
            customerSafe
                ? "Package delivery account-growth follow-up is ready for this service path."
                : "Package delivery account-growth follow-up is waiting for a growth gate.",
            "Review the customer-safe account-growth status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            linkage.EpochTimingProviderOnly,
            linkage.WorkshopCalendarOwnership,
            linkage.MonitorWorkflowExposed,
            linkage.PaymentLiveEnabled,
            linkage.OperatorReviewed,
            linkage.AraReviewComplete,
            linkage.HumanReviewComplete,
            linkage.PackageSupportReady,
            linkage.LowLaborReuseReady,
            linkage.ChecklistReady,
            linkage.AutomationReady,
            linkage.ExecutionReady,
            linkage.FollowUpReady,
            linkage.RenewalReady,
            linkage.QualityReviewReady,
            linkage.OutcomeReady,
            linkage.AccountGrowthReady,
            linkage.RetentionReady,
            linkage.ReferralReady,
            linkage.ExpansionReady,
            linkage.RequiresEpochTimingRequest,
            linkage.NativeExecutionReady);
    }
}
