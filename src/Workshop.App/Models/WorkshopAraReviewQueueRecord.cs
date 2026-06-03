namespace Workshop.App;

public sealed record WorkshopAraReviewQueueRecord(
    string QueueId,
    string CreatedAtUtc,
    string SourceSurface,
    string ServiceRequestId,
    string OpportunityId,
    string AraPacketId,
    string AraReviewReceiptId,
    string RevenueOutcomeId,
    string DeliveryResultReceiptId,
    string ExecutionHistoryId,
    string ServiceCommandReceiptId,
    string QueueKind,
    string Status,
    string ReviewStatus,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForDecision,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool RequiresOperatorReview,
    bool AraReviewComplete,
    bool NativeExecutionReady)
{
    public static WorkshopAraReviewQueueRecord FromRevenueHistory(
        WorkshopRevenueExecutionHistoryEntry history,
        WorkshopServiceRevenueCommandReceipt commandReceipt,
        DateTimeOffset createdAtUtc)
    {
        string queueId = $"workshop-ara-review-queue-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..58];
        bool epochTimingProviderOnly =
            history.EpochTimingRequested &&
            commandReceipt.EpochTimingProviderOnly;
        bool monitorWorkflowExposed =
            history.MonitorWorkflowExposed ||
            commandReceipt.MonitorWorkflowExposed;
        bool araReviewComplete =
            history.AraOperatorReviewComplete &&
            commandReceipt.AraOperatorReviewComplete;
        bool customerSafeForDecision =
            history.CustomerVisibleReceiptReady &&
            commandReceipt.CustomerVisibleReceiptReady &&
            history.NativeExecutionReady &&
            commandReceipt.NativeExecutionReady &&
            epochTimingProviderOnly &&
            araReviewComplete &&
            !monitorWorkflowExposed;

        return new WorkshopAraReviewQueueRecord(
            queueId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.AraReviewQueue",
            history.ServiceRequestId,
            history.OpportunityId,
            history.AraPacketId,
            history.AraReviewReceiptId,
            history.RevenueOutcomeId,
            history.DeliveryResultReceiptId,
            history.HistoryId,
            commandReceipt.ReceiptId,
            "ara-operator-review-queue",
            customerSafeForDecision ? "ara-review-ready-for-decision" : "ara-review-blocked",
            araReviewComplete ? "operator-review-complete" : "operator-review-required",
            "WORKSHOP has an internal ARA-assisted service review ready for operator decision. Customer-facing output remains gated.",
            "Approve or return the ARA-assisted service output before customer-visible delivery proceeds.",
            false,
            customerSafeForDecision,
            false,
            epochTimingProviderOnly,
            monitorWorkflowExposed,
            false,
            true,
            araReviewComplete,
            history.NativeExecutionReady && commandReceipt.NativeExecutionReady);
    }
}
