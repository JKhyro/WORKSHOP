using Workshop.App.Native;

namespace Workshop.App;

internal static class WorkshopShellSmoke
{
    public static int Run()
    {
        try
        {
            WorkshopShellSnapshot snapshot = WorkshopNative.LoadSnapshot();
            WorkshopRevenueCommandResult command = WorkshopNative.LoadRevenueCommand();
            WorkshopRevenueExecutionReceipt execution = WorkshopNative.ExecuteRevenueCommand("approve-operator-reviewed-offer");

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
                execution.DeliveryResultReceiptId != "workshop-exec-delivery-receipt-001")
            {
                return 2;
            }

            return 0;
        }
        catch
        {
            return 1;
        }
    }
}
