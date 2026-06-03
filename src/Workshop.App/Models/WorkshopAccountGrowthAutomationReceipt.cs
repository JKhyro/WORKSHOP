namespace Workshop.App;

public sealed record WorkshopAccountGrowthAutomationReceipt(
    string ReceiptId,
    string CreatedAtUtc,
    string SourceSurface,
    string AutomationId,
    string DeliveryOutcomeAutomationId,
    string DeliveryOutcomeAutomationReceiptId,
    string ServiceRequestId,
    string RevenueOutcomeId,
    string DeliveryResultReceiptId,
    string TimingAwareRenewalReceiptId,
    string RetentionHealthId,
    string ReferralOpportunityId,
    string AccountGrowthPlanId,
    string GrowthFollowUpReceiptId,
    string ReferralConversionId,
    string GrowthPlanAcceptanceId,
    string ExpansionServiceRequestId,
    string ConversionStatusEventId,
    string ConversionReceiptId,
    string Kind,
    string Status,
    string Summary,
    string CustomerSafeMessage,
    string NextAction,
    bool CustomerSafe,
    bool CustomerVisibleReceiptReady,
    bool WebportalExportReady,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool AraReviewComplete,
    bool RenewalReady,
    bool RetentionReady,
    bool ReferralReady,
    bool GrowthPlanReady,
    bool ConversionReady,
    bool ExpansionRequestReady,
    bool RequiresEpochTimingRequest)
{
    public static WorkshopAccountGrowthAutomationReceipt FromAutomation(
        WorkshopAccountGrowthAutomationRecord automation,
        DateTimeOffset createdAtUtc)
    {
        string receiptId = $"workshop-account-growth-automation-receipt-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..73];
        bool customerSafe =
            automation.CustomerSafe &&
            automation.CustomerVisibleReceiptReady &&
            automation.WebportalExportReady &&
            automation.EpochTimingProviderOnly &&
            !automation.WorkshopCalendarOwnership &&
            !automation.MonitorWorkflowExposed &&
            !automation.PaymentLiveEnabled &&
            automation.AraReviewComplete &&
            automation.RenewalReady &&
            automation.RetentionReady &&
            automation.ReferralReady &&
            automation.GrowthPlanReady &&
            automation.ConversionReady &&
            automation.ExpansionRequestReady &&
            !automation.RequiresEpochTimingRequest;

        return new WorkshopAccountGrowthAutomationReceipt(
            receiptId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.AccountGrowthAutomationReceipt",
            automation.AutomationId,
            automation.DeliveryOutcomeAutomationId,
            automation.DeliveryOutcomeAutomationReceiptId,
            automation.ServiceRequestId,
            automation.RevenueOutcomeId,
            automation.DeliveryResultReceiptId,
            automation.TimingAwareRenewalReceiptId,
            automation.RetentionHealthId,
            automation.ReferralOpportunityId,
            automation.AccountGrowthPlanId,
            automation.GrowthFollowUpReceiptId,
            automation.ReferralConversionId,
            automation.GrowthPlanAcceptanceId,
            automation.ExpansionServiceRequestId,
            automation.ConversionStatusEventId,
            automation.ConversionReceiptId,
            "account-growth-automation",
            customerSafe ? "customer-safe-account-growth-ready" : "customer-safe-account-growth-blocked",
            "WORKSHOP prepared a customer-safe account-growth automation receipt from the reviewed delivery outcome, renewal context, and local service chain.",
            automation.CustomerSafeMessage,
            "Open the next repeat service or referral follow-up inside WORKSHOP. Request EPOCH timing only if a new appointment or deadline is needed.",
            customerSafe,
            customerSafe,
            customerSafe,
            automation.EpochTimingProviderOnly,
            automation.WorkshopCalendarOwnership,
            automation.MonitorWorkflowExposed,
            automation.PaymentLiveEnabled,
            automation.AraReviewComplete,
            automation.RenewalReady,
            automation.RetentionReady,
            automation.ReferralReady,
            automation.GrowthPlanReady,
            automation.ConversionReady,
            automation.ExpansionRequestReady,
            automation.RequiresEpochTimingRequest);
    }
}
