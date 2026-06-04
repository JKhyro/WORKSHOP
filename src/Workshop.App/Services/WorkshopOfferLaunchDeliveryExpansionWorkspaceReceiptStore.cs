using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionWorkspaceReceiptStore
{
    public const string ReceiptFileName = "offer-launch-delivery-expansion-workspace-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt>? receipts =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt>>(json, JsonOptions);

            return receipts is not null ? receipts : Array.Empty<WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt Append(
        WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord expansionWorkspace)
    {
        List<WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt> receipts = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt receipt =
            WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt.FromExpansionWorkspace(
                expansionWorkspace,
                DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord expansionWorkspace,
        out WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt? receipt)
    {
        try
        {
            receipt = Append(expansionWorkspace);
            return true;
        }
        catch (IOException)
        {
            receipt = null;
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            receipt = null;
            return false;
        }
    }

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt> receipts)
    {
        string path = ReceiptPath;
        Directory.CreateDirectory(Path.GetDirectoryName(path)!);
        File.WriteAllText(path, JsonSerializer.Serialize(receipts, JsonOptions));
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
