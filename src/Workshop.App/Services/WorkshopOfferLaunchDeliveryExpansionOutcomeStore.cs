using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionOutcomeStore
{
    public const string ExpansionOutcomeFileName = "offer-launch-delivery-expansion-outcomes.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ExpansionOutcomePath => Path.Combine(ResolveStateDirectory(), ExpansionOutcomeFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionOutcomeRecord> Load()
    {
        string path = ExpansionOutcomePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionOutcomeRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionOutcomeRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionOutcomeRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryExpansionOutcomeRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionOutcomeRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionOutcomeRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionOutcomeRecord Append(
        WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt expansionMilestoneReceipt)
    {
        List<WorkshopOfferLaunchDeliveryExpansionOutcomeRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionOutcomeRecord record =
            WorkshopOfferLaunchDeliveryExpansionOutcomeRecord.FromExpansionMilestoneReceipt(
                expansionMilestoneReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt expansionMilestoneReceipt,
        out WorkshopOfferLaunchDeliveryExpansionOutcomeRecord? record)
    {
        try
        {
            record = Append(expansionMilestoneReceipt);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionOutcomeRecord> records)
    {
        string path = ExpansionOutcomePath;
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
