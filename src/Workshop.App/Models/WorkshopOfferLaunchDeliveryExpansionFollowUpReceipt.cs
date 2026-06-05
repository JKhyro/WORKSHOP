namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt(
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
    string ExpansionFollowUpPath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
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
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt FromExpansionFollowUp(
        WorkshopOfferLaunchDeliveryExpansionFollowUpRecord expansionFollowUp,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-expansion-follow-up-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            expansionFollowUp.CustomerSafeForReceipt &&
            !expansionFollowUp.CustomerVisible &&
            !expansionFollowUp.WebportalExportReady &&
            expansionFollowUp.AppOwnedExpansionFollowUpState &&
            expansionFollowUp.AppOwnedExpansionOutcomeState &&
            expansionFollowUp.EpochTimingProviderOnly &&
            !expansionFollowUp.WorkshopCalendarOwnership &&
            !expansionFollowUp.MonitorWorkflowExposed &&
            !expansionFollowUp.PaymentLiveEnabled &&
            !expansionFollowUp.ProviderGoLiveRequested &&
            !expansionFollowUp.LiveProviderEnabled &&
            !expansionFollowUp.AiForwardCopy &&
            expansionFollowUp.JapanCopyMode == "ai-neutral" &&
            expansionFollowUp.Under19GuardRequired &&
            expansionFollowUp.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionFollowUpReceipt",
            expansionFollowUp.ServiceRequestId,
            expansionFollowUp.ServiceLane,
            expansionFollowUp.PackageId,
            "offer-launch-delivery-expansion-follow-up",
            expansionFollowUp.CustomerLabel,
            customerSafe && expansionFollowUp.ExpansionFollowUpReady
                ? "customer-safe-offer-launch-delivery-expansion-follow-up-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-expansion-follow-up-fit-review"
                    : "customer-safe-offer-launch-delivery-expansion-follow-up-blocked",
            expansionFollowUp.OfferLabel,
            expansionFollowUp.PriceLabel,
            expansionFollowUp.ExpansionFollowUpPath,
            customerSafe && expansionFollowUp.ExpansionFollowUpReady
                ? "Your WORKSHOP next-service follow-up options are ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
                : customerSafe
                    ? "Your WORKSHOP next-service follow-up options are waiting for compatibility review before renewal or referral planning continues."
                    : "This WORKSHOP expansion follow-up is waiting for internal review before customer-safe status can be exported.",
            expansionFollowUp.RequiresEpochTimingRequest
                ? "WORKSHOP will review repeat-service, renewal, or referral options and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will review repeat-service, renewal, or referral options without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            expansionFollowUp.AppOwnedExpansionFollowUpState,
            expansionFollowUp.AppOwnedExpansionOutcomeState,
            expansionFollowUp.ExpansionFollowUpReady,
            expansionFollowUp.ExpansionOutcomeReady,
            expansionFollowUp.RepeatServiceReady,
            expansionFollowUp.RenewalReady,
            expansionFollowUp.ReferralReady,
            expansionFollowUp.CompatibilityGateRequired,
            expansionFollowUp.EpochTimingProviderOnly,
            expansionFollowUp.WorkshopCalendarOwnership,
            expansionFollowUp.MonitorWorkflowExposed,
            expansionFollowUp.PaymentLiveEnabled,
            expansionFollowUp.ProviderGoLiveRequested,
            expansionFollowUp.LiveProviderEnabled,
            expansionFollowUp.AiForwardCopy,
            expansionFollowUp.Under19GuardRequired,
            expansionFollowUp.NativeExecutionReady,
            expansionFollowUp.RequiresEpochTimingRequest);
    }
}
