namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt(
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
    string ExpansionOutcomePath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool AppOwnedExpansionOutcomeState,
    bool AppOwnedExpansionMilestoneState,
    bool ExpansionOutcomeReady,
    bool ExpansionMilestoneReady,
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
    public static WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt FromExpansionOutcome(
        WorkshopOfferLaunchDeliveryExpansionOutcomeRecord expansionOutcome,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-expansion-outcome-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            expansionOutcome.CustomerSafeForReceipt &&
            !expansionOutcome.CustomerVisible &&
            !expansionOutcome.WebportalExportReady &&
            expansionOutcome.AppOwnedExpansionOutcomeState &&
            expansionOutcome.AppOwnedExpansionMilestoneState &&
            expansionOutcome.EpochTimingProviderOnly &&
            !expansionOutcome.WorkshopCalendarOwnership &&
            !expansionOutcome.MonitorWorkflowExposed &&
            !expansionOutcome.PaymentLiveEnabled &&
            !expansionOutcome.ProviderGoLiveRequested &&
            !expansionOutcome.LiveProviderEnabled &&
            !expansionOutcome.AiForwardCopy &&
            expansionOutcome.JapanCopyMode == "ai-neutral" &&
            expansionOutcome.Under19GuardRequired &&
            expansionOutcome.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionOutcomeReceipt",
            expansionOutcome.ServiceRequestId,
            expansionOutcome.ServiceLane,
            expansionOutcome.PackageId,
            "offer-launch-delivery-expansion-outcome",
            expansionOutcome.CustomerLabel,
            customerSafe && expansionOutcome.ExpansionOutcomeReady
                ? "customer-safe-offer-launch-delivery-expansion-outcome-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-expansion-outcome-fit-review"
                    : "customer-safe-offer-launch-delivery-expansion-outcome-blocked",
            expansionOutcome.OfferLabel,
            expansionOutcome.PriceLabel,
            expansionOutcome.ExpansionOutcomePath,
            customerSafe && expansionOutcome.ExpansionOutcomeReady
                ? "Your WORKSHOP next-service delivery outcome is ready. EPOCH will be used only if timing is needed."
                : customerSafe
                    ? "Your WORKSHOP next-service delivery outcome is waiting for compatibility review before follow-up planning continues."
                    : "This WORKSHOP expansion outcome is waiting for internal review before customer-safe status can be exported.",
            expansionOutcome.RequiresEpochTimingRequest
                ? "WORKSHOP will review the next service follow-up, renewal, or referral path and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will review the next service follow-up, renewal, or referral path without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            expansionOutcome.AppOwnedExpansionOutcomeState,
            expansionOutcome.AppOwnedExpansionMilestoneState,
            expansionOutcome.ExpansionOutcomeReady,
            expansionOutcome.ExpansionMilestoneReady,
            expansionOutcome.RepeatServiceRequested,
            expansionOutcome.RenewalRequested,
            expansionOutcome.ReferralRequested,
            expansionOutcome.CompatibilityGateRequired,
            expansionOutcome.EpochTimingProviderOnly,
            expansionOutcome.WorkshopCalendarOwnership,
            expansionOutcome.MonitorWorkflowExposed,
            expansionOutcome.PaymentLiveEnabled,
            expansionOutcome.ProviderGoLiveRequested,
            expansionOutcome.LiveProviderEnabled,
            expansionOutcome.AiForwardCopy,
            expansionOutcome.Under19GuardRequired,
            expansionOutcome.NativeExecutionReady,
            expansionOutcome.RequiresEpochTimingRequest);
    }
}
