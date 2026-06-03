using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopAccountGrowthAutomationStore
{
    public const string AutomationFileName = "account-growth-automations.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string AutomationPath => Path.Combine(ResolveStateDirectory(), AutomationFileName);

    public static IReadOnlyList<WorkshopAccountGrowthAutomationRecord> Load()
    {
        string path = AutomationPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopAccountGrowthAutomationRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopAccountGrowthAutomationRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopAccountGrowthAutomationRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopAccountGrowthAutomationRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidAutomations(path);
            return Array.Empty<WorkshopAccountGrowthAutomationRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopAccountGrowthAutomationRecord>();
        }
    }

    public static WorkshopAccountGrowthAutomationRecord Append(
        WorkshopDeliveryOutcomeAutomationRecord automation,
        WorkshopDeliveryOutcomeAutomationReceipt receipt)
    {
        List<WorkshopAccountGrowthAutomationRecord> records = Load().ToList();
        WorkshopAccountGrowthAutomationRecord record =
            WorkshopAccountGrowthAutomationRecord.FromDeliveryOutcomeAutomation(
                automation,
                receipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopDeliveryOutcomeAutomationRecord automation,
        WorkshopDeliveryOutcomeAutomationReceipt receipt,
        out WorkshopAccountGrowthAutomationRecord? record)
    {
        try
        {
            record = Append(automation, receipt);
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

    private static void Save(IReadOnlyList<WorkshopAccountGrowthAutomationRecord> records)
    {
        string path = AutomationPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App account-growth automation path does not have a directory.");
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

    private static void ArchiveInvalidAutomations(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid automation ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
