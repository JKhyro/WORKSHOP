namespace Workshop.App;

public sealed record WorkshopPackageDeliveryFollowUpRenewalRecord(
    string FollowUpId,
    string CreatedAtUtc,
    string SourceSurface,
    string ExecutionReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string LoopKind,
    string Status,
    string RenewalPath,
    string CustomerSafeStatus,
    string OperatorNextAction,
    bool CustomerVisible,
    bool CustomerSafeForReceipt,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool OperatorReviewed,
    bool AraReviewComplete,
    bool HumanReviewComplete,
    bool PackageSupportReady,
    bool LowLaborReuseReady,
    bool ChecklistReady,
    bool AutomationReady,
    bool ExecutionReady,
    bool FollowUpReady,
    bool RenewalReady,
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryFollowUpRenewalRecord FromExecutionReceipt(
        WorkshopPackageDeliveryExecutionReceipt executionReceipt,
        DateTimeOffset createdAtUtc)
    {
        string followUpId = $"workshop-package-delivery-followup-renewal-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForFollowUp =
            executionReceipt.CustomerSafe &&
            executionReceipt.CustomerVisibleReceiptReady &&
            executionReceipt.WebportalExportReady &&
            executionReceipt.OperatorReviewed &&
            executionReceipt.AraReviewComplete &&
            executionReceipt.HumanReviewComplete &&
            executionReceipt.PackageSupportReady &&
            executionReceipt.LowLaborReuseReady &&
            executionReceipt.ChecklistReady &&
            executionReceipt.AutomationReady &&
            executionReceipt.ExecutionReady &&
            executionReceipt.NativeExecutionReady &&
            executionReceipt.EpochTimingProviderOnly &&
            !executionReceipt.RequiresEpochTimingRequest &&
            !executionReceipt.WorkshopCalendarOwnership &&
            !executionReceipt.MonitorWorkflowExposed &&
            !executionReceipt.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryFollowUpRenewalRecord(
            followUpId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryFollowUpRenewal",
            executionReceipt.ReceiptId,
            executionReceipt.ServiceRequestId,
            executionReceipt.ServiceLane,
            executionReceipt.PackageId,
            "package-delivery-followup-renewal",
            safeForFollowUp ? "package-delivery-followup-renewal-ready" : "package-delivery-followup-renewal-blocked",
            $"Follow up on {executionReceipt.PackageId} delivery and prepare a renewal or next-step service review only after operator approval.",
            safeForFollowUp
                ? "WORKSHOP has prepared customer follow-up and renewal review for this completed delivery path. EPOCH remains timing-provider-only."
                : "WORKSHOP package delivery follow-up and renewal review is waiting for execution, review, or boundary gates.",
            safeForFollowUp
                ? "Use this follow-up/renewal record to prepare the next customer-safe contact, then export only the customer-safe follow-up renewal receipt."
                : "Resolve execution, review, or boundary blockers before follow-up and renewal status becomes customer-safe.",
            false,
            safeForFollowUp,
            false,
            executionReceipt.EpochTimingProviderOnly,
            false,
            executionReceipt.MonitorWorkflowExposed,
            executionReceipt.PaymentLiveEnabled,
            executionReceipt.OperatorReviewed,
            executionReceipt.AraReviewComplete,
            executionReceipt.HumanReviewComplete,
            executionReceipt.PackageSupportReady,
            executionReceipt.LowLaborReuseReady,
            executionReceipt.ChecklistReady,
            executionReceipt.AutomationReady,
            executionReceipt.ExecutionReady,
            safeForFollowUp,
            safeForFollowUp,
            false,
            executionReceipt.NativeExecutionReady);
    }
}
