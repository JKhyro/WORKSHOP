namespace Workshop.App;

public sealed record WorkshopAraOperatorReviewDecision(
    string DecisionId,
    string CreatedAtUtc,
    string SourceSurface,
    string QueueId,
    string ServiceRequestId,
    string OpportunityId,
    string AraPacketId,
    string AraReviewReceiptId,
    string RevenueOutcomeId,
    string DeliveryResultReceiptId,
    string ExecutionHistoryId,
    string ServiceCommandReceiptId,
    string DecisionKind,
    string Status,
    string Decision,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool Approved,
    bool RevisionRequired,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool RequiresOperatorReview,
    bool OperatorReviewed,
    bool AraReviewComplete,
    bool NativeExecutionReady)
{
    public static WorkshopAraOperatorReviewDecision FromQueue(
        WorkshopAraReviewQueueRecord queue,
        DateTimeOffset createdAtUtc)
    {
        string decisionId = $"workshop-ara-review-decision-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..61];
        bool approved =
            queue.CustomerSafeForDecision &&
            queue.AraReviewComplete &&
            queue.NativeExecutionReady &&
            queue.EpochTimingProviderOnly &&
            !queue.MonitorWorkflowExposed &&
            !queue.PaymentLiveEnabled;
        bool revisionRequired = !approved;

        return new WorkshopAraOperatorReviewDecision(
            decisionId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.AraOperatorReviewDecision",
            queue.QueueId,
            queue.ServiceRequestId,
            queue.OpportunityId,
            queue.AraPacketId,
            queue.AraReviewReceiptId,
            queue.RevenueOutcomeId,
            queue.DeliveryResultReceiptId,
            queue.ExecutionHistoryId,
            queue.ServiceCommandReceiptId,
            "ara-operator-review-decision",
            approved ? "ara-review-approved" : "ara-review-revision-required",
            approved ? "approved" : "revision-required",
            approved
                ? "WORKSHOP operator review is complete; the customer-safe service result can proceed."
                : "WORKSHOP operator review requires revision before customer-visible delivery.",
            approved
                ? "Prepare the customer-safe review receipt and continue service delivery inside WORKSHOP."
                : "Return the ARA-assisted output for revision before creating a customer-safe receipt.",
            approved,
            revisionRequired,
            false,
            approved,
            false,
            queue.EpochTimingProviderOnly,
            queue.MonitorWorkflowExposed,
            queue.PaymentLiveEnabled,
            queue.RequiresOperatorReview,
            true,
            queue.AraReviewComplete,
            queue.NativeExecutionReady);
    }
}
