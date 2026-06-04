namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryMilestoneRecord(
    string MilestoneId,
    string CreatedAtUtc,
    string SourceSurface,
    string KickoffReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string MilestonePath,
    string KickoffPath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedMilestoneState,
    bool AppOwnedKickoffState,
    bool MilestoneReady,
    bool KickoffReady,
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
    public static WorkshopOfferLaunchDeliveryMilestoneRecord FromKickoffReceipt(
        WorkshopOfferLaunchDeliveryKickoffReceipt kickoffReceipt,
        DateTimeOffset createdAtUtc)
    {
        string milestoneId = $"workshop-offer-launch-delivery-milestone-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForMilestone =
            kickoffReceipt.CustomerSafe &&
            kickoffReceipt.CustomerVisible &&
            kickoffReceipt.CustomerVisibleReceiptReady &&
            kickoffReceipt.WebportalExportReady &&
            kickoffReceipt.AppOwnedKickoffState &&
            kickoffReceipt.EpochTimingProviderOnly &&
            !kickoffReceipt.WorkshopCalendarOwnership &&
            !kickoffReceipt.MonitorWorkflowExposed &&
            !kickoffReceipt.PaymentLiveEnabled &&
            !kickoffReceipt.ProviderGoLiveRequested &&
            !kickoffReceipt.LiveProviderEnabled &&
            !kickoffReceipt.AiForwardCopy &&
            kickoffReceipt.JapanCopyMode == "ai-neutral" &&
            kickoffReceipt.Under19GuardRequired &&
            kickoffReceipt.NativeExecutionReady;
        bool milestoneReady = safeForMilestone &&
            kickoffReceipt.KickoffReady &&
            !kickoffReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryMilestoneRecord(
            milestoneId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryMilestone",
            kickoffReceipt.ReceiptId,
            kickoffReceipt.ServiceRequestId,
            kickoffReceipt.ServiceLane,
            kickoffReceipt.PackageId,
            "offer-launch-delivery-milestone",
            kickoffReceipt.CustomerLabel,
            milestoneReady
                ? "offer-launch-delivery-milestone-active"
                : safeForMilestone
                    ? "offer-launch-delivery-milestone-fit-review"
                    : "offer-launch-delivery-milestone-blocked",
            milestoneReady ? "adult-service-first-delivery-milestone-active" : "compatibility-review-before-first-delivery-milestone",
            kickoffReceipt.KickoffPath,
            kickoffReceipt.OfferLabel,
            kickoffReceipt.PriceLabel,
            milestoneReady
                ? "WORKSHOP started the first delivery milestone. EPOCH remains timing-provider-only."
                : safeForMilestone
                    ? "WORKSHOP is holding the first delivery milestone until compatibility review is complete."
                    : "WORKSHOP cannot start the first delivery milestone until kickoff receipt gates are complete.",
            milestoneReady
                ? "Complete the first delivery milestone review and export only the customer-safe milestone receipt."
                : safeForMilestone
                    ? "Complete compatibility review before milestone delivery, then export only the customer-safe milestone receipt."
                    : "Resolve kickoff receipt or boundary blockers before milestone status becomes customer-safe.",
            false,
            safeForMilestone,
            false,
            true,
            kickoffReceipt.AppOwnedKickoffState,
            milestoneReady,
            kickoffReceipt.KickoffReady,
            kickoffReceipt.CompatibilityGateRequired,
            kickoffReceipt.EpochTimingProviderOnly,
            kickoffReceipt.WorkshopCalendarOwnership,
            kickoffReceipt.MonitorWorkflowExposed,
            kickoffReceipt.PaymentLiveEnabled,
            kickoffReceipt.ProviderGoLiveRequested,
            kickoffReceipt.LiveProviderEnabled,
            kickoffReceipt.AiForwardCopy,
            "ai-neutral",
            kickoffReceipt.Under19GuardRequired,
            kickoffReceipt.NativeExecutionReady,
            kickoffReceipt.RequiresEpochTimingRequest);
    }
}
