using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopRevisedCalendarTimingStatusStore
{
    public const string StatusFileName = "revised-calendar-timing-status.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string StatusPath => Path.Combine(ResolveStateDirectory(), StatusFileName);

    public static IReadOnlyList<WorkshopRevisedCalendarTimingStatusRecord> Load()
    {
        string path = StatusPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopRevisedCalendarTimingStatusRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopRevisedCalendarTimingStatusRecord>? entries =
                JsonSerializer.Deserialize<List<WorkshopRevisedCalendarTimingStatusRecord>>(json, JsonOptions);

            return entries is not null ? entries : Array.Empty<WorkshopRevisedCalendarTimingStatusRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidStatuses(path);
            return Array.Empty<WorkshopRevisedCalendarTimingStatusRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopRevisedCalendarTimingStatusRecord>();
        }
    }

    public static WorkshopRevisedCalendarTimingStatusRecord Append(
        WorkshopEpochRevisedCalendarTimingPayload payload,
        WorkshopRevisedCalendarTimingReceipt receipt)
    {
        List<WorkshopRevisedCalendarTimingStatusRecord> statuses = Load().ToList();
        WorkshopRevisedCalendarTimingStatusRecord status =
            WorkshopRevisedCalendarTimingStatusRecord.FromTimingReceipt(
                payload,
                receipt,
                DateTimeOffset.UtcNow);

        statuses.Add(status);
        Save(statuses);

        return status;
    }

    public static bool TryAppend(
        WorkshopEpochRevisedCalendarTimingPayload payload,
        WorkshopRevisedCalendarTimingReceipt receipt,
        out WorkshopRevisedCalendarTimingStatusRecord? status)
    {
        try
        {
            status = Append(payload, receipt);
            return true;
        }
        catch (IOException)
        {
            status = null;
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            status = null;
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopRevisedCalendarTimingStatusRecord> statuses)
    {
        string path = StatusPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App revised timing status path does not have a directory.");
        Directory.CreateDirectory(directory);

        string tempPath = $"{path}.tmp";
        File.WriteAllText(tempPath, JsonSerializer.Serialize(statuses, JsonOptions));
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

    private static void ArchiveInvalidStatuses(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid revised timing status ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
