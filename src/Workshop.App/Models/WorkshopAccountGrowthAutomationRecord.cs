namespace Workshop.App;

public sealed record WorkshopAccountGrowthAutomationRecord(
    string AutomationId,
    string CreatedAtUtc,
    string SourceSurface,
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
    string AutomationKind,
    string Status,
    string GrowthPath,
    string CustomerSafeStatus,
    string CustomerSafeMessage,
    string OperatorNextAction,
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
    bool RequiresEpochTimingRequest,
    bool NativeExecutionReady)
{
    public static WorkshopAccountGrowthAutomationRecord FromDeliveryOutcomeAutomation(
        WorkshopDeliveryOutcomeAutomationRecord automation,
        WorkshopDeliveryOutcomeAutomationReceipt receipt,
        DateTimeOffset createdAtUtc)
    {
        string automationId = $"workshop-account-growth-automation-{createdAtUtc:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"[..65];
        string suffix = string.IsNullOrWhiteSpace(receipt.ServiceRequestId)
            ? automation.AutomationId
            : receipt.ServiceRequestId;
        bool epochTimingProviderOnly =
            automation.EpochTimingProviderOnly &&
            receipt.EpochTimingProviderOnly;
        bool monitorWorkflowExposed =
            automation.MonitorWorkflowExposed ||
            receipt.MonitorWorkflowExposed;
        bool workshopCalendarOwnership =
            automation.WorkshopCalendarOwnership ||
            receipt.WorkshopCalendarOwnership;
        bool paymentLiveEnabled =
            automation.PaymentLiveEnabled ||
            receipt.PaymentLiveEnabled;
        bool araReviewComplete =
            automation.AraReviewComplete &&
            receipt.AraReviewComplete;
        bool renewalReady =
            automation.RenewalReady &&
            receipt.RenewalReady;
        bool requiresEpochTimingRequest =
            automation.RequiresEpochTimingRequest ||
            receipt.RequiresEpochTimingRequest;
        bool customerSafe =
            automation.CustomerSafe &&
            receipt.CustomerSafe &&
            receipt.CustomerVisibleReceiptReady &&
            automation.WebportalExportReady &&
            receipt.WebportalExportReady &&
            epochTimingProviderOnly &&
            !workshopCalendarOwnership &&
            !monitorWorkflowExposed &&
            !paymentLiveEnabled &&
            araReviewComplete &&
            renewalReady &&
            !requiresEpochTimingRequest &&
            automation.NativeExecutionReady;

        return new WorkshopAccountGrowthAutomationRecord(
            automationId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.AccountGrowthAutomation",
            automation.AutomationId,
            receipt.ReceiptId,
            receipt.ServiceRequestId,
            receipt.RevenueOutcomeId,
            receipt.DeliveryResultReceiptId,
            receipt.TimingAwareRenewalReceiptId,
            $"retention-from-{suffix}",
            $"referral-from-{suffix}",
            $"growth-plan-from-{suffix}",
            $"growth-follow-up-from-{suffix}",
            $"referral-conversion-from-{suffix}",
            $"growth-acceptance-from-{suffix}",
            $"expansion-request-from-{suffix}",
            $"conversion-status-from-{suffix}",
            $"conversion-receipt-from-{suffix}",
            "account-growth-automation",
            customerSafe ? "account-growth-automation-ready" : "account-growth-automation-blocked",
            "retention-referral-expansion",
            "WORKSHOP account-growth follow-up is ready from the reviewed delivery outcome. EPOCH remains timing-provider-only for appointments and deadlines.",
            "Your WORKSHOP service path is ready for a next-step follow-up. Any future appointment or deadline remains handled through EPOCH.",
            "Review the account-growth automation receipt, then open the repeat service path or referral follow-up without adding live calendar load.",
            customerSafe,
            customerSafe,
            customerSafe,
            epochTimingProviderOnly,
            workshopCalendarOwnership,
            monitorWorkflowExposed,
            paymentLiveEnabled,
            araReviewComplete,
            renewalReady,
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            customerSafe,
            requiresEpochTimingRequest,
            automation.NativeExecutionReady);
    }
}
