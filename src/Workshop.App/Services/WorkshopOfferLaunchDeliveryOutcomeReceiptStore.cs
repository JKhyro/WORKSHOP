using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryOutcomeReceiptStore
{
    public const string ReceiptFileName = "offer-launch-delivery-outcome-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryOutcomeReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryOutcomeReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryOutcomeReceipt>? receipts =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryOutcomeReceipt>>(json, JsonOptions);

            return receipts is not null ? receipts : Array.Empty<WorkshopOfferLaunchDeliveryOutcomeReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryOutcomeReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryOutcomeReceipt>();
        }
    }

    public static WorkshopOfferLaunchDeliveryOutcomeReceipt Append(
        WorkshopOfferLaunchDeliveryOutcomeRecord outcome)
    {
        List<WorkshopOfferLaunchDeliveryOutcomeReceipt> receipts = Load().ToList();
        WorkshopOfferLaunchDeliveryOutcomeReceipt receipt =
            WorkshopOfferLaunchDeliveryOutcomeReceipt.FromOutcome(
                outcome,
                DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryOutcomeRecord outcome,
        out WorkshopOfferLaunchDeliveryOutcomeReceipt? receipt)
    {
        try
        {
            receipt = Append(outcome);
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

    private static void Save(IEnumerable<WorkshopOfferLaunchDeliveryOutcomeReceipt> receipts)
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
