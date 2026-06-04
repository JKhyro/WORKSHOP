namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionMilestoneRecord(
    string ExpansionMilestoneId,
    string CreatedAtUtc,
    string SourceSurface,
    string ExpansionKickoffReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string ExpansionMilestonePath,
    string ExpansionKickoffPath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
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
    string JapanCopyMode,
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchDeliveryExpansionMilestoneRecord FromExpansionKickoffReceipt(
        WorkshopOfferLaunchDeliveryExpansionKickoffReceipt expansionKickoffReceipt,
        DateTimeOffset createdAtUtc)
    {
        string expansionMilestoneId = $"workshop-offer-launch-delivery-expansion-milestone-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForMilestone =
            expansionKickoffReceipt.CustomerSafe &&
            expansionKickoffReceipt.CustomerVisible &&
            expansionKickoffReceipt.CustomerVisibleReceiptReady &&
            expansionKickoffReceipt.WebportalExportReady &&
            expansionKickoffReceipt.AppOwnedExpansionKickoffState &&
            expansionKickoffReceipt.EpochTimingProviderOnly &&
            !expansionKickoffReceipt.WorkshopCalendarOwnership &&
            !expansionKickoffReceipt.MonitorWorkflowExposed &&
            !expansionKickoffReceipt.PaymentLiveEnabled &&
            !expansionKickoffReceipt.ProviderGoLiveRequested &&
            !expansionKickoffReceipt.LiveProviderEnabled &&
            !expansionKickoffReceipt.AiForwardCopy &&
            expansionKickoffReceipt.JapanCopyMode == "ai-neutral" &&
            expansionKickoffReceipt.Under19GuardRequired &&
            expansionKickoffReceipt.NativeExecutionReady;
        bool expansionMilestoneReady = safeForMilestone &&
            expansionKickoffReceipt.ExpansionKickoffReady &&
            (expansionKickoffReceipt.RepeatServiceRequested ||
                expansionKickoffReceipt.RenewalRequested ||
                expansionKickoffReceipt.ReferralRequested) &&
            !expansionKickoffReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryExpansionMilestoneRecord(
            expansionMilestoneId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionMilestone",
            expansionKickoffReceipt.ReceiptId,
            expansionKickoffReceipt.ServiceRequestId,
            expansionKickoffReceipt.ServiceLane,
            expansionKickoffReceipt.PackageId,
            "offer-launch-delivery-expansion-milestone",
            expansionKickoffReceipt.CustomerLabel,
            expansionMilestoneReady
                ? "offer-launch-delivery-expansion-milestone-active"
                : safeForMilestone
                    ? "offer-launch-delivery-expansion-milestone-fit-review"
                    : "offer-launch-delivery-expansion-milestone-blocked",
            expansionMilestoneReady ? "adult-service-launch-delivery-expansion-milestone-active" : "compatibility-review-before-launch-delivery-expansion-milestone",
            expansionKickoffReceipt.ExpansionKickoffPath,
            expansionKickoffReceipt.OfferLabel,
            expansionKickoffReceipt.PriceLabel,
            expansionMilestoneReady
                ? "WORKSHOP started the next-service delivery milestone. EPOCH remains timing-provider-only."
                : safeForMilestone
                    ? "WORKSHOP is holding the next-service delivery milestone until compatibility review is complete."
                    : "WORKSHOP cannot start the next-service delivery milestone until expansion kickoff receipt gates are complete.",
            expansionMilestoneReady
                ? "Complete the next-service delivery milestone review and export only the customer-safe expansion milestone receipt."
                : safeForMilestone
                    ? "Complete compatibility review before next-service milestone delivery, then export only the customer-safe expansion milestone receipt."
                    : "Resolve expansion kickoff receipt or boundary blockers before expansion milestone status becomes customer-safe.",
            false,
            safeForMilestone,
            false,
            true,
            expansionKickoffReceipt.AppOwnedExpansionKickoffState,
            expansionMilestoneReady,
            expansionKickoffReceipt.ExpansionKickoffReady,
            expansionMilestoneReady && expansionKickoffReceipt.RepeatServiceRequested,
            expansionMilestoneReady && expansionKickoffReceipt.RenewalRequested,
            expansionMilestoneReady && expansionKickoffReceipt.ReferralRequested,
            expansionKickoffReceipt.CompatibilityGateRequired,
            expansionKickoffReceipt.EpochTimingProviderOnly,
            expansionKickoffReceipt.WorkshopCalendarOwnership,
            expansionKickoffReceipt.MonitorWorkflowExposed,
            expansionKickoffReceipt.PaymentLiveEnabled,
            expansionKickoffReceipt.ProviderGoLiveRequested,
            expansionKickoffReceipt.LiveProviderEnabled,
            expansionKickoffReceipt.AiForwardCopy,
            "ai-neutral",
            expansionKickoffReceipt.Under19GuardRequired,
            expansionKickoffReceipt.NativeExecutionReady,
            expansionKickoffReceipt.RequiresEpochTimingRequest);
    }
}
