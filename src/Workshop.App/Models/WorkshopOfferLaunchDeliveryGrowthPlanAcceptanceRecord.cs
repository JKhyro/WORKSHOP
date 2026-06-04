namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord(
    string AcceptanceId,
    string CreatedAtUtc,
    string SourceSurface,
    string GrowthPlanReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string AcceptancePath,
    string GrowthPlanPath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
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
    string JapanCopyMode,
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord FromGrowthPlanReceipt(
        WorkshopOfferLaunchDeliveryGrowthPlanReceipt growthPlanReceipt,
        DateTimeOffset createdAtUtc)
    {
        string acceptanceId = $"workshop-offer-launch-delivery-growth-plan-acceptance-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForAcceptance =
            growthPlanReceipt.CustomerSafe &&
            growthPlanReceipt.CustomerVisible &&
            growthPlanReceipt.CustomerVisibleReceiptReady &&
            growthPlanReceipt.WebportalExportReady &&
            growthPlanReceipt.AppOwnedGrowthPlanState &&
            growthPlanReceipt.EpochTimingProviderOnly &&
            !growthPlanReceipt.WorkshopCalendarOwnership &&
            !growthPlanReceipt.MonitorWorkflowExposed &&
            !growthPlanReceipt.PaymentLiveEnabled &&
            !growthPlanReceipt.ProviderGoLiveRequested &&
            !growthPlanReceipt.LiveProviderEnabled &&
            !growthPlanReceipt.AiForwardCopy &&
            growthPlanReceipt.JapanCopyMode == "ai-neutral" &&
            growthPlanReceipt.Under19GuardRequired &&
            growthPlanReceipt.NativeExecutionReady;
        bool acceptanceReady = safeForAcceptance &&
            growthPlanReceipt.GrowthPlanReady &&
            (growthPlanReceipt.RepeatServiceReady ||
                growthPlanReceipt.RenewalReady ||
                growthPlanReceipt.ReferralReady) &&
            !growthPlanReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord(
            acceptanceId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryGrowthPlanAcceptance",
            growthPlanReceipt.ReceiptId,
            growthPlanReceipt.ServiceRequestId,
            growthPlanReceipt.ServiceLane,
            growthPlanReceipt.PackageId,
            "offer-launch-delivery-growth-plan-acceptance",
            growthPlanReceipt.CustomerLabel,
            acceptanceReady
                ? "offer-launch-delivery-growth-plan-acceptance-ready"
                : safeForAcceptance
                    ? "offer-launch-delivery-growth-plan-acceptance-fit-review"
                    : "offer-launch-delivery-growth-plan-acceptance-blocked",
            acceptanceReady ? "adult-service-launch-delivery-growth-plan-accepted" : "compatibility-review-before-launch-delivery-growth-plan-acceptance",
            growthPlanReceipt.GrowthPlanPath,
            growthPlanReceipt.OfferLabel,
            growthPlanReceipt.PriceLabel,
            acceptanceReady
                ? "WORKSHOP prepared customer-safe repeat-service, renewal, and referral acceptance from the growth-plan receipt. EPOCH remains timing-provider-only."
                : safeForAcceptance
                    ? "WORKSHOP is holding growth-plan acceptance until compatibility review is complete."
                    : "WORKSHOP cannot accept the growth plan until customer-safe growth-plan receipt gates are complete.",
            acceptanceReady
                ? "Confirm the accepted repeat-service, renewal, or referral motion inside WORKSHOP, then export only the customer-safe delivery growth-plan acceptance receipt."
                : safeForAcceptance
                    ? "Complete compatibility review before growth-plan acceptance status is exported."
                    : "Resolve growth-plan receipt or boundary blockers before acceptance status becomes customer-safe.",
            false,
            safeForAcceptance,
            false,
            true,
            growthPlanReceipt.AppOwnedGrowthPlanState,
            growthPlanReceipt.GrowthPlanReady,
            acceptanceReady && growthPlanReceipt.RepeatServiceReady,
            acceptanceReady && growthPlanReceipt.RenewalReady,
            acceptanceReady && growthPlanReceipt.ReferralReady,
            acceptanceReady,
            growthPlanReceipt.CompatibilityGateRequired,
            growthPlanReceipt.EpochTimingProviderOnly,
            growthPlanReceipt.WorkshopCalendarOwnership,
            growthPlanReceipt.MonitorWorkflowExposed,
            growthPlanReceipt.PaymentLiveEnabled,
            growthPlanReceipt.ProviderGoLiveRequested,
            growthPlanReceipt.LiveProviderEnabled,
            growthPlanReceipt.AiForwardCopy,
            "ai-neutral",
            growthPlanReceipt.Under19GuardRequired,
            growthPlanReceipt.NativeExecutionReady,
            growthPlanReceipt.RequiresEpochTimingRequest);
    }
}
