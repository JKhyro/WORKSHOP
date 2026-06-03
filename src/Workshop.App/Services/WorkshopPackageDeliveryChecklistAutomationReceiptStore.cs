using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopPackageDeliveryChecklistAutomationReceiptStore
{
    public const string ReceiptFileName = "package-delivery-checklist-automation-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopPackageDeliveryChecklistAutomationReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopPackageDeliveryChecklistAutomationReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopPackageDeliveryChecklistAutomationReceipt>? receipts =
                JsonSerializer.Deserialize<List<WorkshopPackageDeliveryChecklistAutomationReceipt>>(json, JsonOptions);

            return receipts is not null ? receipts : Array.Empty<WorkshopPackageDeliveryChecklistAutomationReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidReceipts(path);
            return Array.Empty<WorkshopPackageDeliveryChecklistAutomationReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopPackageDeliveryChecklistAutomationReceipt>();
        }
    }

    public static WorkshopPackageDeliveryChecklistAutomationReceipt Append(
        WorkshopPackageDeliveryChecklistAutomationRecord automation)
    {
        List<WorkshopPackageDeliveryChecklistAutomationReceipt> receipts = Load().ToList();
        WorkshopPackageDeliveryChecklistAutomationReceipt receipt =
            WorkshopPackageDeliveryChecklistAutomationReceipt.FromAutomation(
                automation,
                DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopPackageDeliveryChecklistAutomationRecord automation,
        out WorkshopPackageDeliveryChecklistAutomationReceipt? receipt)
    {
        try
        {
            receipt = Append(automation);
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

    private static void Save(IReadOnlyList<WorkshopPackageDeliveryChecklistAutomationReceipt> receipts)
    {
        string path = ReceiptPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App package delivery checklist automation receipt path does not have a directory.");
        Directory.CreateDirectory(directory);

        string tempPath = $"{path}.tmp";
        File.WriteAllText(tempPath, JsonSerializer.Serialize(receipts, JsonOptions));
        File.Move(tempPath, path, true);
    }

    private static string ResolveStateDirectory()
    {
        string? overrideDirectory = Environment.GetEnvironmentVariable(
            WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable);
        if (!string.IsNullOrWhiteSpace(overrideDirectory))
        {
            return overrideDirectory;
        }

        string localAppData = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        if (string.IsNullOrWhiteSpace(localAppData))
        {
            localAppData = Path.Combine(Path.GetTempPath(), "KHYRON");
        }

        return Path.Combine(localAppData, "KHYRON", "WORKSHOP", "App");
    }

    private static void ArchiveInvalidReceipts(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid receipt ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
