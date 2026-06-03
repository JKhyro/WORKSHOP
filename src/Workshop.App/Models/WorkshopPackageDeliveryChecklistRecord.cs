namespace Workshop.App;

public sealed record WorkshopPackageDeliveryChecklistRecord(
    string ChecklistId,
    string CreatedAtUtc,
    string SourceSurface,
    string ReuseId,
    string ServiceRequestId,
    string ServiceLane,
    string PackageId,
    string MaterialAssetId,
    string ChecklistKind,
    string Status,
    string ChecklistSummary,
    string ChecklistItemsSummary,
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
    bool ReusableMethodReady,
    bool MaterialAssetReady,
    bool PackageSupportReady,
    bool LowLaborReuseReady,
    bool ChecklistReady,
    bool NativeExecutionReady)
{
    public static WorkshopPackageDeliveryChecklistRecord FromServiceMaterialReuse(
        WorkshopServiceMaterialReuseRecord reuseRecord,
        DateTimeOffset createdAtUtc)
    {
        string checklistId = $"workshop-package-delivery-checklist-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..78];
        bool safeForChecklist =
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
            !reuseRecord.CustomerVisible &&
            !reuseRecord.WebportalExportReady &&
            !reuseRecord.WorkshopCalendarOwnership &&
            !reuseRecord.MonitorWorkflowExposed &&
            !reuseRecord.PaymentLiveEnabled;

        string itemsSummary = ChecklistItemsForPackage(reuseRecord.PackageId, reuseRecord.ServiceLane);

        return new WorkshopPackageDeliveryChecklistRecord(
            checklistId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.PackageDeliveryChecklist",
            reuseRecord.ReuseId,
            reuseRecord.ServiceRequestId,
            reuseRecord.ServiceLane,
            reuseRecord.PackageId,
            reuseRecord.MaterialAssetId,
            "package-delivery-checklist",
            safeForChecklist ? "package-delivery-checklist-ready" : "package-delivery-checklist-blocked",
            $"Reusable material support is converted into a delivery checklist for {reuseRecord.PackageId}.",
            itemsSummary,
            safeForChecklist
                ? "WORKSHOP has prepared a repeatable package delivery checklist for this service path. Customer-facing delivery remains receipt-gated."
                : "WORKSHOP package delivery checklist is waiting for reusable material or review gates.",
            safeForChecklist
                ? "Use this package delivery checklist for the next repeat delivery, then export only the customer-safe checklist receipt."
                : "Resolve reusable material, review, or boundary blockers before checklist status becomes customer-safe.",
            false,
            safeForChecklist,
            false,
            reuseRecord.EpochTimingProviderOnly,
            false,
            reuseRecord.MonitorWorkflowExposed,
            reuseRecord.PaymentLiveEnabled,
            reuseRecord.OperatorReviewed,
            reuseRecord.AraReviewComplete,
            reuseRecord.HumanReviewComplete,
            reuseRecord.ReusableMethodReady,
            reuseRecord.MaterialAssetReady,
            reuseRecord.PackageSupportReady,
            reuseRecord.LowLaborReuseReady,
            safeForChecklist,
            reuseRecord.NativeExecutionReady);
    }

    private static string ChecklistItemsForPackage(string packageId, string serviceLane)
    {
        string normalized = $"{packageId} {serviceLane}".ToLowerInvariant();
        if (normalized.Contains("submission", StringComparison.Ordinal) ||
            normalized.Contains("writing", StringComparison.Ordinal))
        {
            return "intake fit confirmed; submitted writing saved; rubric attached; review pass completed; customer-safe summary prepared; next submission or EPOCH timing need checked";
        }

        if (normalized.Contains("cohort", StringComparison.Ordinal) ||
            normalized.Contains("subscription", StringComparison.Ordinal))
        {
            return "cohort fit confirmed; reusable lesson/material pack attached; progress checkpoint prepared; renewal path checked; EPOCH timing requested only if a session or deadline is needed";
        }

        if (normalized.Contains("systems", StringComparison.Ordinal) ||
            normalized.Contains("crm", StringComparison.Ordinal) ||
            normalized.Contains("database", StringComparison.Ordinal) ||
            normalized.Contains("admin", StringComparison.Ordinal))
        {
            return "scope confirmed; data/source access checked; cleanup checklist attached; delivery proof prepared; follow-up system status prepared; EPOCH timing requested only if a meeting or deadline is needed";
        }

        return "scope confirmed; reusable material attached; delivery proof prepared; customer-safe status prepared; follow-up or renewal path checked; EPOCH timing requested only if needed";
    }
}
