using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopServiceLifecycleStatusStore
{
    public const string StatusFileName = "service-lifecycle-status.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string StatusPath => Path.Combine(ResolveStateDirectory(), StatusFileName);

    public static IReadOnlyList<WorkshopServiceLifecycleStatusRecord> Load()
    {
        string path = StatusPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopServiceLifecycleStatusRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopServiceLifecycleStatusRecord>? entries =
                JsonSerializer.Deserialize<List<WorkshopServiceLifecycleStatusRecord>>(json, JsonOptions);

            return entries is not null ? entries : Array.Empty<WorkshopServiceLifecycleStatusRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidStatuses(path);
            return Array.Empty<WorkshopServiceLifecycleStatusRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopServiceLifecycleStatusRecord>();
        }
    }

    public static WorkshopServiceLifecycleStatusRecord Append(
        WorkshopServiceLifecycleAction action,
        WorkshopServiceLifecycleReceipt receipt)
    {
        List<WorkshopServiceLifecycleStatusRecord> statuses = Load().ToList();
        WorkshopServiceLifecycleStatusRecord status = WorkshopServiceLifecycleStatusRecord.FromLifecycleChain(
            action,
            receipt,
            DateTimeOffset.UtcNow);

        statuses.Add(status);
        Save(statuses);

        return status;
    }

    public static bool TryAppend(
        WorkshopServiceLifecycleAction action,
        WorkshopServiceLifecycleReceipt receipt,
        out WorkshopServiceLifecycleStatusRecord? status)
    {
        try
        {
            status = Append(action, receipt);
            return true;
        }
        catch (IOException)
        {
            status = null;
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            status = null;
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopServiceLifecycleStatusRecord> statuses)
    {
        string path = StatusPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App service lifecycle status path does not have a directory.");
        Directory.CreateDirectory(directory);

        string tempPath = $"{path}.tmp";
        File.WriteAllText(tempPath, JsonSerializer.Serialize(statuses, JsonOptions));
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

    private static void ArchiveInvalidStatuses(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid lifecycle status ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
