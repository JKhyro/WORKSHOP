using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopCohortPlanRecordStore
{
    public const string CohortPlanFileName = "cohort-plans.json";

    private static readonly string[] DefaultCohortPlanIds =
    {
        "cohort-adult-test-prep",
        "materials-subscription-writing"
    };

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string CohortPlanPath =>
        Path.Combine(ResolveStateDirectory(), CohortPlanFileName);

    public static IReadOnlyList<WorkshopCohortPlanRecord> Load()
    {
        string path = CohortPlanPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopCohortPlanRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopCohortPlanRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopCohortPlanRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopCohortPlanRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopCohortPlanRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopCohortPlanRecord>();
        }
    }

    public static IReadOnlyList<WorkshopCohortPlanRecord> EnsureDefaults()
    {
        List<WorkshopCohortPlanRecord> records = Load().ToList();
        IReadOnlyList<WorkshopCohortPlanRecord> defaults =
            WorkshopCohortPlanRecord.CreateDefaultRecords(DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopCohortPlanRecord cohortPlan in defaults)
        {
            if (records.Any(record => record.CohortPlanId == cohortPlan.CohortPlanId))
            {
                continue;
            }

            records.Add(cohortPlan);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record => DefaultCohortPlanIds.Contains(record.CohortPlanId))
            .ToArray();
    }

    public static bool TryEnsureDefaults(out IReadOnlyList<WorkshopCohortPlanRecord> records)
    {
        try
        {
            records = EnsureDefaults();
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopCohortPlanRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopCohortPlanRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopCohortPlanRecord> records)
    {
        string path = CohortPlanPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App cohort plan path does not have a directory.");
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
            // The App can recreate default cohort plans on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
