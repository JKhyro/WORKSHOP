using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopEpochRevisedCalendarTimingPayloadStore
{
    public const string PayloadFileName = "epoch-revised-calendar-timing.json";

    private const string DefaultPayloadId = "workshop-epoch-revised-timing-payload-001";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string PayloadPath => Path.Combine(ResolveStateDirectory(), PayloadFileName);

    public static IReadOnlyList<WorkshopEpochRevisedCalendarTimingPayload> Load()
    {
        string path = PayloadPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopEpochRevisedCalendarTimingPayload>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopEpochRevisedCalendarTimingPayload>? entries =
                JsonSerializer.Deserialize<List<WorkshopEpochRevisedCalendarTimingPayload>>(json, JsonOptions);

            return entries is not null ? entries : Array.Empty<WorkshopEpochRevisedCalendarTimingPayload>();
        }
        catch (JsonException)
        {
            ArchiveInvalidPayloads(path);
            return Array.Empty<WorkshopEpochRevisedCalendarTimingPayload>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopEpochRevisedCalendarTimingPayload>();
        }
    }

    public static WorkshopEpochRevisedCalendarTimingPayload EnsureDefaultPayload()
    {
        List<WorkshopEpochRevisedCalendarTimingPayload> payloads = Load().ToList();
        WorkshopEpochRevisedCalendarTimingPayload? existing =
            payloads.FirstOrDefault(payload => payload.PayloadId == DefaultPayloadId);
        if (existing is not null)
        {
            return existing;
        }

        WorkshopEpochRevisedCalendarTimingPayload payload =
            WorkshopEpochRevisedCalendarTimingPayload.FromEpochTimingProjection(
                DefaultPayloadId,
                DateTimeOffset.UtcNow);

        payloads.Add(payload);
        Save(payloads);

        return payload;
    }

    public static bool TryEnsureDefaultPayload(out WorkshopEpochRevisedCalendarTimingPayload? payload)
    {
        try
        {
            payload = EnsureDefaultPayload();
            return true;
        }
        catch (IOException)
        {
            payload = null;
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            payload = null;
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopEpochRevisedCalendarTimingPayload> payloads)
    {
        string path = PayloadPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App revised timing payload path does not have a directory.");
        Directory.CreateDirectory(directory);

        string tempPath = $"{path}.tmp";
        File.WriteAllText(tempPath, JsonSerializer.Serialize(payloads, JsonOptions));
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

    private static void ArchiveInvalidPayloads(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid revised timing payload ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
