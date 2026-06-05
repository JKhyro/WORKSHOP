using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceStore
{
    public const string AcceptanceFileName = "offer-launch-delivery-expansion-growth-plan-acceptances.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ExpansionGrowthPlanAcceptancePath => Path.Combine(ResolveStateDirectory(), AcceptanceFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord> Load()
    {
        string path = ExpansionGrowthPlanAcceptancePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord Append(
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt expansionGrowthPlanReceipt)
    {
        List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord record =
            WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord.FromExpansionGrowthPlanReceipt(
                expansionGrowthPlanReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt expansionGrowthPlanReceipt,
        out WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord? record)
    {
        try
        {
            record = Append(expansionGrowthPlanReceipt);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord> records)
    {
        string path = ExpansionGrowthPlanAcceptancePath;
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
