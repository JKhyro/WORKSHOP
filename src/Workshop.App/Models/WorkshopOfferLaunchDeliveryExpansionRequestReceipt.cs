namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionRequestReceipt(
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
    string ExpansionPath,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerVisible,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool AppOwnedExpansionRequestState,
    bool AppOwnedAcceptanceState,
    bool AcceptanceReady,
    bool RepeatServiceRequested,
    bool RenewalRequested,
    bool ReferralRequested,
    bool ExpansionRequestReady,
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
    public static WorkshopOfferLaunchDeliveryExpansionRequestReceipt FromExpansionRequest(
        WorkshopOfferLaunchDeliveryExpansionRequestRecord expansionRequest,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-delivery-expansion-request-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            expansionRequest.CustomerSafeForReceipt &&
            !expansionRequest.CustomerVisible &&
            !expansionRequest.WebportalExportReady &&
            expansionRequest.AppOwnedExpansionRequestState &&
            expansionRequest.AppOwnedAcceptanceState &&
            expansionRequest.EpochTimingProviderOnly &&
            !expansionRequest.WorkshopCalendarOwnership &&
            !expansionRequest.MonitorWorkflowExposed &&
            !expansionRequest.PaymentLiveEnabled &&
            !expansionRequest.ProviderGoLiveRequested &&
            !expansionRequest.LiveProviderEnabled &&
            !expansionRequest.AiForwardCopy &&
            expansionRequest.JapanCopyMode == "ai-neutral" &&
            expansionRequest.Under19GuardRequired &&
            expansionRequest.NativeExecutionReady;

        return new WorkshopOfferLaunchDeliveryExpansionRequestReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionRequestReceipt",
            expansionRequest.ServiceRequestId,
            expansionRequest.ServiceLane,
            expansionRequest.PackageId,
            "offer-launch-delivery-expansion-request",
            expansionRequest.CustomerLabel,
            customerSafe && expansionRequest.ExpansionRequestReady
                ? "customer-safe-offer-launch-delivery-expansion-request-ready"
                : customerSafe
                    ? "customer-safe-offer-launch-delivery-expansion-request-fit-review"
                    : "customer-safe-offer-launch-delivery-expansion-request-blocked",
            expansionRequest.OfferLabel,
            expansionRequest.PriceLabel,
            expansionRequest.ExpansionPath,
            customerSafe && expansionRequest.ExpansionRequestReady
                ? "Your WORKSHOP repeat-service, renewal, or referral request is ready for the next service step. EPOCH will be used only if timing is needed."
                : customerSafe
                    ? "Your WORKSHOP next-service request is waiting for compatibility review before delivery continues."
                    : "This WORKSHOP expansion request is waiting for internal review before customer-safe status can be exported.",
            expansionRequest.RequiresEpochTimingRequest
                ? "WORKSHOP will prepare the next service step and ask EPOCH only for deadline, appointment, or reminder timing."
                : "WORKSHOP will prepare the next service step without adding calendar load unless timing becomes necessary.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            expansionRequest.AppOwnedExpansionRequestState,
            expansionRequest.AppOwnedAcceptanceState,
            expansionRequest.AcceptanceReady,
            expansionRequest.RepeatServiceRequested,
            expansionRequest.RenewalRequested,
            expansionRequest.ReferralRequested,
            expansionRequest.ExpansionRequestReady,
            expansionRequest.CompatibilityGateRequired,
            expansionRequest.EpochTimingProviderOnly,
            expansionRequest.WorkshopCalendarOwnership,
            expansionRequest.MonitorWorkflowExposed,
            expansionRequest.PaymentLiveEnabled,
            expansionRequest.ProviderGoLiveRequested,
            expansionRequest.LiveProviderEnabled,
            expansionRequest.AiForwardCopy,
            expansionRequest.Under19GuardRequired,
            expansionRequest.NativeExecutionReady,
            expansionRequest.RequiresEpochTimingRequest);
    }
}
