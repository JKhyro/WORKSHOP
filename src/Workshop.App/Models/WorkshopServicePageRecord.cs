namespace Workshop.App;

public sealed record WorkshopServicePageRecord(
    string ServicePageId,
    string CreatedAtUtc,
    string SourceSurface,
    string Title,
    string Audience,
    string Promise,
    string RelatedPackageId,
    string RelatedOfferTemplateId,
    string RelatedCrmPipelineId,
    string RelatedEpochScheduleTemplateId,
    string DeliveryType,
    string PriceLabel,
    string IntakeFormKey,
    string IntakeCta,
    string PublicStatus,
    string JapanCopyMode,
    bool AiForwardCopy,
    bool AppOwnedServicePageState,
    bool CustomerVisible,
    bool WebportalExportReady,
    bool CustomerSafeForWebportal,
    bool EpochTimingProviderOnly,
    bool WorkshopCalendarOwnership,
    bool MonitorWorkflowExposed,
    bool PaymentLiveEnabled,
    bool ProviderGoLiveRequested,
    bool LiveProviderEnabled,
    string RevisionHistory,
    string CustomerSafeStatus,
    string OperatorNextAction)
{
    public static IReadOnlyList<WorkshopServicePageRecord> CreateDefaultRecords(
        DateTimeOffset createdAtUtc)
    {
        return new[]
        {
            Create(
                "service-page-submission-001",
                "Adult Submission Review Pack",
                "Adults, university students, and professionals who need written work reviewed without live lesson overhead.",
                "Structured correction, revision priorities, and next-action notes for English writing or document submissions.",
                "pkg-submission-4",
                "offer-template-submission-001",
                "crm-pipeline-submission-review",
                "EPOCH-SCHEDULE-TEMPLATE-001",
                "async-submission-review",
                "JPY 16,000 / 4 submissions",
                "submission-review-request",
                "Request a submission review",
                "ready",
                "v1-service-page-manager-submission",
                "Submission review is available as an async-first service path with clear turnaround and customer-safe status updates.",
                "Keep the public submission page listed; route customer timing through EPOCH and keep internal scoring in the App.",
                createdAtUtc),
            Create(
                "service-page-systems-001",
                "Small Operator CRM And Admin Cleanup",
                "Small operators who need cleaner customer records, follow-up tracking, and practical admin workflow support.",
                "A scoped cleanup plan that turns scattered records into a simple follow-up and delivery tracking workflow.",
                "pkg-systems-block",
                "offer-template-systems-001",
                "crm-pipeline-systems-cleanup",
                "EPOCH-SCHEDULE-TEMPLATE-003",
                "scoped-systems-review",
                "Scoped quote after fit review",
                "systems-review-request",
                "Request a systems review",
                "fit-review",
                "v1-service-page-manager-systems",
                "Systems cleanup is available after a short scope and fit review.",
                "Keep this page public-safe but fit-review gated until the systems checklist and delivery workspace are fully repeatable.",
                createdAtUtc)
        };
    }

    private static WorkshopServicePageRecord Create(
        string servicePageId,
        string title,
        string audience,
        string promise,
        string relatedPackageId,
        string relatedOfferTemplateId,
        string relatedCrmPipelineId,
        string relatedEpochScheduleTemplateId,
        string deliveryType,
        string priceLabel,
        string intakeFormKey,
        string intakeCta,
        string publicStatus,
        string revisionHistory,
        string customerSafeStatus,
        string operatorNextAction,
        DateTimeOffset createdAtUtc)
    {
        bool customerSafeForWebportal =
            !string.IsNullOrWhiteSpace(title) &&
            !string.IsNullOrWhiteSpace(audience) &&
            !string.IsNullOrWhiteSpace(promise) &&
            !string.IsNullOrWhiteSpace(relatedPackageId) &&
            relatedEpochScheduleTemplateId.StartsWith("EPOCH-SCHEDULE-TEMPLATE-", StringComparison.Ordinal) &&
            !string.IsNullOrWhiteSpace(deliveryType) &&
            !string.IsNullOrWhiteSpace(priceLabel) &&
            !string.IsNullOrWhiteSpace(intakeFormKey) &&
            !string.IsNullOrWhiteSpace(intakeCta);

        return new WorkshopServicePageRecord(
            servicePageId,
            createdAtUtc.ToString("O"),
            "WORKSHOP.App.ServicePageManager",
            title,
            audience,
            promise,
            relatedPackageId,
            relatedOfferTemplateId,
            relatedCrmPipelineId,
            relatedEpochScheduleTemplateId,
            deliveryType,
            priceLabel,
            intakeFormKey,
            intakeCta,
            publicStatus,
            "ai-neutral",
            false,
            true,
            true,
            customerSafeForWebportal,
            customerSafeForWebportal,
            true,
            false,
            false,
            false,
            false,
            false,
            revisionHistory,
            customerSafeStatus,
            operatorNextAction);
    }
}
