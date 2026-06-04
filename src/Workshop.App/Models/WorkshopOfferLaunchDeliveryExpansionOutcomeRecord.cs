namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionOutcomeRecord(
    string ExpansionOutcomeId,
    string CreatedAtUtc,
    string SourceSurface,
    string ExpansionMilestoneReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string ExpansionOutcomePath,
    string ExpansionMilestonePath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedExpansionOutcomeState,
    bool AppOwnedExpansionMilestoneState,
    bool ExpansionOutcomeReady,
    bool ExpansionMilestoneReady,
    bool RepeatServiceRequested,
    bool RenewalRequested,
    bool ReferralRequested,
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
    public static WorkshopOfferLaunchDeliveryExpansionOutcomeRecord FromExpansionMilestoneReceipt(
        WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt expansionMilestoneReceipt,
        DateTimeOffset createdAtUtc)
    {
        string expansionOutcomeId = $"workshop-offer-launch-delivery-expansion-outcome-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool safeForOutcome =
            expansionMilestoneReceipt.CustomerSafe &&
            expansionMilestoneReceipt.CustomerVisible &&
            expansionMilestoneReceipt.CustomerVisibleReceiptReady &&
            expansionMilestoneReceipt.WebportalExportReady &&
            expansionMilestoneReceipt.AppOwnedExpansionMilestoneState &&
            expansionMilestoneReceipt.EpochTimingProviderOnly &&
            !expansionMilestoneReceipt.WorkshopCalendarOwnership &&
            !expansionMilestoneReceipt.MonitorWorkflowExposed &&
            !expansionMilestoneReceipt.PaymentLiveEnabled &&
            !expansionMilestoneReceipt.ProviderGoLiveRequested &&
            !expansionMilestoneReceipt.LiveProviderEnabled &&
            !expansionMilestoneReceipt.AiForwardCopy &&
            expansionMilestoneReceipt.JapanCopyMode == "ai-neutral" &&
            expansionMilestoneReceipt.Under19GuardRequired &&
            expansionMilestoneReceipt.NativeExecutionReady;
        bool expansionOutcomeReady = safeForOutcome &&
            expansionMilestoneReceipt.ExpansionMilestoneReady &&
            (expansionMilestoneReceipt.RepeatServiceRequested ||
                expansionMilestoneReceipt.RenewalRequested ||
                expansionMilestoneReceipt.ReferralRequested) &&
            !expansionMilestoneReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryExpansionOutcomeRecord(
            expansionOutcomeId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionOutcome",
            expansionMilestoneReceipt.ReceiptId,
            expansionMilestoneReceipt.ServiceRequestId,
            expansionMilestoneReceipt.ServiceLane,
            expansionMilestoneReceipt.PackageId,
            "offer-launch-delivery-expansion-outcome",
            expansionMilestoneReceipt.CustomerLabel,
            expansionOutcomeReady
                ? "offer-launch-delivery-expansion-outcome-ready"
                : safeForOutcome
                    ? "offer-launch-delivery-expansion-outcome-fit-review"
                    : "offer-launch-delivery-expansion-outcome-blocked",
            expansionOutcomeReady ? "adult-service-launch-delivery-expansion-outcome-ready" : "compatibility-review-before-launch-delivery-expansion-outcome",
            expansionMilestoneReceipt.ExpansionMilestonePath,
            expansionMilestoneReceipt.OfferLabel,
            expansionMilestoneReceipt.PriceLabel,
            expansionOutcomeReady
                ? "WORKSHOP completed the next-service delivery outcome and can review follow-up, renewal, or referral options. EPOCH remains timing-provider-only."
                : safeForOutcome
                    ? "WORKSHOP is holding the next-service delivery outcome until compatibility review is complete."
                    : "WORKSHOP cannot mark the next-service delivery outcome until expansion milestone receipt gates are complete.",
            expansionOutcomeReady
                ? "Review expansion outcome evidence and export only the customer-safe expansion outcome receipt."
                : safeForOutcome
                    ? "Complete compatibility review before next-service outcome status is exported."
                    : "Resolve expansion milestone receipt or boundary blockers before expansion outcome status becomes customer-safe.",
            false,
            safeForOutcome,
            false,
            true,
            expansionMilestoneReceipt.AppOwnedExpansionMilestoneState,
            expansionOutcomeReady,
            expansionMilestoneReceipt.ExpansionMilestoneReady,
            expansionOutcomeReady && expansionMilestoneReceipt.RepeatServiceRequested,
            expansionOutcomeReady && expansionMilestoneReceipt.RenewalRequested,
            expansionOutcomeReady && expansionMilestoneReceipt.ReferralRequested,
            expansionMilestoneReceipt.CompatibilityGateRequired,
            expansionMilestoneReceipt.EpochTimingProviderOnly,
            expansionMilestoneReceipt.WorkshopCalendarOwnership,
            expansionMilestoneReceipt.MonitorWorkflowExposed,
            expansionMilestoneReceipt.PaymentLiveEnabled,
            expansionMilestoneReceipt.ProviderGoLiveRequested,
            expansionMilestoneReceipt.LiveProviderEnabled,
            expansionMilestoneReceipt.AiForwardCopy,
            "ai-neutral",
            expansionMilestoneReceipt.Under19GuardRequired,
            expansionMilestoneReceipt.NativeExecutionReady,
            expansionMilestoneReceipt.RequiresEpochTimingRequest);
    }
}
