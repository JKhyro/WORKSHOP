namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionFollowUpRecord(
    string ExpansionFollowUpId,
    string CreatedAtUtc,
    string SourceSurface,
    string ExpansionOutcomeReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string ExpansionFollowUpPath,
    string ExpansionOutcomePath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedExpansionFollowUpState,
    bool AppOwnedExpansionOutcomeState,
    bool ExpansionFollowUpReady,
    bool ExpansionOutcomeReady,
    bool RepeatServiceReady,
    bool RenewalReady,
    bool ReferralReady,
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
    public static WorkshopOfferLaunchDeliveryExpansionFollowUpRecord FromExpansionOutcomeReceipt(
        WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt expansionOutcomeReceipt,
        DateTimeOffset createdAtUtc)
    {
        string expansionFollowUpId = $"workshop-offer-launch-delivery-expansion-follow-up-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForFollowUp =
            expansionOutcomeReceipt.CustomerSafe &&
            expansionOutcomeReceipt.CustomerVisible &&
            expansionOutcomeReceipt.CustomerVisibleReceiptReady &&
            expansionOutcomeReceipt.WebportalExportReady &&
            expansionOutcomeReceipt.AppOwnedExpansionOutcomeState &&
            expansionOutcomeReceipt.EpochTimingProviderOnly &&
            !expansionOutcomeReceipt.WorkshopCalendarOwnership &&
            !expansionOutcomeReceipt.MonitorWorkflowExposed &&
            !expansionOutcomeReceipt.PaymentLiveEnabled &&
            !expansionOutcomeReceipt.ProviderGoLiveRequested &&
            !expansionOutcomeReceipt.LiveProviderEnabled &&
            !expansionOutcomeReceipt.AiForwardCopy &&
            expansionOutcomeReceipt.JapanCopyMode == "ai-neutral" &&
            expansionOutcomeReceipt.Under19GuardRequired &&
            expansionOutcomeReceipt.NativeExecutionReady;
        bool expansionFollowUpReady = safeForFollowUp &&
            expansionOutcomeReceipt.ExpansionOutcomeReady &&
            (expansionOutcomeReceipt.RepeatServiceRequested ||
                expansionOutcomeReceipt.RenewalRequested ||
                expansionOutcomeReceipt.ReferralRequested) &&
            !expansionOutcomeReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryExpansionFollowUpRecord(
            expansionFollowUpId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionFollowUp",
            expansionOutcomeReceipt.ReceiptId,
            expansionOutcomeReceipt.ServiceRequestId,
            expansionOutcomeReceipt.ServiceLane,
            expansionOutcomeReceipt.PackageId,
            "offer-launch-delivery-expansion-follow-up",
            expansionOutcomeReceipt.CustomerLabel,
            expansionFollowUpReady
                ? "offer-launch-delivery-expansion-follow-up-ready"
                : safeForFollowUp
                    ? "offer-launch-delivery-expansion-follow-up-fit-review"
                    : "offer-launch-delivery-expansion-follow-up-blocked",
            expansionFollowUpReady ? "adult-service-launch-delivery-expansion-follow-up-ready" : "compatibility-review-before-launch-delivery-expansion-follow-up",
            expansionOutcomeReceipt.ExpansionOutcomePath,
            expansionOutcomeReceipt.OfferLabel,
            expansionOutcomeReceipt.PriceLabel,
            expansionFollowUpReady
                ? "WORKSHOP prepared next-service follow-up, renewal, and referral review from the expansion outcome. EPOCH remains timing-provider-only."
                : safeForFollowUp
                    ? "WORKSHOP is holding next-service follow-up planning until compatibility review is complete."
                    : "WORKSHOP cannot prepare next-service follow-up planning until expansion outcome receipt gates are complete.",
            expansionFollowUpReady
                ? "Review the repeat-service, renewal, and referral path, then export only the customer-safe expansion follow-up receipt."
                : safeForFollowUp
                    ? "Complete compatibility review before next-service follow-up status is exported."
                    : "Resolve expansion outcome receipt or boundary blockers before expansion follow-up status becomes customer-safe.",
            false,
            safeForFollowUp,
            false,
            true,
            expansionOutcomeReceipt.AppOwnedExpansionOutcomeState,
            expansionFollowUpReady,
            expansionOutcomeReceipt.ExpansionOutcomeReady,
            expansionFollowUpReady && expansionOutcomeReceipt.RepeatServiceRequested,
            expansionFollowUpReady && expansionOutcomeReceipt.RenewalRequested,
            expansionFollowUpReady && expansionOutcomeReceipt.ReferralRequested,
            expansionOutcomeReceipt.CompatibilityGateRequired,
            expansionOutcomeReceipt.EpochTimingProviderOnly,
            expansionOutcomeReceipt.WorkshopCalendarOwnership,
            expansionOutcomeReceipt.MonitorWorkflowExposed,
            expansionOutcomeReceipt.PaymentLiveEnabled,
            expansionOutcomeReceipt.ProviderGoLiveRequested,
            expansionOutcomeReceipt.LiveProviderEnabled,
            expansionOutcomeReceipt.AiForwardCopy,
            "ai-neutral",
            expansionOutcomeReceipt.Under19GuardRequired,
            expansionOutcomeReceipt.NativeExecutionReady,
            expansionOutcomeReceipt.RequiresEpochTimingRequest);
    }
}
