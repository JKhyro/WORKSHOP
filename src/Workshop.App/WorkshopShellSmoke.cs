using Workshop.App.Native;
using Workshop.App.Services;
using System.Text.Json;

namespace Workshop.App;

internal static class WorkshopShellSmoke
{
    public static int Run()
    {
        string? previousStateDirectory = Environment.GetEnvironmentVariable(
            WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable);
        string? previousEpochStateDirectory = Environment.GetEnvironmentVariable(
            WorkshopEpochRevisedCalendarTimingPayloadStore.EpochStateDirectoryEnvironmentVariable);
        string smokeStateDirectory = Path.Combine(
            Path.GetTempPath(),
            "Workshop.App.Smoke",
            Guid.NewGuid().ToString("N"));
        string smokeEpochStateDirectory = Path.Combine(
            Path.GetTempPath(),
            "Workshop.App.EpochExportSmoke",
            Guid.NewGuid().ToString("N"));

        try
        {
            Environment.SetEnvironmentVariable(
                WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable,
                smokeStateDirectory);
            Environment.SetEnvironmentVariable(
                WorkshopEpochRevisedCalendarTimingPayloadStore.EpochStateDirectoryEnvironmentVariable,
                smokeEpochStateDirectory);
            WriteEpochRevisedTimingExportFixture(smokeEpochStateDirectory);

            WorkshopShellSnapshot snapshot = WorkshopNative.LoadSnapshot();
            WorkshopRevenueCommandResult command = WorkshopNative.LoadRevenueCommand();
            WorkshopRevenueExecutionReceipt execution = WorkshopNative.ExecuteRevenueCommand("approve-operator-reviewed-offer");
            WorkshopRevenueExecutionHistoryEntry historyEntry = WorkshopRevenueExecutionHistoryStore.Append(
                execution,
                "Workshop.App.Smoke");
            IReadOnlyList<WorkshopRevenueExecutionHistoryEntry> history = WorkshopRevenueExecutionHistoryStore.Load();
            WorkshopWebportalServiceRequest serviceInboxRequest = WorkshopServiceRequestInboxStore.EnsureDefaultWebportalRequest();
            IReadOnlyList<WorkshopWebportalServiceRequest> serviceInbox = WorkshopServiceRequestInboxStore.Load();
            WorkshopServiceRevenueCommandReceipt serviceCommandReceipt =
                WorkshopServiceRevenueCommandReceiptStore.Append(serviceInboxRequest, historyEntry, execution);
            IReadOnlyList<WorkshopServiceRevenueCommandReceipt> serviceCommandReceipts =
                WorkshopServiceRevenueCommandReceiptStore.Load();
            WorkshopAraReviewQueueRecord araReviewQueue =
                WorkshopAraReviewQueueStore.Append(historyEntry, serviceCommandReceipt);
            IReadOnlyList<WorkshopAraReviewQueueRecord> araReviewQueueRecords =
                WorkshopAraReviewQueueStore.Load();
            WorkshopAraOperatorReviewDecision araReviewDecision =
                WorkshopAraOperatorReviewDecisionStore.Append(araReviewQueue);
            IReadOnlyList<WorkshopAraOperatorReviewDecision> araReviewDecisions =
                WorkshopAraOperatorReviewDecisionStore.Load();
            WorkshopAraReviewStatusReceipt araReviewStatusReceipt =
                WorkshopAraReviewStatusReceiptStore.Append(araReviewDecision);
            IReadOnlyList<WorkshopAraReviewStatusReceipt> araReviewStatusReceipts =
                WorkshopAraReviewStatusReceiptStore.Load();
            WorkshopAraMethodMaterializationRecord araMethodMaterialization =
                WorkshopAraMethodMaterializationStore.Append(araReviewDecision, araReviewStatusReceipt);
            IReadOnlyList<WorkshopAraMethodMaterializationRecord> araMethodMaterializations =
                WorkshopAraMethodMaterializationStore.Load();
            WorkshopAraMaterializationReceipt araMaterializationReceipt =
                WorkshopAraMaterializationReceiptStore.Append(araMethodMaterialization);
            IReadOnlyList<WorkshopAraMaterializationReceipt> araMaterializationReceipts =
                WorkshopAraMaterializationReceiptStore.Load();
            WorkshopRevenueOperationsBoardSnapshot operationsBoard =
                WorkshopRevenueOperationsBoardSnapshot.FromLedgers(
                    serviceInbox,
                    serviceCommandReceipts,
                    history,
                    WorkshopServiceRequestInboxStore.InboxPath,
                    WorkshopServiceRevenueCommandReceiptStore.ReceiptPath,
                    WorkshopRevenueExecutionHistoryStore.HistoryPath);
            WorkshopCustomerServiceStatusRecord customerStatus =
                WorkshopCustomerServiceStatusStore.Append(serviceInboxRequest, serviceCommandReceipt, historyEntry);
            IReadOnlyList<WorkshopCustomerServiceStatusRecord> customerStatuses =
                WorkshopCustomerServiceStatusStore.Load();
            WorkshopServiceLifecycleAction lifecycleAction =
                WorkshopServiceLifecycleActionStore.EnsureDefaultLifecycleAction();
            IReadOnlyList<WorkshopServiceLifecycleAction> lifecycleActions =
                WorkshopServiceLifecycleActionStore.Load();
            WorkshopServiceLifecycleReceipt lifecycleReceipt =
                WorkshopServiceLifecycleReceiptStore.Append(lifecycleAction, serviceCommandReceipt, historyEntry);
            IReadOnlyList<WorkshopServiceLifecycleReceipt> lifecycleReceipts =
                WorkshopServiceLifecycleReceiptStore.Load();
            WorkshopServiceLifecycleStatusRecord lifecycleStatus =
                WorkshopServiceLifecycleStatusStore.Append(lifecycleAction, lifecycleReceipt);
            IReadOnlyList<WorkshopServiceLifecycleStatusRecord> lifecycleStatuses =
                WorkshopServiceLifecycleStatusStore.Load();
            WorkshopEpochRevisedCalendarTimingPayload revisedTimingPayload =
                WorkshopEpochRevisedCalendarTimingPayloadStore.EnsureDefaultPayload();
            IReadOnlyList<WorkshopEpochRevisedCalendarTimingPayload> revisedTimingPayloads =
                WorkshopEpochRevisedCalendarTimingPayloadStore.Load();
            WorkshopRevisedCalendarTimingReceipt revisedTimingReceipt =
                WorkshopRevisedCalendarTimingReceiptStore.Append(revisedTimingPayload);
            IReadOnlyList<WorkshopRevisedCalendarTimingReceipt> revisedTimingReceipts =
                WorkshopRevisedCalendarTimingReceiptStore.Load();
            WorkshopRevisedCalendarTimingStatusRecord revisedTimingStatus =
                WorkshopRevisedCalendarTimingStatusStore.Append(revisedTimingPayload, revisedTimingReceipt);
            IReadOnlyList<WorkshopRevisedCalendarTimingStatusRecord> revisedTimingStatuses =
                WorkshopRevisedCalendarTimingStatusStore.Load();
            WorkshopTimingAwareServiceFollowUp timingAwareFollowUp =
                WorkshopTimingAwareServiceFollowUpStore.Append(
                    revisedTimingPayload,
                    revisedTimingReceipt,
                    revisedTimingStatus);
            IReadOnlyList<WorkshopTimingAwareServiceFollowUp> timingAwareFollowUps =
                WorkshopTimingAwareServiceFollowUpStore.Load();
            WorkshopTimingAwareRenewalReceipt timingAwareRenewalReceipt =
                WorkshopTimingAwareRenewalReceiptStore.Append(
                    timingAwareFollowUp,
                    revisedTimingStatus);
            IReadOnlyList<WorkshopTimingAwareRenewalReceipt> timingAwareRenewalReceipts =
                WorkshopTimingAwareRenewalReceiptStore.Load();
            WorkshopDeliveryOutcomeAutomationRecord deliveryOutcomeAutomation =
                WorkshopDeliveryOutcomeAutomationStore.Append(
                    historyEntry,
                    lifecycleStatus,
                    timingAwareRenewalReceipt);
            IReadOnlyList<WorkshopDeliveryOutcomeAutomationRecord> deliveryOutcomeAutomations =
                WorkshopDeliveryOutcomeAutomationStore.Load();
            WorkshopDeliveryOutcomeAutomationReceipt deliveryOutcomeAutomationReceipt =
                WorkshopDeliveryOutcomeAutomationReceiptStore.Append(deliveryOutcomeAutomation);
            IReadOnlyList<WorkshopDeliveryOutcomeAutomationReceipt> deliveryOutcomeAutomationReceipts =
                WorkshopDeliveryOutcomeAutomationReceiptStore.Load();
            WorkshopAccountGrowthAutomationRecord accountGrowthAutomation =
                WorkshopAccountGrowthAutomationStore.Append(
                    deliveryOutcomeAutomation,
                    deliveryOutcomeAutomationReceipt);
            IReadOnlyList<WorkshopAccountGrowthAutomationRecord> accountGrowthAutomations =
                WorkshopAccountGrowthAutomationStore.Load();
            WorkshopAccountGrowthAutomationReceipt accountGrowthAutomationReceipt =
                WorkshopAccountGrowthAutomationReceiptStore.Append(accountGrowthAutomation);
            IReadOnlyList<WorkshopAccountGrowthAutomationReceipt> accountGrowthAutomationReceipts =
                WorkshopAccountGrowthAutomationReceiptStore.Load();

            if (snapshot.ProductName != "WORKSHOP" ||
                snapshot.CoreStatus != "native-core-ready" ||
                snapshot.LowLaborScore < 80 ||
                snapshot.MonthlyRevenueTargetJpy != 300000 ||
                !snapshot.AraHumanReviewRequired ||
                !snapshot.EpochBoundaryEnforced ||
                !snapshot.MonitorBoundaryEnforced ||
                !command.NativeCommandReady ||
                !command.LowLaborViable ||
                !command.RoiTestReady ||
                !command.AraReviewRequired ||
                command.EpochHandoffStatus != "epoch-time-requested" ||
                !execution.NativeExecutionReady ||
                !execution.ExecutedLocally ||
                !execution.CustomerVisibleReceiptReady ||
                !execution.AraOperatorReviewComplete ||
                execution.MonitorWorkflowExposed ||
                execution.ExecutionStatus != "epoch-time-requested" ||
                execution.DeliveryResultReceiptId != "workshop-exec-delivery-receipt-001" ||
                history.Count != 1 ||
                history[0].HistoryId != historyEntry.HistoryId ||
                history[0].DeliveryResultReceiptId != "workshop-exec-delivery-receipt-001" ||
                !history[0].CustomerVisibleReceiptReady ||
                !history[0].AraOperatorReviewComplete ||
                history[0].MonitorWorkflowExposed ||
                !File.Exists(WorkshopRevenueExecutionHistoryStore.HistoryPath) ||
                serviceInbox.Count != 1 ||
                serviceInbox[0].RequestId != serviceInboxRequest.RequestId ||
                !serviceInbox[0].CustomerSafe ||
                !serviceInbox[0].EpochTimingProviderOnly ||
                serviceInbox[0].MonitorWorkflowExposed ||
                !serviceInbox[0].AppOwnedInboxState ||
                !File.Exists(WorkshopServiceRequestInboxStore.InboxPath) ||
                serviceCommandReceipts.Count != 1 ||
                serviceCommandReceipts[0].ReceiptId != serviceCommandReceipt.ReceiptId ||
                serviceCommandReceipts[0].RequestId != serviceInboxRequest.RequestId ||
                serviceCommandReceipts[0].ExecutionHistoryId != historyEntry.HistoryId ||
                !serviceCommandReceipts[0].CustomerSafe ||
                !serviceCommandReceipts[0].CustomerVisibleReceiptReady ||
                !serviceCommandReceipts[0].AraOperatorReviewComplete ||
                !serviceCommandReceipts[0].EpochTimingProviderOnly ||
                serviceCommandReceipts[0].MonitorWorkflowExposed ||
                !serviceCommandReceipts[0].NativeExecutionReady ||
                !File.Exists(WorkshopServiceRevenueCommandReceiptStore.ReceiptPath) ||
                araReviewQueueRecords.Count != 1 ||
                araReviewQueueRecords[0].QueueId != araReviewQueue.QueueId ||
                araReviewQueueRecords[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                araReviewQueueRecords[0].OpportunityId != historyEntry.OpportunityId ||
                araReviewQueueRecords[0].AraPacketId != historyEntry.AraPacketId ||
                araReviewQueueRecords[0].AraReviewReceiptId != historyEntry.AraReviewReceiptId ||
                araReviewQueueRecords[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                araReviewQueueRecords[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                araReviewQueueRecords[0].ExecutionHistoryId != historyEntry.HistoryId ||
                araReviewQueueRecords[0].ServiceCommandReceiptId != serviceCommandReceipt.ReceiptId ||
                araReviewQueueRecords[0].QueueKind != "ara-operator-review-queue" ||
                araReviewQueueRecords[0].Status != "ara-review-ready-for-decision" ||
                araReviewQueueRecords[0].ReviewStatus != "operator-review-complete" ||
                araReviewQueueRecords[0].CustomerVisible ||
                !araReviewQueueRecords[0].CustomerSafeForDecision ||
                araReviewQueueRecords[0].WebportalExportReady ||
                !araReviewQueueRecords[0].EpochTimingProviderOnly ||
                araReviewQueueRecords[0].MonitorWorkflowExposed ||
                araReviewQueueRecords[0].PaymentLiveEnabled ||
                !araReviewQueueRecords[0].RequiresOperatorReview ||
                !araReviewQueueRecords[0].AraReviewComplete ||
                !araReviewQueueRecords[0].NativeExecutionReady ||
                !araReviewQueueRecords[0].OperatorNextAction.Contains("Approve or return", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAraReviewQueueStore.QueuePath) ||
                araReviewDecisions.Count != 1 ||
                araReviewDecisions[0].DecisionId != araReviewDecision.DecisionId ||
                araReviewDecisions[0].QueueId != araReviewQueue.QueueId ||
                araReviewDecisions[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                araReviewDecisions[0].DecisionKind != "ara-operator-review-decision" ||
                araReviewDecisions[0].Status != "ara-review-approved" ||
                araReviewDecisions[0].Decision != "approved" ||
                !araReviewDecisions[0].Approved ||
                araReviewDecisions[0].RevisionRequired ||
                araReviewDecisions[0].CustomerVisible ||
                !araReviewDecisions[0].CustomerSafeForReceipt ||
                araReviewDecisions[0].WebportalExportReady ||
                !araReviewDecisions[0].EpochTimingProviderOnly ||
                araReviewDecisions[0].MonitorWorkflowExposed ||
                araReviewDecisions[0].PaymentLiveEnabled ||
                !araReviewDecisions[0].RequiresOperatorReview ||
                !araReviewDecisions[0].OperatorReviewed ||
                !araReviewDecisions[0].AraReviewComplete ||
                !araReviewDecisions[0].NativeExecutionReady ||
                !File.Exists(WorkshopAraOperatorReviewDecisionStore.DecisionPath) ||
                araReviewStatusReceipts.Count != 1 ||
                araReviewStatusReceipts[0].ReceiptId != araReviewStatusReceipt.ReceiptId ||
                araReviewStatusReceipts[0].QueueId != araReviewQueue.QueueId ||
                araReviewStatusReceipts[0].DecisionId != araReviewDecision.DecisionId ||
                araReviewStatusReceipts[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                araReviewStatusReceipts[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                araReviewStatusReceipts[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                araReviewStatusReceipts[0].Kind != "ara-review-status" ||
                araReviewStatusReceipts[0].Status != "customer-safe-ara-review-ready" ||
                !araReviewStatusReceipts[0].CustomerSafe ||
                !araReviewStatusReceipts[0].CustomerVisibleReceiptReady ||
                !araReviewStatusReceipts[0].WebportalExportReady ||
                !araReviewStatusReceipts[0].EpochTimingProviderOnly ||
                araReviewStatusReceipts[0].MonitorWorkflowExposed ||
                araReviewStatusReceipts[0].PaymentLiveEnabled ||
                !araReviewStatusReceipts[0].OperatorReviewed ||
                !araReviewStatusReceipts[0].AraReviewComplete ||
                !araReviewStatusReceipts[0].NativeExecutionReady ||
                !araReviewStatusReceipts[0].Summary.Contains("without exposing internal packet", StringComparison.Ordinal) ||
                !araReviewStatusReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAraReviewStatusReceiptStore.ReceiptPath) ||
                araMethodMaterializations.Count != 1 ||
                araMethodMaterializations[0].MaterializationId != araMethodMaterialization.MaterializationId ||
                araMethodMaterializations[0].QueueId != araReviewQueue.QueueId ||
                araMethodMaterializations[0].DecisionId != araReviewDecision.DecisionId ||
                araMethodMaterializations[0].ReviewStatusReceiptId != araReviewStatusReceipt.ReceiptId ||
                araMethodMaterializations[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                araMethodMaterializations[0].MaterializationKind != "ara-method-materialization" ||
                araMethodMaterializations[0].Status != "ara-materialization-ready" ||
                araMethodMaterializations[0].CustomerVisible ||
                !araMethodMaterializations[0].CustomerSafeForReceipt ||
                araMethodMaterializations[0].WebportalExportReady ||
                !araMethodMaterializations[0].EpochTimingProviderOnly ||
                araMethodMaterializations[0].WorkshopCalendarOwnership ||
                araMethodMaterializations[0].MonitorWorkflowExposed ||
                araMethodMaterializations[0].PaymentLiveEnabled ||
                !araMethodMaterializations[0].OperatorReviewed ||
                !araMethodMaterializations[0].AraReviewComplete ||
                !araMethodMaterializations[0].HumanReviewComplete ||
                !araMethodMaterializations[0].ReusableMethodReady ||
                !araMethodMaterializations[0].MaterialAssetReady ||
                !araMethodMaterializations[0].NativeExecutionReady ||
                !araMethodMaterializations[0].OperatorNextAction.Contains("Attach the reviewed method", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAraMethodMaterializationStore.MaterializationPath) ||
                araMaterializationReceipts.Count != 1 ||
                araMaterializationReceipts[0].ReceiptId != araMaterializationReceipt.ReceiptId ||
                araMaterializationReceipts[0].MaterializationId != araMethodMaterialization.MaterializationId ||
                araMaterializationReceipts[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                araMaterializationReceipts[0].Kind != "ara-method-materialization" ||
                araMaterializationReceipts[0].Status != "customer-safe-ara-materialization-ready" ||
                !araMaterializationReceipts[0].CustomerSafe ||
                !araMaterializationReceipts[0].CustomerVisibleReceiptReady ||
                !araMaterializationReceipts[0].WebportalExportReady ||
                !araMaterializationReceipts[0].EpochTimingProviderOnly ||
                araMaterializationReceipts[0].WorkshopCalendarOwnership ||
                araMaterializationReceipts[0].MonitorWorkflowExposed ||
                araMaterializationReceipts[0].PaymentLiveEnabled ||
                !araMaterializationReceipts[0].OperatorReviewed ||
                !araMaterializationReceipts[0].AraReviewComplete ||
                !araMaterializationReceipts[0].HumanReviewComplete ||
                !araMaterializationReceipts[0].ReusableMethodReady ||
                !araMaterializationReceipts[0].MaterialAssetReady ||
                !araMaterializationReceipts[0].NativeExecutionReady ||
                !araMaterializationReceipts[0].Summary.Contains("without exposing internal packet, queue, decision, or materialization controls", StringComparison.Ordinal) ||
                !araMaterializationReceipts[0].CustomerSafeMessage.Contains("reviewed service method and material plan", StringComparison.Ordinal) ||
                !araMaterializationReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAraMaterializationReceiptStore.ReceiptPath) ||
                !operationsBoard.ReadyForOperatorReview ||
                !operationsBoard.EpochTimingProviderOnly ||
                operationsBoard.MonitorWorkflowExposed ||
                !operationsBoard.CustomerSafeChain ||
                !operationsBoard.AraReviewComplete ||
                operationsBoard.BoardStatus != "revenue/service operations board ready" ||
                !operationsBoard.OperatorNextAction.Contains("approve the next WORKSHOP-owned delivery transition", StringComparison.Ordinal) ||
                !operationsBoard.PipelineSummary.Contains("1 service inbox request", StringComparison.Ordinal) ||
                !operationsBoard.SafetySummary.Contains("EPOCH timing provider only: true", StringComparison.Ordinal) ||
                !operationsBoard.LedgerSummary.Contains(WorkshopRevenueExecutionHistoryStore.HistoryPath, StringComparison.Ordinal) ||
                customerStatuses.Count != 1 ||
                customerStatuses[0].StatusId != customerStatus.StatusId ||
                customerStatuses[0].RequestId != serviceInboxRequest.RequestId ||
                !customerStatuses[0].CustomerSafe ||
                !customerStatuses[0].WebportalExportReady ||
                !customerStatuses[0].EpochTimingProviderOnly ||
                !customerStatuses[0].AraReviewComplete ||
                customerStatuses[0].MonitorWorkflowExposed ||
                !customerStatuses[0].CustomerSafeMessage.Contains("EPOCH remains timing-provider-only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopCustomerServiceStatusStore.StatusPath) ||
                lifecycleActions.Count != 1 ||
                lifecycleActions[0].ActionId != lifecycleAction.ActionId ||
                !lifecycleActions[0].CustomerSafe ||
                !lifecycleActions[0].EpochTimingProviderOnly ||
                lifecycleActions[0].MonitorWorkflowExposed ||
                !lifecycleActions[0].AppOwnedLifecycleState ||
                !File.Exists(WorkshopServiceLifecycleActionStore.ActionPath) ||
                lifecycleReceipts.Count != 1 ||
                lifecycleReceipts[0].ReceiptId != lifecycleReceipt.ReceiptId ||
                lifecycleReceipts[0].ActionId != lifecycleAction.ActionId ||
                lifecycleReceipts[0].ServiceCommandReceiptId != serviceCommandReceipt.ReceiptId ||
                !lifecycleReceipts[0].CustomerSafe ||
                !lifecycleReceipts[0].CustomerVisibleReceiptReady ||
                !lifecycleReceipts[0].AraOperatorReviewComplete ||
                !lifecycleReceipts[0].EpochTimingProviderOnly ||
                lifecycleReceipts[0].MonitorWorkflowExposed ||
                !lifecycleReceipts[0].NativeExecutionReady ||
                !File.Exists(WorkshopServiceLifecycleReceiptStore.ReceiptPath) ||
                lifecycleStatuses.Count != 1 ||
                lifecycleStatuses[0].StatusId != lifecycleStatus.StatusId ||
                lifecycleStatuses[0].ActionId != lifecycleAction.ActionId ||
                !lifecycleStatuses[0].CustomerSafe ||
                !lifecycleStatuses[0].WebportalExportReady ||
                !lifecycleStatuses[0].EpochTimingProviderOnly ||
                !lifecycleStatuses[0].AraReviewComplete ||
                lifecycleStatuses[0].MonitorWorkflowExposed ||
                !lifecycleStatuses[0].CustomerSafeMessage.Contains("EPOCH remains timing-provider-only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopServiceLifecycleStatusStore.StatusPath) ||
                revisedTimingPayloads.Count != 1 ||
                revisedTimingPayloads[0].PayloadId != revisedTimingPayload.PayloadId ||
                revisedTimingPayload.PayloadId != "epoch-revised-timing-export-001" ||
                revisedTimingPayload.SourceSurface != "EPOCH.App.RevisedTimingProjectionExport" ||
                revisedTimingPayloads[0].CalendarSystemLabel != "revised-13-month" ||
                revisedTimingPayloads[0].ProviderGoLiveRequested ||
                !revisedTimingPayloads[0].EpochTimingProviderOnly ||
                revisedTimingPayloads[0].WorkshopCalendarOwnership ||
                revisedTimingPayloads[0].MonitorWorkflowExposed ||
                !revisedTimingPayloads[0].ConversionGateReason.Contains("gated", StringComparison.Ordinal) ||
                !File.Exists(WorkshopEpochRevisedCalendarTimingPayloadStore.PayloadPath) ||
                revisedTimingReceipts.Count != 1 ||
                revisedTimingReceipts[0].ReceiptId != revisedTimingReceipt.ReceiptId ||
                revisedTimingReceipts[0].PayloadId != revisedTimingPayload.PayloadId ||
                revisedTimingReceipts[0].Kind != "epoch-revised-calendar-timing" ||
                !revisedTimingReceipts[0].CustomerVisibleReceiptReady ||
                !revisedTimingReceipts[0].EpochTimingProviderOnly ||
                revisedTimingReceipts[0].WorkshopCalendarOwnership ||
                revisedTimingReceipts[0].MonitorWorkflowExposed ||
                !File.Exists(WorkshopRevisedCalendarTimingReceiptStore.ReceiptPath) ||
                revisedTimingStatuses.Count != 1 ||
                revisedTimingStatuses[0].StatusId != revisedTimingStatus.StatusId ||
                revisedTimingStatuses[0].PayloadId != revisedTimingPayload.PayloadId ||
                revisedTimingStatuses[0].ReceiptId != revisedTimingReceipt.ReceiptId ||
                !revisedTimingStatuses[0].CustomerSafe ||
                !revisedTimingStatuses[0].WebportalExportReady ||
                !revisedTimingStatuses[0].EpochTimingProviderOnly ||
                revisedTimingStatuses[0].WorkshopCalendarOwnership ||
                revisedTimingStatuses[0].MonitorWorkflowExposed ||
                !revisedTimingStatuses[0].CustomerSafeMessage.Contains("EPOCH-provided revised timing context", StringComparison.Ordinal) ||
                !File.Exists(WorkshopRevisedCalendarTimingStatusStore.StatusPath) ||
                timingAwareFollowUps.Count != 1 ||
                timingAwareFollowUps[0].FollowUpId != timingAwareFollowUp.FollowUpId ||
                timingAwareFollowUps[0].RequestId != revisedTimingPayload.RequestId ||
                timingAwareFollowUps[0].TimingStatusId != revisedTimingStatus.StatusId ||
                timingAwareFollowUps[0].RevisedTimingPayloadId != revisedTimingPayload.PayloadId ||
                timingAwareFollowUps[0].RevisedTimingReceiptId != revisedTimingReceipt.ReceiptId ||
                timingAwareFollowUps[0].ActionKind != "timing-aware-service-follow-up" ||
                timingAwareFollowUps[0].Status != "follow-up-ready" ||
                !timingAwareFollowUps[0].CustomerSafe ||
                !timingAwareFollowUps[0].WebportalExportReady ||
                !timingAwareFollowUps[0].EpochTimingProviderOnly ||
                timingAwareFollowUps[0].WorkshopCalendarOwnership ||
                timingAwareFollowUps[0].MonitorWorkflowExposed ||
                !timingAwareFollowUps[0].RenewalPromptReady ||
                !timingAwareFollowUps[0].OperatorNextAction.Contains("request EPOCH timing only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopTimingAwareServiceFollowUpStore.FollowUpPath) ||
                timingAwareRenewalReceipts.Count != 1 ||
                timingAwareRenewalReceipts[0].ReceiptId != timingAwareRenewalReceipt.ReceiptId ||
                timingAwareRenewalReceipts[0].FollowUpId != timingAwareFollowUp.FollowUpId ||
                timingAwareRenewalReceipts[0].RequestId != revisedTimingPayload.RequestId ||
                timingAwareRenewalReceipts[0].TimingStatusId != revisedTimingStatus.StatusId ||
                timingAwareRenewalReceipts[0].RevisedTimingPayloadId != revisedTimingPayload.PayloadId ||
                timingAwareRenewalReceipts[0].Kind != "timing-aware-renewal" ||
                timingAwareRenewalReceipts[0].Status != "renewal-follow-up-ready" ||
                !timingAwareRenewalReceipts[0].CustomerSafe ||
                !timingAwareRenewalReceipts[0].CustomerVisibleReceiptReady ||
                !timingAwareRenewalReceipts[0].EpochTimingProviderOnly ||
                timingAwareRenewalReceipts[0].WorkshopCalendarOwnership ||
                timingAwareRenewalReceipts[0].MonitorWorkflowExposed ||
                !timingAwareRenewalReceipts[0].RenewalReady ||
                timingAwareRenewalReceipts[0].RequiresEpochTimingRequest ||
                !timingAwareRenewalReceipts[0].CustomerSafeStatus.Contains("EPOCH remains the timing provider", StringComparison.Ordinal) ||
                !File.Exists(WorkshopTimingAwareRenewalReceiptStore.ReceiptPath) ||
                deliveryOutcomeAutomations.Count != 1 ||
                deliveryOutcomeAutomations[0].AutomationId != deliveryOutcomeAutomation.AutomationId ||
                deliveryOutcomeAutomations[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                deliveryOutcomeAutomations[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                deliveryOutcomeAutomations[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                deliveryOutcomeAutomations[0].ExecutionHistoryId != historyEntry.HistoryId ||
                deliveryOutcomeAutomations[0].LifecycleStatusId != lifecycleStatus.StatusId ||
                deliveryOutcomeAutomations[0].TimingAwareRenewalReceiptId != timingAwareRenewalReceipt.ReceiptId ||
                deliveryOutcomeAutomations[0].AutomationKind != "delivery-outcome-automation" ||
                deliveryOutcomeAutomations[0].Status != "delivery-outcome-automation-ready" ||
                !deliveryOutcomeAutomations[0].CustomerSafe ||
                !deliveryOutcomeAutomations[0].WebportalExportReady ||
                !deliveryOutcomeAutomations[0].EpochTimingProviderOnly ||
                deliveryOutcomeAutomations[0].WorkshopCalendarOwnership ||
                deliveryOutcomeAutomations[0].MonitorWorkflowExposed ||
                deliveryOutcomeAutomations[0].PaymentLiveEnabled ||
                !deliveryOutcomeAutomations[0].AraReviewComplete ||
                !deliveryOutcomeAutomations[0].RenewalReady ||
                deliveryOutcomeAutomations[0].RequiresEpochTimingRequest ||
                !deliveryOutcomeAutomations[0].NativeExecutionReady ||
                !deliveryOutcomeAutomations[0].OperatorNextAction.Contains("request EPOCH timing only", StringComparison.Ordinal) ||
                !deliveryOutcomeAutomations[0].CustomerSafeMessage.Contains("EPOCH remains timing-provider-only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopDeliveryOutcomeAutomationStore.AutomationPath) ||
                deliveryOutcomeAutomationReceipts.Count != 1 ||
                deliveryOutcomeAutomationReceipts[0].ReceiptId != deliveryOutcomeAutomationReceipt.ReceiptId ||
                deliveryOutcomeAutomationReceipts[0].AutomationId != deliveryOutcomeAutomation.AutomationId ||
                deliveryOutcomeAutomationReceipts[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                deliveryOutcomeAutomationReceipts[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                deliveryOutcomeAutomationReceipts[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                deliveryOutcomeAutomationReceipts[0].LifecycleStatusId != lifecycleStatus.StatusId ||
                deliveryOutcomeAutomationReceipts[0].TimingAwareRenewalReceiptId != timingAwareRenewalReceipt.ReceiptId ||
                deliveryOutcomeAutomationReceipts[0].Kind != "delivery-outcome-automation" ||
                deliveryOutcomeAutomationReceipts[0].Status != "customer-safe-delivery-outcome-ready" ||
                !deliveryOutcomeAutomationReceipts[0].CustomerSafe ||
                !deliveryOutcomeAutomationReceipts[0].CustomerVisibleReceiptReady ||
                !deliveryOutcomeAutomationReceipts[0].WebportalExportReady ||
                !deliveryOutcomeAutomationReceipts[0].EpochTimingProviderOnly ||
                deliveryOutcomeAutomationReceipts[0].WorkshopCalendarOwnership ||
                deliveryOutcomeAutomationReceipts[0].MonitorWorkflowExposed ||
                deliveryOutcomeAutomationReceipts[0].PaymentLiveEnabled ||
                !deliveryOutcomeAutomationReceipts[0].AraReviewComplete ||
                !deliveryOutcomeAutomationReceipts[0].RenewalReady ||
                deliveryOutcomeAutomationReceipts[0].RequiresEpochTimingRequest ||
                !deliveryOutcomeAutomationReceipts[0].CustomerSafeMessage.Contains("EPOCH remains timing-provider-only", StringComparison.Ordinal) ||
                !deliveryOutcomeAutomationReceipts[0].NextAction.Contains("request timing through EPOCH", StringComparison.Ordinal) ||
                !File.Exists(WorkshopDeliveryOutcomeAutomationReceiptStore.ReceiptPath) ||
                accountGrowthAutomations.Count != 1 ||
                accountGrowthAutomations[0].AutomationId != accountGrowthAutomation.AutomationId ||
                accountGrowthAutomations[0].DeliveryOutcomeAutomationId != deliveryOutcomeAutomation.AutomationId ||
                accountGrowthAutomations[0].DeliveryOutcomeAutomationReceiptId != deliveryOutcomeAutomationReceipt.ReceiptId ||
                accountGrowthAutomations[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                accountGrowthAutomations[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                accountGrowthAutomations[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                accountGrowthAutomations[0].TimingAwareRenewalReceiptId != timingAwareRenewalReceipt.ReceiptId ||
                accountGrowthAutomations[0].AutomationKind != "account-growth-automation" ||
                accountGrowthAutomations[0].Status != "account-growth-automation-ready" ||
                accountGrowthAutomations[0].GrowthPath != "retention-referral-expansion" ||
                !accountGrowthAutomations[0].CustomerSafe ||
                !accountGrowthAutomations[0].CustomerVisibleReceiptReady ||
                !accountGrowthAutomations[0].WebportalExportReady ||
                !accountGrowthAutomations[0].EpochTimingProviderOnly ||
                accountGrowthAutomations[0].WorkshopCalendarOwnership ||
                accountGrowthAutomations[0].MonitorWorkflowExposed ||
                accountGrowthAutomations[0].PaymentLiveEnabled ||
                !accountGrowthAutomations[0].AraReviewComplete ||
                !accountGrowthAutomations[0].RenewalReady ||
                !accountGrowthAutomations[0].RetentionReady ||
                !accountGrowthAutomations[0].ReferralReady ||
                !accountGrowthAutomations[0].GrowthPlanReady ||
                !accountGrowthAutomations[0].ConversionReady ||
                !accountGrowthAutomations[0].ExpansionRequestReady ||
                accountGrowthAutomations[0].RequiresEpochTimingRequest ||
                !accountGrowthAutomations[0].NativeExecutionReady ||
                !accountGrowthAutomations[0].OperatorNextAction.Contains("without adding live calendar load", StringComparison.Ordinal) ||
                !accountGrowthAutomations[0].CustomerSafeStatus.Contains("EPOCH remains timing-provider-only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAccountGrowthAutomationStore.AutomationPath) ||
                accountGrowthAutomationReceipts.Count != 1 ||
                accountGrowthAutomationReceipts[0].ReceiptId != accountGrowthAutomationReceipt.ReceiptId ||
                accountGrowthAutomationReceipts[0].AutomationId != accountGrowthAutomation.AutomationId ||
                accountGrowthAutomationReceipts[0].DeliveryOutcomeAutomationId != deliveryOutcomeAutomation.AutomationId ||
                accountGrowthAutomationReceipts[0].DeliveryOutcomeAutomationReceiptId != deliveryOutcomeAutomationReceipt.ReceiptId ||
                accountGrowthAutomationReceipts[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                accountGrowthAutomationReceipts[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                accountGrowthAutomationReceipts[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                accountGrowthAutomationReceipts[0].TimingAwareRenewalReceiptId != timingAwareRenewalReceipt.ReceiptId ||
                accountGrowthAutomationReceipts[0].Kind != "account-growth-automation" ||
                accountGrowthAutomationReceipts[0].Status != "customer-safe-account-growth-ready" ||
                !accountGrowthAutomationReceipts[0].CustomerSafe ||
                !accountGrowthAutomationReceipts[0].CustomerVisibleReceiptReady ||
                !accountGrowthAutomationReceipts[0].WebportalExportReady ||
                !accountGrowthAutomationReceipts[0].EpochTimingProviderOnly ||
                accountGrowthAutomationReceipts[0].WorkshopCalendarOwnership ||
                accountGrowthAutomationReceipts[0].MonitorWorkflowExposed ||
                accountGrowthAutomationReceipts[0].PaymentLiveEnabled ||
                !accountGrowthAutomationReceipts[0].AraReviewComplete ||
                !accountGrowthAutomationReceipts[0].RenewalReady ||
                !accountGrowthAutomationReceipts[0].RetentionReady ||
                !accountGrowthAutomationReceipts[0].ReferralReady ||
                !accountGrowthAutomationReceipts[0].GrowthPlanReady ||
                !accountGrowthAutomationReceipts[0].ConversionReady ||
                !accountGrowthAutomationReceipts[0].ExpansionRequestReady ||
                accountGrowthAutomationReceipts[0].RequiresEpochTimingRequest ||
                !accountGrowthAutomationReceipts[0].CustomerSafeMessage.Contains("next-step follow-up", StringComparison.Ordinal) ||
                !accountGrowthAutomationReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAccountGrowthAutomationReceiptStore.ReceiptPath))
            {
                return 2;
            }

            return 0;
        }
        catch
        {
            return 1;
        }
        finally
        {
            Environment.SetEnvironmentVariable(
                WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable,
                previousStateDirectory);
            Environment.SetEnvironmentVariable(
                WorkshopEpochRevisedCalendarTimingPayloadStore.EpochStateDirectoryEnvironmentVariable,
                previousEpochStateDirectory);

            try
            {
                if (Directory.Exists(smokeStateDirectory))
                {
                    Directory.Delete(smokeStateDirectory, true);
                }

                if (Directory.Exists(smokeEpochStateDirectory))
                {
                    Directory.Delete(smokeEpochStateDirectory, true);
                }
            }
            catch (IOException)
            {
                // Smoke state is isolated under the temp directory and can be cleaned later.
            }
        }
    }

    private static void WriteEpochRevisedTimingExportFixture(string epochStateDirectory)
    {
        Directory.CreateDirectory(epochStateDirectory);

        WorkshopEpochRevisedCalendarTimingPayload payload =
            WorkshopEpochRevisedCalendarTimingPayload.FromEpochTimingProjection(
                "epoch-revised-timing-export-001",
                DateTimeOffset.UtcNow);

        JsonSerializerOptions jsonOptions = new()
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            WriteIndented = true
        };

        string path = Path.Combine(
            epochStateDirectory,
            WorkshopEpochRevisedCalendarTimingPayloadStore.PayloadFileName);
        File.WriteAllText(path, JsonSerializer.Serialize(new[] { payload }, jsonOptions));
    }
}
