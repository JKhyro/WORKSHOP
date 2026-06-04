namespace Workshop.App;

public sealed record WorkshopOfferLaunchServiceSetupReceipt(
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
    string SetupPath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool AppOwnedSetupState,
    bool AppOwnedActivationState,
    bool SetupReady,
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
    public static WorkshopOfferLaunchServiceSetupReceipt FromSetup(
        WorkshopOfferLaunchServiceSetupRecord setup,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-service-setup-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool customerSafe =
            setup.CustomerSafeForReceipt &&
            !setup.CustomerVisible &&
            !setup.WebportalExportReady &&
            setup.AppOwnedSetupState &&
            setup.AppOwnedActivationState &&
            setup.EpochTimingProviderOnly &&
            !setup.WorkshopCalendarOwnership &&
            !setup.MonitorWorkflowExposed &&
            !setup.PaymentLiveEnabled &&
            !setup.ProviderGoLiveRequested &&
            !setup.LiveProviderEnabled &&
            !setup.AiForwardCopy &&
            setup.JapanCopyMode == "ai-neutral" &&
            setup.Under19GuardRequired &&
            setup.NativeExecutionReady;

        return new WorkshopOfferLaunchServiceSetupReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchServiceSetupReceipt",
            setup.ServiceRequestId,
            setup.ServiceLane,
            setup.PackageId,
            "offer-launch-service-setup",
            setup.CustomerLabel,
            customerSafe && setup.SetupReady
                ? "customer-safe-offer-launch-service-setup-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-service-setup-fit-review"
                    : "customer-safe-offer-launch-service-setup-blocked",
            setup.OfferLabel,
            setup.PriceLabel,
            setup.SetupPath,
            customerSafe && setup.SetupReady
                ? "Your WORKSHOP service setup is prepared. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
                : customerSafe
                    ? "Your WORKSHOP service setup is waiting for compatibility review before delivery begins."
                    : "This WORKSHOP service setup is waiting for internal review before customer-safe status can be exported.",
            setup.RequiresEpochTimingRequest
                ? "WORKSHOP will continue delivery setup and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will continue delivery setup without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            setup.AppOwnedSetupState,
            setup.AppOwnedActivationState,
            setup.SetupReady,
            setup.ActivationReady,
            setup.CompatibilityGateRequired,
            setup.EpochTimingProviderOnly,
            setup.WorkshopCalendarOwnership,
            setup.MonitorWorkflowExposed,
            setup.PaymentLiveEnabled,
            setup.ProviderGoLiveRequested,
            setup.LiveProviderEnabled,
            setup.AiForwardCopy,
            setup.Under19GuardRequired,
            setup.NativeExecutionReady,
            setup.RequiresEpochTimingRequest);
    }
}
