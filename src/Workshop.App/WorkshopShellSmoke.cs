using Workshop.App.Native;
using Workshop.App.Services;

namespace Workshop.App;

internal static class WorkshopShellSmoke
{
    public static int Run()
    {
        string? previousStateDirectory = Environment.GetEnvironmentVariable(
            WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable);
        string smokeStateDirectory = Path.Combine(
            Path.GetTempPath(),
            "Workshop.App.Smoke",
            Guid.NewGuid().ToString("N"));

        try
        {
            Environment.SetEnvironmentVariable(
                WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable,
                smokeStateDirectory);

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
                !File.Exists(WorkshopCustomerServiceStatusStore.StatusPath))
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

            try
            {
                if (Directory.Exists(smokeStateDirectory))
                {
                    Directory.Delete(smokeStateDirectory, true);
                }
            }
            catch (IOException)
            {
                // Smoke state is isolated under the temp directory and can be cleaned later.
            }
        }
    }
}
