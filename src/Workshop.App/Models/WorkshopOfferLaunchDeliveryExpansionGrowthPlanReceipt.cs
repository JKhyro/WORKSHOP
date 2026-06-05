namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt(
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
    string ExpansionGrowthPlanPath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
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
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt FromExpansionGrowthPlan(
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord expansionGrowthPlan,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-expansion-growth-plan-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            expansionGrowthPlan.CustomerSafeForReceipt &&
            !expansionGrowthPlan.CustomerVisible &&
            !expansionGrowthPlan.WebportalExportReady &&
            expansionGrowthPlan.AppOwnedExpansionGrowthPlanState &&
            expansionGrowthPlan.AppOwnedExpansionFollowUpState &&
            expansionGrowthPlan.EpochTimingProviderOnly &&
            !expansionGrowthPlan.WorkshopCalendarOwnership &&
            !expansionGrowthPlan.MonitorWorkflowExposed &&
            !expansionGrowthPlan.PaymentLiveEnabled &&
            !expansionGrowthPlan.ProviderGoLiveRequested &&
            !expansionGrowthPlan.LiveProviderEnabled &&
            !expansionGrowthPlan.AiForwardCopy &&
            expansionGrowthPlan.JapanCopyMode == "ai-neutral" &&
            expansionGrowthPlan.Under19GuardRequired &&
            expansionGrowthPlan.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionGrowthPlanReceipt",
            expansionGrowthPlan.ServiceRequestId,
            expansionGrowthPlan.ServiceLane,
            expansionGrowthPlan.PackageId,
            "offer-launch-delivery-expansion-growth-plan",
            expansionGrowthPlan.CustomerLabel,
            customerSafe && expansionGrowthPlan.ExpansionGrowthPlanReady
                ? "customer-safe-offer-launch-delivery-expansion-growth-plan-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-expansion-growth-plan-fit-review"
                    : "customer-safe-offer-launch-delivery-expansion-growth-plan-blocked",
            expansionGrowthPlan.OfferLabel,
            expansionGrowthPlan.PriceLabel,
            expansionGrowthPlan.ExpansionGrowthPlanPath,
            customerSafe && expansionGrowthPlan.ExpansionGrowthPlanReady
                ? "Your WORKSHOP next-service growth options are ready for review. EPOCH will be used only if timing is needed."
                : customerSafe
                    ? "Your WORKSHOP next-service growth options are waiting for compatibility review before renewal or referral planning continues."
                    : "This WORKSHOP expansion growth plan is waiting for internal review before customer-safe status can be exported.",
            expansionGrowthPlan.RequiresEpochTimingRequest
                ? "WORKSHOP will review the next repeat-service, renewal, or referral motion and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will review the next repeat-service, renewal, or referral motion without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            expansionGrowthPlan.AppOwnedExpansionGrowthPlanState,
            expansionGrowthPlan.AppOwnedExpansionFollowUpState,
            expansionGrowthPlan.ExpansionFollowUpReady,
            expansionGrowthPlan.RepeatServiceReady,
            expansionGrowthPlan.RenewalReady,
            expansionGrowthPlan.ReferralReady,
            expansionGrowthPlan.ExpansionGrowthPlanReady,
            expansionGrowthPlan.ExpansionOutcomeReady,
            expansionGrowthPlan.CompatibilityGateRequired,
            expansionGrowthPlan.EpochTimingProviderOnly,
            expansionGrowthPlan.WorkshopCalendarOwnership,
            expansionGrowthPlan.MonitorWorkflowExposed,
            expansionGrowthPlan.PaymentLiveEnabled,
            expansionGrowthPlan.ProviderGoLiveRequested,
            expansionGrowthPlan.LiveProviderEnabled,
            expansionGrowthPlan.AiForwardCopy,
            expansionGrowthPlan.Under19GuardRequired,
            expansionGrowthPlan.NativeExecutionReady,
            expansionGrowthPlan.RequiresEpochTimingRequest);
    }
}
