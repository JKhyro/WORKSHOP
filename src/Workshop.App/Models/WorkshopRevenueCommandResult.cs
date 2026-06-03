namespace Workshop.App;

public sealed record WorkshopRevenueCommandResult(
    string ServiceRequestId,
    string OfferExperimentId,
    string RoiRecordId,
    string AraPacketId,
    string RevenueReceiptId,
    string DeliveryLogId,
    string EpochHandoffStatus,
    string CustomerSafeStatus,
    bool LowLaborViable,
    bool RoiTestReady,
    bool AraReviewRequired,
    bool OwnerTimeBudgetClear,
    bool EpochTimingRequested,
    bool NativeCommandReady);
