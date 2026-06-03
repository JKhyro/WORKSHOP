namespace Workshop.App;

public sealed record WorkshopServiceMaterialReuseReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string ReuseId,
    string ServiceRequestId,
    string PackageId,
    string MaterialAssetId,
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
    bool ReusableMethodReady,
    bool MaterialAssetReady,
    bool PackageSupportReady,
    bool LowLaborReuseReady,
    bool NativeExecutionReady)
{
    public static WorkshopServiceMaterialReuseReceipt FromReuseRecord(
        WorkshopServiceMaterialReuseRecord reuseRecord,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-service-material-reuse-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool customerSafe =
            reuseRecord.CustomerSafeForReceipt &&
            reuseRecord.OperatorReviewed &&
            reuseRecord.AraReviewComplete &&
            reuseRecord.HumanReviewComplete &&
            reuseRecord.ReusableMethodReady &&
            reuseRecord.MaterialAssetReady &&
            reuseRecord.PackageSupportReady &&
            reuseRecord.LowLaborReuseReady &&
            reuseRecord.NativeExecutionReady &&
            reuseRecord.EpochTimingProviderOnly &&
            !reuseRecord.WorkshopCalendarOwnership &&
            !reuseRecord.MonitorWorkflowExposed &&
            !reuseRecord.PaymentLiveEnabled;

        return new WorkshopServiceMaterialReuseReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.ServiceMaterialReuseReceipt",
            reuseRecord.ReuseId,
            reuseRecord.ServiceRequestId,
            reuseRecord.PackageId,
            reuseRecord.MaterialAssetId,
            "service-material-reuse",
            customerSafe ? "customer-safe-service-material-reuse-ready" : "customer-safe-service-material-reuse-blocked",
            "WORKSHOP converted reviewed service material into reusable package support without exposing internal packet, queue, decision, materialization, or package-control records.",
            customerSafe
                ? "Reusable service material support is ready for this service path."
                : "Reusable service material support is waiting for a quality gate.",
            "Review the customer-safe service material plan in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            reuseRecord.EpochTimingProviderOnly,
            reuseRecord.WorkshopCalendarOwnership,
            reuseRecord.MonitorWorkflowExposed,
            reuseRecord.PaymentLiveEnabled,
            reuseRecord.OperatorReviewed,
            reuseRecord.AraReviewComplete,
            reuseRecord.HumanReviewComplete,
            reuseRecord.ReusableMethodReady,
            reuseRecord.MaterialAssetReady,
            reuseRecord.PackageSupportReady,
            reuseRecord.LowLaborReuseReady,
            reuseRecord.NativeExecutionReady);
    }
}
