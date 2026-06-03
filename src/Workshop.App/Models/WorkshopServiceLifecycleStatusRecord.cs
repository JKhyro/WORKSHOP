namespace Workshop.App;

public sealed record WorkshopServiceLifecycleStatusRecord(
    string StatusId,
    string CreatedAtUtc,
    string SourceSurface,
    string ActionId,
    string RequestId,
    string ActionKind,
    string RequestedServiceLane,
    string Status,
    string CustomerSafeMessage,
    string NextAction,
    bool CustomerSafe,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool AraReviewComplete,
    bool MonitorWorkflowExposed)
{
    public static WorkshopServiceLifecycleStatusRecord FromLifecycleChain(
        WorkshopServiceLifecycleAction action,
        WorkshopServiceLifecycleReceipt receipt,
        DateTimeOffset createdAtUtc)
    {
        string statusId = $"workshop-lifecycle-status-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..53];
        bool epochTimingProviderOnly =
            action.EpochTimingProviderOnly &&
            receipt.EpochTimingProviderOnly;
        bool araReviewComplete = receipt.AraOperatorReviewComplete;
        bool customerSafe =
            action.CustomerSafe &&
            receipt.CustomerSafe &&
            receipt.CustomerVisibleReceiptReady &&
            epochTimingProviderOnly &&
            araReviewComplete &&
            !action.MonitorWorkflowExposed &&
            !receipt.MonitorWorkflowExposed;

        return new WorkshopServiceLifecycleStatusRecord(
            statusId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.ServiceLifecycleStatusExport",
            action.ActionId,
            action.RequestId,
            action.ActionKind,
            action.RequestedServiceLane,
            "local-service-lifecycle-ready",
            "Your service change request has a local WORKSHOP lifecycle update. EPOCH remains timing-provider-only.",
            "Review the customer-safe service lifecycle update in the Webportal before any customer-facing delivery change is sent.",
            customerSafe,
            customerSafe,
            epochTimingProviderOnly,
            araReviewComplete,
            action.MonitorWorkflowExposed || receipt.MonitorWorkflowExposed);
    }
}
