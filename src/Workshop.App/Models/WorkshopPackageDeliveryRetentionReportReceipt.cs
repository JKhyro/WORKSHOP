namespace Workshop.App;

public sealed record WorkshopPackageDeliveryRetentionReportReceipt(
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
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryRetentionReportReceipt FromReport(
        WorkshopPackageDeliveryRetentionReportRecord report,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-package-delivery-retention-report-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            report.CustomerSafeForReceipt &&
            report.OperatorReviewed &&
            report.AraReviewComplete &&
            report.HumanReviewComplete &&
            report.PackageSupportReady &&
            report.LowLaborReuseReady &&
            report.ChecklistReady &&
            report.AutomationReady &&
            report.ExecutionReady &&
            report.FollowUpReady &&
            report.RenewalReady &&
            report.QualityReviewReady &&
            report.OutcomeReady &&
            report.AccountGrowthReady &&
            report.RetentionReady &&
            report.ReferralReady &&
            report.ExpansionReady &&
            report.QualityOutcomeReceiptMatched &&
            report.RetentionReportingReady &&
            report.NativeExecutionReady &&
            report.EpochTimingProviderOnly &&
            !report.RequiresEpochTimingRequest &&
            !report.CustomerVisible &&
            !report.WebportalExportReady &&
            !report.WorkshopCalendarOwnership &&
            !report.MonitorWorkflowExposed &&
            !report.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryRetentionReportReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryRetentionReportingReceipt",
            report.ServiceRequestId,
            report.ServiceLane,
            report.PackageId,
            "package-delivery-retention-report",
            customerSafe ? "customer-safe-package-delivery-retention-report-ready" : "customer-safe-package-delivery-retention-report-blocked",
            "WORKSHOP prepared a package delivery retention report from customer-safe quality/outcome and account-growth receipts without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, account-growth-control, retention-reporting-control, or package-control records.",
            customerSafe
                ? "Package delivery retention reporting is ready for this service path."
                : "Package delivery retention reporting is waiting for a reporting gate.",
            "Review the customer-safe retention report in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            report.EpochTimingProviderOnly,
            report.WorkshopCalendarOwnership,
            report.MonitorWorkflowExposed,
            report.PaymentLiveEnabled,
            report.OperatorReviewed,
            report.AraReviewComplete,
            report.HumanReviewComplete,
            report.PackageSupportReady,
            report.LowLaborReuseReady,
            report.ChecklistReady,
            report.AutomationReady,
            report.ExecutionReady,
            report.FollowUpReady,
            report.RenewalReady,
            report.QualityReviewReady,
            report.OutcomeReady,
            report.AccountGrowthReady,
            report.RetentionReady,
            report.ReferralReady,
            report.ExpansionReady,
            report.QualityOutcomeReceiptMatched,
            report.RetentionReportingReady,
            report.RequiresEpochTimingRequest,
            report.NativeExecutionReady);
    }
}
