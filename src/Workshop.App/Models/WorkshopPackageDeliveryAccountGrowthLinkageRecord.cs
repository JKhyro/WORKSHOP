namespace Workshop.App;

public sealed record WorkshopPackageDeliveryAccountGrowthLinkageRecord(
    string LinkageId,
    string CreatedAtUtc,
    string SourceSurface,
    string QualityOutcomeReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string AccountGrowthPlanId,
    string RetentionSignalId,
    string ReferralSignalId,
    string ExpansionSignalId,
    string LinkageKind,
    string Status,
    string GrowthPath,
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
    public static WorkshopPackageDeliveryAccountGrowthLinkageRecord FromQualityOutcomeReceipt(
        WorkshopPackageDeliveryQualityOutcomeReceipt qualityOutcomeReceipt,
        DateTimeOffset createdAtUtc)
    {
        string linkageId = $"workshop-package-delivery-account-growth-linkage-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        string suffix = string.IsNullOrWhiteSpace(qualityOutcomeReceipt.ServiceRequestId)
            ? qualityOutcomeReceipt.PackageId
            : qualityOutcomeReceipt.ServiceRequestId;
        bool safeForAccountGrowth =
            qualityOutcomeReceipt.CustomerSafe &&
            qualityOutcomeReceipt.CustomerVisibleReceiptReady &&
            qualityOutcomeReceipt.WebportalExportReady &&
            qualityOutcomeReceipt.OperatorReviewed &&
            qualityOutcomeReceipt.AraReviewComplete &&
            qualityOutcomeReceipt.HumanReviewComplete &&
            qualityOutcomeReceipt.PackageSupportReady &&
            qualityOutcomeReceipt.LowLaborReuseReady &&
            qualityOutcomeReceipt.ChecklistReady &&
            qualityOutcomeReceipt.AutomationReady &&
            qualityOutcomeReceipt.ExecutionReady &&
            qualityOutcomeReceipt.FollowUpReady &&
            qualityOutcomeReceipt.RenewalReady &&
            qualityOutcomeReceipt.QualityReviewReady &&
            qualityOutcomeReceipt.OutcomeReady &&
            qualityOutcomeReceipt.NativeExecutionReady &&
            qualityOutcomeReceipt.EpochTimingProviderOnly &&
            !qualityOutcomeReceipt.RequiresEpochTimingRequest &&
            !qualityOutcomeReceipt.WorkshopCalendarOwnership &&
            !qualityOutcomeReceipt.MonitorWorkflowExposed &&
            !qualityOutcomeReceipt.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryAccountGrowthLinkageRecord(
            linkageId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryAccountGrowthLinkage",
            qualityOutcomeReceipt.ReceiptId,
            qualityOutcomeReceipt.ServiceRequestId,
            qualityOutcomeReceipt.ServiceLane,
            qualityOutcomeReceipt.PackageId,
            $"package-growth-plan-from-{suffix}",
            $"retention-signal-from-{suffix}",
            $"referral-signal-from-{suffix}",
            $"expansion-signal-from-{suffix}",
            "package-delivery-account-growth-linkage",
            safeForAccountGrowth ? "package-delivery-account-growth-ready" : "package-delivery-account-growth-blocked",
            "quality-outcome-retention-referral-expansion",
            safeForAccountGrowth
                ? "WORKSHOP has linked package delivery quality/outcome review to the next account-growth path. EPOCH remains timing-provider-only."
                : "WORKSHOP package delivery account-growth linkage is waiting for quality/outcome or boundary gates.",
            safeForAccountGrowth
                ? "Use this internal account-growth linkage to decide the next repeat-service, referral, or expansion path, then export only the customer-safe account-growth receipt."
                : "Resolve quality/outcome, review, or boundary blockers before account-growth linkage becomes customer-safe.",
            false,
            safeForAccountGrowth,
            false,
            qualityOutcomeReceipt.EpochTimingProviderOnly,
            qualityOutcomeReceipt.WorkshopCalendarOwnership,
            qualityOutcomeReceipt.MonitorWorkflowExposed,
            qualityOutcomeReceipt.PaymentLiveEnabled,
            qualityOutcomeReceipt.OperatorReviewed,
            qualityOutcomeReceipt.AraReviewComplete,
            qualityOutcomeReceipt.HumanReviewComplete,
            qualityOutcomeReceipt.PackageSupportReady,
            qualityOutcomeReceipt.LowLaborReuseReady,
            qualityOutcomeReceipt.ChecklistReady,
            qualityOutcomeReceipt.AutomationReady,
            qualityOutcomeReceipt.ExecutionReady,
            qualityOutcomeReceipt.FollowUpReady,
            qualityOutcomeReceipt.RenewalReady,
            qualityOutcomeReceipt.QualityReviewReady,
            qualityOutcomeReceipt.OutcomeReady,
            safeForAccountGrowth,
            safeForAccountGrowth,
            safeForAccountGrowth,
            safeForAccountGrowth,
            qualityOutcomeReceipt.RequiresEpochTimingRequest,
            qualityOutcomeReceipt.NativeExecutionReady);
    }
}
