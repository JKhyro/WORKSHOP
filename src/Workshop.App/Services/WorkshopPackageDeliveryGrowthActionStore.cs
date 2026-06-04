using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopPackageDeliveryGrowthActionStore
{
    public const string ActionFileName = "package-delivery-growth-actions.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ActionPath => Path.Combine(ResolveStateDirectory(), ActionFileName);

    public static IReadOnlyList<WorkshopPackageDeliveryGrowthActionRecord> Load()
    {
        string path = ActionPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopPackageDeliveryGrowthActionRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopPackageDeliveryGrowthActionRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopPackageDeliveryGrowthActionRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopPackageDeliveryGrowthActionRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopPackageDeliveryGrowthActionRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopPackageDeliveryGrowthActionRecord>();
        }
    }

    public static WorkshopPackageDeliveryGrowthActionRecord Append(
        WorkshopPackageDeliveryRetentionReportRecord retentionReport,
        WorkshopPackageDeliveryRetentionReportReceipt retentionReportReceipt)
    {
        List<WorkshopPackageDeliveryGrowthActionRecord> records = Load().ToList();
        WorkshopPackageDeliveryGrowthActionRecord record =
            WorkshopPackageDeliveryGrowthActionRecord.FromRetentionReport(
                retentionReport,
                retentionReportReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopPackageDeliveryRetentionReportRecord retentionReport,
        WorkshopPackageDeliveryRetentionReportReceipt retentionReportReceipt,
        out WorkshopPackageDeliveryGrowthActionRecord? record)
    {
        try
        {
            record = Append(retentionReport, retentionReportReceipt);
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

    private static void Save(IReadOnlyList<WorkshopPackageDeliveryGrowthActionRecord> records)
    {
        string path = ActionPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App package delivery growth action path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid growth action ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
