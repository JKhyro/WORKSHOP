namespace Workshop.App;

public sealed record WorkshopOfferLaunchServiceSetupRecord(
    string SetupId,
    string CreatedAtUtc,
    string SourceSurface,
    string ActivationReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string SetupPath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
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
    string JapanCopyMode,
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchServiceSetupRecord FromActivationReceipt(
        WorkshopOfferLaunchActivationReceipt activationReceipt,
        DateTimeOffset createdAtUtc)
    {
        string setupId = $"workshop-offer-launch-service-setup-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool safeForSetup =
            activationReceipt.CustomerSafe &&
            activationReceipt.CustomerVisible &&
            activationReceipt.CustomerVisibleReceiptReady &&
            activationReceipt.WebportalExportReady &&
            activationReceipt.AppOwnedActivationState &&
            activationReceipt.EpochTimingProviderOnly &&
            !activationReceipt.WorkshopCalendarOwnership &&
            !activationReceipt.MonitorWorkflowExposed &&
            !activationReceipt.PaymentLiveEnabled &&
            !activationReceipt.ProviderGoLiveRequested &&
            !activationReceipt.LiveProviderEnabled &&
            !activationReceipt.AiForwardCopy &&
            activationReceipt.JapanCopyMode == "ai-neutral" &&
            activationReceipt.Under19GuardRequired &&
            activationReceipt.NativeExecutionReady;
        bool setupReady = safeForSetup &&
            activationReceipt.ActivationReady &&
            !activationReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchServiceSetupRecord(
            setupId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchServiceSetup",
            activationReceipt.ReceiptId,
            activationReceipt.ServiceRequestId,
            activationReceipt.ServiceLane,
            activationReceipt.PackageId,
            "offer-launch-service-setup",
            activationReceipt.CustomerLabel,
            setupReady
                ? "offer-launch-service-setup-ready"
                : safeForSetup
                    ? "offer-launch-service-setup-fit-review"
                    : "offer-launch-service-setup-blocked",
            setupReady ? "adult-service-delivery-workspace" : "compatibility-review-before-service-setup",
            activationReceipt.OfferLabel,
            activationReceipt.PriceLabel,
            setupReady
                ? "WORKSHOP prepared the service setup lane after launch activation. EPOCH remains timing-provider-only."
                : safeForSetup
                    ? "WORKSHOP is holding service setup until compatibility review is complete."
                    : "WORKSHOP cannot prepare service setup until activation receipt gates are complete.",
            setupReady
                ? "Create the delivery workspace, assign reusable materials, and keep only the customer-safe setup receipt available for Webportal import."
                : safeForSetup
                    ? "Complete compatibility review before creating the service setup workspace, then export only the customer-safe setup receipt."
                    : "Resolve activation receipt or boundary blockers before service setup becomes customer-safe.",
            false,
            safeForSetup,
            false,
            true,
            activationReceipt.AppOwnedActivationState,
            setupReady,
            activationReceipt.ActivationReady,
            activationReceipt.CompatibilityGateRequired,
            activationReceipt.EpochTimingProviderOnly,
            activationReceipt.WorkshopCalendarOwnership,
            activationReceipt.MonitorWorkflowExposed,
            activationReceipt.PaymentLiveEnabled,
            activationReceipt.ProviderGoLiveRequested,
            activationReceipt.LiveProviderEnabled,
            activationReceipt.AiForwardCopy,
            "ai-neutral",
            activationReceipt.Under19GuardRequired,
            activationReceipt.NativeExecutionReady,
            activationReceipt.RequiresEpochTimingRequest);
    }
}
