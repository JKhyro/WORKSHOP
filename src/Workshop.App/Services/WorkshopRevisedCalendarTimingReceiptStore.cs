using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopRevisedCalendarTimingReceiptStore
{
    public const string ReceiptFileName = "revised-calendar-timing-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopRevisedCalendarTimingReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopRevisedCalendarTimingReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopRevisedCalendarTimingReceipt>? entries =
                JsonSerializer.Deserialize<List<WorkshopRevisedCalendarTimingReceipt>>(json, JsonOptions);

            return entries is not null ? entries : Array.Empty<WorkshopRevisedCalendarTimingReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidReceipts(path);
            return Array.Empty<WorkshopRevisedCalendarTimingReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopRevisedCalendarTimingReceipt>();
        }
    }

    public static WorkshopRevisedCalendarTimingReceipt Append(
        WorkshopEpochRevisedCalendarTimingPayload payload)
    {
        List<WorkshopRevisedCalendarTimingReceipt> receipts = Load().ToList();
        WorkshopRevisedCalendarTimingReceipt receipt =
            WorkshopRevisedCalendarTimingReceipt.FromPayload(
                payload,
                DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopEpochRevisedCalendarTimingPayload payload,
        out WorkshopRevisedCalendarTimingReceipt? receipt)
    {
        try
        {
            receipt = Append(payload);
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

    private static void Save(IReadOnlyList<WorkshopRevisedCalendarTimingReceipt> receipts)
    {
        string path = ReceiptPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App revised timing receipt path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid revised timing receipt ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
