namespace Workshop.App;

public sealed record WorkshopAraMaterializationReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string MaterializationId,
    string ServiceRequestId,
    string RevenueOutcomeId,
    string DeliveryResultReceiptId,
    string ReviewStatusReceiptId,
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
    bool ReusableMethodReady,
    bool MaterialAssetReady,
    bool NativeExecutionReady)
{
    public static WorkshopAraMaterializationReceipt FromMaterialization(
        WorkshopAraMethodMaterializationRecord materialization,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-ara-materialization-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..73];
        bool customerSafe =
            materialization.CustomerSafeForReceipt &&
            materialization.OperatorReviewed &&
            materialization.AraReviewComplete &&
            materialization.HumanReviewComplete &&
            materialization.ReusableMethodReady &&
            materialization.MaterialAssetReady &&
            materialization.NativeExecutionReady &&
            materialization.EpochTimingProviderOnly &&
            !materialization.WorkshopCalendarOwnership &&
            !materialization.MonitorWorkflowExposed &&
            !materialization.PaymentLiveEnabled;

        return new WorkshopAraMaterializationReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.AraMaterializationReceipt",
            materialization.MaterializationId,
            materialization.ServiceRequestId,
            materialization.RevenueOutcomeId,
            materialization.DeliveryResultReceiptId,
            materialization.ReviewStatusReceiptId,
            "ara-method-materialization",
            customerSafe ? "customer-safe-ara-materialization-ready" : "customer-safe-ara-materialization-blocked",
            "WORKSHOP materialized a reviewed service method into reusable method and material records without exposing internal packet, queue, decision, or materialization controls.",
            customerSafe
                ? "Your reviewed service method and material plan is ready for delivery tracking."
                : "Your reviewed service method and material plan is waiting for a quality gate.",
            "Review the customer-safe delivery plan in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            materialization.EpochTimingProviderOnly,
            materialization.WorkshopCalendarOwnership,
            materialization.MonitorWorkflowExposed,
            materialization.PaymentLiveEnabled,
            materialization.OperatorReviewed,
            materialization.AraReviewComplete,
            materialization.HumanReviewComplete,
            materialization.ReusableMethodReady,
            materialization.MaterialAssetReady,
            materialization.NativeExecutionReady);
    }
}
