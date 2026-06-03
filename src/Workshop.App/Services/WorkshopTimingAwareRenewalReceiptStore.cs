using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopTimingAwareRenewalReceiptStore
{
    public const string ReceiptFileName = "timing-aware-renewal-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopTimingAwareRenewalReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopTimingAwareRenewalReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopTimingAwareRenewalReceipt>? entries =
                JsonSerializer.Deserialize<List<WorkshopTimingAwareRenewalReceipt>>(json, JsonOptions);

            return entries is not null ? entries : Array.Empty<WorkshopTimingAwareRenewalReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidReceipts(path);
            return Array.Empty<WorkshopTimingAwareRenewalReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopTimingAwareRenewalReceipt>();
        }
    }

    public static WorkshopTimingAwareRenewalReceipt Append(
        WorkshopTimingAwareServiceFollowUp followUp,
        WorkshopRevisedCalendarTimingStatusRecord status)
    {
        List<WorkshopTimingAwareRenewalReceipt> receipts = Load().ToList();
        WorkshopTimingAwareRenewalReceipt receipt =
            WorkshopTimingAwareRenewalReceipt.FromFollowUp(
                followUp,
                status,
                DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopTimingAwareServiceFollowUp followUp,
        WorkshopRevisedCalendarTimingStatusRecord status,
        out WorkshopTimingAwareRenewalReceipt? receipt)
    {
        try
        {
            receipt = Append(followUp, status);
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

    private static void Save(IReadOnlyList<WorkshopTimingAwareRenewalReceipt> receipts)
    {
        string path = ReceiptPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App timing-aware renewal receipt path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid renewal receipt ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
