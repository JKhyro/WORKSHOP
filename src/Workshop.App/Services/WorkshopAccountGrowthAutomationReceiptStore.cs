using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopAccountGrowthAutomationReceiptStore
{
    public const string ReceiptFileName = "account-growth-automation-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopAccountGrowthAutomationReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopAccountGrowthAutomationReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopAccountGrowthAutomationReceipt>? receipts =
                JsonSerializer.Deserialize<List<WorkshopAccountGrowthAutomationReceipt>>(json, JsonOptions);

            return receipts is not null ? receipts : Array.Empty<WorkshopAccountGrowthAutomationReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidReceipts(path);
            return Array.Empty<WorkshopAccountGrowthAutomationReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopAccountGrowthAutomationReceipt>();
        }
    }

    public static WorkshopAccountGrowthAutomationReceipt Append(
        WorkshopAccountGrowthAutomationRecord automation)
    {
        List<WorkshopAccountGrowthAutomationReceipt> receipts = Load().ToList();
        WorkshopAccountGrowthAutomationReceipt receipt =
            WorkshopAccountGrowthAutomationReceipt.FromAutomation(
                automation,
                DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopAccountGrowthAutomationRecord automation,
        out WorkshopAccountGrowthAutomationReceipt? receipt)
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

    private static void Save(IReadOnlyList<WorkshopAccountGrowthAutomationReceipt> receipts)
    {
        string path = ReceiptPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App account-growth automation receipt path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid account-growth receipt ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
