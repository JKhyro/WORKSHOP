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
                !File.Exists(WorkshopTimingAwareRenewalReceiptStore.ReceiptPath))
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
