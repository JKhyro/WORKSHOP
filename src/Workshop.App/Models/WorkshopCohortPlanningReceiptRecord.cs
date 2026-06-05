namespace Workshop.App;

public sealed record WorkshopCohortPlanningReceiptRecord(
    string PlanningReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string Kind,
    string Status,
    string CohortPlanId,
    string CapacityPlanId,
    string SubscriptionPlanId,
    string ServiceRequestId,
    string Summary,
    bool CohortPlanningReceiptReady,
    bool AppOwnedCohortPlanningReceiptState,
    bool CustomerVisible,
    bool CustomerSafe,
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
    public static IReadOnlyList<WorkshopCohortPlanningReceiptRecord> CreateDefaultRecords(
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                "receipt-cohort-planning-001",
                "cohort-subscription-planning",
                "ready",
                "cohort-adult-test-prep",
                "cohort-capacity-adult-test-prep",
                "subscription-cohort-lab",
                "req-cohort-001",
                "WORKSHOP cohort capacity and subscription planning are tracked without taking calendar ownership.",
                "Cohort and subscription planning are ready; EPOCH remains responsible for timing.",
                "Use this customer-safe planning receipt as evidence while EPOCH owns timing.",
                createdAtUtc)
        };
    }

    private static WorkshopCohortPlanningReceiptRecord Create(
        string planningReceiptId,
        string kind,
        string status,
        string cohortPlanId,
        string capacityPlanId,
        string subscriptionPlanId,
        string serviceRequestId,
        string summary,
        string customerSafeStatus,
        string operatorNextAction,
        DateTimeOffset createdAtUtc)
    {
        bool ready =
            !string.IsNullOrWhiteSpace(planningReceiptId) &&
            kind == "cohort-subscription-planning" &&
            !string.IsNullOrWhiteSpace(status) &&
            !string.IsNullOrWhiteSpace(cohortPlanId) &&
            !string.IsNullOrWhiteSpace(capacityPlanId) &&
            !string.IsNullOrWhiteSpace(subscriptionPlanId) &&
            !string.IsNullOrWhiteSpace(serviceRequestId) &&
            !string.IsNullOrWhiteSpace(summary) &&
            !string.IsNullOrWhiteSpace(customerSafeStatus) &&
            !string.IsNullOrWhiteSpace(operatorNextAction);

        return new WorkshopCohortPlanningReceiptRecord(
            planningReceiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.CohortPlanningReceiptLedger",
            kind,
            status,
            cohortPlanId,
            capacityPlanId,
            subscriptionPlanId,
            serviceRequestId,
            summary,
            ready,
            true,
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
