namespace Workshop.App;

public sealed record WorkshopOfferLaunchIntakeReceipt(
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
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool AppOwnedIntakeState,
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
    public static WorkshopOfferLaunchIntakeReceipt FromAction(
        WorkshopOfferLaunchIntakeActionRecord action,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-intake-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool customerSafe =
            action.CustomerSafeForReceipt &&
            !action.CustomerVisible &&
            !action.WebportalExportReady &&
            action.AppOwnedIntakeState &&
            action.EpochTimingProviderOnly &&
            !action.WorkshopCalendarOwnership &&
            !action.MonitorWorkflowExposed &&
            !action.PaymentLiveEnabled &&
            !action.ProviderGoLiveRequested &&
            !action.LiveProviderEnabled &&
            !action.AiForwardCopy &&
            action.JapanCopyMode == "ai-neutral" &&
            action.Under19GuardRequired &&
            action.NativeExecutionReady;

        return new WorkshopOfferLaunchIntakeReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchIntakeReceipt",
            action.ServiceRequestId,
            action.ServiceLane,
            action.PackageId,
            "offer-launch-intake",
            action.CustomerLabel,
            customerSafe && action.CompatibilityGateRequired
                ? "customer-safe-offer-launch-intake-fit-review"
                : customerSafe
                    ? "customer-safe-offer-launch-intake-queued"
                    : "customer-safe-offer-launch-intake-blocked",
            action.OfferLabel,
            action.PriceLabel,
            customerSafe && action.CompatibilityGateRequired
                ? "Your request is held for compatibility review before the offer path is accepted. EPOCH is used only for timing requests."
                : customerSafe
                    ? "Your request is queued for the adult submission review offer. EPOCH is used only for timing requests."
                    : "This offer request is waiting for WORKSHOP review before customer-safe status can be exported.",
            action.RequiresEpochTimingRequest
                ? "WORKSHOP will review the request and ask EPOCH for timing only if an appointment, deadline, or service window is needed."
                : "WORKSHOP will review the request and keep EPOCH as timing-provider-only if scheduling becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            action.AppOwnedIntakeState,
            action.CompatibilityGateRequired,
            action.EpochTimingProviderOnly,
            action.WorkshopCalendarOwnership,
            action.MonitorWorkflowExposed,
            action.PaymentLiveEnabled,
            action.ProviderGoLiveRequested,
            action.LiveProviderEnabled,
            action.AiForwardCopy,
            action.Under19GuardRequired,
            action.NativeExecutionReady,
            action.RequiresEpochTimingRequest);
    }
}
