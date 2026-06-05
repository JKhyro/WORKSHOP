namespace Workshop.App;

public sealed record WorkshopCompetitorPriceAnchorRecord(
    string PriceAnchorId,
    string CreatedAtUtc,
    string SourceSurface,
    string Competitor,
    string OfferLabel,
    int LowPriceJpy,
    int PremiumPriceJpy,
    int PriceSpreadJpy,
    string SourceUrl,
    bool EvidenceReady,
    bool AppOwnedPriceAnchorState,
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
    public static IReadOnlyList<WorkshopCompetitorPriceAnchorRecord> CreateDefaultRecords(
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                "price-anchor-low-cost-writing-001",
                "Low-cost automated correction tools",
                "generic writing correction",
                480,
                5000,
                "https://www.eikendojo.com/",
                "Do not price human-reviewed submission work like low-cost automated correction; sell structure, review quality, and clear next action.",
                createdAtUtc),
            Create(
                "price-anchor-premium-testprep-001",
                "Premium private online exam support",
                "private writing/test-prep support",
                31680,
                45760,
                "https://www.eltschool.jp/en/price?purpose=eiken_basic",
                "Use premium instruction anchors to keep specialized review, strategy, and deadline support out of a race-to-bottom price band.",
                createdAtUtc)
        };
    }

    private static WorkshopCompetitorPriceAnchorRecord Create(
        string priceAnchorId,
        string competitor,
        string offerLabel,
        int lowPriceJpy,
        int premiumPriceJpy,
        string sourceUrl,
        string operatorNextAction,
        DateTimeOffset createdAtUtc)
    {
        bool evidenceReady = !string.IsNullOrWhiteSpace(competitor) &&
            !string.IsNullOrWhiteSpace(offerLabel) &&
            !string.IsNullOrWhiteSpace(sourceUrl) &&
            lowPriceJpy >= 0 &&
            premiumPriceJpy >= lowPriceJpy;

        return new WorkshopCompetitorPriceAnchorRecord(
            priceAnchorId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.CompetitorPriceAnchorLedger",
            competitor,
            offerLabel,
            lowPriceJpy,
            premiumPriceJpy,
            premiumPriceJpy - lowPriceJpy,
            sourceUrl,
            evidenceReady,
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
