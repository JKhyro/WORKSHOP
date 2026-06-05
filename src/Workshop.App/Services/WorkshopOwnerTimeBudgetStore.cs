using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOwnerTimeBudgetStore
{
    public const string BudgetFileName = "owner-time-budgets.json";

    private const string DefaultBudgetId = "owner-time-budget-week-001";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string BudgetPath => Path.Combine(ResolveStateDirectory(), BudgetFileName);

    public static IReadOnlyList<WorkshopOwnerTimeBudgetRecord> Load()
    {
        string path = BudgetPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOwnerTimeBudgetRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOwnerTimeBudgetRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOwnerTimeBudgetRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOwnerTimeBudgetRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOwnerTimeBudgetRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOwnerTimeBudgetRecord>();
        }
    }

    public static WorkshopOwnerTimeBudgetRecord EnsureDefault(WorkshopRevenueCommandResult command)
    {
        List<WorkshopOwnerTimeBudgetRecord> records = Load().ToList();
        WorkshopOwnerTimeBudgetRecord? existing =
            records.FirstOrDefault(record => record.BudgetId == DefaultBudgetId);
        if (existing is not null)
        {
            return existing;
        }

        WorkshopOwnerTimeBudgetRecord record =
            WorkshopOwnerTimeBudgetRecord.FromRevenueCommand(command, DateTimeOffset.UtcNow);
        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryEnsureDefault(
        WorkshopRevenueCommandResult command,
        out WorkshopOwnerTimeBudgetRecord? record)
    {
        try
        {
            record = EnsureDefault(command);
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

    private static void Save(IReadOnlyList<WorkshopOwnerTimeBudgetRecord> records)
    {
        string path = BudgetPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App owner time budget path does not have a directory.");
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
            // The App can recreate the guard ledger on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
