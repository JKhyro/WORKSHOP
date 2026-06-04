using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryExpansionOutcomeReceiptStore
{
    public const string ReceiptFileName = "offer-launch-delivery-expansion-outcome-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt>? receipts =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt>>(json, JsonOptions);

            return receipts is not null ? receipts : Array.Empty<WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt>();
        }
    }

    public static WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt Append(
        WorkshopOfferLaunchDeliveryExpansionOutcomeRecord expansionOutcome)
    {
        List<WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt> receipts = Load().ToList();
        WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt receipt =
            WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt.FromExpansionOutcome(
                expansionOutcome,
                DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryExpansionOutcomeRecord expansionOutcome,
        out WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt? receipt)
    {
        try
        {
            receipt = Append(expansionOutcome);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt> receipts)
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
