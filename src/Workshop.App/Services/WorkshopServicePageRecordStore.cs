using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopServicePageRecordStore
{
    public const string ServicePageFileName = "service-pages.json";

    private static readonly string[] DefaultServicePageIds =
    {
        "service-page-submission-001",
        "service-page-systems-001"
    };

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ServicePagePath => Path.Combine(ResolveStateDirectory(), ServicePageFileName);

    public static IReadOnlyList<WorkshopServicePageRecord> Load()
    {
        string path = ServicePagePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopServicePageRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopServicePageRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopServicePageRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopServicePageRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopServicePageRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopServicePageRecord>();
        }
    }

    public static IReadOnlyList<WorkshopServicePageRecord> EnsureDefaults()
    {
        List<WorkshopServicePageRecord> records = Load().ToList();
        IReadOnlyList<WorkshopServicePageRecord> defaults =
            WorkshopServicePageRecord.CreateDefaultRecords(DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopServicePageRecord servicePage in defaults)
        {
            if (records.Any(record => record.ServicePageId == servicePage.ServicePageId))
            {
                continue;
            }

            records.Add(servicePage);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record => DefaultServicePageIds.Contains(record.ServicePageId))
            .ToArray();
    }

    public static bool TryEnsureDefaults(out IReadOnlyList<WorkshopServicePageRecord> records)
    {
        try
        {
            records = EnsureDefaults();
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopServicePageRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopServicePageRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopServicePageRecord> records)
    {
        string path = ServicePagePath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App service page manager path does not have a directory.");
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
            // The App can recreate default service pages on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
