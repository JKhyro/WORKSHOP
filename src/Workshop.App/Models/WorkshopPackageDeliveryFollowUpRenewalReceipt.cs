namespace Workshop.App;

public sealed record WorkshopPackageDeliveryFollowUpRenewalReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string FollowUpId,
    string ExecutionReceiptId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string Kind,
    string Status,
    string Summary,
    string CustomerSafeMessage,
    string NextAction,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
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
    public static WorkshopPackageDeliveryFollowUpRenewalReceipt FromFollowUp(
        WorkshopPackageDeliveryFollowUpRenewalRecord followUp,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-package-delivery-followup-renewal-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            followUp.CustomerSafeForReceipt &&
            followUp.OperatorReviewed &&
            followUp.AraReviewComplete &&
            followUp.HumanReviewComplete &&
            followUp.PackageSupportReady &&
            followUp.LowLaborReuseReady &&
            followUp.ChecklistReady &&
            followUp.AutomationReady &&
            followUp.ExecutionReady &&
            followUp.FollowUpReady &&
            followUp.RenewalReady &&
            followUp.NativeExecutionReady &&
            followUp.EpochTimingProviderOnly &&
            !followUp.RequiresEpochTimingRequest &&
            !followUp.CustomerVisible &&
            !followUp.WebportalExportReady &&
            !followUp.WorkshopCalendarOwnership &&
            !followUp.MonitorWorkflowExposed &&
            !followUp.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryFollowUpRenewalReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryFollowUpRenewalReceipt",
            followUp.FollowUpId,
            followUp.ExecutionReceiptId,
            followUp.ServiceRequestId,
            followUp.ServiceLane,
            followUp.PackageId,
            "package-delivery-followup-renewal",
            customerSafe ? "customer-safe-package-delivery-followup-renewal-ready" : "customer-safe-package-delivery-followup-renewal-blocked",
            "WORKSHOP prepared a follow-up and renewal loop from a customer-safe package delivery execution receipt without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, or package-control records.",
            customerSafe
                ? "Follow-up and renewal review is ready for this service path."
                : "Follow-up and renewal review is waiting for a quality gate.",
            "Review the customer-safe follow-up/renewal status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            followUp.EpochTimingProviderOnly,
            followUp.WorkshopCalendarOwnership,
            followUp.MonitorWorkflowExposed,
            followUp.PaymentLiveEnabled,
            followUp.OperatorReviewed,
            followUp.AraReviewComplete,
            followUp.HumanReviewComplete,
            followUp.PackageSupportReady,
            followUp.LowLaborReuseReady,
            followUp.ChecklistReady,
            followUp.AutomationReady,
            followUp.ExecutionReady,
            followUp.FollowUpReady,
            followUp.RenewalReady,
            followUp.RequiresEpochTimingRequest,
            followUp.NativeExecutionReady);
    }
}
