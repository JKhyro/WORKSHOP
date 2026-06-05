namespace Workshop.App;

public sealed record WorkshopMarketResearchRecord(
    string MarketResearchId,
    string CreatedAtUtc,
    string SourceSurface,
    string SourceLabel,
    string SourceUrl,
    string Segment,
    string ObservedGap,
    int ConfidenceScore,
    bool EvidenceReady,
    string RelatedOfferExperimentId,
    bool AppOwnedMarketResearchState,
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
    public static IReadOnlyList<WorkshopMarketResearchRecord> CreateDefaultRecords(
        WorkshopRevenueCommandResult command,
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                "market-eiken-writing-001",
                "EIKEN official grade and skills map",
                "https://www.eiken.or.jp/eiken/en/grades/",
                "adult-test-prep",
                "EIKEN spans 5 through 1, so WORKSHOP should offer broad test-prep lanes instead of only Pre-1.",
                86,
                command.OfferExperimentId,
                "Use this evidence to keep adult submission/test-prep offers broad, structured, and outcome-led.",
                createdAtUtc),
            Create(
                "market-sme-workflow-001",
                "Japan SME workflow and AI adoption caution",
                "https://global.rakuten.com/corp/news/press/2025/0129_01.html",
                "small-business-systems",
                "Outcome-led CRM/admin workflow offers can sell structure without leading with AI terminology.",
                78,
                "offer-experiment-systems-001",
                "Frame systems help as organized workflow support; keep AI/ARA tooling internal unless the buyer asks for it.",
                createdAtUtc)
        };
    }

    private static WorkshopMarketResearchRecord Create(
        string marketResearchId,
        string sourceLabel,
        string sourceUrl,
        string segment,
        string observedGap,
        int confidenceScore,
        string relatedOfferExperimentId,
        string operatorNextAction,
        DateTimeOffset createdAtUtc)
    {
        bool evidenceReady = confidenceScore > 0 &&
            !string.IsNullOrWhiteSpace(sourceLabel) &&
            !string.IsNullOrWhiteSpace(sourceUrl) &&
            !string.IsNullOrWhiteSpace(observedGap);

        return new WorkshopMarketResearchRecord(
            marketResearchId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.MarketEvidenceLedger",
            sourceLabel,
            sourceUrl,
            segment,
            observedGap,
            confidenceScore,
            evidenceReady,
            relatedOfferExperimentId,
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
