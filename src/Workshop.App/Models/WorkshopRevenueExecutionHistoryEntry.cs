namespace Workshop.App;

public sealed record WorkshopRevenueExecutionHistoryEntry(
    string HistoryId,
    string RecordedAtUtc,
    string SourceSurface,
    string ExecutionId,
    string IntentKind,
    string ExecutionStatus,
    string ServiceRequestId,
    string OpportunityId,
    string AraPacketId,
    string AraReviewReceiptId,
    string RevenueOutcomeId,
    string DeliveryResultReceiptId,
    string EpochHandoffId,
    string CustomerSafeStatus,
    bool ExecutedLocally,
    bool CustomerVisibleReceiptReady,
    bool AraOperatorReviewComplete,
    bool EpochTimingRequested,
    bool MonitorWorkflowExposed,
    bool NativeExecutionReady)
{
    public static WorkshopRevenueExecutionHistoryEntry FromReceipt(
        WorkshopRevenueExecutionReceipt receipt,
        string sourceSurface,
        DateTimeOffset recordedAtUtc)
    {
        string historyId = $"workshop-history-{recordedAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..46];

        return new WorkshopRevenueExecutionHistoryEntry(
            historyId,
            recordedAtUtc.ToString("O"),
            sourceSurface,
            receipt.ExecutionId,
            receipt.IntentKind,
            receipt.ExecutionStatus,
            receipt.ServiceRequestId,
            receipt.OpportunityId,
            receipt.AraPacketId,
            receipt.AraReviewReceiptId,
            receipt.RevenueOutcomeId,
            receipt.DeliveryResultReceiptId,
            receipt.EpochHandoffId,
            receipt.CustomerSafeStatus,
            receipt.ExecutedLocally,
            receipt.CustomerVisibleReceiptReady,
            receipt.AraOperatorReviewComplete,
            receipt.EpochTimingRequested,
            receipt.MonitorWorkflowExposed,
            receipt.NativeExecutionReady);
    }
}
