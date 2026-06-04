using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceStore
{
    public const string AcceptanceFileName = "offer-launch-delivery-growth-plan-acceptances.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string AcceptancePath => Path.Combine(ResolveStateDirectory(), AcceptanceFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord> Load()
    {
        string path = AcceptancePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord Append(
        WorkshopOfferLaunchDeliveryGrowthPlanReceipt growthPlanReceipt)
    {
        List<WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord record =
            WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord.FromGrowthPlanReceipt(
                growthPlanReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryGrowthPlanReceipt growthPlanReceipt,
        out WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord? record)
    {
        try
        {
            record = Append(growthPlanReceipt);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord> records)
    {
        string path = AcceptancePath;
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
