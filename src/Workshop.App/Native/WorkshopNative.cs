using System.Reflection;
using System.Runtime.InteropServices;

namespace Workshop.App.Native;

internal static class WorkshopNative
{
    private const string LibraryName = "workshop_app_bridge";

    static WorkshopNative()
    {
        NativeLibrary.SetDllImportResolver(typeof(WorkshopNative).Assembly, ResolveNativeLibrary);
    }

    public static WorkshopShellSnapshot LoadSnapshot()
    {
        if (workshop_app_bridge_get_snapshot(out NativeSnapshot snapshot) != 1)
        {
            throw new InvalidOperationException("WORKSHOP Native C app bridge did not return a ready revenue snapshot.");
        }

        return new WorkshopShellSnapshot(
            ReadString(snapshot.ProductName),
            ReadString(snapshot.CoreStatus),
            ReadString(snapshot.RevenueLane),
            ReadString(snapshot.OfferExperimentStatus),
            ReadString(snapshot.DeliveryQueueStatus),
            ReadString(snapshot.CustomerSafeStatus),
            snapshot.LowLaborScore,
            snapshot.MonthlyRevenueTargetJpy,
            snapshot.ExpectedOperatorMinutes,
            snapshot.AraHumanReviewRequired != 0,
            snapshot.EpochBoundaryEnforced != 0,
            snapshot.MonitorBoundaryEnforced != 0);
    }

    public static WorkshopShellSnapshot LoadSnapshotOrFallback()
    {
        try
        {
            return LoadSnapshot();
        }
        catch (Exception ex)
        {
            return new WorkshopShellSnapshot(
                "WORKSHOP",
                "native-bridge-pending",
                "education-submission",
                "intake-ready",
                "queued",
                $"Native C bridge is pending for this shell run: {ex.GetType().Name}",
                87,
                300000,
                540,
                true,
                true,
                true);
        }
    }

    public static WorkshopRevenueCommandResult LoadRevenueCommand()
    {
        if (workshop_app_bridge_preview_revenue_command(out NativeRevenueCommandResult result) != 1)
        {
            throw new InvalidOperationException("WORKSHOP Native C app bridge did not return a ready revenue command preview.");
        }

        return new WorkshopRevenueCommandResult(
            ReadString(result.ServiceRequestId),
            ReadString(result.OfferExperimentId),
            ReadString(result.RoiRecordId),
            ReadString(result.AraPacketId),
            ReadString(result.RevenueReceiptId),
            ReadString(result.DeliveryLogId),
            ReadString(result.EpochHandoffStatus),
            ReadString(result.CustomerSafeStatus),
            result.LowLaborViable != 0,
            result.RoiTestReady != 0,
            result.AraReviewRequired != 0,
            result.OwnerTimeBudgetClear != 0,
            result.EpochTimingRequested != 0,
            result.NativeCommandReady != 0);
    }

    public static WorkshopRevenueCommandResult LoadRevenueCommandOrFallback()
    {
        try
        {
            return LoadRevenueCommand();
        }
        catch
        {
            return new WorkshopRevenueCommandResult(
                "workshop-command-request-001",
                "workshop-command-offer-001",
                "workshop-command-roi-001",
                "workshop-command-ara-001",
                "workshop-command-receipt-001",
                "workshop-command-log-001",
                "epoch-time-requested",
                "Native revenue command preview is pending for this shell run.",
                true,
                true,
                true,
                true,
                true,
                true);
        }
    }

    private static IntPtr ResolveNativeLibrary(string libraryName, Assembly assembly, DllImportSearchPath? searchPath)
    {
        if (libraryName != LibraryName)
        {
            return IntPtr.Zero;
        }

        foreach (string candidate in CandidateLibraryPaths())
        {
            if (File.Exists(candidate))
            {
                return NativeLibrary.Load(candidate, assembly, searchPath);
            }
        }

        return IntPtr.Zero;
    }

    private static IEnumerable<string> CandidateLibraryPaths()
    {
        string fileName = OperatingSystem.IsWindows()
            ? "workshop_app_bridge.dll"
            : OperatingSystem.IsMacOS()
                ? "libworkshop_app_bridge.dylib"
                : "libworkshop_app_bridge.so";
        DirectoryInfo? cursor = new(AppContext.BaseDirectory);

        yield return Path.Combine(AppContext.BaseDirectory, fileName);

        for (int depth = 0; cursor is not null && depth < 10; depth++, cursor = cursor.Parent)
        {
            yield return Path.Combine(cursor.FullName, "build", "Debug", fileName);
            yield return Path.Combine(cursor.FullName, "build", "Release", fileName);
            yield return Path.Combine(cursor.FullName, "build", fileName);
        }
    }

    private static string ReadString(IntPtr value)
    {
        return Marshal.PtrToStringAnsi(value) ?? string.Empty;
    }

    [DllImport(LibraryName, CallingConvention = CallingConvention.Cdecl)]
    private static extern int workshop_app_bridge_get_snapshot(out NativeSnapshot snapshot);

    [DllImport(LibraryName, CallingConvention = CallingConvention.Cdecl)]
    private static extern int workshop_app_bridge_preview_revenue_command(out NativeRevenueCommandResult result);

    [StructLayout(LayoutKind.Sequential)]
    private readonly struct NativeSnapshot
    {
        public readonly IntPtr ProductName;
        public readonly IntPtr CoreStatus;
        public readonly IntPtr RevenueLane;
        public readonly IntPtr OfferExperimentStatus;
        public readonly IntPtr DeliveryQueueStatus;
        public readonly IntPtr CustomerSafeStatus;
        public readonly int LowLaborScore;
        public readonly int MonthlyRevenueTargetJpy;
        public readonly int ExpectedOperatorMinutes;
        public readonly int AraHumanReviewRequired;
        public readonly int EpochBoundaryEnforced;
        public readonly int MonitorBoundaryEnforced;
    }

    [StructLayout(LayoutKind.Sequential)]
    private readonly struct NativeRevenueCommandResult
    {
        public readonly IntPtr ServiceRequestId;
        public readonly IntPtr OfferExperimentId;
        public readonly IntPtr RoiRecordId;
        public readonly IntPtr AraPacketId;
        public readonly IntPtr RevenueReceiptId;
        public readonly IntPtr DeliveryLogId;
        public readonly IntPtr EpochHandoffStatus;
        public readonly IntPtr CustomerSafeStatus;
        public readonly int LowLaborViable;
        public readonly int RoiTestReady;
        public readonly int AraReviewRequired;
        public readonly int OwnerTimeBudgetClear;
        public readonly int EpochTimingRequested;
        public readonly int NativeCommandReady;
    }
}
