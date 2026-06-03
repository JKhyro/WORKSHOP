namespace Workshop.App;

public sealed record WorkshopServiceRevenueCommandReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string RequestId,
    string ExecutionHistoryId,
    string ExecutionId,
    string IntentKind,
    string DeliveryResultReceiptId,
    string RevenueOutcomeId,
    string EpochHandoffId,
    string Status,
    string CustomerSafeStatus,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool AraOperatorReviewComplete,
    bool EpochTimingProviderOnly,
    bool MonitorWorkflowExposed,
    bool NativeExecutionReady)
{
    public static WorkshopServiceRevenueCommandReceipt FromServiceAndExecution(
        WorkshopWebportalServiceRequest request,
        WorkshopRevenueExecutionHistoryEntry historyEntry,
        WorkshopRevenueExecutionReceipt execution,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-service-command-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..55];

        return new WorkshopServiceRevenueCommandReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            request.RequestId,
            historyEntry.HistoryId,
            execution.ExecutionId,
            execution.IntentKind,
            execution.DeliveryResultReceiptId,
            execution.RevenueOutcomeId,
            execution.EpochHandoffId,
            "native-revenue-command-receipt-linked",
            "The Webportal service request is linked to a local WORKSHOP native revenue command receipt. EPOCH remains timing provider only.",
            request.CustomerSafe && execution.CustomerVisibleReceiptReady,
            execution.CustomerVisibleReceiptReady,
            execution.AraOperatorReviewComplete,
            request.EpochTimingProviderOnly && execution.EpochTimingRequested,
            execution.MonitorWorkflowExposed,
            execution.NativeExecutionReady);
    }
}
