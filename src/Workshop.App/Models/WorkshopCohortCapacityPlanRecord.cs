namespace Workshop.App;

public sealed record WorkshopCohortCapacityPlanRecord(
    string CapacityPlanId,
    string CreatedAtUtc,
    string SourceSurface,
    string CohortPlanId,
    string ServiceRequestId,
    string PackageId,
    string Status,
    int EnrolledCount,
    int TargetCapacity,
    int MinimumViableCount,
    bool ReusableMaterialsReady,
    bool EpochTimingDependency,
    string CapacityStatus,
    bool CohortCapacityPlanReady,
    bool AppOwnedCohortCapacityPlanState,
    bool CustomerVisible,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool ProviderGoLiveRequested,
    bool LiveProviderEnabled,
    bool AiForwardCopy,
    string JapanCopyMode,
    string CustomerSafeStatus,
    string OperatorNextAction)
{
    public static IReadOnlyList<WorkshopCohortCapacityPlanRecord> CreateDefaultRecords(
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                "cohort-capacity-adult-test-prep",
                "cohort-adult-test-prep",
                "req-cohort-001",
                "pkg-cohort-subscription",
                "timing-waitlisted",
                3,
                6,
                3,
                true,
                true,
                "waitlisted",
                "Cohort capacity is ready; timing remains waitlisted with EPOCH.",
                "Keep compatible demand clustered while EPOCH returns timing-only capacity status.",
                createdAtUtc),
            Create(
                "cohort-capacity-writing-materials",
                "materials-subscription-writing",
                "req-cohort-001",
                "pkg-cohort-subscription",
                "available",
                0,
                20,
                1,
                true,
                false,
                "materials-access-open",
                "Materials access can stay open without a live class commitment.",
                "Sell materials access without adding live calendar load.",
                createdAtUtc)
        };
    }

    private static WorkshopCohortCapacityPlanRecord Create(
        string capacityPlanId,
        string cohortPlanId,
        string serviceRequestId,
        string packageId,
        string status,
        int enrolledCount,
        int targetCapacity,
        int minimumViableCount,
        bool reusableMaterialsReady,
        bool epochTimingDependency,
        string capacityStatus,
        string customerSafeStatus,
        string operatorNextAction,
        DateTimeOffset createdAtUtc)
    {
        bool ready =
            !string.IsNullOrWhiteSpace(capacityPlanId) &&
            !string.IsNullOrWhiteSpace(cohortPlanId) &&
            !string.IsNullOrWhiteSpace(serviceRequestId) &&
            !string.IsNullOrWhiteSpace(packageId) &&
            !string.IsNullOrWhiteSpace(status) &&
            enrolledCount >= 0 &&
            targetCapacity > 0 &&
            minimumViableCount > 0 &&
            targetCapacity >= minimumViableCount &&
            enrolledCount <= targetCapacity &&
            reusableMaterialsReady &&
            !string.IsNullOrWhiteSpace(capacityStatus) &&
            !string.IsNullOrWhiteSpace(customerSafeStatus) &&
            !string.IsNullOrWhiteSpace(operatorNextAction);

        return new WorkshopCohortCapacityPlanRecord(
            capacityPlanId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.CohortCapacityPlanManager",
            cohortPlanId,
            serviceRequestId,
            packageId,
            status,
            enrolledCount,
            targetCapacity,
            minimumViableCount,
            reusableMaterialsReady,
            epochTimingDependency,
            capacityStatus,
            ready,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            "ai-neutral",
            customerSafeStatus,
            operatorNextAction);
    }
}
