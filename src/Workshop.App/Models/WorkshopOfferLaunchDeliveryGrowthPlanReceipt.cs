namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryGrowthPlanReceipt(
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
    string GrowthPlanPath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
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
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchDeliveryGrowthPlanReceipt FromGrowthPlan(
        WorkshopOfferLaunchDeliveryGrowthPlanRecord growthPlan,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-growth-plan-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            growthPlan.CustomerSafeForReceipt &&
            !growthPlan.CustomerVisible &&
            !growthPlan.WebportalExportReady &&
            growthPlan.AppOwnedGrowthPlanState &&
            growthPlan.AppOwnedFollowUpState &&
            growthPlan.EpochTimingProviderOnly &&
            !growthPlan.WorkshopCalendarOwnership &&
            !growthPlan.MonitorWorkflowExposed &&
            !growthPlan.PaymentLiveEnabled &&
            !growthPlan.ProviderGoLiveRequested &&
            !growthPlan.LiveProviderEnabled &&
            !growthPlan.AiForwardCopy &&
            growthPlan.JapanCopyMode == "ai-neutral" &&
            growthPlan.Under19GuardRequired &&
            growthPlan.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryGrowthPlanReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryGrowthPlanReceipt",
            growthPlan.ServiceRequestId,
            growthPlan.ServiceLane,
            growthPlan.PackageId,
            "offer-launch-delivery-growth-plan",
            growthPlan.CustomerLabel,
            customerSafe && growthPlan.GrowthPlanReady
                ? "customer-safe-offer-launch-delivery-growth-plan-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-growth-plan-fit-review"
                    : "customer-safe-offer-launch-delivery-growth-plan-blocked",
            growthPlan.OfferLabel,
            growthPlan.PriceLabel,
            growthPlan.GrowthPlanPath,
            customerSafe && growthPlan.GrowthPlanReady
                ? "Your WORKSHOP repeat-service, renewal, and referral options are ready for review. EPOCH will be used only if timing is needed."
                : customerSafe
                    ? "Your WORKSHOP growth options are waiting for compatibility review before renewal or referral planning continues."
                    : "This WORKSHOP growth plan is waiting for internal review before customer-safe status can be exported.",
            growthPlan.RequiresEpochTimingRequest
                ? "WORKSHOP will review the next repeat-service, renewal, or referral motion and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will review the next repeat-service, renewal, or referral motion without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            growthPlan.AppOwnedGrowthPlanState,
            growthPlan.AppOwnedFollowUpState,
            growthPlan.FollowUpReady,
            growthPlan.RenewalReady,
            growthPlan.ReferralReady,
            growthPlan.RepeatServiceReady,
            growthPlan.GrowthPlanReady,
            growthPlan.OutcomeReady,
            growthPlan.CompatibilityGateRequired,
            growthPlan.EpochTimingProviderOnly,
            growthPlan.WorkshopCalendarOwnership,
            growthPlan.MonitorWorkflowExposed,
            growthPlan.PaymentLiveEnabled,
            growthPlan.ProviderGoLiveRequested,
            growthPlan.LiveProviderEnabled,
            growthPlan.AiForwardCopy,
            growthPlan.Under19GuardRequired,
            growthPlan.NativeExecutionReady,
            growthPlan.RequiresEpochTimingRequest);
    }
}
