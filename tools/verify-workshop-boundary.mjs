import fs from "node:fs";

function fail(message) {
  console.error(`verification failed: ${message}`);
  process.exit(1);
}

function read(path) {
  return fs.readFileSync(new URL(path, import.meta.url), "utf8");
}

const boundary = read("../docs/product-boundary.md");
const monitor = read("../docs/monitor-contract.md");
const preserved = read("../docs/preserved-revenue-work-index.md");
const readme = read("../README.md");
const root = read("../web/index.html");
const app = read("../web/app/index.html");
const portal = read("../web/webportal/index.html");
const data = read("../web/shared/workshop-data.js");
const script = read("../web/shared/workshop.js");
const styles = read("../web/shared/styles.css");
const header = read("../native/workshop_core.h");
const source = read("../native/workshop_core.c");
const appBridgeHeader = read("../native/workshop_app_bridge.h");
const appBridgeSource = read("../native/workshop_app_bridge.c");
const appBridgeSmoke = read("../native/workshop_app_bridge_smoke.c");
const cmake = read("../CMakeLists.txt");
const packageJson = read("../package.json");
const runtime = read("../docs/runtime-and-packaging.md");
const appProject = read("../src/Workshop.App/Workshop.App.csproj");
const appProgram = read("../src/Workshop.App/Program.cs");
const appShellSmoke = read("../src/Workshop.App/WorkshopShellSmoke.cs");
const appXaml = read("../src/Workshop.App/MainWindow.axaml");
const appNative = read("../src/Workshop.App/Native/WorkshopNative.cs");
const appViewModel = read("../src/Workshop.App/ViewModels/MainWindowViewModel.cs");
const appHistoryEntry = read("../src/Workshop.App/Models/WorkshopRevenueExecutionHistoryEntry.cs");
const appHistoryStore = read("../src/Workshop.App/Services/WorkshopRevenueExecutionHistoryStore.cs");
const appServiceInboxEntry = read("../src/Workshop.App/Models/WorkshopWebportalServiceRequest.cs");
const appServiceInboxStore = read("../src/Workshop.App/Services/WorkshopServiceRequestInboxStore.cs");
const appServiceCommandReceipt = read("../src/Workshop.App/Models/WorkshopServiceRevenueCommandReceipt.cs");
const appServiceCommandStore = read("../src/Workshop.App/Services/WorkshopServiceRevenueCommandReceiptStore.cs");
const appOperationsBoard = read("../src/Workshop.App/Models/WorkshopRevenueOperationsBoardSnapshot.cs");
const appCustomerStatus = read("../src/Workshop.App/Models/WorkshopCustomerServiceStatusRecord.cs");
const appCustomerStatusStore = read("../src/Workshop.App/Services/WorkshopCustomerServiceStatusStore.cs");
const appLifecycleAction = read("../src/Workshop.App/Models/WorkshopServiceLifecycleAction.cs");
const appLifecycleReceipt = read("../src/Workshop.App/Models/WorkshopServiceLifecycleReceipt.cs");
const appLifecycleStatus = read("../src/Workshop.App/Models/WorkshopServiceLifecycleStatusRecord.cs");
const appRevisedTimingPayload = read("../src/Workshop.App/Models/WorkshopEpochRevisedCalendarTimingPayload.cs");
const appRevisedTimingReceipt = read("../src/Workshop.App/Models/WorkshopRevisedCalendarTimingReceipt.cs");
const appRevisedTimingStatus = read("../src/Workshop.App/Models/WorkshopRevisedCalendarTimingStatusRecord.cs");
const appTimingAwareFollowUp = read("../src/Workshop.App/Models/WorkshopTimingAwareServiceFollowUp.cs");
const appTimingAwareRenewalReceipt = read("../src/Workshop.App/Models/WorkshopTimingAwareRenewalReceipt.cs");
const appDeliveryOutcomeAutomation = read("../src/Workshop.App/Models/WorkshopDeliveryOutcomeAutomationRecord.cs");
const appDeliveryOutcomeAutomationReceipt = read("../src/Workshop.App/Models/WorkshopDeliveryOutcomeAutomationReceipt.cs");
const appAccountGrowthAutomation = read("../src/Workshop.App/Models/WorkshopAccountGrowthAutomationRecord.cs");
const appAccountGrowthAutomationReceipt = read("../src/Workshop.App/Models/WorkshopAccountGrowthAutomationReceipt.cs");
const appAraReviewQueue = read("../src/Workshop.App/Models/WorkshopAraReviewQueueRecord.cs");
const appAraReviewDecision = read("../src/Workshop.App/Models/WorkshopAraOperatorReviewDecision.cs");
const appAraReviewStatusReceipt = read("../src/Workshop.App/Models/WorkshopAraReviewStatusReceipt.cs");
const appAraMethodMaterialization = read("../src/Workshop.App/Models/WorkshopAraMethodMaterializationRecord.cs");
const appAraMaterializationReceipt = read("../src/Workshop.App/Models/WorkshopAraMaterializationReceipt.cs");
const appServiceMaterialReuse = read("../src/Workshop.App/Models/WorkshopServiceMaterialReuseRecord.cs");
const appServiceMaterialReuseReceipt = read("../src/Workshop.App/Models/WorkshopServiceMaterialReuseReceipt.cs");
const appPackageDeliveryChecklist = read("../src/Workshop.App/Models/WorkshopPackageDeliveryChecklistRecord.cs");
const appPackageDeliveryChecklistReceipt = read("../src/Workshop.App/Models/WorkshopPackageDeliveryChecklistReceipt.cs");
const appPackageDeliveryChecklistAutomation = read("../src/Workshop.App/Models/WorkshopPackageDeliveryChecklistAutomationRecord.cs");
const appPackageDeliveryChecklistAutomationReceipt = read("../src/Workshop.App/Models/WorkshopPackageDeliveryChecklistAutomationReceipt.cs");
const appPackageDeliveryExecution = read("../src/Workshop.App/Models/WorkshopPackageDeliveryExecutionRecord.cs");
const appPackageDeliveryExecutionReceipt = read("../src/Workshop.App/Models/WorkshopPackageDeliveryExecutionReceipt.cs");
const appPackageDeliveryFollowUpRenewal = read("../src/Workshop.App/Models/WorkshopPackageDeliveryFollowUpRenewalRecord.cs");
const appPackageDeliveryFollowUpRenewalReceipt = read("../src/Workshop.App/Models/WorkshopPackageDeliveryFollowUpRenewalReceipt.cs");
const appPackageDeliveryQualityOutcome = read("../src/Workshop.App/Models/WorkshopPackageDeliveryQualityOutcomeRecord.cs");
const appPackageDeliveryQualityOutcomeReceipt = read("../src/Workshop.App/Models/WorkshopPackageDeliveryQualityOutcomeReceipt.cs");
const appPackageDeliveryAccountGrowthLinkage = read("../src/Workshop.App/Models/WorkshopPackageDeliveryAccountGrowthLinkageRecord.cs");
const appPackageDeliveryAccountGrowthReceipt = read("../src/Workshop.App/Models/WorkshopPackageDeliveryAccountGrowthReceipt.cs");
const appLifecycleActionStore = read("../src/Workshop.App/Services/WorkshopServiceLifecycleActionStore.cs");
const appLifecycleReceiptStore = read("../src/Workshop.App/Services/WorkshopServiceLifecycleReceiptStore.cs");
const appLifecycleStatusStore = read("../src/Workshop.App/Services/WorkshopServiceLifecycleStatusStore.cs");
const appRevisedTimingPayloadStore = read("../src/Workshop.App/Services/WorkshopEpochRevisedCalendarTimingPayloadStore.cs");
const appRevisedTimingReceiptStore = read("../src/Workshop.App/Services/WorkshopRevisedCalendarTimingReceiptStore.cs");
const appRevisedTimingStatusStore = read("../src/Workshop.App/Services/WorkshopRevisedCalendarTimingStatusStore.cs");
const appTimingAwareFollowUpStore = read("../src/Workshop.App/Services/WorkshopTimingAwareServiceFollowUpStore.cs");
const appTimingAwareRenewalReceiptStore = read("../src/Workshop.App/Services/WorkshopTimingAwareRenewalReceiptStore.cs");
const appDeliveryOutcomeAutomationStore = read("../src/Workshop.App/Services/WorkshopDeliveryOutcomeAutomationStore.cs");
const appDeliveryOutcomeAutomationReceiptStore = read("../src/Workshop.App/Services/WorkshopDeliveryOutcomeAutomationReceiptStore.cs");
const appAccountGrowthAutomationStore = read("../src/Workshop.App/Services/WorkshopAccountGrowthAutomationStore.cs");
const appAccountGrowthAutomationReceiptStore = read("../src/Workshop.App/Services/WorkshopAccountGrowthAutomationReceiptStore.cs");
const appAraReviewQueueStore = read("../src/Workshop.App/Services/WorkshopAraReviewQueueStore.cs");
const appAraReviewDecisionStore = read("../src/Workshop.App/Services/WorkshopAraOperatorReviewDecisionStore.cs");
const appAraReviewStatusReceiptStore = read("../src/Workshop.App/Services/WorkshopAraReviewStatusReceiptStore.cs");
const appAraMethodMaterializationStore = read("../src/Workshop.App/Services/WorkshopAraMethodMaterializationStore.cs");
const appAraMaterializationReceiptStore = read("../src/Workshop.App/Services/WorkshopAraMaterializationReceiptStore.cs");
const appServiceMaterialReuseStore = read("../src/Workshop.App/Services/WorkshopServiceMaterialReuseStore.cs");
const appServiceMaterialReuseReceiptStore = read("../src/Workshop.App/Services/WorkshopServiceMaterialReuseReceiptStore.cs");
const appPackageDeliveryChecklistStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryChecklistStore.cs");
const appPackageDeliveryChecklistReceiptStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryChecklistReceiptStore.cs");
const appPackageDeliveryChecklistAutomationStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryChecklistAutomationStore.cs");
const appPackageDeliveryChecklistAutomationReceiptStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryChecklistAutomationReceiptStore.cs");
const appPackageDeliveryExecutionStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryExecutionStore.cs");
const appPackageDeliveryExecutionReceiptStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryExecutionReceiptStore.cs");
const appPackageDeliveryFollowUpRenewalStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryFollowUpRenewalStore.cs");
const appPackageDeliveryFollowUpRenewalReceiptStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryFollowUpRenewalReceiptStore.cs");
const appPackageDeliveryQualityOutcomeStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryQualityOutcomeStore.cs");
const appPackageDeliveryQualityOutcomeReceiptStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryQualityOutcomeReceiptStore.cs");
const appPackageDeliveryAccountGrowthLinkageStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryAccountGrowthLinkageStore.cs");
const appPackageDeliveryAccountGrowthReceiptStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryAccountGrowthReceiptStore.cs");
const epochScheduleTemplateDataUrl = new URL("../../EPOCH/web/shared/epoch-data.js", import.meta.url);
const epochScheduleTemplateData = fs.existsSync(epochScheduleTemplateDataUrl) ? fs.readFileSync(epochScheduleTemplateDataUrl, "utf8") : "";
const {
  createAraAssignmentForPacket,
  createAraOperatorReviewDecisionForQueue,
  createAraRevenuePacketForOpportunity,
  createAraReviewCompletionForAssignment,
  createAraReviewQueueForPacket,
  createAraReviewReceiptForPacket,
  createAraReviewStatusReceiptForDecision,
  createAraMethodMaterializationForDecision,
  createAraMaterializationReceiptForRecord,
  createServiceMaterialReuseForMaterialization,
  createServiceMaterialReuseReceiptForRecord,
  createPackageDeliveryChecklistForReuse,
  createPackageDeliveryChecklistReceiptForRecord,
  createPackageDeliveryChecklistAutomationForChecklist,
  createPackageDeliveryChecklistAutomationReceiptForRecord,
  createPackageDeliveryExecutionForAutomation,
  createPackageDeliveryExecutionReceiptForRecord,
  createPackageDeliveryFollowUpRenewalForExecutionReceipt,
  createPackageDeliveryFollowUpRenewalReceiptForRecord,
  createPackageDeliveryQualityOutcomeForReceipts,
  createPackageDeliveryQualityOutcomeReceiptForRecord,
  createPackageDeliveryAccountGrowthLinkageForQualityOutcomeReceipt,
  createPackageDeliveryAccountGrowthReceiptForLinkage,
  createAccountGrowthPlanForRetention,
  createCustomerStatusEventsForRequest,
  createCustomerStatusEventForCapacityWaitlist,
  createCustomerStatusEventForTimingReturn,
  createCustomerStatusEventForRecurringSeries,
  createCustomerAccountForRequest,
  createCustomerAccountHistoryForOutcome,
  createCustomerFollowUpForRenewal,
  createCohortCapacityPlanForCohortPlan,
  createCohortEnrollmentForPlans,
  createCohortOutcomeReportForLifecycle,
  createCohortPlanForRequest,
  createCohortPlanningReceiptForPlan,
  createCohortProgressStatusEventForOutcome,
  createCompatibilityGateForRequest,
  createCrmAraReceiptForRequest,
  createCrmAccountForRequest,
  createCrmOpportunityForRequest,
  createDeliveryLifecycleForRequest,
  createDeliveryTransitionForCapacityWaitlist,
  createDeliveryTransitionForRecurringSeries,
  createDeliveryTransitionForTimingReturn,
  createDeliveryResultReceiptForOutcome,
  createDeliveryTransitionsForRequest,
  createEpochCapacityWaitlistConsumptionForPayload,
  createEpochCapacityWaitlistPayloadForHandoff,
  createEpochHandoffForRequest,
  createEpochRevisedCalendarTimingConsumptionForPayload,
  createEpochRevisedCalendarTimingPayloadForHandoff,
  createEpochRecurringSeriesConsumptionForPayload,
  createEpochRecurringSeriesPayloadForHandoff,
  createEpochTimingReturnConsumptionForPayload,
  createEpochTimingReturnPayloadForHandoff,
  createOperatingReadinessReceiptForRequest,
  createOutcomeRenewalReceiptForReport,
  createPackageEligibilityForRequest,
  createReferralOpportunityForRetention,
  createRenewalOpportunityForOutcome,
  createRetentionHealthForAccount,
  createRevenueOutcomeForRequest,
  createServiceLifecycleActionRecord,
  createServiceRequestRecord,
  createSubmissionReviewCycleForRequest,
  createSubmissionForRequest,
  createSubscriptionPlanForCohortPlan,
  createSubscriptionLifecycleForPlan,
  createSubscriptionLifecycleReceiptForLifecycle,
  createSubscriptionRenewalReportForOutcome,
  createTransitionReceiptsForRequest,
  createCapacityWaitlistReceiptForConsumption,
  createCustomerStatusEventForRevisedCalendarTiming,
  createRecurringSeriesReceiptForConsumption,
  createRevisedCalendarTimingReceiptForConsumption,
  createTimingAwareServiceFollowUpForRevisedTiming,
  createTimingAwareRenewalReceiptForFollowUp,
  createDeliveryOutcomeAutomationForReceipt,
  createDeliveryOutcomeAutomationReceiptForAutomation,
  createAccountGrowthAutomationForDeliveryOutcome,
  createAccountGrowthAutomationReceiptForAutomation,
  createTimingReturnReceiptForConsumption,
  applyEpochCapacityWaitlistConsumption,
  applyEpochRevisedCalendarTimingConsumption,
  applyEpochRecurringSeriesConsumption,
  applyEpochTimingReturnConsumption,
  createDeliveryTransitionForRevisedCalendarTiming,
  createGrowthFollowUpReceiptForPlan,
  createReferralConversionForOpportunity,
  createGrowthPlanAcceptanceForPlan,
  createExpansionServiceRequestForAcceptance,
  createConversionStatusEventForExpansion,
  createConversionReceiptForExpansion,
  applyCohortPlanningRecords,
  initialWorkshopLedger,
  serviceLifecycleActionLabel
} = await import("../web/shared/workshop-data.js");

for (const phrase of ["WORKSHOP owns", "EPOCH remains the schedule provider", "Japan-facing language"]) {
  if (!boundary.includes(phrase)) fail(`boundary missing ${phrase}`);
}

for (const route of [
  "/workshop-monitor.html",
  "/workshop-dashboard.html",
  "/workshop-timeline.html",
  "/workshop-revenue-audit.html",
  "/workshop-delivery-log.html"
]) {
  if (!monitor.includes(route)) fail(`monitor contract missing ${route}`);
}

for (const phrase of ["Compatibility aliases may redirect", "/workshop-work-audit.html", "/workshop-runner-log.html"]) {
  if (!monitor.includes(phrase)) fail(`monitor contract missing alias note ${phrase}`);
}

for (const phrase of ["customer account continuity counts", "renewal-ready counts", "customer follow-up counts"]) {
  if (!monitor.includes(phrase)) fail(`monitor contract missing account-continuity aggregate ${phrase}`);
}

for (const phrase of ["retention-health counts", "referral-ready counts", "account-growth-plan counts", "growth follow-up receipt counts"]) {
  if (!monitor.includes(phrase)) fail(`monitor contract missing growth aggregate ${phrase}`);
}

for (const phrase of ["EPOCH recurring-series payload counts", "recurring-series consumption counts", "recurring-series receipt counts"]) {
  if (!monitor.includes(phrase)) fail(`monitor contract missing recurring-series aggregate ${phrase}`);
}

for (const phrase of ["EPOCH capacity/waitlist payload counts", "capacity/waitlist consumption counts", "capacity/waitlist receipt counts"]) {
  if (!monitor.includes(phrase)) fail(`monitor contract missing capacity/waitlist aggregate ${phrase}`);
}

for (const phrase of ["cohort outcome report counts", "subscription renewal report counts", "customer-safe cohort progress event counts", "outcome renewal receipt counts"]) {
  if (!monitor.includes(phrase)) fail(`monitor contract missing outcome renewal aggregate ${phrase}`);
}

for (const phrase of ["WORKSHOP App", "WORKSHOP Webportal", "WORKSHOP MONITOR"]) {
  const combined = `${root}\n${app}\n${portal}\n${monitor}\n${readme}`;
  if (!combined.includes(phrase)) fail(`surface contract missing ${phrase}`);
}

for (const phrase of [
  "Service, Delivery, And Income-Stream Bench",
  "Revenue And Delivery Command",
  "Service Request And Submission Portal",
  "Delivery Lifecycle Status",
  "EPOCH Payload Preview",
  "Transition Receipts",
  "EPOCH Provides Time",
  "Open EPOCH Scheduling Portal",
  "Package Eligibility",
  "Submission Review Cycles",
  "Cohort And Subscription Plans",
  "Package Readiness",
  "Submission Review Status",
  "Cohort And Materials Access",
  "Compatibility Review Route",
  "CRM Opportunity Routing",
  "ARA Revenue Packets",
  "ARA Assignment Review",
  "Service Planning Status",
  "Service Review Status",
  "Revenue Outcome Reporting",
  "Delivery Result Receipts",
  "ARA Review Completion",
  "ARA Review Queue",
  "ARA Operator Review Decisions",
  "ARA Review Status Receipts",
  "ARA Review Status Receipt Export",
  "ARA Method Materialization",
  "ARA Materialization Receipts",
  "ARA Materialization Receipt Export",
  "Reviewed Method Status",
  "Operator Review Status",
  "Service Result Reports",
  "Customer Accounts",
  "Account History",
  "Renewal Opportunities",
  "Customer Follow-Ups",
  "Service History",
  "Follow-Up Status",
  "Customer Follow-Up",
  "Retention Health",
  "Referral Opportunities",
  "Account Growth Plans",
  "Growth Follow-Up Receipts",
  "Retention Status",
  "Referral Path",
  "Growth Plan Status",
  "Referral Conversions",
  "Growth Plan Acceptances",
  "Expansion Service Requests",
  "Conversion Status Events",
  "Conversion Receipts",
  "Referral Conversion Status",
  "Growth Acceptance Status",
  "Expansion Request Status",
  "Customer Conversion Status",
  "EPOCH Timing Returns",
  "Timing Return Consumption",
  "Timing Return Receipts",
  "Timing Return Status",
  "EPOCH Revised Timing",
  "Revised Timing Consumption",
  "Revised Timing Receipts",
  "EPOCH Revised Timing Context",
  "portal-revised-calendar-timing-status",
  "Timing-Aware Service Follow-Ups",
  "Timing-Aware Renewal Receipts",
  "Delivery Outcome Automation",
  "Delivery Outcome Automation Receipts",
  "Delivery Outcome Automation Receipt Export",
  "Timing-Aware Follow-Up Status",
  "portal-timing-aware-follow-up-status",
  "portal-timing-aware-renewal-receipts",
  "portal-delivery-outcome-automation-receipts",
  "portal-delivery-outcome-automation-receipt-export",
  "EPOCH Capacity Waitlist",
  "Capacity Waitlist Consumption",
  "Capacity Waitlist Receipts",
  "Timing Capacity Status",
  "EPOCH Recurring Series",
  "Recurring Series Consumption",
  "Recurring Series Receipts",
  "Recurring Service Status",
  "Cohort Capacity Planning",
  "Subscription Planning",
  "Cohort Planning Receipts",
  "Cohort Capacity And Subscription Status",
  "Cohort Enrollments",
  "Subscription Lifecycle",
  "Subscription Lifecycle Receipts",
  "Enrollment And Subscription Status",
  "Cohort Outcome Reports",
  "Subscription Renewal Reports",
  "Cohort Progress Status Events",
  "Outcome Renewal Receipts",
  "Cohort Outcome Status",
  "Subscription Renewal Status",
  "Cohort Progress Updates",
  "Market Research Lab",
  "Competitor Price Anchors",
  "Offer Experiment Board",
  "ROI / Time / Resource Lab",
  "Revenue Audit",
  "Revenue Receipts",
  "Delivery Log",
  "Revenue Search",
  "Offer Template",
  "Service Page Manager",
  "Material Asset Library",
  "Marketing Channel Experiments",
  "ARA Work Packet Factory",
  "Service Offer Templates",
  "Service Pages",
  "Service Status Export",
  "Service Lifecycle Request",
  "Service Lifecycle Status Export",
  "customer-service-status-import-form",
  "customer-service-status-file",
  "portal-customer-service-status-export",
  "service-lifecycle-action-form",
  "service-lifecycle-action-select",
  "portal-service-lifecycle-actions",
  "service-lifecycle-status-import-form",
  "service-lifecycle-status-file",
  "portal-service-lifecycle-status-export",
  "delivery-outcome-automation-receipt-import-form",
  "delivery-outcome-automation-receipt-file",
  "delivery-outcome-automation-receipt-summary",
  "clear-delivery-outcome-automation-receipts",
  "account-growth-automation-receipt-import-form",
  "account-growth-automation-receipt-file",
  "account-growth-automation-receipt-summary",
  "clear-account-growth-automation-receipts",
  "ara-review-queue-list",
  "ara-operator-review-decision-list",
  "ara-review-status-receipt-list",
  "ara-review-status-receipt-import-form",
  "ara-review-status-receipt-file",
  "ara-review-status-receipt-summary",
  "portal-ara-review-status-receipts",
  "portal-ara-review-status-receipt-export",
  "clear-ara-review-status-receipts",
  "ara-method-materialization-list",
  "ara-materialization-receipt-list",
  "ara-materialization-receipt-import-form",
  "ara-materialization-receipt-file",
  "ara-materialization-receipt-summary",
  "portal-ara-materialization-status",
  "portal-ara-materialization-receipt-export",
  "clear-ara-materialization-receipts",
  "service-material-reuse-list",
  "service-material-reuse-receipt-list",
  "service-material-reuse-receipt-import-form",
  "service-material-reuse-receipt-file",
  "service-material-reuse-receipt-summary",
  "portal-service-material-reuse-status",
  "portal-service-material-reuse-receipt-export",
  "clear-service-material-reuse-receipts",
  "package-delivery-checklist-list",
  "package-delivery-checklist-receipt-list",
  "package-delivery-checklist-receipt-import-form",
  "package-delivery-checklist-receipt-file",
  "package-delivery-checklist-receipt-summary",
  "portal-package-delivery-checklist-status",
  "portal-package-delivery-checklist-receipt-export",
  "clear-package-delivery-checklist-receipts",
  "package-delivery-checklist-automation-list",
  "package-delivery-checklist-automation-receipt-list",
  "package-delivery-checklist-automation-receipt-import-form",
  "package-delivery-checklist-automation-receipt-file",
  "package-delivery-checklist-automation-receipt-summary",
  "portal-package-delivery-checklist-automation-status",
  "portal-package-delivery-checklist-automation-receipt-export",
  "clear-package-delivery-checklist-automation-receipts",
  "package-delivery-execution-list",
  "package-delivery-execution-receipt-list",
  "package-delivery-execution-receipt-import-form",
  "package-delivery-execution-receipt-file",
  "package-delivery-execution-receipt-summary",
  "portal-package-delivery-execution-status",
  "portal-package-delivery-execution-receipt-export",
  "clear-package-delivery-execution-receipts",
  "package-delivery-followup-renewal-list",
  "package-delivery-followup-renewal-receipt-list",
  "package-delivery-followup-renewal-receipt-import-form",
  "package-delivery-followup-renewal-receipt-file",
  "package-delivery-followup-renewal-receipt-summary",
  "portal-package-delivery-followup-renewal-status",
  "portal-package-delivery-followup-renewal-receipt-export",
  "clear-package-delivery-followup-renewal-receipts",
  "stat-package-delivery-account-growth-linkages",
  "stat-package-delivery-account-growth-receipts",
  "package-delivery-account-growth-linkage-list",
  "package-delivery-account-growth-receipt-list",
  "package-delivery-account-growth-receipt-import-form",
  "package-delivery-account-growth-receipt-file",
  "package-delivery-account-growth-receipt-summary",
  "clear-package-delivery-account-growth-receipts",
  "portal-package-delivery-account-growth-status",
  "portal-package-delivery-account-growth-receipt-export"
]) {
  const combined = `${root}\n${app}\n${portal}`;
  if (!combined.includes(phrase)) fail(`WORKSHOP web surface missing ${phrase}`);
}

for (const phrase of ["revenueLanes", "submissions", "packages", "packageEligibility", "marketResearchRecords", "competitorPriceAnchors", "offerExperiments", "laborEstimates", "roiRecords", "revenueAuditRecords", "revenueReceipts", "deliveryLogEntries", "revenueSearchQueries", "revenueSearchResults", "offerTemplates", "servicePages", "materialAssets", "marketingChannelExperiments", "araWorkPackets", "ownerTimeBudgets", "submissionReviewCycles", "cohortPlans", "cohortCapacityPlans", "subscriptionPlans", "cohortPlanningReceipts", "cohortEnrollments", "subscriptionLifecycles", "subscriptionLifecycleReceipts", "cohortOutcomeReports", "subscriptionRenewalReports", "cohortProgressStatusEvents", "outcomeRenewalReceipts", "compatibilityGates", "crmAccounts", "araQueue", "crmOpportunities", "araRevenuePackets", "araAssignments", "araReviewReceipts", "revenueOutcomes", "deliveryResultReceipts", "araReviewCompletions", "araReviewQueues", "araOperatorReviewDecisions", "araReviewStatusReceipts", "araMethodMaterializations", "araMaterializationReceipts", "serviceMaterialReuseRecords", "serviceMaterialReuseReceipts", "packageDeliveryChecklists", "packageDeliveryChecklistReceipts", "packageDeliveryChecklistAutomations", "packageDeliveryChecklistAutomationReceipts", "packageDeliveryExecutions", "packageDeliveryExecutionReceipts", "packageDeliveryFollowUpRenewals", "packageDeliveryFollowUpRenewalReceipts", "packageDeliveryQualityOutcomes", "packageDeliveryQualityOutcomeReceipts", "packageDeliveryAccountGrowthLinkages", "packageDeliveryAccountGrowthReceipts", "customerAccounts", "customerAccountHistory", "renewalOpportunities", "customerFollowUps", "retentionHealth", "referralOpportunities", "accountGrowthPlans", "growthFollowUpReceipts", "referralConversions", "growthPlanAcceptances", "expansionServiceRequests", "conversionStatusEvents", "conversionReceipts", "accountGrowthAutomations", "accountGrowthAutomationReceipts", "epochTimingReturnPayloads", "epochTimingReturnConsumptions", "timingReturnReceipts", "epochRevisedCalendarTimingPayloads", "epochRevisedCalendarTimingConsumptions", "revisedCalendarTimingReceipts", "timingAwareServiceFollowUps", "timingAwareRenewalReceipts", "deliveryOutcomeAutomations", "deliveryOutcomeAutomationReceipts", "epochCapacityWaitlistPayloads", "epochCapacityWaitlistConsumptions", "capacityWaitlistReceipts", "epochRecurringSeriesPayloads", "epochRecurringSeriesConsumptions", "recurringSeriesReceipts", "deliveryTimeline", "deliveryLifecycles", "serviceLifecycleActions", "deliveryTransitions", "customerStatusEvents"]) {
  if (!data.includes(phrase)) fail(`WORKSHOP data missing ${phrase}`);
}

for (const phrase of [
  "WORKSHOP_LEDGER_KEY",
  "initialWorkshopLedger",
  "serviceRequests",
  "epochTimeHandoffs",
  "packageEligibility",
  "marketResearchRecords",
  "competitorPriceAnchors",
  "offerExperiments",
  "laborEstimates",
  "roiRecords",
  "revenueAuditRecords",
  "revenueReceipts",
  "deliveryLogEntries",
  "revenueSearchQueries",
  "revenueSearchResults",
  "offerTemplates",
  "servicePages",
  "materialAssets",
  "marketingChannelExperiments",
  "araWorkPackets",
  "ownerTimeBudgets",
  "submissionReviewCycles",
  "cohortPlans",
  "cohortCapacityPlans",
  "subscriptionPlans",
  "cohortPlanningReceipts",
  "cohortEnrollments",
  "subscriptionLifecycles",
  "subscriptionLifecycleReceipts",
  "cohortOutcomeReports",
  "subscriptionRenewalReports",
  "cohortProgressStatusEvents",
  "outcomeRenewalReceipts",
  "compatibilityGates",
  "crmOpportunities",
  "araRevenuePackets",
  "araAssignments",
  "araReviewReceipts",
  "revenueOutcomes",
  "deliveryResultReceipts",
  "araReviewCompletions",
  "araReviewQueues",
  "araOperatorReviewDecisions",
  "araReviewStatusReceipts",
  "araMethodMaterializations",
  "araMaterializationReceipts",
  "serviceMaterialReuseRecords",
  "serviceMaterialReuseReceipts",
  "packageDeliveryChecklists",
  "packageDeliveryChecklistReceipts",
  "packageDeliveryChecklistAutomations",
  "packageDeliveryChecklistAutomationReceipts",
  "packageDeliveryExecutions",
  "packageDeliveryExecutionReceipts",
  "packageDeliveryFollowUpRenewals",
  "packageDeliveryFollowUpRenewalReceipts",
  "packageDeliveryQualityOutcomes",
  "packageDeliveryQualityOutcomeReceipts",
  "packageDeliveryAccountGrowthLinkages",
  "packageDeliveryAccountGrowthReceipts",
  "customerAccounts",
  "customerAccountHistory",
  "renewalOpportunities",
  "customerFollowUps",
  "retentionHealth",
  "referralOpportunities",
  "accountGrowthPlans",
  "growthFollowUpReceipts",
  "referralConversions",
  "growthPlanAcceptances",
  "expansionServiceRequests",
  "conversionStatusEvents",
  "conversionReceipts",
  "accountGrowthAutomations",
  "accountGrowthAutomationReceipts",
  "epochTimingReturnPayloads",
  "epochTimingReturnConsumptions",
  "timingReturnReceipts",
  "epochRevisedCalendarTimingPayloads",
  "epochRevisedCalendarTimingConsumptions",
  "revisedCalendarTimingReceipts",
  "timingAwareServiceFollowUps",
  "timingAwareRenewalReceipts",
  "deliveryOutcomeAutomations",
  "deliveryOutcomeAutomationReceipts",
  "epochCapacityWaitlistPayloads",
  "epochCapacityWaitlistConsumptions",
  "capacityWaitlistReceipts",
  "epochRecurringSeriesPayloads",
  "epochRecurringSeriesConsumptions",
  "recurringSeriesReceipts",
  "deliveryLifecycles",
  "serviceLifecycleActions",
  "serviceLifecycleActionOptions",
  "createServiceLifecycleActionRecord",
  "serviceLifecycleActionLabel",
  "deliveryTransitions",
  "customerStatusEvents",
  "deliveryStates",
  "createServiceRequestRecord",
  "createPackageEligibilityForRequest",
  "createCompatibilityGateForRequest",
  "createSubmissionForRequest",
  "createSubmissionReviewCycleForRequest",
  "createCohortPlanForRequest",
  "createCohortCapacityPlanForCohortPlan",
  "createSubscriptionPlanForCohortPlan",
  "createCohortPlanningReceiptForPlan",
  "applyCohortPlanningRecords",
  "createCohortEnrollmentForPlans",
  "createSubscriptionLifecycleForPlan",
  "createSubscriptionLifecycleReceiptForLifecycle",
  "createCohortOutcomeReportForLifecycle",
  "createSubscriptionRenewalReportForOutcome",
  "createCohortProgressStatusEventForOutcome",
  "createOutcomeRenewalReceiptForReport",
  "createEpochHandoffForRequest",
  "createEpochTimingReturnPayloadForHandoff",
  "createEpochTimingReturnConsumptionForPayload",
  "createCustomerStatusEventForTimingReturn",
  "createDeliveryTransitionForTimingReturn",
  "createTimingReturnReceiptForConsumption",
  "applyEpochTimingReturnConsumption",
  "createEpochRevisedCalendarTimingPayloadForHandoff",
  "createEpochRevisedCalendarTimingConsumptionForPayload",
  "createCustomerStatusEventForRevisedCalendarTiming",
  "createDeliveryTransitionForRevisedCalendarTiming",
  "createRevisedCalendarTimingReceiptForConsumption",
  "createTimingAwareServiceFollowUpForRevisedTiming",
  "createTimingAwareRenewalReceiptForFollowUp",
  "createDeliveryOutcomeAutomationForReceipt",
  "createDeliveryOutcomeAutomationReceiptForAutomation",
  "createAccountGrowthAutomationForDeliveryOutcome",
  "createAccountGrowthAutomationReceiptForAutomation",
  "applyEpochRevisedCalendarTimingConsumption",
  "createEpochCapacityWaitlistPayloadForHandoff",
  "createEpochCapacityWaitlistConsumptionForPayload",
  "createCustomerStatusEventForCapacityWaitlist",
  "createDeliveryTransitionForCapacityWaitlist",
  "createCapacityWaitlistReceiptForConsumption",
  "applyEpochCapacityWaitlistConsumption",
  "createEpochRecurringSeriesPayloadForHandoff",
  "createEpochRecurringSeriesConsumptionForPayload",
  "createCustomerStatusEventForRecurringSeries",
  "createDeliveryTransitionForRecurringSeries",
  "createRecurringSeriesReceiptForConsumption",
  "applyEpochRecurringSeriesConsumption",
  "createDeliveryLifecycleForRequest",
  "createDeliveryTransitionsForRequest",
  "createCustomerStatusEventsForRequest",
  "createTransitionReceiptsForRequest",
  "createOperatingReadinessReceiptForRequest",
  "createCrmAccountForRequest",
  "createCrmOpportunityForRequest",
  "createAraRevenuePacketForOpportunity",
  "createAraAssignmentForPacket",
  "createAraReviewReceiptForPacket",
  "createRevenueOutcomeForRequest",
  "createDeliveryResultReceiptForOutcome",
  "createAraReviewCompletionForAssignment",
  "createAraReviewQueueForPacket",
  "createAraOperatorReviewDecisionForQueue",
  "createAraReviewStatusReceiptForDecision",
  "createAraMethodMaterializationForDecision",
  "createAraMaterializationReceiptForRecord",
  "createServiceMaterialReuseForMaterialization",
  "createServiceMaterialReuseReceiptForRecord",
  "createPackageDeliveryChecklistForReuse",
  "createPackageDeliveryChecklistReceiptForRecord",
  "createPackageDeliveryChecklistAutomationForChecklist",
  "createPackageDeliveryChecklistAutomationReceiptForRecord",
  "createPackageDeliveryExecutionForAutomation",
  "createPackageDeliveryExecutionReceiptForRecord",
  "createPackageDeliveryFollowUpRenewalForExecutionReceipt",
  "createPackageDeliveryFollowUpRenewalReceiptForRecord",
  "createPackageDeliveryQualityOutcomeForReceipts",
  "createPackageDeliveryQualityOutcomeReceiptForRecord",
  "createPackageDeliveryAccountGrowthLinkageForQualityOutcomeReceipt",
  "createPackageDeliveryAccountGrowthReceiptForLinkage",
  "createCustomerAccountForRequest",
  "createCustomerAccountHistoryForOutcome",
  "createRenewalOpportunityForOutcome",
  "createCustomerFollowUpForRenewal",
  "createRetentionHealthForAccount",
  "createReferralOpportunityForRetention",
  "createAccountGrowthPlanForRetention",
  "createGrowthFollowUpReceiptForPlan",
  "createReferralConversionForOpportunity",
  "createGrowthPlanAcceptanceForPlan",
  "createExpansionServiceRequestForAcceptance",
  "createConversionStatusEventForExpansion",
  "createConversionReceiptForExpansion",
  "createCrmAraReceiptForRequest",
  "compatibility-review",
  "requestPreview",
  "statusPreview",
  "operatorNextAction",
  "bridgeReady",
  "EIKEN 5 through 1",
  "laborTrapWarning",
  "humanReviewRequired",
  "customerSafeOnly",
  "market-eiken-writing-001"
]) {
  if (!data.includes(phrase)) fail(`WORKSHOP data missing ledger phrase ${phrase}`);
}

for (const phrase of [
  "localStorage",
  "WORKSHOP_LEDGER_KEY",
  "handleServiceRequest",
  "serviceReviewCustomerLabel",
  "service-request-form",
  "service-request-list",
  "package-eligibility-list",
  "market-research-list",
  "competitor-price-anchor-list",
  "offer-experiment-list",
  "labor-estimate-list",
  "roi-record-list",
  "owner-time-budget-list",
  "revenue-audit-list",
  "revenue-receipt-list",
  "delivery-log-list",
  "revenue-search-query-list",
  "revenue-search-result-list",
  "offer-template-list",
  "ara-work-packet-list",
  "compatibility-gate-list",
  "submission-cycle-list",
  "cohort-plan-list",
  "cohort-capacity-plan-list",
  "subscription-plan-list",
  "cohort-planning-receipt-list",
  "cohort-enrollment-list",
  "subscription-lifecycle-list",
  "subscription-lifecycle-receipt-list",
  "cohort-outcome-report-list",
  "subscription-renewal-report-list",
  "cohort-progress-status-event-list",
  "outcome-renewal-receipt-list",
  "crm-opportunity-list",
  "ara-revenue-packet-list",
  "ara-assignment-list",
  "ara-review-receipt-list",
  "revenue-outcome-list",
  "delivery-result-receipt-list",
  "ara-review-completion-list",
  "ara-review-queue-list",
  "ara-operator-review-decision-list",
  "ara-review-status-receipt-list",
  "customer-account-list",
  "customer-account-history-list",
  "renewal-opportunity-list",
  "customer-follow-up-list",
  "retention-health-list",
  "referral-opportunity-list",
  "account-growth-plan-list",
  "growth-follow-up-receipt-list",
  "referral-conversion-list",
  "growth-plan-acceptance-list",
  "expansion-service-request-list",
  "conversion-status-event-list",
  "conversion-receipt-list",
  "epoch-timing-return-list",
  "epoch-timing-consumption-list",
  "timing-return-receipt-list",
  "epoch-capacity-waitlist-list",
  "epoch-capacity-consumption-list",
  "capacity-waitlist-receipt-list",
  "epoch-recurring-series-list",
  "epoch-recurring-consumption-list",
  "recurring-series-receipt-list",
  "delivery-lifecycle-list",
  "delivery-transition-list",
  "customer-status-event-list",
  "epoch-handoff-list",
  "epoch-handoff-payload-list",
  "portal-delivery-lifecycle",
  "portal-package-readiness",
  "portal-compatibility-gates",
  "portal-submission-cycles",
  "portal-cohort-plans",
  "portal-cohort-planning-status",
  "portal-subscription-lifecycle-status",
  "portal-cohort-outcome-status",
  "portal-subscription-renewal-status",
  "portal-cohort-progress-events",
  "portal-outcome-renewal-receipts",
  "portal-service-planning-status",
  "portal-service-review-status",
  "portal-revenue-outcomes",
  "portal-delivery-results",
  "portal-account-history",
  "portal-renewal-status",
  "portal-follow-up-status",
  "portal-retention-status",
  "portal-referral-path",
  "portal-growth-plan-status",
  "portal-growth-receipts",
  "portal-referral-conversions",
  "portal-growth-acceptances",
  "portal-expansion-requests",
  "portal-conversion-status",
  "portal-conversion-receipts",
  "portal-timing-return-status",
  "portal-capacity-waitlist-status",
  "portal-recurring-series-status",
  "portal-offer-templates",
  "portal-revenue-receipts",
  "portal-delivery-log",
  "portal-revenue-search",
  "portal-customer-service-status-export",
  "portal-service-lifecycle-actions",
  "portal-service-lifecycle-status-export",
  "sanitizeCustomerPortalText",
  "sanitizeCustomerVisiblePortalCopy",
  "WORKSHOP_CUSTOMER_SERVICE_STATUS_EXPORT_KEY",
  "normalizeCustomerServiceStatusExport",
  "normalizeCustomerServiceStatusPayload",
  "loadCustomerServiceStatusExports",
  "saveCustomerServiceStatusExports",
  "customerServiceStatusExportState",
  "customer-service-status.json",
  "customer-service-status-import-form",
  "customer-service-status-file",
  "customer-service-status-export-summary",
  "handleCustomerServiceStatusImport",
  "handleClearCustomerServiceStatusExports",
  "WORKSHOP_SERVICE_LIFECYCLE_STATUS_EXPORT_KEY",
  "normalizeServiceLifecycleStatusExport",
  "normalizeServiceLifecycleStatusPayload",
  "loadServiceLifecycleStatusExports",
  "saveServiceLifecycleStatusExports",
  "serviceLifecycleStatusExportState",
  "service-lifecycle-action-form",
  "service-lifecycle-action-select",
  "service-lifecycle-lane-select",
  "service-lifecycle-status.json",
  "service-lifecycle-status-import-form",
  "service-lifecycle-status-file",
  "service-lifecycle-status-export-summary",
  "handleServiceLifecycleAction",
  "handleServiceLifecycleStatusImport",
  "handleClearServiceLifecycleStatusExports",
  "renderEpochRevisedCalendarTiming",
  "epoch-revised-calendar-timing-list",
  "epoch-revised-calendar-consumption-list",
  "revised-calendar-timing-receipt-list",
  "portal-revised-calendar-timing-status",
  "renderTimingAwareFollowUps",
  "timing-aware-follow-up-list",
  "timing-aware-renewal-receipt-list",
  "portal-timing-aware-follow-up-status",
  "portal-timing-aware-renewal-receipts",
  "delivery-outcome-automation-list",
  "delivery-outcome-automation-receipt-list",
  "portal-delivery-outcome-automation-receipts",
  "portal-delivery-outcome-automation-receipt-export",
  "account-growth-automation-list",
  "account-growth-automation-receipt-list",
  "portal-account-growth-automation-receipts",
  "portal-account-growth-automation-receipt-export",
  "portal-ara-review-status-receipts",
  "portal-ara-review-status-receipt-export",
  "WORKSHOP_DELIVERY_OUTCOME_AUTOMATION_RECEIPT_EXPORT_KEY",
  "normalizeDeliveryOutcomeAutomationReceiptExport",
  "normalizeDeliveryOutcomeAutomationReceiptPayload",
  "loadDeliveryOutcomeAutomationReceiptExports",
  "saveDeliveryOutcomeAutomationReceiptExports",
  "deliveryOutcomeAutomationReceiptExportState",
  "delivery-outcome-automation-receipts.json",
  "delivery-outcome-automation-receipt-import-form",
  "delivery-outcome-automation-receipt-file",
  "delivery-outcome-automation-receipt-summary",
  "handleDeliveryOutcomeAutomationReceiptImport",
  "handleClearDeliveryOutcomeAutomationReceiptExports",
  "WORKSHOP_ACCOUNT_GROWTH_AUTOMATION_RECEIPT_EXPORT_KEY",
  "normalizeAccountGrowthAutomationReceiptExport",
  "normalizeAccountGrowthAutomationReceiptPayload",
  "loadAccountGrowthAutomationReceiptExports",
  "saveAccountGrowthAutomationReceiptExports",
  "accountGrowthAutomationReceiptExportState",
  "account-growth-automation-receipts.json",
  "account-growth-automation-receipt-import-form",
  "account-growth-automation-receipt-file",
  "account-growth-automation-receipt-summary",
  "handleAccountGrowthAutomationReceiptImport",
  "handleClearAccountGrowthAutomationReceiptExports",
  "WORKSHOP_ARA_REVIEW_STATUS_RECEIPT_EXPORT_KEY",
  "normalizeAraReviewStatusReceiptExport",
  "normalizeAraReviewStatusReceiptPayload",
  "loadAraReviewStatusReceiptExports",
  "saveAraReviewStatusReceiptExports",
  "araReviewStatusReceiptExportState",
  "ara-review-status-receipts.json",
  "ara-review-status-receipt-import-form",
  "ara-review-status-receipt-file",
  "ara-review-status-receipt-summary",
  "handleAraReviewStatusReceiptImport",
  "handleClearAraReviewStatusReceiptExports",
  "WORKSHOP_ARA_MATERIALIZATION_RECEIPT_EXPORT_KEY",
  "normalizeAraMaterializationReceiptExport",
  "normalizeAraMaterializationReceiptPayload",
  "loadAraMaterializationReceiptExports",
  "saveAraMaterializationReceiptExports",
  "araMaterializationReceiptExportState",
  "ara-materialization-receipts.json",
  "ara-materialization-receipt-import-form",
  "ara-materialization-receipt-file",
  "ara-materialization-receipt-summary",
  "handleAraMaterializationReceiptImport",
  "handleClearAraMaterializationReceiptExports",
  "WORKSHOP_SERVICE_MATERIAL_REUSE_RECEIPT_EXPORT_KEY",
  "normalizeServiceMaterialReuseReceiptExport",
  "normalizeServiceMaterialReuseReceiptPayload",
  "loadServiceMaterialReuseReceiptExports",
  "saveServiceMaterialReuseReceiptExports",
  "serviceMaterialReuseReceiptExportState",
  "service-material-reuse-receipts.json",
  "service-material-reuse-receipt-import-form",
  "service-material-reuse-receipt-file",
  "service-material-reuse-receipt-summary",
  "handleServiceMaterialReuseReceiptImport",
  "handleClearServiceMaterialReuseReceiptExports",
  "WORKSHOP_PACKAGE_DELIVERY_CHECKLIST_RECEIPT_EXPORT_KEY",
  "normalizePackageDeliveryChecklistReceiptExport",
  "normalizePackageDeliveryChecklistReceiptPayload",
  "loadPackageDeliveryChecklistReceiptExports",
  "savePackageDeliveryChecklistReceiptExports",
  "packageDeliveryChecklistReceiptExportState",
  "package-delivery-checklist-receipts.json",
  "package-delivery-checklist-receipt-import-form",
  "package-delivery-checklist-receipt-file",
  "package-delivery-checklist-receipt-summary",
  "handlePackageDeliveryChecklistReceiptImport",
  "handleClearPackageDeliveryChecklistReceiptExports",
  "WORKSHOP_PACKAGE_DELIVERY_CHECKLIST_AUTOMATION_RECEIPT_EXPORT_KEY",
  "normalizePackageDeliveryChecklistAutomationReceiptExport",
  "normalizePackageDeliveryChecklistAutomationReceiptPayload",
  "loadPackageDeliveryChecklistAutomationReceiptExports",
  "savePackageDeliveryChecklistAutomationReceiptExports",
  "packageDeliveryChecklistAutomationReceiptExportState",
  "package-delivery-checklist-automation-receipts.json",
  "package-delivery-checklist-automation-receipt-import-form",
  "package-delivery-checklist-automation-receipt-file",
  "package-delivery-checklist-automation-receipt-summary",
  "handlePackageDeliveryChecklistAutomationReceiptImport",
  "handleClearPackageDeliveryChecklistAutomationReceiptExports",
  "WORKSHOP_PACKAGE_DELIVERY_EXECUTION_RECEIPT_EXPORT_KEY",
  "normalizePackageDeliveryExecutionReceiptExport",
  "normalizePackageDeliveryExecutionReceiptPayload",
  "loadPackageDeliveryExecutionReceiptExports",
  "savePackageDeliveryExecutionReceiptExports",
  "packageDeliveryExecutionReceiptExportState",
  "package-delivery-execution-receipts.json",
  "package-delivery-execution-receipt-import-form",
  "package-delivery-execution-receipt-file",
  "package-delivery-execution-receipt-summary",
  "handlePackageDeliveryExecutionReceiptImport",
  "handleClearPackageDeliveryExecutionReceiptExports",
  "WORKSHOP_PACKAGE_DELIVERY_FOLLOWUP_RENEWAL_RECEIPT_EXPORT_KEY",
  "normalizePackageDeliveryFollowUpRenewalReceiptExport",
  "normalizePackageDeliveryFollowUpRenewalReceiptPayload",
  "loadPackageDeliveryFollowUpRenewalReceiptExports",
  "savePackageDeliveryFollowUpRenewalReceiptExports",
  "packageDeliveryFollowUpRenewalReceiptExportState",
  "package-delivery-followup-renewal-receipts.json",
  "package-delivery-followup-renewal-receipt-import-form",
  "package-delivery-followup-renewal-receipt-file",
  "package-delivery-followup-renewal-receipt-summary",
  "handlePackageDeliveryFollowUpRenewalReceiptImport",
  "handleClearPackageDeliveryFollowUpRenewalReceiptExports",
  "WORKSHOP_PACKAGE_DELIVERY_QUALITY_OUTCOME_RECEIPT_EXPORT_KEY",
  "normalizePackageDeliveryQualityOutcomeReceiptExport",
  "normalizePackageDeliveryQualityOutcomeReceiptPayload",
  "loadPackageDeliveryQualityOutcomeReceiptExports",
  "savePackageDeliveryQualityOutcomeReceiptExports",
  "packageDeliveryQualityOutcomeReceiptExportState",
  "package-delivery-quality-outcome-receipts.json",
  "package-delivery-quality-outcome-receipt-import-form",
  "package-delivery-quality-outcome-receipt-file",
  "package-delivery-quality-outcome-receipt-summary",
  "handlePackageDeliveryQualityOutcomeReceiptImport",
  "handleClearPackageDeliveryQualityOutcomeReceiptExports",
  "WORKSHOP_PACKAGE_DELIVERY_ACCOUNT_GROWTH_RECEIPT_EXPORT_KEY",
  "normalizePackageDeliveryAccountGrowthReceiptExport",
  "normalizePackageDeliveryAccountGrowthReceiptPayload",
  "loadPackageDeliveryAccountGrowthReceiptExports",
  "savePackageDeliveryAccountGrowthReceiptExports",
  "packageDeliveryAccountGrowthReceiptExportState",
  "package-delivery-account-growth-receipts.json",
  "package-delivery-account-growth-receipt-import-form",
  "package-delivery-account-growth-receipt-file",
  "package-delivery-account-growth-receipt-summary",
  "handlePackageDeliveryAccountGrowthReceiptImport",
  "handleClearPackageDeliveryAccountGrowthReceiptExports",
  "service-page-list",
  "material-asset-list",
  "marketing-channel-experiment-list",
  "portal-service-pages",
  "stat-service-pages",
  "stat-material-assets",
  "stat-marketing-channels",
  "stat-timing-aware-follow-ups",
  "stat-timing-aware-renewals",
  "stat-delivery-outcome-automations",
  "stat-delivery-outcome-automation-receipts",
  "stat-account-growth-automations",
  "stat-account-growth-automation-receipts",
  "stat-ara-review-queues",
  "stat-ara-review-decisions",
  "stat-ara-review-status-receipts",
  "stat-ara-method-materializations",
  "stat-ara-materialization-receipts",
  "stat-service-material-reuse",
  "stat-service-material-reuse-receipts",
  "stat-package-delivery-checklists",
  "stat-package-delivery-checklist-receipts",
  "stat-package-delivery-checklist-automations",
  "stat-package-delivery-checklist-automation-receipts",
  "stat-package-delivery-executions",
  "stat-package-delivery-execution-receipts",
  "stat-package-delivery-followup-renewals",
  "stat-package-delivery-followup-renewal-receipts",
  "stat-package-delivery-quality-outcomes",
  "stat-package-delivery-quality-outcome-receipts",
  "stat-package-delivery-account-growth-linkages",
  "stat-package-delivery-account-growth-receipts",
  "epochTimingProviderOnly === true",
  "araReviewComplete === true",
  "monitorWorkflowExposed !== true",
  "portal-handoff-payload-list",
  "portal-status-list",
  "portal-receipt-list",
  "receipt-list",
  "reset-ledger"
]) {
  if (!script.includes(phrase) && !app.includes(phrase) && !portal.includes(phrase)) fail(`WORKSHOP web workflow missing ${phrase}`);
}

for (const phrase of [
  "id=\"requester\"",
  "service-lane-select",
  "age-band-select",
  "material-status-select",
  "id=\"summary\"",
  "id=\"needsTiming\"",
  "needsTiming",
  "service-lifecycle-request-id",
  "service-lifecycle-action-select",
  "service-lifecycle-lane-select",
  "service-lifecycle-reason",
  "Under 19, compatibility review required"
]) {
  if (!data.includes(phrase) && !portal.includes(phrase)) fail(`WORKSHOP portal missing intake guard ${phrase}`);
}

for (const phrase of [".compact-form", ".inline-actions"]) {
  if (!styles.includes(phrase)) fail(`WORKSHOP shared styles missing ${phrase}`);
}

for (const phrase of ["Preserved Revenue Work Index", "Submission-first delivery", "ARA-assisted revenue production", "EPOCH should not own the package"]) {
  if (!preserved.includes(phrase)) fail(`preserved work index missing ${phrase}`);
}

for (const phrase of [
  "Avalonia shell proof",
  "native/workshop_app_bridge.h",
  "src/Workshop.App",
  "Revenue Command",
  "Offer Catalog",
  "Submission Queue",
  "CRM / ARA / ROI Lab",
  "EPOCH remains a timing provider only",
  "MONITOR remains development/control only",
  "Local revenue execution history slice",
  "WorkshopRevenueExecutionHistoryStore",
  "revenue-execution-history.json",
  "WORKSHOP_APP_STATE_DIR",
  "Fallback receipts are not",
  "Local Webportal service request inbox slice",
  "WorkshopServiceRequestInboxStore",
  "service-request-inbox.json",
  "Webportal Service Inbox",
  "WORKSHOP App/Webportal",
  "Local service-to-revenue-command slice",
  "WorkshopServiceRevenueCommandReceiptStore",
  "service-to-revenue-command.json",
  "Service To Native Command"
]) {
  if (!runtime.includes(phrase)) fail(`runtime packaging missing ${phrase}`);
}

for (const phrase of [
  "add_library(workshop_app_bridge SHARED",
  "native/workshop_app_bridge.c",
  "workshop_app_bridge_smoke",
  "add_test(NAME workshop_app_bridge_smoke"
]) {
  if (!cmake.includes(phrase)) fail(`CMake missing app bridge phrase ${phrase}`);
}

for (const phrase of [
  "WorkshopAppBridgeSnapshot",
  "WorkshopAppBridgeRevenueCommandResult",
  "WorkshopAppBridgeRevenueExecutionReceipt",
  "workshop_app_bridge_get_snapshot",
  "workshop_app_bridge_preview_revenue_command",
  "workshop_app_bridge_execute_revenue_command",
  "workshop_app_bridge_core_ready",
  "workshop_app_bridge_epoch_boundary_enforced",
  "workshop_app_bridge_monitor_boundary_enforced"
]) {
  if (!appBridgeHeader.includes(phrase)) fail(`app bridge header missing ${phrase}`);
  if (!appBridgeSource.includes(phrase)) fail(`app bridge source missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferExperiment",
  "WorkshopLaborEstimate",
  "WorkshopRoiRecord",
  "WorkshopAraWorkPacket",
  "WorkshopEpochTimeHandoff",
  "WorkshopRevenueReceipt",
  "WorkshopDeliveryLogEntry",
  "WorkshopAraRevenuePacket",
  "WorkshopAraReviewReceipt",
  "WorkshopRevenueOutcome",
  "WorkshopDeliveryResultReceipt",
  "workshop_offer_experiment_is_testable",
  "workshop_labor_estimate_is_low_labor",
  "workshop_roi_record_is_test_ready",
  "workshop_ara_work_packet_requires_human_review",
  "workshop_epoch_handoff_is_customer_safe",
  "workshop_revenue_receipt_is_customer_safe",
  "workshop_delivery_log_entry_is_product_log",
  "workshop_ara_revenue_packet_is_ready",
  "workshop_ara_review_receipt_is_customer_safe",
  "workshop_revenue_outcome_is_reportable",
  "workshop_delivery_result_receipt_is_customer_safe",
  "codex/local-workshop-avalonia-revenue-execution",
  "workshop-command-receipt-001",
  "workshop-exec-delivery-receipt-001",
  "MONITOR remains development/control only"
]) {
  if (!appBridgeSource.includes(phrase)) fail(`app bridge source missing native revenue phrase ${phrase}`);
}

for (const phrase of [
  "workshop_app_bridge_get_snapshot(&snapshot) == 1",
  "snapshot.low_labor_score == 87",
  "snapshot.monthly_revenue_target_jpy == 300000",
  "snapshot.ara_human_review_required == 1",
  "snapshot.epoch_boundary_enforced == 1",
  "snapshot.monitor_boundary_enforced == 1"
]) {
  if (!appBridgeSmoke.includes(phrase)) fail(`app bridge smoke missing ${phrase}`);
}

for (const phrase of [
  "workshop_app_bridge_preview_revenue_command(&command) == 1",
  "command.service_request_id",
  "command.offer_experiment_id",
  "command.revenue_receipt_id",
  "command.native_command_ready == 1"
]) {
  if (!appBridgeSmoke.includes(phrase)) fail(`app bridge command smoke missing ${phrase}`);
}

for (const phrase of [
  "workshop_app_bridge_execute_revenue_command(\"approve-operator-reviewed-offer\", &execution) == 1",
  "execution.delivery_result_receipt_id",
  "execution.monitor_workflow_exposed == 0",
  "execution.ara_operator_review_complete == 1",
  "execution.native_execution_ready == 1"
]) {
  if (!appBridgeSmoke.includes(phrase)) fail(`app bridge execution smoke missing ${phrase}`);
}

for (const phrase of [
  "Avalonia",
  "Avalonia.Desktop",
  "Avalonia.Themes.Fluent",
  "Avalonia.Fonts.Inter",
  "net8.0"
]) {
  if (!appProject.includes(phrase)) fail(`Avalonia project missing ${phrase}`);
}

for (const phrase of [
  "\"verify:app\": \"dotnet build src/Workshop.App/Workshop.App.csproj\"",
  "node tools/verify-workshop-boundary.mjs"
]) {
  if (!packageJson.includes(phrase)) fail(`package script missing ${phrase}`);
}

for (const phrase of [
  "--smoke",
  "BuildAvaloniaApp",
  "StartWithClassicDesktopLifetime"
]) {
  if (!appProgram.includes(phrase)) fail(`Avalonia program missing ${phrase}`);
}

for (const phrase of [
  "Revenue Command",
  "Offer Catalog",
  "Submission Queue",
  "CRM / ARA / ROI Lab",
  "Native Revenue Command",
  "Native Execution Receipt",
  "Revenue Execution History",
  "Revenue / Service Operations Board",
  "Customer-Safe Service Feedback",
  "Service Lifecycle Actions",
  "Pipeline State",
  "Command Link",
  "Safety And Ledgers",
  "Webportal Service Inbox",
  "Service To Native Command",
  "OperationsBoardStatus",
  "OperationsBoardNextAction",
  "OperationsBoardPipelineSummary",
  "OperationsBoardLatestServiceRequestStatus",
  "OperationsBoardLatestCommandStatus",
  "OperationsBoardLatestRevenueExecutionStatus",
  "OperationsBoardSafetySummary",
  "OperationsBoardLedgerSummary",
  "OperationsBoardReadyForOperatorReview",
  "CustomerStatusFeedbackSummary",
  "CustomerStatusFeedbackStatus",
  "CustomerStatusFeedbackMessage",
  "CustomerStatusFeedbackLocation",
  "ServiceLifecycleActionSummary",
  "ServiceLifecycleActionStatus",
  "ServiceLifecycleActionLocation",
  "ServiceLifecycleReceiptSummary",
  "ServiceLifecycleReceiptStatus",
  "ServiceLifecycleReceiptLocation",
  "ServiceLifecycleStatusSummary",
  "ServiceLifecycleStatusStatus",
  "ServiceLifecycleStatusMessage",
  "ServiceLifecycleStatusLocation",
  "EPOCH Revised Timing Context",
  "EpochRevisedTimingPayloadSummary",
  "EpochRevisedTimingReceiptSummary",
  "EpochRevisedTimingStatusSummary",
  "EpochRevisedTimingStatusLocation",
  "Timing-Aware Follow-Up",
  "TimingAwareFollowUpSummary",
  "TimingAwareFollowUpStatus",
  "TimingAwareFollowUpLocation",
  "TimingAwareRenewalReceiptSummary",
  "TimingAwareRenewalReceiptStatus",
  "TimingAwareRenewalReceiptLocation",
  "Delivery Outcome Automation",
  "DeliveryOutcomeAutomationSummary",
  "DeliveryOutcomeAutomationStatus",
  "DeliveryOutcomeAutomationLocation",
  "DeliveryOutcomeAutomationReceiptSummary",
  "DeliveryOutcomeAutomationReceiptStatus",
  "DeliveryOutcomeAutomationCustomerMessage",
  "DeliveryOutcomeAutomationReceiptLocation",
  "Account Growth Automation",
  "AccountGrowthAutomationSummary",
  "AccountGrowthAutomationStatus",
  "AccountGrowthAutomationLocation",
  "AccountGrowthAutomationReceiptSummary",
  "AccountGrowthAutomationReceiptStatus",
  "AccountGrowthAutomationCustomerMessage",
  "AccountGrowthAutomationReceiptLocation",
  "ARA Review Gate",
  "AraReviewQueueSummary",
  "AraReviewQueueStatus",
  "AraReviewQueueLocation",
  "AraReviewDecisionSummary",
  "AraReviewDecisionStatus",
  "AraReviewDecisionLocation",
  "AraReviewStatusReceiptSummary",
  "AraReviewStatusReceiptStatus",
  "AraReviewStatusCustomerMessage",
  "AraReviewStatusReceiptLocation",
  "AraMethodMaterializationSummary",
  "AraMethodMaterializationStatus",
  "AraMethodMaterializationLocation",
  "AraMaterializationReceiptSummary",
  "AraMaterializationReceiptStatus",
  "AraMaterializationCustomerMessage",
  "AraMaterializationReceiptLocation",
  "PackageDeliveryExecutionSummary",
  "PackageDeliveryExecutionStatus",
  "PackageDeliveryExecutionLocation",
  "PackageDeliveryExecutionReceiptSummary",
  "PackageDeliveryExecutionReceiptStatus",
  "PackageDeliveryExecutionCustomerMessage",
  "PackageDeliveryExecutionReceiptLocation",
  "PackageDeliveryFollowUpRenewalSummary",
  "PackageDeliveryFollowUpRenewalStatus",
  "PackageDeliveryFollowUpRenewalLocation",
  "PackageDeliveryFollowUpRenewalReceiptSummary",
  "PackageDeliveryFollowUpRenewalReceiptStatus",
  "PackageDeliveryFollowUpRenewalCustomerMessage",
  "PackageDeliveryFollowUpRenewalReceiptLocation",
  "PackageDeliveryQualityOutcomeSummary",
  "PackageDeliveryQualityOutcomeStatus",
  "PackageDeliveryQualityOutcomeLocation",
  "PackageDeliveryQualityOutcomeReceiptSummary",
  "PackageDeliveryQualityOutcomeReceiptStatus",
  "PackageDeliveryQualityOutcomeCustomerMessage",
  "PackageDeliveryQualityOutcomeReceiptLocation",
  "PackageDeliveryAccountGrowthLinkageSummary",
  "PackageDeliveryAccountGrowthLinkageStatus",
  "PackageDeliveryAccountGrowthLinkageLocation",
  "PackageDeliveryAccountGrowthReceiptSummary",
  "PackageDeliveryAccountGrowthReceiptStatus",
  "PackageDeliveryAccountGrowthCustomerMessage",
  "PackageDeliveryAccountGrowthReceiptLocation",
  "RevenueCommandStatus",
  "RevenueCommandEvidence",
  "RevenueExecutionStatus",
  "RevenueExecutionEvidence",
  "RevenueExecutionHistorySummary",
  "LastRevenueExecutionHistoryStatus",
  "ServiceInboxSummary",
  "ServiceInboxStatus",
  "ServiceCommandReceiptSummary",
  "ServiceCommandReceiptStatus",
  "EPOCH is requested only for timing"
]) {
  if (!appXaml.includes(phrase)) fail(`Avalonia shell missing ${phrase}`);
}

for (const phrase of [
  "NativeLibrary.SetDllImportResolver",
  "DllImport",
  "workshop_app_bridge_get_snapshot",
  "workshop_app_bridge_preview_revenue_command",
  "workshop_app_bridge_execute_revenue_command",
  "workshop_app_bridge.dll",
  "LoadSnapshotOrFallback",
  "LoadRevenueCommandOrFallback",
  "ExecuteRevenueCommandOrFallback",
  "education-submission"
]) {
  if (!appNative.includes(phrase)) fail(`Avalonia native interop missing ${phrase}`);
}

for (const phrase of [
  "WorkshopNative.LoadSnapshotOrFallback",
  "WorkshopNative.LoadRevenueCommandOrFallback",
  "WorkshopNative.ExecuteRevenueCommandOrFallback",
  "WorkshopNative.ExecuteRevenueCommand",
  "WorkshopRevenueExecutionHistoryStore.TryAppend",
  "WorkshopRevenueExecutionHistoryStore.Load",
  "WorkshopServiceRequestInboxStore.TryEnsureDefaultWebportalRequest",
  "WorkshopServiceRequestInboxStore.Load",
  "WorkshopServiceRevenueCommandReceiptStore.TryAppend",
  "WorkshopServiceRevenueCommandReceiptStore.Load",
  "WorkshopRevenueOperationsBoardSnapshot.FromLedgers",
  "WorkshopCustomerServiceStatusStore.TryAppend",
  "WorkshopCustomerServiceStatusStore.Load",
  "WorkshopServiceLifecycleActionStore.TryEnsureDefaultLifecycleAction",
  "WorkshopServiceLifecycleActionStore.Load",
  "WorkshopServiceLifecycleReceiptStore.TryAppend",
  "WorkshopServiceLifecycleReceiptStore.Load",
  "WorkshopServiceLifecycleStatusStore.TryAppend",
  "WorkshopServiceLifecycleStatusStore.Load",
  "WorkshopEpochRevisedCalendarTimingPayloadStore.TryEnsureDefaultPayload",
  "WorkshopEpochRevisedCalendarTimingPayloadStore.Load",
  "WorkshopRevisedCalendarTimingReceiptStore.TryAppend",
  "WorkshopRevisedCalendarTimingReceiptStore.Load",
  "WorkshopRevisedCalendarTimingStatusStore.TryAppend",
  "WorkshopRevisedCalendarTimingStatusStore.Load",
  "WorkshopTimingAwareServiceFollowUpStore.TryAppend",
  "WorkshopTimingAwareServiceFollowUpStore.Load",
  "WorkshopTimingAwareRenewalReceiptStore.TryAppend",
  "WorkshopTimingAwareRenewalReceiptStore.Load",
  "WorkshopDeliveryOutcomeAutomationStore.TryAppend",
  "WorkshopDeliveryOutcomeAutomationStore.Load",
  "WorkshopDeliveryOutcomeAutomationReceiptStore.TryAppend",
  "WorkshopDeliveryOutcomeAutomationReceiptStore.Load",
  "WorkshopAccountGrowthAutomationStore.TryAppend",
  "WorkshopAccountGrowthAutomationStore.Load",
  "WorkshopAccountGrowthAutomationReceiptStore.TryAppend",
  "WorkshopAccountGrowthAutomationReceiptStore.Load",
  "WorkshopAraReviewQueueStore.TryAppend",
  "WorkshopAraReviewQueueStore.Load",
  "WorkshopAraOperatorReviewDecisionStore.TryAppend",
  "WorkshopAraOperatorReviewDecisionStore.Load",
  "WorkshopAraReviewStatusReceiptStore.TryAppend",
  "WorkshopAraReviewStatusReceiptStore.Load",
  "WorkshopAraMethodMaterializationStore.TryAppend",
  "WorkshopAraMethodMaterializationStore.Load",
  "WorkshopAraMaterializationReceiptStore.TryAppend",
  "WorkshopAraMaterializationReceiptStore.Load",
  "WorkshopServiceMaterialReuseStore.TryAppend",
  "WorkshopServiceMaterialReuseStore.Load",
  "WorkshopServiceMaterialReuseReceiptStore.TryAppend",
  "WorkshopServiceMaterialReuseReceiptStore.Load",
  "WorkshopPackageDeliveryChecklistStore.TryAppend",
  "WorkshopPackageDeliveryChecklistStore.Load",
  "WorkshopPackageDeliveryChecklistReceiptStore.TryAppend",
  "WorkshopPackageDeliveryChecklistReceiptStore.Load",
  "WorkshopPackageDeliveryChecklistAutomationStore.TryAppend",
  "WorkshopPackageDeliveryChecklistAutomationStore.Load",
  "WorkshopPackageDeliveryChecklistAutomationReceiptStore.TryAppend",
  "WorkshopPackageDeliveryChecklistAutomationReceiptStore.Load",
  "WorkshopPackageDeliveryExecutionStore.TryAppend",
  "WorkshopPackageDeliveryExecutionStore.Load",
  "WorkshopPackageDeliveryExecutionReceiptStore.TryAppend",
  "WorkshopPackageDeliveryExecutionReceiptStore.Load",
  "WorkshopPackageDeliveryFollowUpRenewalStore.TryAppend",
  "WorkshopPackageDeliveryFollowUpRenewalStore.Load",
  "WorkshopPackageDeliveryFollowUpRenewalReceiptStore.TryAppend",
  "WorkshopPackageDeliveryFollowUpRenewalReceiptStore.Load",
  "OperationsBoardStatus",
  "OperationsBoardNextAction",
  "OperationsBoardPipelineSummary",
  "OperationsBoardReadyForOperatorReview",
  "CustomerStatusFeedbackSummary",
  "CustomerStatusFeedbackStatus",
  "ServiceLifecycleActionSummary",
  "ServiceLifecycleReceiptSummary",
  "ServiceLifecycleStatusSummary",
  "ServiceLifecycleStatusLocation",
  "EpochRevisedTimingPayloadSummary",
  "EpochRevisedTimingReceiptSummary",
  "EpochRevisedTimingStatusSummary",
  "EpochRevisedTimingStatusLocation",
  "TimingAwareFollowUpSummary",
  "TimingAwareFollowUpStatus",
  "TimingAwareFollowUpLocation",
  "TimingAwareRenewalReceiptSummary",
  "TimingAwareRenewalReceiptStatus",
  "TimingAwareRenewalReceiptLocation",
  "DeliveryOutcomeAutomationSummary",
  "DeliveryOutcomeAutomationStatus",
  "DeliveryOutcomeAutomationLocation",
  "DeliveryOutcomeAutomationReceiptSummary",
  "DeliveryOutcomeAutomationReceiptStatus",
  "DeliveryOutcomeAutomationReceiptLocation",
  "DeliveryOutcomeAutomationCustomerMessage",
  "AccountGrowthAutomationSummary",
  "AccountGrowthAutomationStatus",
  "AccountGrowthAutomationLocation",
  "AccountGrowthAutomationReceiptSummary",
  "AccountGrowthAutomationReceiptStatus",
  "AccountGrowthAutomationReceiptLocation",
  "AccountGrowthAutomationCustomerMessage",
  "AraReviewQueueSummary",
  "AraReviewQueueStatus",
  "AraReviewQueueLocation",
  "AraReviewDecisionSummary",
  "AraReviewDecisionStatus",
  "AraReviewDecisionLocation",
  "AraReviewStatusReceiptSummary",
  "AraReviewStatusReceiptStatus",
  "AraReviewStatusReceiptLocation",
  "AraReviewStatusCustomerMessage",
  "AraMethodMaterializationSummary",
  "AraMethodMaterializationStatus",
  "AraMethodMaterializationLocation",
  "AraMaterializationReceiptSummary",
  "AraMaterializationReceiptStatus",
  "AraMaterializationReceiptLocation",
  "AraMaterializationCustomerMessage",
  "ServiceMaterialReuseSummary",
  "ServiceMaterialReuseStatus",
  "ServiceMaterialReuseLocation",
  "ServiceMaterialReuseReceiptSummary",
  "ServiceMaterialReuseReceiptStatus",
  "ServiceMaterialReuseReceiptLocation",
  "ServiceMaterialReuseCustomerMessage",
  "PackageDeliveryChecklistSummary",
  "PackageDeliveryChecklistStatus",
  "PackageDeliveryChecklistLocation",
  "PackageDeliveryChecklistReceiptSummary",
  "PackageDeliveryChecklistReceiptStatus",
  "PackageDeliveryChecklistReceiptLocation",
  "PackageDeliveryChecklistCustomerMessage",
  "PackageDeliveryChecklistAutomationSummary",
  "PackageDeliveryChecklistAutomationStatus",
  "PackageDeliveryChecklistAutomationLocation",
  "PackageDeliveryChecklistAutomationReceiptSummary",
  "PackageDeliveryChecklistAutomationReceiptStatus",
  "PackageDeliveryChecklistAutomationReceiptLocation",
  "PackageDeliveryChecklistAutomationCustomerMessage",
  "PackageDeliveryExecutionSummary",
  "PackageDeliveryExecutionStatus",
  "PackageDeliveryExecutionLocation",
  "PackageDeliveryExecutionReceiptSummary",
  "PackageDeliveryExecutionReceiptStatus",
  "PackageDeliveryExecutionReceiptLocation",
  "PackageDeliveryExecutionCustomerMessage",
  "PackageDeliveryFollowUpRenewalSummary",
  "PackageDeliveryFollowUpRenewalStatus",
  "PackageDeliveryFollowUpRenewalLocation",
  "PackageDeliveryFollowUpRenewalReceiptSummary",
  "PackageDeliveryFollowUpRenewalReceiptStatus",
  "PackageDeliveryFollowUpRenewalReceiptLocation",
  "PackageDeliveryFollowUpRenewalCustomerMessage",
  "EPOCH revised timing payload(s)",
  "revised timing receipt(s)",
  "customer-safe revised timing status export(s)",
  "timing-aware service follow-up(s)",
  "timing-aware renewal receipt(s)",
  "delivery outcome automation record(s)",
  "customer-safe delivery outcome automation receipt(s)",
  "account-growth automation record(s)",
  "customer-safe account-growth automation receipt(s)",
  "App-owned ARA review queue record(s)",
  "App-owned ARA operator review decision(s)",
  "customer-safe ARA review status receipt(s)",
  "App-owned ARA method materialization record(s)",
  "customer-safe ARA materialization receipt(s)",
  "App-owned service material reuse record(s)",
  "customer-safe service material reuse receipt(s)",
  "App-owned package delivery checklist record(s)",
  "customer-safe package delivery checklist receipt(s)",
  "App-owned package delivery checklist automation record(s)",
  "customer-safe package delivery automation receipt(s)",
  "App-owned package delivery execution record(s)",
  "customer-safe package delivery execution receipt(s)",
  "App-owned package delivery follow-up/renewal record(s)",
  "customer-safe package delivery follow-up/renewal receipt(s)",
  "customer-safe service status export(s)",
  "customer-safe service lifecycle action(s)",
  "service lifecycle receipt(s)",
  "customer-safe service lifecycle status export(s)",
  "Webportal export ready",
  "native revenue command ready",
  "native revenue execution receipt ready",
  "local revenue execution receipt(s) persisted in the WORKSHOP App ledger",
  "customer-safe Webportal service request(s)",
  "Webportal service-to-native revenue command receipt(s)",
  "No new native revenue execution history was persisted",
  "No Webportal service request was imported",
  "No Webportal service request has been linked",
  "Low-labor score",
  "ARA packets require human review",
  "EPOCH timing and MONITOR boundaries enforced"
]) {
  if (!appViewModel.includes(phrase)) fail(`Avalonia view model missing ${phrase}`);
}

for (const phrase of [
  "WorkshopRevenueOperationsBoardSnapshot",
  "FromLedgers",
  "revenue/service operations board ready",
  "ReadyForOperatorReview",
  "EpochTimingProviderOnly",
  "MonitorWorkflowExposed",
  "CustomerSafeChain",
  "AraReviewComplete",
  "serviceCommandReceipts",
  "executionHistory",
  "Review the linked service request and native revenue execution",
  "Move revenue/service workflow exposure out of MONITOR",
  "Complete operator review for ARA-assisted revenue output"
]) {
  if (!appOperationsBoard.includes(phrase)) fail(`Avalonia operations board missing ${phrase}`);
}

for (const phrase of [
  "WorkshopCustomerServiceStatusRecord",
  "FromServiceChain",
  "WORKSHOP.App.CustomerSafeStatusExport",
  "local-service-status-ready",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "AraReviewComplete",
  "MonitorWorkflowExposed",
  "EPOCH remains timing-provider-only",
  "Review the customer-safe service status"
]) {
  if (!appCustomerStatus.includes(phrase)) fail(`Avalonia customer status record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopServiceLifecycleAction",
  "FromLocalWebportalIntent",
  "WORKSHOP.Webportal.ServiceLifecycleAdapter",
  "queued-for-app-review",
  "CustomerSafe",
  "EpochTimingProviderOnly",
  "MonitorWorkflowExposed",
  "AppOwnedLifecycleState"
]) {
  if (!appLifecycleAction.includes(phrase)) fail(`Avalonia lifecycle action record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopServiceLifecycleReceipt",
  "FromLifecycleAndCommand",
  "ServiceCommandReceiptId",
  "ExecutionHistoryId",
  "DeliveryResultReceiptId",
  "RevenueOutcomeId",
  "EpochHandoffId",
  "service-lifecycle-receipt-linked",
  "CustomerVisibleReceiptReady",
  "AraOperatorReviewComplete",
  "EpochTimingProviderOnly",
  "MonitorWorkflowExposed",
  "NativeExecutionReady"
]) {
  if (!appLifecycleReceipt.includes(phrase)) fail(`Avalonia lifecycle receipt record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopServiceLifecycleStatusRecord",
  "FromLifecycleChain",
  "WORKSHOP.App.ServiceLifecycleStatusExport",
  "local-service-lifecycle-ready",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "AraReviewComplete",
  "MonitorWorkflowExposed",
  "EPOCH remains timing-provider-only",
  "Review the customer-safe service lifecycle update"
]) {
  if (!appLifecycleStatus.includes(phrase)) fail(`Avalonia lifecycle status record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopRevenueExecutionHistoryEntry",
  "FromReceipt",
  "HistoryId",
  "RecordedAtUtc",
  "SourceSurface",
  "DeliveryResultReceiptId",
  "CustomerVisibleReceiptReady",
  "AraOperatorReviewComplete",
  "MonitorWorkflowExposed",
  "NativeExecutionReady"
]) {
  if (!appHistoryEntry.includes(phrase)) fail(`Avalonia revenue history entry missing ${phrase}`);
}

for (const phrase of [
  "WORKSHOP_APP_STATE_DIR",
  "revenue-execution-history.json",
  "HistoryPath",
  "JsonSerializer",
  "Append",
  "TryAppend",
  "ArchiveInvalidHistory",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appHistoryStore.includes(phrase)) fail(`Avalonia revenue history store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopWebportalServiceRequest",
  "FromLocalWebportalIntent",
  "WORKSHOP.Webportal.LocalAdapter",
  "queued-for-fit-review",
  "CustomerSafe",
  "EpochTimingProviderOnly",
  "MonitorWorkflowExposed",
  "AppOwnedInboxState"
]) {
  if (!appServiceInboxEntry.includes(phrase)) fail(`Avalonia service inbox entry missing ${phrase}`);
}

for (const phrase of [
  "service-request-inbox.json",
  "InboxPath",
  "EnsureDefaultWebportalRequest",
  "TryEnsureDefaultWebportalRequest",
  "ArchiveInvalidInbox",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appServiceInboxStore.includes(phrase)) fail(`Avalonia service inbox store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopServiceRevenueCommandReceipt",
  "FromServiceAndExecution",
  "ExecutionHistoryId",
  "DeliveryResultReceiptId",
  "RevenueOutcomeId",
  "EpochHandoffId",
  "CustomerVisibleReceiptReady",
  "AraOperatorReviewComplete",
  "EpochTimingProviderOnly",
  "MonitorWorkflowExposed",
  "NativeExecutionReady"
]) {
  if (!appServiceCommandReceipt.includes(phrase)) fail(`Avalonia service command receipt missing ${phrase}`);
}

for (const phrase of [
  "service-to-revenue-command.json",
  "ReceiptPath",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appServiceCommandStore.includes(phrase)) fail(`Avalonia service command store missing ${phrase}`);
}

for (const phrase of [
  "customer-service-status.json",
  "StatusPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidStatuses",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appCustomerStatusStore.includes(phrase)) fail(`Avalonia customer status store missing ${phrase}`);
}

for (const phrase of [
  "service-lifecycle-actions.json",
  "ActionPath",
  "EnsureDefaultLifecycleAction",
  "TryEnsureDefaultLifecycleAction",
  "ArchiveInvalidActions",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appLifecycleActionStore.includes(phrase)) fail(`Avalonia lifecycle action store missing ${phrase}`);
}

for (const phrase of [
  "service-lifecycle-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appLifecycleReceiptStore.includes(phrase)) fail(`Avalonia lifecycle receipt store missing ${phrase}`);
}

for (const phrase of [
  "service-lifecycle-status.json",
  "StatusPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidStatuses",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appLifecycleStatusStore.includes(phrase)) fail(`Avalonia lifecycle status store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopEpochRevisedCalendarTimingPayload",
  "FromEpochTimingProjection",
  "EPOCH.App.RevisedTimingProjectionExport",
  "revised-13-month",
  "13 x 28 projection, conversion held",
  "ProviderGoLiveRequested",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed"
]) {
  if (!appRevisedTimingPayload.includes(phrase)) fail(`Avalonia revised timing payload missing ${phrase}`);
}

for (const phrase of [
  "WorkshopRevisedCalendarTimingReceipt",
  "FromPayload",
  "epoch-revised-calendar-timing",
  "recurring-exception-action-required",
  "CustomerVisibleReceiptReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed"
]) {
  if (!appRevisedTimingReceipt.includes(phrase)) fail(`Avalonia revised timing receipt missing ${phrase}`);
}

for (const phrase of [
  "WorkshopRevisedCalendarTimingStatusRecord",
  "FromTimingReceipt",
  "WORKSHOP.App.RevisedCalendarTimingStatusExport",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "EPOCH-provided revised timing context"
]) {
  if (!appRevisedTimingStatus.includes(phrase)) fail(`Avalonia revised timing status record missing ${phrase}`);
}

for (const phrase of [
  "epoch-revised-calendar-timing.json",
  "PayloadPath",
  "EnsureDefaultPayload",
  "TryEnsureDefaultPayload",
  "TryImportFromEpochExport",
  "EpochStateDirectoryEnvironmentVariable",
  "EPOCH_APP_STATE_DIR",
  "ResolveEpochExportPath",
  "ResolveDefaultEpochStateDirectory",
  "EPOCH.App.RevisedTimingProjectionExport",
  "ArchiveInvalidPayloads",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "EPOCH",
  "WORKSHOP",
  "App"
]) {
  if (!appRevisedTimingPayloadStore.includes(phrase)) fail(`Avalonia revised timing payload store missing ${phrase}`);
}

for (const phrase of [
  "revised-calendar-timing-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appRevisedTimingReceiptStore.includes(phrase)) fail(`Avalonia revised timing receipt store missing ${phrase}`);
}

for (const phrase of [
  "revised-calendar-timing-status.json",
  "StatusPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidStatuses",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appRevisedTimingStatusStore.includes(phrase)) fail(`Avalonia revised timing status store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopTimingAwareServiceFollowUp",
  "FromRevisedTimingStatus",
  "timing-aware-service-follow-up",
  "follow-up-ready",
  "RenewalPromptReady",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "request EPOCH timing only"
]) {
  if (!appTimingAwareFollowUp.includes(phrase)) fail(`Avalonia timing-aware follow-up missing ${phrase}`);
}

for (const phrase of [
  "WorkshopTimingAwareRenewalReceipt",
  "FromFollowUp",
  "timing-aware-renewal",
  "renewal-follow-up-ready",
  "CustomerVisibleReceiptReady",
  "RequiresEpochTimingRequest",
  "RenewalReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "EPOCH remains the timing provider"
]) {
  if (!appTimingAwareRenewalReceipt.includes(phrase)) fail(`Avalonia timing-aware renewal receipt missing ${phrase}`);
}

for (const phrase of [
  "timing-aware-service-followups.json",
  "FollowUpPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidFollowUps",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appTimingAwareFollowUpStore.includes(phrase)) fail(`Avalonia timing-aware follow-up store missing ${phrase}`);
}

for (const phrase of [
  "timing-aware-renewal-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appTimingAwareRenewalReceiptStore.includes(phrase)) fail(`Avalonia timing-aware renewal receipt store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopDeliveryOutcomeAutomationRecord",
  "FromOutcomeChain",
  "delivery-outcome-automation",
  "delivery-outcome-automation-ready",
  "WebportalExportReady",
  "PaymentLiveEnabled",
  "AraReviewComplete",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "EPOCH remains timing-provider-only"
]) {
  if (!appDeliveryOutcomeAutomation.includes(phrase)) fail(`Avalonia delivery outcome automation missing ${phrase}`);
}

for (const phrase of [
  "WorkshopDeliveryOutcomeAutomationReceipt",
  "FromAutomation",
  "delivery-outcome-automation",
  "customer-safe-delivery-outcome-ready",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "PaymentLiveEnabled",
  "AraReviewComplete",
  "RequiresEpochTimingRequest",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "request timing through EPOCH"
]) {
  if (!appDeliveryOutcomeAutomationReceipt.includes(phrase)) fail(`Avalonia delivery outcome automation receipt missing ${phrase}`);
}

for (const phrase of [
  "delivery-outcome-automations.json",
  "AutomationPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidAutomations",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appDeliveryOutcomeAutomationStore.includes(phrase)) fail(`Avalonia delivery outcome automation store missing ${phrase}`);
}

for (const phrase of [
  "delivery-outcome-automation-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appDeliveryOutcomeAutomationReceiptStore.includes(phrase)) fail(`Avalonia delivery outcome automation receipt store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopAccountGrowthAutomationRecord",
  "FromDeliveryOutcomeAutomation",
  "account-growth-automation",
  "account-growth-automation-ready",
  "retention-referral-expansion",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "PaymentLiveEnabled",
  "AraReviewComplete",
  "RetentionReady",
  "ReferralReady",
  "GrowthPlanReady",
  "ConversionReady",
  "ExpansionRequestReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "EPOCH remains timing-provider-only"
]) {
  if (!appAccountGrowthAutomation.includes(phrase)) fail(`Avalonia account growth automation missing ${phrase}`);
}

for (const phrase of [
  "WorkshopAccountGrowthAutomationReceipt",
  "FromAutomation",
  "account-growth-automation",
  "customer-safe-account-growth-ready",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "PaymentLiveEnabled",
  "AraReviewComplete",
  "RetentionReady",
  "ReferralReady",
  "GrowthPlanReady",
  "ConversionReady",
  "ExpansionRequestReady",
  "RequiresEpochTimingRequest",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "Request EPOCH timing only"
]) {
  if (!appAccountGrowthAutomationReceipt.includes(phrase)) fail(`Avalonia account growth automation receipt missing ${phrase}`);
}

for (const phrase of [
  "account-growth-automations.json",
  "AutomationPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidAutomations",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appAccountGrowthAutomationStore.includes(phrase)) fail(`Avalonia account growth automation store missing ${phrase}`);
}

for (const phrase of [
  "account-growth-automation-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appAccountGrowthAutomationReceiptStore.includes(phrase)) fail(`Avalonia account growth automation receipt store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopAraReviewQueueRecord",
  "FromRevenueHistory",
  "WORKSHOP.App.AraReviewQueue",
  "ara-operator-review-queue",
  "ara-review-ready-for-decision",
  "operator-review-complete",
  "CustomerSafeForDecision",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "RequiresOperatorReview",
  "AraReviewComplete",
  "NativeExecutionReady",
  "Approve or return"
]) {
  if (!appAraReviewQueue.includes(phrase)) fail(`Avalonia ARA review queue record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopAraOperatorReviewDecision",
  "FromQueue",
  "WORKSHOP.App.AraOperatorReviewDecision",
  "ara-operator-review-decision",
  "ara-review-approved",
  "revision-required",
  "CustomerSafeForReceipt",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "RequiresOperatorReview",
  "OperatorReviewed",
  "AraReviewComplete",
  "NativeExecutionReady"
]) {
  if (!appAraReviewDecision.includes(phrase)) fail(`Avalonia ARA operator review decision missing ${phrase}`);
}

for (const phrase of [
  "WorkshopAraReviewStatusReceipt",
  "FromDecision",
  "WORKSHOP.App.AraReviewStatusReceipt",
  "ara-review-status",
  "customer-safe-ara-review-ready",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "NativeExecutionReady",
  "without exposing internal packet",
  "Request EPOCH timing only"
]) {
  if (!appAraReviewStatusReceipt.includes(phrase)) fail(`Avalonia ARA review status receipt missing ${phrase}`);
}

for (const phrase of [
  "WorkshopAraMethodMaterializationRecord",
  "FromApprovedReview",
  "WORKSHOP.App.AraMethodMaterialization",
  "ara-method-materialization",
  "ara-materialization-ready",
  "reviewed-method-and-material-ready",
  "CustomerSafeForReceipt",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "ReusableMethodReady",
  "MaterialAssetReady",
  "NativeExecutionReady",
  "Attach the reviewed method"
]) {
  if (!appAraMethodMaterialization.includes(phrase)) fail(`Avalonia ARA method materialization missing ${phrase}`);
}

for (const phrase of [
  "WorkshopAraMaterializationReceipt",
  "FromMaterialization",
  "WORKSHOP.App.AraMaterializationReceipt",
  "ara-method-materialization",
  "customer-safe-ara-materialization-ready",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "ReusableMethodReady",
  "MaterialAssetReady",
  "NativeExecutionReady",
  "without exposing internal packet, queue, decision, or materialization controls",
  "Request EPOCH timing only"
]) {
  if (!appAraMaterializationReceipt.includes(phrase)) fail(`Avalonia ARA materialization receipt missing ${phrase}`);
}

for (const phrase of [
  "ara-review-queue.json",
  "QueuePath",
  "Append",
  "TryAppend",
  "ArchiveInvalidQueue",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appAraReviewQueueStore.includes(phrase)) fail(`Avalonia ARA review queue store missing ${phrase}`);
}

for (const phrase of [
  "ara-operator-review-decisions.json",
  "DecisionPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidDecisions",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appAraReviewDecisionStore.includes(phrase)) fail(`Avalonia ARA operator review decision store missing ${phrase}`);
}

for (const phrase of [
  "ara-review-status-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appAraReviewStatusReceiptStore.includes(phrase)) fail(`Avalonia ARA review status receipt store missing ${phrase}`);
}

for (const phrase of [
  "ara-method-materializations.json",
  "MaterializationPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidMaterializations",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appAraMethodMaterializationStore.includes(phrase)) fail(`Avalonia ARA method materialization store missing ${phrase}`);
}

for (const phrase of [
  "ara-materialization-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appAraMaterializationReceiptStore.includes(phrase)) fail(`Avalonia ARA materialization receipt store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopServiceMaterialReuseRecord",
  "FromMaterializationReceipt",
  "WORKSHOP.App.ServiceMaterialReuse",
  "service-material-reuse",
  "service-material-reuse-ready",
  "PackageSupportStatus",
  "CustomerSafeForReceipt",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "ReusableMethodReady",
  "MaterialAssetReady",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "NativeExecutionReady",
  "Attach the reusable material support",
  "pkg-submission-4",
  "pkg-systems-block"
]) {
  if (!appServiceMaterialReuse.includes(phrase)) fail(`Avalonia service material reuse record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopServiceMaterialReuseReceipt",
  "FromReuseRecord",
  "WORKSHOP.App.ServiceMaterialReuseReceipt",
  "service-material-reuse",
  "customer-safe-service-material-reuse-ready",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "ReusableMethodReady",
  "MaterialAssetReady",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "NativeExecutionReady",
  "without exposing internal packet, queue, decision, materialization, or package-control records",
  "Request EPOCH timing only"
]) {
  if (!appServiceMaterialReuseReceipt.includes(phrase)) fail(`Avalonia service material reuse receipt missing ${phrase}`);
}

for (const phrase of [
  "service-material-reuse-records.json",
  "ReusePath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appServiceMaterialReuseStore.includes(phrase)) fail(`Avalonia service material reuse store missing ${phrase}`);
}

for (const phrase of [
  "service-material-reuse-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appServiceMaterialReuseReceiptStore.includes(phrase)) fail(`Avalonia service material reuse receipt store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryChecklistRecord",
  "FromServiceMaterialReuse",
  "WORKSHOP.App.PackageDeliveryChecklist",
  "package-delivery-checklist",
  "package-delivery-checklist-ready",
  "ChecklistItemsSummary",
  "CustomerSafeForReceipt",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "NativeExecutionReady",
  "export only the customer-safe checklist receipt"
]) {
  if (!appPackageDeliveryChecklist.includes(phrase)) fail(`Avalonia package delivery checklist record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryChecklistReceipt",
  "FromChecklist",
  "WORKSHOP.App.PackageDeliveryChecklistReceipt",
  "package-delivery-checklist",
  "customer-safe-package-delivery-checklist-ready",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "NativeExecutionReady",
  "without exposing internal packet, queue, decision, materialization, reuse, checklist-control, or package-control records",
  "Request EPOCH timing only"
]) {
  if (!appPackageDeliveryChecklistReceipt.includes(phrase)) fail(`Avalonia package delivery checklist receipt missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-checklists.json",
  "ChecklistPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryChecklistStore.includes(phrase)) fail(`Avalonia package delivery checklist store missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-checklist-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryChecklistReceiptStore.includes(phrase)) fail(`Avalonia package delivery checklist receipt store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryChecklistAutomationRecord",
  "FromChecklist",
  "WORKSHOP.App.PackageDeliveryChecklistAutomation",
  "package-delivery-checklist-automation",
  "package-delivery-checklist-automation-ready",
  "RepeatDeliveryPlan",
  "CustomerSafeForReceipt",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "AutomationReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "export only the customer-safe automation receipt"
]) {
  if (!appPackageDeliveryChecklistAutomation.includes(phrase)) fail(`Avalonia package delivery checklist automation record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryChecklistAutomationReceipt",
  "FromAutomation",
  "WORKSHOP.App.PackageDeliveryChecklistAutomationReceipt",
  "package-delivery-checklist-automation",
  "customer-safe-package-delivery-automation-ready",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "AutomationReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "without exposing internal packet, queue, decision, materialization, reuse, checklist, automation-control, or package-control records",
  "Request EPOCH timing only"
]) {
  if (!appPackageDeliveryChecklistAutomationReceipt.includes(phrase)) fail(`Avalonia package delivery checklist automation receipt missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-checklist-automations.json",
  "AutomationPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryChecklistAutomationStore.includes(phrase)) fail(`Avalonia package delivery checklist automation store missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-checklist-automation-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryChecklistAutomationReceiptStore.includes(phrase)) fail(`Avalonia package delivery checklist automation receipt store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryExecutionRecord",
  "FromAutomation",
  "WORKSHOP.App.PackageDeliveryExecution",
  "package-delivery-execution",
  "package-delivery-execution-ready",
  "DeliveryExecutionPlan",
  "CustomerSafeForReceipt",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "AutomationReady",
  "ExecutionReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "export only the customer-safe execution receipt"
]) {
  if (!appPackageDeliveryExecution.includes(phrase)) fail(`Avalonia package delivery execution record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryExecutionReceipt",
  "FromExecution",
  "WORKSHOP.App.PackageDeliveryExecutionReceipt",
  "package-delivery-execution",
  "customer-safe-package-delivery-execution-ready",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "AutomationReady",
  "ExecutionReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution-control, or package-control records",
  "Request EPOCH timing only"
]) {
  if (!appPackageDeliveryExecutionReceipt.includes(phrase)) fail(`Avalonia package delivery execution receipt missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-executions.json",
  "ExecutionPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryExecutionStore.includes(phrase)) fail(`Avalonia package delivery execution store missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-execution-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryExecutionReceiptStore.includes(phrase)) fail(`Avalonia package delivery execution receipt store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryFollowUpRenewalRecord",
  "FromExecutionReceipt",
  "WORKSHOP.App.PackageDeliveryFollowUpRenewal",
  "package-delivery-followup-renewal",
  "package-delivery-followup-renewal-ready",
  "RenewalPath",
  "CustomerSafeForReceipt",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "AutomationReady",
  "ExecutionReady",
  "FollowUpReady",
  "RenewalReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "export only the customer-safe follow-up renewal receipt"
]) {
  if (!appPackageDeliveryFollowUpRenewal.includes(phrase)) fail(`Avalonia package delivery follow-up renewal record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryFollowUpRenewalReceipt",
  "FromFollowUp",
  "WORKSHOP.App.PackageDeliveryFollowUpRenewalReceipt",
  "package-delivery-followup-renewal",
  "customer-safe-package-delivery-followup-renewal-ready",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "AutomationReady",
  "ExecutionReady",
  "FollowUpReady",
  "RenewalReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, or package-control records",
  "Request EPOCH timing only"
]) {
  if (!appPackageDeliveryFollowUpRenewalReceipt.includes(phrase)) fail(`Avalonia package delivery follow-up renewal receipt missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-followup-renewals.json",
  "FollowUpPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryFollowUpRenewalStore.includes(phrase)) fail(`Avalonia package delivery follow-up renewal store missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-followup-renewal-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryFollowUpRenewalReceiptStore.includes(phrase)) fail(`Avalonia package delivery follow-up renewal receipt store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryQualityOutcomeRecord",
  "FromReceipts",
  "WORKSHOP.App.PackageDeliveryQualityOutcome",
  "package-delivery-quality-outcome",
  "package-delivery-quality-outcome-ready",
  "QualityReviewPath",
  "OutcomePath",
  "CustomerSafeForReceipt",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "AutomationReady",
  "ExecutionReady",
  "FollowUpReady",
  "RenewalReady",
  "QualityReviewReady",
  "OutcomeReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "export only the customer-safe quality outcome receipt"
]) {
  if (!appPackageDeliveryQualityOutcome.includes(phrase)) fail(`Avalonia package delivery quality outcome record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryQualityOutcomeReceipt",
  "FromOutcome",
  "WORKSHOP.App.PackageDeliveryQualityOutcomeReceipt",
  "package-delivery-quality-outcome",
  "customer-safe-package-delivery-quality-outcome-ready",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "AutomationReady",
  "ExecutionReady",
  "FollowUpReady",
  "RenewalReady",
  "QualityReviewReady",
  "OutcomeReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, or package-control records",
  "Request EPOCH timing only"
]) {
  if (!appPackageDeliveryQualityOutcomeReceipt.includes(phrase)) fail(`Avalonia package delivery quality outcome receipt missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-quality-outcomes.json",
  "OutcomePath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryQualityOutcomeStore.includes(phrase)) fail(`Avalonia package delivery quality outcome store missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-quality-outcome-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryQualityOutcomeReceiptStore.includes(phrase)) fail(`Avalonia package delivery quality outcome receipt store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryAccountGrowthLinkageRecord",
  "FromQualityOutcomeReceipt",
  "WORKSHOP.App.PackageDeliveryAccountGrowthLinkage",
  "package-delivery-account-growth-linkage",
  "package-delivery-account-growth-ready",
  "CustomerSafeForReceipt",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "AutomationReady",
  "ExecutionReady",
  "FollowUpReady",
  "RenewalReady",
  "QualityReviewReady",
  "OutcomeReady",
  "AccountGrowthReady",
  "RetentionReady",
  "ReferralReady",
  "ExpansionReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "export only the customer-safe account-growth receipt"
]) {
  if (!appPackageDeliveryAccountGrowthLinkage.includes(phrase)) fail(`Avalonia package delivery account growth linkage record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryAccountGrowthReceipt",
  "FromLinkage",
  "WORKSHOP.App.PackageDeliveryAccountGrowthReceipt",
  "package-delivery-account-growth",
  "customer-safe-package-delivery-account-growth-ready",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "OperatorReviewed",
  "AraReviewComplete",
  "HumanReviewComplete",
  "PackageSupportReady",
  "LowLaborReuseReady",
  "ChecklistReady",
  "AutomationReady",
  "ExecutionReady",
  "FollowUpReady",
  "RenewalReady",
  "QualityReviewReady",
  "OutcomeReady",
  "AccountGrowthReady",
  "RetentionReady",
  "ReferralReady",
  "ExpansionReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, account-growth-control, or package-control records",
  "Request EPOCH timing only"
]) {
  if (!appPackageDeliveryAccountGrowthReceipt.includes(phrase)) fail(`Avalonia package delivery account growth receipt missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-account-growth-linkages.json",
  "LinkagePath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryAccountGrowthLinkageStore.includes(phrase)) fail(`Avalonia package delivery account growth linkage store missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-account-growth-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidReceipts",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryAccountGrowthReceiptStore.includes(phrase)) fail(`Avalonia package delivery account growth receipt store missing ${phrase}`);
}

for (const phrase of [
  "StateDirectoryEnvironmentVariable",
  "EpochStateDirectoryEnvironmentVariable",
  "previousEpochStateDirectory",
  "WriteEpochRevisedTimingExportFixture",
  "WorkshopRevenueExecutionHistoryStore.Append",
  "WorkshopRevenueExecutionHistoryStore.Load",
  "WorkshopServiceRequestInboxStore.EnsureDefaultWebportalRequest",
  "WorkshopServiceRequestInboxStore.Load",
  "WorkshopServiceRevenueCommandReceiptStore.Append",
  "WorkshopServiceRevenueCommandReceiptStore.Load",
  "history.Count != 1",
  "serviceInbox.Count != 1",
  "serviceCommandReceipts.Count != 1",
  "operationsBoard.ReadyForOperatorReview",
  "operationsBoard.EpochTimingProviderOnly",
  "operationsBoard.CustomerSafeChain",
  "operationsBoard.AraReviewComplete",
  "revenue/service operations board ready",
  "EPOCH timing provider only: true",
  "WorkshopCustomerServiceStatusStore.Append",
  "WorkshopCustomerServiceStatusStore.Load",
  "customerStatuses.Count != 1",
  "customerStatuses[0].WebportalExportReady",
  "customerStatuses[0].EpochTimingProviderOnly",
  "customerStatuses[0].AraReviewComplete",
  "EPOCH remains timing-provider-only",
  "File.Exists(WorkshopCustomerServiceStatusStore.StatusPath)",
  "WorkshopServiceLifecycleActionStore.EnsureDefaultLifecycleAction",
  "WorkshopServiceLifecycleActionStore.Load",
  "WorkshopServiceLifecycleReceiptStore.Append",
  "WorkshopServiceLifecycleReceiptStore.Load",
  "WorkshopServiceLifecycleStatusStore.Append",
  "WorkshopServiceLifecycleStatusStore.Load",
  "WorkshopEpochRevisedCalendarTimingPayloadStore.EnsureDefaultPayload",
  "WorkshopEpochRevisedCalendarTimingPayloadStore.Load",
  "WorkshopEpochRevisedCalendarTimingPayloadStore.PayloadFileName",
  "WorkshopRevisedCalendarTimingReceiptStore.Append",
  "WorkshopRevisedCalendarTimingReceiptStore.Load",
  "WorkshopRevisedCalendarTimingStatusStore.Append",
  "WorkshopRevisedCalendarTimingStatusStore.Load",
  "WorkshopTimingAwareServiceFollowUpStore.Append",
  "WorkshopTimingAwareServiceFollowUpStore.Load",
  "WorkshopTimingAwareRenewalReceiptStore.Append",
  "WorkshopTimingAwareRenewalReceiptStore.Load",
  "WorkshopDeliveryOutcomeAutomationStore.Append",
  "WorkshopDeliveryOutcomeAutomationStore.Load",
  "WorkshopDeliveryOutcomeAutomationReceiptStore.Append",
  "WorkshopDeliveryOutcomeAutomationReceiptStore.Load",
  "WorkshopAccountGrowthAutomationStore.Append",
  "WorkshopAccountGrowthAutomationStore.Load",
  "WorkshopAccountGrowthAutomationReceiptStore.Append",
  "WorkshopAccountGrowthAutomationReceiptStore.Load",
  "WorkshopAraReviewQueueStore.Append",
  "WorkshopAraReviewQueueStore.Load",
  "WorkshopAraOperatorReviewDecisionStore.Append",
  "WorkshopAraOperatorReviewDecisionStore.Load",
  "WorkshopAraReviewStatusReceiptStore.Append",
  "WorkshopAraReviewStatusReceiptStore.Load",
  "WorkshopAraMethodMaterializationStore.Append",
  "WorkshopAraMethodMaterializationStore.Load",
  "WorkshopAraMaterializationReceiptStore.Append",
  "WorkshopAraMaterializationReceiptStore.Load",
  "WorkshopServiceMaterialReuseStore.Append",
  "WorkshopServiceMaterialReuseStore.Load",
  "WorkshopServiceMaterialReuseReceiptStore.Append",
  "WorkshopServiceMaterialReuseReceiptStore.Load",
  "WorkshopPackageDeliveryChecklistStore.Append",
  "WorkshopPackageDeliveryChecklistStore.Load",
  "WorkshopPackageDeliveryChecklistReceiptStore.Append",
  "WorkshopPackageDeliveryChecklistReceiptStore.Load",
  "WorkshopPackageDeliveryChecklistAutomationStore.Append",
  "WorkshopPackageDeliveryChecklistAutomationStore.Load",
  "WorkshopPackageDeliveryChecklistAutomationReceiptStore.Append",
  "WorkshopPackageDeliveryChecklistAutomationReceiptStore.Load",
  "WorkshopPackageDeliveryExecutionStore.Append",
  "WorkshopPackageDeliveryExecutionStore.Load",
  "WorkshopPackageDeliveryExecutionReceiptStore.Append",
  "WorkshopPackageDeliveryExecutionReceiptStore.Load",
  "WorkshopPackageDeliveryFollowUpRenewalStore.Append",
  "WorkshopPackageDeliveryFollowUpRenewalStore.Load",
  "WorkshopPackageDeliveryFollowUpRenewalReceiptStore.Append",
  "WorkshopPackageDeliveryFollowUpRenewalReceiptStore.Load",
  "WorkshopPackageDeliveryQualityOutcomeStore.Append",
  "WorkshopPackageDeliveryQualityOutcomeStore.Load",
  "WorkshopPackageDeliveryQualityOutcomeReceiptStore.Append",
  "WorkshopPackageDeliveryQualityOutcomeReceiptStore.Load",
  "WorkshopPackageDeliveryAccountGrowthLinkageStore.Append",
  "WorkshopPackageDeliveryAccountGrowthLinkageStore.Load",
  "WorkshopPackageDeliveryAccountGrowthReceiptStore.Append",
  "WorkshopPackageDeliveryAccountGrowthReceiptStore.Load",
  "lifecycleActions.Count != 1",
  "lifecycleActions[0].AppOwnedLifecycleState",
  "lifecycleReceipts.Count != 1",
  "lifecycleReceipts[0].ServiceCommandReceiptId",
  "lifecycleStatuses.Count != 1",
  "lifecycleStatuses[0].WebportalExportReady",
  "File.Exists(WorkshopServiceLifecycleActionStore.ActionPath)",
  "File.Exists(WorkshopServiceLifecycleReceiptStore.ReceiptPath)",
  "File.Exists(WorkshopServiceLifecycleStatusStore.StatusPath)",
  "revisedTimingPayloads.Count != 1",
  "revisedTimingPayload.PayloadId != \"epoch-revised-timing-export-001\"",
  "revisedTimingPayload.SourceSurface != \"EPOCH.App.RevisedTimingProjectionExport\"",
  "revisedTimingPayloads[0].CalendarSystemLabel != \"revised-13-month\"",
  "revisedTimingPayloads[0].WorkshopCalendarOwnership",
  "File.Exists(WorkshopEpochRevisedCalendarTimingPayloadStore.PayloadPath)",
  "revisedTimingReceipts.Count != 1",
  "revisedTimingReceipts[0].Kind != \"epoch-revised-calendar-timing\"",
  "File.Exists(WorkshopRevisedCalendarTimingReceiptStore.ReceiptPath)",
  "revisedTimingStatuses.Count != 1",
  "revisedTimingStatuses[0].WebportalExportReady",
  "File.Exists(WorkshopRevisedCalendarTimingStatusStore.StatusPath)",
  "timingAwareFollowUps.Count != 1",
  "timingAwareFollowUps[0].ActionKind != \"timing-aware-service-follow-up\"",
  "timingAwareFollowUps[0].WebportalExportReady",
  "timingAwareFollowUps[0].EpochTimingProviderOnly",
  "timingAwareFollowUps[0].WorkshopCalendarOwnership",
  "timingAwareFollowUps[0].MonitorWorkflowExposed",
  "timingAwareFollowUps[0].RenewalPromptReady",
  "File.Exists(WorkshopTimingAwareServiceFollowUpStore.FollowUpPath)",
  "timingAwareRenewalReceipts.Count != 1",
  "timingAwareRenewalReceipts[0].Kind != \"timing-aware-renewal\"",
  "timingAwareRenewalReceipts[0].CustomerVisibleReceiptReady",
  "timingAwareRenewalReceipts[0].EpochTimingProviderOnly",
  "timingAwareRenewalReceipts[0].WorkshopCalendarOwnership",
  "timingAwareRenewalReceipts[0].MonitorWorkflowExposed",
  "timingAwareRenewalReceipts[0].RenewalReady",
  "timingAwareRenewalReceipts[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopTimingAwareRenewalReceiptStore.ReceiptPath)",
  "deliveryOutcomeAutomations.Count != 1",
  "deliveryOutcomeAutomations[0].AutomationKind != \"delivery-outcome-automation\"",
  "deliveryOutcomeAutomations[0].Status != \"delivery-outcome-automation-ready\"",
  "deliveryOutcomeAutomations[0].WebportalExportReady",
  "deliveryOutcomeAutomations[0].EpochTimingProviderOnly",
  "deliveryOutcomeAutomations[0].WorkshopCalendarOwnership",
  "deliveryOutcomeAutomations[0].MonitorWorkflowExposed",
  "deliveryOutcomeAutomations[0].PaymentLiveEnabled",
  "deliveryOutcomeAutomations[0].AraReviewComplete",
  "deliveryOutcomeAutomations[0].RenewalReady",
  "deliveryOutcomeAutomations[0].RequiresEpochTimingRequest",
  "deliveryOutcomeAutomations[0].NativeExecutionReady",
  "File.Exists(WorkshopDeliveryOutcomeAutomationStore.AutomationPath)",
  "deliveryOutcomeAutomationReceipts.Count != 1",
  "deliveryOutcomeAutomationReceipts[0].Kind != \"delivery-outcome-automation\"",
  "deliveryOutcomeAutomationReceipts[0].Status != \"customer-safe-delivery-outcome-ready\"",
  "deliveryOutcomeAutomationReceipts[0].CustomerVisibleReceiptReady",
  "deliveryOutcomeAutomationReceipts[0].WebportalExportReady",
  "deliveryOutcomeAutomationReceipts[0].EpochTimingProviderOnly",
  "deliveryOutcomeAutomationReceipts[0].WorkshopCalendarOwnership",
  "deliveryOutcomeAutomationReceipts[0].MonitorWorkflowExposed",
  "deliveryOutcomeAutomationReceipts[0].PaymentLiveEnabled",
  "deliveryOutcomeAutomationReceipts[0].AraReviewComplete",
  "deliveryOutcomeAutomationReceipts[0].RenewalReady",
  "deliveryOutcomeAutomationReceipts[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopDeliveryOutcomeAutomationReceiptStore.ReceiptPath)",
  "accountGrowthAutomations.Count != 1",
  "accountGrowthAutomations[0].AutomationKind != \"account-growth-automation\"",
  "accountGrowthAutomations[0].Status != \"account-growth-automation-ready\"",
  "accountGrowthAutomations[0].GrowthPath != \"retention-referral-expansion\"",
  "accountGrowthAutomations[0].CustomerVisibleReceiptReady",
  "accountGrowthAutomations[0].WebportalExportReady",
  "accountGrowthAutomations[0].EpochTimingProviderOnly",
  "accountGrowthAutomations[0].WorkshopCalendarOwnership",
  "accountGrowthAutomations[0].MonitorWorkflowExposed",
  "accountGrowthAutomations[0].PaymentLiveEnabled",
  "accountGrowthAutomations[0].AraReviewComplete",
  "accountGrowthAutomations[0].RetentionReady",
  "accountGrowthAutomations[0].ReferralReady",
  "accountGrowthAutomations[0].GrowthPlanReady",
  "accountGrowthAutomations[0].ConversionReady",
  "accountGrowthAutomations[0].ExpansionRequestReady",
  "accountGrowthAutomations[0].RequiresEpochTimingRequest",
  "accountGrowthAutomations[0].NativeExecutionReady",
  "File.Exists(WorkshopAccountGrowthAutomationStore.AutomationPath)",
  "accountGrowthAutomationReceipts.Count != 1",
  "accountGrowthAutomationReceipts[0].Kind != \"account-growth-automation\"",
  "accountGrowthAutomationReceipts[0].Status != \"customer-safe-account-growth-ready\"",
  "accountGrowthAutomationReceipts[0].CustomerVisibleReceiptReady",
  "accountGrowthAutomationReceipts[0].WebportalExportReady",
  "accountGrowthAutomationReceipts[0].EpochTimingProviderOnly",
  "accountGrowthAutomationReceipts[0].WorkshopCalendarOwnership",
  "accountGrowthAutomationReceipts[0].MonitorWorkflowExposed",
  "accountGrowthAutomationReceipts[0].PaymentLiveEnabled",
  "accountGrowthAutomationReceipts[0].AraReviewComplete",
  "accountGrowthAutomationReceipts[0].RetentionReady",
  "accountGrowthAutomationReceipts[0].ReferralReady",
  "accountGrowthAutomationReceipts[0].GrowthPlanReady",
  "accountGrowthAutomationReceipts[0].ConversionReady",
  "accountGrowthAutomationReceipts[0].ExpansionRequestReady",
  "accountGrowthAutomationReceipts[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopAccountGrowthAutomationReceiptStore.ReceiptPath)",
  "araReviewQueueRecords.Count != 1",
  "araReviewQueueRecords[0].QueueKind != \"ara-operator-review-queue\"",
  "araReviewQueueRecords[0].Status != \"ara-review-ready-for-decision\"",
  "araReviewQueueRecords[0].ReviewStatus != \"operator-review-complete\"",
  "araReviewQueueRecords[0].CustomerVisible",
  "araReviewQueueRecords[0].CustomerSafeForDecision",
  "araReviewQueueRecords[0].WebportalExportReady",
  "araReviewQueueRecords[0].EpochTimingProviderOnly",
  "araReviewQueueRecords[0].MonitorWorkflowExposed",
  "araReviewQueueRecords[0].PaymentLiveEnabled",
  "araReviewQueueRecords[0].RequiresOperatorReview",
  "araReviewQueueRecords[0].AraReviewComplete",
  "araReviewQueueRecords[0].NativeExecutionReady",
  "File.Exists(WorkshopAraReviewQueueStore.QueuePath)",
  "araReviewDecisions.Count != 1",
  "araReviewDecisions[0].DecisionKind != \"ara-operator-review-decision\"",
  "araReviewDecisions[0].Status != \"ara-review-approved\"",
  "araReviewDecisions[0].Decision != \"approved\"",
  "araReviewDecisions[0].Approved",
  "araReviewDecisions[0].RevisionRequired",
  "araReviewDecisions[0].CustomerVisible",
  "araReviewDecisions[0].CustomerSafeForReceipt",
  "araReviewDecisions[0].WebportalExportReady",
  "araReviewDecisions[0].EpochTimingProviderOnly",
  "araReviewDecisions[0].MonitorWorkflowExposed",
  "araReviewDecisions[0].PaymentLiveEnabled",
  "araReviewDecisions[0].RequiresOperatorReview",
  "araReviewDecisions[0].OperatorReviewed",
  "araReviewDecisions[0].AraReviewComplete",
  "araReviewDecisions[0].NativeExecutionReady",
  "File.Exists(WorkshopAraOperatorReviewDecisionStore.DecisionPath)",
  "araReviewStatusReceipts.Count != 1",
  "araReviewStatusReceipts[0].Kind != \"ara-review-status\"",
  "araReviewStatusReceipts[0].Status != \"customer-safe-ara-review-ready\"",
  "araReviewStatusReceipts[0].CustomerSafe",
  "araReviewStatusReceipts[0].CustomerVisibleReceiptReady",
  "araReviewStatusReceipts[0].WebportalExportReady",
  "araReviewStatusReceipts[0].EpochTimingProviderOnly",
  "araReviewStatusReceipts[0].MonitorWorkflowExposed",
  "araReviewStatusReceipts[0].PaymentLiveEnabled",
  "araReviewStatusReceipts[0].OperatorReviewed",
  "araReviewStatusReceipts[0].AraReviewComplete",
  "araReviewStatusReceipts[0].NativeExecutionReady",
  "File.Exists(WorkshopAraReviewStatusReceiptStore.ReceiptPath)",
  "araMethodMaterializations.Count != 1",
  "araMethodMaterializations[0].MaterializationKind != \"ara-method-materialization\"",
  "araMethodMaterializations[0].Status != \"ara-materialization-ready\"",
  "araMethodMaterializations[0].CustomerVisible",
  "araMethodMaterializations[0].CustomerSafeForReceipt",
  "araMethodMaterializations[0].WebportalExportReady",
  "araMethodMaterializations[0].EpochTimingProviderOnly",
  "araMethodMaterializations[0].WorkshopCalendarOwnership",
  "araMethodMaterializations[0].MonitorWorkflowExposed",
  "araMethodMaterializations[0].PaymentLiveEnabled",
  "araMethodMaterializations[0].OperatorReviewed",
  "araMethodMaterializations[0].AraReviewComplete",
  "araMethodMaterializations[0].HumanReviewComplete",
  "araMethodMaterializations[0].ReusableMethodReady",
  "araMethodMaterializations[0].MaterialAssetReady",
  "araMethodMaterializations[0].NativeExecutionReady",
  "File.Exists(WorkshopAraMethodMaterializationStore.MaterializationPath)",
  "araMaterializationReceipts.Count != 1",
  "araMaterializationReceipts[0].Kind != \"ara-method-materialization\"",
  "araMaterializationReceipts[0].Status != \"customer-safe-ara-materialization-ready\"",
  "araMaterializationReceipts[0].CustomerSafe",
  "araMaterializationReceipts[0].CustomerVisibleReceiptReady",
  "araMaterializationReceipts[0].WebportalExportReady",
  "araMaterializationReceipts[0].EpochTimingProviderOnly",
  "araMaterializationReceipts[0].WorkshopCalendarOwnership",
  "araMaterializationReceipts[0].MonitorWorkflowExposed",
  "araMaterializationReceipts[0].PaymentLiveEnabled",
  "araMaterializationReceipts[0].OperatorReviewed",
  "araMaterializationReceipts[0].AraReviewComplete",
  "araMaterializationReceipts[0].HumanReviewComplete",
  "araMaterializationReceipts[0].ReusableMethodReady",
  "araMaterializationReceipts[0].MaterialAssetReady",
  "araMaterializationReceipts[0].NativeExecutionReady",
  "File.Exists(WorkshopAraMaterializationReceiptStore.ReceiptPath)",
  "packageDeliveryChecklists.Count != 1",
  "packageDeliveryChecklists[0].ChecklistKind != \"package-delivery-checklist\"",
  "packageDeliveryChecklists[0].Status != \"package-delivery-checklist-ready\"",
  "packageDeliveryChecklists[0].CustomerVisible",
  "packageDeliveryChecklists[0].CustomerSafeForReceipt",
  "packageDeliveryChecklists[0].WebportalExportReady",
  "packageDeliveryChecklists[0].EpochTimingProviderOnly",
  "packageDeliveryChecklists[0].WorkshopCalendarOwnership",
  "packageDeliveryChecklists[0].MonitorWorkflowExposed",
  "packageDeliveryChecklists[0].PaymentLiveEnabled",
  "packageDeliveryChecklists[0].ChecklistReady",
  "File.Exists(WorkshopPackageDeliveryChecklistStore.ChecklistPath)",
  "packageDeliveryChecklistReceipts.Count != 1",
  "packageDeliveryChecklistReceipts[0].Kind != \"package-delivery-checklist\"",
  "packageDeliveryChecklistReceipts[0].Status != \"customer-safe-package-delivery-checklist-ready\"",
  "packageDeliveryChecklistReceipts[0].CustomerSafe",
  "packageDeliveryChecklistReceipts[0].CustomerVisibleReceiptReady",
  "packageDeliveryChecklistReceipts[0].WebportalExportReady",
  "packageDeliveryChecklistReceipts[0].EpochTimingProviderOnly",
  "packageDeliveryChecklistReceipts[0].WorkshopCalendarOwnership",
  "packageDeliveryChecklistReceipts[0].MonitorWorkflowExposed",
  "packageDeliveryChecklistReceipts[0].PaymentLiveEnabled",
  "packageDeliveryChecklistReceipts[0].ChecklistReady",
  "File.Exists(WorkshopPackageDeliveryChecklistReceiptStore.ReceiptPath)",
  "packageDeliveryChecklistAutomations.Count != 1",
  "packageDeliveryChecklistAutomations[0].AutomationKind != \"package-delivery-checklist-automation\"",
  "packageDeliveryChecklistAutomations[0].Status != \"package-delivery-checklist-automation-ready\"",
  "packageDeliveryChecklistAutomations[0].CustomerVisible",
  "packageDeliveryChecklistAutomations[0].CustomerSafeForReceipt",
  "packageDeliveryChecklistAutomations[0].WebportalExportReady",
  "packageDeliveryChecklistAutomations[0].EpochTimingProviderOnly",
  "packageDeliveryChecklistAutomations[0].WorkshopCalendarOwnership",
  "packageDeliveryChecklistAutomations[0].MonitorWorkflowExposed",
  "packageDeliveryChecklistAutomations[0].PaymentLiveEnabled",
  "packageDeliveryChecklistAutomations[0].ChecklistReady",
  "packageDeliveryChecklistAutomations[0].AutomationReady",
  "packageDeliveryChecklistAutomations[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopPackageDeliveryChecklistAutomationStore.AutomationPath)",
  "packageDeliveryChecklistAutomationReceipts.Count != 1",
  "packageDeliveryChecklistAutomationReceipts[0].Kind != \"package-delivery-checklist-automation\"",
  "packageDeliveryChecklistAutomationReceipts[0].Status != \"customer-safe-package-delivery-automation-ready\"",
  "packageDeliveryChecklistAutomationReceipts[0].CustomerSafe",
  "packageDeliveryChecklistAutomationReceipts[0].CustomerVisibleReceiptReady",
  "packageDeliveryChecklistAutomationReceipts[0].WebportalExportReady",
  "packageDeliveryChecklistAutomationReceipts[0].EpochTimingProviderOnly",
  "packageDeliveryChecklistAutomationReceipts[0].WorkshopCalendarOwnership",
  "packageDeliveryChecklistAutomationReceipts[0].MonitorWorkflowExposed",
  "packageDeliveryChecklistAutomationReceipts[0].PaymentLiveEnabled",
  "packageDeliveryChecklistAutomationReceipts[0].ChecklistReady",
  "packageDeliveryChecklistAutomationReceipts[0].AutomationReady",
  "packageDeliveryChecklistAutomationReceipts[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopPackageDeliveryChecklistAutomationReceiptStore.ReceiptPath)",
  "packageDeliveryExecutions.Count != 1",
  "packageDeliveryExecutions[0].ExecutionKind != \"package-delivery-execution\"",
  "packageDeliveryExecutions[0].Status != \"package-delivery-execution-ready\"",
  "packageDeliveryExecutions[0].CustomerVisible",
  "packageDeliveryExecutions[0].CustomerSafeForReceipt",
  "packageDeliveryExecutions[0].WebportalExportReady",
  "packageDeliveryExecutions[0].EpochTimingProviderOnly",
  "packageDeliveryExecutions[0].WorkshopCalendarOwnership",
  "packageDeliveryExecutions[0].MonitorWorkflowExposed",
  "packageDeliveryExecutions[0].PaymentLiveEnabled",
  "packageDeliveryExecutions[0].ChecklistReady",
  "packageDeliveryExecutions[0].AutomationReady",
  "packageDeliveryExecutions[0].ExecutionReady",
  "packageDeliveryExecutions[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopPackageDeliveryExecutionStore.ExecutionPath)",
  "packageDeliveryExecutionReceipts.Count != 1",
  "packageDeliveryExecutionReceipts[0].Kind != \"package-delivery-execution\"",
  "packageDeliveryExecutionReceipts[0].Status != \"customer-safe-package-delivery-execution-ready\"",
  "packageDeliveryExecutionReceipts[0].CustomerSafe",
  "packageDeliveryExecutionReceipts[0].CustomerVisibleReceiptReady",
  "packageDeliveryExecutionReceipts[0].WebportalExportReady",
  "packageDeliveryExecutionReceipts[0].EpochTimingProviderOnly",
  "packageDeliveryExecutionReceipts[0].WorkshopCalendarOwnership",
  "packageDeliveryExecutionReceipts[0].MonitorWorkflowExposed",
  "packageDeliveryExecutionReceipts[0].PaymentLiveEnabled",
  "packageDeliveryExecutionReceipts[0].ChecklistReady",
  "packageDeliveryExecutionReceipts[0].AutomationReady",
  "packageDeliveryExecutionReceipts[0].ExecutionReady",
  "packageDeliveryExecutionReceipts[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopPackageDeliveryExecutionReceiptStore.ReceiptPath)",
  "packageDeliveryFollowUpRenewals.Count != 1",
  "packageDeliveryFollowUpRenewals[0].LoopKind != \"package-delivery-followup-renewal\"",
  "packageDeliveryFollowUpRenewals[0].Status != \"package-delivery-followup-renewal-ready\"",
  "packageDeliveryFollowUpRenewals[0].CustomerVisible",
  "packageDeliveryFollowUpRenewals[0].CustomerSafeForReceipt",
  "packageDeliveryFollowUpRenewals[0].WebportalExportReady",
  "packageDeliveryFollowUpRenewals[0].EpochTimingProviderOnly",
  "packageDeliveryFollowUpRenewals[0].WorkshopCalendarOwnership",
  "packageDeliveryFollowUpRenewals[0].MonitorWorkflowExposed",
  "packageDeliveryFollowUpRenewals[0].PaymentLiveEnabled",
  "packageDeliveryFollowUpRenewals[0].ExecutionReady",
  "packageDeliveryFollowUpRenewals[0].FollowUpReady",
  "packageDeliveryFollowUpRenewals[0].RenewalReady",
  "packageDeliveryFollowUpRenewals[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopPackageDeliveryFollowUpRenewalStore.FollowUpPath)",
  "packageDeliveryFollowUpRenewalReceipts.Count != 1",
  "packageDeliveryFollowUpRenewalReceipts[0].Kind != \"package-delivery-followup-renewal\"",
  "packageDeliveryFollowUpRenewalReceipts[0].Status != \"customer-safe-package-delivery-followup-renewal-ready\"",
  "packageDeliveryFollowUpRenewalReceipts[0].CustomerSafe",
  "packageDeliveryFollowUpRenewalReceipts[0].CustomerVisibleReceiptReady",
  "packageDeliveryFollowUpRenewalReceipts[0].WebportalExportReady",
  "packageDeliveryFollowUpRenewalReceipts[0].EpochTimingProviderOnly",
  "packageDeliveryFollowUpRenewalReceipts[0].WorkshopCalendarOwnership",
  "packageDeliveryFollowUpRenewalReceipts[0].MonitorWorkflowExposed",
  "packageDeliveryFollowUpRenewalReceipts[0].PaymentLiveEnabled",
  "packageDeliveryFollowUpRenewalReceipts[0].ExecutionReady",
  "packageDeliveryFollowUpRenewalReceipts[0].FollowUpReady",
  "packageDeliveryFollowUpRenewalReceipts[0].RenewalReady",
  "packageDeliveryFollowUpRenewalReceipts[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopPackageDeliveryFollowUpRenewalReceiptStore.ReceiptPath)",
  "packageDeliveryQualityOutcomes.Count != 1",
  "packageDeliveryQualityOutcomes[0].LoopKind != \"package-delivery-quality-outcome\"",
  "packageDeliveryQualityOutcomes[0].Status != \"package-delivery-quality-outcome-ready\"",
  "packageDeliveryQualityOutcomes[0].CustomerVisible",
  "packageDeliveryQualityOutcomes[0].CustomerSafeForReceipt",
  "packageDeliveryQualityOutcomes[0].WebportalExportReady",
  "packageDeliveryQualityOutcomes[0].EpochTimingProviderOnly",
  "packageDeliveryQualityOutcomes[0].WorkshopCalendarOwnership",
  "packageDeliveryQualityOutcomes[0].MonitorWorkflowExposed",
  "packageDeliveryQualityOutcomes[0].PaymentLiveEnabled",
  "packageDeliveryQualityOutcomes[0].ExecutionReady",
  "packageDeliveryQualityOutcomes[0].FollowUpReady",
  "packageDeliveryQualityOutcomes[0].RenewalReady",
  "packageDeliveryQualityOutcomes[0].QualityReviewReady",
  "packageDeliveryQualityOutcomes[0].OutcomeReady",
  "packageDeliveryQualityOutcomes[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopPackageDeliveryQualityOutcomeStore.OutcomePath)",
  "packageDeliveryQualityOutcomeReceipts.Count != 1",
  "packageDeliveryQualityOutcomeReceipts[0].Kind != \"package-delivery-quality-outcome\"",
  "packageDeliveryQualityOutcomeReceipts[0].Status != \"customer-safe-package-delivery-quality-outcome-ready\"",
  "packageDeliveryQualityOutcomeReceipts[0].CustomerSafe",
  "packageDeliveryQualityOutcomeReceipts[0].CustomerVisibleReceiptReady",
  "packageDeliveryQualityOutcomeReceipts[0].WebportalExportReady",
  "packageDeliveryQualityOutcomeReceipts[0].EpochTimingProviderOnly",
  "packageDeliveryQualityOutcomeReceipts[0].WorkshopCalendarOwnership",
  "packageDeliveryQualityOutcomeReceipts[0].MonitorWorkflowExposed",
  "packageDeliveryQualityOutcomeReceipts[0].PaymentLiveEnabled",
  "packageDeliveryQualityOutcomeReceipts[0].ExecutionReady",
  "packageDeliveryQualityOutcomeReceipts[0].FollowUpReady",
  "packageDeliveryQualityOutcomeReceipts[0].RenewalReady",
  "packageDeliveryQualityOutcomeReceipts[0].QualityReviewReady",
  "packageDeliveryQualityOutcomeReceipts[0].OutcomeReady",
  "packageDeliveryQualityOutcomeReceipts[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopPackageDeliveryQualityOutcomeReceiptStore.ReceiptPath)",
  "packageDeliveryAccountGrowthLinkages.Count != 1",
  "packageDeliveryAccountGrowthLinkages[0].LinkageKind != \"package-delivery-account-growth-linkage\"",
  "packageDeliveryAccountGrowthLinkages[0].Status != \"package-delivery-account-growth-ready\"",
  "packageDeliveryAccountGrowthLinkages[0].GrowthPath != \"quality-outcome-retention-referral-expansion\"",
  "packageDeliveryAccountGrowthLinkages[0].CustomerVisible",
  "packageDeliveryAccountGrowthLinkages[0].CustomerSafeForReceipt",
  "packageDeliveryAccountGrowthLinkages[0].WebportalExportReady",
  "packageDeliveryAccountGrowthLinkages[0].EpochTimingProviderOnly",
  "packageDeliveryAccountGrowthLinkages[0].WorkshopCalendarOwnership",
  "packageDeliveryAccountGrowthLinkages[0].MonitorWorkflowExposed",
  "packageDeliveryAccountGrowthLinkages[0].PaymentLiveEnabled",
  "packageDeliveryAccountGrowthLinkages[0].AccountGrowthReady",
  "packageDeliveryAccountGrowthLinkages[0].RetentionReady",
  "packageDeliveryAccountGrowthLinkages[0].ReferralReady",
  "packageDeliveryAccountGrowthLinkages[0].ExpansionReady",
  "packageDeliveryAccountGrowthLinkages[0].RequiresEpochTimingRequest",
  "File.Exists(WorkshopPackageDeliveryAccountGrowthLinkageStore.LinkagePath)",
  "packageDeliveryAccountGrowthReceipts.Count != 1",
  "packageDeliveryAccountGrowthReceipts[0].Kind != \"package-delivery-account-growth\"",
  "packageDeliveryAccountGrowthReceipts[0].Status != \"customer-safe-package-delivery-account-growth-ready\"",
  "packageDeliveryAccountGrowthReceipts[0].CustomerSafe",
  "packageDeliveryAccountGrowthReceipts[0].CustomerVisibleReceiptReady",
  "packageDeliveryAccountGrowthReceipts[0].WebportalExportReady",
  "packageDeliveryAccountGrowthReceipts[0].EpochTimingProviderOnly",
  "packageDeliveryAccountGrowthReceipts[0].WorkshopCalendarOwnership",
  "packageDeliveryAccountGrowthReceipts[0].MonitorWorkflowExposed",
  "packageDeliveryAccountGrowthReceipts[0].PaymentLiveEnabled",
  "packageDeliveryAccountGrowthReceipts[0].AccountGrowthReady",
  "packageDeliveryAccountGrowthReceipts[0].RetentionReady",
  "packageDeliveryAccountGrowthReceipts[0].ReferralReady",
  "packageDeliveryAccountGrowthReceipts[0].ExpansionReady",
  "packageDeliveryAccountGrowthReceipts[0].RequiresEpochTimingRequest",
  "packageDeliveryAccountGrowthReceipts[0].Summary.Contains(\"account-growth-control\"",
  "packageDeliveryAccountGrowthReceipts[0].CustomerSafeMessage.Contains(\"account-growth follow-up is ready\"",
  "packageDeliveryAccountGrowthReceipts[0].NextAction.Contains(\"Request EPOCH timing only\"",
  "File.Exists(WorkshopPackageDeliveryAccountGrowthReceiptStore.ReceiptPath)",
  "File.Exists(WorkshopRevenueExecutionHistoryStore.HistoryPath)",
  "File.Exists(WorkshopServiceRequestInboxStore.InboxPath)",
  "File.Exists(WorkshopServiceRevenueCommandReceiptStore.ReceiptPath)",
  "Directory.Delete(smokeEpochStateDirectory, true)",
  "Directory.Delete(smokeStateDirectory, true)"
]) {
  if (!appShellSmoke.includes(phrase)) fail(`Avalonia smoke missing revenue history proof ${phrase}`);
}

for (const phrase of [
  "Native-backed revenue command slice",
  "workshop_app_bridge_preview_revenue_command",
  "offer experiment, labor",
  "timing from EPOCH without taking calendar ownership",
  "Native-backed revenue execution slice",
  "workshop_app_bridge_execute_revenue_command",
  "MONITOR workflow exposure",
  "Local revenue execution history slice",
  "WorkshopRevenueExecutionHistoryStore",
  "revenue-execution-history.json",
  "WORKSHOP_APP_STATE_DIR",
  "Fallback receipts are not",
  "Local Webportal service request inbox slice",
  "WorkshopServiceRequestInboxStore",
  "service-request-inbox.json",
  "Webportal Service Inbox",
  "WORKSHOP App/Webportal",
  "Local service-to-revenue-command slice",
  "WorkshopServiceRevenueCommandReceiptStore",
  "service-to-revenue-command.json",
  "Service To Native Command",
  "Local revenue/service operations board slice",
  "WorkshopRevenueOperationsBoardSnapshot",
  "Revenue / Service Operations Board",
  "Local customer-safe service status feedback slice",
  "WorkshopCustomerServiceStatusStore",
  "customer-service-status.json",
  "WorkshopCustomerServiceStatusRecord",
  "Customer-Safe Service Feedback",
  "Local service lifecycle action slice",
  "WorkshopServiceLifecycleActionStore",
  "service-lifecycle-actions.json",
  "WorkshopServiceLifecycleReceiptStore",
  "service-lifecycle-receipts.json",
  "WorkshopServiceLifecycleStatusStore",
  "service-lifecycle-status.json",
  "Webportal lifecycle status reader",
  "ARA-review-complete, and MONITOR-off",
  "Local EPOCH revised timing context slice",
  "WorkshopEpochRevisedCalendarTimingPayloadStore",
  "epoch-revised-calendar-timing.json",
  "WorkshopRevisedCalendarTimingReceiptStore",
  "revised-calendar-timing-receipts.json",
  "WorkshopRevisedCalendarTimingStatusStore",
  "revised-calendar-timing-status.json",
  "WORKSHOP calendar ownership false",
  "Local timing-aware follow-up and renewal slice",
  "WorkshopTimingAwareServiceFollowUpStore",
  "timing-aware-service-followups.json",
  "WorkshopTimingAwareRenewalReceiptStore",
  "timing-aware-renewal-receipts.json",
  "Local delivery outcome automation slice",
  "WorkshopDeliveryOutcomeAutomationStore",
  "delivery-outcome-automations.json",
  "WorkshopDeliveryOutcomeAutomationReceiptStore",
  "delivery-outcome-automation-receipts.json",
  "Local account-growth automation slice",
  "WorkshopAccountGrowthAutomationStore",
  "account-growth-automations.json",
  "WorkshopAccountGrowthAutomationReceiptStore",
  "account-growth-automation-receipts.json",
  "retention readiness",
  "referral readiness",
  "growth-plan readiness",
  "conversion readiness",
  "expansion-request readiness",
  "Local ARA review App ledger slice",
  "WorkshopAraReviewQueueStore",
  "ara-review-queue.json",
  "WorkshopAraOperatorReviewDecisionStore",
  "ara-operator-review-decisions.json",
  "WorkshopAraReviewStatusReceiptStore",
  "ara-review-status-receipts.json",
  "Local ARA method materialization App ledger slice",
  "WorkshopAraMethodMaterializationStore",
  "ara-method-materializations.json",
  "WorkshopAraMaterializationReceiptStore",
  "ara-materialization-receipts.json",
  "Local package delivery checklist App ledger slice",
  "WorkshopPackageDeliveryChecklistStore",
  "package-delivery-checklists.json",
  "WorkshopPackageDeliveryChecklistReceiptStore",
  "package-delivery-checklist-receipts.json",
  "Local package delivery checklist automation App ledger slice",
  "WorkshopPackageDeliveryChecklistAutomationStore",
  "package-delivery-checklist-automations.json",
  "WorkshopPackageDeliveryChecklistAutomationReceiptStore",
  "package-delivery-checklist-automation-receipts.json",
  "Local package delivery execution App ledger slice",
  "WorkshopPackageDeliveryExecutionStore",
  "package-delivery-executions.json",
  "WorkshopPackageDeliveryExecutionReceiptStore",
  "package-delivery-execution-receipts.json",
  "Local package delivery follow-up renewal App ledger slice",
  "WorkshopPackageDeliveryFollowUpRenewalStore",
  "package-delivery-followup-renewals.json",
  "WorkshopPackageDeliveryFollowUpRenewalReceiptStore",
  "package-delivery-followup-renewal-receipts.json",
  "checklist readiness",
  "automation readiness",
  "execution readiness",
  "renewal readiness",
  "payment live false"
]) {
  if (!runtime.includes(phrase)) fail(`runtime docs missing revenue command phrase ${phrase}`);
}

for (const path of ["web/app/index.html", "web/webportal/index.html", "docs/preserved-revenue-work-index.md"]) {
  if (!readme.includes(path)) fail(`README missing ${path}`);
}

for (const status of ["DRAFT", "AVAILABLE", "QUEUED", "IN_PROGRESS", "BLOCKED", "COMPLETE", "FIT_REVIEW", "MATERIALS_RECEIVED", "EPOCH_TIME_REQUESTED", "CANCELED", "COMPATIBILITY_REVIEW", "TIMING_CONFIRMED", "TIMING_RESCHEDULE_REQUIRED", "RECURRING_SERIES_ACTIVE", "RECURRING_EXCEPTION_ACTION_REQUIRED", "TIMING_WAITLISTED", "TIMING_PROMOTED"]) {
  if (!header.includes(`WORKSHOP_STATUS_${status}`)) fail(`header missing ${status}`);
}

for (const label of ["draft", "available", "queued", "in-progress", "blocked", "complete", "fit-review", "materials-received", "epoch-time-requested", "canceled", "compatibility-review", "timing-confirmed", "timing-reschedule-required", "recurring-series-active", "recurring-exception-action-required", "timing-waitlisted", "timing-promoted"]) {
  if (!source.includes(`"${label}"`)) fail(`source missing label ${label}`);
}

for (const type of [
  "WorkshopServiceRequest",
  "WorkshopSubmission",
  "WorkshopPackage",
  "WorkshopPackageEligibility",
  "WorkshopEpochTimeHandoff",
  "WorkshopDeliveryLifecycle",
  "WorkshopSubmissionReviewCycle",
  "WorkshopCohortPlan",
  "WorkshopCohortCapacityPlan",
  "WorkshopSubscriptionPlan",
  "WorkshopCohortPlanningReceipt",
  "WorkshopCohortEnrollment",
  "WorkshopSubscriptionLifecycle",
  "WorkshopSubscriptionLifecycleReceipt",
  "WorkshopCohortOutcomeReport",
  "WorkshopSubscriptionRenewalReport",
  "WorkshopCohortProgressStatusEvent",
  "WorkshopOutcomeRenewalReceipt",
  "WorkshopCompatibilityGate",
  "WorkshopCrmOpportunity",
  "WorkshopAraRevenuePacket",
  "WorkshopAraAssignment",
  "WorkshopAraReviewReceipt",
  "WorkshopRevenueOutcome",
  "WorkshopDeliveryResultReceipt",
  "WorkshopAraReviewCompletion",
  "WorkshopCustomerAccount",
  "WorkshopCustomerAccountHistory",
  "WorkshopRenewalOpportunity",
  "WorkshopCustomerFollowUp",
  "WorkshopRetentionHealth",
  "WorkshopReferralOpportunity",
  "WorkshopAccountGrowthPlan",
  "WorkshopGrowthFollowUpReceipt",
  "WorkshopReferralConversion",
  "WorkshopGrowthPlanAcceptance",
  "WorkshopExpansionServiceRequest",
  "WorkshopConversionStatusEvent",
  "WorkshopConversionReceipt",
  "WorkshopAraReviewStatus",
  "WorkshopCustomerSafeStatusEvent",
  "WorkshopEpochBridgePayload",
  "WorkshopEpochTimingReturnPayload",
  "WorkshopEpochTimingReturnConsumption",
  "WorkshopTimingReturnReceipt",
  "WorkshopEpochRevisedCalendarTimingPayload",
  "WorkshopEpochRevisedCalendarTimingConsumption",
  "WorkshopRevisedCalendarTimingReceipt",
  "WorkshopEpochCapacityWaitlistPayload",
  "WorkshopEpochCapacityWaitlistConsumption",
  "WorkshopCapacityWaitlistReceipt",
  "WorkshopEpochRecurringSeriesPayload",
  "WorkshopEpochRecurringSeriesConsumption",
  "WorkshopRecurringSeriesReceipt",
  "WorkshopMarketResearchRecord",
  "WorkshopCompetitorPriceAnchor",
  "WorkshopOfferExperiment",
  "WorkshopLaborEstimate",
  "WorkshopRoiRecord",
  "WorkshopRevenueAuditRecord",
  "WorkshopRevenueReceipt",
  "WorkshopDeliveryLogEntry",
  "WorkshopRevenueSearchQuery",
  "WorkshopRevenueSearchResult",
  "WorkshopOfferTemplate",
  "WorkshopServicePage",
  "WorkshopMaterialAsset",
  "WorkshopMarketingChannelExperiment",
  "WorkshopAraWorkPacket",
  "WorkshopOwnerTimeBudget",
  "WorkshopLocalWorktreeStatus",
  "WorkshopServiceLane",
  "WorkshopEpochHandoffKind"
]) {
  if (!header.includes(type)) fail(`header missing native contract ${type}`);
}

for (const fn of [
  "workshop_status_from_label",
  "workshop_service_request_requires_guardian_flow",
  "workshop_service_request_needs_epoch_time",
  "workshop_package_is_lower_labor",
  "workshop_package_eligibility_is_offer_ready",
  "workshop_package_eligibility_is_intake_ready",
  "workshop_service_request_routes_to_compatibility_review",
  "workshop_package_accepts_service_request",
  "workshop_submission_needs_review",
  "workshop_submission_review_cycle_is_ready",
  "workshop_submission_review_cycle_is_customer_safe",
  "workshop_cohort_plan_is_enrollment_ready",
  "workshop_cohort_plan_supports_subscription",
  "workshop_cohort_capacity_plan_is_ready",
  "workshop_subscription_plan_is_low_labor_ready",
  "workshop_cohort_planning_receipt_is_customer_safe",
  "workshop_cohort_enrollment_is_customer_safe",
  "workshop_subscription_lifecycle_is_active",
  "workshop_subscription_lifecycle_receipt_is_customer_safe",
  "workshop_cohort_outcome_report_is_customer_safe",
  "workshop_subscription_renewal_report_is_ready",
  "workshop_cohort_progress_status_event_is_customer_safe",
  "workshop_outcome_renewal_receipt_is_customer_safe",
  "workshop_compatibility_gate_blocks_auto_accept",
  "workshop_ara_review_status_label",
  "workshop_crm_opportunity_is_qualified",
  "workshop_ara_revenue_packet_is_ready",
  "workshop_ara_assignment_is_active",
  "workshop_ara_review_receipt_is_customer_safe",
  "workshop_revenue_outcome_is_reportable",
  "workshop_delivery_result_receipt_is_customer_safe",
  "workshop_ara_review_completion_is_ready",
  "workshop_customer_account_is_active",
  "workshop_customer_account_history_is_customer_safe",
  "workshop_renewal_opportunity_is_ready",
  "workshop_customer_follow_up_is_customer_safe",
  "workshop_retention_health_is_actionable",
  "workshop_referral_opportunity_is_ready",
  "workshop_account_growth_plan_is_ready",
  "workshop_growth_follow_up_receipt_is_customer_safe",
  "workshop_referral_conversion_is_ready",
  "workshop_growth_plan_acceptance_is_ready",
  "workshop_expansion_service_request_is_ready",
  "workshop_conversion_status_event_is_customer_safe",
  "workshop_conversion_receipt_is_customer_safe",
  "workshop_epoch_handoff_is_customer_safe",
  "workshop_delivery_transition_is_allowed",
  "workshop_delivery_lifecycle_is_valid",
  "workshop_customer_safe_status_event_is_valid",
  "workshop_epoch_bridge_payload_is_ready",
  "workshop_epoch_timing_return_payload_is_customer_safe",
  "workshop_epoch_timing_return_consumption_is_customer_safe",
  "workshop_timing_return_receipt_is_customer_safe",
  "workshop_epoch_revised_calendar_timing_payload_is_customer_safe",
  "workshop_epoch_revised_calendar_timing_consumption_is_customer_safe",
  "workshop_revised_calendar_timing_receipt_is_customer_safe",
  "workshop_epoch_capacity_waitlist_payload_is_customer_safe",
  "workshop_epoch_capacity_waitlist_consumption_is_customer_safe",
  "workshop_capacity_waitlist_receipt_is_customer_safe",
  "workshop_epoch_recurring_series_payload_is_customer_safe",
  "workshop_epoch_recurring_series_consumption_is_customer_safe",
  "workshop_recurring_series_receipt_is_customer_safe",
  "workshop_market_research_record_is_evidence_ready",
  "workshop_competitor_price_anchor_is_ready",
  "workshop_offer_experiment_is_testable",
  "workshop_labor_estimate_is_low_labor",
  "workshop_roi_record_is_test_ready",
  "workshop_revenue_audit_record_is_actionable",
  "workshop_revenue_receipt_is_customer_safe",
  "workshop_delivery_log_entry_is_product_log",
  "workshop_revenue_search_query_respects_role",
  "workshop_revenue_search_result_is_customer_safe",
  "workshop_offer_template_is_ready",
  "workshop_service_page_is_customer_safe",
  "workshop_material_asset_requires_human_review",
  "workshop_marketing_channel_experiment_is_testable",
  "workshop_ara_work_packet_requires_human_review",
  "workshop_owner_time_budget_warns_on_labor_trap",
  "workshop_local_worktree_status_is_local_only"
]) {
  if (!header.includes(fn)) fail(`header missing native function ${fn}`);
  if (!source.includes(fn)) fail(`source missing native function ${fn}`);
}

for (const selector of [".directory-layout", ".workspace-grid", ".portal-grid", ".lane-board", ".pipeline-preview", ".wide-panel", ".check-row"]) {
  if (!styles.includes(selector)) fail(`styles missing ${selector}`);
}

for (const forbidden of [
  "revised 13-month calendar contract",
  "Calendar Board",
  "Open Windows",
  "Reminder recurrence review",
  "epoch_core"
]) {
  const combinedWeb = `${root}\n${app}\n${portal}\n${data}\n${script}`;
  if (combinedWeb.includes(forbidden)) fail(`WORKSHOP web surface contains EPOCH-owned phrase ${forbidden}`);
}

for (const forbiddenStatus of ['"review-required"', '"timing-pending"']) {
  if (data.includes(forbiddenStatus)) fail(`WORKSHOP data contains non-native status ${forbiddenStatus}`);
}

for (const forbiddenPortal of ["workshop-monitor.html", "../app/index.html", "reset-ledger", "ARA Revenue Packets", "ARA Assignment Review", "ARA Handoff Queue"]) {
  if (portal.includes(forbiddenPortal)) fail(`WORKSHOP portal exposes internal control ${forbiddenPortal}`);
}
if (portal.includes("MONITOR")) fail("WORKSHOP customer Webportal HTML must not render MONITOR copy");

const portalIds = [...portal.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicatePortalIds = portalIds.filter((id, index) => portalIds.indexOf(id) !== index);
if (duplicatePortalIds.length) fail(`WORKSHOP portal has duplicate ids: ${[...new Set(duplicatePortalIds)].join(", ")}`);

for (const forbiddenPortalRenderer of [
  'renderStack("portal-package-readiness", (state.ledger.packageEligibility || []).filter((item) => item.customerOfferReady), renderEligibility',
  'renderStack("portal-submission-cycles", cycles.filter((item) => item.customerVisible), renderCycle',
  'renderStack("portal-cohort-plans", state.ledger.cohortPlans || [], renderPlan',
  'renderStack("portal-delivery-lifecycle", state.ledger.deliveryLifecycles, renderLifecycle',
  'renderStack("portal-cohort-progress-events", (state.ledger.cohortProgressStatusEvents || []).filter((item) => item.customerVisible), renderCohortProgressStatusEvent',
  'renderStack("portal-outcome-renewal-receipts", (state.ledger.outcomeRenewalReceipts || []).filter((item) => item.customerVisible), renderOutcomeRenewalReceipt'
]) {
  if (script.includes(forbiddenPortalRenderer)) fail(`WORKSHOP portal reuses operator renderer: ${forbiddenPortalRenderer}`);
}

if (!initialWorkshopLedger.marketResearchRecords?.length) fail("seeded WORKSHOP ledger missing market research records");
if (!initialWorkshopLedger.competitorPriceAnchors?.length) fail("seeded WORKSHOP ledger missing competitor price anchors");
if (!initialWorkshopLedger.offerExperiments?.some((item) => item.customerVisible && item.lowLaborScore >= 80)) fail("seeded WORKSHOP ledger missing customer-visible low-labor offer experiment");
if (!initialWorkshopLedger.laborEstimates?.some((item) => item.laborTrapWarning === false)) fail("seeded WORKSHOP ledger missing low-labor estimate");
if (!initialWorkshopLedger.roiRecords?.some((item) => item.approvedForTest === true)) fail("seeded WORKSHOP ledger missing ROI-approved test record");
if (!initialWorkshopLedger.revenueAuditRecords?.some((item) => item.lowLaborViable === true)) fail("seeded WORKSHOP ledger missing actionable revenue audit record");
if (!initialWorkshopLedger.revenueReceipts?.some((item) => item.customerVisible === true)) fail("seeded WORKSHOP ledger missing customer-safe revenue receipt");
if (!initialWorkshopLedger.deliveryLogEntries?.every((item) => item.monitorRunnerLog === false)) fail("WORKSHOP delivery log entries must not be MONITOR runner logs");
if (!initialWorkshopLedger.revenueSearchQueries?.some((item) => item.customerSafeOnly === true)) fail("seeded WORKSHOP ledger missing customer-safe revenue search query");
if (!initialWorkshopLedger.revenueSearchResults?.some((item) => item.customerVisible === true)) fail("seeded WORKSHOP ledger missing customer-safe revenue search result");
if (!initialWorkshopLedger.offerTemplates?.some((item) => item.customerVisible === true && item.under19GuardRequired === true)) fail("seeded WORKSHOP ledger missing guarded customer-visible offer template");
if (!initialWorkshopLedger.servicePages?.some((item) => item.customerVisible === true && item.japanCopyMode === "ai-neutral" && item.relatedPackageId)) fail("seeded WORKSHOP ledger missing customer-visible AI-neutral service page");
if (data.includes("epoch-template-submission-deadline") || data.includes("epoch-template-systems-review")) fail("WORKSHOP service pages must not invent EPOCH schedule template placeholder ids");
for (const page of initialWorkshopLedger.servicePages || []) {
  if (!page.relatedEpochScheduleTemplateId?.startsWith("EPOCH-SCHEDULE-TEMPLATE-")) fail(`WORKSHOP service page ${page.id} must reference an EPOCH-owned schedule template id`);
  if (epochScheduleTemplateData && !epochScheduleTemplateData.includes(`id: "${page.relatedEpochScheduleTemplateId}"`)) fail(`WORKSHOP service page ${page.id} references missing EPOCH schedule template ${page.relatedEpochScheduleTemplateId}`);
}
if (!initialWorkshopLedger.materialAssets?.some((item) => item.araDraftReady === true && item.humanReviewRequired === true && item.lowLaborLeverage === "high")) fail("seeded WORKSHOP ledger missing reusable human-reviewed material asset");
if (!initialWorkshopLedger.marketingChannelExperiments?.some((item) => item.aiForwardCopy === false && item.expectedMonthlyRevenueJpy > 0 && item.linkedServicePageId)) fail("seeded WORKSHOP ledger missing AI-neutral marketing channel experiment");
if (!initialWorkshopLedger.serviceLifecycleActions?.length) fail("seeded WORKSHOP ledger missing service lifecycle actions");
if (initialWorkshopLedger.serviceLifecycleActions.some((item) => !item.customerVisible || !item.epochTimingProviderOnly || item.monitorWorkflowExposed || !item.appOwnedLifecycleState)) fail("seeded service lifecycle actions must stay customer-visible, App-owned, EPOCH-provider-only, and MONITOR-off");
if (!initialWorkshopLedger.araWorkPackets?.every((item) => item.humanReviewRequired === true && item.customerSafe === false)) fail("ARA work packets must stay internal until human review");
if (!initialWorkshopLedger.araMethodMaterializations?.some((item) => item.customerVisible === false && item.webportalExportReady === false && item.humanReviewComplete === true && item.reusableMethodReady === true && item.materialAssetReady === true && item.monitorWorkflowExposed === false)) fail("seeded WORKSHOP ledger missing internal ARA method materialization record");
if (!initialWorkshopLedger.araMaterializationReceipts?.some((item) => item.customerVisible === true && item.webportalExportReady === true && item.customerSafe === true && item.humanReviewComplete === true && item.reusableMethodReady === true && item.materialAssetReady === true && item.monitorWorkflowExposed === false)) fail("seeded WORKSHOP ledger missing customer-safe ARA materialization receipt");
if (!initialWorkshopLedger.serviceMaterialReuseRecords?.some((item) => item.customerVisible === false && item.webportalExportReady === false && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing internal service material reuse record");
if (!initialWorkshopLedger.serviceMaterialReuseReceipts?.some((item) => item.customerVisible === true && item.webportalExportReady === true && item.customerSafe === true && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing customer-safe service material reuse receipt");
if (!initialWorkshopLedger.packageDeliveryChecklists?.some((item) => item.customerVisible === false && item.webportalExportReady === false && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.checklistReady === true && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing internal package delivery checklist record");
if (!initialWorkshopLedger.packageDeliveryChecklistReceipts?.some((item) => item.customerVisible === true && item.webportalExportReady === true && item.customerSafe === true && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.checklistReady === true && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing customer-safe package delivery checklist receipt");
if (!initialWorkshopLedger.packageDeliveryChecklistAutomations?.some((item) => item.customerVisible === false && item.webportalExportReady === false && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.checklistReady === true && item.automationReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing internal package delivery checklist automation record");
if (!initialWorkshopLedger.packageDeliveryChecklistAutomationReceipts?.some((item) => item.customerVisible === true && item.webportalExportReady === true && item.customerSafe === true && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.checklistReady === true && item.automationReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing customer-safe package delivery automation receipt");
if (!initialWorkshopLedger.packageDeliveryExecutions?.some((item) => item.customerVisible === false && item.webportalExportReady === false && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.checklistReady === true && item.automationReady === true && item.executionReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing internal package delivery execution record");
if (!initialWorkshopLedger.packageDeliveryExecutionReceipts?.some((item) => item.customerVisible === true && item.webportalExportReady === true && item.customerSafe === true && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.checklistReady === true && item.automationReady === true && item.executionReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing customer-safe package delivery execution receipt");
if (!initialWorkshopLedger.packageDeliveryFollowUpRenewals?.some((item) => item.customerVisible === false && item.webportalExportReady === false && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.executionReady === true && item.followUpReady === true && item.renewalReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing internal package delivery follow-up renewal record");
if (!initialWorkshopLedger.packageDeliveryFollowUpRenewalReceipts?.some((item) => item.customerVisible === true && item.webportalExportReady === true && item.customerSafe === true && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.executionReady === true && item.followUpReady === true && item.renewalReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing customer-safe package delivery follow-up renewal receipt");
if (!initialWorkshopLedger.packageDeliveryQualityOutcomes?.some((item) => item.customerVisible === false && item.webportalExportReady === false && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.executionReady === true && item.followUpReady === true && item.renewalReady === true && item.qualityReviewReady === true && item.outcomeReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing internal package delivery quality outcome record");
if (!initialWorkshopLedger.packageDeliveryQualityOutcomeReceipts?.some((item) => item.customerVisible === true && item.webportalExportReady === true && item.customerSafe === true && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.executionReady === true && item.followUpReady === true && item.renewalReady === true && item.qualityReviewReady === true && item.outcomeReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false)) fail("seeded WORKSHOP ledger missing customer-safe package delivery quality outcome receipt");
if (!initialWorkshopLedger.packageDeliveryAccountGrowthLinkages?.some((item) => item.customerVisible === false && item.webportalExportReady === false && item.customerSafeForReceipt === true && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.executionReady === true && item.followUpReady === true && item.renewalReady === true && item.qualityReviewReady === true && item.outcomeReady === true && item.accountGrowthReady === true && item.retentionReady === true && item.referralReady === true && item.expansionReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false && item.epochTimingProviderOnly === true && item.paymentLiveEnabled === false)) fail("seeded WORKSHOP ledger missing internal package delivery account growth linkage record");
if (!initialWorkshopLedger.packageDeliveryAccountGrowthReceipts?.some((item) => item.customerVisible === true && item.webportalExportReady === true && item.customerSafe === true && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.executionReady === true && item.followUpReady === true && item.renewalReady === true && item.qualityReviewReady === true && item.outcomeReady === true && item.accountGrowthReady === true && item.retentionReady === true && item.referralReady === true && item.expansionReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false && item.epochTimingProviderOnly === true && item.paymentLiveEnabled === false)) fail("seeded WORKSHOP ledger missing customer-safe package delivery account growth receipt");
if (!initialWorkshopLedger.ownerTimeBudgets?.some((item) => item.laborTrapWarning === false && item.araDelegableMinutes > 0)) fail("seeded WORKSHOP ledger missing owner time budget guard");
const customerVisibleMonitorCopy = Object.values(initialWorkshopLedger)
  .flatMap((value) => Array.isArray(value) ? value : [])
  .filter((item) => item && typeof item === "object" && item.customerVisible)
  .some((item) => JSON.stringify({
    summary: item.summary,
    customerSafeStatus: item.customerSafeStatus,
    detail: item.detail
  }).includes("MONITOR"));
if (customerVisibleMonitorCopy) fail("customer-visible WORKSHOP Webportal records must not render MONITOR copy");

const fakeForm = new Map([
  ["requester", "  "],
  ["lane", "premium-english-test-prep"],
  ["ageBand", "under-19"],
  ["material", "ready"],
  ["summary", "Needs EIKEN writing review"],
  ["needsTiming", "on"]
]);
const request = createServiceRequestRecord(fakeForm);
const eligibility = createPackageEligibilityForRequest(request);
const gate = createCompatibilityGateForRequest(request);
const submission = createSubmissionForRequest(request);
const reviewCycle = createSubmissionReviewCycleForRequest(request, submission);
const cohortPlan = createCohortPlanForRequest(request);
const handoff = createEpochHandoffForRequest(request);
const lifecycle = createDeliveryLifecycleForRequest(request, submission, handoff);
const transitions = createDeliveryTransitionsForRequest(request, submission, handoff);
const events = createCustomerStatusEventsForRequest(request, submission, handoff);
const receipts = createTransitionReceiptsForRequest(request, lifecycle, transitions, handoff);
const readinessReceipt = createOperatingReadinessReceiptForRequest(request, eligibility, gate, reviewCycle, cohortPlan);
const crmAccount = createCrmAccountForRequest(request);
const opportunity = createCrmOpportunityForRequest(request, crmAccount);
const packet = createAraRevenuePacketForOpportunity(opportunity);
const assignment = createAraAssignmentForPacket(packet);
const araReviewReceipt = createAraReviewReceiptForPacket(packet, opportunity);
const crmAraReceipt = createCrmAraReceiptForRequest(request, opportunity, packet, assignment);
const revenueOutcome = createRevenueOutcomeForRequest(request, lifecycle, opportunity);
const deliveryResultReceipt = createDeliveryResultReceiptForOutcome(revenueOutcome, request);
const araReviewCompletion = createAraReviewCompletionForAssignment(assignment, packet, revenueOutcome);
const customerAccount = createCustomerAccountForRequest(request, crmAccount, revenueOutcome);
const accountHistory = createCustomerAccountHistoryForOutcome(customerAccount, revenueOutcome, request, deliveryResultReceipt);
const renewalOpportunity = createRenewalOpportunityForOutcome(revenueOutcome, request, customerAccount);
const customerFollowUp = createCustomerFollowUpForRenewal(renewalOpportunity, customerAccount, request);
const retentionHealth = createRetentionHealthForAccount(customerAccount, renewalOpportunity, request);
const referralOpportunity = createReferralOpportunityForRetention(retentionHealth, customerAccount, renewalOpportunity, request);
const accountGrowthPlan = createAccountGrowthPlanForRetention(retentionHealth, referralOpportunity, customerAccount, renewalOpportunity, request);
const growthFollowUpReceipt = createGrowthFollowUpReceiptForPlan(accountGrowthPlan, customerAccount, request);
const referralConversion = createReferralConversionForOpportunity(referralOpportunity, customerAccount, accountGrowthPlan, request);
const growthPlanAcceptance = createGrowthPlanAcceptanceForPlan(accountGrowthPlan, referralConversion, customerAccount, request);
const expansionServiceRequest = createExpansionServiceRequestForAcceptance(growthPlanAcceptance, accountGrowthPlan, customerAccount, request);
const conversionStatusEvent = createConversionStatusEventForExpansion(referralConversion, expansionServiceRequest, customerAccount);
const conversionReceipt = createConversionReceiptForExpansion(referralConversion, expansionServiceRequest, conversionStatusEvent);

if (request.customer !== "New customer") fail("request factory did not default blank customer");
if (request.status !== "compatibility-review") fail("request factory missing under-19 compatibility status");
if (request.valueJpy !== 45000) fail("request factory did not inherit selected package value");
if (!eligibility || eligibility.acceptsDirectUnder19Intake !== false || eligibility.customerOfferReady !== false) fail("eligibility factory did not guard under-19 intake");
if (!gate || gate.blocksAutoAcceptance !== true || gate.guardianTermsRequired !== true) fail("compatibility gate factory did not block under-19 auto acceptance");
if (submission !== null) fail("compatibility-review route should not open the submission queue");
if (reviewCycle !== null) fail("compatibility-review route should not open a submission review cycle");
if (cohortPlan !== null) fail("non-cohort route should not open a cohort plan");
if (!handoff || handoff.bridgeReady !== false || handoff.status !== "queued") fail("handoff factory missing staged EPOCH timing request");
if (handoff.requestPreview?.status !== "queued" || handoff.requestPreview?.providerGoLiveRequested !== false) fail("handoff preview is not aligned to EPOCH request fields");
if (handoff.statusPreview?.owner !== "EPOCH") fail("handoff status preview is not aligned to EPOCH status fields");
if (lifecycle.currentStatus !== "compatibility-review") fail("delivery lifecycle factory missing compatibility-review state");
if (!transitions.some((transition) => transition.toStatus === "compatibility-review")) fail("delivery transitions missing compatibility-review transition");
if (!events.some((item) => item.status === "compatibility-review")) fail("customer-safe events missing compatibility-review status");
if (!receipts.some((receipt) => receipt.kind === "epoch-bridge")) fail("transition receipts missing EPOCH bridge receipt");
if (!readinessReceipt || readinessReceipt.kind !== "operating-readiness") fail("readiness receipt missing for gated request");
if (!crmAccount || !crmAccount.id || crmAccount.name !== request.customer) fail("CRM account factory missing gated account record");
if (!opportunity || opportunity.qualified !== false || opportunity.customerVisible !== true) fail("CRM opportunity factory did not preserve gated opportunity review");
if (opportunity.accountId !== crmAccount.id) fail("CRM opportunity factory did not link to CRM account");
if (packet !== null) fail("gated opportunity should not open an ARA revenue packet");
if (assignment !== null) fail("gated opportunity should not open an ARA assignment");
if (araReviewReceipt !== null) fail("gated opportunity should not open an ARA review receipt");
if (!crmAraReceipt || crmAraReceipt.kind !== "crm-ara-assignment" || crmAraReceipt.status !== "fit-review") fail("CRM/ARA receipt missing for gated opportunity");
if (!revenueOutcome || revenueOutcome.status !== "compatibility-review" || revenueOutcome.resultReceiptReady !== false) fail("gated request should create a non-reportable revenue outcome");
if (deliveryResultReceipt !== null) fail("gated request should not create a delivery result receipt");
if (araReviewCompletion !== null) fail("gated request should not create an ARA review completion");
if (!customerAccount || customerAccount.renewalEligible !== false || customerAccount.status !== "compatibility-review") fail("gated request should create a non-renewable customer account");
if (!accountHistory || accountHistory.customerVisible !== true || accountHistory.status !== "compatibility-review") fail("gated request should preserve customer-safe account history");
if (!renewalOpportunity || renewalOpportunity.renewalReady !== false || renewalOpportunity.status !== "compatibility-review") fail("gated request should create a non-ready renewal opportunity");
if (customerFollowUp !== null) fail("gated request should not create a customer follow-up");
if (!retentionHealth || retentionHealth.growthReady !== false || retentionHealth.referralEligible !== false) fail("gated request should create non-actionable retention health");
if (referralOpportunity !== null) fail("gated request should not create a referral opportunity");
if (accountGrowthPlan !== null) fail("gated request should not create an account growth plan");
if (growthFollowUpReceipt !== null) fail("gated request should not create a growth follow-up receipt");
if (referralConversion !== null) fail("gated request should not create a referral conversion");
if (growthPlanAcceptance !== null) fail("gated request should not create a growth plan acceptance");
if (expansionServiceRequest !== null) fail("gated request should not create an expansion service request");
if (conversionStatusEvent !== null) fail("gated request should not create a conversion status event");
if (conversionReceipt !== null) fail("gated request should not create a conversion receipt");

const cohortForm = new Map([
  ["requester", "Adult cohort prospect"],
  ["lane", "cohort-subscription"],
  ["ageBand", "adult"],
  ["material", "diagnostic"],
  ["summary", "Cohort interest"],
  ["needsTiming", "on"]
]);
const cohortRequest = createServiceRequestRecord(cohortForm);
const adultCohortPlan = createCohortPlanForRequest(cohortRequest);
if (!adultCohortPlan || adultCohortPlan.reusableMaterialsReady !== true || adultCohortPlan.epochWindowRequired !== true) fail("cohort plan factory missing lower-labor operating plan");
const adultCapacityPlan = createCohortCapacityPlanForCohortPlan(adultCohortPlan, cohortRequest);
const adultSubscriptionPlan = createSubscriptionPlanForCohortPlan(adultCohortPlan, cohortRequest);
const adultPlanningReceipt = createCohortPlanningReceiptForPlan(adultCohortPlan, adultCapacityPlan, adultSubscriptionPlan, cohortRequest);
applyCohortPlanningRecords(adultCohortPlan, adultCapacityPlan, adultSubscriptionPlan, adultPlanningReceipt);
if (!adultCapacityPlan || adultCapacityPlan.capacityStatus !== "cluster-ready" || adultCapacityPlan.epochTimingDependency !== true) fail("cohort capacity plan factory missing WORKSHOP-owned capacity planning state");
if (!adultSubscriptionPlan || adultSubscriptionPlan.liveTimeRequired !== false || adultSubscriptionPlan.materialUnitsReady <= 0 || adultSubscriptionPlan.monthlyPriceJpy !== 20000) fail("subscription plan factory missing lower-labor planning state");
if (!adultPlanningReceipt || adultPlanningReceipt.kind !== "cohort-subscription-planning" || adultPlanningReceipt.customerVisible !== true) fail("cohort planning receipt missing customer-safe receipt");
if (adultCohortPlan.capacityPlanId !== adultCapacityPlan.id || adultCohortPlan.subscriptionPlanId !== adultSubscriptionPlan.id || adultCohortPlan.lastPlanningReceiptId !== adultPlanningReceipt.id) fail("cohort planning records did not attach back to cohort plan");
const adultCrmAccount = createCrmAccountForRequest(cohortRequest);
const adultOpportunity = createCrmOpportunityForRequest(cohortRequest, adultCrmAccount);
const adultPacket = createAraRevenuePacketForOpportunity(adultOpportunity);
const adultAssignment = createAraAssignmentForPacket(adultPacket);
const adultReceipt = createAraReviewReceiptForPacket(adultPacket, adultOpportunity);
if (!adultCrmAccount || adultCrmAccount.name !== cohortRequest.customer) fail("CRM account factory missing adult account record");
if (!adultOpportunity || adultOpportunity.qualified !== true || adultOpportunity.valueJpy <= 0) fail("CRM opportunity factory missing qualified adult opportunity");
if (adultOpportunity.accountId !== adultCrmAccount.id) fail("adult CRM opportunity did not link to CRM account");
if (!adultPacket || adultPacket.status !== "queued" || adultPacket.requiresOperatorReview !== true || adultPacket.customerVisible !== false) fail("ARA packet factory missing native-compatible internal review boundary");
if (!adultAssignment || adultAssignment.accepted !== true || adultAssignment.reviewRequired !== true || adultAssignment.reviewComplete !== false) fail("ARA assignment factory missing review-required assignment");
if (!adultReceipt || adultReceipt.customerVisible !== true || !adultReceipt.customerSafeStatus) fail("ARA review receipt factory missing customer-safe receipt");
if (adultReceipt.requestId !== cohortRequest.id || adultReceipt.opportunityId !== adultOpportunity.id || adultReceipt.packetId !== adultPacket.id) fail("ARA review receipt factory missing request/opportunity/packet linkage");
if (adultReceipt.kind !== "operator-review" || adultReceipt.reviewStatus !== "operator-review" || !adultReceipt.summary) fail("ARA review receipt factory missing review kind/status/summary");
const adultOutcome = createRevenueOutcomeForRequest(cohortRequest, createDeliveryLifecycleForRequest(cohortRequest, null, createEpochHandoffForRequest(cohortRequest)), adultOpportunity);
const adultCustomerAccount = createCustomerAccountForRequest(cohortRequest, adultCrmAccount, adultOutcome);
const adultEnrollment = createCohortEnrollmentForPlans(adultCohortPlan, adultCapacityPlan, cohortRequest, adultCustomerAccount);
const adultSubscriptionLifecycle = createSubscriptionLifecycleForPlan(adultSubscriptionPlan, adultEnrollment, cohortRequest, adultCustomerAccount);
const adultSubscriptionLifecycleReceipt = createSubscriptionLifecycleReceiptForLifecycle(adultSubscriptionLifecycle, adultEnrollment, cohortRequest);
const adultCohortOutcomeReport = createCohortOutcomeReportForLifecycle(adultSubscriptionLifecycle, adultEnrollment, cohortRequest, adultCustomerAccount);
const adultSubscriptionRenewalReport = createSubscriptionRenewalReportForOutcome(adultCohortOutcomeReport, adultSubscriptionLifecycle, cohortRequest, adultCustomerAccount);
const adultProgressStatusEvent = createCohortProgressStatusEventForOutcome(adultCohortOutcomeReport, adultSubscriptionRenewalReport, cohortRequest);
const adultOutcomeRenewalReceipt = createOutcomeRenewalReceiptForReport(adultCohortOutcomeReport, adultSubscriptionRenewalReport, adultProgressStatusEvent, cohortRequest);
const adultCompletion = createAraReviewCompletionForAssignment(adultAssignment, adultPacket, adultOutcome);
const adultOpenReviewQueue = createAraReviewQueueForPacket(adultPacket, adultAssignment, adultReceipt, adultOutcome, cohortRequest);
const adultOpenReviewDecision = createAraOperatorReviewDecisionForQueue(adultOpenReviewQueue, adultAssignment, adultCompletion, cohortRequest);
const adultOpenReviewStatusReceipt = createAraReviewStatusReceiptForDecision(adultOpenReviewDecision, cohortRequest);
const adultOpenMaterialization = createAraMethodMaterializationForDecision(adultOpenReviewDecision, adultOpenReviewStatusReceipt, initialWorkshopLedger.materialAssets[0]);
const adultOpenServiceReuse = createServiceMaterialReuseForMaterialization(
  createAraMaterializationReceiptForRecord(adultOpenMaterialization),
  cohortRequest,
  initialWorkshopLedger.packages.find((item) => item.id === cohortRequest.packageId),
  initialWorkshopLedger.materialAssets[0]
);
const adultOpenPackageDeliveryChecklist = createPackageDeliveryChecklistForReuse(adultOpenServiceReuse);
const adultOpenPackageDeliveryChecklistAutomation = createPackageDeliveryChecklistAutomationForChecklist(adultOpenPackageDeliveryChecklist);
const adultOpenPackageDeliveryExecution = createPackageDeliveryExecutionForAutomation(adultOpenPackageDeliveryChecklistAutomation);
const adultOpenPackageDeliveryFollowUpRenewal = createPackageDeliveryFollowUpRenewalForExecutionReceipt(null);
const adultOpenPackageDeliveryQualityOutcome = createPackageDeliveryQualityOutcomeForReceipts(null, null);
const adultOpenPackageDeliveryAccountGrowthLinkage = createPackageDeliveryAccountGrowthLinkageForQualityOutcomeReceipt(null);
const adultApprovedAssignment = { ...adultAssignment, reviewComplete: true };
const adultApprovedCompletion = createAraReviewCompletionForAssignment(adultApprovedAssignment, adultPacket, adultOutcome);
const adultApprovedQueue = createAraReviewQueueForPacket(adultPacket, adultApprovedAssignment, adultReceipt, adultOutcome, cohortRequest);
const adultApprovedDecision = createAraOperatorReviewDecisionForQueue(adultApprovedQueue, adultApprovedAssignment, adultApprovedCompletion, cohortRequest);
const adultApprovedStatusReceipt = createAraReviewStatusReceiptForDecision(adultApprovedDecision, cohortRequest);
const adultApprovedMaterialization = createAraMethodMaterializationForDecision(adultApprovedDecision, adultApprovedStatusReceipt, initialWorkshopLedger.materialAssets[0]);
const adultApprovedMaterializationReceipt = createAraMaterializationReceiptForRecord(adultApprovedMaterialization);
const adultApprovedServiceReuse = createServiceMaterialReuseForMaterialization(
  adultApprovedMaterializationReceipt,
  cohortRequest,
  initialWorkshopLedger.packages.find((item) => item.id === cohortRequest.packageId),
  initialWorkshopLedger.materialAssets[0]
);
const adultApprovedServiceReuseReceipt = createServiceMaterialReuseReceiptForRecord(adultApprovedServiceReuse);
const adultApprovedPackageDeliveryChecklist = createPackageDeliveryChecklistForReuse(adultApprovedServiceReuse);
const adultApprovedPackageDeliveryChecklistReceipt = createPackageDeliveryChecklistReceiptForRecord(adultApprovedPackageDeliveryChecklist);
const adultApprovedPackageDeliveryChecklistAutomation = createPackageDeliveryChecklistAutomationForChecklist(adultApprovedPackageDeliveryChecklist);
const adultApprovedPackageDeliveryChecklistAutomationReceipt = createPackageDeliveryChecklistAutomationReceiptForRecord(adultApprovedPackageDeliveryChecklistAutomation);
const adultApprovedPackageDeliveryExecution = createPackageDeliveryExecutionForAutomation(adultApprovedPackageDeliveryChecklistAutomation);
const adultApprovedPackageDeliveryExecutionReceipt = createPackageDeliveryExecutionReceiptForRecord(adultApprovedPackageDeliveryExecution);
const adultApprovedPackageDeliveryFollowUpRenewal = createPackageDeliveryFollowUpRenewalForExecutionReceipt(adultApprovedPackageDeliveryExecutionReceipt);
const adultApprovedPackageDeliveryFollowUpRenewalReceipt = createPackageDeliveryFollowUpRenewalReceiptForRecord(adultApprovedPackageDeliveryFollowUpRenewal);
const adultApprovedPackageDeliveryQualityOutcome = createPackageDeliveryQualityOutcomeForReceipts(adultApprovedPackageDeliveryExecutionReceipt, adultApprovedPackageDeliveryFollowUpRenewalReceipt);
const adultApprovedPackageDeliveryQualityOutcomeReceipt = createPackageDeliveryQualityOutcomeReceiptForRecord(adultApprovedPackageDeliveryQualityOutcome);
const adultApprovedPackageDeliveryAccountGrowthLinkage = createPackageDeliveryAccountGrowthLinkageForQualityOutcomeReceipt(adultApprovedPackageDeliveryQualityOutcomeReceipt);
const adultApprovedPackageDeliveryAccountGrowthReceipt = createPackageDeliveryAccountGrowthReceiptForLinkage(adultApprovedPackageDeliveryAccountGrowthLinkage);
if (!adultOutcome || adultOutcome.customerVisible !== true || adultOutcome.status !== "queued" || adultOutcome.resultReceiptReady !== false) fail("queued cohort outcome should stay visible but not result-ready");
if (!adultEnrollment || adultEnrollment.customerAccountId !== adultCustomerAccount.id || adultEnrollment.timingConfirmedByEpoch !== false) fail("cohort enrollment factory missing customer/account and EPOCH timing boundary");
if (!adultSubscriptionLifecycle || adultSubscriptionLifecycle.paymentLiveEnabled !== false || adultSubscriptionLifecycle.renewalReady !== true) fail("subscription lifecycle factory should be renewal-ready without live payment automation");
if (!adultSubscriptionLifecycleReceipt || adultSubscriptionLifecycleReceipt.kind !== "subscription-lifecycle" || adultSubscriptionLifecycleReceipt.customerVisible !== true) fail("subscription lifecycle receipt missing customer-safe proof");
if (!adultCohortOutcomeReport || adultCohortOutcomeReport.progressScore <= 0 || adultCohortOutcomeReport.customerVisible !== true || adultCohortOutcomeReport.subscriptionLifecycleId !== adultSubscriptionLifecycle.id) fail("cohort outcome report factory missing customer-safe progress linkage");
if (!adultSubscriptionRenewalReport || adultSubscriptionRenewalReport.renewalReady !== true || adultSubscriptionRenewalReport.paymentLiveEnabled !== false || adultSubscriptionRenewalReport.requiresEpochTime !== true) fail("subscription renewal report should stay renewal-ready without live payment automation and preserve EPOCH timing need");
if (!adultProgressStatusEvent || adultProgressStatusEvent.customerVisible !== true || !adultProgressStatusEvent.customerSafeStatus.includes("EPOCH")) fail("cohort progress status event missing customer-safe EPOCH boundary");
if (!adultOutcomeRenewalReceipt || adultOutcomeRenewalReceipt.kind !== "cohort-outcome-renewal" || adultOutcomeRenewalReceipt.customerVisible !== true || adultOutcomeRenewalReceipt.renewalReportId !== adultSubscriptionRenewalReport.id) fail("outcome renewal receipt missing customer-safe reporting proof");
if (!adultCompletion || adultCompletion.customerVisible !== false || adultCompletion.reviewComplete !== false || adultCompletion.status !== "operator-review") fail("ARA review completion factory missing internal open-review record");
if (!adultOpenReviewQueue || adultOpenReviewQueue.kind !== "ara-operator-review-queue" || adultOpenReviewQueue.customerVisible !== false || adultOpenReviewQueue.webportalExportReady !== false || adultOpenReviewQueue.monitorWorkflowExposed !== false || adultOpenReviewQueue.paymentLiveEnabled !== false || adultOpenReviewQueue.araReviewComplete !== false) fail("open ARA review queue should stay internal and review-incomplete");
if (!adultOpenReviewDecision || adultOpenReviewDecision.status !== "ara-review-revision-required" || adultOpenReviewDecision.approved !== false || adultOpenReviewDecision.customerVisible !== false || adultOpenReviewDecision.webportalExportReady !== false) fail("open ARA review decision should require revision and stay internal");
if (adultOpenReviewStatusReceipt !== null) fail("open ARA review decision must not produce a customer-safe status receipt");
if (adultOpenMaterialization !== null) fail("open ARA review decision must not produce method materialization");
if (adultOpenServiceReuse !== null) fail("open ARA review decision must not produce service material reuse");
if (adultOpenPackageDeliveryChecklist !== null) fail("open ARA review decision must not produce package delivery checklist");
if (adultOpenPackageDeliveryChecklistAutomation !== null) fail("open ARA review decision must not produce package delivery checklist automation");
if (adultOpenPackageDeliveryExecution !== null) fail("open ARA review decision must not produce package delivery execution");
if (adultOpenPackageDeliveryFollowUpRenewal !== null) fail("open ARA review decision must not produce package delivery follow-up renewal");
if (adultOpenPackageDeliveryQualityOutcome !== null) fail("open ARA review decision must not produce package delivery quality outcome");
if (adultOpenPackageDeliveryAccountGrowthLinkage !== null) fail("open ARA review decision must not produce package delivery account growth linkage");
if (!adultApprovedCompletion || adultApprovedCompletion.reviewComplete !== true || adultApprovedCompletion.status !== "approved") fail("approved ARA completion fixture did not close operator review");
if (!adultApprovedQueue || adultApprovedQueue.reviewStatus !== "operator-review-complete" || adultApprovedQueue.araReviewComplete !== true || adultApprovedQueue.customerSafeForDecision !== true || adultApprovedQueue.webportalExportReady !== false) fail("approved ARA review queue missing internal complete-review state");
if (!adultApprovedDecision || adultApprovedDecision.status !== "ara-review-approved" || adultApprovedDecision.decision !== "approved" || adultApprovedDecision.approved !== true || adultApprovedDecision.customerSafeForReceipt !== true || adultApprovedDecision.customerVisible !== false || adultApprovedDecision.webportalExportReady !== false) fail("approved ARA operator decision missing internal approved state");
if (!adultApprovedStatusReceipt || adultApprovedStatusReceipt.kind !== "ara-review-status" || adultApprovedStatusReceipt.status !== "customer-safe-ara-review-ready" || adultApprovedStatusReceipt.customerVisible !== true || adultApprovedStatusReceipt.webportalExportReady !== true || adultApprovedStatusReceipt.monitorWorkflowExposed !== false || adultApprovedStatusReceipt.paymentLiveEnabled !== false) fail("approved ARA review status receipt missing customer-safe Webportal-ready state");
if (adultApprovedStatusReceipt.packetId || adultApprovedStatusReceipt.assignmentId || !adultApprovedStatusReceipt.summary.includes("without exposing internal packet") || !adultApprovedStatusReceipt.nextAction.includes("Request EPOCH timing only")) fail("ARA review status receipt must not expose packet or assignment ids and must preserve EPOCH timing boundary");
if (!adultApprovedMaterialization || adultApprovedMaterialization.kind !== "ara-method-materialization" || adultApprovedMaterialization.status !== "ara-materialization-ready" || adultApprovedMaterialization.customerVisible !== false || adultApprovedMaterialization.webportalExportReady !== false || adultApprovedMaterialization.monitorWorkflowExposed !== false || adultApprovedMaterialization.paymentLiveEnabled !== false || adultApprovedMaterialization.workshopCalendarOwnership !== false || adultApprovedMaterialization.araReviewComplete !== true || adultApprovedMaterialization.humanReviewComplete !== true || adultApprovedMaterialization.reusableMethodReady !== true || adultApprovedMaterialization.materialAssetReady !== true) fail("approved ARA method materialization missing internal reusable-method state");
if (!adultApprovedMaterializationReceipt || adultApprovedMaterializationReceipt.kind !== "ara-method-materialization" || adultApprovedMaterializationReceipt.status !== "customer-safe-ara-materialization-ready" || adultApprovedMaterializationReceipt.customerVisible !== true || adultApprovedMaterializationReceipt.webportalExportReady !== true || adultApprovedMaterializationReceipt.monitorWorkflowExposed !== false || adultApprovedMaterializationReceipt.paymentLiveEnabled !== false || adultApprovedMaterializationReceipt.workshopCalendarOwnership !== false || adultApprovedMaterializationReceipt.araReviewComplete !== true || adultApprovedMaterializationReceipt.humanReviewComplete !== true || adultApprovedMaterializationReceipt.reusableMethodReady !== true || adultApprovedMaterializationReceipt.materialAssetReady !== true) fail("approved ARA materialization receipt missing customer-safe Webportal-ready state");
if (adultApprovedMaterializationReceipt.packetId || adultApprovedMaterializationReceipt.assignmentId || adultApprovedMaterializationReceipt.queueId || adultApprovedMaterializationReceipt.decisionId || !adultApprovedMaterializationReceipt.summary.includes("without exposing internal packet, queue, decision, or materialization controls") || !adultApprovedMaterializationReceipt.nextAction.includes("Request EPOCH timing only")) fail("ARA materialization receipt must not expose internal review ids and must preserve EPOCH timing boundary");
if (!adultApprovedServiceReuse || adultApprovedServiceReuse.kind !== "service-material-reuse" || adultApprovedServiceReuse.status !== "service-material-reuse-ready" || adultApprovedServiceReuse.customerVisible !== false || adultApprovedServiceReuse.webportalExportReady !== false || adultApprovedServiceReuse.monitorWorkflowExposed !== false || adultApprovedServiceReuse.paymentLiveEnabled !== false || adultApprovedServiceReuse.workshopCalendarOwnership !== false || adultApprovedServiceReuse.packageSupportReady !== true || adultApprovedServiceReuse.lowLaborReuseReady !== true || adultApprovedServiceReuse.packageId !== "pkg-cohort-subscription") fail("approved service material reuse missing internal package-support state");
if (!adultApprovedServiceReuseReceipt || adultApprovedServiceReuseReceipt.kind !== "service-material-reuse" || adultApprovedServiceReuseReceipt.status !== "customer-safe-service-material-reuse-ready" || adultApprovedServiceReuseReceipt.customerVisible !== true || adultApprovedServiceReuseReceipt.webportalExportReady !== true || adultApprovedServiceReuseReceipt.monitorWorkflowExposed !== false || adultApprovedServiceReuseReceipt.paymentLiveEnabled !== false || adultApprovedServiceReuseReceipt.workshopCalendarOwnership !== false || adultApprovedServiceReuseReceipt.packageSupportReady !== true || adultApprovedServiceReuseReceipt.lowLaborReuseReady !== true || !adultApprovedServiceReuseReceipt.nextAction.includes("Request EPOCH timing only")) fail("approved service material reuse receipt missing customer-safe Webportal-ready state");
if (adultApprovedServiceReuseReceipt.materializationId || adultApprovedServiceReuseReceipt.queueId || adultApprovedServiceReuseReceipt.decisionId || adultApprovedServiceReuseReceipt.packetId || adultApprovedServiceReuseReceipt.assignmentId || adultApprovedServiceReuseReceipt.operatorNextAction || !adultApprovedServiceReuseReceipt.summary.includes("without exposing internal packet, queue, decision, materialization, or package-control records")) fail("service material reuse receipt must not expose internal materialization or review ids");
if (!adultApprovedPackageDeliveryChecklist || adultApprovedPackageDeliveryChecklist.kind !== "package-delivery-checklist" || adultApprovedPackageDeliveryChecklist.status !== "package-delivery-checklist-ready" || adultApprovedPackageDeliveryChecklist.customerVisible !== false || adultApprovedPackageDeliveryChecklist.webportalExportReady !== false || adultApprovedPackageDeliveryChecklist.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryChecklist.paymentLiveEnabled !== false || adultApprovedPackageDeliveryChecklist.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryChecklist.packageSupportReady !== true || adultApprovedPackageDeliveryChecklist.lowLaborReuseReady !== true || adultApprovedPackageDeliveryChecklist.checklistReady !== true || adultApprovedPackageDeliveryChecklist.packageId !== "pkg-cohort-subscription") fail("approved package delivery checklist missing internal package-control state");
if (!adultApprovedPackageDeliveryChecklistReceipt || adultApprovedPackageDeliveryChecklistReceipt.kind !== "package-delivery-checklist" || adultApprovedPackageDeliveryChecklistReceipt.status !== "customer-safe-package-delivery-checklist-ready" || adultApprovedPackageDeliveryChecklistReceipt.customerVisible !== true || adultApprovedPackageDeliveryChecklistReceipt.webportalExportReady !== true || adultApprovedPackageDeliveryChecklistReceipt.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryChecklistReceipt.paymentLiveEnabled !== false || adultApprovedPackageDeliveryChecklistReceipt.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryChecklistReceipt.packageSupportReady !== true || adultApprovedPackageDeliveryChecklistReceipt.lowLaborReuseReady !== true || adultApprovedPackageDeliveryChecklistReceipt.checklistReady !== true || !adultApprovedPackageDeliveryChecklistReceipt.nextAction.includes("Request EPOCH timing only")) fail("approved package delivery checklist receipt missing customer-safe Webportal-ready state");
if (adultApprovedPackageDeliveryChecklistReceipt.reuseId || adultApprovedPackageDeliveryChecklistReceipt.materializationId || adultApprovedPackageDeliveryChecklistReceipt.queueId || adultApprovedPackageDeliveryChecklistReceipt.decisionId || adultApprovedPackageDeliveryChecklistReceipt.packetId || adultApprovedPackageDeliveryChecklistReceipt.assignmentId || adultApprovedPackageDeliveryChecklistReceipt.operatorNextAction || !adultApprovedPackageDeliveryChecklistReceipt.summary.includes("without exposing internal packet, queue, decision, materialization, reuse, checklist-control, or package-control records")) fail("package delivery checklist receipt must not expose internal materialization, review, or reuse ids");
if (!adultApprovedPackageDeliveryChecklistAutomation || adultApprovedPackageDeliveryChecklistAutomation.kind !== "package-delivery-checklist-automation" || adultApprovedPackageDeliveryChecklistAutomation.status !== "package-delivery-checklist-automation-ready" || adultApprovedPackageDeliveryChecklistAutomation.customerVisible !== false || adultApprovedPackageDeliveryChecklistAutomation.webportalExportReady !== false || adultApprovedPackageDeliveryChecklistAutomation.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryChecklistAutomation.paymentLiveEnabled !== false || adultApprovedPackageDeliveryChecklistAutomation.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryChecklistAutomation.packageSupportReady !== true || adultApprovedPackageDeliveryChecklistAutomation.lowLaborReuseReady !== true || adultApprovedPackageDeliveryChecklistAutomation.checklistReady !== true || adultApprovedPackageDeliveryChecklistAutomation.automationReady !== true || adultApprovedPackageDeliveryChecklistAutomation.requiresEpochTimingRequest !== false || adultApprovedPackageDeliveryChecklistAutomation.packageId !== "pkg-cohort-subscription") fail("approved package delivery checklist automation missing internal automation-control state");
if (!adultApprovedPackageDeliveryChecklistAutomationReceipt || adultApprovedPackageDeliveryChecklistAutomationReceipt.kind !== "package-delivery-checklist-automation" || adultApprovedPackageDeliveryChecklistAutomationReceipt.status !== "customer-safe-package-delivery-automation-ready" || adultApprovedPackageDeliveryChecklistAutomationReceipt.customerVisible !== true || adultApprovedPackageDeliveryChecklistAutomationReceipt.webportalExportReady !== true || adultApprovedPackageDeliveryChecklistAutomationReceipt.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryChecklistAutomationReceipt.paymentLiveEnabled !== false || adultApprovedPackageDeliveryChecklistAutomationReceipt.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryChecklistAutomationReceipt.packageSupportReady !== true || adultApprovedPackageDeliveryChecklistAutomationReceipt.lowLaborReuseReady !== true || adultApprovedPackageDeliveryChecklistAutomationReceipt.checklistReady !== true || adultApprovedPackageDeliveryChecklistAutomationReceipt.automationReady !== true || adultApprovedPackageDeliveryChecklistAutomationReceipt.requiresEpochTimingRequest !== false || !adultApprovedPackageDeliveryChecklistAutomationReceipt.nextAction.includes("Request EPOCH timing only")) fail("approved package delivery checklist automation receipt missing customer-safe Webportal-ready state");
if (adultApprovedPackageDeliveryChecklistAutomationReceipt.reuseId || adultApprovedPackageDeliveryChecklistAutomationReceipt.materializationId || adultApprovedPackageDeliveryChecklistAutomationReceipt.queueId || adultApprovedPackageDeliveryChecklistAutomationReceipt.decisionId || adultApprovedPackageDeliveryChecklistAutomationReceipt.packetId || adultApprovedPackageDeliveryChecklistAutomationReceipt.assignmentId || adultApprovedPackageDeliveryChecklistAutomationReceipt.checklistId || adultApprovedPackageDeliveryChecklistAutomationReceipt.operatorNextAction || !adultApprovedPackageDeliveryChecklistAutomationReceipt.summary.includes("without exposing internal packet, queue, decision, materialization, reuse, checklist, automation-control, or package-control records")) fail("package delivery checklist automation receipt must not expose internal checklist, materialization, review, or reuse ids");
if (!adultApprovedPackageDeliveryExecution || adultApprovedPackageDeliveryExecution.kind !== "package-delivery-execution" || adultApprovedPackageDeliveryExecution.status !== "package-delivery-execution-ready" || adultApprovedPackageDeliveryExecution.customerVisible !== false || adultApprovedPackageDeliveryExecution.webportalExportReady !== false || adultApprovedPackageDeliveryExecution.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryExecution.paymentLiveEnabled !== false || adultApprovedPackageDeliveryExecution.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryExecution.packageSupportReady !== true || adultApprovedPackageDeliveryExecution.lowLaborReuseReady !== true || adultApprovedPackageDeliveryExecution.checklistReady !== true || adultApprovedPackageDeliveryExecution.automationReady !== true || adultApprovedPackageDeliveryExecution.executionReady !== true || adultApprovedPackageDeliveryExecution.requiresEpochTimingRequest !== false || adultApprovedPackageDeliveryExecution.packageId !== "pkg-cohort-subscription") fail("approved package delivery execution missing internal execution-control state");
if (!adultApprovedPackageDeliveryExecutionReceipt || adultApprovedPackageDeliveryExecutionReceipt.kind !== "package-delivery-execution" || adultApprovedPackageDeliveryExecutionReceipt.status !== "customer-safe-package-delivery-execution-ready" || adultApprovedPackageDeliveryExecutionReceipt.customerVisible !== true || adultApprovedPackageDeliveryExecutionReceipt.webportalExportReady !== true || adultApprovedPackageDeliveryExecutionReceipt.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryExecutionReceipt.paymentLiveEnabled !== false || adultApprovedPackageDeliveryExecutionReceipt.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryExecutionReceipt.packageSupportReady !== true || adultApprovedPackageDeliveryExecutionReceipt.lowLaborReuseReady !== true || adultApprovedPackageDeliveryExecutionReceipt.checklistReady !== true || adultApprovedPackageDeliveryExecutionReceipt.automationReady !== true || adultApprovedPackageDeliveryExecutionReceipt.executionReady !== true || adultApprovedPackageDeliveryExecutionReceipt.requiresEpochTimingRequest !== false || !adultApprovedPackageDeliveryExecutionReceipt.nextAction.includes("Request EPOCH timing only")) fail("approved package delivery execution receipt missing customer-safe Webportal-ready state");
if (adultApprovedPackageDeliveryExecutionReceipt.reuseId || adultApprovedPackageDeliveryExecutionReceipt.materializationId || adultApprovedPackageDeliveryExecutionReceipt.queueId || adultApprovedPackageDeliveryExecutionReceipt.decisionId || adultApprovedPackageDeliveryExecutionReceipt.packetId || adultApprovedPackageDeliveryExecutionReceipt.assignmentId || adultApprovedPackageDeliveryExecutionReceipt.checklistId || adultApprovedPackageDeliveryExecutionReceipt.automationId || adultApprovedPackageDeliveryExecutionReceipt.executionId || adultApprovedPackageDeliveryExecutionReceipt.operatorNextAction || !adultApprovedPackageDeliveryExecutionReceipt.summary.includes("without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution-control, or package-control records")) fail("package delivery execution receipt must not expose internal execution, automation, checklist, materialization, review, or reuse ids");
if (!adultApprovedPackageDeliveryFollowUpRenewal || adultApprovedPackageDeliveryFollowUpRenewal.kind !== "package-delivery-followup-renewal" || adultApprovedPackageDeliveryFollowUpRenewal.status !== "package-delivery-followup-renewal-ready" || adultApprovedPackageDeliveryFollowUpRenewal.customerVisible !== false || adultApprovedPackageDeliveryFollowUpRenewal.webportalExportReady !== false || adultApprovedPackageDeliveryFollowUpRenewal.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryFollowUpRenewal.paymentLiveEnabled !== false || adultApprovedPackageDeliveryFollowUpRenewal.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryFollowUpRenewal.packageSupportReady !== true || adultApprovedPackageDeliveryFollowUpRenewal.lowLaborReuseReady !== true || adultApprovedPackageDeliveryFollowUpRenewal.executionReady !== true || adultApprovedPackageDeliveryFollowUpRenewal.followUpReady !== true || adultApprovedPackageDeliveryFollowUpRenewal.renewalReady !== true || adultApprovedPackageDeliveryFollowUpRenewal.requiresEpochTimingRequest !== false || adultApprovedPackageDeliveryFollowUpRenewal.packageId !== "pkg-cohort-subscription") fail("approved package delivery follow-up renewal missing internal follow-up/renewal-control state");
if (!adultApprovedPackageDeliveryFollowUpRenewalReceipt || adultApprovedPackageDeliveryFollowUpRenewalReceipt.kind !== "package-delivery-followup-renewal" || adultApprovedPackageDeliveryFollowUpRenewalReceipt.status !== "customer-safe-package-delivery-followup-renewal-ready" || adultApprovedPackageDeliveryFollowUpRenewalReceipt.customerVisible !== true || adultApprovedPackageDeliveryFollowUpRenewalReceipt.webportalExportReady !== true || adultApprovedPackageDeliveryFollowUpRenewalReceipt.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryFollowUpRenewalReceipt.paymentLiveEnabled !== false || adultApprovedPackageDeliveryFollowUpRenewalReceipt.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryFollowUpRenewalReceipt.packageSupportReady !== true || adultApprovedPackageDeliveryFollowUpRenewalReceipt.lowLaborReuseReady !== true || adultApprovedPackageDeliveryFollowUpRenewalReceipt.executionReady !== true || adultApprovedPackageDeliveryFollowUpRenewalReceipt.followUpReady !== true || adultApprovedPackageDeliveryFollowUpRenewalReceipt.renewalReady !== true || adultApprovedPackageDeliveryFollowUpRenewalReceipt.requiresEpochTimingRequest !== false || !adultApprovedPackageDeliveryFollowUpRenewalReceipt.nextAction.includes("Request EPOCH timing only")) fail("approved package delivery follow-up renewal receipt missing customer-safe Webportal-ready state");
if (adultApprovedPackageDeliveryFollowUpRenewalReceipt.reuseId || adultApprovedPackageDeliveryFollowUpRenewalReceipt.materializationId || adultApprovedPackageDeliveryFollowUpRenewalReceipt.queueId || adultApprovedPackageDeliveryFollowUpRenewalReceipt.decisionId || adultApprovedPackageDeliveryFollowUpRenewalReceipt.packetId || adultApprovedPackageDeliveryFollowUpRenewalReceipt.assignmentId || adultApprovedPackageDeliveryFollowUpRenewalReceipt.checklistId || adultApprovedPackageDeliveryFollowUpRenewalReceipt.automationId || adultApprovedPackageDeliveryFollowUpRenewalReceipt.executionId || adultApprovedPackageDeliveryFollowUpRenewalReceipt.executionReceiptId || adultApprovedPackageDeliveryFollowUpRenewalReceipt.followUpId || adultApprovedPackageDeliveryFollowUpRenewalReceipt.operatorNextAction || !adultApprovedPackageDeliveryFollowUpRenewalReceipt.summary.includes("without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, or package-control records")) fail("package delivery follow-up renewal receipt must not expose internal follow-up, execution, automation, checklist, materialization, review, or reuse ids");
if (!adultApprovedPackageDeliveryQualityOutcome || adultApprovedPackageDeliveryQualityOutcome.kind !== "package-delivery-quality-outcome" || adultApprovedPackageDeliveryQualityOutcome.status !== "package-delivery-quality-outcome-ready" || adultApprovedPackageDeliveryQualityOutcome.customerVisible !== false || adultApprovedPackageDeliveryQualityOutcome.webportalExportReady !== false || adultApprovedPackageDeliveryQualityOutcome.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryQualityOutcome.paymentLiveEnabled !== false || adultApprovedPackageDeliveryQualityOutcome.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryQualityOutcome.packageSupportReady !== true || adultApprovedPackageDeliveryQualityOutcome.lowLaborReuseReady !== true || adultApprovedPackageDeliveryQualityOutcome.executionReady !== true || adultApprovedPackageDeliveryQualityOutcome.followUpReady !== true || adultApprovedPackageDeliveryQualityOutcome.renewalReady !== true || adultApprovedPackageDeliveryQualityOutcome.qualityReviewReady !== true || adultApprovedPackageDeliveryQualityOutcome.outcomeReady !== true || adultApprovedPackageDeliveryQualityOutcome.requiresEpochTimingRequest !== false || adultApprovedPackageDeliveryQualityOutcome.packageId !== "pkg-cohort-subscription") fail("approved package delivery quality outcome missing internal quality/outcome-control state");
if (!adultApprovedPackageDeliveryQualityOutcomeReceipt || adultApprovedPackageDeliveryQualityOutcomeReceipt.kind !== "package-delivery-quality-outcome" || adultApprovedPackageDeliveryQualityOutcomeReceipt.status !== "customer-safe-package-delivery-quality-outcome-ready" || adultApprovedPackageDeliveryQualityOutcomeReceipt.customerVisible !== true || adultApprovedPackageDeliveryQualityOutcomeReceipt.webportalExportReady !== true || adultApprovedPackageDeliveryQualityOutcomeReceipt.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryQualityOutcomeReceipt.paymentLiveEnabled !== false || adultApprovedPackageDeliveryQualityOutcomeReceipt.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryQualityOutcomeReceipt.packageSupportReady !== true || adultApprovedPackageDeliveryQualityOutcomeReceipt.lowLaborReuseReady !== true || adultApprovedPackageDeliveryQualityOutcomeReceipt.executionReady !== true || adultApprovedPackageDeliveryQualityOutcomeReceipt.followUpReady !== true || adultApprovedPackageDeliveryQualityOutcomeReceipt.renewalReady !== true || adultApprovedPackageDeliveryQualityOutcomeReceipt.qualityReviewReady !== true || adultApprovedPackageDeliveryQualityOutcomeReceipt.outcomeReady !== true || adultApprovedPackageDeliveryQualityOutcomeReceipt.requiresEpochTimingRequest !== false || !adultApprovedPackageDeliveryQualityOutcomeReceipt.nextAction.includes("Request EPOCH timing only")) fail("approved package delivery quality outcome receipt missing customer-safe Webportal-ready state");
if (adultApprovedPackageDeliveryQualityOutcomeReceipt.reuseId || adultApprovedPackageDeliveryQualityOutcomeReceipt.materializationId || adultApprovedPackageDeliveryQualityOutcomeReceipt.queueId || adultApprovedPackageDeliveryQualityOutcomeReceipt.decisionId || adultApprovedPackageDeliveryQualityOutcomeReceipt.packetId || adultApprovedPackageDeliveryQualityOutcomeReceipt.assignmentId || adultApprovedPackageDeliveryQualityOutcomeReceipt.checklistId || adultApprovedPackageDeliveryQualityOutcomeReceipt.automationId || adultApprovedPackageDeliveryQualityOutcomeReceipt.executionId || adultApprovedPackageDeliveryQualityOutcomeReceipt.executionReceiptId || adultApprovedPackageDeliveryQualityOutcomeReceipt.followUpId || adultApprovedPackageDeliveryQualityOutcomeReceipt.followUpRenewalId || adultApprovedPackageDeliveryQualityOutcomeReceipt.followUpRenewalReceiptId || adultApprovedPackageDeliveryQualityOutcomeReceipt.qualityOutcomeId || adultApprovedPackageDeliveryQualityOutcomeReceipt.outcomeId || adultApprovedPackageDeliveryQualityOutcomeReceipt.operatorNextAction || !adultApprovedPackageDeliveryQualityOutcomeReceipt.summary.includes("without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, or package-control records")) fail("package delivery quality outcome receipt must not expose internal outcome, follow-up, execution, automation, checklist, materialization, review, or reuse ids");
if (!adultApprovedPackageDeliveryAccountGrowthLinkage || adultApprovedPackageDeliveryAccountGrowthLinkage.kind !== "package-delivery-account-growth-linkage" || adultApprovedPackageDeliveryAccountGrowthLinkage.status !== "package-delivery-account-growth-ready" || adultApprovedPackageDeliveryAccountGrowthLinkage.customerVisible !== false || adultApprovedPackageDeliveryAccountGrowthLinkage.webportalExportReady !== false || adultApprovedPackageDeliveryAccountGrowthLinkage.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryAccountGrowthLinkage.paymentLiveEnabled !== false || adultApprovedPackageDeliveryAccountGrowthLinkage.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryAccountGrowthLinkage.customerSafeForReceipt !== true || adultApprovedPackageDeliveryAccountGrowthLinkage.accountGrowthReady !== true || adultApprovedPackageDeliveryAccountGrowthLinkage.retentionReady !== true || adultApprovedPackageDeliveryAccountGrowthLinkage.referralReady !== true || adultApprovedPackageDeliveryAccountGrowthLinkage.expansionReady !== true || adultApprovedPackageDeliveryAccountGrowthLinkage.requiresEpochTimingRequest !== false || adultApprovedPackageDeliveryAccountGrowthLinkage.packageId !== "pkg-cohort-subscription" || !adultApprovedPackageDeliveryAccountGrowthLinkage.operatorNextAction.includes("export only the customer-safe account-growth receipt")) fail("approved package delivery account growth linkage missing internal account-growth-control state");
if (!adultApprovedPackageDeliveryAccountGrowthReceipt || adultApprovedPackageDeliveryAccountGrowthReceipt.kind !== "package-delivery-account-growth" || adultApprovedPackageDeliveryAccountGrowthReceipt.status !== "customer-safe-package-delivery-account-growth-ready" || adultApprovedPackageDeliveryAccountGrowthReceipt.customerVisible !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.webportalExportReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryAccountGrowthReceipt.paymentLiveEnabled !== false || adultApprovedPackageDeliveryAccountGrowthReceipt.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryAccountGrowthReceipt.packageSupportReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.lowLaborReuseReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.executionReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.followUpReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.renewalReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.qualityReviewReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.outcomeReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.accountGrowthReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.retentionReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.referralReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.expansionReady !== true || adultApprovedPackageDeliveryAccountGrowthReceipt.requiresEpochTimingRequest !== false || !adultApprovedPackageDeliveryAccountGrowthReceipt.nextAction.includes("Request EPOCH timing only")) fail("approved package delivery account growth receipt missing customer-safe Webportal-ready state");
if (adultApprovedPackageDeliveryAccountGrowthReceipt.linkageId || adultApprovedPackageDeliveryAccountGrowthReceipt.qualityOutcomeReceiptId || adultApprovedPackageDeliveryAccountGrowthReceipt.accountGrowthPlanId || adultApprovedPackageDeliveryAccountGrowthReceipt.retentionSignalId || adultApprovedPackageDeliveryAccountGrowthReceipt.referralSignalId || adultApprovedPackageDeliveryAccountGrowthReceipt.expansionSignalId || adultApprovedPackageDeliveryAccountGrowthReceipt.reuseId || adultApprovedPackageDeliveryAccountGrowthReceipt.materializationId || adultApprovedPackageDeliveryAccountGrowthReceipt.queueId || adultApprovedPackageDeliveryAccountGrowthReceipt.decisionId || adultApprovedPackageDeliveryAccountGrowthReceipt.packetId || adultApprovedPackageDeliveryAccountGrowthReceipt.assignmentId || adultApprovedPackageDeliveryAccountGrowthReceipt.checklistId || adultApprovedPackageDeliveryAccountGrowthReceipt.automationId || adultApprovedPackageDeliveryAccountGrowthReceipt.executionId || adultApprovedPackageDeliveryAccountGrowthReceipt.executionReceiptId || adultApprovedPackageDeliveryAccountGrowthReceipt.followUpId || adultApprovedPackageDeliveryAccountGrowthReceipt.followUpRenewalId || adultApprovedPackageDeliveryAccountGrowthReceipt.followUpRenewalReceiptId || adultApprovedPackageDeliveryAccountGrowthReceipt.qualityOutcomeId || adultApprovedPackageDeliveryAccountGrowthReceipt.outcomeId || adultApprovedPackageDeliveryAccountGrowthReceipt.operatorNextAction || !adultApprovedPackageDeliveryAccountGrowthReceipt.summary.includes("without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, account-growth-control, or package-control records")) fail("package delivery account growth receipt must not expose internal account-growth, outcome, follow-up, execution, automation, checklist, materialization, review, or reuse ids");

const lifecycleForm = new Map([
  ["requestId", "req-edu-submission-001"],
  ["actionKind", "update-materials"],
  ["serviceLane", "submission-review"],
  ["reason", "Customer uploaded a revised draft before review"]
]);
const lifecycleAction = createServiceLifecycleActionRecord(lifecycleForm);
if (lifecycleAction.requestId !== "req-edu-submission-001" ||
    lifecycleAction.actionKind !== "update-materials" ||
    lifecycleAction.status !== "materials-update-requested" ||
    !lifecycleAction.customerVisible ||
    !lifecycleAction.epochTimingProviderOnly ||
    lifecycleAction.monitorWorkflowExposed ||
    !lifecycleAction.appOwnedLifecycleState ||
    !lifecycleAction.customerSafeStatus.includes("EPOCH remains timing-provider-only")) {
  fail("service lifecycle action factory did not create safe App-owned lifecycle action");
}
if (serviceLifecycleActionLabel("update-materials") !== "Update submitted materials") {
  fail("service lifecycle label lookup did not expose the customer-safe action label");
}

const timedForm = new Map([
  ["requester", "Adult timed submission"],
  ["lane", "submission-review"],
  ["ageBand", "adult"],
  ["material", "ready"],
  ["summary", "Needs confirmed return timing"],
  ["needsTiming", "on"]
]);
const timedRequest = createServiceRequestRecord(timedForm);
const timedSubmission = createSubmissionForRequest(timedRequest);
const timedReviewCycle = createSubmissionReviewCycleForRequest(timedRequest, timedSubmission);
const timedHandoff = createEpochHandoffForRequest(timedRequest);
const timedLifecycle = createDeliveryLifecycleForRequest(timedRequest, timedSubmission, timedHandoff);
const timedOutcome = createRevenueOutcomeForRequest(timedRequest, timedLifecycle, null);
const timedResultReceipt = createDeliveryResultReceiptForOutcome(timedOutcome, timedRequest);
const timedPayload = createEpochTimingReturnPayloadForHandoff(timedHandoff, timedRequest, "booking-confirmed");
const timedConsumption = createEpochTimingReturnConsumptionForPayload(timedPayload, timedRequest);
const timedEvent = createCustomerStatusEventForTimingReturn(timedConsumption, timedRequest);
const timedTransition = createDeliveryTransitionForTimingReturn(timedConsumption, timedRequest);
const timedReceipt = createTimingReturnReceiptForConsumption(timedConsumption, timedPayload, timedRequest);
applyEpochTimingReturnConsumption(timedRequest, timedSubmission, timedReviewCycle, timedLifecycle, timedHandoff, timedOutcome, timedResultReceipt, timedPayload, timedConsumption, timedReceipt);
if (!timedPayload || timedPayload.returnType !== "booking-confirmed" || timedPayload.providerGoLiveRequested) fail("timing return payload should be customer-safe local booking confirmation");
if (!timedConsumption || timedConsumption.status !== "timing-confirmed" || timedConsumption.sourceHandoffId !== timedHandoff.id) fail("timing return consumption did not confirm timing");
if (!timedEvent || timedEvent.status !== "timing-confirmed" || !timedEvent.customerSafeStatus.includes("confirmed")) fail("timing return customer event did not preserve confirmed status");
if (!timedTransition || timedTransition.toStatus !== "timing-confirmed" || timedTransition.fromStatus !== "epoch-time-requested") fail("timing return transition did not close EPOCH handoff state");
if (!timedReceipt || timedReceipt.kind !== "epoch-timing-return" || timedReceipt.status !== "timing-confirmed") fail("timing return receipt missing confirmed return proof");
if (timedRequest.status !== "timing-confirmed" || timedLifecycle.currentStatus !== "timing-confirmed" || timedOutcome.status !== "timing-confirmed") fail("timing return consumption did not update WORKSHOP-owned service state");
if (timedSubmission.due !== timedPayload.confirmedWindow || timedReviewCycle.returnWindow !== timedPayload.confirmedWindow) fail("timing return consumption did not apply confirmed window to WORKSHOP delivery records");
if (!timedResultReceipt || timedResultReceipt.status !== "timing-confirmed" || !timedOutcome.resultReceiptReady) fail("confirmed timing return should keep result receipt ready");

const conflictPayload = createEpochTimingReturnPayloadForHandoff(timedHandoff, timedRequest, "availability-conflict");
const conflictConsumption = createEpochTimingReturnConsumptionForPayload(conflictPayload, timedRequest);
const conflictReceipt = createTimingReturnReceiptForConsumption(conflictConsumption, conflictPayload, timedRequest);
if (!conflictPayload || conflictPayload.returnType !== "availability-conflict" || conflictPayload.confirmedWindow) fail("availability conflict payload should not contain confirmed timing");
if (!conflictConsumption || conflictConsumption.status !== "timing-reschedule-required" || !conflictConsumption.customerSafeStatus.includes("new window")) fail("availability conflict consumption did not request new timing");
if (!conflictReceipt || conflictReceipt.status !== "timing-reschedule-required" || !conflictReceipt.summary.includes("availability conflict")) fail("availability conflict receipt missing reschedule proof");

const capacityForm = new Map([
  ["requester", "Adult capacity cohort"],
  ["lane", "cohort-subscription"],
  ["ageBand", "adult"],
  ["material", "ready"],
  ["summary", "Needs waitlist-aware cohort timing"],
  ["needsTiming", "on"]
]);
const capacityRequest = createServiceRequestRecord(capacityForm);
const capacityCohortPlan = createCohortPlanForRequest(capacityRequest);
const capacityHandoff = createEpochHandoffForRequest(capacityRequest);
const capacityLifecycle = createDeliveryLifecycleForRequest(capacityRequest, null, capacityHandoff);
const capacityOutcome = createRevenueOutcomeForRequest(capacityRequest, capacityLifecycle, null);
const capacityPayload = createEpochCapacityWaitlistPayloadForHandoff(capacityHandoff, capacityRequest, "waitlisted");
const capacityConsumption = createEpochCapacityWaitlistConsumptionForPayload(capacityPayload, capacityRequest);
const capacityEvent = createCustomerStatusEventForCapacityWaitlist(capacityConsumption, capacityRequest);
const capacityTransition = createDeliveryTransitionForCapacityWaitlist(capacityConsumption, capacityRequest);
const capacityReceipt = createCapacityWaitlistReceiptForConsumption(capacityConsumption, capacityPayload, capacityRequest);
applyEpochCapacityWaitlistConsumption(capacityRequest, capacityCohortPlan, capacityLifecycle, capacityHandoff, capacityOutcome, capacityPayload, capacityConsumption, capacityReceipt);
if (!capacityPayload || capacityPayload.epochStatus !== "waitlisted" || capacityPayload.providerGoLiveRequested) fail("capacity payload should be customer-safe local waitlist status");
if (!capacityConsumption || capacityConsumption.status !== "timing-waitlisted" || !capacityConsumption.customerSafeStatus.includes("waitlisted")) fail("capacity consumption did not preserve waitlisted service status");
if (!capacityEvent || capacityEvent.status !== "timing-waitlisted" || !capacityEvent.label.includes("waitlisted")) fail("capacity customer event missing waitlist status");
if (!capacityTransition || capacityTransition.toStatus !== "timing-waitlisted" || capacityTransition.fromStatus !== "epoch-time-requested") fail("capacity transition did not consume EPOCH waitlist status");
if (!capacityReceipt || capacityReceipt.kind !== "epoch-capacity-waitlist" || !capacityReceipt.summary.includes("capacity waitlist")) fail("capacity receipt missing ownership-boundary proof");
if (capacityRequest.status !== "timing-waitlisted" || capacityLifecycle.currentStatus !== "timing-waitlisted" || capacityOutcome.status !== "timing-waitlisted") fail("capacity consumption did not update WORKSHOP service state");
if (!capacityCohortPlan || capacityCohortPlan.capacityStatus !== "waitlisted" || capacityCohortPlan.waitlistPosition !== 1 || capacityCohortPlan.lastCapacityReceiptId !== capacityReceipt.id) fail("capacity consumption did not update cohort planning status");
if (capacityOutcome.resultReceiptReady !== false || !capacityHandoff.statusPreview?.detail.includes("capacity and waitlist status only")) fail("capacity consumption should stay customer-safe and block premature result receipts");
const promotedPayload = createEpochCapacityWaitlistPayloadForHandoff(capacityHandoff, capacityRequest, "promoted");
const promotedConsumption = createEpochCapacityWaitlistConsumptionForPayload(promotedPayload, capacityRequest);
const promotedReceipt = createCapacityWaitlistReceiptForConsumption(promotedConsumption, promotedPayload, capacityRequest);
if (!promotedPayload || promotedPayload.epochStatus !== "promoted" || promotedPayload.releasedCapacity !== 1) fail("promoted capacity payload missing released capacity");
if (!promotedConsumption || promotedConsumption.status !== "timing-promoted" || !promotedConsumption.customerSafeStatus.includes("promoted")) fail("promoted capacity consumption did not preserve promotion status");
if (!promotedReceipt || promotedReceipt.status !== "timing-promoted" || !promotedReceipt.summary.includes("waitlist promotion")) fail("promoted capacity receipt missing proof");

const recurringForm = new Map([
  ["requester", "Adult recurring cohort"],
  ["lane", "cohort-subscription"],
  ["ageBand", "adult"],
  ["material", "ready"],
  ["summary", "Recurring cohort service timing"],
  ["needsTiming", "on"]
]);
const recurringRequest = createServiceRequestRecord(recurringForm);
const recurringCohortPlan = createCohortPlanForRequest(recurringRequest);
const recurringHandoff = createEpochHandoffForRequest(recurringRequest);
const recurringLifecycle = createDeliveryLifecycleForRequest(recurringRequest, null, recurringHandoff);
const recurringOutcome = createRevenueOutcomeForRequest(recurringRequest, recurringLifecycle, null);
const recurringTimingPayload = createEpochTimingReturnPayloadForHandoff(recurringHandoff, recurringRequest, "availability-conflict");
const recurringTimingConsumption = createEpochTimingReturnConsumptionForPayload(recurringTimingPayload, recurringRequest);
const recurringTimingReceipt = createTimingReturnReceiptForConsumption(recurringTimingConsumption, recurringTimingPayload, recurringRequest);
applyEpochTimingReturnConsumption(recurringRequest, null, null, recurringLifecycle, recurringHandoff, recurringOutcome, null, recurringTimingPayload, recurringTimingConsumption, recurringTimingReceipt);
const recurringPayload = createEpochRecurringSeriesPayloadForHandoff(recurringHandoff, recurringRequest, "exception-action-required");
const recurringConsumption = createEpochRecurringSeriesConsumptionForPayload(recurringPayload, recurringRequest);
const recurringEvent = createCustomerStatusEventForRecurringSeries(recurringConsumption, recurringRequest);
const recurringTransition = createDeliveryTransitionForRecurringSeries(recurringConsumption, recurringRequest);
const recurringReceipt = createRecurringSeriesReceiptForConsumption(recurringConsumption, recurringPayload, recurringRequest);
applyEpochRecurringSeriesConsumption(recurringRequest, recurringCohortPlan, recurringLifecycle, recurringHandoff, recurringOutcome, recurringPayload, recurringConsumption, recurringReceipt);
if (!recurringPayload || recurringPayload.seriesStatus !== "exception-action-required" || recurringPayload.providerGoLiveRequested) fail("recurring payload should be customer-safe and local-only");
if (!recurringConsumption || recurringConsumption.status !== "recurring-exception-action-required" || !recurringConsumption.customerSafeStatus.includes("Recurring")) fail("recurring consumption did not preserve exception action status");
if (!recurringEvent || recurringEvent.status !== "recurring-exception-action-required" || !recurringEvent.label.includes("Recurring")) fail("recurring event missing customer-safe status update");
if (!recurringTransition || recurringTransition.toStatus !== "recurring-exception-action-required" || recurringTransition.fromStatus !== "timing-reschedule-required") fail("recurring transition did not consume timing exception into service state");
if (!recurringReceipt || recurringReceipt.kind !== "epoch-recurring-series" || !recurringReceipt.summary.includes("without taking calendar ownership")) fail("recurring receipt missing ownership-boundary proof");
if (recurringRequest.status !== "recurring-exception-action-required" || recurringLifecycle.currentStatus !== "recurring-exception-action-required" || recurringOutcome.status !== "recurring-exception-action-required") fail("recurring consumption did not update WORKSHOP service state");
if (!recurringCohortPlan || recurringCohortPlan.recurringStatus !== "exception-action-required" || recurringCohortPlan.exceptionCount !== 1 || recurringCohortPlan.lastRecurringReceiptId !== recurringReceipt.id) fail("recurring consumption did not update cohort/subscription delivery status");
if (recurringOutcome.resultReceiptReady !== false || !recurringHandoff.statusPreview?.detail.includes("recurring schedule status only")) fail("recurring consumption should stay customer-safe and block premature result receipts");
const revisedPayload = createEpochRevisedCalendarTimingPayloadForHandoff(recurringHandoff, recurringRequest);
const revisedConsumption = createEpochRevisedCalendarTimingConsumptionForPayload(revisedPayload, recurringRequest);
const revisedEvent = createCustomerStatusEventForRevisedCalendarTiming(revisedConsumption, recurringRequest);
const revisedTransition = createDeliveryTransitionForRevisedCalendarTiming(revisedConsumption, recurringRequest);
const revisedReceipt = createRevisedCalendarTimingReceiptForConsumption(revisedConsumption, revisedPayload, recurringRequest);
const timingAwareFollowUp = createTimingAwareServiceFollowUpForRevisedTiming(revisedPayload, revisedConsumption, revisedReceipt, recurringRequest);
const timingAwareRenewalReceipt = createTimingAwareRenewalReceiptForFollowUp(timingAwareFollowUp, revisedConsumption, recurringRequest);
applyEpochRevisedCalendarTimingConsumption(recurringRequest, recurringCohortPlan, recurringLifecycle, recurringHandoff, recurringOutcome, revisedPayload, revisedConsumption, revisedReceipt);
if (!revisedPayload || revisedPayload.calendarSystemLabel !== "revised-13-month" || revisedPayload.providerGoLiveRequested) fail("revised timing payload should be customer-safe and local-only");
if (!revisedPayload.epochTimingProviderOnly || revisedPayload.workshopCalendarOwnership) fail("revised timing payload should preserve EPOCH provider ownership");
if (!revisedConsumption || revisedConsumption.status !== "recurring-exception-action-required" || !revisedConsumption.customerSafeStatus.includes("Revised timing context")) fail("revised timing consumption did not preserve service status");
if (!revisedEvent || revisedEvent.label !== "Revised timing context returned" || revisedEvent.status !== "recurring-exception-action-required") fail("revised timing event missing customer-safe status update");
if (!revisedTransition || revisedTransition.toStatus !== "recurring-exception-action-required" || !revisedTransition.label.includes("revised timing")) fail("revised timing transition did not consume EPOCH context into service state");
if (!revisedReceipt || revisedReceipt.kind !== "epoch-revised-calendar-timing" || revisedReceipt.workshopCalendarOwnership) fail("revised timing receipt missing ownership-boundary proof");
if (!timingAwareFollowUp || timingAwareFollowUp.actionKind !== "timing-aware-service-follow-up" || !timingAwareFollowUp.renewalPromptReady || timingAwareFollowUp.workshopCalendarOwnership || timingAwareFollowUp.monitorWorkflowExposed) fail("timing-aware follow-up missing WORKSHOP service-only boundary proof");
if (!timingAwareFollowUp.customerSafeStatus.includes("without owning calendar rules") || !timingAwareFollowUp.operatorNextAction.includes("request EPOCH timing only")) fail("timing-aware follow-up copy should keep EPOCH as timing provider only");
if (!timingAwareRenewalReceipt || timingAwareRenewalReceipt.kind !== "timing-aware-renewal" || !timingAwareRenewalReceipt.customerVisibleReceiptReady || !timingAwareRenewalReceipt.renewalReady || timingAwareRenewalReceipt.requiresEpochTimingRequest) fail("timing-aware renewal receipt should be customer-visible and not require immediate EPOCH timing");
if (timingAwareRenewalReceipt.workshopCalendarOwnership || timingAwareRenewalReceipt.monitorWorkflowExposed || !timingAwareRenewalReceipt.customerSafeStatus.includes("EPOCH remains the timing provider")) fail("timing-aware renewal receipt must preserve EPOCH provider boundary");
const deliveryOutcomeAutomation = createDeliveryOutcomeAutomationForReceipt(
  { id: "outcome-ready-fixture" },
  { id: "delivery-result-ready-fixture", customerVisible: true },
  timingAwareRenewalReceipt,
  recurringRequest
);
const deliveryOutcomeAutomationReceipt = createDeliveryOutcomeAutomationReceiptForAutomation(deliveryOutcomeAutomation, recurringRequest);
if (!deliveryOutcomeAutomation || deliveryOutcomeAutomation.kind !== "delivery-outcome-automation" || deliveryOutcomeAutomation.status !== "delivery-outcome-automation-ready" || !deliveryOutcomeAutomation.webportalExportReady || deliveryOutcomeAutomation.paymentLiveEnabled || deliveryOutcomeAutomation.workshopCalendarOwnership || deliveryOutcomeAutomation.monitorWorkflowExposed) fail("delivery outcome automation should stay customer-safe, payment-off, MONITOR-off, and WORKSHOP-owned");
if (!deliveryOutcomeAutomation.operatorNextAction.includes("request EPOCH timing only") || !deliveryOutcomeAutomation.customerSafeStatus.includes("EPOCH remains timing-provider-only")) fail("delivery outcome automation copy should keep EPOCH timing-provider-only");
if (!deliveryOutcomeAutomationReceipt || deliveryOutcomeAutomationReceipt.kind !== "delivery-outcome-automation" || deliveryOutcomeAutomationReceipt.status !== "customer-safe-delivery-outcome-ready" || !deliveryOutcomeAutomationReceipt.customerVisibleReceiptReady || !deliveryOutcomeAutomationReceipt.webportalExportReady || deliveryOutcomeAutomationReceipt.paymentLiveEnabled || deliveryOutcomeAutomationReceipt.requiresEpochTimingRequest) fail("delivery outcome automation receipt should be customer-visible, payment-off, and not require immediate EPOCH timing");
if (deliveryOutcomeAutomationReceipt.workshopCalendarOwnership || deliveryOutcomeAutomationReceipt.monitorWorkflowExposed || !deliveryOutcomeAutomationReceipt.nextAction.includes("request EPOCH timing only")) fail("delivery outcome automation receipt must preserve EPOCH/MONITOR boundary");
const accountGrowthAutomation = createAccountGrowthAutomationForDeliveryOutcome(deliveryOutcomeAutomation, deliveryOutcomeAutomationReceipt, recurringRequest);
const accountGrowthAutomationReceipt = createAccountGrowthAutomationReceiptForAutomation(accountGrowthAutomation, recurringRequest);
if (!accountGrowthAutomation || accountGrowthAutomation.kind !== "account-growth-automation" || accountGrowthAutomation.status !== "account-growth-automation-ready" || accountGrowthAutomation.growthPath !== "retention-referral-expansion" || !accountGrowthAutomation.webportalExportReady || accountGrowthAutomation.paymentLiveEnabled || accountGrowthAutomation.workshopCalendarOwnership || accountGrowthAutomation.monitorWorkflowExposed) fail("account growth automation should stay customer-safe, payment-off, MONITOR-off, and WORKSHOP-owned");
if (!accountGrowthAutomation.retentionReady || !accountGrowthAutomation.referralReady || !accountGrowthAutomation.growthPlanReady || !accountGrowthAutomation.conversionReady || !accountGrowthAutomation.expansionRequestReady || accountGrowthAutomation.requiresEpochTimingRequest) fail("account growth automation missing ready low-labor growth chain");
if (!accountGrowthAutomation.operatorNextAction.includes("without adding live calendar load") || !accountGrowthAutomation.customerSafeStatus.includes("EPOCH remains timing-provider-only")) fail("account growth automation copy should keep EPOCH timing-provider-only");
if (!accountGrowthAutomationReceipt || accountGrowthAutomationReceipt.kind !== "account-growth-automation" || accountGrowthAutomationReceipt.status !== "customer-safe-account-growth-ready" || !accountGrowthAutomationReceipt.customerVisibleReceiptReady || !accountGrowthAutomationReceipt.webportalExportReady || accountGrowthAutomationReceipt.paymentLiveEnabled || accountGrowthAutomationReceipt.requiresEpochTimingRequest) fail("account growth automation receipt should be customer-visible, payment-off, and not require immediate EPOCH timing");
if (accountGrowthAutomationReceipt.workshopCalendarOwnership || accountGrowthAutomationReceipt.monitorWorkflowExposed || !accountGrowthAutomationReceipt.nextAction.includes("Request EPOCH timing only")) fail("account growth automation receipt must preserve EPOCH/MONITOR boundary");
if (recurringRequest.status !== "recurring-exception-action-required" || recurringLifecycle.phase !== "revised-timing-context-consumed" || recurringOutcome.resultReceiptReady !== false) fail("revised timing consumption should keep WORKSHOP service state gated");
if (!recurringCohortPlan.revisedTimingContext || recurringCohortPlan.lastRevisedTimingReceiptId !== revisedReceipt.id) fail("revised timing consumption did not update cohort service context");
if (!recurringHandoff.statusPreview?.detail.includes("revised timing context only")) fail("revised timing status preview should stay EPOCH-context-only");

const systemsForm = new Map([
  ["requester", "Business systems prospect"],
  ["lane", "crm-database-admin"],
  ["ageBand", "business"],
  ["material", "planning"],
  ["summary", "Needs CRM delivery reporting"]
]);
const systemsRequest = createServiceRequestRecord(systemsForm);
const systemsLifecycle = createDeliveryLifecycleForRequest(systemsRequest, null, null);
const systemsAccount = createCrmAccountForRequest(systemsRequest);
const systemsOpportunity = createCrmOpportunityForRequest(systemsRequest, systemsAccount);
const systemsPacket = createAraRevenuePacketForOpportunity(systemsOpportunity);
const systemsAssignment = createAraAssignmentForPacket(systemsPacket);
const systemsOutcome = createRevenueOutcomeForRequest(systemsRequest, systemsLifecycle, systemsOpportunity);
const systemsResultReceipt = createDeliveryResultReceiptForOutcome(systemsOutcome, systemsRequest);
const systemsCompletion = createAraReviewCompletionForAssignment(systemsAssignment, systemsPacket, systemsOutcome);
const systemsCustomerAccount = createCustomerAccountForRequest(systemsRequest, systemsAccount, systemsOutcome);
const systemsAccountHistory = createCustomerAccountHistoryForOutcome(systemsCustomerAccount, systemsOutcome, systemsRequest, systemsResultReceipt);
const systemsRenewal = createRenewalOpportunityForOutcome(systemsOutcome, systemsRequest, systemsCustomerAccount);
const systemsFollowUp = createCustomerFollowUpForRenewal(systemsRenewal, systemsCustomerAccount, systemsRequest);
const systemsRetention = createRetentionHealthForAccount(systemsCustomerAccount, systemsRenewal, systemsRequest);
const systemsReferral = createReferralOpportunityForRetention(systemsRetention, systemsCustomerAccount, systemsRenewal, systemsRequest);
const systemsGrowthPlan = createAccountGrowthPlanForRetention(systemsRetention, systemsReferral, systemsCustomerAccount, systemsRenewal, systemsRequest);
const systemsGrowthReceipt = createGrowthFollowUpReceiptForPlan(systemsGrowthPlan, systemsCustomerAccount, systemsRequest);
const systemsReferralConversion = createReferralConversionForOpportunity(systemsReferral, systemsCustomerAccount, systemsGrowthPlan, systemsRequest);
const systemsGrowthAcceptance = createGrowthPlanAcceptanceForPlan(systemsGrowthPlan, systemsReferralConversion, systemsCustomerAccount, systemsRequest);
const systemsExpansionRequest = createExpansionServiceRequestForAcceptance(systemsGrowthAcceptance, systemsGrowthPlan, systemsCustomerAccount, systemsRequest);
const systemsConversionStatus = createConversionStatusEventForExpansion(systemsReferralConversion, systemsExpansionRequest, systemsCustomerAccount);
const systemsConversionReceipt = createConversionReceiptForExpansion(systemsReferralConversion, systemsExpansionRequest, systemsConversionStatus);
if (!systemsOutcome || systemsOutcome.status !== "fit-review" || systemsOutcome.resultReceiptReady !== true || systemsOutcome.valueJpy <= 0) fail("systems outcome factory missing reportable fit-review outcome");
if (!systemsResultReceipt || systemsResultReceipt.kind !== "delivery-result" || systemsResultReceipt.customerVisible !== true || systemsResultReceipt.outcomeId !== systemsOutcome.id) fail("delivery result receipt factory missing customer-safe outcome linkage");
if (!systemsCompletion || systemsCompletion.customerVisible !== false || systemsCompletion.reviewComplete !== false || systemsCompletion.packetId !== systemsPacket.id) fail("review completion factory missing packet/outcome linkage");
if (!systemsCustomerAccount || systemsCustomerAccount.renewalEligible !== true || systemsCustomerAccount.completedResultCount !== 1 || systemsCustomerAccount.lifetimeValueJpy <= 0) fail("customer account factory missing renewal-ready account continuity");
if (!systemsAccountHistory || systemsAccountHistory.outcomeId !== systemsOutcome.id || systemsAccountHistory.customerVisible !== true || !systemsAccountHistory.customerSafeStatus) fail("account history factory missing customer-safe outcome history");
if (!systemsRenewal || systemsRenewal.renewalReady !== true || systemsRenewal.requiresEpochTime !== true || systemsRenewal.accountId !== systemsCustomerAccount.id) fail("renewal factory missing ready systems follow-up opportunity");
if (!systemsFollowUp || systemsFollowUp.customerVisible !== true || systemsFollowUp.requiresEpochTime !== true || systemsFollowUp.renewalId !== systemsRenewal.id) fail("customer follow-up factory missing customer-safe renewal linkage");
if (!systemsRetention || systemsRetention.growthReady !== true || systemsRetention.referralEligible !== true || systemsRetention.retentionScore <= 0) fail("retention health factory missing actionable account-growth state");
if (!systemsReferral || systemsReferral.referralReady !== true || systemsReferral.sourceRetentionId !== systemsRetention.id || systemsReferral.accountId !== systemsCustomerAccount.id) fail("referral factory missing retention-linked opportunity");
if (!systemsGrowthPlan || systemsGrowthPlan.growthReady !== true || systemsGrowthPlan.requiresEpochTime !== true || systemsGrowthPlan.sourceRetentionId !== systemsRetention.id) fail("account growth plan factory missing ready systems growth route");
if (!systemsGrowthReceipt || systemsGrowthReceipt.customerVisible !== true || systemsGrowthReceipt.growthPlanId !== systemsGrowthPlan.id || !systemsGrowthReceipt.customerSafeStatus) fail("growth follow-up receipt factory missing customer-safe growth linkage");
if (!systemsReferralConversion || systemsReferralConversion.conversionReady !== true || systemsReferralConversion.referralId !== systemsReferral.id || systemsReferralConversion.sourceGrowthPlanId !== systemsGrowthPlan.id) fail("referral conversion factory missing executable conversion linkage");
if (!systemsGrowthAcceptance || systemsGrowthAcceptance.accepted !== true || systemsGrowthAcceptance.requiresEpochTime !== true || systemsGrowthAcceptance.conversionId !== systemsReferralConversion.id) fail("growth acceptance factory missing accepted systems route");
if (!systemsExpansionRequest || systemsExpansionRequest.epochTimeNeeded !== true || systemsExpansionRequest.acceptanceId !== systemsGrowthAcceptance.id || systemsExpansionRequest.valueJpy <= 0) fail("expansion request factory missing accepted growth execution route");
if (!systemsConversionStatus || systemsConversionStatus.customerVisible !== true || systemsConversionStatus.expansionRequestId !== systemsExpansionRequest.id || !systemsConversionStatus.customerSafeStatus) fail("conversion status factory missing customer-safe conversion event");
if (!systemsConversionReceipt || systemsConversionReceipt.customerVisible !== true || systemsConversionReceipt.expansionRequestId !== systemsExpansionRequest.id || !systemsConversionReceipt.customerSafeStatus) fail("conversion receipt factory missing customer-safe conversion linkage");
const portalReviewRendererStart = script.indexOf('renderStack("portal-service-review-status"');
const portalReviewRendererEnd = script.indexOf('"No customer-visible service review receipts yet."', portalReviewRendererStart);
const portalReviewRenderer = portalReviewRendererStart >= 0 && portalReviewRendererEnd > portalReviewRendererStart
  ? script.slice(portalReviewRendererStart, portalReviewRendererEnd)
  : "";
if (!portalReviewRenderer || portalReviewRenderer.includes("item.reviewStatus") || portalReviewRenderer.includes("item.status}</span>")) fail("portal renders raw ARA review status");
const portalOutcomeRendererStart = script.indexOf('renderStack("portal-revenue-outcomes"');
const portalOutcomeRendererEnd = script.indexOf('"No customer-visible result reports yet."', portalOutcomeRendererStart);
const portalOutcomeRenderer = portalOutcomeRendererStart >= 0 && portalOutcomeRendererEnd > portalOutcomeRendererStart
  ? script.slice(portalOutcomeRendererStart, portalOutcomeRendererEnd)
  : "";
if (!portalOutcomeRenderer || portalOutcomeRenderer.includes("operatorNextAction") || portalOutcomeRenderer.includes("opportunityId") || portalOutcomeRenderer.includes("packetId")) fail("portal result reports expose internal outcome controls");
const portalResultRendererStart = script.indexOf('renderStack("portal-delivery-results"');
const portalResultRendererEnd = script.indexOf('"No customer-visible delivery result receipts yet."', portalResultRendererStart);
const portalResultRenderer = portalResultRendererStart >= 0 && portalResultRendererEnd > portalResultRendererStart
  ? script.slice(portalResultRendererStart, portalResultRendererEnd)
  : "";
if (!portalResultRenderer || portalResultRenderer.includes("item.kind") || portalResultRenderer.includes("outcomeId") || portalResultRenderer.includes("operator")) fail("portal delivery result receipts expose internal receipt controls");
const portalAccountHistoryStart = script.indexOf('renderStack("portal-account-history"');
const portalAccountHistoryEnd = script.indexOf('"No customer-visible account history yet."', portalAccountHistoryStart);
const portalAccountHistoryRenderer = portalAccountHistoryStart >= 0 && portalAccountHistoryEnd > portalAccountHistoryStart
  ? script.slice(portalAccountHistoryStart, portalAccountHistoryEnd)
  : "";
if (!portalAccountHistoryRenderer || portalAccountHistoryRenderer.includes("operatorNextAction") || portalAccountHistoryRenderer.includes("outcomeId") || portalAccountHistoryRenderer.includes("escapeHtml(item.accountId)")) fail("portal account history exposes internal account controls");
const portalRenewalStart = script.indexOf('renderStack("portal-renewal-status"');
const portalRenewalEnd = script.indexOf('"No customer-visible renewal status yet."', portalRenewalStart);
const portalRenewalRenderer = portalRenewalStart >= 0 && portalRenewalEnd > portalRenewalStart
  ? script.slice(portalRenewalStart, portalRenewalEnd)
  : "";
if (!portalRenewalRenderer || portalRenewalRenderer.includes("operatorNextAction") || portalRenewalRenderer.includes("sourceOutcomeId") || portalRenewalRenderer.includes("accountId")) fail("portal renewal status exposes internal renewal controls");
const portalFollowUpStart = script.indexOf('renderStack("portal-follow-up-status"');
const portalFollowUpEnd = script.indexOf('"No customer-visible follow-up status yet."', portalFollowUpStart);
const portalFollowUpRenderer = portalFollowUpStart >= 0 && portalFollowUpEnd > portalFollowUpStart
  ? script.slice(portalFollowUpStart, portalFollowUpEnd)
  : "";
if (!portalFollowUpRenderer || portalFollowUpRenderer.includes("operatorNextAction") || portalFollowUpRenderer.includes("renewalId") || portalFollowUpRenderer.includes("accountId")) fail("portal follow-up status exposes internal follow-up controls");
const portalRetentionStart = script.indexOf('renderStack("portal-retention-status"');
const portalRetentionEnd = script.indexOf('"No customer-visible retention status yet."', portalRetentionStart);
const portalRetentionRenderer = portalRetentionStart >= 0 && portalRetentionEnd > portalRetentionStart
  ? script.slice(portalRetentionStart, portalRetentionEnd)
  : "";
if (!portalRetentionRenderer || portalRetentionRenderer.includes("operatorNextAction") || portalRetentionRenderer.includes("sourceRenewalId") || portalRetentionRenderer.includes("accountId")) fail("portal retention status exposes internal retention controls");
const portalReferralStart = script.indexOf('renderStack("portal-referral-path"');
const portalReferralEnd = script.indexOf('"No customer-visible referral path yet."', portalReferralStart);
const portalReferralRenderer = portalReferralStart >= 0 && portalReferralEnd > portalReferralStart
  ? script.slice(portalReferralStart, portalReferralEnd)
  : "";
if (!portalReferralRenderer || portalReferralRenderer.includes("operatorNextAction") || portalReferralRenderer.includes("sourceRetentionId") || portalReferralRenderer.includes("accountId")) fail("portal referral path exposes internal referral controls");
const portalGrowthStart = script.indexOf('renderStack("portal-growth-plan-status"');
const portalGrowthEnd = script.indexOf('"No customer-visible growth plan status yet."', portalGrowthStart);
const portalGrowthRenderer = portalGrowthStart >= 0 && portalGrowthEnd > portalGrowthStart
  ? script.slice(portalGrowthStart, portalGrowthEnd)
  : "";
if (!portalGrowthRenderer || portalGrowthRenderer.includes("operatorNextAction") || portalGrowthRenderer.includes("sourceRetentionId") || portalGrowthRenderer.includes("sourceReferralId") || portalGrowthRenderer.includes("accountId")) fail("portal growth plan status exposes internal growth controls");
const portalGrowthReceiptStart = script.indexOf('renderStack("portal-growth-receipts"');
const portalGrowthReceiptEnd = script.indexOf('"No customer-visible growth receipts yet."', portalGrowthReceiptStart);
const portalGrowthReceiptRenderer = portalGrowthReceiptStart >= 0 && portalGrowthReceiptEnd > portalGrowthReceiptStart
  ? script.slice(portalGrowthReceiptStart, portalGrowthReceiptEnd)
  : "";
if (!portalGrowthReceiptRenderer || portalGrowthReceiptRenderer.includes("operatorNextAction") || portalGrowthReceiptRenderer.includes("growthPlanId") || portalGrowthReceiptRenderer.includes("accountId")) fail("portal growth receipts expose internal growth receipt controls");
const portalReferralConversionStart = script.indexOf('renderStack("portal-referral-conversions"');
const portalReferralConversionEnd = script.indexOf('"No customer-visible referral conversions yet."', portalReferralConversionStart);
const portalReferralConversionRenderer = portalReferralConversionStart >= 0 && portalReferralConversionEnd > portalReferralConversionStart
  ? script.slice(portalReferralConversionStart, portalReferralConversionEnd)
  : "";
if (!portalReferralConversionRenderer || portalReferralConversionRenderer.includes("operatorNextAction") || portalReferralConversionRenderer.includes("referralId") || portalReferralConversionRenderer.includes("sourceGrowthPlanId") || portalReferralConversionRenderer.includes("accountId")) fail("portal referral conversions expose internal conversion controls");
const portalGrowthAcceptanceStart = script.indexOf('renderStack("portal-growth-acceptances"');
const portalGrowthAcceptanceEnd = script.indexOf('"No customer-visible growth acceptance records yet."', portalGrowthAcceptanceStart);
const portalGrowthAcceptanceRenderer = portalGrowthAcceptanceStart >= 0 && portalGrowthAcceptanceEnd > portalGrowthAcceptanceStart
  ? script.slice(portalGrowthAcceptanceStart, portalGrowthAcceptanceEnd)
  : "";
if (!portalGrowthAcceptanceRenderer || portalGrowthAcceptanceRenderer.includes("operatorNextAction") || portalGrowthAcceptanceRenderer.includes("growthPlanId") || portalGrowthAcceptanceRenderer.includes("conversionId") || portalGrowthAcceptanceRenderer.includes("accountId")) fail("portal growth acceptances expose internal acceptance controls");
const portalExpansionStart = script.indexOf('renderStack("portal-expansion-requests"');
const portalExpansionEnd = script.indexOf('"No customer-visible expansion service requests yet."', portalExpansionStart);
const portalExpansionRenderer = portalExpansionStart >= 0 && portalExpansionEnd > portalExpansionStart
  ? script.slice(portalExpansionStart, portalExpansionEnd)
  : "";
if (!portalExpansionRenderer || portalExpansionRenderer.includes("operatorNextAction") || portalExpansionRenderer.includes("acceptanceId") || portalExpansionRenderer.includes("accountId")) fail("portal expansion requests expose internal expansion controls");
const portalConversionStatusStart = script.indexOf('renderStack("portal-conversion-status"');
const portalConversionStatusEnd = script.indexOf('"No customer-visible conversion status yet."', portalConversionStatusStart);
const portalConversionStatusRenderer = portalConversionStatusStart >= 0 && portalConversionStatusEnd > portalConversionStatusStart
  ? script.slice(portalConversionStatusStart, portalConversionStatusEnd)
  : "";
if (!portalConversionStatusRenderer || portalConversionStatusRenderer.includes("operatorNextAction") || portalConversionStatusRenderer.includes("conversionId") || portalConversionStatusRenderer.includes("expansionRequestId") || portalConversionStatusRenderer.includes("accountId")) fail("portal conversion status exposes internal conversion controls");
const portalConversionReceiptStart = script.indexOf('renderStack("portal-conversion-receipts"');
const portalConversionReceiptEnd = script.indexOf('"No customer-visible conversion receipts yet."', portalConversionReceiptStart);
const portalConversionReceiptRenderer = portalConversionReceiptStart >= 0 && portalConversionReceiptEnd > portalConversionReceiptStart
  ? script.slice(portalConversionReceiptStart, portalConversionReceiptEnd)
  : "";
if (!portalConversionReceiptRenderer || portalConversionReceiptRenderer.includes("operatorNextAction") || portalConversionReceiptRenderer.includes("conversionId") || portalConversionReceiptRenderer.includes("expansionRequestId") || portalConversionReceiptRenderer.includes("accountId")) fail("portal conversion receipts expose internal conversion receipt controls");
const portalAraReviewStatusStart = script.indexOf('renderStack("portal-ara-review-status-receipts"');
const portalAraReviewStatusEnd = script.indexOf('"No customer-visible ARA review status receipts yet."', portalAraReviewStatusStart);
const portalAraReviewStatusRenderer = portalAraReviewStatusStart >= 0 && portalAraReviewStatusEnd > portalAraReviewStatusStart
  ? script.slice(portalAraReviewStatusStart, portalAraReviewStatusEnd)
  : "";
if (!portalAraReviewStatusRenderer || portalAraReviewStatusRenderer.includes("operatorNextAction") || portalAraReviewStatusRenderer.includes("packetId") || portalAraReviewStatusRenderer.includes("assignmentId") || portalAraReviewStatusRenderer.includes("opportunityId") || portalAraReviewStatusRenderer.includes("queueId") || portalAraReviewStatusRenderer.includes("decisionId")) fail("portal ARA review status exposes internal review controls");
const portalAraReviewStatusExportStart = script.indexOf('"portal-ara-review-status-receipt-export"');
const portalAraReviewStatusExportEnd = script.indexOf('"No customer-safe App ARA review status receipts loaded."', portalAraReviewStatusExportStart);
const portalAraReviewStatusExportRenderer = portalAraReviewStatusExportStart >= 0 && portalAraReviewStatusExportEnd > portalAraReviewStatusExportStart
  ? script.slice(portalAraReviewStatusExportStart, portalAraReviewStatusExportEnd)
  : "";
if (!portalAraReviewStatusExportRenderer || portalAraReviewStatusExportRenderer.includes("operatorNextAction") || portalAraReviewStatusExportRenderer.includes("packetId") || portalAraReviewStatusExportRenderer.includes("assignmentId") || portalAraReviewStatusExportRenderer.includes("opportunityId") || portalAraReviewStatusExportRenderer.includes("queueId") || portalAraReviewStatusExportRenderer.includes("decisionId")) fail("portal ARA review status export exposes internal review controls");
const portalAraMaterializationStatusStart = script.indexOf('renderStack("portal-ara-materialization-status"');
const portalAraMaterializationStatusEnd = script.indexOf('"No customer-visible ARA materialization receipts yet."', portalAraMaterializationStatusStart);
const portalAraMaterializationStatusRenderer = portalAraMaterializationStatusStart >= 0 && portalAraMaterializationStatusEnd > portalAraMaterializationStatusStart
  ? script.slice(portalAraMaterializationStatusStart, portalAraMaterializationStatusEnd)
  : "";
if (!portalAraMaterializationStatusRenderer || portalAraMaterializationStatusRenderer.includes("operatorNextAction") || portalAraMaterializationStatusRenderer.includes("packetId") || portalAraMaterializationStatusRenderer.includes("assignmentId") || portalAraMaterializationStatusRenderer.includes("opportunityId") || portalAraMaterializationStatusRenderer.includes("queueId") || portalAraMaterializationStatusRenderer.includes("decisionId") || portalAraMaterializationStatusRenderer.includes("materializationId")) fail("portal ARA materialization status exposes internal materialization controls");
const portalAraMaterializationExportStart = script.indexOf('"portal-ara-materialization-receipt-export"');
const portalAraMaterializationExportEnd = script.indexOf('"No customer-safe App ARA materialization receipts loaded."', portalAraMaterializationExportStart);
const portalAraMaterializationExportRenderer = portalAraMaterializationExportStart >= 0 && portalAraMaterializationExportEnd > portalAraMaterializationExportStart
  ? script.slice(portalAraMaterializationExportStart, portalAraMaterializationExportEnd)
  : "";
if (!portalAraMaterializationExportRenderer || portalAraMaterializationExportRenderer.includes("operatorNextAction") || portalAraMaterializationExportRenderer.includes("packetId") || portalAraMaterializationExportRenderer.includes("assignmentId") || portalAraMaterializationExportRenderer.includes("opportunityId") || portalAraMaterializationExportRenderer.includes("queueId") || portalAraMaterializationExportRenderer.includes("decisionId") || portalAraMaterializationExportRenderer.includes("materializationId")) fail("portal ARA materialization export exposes internal materialization controls");
const portalServiceMaterialReuseStatusStart = script.indexOf('renderStack("portal-service-material-reuse-status"');
const portalServiceMaterialReuseStatusEnd = script.indexOf('"No customer-visible service material reuse receipts yet."', portalServiceMaterialReuseStatusStart);
const portalServiceMaterialReuseStatusRenderer = portalServiceMaterialReuseStatusStart >= 0 && portalServiceMaterialReuseStatusEnd > portalServiceMaterialReuseStatusStart
  ? script.slice(portalServiceMaterialReuseStatusStart, portalServiceMaterialReuseStatusEnd)
  : "";
if (!portalServiceMaterialReuseStatusRenderer || portalServiceMaterialReuseStatusRenderer.includes("operatorNextAction") || portalServiceMaterialReuseStatusRenderer.includes("packetId") || portalServiceMaterialReuseStatusRenderer.includes("assignmentId") || portalServiceMaterialReuseStatusRenderer.includes("opportunityId") || portalServiceMaterialReuseStatusRenderer.includes("queueId") || portalServiceMaterialReuseStatusRenderer.includes("decisionId") || portalServiceMaterialReuseStatusRenderer.includes("materializationId") || portalServiceMaterialReuseStatusRenderer.includes("materializationReceiptId")) fail("portal service material reuse status exposes internal material or review controls");
const portalServiceMaterialReuseExportStart = script.indexOf('"portal-service-material-reuse-receipt-export"');
const portalServiceMaterialReuseExportEnd = script.indexOf('"No customer-safe App service material reuse receipts loaded."', portalServiceMaterialReuseExportStart);
const portalServiceMaterialReuseExportRenderer = portalServiceMaterialReuseExportStart >= 0 && portalServiceMaterialReuseExportEnd > portalServiceMaterialReuseExportStart
  ? script.slice(portalServiceMaterialReuseExportStart, portalServiceMaterialReuseExportEnd)
  : "";
if (!portalServiceMaterialReuseExportRenderer || portalServiceMaterialReuseExportRenderer.includes("operatorNextAction") || portalServiceMaterialReuseExportRenderer.includes("packetId") || portalServiceMaterialReuseExportRenderer.includes("assignmentId") || portalServiceMaterialReuseExportRenderer.includes("opportunityId") || portalServiceMaterialReuseExportRenderer.includes("queueId") || portalServiceMaterialReuseExportRenderer.includes("decisionId") || portalServiceMaterialReuseExportRenderer.includes("materializationId") || portalServiceMaterialReuseExportRenderer.includes("materializationReceiptId")) fail("portal service material reuse export exposes internal material or review controls");
const portalPackageDeliveryChecklistStatusStart = script.indexOf('renderStack("portal-package-delivery-checklist-status"');
const portalPackageDeliveryChecklistStatusEnd = script.indexOf('"No customer-visible package delivery checklist receipts yet."', portalPackageDeliveryChecklistStatusStart);
const portalPackageDeliveryChecklistStatusRenderer = portalPackageDeliveryChecklistStatusStart >= 0 && portalPackageDeliveryChecklistStatusEnd > portalPackageDeliveryChecklistStatusStart
  ? script.slice(portalPackageDeliveryChecklistStatusStart, portalPackageDeliveryChecklistStatusEnd)
  : "";
if (!portalPackageDeliveryChecklistStatusRenderer || portalPackageDeliveryChecklistStatusRenderer.includes("operatorNextAction") || portalPackageDeliveryChecklistStatusRenderer.includes("packetId") || portalPackageDeliveryChecklistStatusRenderer.includes("assignmentId") || portalPackageDeliveryChecklistStatusRenderer.includes("opportunityId") || portalPackageDeliveryChecklistStatusRenderer.includes("queueId") || portalPackageDeliveryChecklistStatusRenderer.includes("decisionId") || portalPackageDeliveryChecklistStatusRenderer.includes("materializationId") || portalPackageDeliveryChecklistStatusRenderer.includes("materializationReceiptId") || portalPackageDeliveryChecklistStatusRenderer.includes("reuseId") || portalPackageDeliveryChecklistStatusRenderer.includes("checklistId") || portalPackageDeliveryChecklistStatusRenderer.includes("materialAssetId")) fail("portal package delivery checklist status exposes internal checklist, material, or review controls");
const portalPackageDeliveryChecklistExportStart = script.indexOf('"portal-package-delivery-checklist-receipt-export"');
const portalPackageDeliveryChecklistExportEnd = script.indexOf('"No customer-safe App package delivery checklist receipts loaded."', portalPackageDeliveryChecklistExportStart);
const portalPackageDeliveryChecklistExportRenderer = portalPackageDeliveryChecklistExportStart >= 0 && portalPackageDeliveryChecklistExportEnd > portalPackageDeliveryChecklistExportStart
  ? script.slice(portalPackageDeliveryChecklistExportStart, portalPackageDeliveryChecklistExportEnd)
  : "";
if (!portalPackageDeliveryChecklistExportRenderer || portalPackageDeliveryChecklistExportRenderer.includes("operatorNextAction") || portalPackageDeliveryChecklistExportRenderer.includes("packetId") || portalPackageDeliveryChecklistExportRenderer.includes("assignmentId") || portalPackageDeliveryChecklistExportRenderer.includes("opportunityId") || portalPackageDeliveryChecklistExportRenderer.includes("queueId") || portalPackageDeliveryChecklistExportRenderer.includes("decisionId") || portalPackageDeliveryChecklistExportRenderer.includes("materializationId") || portalPackageDeliveryChecklistExportRenderer.includes("materializationReceiptId") || portalPackageDeliveryChecklistExportRenderer.includes("reuseId") || portalPackageDeliveryChecklistExportRenderer.includes("checklistId") || portalPackageDeliveryChecklistExportRenderer.includes("materialAssetId")) fail("portal package delivery checklist export exposes internal checklist, material, or review controls");
const portalPackageDeliveryChecklistAutomationStatusStart = script.indexOf('renderStack("portal-package-delivery-checklist-automation-status"');
const portalPackageDeliveryChecklistAutomationStatusEnd = script.indexOf('"No customer-visible package delivery automation receipts yet."', portalPackageDeliveryChecklistAutomationStatusStart);
const portalPackageDeliveryChecklistAutomationStatusRenderer = portalPackageDeliveryChecklistAutomationStatusStart >= 0 && portalPackageDeliveryChecklistAutomationStatusEnd > portalPackageDeliveryChecklistAutomationStatusStart
  ? script.slice(portalPackageDeliveryChecklistAutomationStatusStart, portalPackageDeliveryChecklistAutomationStatusEnd)
  : "";
if (!portalPackageDeliveryChecklistAutomationStatusRenderer || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("operatorNextAction") || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("packetId") || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("assignmentId") || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("opportunityId") || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("queueId") || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("decisionId") || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("materializationId") || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("materializationReceiptId") || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("reuseId") || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("checklistId") || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("automationId") || portalPackageDeliveryChecklistAutomationStatusRenderer.includes("materialAssetId")) fail("portal package delivery automation status exposes internal automation, checklist, material, or review controls");
const portalPackageDeliveryChecklistAutomationExportStart = script.indexOf('"portal-package-delivery-checklist-automation-receipt-export"');
const portalPackageDeliveryChecklistAutomationExportEnd = script.indexOf('"No customer-safe App package delivery automation receipts loaded."', portalPackageDeliveryChecklistAutomationExportStart);
const portalPackageDeliveryChecklistAutomationExportRenderer = portalPackageDeliveryChecklistAutomationExportStart >= 0 && portalPackageDeliveryChecklistAutomationExportEnd > portalPackageDeliveryChecklistAutomationExportStart
  ? script.slice(portalPackageDeliveryChecklistAutomationExportStart, portalPackageDeliveryChecklistAutomationExportEnd)
  : "";
if (!portalPackageDeliveryChecklistAutomationExportRenderer || portalPackageDeliveryChecklistAutomationExportRenderer.includes("operatorNextAction") || portalPackageDeliveryChecklistAutomationExportRenderer.includes("packetId") || portalPackageDeliveryChecklistAutomationExportRenderer.includes("assignmentId") || portalPackageDeliveryChecklistAutomationExportRenderer.includes("opportunityId") || portalPackageDeliveryChecklistAutomationExportRenderer.includes("queueId") || portalPackageDeliveryChecklistAutomationExportRenderer.includes("decisionId") || portalPackageDeliveryChecklistAutomationExportRenderer.includes("materializationId") || portalPackageDeliveryChecklistAutomationExportRenderer.includes("materializationReceiptId") || portalPackageDeliveryChecklistAutomationExportRenderer.includes("reuseId") || portalPackageDeliveryChecklistAutomationExportRenderer.includes("checklistId") || portalPackageDeliveryChecklistAutomationExportRenderer.includes("automationId") || portalPackageDeliveryChecklistAutomationExportRenderer.includes("materialAssetId")) fail("portal package delivery automation export exposes internal automation, checklist, material, or review controls");
const portalPackageDeliveryExecutionStatusStart = script.indexOf('renderStack("portal-package-delivery-execution-status"');
const portalPackageDeliveryExecutionStatusEnd = script.indexOf('"No customer-visible package delivery execution receipts yet."', portalPackageDeliveryExecutionStatusStart);
const portalPackageDeliveryExecutionStatusRenderer = portalPackageDeliveryExecutionStatusStart >= 0 && portalPackageDeliveryExecutionStatusEnd > portalPackageDeliveryExecutionStatusStart
  ? script.slice(portalPackageDeliveryExecutionStatusStart, portalPackageDeliveryExecutionStatusEnd)
  : "";
if (!portalPackageDeliveryExecutionStatusRenderer || portalPackageDeliveryExecutionStatusRenderer.includes("operatorNextAction") || portalPackageDeliveryExecutionStatusRenderer.includes("packetId") || portalPackageDeliveryExecutionStatusRenderer.includes("assignmentId") || portalPackageDeliveryExecutionStatusRenderer.includes("opportunityId") || portalPackageDeliveryExecutionStatusRenderer.includes("queueId") || portalPackageDeliveryExecutionStatusRenderer.includes("decisionId") || portalPackageDeliveryExecutionStatusRenderer.includes("materializationId") || portalPackageDeliveryExecutionStatusRenderer.includes("materializationReceiptId") || portalPackageDeliveryExecutionStatusRenderer.includes("reuseId") || portalPackageDeliveryExecutionStatusRenderer.includes("checklistId") || portalPackageDeliveryExecutionStatusRenderer.includes("automationId") || portalPackageDeliveryExecutionStatusRenderer.includes("executionId") || portalPackageDeliveryExecutionStatusRenderer.includes("materialAssetId")) fail("portal package delivery execution status exposes internal execution, automation, checklist, material, or review controls");
const portalPackageDeliveryExecutionExportStart = script.indexOf('"portal-package-delivery-execution-receipt-export"');
const portalPackageDeliveryExecutionExportEnd = script.indexOf('"No customer-safe App package delivery execution receipts loaded."', portalPackageDeliveryExecutionExportStart);
const portalPackageDeliveryExecutionExportRenderer = portalPackageDeliveryExecutionExportStart >= 0 && portalPackageDeliveryExecutionExportEnd > portalPackageDeliveryExecutionExportStart
  ? script.slice(portalPackageDeliveryExecutionExportStart, portalPackageDeliveryExecutionExportEnd)
  : "";
if (!portalPackageDeliveryExecutionExportRenderer || portalPackageDeliveryExecutionExportRenderer.includes("operatorNextAction") || portalPackageDeliveryExecutionExportRenderer.includes("packetId") || portalPackageDeliveryExecutionExportRenderer.includes("assignmentId") || portalPackageDeliveryExecutionExportRenderer.includes("opportunityId") || portalPackageDeliveryExecutionExportRenderer.includes("queueId") || portalPackageDeliveryExecutionExportRenderer.includes("decisionId") || portalPackageDeliveryExecutionExportRenderer.includes("materializationId") || portalPackageDeliveryExecutionExportRenderer.includes("materializationReceiptId") || portalPackageDeliveryExecutionExportRenderer.includes("reuseId") || portalPackageDeliveryExecutionExportRenderer.includes("checklistId") || portalPackageDeliveryExecutionExportRenderer.includes("automationId") || portalPackageDeliveryExecutionExportRenderer.includes("executionId") || portalPackageDeliveryExecutionExportRenderer.includes("materialAssetId")) fail("portal package delivery execution export exposes internal execution, automation, checklist, material, or review controls");
const portalPackageDeliveryFollowUpRenewalStatusStart = script.indexOf('renderStack("portal-package-delivery-followup-renewal-status"');
const portalPackageDeliveryFollowUpRenewalStatusEnd = script.indexOf('"No customer-visible package delivery follow-up/renewal receipts yet."', portalPackageDeliveryFollowUpRenewalStatusStart);
const portalPackageDeliveryFollowUpRenewalStatusRenderer = portalPackageDeliveryFollowUpRenewalStatusStart >= 0 && portalPackageDeliveryFollowUpRenewalStatusEnd > portalPackageDeliveryFollowUpRenewalStatusStart
  ? script.slice(portalPackageDeliveryFollowUpRenewalStatusStart, portalPackageDeliveryFollowUpRenewalStatusEnd)
  : "";
if (!portalPackageDeliveryFollowUpRenewalStatusRenderer || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("operatorNextAction") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("packetId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("assignmentId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("opportunityId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("queueId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("decisionId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("materializationId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("materializationReceiptId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("reuseId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("checklistId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("automationId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("executionId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("executionReceiptId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("followUpId") || portalPackageDeliveryFollowUpRenewalStatusRenderer.includes("materialAssetId")) fail("portal package delivery follow-up renewal status exposes internal follow-up, execution, automation, checklist, material, or review controls");
const portalPackageDeliveryFollowUpRenewalExportStart = script.indexOf('"portal-package-delivery-followup-renewal-receipt-export"');
const portalPackageDeliveryFollowUpRenewalExportEnd = script.indexOf('"No customer-safe App package delivery follow-up/renewal receipts loaded."', portalPackageDeliveryFollowUpRenewalExportStart);
const portalPackageDeliveryFollowUpRenewalExportRenderer = portalPackageDeliveryFollowUpRenewalExportStart >= 0 && portalPackageDeliveryFollowUpRenewalExportEnd > portalPackageDeliveryFollowUpRenewalExportStart
  ? script.slice(portalPackageDeliveryFollowUpRenewalExportStart, portalPackageDeliveryFollowUpRenewalExportEnd)
  : "";
if (!portalPackageDeliveryFollowUpRenewalExportRenderer || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("operatorNextAction") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("packetId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("assignmentId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("opportunityId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("queueId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("decisionId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("materializationId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("materializationReceiptId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("reuseId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("checklistId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("automationId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("executionId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("executionReceiptId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("followUpId") || portalPackageDeliveryFollowUpRenewalExportRenderer.includes("materialAssetId")) fail("portal package delivery follow-up renewal export exposes internal follow-up, execution, automation, checklist, material, or review controls");
const portalPackageDeliveryQualityOutcomeStatusStart = script.indexOf('renderStack("portal-package-delivery-quality-outcome-status"');
const portalPackageDeliveryQualityOutcomeStatusEnd = script.indexOf('"No customer-visible package delivery quality/outcome receipts yet."', portalPackageDeliveryQualityOutcomeStatusStart);
const portalPackageDeliveryQualityOutcomeStatusRenderer = portalPackageDeliveryQualityOutcomeStatusStart >= 0 && portalPackageDeliveryQualityOutcomeStatusEnd > portalPackageDeliveryQualityOutcomeStatusStart
  ? script.slice(portalPackageDeliveryQualityOutcomeStatusStart, portalPackageDeliveryQualityOutcomeStatusEnd)
  : "";
if (!portalPackageDeliveryQualityOutcomeStatusRenderer || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("operatorNextAction") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("packetId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("assignmentId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("opportunityId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("queueId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("decisionId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("materializationId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("materializationReceiptId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("reuseId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("checklistId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("automationId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("executionId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("executionReceiptId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("followUpId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("followUpRenewalId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("followUpRenewalReceiptId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("qualityOutcomeId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("outcomeId") || portalPackageDeliveryQualityOutcomeStatusRenderer.includes("materialAssetId")) fail("portal package delivery quality outcome status exposes internal outcome, follow-up, execution, automation, checklist, material, or review controls");
const portalPackageDeliveryQualityOutcomeExportStart = script.indexOf('"portal-package-delivery-quality-outcome-receipt-export"');
const portalPackageDeliveryQualityOutcomeExportEnd = script.indexOf('"No customer-safe App package delivery quality/outcome receipts loaded."', portalPackageDeliveryQualityOutcomeExportStart);
const portalPackageDeliveryQualityOutcomeExportRenderer = portalPackageDeliveryQualityOutcomeExportStart >= 0 && portalPackageDeliveryQualityOutcomeExportEnd > portalPackageDeliveryQualityOutcomeExportStart
  ? script.slice(portalPackageDeliveryQualityOutcomeExportStart, portalPackageDeliveryQualityOutcomeExportEnd)
  : "";
if (!portalPackageDeliveryQualityOutcomeExportRenderer || portalPackageDeliveryQualityOutcomeExportRenderer.includes("operatorNextAction") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("packetId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("assignmentId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("opportunityId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("queueId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("decisionId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("materializationId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("materializationReceiptId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("reuseId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("checklistId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("automationId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("executionId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("executionReceiptId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("followUpId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("followUpRenewalId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("followUpRenewalReceiptId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("qualityOutcomeId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("outcomeId") || portalPackageDeliveryQualityOutcomeExportRenderer.includes("materialAssetId")) fail("portal package delivery quality outcome export exposes internal outcome, follow-up, execution, automation, checklist, material, or review controls");
const packageDeliveryAccountGrowthNormalizerStart = script.indexOf("const normalizePackageDeliveryAccountGrowthReceiptExport");
const packageDeliveryAccountGrowthNormalizerEnd = script.indexOf("const normalizePackageDeliveryAccountGrowthReceiptPayload", packageDeliveryAccountGrowthNormalizerStart);
const packageDeliveryAccountGrowthNormalizer = packageDeliveryAccountGrowthNormalizerStart >= 0 && packageDeliveryAccountGrowthNormalizerEnd > packageDeliveryAccountGrowthNormalizerStart
  ? script.slice(packageDeliveryAccountGrowthNormalizerStart, packageDeliveryAccountGrowthNormalizerEnd)
  : "";
if (!packageDeliveryAccountGrowthNormalizer || packageDeliveryAccountGrowthNormalizer.includes("linkageId") || packageDeliveryAccountGrowthNormalizer.includes("qualityOutcomeReceiptId") || packageDeliveryAccountGrowthNormalizer.includes("accountGrowthPlanId") || packageDeliveryAccountGrowthNormalizer.includes("retentionSignalId") || packageDeliveryAccountGrowthNormalizer.includes("referralSignalId") || packageDeliveryAccountGrowthNormalizer.includes("expansionSignalId")) fail("package delivery account growth Webportal normalizer exposes internal account-growth linkage ids");
const portalPackageDeliveryAccountGrowthStatusStart = script.indexOf('renderStack("portal-package-delivery-account-growth-status"');
const portalPackageDeliveryAccountGrowthStatusEnd = script.indexOf('"No customer-visible package delivery account-growth receipts yet."', portalPackageDeliveryAccountGrowthStatusStart);
const portalPackageDeliveryAccountGrowthStatusRenderer = portalPackageDeliveryAccountGrowthStatusStart >= 0 && portalPackageDeliveryAccountGrowthStatusEnd > portalPackageDeliveryAccountGrowthStatusStart
  ? script.slice(portalPackageDeliveryAccountGrowthStatusStart, portalPackageDeliveryAccountGrowthStatusEnd)
  : "";
if (!portalPackageDeliveryAccountGrowthStatusRenderer || portalPackageDeliveryAccountGrowthStatusRenderer.includes("operatorNextAction") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("packetId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("assignmentId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("opportunityId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("queueId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("decisionId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("materializationId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("materializationReceiptId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("reuseId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("checklistId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("automationId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("executionId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("executionReceiptId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("followUpId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("followUpRenewalId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("followUpRenewalReceiptId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("qualityOutcomeId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("qualityOutcomeReceiptId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("outcomeId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("linkageId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("accountGrowthPlanId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("retentionSignalId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("referralSignalId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("expansionSignalId") || portalPackageDeliveryAccountGrowthStatusRenderer.includes("materialAssetId")) fail("portal package delivery account growth status exposes internal account-growth, outcome, follow-up, execution, automation, checklist, material, or review controls");
const portalPackageDeliveryAccountGrowthExportStart = script.indexOf('"portal-package-delivery-account-growth-receipt-export"');
const portalPackageDeliveryAccountGrowthExportEnd = script.indexOf('"No customer-safe App package delivery account-growth receipts loaded."', portalPackageDeliveryAccountGrowthExportStart);
const portalPackageDeliveryAccountGrowthExportRenderer = portalPackageDeliveryAccountGrowthExportStart >= 0 && portalPackageDeliveryAccountGrowthExportEnd > portalPackageDeliveryAccountGrowthExportStart
  ? script.slice(portalPackageDeliveryAccountGrowthExportStart, portalPackageDeliveryAccountGrowthExportEnd)
  : "";
if (!portalPackageDeliveryAccountGrowthExportRenderer || portalPackageDeliveryAccountGrowthExportRenderer.includes("operatorNextAction") || portalPackageDeliveryAccountGrowthExportRenderer.includes("packetId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("assignmentId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("opportunityId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("queueId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("decisionId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("materializationId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("materializationReceiptId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("reuseId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("checklistId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("automationId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("executionId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("executionReceiptId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("followUpId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("followUpRenewalId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("followUpRenewalReceiptId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("qualityOutcomeId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("qualityOutcomeReceiptId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("outcomeId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("linkageId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("accountGrowthPlanId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("retentionSignalId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("referralSignalId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("expansionSignalId") || portalPackageDeliveryAccountGrowthExportRenderer.includes("materialAssetId")) fail("portal package delivery account growth export exposes internal account-growth, outcome, follow-up, execution, automation, checklist, material, or review controls");
if (data.includes('return "MONITOR";')) fail("ARA owner factory assigns customer work to MONITOR");

console.log("WORKSHOP boundary verification passed");
