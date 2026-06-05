using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopMarketResearchRecordStore
{
    public const string MarketResearchFileName = "market-research-records.json";

    private static readonly string[] DefaultMarketResearchIds =
    {
        "market-eiken-writing-001",
        "market-sme-workflow-001"
    };

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string MarketResearchPath => Path.Combine(ResolveStateDirectory(), MarketResearchFileName);

    public static IReadOnlyList<WorkshopMarketResearchRecord> Load()
    {
        string path = MarketResearchPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopMarketResearchRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopMarketResearchRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopMarketResearchRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopMarketResearchRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopMarketResearchRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopMarketResearchRecord>();
        }
    }

    public static IReadOnlyList<WorkshopMarketResearchRecord> EnsureDefaults(
        WorkshopRevenueCommandResult command)
    {
        List<WorkshopMarketResearchRecord> records = Load().ToList();
        IReadOnlyList<WorkshopMarketResearchRecord> defaults =
            WorkshopMarketResearchRecord.CreateDefaultRecords(command, DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopMarketResearchRecord marketRecord in defaults)
        {
            if (records.Any(record => record.MarketResearchId == marketRecord.MarketResearchId))
            {
                continue;
            }

            records.Add(marketRecord);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record => DefaultMarketResearchIds.Contains(record.MarketResearchId))
            .ToArray();
    }

    public static bool TryEnsureDefaults(
        WorkshopRevenueCommandResult command,
        out IReadOnlyList<WorkshopMarketResearchRecord> records)
    {
        try
        {
            records = EnsureDefaults(command);
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopMarketResearchRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopMarketResearchRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopMarketResearchRecord> records)
    {
        string path = MarketResearchPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App market research path does not have a directory.");
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
            // The App can recreate default market research records on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
