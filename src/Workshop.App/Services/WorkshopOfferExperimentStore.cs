using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopOfferExperimentStore
{
    public const string OfferExperimentFileName = "offer-experiments.json";

    private const string SystemsOfferExperimentId = "offer-experiment-systems-001";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string OfferExperimentPath => Path.Combine(ResolveStateDirectory(), OfferExperimentFileName);

    public static IReadOnlyList<WorkshopOfferExperimentRecord> Load()
    {
        string path = OfferExperimentPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopOfferExperimentRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopOfferExperimentRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopOfferExperimentRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopOfferExperimentRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopOfferExperimentRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopOfferExperimentRecord>();
        }
    }

    public static IReadOnlyList<WorkshopOfferExperimentRecord> EnsureDefaults(
        WorkshopRevenueCommandResult command)
    {
        List<WorkshopOfferExperimentRecord> records = Load().ToList();
        IReadOnlyList<WorkshopOfferExperimentRecord> defaults =
            WorkshopOfferExperimentRecord.CreateDefaultRecords(command, DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopOfferExperimentRecord offerExperiment in defaults)
        {
            if (records.Any(record => record.OfferExperimentId == offerExperiment.OfferExperimentId))
            {
                continue;
            }

            records.Add(offerExperiment);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record =>
                record.OfferExperimentId == command.OfferExperimentId ||
                record.OfferExperimentId == SystemsOfferExperimentId)
            .ToArray();
    }

    public static bool TryEnsureDefaults(
        WorkshopRevenueCommandResult command,
        out IReadOnlyList<WorkshopOfferExperimentRecord> records)
    {
        try
        {
            records = EnsureDefaults(command);
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopOfferExperimentRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopOfferExperimentRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopOfferExperimentRecord> records)
    {
        string path = OfferExperimentPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App offer experiment path does not have a directory.");
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
            // The App can recreate default offer experiments on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
