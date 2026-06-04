namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionKickoffRecord(
    string ExpansionKickoffId,
    string CreatedAtUtc,
    string SourceSurface,
    string ExpansionWorkspaceReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string ExpansionKickoffPath,
    string ExpansionWorkspacePath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedExpansionKickoffState,
    bool AppOwnedExpansionWorkspaceState,
    bool ExpansionKickoffReady,
    bool ExpansionWorkspaceReady,
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
    public static WorkshopOfferLaunchDeliveryExpansionKickoffRecord FromExpansionWorkspaceReceipt(
        WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt expansionWorkspaceReceipt,
        DateTimeOffset createdAtUtc)
    {
        string expansionKickoffId = $"workshop-offer-launch-delivery-expansion-kickoff-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForKickoff =
            expansionWorkspaceReceipt.CustomerSafe &&
            expansionWorkspaceReceipt.CustomerVisible &&
            expansionWorkspaceReceipt.CustomerVisibleReceiptReady &&
            expansionWorkspaceReceipt.WebportalExportReady &&
            expansionWorkspaceReceipt.AppOwnedExpansionWorkspaceState &&
            expansionWorkspaceReceipt.EpochTimingProviderOnly &&
            !expansionWorkspaceReceipt.WorkshopCalendarOwnership &&
            !expansionWorkspaceReceipt.MonitorWorkflowExposed &&
            !expansionWorkspaceReceipt.PaymentLiveEnabled &&
            !expansionWorkspaceReceipt.ProviderGoLiveRequested &&
            !expansionWorkspaceReceipt.LiveProviderEnabled &&
            !expansionWorkspaceReceipt.AiForwardCopy &&
            expansionWorkspaceReceipt.JapanCopyMode == "ai-neutral" &&
            expansionWorkspaceReceipt.Under19GuardRequired &&
            expansionWorkspaceReceipt.NativeExecutionReady;
        bool expansionKickoffReady = safeForKickoff &&
            expansionWorkspaceReceipt.ExpansionWorkspaceReady &&
            (expansionWorkspaceReceipt.RepeatServiceRequested ||
                expansionWorkspaceReceipt.RenewalRequested ||
                expansionWorkspaceReceipt.ReferralRequested) &&
            !expansionWorkspaceReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryExpansionKickoffRecord(
            expansionKickoffId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionKickoff",
            expansionWorkspaceReceipt.ReceiptId,
            expansionWorkspaceReceipt.ServiceRequestId,
            expansionWorkspaceReceipt.ServiceLane,
            expansionWorkspaceReceipt.PackageId,
            "offer-launch-delivery-expansion-kickoff",
            expansionWorkspaceReceipt.CustomerLabel,
            expansionKickoffReady
                ? "offer-launch-delivery-expansion-kickoff-ready"
                : safeForKickoff
                    ? "offer-launch-delivery-expansion-kickoff-fit-review"
                    : "offer-launch-delivery-expansion-kickoff-blocked",
            expansionKickoffReady ? "adult-service-launch-delivery-expansion-kickoff-active" : "compatibility-review-before-launch-delivery-expansion-kickoff",
            expansionWorkspaceReceipt.ExpansionWorkspacePath,
            expansionWorkspaceReceipt.OfferLabel,
            expansionWorkspaceReceipt.PriceLabel,
            expansionKickoffReady
                ? "WORKSHOP moved the next-service expansion workspace into kickoff. EPOCH remains timing-provider-only."
                : safeForKickoff
                    ? "WORKSHOP is holding next-service kickoff until compatibility review is complete."
                    : "WORKSHOP cannot begin next-service kickoff until expansion workspace receipt gates are complete.",
            expansionKickoffReady
                ? "Begin the next-service delivery kickoff inside WORKSHOP, then export only the customer-safe expansion kickoff receipt."
                : safeForKickoff
                    ? "Complete compatibility review before next-service kickoff, then export only the customer-safe expansion kickoff receipt."
                    : "Resolve expansion workspace receipt or boundary blockers before expansion kickoff status becomes customer-safe.",
            false,
            safeForKickoff,
            false,
            true,
            expansionWorkspaceReceipt.AppOwnedExpansionWorkspaceState,
            expansionKickoffReady,
            expansionWorkspaceReceipt.ExpansionWorkspaceReady,
            expansionKickoffReady && expansionWorkspaceReceipt.RepeatServiceRequested,
            expansionKickoffReady && expansionWorkspaceReceipt.RenewalRequested,
            expansionKickoffReady && expansionWorkspaceReceipt.ReferralRequested,
            expansionWorkspaceReceipt.CompatibilityGateRequired,
            expansionWorkspaceReceipt.EpochTimingProviderOnly,
            expansionWorkspaceReceipt.WorkshopCalendarOwnership,
            expansionWorkspaceReceipt.MonitorWorkflowExposed,
            expansionWorkspaceReceipt.PaymentLiveEnabled,
            expansionWorkspaceReceipt.ProviderGoLiveRequested,
            expansionWorkspaceReceipt.LiveProviderEnabled,
            expansionWorkspaceReceipt.AiForwardCopy,
            "ai-neutral",
            expansionWorkspaceReceipt.Under19GuardRequired,
            expansionWorkspaceReceipt.NativeExecutionReady,
            expansionWorkspaceReceipt.RequiresEpochTimingRequest);
    }
}
