namespace Workshop.App;

public sealed record WorkshopOfferLaunchReadinessRecord(
    string LaunchReadinessId,
    string CreatedAtUtc,
    string SourceSurface,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string OfferExperimentId,
    string RevenueReceiptId,
    string DeliveryLogId,
    string EpochHandoffStatus,
    string LaunchStage,
    int LaunchPriorityRank,
    int TimeToCashDays,
    int ExpectedMonthlyRevenueJpy,
    int ExpectedOperatorMinutes,
    int CashSpeedScore,
    int LaborLeverageScore,
    int ProofReadinessScore,
    int MarketDemandScore,
    int LaunchPriorityScore,
    string JapanCopyMode,
    bool AiForwardCopy,
    bool Under19GuardRequired,
    string Status,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool LowLaborViable,
    bool RoiTestReady,
    bool AraReviewRequired,
    bool OwnerTimeBudgetClear,
    bool NativeCommandReady,
    bool NativeExecutionReady)
{
    public static WorkshopOfferLaunchReadinessRecord FromNativeCommand(
        WorkshopShellSnapshot snapshot,
        WorkshopRevenueCommandResult command,
        WorkshopRevenueExecutionReceipt execution,
        DateTimeOffset createdAtUtc)
    {
        string launchReadinessId = $"workshop-offer-launch-readiness-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..72];
        bool safeForReadiness =
            snapshot.ProductName == "WORKSHOP" &&
            snapshot.LowLaborScore >= 80 &&
            snapshot.AraHumanReviewRequired &&
            snapshot.EpochBoundaryEnforced &&
            snapshot.MonitorBoundaryEnforced &&
            command.LowLaborViable &&
            command.RoiTestReady &&
            command.AraReviewRequired &&
            command.OwnerTimeBudgetClear &&
            command.NativeCommandReady &&
            execution.ExecutedLocally &&
            execution.NativeExecutionReady &&
            execution.CustomerVisibleReceiptReady &&
            execution.AraOperatorReviewComplete &&
            execution.EpochTimingRequested &&
            !execution.MonitorWorkflowExposed;

        int cashSpeedScore = safeForReadiness ? 90 : 45;
        int laborLeverageScore = snapshot.LowLaborScore;
        int proofReadinessScore = command.RoiTestReady && execution.CustomerVisibleReceiptReady ? 88 : 45;
        int marketDemandScore = snapshot.MonthlyRevenueTargetJpy >= 300000 ? 84 : 55;
        int launchPriorityScore =
            (cashSpeedScore + laborLeverageScore + proofReadinessScore + marketDemandScore) / 4;

        return new WorkshopOfferLaunchReadinessRecord(
            launchReadinessId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchReadiness",
            command.ServiceRequestId,
            snapshot.RevenueLane,
            "pkg-submission-4",
            command.OfferExperimentId,
            command.RevenueReceiptId,
            command.DeliveryLogId,
            command.EpochHandoffStatus,
            safeForReadiness ? "ready-for-customer-safe-listing" : "launch-readiness-blocked",
            safeForReadiness ? 1 : 99,
            safeForReadiness ? 3 : 30,
            snapshot.MonthlyRevenueTargetJpy,
            snapshot.ExpectedOperatorMinutes,
            cashSpeedScore,
            laborLeverageScore,
            proofReadinessScore,
            marketDemandScore,
            launchPriorityScore,
            "ai-neutral",
            false,
            true,
            safeForReadiness ? "offer-launch-readiness-ready" : "offer-launch-readiness-blocked",
            safeForReadiness
                ? "WORKSHOP has a launch-ready offer path for adult async submission review. EPOCH remains timing-provider-only."
                : "WORKSHOP offer launch readiness is waiting for native command, ROI, ARA review, or boundary evidence.",
            safeForReadiness
                ? "List the customer-safe offer path, route under-19 requests through compatibility review, and request EPOCH timing only for appointment/deadline needs."
                : "Resolve launch readiness blockers before any customer-safe offer receipt is exported.",
            false,
            safeForReadiness,
            false,
            true,
            false,
            false,
            false,
            command.LowLaborViable,
            command.RoiTestReady,
            command.AraReviewRequired,
            command.OwnerTimeBudgetClear,
            command.NativeCommandReady,
            execution.NativeExecutionReady);
    }
}
