namespace Workshop.App;

public sealed record WorkshopOfferExperimentRecord(
    string OfferExperimentId,
    string CreatedAtUtc,
    string SourceSurface,
    string OfferLabel,
    string ServiceLane,
    string Status,
    int ExpectedMonthlyRevenueJpy,
    int ExpectedOperatorMinutes,
    int LowLaborScore,
    bool OfferExperimentReady,
    bool AppOwnedOfferExperimentState,
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
    public static IReadOnlyList<WorkshopOfferExperimentRecord> CreateDefaultRecords(
        WorkshopRevenueCommandResult command,
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                command.OfferExperimentId,
                "Adult Submission Review Pack",
                "submission-review",
                "offer-experiment-test-ready",
                160000,
                480,
                92,
                command.LowLaborViable && command.RoiTestReady,
                "Test this offer experiment through the App before widening public service-page exposure.",
                createdAtUtc),
            Create(
                "offer-experiment-systems-001",
                "Small Operator CRM Cleanup",
                "crm-database-admin",
                "offer-experiment-fit-review",
                225000,
                720,
                84,
                false,
                "Hold public listing until the scoped systems checklist, service page, and fixed review boundary are ready.",
                createdAtUtc)
        };
    }

    private static WorkshopOfferExperimentRecord Create(
        string offerExperimentId,
        string offerLabel,
        string serviceLane,
        string status,
        int expectedMonthlyRevenueJpy,
        int expectedOperatorMinutes,
        int lowLaborScore,
        bool offerExperimentReady,
        string operatorNextAction,
        DateTimeOffset createdAtUtc)
    {
        bool ready = offerExperimentReady &&
            expectedMonthlyRevenueJpy > 0 &&
            expectedOperatorMinutes > 0 &&
            lowLaborScore >= 80 &&
            !string.IsNullOrWhiteSpace(offerLabel) &&
            !string.IsNullOrWhiteSpace(serviceLane);

        return new WorkshopOfferExperimentRecord(
            offerExperimentId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferExperimentLedger",
            offerLabel,
            serviceLane,
            status,
            expectedMonthlyRevenueJpy,
            expectedOperatorMinutes,
            lowLaborScore,
            ready,
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
            operatorNextAction);
    }
}
