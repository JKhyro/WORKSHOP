namespace Workshop.App;

public sealed record WorkshopPackageDeliveryQualityOutcomeReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string OutcomeId,
    string ExecutionReceiptId,
    string FollowUpRenewalReceiptId,
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
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryQualityOutcomeReceipt FromOutcome(
        WorkshopPackageDeliveryQualityOutcomeRecord outcome,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-package-delivery-quality-outcome-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            outcome.CustomerSafeForReceipt &&
            outcome.OperatorReviewed &&
            outcome.AraReviewComplete &&
            outcome.HumanReviewComplete &&
            outcome.PackageSupportReady &&
            outcome.LowLaborReuseReady &&
            outcome.ChecklistReady &&
            outcome.AutomationReady &&
            outcome.ExecutionReady &&
            outcome.FollowUpReady &&
            outcome.RenewalReady &&
            outcome.QualityReviewReady &&
            outcome.OutcomeReady &&
            outcome.NativeExecutionReady &&
            outcome.EpochTimingProviderOnly &&
            !outcome.RequiresEpochTimingRequest &&
            !outcome.CustomerVisible &&
            !outcome.WebportalExportReady &&
            !outcome.WorkshopCalendarOwnership &&
            !outcome.MonitorWorkflowExposed &&
            !outcome.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryQualityOutcomeReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryQualityOutcomeReceipt",
            outcome.OutcomeId,
            outcome.ExecutionReceiptId,
            outcome.FollowUpRenewalReceiptId,
            outcome.ServiceRequestId,
            outcome.ServiceLane,
            outcome.PackageId,
            "package-delivery-quality-outcome",
            customerSafe ? "customer-safe-package-delivery-quality-outcome-ready" : "customer-safe-package-delivery-quality-outcome-blocked",
            "WORKSHOP prepared a package delivery quality and outcome loop from customer-safe execution and follow-up renewal receipts without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, or package-control records.",
            customerSafe
                ? "Package delivery quality and outcome review is ready for this service path."
                : "Package delivery quality and outcome review is waiting for a quality gate.",
            "Review the customer-safe quality/outcome status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            outcome.EpochTimingProviderOnly,
            outcome.WorkshopCalendarOwnership,
            outcome.MonitorWorkflowExposed,
            outcome.PaymentLiveEnabled,
            outcome.OperatorReviewed,
            outcome.AraReviewComplete,
            outcome.HumanReviewComplete,
            outcome.PackageSupportReady,
            outcome.LowLaborReuseReady,
            outcome.ChecklistReady,
            outcome.AutomationReady,
            outcome.ExecutionReady,
            outcome.FollowUpReady,
            outcome.RenewalReady,
            outcome.QualityReviewReady,
            outcome.OutcomeReady,
            outcome.RequiresEpochTimingRequest,
            outcome.NativeExecutionReady);
    }
}
