using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopPackageDeliveryRetentionReportStore
{
    public const string ReportFileName = "package-delivery-retention-reporting.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReportPath => Path.Combine(ResolveStateDirectory(), ReportFileName);

    public static IReadOnlyList<WorkshopPackageDeliveryRetentionReportRecord> Load()
    {
        string path = ReportPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopPackageDeliveryRetentionReportRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopPackageDeliveryRetentionReportRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopPackageDeliveryRetentionReportRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopPackageDeliveryRetentionReportRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopPackageDeliveryRetentionReportRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopPackageDeliveryRetentionReportRecord>();
        }
    }

    public static WorkshopPackageDeliveryRetentionReportRecord Append(
        WorkshopPackageDeliveryAccountGrowthLinkageRecord accountGrowthLinkage,
        WorkshopPackageDeliveryAccountGrowthReceipt accountGrowthReceipt,
        WorkshopPackageDeliveryQualityOutcomeReceipt qualityOutcomeReceipt)
    {
        List<WorkshopPackageDeliveryRetentionReportRecord> records = Load().ToList();
        WorkshopPackageDeliveryRetentionReportRecord record =
            WorkshopPackageDeliveryRetentionReportRecord.FromReceipts(
                accountGrowthLinkage,
                accountGrowthReceipt,
                qualityOutcomeReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopPackageDeliveryAccountGrowthLinkageRecord accountGrowthLinkage,
        WorkshopPackageDeliveryAccountGrowthReceipt accountGrowthReceipt,
        WorkshopPackageDeliveryQualityOutcomeReceipt qualityOutcomeReceipt,
        out WorkshopPackageDeliveryRetentionReportRecord? record)
    {
        try
        {
            record = Append(accountGrowthLinkage, accountGrowthReceipt, qualityOutcomeReceipt);
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

    private static void Save(IReadOnlyList<WorkshopPackageDeliveryRetentionReportRecord> records)
    {
        string path = ReportPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App package delivery retention report path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid retention report ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
