namespace Workshop.App;

public sealed record WorkshopCustomerServiceStatusRecord(
    string StatusId,
    string CreatedAtUtc,
    string SourceSurface,
    string RequestId,
    string ExecutionHistoryId,
    string DeliveryResultReceiptId,
    string RevenueOutcomeId,
    string EpochHandoffId,
    string ServiceLane,
    string Status,
    string CustomerSafeMessage,
    string NextAction,
    bool CustomerSafe,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool AraReviewComplete,
    bool MonitorWorkflowExposed)
{
    public static WorkshopCustomerServiceStatusRecord FromServiceChain(
        WorkshopWebportalServiceRequest request,
        WorkshopServiceRevenueCommandReceipt commandReceipt,
        WorkshopRevenueExecutionHistoryEntry historyEntry,
        DateTimeOffset createdAtUtc)
    {
        string statusId = $"workshop-customer-status-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..54];

        bool epochTimingProviderOnly =
            request.EpochTimingProviderOnly &&
            commandReceipt.EpochTimingProviderOnly &&
            historyEntry.EpochTimingRequested;

        bool araReviewComplete =
            commandReceipt.AraOperatorReviewComplete &&
            historyEntry.AraOperatorReviewComplete;

        bool customerSafe =
            request.CustomerSafe &&
            commandReceipt.CustomerSafe &&
            commandReceipt.CustomerVisibleReceiptReady &&
            historyEntry.CustomerVisibleReceiptReady &&
            historyEntry.NativeExecutionReady &&
            epochTimingProviderOnly &&
            araReviewComplete &&
            !request.MonitorWorkflowExposed &&
            !commandReceipt.MonitorWorkflowExposed &&
            !historyEntry.MonitorWorkflowExposed;

        return new WorkshopCustomerServiceStatusRecord(
            statusId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.CustomerSafeStatusExport",
            request.RequestId,
            historyEntry.HistoryId,
            historyEntry.DeliveryResultReceiptId,
            historyEntry.RevenueOutcomeId,
            historyEntry.EpochHandoffId,
            request.ServiceLane,
            "local-service-status-ready",
            "Your WORKSHOP service request has a local delivery update. EPOCH remains timing-provider-only.",
            "Review the customer-safe service status in the Webportal view.",
            customerSafe,
            customerSafe,
            epochTimingProviderOnly,
            araReviewComplete,
            commandReceipt.MonitorWorkflowExposed || historyEntry.MonitorWorkflowExposed || request.MonitorWorkflowExposed);
    }
}
