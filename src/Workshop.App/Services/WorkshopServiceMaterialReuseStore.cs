using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopServiceMaterialReuseStore
{
    public const string ReuseFileName = "service-material-reuse-records.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReusePath => Path.Combine(ResolveStateDirectory(), ReuseFileName);

    public static IReadOnlyList<WorkshopServiceMaterialReuseRecord> Load()
    {
        string path = ReusePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopServiceMaterialReuseRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopServiceMaterialReuseRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopServiceMaterialReuseRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopServiceMaterialReuseRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopServiceMaterialReuseRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopServiceMaterialReuseRecord>();
        }
    }

    public static WorkshopServiceMaterialReuseRecord Append(
        WorkshopAraMaterializationReceipt materializationReceipt,
        WorkshopWebportalServiceRequest request)
    {
        List<WorkshopServiceMaterialReuseRecord> records = Load().ToList();
        WorkshopServiceMaterialReuseRecord record =
            WorkshopServiceMaterialReuseRecord.FromMaterializationReceipt(
                materializationReceipt,
                request,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopAraMaterializationReceipt materializationReceipt,
        WorkshopWebportalServiceRequest request,
        out WorkshopServiceMaterialReuseRecord? record)
    {
        try
        {
            record = Append(materializationReceipt, request);
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

    private static void Save(IReadOnlyList<WorkshopServiceMaterialReuseRecord> records)
    {
        string path = ReusePath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App service material reuse path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid reuse ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
