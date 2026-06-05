namespace Workshop.App;

public sealed record WorkshopMaterialAssetRecord(
    string MaterialAssetId,
    string CreatedAtUtc,
    string SourceSurface,
    string Title,
    string AssetKind,
    string AssetFormat,
    string LinkedOfferId,
    string LinkedServicePageId,
    int ReuseCount,
    int ExpectedTimeSavedMinutes,
    bool MaterialAssetReady,
    bool AraDraftReady,
    bool HumanReviewRequired,
    string LowLaborLeverage,
    bool AppOwnedMaterialAssetState,
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
    string CustomerSafeSummary,
    string OperatorNextAction)
{
    public static IReadOnlyList<WorkshopMaterialAssetRecord> CreateDefaultRecords(
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                "material-asset-eiken-writing-rubric-001",
                "Adult EIKEN Writing Review Rubric",
                "rubric",
                "worksheet-rubric",
                "offer-experiment-submission-001",
                "service-page-submission-001",
                4,
                90,
                "high",
                "A reusable review rubric supports consistent writing feedback without turning the offer into live-class labor.",
                "Keep the rubric App-owned, reuse it for adult submission review, and require human review before any customer-facing correction leaves WORKSHOP.",
                createdAtUtc),
            Create(
                "material-asset-crm-cleanup-checklist-001",
                "Small Operator CRM Cleanup Checklist",
                "checklist",
                "delivery-checklist",
                "offer-experiment-systems-001",
                "service-page-systems-001",
                3,
                120,
                "high",
                "A reusable systems checklist keeps scope reviews repeatable and easier to delegate.",
                "Keep the checklist App-owned until the systems offer has a repeatable fit-review boundary and customer-safe service page path.",
                createdAtUtc)
        };
    }

    private static WorkshopMaterialAssetRecord Create(
        string materialAssetId,
        string title,
        string assetKind,
        string assetFormat,
        string linkedOfferId,
        string linkedServicePageId,
        int reuseCount,
        int expectedTimeSavedMinutes,
        string lowLaborLeverage,
        string customerSafeSummary,
        string operatorNextAction,
        DateTimeOffset createdAtUtc)
    {
        bool materialAssetReady =
            !string.IsNullOrWhiteSpace(title) &&
            !string.IsNullOrWhiteSpace(assetKind) &&
            !string.IsNullOrWhiteSpace(assetFormat) &&
            !string.IsNullOrWhiteSpace(linkedOfferId) &&
            !string.IsNullOrWhiteSpace(linkedServicePageId) &&
            reuseCount >= 0 &&
            expectedTimeSavedMinutes > 0 &&
            !string.IsNullOrWhiteSpace(lowLaborLeverage) &&
            !string.IsNullOrWhiteSpace(customerSafeSummary);

        return new WorkshopMaterialAssetRecord(
            materialAssetId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.MaterialAssetLibrary",
            title,
            assetKind,
            assetFormat,
            linkedOfferId,
            linkedServicePageId,
            reuseCount,
            expectedTimeSavedMinutes,
            materialAssetReady,
            true,
            true,
            lowLaborLeverage,
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
            customerSafeSummary,
            operatorNextAction);
    }
}
