using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionFollowUpStore
{
    public const string ExpansionFollowUpFileName = "offer-launch-delivery-expansion-follow-ups.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ExpansionFollowUpPath => Path.Combine(ResolveStateDirectory(), ExpansionFollowUpFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionFollowUpRecord> Load()
    {
        string path = ExpansionFollowUpPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionFollowUpRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionFollowUpRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionFollowUpRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryExpansionFollowUpRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionFollowUpRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionFollowUpRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionFollowUpRecord Append(
        WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt expansionOutcomeReceipt)
    {
        List<WorkshopOfferLaunchDeliveryExpansionFollowUpRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionFollowUpRecord record =
            WorkshopOfferLaunchDeliveryExpansionFollowUpRecord.FromExpansionOutcomeReceipt(
                expansionOutcomeReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt expansionOutcomeReceipt,
        out WorkshopOfferLaunchDeliveryExpansionFollowUpRecord? record)
    {
        try
        {
            record = Append(expansionOutcomeReceipt);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionFollowUpRecord> records)
    {
        string path = ExpansionFollowUpPath;
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
