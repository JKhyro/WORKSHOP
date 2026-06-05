namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord(
    string ExpansionGrowthPlanAcceptanceId,
    string CreatedAtUtc,
    string SourceSurface,
    string ExpansionGrowthPlanReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string ExpansionGrowthPlanAcceptancePath,
    string ExpansionGrowthPlanPath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
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
    string JapanCopyMode,
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord FromExpansionGrowthPlanReceipt(
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt expansionGrowthPlanReceipt,
        DateTimeOffset createdAtUtc)
    {
        string expansionGrowthPlanAcceptanceId = $"workshop-offer-launch-delivery-expansion-growth-plan-acceptance-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForAcceptance =
            expansionGrowthPlanReceipt.CustomerSafe &&
            expansionGrowthPlanReceipt.CustomerVisible &&
            expansionGrowthPlanReceipt.CustomerVisibleReceiptReady &&
            expansionGrowthPlanReceipt.WebportalExportReady &&
            expansionGrowthPlanReceipt.AppOwnedExpansionGrowthPlanState &&
            expansionGrowthPlanReceipt.AppOwnedExpansionFollowUpState &&
            expansionGrowthPlanReceipt.EpochTimingProviderOnly &&
            !expansionGrowthPlanReceipt.WorkshopCalendarOwnership &&
            !expansionGrowthPlanReceipt.MonitorWorkflowExposed &&
            !expansionGrowthPlanReceipt.PaymentLiveEnabled &&
            !expansionGrowthPlanReceipt.ProviderGoLiveRequested &&
            !expansionGrowthPlanReceipt.LiveProviderEnabled &&
            !expansionGrowthPlanReceipt.AiForwardCopy &&
            expansionGrowthPlanReceipt.JapanCopyMode == "ai-neutral" &&
            expansionGrowthPlanReceipt.Under19GuardRequired &&
            expansionGrowthPlanReceipt.NativeExecutionReady;
        bool acceptanceReady = safeForAcceptance &&
            expansionGrowthPlanReceipt.ExpansionGrowthPlanReady &&
            expansionGrowthPlanReceipt.ExpansionFollowUpReady &&
            expansionGrowthPlanReceipt.ExpansionOutcomeReady &&
            (expansionGrowthPlanReceipt.RepeatServiceReady ||
                expansionGrowthPlanReceipt.RenewalReady ||
                expansionGrowthPlanReceipt.ReferralReady) &&
            !expansionGrowthPlanReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord(
            expansionGrowthPlanAcceptanceId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionGrowthPlanAcceptance",
            expansionGrowthPlanReceipt.ReceiptId,
            expansionGrowthPlanReceipt.ServiceRequestId,
            expansionGrowthPlanReceipt.ServiceLane,
            expansionGrowthPlanReceipt.PackageId,
            "offer-launch-delivery-expansion-growth-plan-acceptance",
            expansionGrowthPlanReceipt.CustomerLabel,
            acceptanceReady
                ? "offer-launch-delivery-expansion-growth-plan-acceptance-ready"
                : safeForAcceptance
                    ? "offer-launch-delivery-expansion-growth-plan-acceptance-fit-review"
                    : "offer-launch-delivery-expansion-growth-plan-acceptance-blocked",
            acceptanceReady ? "adult-service-launch-delivery-expansion-growth-plan-accepted" : "compatibility-review-before-launch-delivery-expansion-growth-plan-acceptance",
            expansionGrowthPlanReceipt.ExpansionGrowthPlanPath,
            expansionGrowthPlanReceipt.OfferLabel,
            expansionGrowthPlanReceipt.PriceLabel,
            acceptanceReady
                ? "WORKSHOP accepted the next-service repeat-service, renewal, or referral motion from the expansion growth-plan receipt. EPOCH remains timing-provider-only."
                : safeForAcceptance
                    ? "WORKSHOP is holding expansion growth-plan acceptance until compatibility review is complete."
                    : "WORKSHOP cannot accept the expansion growth plan until customer-safe expansion growth-plan receipt gates are complete.",
            acceptanceReady
                ? "Confirm the accepted next-service motion inside WORKSHOP, then export only the customer-safe expansion growth-plan acceptance receipt."
                : safeForAcceptance
                    ? "Complete compatibility review before expansion growth-plan acceptance status is exported."
                    : "Resolve expansion growth-plan receipt or boundary blockers before acceptance status becomes customer-safe.",
            false,
            safeForAcceptance,
            false,
            true,
            expansionGrowthPlanReceipt.AppOwnedExpansionGrowthPlanState,
            expansionGrowthPlanReceipt.AppOwnedExpansionFollowUpState,
            expansionGrowthPlanReceipt.ExpansionGrowthPlanReady,
            expansionGrowthPlanReceipt.ExpansionFollowUpReady,
            expansionGrowthPlanReceipt.ExpansionOutcomeReady,
            acceptanceReady && expansionGrowthPlanReceipt.RepeatServiceReady,
            acceptanceReady && expansionGrowthPlanReceipt.RenewalReady,
            acceptanceReady && expansionGrowthPlanReceipt.ReferralReady,
            acceptanceReady,
            expansionGrowthPlanReceipt.CompatibilityGateRequired,
            expansionGrowthPlanReceipt.EpochTimingProviderOnly,
            expansionGrowthPlanReceipt.WorkshopCalendarOwnership,
            expansionGrowthPlanReceipt.MonitorWorkflowExposed,
            expansionGrowthPlanReceipt.PaymentLiveEnabled,
            expansionGrowthPlanReceipt.ProviderGoLiveRequested,
            expansionGrowthPlanReceipt.LiveProviderEnabled,
            expansionGrowthPlanReceipt.AiForwardCopy,
            "ai-neutral",
            expansionGrowthPlanReceipt.Under19GuardRequired,
            expansionGrowthPlanReceipt.NativeExecutionReady,
            expansionGrowthPlanReceipt.RequiresEpochTimingRequest);
    }
}
