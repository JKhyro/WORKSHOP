using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopRoiRecordStore
{
    public const string RoiFileName = "roi-records.json";

    private const string LiveHeavyHoldRoiRecordId = "roi-live-heavy-001";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string RoiPath => Path.Combine(ResolveStateDirectory(), RoiFileName);

    public static IReadOnlyList<WorkshopRoiRecord> Load()
    {
        string path = RoiPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopRoiRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopRoiRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopRoiRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopRoiRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopRoiRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopRoiRecord>();
        }
    }

    public static IReadOnlyList<WorkshopRoiRecord> EnsureDefaults(WorkshopRevenueCommandResult command)
    {
        List<WorkshopRoiRecord> records = Load().ToList();
        IReadOnlyList<WorkshopRoiRecord> defaults =
            WorkshopRoiRecord.CreateDefaultRecords(command, DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopRoiRecord roiRecord in defaults)
        {
            if (records.Any(record => record.RoiRecordId == roiRecord.RoiRecordId))
            {
                continue;
            }

            records.Add(roiRecord);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record =>
                record.RoiRecordId == command.RoiRecordId ||
                record.RoiRecordId == LiveHeavyHoldRoiRecordId)
            .ToArray();
    }

    public static bool TryEnsureDefaults(
        WorkshopRevenueCommandResult command,
        out IReadOnlyList<WorkshopRoiRecord> records)
    {
        try
        {
            records = EnsureDefaults(command);
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopRoiRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopRoiRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopRoiRecord> records)
    {
        string path = RoiPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App ROI record path does not have a directory.");
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
            // The App can recreate default ROI records on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
