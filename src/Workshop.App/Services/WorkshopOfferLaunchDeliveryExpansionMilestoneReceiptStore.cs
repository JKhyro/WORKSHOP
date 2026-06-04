using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionMilestoneReceiptStore
{
    public const string ReceiptFileName = "offer-launch-delivery-expansion-milestone-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt>? receipts =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt>>(json, JsonOptions);

            return receipts is not null ? receipts : Array.Empty<WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt Append(
        WorkshopOfferLaunchDeliveryExpansionMilestoneRecord expansionMilestone)
    {
        List<WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt> receipts = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt receipt =
            WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt.FromExpansionMilestone(
                expansionMilestone,
                DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryExpansionMilestoneRecord expansionMilestone,
        out WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt? receipt)
    {
        try
        {
            receipt = Append(expansionMilestone);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt> receipts)
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
