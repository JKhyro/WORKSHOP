using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopServiceLifecycleReceiptStore
{
    public const string ReceiptFileName = "service-lifecycle-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopServiceLifecycleReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopServiceLifecycleReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopServiceLifecycleReceipt>? entries =
                JsonSerializer.Deserialize<List<WorkshopServiceLifecycleReceipt>>(json, JsonOptions);

            return entries is not null ? entries : Array.Empty<WorkshopServiceLifecycleReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidReceipts(path);
            return Array.Empty<WorkshopServiceLifecycleReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopServiceLifecycleReceipt>();
        }
    }

    public static WorkshopServiceLifecycleReceipt Append(
        WorkshopServiceLifecycleAction action,
        WorkshopServiceRevenueCommandReceipt commandReceipt,
        WorkshopRevenueExecutionHistoryEntry historyEntry)
    {
        List<WorkshopServiceLifecycleReceipt> receipts = Load().ToList();
        WorkshopServiceLifecycleReceipt receipt = WorkshopServiceLifecycleReceipt.FromLifecycleAndCommand(
            action,
            commandReceipt,
            historyEntry,
            DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopServiceLifecycleAction action,
        WorkshopServiceRevenueCommandReceipt commandReceipt,
        WorkshopRevenueExecutionHistoryEntry historyEntry,
        out WorkshopServiceLifecycleReceipt? receipt)
    {
        try
        {
            receipt = Append(action, commandReceipt, historyEntry);
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

    private static void Save(IReadOnlyList<WorkshopServiceLifecycleReceipt> receipts)
    {
        string path = ReceiptPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App lifecycle receipt path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid lifecycle receipt ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
