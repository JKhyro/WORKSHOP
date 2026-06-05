namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt(
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
    string ExpansionGrowthPlanAcceptancePath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool AppOwnedExpansionGrowthPlanAcceptanceState,
    bool AppOwnedExpansionGrowthPlanState,
    bool AppOwnedExpansionFollowUpState,
    bool ExpansionGrowthPlanReady,
    bool ExpansionFollowUpReady,
    bool ExpansionOutcomeReady,
    bool RepeatServiceAccepted,
    bool RenewalAccepted,
    bool ReferralAccepted,
    bool ExpansionGrowthPlanAcceptanceReady,
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
    public static WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt FromAcceptance(
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord acceptance,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-expansion-growth-plan-acceptance-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            acceptance.CustomerSafeForReceipt &&
            !acceptance.CustomerVisible &&
            !acceptance.WebportalExportReady &&
            acceptance.AppOwnedExpansionGrowthPlanAcceptanceState &&
            acceptance.AppOwnedExpansionGrowthPlanState &&
            acceptance.AppOwnedExpansionFollowUpState &&
            acceptance.EpochTimingProviderOnly &&
            !acceptance.WorkshopCalendarOwnership &&
            !acceptance.MonitorWorkflowExposed &&
            !acceptance.PaymentLiveEnabled &&
            !acceptance.ProviderGoLiveRequested &&
            !acceptance.LiveProviderEnabled &&
            !acceptance.AiForwardCopy &&
            acceptance.JapanCopyMode == "ai-neutral" &&
            acceptance.Under19GuardRequired &&
            acceptance.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt",
            acceptance.ServiceRequestId,
            acceptance.ServiceLane,
            acceptance.PackageId,
            "offer-launch-delivery-expansion-growth-plan-acceptance",
            acceptance.CustomerLabel,
            customerSafe && acceptance.ExpansionGrowthPlanAcceptanceReady
                ? "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-fit-review"
                    : "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-blocked",
            acceptance.OfferLabel,
            acceptance.PriceLabel,
            acceptance.ExpansionGrowthPlanAcceptancePath,
            customerSafe && acceptance.ExpansionGrowthPlanAcceptanceReady
                ? "Your WORKSHOP next-service repeat-service, renewal, or referral motion has been accepted. EPOCH will be used only if timing is needed."
                : customerSafe
                    ? "Your WORKSHOP expansion growth-plan acceptance is waiting for compatibility review before the next service motion continues."
                    : "This WORKSHOP expansion growth-plan acceptance is waiting for internal review before customer-safe status can be exported.",
            acceptance.RequiresEpochTimingRequest
                ? "WORKSHOP will prepare the accepted next-service motion and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will prepare the accepted next-service motion without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            acceptance.AppOwnedExpansionGrowthPlanAcceptanceState,
            acceptance.AppOwnedExpansionGrowthPlanState,
            acceptance.AppOwnedExpansionFollowUpState,
            acceptance.ExpansionGrowthPlanReady,
            acceptance.ExpansionFollowUpReady,
            acceptance.ExpansionOutcomeReady,
            acceptance.RepeatServiceAccepted,
            acceptance.RenewalAccepted,
            acceptance.ReferralAccepted,
            acceptance.ExpansionGrowthPlanAcceptanceReady,
            acceptance.CompatibilityGateRequired,
            acceptance.EpochTimingProviderOnly,
            acceptance.WorkshopCalendarOwnership,
            acceptance.MonitorWorkflowExposed,
            acceptance.PaymentLiveEnabled,
            acceptance.ProviderGoLiveRequested,
            acceptance.LiveProviderEnabled,
            acceptance.AiForwardCopy,
            acceptance.Under19GuardRequired,
            acceptance.NativeExecutionReady,
            acceptance.RequiresEpochTimingRequest);
    }
}
