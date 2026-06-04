using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferLaunchActivationStore
{
    public const string ActivationFileName = "offer-launch-activations.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ActivationPath => Path.Combine(ResolveStateDirectory(), ActivationFileName);

    public static IReadOnlyList<WorkshopOfferLaunchActivationRecord> Load()
    {
        string path = ActivationPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferLaunchActivationRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferLaunchActivationRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferLaunchActivationRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferLaunchActivationRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferLaunchActivationRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferLaunchActivationRecord>();
        }
    }

    public static WorkshopOfferLaunchActivationRecord Append(
        WorkshopOfferLaunchIntakeReceipt intakeReceipt)
    {
        List<WorkshopOfferLaunchActivationRecord> records = Load().ToList();
        WorkshopOfferLaunchActivationRecord record =
            WorkshopOfferLaunchActivationRecord.FromIntakeReceipt(
                intakeReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopOfferLaunchIntakeReceipt intakeReceipt,
        out WorkshopOfferLaunchActivationRecord? record)
    {
        try
        {
            record = Append(intakeReceipt);
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

    private static void Save(IReadOnlyList<WorkshopOfferLaunchActivationRecord> records)
    {
        string path = ActivationPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App offer launch activation path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid activation ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
