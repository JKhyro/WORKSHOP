using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopLaborEstimateStore
{
    public const string EstimateFileName = "labor-estimates.json";

    private static readonly string[] DefaultEstimateIds =
    {
        "labor-estimate-submission-001",
        "labor-estimate-live-heavy-001"
    };

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string EstimatePath => Path.Combine(ResolveStateDirectory(), EstimateFileName);

    public static IReadOnlyList<WorkshopLaborEstimateRecord> Load()
    {
        string path = EstimatePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopLaborEstimateRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopLaborEstimateRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopLaborEstimateRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopLaborEstimateRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopLaborEstimateRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopLaborEstimateRecord>();
        }
    }

    public static IReadOnlyList<WorkshopLaborEstimateRecord> EnsureDefaults(WorkshopRevenueCommandResult command)
    {
        List<WorkshopLaborEstimateRecord> records = Load().ToList();
        IReadOnlyList<WorkshopLaborEstimateRecord> defaults =
            WorkshopLaborEstimateRecord.CreateDefaultEstimates(command, DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopLaborEstimateRecord estimate in defaults)
        {
            if (records.Any(record => record.EstimateId == estimate.EstimateId))
            {
                continue;
            }

            records.Add(estimate);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record => DefaultEstimateIds.Contains(record.EstimateId))
            .ToArray();
    }

    public static bool TryEnsureDefaults(
        WorkshopRevenueCommandResult command,
        out IReadOnlyList<WorkshopLaborEstimateRecord> records)
    {
        try
        {
            records = EnsureDefaults(command);
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopLaborEstimateRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopLaborEstimateRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopLaborEstimateRecord> records)
    {
        string path = EstimatePath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App labor estimate path does not have a directory.");
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
            // The App can recreate default estimates on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
