namespace Workshop.App;

public sealed record WorkshopMarketingChannelExperimentRecord(
    string MarketingChannelExperimentId,
    string CreatedAtUtc,
    string SourceSurface,
    string Channel,
    string LinkedServicePageId,
    string TargetSegment,
    string Status,
    int ExpectedLeadsPerMonth,
    int ExpectedConversionRatePercent,
    int ExpectedMonthlyRevenueJpy,
    int OperatorMinutesPerLead,
    bool MarketingChannelExperimentReady,
    bool AppOwnedMarketingChannelState,
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
    public static IReadOnlyList<WorkshopMarketingChannelExperimentRecord> CreateDefaultRecords(
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                "marketing-channel-direct-referral-001",
                "direct-referral",
                "service-page-submission-001",
                "adult-test-prep",
                "ready-to-list",
                6,
                35,
                96000,
                12,
                "Prepare direct referral copy that sells structure, turnaround, and review quality without leading with AI.",
                createdAtUtc),
            Create(
                "marketing-channel-local-business-001",
                "small-business-outreach",
                "service-page-systems-001",
                "small-business-systems",
                "research",
                4,
                25,
                75000,
                20,
                "Build a short local business systems audit message focused on follow-up clarity and admin cleanup.",
                createdAtUtc)
        };
    }

    private static WorkshopMarketingChannelExperimentRecord Create(
        string marketingChannelExperimentId,
        string channel,
        string linkedServicePageId,
        string targetSegment,
        string status,
        int expectedLeadsPerMonth,
        int expectedConversionRatePercent,
        int expectedMonthlyRevenueJpy,
        int operatorMinutesPerLead,
        string operatorNextAction,
        DateTimeOffset createdAtUtc)
    {
        bool ready =
            !string.IsNullOrWhiteSpace(channel) &&
            !string.IsNullOrWhiteSpace(linkedServicePageId) &&
            !string.IsNullOrWhiteSpace(targetSegment) &&
            !string.IsNullOrWhiteSpace(status) &&
            expectedLeadsPerMonth > 0 &&
            expectedConversionRatePercent is > 0 and <= 100 &&
            expectedMonthlyRevenueJpy > 0 &&
            operatorMinutesPerLead >= 0 &&
            !string.IsNullOrWhiteSpace(operatorNextAction);

        return new WorkshopMarketingChannelExperimentRecord(
            marketingChannelExperimentId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.MarketingChannelExperimentLedger",
            channel,
            linkedServicePageId,
            targetSegment,
            status,
            expectedLeadsPerMonth,
            expectedConversionRatePercent,
            expectedMonthlyRevenueJpy,
            operatorMinutesPerLead,
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
