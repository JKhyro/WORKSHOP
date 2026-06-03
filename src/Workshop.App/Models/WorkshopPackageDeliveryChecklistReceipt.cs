namespace Workshop.App;

public sealed record WorkshopPackageDeliveryChecklistReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string ChecklistId,
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
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryChecklistReceipt FromChecklist(
        WorkshopPackageDeliveryChecklistRecord checklist,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-package-delivery-checklist-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            checklist.CustomerSafeForReceipt &&
            checklist.OperatorReviewed &&
            checklist.AraReviewComplete &&
            checklist.HumanReviewComplete &&
            checklist.PackageSupportReady &&
            checklist.LowLaborReuseReady &&
            checklist.ChecklistReady &&
            checklist.NativeExecutionReady &&
            checklist.EpochTimingProviderOnly &&
            !checklist.CustomerVisible &&
            !checklist.WebportalExportReady &&
            !checklist.WorkshopCalendarOwnership &&
            !checklist.MonitorWorkflowExposed &&
            !checklist.PaymentLiveEnabled;

        return new WorkshopPackageDeliveryChecklistReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryChecklistReceipt",
            checklist.ChecklistId,
            checklist.ServiceRequestId,
            checklist.ServiceLane,
            checklist.PackageId,
            "package-delivery-checklist",
            customerSafe ? "customer-safe-package-delivery-checklist-ready" : "customer-safe-package-delivery-checklist-blocked",
            "WORKSHOP prepared a repeatable package delivery checklist from reviewed reusable material without exposing internal packet, queue, decision, materialization, reuse, checklist-control, or package-control records.",
            customerSafe
                ? "Package delivery preparation is ready for this service path."
                : "Package delivery preparation is waiting for a quality gate.",
            "Review the customer-safe package delivery status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            checklist.EpochTimingProviderOnly,
            checklist.WorkshopCalendarOwnership,
            checklist.MonitorWorkflowExposed,
            checklist.PaymentLiveEnabled,
            checklist.OperatorReviewed,
            checklist.AraReviewComplete,
            checklist.HumanReviewComplete,
            checklist.PackageSupportReady,
            checklist.LowLaborReuseReady,
            checklist.ChecklistReady,
            checklist.NativeExecutionReady);
    }
}
