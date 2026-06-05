using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopCohortPlanningReceiptRecordStore
{
    public const string CohortPlanningReceiptFileName = "cohort-planning-receipts.json";

    private static readonly string[] DefaultPlanningReceiptIds =
    {
        "receipt-cohort-planning-001"
    };

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string CohortPlanningReceiptPath =>
        Path.Combine(ResolveStateDirectory(), CohortPlanningReceiptFileName);

    public static IReadOnlyList<WorkshopCohortPlanningReceiptRecord> Load()
    {
        string path = CohortPlanningReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopCohortPlanningReceiptRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopCohortPlanningReceiptRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopCohortPlanningReceiptRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopCohortPlanningReceiptRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopCohortPlanningReceiptRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopCohortPlanningReceiptRecord>();
        }
    }

    public static IReadOnlyList<WorkshopCohortPlanningReceiptRecord> EnsureDefaults()
    {
        List<WorkshopCohortPlanningReceiptRecord> records = Load().ToList();
        IReadOnlyList<WorkshopCohortPlanningReceiptRecord> defaults =
            WorkshopCohortPlanningReceiptRecord.CreateDefaultRecords(DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopCohortPlanningReceiptRecord receipt in defaults)
        {
            if (records.Any(record => record.PlanningReceiptId == receipt.PlanningReceiptId))
            {
                continue;
            }

            records.Add(receipt);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record => DefaultPlanningReceiptIds.Contains(record.PlanningReceiptId))
            .ToArray();
    }

    public static bool TryEnsureDefaults(out IReadOnlyList<WorkshopCohortPlanningReceiptRecord> records)
    {
        try
        {
            records = EnsureDefaults();
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopCohortPlanningReceiptRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopCohortPlanningReceiptRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopCohortPlanningReceiptRecord> records)
    {
        string path = CohortPlanningReceiptPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App cohort planning receipt path does not have a directory.");
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
            // The App can recreate default cohort planning receipts on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
