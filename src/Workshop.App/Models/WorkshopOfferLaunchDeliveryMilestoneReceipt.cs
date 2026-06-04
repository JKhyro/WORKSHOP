namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryMilestoneReceipt(
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
    string MilestonePath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool AppOwnedMilestoneState,
    bool AppOwnedKickoffState,
    bool MilestoneReady,
    bool KickoffReady,
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
    public static WorkshopOfferLaunchDeliveryMilestoneReceipt FromMilestone(
        WorkshopOfferLaunchDeliveryMilestoneRecord milestone,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-milestone-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            milestone.CustomerSafeForReceipt &&
            !milestone.CustomerVisible &&
            !milestone.WebportalExportReady &&
            milestone.AppOwnedMilestoneState &&
            milestone.AppOwnedKickoffState &&
            milestone.EpochTimingProviderOnly &&
            !milestone.WorkshopCalendarOwnership &&
            !milestone.MonitorWorkflowExposed &&
            !milestone.PaymentLiveEnabled &&
            !milestone.ProviderGoLiveRequested &&
            !milestone.LiveProviderEnabled &&
            !milestone.AiForwardCopy &&
            milestone.JapanCopyMode == "ai-neutral" &&
            milestone.Under19GuardRequired &&
            milestone.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryMilestoneReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryMilestoneReceipt",
            milestone.ServiceRequestId,
            milestone.ServiceLane,
            milestone.PackageId,
            "offer-launch-delivery-milestone",
            milestone.CustomerLabel,
            customerSafe && milestone.MilestoneReady
                ? "customer-safe-offer-launch-delivery-milestone-active"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-milestone-fit-review"
                    : "customer-safe-offer-launch-delivery-milestone-blocked",
            milestone.OfferLabel,
            milestone.PriceLabel,
            milestone.MilestonePath,
            customerSafe && milestone.MilestoneReady
                ? "Your first WORKSHOP delivery milestone is active. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
                : customerSafe
                    ? "Your first WORKSHOP delivery milestone is waiting for compatibility review before milestone work continues."
                    : "This WORKSHOP delivery milestone is waiting for internal review before customer-safe status can be exported.",
            milestone.RequiresEpochTimingRequest
                ? "WORKSHOP will continue the first milestone and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will continue the first milestone without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            milestone.AppOwnedMilestoneState,
            milestone.AppOwnedKickoffState,
            milestone.MilestoneReady,
            milestone.KickoffReady,
            milestone.CompatibilityGateRequired,
            milestone.EpochTimingProviderOnly,
            milestone.WorkshopCalendarOwnership,
            milestone.MonitorWorkflowExposed,
            milestone.PaymentLiveEnabled,
            milestone.ProviderGoLiveRequested,
            milestone.LiveProviderEnabled,
            milestone.AiForwardCopy,
            milestone.Under19GuardRequired,
            milestone.NativeExecutionReady,
            milestone.RequiresEpochTimingRequest);
    }
}
