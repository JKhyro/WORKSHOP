namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryOutcomeRecord(
    string OutcomeId,
    string CreatedAtUtc,
    string SourceSurface,
    string MilestoneReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string OutcomePath,
    string MilestonePath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedOutcomeState,
    bool AppOwnedMilestoneState,
    bool OutcomeReady,
    bool MilestoneReady,
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
    public static WorkshopOfferLaunchDeliveryOutcomeRecord FromMilestoneReceipt(
        WorkshopOfferLaunchDeliveryMilestoneReceipt milestoneReceipt,
        DateTimeOffset createdAtUtc)
    {
        string outcomeId = $"workshop-offer-launch-delivery-outcome-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool safeForOutcome =
            milestoneReceipt.CustomerSafe &&
            milestoneReceipt.CustomerVisible &&
            milestoneReceipt.CustomerVisibleReceiptReady &&
            milestoneReceipt.WebportalExportReady &&
            milestoneReceipt.AppOwnedMilestoneState &&
            milestoneReceipt.EpochTimingProviderOnly &&
            !milestoneReceipt.WorkshopCalendarOwnership &&
            !milestoneReceipt.MonitorWorkflowExposed &&
            !milestoneReceipt.PaymentLiveEnabled &&
            !milestoneReceipt.ProviderGoLiveRequested &&
            !milestoneReceipt.LiveProviderEnabled &&
            !milestoneReceipt.AiForwardCopy &&
            milestoneReceipt.JapanCopyMode == "ai-neutral" &&
            milestoneReceipt.Under19GuardRequired &&
            milestoneReceipt.NativeExecutionReady;
        bool outcomeReady = safeForOutcome &&
            milestoneReceipt.MilestoneReady &&
            !milestoneReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryOutcomeRecord(
            outcomeId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryOutcome",
            milestoneReceipt.ReceiptId,
            milestoneReceipt.ServiceRequestId,
            milestoneReceipt.ServiceLane,
            milestoneReceipt.PackageId,
            "offer-launch-delivery-outcome",
            milestoneReceipt.CustomerLabel,
            outcomeReady
                ? "offer-launch-delivery-outcome-ready"
                : safeForOutcome
                    ? "offer-launch-delivery-outcome-fit-review"
                    : "offer-launch-delivery-outcome-blocked",
            outcomeReady ? "adult-service-launch-delivery-outcome-ready" : "compatibility-review-before-launch-delivery-outcome",
            milestoneReceipt.MilestonePath,
            milestoneReceipt.OfferLabel,
            milestoneReceipt.PriceLabel,
            outcomeReady
                ? "WORKSHOP completed the first delivery outcome and can review follow-up or renewal options. EPOCH remains timing-provider-only."
                : safeForOutcome
                    ? "WORKSHOP is holding the delivery outcome until compatibility review is complete."
                    : "WORKSHOP cannot mark the delivery outcome until milestone receipt gates are complete.",
            outcomeReady
                ? "Review outcome evidence and export only the customer-safe delivery outcome receipt."
                : safeForOutcome
                    ? "Complete compatibility review before outcome status is exported."
                    : "Resolve milestone receipt or boundary blockers before outcome status becomes customer-safe.",
            false,
            safeForOutcome,
            false,
            true,
            milestoneReceipt.AppOwnedMilestoneState,
            outcomeReady,
            milestoneReceipt.MilestoneReady,
            milestoneReceipt.CompatibilityGateRequired,
            milestoneReceipt.EpochTimingProviderOnly,
            milestoneReceipt.WorkshopCalendarOwnership,
            milestoneReceipt.MonitorWorkflowExposed,
            milestoneReceipt.PaymentLiveEnabled,
            milestoneReceipt.ProviderGoLiveRequested,
            milestoneReceipt.LiveProviderEnabled,
            milestoneReceipt.AiForwardCopy,
            "ai-neutral",
            milestoneReceipt.Under19GuardRequired,
            milestoneReceipt.NativeExecutionReady,
            milestoneReceipt.RequiresEpochTimingRequest);
    }
}
