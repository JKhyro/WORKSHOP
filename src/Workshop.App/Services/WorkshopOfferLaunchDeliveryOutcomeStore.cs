using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryOutcomeStore
{
    public const string OutcomeFileName = "offer-launch-delivery-outcomes.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string OutcomePath => Path.Combine(ResolveStateDirectory(), OutcomeFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryOutcomeRecord> Load()
    {
        string path = OutcomePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryOutcomeRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryOutcomeRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryOutcomeRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryOutcomeRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryOutcomeRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryOutcomeRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryOutcomeRecord Append(
        WorkshopOfferLaunchDeliveryMilestoneReceipt milestoneReceipt)
    {
        List<WorkshopOfferLaunchDeliveryOutcomeRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryOutcomeRecord record =
            WorkshopOfferLaunchDeliveryOutcomeRecord.FromMilestoneReceipt(
                milestoneReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryMilestoneReceipt milestoneReceipt,
        out WorkshopOfferLaunchDeliveryOutcomeRecord? record)
    {
        try
        {
            record = Append(milestoneReceipt);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryOutcomeRecord> records)
    {
        string path = OutcomePath;
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
