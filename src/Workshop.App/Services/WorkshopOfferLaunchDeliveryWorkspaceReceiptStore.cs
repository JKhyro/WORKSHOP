using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryWorkspaceReceiptStore
{
    public const string ReceiptFileName = "offer-launch-delivery-workspace-receipts.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ReceiptPath => Path.Combine(ResolveStateDirectory(), ReceiptFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryWorkspaceReceipt> Load()
    {
        string path = ReceiptPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryWorkspaceReceipt>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryWorkspaceReceipt>? receipts =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryWorkspaceReceipt>>(json, JsonOptions);

            return receipts is not null ? receipts : Array.Empty<WorkshopOfferLaunchDeliveryWorkspaceReceipt>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryWorkspaceReceipt>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryWorkspaceReceipt>();
        }
    }

    public static WorkshopOfferLaunchDeliveryWorkspaceReceipt Append(
        WorkshopOfferLaunchDeliveryWorkspaceRecord workspace)
    {
        List<WorkshopOfferLaunchDeliveryWorkspaceReceipt> receipts = Load().ToList();
        WorkshopOfferLaunchDeliveryWorkspaceReceipt receipt =
            WorkshopOfferLaunchDeliveryWorkspaceReceipt.FromWorkspace(
                workspace,
                DateTimeOffset.UtcNow);

        receipts.Add(receipt);
        Save(receipts);

        return receipt;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchDeliveryWorkspaceRecord workspace,
        out WorkshopOfferLaunchDeliveryWorkspaceReceipt? receipt)
    {
        try
        {
            receipt = Append(workspace);
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

    private static void Save(IReadOnlyList<WorkshopOfferLaunchDeliveryWorkspaceReceipt> receipts)
    {
        string path = ReceiptPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App offer launch delivery workspace receipt path does not have a directory.");
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

    private static void ArchiveInvalidRecords(string path)
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
