namespace Workshop.App;

public sealed record WorkshopSubscriptionPlanRecord(
    string SubscriptionPlanId,
    string CreatedAtUtc,
    string SourceSurface,
    string CohortPlanId,
    string ServiceRequestId,
    string PackageId,
    string Status,
    int MonthlyPriceJpy,
    int ActiveSubscribers,
    int TargetSubscribers,
    int MaterialUnitsReady,
    bool LiveTimeRequired,
    string CadenceLabel,
    bool SubscriptionPlanReady,
    bool AppOwnedSubscriptionPlanState,
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
    public static IReadOnlyList<WorkshopSubscriptionPlanRecord> CreateDefaultRecords(
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                "subscription-writing-strategy",
                "materials-subscription-writing",
                "req-cohort-001",
                "pkg-cohort-subscription",
                "available",
                20000,
                0,
                20,
                12,
                false,
                "monthly materials and strategy access",
                "Study materials and strategy access are available without a live class commitment.",
                "Keep subscription access available as lower-labor delivery.",
                createdAtUtc),
            Create(
                "subscription-cohort-lab",
                "cohort-adult-test-prep",
                "req-cohort-001",
                "pkg-cohort-subscription",
                "queued",
                20000,
                3,
                18,
                8,
                false,
                "monthly cohort lab plus reusable review material",
                "Cohort materials access is queued while timing is resolved.",
                "Open subscription access while cohort timing is resolved through EPOCH.",
                createdAtUtc)
        };
    }

    private static WorkshopSubscriptionPlanRecord Create(
        string subscriptionPlanId,
        string cohortPlanId,
        string serviceRequestId,
        string packageId,
        string status,
        int monthlyPriceJpy,
        int activeSubscribers,
        int targetSubscribers,
        int materialUnitsReady,
        bool liveTimeRequired,
        string cadenceLabel,
        string customerSafeStatus,
        string operatorNextAction,
        DateTimeOffset createdAtUtc)
    {
        bool ready =
            !string.IsNullOrWhiteSpace(subscriptionPlanId) &&
            !string.IsNullOrWhiteSpace(cohortPlanId) &&
            !string.IsNullOrWhiteSpace(serviceRequestId) &&
            !string.IsNullOrWhiteSpace(packageId) &&
            !string.IsNullOrWhiteSpace(status) &&
            monthlyPriceJpy > 0 &&
            activeSubscribers >= 0 &&
            targetSubscribers > 0 &&
            activeSubscribers <= targetSubscribers &&
            materialUnitsReady > 0 &&
            !liveTimeRequired &&
            !string.IsNullOrWhiteSpace(cadenceLabel) &&
            !string.IsNullOrWhiteSpace(customerSafeStatus) &&
            !string.IsNullOrWhiteSpace(operatorNextAction);

        return new WorkshopSubscriptionPlanRecord(
            subscriptionPlanId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.SubscriptionPlanManager",
            cohortPlanId,
            serviceRequestId,
            packageId,
            status,
            monthlyPriceJpy,
            activeSubscribers,
            targetSubscribers,
            materialUnitsReady,
            liveTimeRequired,
            cadenceLabel,
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
