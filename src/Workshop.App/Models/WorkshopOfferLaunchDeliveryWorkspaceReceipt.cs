namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryWorkspaceReceipt(
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
    string WorkspacePath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
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
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchDeliveryWorkspaceReceipt FromWorkspace(
        WorkshopOfferLaunchDeliveryWorkspaceRecord workspace,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-workspace-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool customerSafe =
            workspace.CustomerSafeForReceipt &&
            !workspace.CustomerVisible &&
            !workspace.WebportalExportReady &&
            workspace.AppOwnedWorkspaceState &&
            workspace.AppOwnedSetupState &&
            workspace.EpochTimingProviderOnly &&
            !workspace.WorkshopCalendarOwnership &&
            !workspace.MonitorWorkflowExposed &&
            !workspace.PaymentLiveEnabled &&
            !workspace.ProviderGoLiveRequested &&
            !workspace.LiveProviderEnabled &&
            !workspace.AiForwardCopy &&
            workspace.JapanCopyMode == "ai-neutral" &&
            workspace.Under19GuardRequired &&
            workspace.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryWorkspaceReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryWorkspaceReceipt",
            workspace.ServiceRequestId,
            workspace.ServiceLane,
            workspace.PackageId,
            "offer-launch-delivery-workspace",
            workspace.CustomerLabel,
            customerSafe && workspace.WorkspaceReady
                ? "customer-safe-offer-launch-delivery-workspace-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-workspace-fit-review"
                    : "customer-safe-offer-launch-delivery-workspace-blocked",
            workspace.OfferLabel,
            workspace.PriceLabel,
            workspace.WorkspacePath,
            customerSafe && workspace.WorkspaceReady
                ? "Your WORKSHOP delivery workspace is ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
                : customerSafe
                    ? "Your WORKSHOP delivery workspace is waiting for compatibility review before delivery begins."
                    : "This WORKSHOP delivery workspace is waiting for internal review before customer-safe status can be exported.",
            workspace.RequiresEpochTimingRequest
                ? "WORKSHOP will continue delivery in the prepared workspace and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will continue delivery in the prepared workspace without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            workspace.AppOwnedWorkspaceState,
            workspace.AppOwnedSetupState,
            workspace.WorkspaceReady,
            workspace.SetupReady,
            workspace.CompatibilityGateRequired,
            workspace.EpochTimingProviderOnly,
            workspace.WorkshopCalendarOwnership,
            workspace.MonitorWorkflowExposed,
            workspace.PaymentLiveEnabled,
            workspace.ProviderGoLiveRequested,
            workspace.LiveProviderEnabled,
            workspace.AiForwardCopy,
            workspace.Under19GuardRequired,
            workspace.NativeExecutionReady,
            workspace.RequiresEpochTimingRequest);
    }
}
