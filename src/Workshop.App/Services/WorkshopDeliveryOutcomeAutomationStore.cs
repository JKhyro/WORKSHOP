using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopDeliveryOutcomeAutomationStore
{
    public const string AutomationFileName = "delivery-outcome-automations.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string AutomationPath => Path.Combine(ResolveStateDirectory(), AutomationFileName);

    public static IReadOnlyList<WorkshopDeliveryOutcomeAutomationRecord> Load()
    {
        string path = AutomationPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopDeliveryOutcomeAutomationRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopDeliveryOutcomeAutomationRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopDeliveryOutcomeAutomationRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopDeliveryOutcomeAutomationRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidAutomations(path);
            return Array.Empty<WorkshopDeliveryOutcomeAutomationRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopDeliveryOutcomeAutomationRecord>();
        }
    }

    public static WorkshopDeliveryOutcomeAutomationRecord Append(
        WorkshopRevenueExecutionHistoryEntry history,
        WorkshopServiceLifecycleStatusRecord lifecycleStatus,
        WorkshopTimingAwareRenewalReceipt renewalReceipt)
    {
        List<WorkshopDeliveryOutcomeAutomationRecord> records = Load().ToList();
        WorkshopDeliveryOutcomeAutomationRecord record =
            WorkshopDeliveryOutcomeAutomationRecord.FromOutcomeChain(
                history,
                lifecycleStatus,
                renewalReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopRevenueExecutionHistoryEntry history,
        WorkshopServiceLifecycleStatusRecord lifecycleStatus,
        WorkshopTimingAwareRenewalReceipt renewalReceipt,
        out WorkshopDeliveryOutcomeAutomationRecord? record)
    {
        try
        {
            record = Append(history, lifecycleStatus, renewalReceipt);
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

    private static void Save(IReadOnlyList<WorkshopDeliveryOutcomeAutomationRecord> records)
    {
        string path = AutomationPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App delivery outcome automation path does not have a directory.");
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

    private static void ArchiveInvalidAutomations(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid automation ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
