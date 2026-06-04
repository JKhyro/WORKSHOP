namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord(
    string ExpansionWorkspaceId,
    string CreatedAtUtc,
    string SourceSurface,
    string ExpansionRequestReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string ExpansionWorkspacePath,
    string ExpansionPath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedExpansionWorkspaceState,
    bool AppOwnedExpansionRequestState,
    bool ExpansionRequestReady,
    bool RepeatServiceRequested,
    bool RenewalRequested,
    bool ReferralRequested,
    bool ExpansionWorkspaceReady,
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
    public static WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord FromExpansionRequestReceipt(
        WorkshopOfferLaunchDeliveryExpansionRequestReceipt expansionRequestReceipt,
        DateTimeOffset createdAtUtc)
    {
        string expansionWorkspaceId = $"workshop-offer-launch-delivery-expansion-workspace-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForWorkspace =
            expansionRequestReceipt.CustomerSafe &&
            expansionRequestReceipt.CustomerVisible &&
            expansionRequestReceipt.CustomerVisibleReceiptReady &&
            expansionRequestReceipt.WebportalExportReady &&
            expansionRequestReceipt.AppOwnedExpansionRequestState &&
            expansionRequestReceipt.EpochTimingProviderOnly &&
            !expansionRequestReceipt.WorkshopCalendarOwnership &&
            !expansionRequestReceipt.MonitorWorkflowExposed &&
            !expansionRequestReceipt.PaymentLiveEnabled &&
            !expansionRequestReceipt.ProviderGoLiveRequested &&
            !expansionRequestReceipt.LiveProviderEnabled &&
            !expansionRequestReceipt.AiForwardCopy &&
            expansionRequestReceipt.JapanCopyMode == "ai-neutral" &&
            expansionRequestReceipt.Under19GuardRequired &&
            expansionRequestReceipt.NativeExecutionReady;
        bool expansionWorkspaceReady = safeForWorkspace &&
            expansionRequestReceipt.ExpansionRequestReady &&
            (expansionRequestReceipt.RepeatServiceRequested ||
                expansionRequestReceipt.RenewalRequested ||
                expansionRequestReceipt.ReferralRequested) &&
            !expansionRequestReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord(
            expansionWorkspaceId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionWorkspace",
            expansionRequestReceipt.ReceiptId,
            expansionRequestReceipt.ServiceRequestId,
            expansionRequestReceipt.ServiceLane,
            expansionRequestReceipt.PackageId,
            "offer-launch-delivery-expansion-workspace",
            expansionRequestReceipt.CustomerLabel,
            expansionWorkspaceReady
                ? "offer-launch-delivery-expansion-workspace-ready"
                : safeForWorkspace
                    ? "offer-launch-delivery-expansion-workspace-fit-review"
                    : "offer-launch-delivery-expansion-workspace-blocked",
            expansionWorkspaceReady ? "adult-service-launch-delivery-expansion-workspace-ready" : "compatibility-review-before-launch-delivery-expansion-workspace",
            expansionRequestReceipt.ExpansionPath,
            expansionRequestReceipt.OfferLabel,
            expansionRequestReceipt.PriceLabel,
            expansionWorkspaceReady
                ? "WORKSHOP prepared the next-service expansion workspace. EPOCH remains timing-provider-only."
                : safeForWorkspace
                    ? "WORKSHOP is holding the expansion workspace until compatibility review is complete."
                    : "WORKSHOP cannot prepare the expansion workspace until customer-safe expansion-request receipt gates are complete.",
            expansionWorkspaceReady
                ? "Assign the next-service delivery plan inside WORKSHOP, then export only the customer-safe expansion workspace receipt."
                : safeForWorkspace
                    ? "Complete compatibility review before expansion workspace activation, then export only the customer-safe expansion workspace receipt."
                    : "Resolve expansion-request receipt or boundary blockers before expansion workspace status becomes customer-safe.",
            false,
            safeForWorkspace,
            false,
            true,
            expansionRequestReceipt.AppOwnedExpansionRequestState,
            expansionRequestReceipt.ExpansionRequestReady,
            expansionWorkspaceReady && expansionRequestReceipt.RepeatServiceRequested,
            expansionWorkspaceReady && expansionRequestReceipt.RenewalRequested,
            expansionWorkspaceReady && expansionRequestReceipt.ReferralRequested,
            expansionWorkspaceReady,
            expansionRequestReceipt.CompatibilityGateRequired,
            expansionRequestReceipt.EpochTimingProviderOnly,
            expansionRequestReceipt.WorkshopCalendarOwnership,
            expansionRequestReceipt.MonitorWorkflowExposed,
            expansionRequestReceipt.PaymentLiveEnabled,
            expansionRequestReceipt.ProviderGoLiveRequested,
            expansionRequestReceipt.LiveProviderEnabled,
            expansionRequestReceipt.AiForwardCopy,
            "ai-neutral",
            expansionRequestReceipt.Under19GuardRequired,
            expansionRequestReceipt.NativeExecutionReady,
            expansionRequestReceipt.RequiresEpochTimingRequest);
    }
}
