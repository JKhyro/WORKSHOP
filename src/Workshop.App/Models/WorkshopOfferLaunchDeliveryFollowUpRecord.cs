namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryFollowUpRecord(
    string FollowUpId,
    string CreatedAtUtc,
    string SourceSurface,
    string OutcomeReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string FollowUpPath,
    string OutcomePath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedFollowUpState,
    bool AppOwnedOutcomeState,
    bool FollowUpReady,
    bool RenewalReady,
    bool ReferralReady,
    bool OutcomeReady,
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
    public static WorkshopOfferLaunchDeliveryFollowUpRecord FromOutcomeReceipt(
        WorkshopOfferLaunchDeliveryOutcomeReceipt outcomeReceipt,
        DateTimeOffset createdAtUtc)
    {
        string followUpId = $"workshop-offer-launch-delivery-follow-up-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForFollowUp =
            outcomeReceipt.CustomerSafe &&
            outcomeReceipt.CustomerVisible &&
            outcomeReceipt.CustomerVisibleReceiptReady &&
            outcomeReceipt.WebportalExportReady &&
            outcomeReceipt.AppOwnedOutcomeState &&
            outcomeReceipt.EpochTimingProviderOnly &&
            !outcomeReceipt.WorkshopCalendarOwnership &&
            !outcomeReceipt.MonitorWorkflowExposed &&
            !outcomeReceipt.PaymentLiveEnabled &&
            !outcomeReceipt.ProviderGoLiveRequested &&
            !outcomeReceipt.LiveProviderEnabled &&
            !outcomeReceipt.AiForwardCopy &&
            outcomeReceipt.JapanCopyMode == "ai-neutral" &&
            outcomeReceipt.Under19GuardRequired &&
            outcomeReceipt.NativeExecutionReady;
        bool followUpReady = safeForFollowUp &&
            outcomeReceipt.OutcomeReady &&
            !outcomeReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryFollowUpRecord(
            followUpId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryFollowUp",
            outcomeReceipt.ReceiptId,
            outcomeReceipt.ServiceRequestId,
            outcomeReceipt.ServiceLane,
            outcomeReceipt.PackageId,
            "offer-launch-delivery-follow-up",
            outcomeReceipt.CustomerLabel,
            followUpReady
                ? "offer-launch-delivery-follow-up-ready"
                : safeForFollowUp
                    ? "offer-launch-delivery-follow-up-fit-review"
                    : "offer-launch-delivery-follow-up-blocked",
            followUpReady ? "adult-service-launch-delivery-follow-up-ready" : "compatibility-review-before-launch-delivery-follow-up",
            outcomeReceipt.OutcomePath,
            outcomeReceipt.OfferLabel,
            outcomeReceipt.PriceLabel,
            followUpReady
                ? "WORKSHOP prepared follow-up, renewal, and referral review from the completed launch delivery outcome. EPOCH remains timing-provider-only."
                : safeForFollowUp
                    ? "WORKSHOP is holding follow-up planning until compatibility review is complete."
                    : "WORKSHOP cannot prepare follow-up planning until outcome receipt gates are complete.",
            followUpReady
                ? "Review follow-up, renewal, and referral options, then export only the customer-safe delivery follow-up receipt."
                : safeForFollowUp
                    ? "Complete compatibility review before follow-up status is exported."
                    : "Resolve outcome receipt or boundary blockers before follow-up status becomes customer-safe.",
            false,
            safeForFollowUp,
            false,
            true,
            outcomeReceipt.AppOwnedOutcomeState,
            followUpReady,
            followUpReady,
            followUpReady,
            outcomeReceipt.OutcomeReady,
            outcomeReceipt.CompatibilityGateRequired,
            outcomeReceipt.EpochTimingProviderOnly,
            outcomeReceipt.WorkshopCalendarOwnership,
            outcomeReceipt.MonitorWorkflowExposed,
            outcomeReceipt.PaymentLiveEnabled,
            outcomeReceipt.ProviderGoLiveRequested,
            outcomeReceipt.LiveProviderEnabled,
            outcomeReceipt.AiForwardCopy,
            "ai-neutral",
            outcomeReceipt.Under19GuardRequired,
            outcomeReceipt.NativeExecutionReady,
            outcomeReceipt.RequiresEpochTimingRequest);
    }
}
