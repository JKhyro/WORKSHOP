namespace Workshop.App;

public sealed record WorkshopCohortPlanRecord(
    string CohortPlanId,
    string CreatedAtUtc,
    string SourceSurface,
    string PackageId,
    string Lane,
    string Status,
    int EnrolledCount,
    int TargetCapacity,
    int MinimumViableCount,
    bool ReusableMaterialsReady,
    bool EpochWindowRequired,
    string RecurringStatus,
    string NextServiceWindow,
    int ExceptionCount,
    string LastRecurringReceiptId,
    bool CohortPlanReady,
    bool AppOwnedCohortPlanState,
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
    public static IReadOnlyList<WorkshopCohortPlanRecord> CreateDefaultRecords(
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                "cohort-adult-test-prep",
                "pkg-cohort-subscription",
                "cohort-subscription",
                "queued",
                3,
                6,
                3,
                true,
                true,
                "exception-action-required",
                "2026-06-17 19:00 JST",
                1,
                "receipt-recurring-series-001",
                "Cohort enrollment is open; one recurring service window needs a new timing action.",
                "Resolve the recurring exception before expanding the cohort sequence.",
                createdAtUtc),
            Create(
                "materials-subscription-writing",
                "pkg-cohort-subscription",
                "cohort-subscription",
                "available",
                0,
                20,
                1,
                true,
                false,
                "not-required",
                "no live timing required",
                0,
                string.Empty,
                "Study materials and strategy access are available without a live class commitment.",
                "Sell materials access without adding live calendar load.",
                createdAtUtc)
        };
    }

    private static WorkshopCohortPlanRecord Create(
        string cohortPlanId,
        string packageId,
        string lane,
        string status,
        int enrolledCount,
        int targetCapacity,
        int minimumViableCount,
        bool reusableMaterialsReady,
        bool epochWindowRequired,
        string recurringStatus,
        string nextServiceWindow,
        int exceptionCount,
        string lastRecurringReceiptId,
        string customerSafeStatus,
        string operatorNextAction,
        DateTimeOffset createdAtUtc)
    {
        bool ready =
            !string.IsNullOrWhiteSpace(cohortPlanId) &&
            !string.IsNullOrWhiteSpace(packageId) &&
            !string.IsNullOrWhiteSpace(lane) &&
            !string.IsNullOrWhiteSpace(status) &&
            enrolledCount >= 0 &&
            targetCapacity > 0 &&
            minimumViableCount > 0 &&
            targetCapacity >= minimumViableCount &&
            reusableMaterialsReady &&
            !string.IsNullOrWhiteSpace(recurringStatus) &&
            !string.IsNullOrWhiteSpace(nextServiceWindow) &&
            exceptionCount >= 0 &&
            !string.IsNullOrWhiteSpace(customerSafeStatus) &&
            !string.IsNullOrWhiteSpace(operatorNextAction);

        return new WorkshopCohortPlanRecord(
            cohortPlanId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.CohortPlanManager",
            packageId,
            lane,
            status,
            enrolledCount,
            targetCapacity,
            minimumViableCount,
            reusableMaterialsReady,
            epochWindowRequired,
            recurringStatus,
            nextServiceWindow,
            exceptionCount,
            lastRecurringReceiptId,
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
