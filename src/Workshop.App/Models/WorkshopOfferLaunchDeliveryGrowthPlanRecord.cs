namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryGrowthPlanRecord(
    string GrowthPlanId,
    string CreatedAtUtc,
    string SourceSurface,
    string FollowUpReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string GrowthPlanPath,
    string FollowUpPath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedGrowthPlanState,
    bool AppOwnedFollowUpState,
    bool FollowUpReady,
    bool RenewalReady,
    bool ReferralReady,
    bool RepeatServiceReady,
    bool GrowthPlanReady,
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
    public static WorkshopOfferLaunchDeliveryGrowthPlanRecord FromFollowUpReceipt(
        WorkshopOfferLaunchDeliveryFollowUpReceipt followUpReceipt,
        DateTimeOffset createdAtUtc)
    {
        string growthPlanId = $"workshop-offer-launch-delivery-growth-plan-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForGrowthPlan =
            followUpReceipt.CustomerSafe &&
            followUpReceipt.CustomerVisible &&
            followUpReceipt.CustomerVisibleReceiptReady &&
            followUpReceipt.WebportalExportReady &&
            followUpReceipt.AppOwnedFollowUpState &&
            followUpReceipt.EpochTimingProviderOnly &&
            !followUpReceipt.WorkshopCalendarOwnership &&
            !followUpReceipt.MonitorWorkflowExposed &&
            !followUpReceipt.PaymentLiveEnabled &&
            !followUpReceipt.ProviderGoLiveRequested &&
            !followUpReceipt.LiveProviderEnabled &&
            !followUpReceipt.AiForwardCopy &&
            followUpReceipt.JapanCopyMode == "ai-neutral" &&
            followUpReceipt.Under19GuardRequired &&
            followUpReceipt.NativeExecutionReady;
        bool growthPlanReady = safeForGrowthPlan &&
            followUpReceipt.FollowUpReady &&
            followUpReceipt.OutcomeReady &&
            (followUpReceipt.RenewalReady || followUpReceipt.ReferralReady) &&
            !followUpReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryGrowthPlanRecord(
            growthPlanId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryGrowthPlan",
            followUpReceipt.ReceiptId,
            followUpReceipt.ServiceRequestId,
            followUpReceipt.ServiceLane,
            followUpReceipt.PackageId,
            "offer-launch-delivery-growth-plan",
            followUpReceipt.CustomerLabel,
            growthPlanReady
                ? "offer-launch-delivery-growth-plan-ready"
                : safeForGrowthPlan
                    ? "offer-launch-delivery-growth-plan-fit-review"
                    : "offer-launch-delivery-growth-plan-blocked",
            growthPlanReady ? "adult-service-launch-delivery-growth-plan-ready" : "compatibility-review-before-launch-delivery-growth-plan",
            followUpReceipt.FollowUpPath,
            followUpReceipt.OfferLabel,
            followUpReceipt.PriceLabel,
            growthPlanReady
                ? "WORKSHOP prepared repeat-service, renewal, and referral planning from customer-safe follow-up status. EPOCH remains timing-provider-only."
                : safeForGrowthPlan
                    ? "WORKSHOP is holding growth planning until compatibility review is complete."
                    : "WORKSHOP cannot prepare growth planning until follow-up receipt gates are complete.",
            growthPlanReady
                ? "Choose the repeat-service, renewal, or referral motion inside WORKSHOP, then export only the customer-safe delivery growth-plan receipt."
                : safeForGrowthPlan
                    ? "Complete compatibility review before growth-plan status is exported."
                    : "Resolve follow-up receipt or boundary blockers before growth-plan status becomes customer-safe.",
            false,
            safeForGrowthPlan,
            false,
            true,
            followUpReceipt.AppOwnedFollowUpState,
            followUpReceipt.FollowUpReady,
            followUpReceipt.RenewalReady,
            followUpReceipt.ReferralReady,
            growthPlanReady,
            growthPlanReady,
            followUpReceipt.OutcomeReady,
            followUpReceipt.CompatibilityGateRequired,
            followUpReceipt.EpochTimingProviderOnly,
            followUpReceipt.WorkshopCalendarOwnership,
            followUpReceipt.MonitorWorkflowExposed,
            followUpReceipt.PaymentLiveEnabled,
            followUpReceipt.ProviderGoLiveRequested,
            followUpReceipt.LiveProviderEnabled,
            followUpReceipt.AiForwardCopy,
            "ai-neutral",
            followUpReceipt.Under19GuardRequired,
            followUpReceipt.NativeExecutionReady,
            followUpReceipt.RequiresEpochTimingRequest);
    }
}
