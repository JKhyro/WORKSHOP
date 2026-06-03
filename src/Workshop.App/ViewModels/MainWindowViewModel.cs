using Workshop.App.Native;

namespace Workshop.App.ViewModels;

public sealed class MainWindowViewModel
{
    private MainWindowViewModel(
        WorkshopShellSnapshot snapshot,
        WorkshopRevenueCommandResult command,
        WorkshopRevenueExecutionReceipt execution)
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

    public static MainWindowViewModel Load()
    {
        return new MainWindowViewModel(
            WorkshopNative.LoadSnapshotOrFallback(),
            WorkshopNative.LoadRevenueCommandOrFallback(),
            WorkshopNative.ExecuteRevenueCommandOrFallback("approve-operator-reviewed-offer"));
    }
}
