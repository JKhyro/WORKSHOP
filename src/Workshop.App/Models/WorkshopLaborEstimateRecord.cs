namespace Workshop.App;

public sealed record WorkshopLaborEstimateRecord(
    string EstimateId,
    string CreatedAtUtc,
    string SourceSurface,
    string OfferExperimentId,
    string OfferLabel,
    string ServiceLane,
    string Status,
    int PrepMinutes,
    int LiveMinutes,
    int ReviewMinutes,
    int AdminMinutes,
    int ExpectedRevenueJpy,
    int AraMinutesSaved,
    int TotalOperatorMinutes,
    int ExpectedYenPerOperatorHour,
    bool LaborTrapWarning,
    bool LowLaborViable,
    bool AsyncFirstDelivery,
    bool AppOwnedLaborEstimateState,
    bool CustomerVisible,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool ProviderGoLiveRequested,
    bool LiveProviderEnabled,
    bool AiForwardCopy,
    string JapanCopyMode,
    string OperatorNextAction)
{
    public static IReadOnlyList<WorkshopLaborEstimateRecord> CreateDefaultEstimates(
        WorkshopRevenueCommandResult command,
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                "labor-estimate-submission-001",
                command.OfferExperimentId,
                "Adult Submission Review Pack",
                "submission-review",
                60,
                0,
                240,
                60,
                160000,
                180,
                command.LowLaborViable,
                createdAtUtc),
            Create(
                "labor-estimate-live-heavy-001",
                "offer-experiment-live-heavy-001",
                "Live Heavy Lesson Block",
                "english-live-classes",
                90,
                960,
                120,
                120,
                180000,
                60,
                false,
                createdAtUtc)
        };
    }

    private static WorkshopLaborEstimateRecord Create(
        string estimateId,
        string offerExperimentId,
        string offerLabel,
        string serviceLane,
        int prepMinutes,
        int liveMinutes,
        int reviewMinutes,
        int adminMinutes,
        int expectedRevenueJpy,
        int araMinutesSaved,
        bool nativeLowLaborReady,
        DateTimeOffset createdAtUtc)
    {
        int totalOperatorMinutes = prepMinutes + liveMinutes + reviewMinutes + adminMinutes;
        bool laborTrapWarning = totalOperatorMinutes <= 0 ||
            liveMinutes > reviewMinutes + adminMinutes ||
            expectedRevenueJpy <= 0;
        bool lowLaborViable = nativeLowLaborReady &&
            !laborTrapWarning &&
            liveMinutes <= reviewMinutes + adminMinutes &&
            araMinutesSaved >= 120;
        int expectedYenPerOperatorHour = totalOperatorMinutes > 0
            ? (int)Math.Round(expectedRevenueJpy / (totalOperatorMinutes / 60.0))
            : 0;

        return new WorkshopLaborEstimateRecord(
            estimateId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.LaborEstimateLedger",
            offerExperimentId,
            offerLabel,
            serviceLane,
            laborTrapWarning ? "labor-trap-warning" : "lower-labor-path-ready",
            prepMinutes,
            liveMinutes,
            reviewMinutes,
            adminMinutes,
            expectedRevenueJpy,
            araMinutesSaved,
            totalOperatorMinutes,
            expectedYenPerOperatorHour,
            laborTrapWarning,
            lowLaborViable,
            liveMinutes == 0,
            true,
            false,
            false,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            "ai-neutral",
            laborTrapWarning
                ? "Do not approve this live-heavy lane until the offer is repriced, reduced, or converted into an async/cohort/submission workflow."
                : "Prioritize this lower-labor lane before adding live classes because it preserves review quality while protecting operator time.");
    }
}
