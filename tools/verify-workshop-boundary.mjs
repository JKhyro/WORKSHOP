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
const appXaml = read("../src/Workshop.App/MainWindow.axaml");
const appNative = read("../src/Workshop.App/Native/WorkshopNative.cs");
const appViewModel = read("../src/Workshop.App/ViewModels/MainWindowViewModel.cs");
const {
  createAraAssignmentForPacket,
  createAraRevenuePacketForOpportunity,
  createAraReviewCompletionForAssignment,
  createAraReviewReceiptForPacket,
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
  createServiceRequestRecord,
  createSubmissionReviewCycleForRequest,
  createSubmissionForRequest,
  createSubscriptionPlanForCohortPlan,
  createSubscriptionLifecycleForPlan,
  createSubscriptionLifecycleReceiptForLifecycle,
  createSubscriptionRenewalReportForOutcome,
  createTransitionReceiptsForRequest,
  createCapacityWaitlistReceiptForConsumption,
  createRecurringSeriesReceiptForConsumption,
  createTimingReturnReceiptForConsumption,
  applyEpochCapacityWaitlistConsumption,
  applyEpochRecurringSeriesConsumption,
  applyEpochTimingReturnConsumption,
  createGrowthFollowUpReceiptForPlan,
  createReferralConversionForOpportunity,
  createGrowthPlanAcceptanceForPlan,
  createExpansionServiceRequestForAcceptance,
  createConversionStatusEventForExpansion,
  createConversionReceiptForExpansion,
  applyCohortPlanningRecords,
  initialWorkshopLedger
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
  "ARA Work Packet Factory",
  "Service Offer Templates"
]) {
  const combined = `${root}\n${app}\n${portal}`;
  if (!combined.includes(phrase)) fail(`WORKSHOP web surface missing ${phrase}`);
}

for (const phrase of ["revenueLanes", "submissions", "packages", "packageEligibility", "marketResearchRecords", "competitorPriceAnchors", "offerExperiments", "laborEstimates", "roiRecords", "revenueAuditRecords", "revenueReceipts", "deliveryLogEntries", "revenueSearchQueries", "revenueSearchResults", "offerTemplates", "araWorkPackets", "ownerTimeBudgets", "submissionReviewCycles", "cohortPlans", "cohortCapacityPlans", "subscriptionPlans", "cohortPlanningReceipts", "cohortEnrollments", "subscriptionLifecycles", "subscriptionLifecycleReceipts", "cohortOutcomeReports", "subscriptionRenewalReports", "cohortProgressStatusEvents", "outcomeRenewalReceipts", "compatibilityGates", "crmAccounts", "araQueue", "crmOpportunities", "araRevenuePackets", "araAssignments", "araReviewReceipts", "revenueOutcomes", "deliveryResultReceipts", "araReviewCompletions", "customerAccounts", "customerAccountHistory", "renewalOpportunities", "customerFollowUps", "retentionHealth", "referralOpportunities", "accountGrowthPlans", "growthFollowUpReceipts", "referralConversions", "growthPlanAcceptances", "expansionServiceRequests", "conversionStatusEvents", "conversionReceipts", "epochTimingReturnPayloads", "epochTimingReturnConsumptions", "timingReturnReceipts", "epochCapacityWaitlistPayloads", "epochCapacityWaitlistConsumptions", "capacityWaitlistReceipts", "epochRecurringSeriesPayloads", "epochRecurringSeriesConsumptions", "recurringSeriesReceipts", "deliveryTimeline", "deliveryLifecycles", "deliveryTransitions", "customerStatusEvents"]) {
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
  "epochTimingReturnPayloads",
  "epochTimingReturnConsumptions",
  "timingReturnReceipts",
  "epochCapacityWaitlistPayloads",
  "epochCapacityWaitlistConsumptions",
  "capacityWaitlistReceipts",
  "epochRecurringSeriesPayloads",
  "epochRecurringSeriesConsumptions",
  "recurringSeriesReceipts",
  "deliveryLifecycles",
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
  "Under 19, compatibility review required"
]) {
  if (!data.includes(phrase) && !portal.includes(phrase)) fail(`WORKSHOP portal missing intake guard ${phrase}`);
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
  "MONITOR remains development/control only"
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
  "RevenueCommandStatus",
  "RevenueCommandEvidence",
  "RevenueExecutionStatus",
  "RevenueExecutionEvidence",
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
  "native revenue command ready",
  "native revenue execution receipt ready",
  "Low-labor score",
  "ARA packets require human review",
  "EPOCH timing and MONITOR boundaries enforced"
]) {
  if (!appViewModel.includes(phrase)) fail(`Avalonia view model missing ${phrase}`);
}

for (const phrase of [
  "Native-backed revenue command slice",
  "workshop_app_bridge_preview_revenue_command",
  "offer experiment, labor",
  "timing from EPOCH without taking calendar ownership",
  "Native-backed revenue execution slice",
  "workshop_app_bridge_execute_revenue_command",
  "MONITOR workflow exposure"
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
if (!initialWorkshopLedger.araWorkPackets?.every((item) => item.humanReviewRequired === true && item.customerSafe === false)) fail("ARA work packets must stay internal until human review");
if (!initialWorkshopLedger.ownerTimeBudgets?.some((item) => item.laborTrapWarning === false && item.araDelegableMinutes > 0)) fail("seeded WORKSHOP ledger missing owner time budget guard");

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
if (!adultOutcome || adultOutcome.customerVisible !== true || adultOutcome.status !== "queued" || adultOutcome.resultReceiptReady !== false) fail("queued cohort outcome should stay visible but not result-ready");
if (!adultEnrollment || adultEnrollment.customerAccountId !== adultCustomerAccount.id || adultEnrollment.timingConfirmedByEpoch !== false) fail("cohort enrollment factory missing customer/account and EPOCH timing boundary");
if (!adultSubscriptionLifecycle || adultSubscriptionLifecycle.paymentLiveEnabled !== false || adultSubscriptionLifecycle.renewalReady !== true) fail("subscription lifecycle factory should be renewal-ready without live payment automation");
if (!adultSubscriptionLifecycleReceipt || adultSubscriptionLifecycleReceipt.kind !== "subscription-lifecycle" || adultSubscriptionLifecycleReceipt.customerVisible !== true) fail("subscription lifecycle receipt missing customer-safe proof");
if (!adultCohortOutcomeReport || adultCohortOutcomeReport.progressScore <= 0 || adultCohortOutcomeReport.customerVisible !== true || adultCohortOutcomeReport.subscriptionLifecycleId !== adultSubscriptionLifecycle.id) fail("cohort outcome report factory missing customer-safe progress linkage");
if (!adultSubscriptionRenewalReport || adultSubscriptionRenewalReport.renewalReady !== true || adultSubscriptionRenewalReport.paymentLiveEnabled !== false || adultSubscriptionRenewalReport.requiresEpochTime !== true) fail("subscription renewal report should stay renewal-ready without live payment automation and preserve EPOCH timing need");
if (!adultProgressStatusEvent || adultProgressStatusEvent.customerVisible !== true || !adultProgressStatusEvent.customerSafeStatus.includes("EPOCH")) fail("cohort progress status event missing customer-safe EPOCH boundary");
if (!adultOutcomeRenewalReceipt || adultOutcomeRenewalReceipt.kind !== "cohort-outcome-renewal" || adultOutcomeRenewalReceipt.customerVisible !== true || adultOutcomeRenewalReceipt.renewalReportId !== adultSubscriptionRenewalReport.id) fail("outcome renewal receipt missing customer-safe reporting proof");
if (!adultCompletion || adultCompletion.customerVisible !== false || adultCompletion.reviewComplete !== false || adultCompletion.status !== "operator-review") fail("ARA review completion factory missing internal open-review record");

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
if (data.includes('return "MONITOR";')) fail("ARA owner factory assigns customer work to MONITOR");

console.log("WORKSHOP boundary verification passed");
