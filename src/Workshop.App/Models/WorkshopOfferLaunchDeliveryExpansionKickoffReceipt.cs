namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionKickoffReceipt(
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
    string ExpansionKickoffPath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool AppOwnedExpansionKickoffState,
    bool AppOwnedExpansionWorkspaceState,
    bool ExpansionKickoffReady,
    bool ExpansionWorkspaceReady,
    bool RepeatServiceRequested,
    bool RenewalRequested,
    bool ReferralRequested,
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
    public static WorkshopOfferLaunchDeliveryExpansionKickoffReceipt FromExpansionKickoff(
        WorkshopOfferLaunchDeliveryExpansionKickoffRecord expansionKickoff,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-expansion-kickoff-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            expansionKickoff.CustomerSafeForReceipt &&
            !expansionKickoff.CustomerVisible &&
            !expansionKickoff.WebportalExportReady &&
            expansionKickoff.AppOwnedExpansionKickoffState &&
            expansionKickoff.AppOwnedExpansionWorkspaceState &&
            expansionKickoff.EpochTimingProviderOnly &&
            !expansionKickoff.WorkshopCalendarOwnership &&
            !expansionKickoff.MonitorWorkflowExposed &&
            !expansionKickoff.PaymentLiveEnabled &&
            !expansionKickoff.ProviderGoLiveRequested &&
            !expansionKickoff.LiveProviderEnabled &&
            !expansionKickoff.AiForwardCopy &&
            expansionKickoff.JapanCopyMode == "ai-neutral" &&
            expansionKickoff.Under19GuardRequired &&
            expansionKickoff.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryExpansionKickoffReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionKickoffReceipt",
            expansionKickoff.ServiceRequestId,
            expansionKickoff.ServiceLane,
            expansionKickoff.PackageId,
            "offer-launch-delivery-expansion-kickoff",
            expansionKickoff.CustomerLabel,
            customerSafe && expansionKickoff.ExpansionKickoffReady
                ? "customer-safe-offer-launch-delivery-expansion-kickoff-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-expansion-kickoff-fit-review"
                    : "customer-safe-offer-launch-delivery-expansion-kickoff-blocked",
            expansionKickoff.OfferLabel,
            expansionKickoff.PriceLabel,
            expansionKickoff.ExpansionKickoffPath,
            customerSafe && expansionKickoff.ExpansionKickoffReady
                ? "Your WORKSHOP next-service kickoff is ready. EPOCH will be used only if timing is needed."
                : customerSafe
                    ? "Your WORKSHOP next-service kickoff is waiting for compatibility review before delivery continues."
                    : "This WORKSHOP expansion kickoff is waiting for internal review before customer-safe status can be exported.",
            expansionKickoff.RequiresEpochTimingRequest
                ? "WORKSHOP will begin the next service milestone and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will begin the next service milestone without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            expansionKickoff.AppOwnedExpansionKickoffState,
            expansionKickoff.AppOwnedExpansionWorkspaceState,
            expansionKickoff.ExpansionKickoffReady,
            expansionKickoff.ExpansionWorkspaceReady,
            expansionKickoff.RepeatServiceRequested,
            expansionKickoff.RenewalRequested,
            expansionKickoff.ReferralRequested,
            expansionKickoff.CompatibilityGateRequired,
            expansionKickoff.EpochTimingProviderOnly,
            expansionKickoff.WorkshopCalendarOwnership,
            expansionKickoff.MonitorWorkflowExposed,
            expansionKickoff.PaymentLiveEnabled,
            expansionKickoff.ProviderGoLiveRequested,
            expansionKickoff.LiveProviderEnabled,
            expansionKickoff.AiForwardCopy,
            expansionKickoff.Under19GuardRequired,
            expansionKickoff.NativeExecutionReady,
            expansionKickoff.RequiresEpochTimingRequest);
    }
}
