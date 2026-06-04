namespace Workshop.App;

public sealed record WorkshopOfferLaunchReadinessReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string Status,
    string OfferLabel,
    string PriceLabel,
    string CustomerSafeMessage,
    string NextAction,
    string JapanCopyMode,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool AiForwardCopy,
    bool Under19GuardRequired,
    bool NativeExecutionReady)
{
    public static WorkshopOfferLaunchReadinessReceipt FromReadiness(
        WorkshopOfferLaunchReadinessRecord readiness,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-offer-launch-readiness-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..72];
        bool customerSafe =
            readiness.CustomerSafeForReceipt &&
            !readiness.CustomerVisible &&
            !readiness.WebportalExportReady &&
            readiness.EpochTimingProviderOnly &&
            !readiness.WorkshopCalendarOwnership &&
            !readiness.MonitorWorkflowExposed &&
            !readiness.PaymentLiveEnabled &&
            readiness.LowLaborViable &&
            readiness.RoiTestReady &&
            readiness.AraReviewRequired &&
            readiness.OwnerTimeBudgetClear &&
            readiness.NativeCommandReady &&
            readiness.NativeExecutionReady &&
            readiness.LaunchPriorityScore >= 80 &&
            readiness.JapanCopyMode == "ai-neutral" &&
            !readiness.AiForwardCopy &&
            readiness.Under19GuardRequired;

        return new WorkshopOfferLaunchReadinessReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OfferLaunchReadinessReceipt",
            readiness.ServiceRequestId,
            readiness.ServiceLane,
            readiness.PackageId,
            "offer-launch-readiness",
            customerSafe ? "customer-safe-offer-launch-ready" : "customer-safe-offer-launch-blocked",
            "Adult Async Submission Review",
            "JPY 16,000 / 4 submissions",
            customerSafe
                ? "A structured adult submission review offer is ready for customer intake. EPOCH is used only for timing requests."
                : "This offer is waiting for launch readiness review before customer intake.",
            "Request the submission review path. Under-19 requests require compatibility review, and EPOCH timing is requested only for appointments, deadlines, or service windows.",
            "ai-neutral",
            customerSafe,
            customerSafe,
            customerSafe,
            readiness.EpochTimingProviderOnly,
            readiness.WorkshopCalendarOwnership,
            readiness.MonitorWorkflowExposed,
            readiness.PaymentLiveEnabled,
            readiness.AiForwardCopy,
            readiness.Under19GuardRequired,
            readiness.NativeExecutionReady);
    }
}
