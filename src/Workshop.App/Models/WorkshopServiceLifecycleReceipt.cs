namespace Workshop.App;

public sealed record WorkshopServiceLifecycleReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string ActionId,
    string RequestId,
    string ActionKind,
    string RequestedServiceLane,
    string ServiceCommandReceiptId,
    string ExecutionHistoryId,
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
    public static WorkshopServiceLifecycleReceipt FromLifecycleAndCommand(
        WorkshopServiceLifecycleAction action,
        WorkshopServiceRevenueCommandReceipt commandReceipt,
        WorkshopRevenueExecutionHistoryEntry historyEntry,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-lifecycle-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..54];
        bool epochTimingProviderOnly =
            action.EpochTimingProviderOnly &&
            commandReceipt.EpochTimingProviderOnly &&
            historyEntry.EpochTimingRequested;
        bool araReviewComplete =
            commandReceipt.AraOperatorReviewComplete &&
            historyEntry.AraOperatorReviewComplete;
        bool customerSafe =
            action.CustomerSafe &&
            commandReceipt.CustomerSafe &&
            commandReceipt.CustomerVisibleReceiptReady &&
            historyEntry.CustomerVisibleReceiptReady &&
            historyEntry.NativeExecutionReady &&
            epochTimingProviderOnly &&
            araReviewComplete &&
            !action.MonitorWorkflowExposed &&
            !commandReceipt.MonitorWorkflowExposed &&
            !historyEntry.MonitorWorkflowExposed;

        return new WorkshopServiceLifecycleReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            action.ActionId,
            action.RequestId,
            action.ActionKind,
            action.RequestedServiceLane,
            commandReceipt.ReceiptId,
            historyEntry.HistoryId,
            historyEntry.DeliveryResultReceiptId,
            historyEntry.RevenueOutcomeId,
            historyEntry.EpochHandoffId,
            "service-lifecycle-receipt-linked",
            "The service lifecycle action is linked to a local WORKSHOP native revenue command receipt. EPOCH remains timing-provider-only.",
            customerSafe,
            commandReceipt.CustomerVisibleReceiptReady && historyEntry.CustomerVisibleReceiptReady,
            araReviewComplete,
            epochTimingProviderOnly,
            action.MonitorWorkflowExposed || commandReceipt.MonitorWorkflowExposed || historyEntry.MonitorWorkflowExposed,
            commandReceipt.NativeExecutionReady && historyEntry.NativeExecutionReady);
    }
}
