namespace Workshop.App;

public sealed record WorkshopOfferLaunchActivationReceipt(
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
    string ActivationPath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool AppOwnedActivationState,
    bool AppOwnedIntakeState,
    bool ActivationReady,
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
    public static WorkshopOfferLaunchActivationReceipt FromActivation(
        WorkshopOfferLaunchActivationRecord activation,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-activation-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool customerSafe =
            activation.CustomerSafeForReceipt &&
            !activation.CustomerVisible &&
            !activation.WebportalExportReady &&
            activation.AppOwnedActivationState &&
            activation.AppOwnedIntakeState &&
            activation.EpochTimingProviderOnly &&
            !activation.WorkshopCalendarOwnership &&
            !activation.MonitorWorkflowExposed &&
            !activation.PaymentLiveEnabled &&
            !activation.ProviderGoLiveRequested &&
            !activation.LiveProviderEnabled &&
            !activation.AiForwardCopy &&
            activation.JapanCopyMode == "ai-neutral" &&
            activation.Under19GuardRequired &&
            activation.NativeExecutionReady;

        return new WorkshopOfferLaunchActivationReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchActivationReceipt",
            activation.ServiceRequestId,
            activation.ServiceLane,
            activation.PackageId,
            "offer-launch-activation",
            activation.CustomerLabel,
            customerSafe && activation.ActivationReady
                ? "customer-safe-offer-launch-activation-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-activation-fit-review"
                    : "customer-safe-offer-launch-activation-blocked",
            activation.OfferLabel,
            activation.PriceLabel,
            activation.ActivationPath,
            customerSafe && activation.ActivationReady
                ? "Your WORKSHOP offer path is accepted for service setup. EPOCH is used only for timing if a deadline or appointment becomes necessary."
                : customerSafe
                    ? "Your WORKSHOP offer path is in compatibility review before service setup."
                    : "This WORKSHOP offer path is waiting for activation review before customer-safe status can be exported.",
            activation.RequiresEpochTimingRequest
                ? "WORKSHOP will prepare service setup and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will prepare service setup without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            activation.AppOwnedActivationState,
            activation.AppOwnedIntakeState,
            activation.ActivationReady,
            activation.CompatibilityGateRequired,
            activation.EpochTimingProviderOnly,
            activation.WorkshopCalendarOwnership,
            activation.MonitorWorkflowExposed,
            activation.PaymentLiveEnabled,
            activation.ProviderGoLiveRequested,
            activation.LiveProviderEnabled,
            activation.AiForwardCopy,
            activation.Under19GuardRequired,
            activation.NativeExecutionReady,
            activation.RequiresEpochTimingRequest);
    }
}
