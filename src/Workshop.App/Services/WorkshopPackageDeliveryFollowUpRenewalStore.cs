using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopPackageDeliveryFollowUpRenewalStore
{
    public const string FollowUpFileName = "package-delivery-followup-renewals.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string FollowUpPath => Path.Combine(ResolveStateDirectory(), FollowUpFileName);

    public static IReadOnlyList<WorkshopPackageDeliveryFollowUpRenewalRecord> Load()
    {
        string path = FollowUpPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopPackageDeliveryFollowUpRenewalRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopPackageDeliveryFollowUpRenewalRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopPackageDeliveryFollowUpRenewalRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopPackageDeliveryFollowUpRenewalRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopPackageDeliveryFollowUpRenewalRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopPackageDeliveryFollowUpRenewalRecord>();
        }
    }

    public static WorkshopPackageDeliveryFollowUpRenewalRecord Append(
        WorkshopPackageDeliveryExecutionReceipt executionReceipt)
    {
        List<WorkshopPackageDeliveryFollowUpRenewalRecord> records = Load().ToList();
        WorkshopPackageDeliveryFollowUpRenewalRecord record =
            WorkshopPackageDeliveryFollowUpRenewalRecord.FromExecutionReceipt(
                executionReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopPackageDeliveryExecutionReceipt executionReceipt,
        out WorkshopPackageDeliveryFollowUpRenewalRecord? record)
    {
        try
        {
            record = Append(executionReceipt);
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

    private static void Save(IReadOnlyList<WorkshopPackageDeliveryFollowUpRenewalRecord> records)
    {
        string path = FollowUpPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App package delivery follow-up renewal path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid follow-up ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
