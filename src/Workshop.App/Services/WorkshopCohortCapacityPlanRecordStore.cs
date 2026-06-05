using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopCohortCapacityPlanRecordStore
{
    public const string CohortCapacityPlanFileName = "cohort-capacity-plans.json";

    private static readonly string[] DefaultCapacityPlanIds =
    {
        "cohort-capacity-adult-test-prep",
        "cohort-capacity-writing-materials"
    };

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string CohortCapacityPlanPath =>
        Path.Combine(ResolveStateDirectory(), CohortCapacityPlanFileName);

    public static IReadOnlyList<WorkshopCohortCapacityPlanRecord> Load()
    {
        string path = CohortCapacityPlanPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopCohortCapacityPlanRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopCohortCapacityPlanRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopCohortCapacityPlanRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopCohortCapacityPlanRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopCohortCapacityPlanRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopCohortCapacityPlanRecord>();
        }
    }

    public static IReadOnlyList<WorkshopCohortCapacityPlanRecord> EnsureDefaults()
    {
        List<WorkshopCohortCapacityPlanRecord> records = Load().ToList();
        IReadOnlyList<WorkshopCohortCapacityPlanRecord> defaults =
            WorkshopCohortCapacityPlanRecord.CreateDefaultRecords(DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopCohortCapacityPlanRecord capacityPlan in defaults)
        {
            if (records.Any(record => record.CapacityPlanId == capacityPlan.CapacityPlanId))
            {
                continue;
            }

            records.Add(capacityPlan);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record => DefaultCapacityPlanIds.Contains(record.CapacityPlanId))
            .ToArray();
    }

    public static bool TryEnsureDefaults(out IReadOnlyList<WorkshopCohortCapacityPlanRecord> records)
    {
        try
        {
            records = EnsureDefaults();
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopCohortCapacityPlanRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopCohortCapacityPlanRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopCohortCapacityPlanRecord> records)
    {
        string path = CohortCapacityPlanPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App cohort capacity plan path does not have a directory.");
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
            // The App can recreate default cohort capacity plans on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
