using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopCompetitorPriceAnchorStore
{
    public const string PriceAnchorFileName = "competitor-price-anchors.json";

    private static readonly string[] DefaultPriceAnchorIds =
    {
        "price-anchor-low-cost-writing-001",
        "price-anchor-premium-testprep-001"
    };

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string PriceAnchorPath => Path.Combine(ResolveStateDirectory(), PriceAnchorFileName);

    public static IReadOnlyList<WorkshopCompetitorPriceAnchorRecord> Load()
    {
        string path = PriceAnchorPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopCompetitorPriceAnchorRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopCompetitorPriceAnchorRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopCompetitorPriceAnchorRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopCompetitorPriceAnchorRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopCompetitorPriceAnchorRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopCompetitorPriceAnchorRecord>();
        }
    }

    public static IReadOnlyList<WorkshopCompetitorPriceAnchorRecord> EnsureDefaults()
    {
        List<WorkshopCompetitorPriceAnchorRecord> records = Load().ToList();
        IReadOnlyList<WorkshopCompetitorPriceAnchorRecord> defaults =
            WorkshopCompetitorPriceAnchorRecord.CreateDefaultRecords(DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopCompetitorPriceAnchorRecord priceAnchor in defaults)
        {
            if (records.Any(record => record.PriceAnchorId == priceAnchor.PriceAnchorId))
            {
                continue;
            }

            records.Add(priceAnchor);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record => DefaultPriceAnchorIds.Contains(record.PriceAnchorId))
            .ToArray();
    }

    public static bool TryEnsureDefaults(out IReadOnlyList<WorkshopCompetitorPriceAnchorRecord> records)
    {
        try
        {
            records = EnsureDefaults();
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopCompetitorPriceAnchorRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopCompetitorPriceAnchorRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopCompetitorPriceAnchorRecord> records)
    {
        string path = PriceAnchorPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App competitor price anchor path does not have a directory.");
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
            // The App can recreate default price anchors on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
