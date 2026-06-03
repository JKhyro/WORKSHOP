using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopAraOperatorReviewDecisionStore
{
    public const string DecisionFileName = "ara-operator-review-decisions.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string DecisionPath => Path.Combine(ResolveStateDirectory(), DecisionFileName);

    public static IReadOnlyList<WorkshopAraOperatorReviewDecision> Load()
    {
        string path = DecisionPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopAraOperatorReviewDecision>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopAraOperatorReviewDecision>? decisions =
                JsonSerializer.Deserialize<List<WorkshopAraOperatorReviewDecision>>(json, JsonOptions);

            return decisions is not null ? decisions : Array.Empty<WorkshopAraOperatorReviewDecision>();
        }
        catch (JsonException)
        {
            ArchiveInvalidDecisions(path);
            return Array.Empty<WorkshopAraOperatorReviewDecision>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopAraOperatorReviewDecision>();
        }
    }

    public static WorkshopAraOperatorReviewDecision Append(WorkshopAraReviewQueueRecord queue)
    {
        List<WorkshopAraOperatorReviewDecision> decisions = Load().ToList();
        WorkshopAraOperatorReviewDecision decision =
            WorkshopAraOperatorReviewDecision.FromQueue(
                queue,
                DateTimeOffset.UtcNow);

        decisions.Add(decision);
        Save(decisions);

        return decision;
    }

    public static bool TryAppend(
        WorkshopAraReviewQueueRecord queue,
        out WorkshopAraOperatorReviewDecision? decision)
    {
        try
        {
            decision = Append(queue);
            return true;
        }
        catch (IOException)
        {
            decision = null;
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            decision = null;
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopAraOperatorReviewDecision> decisions)
    {
        string path = DecisionPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App ARA operator review decision path does not have a directory.");
        Directory.CreateDirectory(directory);

        string tempPath = $"{path}.tmp";
        File.WriteAllText(tempPath, JsonSerializer.Serialize(decisions, JsonOptions));
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

    private static void ArchiveInvalidDecisions(string path)
    {
        try
        {
            string archivePath = $"{path}.invalid-{DateTimeOffset.UtcNow:yyyyMMddHHmmss}";
            File.Move(path, archivePath, true);
        }
        catch (IOException)
        {
            // Keep the app usable even if Windows has the invalid decision ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
