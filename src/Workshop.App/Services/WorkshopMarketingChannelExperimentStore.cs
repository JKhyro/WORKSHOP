using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopMarketingChannelExperimentStore
{
    public const string MarketingChannelExperimentFileName = "marketing-channel-experiments.json";

    private static readonly string[] DefaultMarketingChannelExperimentIds =
    {
        "marketing-channel-direct-referral-001",
        "marketing-channel-local-business-001"
    };

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string MarketingChannelExperimentPath =>
        Path.Combine(ResolveStateDirectory(), MarketingChannelExperimentFileName);

    public static IReadOnlyList<WorkshopMarketingChannelExperimentRecord> Load()
    {
        string path = MarketingChannelExperimentPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopMarketingChannelExperimentRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopMarketingChannelExperimentRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopMarketingChannelExperimentRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopMarketingChannelExperimentRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopMarketingChannelExperimentRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopMarketingChannelExperimentRecord>();
        }
    }

    public static IReadOnlyList<WorkshopMarketingChannelExperimentRecord> EnsureDefaults()
    {
        List<WorkshopMarketingChannelExperimentRecord> records = Load().ToList();
        IReadOnlyList<WorkshopMarketingChannelExperimentRecord> defaults =
            WorkshopMarketingChannelExperimentRecord.CreateDefaultRecords(DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopMarketingChannelExperimentRecord channelExperiment in defaults)
        {
            if (records.Any(record =>
                record.MarketingChannelExperimentId == channelExperiment.MarketingChannelExperimentId))
            {
                continue;
            }

            records.Add(channelExperiment);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record => DefaultMarketingChannelExperimentIds.Contains(record.MarketingChannelExperimentId))
            .ToArray();
    }

    public static bool TryEnsureDefaults(out IReadOnlyList<WorkshopMarketingChannelExperimentRecord> records)
    {
        try
        {
            records = EnsureDefaults();
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopMarketingChannelExperimentRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopMarketingChannelExperimentRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopMarketingChannelExperimentRecord> records)
    {
        string path = MarketingChannelExperimentPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App marketing channel experiment path does not have a directory.");
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
            // The App can recreate default marketing channel experiments on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
