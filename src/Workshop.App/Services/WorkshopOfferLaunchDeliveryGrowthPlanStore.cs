using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryGrowthPlanStore
{
    public const string GrowthPlanFileName = "offer-launch-delivery-growth-plans.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string GrowthPlanPath => Path.Combine(ResolveStateDirectory(), GrowthPlanFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryGrowthPlanRecord> Load()
    {
        string path = GrowthPlanPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryGrowthPlanRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryGrowthPlanRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryGrowthPlanRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryGrowthPlanRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryGrowthPlanRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryGrowthPlanRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryGrowthPlanRecord Append(
        WorkshopOfferLaunchDeliveryFollowUpReceipt followUpReceipt)
    {
        List<WorkshopOfferLaunchDeliveryGrowthPlanRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryGrowthPlanRecord record =
            WorkshopOfferLaunchDeliveryGrowthPlanRecord.FromFollowUpReceipt(
                followUpReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryFollowUpReceipt followUpReceipt,
        out WorkshopOfferLaunchDeliveryGrowthPlanRecord? record)
    {
        try
        {
            record = Append(followUpReceipt);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryGrowthPlanRecord> records)
    {
        string path = GrowthPlanPath;
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
