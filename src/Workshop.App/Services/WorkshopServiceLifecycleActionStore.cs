using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopServiceLifecycleActionStore
{
    public const string ActionFileName = "service-lifecycle-actions.json";

    private const string DefaultActionId = "workshop-lifecycle-action-001";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string ActionPath => Path.Combine(ResolveStateDirectory(), ActionFileName);

    public static IReadOnlyList<WorkshopServiceLifecycleAction> Load()
    {
        string path = ActionPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopServiceLifecycleAction>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopServiceLifecycleAction>? entries =
                JsonSerializer.Deserialize<List<WorkshopServiceLifecycleAction>>(json, JsonOptions);

            return entries is not null ? entries : Array.Empty<WorkshopServiceLifecycleAction>();
        }
        catch (JsonException)
        {
            ArchiveInvalidActions(path);
            return Array.Empty<WorkshopServiceLifecycleAction>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopServiceLifecycleAction>();
        }
    }

    public static WorkshopServiceLifecycleAction EnsureDefaultLifecycleAction()
    {
        List<WorkshopServiceLifecycleAction> actions = Load().ToList();
        WorkshopServiceLifecycleAction? existing = actions.FirstOrDefault(action => action.ActionId == DefaultActionId);
        if (existing is not null)
        {
            return existing;
        }

        WorkshopServiceLifecycleAction action = WorkshopServiceLifecycleAction.FromLocalWebportalIntent(
            DefaultActionId,
            "workshop-webportal-request-001",
            "change-scope",
            "submission-review",
            "Customer asked to adjust the service scope before delivery.",
            DateTimeOffset.UtcNow);

        actions.Add(action);
        Save(actions);

        return action;
    }

    public static bool TryEnsureDefaultLifecycleAction(out WorkshopServiceLifecycleAction? action)
    {
        try
        {
            action = EnsureDefaultLifecycleAction();
            return true;
        }
        catch (IOException)
        {
            action = null;
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            action = null;
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopServiceLifecycleAction> actions)
    {
        string path = ActionPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App lifecycle action path does not have a directory.");
        Directory.CreateDirectory(directory);

        string tempPath = $"{path}.tmp";
        File.WriteAllText(tempPath, JsonSerializer.Serialize(actions, JsonOptions));
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

    private static void ArchiveInvalidActions(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid lifecycle action ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
