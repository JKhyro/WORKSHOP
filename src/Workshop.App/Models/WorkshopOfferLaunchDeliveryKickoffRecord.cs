namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryKickoffRecord(
    string KickoffId,
    string CreatedAtUtc,
    string SourceSurface,
    string WorkspaceReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string KickoffPath,
    string WorkspacePath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedKickoffState,
    bool AppOwnedWorkspaceState,
    bool KickoffReady,
    bool WorkspaceReady,
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
    public static WorkshopOfferLaunchDeliveryKickoffRecord FromWorkspaceReceipt(
        WorkshopOfferLaunchDeliveryWorkspaceReceipt workspaceReceipt,
        DateTimeOffset createdAtUtc)
    {
        string kickoffId = $"workshop-offer-launch-delivery-kickoff-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool safeForKickoff =
            workspaceReceipt.CustomerSafe &&
            workspaceReceipt.CustomerVisible &&
            workspaceReceipt.CustomerVisibleReceiptReady &&
            workspaceReceipt.WebportalExportReady &&
            workspaceReceipt.AppOwnedWorkspaceState &&
            workspaceReceipt.EpochTimingProviderOnly &&
            !workspaceReceipt.WorkshopCalendarOwnership &&
            !workspaceReceipt.MonitorWorkflowExposed &&
            !workspaceReceipt.PaymentLiveEnabled &&
            !workspaceReceipt.ProviderGoLiveRequested &&
            !workspaceReceipt.LiveProviderEnabled &&
            !workspaceReceipt.AiForwardCopy &&
            workspaceReceipt.JapanCopyMode == "ai-neutral" &&
            workspaceReceipt.Under19GuardRequired &&
            workspaceReceipt.NativeExecutionReady;
        bool kickoffReady = safeForKickoff &&
            workspaceReceipt.WorkspaceReady &&
            !workspaceReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryKickoffRecord(
            kickoffId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryKickoff",
            workspaceReceipt.ReceiptId,
            workspaceReceipt.ServiceRequestId,
            workspaceReceipt.ServiceLane,
            workspaceReceipt.PackageId,
            "offer-launch-delivery-kickoff",
            workspaceReceipt.CustomerLabel,
            kickoffReady
                ? "offer-launch-delivery-kickoff-ready"
                : safeForKickoff
                    ? "offer-launch-delivery-kickoff-fit-review"
                    : "offer-launch-delivery-kickoff-blocked",
            kickoffReady ? "adult-service-delivery-kickoff-active" : "compatibility-review-before-delivery-kickoff",
            workspaceReceipt.WorkspacePath,
            workspaceReceipt.OfferLabel,
            workspaceReceipt.PriceLabel,
            kickoffReady
                ? "WORKSHOP moved the prepared delivery workspace into kickoff. EPOCH remains timing-provider-only."
                : safeForKickoff
                    ? "WORKSHOP is holding delivery kickoff until compatibility review is complete."
                    : "WORKSHOP cannot begin delivery kickoff until workspace receipt gates are complete.",
            kickoffReady
                ? "Start the first delivery milestone, assign the review queue, and export only the customer-safe kickoff receipt."
                : safeForKickoff
                    ? "Complete compatibility review before delivery kickoff, then export only the customer-safe kickoff receipt."
                    : "Resolve workspace receipt or boundary blockers before delivery kickoff status becomes customer-safe.",
            false,
            safeForKickoff,
            false,
            true,
            workspaceReceipt.AppOwnedWorkspaceState,
            kickoffReady,
            workspaceReceipt.WorkspaceReady,
            workspaceReceipt.CompatibilityGateRequired,
            workspaceReceipt.EpochTimingProviderOnly,
            workspaceReceipt.WorkshopCalendarOwnership,
            workspaceReceipt.MonitorWorkflowExposed,
            workspaceReceipt.PaymentLiveEnabled,
            workspaceReceipt.ProviderGoLiveRequested,
            workspaceReceipt.LiveProviderEnabled,
            workspaceReceipt.AiForwardCopy,
            "ai-neutral",
            workspaceReceipt.Under19GuardRequired,
            workspaceReceipt.NativeExecutionReady,
            workspaceReceipt.RequiresEpochTimingRequest);
    }
}
