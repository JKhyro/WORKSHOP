namespace Workshop.App;

public sealed record WorkshopOfferLaunchActivationRecord(
    string ActivationId,
    string CreatedAtUtc,
    string SourceSurface,
    string IntakeReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string ActivationPath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
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
    string JapanCopyMode,
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchActivationRecord FromIntakeReceipt(
        WorkshopOfferLaunchIntakeReceipt intakeReceipt,
        DateTimeOffset createdAtUtc)
    {
        string activationId = $"workshop-offer-launch-activation-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..76];
        bool safeForActivation =
            intakeReceipt.CustomerSafe &&
            intakeReceipt.CustomerVisible &&
            intakeReceipt.CustomerVisibleReceiptReady &&
            intakeReceipt.WebportalExportReady &&
            intakeReceipt.AppOwnedIntakeState &&
            intakeReceipt.EpochTimingProviderOnly &&
            !intakeReceipt.WorkshopCalendarOwnership &&
            !intakeReceipt.MonitorWorkflowExposed &&
            !intakeReceipt.PaymentLiveEnabled &&
            !intakeReceipt.ProviderGoLiveRequested &&
            !intakeReceipt.LiveProviderEnabled &&
            !intakeReceipt.AiForwardCopy &&
            intakeReceipt.JapanCopyMode == "ai-neutral" &&
            intakeReceipt.Under19GuardRequired &&
            intakeReceipt.NativeExecutionReady;
        bool activationReady = safeForActivation && !intakeReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchActivationRecord(
            activationId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchActivation",
            intakeReceipt.ReceiptId,
            intakeReceipt.ServiceRequestId,
            intakeReceipt.ServiceLane,
            intakeReceipt.PackageId,
            "offer-launch-activation",
            intakeReceipt.CustomerLabel,
            activationReady
                ? "offer-launch-activation-ready"
                : safeForActivation
                    ? "offer-launch-activation-fit-review"
                    : "offer-launch-activation-blocked",
            activationReady ? "adult-service-delivery-setup" : "compatibility-review-before-delivery",
            intakeReceipt.OfferLabel,
            intakeReceipt.PriceLabel,
            activationReady
                ? "WORKSHOP accepted the launch-ready offer intake for service setup. EPOCH remains timing-provider-only."
                : safeForActivation
                    ? "WORKSHOP is holding this launch-ready offer intake for compatibility review before service setup."
                    : "WORKSHOP cannot activate this offer intake until customer-safe intake gates are complete.",
            activationReady
                ? "Prepare the delivery workspace, reusable material path, and service request handoff inside WORKSHOP before exporting only the customer-safe activation receipt."
                : safeForActivation
                    ? "Complete compatibility review before activating this offer for delivery, then export only the customer-safe activation receipt."
                    : "Resolve intake receipt, review, or boundary blockers before launch activation becomes customer-safe.",
            false,
            safeForActivation,
            false,
            true,
            intakeReceipt.AppOwnedIntakeState,
            activationReady,
            intakeReceipt.CompatibilityGateRequired,
            intakeReceipt.EpochTimingProviderOnly,
            intakeReceipt.WorkshopCalendarOwnership,
            intakeReceipt.MonitorWorkflowExposed,
            intakeReceipt.PaymentLiveEnabled,
            intakeReceipt.ProviderGoLiveRequested,
            intakeReceipt.LiveProviderEnabled,
            intakeReceipt.AiForwardCopy,
            "ai-neutral",
            intakeReceipt.Under19GuardRequired,
            intakeReceipt.NativeExecutionReady,
            intakeReceipt.RequiresEpochTimingRequest);
    }
}
