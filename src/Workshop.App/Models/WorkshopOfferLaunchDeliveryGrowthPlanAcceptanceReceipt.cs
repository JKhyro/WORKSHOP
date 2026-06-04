namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt(
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
    string AcceptancePath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool AppOwnedAcceptanceState,
    bool AppOwnedGrowthPlanState,
    bool GrowthPlanReady,
    bool RepeatServiceAccepted,
    bool RenewalAccepted,
    bool ReferralAccepted,
    bool AcceptanceReady,
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
    public static WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt FromAcceptance(
        WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord acceptance,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-growth-plan-acceptance-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            acceptance.CustomerSafeForReceipt &&
            !acceptance.CustomerVisible &&
            !acceptance.WebportalExportReady &&
            acceptance.AppOwnedAcceptanceState &&
            acceptance.AppOwnedGrowthPlanState &&
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

        return new WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryGrowthPlanAcceptanceReceipt",
            acceptance.ServiceRequestId,
            acceptance.ServiceLane,
            acceptance.PackageId,
            "offer-launch-delivery-growth-plan-acceptance",
            acceptance.CustomerLabel,
            customerSafe && acceptance.AcceptanceReady
                ? "customer-safe-offer-launch-delivery-growth-plan-acceptance-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-growth-plan-acceptance-fit-review"
                    : "customer-safe-offer-launch-delivery-growth-plan-acceptance-blocked",
            acceptance.OfferLabel,
            acceptance.PriceLabel,
            acceptance.AcceptancePath,
            customerSafe && acceptance.AcceptanceReady
                ? "Your WORKSHOP repeat-service, renewal, or referral path has been accepted for the next delivery step. EPOCH will be used only if timing is needed."
                : customerSafe
                    ? "Your WORKSHOP growth-plan acceptance is waiting for compatibility review before the next service motion continues."
                    : "This WORKSHOP growth-plan acceptance is waiting for internal review before customer-safe status can be exported.",
            acceptance.RequiresEpochTimingRequest
                ? "WORKSHOP will prepare the accepted next service motion and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will prepare the accepted next service motion without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            acceptance.AppOwnedAcceptanceState,
            acceptance.AppOwnedGrowthPlanState,
            acceptance.GrowthPlanReady,
            acceptance.RepeatServiceAccepted,
            acceptance.RenewalAccepted,
            acceptance.ReferralAccepted,
            acceptance.AcceptanceReady,
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
