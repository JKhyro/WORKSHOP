using Workshop.App.Native;

namespace Workshop.App.ViewModels;

public sealed class MainWindowViewModel
{
    private MainWindowViewModel(WorkshopShellSnapshot snapshot)
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

    public static MainWindowViewModel Load()
    {
        return new MainWindowViewModel(WorkshopNative.LoadSnapshotOrFallback());
    }
}
