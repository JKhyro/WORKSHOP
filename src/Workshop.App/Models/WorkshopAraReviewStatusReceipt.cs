namespace Workshop.App;

public sealed record WorkshopAraReviewStatusReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string QueueId,
    string DecisionId,
    string ServiceRequestId,
    string RevenueOutcomeId,
    string DeliveryResultReceiptId,
    string Kind,
    string Status,
    string Summary,
    string CustomerSafeMessage,
    string NextAction,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool OperatorReviewed,
    bool AraReviewComplete,
    bool NativeExecutionReady)
{
    public static WorkshopAraReviewStatusReceipt FromDecision(
        WorkshopAraOperatorReviewDecision decision,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-ara-review-status-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..70];
        bool customerSafe =
            decision.Approved &&
            decision.CustomerSafeForReceipt &&
            decision.OperatorReviewed &&
            decision.AraReviewComplete &&
            decision.NativeExecutionReady &&
            decision.EpochTimingProviderOnly &&
            !decision.MonitorWorkflowExposed &&
            !decision.PaymentLiveEnabled;

        return new WorkshopAraReviewStatusReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.AraReviewStatusReceipt",
            decision.QueueId,
            decision.DecisionId,
            decision.ServiceRequestId,
            decision.RevenueOutcomeId,
            decision.DeliveryResultReceiptId,
            "ara-review-status",
            customerSafe ? "customer-safe-ara-review-ready" : "customer-safe-ara-review-blocked",
            "WORKSHOP operator review completed for an ARA-assisted service result without exposing internal packet or assignment controls.",
            decision.CustomerSafeStatus,
            "Review the customer-safe service result in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            decision.EpochTimingProviderOnly,
            decision.MonitorWorkflowExposed,
            decision.PaymentLiveEnabled,
            decision.OperatorReviewed,
            decision.AraReviewComplete,
            decision.NativeExecutionReady);
    }
}
