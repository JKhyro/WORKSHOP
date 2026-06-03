using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopPackageDeliveryAccountGrowthLinkageStore
{
    public const string LinkageFileName = "package-delivery-account-growth-linkages.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string LinkagePath => Path.Combine(ResolveStateDirectory(), LinkageFileName);

    public static IReadOnlyList<WorkshopPackageDeliveryAccountGrowthLinkageRecord> Load()
    {
        string path = LinkagePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopPackageDeliveryAccountGrowthLinkageRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopPackageDeliveryAccountGrowthLinkageRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopPackageDeliveryAccountGrowthLinkageRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopPackageDeliveryAccountGrowthLinkageRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopPackageDeliveryAccountGrowthLinkageRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopPackageDeliveryAccountGrowthLinkageRecord>();
        }
    }

    public static WorkshopPackageDeliveryAccountGrowthLinkageRecord Append(
        WorkshopPackageDeliveryQualityOutcomeReceipt qualityOutcomeReceipt)
    {
        List<WorkshopPackageDeliveryAccountGrowthLinkageRecord> records = Load().ToList();
        WorkshopPackageDeliveryAccountGrowthLinkageRecord record =
            WorkshopPackageDeliveryAccountGrowthLinkageRecord.FromQualityOutcomeReceipt(
                qualityOutcomeReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopPackageDeliveryQualityOutcomeReceipt qualityOutcomeReceipt,
        out WorkshopPackageDeliveryAccountGrowthLinkageRecord? record)
    {
        try
        {
            record = Append(qualityOutcomeReceipt);
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

    private static void Save(IReadOnlyList<WorkshopPackageDeliveryAccountGrowthLinkageRecord> records)
    {
        string path = LinkagePath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App package delivery account-growth linkage path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid account-growth linkage ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
