namespace Workshop.App;

public sealed record WorkshopOfferLaunchIntakeActionRecord(
    string ActionId,
    string CreatedAtUtc,
    string SourceSurface,
    string SourceReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string AgeBand,
    string MaterialStatus,
    string Status,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedIntakeState,
    bool CompatibilityGateRequired,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool ProviderGoLiveRequested,
    bool LiveProviderEnabled,
    bool AiForwardCopy,
    string JapanCopyMode,
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchIntakeActionRecord FromReadinessReceipt(
        WorkshopOfferLaunchReadinessReceipt readinessReceipt,
        DateTimeOffset createdAtUtc,
        string customerLabel = "Launch Offer Prospect",
        string ageBand = "adult",
        string materialStatus = "submission-ready",
        bool requiresEpochTimingRequest = false)
    {
        string actionId = $"workshop-offer-launch-intake-action-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool compatibilityGateRequired = ageBand.Equals("under-19", StringComparison.OrdinalIgnoreCase);
        bool safeForAction =
            readinessReceipt.CustomerSafe &&
            readinessReceipt.CustomerVisibleReceiptReady &&
            readinessReceipt.WebportalExportReady &&
            readinessReceipt.EpochTimingProviderOnly &&
            !readinessReceipt.WorkshopCalendarOwnership &&
            !readinessReceipt.MonitorWorkflowExposed &&
            !readinessReceipt.PaymentLiveEnabled &&
            !readinessReceipt.AiForwardCopy &&
            readinessReceipt.JapanCopyMode == "ai-neutral" &&
            readinessReceipt.Under19GuardRequired &&
            readinessReceipt.NativeExecutionReady;

        return new WorkshopOfferLaunchIntakeActionRecord(
            actionId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchIntakeAction",
            readinessReceipt.ReceiptId,
            readinessReceipt.ServiceRequestId,
            readinessReceipt.ServiceLane,
            readinessReceipt.PackageId,
            "offer-launch-intake-action",
            customerLabel,
            ageBand,
            materialStatus,
            compatibilityGateRequired ? "offer-launch-intake-fit-review" : "offer-launch-intake-queued",
            readinessReceipt.OfferLabel,
            readinessReceipt.PriceLabel,
            compatibilityGateRequired
                ? "Under-19 launch offer intake is held for compatibility review. EPOCH remains timing-provider-only."
                : "Adult launch offer intake is queued inside WORKSHOP. EPOCH remains timing-provider-only.",
            compatibilityGateRequired
                ? "Review compatibility before accepting this under-19 request, then export only the customer-safe intake receipt."
                : "Review the adult launch offer request inside WORKSHOP, then export only the customer-safe intake receipt.",
            false,
            safeForAction,
            false,
            true,
            compatibilityGateRequired,
            readinessReceipt.EpochTimingProviderOnly,
            readinessReceipt.WorkshopCalendarOwnership,
            readinessReceipt.MonitorWorkflowExposed,
            readinessReceipt.PaymentLiveEnabled,
            false,
            false,
            readinessReceipt.AiForwardCopy,
            "ai-neutral",
            true,
            readinessReceipt.NativeExecutionReady,
            requiresEpochTimingRequest);
    }
}
