using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionGrowthPlanStore
{
    public const string ExpansionGrowthPlanFileName = "offer-launch-delivery-expansion-growth-plans.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ExpansionGrowthPlanPath => Path.Combine(ResolveStateDirectory(), ExpansionGrowthPlanFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord> Load()
    {
        string path = ExpansionGrowthPlanPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord Append(
        WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt expansionFollowUpReceipt)
    {
        List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord record =
            WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord.FromExpansionFollowUpReceipt(
                expansionFollowUpReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt expansionFollowUpReceipt,
        out WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord? record)
    {
        try
        {
            record = Append(expansionFollowUpReceipt);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord> records)
    {
        string path = ExpansionGrowthPlanPath;
        Directory.CreateDirectory(Path.GetDirectoryName(path)!);
        File.WriteAllText(path, JsonSerializer.Serialize(records, JsonOptions));
    }

    private static string ResolveStateDirectory()
    {
        string? overridePath = Environment.GetEnvironmentVariable(
            WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable);
        if (!string.IsNullOrWhiteSpace(overridePath))
        {
            Directory.CreateDirectory(overridePath);
            return overridePath;
        }

        string basePath = Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
            "KHYRON",
            "WORKSHOP",
            "App");
        Directory.CreateDirectory(basePath);
        return basePath;
    }

    private static void ArchiveInvalidRecords(string path)
    {
        if (!File.Exists(path))
        {
            return;
        }

        string archivePath = $"{path}.{DateTimeOffset.UtcNow:yyyyMMddHHmmss}.invalid";
        File.Move(path, archivePath, overwrite: true);
    }
}
