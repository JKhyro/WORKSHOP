namespace Workshop.App;

public sealed record WorkshopRevenueExecutionReceipt(
    string ExecutionId,
    string IntentKind,
    string ExecutionStatus,
    string ServiceRequestId,
    string OpportunityId,
    string AraPacketId,
    string AraReviewReceiptId,
    string RevenueOutcomeId,
    string DeliveryResultReceiptId,
    string EpochHandoffId,
    string CustomerSafeStatus,
    bool ExecutedLocally,
    bool CustomerVisibleReceiptReady,
    bool AraOperatorReviewComplete,
    bool EpochTimingRequested,
    bool MonitorWorkflowExposed,
    bool NativeExecutionReady);
