namespace Workshop.App;

public sealed record WorkshopPackageDeliveryQualityOutcomeRecord(
    string OutcomeId,
    string CreatedAtUtc,
    string SourceSurface,
    string ExecutionReceiptId,
    string FollowUpRenewalReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string LoopKind,
    string Status,
    string QualityReviewPath,
    string OutcomePath,
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
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryQualityOutcomeRecord FromReceipts(
        WorkshopPackageDeliveryExecutionReceipt executionReceipt,
        WorkshopPackageDeliveryFollowUpRenewalReceipt followUpReceipt,
        DateTimeOffset createdAtUtc)
    {
        string outcomeId = $"workshop-package-delivery-quality-outcome-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool receiptsMatch =
            executionReceipt.ServiceRequestId == followUpReceipt.ServiceRequestId &&
            executionReceipt.PackageId == followUpReceipt.PackageId &&
            executionReceipt.ServiceLane == followUpReceipt.ServiceLane;
        bool safeForQualityOutcome =
            receiptsMatch &&
            executionReceipt.CustomerSafe &&
            executionReceipt.CustomerVisibleReceiptReady &&
            executionReceipt.WebportalExportReady &&
            executionReceipt.OperatorReviewed &&
            executionReceipt.AraReviewComplete &&
            executionReceipt.HumanReviewComplete &&
            executionReceipt.PackageSupportReady &&
            executionReceipt.LowLaborReuseReady &&
            executionReceipt.ChecklistReady &&
            executionReceipt.AutomationReady &&
            executionReceipt.ExecutionReady &&
            executionReceipt.NativeExecutionReady &&
            executionReceipt.EpochTimingProviderOnly &&
            !executionReceipt.RequiresEpochTimingRequest &&
            !executionReceipt.WorkshopCalendarOwnership &&
            !executionReceipt.MonitorWorkflowExposed &&
            !executionReceipt.PaymentLiveEnabled &&
            followUpReceipt.CustomerSafe &&
            followUpReceipt.CustomerVisibleReceiptReady &&
            followUpReceipt.WebportalExportReady &&
            followUpReceipt.OperatorReviewed &&
            followUpReceipt.AraReviewComplete &&
            followUpReceipt.HumanReviewComplete &&
            followUpReceipt.PackageSupportReady &&
            followUpReceipt.LowLaborReuseReady &&
            followUpReceipt.ChecklistReady &&
            followUpReceipt.AutomationReady &&
            followUpReceipt.ExecutionReady &&
            followUpReceipt.FollowUpReady &&
            followUpReceipt.RenewalReady &&
            followUpReceipt.NativeExecutionReady &&
            followUpReceipt.EpochTimingProviderOnly &&
            !followUpReceipt.RequiresEpochTimingRequest &&
            !followUpReceipt.WorkshopCalendarOwnership &&
            !followUpReceipt.MonitorWorkflowExposed &&
            !followUpReceipt.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryQualityOutcomeRecord(
            outcomeId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryQualityOutcome",
            executionReceipt.ReceiptId,
            followUpReceipt.ReceiptId,
            executionReceipt.ServiceRequestId,
            executionReceipt.ServiceLane,
            executionReceipt.PackageId,
            "package-delivery-quality-outcome",
            safeForQualityOutcome ? "package-delivery-quality-outcome-ready" : "package-delivery-quality-outcome-blocked",
            $"Review delivery quality for {executionReceipt.PackageId}, compare execution and follow-up receipts, and keep the internal outcome score inside WORKSHOP.",
            "Prepare customer-safe outcome guidance, renewal signal, and next service recommendation without exposing internal quality-control records.",
            safeForQualityOutcome
                ? "WORKSHOP has prepared delivery quality and outcome review for this package path. EPOCH remains timing-provider-only."
                : "WORKSHOP package delivery quality and outcome review is waiting for execution, follow-up, review, or boundary gates.",
            safeForQualityOutcome
                ? "Use this internal quality/outcome record to decide the next service improvement, then export only the customer-safe quality outcome receipt."
                : "Resolve execution, follow-up, review, or boundary blockers before quality and outcome status becomes customer-safe.",
            false,
            safeForQualityOutcome,
            false,
            executionReceipt.EpochTimingProviderOnly && followUpReceipt.EpochTimingProviderOnly,
            false,
            executionReceipt.MonitorWorkflowExposed || followUpReceipt.MonitorWorkflowExposed,
            executionReceipt.PaymentLiveEnabled || followUpReceipt.PaymentLiveEnabled,
            executionReceipt.OperatorReviewed && followUpReceipt.OperatorReviewed,
            executionReceipt.AraReviewComplete && followUpReceipt.AraReviewComplete,
            executionReceipt.HumanReviewComplete && followUpReceipt.HumanReviewComplete,
            executionReceipt.PackageSupportReady && followUpReceipt.PackageSupportReady,
            executionReceipt.LowLaborReuseReady && followUpReceipt.LowLaborReuseReady,
            executionReceipt.ChecklistReady && followUpReceipt.ChecklistReady,
            executionReceipt.AutomationReady && followUpReceipt.AutomationReady,
            executionReceipt.ExecutionReady && followUpReceipt.ExecutionReady,
            followUpReceipt.FollowUpReady,
            followUpReceipt.RenewalReady,
            safeForQualityOutcome,
            safeForQualityOutcome,
            false,
            executionReceipt.NativeExecutionReady && followUpReceipt.NativeExecutionReady);
    }
}
