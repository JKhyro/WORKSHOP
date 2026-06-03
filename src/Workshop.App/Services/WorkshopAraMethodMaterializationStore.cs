using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopAraMethodMaterializationStore
{
    public const string MaterializationFileName = "ara-method-materializations.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string MaterializationPath => Path.Combine(ResolveStateDirectory(), MaterializationFileName);

    public static IReadOnlyList<WorkshopAraMethodMaterializationRecord> Load()
    {
        string path = MaterializationPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopAraMethodMaterializationRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopAraMethodMaterializationRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopAraMethodMaterializationRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopAraMethodMaterializationRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidMaterializations(path);
            return Array.Empty<WorkshopAraMethodMaterializationRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopAraMethodMaterializationRecord>();
        }
    }

    public static WorkshopAraMethodMaterializationRecord Append(
        WorkshopAraOperatorReviewDecision decision,
        WorkshopAraReviewStatusReceipt statusReceipt)
    {
        List<WorkshopAraMethodMaterializationRecord> records = Load().ToList();
        WorkshopAraMethodMaterializationRecord record =
            WorkshopAraMethodMaterializationRecord.FromApprovedReview(
                decision,
                statusReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopAraOperatorReviewDecision decision,
        WorkshopAraReviewStatusReceipt statusReceipt,
        out WorkshopAraMethodMaterializationRecord? record)
    {
        try
        {
            record = Append(decision, statusReceipt);
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

    private static void Save(IReadOnlyList<WorkshopAraMethodMaterializationRecord> records)
    {
        string path = MaterializationPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App ARA method materialization path does not have a directory.");
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

    private static void ArchiveInvalidMaterializations(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid materialization ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
