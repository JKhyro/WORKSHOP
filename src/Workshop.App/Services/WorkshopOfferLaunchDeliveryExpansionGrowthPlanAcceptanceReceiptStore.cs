using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptStore
{
    public const string ReceiptFileName = "offer-launch-delivery-expansion-growth-plan-acceptance-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt>? receipts =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt>>(json, JsonOptions);

            return receipts is not null ? receipts : Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt Append(
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord acceptance)
    {
        List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt> receipts = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt receipt =
            WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt.FromAcceptance(
                acceptance,
                DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord acceptance,
        out WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt? receipt)
    {
        try
        {
            receipt = Append(acceptance);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt> receipts)
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
