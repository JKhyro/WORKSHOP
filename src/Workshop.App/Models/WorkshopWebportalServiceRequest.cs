namespace Workshop.App;

public sealed record WorkshopWebportalServiceRequest(
    string RequestId,
    string SubmittedAtUtc,
    string SourceSurface,
    string RequesterLabel,
    string ServiceLane,
    string AgeBand,
    string MaterialStatus,
    string Summary,
    bool NeedsEpochTiming,
    string Status,
    string CustomerSafeStatus,
    bool CustomerSafe,
    bool EpochTimingProviderOnly,
    bool MonitorWorkflowExposed,
    bool AppOwnedInboxState)
{
    public static WorkshopWebportalServiceRequest FromLocalWebportalIntent(
        string requestId,
        string requesterLabel,
        string serviceLane,
        string ageBand,
        string materialStatus,
        string summary,
        bool needsEpochTiming,
        DateTimeOffset submittedAtUtc)
    {
        return new WorkshopWebportalServiceRequest(
            requestId,
            submittedAtUtc.ToString("O"),
            "WORKSHOP.Webportal.LocalAdapter",
            requesterLabel,
            serviceLane,
            ageBand,
            materialStatus,
            summary,
            needsEpochTiming,
            "queued-for-fit-review",
            "Your service request is in the WORKSHOP review inbox. Scheduling is requested from EPOCH only when timing is needed.",
            true,
            true,
            false,
            true);
    }
}
