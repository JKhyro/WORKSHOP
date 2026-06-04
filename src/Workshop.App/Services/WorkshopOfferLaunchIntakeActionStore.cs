using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchIntakeActionStore
{
    public const string ActionFileName = "offer-launch-intake-actions.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ActionPath => Path.Combine(ResolveStateDirectory(), ActionFileName);

    public static IReadOnlyList<WorkshopOfferLaunchIntakeActionRecord> Load()
    {
        string path = ActionPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchIntakeActionRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchIntakeActionRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchIntakeActionRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchIntakeActionRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchIntakeActionRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchIntakeActionRecord>();
        }
    }

    public static WorkshopOfferLaunchIntakeActionRecord Append(
        WorkshopOfferLaunchReadinessReceipt readinessReceipt,
        string customerLabel = "Launch Offer Prospect",
        string ageBand = "adult",
        string materialStatus = "submission-ready",
        bool requiresEpochTimingRequest = false)
    {
        List<WorkshopOfferLaunchIntakeActionRecord> records = Load().ToList();
        WorkshopOfferLaunchIntakeActionRecord record =
            WorkshopOfferLaunchIntakeActionRecord.FromReadinessReceipt(
                readinessReceipt,
                DateTimeOffset.UtcNow,
                customerLabel,
                ageBand,
                materialStatus,
                requiresEpochTimingRequest);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchReadinessReceipt readinessReceipt,
        out WorkshopOfferLaunchIntakeActionRecord? record)
    {
        try
        {
            record = Append(readinessReceipt);
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

    private static void Save(IReadOnlyList<WorkshopOfferLaunchIntakeActionRecord> records)
    {
        string path = ActionPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App offer launch intake action path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid intake action ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
