using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopPackageDeliveryExecutionStore
{
    public const string ExecutionFileName = "package-delivery-executions.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ExecutionPath => Path.Combine(ResolveStateDirectory(), ExecutionFileName);

    public static IReadOnlyList<WorkshopPackageDeliveryExecutionRecord> Load()
    {
        string path = ExecutionPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopPackageDeliveryExecutionRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopPackageDeliveryExecutionRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopPackageDeliveryExecutionRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopPackageDeliveryExecutionRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopPackageDeliveryExecutionRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopPackageDeliveryExecutionRecord>();
        }
    }

    public static WorkshopPackageDeliveryExecutionRecord Append(
        WorkshopPackageDeliveryChecklistAutomationRecord automation)
    {
        List<WorkshopPackageDeliveryExecutionRecord> records = Load().ToList();
        WorkshopPackageDeliveryExecutionRecord record =
            WorkshopPackageDeliveryExecutionRecord.FromAutomation(
                automation,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopPackageDeliveryChecklistAutomationRecord automation,
        out WorkshopPackageDeliveryExecutionRecord? record)
    {
        try
        {
            record = Append(automation);
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

    private static void Save(IReadOnlyList<WorkshopPackageDeliveryExecutionRecord> records)
    {
        string path = ExecutionPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App package delivery execution path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid execution ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
