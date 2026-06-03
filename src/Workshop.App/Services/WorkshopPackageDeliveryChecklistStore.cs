using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopPackageDeliveryChecklistStore
{
    public const string ChecklistFileName = "package-delivery-checklists.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ChecklistPath => Path.Combine(ResolveStateDirectory(), ChecklistFileName);

    public static IReadOnlyList<WorkshopPackageDeliveryChecklistRecord> Load()
    {
        string path = ChecklistPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopPackageDeliveryChecklistRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopPackageDeliveryChecklistRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopPackageDeliveryChecklistRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopPackageDeliveryChecklistRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopPackageDeliveryChecklistRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopPackageDeliveryChecklistRecord>();
        }
    }

    public static WorkshopPackageDeliveryChecklistRecord Append(
        WorkshopServiceMaterialReuseRecord reuseRecord)
    {
        List<WorkshopPackageDeliveryChecklistRecord> records = Load().ToList();
        WorkshopPackageDeliveryChecklistRecord record =
            WorkshopPackageDeliveryChecklistRecord.FromServiceMaterialReuse(
                reuseRecord,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopServiceMaterialReuseRecord reuseRecord,
        out WorkshopPackageDeliveryChecklistRecord? record)
    {
        try
        {
            record = Append(reuseRecord);
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

    private static void Save(IReadOnlyList<WorkshopPackageDeliveryChecklistRecord> records)
    {
        string path = ChecklistPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App package delivery checklist path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid checklist ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
