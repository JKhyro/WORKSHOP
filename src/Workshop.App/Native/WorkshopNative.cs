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
}
