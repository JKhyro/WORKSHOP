using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopMaterialAssetRecordStore
{
    public const string MaterialAssetFileName = "material-assets.json";

    private static readonly string[] DefaultMaterialAssetIds =
    {
        "material-asset-eiken-writing-rubric-001",
        "material-asset-crm-cleanup-checklist-001"
    };

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string MaterialAssetPath => Path.Combine(ResolveStateDirectory(), MaterialAssetFileName);

    public static IReadOnlyList<WorkshopMaterialAssetRecord> Load()
    {
        string path = MaterialAssetPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopMaterialAssetRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopMaterialAssetRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopMaterialAssetRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopMaterialAssetRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopMaterialAssetRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopMaterialAssetRecord>();
        }
    }

    public static IReadOnlyList<WorkshopMaterialAssetRecord> EnsureDefaults()
    {
        List<WorkshopMaterialAssetRecord> records = Load().ToList();
        IReadOnlyList<WorkshopMaterialAssetRecord> defaults =
            WorkshopMaterialAssetRecord.CreateDefaultRecords(DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopMaterialAssetRecord materialAsset in defaults)
        {
            if (records.Any(record => record.MaterialAssetId == materialAsset.MaterialAssetId))
            {
                continue;
            }

            records.Add(materialAsset);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record => DefaultMaterialAssetIds.Contains(record.MaterialAssetId))
            .ToArray();
    }

    public static bool TryEnsureDefaults(out IReadOnlyList<WorkshopMaterialAssetRecord> records)
    {
        try
        {
            records = EnsureDefaults();
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopMaterialAssetRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopMaterialAssetRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopMaterialAssetRecord> records)
    {
        string path = MaterialAssetPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App material asset library path does not have a directory.");
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
            // The App can recreate default material assets on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
