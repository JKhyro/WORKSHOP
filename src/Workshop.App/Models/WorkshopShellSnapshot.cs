namespace Workshop.App;

public sealed record WorkshopShellSnapshot(
    string ProductName,
    string CoreStatus,
    string RevenueLane,
    string OfferExperimentStatus,
    string DeliveryQueueStatus,
    string CustomerSafeStatus,
    int LowLaborScore,
    int MonthlyRevenueTargetJpy,
    int ExpectedOperatorMinutes,
    bool AraHumanReviewRequired,
    bool EpochBoundaryEnforced,
    bool MonitorBoundaryEnforced);
