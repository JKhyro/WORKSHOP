using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopTimingAwareServiceFollowUpStore
{
    public const string FollowUpFileName = "timing-aware-service-followups.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string FollowUpPath => Path.Combine(ResolveStateDirectory(), FollowUpFileName);

    public static IReadOnlyList<WorkshopTimingAwareServiceFollowUp> Load()
    {
        string path = FollowUpPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopTimingAwareServiceFollowUp>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopTimingAwareServiceFollowUp>? entries =
                JsonSerializer.Deserialize<List<WorkshopTimingAwareServiceFollowUp>>(json, JsonOptions);

            return entries is not null ? entries : Array.Empty<WorkshopTimingAwareServiceFollowUp>();
        }
        catch (JsonException)
        {
            ArchiveInvalidFollowUps(path);
            return Array.Empty<WorkshopTimingAwareServiceFollowUp>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopTimingAwareServiceFollowUp>();
        }
    }

    public static WorkshopTimingAwareServiceFollowUp Append(
        WorkshopEpochRevisedCalendarTimingPayload payload,
        WorkshopRevisedCalendarTimingReceipt receipt,
        WorkshopRevisedCalendarTimingStatusRecord status)
    {
        List<WorkshopTimingAwareServiceFollowUp> followUps = Load().ToList();
        WorkshopTimingAwareServiceFollowUp followUp =
            WorkshopTimingAwareServiceFollowUp.FromRevisedTimingStatus(
                payload,
                receipt,
                status,
                DateTimeOffset.UtcNow);

        followUps.Add(followUp);
        Save(followUps);

        return followUp;
    }

    public static bool TryAppend(
        WorkshopEpochRevisedCalendarTimingPayload payload,
        WorkshopRevisedCalendarTimingReceipt receipt,
        WorkshopRevisedCalendarTimingStatusRecord status,
        out WorkshopTimingAwareServiceFollowUp? followUp)
    {
        try
        {
            followUp = Append(payload, receipt, status);
            return true;
        }
        catch (IOException)
        {
            followUp = null;
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            followUp = null;
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopTimingAwareServiceFollowUp> followUps)
    {
        string path = FollowUpPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App timing-aware service follow-up path does not have a directory.");
        Directory.CreateDirectory(directory);

        string tempPath = $"{path}.tmp";
        File.WriteAllText(tempPath, JsonSerializer.Serialize(followUps, JsonOptions));
        File.Move(tempPath, path, true);
    }

    private static string ResolveStateDirectory()
    {
        string? overrideDirectory = Environment.GetEnvironmentVariable(
            WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable);
        if (!string.IsNullOrWhiteSpace(overrideDirectory))
        {
            return overrideDirectory;
        }

        string localAppData = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        if (string.IsNullOrWhiteSpace(localAppData))
        {
            localAppData = Path.Combine(Path.GetTempPath(), "KHYRON");
        }

        return Path.Combine(localAppData, "KHYRON", "WORKSHOP", "App");
    }

    private static void ArchiveInvalidFollowUps(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid follow-up ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
