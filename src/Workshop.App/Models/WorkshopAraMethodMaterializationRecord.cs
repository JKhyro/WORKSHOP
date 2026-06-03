namespace Workshop.App;

public sealed record WorkshopAraMethodMaterializationRecord(
    string MaterializationId,
    string CreatedAtUtc,
    string SourceSurface,
    string QueueId,
    string DecisionId,
    string ServiceRequestId,
    string RevenueOutcomeId,
    string DeliveryResultReceiptId,
    string ReviewStatusReceiptId,
    string MaterializationKind,
    string Status,
    string MethodName,
    string MaterialAssetId,
    string ReusableMethodStatus,
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
    bool ReusableMethodReady,
    bool MaterialAssetReady,
    bool NativeExecutionReady)
{
    public static WorkshopAraMethodMaterializationRecord FromApprovedReview(
        WorkshopAraOperatorReviewDecision decision,
        WorkshopAraReviewStatusReceipt statusReceipt,
        DateTimeOffset createdAtUtc)
    {
        string materializationId = $"workshop-ara-method-materialization-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForMaterialization =
            decision.Approved &&
            decision.CustomerSafeForReceipt &&
            decision.OperatorReviewed &&
            decision.AraReviewComplete &&
            statusReceipt.CustomerSafe &&
            statusReceipt.CustomerVisibleReceiptReady &&
            statusReceipt.WebportalExportReady &&
            statusReceipt.AraReviewComplete &&
            decision.NativeExecutionReady &&
            statusReceipt.NativeExecutionReady &&
            decision.EpochTimingProviderOnly &&
            statusReceipt.EpochTimingProviderOnly &&
            !decision.MonitorWorkflowExposed &&
            !statusReceipt.MonitorWorkflowExposed &&
            !decision.PaymentLiveEnabled &&
            !statusReceipt.PaymentLiveEnabled;

        return new WorkshopAraMethodMaterializationRecord(
            materializationId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.AraMethodMaterialization",
            decision.QueueId,
            decision.DecisionId,
            decision.ServiceRequestId,
            decision.RevenueOutcomeId,
            decision.DeliveryResultReceiptId,
            statusReceipt.ReceiptId,
            "ara-method-materialization",
            safeForMaterialization ? "ara-materialization-ready" : "ara-materialization-blocked",
            "Reviewed service-delivery method pack",
            $"workshop-material-method-{decision.ServiceRequestId}",
            safeForMaterialization
                ? "reviewed-method-and-material-ready"
                : "reviewed-method-and-material-held",
            safeForMaterialization
                ? "WORKSHOP has materialized the reviewed service method into reusable internal delivery assets. Customer-facing output remains receipt-gated."
                : "WORKSHOP method materialization is held until review, receipt, and boundary gates are complete.",
            safeForMaterialization
                ? "Attach the reviewed method to reusable material and service assets before customer-visible delivery proceeds."
                : "Resolve review or boundary blockers before materializing this ARA-assisted method.",
            false,
            safeForMaterialization,
            false,
            decision.EpochTimingProviderOnly && statusReceipt.EpochTimingProviderOnly,
            false,
            decision.MonitorWorkflowExposed || statusReceipt.MonitorWorkflowExposed,
            decision.PaymentLiveEnabled || statusReceipt.PaymentLiveEnabled,
            decision.OperatorReviewed && statusReceipt.OperatorReviewed,
            decision.AraReviewComplete && statusReceipt.AraReviewComplete,
            decision.OperatorReviewed && statusReceipt.OperatorReviewed,
            safeForMaterialization,
            safeForMaterialization,
            decision.NativeExecutionReady && statusReceipt.NativeExecutionReady);
    }
}
