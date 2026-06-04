namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt(
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
    string ExpansionWorkspacePath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
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
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt FromExpansionWorkspace(
        WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord expansionWorkspace,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-expansion-workspace-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            expansionWorkspace.CustomerSafeForReceipt &&
            !expansionWorkspace.CustomerVisible &&
            !expansionWorkspace.WebportalExportReady &&
            expansionWorkspace.AppOwnedExpansionWorkspaceState &&
            expansionWorkspace.AppOwnedExpansionRequestState &&
            expansionWorkspace.EpochTimingProviderOnly &&
            !expansionWorkspace.WorkshopCalendarOwnership &&
            !expansionWorkspace.MonitorWorkflowExposed &&
            !expansionWorkspace.PaymentLiveEnabled &&
            !expansionWorkspace.ProviderGoLiveRequested &&
            !expansionWorkspace.LiveProviderEnabled &&
            !expansionWorkspace.AiForwardCopy &&
            expansionWorkspace.JapanCopyMode == "ai-neutral" &&
            expansionWorkspace.Under19GuardRequired &&
            expansionWorkspace.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionWorkspaceReceipt",
            expansionWorkspace.ServiceRequestId,
            expansionWorkspace.ServiceLane,
            expansionWorkspace.PackageId,
            "offer-launch-delivery-expansion-workspace",
            expansionWorkspace.CustomerLabel,
            customerSafe && expansionWorkspace.ExpansionWorkspaceReady
                ? "customer-safe-offer-launch-delivery-expansion-workspace-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-expansion-workspace-fit-review"
                    : "customer-safe-offer-launch-delivery-expansion-workspace-blocked",
            expansionWorkspace.OfferLabel,
            expansionWorkspace.PriceLabel,
            expansionWorkspace.ExpansionWorkspacePath,
            customerSafe && expansionWorkspace.ExpansionWorkspaceReady
                ? "Your WORKSHOP next-service workspace is ready. EPOCH will be used only if timing is needed."
                : customerSafe
                    ? "Your WORKSHOP next-service workspace is waiting for compatibility review before delivery continues."
                    : "This WORKSHOP expansion workspace is waiting for internal review before customer-safe status can be exported.",
            expansionWorkspace.RequiresEpochTimingRequest
                ? "WORKSHOP will continue the next service step inside the expansion workspace and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will continue the next service step inside the expansion workspace without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            expansionWorkspace.AppOwnedExpansionWorkspaceState,
            expansionWorkspace.AppOwnedExpansionRequestState,
            expansionWorkspace.ExpansionRequestReady,
            expansionWorkspace.RepeatServiceRequested,
            expansionWorkspace.RenewalRequested,
            expansionWorkspace.ReferralRequested,
            expansionWorkspace.ExpansionWorkspaceReady,
            expansionWorkspace.CompatibilityGateRequired,
            expansionWorkspace.EpochTimingProviderOnly,
            expansionWorkspace.WorkshopCalendarOwnership,
            expansionWorkspace.MonitorWorkflowExposed,
            expansionWorkspace.PaymentLiveEnabled,
            expansionWorkspace.ProviderGoLiveRequested,
            expansionWorkspace.LiveProviderEnabled,
            expansionWorkspace.AiForwardCopy,
            expansionWorkspace.Under19GuardRequired,
            expansionWorkspace.NativeExecutionReady,
            expansionWorkspace.RequiresEpochTimingRequest);
    }
}
