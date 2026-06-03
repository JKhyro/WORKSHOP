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
                !File.Exists(WorkshopServiceRevenueCommandReceiptStore.ReceiptPath))
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
