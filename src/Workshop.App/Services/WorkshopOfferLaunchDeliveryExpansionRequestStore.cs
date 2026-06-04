using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionRequestStore
{
    public const string ExpansionRequestFileName = "offer-launch-delivery-expansion-requests.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ExpansionRequestPath => Path.Combine(ResolveStateDirectory(), ExpansionRequestFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionRequestRecord> Load()
    {
        string path = ExpansionRequestPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionRequestRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionRequestRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionRequestRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryExpansionRequestRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionRequestRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionRequestRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionRequestRecord Append(
        WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt acceptanceReceipt)
    {
        List<WorkshopOfferLaunchDeliveryExpansionRequestRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionRequestRecord record =
            WorkshopOfferLaunchDeliveryExpansionRequestRecord.FromAcceptanceReceipt(
                acceptanceReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt acceptanceReceipt,
        out WorkshopOfferLaunchDeliveryExpansionRequestRecord? record)
    {
        try
        {
            record = Append(acceptanceReceipt);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionRequestRecord> records)
    {
        string path = ExpansionRequestPath;
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
