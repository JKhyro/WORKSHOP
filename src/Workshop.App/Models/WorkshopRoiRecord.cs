namespace Workshop.App;

public sealed record WorkshopRoiRecord(
    string RoiRecordId,
    string CreatedAtUtc,
    string SourceSurface,
    string OfferExperimentId,
    string OfferLabel,
    string ServiceLane,
    string Status,
    int ExpectedRevenueJpy,
    int ExpectedCostJpy,
    int ExpectedOperatorMinutes,
    int PaybackDays,
    int ExpectedProfitJpy,
    int ExpectedYenPerOperatorHour,
    bool ApprovedForTest,
    bool RoiTestReady,
    bool AppOwnedRoiState,
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
    public static IReadOnlyList<WorkshopRoiRecord> CreateDefaultRecords(
        WorkshopRevenueCommandResult command,
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                command.RoiRecordId,
                command.OfferExperimentId,
                "Adult Submission Review Pack",
                "submission-review",
                160000,
                20000,
                480,
                7,
                command.RoiTestReady,
                createdAtUtc),
            Create(
                "roi-live-heavy-001",
                "offer-experiment-live-heavy-001",
                "Live Heavy Lesson Block",
                "english-live-classes",
                180000,
                50000,
                1290,
                30,
                false,
                createdAtUtc)
        };
    }

    private static WorkshopRoiRecord Create(
        string roiRecordId,
        string offerExperimentId,
        string offerLabel,
        string serviceLane,
        int expectedRevenueJpy,
        int expectedCostJpy,
        int expectedOperatorMinutes,
        int paybackDays,
        bool approvedForTest,
        DateTimeOffset createdAtUtc)
    {
        int expectedProfitJpy = expectedRevenueJpy - expectedCostJpy;
        int expectedYenPerOperatorHour = expectedOperatorMinutes > 0
            ? (int)Math.Round(expectedRevenueJpy / (expectedOperatorMinutes / 60.0))
            : 0;
        bool roiTestReady = approvedForTest &&
            expectedProfitJpy > 0 &&
            expectedOperatorMinutes > 0 &&
            paybackDays >= 0;

        return new WorkshopRoiRecord(
            roiRecordId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.RoiRecordLedger",
            offerExperimentId,
            offerLabel,
            serviceLane,
            roiTestReady ? "roi-test-ready" : "roi-test-hold",
            expectedRevenueJpy,
            expectedCostJpy,
            expectedOperatorMinutes,
            paybackDays,
            expectedProfitJpy,
            expectedYenPerOperatorHour,
            approvedForTest,
            roiTestReady,
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
            roiTestReady
                ? "Test this ROI lane before live-heavy offers because payback, margin, and operator time are bounded."
                : "Hold this ROI lane until pricing, delivery time, or scope reduces operator load and payback risk.");
    }
}
