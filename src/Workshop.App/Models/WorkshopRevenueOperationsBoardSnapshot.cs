namespace Workshop.App;

public sealed record WorkshopRevenueOperationsBoardSnapshot(
    string BoardStatus,
    string OperatorNextAction,
    string PipelineSummary,
    string LatestServiceRequestStatus,
    string LatestCommandStatus,
    string LatestRevenueExecutionStatus,
    string SafetySummary,
    string LedgerSummary,
    bool ReadyForOperatorReview,
    bool EpochTimingProviderOnly,
    bool MonitorWorkflowExposed,
    bool CustomerSafeChain,
    bool AraReviewComplete)
{
    public static WorkshopRevenueOperationsBoardSnapshot FromLedgers(
        IReadOnlyList<WorkshopWebportalServiceRequest> serviceInbox,
        IReadOnlyList<WorkshopServiceRevenueCommandReceipt> serviceCommandReceipts,
        IReadOnlyList<WorkshopRevenueExecutionHistoryEntry> executionHistory,
        string serviceInboxPath,
        string serviceCommandReceiptPath,
        string executionHistoryPath)
    {
        WorkshopWebportalServiceRequest? latestRequest = serviceInbox.LastOrDefault();
        WorkshopServiceRevenueCommandReceipt? latestCommand = serviceCommandReceipts.LastOrDefault();
        WorkshopRevenueExecutionHistoryEntry? latestExecution = executionHistory.LastOrDefault();

        bool monitorWorkflowExposed =
            serviceInbox.Any(request => request.MonitorWorkflowExposed) ||
            serviceCommandReceipts.Any(receipt => receipt.MonitorWorkflowExposed) ||
            executionHistory.Any(entry => entry.MonitorWorkflowExposed);

        bool epochTimingProviderOnly =
            serviceInbox.Count > 0 &&
            serviceCommandReceipts.Count > 0 &&
            executionHistory.Count > 0 &&
            serviceInbox.All(request => request.EpochTimingProviderOnly) &&
            serviceCommandReceipts.All(receipt => receipt.EpochTimingProviderOnly) &&
            executionHistory.All(entry => entry.EpochTimingRequested);

        bool customerSafeChain =
            serviceInbox.Count > 0 &&
            serviceCommandReceipts.Count > 0 &&
            executionHistory.Count > 0 &&
            serviceInbox.All(request => request.CustomerSafe) &&
            serviceCommandReceipts.All(receipt => receipt.CustomerSafe && receipt.CustomerVisibleReceiptReady) &&
            executionHistory.All(entry => entry.CustomerVisibleReceiptReady && entry.NativeExecutionReady);

        bool araReviewComplete =
            serviceCommandReceipts.Count > 0 &&
            executionHistory.Count > 0 &&
            serviceCommandReceipts.All(receipt => receipt.AraOperatorReviewComplete) &&
            executionHistory.All(entry => entry.AraOperatorReviewComplete);

        bool readyForOperatorReview =
            customerSafeChain &&
            araReviewComplete &&
            epochTimingProviderOnly &&
            !monitorWorkflowExposed &&
            latestRequest is not null &&
            latestCommand is not null &&
            latestExecution is not null &&
            latestCommand.RequestId == latestRequest.RequestId &&
            latestCommand.ExecutionHistoryId == latestExecution.HistoryId;

        string boardStatus = readyForOperatorReview
            ? "revenue/service operations board ready"
            : "revenue/service operations board awaiting local service records";

        string nextAction = ResolveNextAction(
            latestRequest,
            latestCommand,
            latestExecution,
            monitorWorkflowExposed,
            epochTimingProviderOnly,
            customerSafeChain,
            araReviewComplete);

        return new WorkshopRevenueOperationsBoardSnapshot(
            boardStatus,
            nextAction,
            $"{serviceInbox.Count} service inbox request(s), {serviceCommandReceipts.Count} service-command receipt(s), {executionHistory.Count} native revenue execution history item(s).",
            latestRequest is not null
                ? $"Latest request {latestRequest.RequestId}: {latestRequest.ServiceLane}; {latestRequest.Status}; age band {latestRequest.AgeBand}."
                : "No Webportal service request is available in the App inbox.",
            latestCommand is not null
                ? $"Latest command link {latestCommand.ReceiptId}: request {latestCommand.RequestId} -> native history {latestCommand.ExecutionHistoryId}; status {latestCommand.Status}."
                : "No service-to-native revenue command receipt is available.",
            latestExecution is not null
                ? $"Latest native execution {latestExecution.HistoryId}: {latestExecution.IntentKind}; {latestExecution.ExecutionStatus}; delivery receipt {latestExecution.DeliveryResultReceiptId}."
                : "No native revenue execution history is available.",
            $"EPOCH timing provider only: {epochTimingProviderOnly.ToString().ToLowerInvariant()}; MONITOR workflow exposed: {monitorWorkflowExposed.ToString().ToLowerInvariant()}; customer-safe chain: {customerSafeChain.ToString().ToLowerInvariant()}; ARA review complete: {araReviewComplete.ToString().ToLowerInvariant()}.",
            $"Inbox: {serviceInboxPath}; command links: {serviceCommandReceiptPath}; execution history: {executionHistoryPath}.",
            readyForOperatorReview,
            epochTimingProviderOnly,
            monitorWorkflowExposed,
            customerSafeChain,
            araReviewComplete);
    }

    private static string ResolveNextAction(
        WorkshopWebportalServiceRequest? latestRequest,
        WorkshopServiceRevenueCommandReceipt? latestCommand,
        WorkshopRevenueExecutionHistoryEntry? latestExecution,
        bool monitorWorkflowExposed,
        bool epochTimingProviderOnly,
        bool customerSafeChain,
        bool araReviewComplete)
    {
        if (monitorWorkflowExposed)
        {
            return "Move revenue/service workflow exposure out of MONITOR and back into the WORKSHOP App/Webportal.";
        }

        if (latestRequest is null)
        {
            return "Import or create a customer-safe Webportal service request in the WORKSHOP App inbox.";
        }

        if (latestExecution is null)
        {
            return "Run the local native revenue command before linking the service request to a command receipt.";
        }

        if (latestCommand is null)
        {
            return "Link the Webportal service request to the native revenue execution receipt.";
        }

        if (!customerSafeChain)
        {
            return "Review service request, command link, and revenue history for customer-safe delivery status.";
        }

        if (!araReviewComplete)
        {
            return "Complete operator review for ARA-assisted revenue output before customer-visible delivery.";
        }

        if (!epochTimingProviderOnly)
        {
            return "Restore EPOCH to timing-provider-only before the WORKSHOP service command proceeds.";
        }

        if (latestCommand.RequestId != latestRequest.RequestId ||
            latestCommand.ExecutionHistoryId != latestExecution.HistoryId)
        {
            return "Reconcile the latest service-command link with the latest native revenue execution history item.";
        }

        return "Review the linked service request and native revenue execution, then approve the next WORKSHOP-owned delivery transition.";
    }
}
