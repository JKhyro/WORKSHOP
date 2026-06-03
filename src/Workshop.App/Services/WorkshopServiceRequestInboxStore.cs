using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopServiceRequestInboxStore
{
    public const string InboxFileName = "service-request-inbox.json";

    private const string DefaultRequestId = "workshop-webportal-request-001";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string InboxPath => Path.Combine(ResolveStateDirectory(), InboxFileName);

    public static IReadOnlyList<WorkshopWebportalServiceRequest> Load()
    {
        string path = InboxPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopWebportalServiceRequest>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopWebportalServiceRequest>? entries =
                JsonSerializer.Deserialize<List<WorkshopWebportalServiceRequest>>(json, JsonOptions);

            if (entries is not null)
            {
                return entries;
            }

            return Array.Empty<WorkshopWebportalServiceRequest>();
        }
        catch (JsonException)
        {
            ArchiveInvalidInbox(path);
            return Array.Empty<WorkshopWebportalServiceRequest>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopWebportalServiceRequest>();
        }
    }

    public static WorkshopWebportalServiceRequest EnsureDefaultWebportalRequest()
    {
        List<WorkshopWebportalServiceRequest> inbox = Load().ToList();
        WorkshopWebportalServiceRequest? existing = inbox.FirstOrDefault(request => request.RequestId == DefaultRequestId);
        if (existing is not null)
        {
            return existing;
        }

        WorkshopWebportalServiceRequest request = WorkshopWebportalServiceRequest.FromLocalWebportalIntent(
            DefaultRequestId,
            "Adult submission prospect",
            "async-writing-review",
            "adult",
            "draft-ready",
            "Needs structured review, correction, and customer-safe delivery status.",
            true,
            DateTimeOffset.UtcNow);

        inbox.Add(request);
        Save(inbox);

        return request;
    }

    public static bool TryEnsureDefaultWebportalRequest(out WorkshopWebportalServiceRequest? request)
    {
        try
        {
            request = EnsureDefaultWebportalRequest();
            return true;
        }
        catch (IOException)
        {
            request = null;
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            request = null;
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopWebportalServiceRequest> inbox)
    {
        string path = InboxPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App service inbox path does not have a directory.");
        Directory.CreateDirectory(directory);

        string tempPath = $"{path}.tmp";
        File.WriteAllText(tempPath, JsonSerializer.Serialize(inbox, JsonOptions));
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

    private static void ArchiveInvalidInbox(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid inbox locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
