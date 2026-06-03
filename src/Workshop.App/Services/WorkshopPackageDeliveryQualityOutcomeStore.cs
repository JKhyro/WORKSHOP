using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopPackageDeliveryQualityOutcomeStore
{
    public const string OutcomeFileName = "package-delivery-quality-outcomes.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string OutcomePath => Path.Combine(ResolveStateDirectory(), OutcomeFileName);

    public static IReadOnlyList<WorkshopPackageDeliveryQualityOutcomeRecord> Load()
    {
        string path = OutcomePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopPackageDeliveryQualityOutcomeRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopPackageDeliveryQualityOutcomeRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopPackageDeliveryQualityOutcomeRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopPackageDeliveryQualityOutcomeRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopPackageDeliveryQualityOutcomeRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopPackageDeliveryQualityOutcomeRecord>();
        }
    }

    public static WorkshopPackageDeliveryQualityOutcomeRecord Append(
        WorkshopPackageDeliveryExecutionReceipt executionReceipt,
        WorkshopPackageDeliveryFollowUpRenewalReceipt followUpReceipt)
    {
        List<WorkshopPackageDeliveryQualityOutcomeRecord> records = Load().ToList();
        WorkshopPackageDeliveryQualityOutcomeRecord record =
            WorkshopPackageDeliveryQualityOutcomeRecord.FromReceipts(
                executionReceipt,
                followUpReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopPackageDeliveryExecutionReceipt executionReceipt,
        WorkshopPackageDeliveryFollowUpRenewalReceipt followUpReceipt,
        out WorkshopPackageDeliveryQualityOutcomeRecord? record)
    {
        try
        {
            record = Append(executionReceipt, followUpReceipt);
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

    private static void Save(IReadOnlyList<WorkshopPackageDeliveryQualityOutcomeRecord> records)
    {
        string path = OutcomePath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App package delivery quality outcome path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid quality/outcome ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
