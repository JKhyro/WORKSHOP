namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt(
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
    string ExpansionMilestonePath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool AppOwnedExpansionMilestoneState,
    bool AppOwnedExpansionKickoffState,
    bool ExpansionMilestoneReady,
    bool ExpansionKickoffReady,
    bool RepeatServiceRequested,
    bool RenewalRequested,
    bool ReferralRequested,
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
    public static WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt FromExpansionMilestone(
        WorkshopOfferLaunchDeliveryExpansionMilestoneRecord expansionMilestone,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-expansion-milestone-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            expansionMilestone.CustomerSafeForReceipt &&
            !expansionMilestone.CustomerVisible &&
            !expansionMilestone.WebportalExportReady &&
            expansionMilestone.AppOwnedExpansionMilestoneState &&
            expansionMilestone.AppOwnedExpansionKickoffState &&
            expansionMilestone.EpochTimingProviderOnly &&
            !expansionMilestone.WorkshopCalendarOwnership &&
            !expansionMilestone.MonitorWorkflowExposed &&
            !expansionMilestone.PaymentLiveEnabled &&
            !expansionMilestone.ProviderGoLiveRequested &&
            !expansionMilestone.LiveProviderEnabled &&
            !expansionMilestone.AiForwardCopy &&
            expansionMilestone.JapanCopyMode == "ai-neutral" &&
            expansionMilestone.Under19GuardRequired &&
            expansionMilestone.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionMilestoneReceipt",
            expansionMilestone.ServiceRequestId,
            expansionMilestone.ServiceLane,
            expansionMilestone.PackageId,
            "offer-launch-delivery-expansion-milestone",
            expansionMilestone.CustomerLabel,
            customerSafe && expansionMilestone.ExpansionMilestoneReady
                ? "customer-safe-offer-launch-delivery-expansion-milestone-active"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-expansion-milestone-fit-review"
                    : "customer-safe-offer-launch-delivery-expansion-milestone-blocked",
            expansionMilestone.OfferLabel,
            expansionMilestone.PriceLabel,
            expansionMilestone.ExpansionMilestonePath,
            customerSafe && expansionMilestone.ExpansionMilestoneReady
                ? "Your WORKSHOP next-service delivery milestone is active. EPOCH will be used only if timing is needed."
                : customerSafe
                    ? "Your WORKSHOP next-service delivery milestone is waiting for compatibility review before delivery continues."
                    : "This WORKSHOP expansion milestone is waiting for internal review before customer-safe status can be exported.",
            expansionMilestone.RequiresEpochTimingRequest
                ? "WORKSHOP will continue the next service milestone and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will continue the next service milestone without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            expansionMilestone.AppOwnedExpansionMilestoneState,
            expansionMilestone.AppOwnedExpansionKickoffState,
            expansionMilestone.ExpansionMilestoneReady,
            expansionMilestone.ExpansionKickoffReady,
            expansionMilestone.RepeatServiceRequested,
            expansionMilestone.RenewalRequested,
            expansionMilestone.ReferralRequested,
            expansionMilestone.CompatibilityGateRequired,
            expansionMilestone.EpochTimingProviderOnly,
            expansionMilestone.WorkshopCalendarOwnership,
            expansionMilestone.MonitorWorkflowExposed,
            expansionMilestone.PaymentLiveEnabled,
            expansionMilestone.ProviderGoLiveRequested,
            expansionMilestone.LiveProviderEnabled,
            expansionMilestone.AiForwardCopy,
            expansionMilestone.Under19GuardRequired,
            expansionMilestone.NativeExecutionReady,
            expansionMilestone.RequiresEpochTimingRequest);
    }
}
