using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceiptStore
{
    public const string ReceiptFileName = "offer-launch-delivery-expansion-growth-plan-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt>? receipts =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt>>(json, JsonOptions);

            return receipts is not null ? receipts : Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt Append(
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord expansionGrowthPlan)
    {
        List<WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt> receipts = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt receipt =
            WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt.FromExpansionGrowthPlan(
                expansionGrowthPlan,
                DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord expansionGrowthPlan,
        out WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt? receipt)
    {
        try
        {
            receipt = Append(expansionGrowthPlan);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt> receipts)
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
