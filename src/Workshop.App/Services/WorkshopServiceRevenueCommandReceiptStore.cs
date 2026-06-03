using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopServiceRevenueCommandReceiptStore
{
    public const string ReceiptFileName = "service-to-revenue-command.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopServiceRevenueCommandReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopServiceRevenueCommandReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopServiceRevenueCommandReceipt>? entries =
                JsonSerializer.Deserialize<List<WorkshopServiceRevenueCommandReceipt>>(json, JsonOptions);

            if (entries is not null)
            {
                return entries;
            }

            return Array.Empty<WorkshopServiceRevenueCommandReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidReceipts(path);
            return Array.Empty<WorkshopServiceRevenueCommandReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopServiceRevenueCommandReceipt>();
        }
    }

    public static WorkshopServiceRevenueCommandReceipt Append(
        WorkshopWebportalServiceRequest request,
        WorkshopRevenueExecutionHistoryEntry historyEntry,
        WorkshopRevenueExecutionReceipt execution)
    {
        List<WorkshopServiceRevenueCommandReceipt> receipts = Load().ToList();
        WorkshopServiceRevenueCommandReceipt receipt = WorkshopServiceRevenueCommandReceipt.FromServiceAndExecution(
            request,
            historyEntry,
            execution,
            DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopWebportalServiceRequest request,
        WorkshopRevenueExecutionHistoryEntry historyEntry,
        WorkshopRevenueExecutionReceipt execution,
        out WorkshopServiceRevenueCommandReceipt? receipt)
    {
        try
        {
            receipt = Append(request, historyEntry, execution);
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

    private static void Save(IReadOnlyList<WorkshopServiceRevenueCommandReceipt> receipts)
    {
        string path = ReceiptPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App service-to-command receipt path does not have a directory.");
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
