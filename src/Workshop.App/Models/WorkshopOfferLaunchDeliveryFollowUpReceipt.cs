namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryFollowUpReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string OfferLabel,
    string PriceLabel,
    string FollowUpPath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
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
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchDeliveryFollowUpReceipt FromFollowUp(
        WorkshopOfferLaunchDeliveryFollowUpRecord followUp,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-follow-up-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            followUp.CustomerSafeForReceipt &&
            !followUp.CustomerVisible &&
            !followUp.WebportalExportReady &&
            followUp.AppOwnedFollowUpState &&
            followUp.AppOwnedOutcomeState &&
            followUp.EpochTimingProviderOnly &&
            !followUp.WorkshopCalendarOwnership &&
            !followUp.MonitorWorkflowExposed &&
            !followUp.PaymentLiveEnabled &&
            !followUp.ProviderGoLiveRequested &&
            !followUp.LiveProviderEnabled &&
            !followUp.AiForwardCopy &&
            followUp.JapanCopyMode == "ai-neutral" &&
            followUp.Under19GuardRequired &&
            followUp.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryFollowUpReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryFollowUpReceipt",
            followUp.ServiceRequestId,
            followUp.ServiceLane,
            followUp.PackageId,
            "offer-launch-delivery-follow-up",
            followUp.CustomerLabel,
            customerSafe && followUp.FollowUpReady
                ? "customer-safe-offer-launch-delivery-follow-up-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-follow-up-fit-review"
                    : "customer-safe-offer-launch-delivery-follow-up-blocked",
            followUp.OfferLabel,
            followUp.PriceLabel,
            followUp.FollowUpPath,
            customerSafe && followUp.FollowUpReady
                ? "Your WORKSHOP follow-up options are ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
                : customerSafe
                    ? "Your WORKSHOP follow-up options are waiting for compatibility review before renewal or referral planning continues."
                    : "This WORKSHOP follow-up is waiting for internal review before customer-safe status can be exported.",
            followUp.RequiresEpochTimingRequest
                ? "WORKSHOP will review renewal or referral options and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will review renewal or referral options without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            followUp.AppOwnedFollowUpState,
            followUp.AppOwnedOutcomeState,
            followUp.FollowUpReady,
            followUp.RenewalReady,
            followUp.ReferralReady,
            followUp.OutcomeReady,
            followUp.CompatibilityGateRequired,
            followUp.EpochTimingProviderOnly,
            followUp.WorkshopCalendarOwnership,
            followUp.MonitorWorkflowExposed,
            followUp.PaymentLiveEnabled,
            followUp.ProviderGoLiveRequested,
            followUp.LiveProviderEnabled,
            followUp.AiForwardCopy,
            followUp.Under19GuardRequired,
            followUp.NativeExecutionReady,
            followUp.RequiresEpochTimingRequest);
    }
}
