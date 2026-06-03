namespace Workshop.App;

public sealed record WorkshopEpochRevisedCalendarTimingPayload(
    string PayloadId,
    string ReturnedAtUtc,
    string SourceSurface,
    string SourceHandoffId,
    string RequestId,
    string CalendarSystemLabel,
    string TimingDisplayLabel,
    string ConstraintSummary,
    string ConversionGateReason,
    string EpochProjectionReceiptId,
    string CustomerSafeStatus,
    bool CustomerSafe,
    bool ProviderGoLiveRequested,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed)
{
    public static WorkshopEpochRevisedCalendarTimingPayload FromEpochTimingProjection(
        string payloadId,
        DateTimeOffset returnedAtUtc)
    {
        return new WorkshopEpochRevisedCalendarTimingPayload(
            payloadId,
            returnedAtUtc.ToString("O"),
            "EPOCH.App.RevisedTimingProjectionExport",
            "epoch-handoff-002",
            "req-cohort-001",
            "revised-13-month",
            "13 x 28 projection, conversion held",
            "1 common-year day and 2 leap-year days outside months.",
            "Gregorian/revised conversion remains gated until owner approval.",
            "EPOCH-REVISED-CONSTRAINT-PROJECTION",
            "EPOCH returned customer-safe revised timing context; WORKSHOP keeps service delivery ownership only.",
            true,
            false,
            true,
            false,
            false);
    }
}
