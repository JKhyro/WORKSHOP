namespace Workshop.App;

public sealed record WorkshopServiceMaterialReuseRecord(
    string ReuseId,
    string CreatedAtUtc,
    string SourceSurface,
    string MaterializationReceiptId,
    string MaterializationId,
    string ServiceRequestId,
    string RevenueOutcomeId,
    string DeliveryResultReceiptId,
    string ServiceLane,
    string PackageId,
    string PackageSupportStatus,
    string MaterialAssetId,
    string ReuseKind,
    string Status,
    string ReuseSummary,
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
    bool NativeExecutionReady)
{
    public static WorkshopServiceMaterialReuseRecord FromMaterializationReceipt(
        WorkshopAraMaterializationReceipt materializationReceipt,
        WorkshopWebportalServiceRequest request,
        DateTimeOffset createdAtUtc)
    {
        string reuseId = $"workshop-service-material-reuse-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..72];
        string packageId = PackageIdForLane(request.ServiceLane);
        string materialAssetId = MaterialAssetIdForLane(request.ServiceLane);
        bool safeForReuse =
            materializationReceipt.CustomerSafe &&
            materializationReceipt.CustomerVisibleReceiptReady &&
            materializationReceipt.WebportalExportReady &&
            materializationReceipt.OperatorReviewed &&
            materializationReceipt.AraReviewComplete &&
            materializationReceipt.HumanReviewComplete &&
            materializationReceipt.ReusableMethodReady &&
            materializationReceipt.MaterialAssetReady &&
            materializationReceipt.NativeExecutionReady &&
            materializationReceipt.EpochTimingProviderOnly &&
            request.CustomerSafe &&
            request.AppOwnedInboxState &&
            request.EpochTimingProviderOnly &&
            !materializationReceipt.WorkshopCalendarOwnership &&
            !materializationReceipt.MonitorWorkflowExposed &&
            !materializationReceipt.PaymentLiveEnabled &&
            !request.MonitorWorkflowExposed;

        return new WorkshopServiceMaterialReuseRecord(
            reuseId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.ServiceMaterialReuse",
            materializationReceipt.ReceiptId,
            materializationReceipt.MaterializationId,
            request.RequestId,
            materializationReceipt.RevenueOutcomeId,
            materializationReceipt.DeliveryResultReceiptId,
            request.ServiceLane,
            packageId,
            "reviewed-service-material-support-ready",
            materialAssetId,
            "service-material-reuse",
            safeForReuse ? "service-material-reuse-ready" : "service-material-reuse-blocked",
            $"Reviewed method output is linked to {packageId} and {materialAssetId} for reusable service delivery.",
            safeForReuse
                ? "WORKSHOP has prepared reusable service material support for this service path. Customer-facing delivery remains receipt-gated."
                : "WORKSHOP reusable service material support is waiting for review, material, or boundary gates.",
            safeForReuse
                ? "Attach the reusable material support to the package delivery checklist before the next customer-facing update."
                : "Resolve review, package, or material blockers before reuse support becomes customer-safe.",
            false,
            safeForReuse,
            false,
            materializationReceipt.EpochTimingProviderOnly && request.EpochTimingProviderOnly,
            false,
            materializationReceipt.MonitorWorkflowExposed || request.MonitorWorkflowExposed,
            materializationReceipt.PaymentLiveEnabled,
            materializationReceipt.OperatorReviewed,
            materializationReceipt.AraReviewComplete,
            materializationReceipt.HumanReviewComplete,
            materializationReceipt.ReusableMethodReady,
            materializationReceipt.MaterialAssetReady,
            safeForReuse,
            safeForReuse,
            materializationReceipt.NativeExecutionReady);
    }

    private static string PackageIdForLane(string serviceLane)
    {
        string normalized = serviceLane.ToLowerInvariant();
        if (normalized.Contains("writing", StringComparison.Ordinal) ||
            normalized.Contains("submission", StringComparison.Ordinal))
        {
            return "pkg-submission-4";
        }

        if (normalized.Contains("cohort", StringComparison.Ordinal) ||
            normalized.Contains("subscription", StringComparison.Ordinal))
        {
            return "pkg-cohort-subscription";
        }

        if (normalized.Contains("support", StringComparison.Ordinal))
        {
            return "pkg-support-block";
        }

        if (normalized.Contains("crm", StringComparison.Ordinal) ||
            normalized.Contains("database", StringComparison.Ordinal) ||
            normalized.Contains("admin", StringComparison.Ordinal) ||
            normalized.Contains("systems", StringComparison.Ordinal))
        {
            return "pkg-systems-block";
        }

        if (normalized.Contains("workflow", StringComparison.Ordinal) ||
            normalized.Contains("build", StringComparison.Ordinal) ||
            normalized.Contains("web", StringComparison.Ordinal))
        {
            return "pkg-workflow-build";
        }

        return normalized switch
        {
            "premium-english-test-prep" => "pkg-premium-program",
            "operations-consulting" => "pkg-consulting",
            _ => "pkg-consulting"
        };
    }

    private static string MaterialAssetIdForLane(string serviceLane)
    {
        string normalized = serviceLane.ToLowerInvariant();
        if (normalized.Contains("crm", StringComparison.Ordinal) ||
            normalized.Contains("database", StringComparison.Ordinal) ||
            normalized.Contains("admin", StringComparison.Ordinal) ||
            normalized.Contains("systems", StringComparison.Ordinal) ||
            normalized.Contains("workflow", StringComparison.Ordinal) ||
            normalized.Contains("build", StringComparison.Ordinal) ||
            normalized.Contains("web", StringComparison.Ordinal) ||
            normalized.Contains("support", StringComparison.Ordinal) ||
            normalized.Contains("consulting", StringComparison.Ordinal))
        {
            return "material-asset-crm-cleanup-checklist-001";
        }

        return normalized switch
        {
            _ => "material-asset-eiken-writing-rubric-001"
        };
    }
}
