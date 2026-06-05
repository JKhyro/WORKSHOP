namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord(
    string ExpansionGrowthPlanId,
    string CreatedAtUtc,
    string SourceSurface,
    string ExpansionFollowUpReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string ExpansionGrowthPlanPath,
    string ExpansionFollowUpPath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedExpansionGrowthPlanState,
    bool AppOwnedExpansionFollowUpState,
    bool ExpansionFollowUpReady,
    bool RepeatServiceReady,
    bool RenewalReady,
    bool ReferralReady,
    bool ExpansionGrowthPlanReady,
    bool ExpansionOutcomeReady,
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
    public static WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord FromExpansionFollowUpReceipt(
        WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt expansionFollowUpReceipt,
        DateTimeOffset createdAtUtc)
    {
        string expansionGrowthPlanId = $"workshop-offer-launch-delivery-expansion-growth-plan-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForGrowthPlan =
            expansionFollowUpReceipt.CustomerSafe &&
            expansionFollowUpReceipt.CustomerVisible &&
            expansionFollowUpReceipt.CustomerVisibleReceiptReady &&
            expansionFollowUpReceipt.WebportalExportReady &&
            expansionFollowUpReceipt.AppOwnedExpansionFollowUpState &&
            expansionFollowUpReceipt.EpochTimingProviderOnly &&
            !expansionFollowUpReceipt.WorkshopCalendarOwnership &&
            !expansionFollowUpReceipt.MonitorWorkflowExposed &&
            !expansionFollowUpReceipt.PaymentLiveEnabled &&
            !expansionFollowUpReceipt.ProviderGoLiveRequested &&
            !expansionFollowUpReceipt.LiveProviderEnabled &&
            !expansionFollowUpReceipt.AiForwardCopy &&
            expansionFollowUpReceipt.JapanCopyMode == "ai-neutral" &&
            expansionFollowUpReceipt.Under19GuardRequired &&
            expansionFollowUpReceipt.NativeExecutionReady;
        bool expansionGrowthPlanReady = safeForGrowthPlan &&
            expansionFollowUpReceipt.ExpansionFollowUpReady &&
            expansionFollowUpReceipt.ExpansionOutcomeReady &&
            (expansionFollowUpReceipt.RepeatServiceReady ||
                expansionFollowUpReceipt.RenewalReady ||
                expansionFollowUpReceipt.ReferralReady) &&
            !expansionFollowUpReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord(
            expansionGrowthPlanId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionGrowthPlan",
            expansionFollowUpReceipt.ReceiptId,
            expansionFollowUpReceipt.ServiceRequestId,
            expansionFollowUpReceipt.ServiceLane,
            expansionFollowUpReceipt.PackageId,
            "offer-launch-delivery-expansion-growth-plan",
            expansionFollowUpReceipt.CustomerLabel,
            expansionGrowthPlanReady
                ? "offer-launch-delivery-expansion-growth-plan-ready"
                : safeForGrowthPlan
                    ? "offer-launch-delivery-expansion-growth-plan-fit-review"
                    : "offer-launch-delivery-expansion-growth-plan-blocked",
            expansionGrowthPlanReady ? "adult-service-launch-delivery-expansion-growth-plan-ready" : "compatibility-review-before-launch-delivery-expansion-growth-plan",
            expansionFollowUpReceipt.ExpansionFollowUpPath,
            expansionFollowUpReceipt.OfferLabel,
            expansionFollowUpReceipt.PriceLabel,
            expansionGrowthPlanReady
                ? "WORKSHOP prepared next-service repeat-service, renewal, and referral growth planning from the expansion follow-up. EPOCH remains timing-provider-only."
                : safeForGrowthPlan
                    ? "WORKSHOP is holding next-service growth planning until compatibility review is complete."
                    : "WORKSHOP cannot prepare next-service growth planning until expansion follow-up receipt gates are complete.",
            expansionGrowthPlanReady
                ? "Choose the repeat-service, renewal, or referral motion inside WORKSHOP, then export only the customer-safe expansion growth-plan receipt."
                : safeForGrowthPlan
                    ? "Complete compatibility review before expansion growth-plan status is exported."
                    : "Resolve expansion follow-up receipt or boundary blockers before expansion growth-plan status becomes customer-safe.",
            false,
            safeForGrowthPlan,
            false,
            true,
            expansionFollowUpReceipt.AppOwnedExpansionFollowUpState,
            expansionFollowUpReceipt.ExpansionFollowUpReady,
            expansionGrowthPlanReady && expansionFollowUpReceipt.RepeatServiceReady,
            expansionGrowthPlanReady && expansionFollowUpReceipt.RenewalReady,
            expansionGrowthPlanReady && expansionFollowUpReceipt.ReferralReady,
            expansionGrowthPlanReady,
            expansionFollowUpReceipt.ExpansionOutcomeReady,
            expansionFollowUpReceipt.CompatibilityGateRequired,
            expansionFollowUpReceipt.EpochTimingProviderOnly,
            expansionFollowUpReceipt.WorkshopCalendarOwnership,
            expansionFollowUpReceipt.MonitorWorkflowExposed,
            expansionFollowUpReceipt.PaymentLiveEnabled,
            expansionFollowUpReceipt.ProviderGoLiveRequested,
            expansionFollowUpReceipt.LiveProviderEnabled,
            expansionFollowUpReceipt.AiForwardCopy,
            "ai-neutral",
            expansionFollowUpReceipt.Under19GuardRequired,
            expansionFollowUpReceipt.NativeExecutionReady,
            expansionFollowUpReceipt.RequiresEpochTimingRequest);
    }
}
