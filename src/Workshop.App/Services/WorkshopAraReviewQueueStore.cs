using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopAraReviewQueueStore
{
    public const string QueueFileName = "ara-review-queue.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string QueuePath => Path.Combine(ResolveStateDirectory(), QueueFileName);

    public static IReadOnlyList<WorkshopAraReviewQueueRecord> Load()
    {
        string path = QueuePath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopAraReviewQueueRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopAraReviewQueueRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopAraReviewQueueRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopAraReviewQueueRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidQueue(path);
            return Array.Empty<WorkshopAraReviewQueueRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopAraReviewQueueRecord>();
        }
    }

    public static WorkshopAraReviewQueueRecord Append(
        WorkshopRevenueExecutionHistoryEntry history,
        WorkshopServiceRevenueCommandReceipt commandReceipt)
    {
        List<WorkshopAraReviewQueueRecord> records = Load().ToList();
        WorkshopAraReviewQueueRecord record =
            WorkshopAraReviewQueueRecord.FromRevenueHistory(
                history,
                commandReceipt,
                DateTimeOffset.UtcNow);

        records.Add(record);
        Save(records);

        return record;
    }

    public static bool TryAppend(
        WorkshopRevenueExecutionHistoryEntry history,
        WorkshopServiceRevenueCommandReceipt commandReceipt,
        out WorkshopAraReviewQueueRecord? record)
    {
        try
        {
            record = Append(history, commandReceipt);
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

    private static void Save(IReadOnlyList<WorkshopAraReviewQueueRecord> records)
    {
        string path = QueuePath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App ARA review queue path does not have a directory.");
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

    private static void ArchiveInvalidQueue(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid queue locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
