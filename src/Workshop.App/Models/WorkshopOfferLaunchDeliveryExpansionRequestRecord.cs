namespace Workshop.App;

public sealed record WorkshopOfferLaunchDeliveryExpansionRequestRecord(
    string ExpansionRequestId,
    string CreatedAtUtc,
    string SourceSurface,
    string AcceptanceReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string CustomerLabel,
    string Status,
    string ExpansionPath,
    string AcceptancePath,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
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
    string JapanCopyMode,
    bool Under19GuardRequired,
    bool NativeExecutionReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopOfferLaunchDeliveryExpansionRequestRecord FromAcceptanceReceipt(
        WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt acceptanceReceipt,
        DateTimeOffset createdAtUtc)
    {
        string expansionRequestId = $"workshop-offer-launch-delivery-expansion-request-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForExpansionRequest =
            acceptanceReceipt.CustomerSafe &&
            acceptanceReceipt.CustomerVisible &&
            acceptanceReceipt.CustomerVisibleReceiptReady &&
            acceptanceReceipt.WebportalExportReady &&
            acceptanceReceipt.AppOwnedAcceptanceState &&
            acceptanceReceipt.EpochTimingProviderOnly &&
            !acceptanceReceipt.WorkshopCalendarOwnership &&
            !acceptanceReceipt.MonitorWorkflowExposed &&
            !acceptanceReceipt.PaymentLiveEnabled &&
            !acceptanceReceipt.ProviderGoLiveRequested &&
            !acceptanceReceipt.LiveProviderEnabled &&
            !acceptanceReceipt.AiForwardCopy &&
            acceptanceReceipt.JapanCopyMode == "ai-neutral" &&
            acceptanceReceipt.Under19GuardRequired &&
            acceptanceReceipt.NativeExecutionReady;
        bool expansionRequestReady = safeForExpansionRequest &&
            acceptanceReceipt.AcceptanceReady &&
            (acceptanceReceipt.RepeatServiceAccepted ||
                acceptanceReceipt.RenewalAccepted ||
                acceptanceReceipt.ReferralAccepted) &&
            !acceptanceReceipt.CompatibilityGateRequired;

        return new WorkshopOfferLaunchDeliveryExpansionRequestRecord(
            expansionRequestId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchDeliveryExpansionRequest",
            acceptanceReceipt.ReceiptId,
            acceptanceReceipt.ServiceRequestId,
            acceptanceReceipt.ServiceLane,
            acceptanceReceipt.PackageId,
            "offer-launch-delivery-expansion-request",
            acceptanceReceipt.CustomerLabel,
            expansionRequestReady
                ? "offer-launch-delivery-expansion-request-ready"
                : safeForExpansionRequest
                    ? "offer-launch-delivery-expansion-request-fit-review"
                    : "offer-launch-delivery-expansion-request-blocked",
            expansionRequestReady ? "adult-service-launch-delivery-expansion-request-ready" : "compatibility-review-before-launch-delivery-expansion-request",
            acceptanceReceipt.AcceptancePath,
            acceptanceReceipt.OfferLabel,
            acceptanceReceipt.PriceLabel,
            expansionRequestReady
                ? "WORKSHOP prepared the accepted repeat-service, renewal, or referral motion as an App-owned expansion request. EPOCH remains timing-provider-only."
                : safeForExpansionRequest
                    ? "WORKSHOP is holding the expansion request until compatibility review is complete."
                    : "WORKSHOP cannot prepare the expansion request until customer-safe acceptance receipt gates are complete.",
            expansionRequestReady
                ? "Prepare the next-service delivery workspace or intake inside WORKSHOP, then export only the customer-safe delivery expansion-request receipt."
                : safeForExpansionRequest
                    ? "Complete compatibility review before expansion-request status is exported."
                    : "Resolve acceptance receipt or boundary blockers before expansion-request status becomes customer-safe.",
            false,
            safeForExpansionRequest,
            false,
            true,
            acceptanceReceipt.AppOwnedAcceptanceState,
            acceptanceReceipt.AcceptanceReady,
            expansionRequestReady && acceptanceReceipt.RepeatServiceAccepted,
            expansionRequestReady && acceptanceReceipt.RenewalAccepted,
            expansionRequestReady && acceptanceReceipt.ReferralAccepted,
            expansionRequestReady,
            acceptanceReceipt.CompatibilityGateRequired,
            acceptanceReceipt.EpochTimingProviderOnly,
            acceptanceReceipt.WorkshopCalendarOwnership,
            acceptanceReceipt.MonitorWorkflowExposed,
            acceptanceReceipt.PaymentLiveEnabled,
            acceptanceReceipt.ProviderGoLiveRequested,
            acceptanceReceipt.LiveProviderEnabled,
            acceptanceReceipt.AiForwardCopy,
            "ai-neutral",
            acceptanceReceipt.Under19GuardRequired,
            acceptanceReceipt.NativeExecutionReady,
            acceptanceReceipt.RequiresEpochTimingRequest);
    }
}
