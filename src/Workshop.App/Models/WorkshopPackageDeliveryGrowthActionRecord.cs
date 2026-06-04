namespace Workshop.App;

public sealed record WorkshopPackageDeliveryGrowthActionRecord(
    string ActionId,
    string CreatedAtUtc,
    string SourceSurface,
    string RetentionReportId,
    string RetentionReportReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string AccountGrowthPlanId,
    string RetentionSignalId,
    string ReferralSignalId,
    string ExpansionSignalId,
    string ActionKind,
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
    bool QualityOutcomeReceiptMatched,
    bool RetentionReportingReady,
    bool GrowthActionReady,
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryGrowthActionRecord FromRetentionReport(
        WorkshopPackageDeliveryRetentionReportRecord retentionReport,
        WorkshopPackageDeliveryRetentionReportReceipt retentionReportReceipt,
        DateTimeOffset createdAtUtc)
    {
        string actionId = $"workshop-package-delivery-growth-action-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool receiptsMatch =
            retentionReport.ServiceRequestId == retentionReportReceipt.ServiceRequestId &&
            retentionReport.ServiceLane == retentionReportReceipt.ServiceLane &&
            retentionReport.PackageId == retentionReportReceipt.PackageId &&
            retentionReport.RetentionReportingReady &&
            retentionReportReceipt.RetentionReportingReady;
        bool safeForAction =
            receiptsMatch &&
            retentionReport.CustomerSafeForReceipt &&
            !retentionReport.CustomerVisible &&
            !retentionReport.WebportalExportReady &&
            retentionReportReceipt.CustomerSafe &&
            retentionReportReceipt.CustomerVisibleReceiptReady &&
            retentionReportReceipt.WebportalExportReady &&
            retentionReport.OperatorReviewed &&
            retentionReport.AraReviewComplete &&
            retentionReport.HumanReviewComplete &&
            retentionReport.PackageSupportReady &&
            retentionReport.LowLaborReuseReady &&
            retentionReport.ChecklistReady &&
            retentionReport.AutomationReady &&
            retentionReport.ExecutionReady &&
            retentionReport.FollowUpReady &&
            retentionReport.RenewalReady &&
            retentionReport.QualityReviewReady &&
            retentionReport.OutcomeReady &&
            retentionReport.AccountGrowthReady &&
            retentionReport.RetentionReady &&
            retentionReport.ReferralReady &&
            retentionReport.ExpansionReady &&
            retentionReport.QualityOutcomeReceiptMatched &&
            retentionReport.RetentionReportingReady &&
            retentionReport.NativeExecutionReady &&
            retentionReport.EpochTimingProviderOnly &&
            !retentionReport.RequiresEpochTimingRequest &&
            !retentionReport.WorkshopCalendarOwnership &&
            !retentionReport.MonitorWorkflowExposed &&
            !retentionReport.PaymentLiveEnabled &&
            retentionReportReceipt.OperatorReviewed &&
            retentionReportReceipt.AraReviewComplete &&
            retentionReportReceipt.HumanReviewComplete &&
            retentionReportReceipt.PackageSupportReady &&
            retentionReportReceipt.LowLaborReuseReady &&
            retentionReportReceipt.ChecklistReady &&
            retentionReportReceipt.AutomationReady &&
            retentionReportReceipt.ExecutionReady &&
            retentionReportReceipt.FollowUpReady &&
            retentionReportReceipt.RenewalReady &&
            retentionReportReceipt.QualityReviewReady &&
            retentionReportReceipt.OutcomeReady &&
            retentionReportReceipt.AccountGrowthReady &&
            retentionReportReceipt.RetentionReady &&
            retentionReportReceipt.ReferralReady &&
            retentionReportReceipt.ExpansionReady &&
            retentionReportReceipt.QualityOutcomeReceiptMatched &&
            retentionReportReceipt.NativeExecutionReady &&
            retentionReportReceipt.EpochTimingProviderOnly &&
            !retentionReportReceipt.RequiresEpochTimingRequest &&
            !retentionReportReceipt.WorkshopCalendarOwnership &&
            !retentionReportReceipt.MonitorWorkflowExposed &&
            !retentionReportReceipt.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryGrowthActionRecord(
            actionId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryGrowthAction",
            retentionReport.ReportId,
            retentionReportReceipt.ReceiptId,
            retentionReport.ServiceRequestId,
            retentionReport.ServiceLane,
            retentionReport.PackageId,
            retentionReport.AccountGrowthPlanId,
            retentionReport.RetentionSignalId,
            retentionReport.ReferralSignalId,
            retentionReport.ExpansionSignalId,
            "package-delivery-growth-action",
            safeForAction ? "package-delivery-growth-action-ready" : "package-delivery-growth-action-blocked",
            "retention-report-repeat-referral-expansion-action",
            safeForAction
                ? "WORKSHOP has prepared the repeat-service, referral, and expansion action path from retention reporting. EPOCH remains timing-provider-only."
                : "WORKSHOP package delivery growth action is waiting for customer-safe retention reporting or boundary gates.",
            safeForAction
                ? "Choose the next repeat-service, referral, or expansion action inside WORKSHOP, then export only the customer-safe growth-action receipt."
                : "Resolve retention-reporting, review, or boundary blockers before creating a customer-safe growth-action receipt.",
            false,
            safeForAction,
            false,
            retentionReport.EpochTimingProviderOnly && retentionReportReceipt.EpochTimingProviderOnly,
            retentionReport.WorkshopCalendarOwnership || retentionReportReceipt.WorkshopCalendarOwnership,
            retentionReport.MonitorWorkflowExposed || retentionReportReceipt.MonitorWorkflowExposed,
            retentionReport.PaymentLiveEnabled || retentionReportReceipt.PaymentLiveEnabled,
            retentionReport.OperatorReviewed && retentionReportReceipt.OperatorReviewed,
            retentionReport.AraReviewComplete && retentionReportReceipt.AraReviewComplete,
            retentionReport.HumanReviewComplete && retentionReportReceipt.HumanReviewComplete,
            retentionReport.PackageSupportReady && retentionReportReceipt.PackageSupportReady,
            retentionReport.LowLaborReuseReady && retentionReportReceipt.LowLaborReuseReady,
            retentionReport.ChecklistReady && retentionReportReceipt.ChecklistReady,
            retentionReport.AutomationReady && retentionReportReceipt.AutomationReady,
            retentionReport.ExecutionReady && retentionReportReceipt.ExecutionReady,
            retentionReport.FollowUpReady && retentionReportReceipt.FollowUpReady,
            retentionReport.RenewalReady && retentionReportReceipt.RenewalReady,
            retentionReport.QualityReviewReady && retentionReportReceipt.QualityReviewReady,
            retentionReport.OutcomeReady && retentionReportReceipt.OutcomeReady,
            retentionReport.AccountGrowthReady && retentionReportReceipt.AccountGrowthReady,
            retentionReport.RetentionReady && retentionReportReceipt.RetentionReady,
            retentionReport.ReferralReady && retentionReportReceipt.ReferralReady,
            retentionReport.ExpansionReady && retentionReportReceipt.ExpansionReady,
            retentionReport.QualityOutcomeReceiptMatched && retentionReportReceipt.QualityOutcomeReceiptMatched,
            retentionReport.RetentionReportingReady && retentionReportReceipt.RetentionReportingReady,
            safeForAction,
            retentionReport.RequiresEpochTimingRequest || retentionReportReceipt.RequiresEpochTimingRequest,
            retentionReport.NativeExecutionReady && retentionReportReceipt.NativeExecutionReady);
    }
}
