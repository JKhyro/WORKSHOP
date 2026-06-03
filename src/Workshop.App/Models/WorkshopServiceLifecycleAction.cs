namespace Workshop.App;

public sealed record WorkshopServiceLifecycleAction(
    string ActionId,
    string SubmittedAtUtc,
    string SourceSurface,
    string RequestId,
    string ActionKind,
    string RequestedServiceLane,
    string CustomerSafeReason,
    string Status,
    string CustomerSafeStatus,
    bool CustomerSafe,
    bool EpochTimingProviderOnly,
    bool MonitorWorkflowExposed,
    bool AppOwnedLifecycleState)
{
    public static WorkshopServiceLifecycleAction FromLocalWebportalIntent(
        string actionId,
        string requestId,
        string actionKind,
        string requestedServiceLane,
        string customerSafeReason,
        DateTimeOffset submittedAtUtc)
    {
        return new WorkshopServiceLifecycleAction(
            actionId,
            submittedAtUtc.ToString("O"),
            "WORKSHOP.Webportal.ServiceLifecycleAdapter",
            requestId,
            actionKind,
            requestedServiceLane,
            customerSafeReason,
            $"{actionKind}-queued-for-app-review",
            "Service lifecycle action is queued for WORKSHOP App review. EPOCH remains timing-provider-only.",
            true,
            true,
            false,
            true);
    }
}
