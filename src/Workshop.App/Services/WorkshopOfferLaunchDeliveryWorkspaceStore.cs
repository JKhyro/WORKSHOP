using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchDeliveryWorkspaceStore
{
    public const string WorkspaceFileName = "offer-launch-delivery-workspaces.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string WorkspacePath => Path.Combine(ResolveStateDirectory(), WorkspaceFileName);

    public static IReadOnlyList<WorkshopOfferLaunchDeliveryWorkspaceRecord> Load()
    {
        string path = WorkspacePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryWorkspaceRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchDeliveryWorkspaceRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchDeliveryWorkspaceRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchDeliveryWorkspaceRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchDeliveryWorkspaceRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchDeliveryWorkspaceRecord>();
        }
    }

    public static WorkshopOfferLaunchDeliveryWorkspaceRecord Append(
        WorkshopOfferLaunchServiceSetupReceipt setupReceipt)
    {
        List<WorkshopOfferLaunchDeliveryWorkspaceRecord> records = Load().ToList();
        WorkshopOfferLaunchDeliveryWorkspaceRecord record =
            WorkshopOfferLaunchDeliveryWorkspaceRecord.FromSetupReceipt(
                setupReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchServiceSetupReceipt setupReceipt,
        out WorkshopOfferLaunchDeliveryWorkspaceRecord? record)
    {
        try
        {
            record = Append(setupReceipt);
            return true;
        }
        catch (IOException)
        {
            record = null;
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            record = null;
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopOfferLaunchDeliveryWorkspaceRecord> records)
    {
        string path = WorkspacePath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App offer launch delivery workspace path does not have a directory.");
        Directory.CreateDirectory(directory);

        string tempPath = $"{path}.tmp";
        File.WriteAllText(tempPath, JsonSerializer.Serialize(records, JsonOptions));
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
            // Keep the app usable even if Windows has the invalid workspace ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
