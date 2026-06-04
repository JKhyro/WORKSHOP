using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionWorkspaceStore
{
    public const string ExpansionWorkspaceFileName = "offer-launch-delivery-expansion-workspaces.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ExpansionWorkspacePath => Path.Combine(ResolveStateDirectory(), ExpansionWorkspaceFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord> Load()
    {
        string path = ExpansionWorkspacePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord Append(
        WorkshopOfferLaunchDeliveryExpansionRequestReceipt expansionRequestReceipt)
    {
        List<WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord record =
            WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord.FromExpansionRequestReceipt(
                expansionRequestReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryExpansionRequestReceipt expansionRequestReceipt,
        out WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord? record)
    {
        try
        {
            record = Append(expansionRequestReceipt);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord> records)
    {
        string path = ExpansionWorkspacePath;
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
