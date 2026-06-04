using Workshop.App.Native;
using Workshop.App.Services;

namespace Workshop.App.ViewModels;

public sealed class MainWindowViewModel
{
    private MainWindowViewModel(
        WorkshopShellSnapshot snapshot,
        WorkshopRevenueCommandResult command,
        WorkshopRevenueExecutionReceipt execution,
        WorkshopRevenueExecutionHistoryEntry? historyEntry,
        IReadOnlyList<WorkshopRevenueExecutionHistoryEntry> history,
        string historyPath,
        WorkshopWebportalServiceRequest? serviceInboxRequest,
        IReadOnlyList<WorkshopWebportalServiceRequest> serviceInbox,
        string serviceInboxPath,
        WorkshopServiceRevenueCommandReceipt? serviceCommandReceipt,
        IReadOnlyList<WorkshopServiceRevenueCommandReceipt> serviceCommandReceipts,
        string serviceCommandReceiptPath,
        WorkshopAraReviewQueueRecord? araReviewQueue,
        IReadOnlyList<WorkshopAraReviewQueueRecord> araReviewQueueRecords,
        string araReviewQueuePath,
        WorkshopAraOperatorReviewDecision? araReviewDecision,
        IReadOnlyList<WorkshopAraOperatorReviewDecision> araReviewDecisions,
        string araReviewDecisionPath,
        WorkshopAraReviewStatusReceipt? araReviewStatusReceipt,
        IReadOnlyList<WorkshopAraReviewStatusReceipt> araReviewStatusReceipts,
        string araReviewStatusReceiptPath,
        WorkshopAraMethodMaterializationRecord? araMethodMaterialization,
        IReadOnlyList<WorkshopAraMethodMaterializationRecord> araMethodMaterializations,
        string araMethodMaterializationPath,
        WorkshopAraMaterializationReceipt? araMaterializationReceipt,
        IReadOnlyList<WorkshopAraMaterializationReceipt> araMaterializationReceipts,
        string araMaterializationReceiptPath,
        WorkshopServiceMaterialReuseRecord? serviceMaterialReuse,
        IReadOnlyList<WorkshopServiceMaterialReuseRecord> serviceMaterialReuseRecords,
        string serviceMaterialReusePath,
        WorkshopServiceMaterialReuseReceipt? serviceMaterialReuseReceipt,
        IReadOnlyList<WorkshopServiceMaterialReuseReceipt> serviceMaterialReuseReceipts,
        string serviceMaterialReuseReceiptPath,
        WorkshopPackageDeliveryChecklistRecord? packageDeliveryChecklist,
        IReadOnlyList<WorkshopPackageDeliveryChecklistRecord> packageDeliveryChecklists,
        string packageDeliveryChecklistPath,
        WorkshopPackageDeliveryChecklistReceipt? packageDeliveryChecklistReceipt,
        IReadOnlyList<WorkshopPackageDeliveryChecklistReceipt> packageDeliveryChecklistReceipts,
        string packageDeliveryChecklistReceiptPath,
        WorkshopPackageDeliveryChecklistAutomationRecord? packageDeliveryChecklistAutomation,
        IReadOnlyList<WorkshopPackageDeliveryChecklistAutomationRecord> packageDeliveryChecklistAutomations,
        string packageDeliveryChecklistAutomationPath,
        WorkshopPackageDeliveryChecklistAutomationReceipt? packageDeliveryChecklistAutomationReceipt,
        IReadOnlyList<WorkshopPackageDeliveryChecklistAutomationReceipt> packageDeliveryChecklistAutomationReceipts,
        string packageDeliveryChecklistAutomationReceiptPath,
        WorkshopPackageDeliveryExecutionRecord? packageDeliveryExecution,
        IReadOnlyList<WorkshopPackageDeliveryExecutionRecord> packageDeliveryExecutions,
        string packageDeliveryExecutionPath,
        WorkshopPackageDeliveryExecutionReceipt? packageDeliveryExecutionReceipt,
        IReadOnlyList<WorkshopPackageDeliveryExecutionReceipt> packageDeliveryExecutionReceipts,
        string packageDeliveryExecutionReceiptPath,
        WorkshopPackageDeliveryFollowUpRenewalRecord? packageDeliveryFollowUpRenewal,
        IReadOnlyList<WorkshopPackageDeliveryFollowUpRenewalRecord> packageDeliveryFollowUpRenewals,
        string packageDeliveryFollowUpRenewalPath,
        WorkshopPackageDeliveryFollowUpRenewalReceipt? packageDeliveryFollowUpRenewalReceipt,
        IReadOnlyList<WorkshopPackageDeliveryFollowUpRenewalReceipt> packageDeliveryFollowUpRenewalReceipts,
        string packageDeliveryFollowUpRenewalReceiptPath,
        WorkshopPackageDeliveryQualityOutcomeRecord? packageDeliveryQualityOutcome,
        IReadOnlyList<WorkshopPackageDeliveryQualityOutcomeRecord> packageDeliveryQualityOutcomes,
        string packageDeliveryQualityOutcomePath,
        WorkshopPackageDeliveryQualityOutcomeReceipt? packageDeliveryQualityOutcomeReceipt,
        IReadOnlyList<WorkshopPackageDeliveryQualityOutcomeReceipt> packageDeliveryQualityOutcomeReceipts,
        string packageDeliveryQualityOutcomeReceiptPath,
        WorkshopPackageDeliveryAccountGrowthLinkageRecord? packageDeliveryAccountGrowthLinkage,
        IReadOnlyList<WorkshopPackageDeliveryAccountGrowthLinkageRecord> packageDeliveryAccountGrowthLinkages,
        string packageDeliveryAccountGrowthLinkagePath,
        WorkshopPackageDeliveryAccountGrowthReceipt? packageDeliveryAccountGrowthReceipt,
        IReadOnlyList<WorkshopPackageDeliveryAccountGrowthReceipt> packageDeliveryAccountGrowthReceipts,
        string packageDeliveryAccountGrowthReceiptPath,
        WorkshopPackageDeliveryRetentionReportRecord? packageDeliveryRetentionReport,
        IReadOnlyList<WorkshopPackageDeliveryRetentionReportRecord> packageDeliveryRetentionReports,
        string packageDeliveryRetentionReportPath,
        WorkshopPackageDeliveryRetentionReportReceipt? packageDeliveryRetentionReportReceipt,
        IReadOnlyList<WorkshopPackageDeliveryRetentionReportReceipt> packageDeliveryRetentionReportReceipts,
        string packageDeliveryRetentionReportReceiptPath,
        WorkshopPackageDeliveryGrowthActionRecord? packageDeliveryGrowthAction,
        IReadOnlyList<WorkshopPackageDeliveryGrowthActionRecord> packageDeliveryGrowthActions,
        string packageDeliveryGrowthActionPath,
        WorkshopPackageDeliveryGrowthActionReceipt? packageDeliveryGrowthActionReceipt,
        IReadOnlyList<WorkshopPackageDeliveryGrowthActionReceipt> packageDeliveryGrowthActionReceipts,
        string packageDeliveryGrowthActionReceiptPath,
        WorkshopRevenueOperationsBoardSnapshot operationsBoard,
        WorkshopCustomerServiceStatusRecord? statusFeedback,
        IReadOnlyList<WorkshopCustomerServiceStatusRecord> statusFeedbackRecords,
        string statusFeedbackPath,
        WorkshopServiceLifecycleAction? lifecycleAction,
        IReadOnlyList<WorkshopServiceLifecycleAction> lifecycleActions,
        string lifecycleActionPath,
        WorkshopServiceLifecycleReceipt? lifecycleReceipt,
        IReadOnlyList<WorkshopServiceLifecycleReceipt> lifecycleReceipts,
        string lifecycleReceiptPath,
        WorkshopServiceLifecycleStatusRecord? lifecycleStatus,
        IReadOnlyList<WorkshopServiceLifecycleStatusRecord> lifecycleStatuses,
        string lifecycleStatusPath,
        WorkshopEpochRevisedCalendarTimingPayload? revisedTimingPayload,
        IReadOnlyList<WorkshopEpochRevisedCalendarTimingPayload> revisedTimingPayloads,
        string revisedTimingPayloadPath,
        WorkshopRevisedCalendarTimingReceipt? revisedTimingReceipt,
        IReadOnlyList<WorkshopRevisedCalendarTimingReceipt> revisedTimingReceipts,
        string revisedTimingReceiptPath,
        WorkshopRevisedCalendarTimingStatusRecord? revisedTimingStatus,
        IReadOnlyList<WorkshopRevisedCalendarTimingStatusRecord> revisedTimingStatuses,
        string revisedTimingStatusPath,
        WorkshopTimingAwareServiceFollowUp? timingAwareFollowUp,
        IReadOnlyList<WorkshopTimingAwareServiceFollowUp> timingAwareFollowUps,
        string timingAwareFollowUpPath,
        WorkshopTimingAwareRenewalReceipt? timingAwareRenewalReceipt,
        IReadOnlyList<WorkshopTimingAwareRenewalReceipt> timingAwareRenewalReceipts,
        string timingAwareRenewalReceiptPath,
        WorkshopDeliveryOutcomeAutomationRecord? deliveryOutcomeAutomation,
        IReadOnlyList<WorkshopDeliveryOutcomeAutomationRecord> deliveryOutcomeAutomations,
        string deliveryOutcomeAutomationPath,
        WorkshopDeliveryOutcomeAutomationReceipt? deliveryOutcomeAutomationReceipt,
        IReadOnlyList<WorkshopDeliveryOutcomeAutomationReceipt> deliveryOutcomeAutomationReceipts,
        string deliveryOutcomeAutomationReceiptPath,
        WorkshopAccountGrowthAutomationRecord? accountGrowthAutomation,
        IReadOnlyList<WorkshopAccountGrowthAutomationRecord> accountGrowthAutomations,
        string accountGrowthAutomationPath,
        WorkshopAccountGrowthAutomationReceipt? accountGrowthAutomationReceipt,
        IReadOnlyList<WorkshopAccountGrowthAutomationReceipt> accountGrowthAutomationReceipts,
        string accountGrowthAutomationReceiptPath)
    {
        ProductName = snapshot.ProductName;
        CoreStatus = snapshot.CoreStatus;
        RevenueLane = snapshot.RevenueLane;
        OfferExperimentStatus = $"Offer experiment status: {snapshot.OfferExperimentStatus}";
        DeliveryQueueStatus = snapshot.DeliveryQueueStatus;
        CustomerSafeStatus = snapshot.CustomerSafeStatus;
        MonthlyRevenueTarget = $"JPY {snapshot.MonthlyRevenueTargetJpy:N0} monthly target";
        LowLaborSummary = $"Low-labor score {snapshot.LowLaborScore}/100 with {snapshot.ExpectedOperatorMinutes} expected operator minutes for the first test.";
        HumanReviewStatus = snapshot.AraHumanReviewRequired
            ? "ARA packets require human review before customer-visible output."
            : "ARA packets are blocked until human review is restored.";
        BoundaryStatus = snapshot.EpochBoundaryEnforced && snapshot.MonitorBoundaryEnforced
            ? "EPOCH timing and MONITOR boundaries enforced"
            : "boundary blocked";
        RevenueCommandSummary = $"{command.ServiceRequestId} -> {command.OfferExperimentId} -> {command.RevenueReceiptId}";
        RevenueCommandEvidence = $"ROI {command.RoiRecordId}; ARA packet {command.AraPacketId}; delivery log {command.DeliveryLogId}.";
        RevenueCommandStatus = command.NativeCommandReady &&
            command.LowLaborViable &&
            command.RoiTestReady &&
            command.AraReviewRequired &&
            command.OwnerTimeBudgetClear &&
            command.EpochTimingRequested
                ? "native revenue command ready"
                : "native revenue command blocked";
        RevenueCommandCustomerSafeStatus = command.CustomerSafeStatus;
        EpochHandoffStatus = $"EPOCH handoff status: {command.EpochHandoffStatus}";
        RevenueExecutionSummary = $"{execution.IntentKind}: {execution.ServiceRequestId} -> {execution.RevenueOutcomeId}";
        RevenueExecutionEvidence = $"Receipt {execution.DeliveryResultReceiptId}; ARA review {execution.AraReviewReceiptId}; EPOCH handoff {execution.EpochHandoffId}.";
        RevenueExecutionStatus = execution.NativeExecutionReady &&
            execution.ExecutedLocally &&
            execution.CustomerVisibleReceiptReady &&
            execution.AraOperatorReviewComplete &&
            execution.EpochTimingRequested &&
            !execution.MonitorWorkflowExposed
                ? "native revenue execution receipt ready"
                : "native revenue execution receipt blocked";
        RevenueExecutionCustomerSafeStatus = execution.CustomerSafeStatus;
        RevenueExecutionHistoryCount = history.Count;
        RevenueExecutionHistorySummary = $"{history.Count} local revenue execution receipt(s) persisted in the WORKSHOP App ledger.";
        RevenueExecutionHistoryLocation = historyPath;
        LastRevenueExecutionHistoryStatus = historyEntry is not null
            ? $"Last history {historyEntry.HistoryId}: {historyEntry.IntentKind} -> {historyEntry.ExecutionStatus}; customer receipt ready: {historyEntry.CustomerVisibleReceiptReady.ToString().ToLowerInvariant()}."
            : "No new native revenue execution history was persisted in this shell load.";
        ServiceInboxCount = serviceInbox.Count;
        ServiceInboxSummary = $"{serviceInbox.Count} customer-safe Webportal service request(s) in the WORKSHOP App inbox.";
        ServiceInboxLocation = serviceInboxPath;
        ServiceInboxStatus = serviceInboxRequest is not null
            ? $"Latest request {serviceInboxRequest.RequestId}: {serviceInboxRequest.ServiceLane} is {serviceInboxRequest.Status}; EPOCH timing provider only: {serviceInboxRequest.EpochTimingProviderOnly.ToString().ToLowerInvariant()}."
            : "No Webportal service request was imported into the local WORKSHOP App inbox.";
        ServiceCommandReceiptCount = serviceCommandReceipts.Count;
        ServiceCommandReceiptSummary = $"{serviceCommandReceipts.Count} Webportal service-to-native revenue command receipt(s) in the WORKSHOP App ledger.";
        ServiceCommandReceiptLocation = serviceCommandReceiptPath;
        ServiceCommandReceiptStatus = serviceCommandReceipt is not null
            ? $"Latest service command {serviceCommandReceipt.RequestId} -> {serviceCommandReceipt.DeliveryResultReceiptId}; EPOCH timing provider only: {serviceCommandReceipt.EpochTimingProviderOnly.ToString().ToLowerInvariant()}."
            : "No Webportal service request has been linked to a native revenue command receipt in this shell load.";
        AraReviewQueueCount = araReviewQueueRecords.Count;
        AraReviewQueueSummary = $"{araReviewQueueRecords.Count} App-owned ARA review queue record(s) in the WORKSHOP App ledger.";
        AraReviewQueueLocation = araReviewQueuePath;
        AraReviewQueueStatus = araReviewQueue is not null
            ? $"Latest ARA review queue {araReviewQueue.QueueId}: {araReviewQueue.Status}; operator review complete: {araReviewQueue.AraReviewComplete.ToString().ToLowerInvariant()}."
            : "No ARA review queue record was prepared from native revenue execution in this shell load.";
        AraReviewDecisionCount = araReviewDecisions.Count;
        AraReviewDecisionSummary = $"{araReviewDecisions.Count} App-owned ARA operator review decision(s) in the WORKSHOP App ledger.";
        AraReviewDecisionLocation = araReviewDecisionPath;
        AraReviewDecisionStatus = araReviewDecision is not null
            ? $"Latest ARA review decision {araReviewDecision.DecisionId}: {araReviewDecision.Status}; approved: {araReviewDecision.Approved.ToString().ToLowerInvariant()}."
            : "No ARA operator review decision was persisted in this shell load.";
        AraReviewStatusReceiptCount = araReviewStatusReceipts.Count;
        AraReviewStatusReceiptSummary = $"{araReviewStatusReceipts.Count} customer-safe ARA review status receipt(s) in the WORKSHOP App ledger.";
        AraReviewStatusReceiptLocation = araReviewStatusReceiptPath;
        AraReviewStatusReceiptStatus = araReviewStatusReceipt is not null
            ? $"Latest ARA review status receipt {araReviewStatusReceipt.ReceiptId}: {araReviewStatusReceipt.Status}; Webportal export ready: {araReviewStatusReceipt.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe ARA review status receipt was exported in this shell load.";
        AraReviewStatusCustomerMessage = araReviewStatusReceipt is not null
            ? araReviewStatusReceipt.CustomerSafeMessage
            : "The ARA review Webportal status loop is waiting for an approved operator review decision.";
        AraMethodMaterializationCount = araMethodMaterializations.Count;
        AraMethodMaterializationSummary = $"{araMethodMaterializations.Count} App-owned ARA method materialization record(s) in the WORKSHOP App ledger.";
        AraMethodMaterializationLocation = araMethodMaterializationPath;
        AraMethodMaterializationStatus = araMethodMaterialization is not null
            ? $"Latest ARA method materialization {araMethodMaterialization.MaterializationId}: {araMethodMaterialization.Status}; reusable method ready: {araMethodMaterialization.ReusableMethodReady.ToString().ToLowerInvariant()}."
            : "No ARA method materialization record was prepared from the approved operator review.";
        AraMaterializationReceiptCount = araMaterializationReceipts.Count;
        AraMaterializationReceiptSummary = $"{araMaterializationReceipts.Count} customer-safe ARA materialization receipt(s) in the WORKSHOP App ledger.";
        AraMaterializationReceiptLocation = araMaterializationReceiptPath;
        AraMaterializationReceiptStatus = araMaterializationReceipt is not null
            ? $"Latest ARA materialization receipt {araMaterializationReceipt.ReceiptId}: {araMaterializationReceipt.Status}; Webportal export ready: {araMaterializationReceipt.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe ARA materialization receipt was exported in this shell load.";
        AraMaterializationCustomerMessage = araMaterializationReceipt is not null
            ? araMaterializationReceipt.CustomerSafeMessage
            : "The ARA materialization Webportal status loop is waiting for an approved reusable method record.";
        ServiceMaterialReuseCount = serviceMaterialReuseRecords.Count;
        ServiceMaterialReuseSummary = $"{serviceMaterialReuseRecords.Count} App-owned service material reuse record(s) in the WORKSHOP App ledger.";
        ServiceMaterialReuseLocation = serviceMaterialReusePath;
        ServiceMaterialReuseStatus = serviceMaterialReuse is not null
            ? $"Latest service material reuse {serviceMaterialReuse.ReuseId}: {serviceMaterialReuse.Status}; package support ready: {serviceMaterialReuse.PackageSupportReady.ToString().ToLowerInvariant()}."
            : "No App-owned service material reuse record was prepared from the customer-safe ARA materialization receipt.";
        ServiceMaterialReuseReceiptCount = serviceMaterialReuseReceipts.Count;
        ServiceMaterialReuseReceiptSummary = $"{serviceMaterialReuseReceipts.Count} customer-safe service material reuse receipt(s) in the WORKSHOP App ledger.";
        ServiceMaterialReuseReceiptLocation = serviceMaterialReuseReceiptPath;
        ServiceMaterialReuseReceiptStatus = serviceMaterialReuseReceipt is not null
            ? $"Latest service material reuse receipt {serviceMaterialReuseReceipt.ReceiptId}: {serviceMaterialReuseReceipt.Status}; Webportal export ready: {serviceMaterialReuseReceipt.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe service material reuse receipt was exported in this shell load.";
        ServiceMaterialReuseCustomerMessage = serviceMaterialReuseReceipt is not null
            ? serviceMaterialReuseReceipt.CustomerSafeMessage
            : "The service material reuse Webportal status loop is waiting for reusable package support.";
        PackageDeliveryChecklistCount = packageDeliveryChecklists.Count;
        PackageDeliveryChecklistSummary = $"{packageDeliveryChecklists.Count} App-owned package delivery checklist record(s) in the WORKSHOP App ledger.";
        PackageDeliveryChecklistLocation = packageDeliveryChecklistPath;
        PackageDeliveryChecklistStatus = packageDeliveryChecklist is not null
            ? $"Latest package delivery checklist {packageDeliveryChecklist.ChecklistId}: {packageDeliveryChecklist.Status}; checklist ready: {packageDeliveryChecklist.ChecklistReady.ToString().ToLowerInvariant()}."
            : "No App-owned package delivery checklist was prepared from reusable material support.";
        PackageDeliveryChecklistReceiptCount = packageDeliveryChecklistReceipts.Count;
        PackageDeliveryChecklistReceiptSummary = $"{packageDeliveryChecklistReceipts.Count} customer-safe package delivery checklist receipt(s) in the WORKSHOP App ledger.";
        PackageDeliveryChecklistReceiptLocation = packageDeliveryChecklistReceiptPath;
        PackageDeliveryChecklistReceiptStatus = packageDeliveryChecklistReceipt is not null
            ? $"Latest package delivery checklist receipt {packageDeliveryChecklistReceipt.ReceiptId}: {packageDeliveryChecklistReceipt.Status}; Webportal export ready: {packageDeliveryChecklistReceipt.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe package delivery checklist receipt was exported in this shell load.";
        PackageDeliveryChecklistCustomerMessage = packageDeliveryChecklistReceipt is not null
            ? packageDeliveryChecklistReceipt.CustomerSafeMessage
            : "The package delivery checklist Webportal status loop is waiting for repeatable package delivery support.";
        PackageDeliveryChecklistAutomationCount = packageDeliveryChecklistAutomations.Count;
        PackageDeliveryChecklistAutomationSummary = $"{packageDeliveryChecklistAutomations.Count} App-owned package delivery checklist automation record(s) in the WORKSHOP App ledger.";
        PackageDeliveryChecklistAutomationLocation = packageDeliveryChecklistAutomationPath;
        PackageDeliveryChecklistAutomationStatus = packageDeliveryChecklistAutomation is not null
            ? $"Latest package delivery automation {packageDeliveryChecklistAutomation.AutomationId}: {packageDeliveryChecklistAutomation.Status}; automation ready: {packageDeliveryChecklistAutomation.AutomationReady.ToString().ToLowerInvariant()}."
            : "No App-owned package delivery checklist automation was prepared from checklist support.";
        PackageDeliveryChecklistAutomationReceiptCount = packageDeliveryChecklistAutomationReceipts.Count;
        PackageDeliveryChecklistAutomationReceiptSummary = $"{packageDeliveryChecklistAutomationReceipts.Count} customer-safe package delivery automation receipt(s) in the WORKSHOP App ledger.";
        PackageDeliveryChecklistAutomationReceiptLocation = packageDeliveryChecklistAutomationReceiptPath;
        PackageDeliveryChecklistAutomationReceiptStatus = packageDeliveryChecklistAutomationReceipt is not null
            ? $"Latest package delivery automation receipt {packageDeliveryChecklistAutomationReceipt.ReceiptId}: {packageDeliveryChecklistAutomationReceipt.Status}; Webportal export ready: {packageDeliveryChecklistAutomationReceipt.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe package delivery automation receipt was exported in this shell load.";
        PackageDeliveryChecklistAutomationCustomerMessage = packageDeliveryChecklistAutomationReceipt is not null
            ? packageDeliveryChecklistAutomationReceipt.CustomerSafeMessage
            : "The package delivery automation Webportal status loop is waiting for repeatable package delivery automation.";
        PackageDeliveryExecutionCount = packageDeliveryExecutions.Count;
        PackageDeliveryExecutionSummary = $"{packageDeliveryExecutions.Count} App-owned package delivery execution record(s) in the WORKSHOP App ledger.";
        PackageDeliveryExecutionLocation = packageDeliveryExecutionPath;
        PackageDeliveryExecutionStatus = packageDeliveryExecution is not null
            ? $"Latest package delivery execution {packageDeliveryExecution.ExecutionId}: {packageDeliveryExecution.Status}; execution ready: {packageDeliveryExecution.ExecutionReady.ToString().ToLowerInvariant()}."
            : "No App-owned package delivery execution was prepared from package delivery automation.";
        PackageDeliveryExecutionReceiptCount = packageDeliveryExecutionReceipts.Count;
        PackageDeliveryExecutionReceiptSummary = $"{packageDeliveryExecutionReceipts.Count} customer-safe package delivery execution receipt(s) in the WORKSHOP App ledger.";
        PackageDeliveryExecutionReceiptLocation = packageDeliveryExecutionReceiptPath;
        PackageDeliveryExecutionReceiptStatus = packageDeliveryExecutionReceipt is not null
            ? $"Latest package delivery execution receipt {packageDeliveryExecutionReceipt.ReceiptId}: {packageDeliveryExecutionReceipt.Status}; Webportal export ready: {packageDeliveryExecutionReceipt.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe package delivery execution receipt was exported in this shell load.";
        PackageDeliveryExecutionCustomerMessage = packageDeliveryExecutionReceipt is not null
            ? packageDeliveryExecutionReceipt.CustomerSafeMessage
            : "The package delivery execution Webportal status loop is waiting for repeatable package delivery execution.";
        PackageDeliveryFollowUpRenewalCount = packageDeliveryFollowUpRenewals.Count;
        PackageDeliveryFollowUpRenewalSummary = $"{packageDeliveryFollowUpRenewals.Count} App-owned package delivery follow-up/renewal record(s) in the WORKSHOP App ledger.";
        PackageDeliveryFollowUpRenewalLocation = packageDeliveryFollowUpRenewalPath;
        PackageDeliveryFollowUpRenewalStatus = packageDeliveryFollowUpRenewal is not null
            ? $"Latest package delivery follow-up/renewal {packageDeliveryFollowUpRenewal.FollowUpId}: {packageDeliveryFollowUpRenewal.Status}; renewal ready: {packageDeliveryFollowUpRenewal.RenewalReady.ToString().ToLowerInvariant()}."
            : "No App-owned package delivery follow-up/renewal was prepared from an execution receipt.";
        PackageDeliveryFollowUpRenewalReceiptCount = packageDeliveryFollowUpRenewalReceipts.Count;
        PackageDeliveryFollowUpRenewalReceiptSummary = $"{packageDeliveryFollowUpRenewalReceipts.Count} customer-safe package delivery follow-up/renewal receipt(s) in the WORKSHOP App ledger.";
        PackageDeliveryFollowUpRenewalReceiptLocation = packageDeliveryFollowUpRenewalReceiptPath;
        PackageDeliveryFollowUpRenewalReceiptStatus = packageDeliveryFollowUpRenewalReceipt is not null
            ? $"Latest package delivery follow-up/renewal receipt {packageDeliveryFollowUpRenewalReceipt.ReceiptId}: {packageDeliveryFollowUpRenewalReceipt.Status}; Webportal export ready: {packageDeliveryFollowUpRenewalReceipt.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe package delivery follow-up/renewal receipt was exported in this shell load.";
        PackageDeliveryFollowUpRenewalCustomerMessage = packageDeliveryFollowUpRenewalReceipt is not null
            ? packageDeliveryFollowUpRenewalReceipt.CustomerSafeMessage
            : "The package delivery follow-up/renewal Webportal status loop is waiting for repeatable package delivery execution.";
        PackageDeliveryQualityOutcomeCount = packageDeliveryQualityOutcomes.Count;
        PackageDeliveryQualityOutcomeSummary = $"{packageDeliveryQualityOutcomes.Count} App-owned package delivery quality/outcome record(s) in the WORKSHOP App ledger.";
        PackageDeliveryQualityOutcomeLocation = packageDeliveryQualityOutcomePath;
        PackageDeliveryQualityOutcomeStatus = packageDeliveryQualityOutcome is not null
            ? $"Latest package delivery quality/outcome {packageDeliveryQualityOutcome.OutcomeId}: {packageDeliveryQualityOutcome.Status}; outcome ready: {packageDeliveryQualityOutcome.OutcomeReady.ToString().ToLowerInvariant()}."
            : "No App-owned package delivery quality/outcome was prepared from execution and follow-up receipts.";
        PackageDeliveryQualityOutcomeReceiptCount = packageDeliveryQualityOutcomeReceipts.Count;
        PackageDeliveryQualityOutcomeReceiptSummary = $"{packageDeliveryQualityOutcomeReceipts.Count} customer-safe package delivery quality/outcome receipt(s) in the WORKSHOP App ledger.";
        PackageDeliveryQualityOutcomeReceiptLocation = packageDeliveryQualityOutcomeReceiptPath;
        PackageDeliveryQualityOutcomeReceiptStatus = packageDeliveryQualityOutcomeReceipt is not null
            ? $"Latest package delivery quality/outcome receipt {packageDeliveryQualityOutcomeReceipt.ReceiptId}: {packageDeliveryQualityOutcomeReceipt.Status}; Webportal export ready: {packageDeliveryQualityOutcomeReceipt.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe package delivery quality/outcome receipt was exported in this shell load.";
        PackageDeliveryQualityOutcomeCustomerMessage = packageDeliveryQualityOutcomeReceipt is not null
            ? packageDeliveryQualityOutcomeReceipt.CustomerSafeMessage
            : "The package delivery quality/outcome Webportal status loop is waiting for repeatable execution and follow-up receipts.";
        PackageDeliveryAccountGrowthLinkageCount = packageDeliveryAccountGrowthLinkages.Count;
        PackageDeliveryAccountGrowthLinkageSummary = $"{packageDeliveryAccountGrowthLinkages.Count} App-owned package delivery account-growth linkage record(s) in the WORKSHOP App ledger.";
        PackageDeliveryAccountGrowthLinkageLocation = packageDeliveryAccountGrowthLinkagePath;
        PackageDeliveryAccountGrowthLinkageStatus = packageDeliveryAccountGrowthLinkage is not null
            ? $"Latest package delivery account-growth linkage {packageDeliveryAccountGrowthLinkage.LinkageId}: {packageDeliveryAccountGrowthLinkage.Status}; account-growth ready: {packageDeliveryAccountGrowthLinkage.AccountGrowthReady.ToString().ToLowerInvariant()}."
            : "No App-owned package delivery account-growth linkage was prepared from a quality/outcome receipt.";
        PackageDeliveryAccountGrowthReceiptCount = packageDeliveryAccountGrowthReceipts.Count;
        PackageDeliveryAccountGrowthReceiptSummary = $"{packageDeliveryAccountGrowthReceipts.Count} customer-safe package delivery account-growth receipt(s) in the WORKSHOP App ledger.";
        PackageDeliveryAccountGrowthReceiptLocation = packageDeliveryAccountGrowthReceiptPath;
        PackageDeliveryAccountGrowthReceiptStatus = packageDeliveryAccountGrowthReceipt is not null
            ? $"Latest package delivery account-growth receipt {packageDeliveryAccountGrowthReceipt.ReceiptId}: {packageDeliveryAccountGrowthReceipt.Status}; Webportal export ready: {packageDeliveryAccountGrowthReceipt.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe package delivery account-growth receipt was exported in this shell load.";
        PackageDeliveryAccountGrowthCustomerMessage = packageDeliveryAccountGrowthReceipt is not null
            ? packageDeliveryAccountGrowthReceipt.CustomerSafeMessage
            : "The package delivery account-growth Webportal status loop is waiting for repeatable quality/outcome receipts.";
        PackageDeliveryRetentionReportCount = packageDeliveryRetentionReports.Count;
        PackageDeliveryRetentionReportSummary = $"{packageDeliveryRetentionReports.Count} App-owned package delivery retention report record(s) in the WORKSHOP App ledger.";
        PackageDeliveryRetentionReportLocation = packageDeliveryRetentionReportPath;
        PackageDeliveryRetentionReportStatus = packageDeliveryRetentionReport is not null
            ? $"Latest package delivery retention report {packageDeliveryRetentionReport.ReportId}: {packageDeliveryRetentionReport.Status}; retention reporting ready: {packageDeliveryRetentionReport.RetentionReportingReady.ToString().ToLowerInvariant()}."
            : "No App-owned package delivery retention report was prepared from account-growth and quality/outcome receipts.";
        PackageDeliveryRetentionReportReceiptCount = packageDeliveryRetentionReportReceipts.Count;
        PackageDeliveryRetentionReportReceiptSummary = $"{packageDeliveryRetentionReportReceipts.Count} customer-safe package delivery retention-report receipt(s) in the WORKSHOP App ledger.";
        PackageDeliveryRetentionReportReceiptLocation = packageDeliveryRetentionReportReceiptPath;
        PackageDeliveryRetentionReportReceiptStatus = packageDeliveryRetentionReportReceipt is not null
            ? $"Latest package delivery retention-report receipt {packageDeliveryRetentionReportReceipt.ReceiptId}: {packageDeliveryRetentionReportReceipt.Status}; Webportal export ready: {packageDeliveryRetentionReportReceipt.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe package delivery retention-report receipt was exported in this shell load.";
        PackageDeliveryRetentionReportCustomerMessage = packageDeliveryRetentionReportReceipt is not null
            ? packageDeliveryRetentionReportReceipt.CustomerSafeMessage
            : "The package delivery retention-report Webportal status loop is waiting for matched account-growth and quality/outcome receipts.";
        PackageDeliveryGrowthActionCount = packageDeliveryGrowthActions.Count;
        PackageDeliveryGrowthActionSummary = $"{packageDeliveryGrowthActions.Count} App-owned package delivery growth action record(s) in the WORKSHOP App ledger.";
        PackageDeliveryGrowthActionLocation = packageDeliveryGrowthActionPath;
        PackageDeliveryGrowthActionStatus = packageDeliveryGrowthAction is not null
            ? $"Latest package delivery growth action {packageDeliveryGrowthAction.ActionId}: {packageDeliveryGrowthAction.Status}; repeat/referral/expansion ready: {packageDeliveryGrowthAction.GrowthActionReady.ToString().ToLowerInvariant()}."
            : "No App-owned package delivery growth action was prepared from retention reporting.";
        PackageDeliveryGrowthActionReceiptCount = packageDeliveryGrowthActionReceipts.Count;
        PackageDeliveryGrowthActionReceiptSummary = $"{packageDeliveryGrowthActionReceipts.Count} customer-safe package delivery growth action receipt(s) in the WORKSHOP App ledger.";
        PackageDeliveryGrowthActionReceiptLocation = packageDeliveryGrowthActionReceiptPath;
        PackageDeliveryGrowthActionReceiptStatus = packageDeliveryGrowthActionReceipt is not null
            ? $"Latest package delivery growth-action receipt {packageDeliveryGrowthActionReceipt.ReceiptId}: {packageDeliveryGrowthActionReceipt.Status}; Webportal export ready: {packageDeliveryGrowthActionReceipt.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe package delivery growth-action receipt was exported in this shell load.";
        PackageDeliveryGrowthActionCustomerMessage = packageDeliveryGrowthActionReceipt is not null
            ? packageDeliveryGrowthActionReceipt.CustomerSafeMessage
            : "The package delivery growth-action Webportal status loop is waiting for retention-report readiness.";
        OperationsBoardStatus = operationsBoard.BoardStatus;
        OperationsBoardNextAction = operationsBoard.OperatorNextAction;
        OperationsBoardPipelineSummary = operationsBoard.PipelineSummary;
        OperationsBoardLatestServiceRequestStatus = operationsBoard.LatestServiceRequestStatus;
        OperationsBoardLatestCommandStatus = operationsBoard.LatestCommandStatus;
        OperationsBoardLatestRevenueExecutionStatus = operationsBoard.LatestRevenueExecutionStatus;
        OperationsBoardSafetySummary = operationsBoard.SafetySummary;
        OperationsBoardLedgerSummary = operationsBoard.LedgerSummary;
        OperationsBoardReadyForOperatorReview = operationsBoard.ReadyForOperatorReview
            ? "operator review ready"
            : "operator review blocked";
        CustomerStatusFeedbackCount = statusFeedbackRecords.Count;
        CustomerStatusFeedbackSummary = $"{statusFeedbackRecords.Count} customer-safe service status export(s) in the WORKSHOP App ledger.";
        CustomerStatusFeedbackLocation = statusFeedbackPath;
        CustomerStatusFeedbackStatus = statusFeedback is not null
            ? $"Latest status {statusFeedback.StatusId}: {statusFeedback.Status}; Webportal export ready: {statusFeedback.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe service status feedback was exported in this shell load.";
        CustomerStatusFeedbackMessage = statusFeedback is not null
            ? statusFeedback.CustomerSafeMessage
            : "The customer-safe Webportal service status loop is waiting for a linked request and native revenue execution.";
        ServiceLifecycleActionCount = lifecycleActions.Count;
        ServiceLifecycleActionSummary = $"{lifecycleActions.Count} customer-safe service lifecycle action(s) in the WORKSHOP App queue.";
        ServiceLifecycleActionLocation = lifecycleActionPath;
        ServiceLifecycleActionStatus = lifecycleAction is not null
            ? $"Latest lifecycle action {lifecycleAction.ActionId}: {lifecycleAction.ActionKind} for {lifecycleAction.RequestId}; EPOCH timing provider only: {lifecycleAction.EpochTimingProviderOnly.ToString().ToLowerInvariant()}."
            : "No Webportal service lifecycle action was imported into the local WORKSHOP App queue.";
        ServiceLifecycleReceiptCount = lifecycleReceipts.Count;
        ServiceLifecycleReceiptSummary = $"{lifecycleReceipts.Count} service lifecycle receipt(s) linked to native revenue command evidence.";
        ServiceLifecycleReceiptLocation = lifecycleReceiptPath;
        ServiceLifecycleReceiptStatus = lifecycleReceipt is not null
            ? $"Latest lifecycle receipt {lifecycleReceipt.ReceiptId}: {lifecycleReceipt.ActionKind} -> {lifecycleReceipt.Status}; ARA review complete: {lifecycleReceipt.AraOperatorReviewComplete.ToString().ToLowerInvariant()}."
            : "No service lifecycle action has been linked to a native revenue command receipt in this shell load.";
        ServiceLifecycleStatusCount = lifecycleStatuses.Count;
        ServiceLifecycleStatusSummary = $"{lifecycleStatuses.Count} customer-safe service lifecycle status export(s) in the WORKSHOP App ledger.";
        ServiceLifecycleStatusLocation = lifecycleStatusPath;
        ServiceLifecycleStatusStatus = lifecycleStatus is not null
            ? $"Latest lifecycle status {lifecycleStatus.StatusId}: {lifecycleStatus.Status}; Webportal export ready: {lifecycleStatus.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe service lifecycle status feedback was exported in this shell load.";
        ServiceLifecycleStatusMessage = lifecycleStatus is not null
            ? lifecycleStatus.CustomerSafeMessage
            : "The service lifecycle Webportal status loop is waiting for a linked lifecycle action and native revenue execution.";
        EpochRevisedTimingPayloadCount = revisedTimingPayloads.Count;
        EpochRevisedTimingPayloadSummary = $"{revisedTimingPayloads.Count} EPOCH revised timing payload(s) in the WORKSHOP App ledger.";
        EpochRevisedTimingPayloadLocation = revisedTimingPayloadPath;
        EpochRevisedTimingPayloadStatus = revisedTimingPayload is not null
            ? $"Latest revised timing payload {revisedTimingPayload.PayloadId}: {revisedTimingPayload.CalendarSystemLabel}; provider only: {revisedTimingPayload.EpochTimingProviderOnly.ToString().ToLowerInvariant()}; WORKSHOP calendar ownership: {revisedTimingPayload.WorkshopCalendarOwnership.ToString().ToLowerInvariant()}."
            : "No EPOCH revised timing payload was imported into the local WORKSHOP App ledger.";
        EpochRevisedTimingReceiptCount = revisedTimingReceipts.Count;
        EpochRevisedTimingReceiptSummary = $"{revisedTimingReceipts.Count} revised timing receipt(s) linked to EPOCH timing context.";
        EpochRevisedTimingReceiptLocation = revisedTimingReceiptPath;
        EpochRevisedTimingReceiptStatus = revisedTimingReceipt is not null
            ? $"Latest revised timing receipt {revisedTimingReceipt.ReceiptId}: {revisedTimingReceipt.Status}; customer-visible receipt ready: {revisedTimingReceipt.CustomerVisibleReceiptReady.ToString().ToLowerInvariant()}."
            : "No revised timing receipt has been linked in this shell load.";
        EpochRevisedTimingStatusCount = revisedTimingStatuses.Count;
        EpochRevisedTimingStatusSummary = $"{revisedTimingStatuses.Count} customer-safe revised timing status export(s) in the WORKSHOP App ledger.";
        EpochRevisedTimingStatusLocation = revisedTimingStatusPath;
        EpochRevisedTimingStatusStatus = revisedTimingStatus is not null
            ? $"Latest revised timing status {revisedTimingStatus.StatusId}: {revisedTimingStatus.Status}; Webportal export ready: {revisedTimingStatus.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No customer-safe revised timing status feedback was exported in this shell load.";
        EpochRevisedTimingStatusMessage = revisedTimingStatus is not null
            ? revisedTimingStatus.CustomerSafeMessage
            : "The revised timing Webportal status loop is waiting for an EPOCH timing context payload.";
        TimingAwareFollowUpCount = timingAwareFollowUps.Count;
        TimingAwareFollowUpSummary = $"{timingAwareFollowUps.Count} timing-aware service follow-up(s) in the WORKSHOP App ledger.";
        TimingAwareFollowUpLocation = timingAwareFollowUpPath;
        TimingAwareFollowUpStatus = timingAwareFollowUp is not null
            ? $"Latest timing-aware follow-up {timingAwareFollowUp.FollowUpId}: {timingAwareFollowUp.Status}; EPOCH timing provider only: {timingAwareFollowUp.EpochTimingProviderOnly.ToString().ToLowerInvariant()}; WORKSHOP calendar ownership: {timingAwareFollowUp.WorkshopCalendarOwnership.ToString().ToLowerInvariant()}."
            : "No timing-aware service follow-up was prepared from EPOCH timing context in this shell load.";
        TimingAwareRenewalReceiptCount = timingAwareRenewalReceipts.Count;
        TimingAwareRenewalReceiptSummary = $"{timingAwareRenewalReceipts.Count} timing-aware renewal receipt(s) in the WORKSHOP App ledger.";
        TimingAwareRenewalReceiptLocation = timingAwareRenewalReceiptPath;
        TimingAwareRenewalReceiptStatus = timingAwareRenewalReceipt is not null
            ? $"Latest timing-aware renewal receipt {timingAwareRenewalReceipt.ReceiptId}: {timingAwareRenewalReceipt.Status}; customer-visible receipt ready: {timingAwareRenewalReceipt.CustomerVisibleReceiptReady.ToString().ToLowerInvariant()}."
            : "No timing-aware renewal receipt was prepared from EPOCH timing context in this shell load.";
        DeliveryOutcomeAutomationCount = deliveryOutcomeAutomations.Count;
        DeliveryOutcomeAutomationSummary = $"{deliveryOutcomeAutomations.Count} delivery outcome automation record(s) in the WORKSHOP App ledger.";
        DeliveryOutcomeAutomationLocation = deliveryOutcomeAutomationPath;
        DeliveryOutcomeAutomationStatus = deliveryOutcomeAutomation is not null
            ? $"Latest delivery outcome automation {deliveryOutcomeAutomation.AutomationId}: {deliveryOutcomeAutomation.Status}; Webportal export ready: {deliveryOutcomeAutomation.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No delivery outcome automation was prepared from native revenue execution, service lifecycle status, and timing-aware renewal context in this shell load.";
        DeliveryOutcomeAutomationReceiptCount = deliveryOutcomeAutomationReceipts.Count;
        DeliveryOutcomeAutomationReceiptSummary = $"{deliveryOutcomeAutomationReceipts.Count} customer-safe delivery outcome automation receipt(s) in the WORKSHOP App ledger.";
        DeliveryOutcomeAutomationReceiptLocation = deliveryOutcomeAutomationReceiptPath;
        DeliveryOutcomeAutomationReceiptStatus = deliveryOutcomeAutomationReceipt is not null
            ? $"Latest delivery outcome receipt {deliveryOutcomeAutomationReceipt.ReceiptId}: {deliveryOutcomeAutomationReceipt.Status}; customer-visible receipt ready: {deliveryOutcomeAutomationReceipt.CustomerVisibleReceiptReady.ToString().ToLowerInvariant()}."
            : "No customer-safe delivery outcome automation receipt was exported in this shell load.";
        DeliveryOutcomeAutomationCustomerMessage = deliveryOutcomeAutomationReceipt is not null
            ? deliveryOutcomeAutomationReceipt.CustomerSafeMessage
            : "The delivery outcome automation Webportal status loop is waiting for native execution history, lifecycle status, and timing-aware renewal context.";
        AccountGrowthAutomationCount = accountGrowthAutomations.Count;
        AccountGrowthAutomationSummary = $"{accountGrowthAutomations.Count} account-growth automation record(s) in the WORKSHOP App ledger.";
        AccountGrowthAutomationLocation = accountGrowthAutomationPath;
        AccountGrowthAutomationStatus = accountGrowthAutomation is not null
            ? $"Latest account-growth automation {accountGrowthAutomation.AutomationId}: {accountGrowthAutomation.Status}; Webportal export ready: {accountGrowthAutomation.WebportalExportReady.ToString().ToLowerInvariant()}."
            : "No account-growth automation was prepared from the delivery outcome receipt in this shell load.";
        AccountGrowthAutomationReceiptCount = accountGrowthAutomationReceipts.Count;
        AccountGrowthAutomationReceiptSummary = $"{accountGrowthAutomationReceipts.Count} customer-safe account-growth automation receipt(s) in the WORKSHOP App ledger.";
        AccountGrowthAutomationReceiptLocation = accountGrowthAutomationReceiptPath;
        AccountGrowthAutomationReceiptStatus = accountGrowthAutomationReceipt is not null
            ? $"Latest account-growth receipt {accountGrowthAutomationReceipt.ReceiptId}: {accountGrowthAutomationReceipt.Status}; customer-visible receipt ready: {accountGrowthAutomationReceipt.CustomerVisibleReceiptReady.ToString().ToLowerInvariant()}."
            : "No customer-safe account-growth automation receipt was exported in this shell load.";
        AccountGrowthAutomationCustomerMessage = accountGrowthAutomationReceipt is not null
            ? accountGrowthAutomationReceipt.CustomerSafeMessage
            : "The account-growth automation Webportal loop is waiting for a customer-safe delivery outcome automation receipt.";
    }

    public string ProductName { get; }
    public string CoreStatus { get; }
    public string RevenueLane { get; }
    public string OfferExperimentStatus { get; }
    public string DeliveryQueueStatus { get; }
    public string CustomerSafeStatus { get; }
    public string MonthlyRevenueTarget { get; }
    public string LowLaborSummary { get; }
    public string HumanReviewStatus { get; }
    public string BoundaryStatus { get; }
    public string RevenueCommandSummary { get; }
    public string RevenueCommandEvidence { get; }
    public string RevenueCommandStatus { get; }
    public string RevenueCommandCustomerSafeStatus { get; }
    public string EpochHandoffStatus { get; }
    public string RevenueExecutionSummary { get; }
    public string RevenueExecutionEvidence { get; }
    public string RevenueExecutionStatus { get; }
    public string RevenueExecutionCustomerSafeStatus { get; }
    public int RevenueExecutionHistoryCount { get; }
    public string RevenueExecutionHistorySummary { get; }
    public string RevenueExecutionHistoryLocation { get; }
    public string LastRevenueExecutionHistoryStatus { get; }
    public int ServiceInboxCount { get; }
    public string ServiceInboxSummary { get; }
    public string ServiceInboxLocation { get; }
    public string ServiceInboxStatus { get; }
    public int ServiceCommandReceiptCount { get; }
    public string ServiceCommandReceiptSummary { get; }
    public string ServiceCommandReceiptLocation { get; }
    public string ServiceCommandReceiptStatus { get; }
    public int AraReviewQueueCount { get; }
    public string AraReviewQueueSummary { get; }
    public string AraReviewQueueLocation { get; }
    public string AraReviewQueueStatus { get; }
    public int AraReviewDecisionCount { get; }
    public string AraReviewDecisionSummary { get; }
    public string AraReviewDecisionLocation { get; }
    public string AraReviewDecisionStatus { get; }
    public int AraReviewStatusReceiptCount { get; }
    public string AraReviewStatusReceiptSummary { get; }
    public string AraReviewStatusReceiptLocation { get; }
    public string AraReviewStatusReceiptStatus { get; }
    public string AraReviewStatusCustomerMessage { get; }
    public int AraMethodMaterializationCount { get; }
    public string AraMethodMaterializationSummary { get; }
    public string AraMethodMaterializationLocation { get; }
    public string AraMethodMaterializationStatus { get; }
    public int AraMaterializationReceiptCount { get; }
    public string AraMaterializationReceiptSummary { get; }
    public string AraMaterializationReceiptLocation { get; }
    public string AraMaterializationReceiptStatus { get; }
    public string AraMaterializationCustomerMessage { get; }
    public int ServiceMaterialReuseCount { get; }
    public string ServiceMaterialReuseSummary { get; }
    public string ServiceMaterialReuseLocation { get; }
    public string ServiceMaterialReuseStatus { get; }
    public int ServiceMaterialReuseReceiptCount { get; }
    public string ServiceMaterialReuseReceiptSummary { get; }
    public string ServiceMaterialReuseReceiptLocation { get; }
    public string ServiceMaterialReuseReceiptStatus { get; }
    public string ServiceMaterialReuseCustomerMessage { get; }
    public int PackageDeliveryChecklistCount { get; }
    public string PackageDeliveryChecklistSummary { get; }
    public string PackageDeliveryChecklistLocation { get; }
    public string PackageDeliveryChecklistStatus { get; }
    public int PackageDeliveryChecklistReceiptCount { get; }
    public string PackageDeliveryChecklistReceiptSummary { get; }
    public string PackageDeliveryChecklistReceiptLocation { get; }
    public string PackageDeliveryChecklistReceiptStatus { get; }
    public string PackageDeliveryChecklistCustomerMessage { get; }
    public int PackageDeliveryChecklistAutomationCount { get; }
    public string PackageDeliveryChecklistAutomationSummary { get; }
    public string PackageDeliveryChecklistAutomationLocation { get; }
    public string PackageDeliveryChecklistAutomationStatus { get; }
    public int PackageDeliveryChecklistAutomationReceiptCount { get; }
    public string PackageDeliveryChecklistAutomationReceiptSummary { get; }
    public string PackageDeliveryChecklistAutomationReceiptLocation { get; }
    public string PackageDeliveryChecklistAutomationReceiptStatus { get; }
    public string PackageDeliveryChecklistAutomationCustomerMessage { get; }
    public int PackageDeliveryExecutionCount { get; }
    public string PackageDeliveryExecutionSummary { get; }
    public string PackageDeliveryExecutionLocation { get; }
    public string PackageDeliveryExecutionStatus { get; }
    public int PackageDeliveryExecutionReceiptCount { get; }
    public string PackageDeliveryExecutionReceiptSummary { get; }
    public string PackageDeliveryExecutionReceiptLocation { get; }
    public string PackageDeliveryExecutionReceiptStatus { get; }
    public string PackageDeliveryExecutionCustomerMessage { get; }
    public int PackageDeliveryFollowUpRenewalCount { get; }
    public string PackageDeliveryFollowUpRenewalSummary { get; }
    public string PackageDeliveryFollowUpRenewalLocation { get; }
    public string PackageDeliveryFollowUpRenewalStatus { get; }
    public int PackageDeliveryFollowUpRenewalReceiptCount { get; }
    public string PackageDeliveryFollowUpRenewalReceiptSummary { get; }
    public string PackageDeliveryFollowUpRenewalReceiptLocation { get; }
    public string PackageDeliveryFollowUpRenewalReceiptStatus { get; }
    public string PackageDeliveryFollowUpRenewalCustomerMessage { get; }
    public int PackageDeliveryQualityOutcomeCount { get; }
    public string PackageDeliveryQualityOutcomeSummary { get; }
    public string PackageDeliveryQualityOutcomeLocation { get; }
    public string PackageDeliveryQualityOutcomeStatus { get; }
    public int PackageDeliveryQualityOutcomeReceiptCount { get; }
    public string PackageDeliveryQualityOutcomeReceiptSummary { get; }
    public string PackageDeliveryQualityOutcomeReceiptLocation { get; }
    public string PackageDeliveryQualityOutcomeReceiptStatus { get; }
    public string PackageDeliveryQualityOutcomeCustomerMessage { get; }
    public int PackageDeliveryAccountGrowthLinkageCount { get; }
    public string PackageDeliveryAccountGrowthLinkageSummary { get; }
    public string PackageDeliveryAccountGrowthLinkageLocation { get; }
    public string PackageDeliveryAccountGrowthLinkageStatus { get; }
    public int PackageDeliveryAccountGrowthReceiptCount { get; }
    public string PackageDeliveryAccountGrowthReceiptSummary { get; }
    public string PackageDeliveryAccountGrowthReceiptLocation { get; }
    public string PackageDeliveryAccountGrowthReceiptStatus { get; }
    public string PackageDeliveryAccountGrowthCustomerMessage { get; }
    public int PackageDeliveryRetentionReportCount { get; }
    public string PackageDeliveryRetentionReportSummary { get; }
    public string PackageDeliveryRetentionReportLocation { get; }
    public string PackageDeliveryRetentionReportStatus { get; }
    public int PackageDeliveryRetentionReportReceiptCount { get; }
    public string PackageDeliveryRetentionReportReceiptSummary { get; }
    public string PackageDeliveryRetentionReportReceiptLocation { get; }
    public string PackageDeliveryRetentionReportReceiptStatus { get; }
    public string PackageDeliveryRetentionReportCustomerMessage { get; }
    public int PackageDeliveryGrowthActionCount { get; }
    public string PackageDeliveryGrowthActionSummary { get; }
    public string PackageDeliveryGrowthActionLocation { get; }
    public string PackageDeliveryGrowthActionStatus { get; }
    public int PackageDeliveryGrowthActionReceiptCount { get; }
    public string PackageDeliveryGrowthActionReceiptSummary { get; }
    public string PackageDeliveryGrowthActionReceiptLocation { get; }
    public string PackageDeliveryGrowthActionReceiptStatus { get; }
    public string PackageDeliveryGrowthActionCustomerMessage { get; }
    public string OperationsBoardStatus { get; }
    public string OperationsBoardNextAction { get; }
    public string OperationsBoardPipelineSummary { get; }
    public string OperationsBoardLatestServiceRequestStatus { get; }
    public string OperationsBoardLatestCommandStatus { get; }
    public string OperationsBoardLatestRevenueExecutionStatus { get; }
    public string OperationsBoardSafetySummary { get; }
    public string OperationsBoardLedgerSummary { get; }
    public string OperationsBoardReadyForOperatorReview { get; }
    public int CustomerStatusFeedbackCount { get; }
    public string CustomerStatusFeedbackSummary { get; }
    public string CustomerStatusFeedbackLocation { get; }
    public string CustomerStatusFeedbackStatus { get; }
    public string CustomerStatusFeedbackMessage { get; }
    public int ServiceLifecycleActionCount { get; }
    public string ServiceLifecycleActionSummary { get; }
    public string ServiceLifecycleActionLocation { get; }
    public string ServiceLifecycleActionStatus { get; }
    public int ServiceLifecycleReceiptCount { get; }
    public string ServiceLifecycleReceiptSummary { get; }
    public string ServiceLifecycleReceiptLocation { get; }
    public string ServiceLifecycleReceiptStatus { get; }
    public int ServiceLifecycleStatusCount { get; }
    public string ServiceLifecycleStatusSummary { get; }
    public string ServiceLifecycleStatusLocation { get; }
    public string ServiceLifecycleStatusStatus { get; }
    public string ServiceLifecycleStatusMessage { get; }
    public int EpochRevisedTimingPayloadCount { get; }
    public string EpochRevisedTimingPayloadSummary { get; }
    public string EpochRevisedTimingPayloadLocation { get; }
    public string EpochRevisedTimingPayloadStatus { get; }
    public int EpochRevisedTimingReceiptCount { get; }
    public string EpochRevisedTimingReceiptSummary { get; }
    public string EpochRevisedTimingReceiptLocation { get; }
    public string EpochRevisedTimingReceiptStatus { get; }
    public int EpochRevisedTimingStatusCount { get; }
    public string EpochRevisedTimingStatusSummary { get; }
    public string EpochRevisedTimingStatusLocation { get; }
    public string EpochRevisedTimingStatusStatus { get; }
    public string EpochRevisedTimingStatusMessage { get; }
    public int TimingAwareFollowUpCount { get; }
    public string TimingAwareFollowUpSummary { get; }
    public string TimingAwareFollowUpLocation { get; }
    public string TimingAwareFollowUpStatus { get; }
    public int TimingAwareRenewalReceiptCount { get; }
    public string TimingAwareRenewalReceiptSummary { get; }
    public string TimingAwareRenewalReceiptLocation { get; }
    public string TimingAwareRenewalReceiptStatus { get; }
    public int DeliveryOutcomeAutomationCount { get; }
    public string DeliveryOutcomeAutomationSummary { get; }
    public string DeliveryOutcomeAutomationLocation { get; }
    public string DeliveryOutcomeAutomationStatus { get; }
    public int DeliveryOutcomeAutomationReceiptCount { get; }
    public string DeliveryOutcomeAutomationReceiptSummary { get; }
    public string DeliveryOutcomeAutomationReceiptLocation { get; }
    public string DeliveryOutcomeAutomationReceiptStatus { get; }
    public string DeliveryOutcomeAutomationCustomerMessage { get; }
    public int AccountGrowthAutomationCount { get; }
    public string AccountGrowthAutomationSummary { get; }
    public string AccountGrowthAutomationLocation { get; }
    public string AccountGrowthAutomationStatus { get; }
    public int AccountGrowthAutomationReceiptCount { get; }
    public string AccountGrowthAutomationReceiptSummary { get; }
    public string AccountGrowthAutomationReceiptLocation { get; }
    public string AccountGrowthAutomationReceiptStatus { get; }
    public string AccountGrowthAutomationCustomerMessage { get; }

    public static MainWindowViewModel Load()
    {
        WorkshopWebportalServiceRequest? serviceInboxRequest = null;
        WorkshopServiceRequestInboxStore.TryEnsureDefaultWebportalRequest(out serviceInboxRequest);
        IReadOnlyList<WorkshopWebportalServiceRequest> serviceInbox = WorkshopServiceRequestInboxStore.Load();
        WorkshopServiceLifecycleAction? lifecycleAction = null;
        WorkshopServiceLifecycleActionStore.TryEnsureDefaultLifecycleAction(out lifecycleAction);
        IReadOnlyList<WorkshopServiceLifecycleAction> lifecycleActions = WorkshopServiceLifecycleActionStore.Load();

        WorkshopRevenueExecutionReceipt execution = ExecuteNativeOrFallback("approve-operator-reviewed-offer");
        WorkshopRevenueExecutionHistoryEntry? historyEntry = null;
        WorkshopServiceRevenueCommandReceipt? serviceCommandReceipt = null;

        if (execution.NativeExecutionReady &&
            execution.ExecutedLocally &&
            execution.CustomerVisibleReceiptReady &&
            execution.AraOperatorReviewComplete &&
            execution.EpochTimingRequested &&
            !execution.MonitorWorkflowExposed)
        {
            WorkshopRevenueExecutionHistoryStore.TryAppend(
                execution,
                "Workshop.App.Avalonia",
                out historyEntry);
        }

        IReadOnlyList<WorkshopRevenueExecutionHistoryEntry> history = WorkshopRevenueExecutionHistoryStore.Load();
        if (serviceInboxRequest is not null && historyEntry is not null)
        {
            WorkshopServiceRevenueCommandReceiptStore.TryAppend(
                serviceInboxRequest,
                historyEntry,
                execution,
                out serviceCommandReceipt);
        }

        IReadOnlyList<WorkshopServiceRevenueCommandReceipt> serviceCommandReceipts =
            WorkshopServiceRevenueCommandReceiptStore.Load();
        WorkshopAraReviewQueueRecord? araReviewQueue = null;
        if (historyEntry is not null && serviceCommandReceipt is not null)
        {
            WorkshopAraReviewQueueStore.TryAppend(
                historyEntry,
                serviceCommandReceipt,
                out araReviewQueue);
        }

        IReadOnlyList<WorkshopAraReviewQueueRecord> araReviewQueueRecords =
            WorkshopAraReviewQueueStore.Load();
        WorkshopAraOperatorReviewDecision? araReviewDecision = null;
        if (araReviewQueue is not null)
        {
            WorkshopAraOperatorReviewDecisionStore.TryAppend(
                araReviewQueue,
                out araReviewDecision);
        }

        IReadOnlyList<WorkshopAraOperatorReviewDecision> araReviewDecisions =
            WorkshopAraOperatorReviewDecisionStore.Load();
        WorkshopAraReviewStatusReceipt? araReviewStatusReceipt = null;
        if (araReviewDecision is not null)
        {
            WorkshopAraReviewStatusReceiptStore.TryAppend(
                araReviewDecision,
                out araReviewStatusReceipt);
        }

        IReadOnlyList<WorkshopAraReviewStatusReceipt> araReviewStatusReceipts =
            WorkshopAraReviewStatusReceiptStore.Load();
        WorkshopAraMethodMaterializationRecord? araMethodMaterialization = null;
        if (araReviewDecision is not null && araReviewStatusReceipt is not null)
        {
            WorkshopAraMethodMaterializationStore.TryAppend(
                araReviewDecision,
                araReviewStatusReceipt,
                out araMethodMaterialization);
        }

        IReadOnlyList<WorkshopAraMethodMaterializationRecord> araMethodMaterializations =
            WorkshopAraMethodMaterializationStore.Load();
        WorkshopAraMaterializationReceipt? araMaterializationReceipt = null;
        if (araMethodMaterialization is not null)
        {
            WorkshopAraMaterializationReceiptStore.TryAppend(
                araMethodMaterialization,
                out araMaterializationReceipt);
        }

        IReadOnlyList<WorkshopAraMaterializationReceipt> araMaterializationReceipts =
            WorkshopAraMaterializationReceiptStore.Load();
        WorkshopServiceMaterialReuseRecord? serviceMaterialReuse = null;
        if (araMaterializationReceipt is not null && serviceInboxRequest is not null)
        {
            WorkshopServiceMaterialReuseStore.TryAppend(
                araMaterializationReceipt,
                serviceInboxRequest,
                out serviceMaterialReuse);
        }

        IReadOnlyList<WorkshopServiceMaterialReuseRecord> serviceMaterialReuseRecords =
            WorkshopServiceMaterialReuseStore.Load();
        WorkshopServiceMaterialReuseReceipt? serviceMaterialReuseReceipt = null;
        if (serviceMaterialReuse is not null)
        {
            WorkshopServiceMaterialReuseReceiptStore.TryAppend(
                serviceMaterialReuse,
                out serviceMaterialReuseReceipt);
        }

        IReadOnlyList<WorkshopServiceMaterialReuseReceipt> serviceMaterialReuseReceipts =
            WorkshopServiceMaterialReuseReceiptStore.Load();
        WorkshopPackageDeliveryChecklistRecord? packageDeliveryChecklist = null;
        if (serviceMaterialReuse is not null)
        {
            WorkshopPackageDeliveryChecklistStore.TryAppend(
                serviceMaterialReuse,
                out packageDeliveryChecklist);
        }

        IReadOnlyList<WorkshopPackageDeliveryChecklistRecord> packageDeliveryChecklists =
            WorkshopPackageDeliveryChecklistStore.Load();
        WorkshopPackageDeliveryChecklistReceipt? packageDeliveryChecklistReceipt = null;
        if (packageDeliveryChecklist is not null)
        {
            WorkshopPackageDeliveryChecklistReceiptStore.TryAppend(
                packageDeliveryChecklist,
                out packageDeliveryChecklistReceipt);
        }

        IReadOnlyList<WorkshopPackageDeliveryChecklistReceipt> packageDeliveryChecklistReceipts =
            WorkshopPackageDeliveryChecklistReceiptStore.Load();
        WorkshopPackageDeliveryChecklistAutomationRecord? packageDeliveryChecklistAutomation = null;
        if (packageDeliveryChecklist is not null)
        {
            WorkshopPackageDeliveryChecklistAutomationStore.TryAppend(
                packageDeliveryChecklist,
                out packageDeliveryChecklistAutomation);
        }

        IReadOnlyList<WorkshopPackageDeliveryChecklistAutomationRecord> packageDeliveryChecklistAutomations =
            WorkshopPackageDeliveryChecklistAutomationStore.Load();
        WorkshopPackageDeliveryChecklistAutomationReceipt? packageDeliveryChecklistAutomationReceipt = null;
        if (packageDeliveryChecklistAutomation is not null)
        {
            WorkshopPackageDeliveryChecklistAutomationReceiptStore.TryAppend(
                packageDeliveryChecklistAutomation,
                out packageDeliveryChecklistAutomationReceipt);
        }

        IReadOnlyList<WorkshopPackageDeliveryChecklistAutomationReceipt> packageDeliveryChecklistAutomationReceipts =
            WorkshopPackageDeliveryChecklistAutomationReceiptStore.Load();
        WorkshopPackageDeliveryExecutionRecord? packageDeliveryExecution = null;
        if (packageDeliveryChecklistAutomation is not null)
        {
            WorkshopPackageDeliveryExecutionStore.TryAppend(
                packageDeliveryChecklistAutomation,
                out packageDeliveryExecution);
        }

        IReadOnlyList<WorkshopPackageDeliveryExecutionRecord> packageDeliveryExecutions =
            WorkshopPackageDeliveryExecutionStore.Load();
        WorkshopPackageDeliveryExecutionReceipt? packageDeliveryExecutionReceipt = null;
        if (packageDeliveryExecution is not null)
        {
            WorkshopPackageDeliveryExecutionReceiptStore.TryAppend(
                packageDeliveryExecution,
                out packageDeliveryExecutionReceipt);
        }

        IReadOnlyList<WorkshopPackageDeliveryExecutionReceipt> packageDeliveryExecutionReceipts =
            WorkshopPackageDeliveryExecutionReceiptStore.Load();
        WorkshopPackageDeliveryFollowUpRenewalRecord? packageDeliveryFollowUpRenewal = null;
        if (packageDeliveryExecutionReceipt is not null)
        {
            WorkshopPackageDeliveryFollowUpRenewalStore.TryAppend(
                packageDeliveryExecutionReceipt,
                out packageDeliveryFollowUpRenewal);
        }

        IReadOnlyList<WorkshopPackageDeliveryFollowUpRenewalRecord> packageDeliveryFollowUpRenewals =
            WorkshopPackageDeliveryFollowUpRenewalStore.Load();
        WorkshopPackageDeliveryFollowUpRenewalReceipt? packageDeliveryFollowUpRenewalReceipt = null;
        if (packageDeliveryFollowUpRenewal is not null)
        {
            WorkshopPackageDeliveryFollowUpRenewalReceiptStore.TryAppend(
                packageDeliveryFollowUpRenewal,
                out packageDeliveryFollowUpRenewalReceipt);
        }

        IReadOnlyList<WorkshopPackageDeliveryFollowUpRenewalReceipt> packageDeliveryFollowUpRenewalReceipts =
            WorkshopPackageDeliveryFollowUpRenewalReceiptStore.Load();
        WorkshopPackageDeliveryQualityOutcomeRecord? packageDeliveryQualityOutcome = null;
        if (packageDeliveryExecutionReceipt is not null &&
            packageDeliveryFollowUpRenewalReceipt is not null)
        {
            WorkshopPackageDeliveryQualityOutcomeStore.TryAppend(
                packageDeliveryExecutionReceipt,
                packageDeliveryFollowUpRenewalReceipt,
                out packageDeliveryQualityOutcome);
        }

        IReadOnlyList<WorkshopPackageDeliveryQualityOutcomeRecord> packageDeliveryQualityOutcomes =
            WorkshopPackageDeliveryQualityOutcomeStore.Load();
        WorkshopPackageDeliveryQualityOutcomeReceipt? packageDeliveryQualityOutcomeReceipt = null;
        if (packageDeliveryQualityOutcome is not null)
        {
            WorkshopPackageDeliveryQualityOutcomeReceiptStore.TryAppend(
                packageDeliveryQualityOutcome,
                out packageDeliveryQualityOutcomeReceipt);
        }

        IReadOnlyList<WorkshopPackageDeliveryQualityOutcomeReceipt> packageDeliveryQualityOutcomeReceipts =
            WorkshopPackageDeliveryQualityOutcomeReceiptStore.Load();
        WorkshopPackageDeliveryAccountGrowthLinkageRecord? packageDeliveryAccountGrowthLinkage = null;
        if (packageDeliveryQualityOutcomeReceipt is not null)
        {
            WorkshopPackageDeliveryAccountGrowthLinkageStore.TryAppend(
                packageDeliveryQualityOutcomeReceipt,
                out packageDeliveryAccountGrowthLinkage);
        }

        IReadOnlyList<WorkshopPackageDeliveryAccountGrowthLinkageRecord> packageDeliveryAccountGrowthLinkages =
            WorkshopPackageDeliveryAccountGrowthLinkageStore.Load();
        WorkshopPackageDeliveryAccountGrowthReceipt? packageDeliveryAccountGrowthReceipt = null;
        if (packageDeliveryAccountGrowthLinkage is not null)
        {
            WorkshopPackageDeliveryAccountGrowthReceiptStore.TryAppend(
                packageDeliveryAccountGrowthLinkage,
                out packageDeliveryAccountGrowthReceipt);
        }

        IReadOnlyList<WorkshopPackageDeliveryAccountGrowthReceipt> packageDeliveryAccountGrowthReceipts =
            WorkshopPackageDeliveryAccountGrowthReceiptStore.Load();
        WorkshopPackageDeliveryRetentionReportRecord? packageDeliveryRetentionReport = null;
        if (packageDeliveryAccountGrowthLinkage is not null &&
            packageDeliveryAccountGrowthReceipt is not null &&
            packageDeliveryQualityOutcomeReceipt is not null)
        {
            WorkshopPackageDeliveryRetentionReportStore.TryAppend(
                packageDeliveryAccountGrowthLinkage,
                packageDeliveryAccountGrowthReceipt,
                packageDeliveryQualityOutcomeReceipt,
                out packageDeliveryRetentionReport);
        }

        IReadOnlyList<WorkshopPackageDeliveryRetentionReportRecord> packageDeliveryRetentionReports =
            WorkshopPackageDeliveryRetentionReportStore.Load();
        WorkshopPackageDeliveryRetentionReportReceipt? packageDeliveryRetentionReportReceipt = null;
        if (packageDeliveryRetentionReport is not null)
        {
            WorkshopPackageDeliveryRetentionReportReceiptStore.TryAppend(
                packageDeliveryRetentionReport,
                out packageDeliveryRetentionReportReceipt);
        }

        IReadOnlyList<WorkshopPackageDeliveryRetentionReportReceipt> packageDeliveryRetentionReportReceipts =
            WorkshopPackageDeliveryRetentionReportReceiptStore.Load();
        WorkshopPackageDeliveryGrowthActionRecord? packageDeliveryGrowthAction = null;
        if (packageDeliveryRetentionReport is not null &&
            packageDeliveryRetentionReportReceipt is not null)
        {
            WorkshopPackageDeliveryGrowthActionStore.TryAppend(
                packageDeliveryRetentionReport,
                packageDeliveryRetentionReportReceipt,
                out packageDeliveryGrowthAction);
        }

        IReadOnlyList<WorkshopPackageDeliveryGrowthActionRecord> packageDeliveryGrowthActions =
            WorkshopPackageDeliveryGrowthActionStore.Load();
        WorkshopPackageDeliveryGrowthActionReceipt? packageDeliveryGrowthActionReceipt = null;
        if (packageDeliveryGrowthAction is not null)
        {
            WorkshopPackageDeliveryGrowthActionReceiptStore.TryAppend(
                packageDeliveryGrowthAction,
                out packageDeliveryGrowthActionReceipt);
        }

        IReadOnlyList<WorkshopPackageDeliveryGrowthActionReceipt> packageDeliveryGrowthActionReceipts =
            WorkshopPackageDeliveryGrowthActionReceiptStore.Load();
        WorkshopServiceLifecycleReceipt? lifecycleReceipt = null;
        if (lifecycleAction is not null &&
            serviceCommandReceipt is not null &&
            historyEntry is not null)
        {
            WorkshopServiceLifecycleReceiptStore.TryAppend(
                lifecycleAction,
                serviceCommandReceipt,
                historyEntry,
                out lifecycleReceipt);
        }

        IReadOnlyList<WorkshopServiceLifecycleReceipt> lifecycleReceipts =
            WorkshopServiceLifecycleReceiptStore.Load();
        WorkshopRevenueOperationsBoardSnapshot operationsBoard =
            WorkshopRevenueOperationsBoardSnapshot.FromLedgers(
                serviceInbox,
                serviceCommandReceipts,
                history,
                WorkshopServiceRequestInboxStore.InboxPath,
                WorkshopServiceRevenueCommandReceiptStore.ReceiptPath,
                WorkshopRevenueExecutionHistoryStore.HistoryPath);
        WorkshopCustomerServiceStatusRecord? statusFeedback = null;
        if (operationsBoard.ReadyForOperatorReview &&
            serviceInboxRequest is not null &&
            serviceCommandReceipt is not null &&
            historyEntry is not null)
        {
            WorkshopCustomerServiceStatusStore.TryAppend(
                serviceInboxRequest,
                serviceCommandReceipt,
                historyEntry,
                out statusFeedback);
        }

        IReadOnlyList<WorkshopCustomerServiceStatusRecord> statusFeedbackRecords =
            WorkshopCustomerServiceStatusStore.Load();
        WorkshopServiceLifecycleStatusRecord? lifecycleStatus = null;
        if (lifecycleAction is not null && lifecycleReceipt is not null)
        {
            WorkshopServiceLifecycleStatusStore.TryAppend(
                lifecycleAction,
                lifecycleReceipt,
                out lifecycleStatus);
        }

        IReadOnlyList<WorkshopServiceLifecycleStatusRecord> lifecycleStatuses =
            WorkshopServiceLifecycleStatusStore.Load();
        WorkshopEpochRevisedCalendarTimingPayload? revisedTimingPayload = null;
        WorkshopEpochRevisedCalendarTimingPayloadStore.TryEnsureDefaultPayload(out revisedTimingPayload);
        IReadOnlyList<WorkshopEpochRevisedCalendarTimingPayload> revisedTimingPayloads =
            WorkshopEpochRevisedCalendarTimingPayloadStore.Load();
        WorkshopRevisedCalendarTimingReceipt? revisedTimingReceipt = null;
        if (revisedTimingPayload is not null)
        {
            WorkshopRevisedCalendarTimingReceiptStore.TryAppend(
                revisedTimingPayload,
                out revisedTimingReceipt);
        }

        IReadOnlyList<WorkshopRevisedCalendarTimingReceipt> revisedTimingReceipts =
            WorkshopRevisedCalendarTimingReceiptStore.Load();
        WorkshopRevisedCalendarTimingStatusRecord? revisedTimingStatus = null;
        if (revisedTimingPayload is not null && revisedTimingReceipt is not null)
        {
            WorkshopRevisedCalendarTimingStatusStore.TryAppend(
                revisedTimingPayload,
                revisedTimingReceipt,
                out revisedTimingStatus);
        }

        IReadOnlyList<WorkshopRevisedCalendarTimingStatusRecord> revisedTimingStatuses =
            WorkshopRevisedCalendarTimingStatusStore.Load();
        WorkshopTimingAwareServiceFollowUp? timingAwareFollowUp = null;
        if (revisedTimingPayload is not null &&
            revisedTimingReceipt is not null &&
            revisedTimingStatus is not null)
        {
            WorkshopTimingAwareServiceFollowUpStore.TryAppend(
                revisedTimingPayload,
                revisedTimingReceipt,
                revisedTimingStatus,
                out timingAwareFollowUp);
        }

        IReadOnlyList<WorkshopTimingAwareServiceFollowUp> timingAwareFollowUps =
            WorkshopTimingAwareServiceFollowUpStore.Load();
        WorkshopTimingAwareRenewalReceipt? timingAwareRenewalReceipt = null;
        if (timingAwareFollowUp is not null && revisedTimingStatus is not null)
        {
            WorkshopTimingAwareRenewalReceiptStore.TryAppend(
                timingAwareFollowUp,
                revisedTimingStatus,
                out timingAwareRenewalReceipt);
        }

        IReadOnlyList<WorkshopTimingAwareRenewalReceipt> timingAwareRenewalReceipts =
            WorkshopTimingAwareRenewalReceiptStore.Load();
        WorkshopDeliveryOutcomeAutomationRecord? deliveryOutcomeAutomation = null;
        if (historyEntry is not null &&
            lifecycleStatus is not null &&
            timingAwareRenewalReceipt is not null)
        {
            WorkshopDeliveryOutcomeAutomationStore.TryAppend(
                historyEntry,
                lifecycleStatus,
                timingAwareRenewalReceipt,
                out deliveryOutcomeAutomation);
        }

        IReadOnlyList<WorkshopDeliveryOutcomeAutomationRecord> deliveryOutcomeAutomations =
            WorkshopDeliveryOutcomeAutomationStore.Load();
        WorkshopDeliveryOutcomeAutomationReceipt? deliveryOutcomeAutomationReceipt = null;
        if (deliveryOutcomeAutomation is not null)
        {
            WorkshopDeliveryOutcomeAutomationReceiptStore.TryAppend(
                deliveryOutcomeAutomation,
                out deliveryOutcomeAutomationReceipt);
        }

        IReadOnlyList<WorkshopDeliveryOutcomeAutomationReceipt> deliveryOutcomeAutomationReceipts =
            WorkshopDeliveryOutcomeAutomationReceiptStore.Load();
        WorkshopAccountGrowthAutomationRecord? accountGrowthAutomation = null;
        if (deliveryOutcomeAutomation is not null && deliveryOutcomeAutomationReceipt is not null)
        {
            WorkshopAccountGrowthAutomationStore.TryAppend(
                deliveryOutcomeAutomation,
                deliveryOutcomeAutomationReceipt,
                out accountGrowthAutomation);
        }

        IReadOnlyList<WorkshopAccountGrowthAutomationRecord> accountGrowthAutomations =
            WorkshopAccountGrowthAutomationStore.Load();
        WorkshopAccountGrowthAutomationReceipt? accountGrowthAutomationReceipt = null;
        if (accountGrowthAutomation is not null)
        {
            WorkshopAccountGrowthAutomationReceiptStore.TryAppend(
                accountGrowthAutomation,
                out accountGrowthAutomationReceipt);
        }

        IReadOnlyList<WorkshopAccountGrowthAutomationReceipt> accountGrowthAutomationReceipts =
            WorkshopAccountGrowthAutomationReceiptStore.Load();

        return new MainWindowViewModel(
            WorkshopNative.LoadSnapshotOrFallback(),
            WorkshopNative.LoadRevenueCommandOrFallback(),
            execution,
            historyEntry,
            history,
            WorkshopRevenueExecutionHistoryStore.HistoryPath,
            serviceInboxRequest,
            serviceInbox,
            WorkshopServiceRequestInboxStore.InboxPath,
            serviceCommandReceipt,
            serviceCommandReceipts,
            WorkshopServiceRevenueCommandReceiptStore.ReceiptPath,
            araReviewQueue,
            araReviewQueueRecords,
            WorkshopAraReviewQueueStore.QueuePath,
            araReviewDecision,
            araReviewDecisions,
            WorkshopAraOperatorReviewDecisionStore.DecisionPath,
            araReviewStatusReceipt,
            araReviewStatusReceipts,
            WorkshopAraReviewStatusReceiptStore.ReceiptPath,
            araMethodMaterialization,
            araMethodMaterializations,
            WorkshopAraMethodMaterializationStore.MaterializationPath,
            araMaterializationReceipt,
            araMaterializationReceipts,
            WorkshopAraMaterializationReceiptStore.ReceiptPath,
            serviceMaterialReuse,
            serviceMaterialReuseRecords,
            WorkshopServiceMaterialReuseStore.ReusePath,
            serviceMaterialReuseReceipt,
            serviceMaterialReuseReceipts,
            WorkshopServiceMaterialReuseReceiptStore.ReceiptPath,
            packageDeliveryChecklist,
            packageDeliveryChecklists,
            WorkshopPackageDeliveryChecklistStore.ChecklistPath,
            packageDeliveryChecklistReceipt,
            packageDeliveryChecklistReceipts,
            WorkshopPackageDeliveryChecklistReceiptStore.ReceiptPath,
            packageDeliveryChecklistAutomation,
            packageDeliveryChecklistAutomations,
            WorkshopPackageDeliveryChecklistAutomationStore.AutomationPath,
            packageDeliveryChecklistAutomationReceipt,
            packageDeliveryChecklistAutomationReceipts,
            WorkshopPackageDeliveryChecklistAutomationReceiptStore.ReceiptPath,
            packageDeliveryExecution,
            packageDeliveryExecutions,
            WorkshopPackageDeliveryExecutionStore.ExecutionPath,
            packageDeliveryExecutionReceipt,
            packageDeliveryExecutionReceipts,
            WorkshopPackageDeliveryExecutionReceiptStore.ReceiptPath,
            packageDeliveryFollowUpRenewal,
            packageDeliveryFollowUpRenewals,
            WorkshopPackageDeliveryFollowUpRenewalStore.FollowUpPath,
            packageDeliveryFollowUpRenewalReceipt,
            packageDeliveryFollowUpRenewalReceipts,
            WorkshopPackageDeliveryFollowUpRenewalReceiptStore.ReceiptPath,
            packageDeliveryQualityOutcome,
            packageDeliveryQualityOutcomes,
            WorkshopPackageDeliveryQualityOutcomeStore.OutcomePath,
            packageDeliveryQualityOutcomeReceipt,
            packageDeliveryQualityOutcomeReceipts,
            WorkshopPackageDeliveryQualityOutcomeReceiptStore.ReceiptPath,
            packageDeliveryAccountGrowthLinkage,
            packageDeliveryAccountGrowthLinkages,
            WorkshopPackageDeliveryAccountGrowthLinkageStore.LinkagePath,
            packageDeliveryAccountGrowthReceipt,
            packageDeliveryAccountGrowthReceipts,
            WorkshopPackageDeliveryAccountGrowthReceiptStore.ReceiptPath,
            packageDeliveryRetentionReport,
            packageDeliveryRetentionReports,
            WorkshopPackageDeliveryRetentionReportStore.ReportPath,
            packageDeliveryRetentionReportReceipt,
            packageDeliveryRetentionReportReceipts,
            WorkshopPackageDeliveryRetentionReportReceiptStore.ReceiptPath,
            packageDeliveryGrowthAction,
            packageDeliveryGrowthActions,
            WorkshopPackageDeliveryGrowthActionStore.ActionPath,
            packageDeliveryGrowthActionReceipt,
            packageDeliveryGrowthActionReceipts,
            WorkshopPackageDeliveryGrowthActionReceiptStore.ReceiptPath,
            operationsBoard,
            statusFeedback,
            statusFeedbackRecords,
            WorkshopCustomerServiceStatusStore.StatusPath,
            lifecycleAction,
            lifecycleActions,
            WorkshopServiceLifecycleActionStore.ActionPath,
            lifecycleReceipt,
            lifecycleReceipts,
            WorkshopServiceLifecycleReceiptStore.ReceiptPath,
            lifecycleStatus,
            lifecycleStatuses,
            WorkshopServiceLifecycleStatusStore.StatusPath,
            revisedTimingPayload,
            revisedTimingPayloads,
            WorkshopEpochRevisedCalendarTimingPayloadStore.PayloadPath,
            revisedTimingReceipt,
            revisedTimingReceipts,
            WorkshopRevisedCalendarTimingReceiptStore.ReceiptPath,
            revisedTimingStatus,
            revisedTimingStatuses,
            WorkshopRevisedCalendarTimingStatusStore.StatusPath,
            timingAwareFollowUp,
            timingAwareFollowUps,
            WorkshopTimingAwareServiceFollowUpStore.FollowUpPath,
            timingAwareRenewalReceipt,
            timingAwareRenewalReceipts,
            WorkshopTimingAwareRenewalReceiptStore.ReceiptPath,
            deliveryOutcomeAutomation,
            deliveryOutcomeAutomations,
            WorkshopDeliveryOutcomeAutomationStore.AutomationPath,
            deliveryOutcomeAutomationReceipt,
            deliveryOutcomeAutomationReceipts,
            WorkshopDeliveryOutcomeAutomationReceiptStore.ReceiptPath,
            accountGrowthAutomation,
            accountGrowthAutomations,
            WorkshopAccountGrowthAutomationStore.AutomationPath,
            accountGrowthAutomationReceipt,
            accountGrowthAutomationReceipts,
            WorkshopAccountGrowthAutomationReceiptStore.ReceiptPath);
    }

    private static WorkshopRevenueExecutionReceipt ExecuteNativeOrFallback(string intentKind)
    {
        try
        {
            return WorkshopNative.ExecuteRevenueCommand(intentKind);
        }
        catch
        {
            return WorkshopNative.ExecuteRevenueCommandOrFallback(intentKind);
        }
    }
}
