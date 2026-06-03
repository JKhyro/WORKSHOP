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
        string statusFeedbackPath,
        WorkshopServiceLifecycleAction? lifecycleAction,
        IReadOnlyList<WorkshopServiceLifecycleAction> lifecycleActions,
        string lifecycleActionPath,
        WorkshopServiceLifecycleReceipt? lifecycleReceipt,
        IReadOnlyList<WorkshopServiceLifecycleReceipt> lifecycleReceipts,
        string lifecycleReceiptPath,
        WorkshopServiceLifecycleStatusRecord? lifecycleStatus,
        IReadOnlyList<WorkshopServiceLifecycleStatusRecord> lifecycleStatuses,
        string lifecycleStatusPath,
        WorkshopEpochRevisedCalendarTimingPayload? revisedTimingPayload,
        IReadOnlyList<WorkshopEpochRevisedCalendarTimingPayload> revisedTimingPayloads,
        string revisedTimingPayloadPath,
        WorkshopRevisedCalendarTimingReceipt? revisedTimingReceipt,
        IReadOnlyList<WorkshopRevisedCalendarTimingReceipt> revisedTimingReceipts,
        string revisedTimingReceiptPath,
        WorkshopRevisedCalendarTimingStatusRecord? revisedTimingStatus,
        IReadOnlyList<WorkshopRevisedCalendarTimingStatusRecord> revisedTimingStatuses,
        string revisedTimingStatusPath,
        WorkshopTimingAwareServiceFollowUp? timingAwareFollowUp,
        IReadOnlyList<WorkshopTimingAwareServiceFollowUp> timingAwareFollowUps,
        string timingAwareFollowUpPath,
        WorkshopTimingAwareRenewalReceipt? timingAwareRenewalReceipt,
        IReadOnlyList<WorkshopTimingAwareRenewalReceipt> timingAwareRenewalReceipts,
        string timingAwareRenewalReceiptPath,
        WorkshopDeliveryOutcomeAutomationRecord? deliveryOutcomeAutomation,
        IReadOnlyList<WorkshopDeliveryOutcomeAutomationRecord> deliveryOutcomeAutomations,
        string deliveryOutcomeAutomationPath,
        WorkshopDeliveryOutcomeAutomationReceipt? deliveryOutcomeAutomationReceipt,
        IReadOnlyList<WorkshopDeliveryOutcomeAutomationReceipt> deliveryOutcomeAutomationReceipts,
        string deliveryOutcomeAutomationReceiptPath,
        WorkshopAccountGrowthAutomationRecord? accountGrowthAutomation,
        IReadOnlyList<WorkshopAccountGrowthAutomationRecord> accountGrowthAutomations,
        string accountGrowthAutomationPath,
        WorkshopAccountGrowthAutomationReceipt? accountGrowthAutomationReceipt,
        IReadOnlyList<WorkshopAccountGrowthAutomationReceipt> accountGrowthAutomationReceipts,
        string accountGrowthAutomationReceiptPath)
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
        ServiceLifecycleActionCount = lifecycleActions.Count;
        ServiceLifecycleActionSummary = $"{lifecycleActions.Count} customer-safe service lifecycle action(s) in the WORKSHOP App queue.";
        ServiceLifecycleActionLocation = lifecycleActionPath;
        ServiceLifecycleActionStatus = lifecycleAction is not null
            ? $"Latest lifecycle action {lifecycleAction.ActionId}: {lifecycleAction.ActionKind} for {lifecycleAction.RequestId}; EPOCH timing provider only: {lifecycleAction.EpochTimingProviderOnly.ToString().ToLowerInvariant()}."
            : "No Webportal service lifecycle action was imported into the local WORKSHOP App queue.";
        ServiceLifecycleReceiptCount = lifecycleReceipts.Count;
        ServiceLifecycleReceiptSummary = $"{lifecycleReceipts.Count} service lifecycle receipt(s) linked to native revenue command evidence.";
        ServiceLifecycleReceiptLocation = lifecycleReceiptPath;
        ServiceLifecycleReceiptStatus = lifecycleReceipt is not null
            ? $"Latest lifecycle receipt {lifecycleReceipt.ReceiptId}: {lifecycleReceipt.ActionKind} -> {lifecycleReceipt.Status}; ARA review complete: {lifecycleReceipt.AraOperatorReviewComplete.ToString().ToLowerInvariant()}."
            : "No service lifecycle action has been linked to a native revenue command receipt in this shell load.";
        ServiceLifecycleStatusCount = lifecycleStatuses.Count;
        ServiceLifecycleStatusSummary = $"{lifecycleStatuses.Count} customer-safe service lifecycle status export(s) in the WORKSHOP App ledger.";
        ServiceLifecycleStatusLocation = lifecycleStatusPath;
        ServiceLifecycleStatusStatus = lifecycleStatus is not null
            ? $"Latest lifecycle status {lifecycleStatus.StatusId}: {lifecycleStatus.Status}; Webportal export ready: {lifecycleStatus.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe service lifecycle status feedback was exported in this shell load.";
        ServiceLifecycleStatusMessage = lifecycleStatus is not null
            ? lifecycleStatus.CustomerSafeMessage
            : "The service lifecycle Webportal status loop is waiting for a linked lifecycle action and native revenue execution.";
        EpochRevisedTimingPayloadCount = revisedTimingPayloads.Count;
        EpochRevisedTimingPayloadSummary = $"{revisedTimingPayloads.Count} EPOCH revised timing payload(s) in the WORKSHOP App ledger.";
        EpochRevisedTimingPayloadLocation = revisedTimingPayloadPath;
        EpochRevisedTimingPayloadStatus = revisedTimingPayload is not null
            ? $"Latest revised timing payload {revisedTimingPayload.PayloadId}: {revisedTimingPayload.CalendarSystemLabel}; provider only: {revisedTimingPayload.EpochTimingProviderOnly.ToString().ToLowerInvariant()}; WORKSHOP calendar ownership: {revisedTimingPayload.WorkshopCalendarOwnership.ToString().ToLowerInvariant()}."
            : "No EPOCH revised timing payload was imported into the local WORKSHOP App ledger.";
        EpochRevisedTimingReceiptCount = revisedTimingReceipts.Count;
        EpochRevisedTimingReceiptSummary = $"{revisedTimingReceipts.Count} revised timing receipt(s) linked to EPOCH timing context.";
        EpochRevisedTimingReceiptLocation = revisedTimingReceiptPath;
        EpochRevisedTimingReceiptStatus = revisedTimingReceipt is not null
            ? $"Latest revised timing receipt {revisedTimingReceipt.ReceiptId}: {revisedTimingReceipt.Status}; customer-visible receipt ready: {revisedTimingReceipt.CustomerVisibleReceiptReady.ToString().ToLowerInvariant()}."
            : "No revised timing receipt has been linked in this shell load.";
        EpochRevisedTimingStatusCount = revisedTimingStatuses.Count;
        EpochRevisedTimingStatusSummary = $"{revisedTimingStatuses.Count} customer-safe revised timing status export(s) in the WORKSHOP App ledger.";
        EpochRevisedTimingStatusLocation = revisedTimingStatusPath;
        EpochRevisedTimingStatusStatus = revisedTimingStatus is not null
            ? $"Latest revised timing status {revisedTimingStatus.StatusId}: {revisedTimingStatus.Status}; Webportal export ready: {revisedTimingStatus.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe revised timing status feedback was exported in this shell load.";
        EpochRevisedTimingStatusMessage = revisedTimingStatus is not null
            ? revisedTimingStatus.CustomerSafeMessage
            : "The revised timing Webportal status loop is waiting for an EPOCH timing context payload.";
        TimingAwareFollowUpCount = timingAwareFollowUps.Count;
        TimingAwareFollowUpSummary = $"{timingAwareFollowUps.Count} timing-aware service follow-up(s) in the WORKSHOP App ledger.";
        TimingAwareFollowUpLocation = timingAwareFollowUpPath;
        TimingAwareFollowUpStatus = timingAwareFollowUp is not null
            ? $"Latest timing-aware follow-up {timingAwareFollowUp.FollowUpId}: {timingAwareFollowUp.Status}; EPOCH timing provider only: {timingAwareFollowUp.EpochTimingProviderOnly.ToString().ToLowerInvariant()}; WORKSHOP calendar ownership: {timingAwareFollowUp.WorkshopCalendarOwnership.ToString().ToLowerInvariant()}."
            : "No timing-aware service follow-up was prepared from EPOCH timing context in this shell load.";
        TimingAwareRenewalReceiptCount = timingAwareRenewalReceipts.Count;
        TimingAwareRenewalReceiptSummary = $"{timingAwareRenewalReceipts.Count} timing-aware renewal receipt(s) in the WORKSHOP App ledger.";
        TimingAwareRenewalReceiptLocation = timingAwareRenewalReceiptPath;
        TimingAwareRenewalReceiptStatus = timingAwareRenewalReceipt is not null
            ? $"Latest timing-aware renewal receipt {timingAwareRenewalReceipt.ReceiptId}: {timingAwareRenewalReceipt.Status}; customer-visible receipt ready: {timingAwareRenewalReceipt.CustomerVisibleReceiptReady.ToString().ToLowerInvariant()}."
            : "No timing-aware renewal receipt was prepared from EPOCH timing context in this shell load.";
        DeliveryOutcomeAutomationCount = deliveryOutcomeAutomations.Count;
        DeliveryOutcomeAutomationSummary = $"{deliveryOutcomeAutomations.Count} delivery outcome automation record(s) in the WORKSHOP App ledger.";
        DeliveryOutcomeAutomationLocation = deliveryOutcomeAutomationPath;
        DeliveryOutcomeAutomationStatus = deliveryOutcomeAutomation is not null
            ? $"Latest delivery outcome automation {deliveryOutcomeAutomation.AutomationId}: {deliveryOutcomeAutomation.Status}; Webportal export ready: {deliveryOutcomeAutomation.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No delivery outcome automation was prepared from native revenue execution, service lifecycle status, and timing-aware renewal context in this shell load.";
        DeliveryOutcomeAutomationReceiptCount = deliveryOutcomeAutomationReceipts.Count;
        DeliveryOutcomeAutomationReceiptSummary = $"{deliveryOutcomeAutomationReceipts.Count} customer-safe delivery outcome automation receipt(s) in the WORKSHOP App ledger.";
        DeliveryOutcomeAutomationReceiptLocation = deliveryOutcomeAutomationReceiptPath;
        DeliveryOutcomeAutomationReceiptStatus = deliveryOutcomeAutomationReceipt is not null
            ? $"Latest delivery outcome receipt {deliveryOutcomeAutomationReceipt.ReceiptId}: {deliveryOutcomeAutomationReceipt.Status}; customer-visible receipt ready: {deliveryOutcomeAutomationReceipt.CustomerVisibleReceiptReady.ToString().ToLowerInvariant()}."
            : "No customer-safe delivery outcome automation receipt was exported in this shell load.";
        DeliveryOutcomeAutomationCustomerMessage = deliveryOutcomeAutomationReceipt is not null
            ? deliveryOutcomeAutomationReceipt.CustomerSafeMessage
            : "The delivery outcome automation Webportal status loop is waiting for native execution history, lifecycle status, and timing-aware renewal context.";
        AccountGrowthAutomationCount = accountGrowthAutomations.Count;
        AccountGrowthAutomationSummary = $"{accountGrowthAutomations.Count} account-growth automation record(s) in the WORKSHOP App ledger.";
        AccountGrowthAutomationLocation = accountGrowthAutomationPath;
        AccountGrowthAutomationStatus = accountGrowthAutomation is not null
            ? $"Latest account-growth automation {accountGrowthAutomation.AutomationId}: {accountGrowthAutomation.Status}; Webportal export ready: {accountGrowthAutomation.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No account-growth automation was prepared from the delivery outcome receipt in this shell load.";
        AccountGrowthAutomationReceiptCount = accountGrowthAutomationReceipts.Count;
        AccountGrowthAutomationReceiptSummary = $"{accountGrowthAutomationReceipts.Count} customer-safe account-growth automation receipt(s) in the WORKSHOP App ledger.";
        AccountGrowthAutomationReceiptLocation = accountGrowthAutomationReceiptPath;
        AccountGrowthAutomationReceiptStatus = accountGrowthAutomationReceipt is not null
            ? $"Latest account-growth receipt {accountGrowthAutomationReceipt.ReceiptId}: {accountGrowthAutomationReceipt.Status}; customer-visible receipt ready: {accountGrowthAutomationReceipt.CustomerVisibleReceiptReady.ToString().ToLowerInvariant()}."
            : "No customer-safe account-growth automation receipt was exported in this shell load.";
        AccountGrowthAutomationCustomerMessage = accountGrowthAutomationReceipt is not null
            ? accountGrowthAutomationReceipt.CustomerSafeMessage
            : "The account-growth automation Webportal loop is waiting for a customer-safe delivery outcome automation receipt.";
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
    public int ServiceLifecycleActionCount { get; }
    public string ServiceLifecycleActionSummary { get; }
    public string ServiceLifecycleActionLocation { get; }
    public string ServiceLifecycleActionStatus { get; }
    public int ServiceLifecycleReceiptCount { get; }
    public string ServiceLifecycleReceiptSummary { get; }
    public string ServiceLifecycleReceiptLocation { get; }
    public string ServiceLifecycleReceiptStatus { get; }
    public int ServiceLifecycleStatusCount { get; }
    public string ServiceLifecycleStatusSummary { get; }
    public string ServiceLifecycleStatusLocation { get; }
    public string ServiceLifecycleStatusStatus { get; }
    public string ServiceLifecycleStatusMessage { get; }
    public int EpochRevisedTimingPayloadCount { get; }
    public string EpochRevisedTimingPayloadSummary { get; }
    public string EpochRevisedTimingPayloadLocation { get; }
    public string EpochRevisedTimingPayloadStatus { get; }
    public int EpochRevisedTimingReceiptCount { get; }
    public string EpochRevisedTimingReceiptSummary { get; }
    public string EpochRevisedTimingReceiptLocation { get; }
    public string EpochRevisedTimingReceiptStatus { get; }
    public int EpochRevisedTimingStatusCount { get; }
    public string EpochRevisedTimingStatusSummary { get; }
    public string EpochRevisedTimingStatusLocation { get; }
    public string EpochRevisedTimingStatusStatus { get; }
    public string EpochRevisedTimingStatusMessage { get; }
    public int TimingAwareFollowUpCount { get; }
    public string TimingAwareFollowUpSummary { get; }
    public string TimingAwareFollowUpLocation { get; }
    public string TimingAwareFollowUpStatus { get; }
    public int TimingAwareRenewalReceiptCount { get; }
    public string TimingAwareRenewalReceiptSummary { get; }
    public string TimingAwareRenewalReceiptLocation { get; }
    public string TimingAwareRenewalReceiptStatus { get; }
    public int DeliveryOutcomeAutomationCount { get; }
    public string DeliveryOutcomeAutomationSummary { get; }
    public string DeliveryOutcomeAutomationLocation { get; }
    public string DeliveryOutcomeAutomationStatus { get; }
    public int DeliveryOutcomeAutomationReceiptCount { get; }
    public string DeliveryOutcomeAutomationReceiptSummary { get; }
    public string DeliveryOutcomeAutomationReceiptLocation { get; }
    public string DeliveryOutcomeAutomationReceiptStatus { get; }
    public string DeliveryOutcomeAutomationCustomerMessage { get; }
    public int AccountGrowthAutomationCount { get; }
    public string AccountGrowthAutomationSummary { get; }
    public string AccountGrowthAutomationLocation { get; }
    public string AccountGrowthAutomationStatus { get; }
    public int AccountGrowthAutomationReceiptCount { get; }
    public string AccountGrowthAutomationReceiptSummary { get; }
    public string AccountGrowthAutomationReceiptLocation { get; }
    public string AccountGrowthAutomationReceiptStatus { get; }
    public string AccountGrowthAutomationCustomerMessage { get; }

    public static MainWindowViewModel Load()
    {
        WorkshopWebportalServiceRequest? serviceInboxRequest = null;
        WorkshopServiceRequestInboxStore.TryEnsureDefaultWebportalRequest(out serviceInboxRequest);
        IReadOnlyList<WorkshopWebportalServiceRequest> serviceInbox = WorkshopServiceRequestInboxStore.Load();
        WorkshopServiceLifecycleAction? lifecycleAction = null;
        WorkshopServiceLifecycleActionStore.TryEnsureDefaultLifecycleAction(out lifecycleAction);
        IReadOnlyList<WorkshopServiceLifecycleAction> lifecycleActions = WorkshopServiceLifecycleActionStore.Load();

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
        WorkshopServiceLifecycleReceipt? lifecycleReceipt = null;
        if (lifecycleAction is not null &&
            serviceCommandReceipt is not null &&
            historyEntry is not null)
        {
            WorkshopServiceLifecycleReceiptStore.TryAppend(
                lifecycleAction,
                serviceCommandReceipt,
                historyEntry,
                out lifecycleReceipt);
        }

        IReadOnlyList<WorkshopServiceLifecycleReceipt> lifecycleReceipts =
            WorkshopServiceLifecycleReceiptStore.Load();
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
        WorkshopServiceLifecycleStatusRecord? lifecycleStatus = null;
        if (lifecycleAction is not null && lifecycleReceipt is not null)
        {
            WorkshopServiceLifecycleStatusStore.TryAppend(
                lifecycleAction,
                lifecycleReceipt,
                out lifecycleStatus);
        }

        IReadOnlyList<WorkshopServiceLifecycleStatusRecord> lifecycleStatuses =
            WorkshopServiceLifecycleStatusStore.Load();
        WorkshopEpochRevisedCalendarTimingPayload? revisedTimingPayload = null;
        WorkshopEpochRevisedCalendarTimingPayloadStore.TryEnsureDefaultPayload(out revisedTimingPayload);
        IReadOnlyList<WorkshopEpochRevisedCalendarTimingPayload> revisedTimingPayloads =
            WorkshopEpochRevisedCalendarTimingPayloadStore.Load();
        WorkshopRevisedCalendarTimingReceipt? revisedTimingReceipt = null;
        if (revisedTimingPayload is not null)
        {
            WorkshopRevisedCalendarTimingReceiptStore.TryAppend(
                revisedTimingPayload,
                out revisedTimingReceipt);
        }

        IReadOnlyList<WorkshopRevisedCalendarTimingReceipt> revisedTimingReceipts =
            WorkshopRevisedCalendarTimingReceiptStore.Load();
        WorkshopRevisedCalendarTimingStatusRecord? revisedTimingStatus = null;
        if (revisedTimingPayload is not null && revisedTimingReceipt is not null)
        {
            WorkshopRevisedCalendarTimingStatusStore.TryAppend(
                revisedTimingPayload,
                revisedTimingReceipt,
                out revisedTimingStatus);
        }

        IReadOnlyList<WorkshopRevisedCalendarTimingStatusRecord> revisedTimingStatuses =
            WorkshopRevisedCalendarTimingStatusStore.Load();
        WorkshopTimingAwareServiceFollowUp? timingAwareFollowUp = null;
        if (revisedTimingPayload is not null &&
            revisedTimingReceipt is not null &&
            revisedTimingStatus is not null)
        {
            WorkshopTimingAwareServiceFollowUpStore.TryAppend(
                revisedTimingPayload,
                revisedTimingReceipt,
                revisedTimingStatus,
                out timingAwareFollowUp);
        }

        IReadOnlyList<WorkshopTimingAwareServiceFollowUp> timingAwareFollowUps =
            WorkshopTimingAwareServiceFollowUpStore.Load();
        WorkshopTimingAwareRenewalReceipt? timingAwareRenewalReceipt = null;
        if (timingAwareFollowUp is not null && revisedTimingStatus is not null)
        {
            WorkshopTimingAwareRenewalReceiptStore.TryAppend(
                timingAwareFollowUp,
                revisedTimingStatus,
                out timingAwareRenewalReceipt);
        }

        IReadOnlyList<WorkshopTimingAwareRenewalReceipt> timingAwareRenewalReceipts =
            WorkshopTimingAwareRenewalReceiptStore.Load();
        WorkshopDeliveryOutcomeAutomationRecord? deliveryOutcomeAutomation = null;
        if (historyEntry is not null &&
            lifecycleStatus is not null &&
            timingAwareRenewalReceipt is not null)
        {
            WorkshopDeliveryOutcomeAutomationStore.TryAppend(
                historyEntry,
                lifecycleStatus,
                timingAwareRenewalReceipt,
                out deliveryOutcomeAutomation);
        }

        IReadOnlyList<WorkshopDeliveryOutcomeAutomationRecord> deliveryOutcomeAutomations =
            WorkshopDeliveryOutcomeAutomationStore.Load();
        WorkshopDeliveryOutcomeAutomationReceipt? deliveryOutcomeAutomationReceipt = null;
        if (deliveryOutcomeAutomation is not null)
        {
            WorkshopDeliveryOutcomeAutomationReceiptStore.TryAppend(
                deliveryOutcomeAutomation,
                out deliveryOutcomeAutomationReceipt);
        }

        IReadOnlyList<WorkshopDeliveryOutcomeAutomationReceipt> deliveryOutcomeAutomationReceipts =
            WorkshopDeliveryOutcomeAutomationReceiptStore.Load();
        WorkshopAccountGrowthAutomationRecord? accountGrowthAutomation = null;
        if (deliveryOutcomeAutomation is not null && deliveryOutcomeAutomationReceipt is not null)
        {
            WorkshopAccountGrowthAutomationStore.TryAppend(
                deliveryOutcomeAutomation,
                deliveryOutcomeAutomationReceipt,
                out accountGrowthAutomation);
        }

        IReadOnlyList<WorkshopAccountGrowthAutomationRecord> accountGrowthAutomations =
            WorkshopAccountGrowthAutomationStore.Load();
        WorkshopAccountGrowthAutomationReceipt? accountGrowthAutomationReceipt = null;
        if (accountGrowthAutomation is not null)
        {
            WorkshopAccountGrowthAutomationReceiptStore.TryAppend(
                accountGrowthAutomation,
                out accountGrowthAutomationReceipt);
        }

        IReadOnlyList<WorkshopAccountGrowthAutomationReceipt> accountGrowthAutomationReceipts =
            WorkshopAccountGrowthAutomationReceiptStore.Load();

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
            WorkshopCustomerServiceStatusStore.StatusPath,
            lifecycleAction,
            lifecycleActions,
            WorkshopServiceLifecycleActionStore.ActionPath,
            lifecycleReceipt,
            lifecycleReceipts,
            WorkshopServiceLifecycleReceiptStore.ReceiptPath,
            lifecycleStatus,
            lifecycleStatuses,
            WorkshopServiceLifecycleStatusStore.StatusPath,
            revisedTimingPayload,
            revisedTimingPayloads,
            WorkshopEpochRevisedCalendarTimingPayloadStore.PayloadPath,
            revisedTimingReceipt,
            revisedTimingReceipts,
            WorkshopRevisedCalendarTimingReceiptStore.ReceiptPath,
            revisedTimingStatus,
            revisedTimingStatuses,
            WorkshopRevisedCalendarTimingStatusStore.StatusPath,
            timingAwareFollowUp,
            timingAwareFollowUps,
            WorkshopTimingAwareServiceFollowUpStore.FollowUpPath,
            timingAwareRenewalReceipt,
            timingAwareRenewalReceipts,
            WorkshopTimingAwareRenewalReceiptStore.ReceiptPath,
            deliveryOutcomeAutomation,
            deliveryOutcomeAutomations,
            WorkshopDeliveryOutcomeAutomationStore.AutomationPath,
            deliveryOutcomeAutomationReceipt,
            deliveryOutcomeAutomationReceipts,
            WorkshopDeliveryOutcomeAutomationReceiptStore.ReceiptPath,
            accountGrowthAutomation,
            accountGrowthAutomations,
            WorkshopAccountGrowthAutomationStore.AutomationPath,
            accountGrowthAutomationReceipt,
            accountGrowthAutomationReceipts,
            WorkshopAccountGrowthAutomationReceiptStore.ReceiptPath);
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
