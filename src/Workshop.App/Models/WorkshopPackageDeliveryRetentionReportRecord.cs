namespace Workshop.App;

public sealed record WorkshopPackageDeliveryRetentionReportRecord(
    string ReportId,
    string CreatedAtUtc,
    string SourceSurface,
    string AccountGrowthReceiptId,
    string QualityOutcomeReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string AccountGrowthPlanId,
    string RetentionSignalId,
    string ReferralSignalId,
    string ExpansionSignalId,
    string ReportKind,
    string Status,
    string ReportingPath,
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
    bool QualityOutcomeReceiptMatched,
    bool RetentionReportingReady,
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryRetentionReportRecord FromReceipts(
        WorkshopPackageDeliveryAccountGrowthLinkageRecord accountGrowthLinkage,
        WorkshopPackageDeliveryAccountGrowthReceipt accountGrowthReceipt,
        WorkshopPackageDeliveryQualityOutcomeReceipt qualityOutcomeReceipt,
        DateTimeOffset createdAtUtc)
    {
        string reportId = $"workshop-package-delivery-retention-report-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool receiptsMatch =
            accountGrowthLinkage.QualityOutcomeReceiptId == qualityOutcomeReceipt.ReceiptId &&
            accountGrowthLinkage.ServiceRequestId == accountGrowthReceipt.ServiceRequestId &&
            accountGrowthLinkage.ServiceLane == accountGrowthReceipt.ServiceLane &&
            accountGrowthLinkage.PackageId == accountGrowthReceipt.PackageId &&
            accountGrowthReceipt.ServiceRequestId == qualityOutcomeReceipt.ServiceRequestId &&
            accountGrowthReceipt.ServiceLane == qualityOutcomeReceipt.ServiceLane &&
            accountGrowthReceipt.PackageId == qualityOutcomeReceipt.PackageId;
        bool safeForReport =
            receiptsMatch &&
            accountGrowthReceipt.CustomerSafe &&
            accountGrowthReceipt.CustomerVisibleReceiptReady &&
            accountGrowthReceipt.WebportalExportReady &&
            accountGrowthReceipt.OperatorReviewed &&
            accountGrowthReceipt.AraReviewComplete &&
            accountGrowthReceipt.HumanReviewComplete &&
            accountGrowthReceipt.PackageSupportReady &&
            accountGrowthReceipt.LowLaborReuseReady &&
            accountGrowthReceipt.ChecklistReady &&
            accountGrowthReceipt.AutomationReady &&
            accountGrowthReceipt.ExecutionReady &&
            accountGrowthReceipt.FollowUpReady &&
            accountGrowthReceipt.RenewalReady &&
            accountGrowthReceipt.QualityReviewReady &&
            accountGrowthReceipt.OutcomeReady &&
            accountGrowthReceipt.AccountGrowthReady &&
            accountGrowthReceipt.RetentionReady &&
            accountGrowthReceipt.ReferralReady &&
            accountGrowthReceipt.ExpansionReady &&
            accountGrowthReceipt.NativeExecutionReady &&
            accountGrowthReceipt.EpochTimingProviderOnly &&
            !accountGrowthReceipt.RequiresEpochTimingRequest &&
            !accountGrowthReceipt.WorkshopCalendarOwnership &&
            !accountGrowthReceipt.MonitorWorkflowExposed &&
            !accountGrowthReceipt.PaymentLiveEnabled &&
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

        return new WorkshopPackageDeliveryRetentionReportRecord(
            reportId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryRetentionReporting",
            accountGrowthReceipt.ReceiptId,
            qualityOutcomeReceipt.ReceiptId,
            accountGrowthReceipt.ServiceRequestId,
            accountGrowthReceipt.ServiceLane,
            accountGrowthReceipt.PackageId,
            accountGrowthLinkage.AccountGrowthPlanId,
            accountGrowthLinkage.RetentionSignalId,
            accountGrowthLinkage.ReferralSignalId,
            accountGrowthLinkage.ExpansionSignalId,
            "package-delivery-retention-reporting",
            safeForReport ? "package-delivery-retention-reporting-ready" : "package-delivery-retention-reporting-blocked",
            "quality-outcome-account-growth-retention-reporting",
            safeForReport
                ? "WORKSHOP has prepared customer-safe retention reporting from account-growth and quality/outcome receipts. EPOCH remains timing-provider-only."
                : "WORKSHOP package delivery retention reporting is waiting for matched quality/outcome, account-growth, review, or boundary gates.",
            safeForReport
                ? "Use this internal retention report to decide the repeat-service, referral, or expansion report, then export only the customer-safe retention-report receipt."
                : "Resolve account-growth, quality/outcome, review, or boundary blockers before retention reporting becomes customer-safe.",
            false,
            safeForReport,
            false,
            accountGrowthReceipt.EpochTimingProviderOnly && qualityOutcomeReceipt.EpochTimingProviderOnly,
            accountGrowthReceipt.WorkshopCalendarOwnership || qualityOutcomeReceipt.WorkshopCalendarOwnership,
            accountGrowthReceipt.MonitorWorkflowExposed || qualityOutcomeReceipt.MonitorWorkflowExposed,
            accountGrowthReceipt.PaymentLiveEnabled || qualityOutcomeReceipt.PaymentLiveEnabled,
            accountGrowthReceipt.OperatorReviewed && qualityOutcomeReceipt.OperatorReviewed,
            accountGrowthReceipt.AraReviewComplete && qualityOutcomeReceipt.AraReviewComplete,
            accountGrowthReceipt.HumanReviewComplete && qualityOutcomeReceipt.HumanReviewComplete,
            accountGrowthReceipt.PackageSupportReady && qualityOutcomeReceipt.PackageSupportReady,
            accountGrowthReceipt.LowLaborReuseReady && qualityOutcomeReceipt.LowLaborReuseReady,
            accountGrowthReceipt.ChecklistReady && qualityOutcomeReceipt.ChecklistReady,
            accountGrowthReceipt.AutomationReady && qualityOutcomeReceipt.AutomationReady,
            accountGrowthReceipt.ExecutionReady && qualityOutcomeReceipt.ExecutionReady,
            accountGrowthReceipt.FollowUpReady && qualityOutcomeReceipt.FollowUpReady,
            accountGrowthReceipt.RenewalReady && qualityOutcomeReceipt.RenewalReady,
            accountGrowthReceipt.QualityReviewReady && qualityOutcomeReceipt.QualityReviewReady,
            accountGrowthReceipt.OutcomeReady && qualityOutcomeReceipt.OutcomeReady,
            accountGrowthReceipt.AccountGrowthReady,
            accountGrowthReceipt.RetentionReady,
            accountGrowthReceipt.ReferralReady,
            accountGrowthReceipt.ExpansionReady,
            receiptsMatch,
            safeForReport,
            accountGrowthReceipt.RequiresEpochTimingRequest || qualityOutcomeReceipt.RequiresEpochTimingRequest,
            accountGrowthReceipt.NativeExecutionReady && qualityOutcomeReceipt.NativeExecutionReady);
    }
}
