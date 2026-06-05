using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopSubscriptionPlanRecordStore
{
    public const string SubscriptionPlanFileName = "subscription-plans.json";

    private static readonly string[] DefaultSubscriptionPlanIds =
    {
        "subscription-writing-strategy",
        "subscription-cohort-lab"
    };

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string SubscriptionPlanPath =>
        Path.Combine(ResolveStateDirectory(), SubscriptionPlanFileName);

    public static IReadOnlyList<WorkshopSubscriptionPlanRecord> Load()
    {
        string path = SubscriptionPlanPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopSubscriptionPlanRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopSubscriptionPlanRecord>? records =
                JsonSerializer.Deserialize<List<WorkshopSubscriptionPlanRecord>>(json, JsonOptions);

            return records is not null ? records : Array.Empty<WorkshopSubscriptionPlanRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidRecords(path);
            return Array.Empty<WorkshopSubscriptionPlanRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopSubscriptionPlanRecord>();
        }
    }

    public static IReadOnlyList<WorkshopSubscriptionPlanRecord> EnsureDefaults()
    {
        List<WorkshopSubscriptionPlanRecord> records = Load().ToList();
        IReadOnlyList<WorkshopSubscriptionPlanRecord> defaults =
            WorkshopSubscriptionPlanRecord.CreateDefaultRecords(DateTimeOffset.UtcNow);
        bool changed = false;

        foreach (WorkshopSubscriptionPlanRecord subscriptionPlan in defaults)
        {
            if (records.Any(record => record.SubscriptionPlanId == subscriptionPlan.SubscriptionPlanId))
            {
                continue;
            }

            records.Add(subscriptionPlan);
            changed = true;
        }

        if (changed)
        {
            Save(records);
        }

        return records
            .Where(record => DefaultSubscriptionPlanIds.Contains(record.SubscriptionPlanId))
            .ToArray();
    }

    public static bool TryEnsureDefaults(out IReadOnlyList<WorkshopSubscriptionPlanRecord> records)
    {
        try
        {
            records = EnsureDefaults();
            return true;
        }
        catch (IOException)
        {
            records = Array.Empty<WorkshopSubscriptionPlanRecord>();
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            records = Array.Empty<WorkshopSubscriptionPlanRecord>();
            return false;
        }
    }

    private static void Save(IReadOnlyList<WorkshopSubscriptionPlanRecord> records)
    {
        string path = SubscriptionPlanPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App subscription plan path does not have a directory.");
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
            // The App can recreate default subscription plans on the next load.
        }
        catch (UnauthorizedAccessException)
        {
            // Keep the shell usable if Windows has the invalid ledger locked.
        }
    }
}
