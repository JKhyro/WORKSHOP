using Workshop.App.Native;
using Workshop.App.Services;

namespace Workshop.App.ViewModels;

public sealed class MainWindowViewModel
{
    private MainWindowViewModel(
        WorkshopShellSnapshot snapshot,
        WorkshopRevenueCommandResult command,
        WorkshopRevenueExecutionReceipt execution,
        WorkshopRevenueExecutionHistoryEntry? historyEntry,
        IReadOnlyList<WorkshopRevenueExecutionHistoryEntry> history,
        string historyPath,
        WorkshopWebportalServiceRequest? serviceInboxRequest,
        IReadOnlyList<WorkshopWebportalServiceRequest> serviceInbox,
        string serviceInboxPath,
        WorkshopServiceRevenueCommandReceipt? serviceCommandReceipt,
        IReadOnlyList<WorkshopServiceRevenueCommandReceipt> serviceCommandReceipts,
        string serviceCommandReceiptPath,
        WorkshopRevenueOperationsBoardSnapshot operationsBoard,
        WorkshopCustomerServiceStatusRecord? statusFeedback,
        IReadOnlyList<WorkshopCustomerServiceStatusRecord> statusFeedbackRecords,
        string statusFeedbackPath)
    {
        ProductName = snapshot.ProductName;
        CoreStatus = snapshot.CoreStatus;
        RevenueLane = snapshot.RevenueLane;
        OfferExperimentStatus = $"Offer experiment status: {snapshot.OfferExperimentStatus}";
        DeliveryQueueStatus = snapshot.DeliveryQueueStatus;
        CustomerSafeStatus = snapshot.CustomerSafeStatus;
        MonthlyRevenueTarget = $"JPY {snapshot.MonthlyRevenueTargetJpy:N0} monthly target";
        LowLaborSummary = $"Low-labor score {snapshot.LowLaborScore}/100 with {snapshot.ExpectedOperatorMinutes} expected operator minutes for the first test.";
        HumanReviewStatus = snapshot.AraHumanReviewRequired
            ? "ARA packets require human review before customer-visible output."
            : "ARA packets are blocked until human review is restored.";
        BoundaryStatus = snapshot.EpochBoundaryEnforced && snapshot.MonitorBoundaryEnforced
            ? "EPOCH timing and MONITOR boundaries enforced"
            : "boundary blocked";
        RevenueCommandSummary = $"{command.ServiceRequestId} -> {command.OfferExperimentId} -> {command.RevenueReceiptId}";
        RevenueCommandEvidence = $"ROI {command.RoiRecordId}; ARA packet {command.AraPacketId}; delivery log {command.DeliveryLogId}.";
        RevenueCommandStatus = command.NativeCommandReady &&
            command.LowLaborViable &&
            command.RoiTestReady &&
            command.AraReviewRequired &&
            command.OwnerTimeBudgetClear &&
            command.EpochTimingRequested
                ? "native revenue command ready"
                : "native revenue command blocked";
        RevenueCommandCustomerSafeStatus = command.CustomerSafeStatus;
        EpochHandoffStatus = $"EPOCH handoff status: {command.EpochHandoffStatus}";
        RevenueExecutionSummary = $"{execution.IntentKind}: {execution.ServiceRequestId} -> {execution.RevenueOutcomeId}";
        RevenueExecutionEvidence = $"Receipt {execution.DeliveryResultReceiptId}; ARA review {execution.AraReviewReceiptId}; EPOCH handoff {execution.EpochHandoffId}.";
        RevenueExecutionStatus = execution.NativeExecutionReady &&
            execution.ExecutedLocally &&
            execution.CustomerVisibleReceiptReady &&
            execution.AraOperatorReviewComplete &&
            execution.EpochTimingRequested &&
            !execution.MonitorWorkflowExposed
                ? "native revenue execution receipt ready"
                : "native revenue execution receipt blocked";
        RevenueExecutionCustomerSafeStatus = execution.CustomerSafeStatus;
        RevenueExecutionHistoryCount = history.Count;
        RevenueExecutionHistorySummary = $"{history.Count} local revenue execution receipt(s) persisted in the WORKSHOP App ledger.";
        RevenueExecutionHistoryLocation = historyPath;
        LastRevenueExecutionHistoryStatus = historyEntry is not null
            ? $"Last history {historyEntry.HistoryId}: {historyEntry.IntentKind} -> {historyEntry.ExecutionStatus}; customer receipt ready: {historyEntry.CustomerVisibleReceiptReady.ToString().ToLowerInvariant()}."
            : "No new native revenue execution history was persisted in this shell load.";
        ServiceInboxCount = serviceInbox.Count;
        ServiceInboxSummary = $"{serviceInbox.Count} customer-safe Webportal service request(s) in the WORKSHOP App inbox.";
        ServiceInboxLocation = serviceInboxPath;
        ServiceInboxStatus = serviceInboxRequest is not null
            ? $"Latest request {serviceInboxRequest.RequestId}: {serviceInboxRequest.ServiceLane} is {serviceInboxRequest.Status}; EPOCH timing provider only: {serviceInboxRequest.EpochTimingProviderOnly.ToString().ToLowerInvariant()}."
            : "No Webportal service request was imported into the local WORKSHOP App inbox.";
        ServiceCommandReceiptCount = serviceCommandReceipts.Count;
        ServiceCommandReceiptSummary = $"{serviceCommandReceipts.Count} Webportal service-to-native revenue command receipt(s) in the WORKSHOP App ledger.";
        ServiceCommandReceiptLocation = serviceCommandReceiptPath;
        ServiceCommandReceiptStatus = serviceCommandReceipt is not null
            ? $"Latest service command {serviceCommandReceipt.RequestId} -> {serviceCommandReceipt.DeliveryResultReceiptId}; EPOCH timing provider only: {serviceCommandReceipt.EpochTimingProviderOnly.ToString().ToLowerInvariant()}."
            : "No Webportal service request has been linked to a native revenue command receipt in this shell load.";
        OperationsBoardStatus = operationsBoard.BoardStatus;
        OperationsBoardNextAction = operationsBoard.OperatorNextAction;
        OperationsBoardPipelineSummary = operationsBoard.PipelineSummary;
        OperationsBoardLatestServiceRequestStatus = operationsBoard.LatestServiceRequestStatus;
        OperationsBoardLatestCommandStatus = operationsBoard.LatestCommandStatus;
        OperationsBoardLatestRevenueExecutionStatus = operationsBoard.LatestRevenueExecutionStatus;
        OperationsBoardSafetySummary = operationsBoard.SafetySummary;
        OperationsBoardLedgerSummary = operationsBoard.LedgerSummary;
        OperationsBoardReadyForOperatorReview = operationsBoard.ReadyForOperatorReview
            ? "operator review ready"
            : "operator review blocked";
        CustomerStatusFeedbackCount = statusFeedbackRecords.Count;
        CustomerStatusFeedbackSummary = $"{statusFeedbackRecords.Count} customer-safe service status export(s) in the WORKSHOP App ledger.";
        CustomerStatusFeedbackLocation = statusFeedbackPath;
        CustomerStatusFeedbackStatus = statusFeedback is not null
            ? $"Latest status {statusFeedback.StatusId}: {statusFeedback.Status}; Webportal export ready: {statusFeedback.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe service status feedback was exported in this shell load.";
        CustomerStatusFeedbackMessage = statusFeedback is not null
            ? statusFeedback.CustomerSafeMessage
            : "The customer-safe Webportal service status loop is waiting for a linked request and native revenue execution.";
    }

    public string ProductName { get; }
    public string CoreStatus { get; }
    public string RevenueLane { get; }
    public string OfferExperimentStatus { get; }
    public string DeliveryQueueStatus { get; }
    public string CustomerSafeStatus { get; }
    public string MonthlyRevenueTarget { get; }
    public string LowLaborSummary { get; }
    public string HumanReviewStatus { get; }
    public string BoundaryStatus { get; }
    public string RevenueCommandSummary { get; }
    public string RevenueCommandEvidence { get; }
    public string RevenueCommandStatus { get; }
    public string RevenueCommandCustomerSafeStatus { get; }
    public string EpochHandoffStatus { get; }
    public string RevenueExecutionSummary { get; }
    public string RevenueExecutionEvidence { get; }
    public string RevenueExecutionStatus { get; }
    public string RevenueExecutionCustomerSafeStatus { get; }
    public int RevenueExecutionHistoryCount { get; }
    public string RevenueExecutionHistorySummary { get; }
    public string RevenueExecutionHistoryLocation { get; }
    public string LastRevenueExecutionHistoryStatus { get; }
    public int ServiceInboxCount { get; }
    public string ServiceInboxSummary { get; }
    public string ServiceInboxLocation { get; }
    public string ServiceInboxStatus { get; }
    public int ServiceCommandReceiptCount { get; }
    public string ServiceCommandReceiptSummary { get; }
    public string ServiceCommandReceiptLocation { get; }
    public string ServiceCommandReceiptStatus { get; }
    public string OperationsBoardStatus { get; }
    public string OperationsBoardNextAction { get; }
    public string OperationsBoardPipelineSummary { get; }
    public string OperationsBoardLatestServiceRequestStatus { get; }
    public string OperationsBoardLatestCommandStatus { get; }
    public string OperationsBoardLatestRevenueExecutionStatus { get; }
    public string OperationsBoardSafetySummary { get; }
    public string OperationsBoardLedgerSummary { get; }
    public string OperationsBoardReadyForOperatorReview { get; }
    public int CustomerStatusFeedbackCount { get; }
    public string CustomerStatusFeedbackSummary { get; }
    public string CustomerStatusFeedbackLocation { get; }
    public string CustomerStatusFeedbackStatus { get; }
    public string CustomerStatusFeedbackMessage { get; }

    public static MainWindowViewModel Load()
    {
        WorkshopWebportalServiceRequest? serviceInboxRequest = null;
        WorkshopServiceRequestInboxStore.TryEnsureDefaultWebportalRequest(out serviceInboxRequest);
        IReadOnlyList<WorkshopWebportalServiceRequest> serviceInbox = WorkshopServiceRequestInboxStore.Load();

        WorkshopRevenueExecutionReceipt execution = ExecuteNativeOrFallback("approve-operator-reviewed-offer");
        WorkshopRevenueExecutionHistoryEntry? historyEntry = null;
        WorkshopServiceRevenueCommandReceipt? serviceCommandReceipt = null;

        if (execution.NativeExecutionReady &&
            execution.ExecutedLocally &&
            execution.CustomerVisibleReceiptReady &&
            execution.AraOperatorReviewComplete &&
            execution.EpochTimingRequested &&
            !execution.MonitorWorkflowExposed)
        {
            WorkshopRevenueExecutionHistoryStore.TryAppend(
                execution,
                "Workshop.App.Avalonia",
                out historyEntry);
        }

        IReadOnlyList<WorkshopRevenueExecutionHistoryEntry> history = WorkshopRevenueExecutionHistoryStore.Load();
        if (serviceInboxRequest is not null && historyEntry is not null)
        {
            WorkshopServiceRevenueCommandReceiptStore.TryAppend(
                serviceInboxRequest,
                historyEntry,
                execution,
                out serviceCommandReceipt);
        }

        IReadOnlyList<WorkshopServiceRevenueCommandReceipt> serviceCommandReceipts =
            WorkshopServiceRevenueCommandReceiptStore.Load();
        WorkshopRevenueOperationsBoardSnapshot operationsBoard =
            WorkshopRevenueOperationsBoardSnapshot.FromLedgers(
                serviceInbox,
                serviceCommandReceipts,
                history,
                WorkshopServiceRequestInboxStore.InboxPath,
                WorkshopServiceRevenueCommandReceiptStore.ReceiptPath,
                WorkshopRevenueExecutionHistoryStore.HistoryPath);
        WorkshopCustomerServiceStatusRecord? statusFeedback = null;
        if (operationsBoard.ReadyForOperatorReview &&
            serviceInboxRequest is not null &&
            serviceCommandReceipt is not null &&
            historyEntry is not null)
        {
            WorkshopCustomerServiceStatusStore.TryAppend(
                serviceInboxRequest,
                serviceCommandReceipt,
                historyEntry,
                out statusFeedback);
        }

        IReadOnlyList<WorkshopCustomerServiceStatusRecord> statusFeedbackRecords =
            WorkshopCustomerServiceStatusStore.Load();

        return new MainWindowViewModel(
            WorkshopNative.LoadSnapshotOrFallback(),
            WorkshopNative.LoadRevenueCommandOrFallback(),
            execution,
            historyEntry,
            history,
            WorkshopRevenueExecutionHistoryStore.HistoryPath,
            serviceInboxRequest,
            serviceInbox,
            WorkshopServiceRequestInboxStore.InboxPath,
            serviceCommandReceipt,
            serviceCommandReceipts,
            WorkshopServiceRevenueCommandReceiptStore.ReceiptPath,
            operationsBoard,
            statusFeedback,
            statusFeedbackRecords,
            WorkshopCustomerServiceStatusStore.StatusPath);
    }

    private static WorkshopRevenueExecutionReceipt ExecuteNativeOrFallback(string intentKind)
    {
        try
        {
            return WorkshopNative.ExecuteRevenueCommand(intentKind);
        }
        catch
        {
            return WorkshopNative.ExecuteRevenueCommandOrFallback(intentKind);
        }
    }
}
