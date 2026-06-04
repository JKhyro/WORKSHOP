using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchReadinessStore
{
    public const string ReadinessFileName = "offer-launch-readiness.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReadinessPath => Path.Combine(ResolveStateDirectory(), ReadinessFileName);

    public static IReadOnlyList<WorkshopOfferLaunchReadinessRecord> Load()
    {
        string path = ReadinessPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchReadinessRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchReadinessRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchReadinessRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchReadinessRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchReadinessRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchReadinessRecord>();
        }
    }

    public static WorkshopOfferLaunchReadinessRecord Append(
        WorkshopShellSnapshot snapshot,
        WorkshopRevenueCommandResult command,
        WorkshopRevenueExecutionReceipt execution)
    {
        List<WorkshopOfferLaunchReadinessRecord> records = Load().ToList();
        WorkshopOfferLaunchReadinessRecord record =
            WorkshopOfferLaunchReadinessRecord.FromNativeCommand(
                snapshot,
                command,
                execution,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopShellSnapshot snapshot,
        WorkshopRevenueCommandResult command,
        WorkshopRevenueExecutionReceipt execution,
        out WorkshopOfferLaunchReadinessRecord? record)
    {
        try
        {
            record = Append(snapshot, command, execution);
            return true;
        }
        catch (IOException)
        {
            record = null;
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            record = null;
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopOfferLaunchReadinessRecord> records)
    {
        string path = ReadinessPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App offer launch readiness path does not have a directory.");
        Directory.CreateDirectory(directory);

        string tempPath = $"{path}.tmp";
        File.WriteAllText(tempPath, JsonSerializer.Serialize(records, JsonOptions));
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

    private static void ArchiveInvalidRecords(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid launch readiness ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
