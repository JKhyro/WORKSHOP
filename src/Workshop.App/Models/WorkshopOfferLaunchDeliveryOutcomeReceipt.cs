namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryOutcomeReceipt(
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
    string OutcomePath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool AppOwnedOutcomeState,
    bool AppOwnedMilestoneState,
    bool OutcomeReady,
    bool MilestoneReady,
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
    public static WorkshopOfferLaunchDeliveryOutcomeReceipt FromOutcome(
        WorkshopOfferLaunchDeliveryOutcomeRecord outcome,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-outcome-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            outcome.CustomerSafeForReceipt &&
            !outcome.CustomerVisible &&
            !outcome.WebportalExportReady &&
            outcome.AppOwnedOutcomeState &&
            outcome.AppOwnedMilestoneState &&
            outcome.EpochTimingProviderOnly &&
            !outcome.WorkshopCalendarOwnership &&
            !outcome.MonitorWorkflowExposed &&
            !outcome.PaymentLiveEnabled &&
            !outcome.ProviderGoLiveRequested &&
            !outcome.LiveProviderEnabled &&
            !outcome.AiForwardCopy &&
            outcome.JapanCopyMode == "ai-neutral" &&
            outcome.Under19GuardRequired &&
            outcome.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryOutcomeReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryOutcomeReceipt",
            outcome.ServiceRequestId,
            outcome.ServiceLane,
            outcome.PackageId,
            "offer-launch-delivery-outcome",
            outcome.CustomerLabel,
            customerSafe && outcome.OutcomeReady
                ? "customer-safe-offer-launch-delivery-outcome-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-outcome-fit-review"
                    : "customer-safe-offer-launch-delivery-outcome-blocked",
            outcome.OfferLabel,
            outcome.PriceLabel,
            outcome.OutcomePath,
            customerSafe && outcome.OutcomeReady
                ? "Your first WORKSHOP delivery outcome is ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
                : customerSafe
                    ? "Your WORKSHOP delivery outcome is waiting for compatibility review before follow-up planning continues."
                    : "This WORKSHOP delivery outcome is waiting for internal review before customer-safe status can be exported.",
            outcome.RequiresEpochTimingRequest
                ? "WORKSHOP will review follow-up or renewal options and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will review follow-up or renewal options without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            outcome.AppOwnedOutcomeState,
            outcome.AppOwnedMilestoneState,
            outcome.OutcomeReady,
            outcome.MilestoneReady,
            outcome.CompatibilityGateRequired,
            outcome.EpochTimingProviderOnly,
            outcome.WorkshopCalendarOwnership,
            outcome.MonitorWorkflowExposed,
            outcome.PaymentLiveEnabled,
            outcome.ProviderGoLiveRequested,
            outcome.LiveProviderEnabled,
            outcome.AiForwardCopy,
            outcome.Under19GuardRequired,
            outcome.NativeExecutionReady,
            outcome.RequiresEpochTimingRequest);
    }
}
