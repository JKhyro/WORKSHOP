namespace Workshop.App;

public sealed record WorkshopOwnerTimeBudgetRecord(
    string BudgetId,
    string CreatedAtUtc,
    string SourceSurface,
    string WeekLabel,
    string Status,
    int WeeklyAvailableMinutes,
    int CommittedMinutes,
    int AraDelegableMinutes,
    int AdminWasteMinutes,
    int OverdueTaskCount,
    string RevenuePerCommittedHourLabel,
    bool LaborTrapWarning,
    bool OwnerTimeBudgetClear,
    bool LowLaborPriorityReady,
    bool AraDelegationRecommended,
    bool AppOwnedOwnerTimeBudgetState,
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
    string OperatorNextAction)
{
    public static WorkshopOwnerTimeBudgetRecord FromRevenueCommand(
        WorkshopRevenueCommandResult command,
        DateTimeOffset createdAtUtc)
    {
        const int weeklyAvailableMinutes = 900;
        const int committedMinutes = 720;
        const int araDelegableMinutes = 240;
        const int adminWasteMinutes = 45;
        const int overdueTaskCount = 0;

        bool ownerTimeBudgetClear =
            command.OwnerTimeBudgetClear &&
            committedMinutes <= weeklyAvailableMinutes &&
            araDelegableMinutes >= 120 &&
            overdueTaskCount == 0;
        bool laborTrapWarning = !ownerTimeBudgetClear;

        return new WorkshopOwnerTimeBudgetRecord(
            "owner-time-budget-week-001",
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.OwnerTimeBudgetGuard",
            "current-week-owner-time-budget",
            ownerTimeBudgetClear ? "owner-time-budget-clear" : "owner-time-budget-warning",
            weeklyAvailableMinutes,
            committedMinutes,
            araDelegableMinutes,
            adminWasteMinutes,
            overdueTaskCount,
            "Protect effective yen/hour before adding live commitments.",
            laborTrapWarning,
            ownerTimeBudgetClear,
            command.LowLaborViable && ownerTimeBudgetClear,
            araDelegableMinutes >= 120,
            true,
            false,
            false,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            "ai-neutral",
            ownerTimeBudgetClear
                ? "Prioritize submission packs, reusable materials, ARA-prepared research, and renewal follow-up before adding live classes."
                : "Reduce committed live work or delegate preparation before approving another offer lane.");
    }
}
