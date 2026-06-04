namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryKickoffReceipt(
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
    string KickoffPath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
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
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchDeliveryKickoffReceipt FromKickoff(
        WorkshopOfferLaunchDeliveryKickoffRecord kickoff,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-kickoff-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool customerSafe =
            kickoff.CustomerSafeForReceipt &&
            !kickoff.CustomerVisible &&
            !kickoff.WebportalExportReady &&
            kickoff.AppOwnedKickoffState &&
            kickoff.AppOwnedWorkspaceState &&
            kickoff.EpochTimingProviderOnly &&
            !kickoff.WorkshopCalendarOwnership &&
            !kickoff.MonitorWorkflowExposed &&
            !kickoff.PaymentLiveEnabled &&
            !kickoff.ProviderGoLiveRequested &&
            !kickoff.LiveProviderEnabled &&
            !kickoff.AiForwardCopy &&
            kickoff.JapanCopyMode == "ai-neutral" &&
            kickoff.Under19GuardRequired &&
            kickoff.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryKickoffReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryKickoffReceipt",
            kickoff.ServiceRequestId,
            kickoff.ServiceLane,
            kickoff.PackageId,
            "offer-launch-delivery-kickoff",
            kickoff.CustomerLabel,
            customerSafe && kickoff.KickoffReady
                ? "customer-safe-offer-launch-delivery-kickoff-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-kickoff-fit-review"
                    : "customer-safe-offer-launch-delivery-kickoff-blocked",
            kickoff.OfferLabel,
            kickoff.PriceLabel,
            kickoff.KickoffPath,
            customerSafe && kickoff.KickoffReady
                ? "Your WORKSHOP delivery kickoff is ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
                : customerSafe
                    ? "Your WORKSHOP delivery kickoff is waiting for compatibility review before the first delivery milestone begins."
                    : "This WORKSHOP delivery kickoff is waiting for internal review before customer-safe status can be exported.",
            kickoff.RequiresEpochTimingRequest
                ? "WORKSHOP will begin the first delivery milestone and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will begin the first delivery milestone without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            kickoff.AppOwnedKickoffState,
            kickoff.AppOwnedWorkspaceState,
            kickoff.KickoffReady,
            kickoff.WorkspaceReady,
            kickoff.CompatibilityGateRequired,
            kickoff.EpochTimingProviderOnly,
            kickoff.WorkshopCalendarOwnership,
            kickoff.MonitorWorkflowExposed,
            kickoff.PaymentLiveEnabled,
            kickoff.ProviderGoLiveRequested,
            kickoff.LiveProviderEnabled,
            kickoff.AiForwardCopy,
            kickoff.Under19GuardRequired,
            kickoff.NativeExecutionReady,
            kickoff.RequiresEpochTimingRequest);
    }
}
