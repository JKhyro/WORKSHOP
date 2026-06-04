using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryFollowUpStore
{
    public const string FollowUpFileName = "offer-launch-delivery-follow-ups.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string FollowUpPath => Path.Combine(ResolveStateDirectory(), FollowUpFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryFollowUpRecord> Load()
    {
        string path = FollowUpPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryFollowUpRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryFollowUpRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryFollowUpRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryFollowUpRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryFollowUpRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryFollowUpRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryFollowUpRecord Append(
        WorkshopOfferLaunchDeliveryOutcomeReceipt outcomeReceipt)
    {
        List<WorkshopOfferLaunchDeliveryFollowUpRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryFollowUpRecord record =
            WorkshopOfferLaunchDeliveryFollowUpRecord.FromOutcomeReceipt(
                outcomeReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryOutcomeReceipt outcomeReceipt,
        out WorkshopOfferLaunchDeliveryFollowUpRecord? record)
    {
        try
        {
            record = Append(outcomeReceipt);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryFollowUpRecord> records)
    {
        string path = FollowUpPath;
        Directory.CreateDirectory(Path.GetDirectoryName(path)!);
        File.WriteAllText(path, JsonSerializer.Serialize(records, JsonOptions));
    }

    private static string ResolveStateDirectory()
    {
        string? overridePath = Environment.GetEnvironmentVariable(
            WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable);
        if (!string.IsNullOrWhiteSpace(overridePath))
        {
            return overridePath;
        }

        string localAppData = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        return Path.Combine(localAppData, "KHYRON", "WORKSHOP", "App");
    }

    private static void ArchiveInvalidRecords(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, overwrite: true);
        }
        catch (IOException)
        {
        }
        catch (UnauthorizedAccessException)
        {
        }
    }
}
