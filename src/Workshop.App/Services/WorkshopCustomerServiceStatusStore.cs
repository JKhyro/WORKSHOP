using System.Text.Json;

namespace Workshop.App.Services;

internal static class WorkshopCustomerServiceStatusStore
{
    public const string StatusFileName = "customer-service-status.json";

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true,
        WriteIndented = true
    };

    public static string StatusPath => Path.Combine(ResolveStateDirectory(), StatusFileName);

    public static IReadOnlyList<WorkshopCustomerServiceStatusRecord> Load()
    {
        string path = StatusPath;
        if (!File.Exists(path))
        {
            return Array.Empty<WorkshopCustomerServiceStatusRecord>();
        }

        try
        {
            string json = File.ReadAllText(path);
            List<WorkshopCustomerServiceStatusRecord>? entries =
                JsonSerializer.Deserialize<List<WorkshopCustomerServiceStatusRecord>>(json, JsonOptions);

            if (entries is not null)
            {
                return entries;
            }

            return Array.Empty<WorkshopCustomerServiceStatusRecord>();
        }
        catch (JsonException)
        {
            ArchiveInvalidStatuses(path);
            return Array.Empty<WorkshopCustomerServiceStatusRecord>();
        }
        catch (IOException)
        {
            return Array.Empty<WorkshopCustomerServiceStatusRecord>();
        }
    }

    public static WorkshopCustomerServiceStatusRecord Append(
        WorkshopWebportalServiceRequest request,
        WorkshopServiceRevenueCommandReceipt commandReceipt,
        WorkshopRevenueExecutionHistoryEntry historyEntry)
    {
        List<WorkshopCustomerServiceStatusRecord> statuses = Load().ToList();
        WorkshopCustomerServiceStatusRecord? existing = statuses.FirstOrDefault(status =>
            status.RequestId == request.RequestId &&
            status.ExecutionHistoryId == historyEntry.HistoryId &&
            status.DeliveryResultReceiptId == historyEntry.DeliveryResultReceiptId);
        if (existing is not null)
        {
            return existing;
        }

        WorkshopCustomerServiceStatusRecord status = WorkshopCustomerServiceStatusRecord.FromServiceChain(
            request,
            commandReceipt,
            historyEntry,
            DateTimeOffset.UtcNow);

        statuses.Add(status);
        Save(statuses);

        return status;
    }

    public static bool TryAppend(
        WorkshopWebportalServiceRequest request,
        WorkshopServiceRevenueCommandReceipt commandReceipt,
        WorkshopRevenueExecutionHistoryEntry historyEntry,
        out WorkshopCustomerServiceStatusRecord? status)
    {
        try
        {
            status = Append(request, commandReceipt, historyEntry);
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

    private static void Save(IReadOnlyList<WorkshopCustomerServiceStatusRecord> statuses)
    {
        string path = StatusPath;
        string directory = Path.GetDirectoryName(path)
            ?? throw new InvalidOperationException("WORKSHOP App customer service status path does not have a directory.");
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
            // Keep the app usable even if Windows has the invalid status ledger locked.
        }
        catch (UnauthorizedAccessException)
        {
            // The next load can try again; the shell should not fail open into MONITOR.
        }
    }
}
