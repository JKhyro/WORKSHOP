namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryWorkspaceRecord(
    string WorkspaceId,
    string CreatedAtUtc,
    string SourceSurface,
    string SetupReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string WorkspacePath,
    string SetupPath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool AppOwnedWorkspaceState,
    bool AppOwnedSetupState,
    bool WorkspaceReady,
    bool SetupReady,
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
    public static WorkshopOfferLaunchDeliveryWorkspaceRecord FromSetupReceipt(
        WorkshopOfferLaunchServiceSetupReceipt setupReceipt,
        DateTimeOffset createdAtUtc)
    {
        string workspaceId = $"workshop-offer-launch-delivery-workspace-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool safeForWorkspace =
            setupReceipt.CustomerSafe &&
            setupReceipt.CustomerVisible &&
            setupReceipt.CustomerVisibleReceiptReady &&
            setupReceipt.WebportalExportReady &&
            setupReceipt.AppOwnedSetupState &&
            setupReceipt.EpochTimingProviderOnly &&
            !setupReceipt.WorkshopCalendarOwnership &&
            !setupReceipt.MonitorWorkflowExposed &&
            !setupReceipt.PaymentLiveEnabled &&
            !setupReceipt.ProviderGoLiveRequested &&
            !setupReceipt.LiveProviderEnabled &&
            !setupReceipt.AiForwardCopy &&
            setupReceipt.JapanCopyMode == "ai-neutral" &&
            setupReceipt.Under19GuardRequired &&
            setupReceipt.NativeExecutionReady;
        bool workspaceReady = safeForWorkspace &&
            setupReceipt.SetupReady &&
            !setupReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryWorkspaceRecord(
            workspaceId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryWorkspace",
            setupReceipt.ReceiptId,
            setupReceipt.ServiceRequestId,
            setupReceipt.ServiceLane,
            setupReceipt.PackageId,
            "offer-launch-delivery-workspace",
            setupReceipt.CustomerLabel,
            workspaceReady
                ? "offer-launch-delivery-workspace-ready"
                : safeForWorkspace
                    ? "offer-launch-delivery-workspace-fit-review"
                    : "offer-launch-delivery-workspace-blocked",
            workspaceReady ? "adult-service-delivery-workspace-active" : "compatibility-review-before-delivery-workspace",
            setupReceipt.SetupPath,
            setupReceipt.OfferLabel,
            setupReceipt.PriceLabel,
            workspaceReady
                ? "WORKSHOP prepared the delivery workspace after service setup. EPOCH remains timing-provider-only."
                : safeForWorkspace
                    ? "WORKSHOP is holding the delivery workspace until compatibility review is complete."
                    : "WORKSHOP cannot prepare the delivery workspace until setup receipt gates are complete.",
            workspaceReady
                ? "Assign reusable materials, delivery checklist, and review queue inside WORKSHOP, then export only the customer-safe workspace receipt."
                : safeForWorkspace
                    ? "Complete compatibility review before delivery workspace activation, then export only the customer-safe workspace receipt."
                    : "Resolve setup receipt or boundary blockers before delivery workspace status becomes customer-safe.",
            false,
            safeForWorkspace,
            false,
            true,
            setupReceipt.AppOwnedSetupState,
            workspaceReady,
            setupReceipt.SetupReady,
            setupReceipt.CompatibilityGateRequired,
            setupReceipt.EpochTimingProviderOnly,
            setupReceipt.WorkshopCalendarOwnership,
            setupReceipt.MonitorWorkflowExposed,
            setupReceipt.PaymentLiveEnabled,
            setupReceipt.ProviderGoLiveRequested,
            setupReceipt.LiveProviderEnabled,
            setupReceipt.AiForwardCopy,
            "ai-neutral",
            setupReceipt.Under19GuardRequired,
            setupReceipt.NativeExecutionReady,
            setupReceipt.RequiresEpochTimingRequest);
    }
}
