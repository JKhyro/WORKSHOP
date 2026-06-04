using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionMilestoneStore
{
    public const string ExpansionMilestoneFileName = "offer-launch-delivery-expansion-milestones.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ExpansionMilestonePath => Path.Combine(ResolveStateDirectory(), ExpansionMilestoneFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionMilestoneRecord> Load()
    {
        string path = ExpansionMilestonePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionMilestoneRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionMilestoneRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionMilestoneRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryExpansionMilestoneRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionMilestoneRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionMilestoneRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionMilestoneRecord Append(
        WorkshopOfferLaunchDeliveryExpansionKickoffReceipt expansionKickoffReceipt)
    {
        List<WorkshopOfferLaunchDeliveryExpansionMilestoneRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionMilestoneRecord record =
            WorkshopOfferLaunchDeliveryExpansionMilestoneRecord.FromExpansionKickoffReceipt(
                expansionKickoffReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryExpansionKickoffReceipt expansionKickoffReceipt,
        out WorkshopOfferLaunchDeliveryExpansionMilestoneRecord? record)
    {
        try
        {
            record = Append(expansionKickoffReceipt);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionMilestoneRecord> records)
    {
        string path = ExpansionMilestonePath;
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
