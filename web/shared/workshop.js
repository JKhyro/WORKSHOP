import {
  WORKSHOP_LEDGER_KEY,
  ageBandOptions,
  createAraAssignmentForPacket,
  createAraRevenuePacketForOpportunity,
  createAraOperatorReviewDecisionForQueue,
  createAraReviewQueueForPacket,
  createAraReviewCompletionForAssignment,
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
  createPackageDeliveryRetentionReportForAccountGrowth,
  createPackageDeliveryRetentionReportReceiptForRecord,
  createPackageDeliveryGrowthActionForRetentionReport,
  createPackageDeliveryGrowthActionReceiptForAction,
  createOfferLaunchReadinessForServicePage,
  createOfferLaunchReadinessReceiptForRecord,
  createOfferLaunchIntakeActionForReceipt,
  createOfferLaunchIntakeReceiptForAction,
  createOfferLaunchActivationForIntakeReceipt,
  createOfferLaunchActivationReceiptForActivation,
  createOfferLaunchServiceSetupForActivationReceipt,
  createOfferLaunchServiceSetupReceiptForSetup,
  createOfferLaunchDeliveryWorkspaceForSetupReceipt,
  createOfferLaunchDeliveryWorkspaceReceiptForWorkspace,
  createOfferLaunchDeliveryKickoffForWorkspaceReceipt,
  createOfferLaunchDeliveryKickoffReceiptForKickoff,
  createOfferLaunchDeliveryMilestoneForKickoffReceipt,
  createOfferLaunchDeliveryMilestoneReceiptForMilestone,
  createOfferLaunchDeliveryOutcomeForMilestoneReceipt,
  createOfferLaunchDeliveryOutcomeReceiptForOutcome,
  createOfferLaunchDeliveryFollowUpForOutcomeReceipt,
  createOfferLaunchDeliveryFollowUpReceiptForFollowUp,
  createOfferLaunchDeliveryGrowthPlanForFollowUpReceipt,
  createOfferLaunchDeliveryGrowthPlanReceiptForGrowthPlan,
  createOfferLaunchDeliveryGrowthPlanAcceptanceForGrowthPlanReceipt,
  createOfferLaunchDeliveryGrowthPlanAcceptanceReceiptForAcceptance,
  createOfferLaunchDeliveryExpansionRequestForAcceptanceReceipt,
  createOfferLaunchDeliveryExpansionRequestReceiptForRequest,
  createOfferLaunchDeliveryExpansionWorkspaceForRequestReceipt,
  createOfferLaunchDeliveryExpansionWorkspaceReceiptForWorkspace,
  createOfferLaunchDeliveryExpansionKickoffForWorkspaceReceipt,
  createOfferLaunchDeliveryExpansionKickoffReceiptForKickoff,
  createOfferLaunchDeliveryExpansionMilestoneForKickoffReceipt,
  createOfferLaunchDeliveryExpansionMilestoneReceiptForMilestone,
  createOfferLaunchDeliveryExpansionOutcomeForMilestoneReceipt,
  createOfferLaunchDeliveryExpansionOutcomeReceiptForOutcome,
  createOfferLaunchDeliveryExpansionFollowUpForOutcomeReceipt,
  createOfferLaunchDeliveryExpansionFollowUpReceiptForFollowUp,
  createOfferLaunchDeliveryExpansionGrowthPlanForFollowUpReceipt,
  createOfferLaunchDeliveryExpansionGrowthPlanReceiptForGrowthPlan,
  createOfferLaunchDeliveryExpansionGrowthPlanAcceptanceForGrowthPlanReceipt,
  createOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptForAcceptance,
  createCohortPlanForRequest,
  createCompatibilityGateForRequest,
  createCustomerAccountForRequest,
  createCustomerAccountHistoryForOutcome,
  createCustomerFollowUpForRenewal,
  createAccountGrowthPlanForRetention,
  createCohortCapacityPlanForCohortPlan,
  createCohortEnrollmentForPlans,
  createCohortOutcomeReportForLifecycle,
  createCohortPlanningReceiptForPlan,
  createCohortProgressStatusEventForOutcome,
  createCrmAraReceiptForRequest,
  createCrmAccountForRequest,
  createCrmOpportunityForRequest,
  createCustomerStatusEventsForRequest,
  createCustomerStatusEventForTimingReturn,
  createCustomerStatusEventForRecurringSeries,
  createDeliveryLifecycleForRequest,
  createDeliveryTransitionForRecurringSeries,
  createDeliveryTransitionForCapacityWaitlist,
  createDeliveryTransitionForTimingReturn,
  createDeliveryResultReceiptForOutcome,
  createDeliveryTransitionsForRequest,
  createAccountGrowthAutomationForDeliveryOutcome,
  createAccountGrowthAutomationReceiptForAutomation,
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
  createCapacityWaitlistReceiptForConsumption,
  createCustomerStatusEventForCapacityWaitlist,
  createCustomerStatusEventForRevisedCalendarTiming,
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
  createRecurringSeriesReceiptForConsumption,
  createRevisedCalendarTimingReceiptForConsumption,
  createDeliveryOutcomeAutomationForReceipt,
  createDeliveryOutcomeAutomationReceiptForAutomation,
  createTimingAwareServiceFollowUpForRevisedTiming,
  createTimingAwareRenewalReceiptForFollowUp,
  createTimingReturnReceiptForConsumption,
  applyCohortPlanningRecords,
  applyEpochCapacityWaitlistConsumption,
  applyEpochRevisedCalendarTimingConsumption,
  applyEpochRecurringSeriesConsumption,
  applyEpochTimingReturnConsumption,
  createDeliveryTransitionForRevisedCalendarTiming,
  createGrowthFollowUpReceiptForPlan,
  createGrowthPlanAcceptanceForPlan,
  initialWorkshopLedger,
  makeId,
  materialStatusOptions,
  createConversionReceiptForExpansion,
  createConversionStatusEventForExpansion,
  createExpansionServiceRequestForAcceptance,
  createReferralConversionForOpportunity,
  serviceLifecycleActionOptions,
  serviceLaneLabel,
  serviceLaneOptions
} from "./workshop-data.js";

const clone = (value) => JSON.parse(JSON.stringify(value));

const escapeHtml = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const getStorage = () => {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
};

const sanitizeCustomerPortalText = (value) => typeof value === "string"
  ? value.replaceAll("MONITOR", "internal controls")
  : value;

const sanitizeCustomerVisiblePortalCopy = (ledger) => {
  for (const value of Object.values(ledger)) {
    if (!Array.isArray(value)) continue;
    for (const item of value) {
      if (!item || typeof item !== "object" || !item.customerVisible) continue;
      for (const key of ["summary", "customerSafeStatus", "detail"]) {
        item[key] = sanitizeCustomerPortalText(item[key]);
      }
    }
  }
  return ledger;
};

const mergeLedger = (stored) => {
  const base = clone(initialWorkshopLedger);
  if (!stored || typeof stored !== "object") return sanitizeCustomerVisiblePortalCopy(base);
  for (const key of [
    "serviceRequests",
    "packages",
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
    "offerLaunchReadinessRecords",
    "offerLaunchReadinessReceipts",
    "offerLaunchIntakeActions",
    "offerLaunchIntakeReceipts",
    "offerLaunchActivations",
    "offerLaunchActivationReceipts",
    "offerLaunchServiceSetups",
    "offerLaunchServiceSetupReceipts",
    "offerLaunchDeliveryWorkspaces",
    "offerLaunchDeliveryWorkspaceReceipts",
    "offerLaunchDeliveryKickoffs",
    "offerLaunchDeliveryKickoffReceipts",
    "offerLaunchDeliveryMilestones",
    "offerLaunchDeliveryMilestoneReceipts",
    "offerLaunchDeliveryOutcomes",
    "offerLaunchDeliveryOutcomeReceipts",
    "offerLaunchDeliveryFollowUps",
    "offerLaunchDeliveryFollowUpReceipts",
    "offerLaunchDeliveryGrowthPlans",
    "offerLaunchDeliveryGrowthPlanReceipts",
    "offerLaunchDeliveryGrowthPlanAcceptances",
    "offerLaunchDeliveryGrowthPlanAcceptanceReceipts",
    "offerLaunchDeliveryExpansionRequests",
    "offerLaunchDeliveryExpansionRequestReceipts",
    "offerLaunchDeliveryExpansionWorkspaces",
    "offerLaunchDeliveryExpansionWorkspaceReceipts",
    "offerLaunchDeliveryExpansionKickoffs",
    "offerLaunchDeliveryExpansionKickoffReceipts",
    "offerLaunchDeliveryExpansionMilestones",
    "offerLaunchDeliveryExpansionMilestoneReceipts",
    "offerLaunchDeliveryExpansionOutcomes",
    "offerLaunchDeliveryExpansionOutcomeReceipts",
    "offerLaunchDeliveryExpansionFollowUps",
    "offerLaunchDeliveryExpansionFollowUpReceipts",
    "offerLaunchDeliveryExpansionGrowthPlans",
    "offerLaunchDeliveryExpansionGrowthPlanReceipts",
    "offerLaunchDeliveryExpansionGrowthPlanAcceptances",
    "offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts",
    "araWorkPackets",
    "ownerTimeBudgets",
    "submissions",
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
    "crmAccounts",
    "araPackets",
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
    "packageDeliveryRetentionReports",
    "packageDeliveryRetentionReportReceipts",
    "packageDeliveryGrowthActions",
    "packageDeliveryGrowthActionReceipts",
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
    "epochTimeHandoffs",
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
    "accountGrowthAutomations",
    "accountGrowthAutomationReceipts",
    "epochCapacityWaitlistPayloads",
    "epochCapacityWaitlistConsumptions",
    "capacityWaitlistReceipts",
    "epochRecurringSeriesPayloads",
    "epochRecurringSeriesConsumptions",
    "recurringSeriesReceipts",
    "deliveryLifecycles",
    "serviceLifecycleActions",
    "deliveryTransitions",
    "customerStatusEvents",
    "deliveryStates",
    "receipts"
  ]) {
    if (Array.isArray(stored[key])) base[key] = stored[key];
  }
  base.version = stored.version || base.version;
  base.generatedAt = stored.generatedAt || base.generatedAt;
  return sanitizeCustomerVisiblePortalCopy(base);
};

const loadLedger = () => {
  const storage = getStorage();
  if (!storage) return clone(initialWorkshopLedger);
  try {
    return mergeLedger(JSON.parse(storage.getItem(WORKSHOP_LEDGER_KEY)));
  } catch {
    return clone(initialWorkshopLedger);
  }
};

const saveLedger = (nextLedger) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_LEDGER_KEY, JSON.stringify(nextLedger));
};

const WORKSHOP_CUSTOMER_SERVICE_STATUS_EXPORT_KEY = "workshop.webportal.customerServiceStatusExports.v1";

const normalizeCustomerServiceStatusExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    item.webportalExportReady === true &&
    item.epochTimingProviderOnly === true &&
    item.araReviewComplete === true &&
    item.monitorWorkflowExposed !== true;
  if (!customerSafe) return null;

  return {
    statusId: String(item.statusId || item.id || "local-service-status"),
    requestId: String(item.requestId || "service request"),
    serviceLane: String(item.serviceLane || "service"),
    status: String(item.status || "local-service-status-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "Your service status is ready."),
    nextAction: String(item.nextAction || "Review the customer-safe service status."),
    createdAtUtc: String(item.createdAtUtc || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.CustomerSafeStatusExport")
  };
};

const normalizeCustomerServiceStatusPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.statuses)
      ? payload.statuses
      : payload?.statusId
        ? [payload]
        : [];
  return records
    .map(normalizeCustomerServiceStatusExport)
    .filter(Boolean);
};

const loadCustomerServiceStatusExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeCustomerServiceStatusPayload(JSON.parse(storage.getItem(WORKSHOP_CUSTOMER_SERVICE_STATUS_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveCustomerServiceStatusExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_CUSTOMER_SERVICE_STATUS_EXPORT_KEY, JSON.stringify(records));
};

const state = {
  ledger: loadLedger()
};

const customerServiceStatusExportState = {
  records: loadCustomerServiceStatusExports()
};

const WORKSHOP_SERVICE_LIFECYCLE_STATUS_EXPORT_KEY = "workshop.webportal.serviceLifecycleStatusExports.v1";

const normalizeServiceLifecycleStatusExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    item.webportalExportReady === true &&
    item.epochTimingProviderOnly === true &&
    item.araReviewComplete === true &&
    item.monitorWorkflowExposed !== true;
  if (!customerSafe) return null;

  return {
    statusId: String(item.statusId || item.id || "local-service-lifecycle-status"),
    actionId: String(item.actionId || "service lifecycle action"),
    requestId: String(item.requestId || "service request"),
    actionKind: String(item.actionKind || "service-lifecycle"),
    requestedServiceLane: String(item.requestedServiceLane || "service"),
    status: String(item.status || "local-service-lifecycle-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "Your service lifecycle status is ready."),
    nextAction: String(item.nextAction || "Review the customer-safe service lifecycle status."),
    createdAtUtc: String(item.createdAtUtc || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.ServiceLifecycleStatusExport")
  };
};

const normalizeServiceLifecycleStatusPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.statuses)
      ? payload.statuses
      : payload?.statusId
        ? [payload]
        : [];
  return records
    .map(normalizeServiceLifecycleStatusExport)
    .filter(Boolean);
};

const loadServiceLifecycleStatusExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeServiceLifecycleStatusPayload(JSON.parse(storage.getItem(WORKSHOP_SERVICE_LIFECYCLE_STATUS_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveServiceLifecycleStatusExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_SERVICE_LIFECYCLE_STATUS_EXPORT_KEY, JSON.stringify(records));
};

const serviceLifecycleStatusExportState = {
  records: loadServiceLifecycleStatusExports()
};

const WORKSHOP_DELIVERY_OUTCOME_AUTOMATION_RECEIPT_EXPORT_KEY = "workshop.webportal.deliveryOutcomeAutomationReceiptExports.v1";

const normalizeDeliveryOutcomeAutomationReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.araReviewComplete === true &&
    item.renewalReady === true &&
    item.requiresEpochTimingRequest !== true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "delivery-outcome-automation-receipt"),
    automationId: String(item.automationId || "delivery outcome automation"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    status: String(item.status || "customer-safe-delivery-outcome-ready"),
    customerSafeMessage: String(item.customerSafeMessage || item.customerSafeStatus || "Your delivery outcome follow-up is ready."),
    nextAction: String(item.nextAction || "Review the customer-safe delivery outcome."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.DeliveryOutcomeAutomationReceipt")
  };
};

const normalizeDeliveryOutcomeAutomationReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeDeliveryOutcomeAutomationReceiptExport)
    .filter(Boolean);
};

const loadDeliveryOutcomeAutomationReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeDeliveryOutcomeAutomationReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_DELIVERY_OUTCOME_AUTOMATION_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveDeliveryOutcomeAutomationReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_DELIVERY_OUTCOME_AUTOMATION_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const deliveryOutcomeAutomationReceiptExportState = {
  records: loadDeliveryOutcomeAutomationReceiptExports()
};

const WORKSHOP_ACCOUNT_GROWTH_AUTOMATION_RECEIPT_EXPORT_KEY = "workshop.webportal.accountGrowthAutomationReceiptExports.v1";

const normalizeAccountGrowthAutomationReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.araReviewComplete === true &&
    item.renewalReady === true &&
    item.retentionReady === true &&
    item.referralReady === true &&
    item.growthPlanReady === true &&
    item.conversionReady === true &&
    item.expansionRequestReady === true &&
    item.requiresEpochTimingRequest !== true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "account-growth-automation-receipt"),
    automationId: String(item.automationId || "account growth automation"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    status: String(item.status || "customer-safe-account-growth-ready"),
    customerSafeMessage: String(item.customerSafeMessage || item.customerSafeStatus || "Your next WORKSHOP service path is ready."),
    nextAction: String(item.nextAction || "Review the customer-safe account-growth follow-up."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.AccountGrowthAutomationReceipt")
  };
};

const normalizeAccountGrowthAutomationReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeAccountGrowthAutomationReceiptExport)
    .filter(Boolean);
};

const loadAccountGrowthAutomationReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeAccountGrowthAutomationReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_ACCOUNT_GROWTH_AUTOMATION_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveAccountGrowthAutomationReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_ACCOUNT_GROWTH_AUTOMATION_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const accountGrowthAutomationReceiptExportState = {
  records: loadAccountGrowthAutomationReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_READINESS_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchReadinessReceiptExports.v1";

const normalizeOfferLaunchReadinessReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-readiness" &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-readiness-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-readiness",
    status: String(item.status || "customer-safe-offer-launch-ready"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "This WORKSHOP offer is ready for customer intake."),
    nextAction: String(item.nextAction || "Request the customer-safe offer path."),
    japanCopyMode: "ai-neutral",
    under19GuardRequired: true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchReadinessReceipt")
  };
};

const normalizeOfferLaunchReadinessReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchReadinessReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchReadinessReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchReadinessReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_READINESS_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchReadinessReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_READINESS_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchReadinessReceiptExportState = {
  records: loadOfferLaunchReadinessReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_INTAKE_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchIntakeReceiptExports.v1";

const normalizeOfferLaunchIntakeReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "sourceReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-intake" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedIntakeState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-intake-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-intake",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-intake-queued"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP offer request is queued for intake review."),
    nextAction: String(item.nextAction || "WORKSHOP will review the request and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchIntakeReceipt")
  };
};

const normalizeOfferLaunchIntakeReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchIntakeReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchIntakeReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchIntakeReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_INTAKE_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchIntakeReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_INTAKE_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchIntakeReceiptExportState = {
  records: loadOfferLaunchIntakeReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_ACTIVATION_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchActivationReceiptExports.v1";

const normalizeOfferLaunchActivationReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "intakeReceiptId",
    "sourceReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "activationId"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-activation" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedActivationState === true &&
    item.appOwnedIntakeState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-activation-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-activation",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-activation-ready"),
    activationPath: String(item.activationPath || "service-delivery-setup"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP offer path is accepted for service setup."),
    nextAction: String(item.nextAction || "WORKSHOP will prepare service setup and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    activationReady: item.activationReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchActivationReceipt")
  };
};

const normalizeOfferLaunchActivationReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchActivationReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchActivationReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchActivationReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_ACTIVATION_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchActivationReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_ACTIVATION_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchActivationReceiptExportState = {
  records: loadOfferLaunchActivationReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_SERVICE_SETUP_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchServiceSetupReceiptExports.v1";

const normalizeOfferLaunchServiceSetupReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "activationReceiptId",
    "activationId",
    "setupId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-service-setup" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedSetupState === true &&
    item.appOwnedActivationState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-service-setup-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-service-setup",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-service-setup-ready"),
    setupPath: String(item.setupPath || "service-delivery-workspace"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP service setup is prepared."),
    nextAction: String(item.nextAction || "WORKSHOP will continue delivery setup and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    setupReady: item.setupReady === true,
    activationReady: item.activationReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchServiceSetupReceipt")
  };
};

const normalizeOfferLaunchServiceSetupReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchServiceSetupReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchServiceSetupReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchServiceSetupReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_SERVICE_SETUP_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchServiceSetupReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_SERVICE_SETUP_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchServiceSetupReceiptExportState = {
  records: loadOfferLaunchServiceSetupReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_WORKSPACE_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryWorkspaceReceiptExports.v1";

const normalizeOfferLaunchDeliveryWorkspaceReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "setupReceiptId",
    "workspaceId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-workspace" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedWorkspaceState === true &&
    item.appOwnedSetupState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-workspace-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-workspace",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-workspace-ready"),
    workspacePath: String(item.workspacePath || "service-delivery-workspace-active"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP delivery workspace is ready."),
    nextAction: String(item.nextAction || "WORKSHOP will continue delivery in the prepared workspace and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    workspaceReady: item.workspaceReady === true,
    setupReady: item.setupReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryWorkspaceReceipt")
  };
};

const normalizeOfferLaunchDeliveryWorkspaceReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryWorkspaceReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryWorkspaceReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryWorkspaceReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_WORKSPACE_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryWorkspaceReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_WORKSPACE_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryWorkspaceReceiptExportState = {
  records: loadOfferLaunchDeliveryWorkspaceReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_KICKOFF_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryKickoffReceiptExports.v1";

const normalizeOfferLaunchDeliveryKickoffReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "workspaceReceiptId",
    "kickoffId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-kickoff" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedKickoffState === true &&
    item.appOwnedWorkspaceState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-kickoff-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-kickoff",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-kickoff-ready"),
    kickoffPath: String(item.kickoffPath || "service-delivery-kickoff-active"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP delivery kickoff is ready."),
    nextAction: String(item.nextAction || "WORKSHOP will begin the first delivery milestone and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    kickoffReady: item.kickoffReady === true,
    workspaceReady: item.workspaceReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryKickoffReceipt")
  };
};

const normalizeOfferLaunchDeliveryKickoffReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryKickoffReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryKickoffReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryKickoffReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_KICKOFF_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryKickoffReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_KICKOFF_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryKickoffReceiptExportState = {
  records: loadOfferLaunchDeliveryKickoffReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_MILESTONE_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryMilestoneReceiptExports.v1";

const normalizeOfferLaunchDeliveryMilestoneReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "kickoffReceiptId",
    "milestoneId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-milestone" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedMilestoneState === true &&
    item.appOwnedKickoffState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-milestone-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-milestone",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-milestone-active"),
    milestonePath: String(item.milestonePath || "service-delivery-milestone-active"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your first WORKSHOP delivery milestone is active."),
    nextAction: String(item.nextAction || "WORKSHOP will continue the first milestone and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    milestoneReady: item.milestoneReady === true,
    kickoffReady: item.kickoffReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryMilestoneReceipt")
  };
};

const normalizeOfferLaunchDeliveryMilestoneReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryMilestoneReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryMilestoneReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryMilestoneReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_MILESTONE_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryMilestoneReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_MILESTONE_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryMilestoneReceiptExportState = {
  records: loadOfferLaunchDeliveryMilestoneReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_OUTCOME_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryOutcomeReceiptExports.v1";

const normalizeOfferLaunchDeliveryOutcomeReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "milestoneReceiptId",
    "outcomeId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-outcome" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedOutcomeState === true &&
    item.appOwnedMilestoneState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-outcome-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-outcome",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-outcome-ready"),
    outcomePath: String(item.outcomePath || "service-delivery-outcome-ready"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP delivery outcome is ready."),
    nextAction: String(item.nextAction || "WORKSHOP will review follow-up or renewal options and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    outcomeReady: item.outcomeReady === true,
    milestoneReady: item.milestoneReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryOutcomeReceipt")
  };
};

const normalizeOfferLaunchDeliveryOutcomeReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryOutcomeReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryOutcomeReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryOutcomeReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_OUTCOME_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryOutcomeReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_OUTCOME_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryOutcomeReceiptExportState = {
  records: loadOfferLaunchDeliveryOutcomeReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_FOLLOW_UP_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryFollowUpReceiptExports.v1";

const normalizeOfferLaunchDeliveryFollowUpReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "outcomeReceiptId",
    "followUpId",
    "outcomeId",
    "milestoneReceiptId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-follow-up" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedFollowUpState === true &&
    item.appOwnedOutcomeState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-follow-up-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-follow-up",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-follow-up-ready"),
    followUpPath: String(item.followUpPath || "service-delivery-follow-up-ready"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP follow-up options are ready."),
    nextAction: String(item.nextAction || "WORKSHOP will review renewal or referral options and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    followUpReady: item.followUpReady === true,
    renewalReady: item.renewalReady === true,
    referralReady: item.referralReady === true,
    outcomeReady: item.outcomeReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryFollowUpReceipt")
  };
};

const normalizeOfferLaunchDeliveryFollowUpReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryFollowUpReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryFollowUpReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryFollowUpReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_FOLLOW_UP_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryFollowUpReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_FOLLOW_UP_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryFollowUpReceiptExportState = {
  records: loadOfferLaunchDeliveryFollowUpReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_GROWTH_PLAN_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryGrowthPlanReceiptExports.v1";

const normalizeOfferLaunchDeliveryGrowthPlanReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "followUpReceiptId",
    "growthPlanId",
    "followUpId",
    "outcomeReceiptId",
    "outcomeId",
    "milestoneReceiptId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-growth-plan" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedGrowthPlanState === true &&
    item.appOwnedFollowUpState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-growth-plan-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-growth-plan",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-growth-plan-ready"),
    growthPlanPath: String(item.growthPlanPath || "service-delivery-growth-plan-ready"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP growth options are ready."),
    nextAction: String(item.nextAction || "WORKSHOP will review repeat-service, renewal, or referral options and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    followUpReady: item.followUpReady === true,
    renewalReady: item.renewalReady === true,
    referralReady: item.referralReady === true,
    repeatServiceReady: item.repeatServiceReady === true,
    growthPlanReady: item.growthPlanReady === true,
    outcomeReady: item.outcomeReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryGrowthPlanReceipt")
  };
};

const normalizeOfferLaunchDeliveryGrowthPlanReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryGrowthPlanReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryGrowthPlanReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryGrowthPlanReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_GROWTH_PLAN_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryGrowthPlanReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_GROWTH_PLAN_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryGrowthPlanReceiptExportState = {
  records: loadOfferLaunchDeliveryGrowthPlanReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_GROWTH_PLAN_ACCEPTANCE_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryGrowthPlanAcceptanceReceiptExports.v1";

const normalizeOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "growthPlanReceiptId",
    "acceptanceId",
    "growthPlanId",
    "followUpReceiptId",
    "followUpId",
    "outcomeReceiptId",
    "outcomeId",
    "milestoneReceiptId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-growth-plan-acceptance" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedAcceptanceState === true &&
    item.appOwnedGrowthPlanState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-growth-plan-acceptance-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-growth-plan-acceptance",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-growth-plan-acceptance-ready"),
    acceptancePath: String(item.acceptancePath || "service-delivery-growth-plan-accepted"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP growth-plan acceptance is ready."),
    nextAction: String(item.nextAction || "WORKSHOP will prepare the accepted next service motion and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    growthPlanReady: item.growthPlanReady === true,
    repeatServiceAccepted: item.repeatServiceAccepted === true,
    renewalAccepted: item.renewalAccepted === true,
    referralAccepted: item.referralAccepted === true,
    acceptanceReady: item.acceptanceReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryGrowthPlanAcceptanceReceipt")
  };
};

const normalizeOfferLaunchDeliveryGrowthPlanAcceptanceReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryGrowthPlanAcceptanceReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_GROWTH_PLAN_ACCEPTANCE_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_GROWTH_PLAN_ACCEPTANCE_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryGrowthPlanAcceptanceReceiptExportState = {
  records: loadOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_REQUEST_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryExpansionRequestReceiptExports.v1";

const normalizeOfferLaunchDeliveryExpansionRequestReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "acceptanceReceiptId",
    "expansionRequestId",
    "acceptanceId",
    "growthPlanReceiptId",
    "growthPlanId",
    "followUpReceiptId",
    "followUpId",
    "outcomeReceiptId",
    "outcomeId",
    "milestoneReceiptId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-expansion-request" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedExpansionRequestState === true &&
    item.appOwnedAcceptanceState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-expansion-request-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-expansion-request",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-expansion-request-ready"),
    expansionPath: String(item.expansionPath || "service-delivery-expansion-request-ready"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP next-service request is ready."),
    nextAction: String(item.nextAction || "WORKSHOP will prepare the next service step and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    acceptanceReady: item.acceptanceReady === true,
    repeatServiceRequested: item.repeatServiceRequested === true,
    renewalRequested: item.renewalRequested === true,
    referralRequested: item.referralRequested === true,
    expansionRequestReady: item.expansionRequestReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryExpansionRequestReceipt")
  };
};

const normalizeOfferLaunchDeliveryExpansionRequestReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryExpansionRequestReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryExpansionRequestReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryExpansionRequestReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_REQUEST_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryExpansionRequestReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_REQUEST_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryExpansionRequestReceiptExportState = {
  records: loadOfferLaunchDeliveryExpansionRequestReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_WORKSPACE_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryExpansionWorkspaceReceiptExports.v1";

const normalizeOfferLaunchDeliveryExpansionWorkspaceReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "expansionRequestReceiptId",
    "expansionWorkspaceId",
    "expansionRequestId",
    "acceptanceReceiptId",
    "acceptanceId",
    "growthPlanReceiptId",
    "growthPlanId",
    "followUpReceiptId",
    "followUpId",
    "outcomeReceiptId",
    "outcomeId",
    "milestoneReceiptId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-expansion-workspace" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedExpansionWorkspaceState === true &&
    item.appOwnedExpansionRequestState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-expansion-workspace-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-expansion-workspace",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-expansion-workspace-ready"),
    expansionWorkspacePath: String(item.expansionWorkspacePath || "service-delivery-expansion-workspace-ready"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP next-service workspace is ready."),
    nextAction: String(item.nextAction || "WORKSHOP will continue the next service step and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    expansionRequestReady: item.expansionRequestReady === true,
    repeatServiceRequested: item.repeatServiceRequested === true,
    renewalRequested: item.renewalRequested === true,
    referralRequested: item.referralRequested === true,
    expansionWorkspaceReady: item.expansionWorkspaceReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryExpansionWorkspaceReceipt")
  };
};

const normalizeOfferLaunchDeliveryExpansionWorkspaceReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryExpansionWorkspaceReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryExpansionWorkspaceReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryExpansionWorkspaceReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_WORKSPACE_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryExpansionWorkspaceReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_WORKSPACE_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryExpansionWorkspaceReceiptExportState = {
  records: loadOfferLaunchDeliveryExpansionWorkspaceReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_KICKOFF_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryExpansionKickoffReceiptExports.v1";

const normalizeOfferLaunchDeliveryExpansionKickoffReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "expansionWorkspaceReceiptId",
    "expansionKickoffId",
    "expansionWorkspaceId",
    "expansionRequestReceiptId",
    "expansionRequestId",
    "acceptanceReceiptId",
    "acceptanceId",
    "growthPlanReceiptId",
    "growthPlanId",
    "followUpReceiptId",
    "followUpId",
    "outcomeReceiptId",
    "outcomeId",
    "milestoneReceiptId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-expansion-kickoff" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedExpansionKickoffState === true &&
    item.appOwnedExpansionWorkspaceState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-expansion-kickoff-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-expansion-kickoff",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-expansion-kickoff-ready"),
    expansionKickoffPath: String(item.expansionKickoffPath || "service-delivery-expansion-kickoff-active"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP next-service kickoff is ready."),
    nextAction: String(item.nextAction || "WORKSHOP will begin the next service milestone and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    expansionKickoffReady: item.expansionKickoffReady === true,
    expansionWorkspaceReady: item.expansionWorkspaceReady === true,
    repeatServiceRequested: item.repeatServiceRequested === true,
    renewalRequested: item.renewalRequested === true,
    referralRequested: item.referralRequested === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryExpansionKickoffReceipt")
  };
};

const normalizeOfferLaunchDeliveryExpansionKickoffReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryExpansionKickoffReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryExpansionKickoffReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryExpansionKickoffReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_KICKOFF_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryExpansionKickoffReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_KICKOFF_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryExpansionKickoffReceiptExportState = {
  records: loadOfferLaunchDeliveryExpansionKickoffReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_MILESTONE_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryExpansionMilestoneReceiptExports.v1";

const normalizeOfferLaunchDeliveryExpansionMilestoneReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "expansionKickoffReceiptId",
    "expansionMilestoneId",
    "expansionKickoffId",
    "expansionWorkspaceReceiptId",
    "expansionWorkspaceId",
    "expansionRequestReceiptId",
    "expansionRequestId",
    "acceptanceReceiptId",
    "acceptanceId",
    "growthPlanReceiptId",
    "growthPlanId",
    "followUpReceiptId",
    "followUpId",
    "outcomeReceiptId",
    "outcomeId",
    "milestoneReceiptId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-expansion-milestone" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedExpansionMilestoneState === true &&
    item.appOwnedExpansionKickoffState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-expansion-milestone-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-expansion-milestone",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-expansion-milestone-active"),
    expansionMilestonePath: String(item.expansionMilestonePath || "service-delivery-expansion-milestone-active"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP next-service delivery milestone is active."),
    nextAction: String(item.nextAction || "WORKSHOP will continue the next service milestone and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    expansionMilestoneReady: item.expansionMilestoneReady === true,
    expansionKickoffReady: item.expansionKickoffReady === true,
    repeatServiceRequested: item.repeatServiceRequested === true,
    renewalRequested: item.renewalRequested === true,
    referralRequested: item.referralRequested === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryExpansionMilestoneReceipt")
  };
};

const normalizeOfferLaunchDeliveryExpansionMilestoneReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryExpansionMilestoneReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryExpansionMilestoneReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryExpansionMilestoneReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_MILESTONE_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryExpansionMilestoneReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_MILESTONE_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryExpansionMilestoneReceiptExportState = {
  records: loadOfferLaunchDeliveryExpansionMilestoneReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_OUTCOME_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryExpansionOutcomeReceiptExports.v1";

const normalizeOfferLaunchDeliveryExpansionOutcomeReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "expansionMilestoneReceiptId",
    "expansionOutcomeId",
    "expansionMilestoneId",
    "expansionKickoffReceiptId",
    "expansionKickoffId",
    "expansionWorkspaceReceiptId",
    "expansionWorkspaceId",
    "expansionRequestReceiptId",
    "expansionRequestId",
    "acceptanceReceiptId",
    "acceptanceId",
    "growthPlanReceiptId",
    "growthPlanId",
    "followUpReceiptId",
    "followUpId",
    "outcomeReceiptId",
    "outcomeId",
    "milestoneReceiptId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-expansion-outcome" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedExpansionOutcomeState === true &&
    item.appOwnedExpansionMilestoneState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-expansion-outcome-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-expansion-outcome",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-expansion-outcome-ready"),
    expansionOutcomePath: String(item.expansionOutcomePath || "service-delivery-expansion-outcome-ready"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP next-service delivery outcome is ready."),
    nextAction: String(item.nextAction || "WORKSHOP will review follow-up, renewal, or referral paths and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    expansionOutcomeReady: item.expansionOutcomeReady === true,
    expansionMilestoneReady: item.expansionMilestoneReady === true,
    repeatServiceRequested: item.repeatServiceRequested === true,
    renewalRequested: item.renewalRequested === true,
    referralRequested: item.referralRequested === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryExpansionOutcomeReceipt")
  };
};

const normalizeOfferLaunchDeliveryExpansionOutcomeReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryExpansionOutcomeReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryExpansionOutcomeReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryExpansionOutcomeReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_OUTCOME_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryExpansionOutcomeReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_OUTCOME_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryExpansionOutcomeReceiptExportState = {
  records: loadOfferLaunchDeliveryExpansionOutcomeReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_FOLLOW_UP_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryExpansionFollowUpReceiptExports.v1";

const normalizeOfferLaunchDeliveryExpansionFollowUpReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "expansionOutcomeReceiptId",
    "expansionFollowUpId",
    "expansionOutcomeId",
    "expansionMilestoneReceiptId",
    "expansionMilestoneId",
    "expansionKickoffReceiptId",
    "expansionKickoffId",
    "expansionWorkspaceReceiptId",
    "expansionWorkspaceId",
    "expansionRequestReceiptId",
    "expansionRequestId",
    "acceptanceReceiptId",
    "acceptanceId",
    "growthPlanReceiptId",
    "growthPlanId",
    "followUpReceiptId",
    "followUpId",
    "outcomeReceiptId",
    "outcomeId",
    "milestoneReceiptId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-expansion-follow-up" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedExpansionFollowUpState === true &&
    item.appOwnedExpansionOutcomeState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-expansion-follow-up-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-expansion-follow-up",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-expansion-follow-up-ready"),
    expansionFollowUpPath: String(item.expansionFollowUpPath || "service-delivery-expansion-follow-up-ready"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP next-service follow-up options are ready."),
    nextAction: String(item.nextAction || "WORKSHOP will review repeat-service, renewal, or referral options and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    expansionFollowUpReady: item.expansionFollowUpReady === true,
    expansionOutcomeReady: item.expansionOutcomeReady === true,
    repeatServiceReady: item.repeatServiceReady === true,
    renewalReady: item.renewalReady === true,
    referralReady: item.referralReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryExpansionFollowUpReceipt")
  };
};

const normalizeOfferLaunchDeliveryExpansionFollowUpReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryExpansionFollowUpReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryExpansionFollowUpReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryExpansionFollowUpReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_FOLLOW_UP_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryExpansionFollowUpReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_FOLLOW_UP_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryExpansionFollowUpReceiptExportState = {
  records: loadOfferLaunchDeliveryExpansionFollowUpReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_GROWTH_PLAN_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryExpansionGrowthPlanReceiptExports.v1";

const normalizeOfferLaunchDeliveryExpansionGrowthPlanReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "expansionFollowUpReceiptId",
    "expansionGrowthPlanId",
    "expansionFollowUpId",
    "expansionOutcomeReceiptId",
    "expansionOutcomeId",
    "expansionMilestoneReceiptId",
    "expansionMilestoneId",
    "expansionKickoffReceiptId",
    "expansionKickoffId",
    "expansionWorkspaceReceiptId",
    "expansionWorkspaceId",
    "expansionRequestReceiptId",
    "expansionRequestId",
    "acceptanceReceiptId",
    "acceptanceId",
    "growthPlanReceiptId",
    "growthPlanId",
    "followUpReceiptId",
    "followUpId",
    "outcomeReceiptId",
    "outcomeId",
    "milestoneReceiptId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-expansion-growth-plan" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedExpansionGrowthPlanState === true &&
    item.appOwnedExpansionFollowUpState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-expansion-growth-plan-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-expansion-growth-plan",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-expansion-growth-plan-ready"),
    expansionGrowthPlanPath: String(item.expansionGrowthPlanPath || "service-delivery-expansion-growth-plan-ready"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP next-service growth options are ready."),
    nextAction: String(item.nextAction || "WORKSHOP will review the next repeat-service, renewal, or referral motion and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    expansionGrowthPlanReady: item.expansionGrowthPlanReady === true,
    expansionFollowUpReady: item.expansionFollowUpReady === true,
    expansionOutcomeReady: item.expansionOutcomeReady === true,
    repeatServiceReady: item.repeatServiceReady === true,
    renewalReady: item.renewalReady === true,
    referralReady: item.referralReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryExpansionGrowthPlanReceipt")
  };
};

const normalizeOfferLaunchDeliveryExpansionGrowthPlanReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryExpansionGrowthPlanReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryExpansionGrowthPlanReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryExpansionGrowthPlanReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_GROWTH_PLAN_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryExpansionGrowthPlanReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_GROWTH_PLAN_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryExpansionGrowthPlanReceiptExportState = {
  records: loadOfferLaunchDeliveryExpansionGrowthPlanReceiptExports()
};

const WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_GROWTH_PLAN_ACCEPTANCE_RECEIPT_EXPORT_KEY = "workshop.webportal.offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExports.v1";

const normalizeOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const forbiddenInternalFields = [
    "expansionGrowthPlanReceiptId",
    "expansionGrowthPlanAcceptanceId",
    "expansionGrowthPlanId",
    "expansionFollowUpReceiptId",
    "expansionFollowUpId",
    "expansionOutcomeReceiptId",
    "expansionOutcomeId",
    "expansionMilestoneReceiptId",
    "expansionMilestoneId",
    "expansionKickoffReceiptId",
    "expansionKickoffId",
    "expansionWorkspaceReceiptId",
    "expansionWorkspaceId",
    "expansionRequestReceiptId",
    "expansionRequestId",
    "acceptanceReceiptId",
    "acceptanceId",
    "growthPlanReceiptId",
    "growthPlanId",
    "followUpReceiptId",
    "followUpId",
    "outcomeReceiptId",
    "outcomeId",
    "milestoneReceiptId",
    "milestoneId",
    "kickoffReceiptId",
    "kickoffId",
    "workspaceReceiptId",
    "workspaceId",
    "setupReceiptId",
    "setupId",
    "activationReceiptId",
    "activationId",
    "sourceReceiptId",
    "intakeReceiptId",
    "launchReadinessId",
    "offerExperimentId",
    "marketingChannelExperimentId",
    "revenueReceiptId",
    "deliveryLogId",
    "cashSpeedScore",
    "laborLeverageScore",
    "proofReadinessScore",
    "marketDemandScore",
    "launchPriorityScore",
    "operatorNextAction",
    "providerGoLiveRequested",
    "paymentLiveEnabled",
    "liveProviderEnabled"
  ];
  if (forbiddenInternalFields.some((field) => Object.prototype.hasOwnProperty.call(item, field))) return null;

  const customerSafe =
    item.kind === "offer-launch-delivery-expansion-growth-plan-acceptance" &&
    (item.customerVisible === true || item.customerSafe === true) &&
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.appOwnedExpansionGrowthPlanAcceptanceState === true &&
    item.appOwnedExpansionGrowthPlanState === true &&
    item.appOwnedExpansionFollowUpState === true &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.providerGoLiveRequested !== true &&
    item.liveProviderEnabled !== true &&
    item.aiForwardCopy !== true &&
    item.japanCopyMode === "ai-neutral" &&
    item.under19GuardRequired === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "offer-launch-delivery-expansion-growth-plan-acceptance-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "submission-review"),
    packageId: String(item.packageId || "package"),
    kind: "offer-launch-delivery-expansion-growth-plan-acceptance",
    customerLabel: String(item.customerLabel || item.customer || "Launch Offer Prospect"),
    status: String(item.status || "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-ready"),
    expansionGrowthPlanAcceptancePath: String(item.expansionGrowthPlanAcceptancePath || "service-delivery-expansion-growth-plan-accepted"),
    offerLabel: String(item.offerLabel || "Launch-ready WORKSHOP offer"),
    priceLabel: String(item.priceLabel || "pricing visible after review"),
    customerSafeMessage: String(item.customerSafeMessage || "Your WORKSHOP next-service growth-plan motion has been accepted."),
    nextAction: String(item.nextAction || "WORKSHOP will prepare the accepted next-service motion and keep EPOCH timing-provider-only if scheduling becomes necessary."),
    japanCopyMode: "ai-neutral",
    expansionGrowthPlanReady: item.expansionGrowthPlanReady === true,
    expansionFollowUpReady: item.expansionFollowUpReady === true,
    expansionOutcomeReady: item.expansionOutcomeReady === true,
    repeatServiceAccepted: item.repeatServiceAccepted === true,
    renewalAccepted: item.renewalAccepted === true,
    referralAccepted: item.referralAccepted === true,
    expansionGrowthPlanAcceptanceReady: item.expansionGrowthPlanAcceptanceReady === true,
    compatibilityGateRequired: item.compatibilityGateRequired === true,
    under19GuardRequired: true,
    requiresEpochTimingRequest: item.requiresEpochTimingRequest === true,
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.OfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt")
  };
};

const normalizeOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExport)
    .filter(Boolean);
};

const loadOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_GROWTH_PLAN_ACCEPTANCE_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_GROWTH_PLAN_ACCEPTANCE_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExportState = {
  records: loadOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExports()
};

const WORKSHOP_ARA_REVIEW_STATUS_RECEIPT_EXPORT_KEY = "workshop.webportal.araReviewStatusReceiptExports.v1";

const normalizeAraReviewStatusReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.operatorReviewed === true &&
    item.araReviewComplete === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "ara-review-status-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    status: String(item.status || "customer-safe-ara-review-ready"),
    customerSafeMessage: String(item.customerSafeMessage || item.customerSafeStatus || "Your WORKSHOP service review is complete."),
    nextAction: String(item.nextAction || "Review the customer-safe service result."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.AraReviewStatusReceipt")
  };
};

const normalizeAraReviewStatusReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeAraReviewStatusReceiptExport)
    .filter(Boolean);
};

const loadAraReviewStatusReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeAraReviewStatusReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_ARA_REVIEW_STATUS_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveAraReviewStatusReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_ARA_REVIEW_STATUS_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const araReviewStatusReceiptExportState = {
  records: loadAraReviewStatusReceiptExports()
};

const WORKSHOP_ARA_MATERIALIZATION_RECEIPT_EXPORT_KEY = "workshop.webportal.araMaterializationReceiptExports.v1";

const normalizeAraMaterializationReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.operatorReviewed === true &&
    item.araReviewComplete === true &&
    item.humanReviewComplete === true &&
    item.reusableMethodReady === true &&
    item.materialAssetReady === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "ara-materialization-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    status: String(item.status || "customer-safe-ara-materialization-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "Your reviewed service method and material plan is ready for delivery tracking."),
    nextAction: String(item.nextAction || "Review the customer-safe delivery plan."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.AraMaterializationReceipt")
  };
};

const normalizeAraMaterializationReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeAraMaterializationReceiptExport)
    .filter(Boolean);
};

const loadAraMaterializationReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeAraMaterializationReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_ARA_MATERIALIZATION_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveAraMaterializationReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_ARA_MATERIALIZATION_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const araMaterializationReceiptExportState = {
  records: loadAraMaterializationReceiptExports()
};

const WORKSHOP_SERVICE_MATERIAL_REUSE_RECEIPT_EXPORT_KEY = "workshop.webportal.serviceMaterialReuseReceiptExports.v1";

const normalizeServiceMaterialReuseReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.operatorReviewed === true &&
    item.araReviewComplete === true &&
    item.humanReviewComplete === true &&
    item.reusableMethodReady === true &&
    item.materialAssetReady === true &&
    item.packageSupportReady === true &&
    item.lowLaborReuseReady === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "service-material-reuse-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "service"),
    packageId: String(item.packageId || "package"),
    status: String(item.status || "customer-safe-service-material-reuse-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "Reusable service material support is ready for this service path."),
    nextAction: String(item.nextAction || "Review the customer-safe service material plan in WORKSHOP."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.ServiceMaterialReuseReceipt")
  };
};

const normalizeServiceMaterialReuseReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizeServiceMaterialReuseReceiptExport)
    .filter(Boolean);
};

const loadServiceMaterialReuseReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizeServiceMaterialReuseReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_SERVICE_MATERIAL_REUSE_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const saveServiceMaterialReuseReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_SERVICE_MATERIAL_REUSE_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const serviceMaterialReuseReceiptExportState = {
  records: loadServiceMaterialReuseReceiptExports()
};

const WORKSHOP_PACKAGE_DELIVERY_CHECKLIST_RECEIPT_EXPORT_KEY = "workshop.webportal.packageDeliveryChecklistReceiptExports.v1";

const normalizePackageDeliveryChecklistReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.operatorReviewed === true &&
    item.araReviewComplete === true &&
    item.humanReviewComplete === true &&
    item.packageSupportReady === true &&
    item.lowLaborReuseReady === true &&
    item.checklistReady === true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "package-delivery-checklist-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "service"),
    packageId: String(item.packageId || "package"),
    status: String(item.status || "customer-safe-package-delivery-checklist-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "Package delivery preparation is ready for this service path."),
    nextAction: String(item.nextAction || "Review the customer-safe package delivery status in WORKSHOP."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.PackageDeliveryChecklistReceipt")
  };
};

const normalizePackageDeliveryChecklistReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizePackageDeliveryChecklistReceiptExport)
    .filter(Boolean);
};

const loadPackageDeliveryChecklistReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizePackageDeliveryChecklistReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_PACKAGE_DELIVERY_CHECKLIST_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const savePackageDeliveryChecklistReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_PACKAGE_DELIVERY_CHECKLIST_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const packageDeliveryChecklistReceiptExportState = {
  records: loadPackageDeliveryChecklistReceiptExports()
};

const WORKSHOP_PACKAGE_DELIVERY_CHECKLIST_AUTOMATION_RECEIPT_EXPORT_KEY = "workshop.webportal.packageDeliveryChecklistAutomationReceiptExports.v1";

const normalizePackageDeliveryChecklistAutomationReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.operatorReviewed === true &&
    item.araReviewComplete === true &&
    item.humanReviewComplete === true &&
    item.packageSupportReady === true &&
    item.lowLaborReuseReady === true &&
    item.checklistReady === true &&
    item.automationReady === true &&
    item.requiresEpochTimingRequest !== true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "package-delivery-checklist-automation-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "service"),
    packageId: String(item.packageId || "package"),
    status: String(item.status || "customer-safe-package-delivery-automation-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "Repeatable package delivery preparation is ready for this service path."),
    nextAction: String(item.nextAction || "Review the customer-safe package delivery automation status in WORKSHOP."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.PackageDeliveryChecklistAutomationReceipt")
  };
};

const normalizePackageDeliveryChecklistAutomationReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizePackageDeliveryChecklistAutomationReceiptExport)
    .filter(Boolean);
};

const loadPackageDeliveryChecklistAutomationReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizePackageDeliveryChecklistAutomationReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_PACKAGE_DELIVERY_CHECKLIST_AUTOMATION_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const savePackageDeliveryChecklistAutomationReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_PACKAGE_DELIVERY_CHECKLIST_AUTOMATION_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const packageDeliveryChecklistAutomationReceiptExportState = {
  records: loadPackageDeliveryChecklistAutomationReceiptExports()
};

const WORKSHOP_PACKAGE_DELIVERY_EXECUTION_RECEIPT_EXPORT_KEY = "workshop.webportal.packageDeliveryExecutionReceiptExports.v1";

const normalizePackageDeliveryExecutionReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.operatorReviewed === true &&
    item.araReviewComplete === true &&
    item.humanReviewComplete === true &&
    item.packageSupportReady === true &&
    item.lowLaborReuseReady === true &&
    item.checklistReady === true &&
    item.automationReady === true &&
    item.executionReady === true &&
    item.requiresEpochTimingRequest !== true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "package-delivery-execution-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "service"),
    packageId: String(item.packageId || "package"),
    status: String(item.status || "customer-safe-package-delivery-execution-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "Package delivery execution is ready for this service path."),
    nextAction: String(item.nextAction || "Review the customer-safe package delivery execution status in WORKSHOP."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.PackageDeliveryExecutionReceipt")
  };
};

const normalizePackageDeliveryExecutionReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizePackageDeliveryExecutionReceiptExport)
    .filter(Boolean);
};

const loadPackageDeliveryExecutionReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizePackageDeliveryExecutionReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_PACKAGE_DELIVERY_EXECUTION_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const savePackageDeliveryExecutionReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_PACKAGE_DELIVERY_EXECUTION_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const packageDeliveryExecutionReceiptExportState = {
  records: loadPackageDeliveryExecutionReceiptExports()
};

const WORKSHOP_PACKAGE_DELIVERY_FOLLOWUP_RENEWAL_RECEIPT_EXPORT_KEY = "workshop.webportal.packageDeliveryFollowUpRenewalReceiptExports.v1";

const normalizePackageDeliveryFollowUpRenewalReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.operatorReviewed === true &&
    item.araReviewComplete === true &&
    item.humanReviewComplete === true &&
    item.packageSupportReady === true &&
    item.lowLaborReuseReady === true &&
    item.checklistReady === true &&
    item.automationReady === true &&
    item.executionReady === true &&
    item.followUpReady === true &&
    item.renewalReady === true &&
    item.requiresEpochTimingRequest !== true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "package-delivery-followup-renewal-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "service"),
    packageId: String(item.packageId || "package"),
    status: String(item.status || "customer-safe-package-delivery-followup-renewal-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "Follow-up and renewal review is ready for this service path."),
    nextAction: String(item.nextAction || "Review the customer-safe follow-up/renewal status in WORKSHOP."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.PackageDeliveryFollowUpRenewalReceipt")
  };
};

const normalizePackageDeliveryFollowUpRenewalReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizePackageDeliveryFollowUpRenewalReceiptExport)
    .filter(Boolean);
};

const loadPackageDeliveryFollowUpRenewalReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizePackageDeliveryFollowUpRenewalReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_PACKAGE_DELIVERY_FOLLOWUP_RENEWAL_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const savePackageDeliveryFollowUpRenewalReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_PACKAGE_DELIVERY_FOLLOWUP_RENEWAL_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const packageDeliveryFollowUpRenewalReceiptExportState = {
  records: loadPackageDeliveryFollowUpRenewalReceiptExports()
};

const WORKSHOP_PACKAGE_DELIVERY_QUALITY_OUTCOME_RECEIPT_EXPORT_KEY = "workshop.webportal.packageDeliveryQualityOutcomeReceiptExports.v1";

const normalizePackageDeliveryQualityOutcomeReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.operatorReviewed === true &&
    item.araReviewComplete === true &&
    item.humanReviewComplete === true &&
    item.packageSupportReady === true &&
    item.lowLaborReuseReady === true &&
    item.checklistReady === true &&
    item.automationReady === true &&
    item.executionReady === true &&
    item.followUpReady === true &&
    item.renewalReady === true &&
    item.qualityReviewReady === true &&
    item.outcomeReady === true &&
    item.requiresEpochTimingRequest !== true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "package-delivery-quality-outcome-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "service"),
    packageId: String(item.packageId || "package"),
    status: String(item.status || "customer-safe-package-delivery-quality-outcome-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "Package delivery quality and outcome review is ready for this service path."),
    nextAction: String(item.nextAction || "Review the customer-safe quality/outcome status in WORKSHOP."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.PackageDeliveryQualityOutcomeReceipt")
  };
};

const normalizePackageDeliveryQualityOutcomeReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizePackageDeliveryQualityOutcomeReceiptExport)
    .filter(Boolean);
};

const loadPackageDeliveryQualityOutcomeReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizePackageDeliveryQualityOutcomeReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_PACKAGE_DELIVERY_QUALITY_OUTCOME_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const savePackageDeliveryQualityOutcomeReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_PACKAGE_DELIVERY_QUALITY_OUTCOME_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const packageDeliveryQualityOutcomeReceiptExportState = {
  records: loadPackageDeliveryQualityOutcomeReceiptExports()
};

const WORKSHOP_PACKAGE_DELIVERY_ACCOUNT_GROWTH_RECEIPT_EXPORT_KEY = "workshop.webportal.packageDeliveryAccountGrowthReceiptExports.v1";

const normalizePackageDeliveryAccountGrowthReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.operatorReviewed === true &&
    item.araReviewComplete === true &&
    item.humanReviewComplete === true &&
    item.packageSupportReady === true &&
    item.lowLaborReuseReady === true &&
    item.checklistReady === true &&
    item.automationReady === true &&
    item.executionReady === true &&
    item.followUpReady === true &&
    item.renewalReady === true &&
    item.qualityReviewReady === true &&
    item.outcomeReady === true &&
    item.accountGrowthReady === true &&
    item.retentionReady === true &&
    item.referralReady === true &&
    item.expansionReady === true &&
    item.requiresEpochTimingRequest !== true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "package-delivery-account-growth-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "service"),
    packageId: String(item.packageId || "package"),
    status: String(item.status || "customer-safe-package-delivery-account-growth-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "Package delivery account-growth follow-up is ready for this service path."),
    nextAction: String(item.nextAction || "Review the customer-safe account-growth status in WORKSHOP."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.PackageDeliveryAccountGrowthReceipt")
  };
};

const normalizePackageDeliveryAccountGrowthReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizePackageDeliveryAccountGrowthReceiptExport)
    .filter(Boolean);
};

const loadPackageDeliveryAccountGrowthReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizePackageDeliveryAccountGrowthReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_PACKAGE_DELIVERY_ACCOUNT_GROWTH_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const savePackageDeliveryAccountGrowthReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_PACKAGE_DELIVERY_ACCOUNT_GROWTH_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const packageDeliveryAccountGrowthReceiptExportState = {
  records: loadPackageDeliveryAccountGrowthReceiptExports()
};

const WORKSHOP_PACKAGE_DELIVERY_RETENTION_REPORT_RECEIPT_EXPORT_KEY = "workshop.webportal.packageDeliveryRetentionReportReceiptExports.v1";

const normalizePackageDeliveryRetentionReportReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.operatorReviewed === true &&
    item.araReviewComplete === true &&
    item.humanReviewComplete === true &&
    item.packageSupportReady === true &&
    item.lowLaborReuseReady === true &&
    item.checklistReady === true &&
    item.automationReady === true &&
    item.executionReady === true &&
    item.followUpReady === true &&
    item.renewalReady === true &&
    item.qualityReviewReady === true &&
    item.outcomeReady === true &&
    item.accountGrowthReady === true &&
    item.retentionReady === true &&
    item.referralReady === true &&
    item.expansionReady === true &&
    item.qualityOutcomeReceiptMatched === true &&
    item.retentionReportingReady === true &&
    item.requiresEpochTimingRequest !== true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "package-delivery-retention-report-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "service"),
    packageId: String(item.packageId || "package"),
    status: String(item.status || "customer-safe-package-delivery-retention-report-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "Package delivery retention reporting is ready for this service path."),
    nextAction: String(item.nextAction || "Review the customer-safe retention report in WORKSHOP."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.PackageDeliveryRetentionReportingReceipt")
  };
};

const normalizePackageDeliveryRetentionReportReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizePackageDeliveryRetentionReportReceiptExport)
    .filter(Boolean);
};

const loadPackageDeliveryRetentionReportReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizePackageDeliveryRetentionReportReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_PACKAGE_DELIVERY_RETENTION_REPORT_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const savePackageDeliveryRetentionReportReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_PACKAGE_DELIVERY_RETENTION_REPORT_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const packageDeliveryRetentionReportReceiptExportState = {
  records: loadPackageDeliveryRetentionReportReceiptExports()
};

const WORKSHOP_PACKAGE_DELIVERY_GROWTH_ACTION_RECEIPT_EXPORT_KEY = "workshop.webportal.packageDeliveryGrowthActionReceiptExports.v1";

const normalizePackageDeliveryGrowthActionReceiptExport = (item) => {
  if (!item || typeof item !== "object") return null;
  const customerSafe =
    item.customerSafe === true &&
    (item.webportalExportReady === true || item.customerVisibleReceiptReady === true) &&
    item.epochTimingProviderOnly === true &&
    item.workshopCalendarOwnership !== true &&
    item.monitorWorkflowExposed !== true &&
    item.paymentLiveEnabled !== true &&
    item.operatorReviewed === true &&
    item.araReviewComplete === true &&
    item.humanReviewComplete === true &&
    item.packageSupportReady === true &&
    item.lowLaborReuseReady === true &&
    item.checklistReady === true &&
    item.automationReady === true &&
    item.executionReady === true &&
    item.followUpReady === true &&
    item.renewalReady === true &&
    item.qualityReviewReady === true &&
    item.outcomeReady === true &&
    item.accountGrowthReady === true &&
    item.retentionReady === true &&
    item.referralReady === true &&
    item.expansionReady === true &&
    item.qualityOutcomeReceiptMatched === true &&
    item.retentionReportingReady === true &&
    item.growthActionReady === true &&
    item.requiresEpochTimingRequest !== true &&
    item.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    receiptId: String(item.receiptId || item.id || "package-delivery-growth-action-receipt"),
    requestId: String(item.requestId || item.serviceRequestId || "service request"),
    serviceLane: String(item.serviceLane || "service"),
    packageId: String(item.packageId || "package"),
    status: String(item.status || "customer-safe-package-delivery-growth-action-ready"),
    customerSafeMessage: String(item.customerSafeMessage || "A repeat-service, referral, or expansion action is ready for this service path."),
    nextAction: String(item.nextAction || "Review the customer-safe growth action in WORKSHOP."),
    createdAtUtc: String(item.createdAtUtc || item.recordedAt || ""),
    sourceSurface: String(item.sourceSurface || "WORKSHOP.App.PackageDeliveryGrowthActionReceipt")
  };
};

const normalizePackageDeliveryGrowthActionReceiptPayload = (payload) => {
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.receipts)
      ? payload.receipts
      : payload?.receiptId || payload?.id
        ? [payload]
        : [];
  return records
    .map(normalizePackageDeliveryGrowthActionReceiptExport)
    .filter(Boolean);
};

const loadPackageDeliveryGrowthActionReceiptExports = () => {
  const storage = getStorage();
  if (!storage) return [];
  try {
    return normalizePackageDeliveryGrowthActionReceiptPayload(JSON.parse(storage.getItem(WORKSHOP_PACKAGE_DELIVERY_GROWTH_ACTION_RECEIPT_EXPORT_KEY) || "[]"));
  } catch {
    return [];
  }
};

const savePackageDeliveryGrowthActionReceiptExports = (records) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_PACKAGE_DELIVERY_GROWTH_ACTION_RECEIPT_EXPORT_KEY, JSON.stringify(records));
};

const packageDeliveryGrowthActionReceiptExportState = {
  records: loadPackageDeliveryGrowthActionReceiptExports()
};

const byId = (id) => document.getElementById(id);

const renderStack = (targetId, items, renderItem, emptyText = "No records yet.") => {
  const target = byId(targetId);
  if (!target) return;
  target.innerHTML = items.length
    ? items.map(renderItem).join("")
    : `<p class="empty-state">${escapeHtml(emptyText)}</p>`;
};

const chip = (value) => `<span class="state-chip">${escapeHtml(value)}</span>`;

const formatJpy = (value) => Number(value || 0).toLocaleString("en-US", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0
});

const formatCountLabel = (count, singular, plural = `${singular}s`) => `${count} ${count === 1 ? singular : plural}`;

const requestFor = (requestId) => state.ledger.serviceRequests.find((item) => item.id === requestId);
const requestPackage = (request) => state.ledger.packages.find((item) => item.id === request.packageId);

const setText = (id, value) => {
  const target = byId(id);
  if (target) target.textContent = value;
};

const renderOptions = (targetId, options, selected) => {
  const target = byId(targetId);
  if (!target) return;
  target.innerHTML = options.map((option) => `
    <option value="${escapeHtml(option.value)}"${option.value === selected ? " selected" : ""}>${escapeHtml(option.label)}</option>
  `).join("");
};

const previewValue = (value) => {
  if (typeof value === "boolean") return value ? "true" : "false";
  if (value === "") return "(empty)";
  return String(value ?? "n/a");
};

const renderFieldGrid = (fields) => `
  <dl class="payload-grid">
    ${fields.map(([label, value]) => `
      <div>
        <dt>${escapeHtml(label)}</dt>
        <dd>${escapeHtml(previewValue(value))}</dd>
      </div>
    `).join("")}
  </dl>
`;

function renderStats() {
  const requests = state.ledger.serviceRequests;
  const submissions = state.ledger.submissions;
  const handoffs = state.ledger.epochTimeHandoffs;
  const eligibility = state.ledger.packageEligibility || [];
  const gates = state.ledger.compatibilityGates || [];
  const opportunities = state.ledger.crmOpportunities || [];
  const packets = state.ledger.araRevenuePackets || [];
  const assignments = state.ledger.araAssignments || [];
  const outcomes = state.ledger.revenueOutcomes || [];
  const resultReceipts = state.ledger.deliveryResultReceipts || [];
  const reviewCompletions = state.ledger.araReviewCompletions || [];
  const araReviewQueues = state.ledger.araReviewQueues || [];
  const araOperatorReviewDecisions = state.ledger.araOperatorReviewDecisions || [];
  const araReviewStatusReceipts = state.ledger.araReviewStatusReceipts || [];
  const araMethodMaterializations = state.ledger.araMethodMaterializations || [];
  const araMaterializationReceipts = state.ledger.araMaterializationReceipts || [];
  const serviceMaterialReuseRecords = state.ledger.serviceMaterialReuseRecords || [];
  const serviceMaterialReuseReceipts = state.ledger.serviceMaterialReuseReceipts || [];
  const packageDeliveryChecklists = state.ledger.packageDeliveryChecklists || [];
  const packageDeliveryChecklistReceipts = state.ledger.packageDeliveryChecklistReceipts || [];
  const packageDeliveryChecklistAutomations = state.ledger.packageDeliveryChecklistAutomations || [];
  const packageDeliveryChecklistAutomationReceipts = state.ledger.packageDeliveryChecklistAutomationReceipts || [];
  const packageDeliveryExecutions = state.ledger.packageDeliveryExecutions || [];
  const packageDeliveryExecutionReceipts = state.ledger.packageDeliveryExecutionReceipts || [];
  const packageDeliveryFollowUpRenewals = state.ledger.packageDeliveryFollowUpRenewals || [];
  const packageDeliveryFollowUpRenewalReceipts = state.ledger.packageDeliveryFollowUpRenewalReceipts || [];
  const packageDeliveryQualityOutcomes = state.ledger.packageDeliveryQualityOutcomes || [];
  const packageDeliveryQualityOutcomeReceipts = state.ledger.packageDeliveryQualityOutcomeReceipts || [];
  const packageDeliveryAccountGrowthLinkages = state.ledger.packageDeliveryAccountGrowthLinkages || [];
  const packageDeliveryAccountGrowthReceipts = state.ledger.packageDeliveryAccountGrowthReceipts || [];
  const packageDeliveryRetentionReports = state.ledger.packageDeliveryRetentionReports || [];
  const packageDeliveryRetentionReportReceipts = state.ledger.packageDeliveryRetentionReportReceipts || [];
  const packageDeliveryGrowthActions = state.ledger.packageDeliveryGrowthActions || [];
  const packageDeliveryGrowthActionReceipts = state.ledger.packageDeliveryGrowthActionReceipts || [];
  const accounts = state.ledger.customerAccounts || [];
  const renewals = state.ledger.renewalOpportunities || [];
  const followUps = state.ledger.customerFollowUps || [];
  const retention = state.ledger.retentionHealth || [];
  const referrals = state.ledger.referralOpportunities || [];
  const growthPlans = state.ledger.accountGrowthPlans || [];
  const growthReceipts = state.ledger.growthFollowUpReceipts || [];
  const referralConversions = state.ledger.referralConversions || [];
  const growthAcceptances = state.ledger.growthPlanAcceptances || [];
  const expansionRequests = state.ledger.expansionServiceRequests || [];
  const conversionStatuses = state.ledger.conversionStatusEvents || [];
  const conversionReceipts = state.ledger.conversionReceipts || [];
  const cohortCapacityPlans = state.ledger.cohortCapacityPlans || [];
  const subscriptionPlans = state.ledger.subscriptionPlans || [];
  const cohortPlanningReceipts = state.ledger.cohortPlanningReceipts || [];
  const cohortEnrollments = state.ledger.cohortEnrollments || [];
  const subscriptionLifecycles = state.ledger.subscriptionLifecycles || [];
  const subscriptionLifecycleReceipts = state.ledger.subscriptionLifecycleReceipts || [];
  const cohortOutcomeReports = state.ledger.cohortOutcomeReports || [];
  const subscriptionRenewalReports = state.ledger.subscriptionRenewalReports || [];
  const cohortProgressStatusEvents = state.ledger.cohortProgressStatusEvents || [];
  const outcomeRenewalReceipts = state.ledger.outcomeRenewalReceipts || [];
  const timingReturnPayloads = state.ledger.epochTimingReturnPayloads || [];
  const timingReturnConsumptions = state.ledger.epochTimingReturnConsumptions || [];
  const timingReturnReceipts = state.ledger.timingReturnReceipts || [];
  const revisedTimingPayloads = state.ledger.epochRevisedCalendarTimingPayloads || [];
  const revisedTimingConsumptions = state.ledger.epochRevisedCalendarTimingConsumptions || [];
  const revisedTimingReceipts = state.ledger.revisedCalendarTimingReceipts || [];
  const timingAwareFollowUps = state.ledger.timingAwareServiceFollowUps || [];
  const timingAwareRenewalReceipts = state.ledger.timingAwareRenewalReceipts || [];
  const deliveryOutcomeAutomations = state.ledger.deliveryOutcomeAutomations || [];
  const deliveryOutcomeAutomationReceipts = state.ledger.deliveryOutcomeAutomationReceipts || [];
  const accountGrowthAutomations = state.ledger.accountGrowthAutomations || [];
  const accountGrowthAutomationReceipts = state.ledger.accountGrowthAutomationReceipts || [];
  const capacityWaitlistPayloads = state.ledger.epochCapacityWaitlistPayloads || [];
  const capacityWaitlistConsumptions = state.ledger.epochCapacityWaitlistConsumptions || [];
  const capacityWaitlistReceipts = state.ledger.capacityWaitlistReceipts || [];
  const recurringSeriesPayloads = state.ledger.epochRecurringSeriesPayloads || [];
  const recurringSeriesConsumptions = state.ledger.epochRecurringSeriesConsumptions || [];
  const recurringSeriesReceipts = state.ledger.recurringSeriesReceipts || [];
  const offerExperiments = state.ledger.offerExperiments || [];
  const laborEstimates = state.ledger.laborEstimates || [];
  const revenueAuditRecords = state.ledger.revenueAuditRecords || [];
  const revenueReceipts = state.ledger.revenueReceipts || [];
  const deliveryLogEntries = state.ledger.deliveryLogEntries || [];
  const marketResearchRecords = state.ledger.marketResearchRecords || [];
  const servicePages = state.ledger.servicePages || [];
  const materialAssets = state.ledger.materialAssets || [];
  const marketingChannelExperiments = state.ledger.marketingChannelExperiments || [];
  const offerLaunchReadinessRecords = state.ledger.offerLaunchReadinessRecords || [];
  const offerLaunchReadinessReceipts = state.ledger.offerLaunchReadinessReceipts || [];
  const offerLaunchIntakeActions = state.ledger.offerLaunchIntakeActions || [];
  const offerLaunchIntakeReceipts = state.ledger.offerLaunchIntakeReceipts || [];
  const offerLaunchActivations = state.ledger.offerLaunchActivations || [];
  const offerLaunchActivationReceipts = state.ledger.offerLaunchActivationReceipts || [];
  const offerLaunchServiceSetups = state.ledger.offerLaunchServiceSetups || [];
  const offerLaunchServiceSetupReceipts = state.ledger.offerLaunchServiceSetupReceipts || [];
  const offerLaunchDeliveryWorkspaces = state.ledger.offerLaunchDeliveryWorkspaces || [];
  const offerLaunchDeliveryWorkspaceReceipts = state.ledger.offerLaunchDeliveryWorkspaceReceipts || [];
  const offerLaunchDeliveryKickoffs = state.ledger.offerLaunchDeliveryKickoffs || [];
  const offerLaunchDeliveryKickoffReceipts = state.ledger.offerLaunchDeliveryKickoffReceipts || [];
  const offerLaunchDeliveryMilestones = state.ledger.offerLaunchDeliveryMilestones || [];
  const offerLaunchDeliveryMilestoneReceipts = state.ledger.offerLaunchDeliveryMilestoneReceipts || [];
  const offerLaunchDeliveryOutcomes = state.ledger.offerLaunchDeliveryOutcomes || [];
  const offerLaunchDeliveryOutcomeReceipts = state.ledger.offerLaunchDeliveryOutcomeReceipts || [];
  const offerLaunchDeliveryFollowUps = state.ledger.offerLaunchDeliveryFollowUps || [];
  const offerLaunchDeliveryFollowUpReceipts = state.ledger.offerLaunchDeliveryFollowUpReceipts || [];
  const offerLaunchDeliveryGrowthPlans = state.ledger.offerLaunchDeliveryGrowthPlans || [];
  const offerLaunchDeliveryGrowthPlanReceipts = state.ledger.offerLaunchDeliveryGrowthPlanReceipts || [];
  const offerLaunchDeliveryGrowthPlanAcceptances = state.ledger.offerLaunchDeliveryGrowthPlanAcceptances || [];
  const offerLaunchDeliveryGrowthPlanAcceptanceReceipts = state.ledger.offerLaunchDeliveryGrowthPlanAcceptanceReceipts || [];
  const offerLaunchDeliveryExpansionRequests = state.ledger.offerLaunchDeliveryExpansionRequests || [];
  const offerLaunchDeliveryExpansionRequestReceipts = state.ledger.offerLaunchDeliveryExpansionRequestReceipts || [];
  const offerLaunchDeliveryExpansionWorkspaces = state.ledger.offerLaunchDeliveryExpansionWorkspaces || [];
  const offerLaunchDeliveryExpansionWorkspaceReceipts = state.ledger.offerLaunchDeliveryExpansionWorkspaceReceipts || [];
  const offerLaunchDeliveryExpansionKickoffs = state.ledger.offerLaunchDeliveryExpansionKickoffs || [];
  const offerLaunchDeliveryExpansionKickoffReceipts = state.ledger.offerLaunchDeliveryExpansionKickoffReceipts || [];
  const offerLaunchDeliveryExpansionMilestones = state.ledger.offerLaunchDeliveryExpansionMilestones || [];
  const offerLaunchDeliveryExpansionMilestoneReceipts = state.ledger.offerLaunchDeliveryExpansionMilestoneReceipts || [];
  const offerLaunchDeliveryExpansionOutcomes = state.ledger.offerLaunchDeliveryExpansionOutcomes || [];
  const offerLaunchDeliveryExpansionOutcomeReceipts = state.ledger.offerLaunchDeliveryExpansionOutcomeReceipts || [];
  const offerLaunchDeliveryExpansionFollowUps = state.ledger.offerLaunchDeliveryExpansionFollowUps || [];
  const offerLaunchDeliveryExpansionFollowUpReceipts = state.ledger.offerLaunchDeliveryExpansionFollowUpReceipts || [];
  const offerLaunchDeliveryExpansionGrowthPlans = state.ledger.offerLaunchDeliveryExpansionGrowthPlans || [];
  const offerLaunchDeliveryExpansionGrowthPlanReceipts = state.ledger.offerLaunchDeliveryExpansionGrowthPlanReceipts || [];
  const offerLaunchDeliveryExpansionGrowthPlanAcceptances = state.ledger.offerLaunchDeliveryExpansionGrowthPlanAcceptances || [];
  const offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts = state.ledger.offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts || [];
  const roiRecords = state.ledger.roiRecords || [];
  const araWorkPackets = state.ledger.araWorkPackets || [];
  const ownerTimeBudgets = state.ledger.ownerTimeBudgets || [];
  const totalValue = requests.reduce((sum, item) => sum + Number(item.valueJpy || 0), 0);
  const activeRequestCount = requests.filter((item) => !["complete", "canceled"].includes(item.status)).length;
  const visiblePackageDeliveryReceiptCount =
    packageDeliveryChecklistReceipts.filter((item) => item.customerVisible).length +
    packageDeliveryChecklistAutomationReceipts.filter((item) => item.customerVisible).length +
    packageDeliveryExecutionReceipts.filter((item) => item.customerVisible).length +
    packageDeliveryFollowUpRenewalReceipts.filter((item) => item.customerVisible).length +
    packageDeliveryQualityOutcomeReceipts.filter((item) => item.customerVisible).length +
    packageDeliveryAccountGrowthReceipts.filter((item) => item.customerVisible).length +
    packageDeliveryRetentionReportReceipts.filter((item) => item.customerVisible).length +
    packageDeliveryGrowthActionReceipts.filter((item) => item.customerVisible).length;
  const lowLaborOfferCount = offerExperiments.filter((item) => Number(item.lowLaborScore || 0) >= 80).length;
  setText("workflow-active-requests", formatCountLabel(activeRequestCount, "active", "active"));
  setText("workflow-submissions", formatCountLabel(submissions.length, "queued", "queued"));
  setText("workflow-package-delivery", formatCountLabel(visiblePackageDeliveryReceiptCount, "ready", "ready"));
  setText("workflow-growth-actions", formatCountLabel(packageDeliveryGrowthActions.length, "action"));
  setText("workflow-epoch-handoffs", formatCountLabel(handoffs.length, "staged", "staged"));
  setText("workflow-offer-tests", formatCountLabel(lowLaborOfferCount, "ready", "ready"));
  setText("stat-active-requests", String(activeRequestCount));
  setText("stat-submissions", String(submissions.length));
  setText("stat-epoch-handoffs", String(handoffs.length));
  setText("stat-pipeline-value", formatJpy(totalValue));
  setText("stat-offer-ready", String(eligibility.filter((item) => item.customerOfferReady).length));
  setText("stat-compatibility-gates", String(gates.filter((item) => item.blocksAutoAcceptance).length));
  setText("stat-crm-opportunities", String(opportunities.filter((item) => item.qualified).length));
  setText("stat-ara-packets", String(packets.length));
  setText("stat-ara-assignments", String(assignments.filter((item) => item.reviewRequired).length));
  setText("stat-revenue-outcomes", String(outcomes.length));
  setText("stat-result-receipts", String(resultReceipts.filter((item) => item.customerVisible).length));
  setText("stat-review-complete", String(reviewCompletions.filter((item) => item.reviewComplete).length));
  setText("stat-ara-review-queues", String(araReviewQueues.length));
  setText("stat-ara-review-decisions", String(araOperatorReviewDecisions.filter((item) => item.operatorReviewed).length));
  setText("stat-ara-review-status-receipts", String(araReviewStatusReceipts.filter((item) => item.customerVisible).length));
  setText("stat-ara-method-materializations", String(araMethodMaterializations.length));
  setText("stat-ara-materialization-receipts", String(araMaterializationReceipts.filter((item) => item.customerVisible).length));
  setText("stat-service-material-reuse", String(serviceMaterialReuseRecords.length));
  setText("stat-service-material-reuse-receipts", String(serviceMaterialReuseReceipts.filter((item) => item.customerVisible).length));
  setText("stat-package-delivery-checklists", String(packageDeliveryChecklists.length));
  setText("stat-package-delivery-checklist-receipts", String(packageDeliveryChecklistReceipts.filter((item) => item.customerVisible).length));
  setText("stat-package-delivery-checklist-automations", String(packageDeliveryChecklistAutomations.length));
  setText("stat-package-delivery-checklist-automation-receipts", String(packageDeliveryChecklistAutomationReceipts.filter((item) => item.customerVisible).length));
  setText("stat-package-delivery-executions", String(packageDeliveryExecutions.length));
  setText("stat-package-delivery-execution-receipts", String(packageDeliveryExecutionReceipts.filter((item) => item.customerVisible).length));
  setText("stat-package-delivery-followup-renewals", String(packageDeliveryFollowUpRenewals.length));
  setText("stat-package-delivery-followup-renewal-receipts", String(packageDeliveryFollowUpRenewalReceipts.filter((item) => item.customerVisible).length));
  setText("stat-package-delivery-quality-outcomes", String(packageDeliveryQualityOutcomes.length));
  setText("stat-package-delivery-quality-outcome-receipts", String(packageDeliveryQualityOutcomeReceipts.filter((item) => item.customerVisible).length));
  setText("stat-package-delivery-account-growth-linkages", String(packageDeliveryAccountGrowthLinkages.length));
  setText("stat-package-delivery-account-growth-receipts", String(packageDeliveryAccountGrowthReceipts.filter((item) => item.customerVisible).length));
  setText("stat-package-delivery-retention-reports", String(packageDeliveryRetentionReports.length));
  setText("stat-package-delivery-retention-report-receipts", String(packageDeliveryRetentionReportReceipts.filter((item) => item.customerVisible).length));
  setText("stat-package-delivery-growth-actions", String(packageDeliveryGrowthActions.length));
  setText("stat-package-delivery-growth-action-receipts", String(packageDeliveryGrowthActionReceipts.filter((item) => item.customerVisible).length));
  setText("stat-customer-accounts", String(accounts.filter((item) => item.customerVisible).length));
  setText("stat-renewal-ready", String(renewals.filter((item) => item.renewalReady).length));
  setText("stat-follow-ups", String(followUps.length));
  setText("stat-retention-healthy", String(retention.filter((item) => item.growthReady).length));
  setText("stat-referral-ready", String(referrals.filter((item) => item.referralReady).length));
  setText("stat-growth-plans", String(growthPlans.filter((item) => item.growthReady).length));
  setText("stat-growth-receipts", String(growthReceipts.length));
  setText("stat-conversions-ready", String(referralConversions.filter((item) => item.conversionReady).length));
  setText("stat-growth-accepted", String(growthAcceptances.filter((item) => item.accepted).length));
  setText("stat-expansion-requests", String(expansionRequests.length));
  setText("stat-conversion-statuses", String(conversionStatuses.filter((item) => item.customerVisible).length));
  setText("stat-conversion-receipts", String(conversionReceipts.length));
  setText("stat-cohort-capacity-plans", String(cohortCapacityPlans.length));
  setText("stat-subscription-plans", String(subscriptionPlans.length));
  setText("stat-cohort-planning-receipts", String(cohortPlanningReceipts.length));
  setText("stat-cohort-enrollments", String(cohortEnrollments.length));
  setText("stat-subscription-lifecycles", String(subscriptionLifecycles.length));
  setText("stat-subscription-lifecycle-receipts", String(subscriptionLifecycleReceipts.length));
  setText("stat-cohort-outcomes", String(cohortOutcomeReports.length));
  setText("stat-renewal-reports", String(subscriptionRenewalReports.filter((item) => item.renewalReady).length));
  setText("stat-progress-events", String(cohortProgressStatusEvents.filter((item) => item.customerVisible).length));
  setText("stat-outcome-renewal-receipts", String(outcomeRenewalReceipts.length));
  setText("stat-timing-returns", String(timingReturnPayloads.length));
  setText("stat-timing-consumed", String(timingReturnConsumptions.length));
  setText("stat-timing-return-receipts", String(timingReturnReceipts.length));
  setText("stat-revised-timing-payloads", String(revisedTimingPayloads.length));
  setText("stat-revised-timing-consumed", String(revisedTimingConsumptions.length));
  setText("stat-revised-timing-receipts", String(revisedTimingReceipts.length));
  setText("stat-timing-aware-follow-ups", String(timingAwareFollowUps.length));
  setText("stat-timing-aware-renewals", String(timingAwareRenewalReceipts.length));
  setText("stat-delivery-outcome-automations", String(deliveryOutcomeAutomations.length));
  setText("stat-delivery-outcome-automation-receipts", String(deliveryOutcomeAutomationReceipts.filter((item) => item.customerVisible).length));
  setText("stat-account-growth-automations", String(accountGrowthAutomations.length));
  setText("stat-account-growth-automation-receipts", String(accountGrowthAutomationReceipts.filter((item) => item.customerVisible).length));
  setText("stat-capacity-payloads", String(capacityWaitlistPayloads.length));
  setText("stat-capacity-consumed", String(capacityWaitlistConsumptions.length));
  setText("stat-capacity-receipts", String(capacityWaitlistReceipts.length));
  setText("stat-recurring-series-payloads", String(recurringSeriesPayloads.length));
  setText("stat-recurring-consumed", String(recurringSeriesConsumptions.length));
  setText("stat-recurring-receipts", String(recurringSeriesReceipts.length));
  setText("stat-offer-experiments", String(offerExperiments.length));
  setText("stat-low-labor-ready", String(lowLaborOfferCount));
  setText("stat-labor-traps", String(laborEstimates.filter((item) => item.laborTrapWarning).length));
  setText("stat-revenue-audits", String(revenueAuditRecords.length));
  setText("stat-revenue-receipts", String(revenueReceipts.length));
  setText("stat-delivery-logs", String(deliveryLogEntries.length));
  setText("stat-market-evidence", String(marketResearchRecords.length));
  setText("stat-service-pages", String(servicePages.filter((item) => item.customerVisible).length));
  setText("stat-material-assets", String(materialAssets.length));
  setText("stat-marketing-channels", String(marketingChannelExperiments.length));
  setText("stat-offer-launch-readiness", String(offerLaunchReadinessRecords.filter((item) => item.customerSafeForReceipt).length));
  setText("stat-offer-launch-receipts", String(offerLaunchReadinessReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-intake-actions", String(offerLaunchIntakeActions.length));
  setText("stat-offer-launch-intake-receipts", String(offerLaunchIntakeReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-activations", String(offerLaunchActivations.length));
  setText("stat-offer-launch-activation-receipts", String(offerLaunchActivationReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-service-setups", String(offerLaunchServiceSetups.length));
  setText("stat-offer-launch-service-setup-receipts", String(offerLaunchServiceSetupReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-workspaces", String(offerLaunchDeliveryWorkspaces.length));
  setText("stat-offer-launch-delivery-workspace-receipts", String(offerLaunchDeliveryWorkspaceReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-kickoffs", String(offerLaunchDeliveryKickoffs.length));
  setText("stat-offer-launch-delivery-kickoff-receipts", String(offerLaunchDeliveryKickoffReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-milestones", String(offerLaunchDeliveryMilestones.length));
  setText("stat-offer-launch-delivery-milestone-receipts", String(offerLaunchDeliveryMilestoneReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-outcomes", String(offerLaunchDeliveryOutcomes.length));
  setText("stat-offer-launch-delivery-outcome-receipts", String(offerLaunchDeliveryOutcomeReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-follow-ups", String(offerLaunchDeliveryFollowUps.length));
  setText("stat-offer-launch-delivery-follow-up-receipts", String(offerLaunchDeliveryFollowUpReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-growth-plans", String(offerLaunchDeliveryGrowthPlans.length));
  setText("stat-offer-launch-delivery-growth-plan-receipts", String(offerLaunchDeliveryGrowthPlanReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-growth-plan-acceptances", String(offerLaunchDeliveryGrowthPlanAcceptances.length));
  setText("stat-offer-launch-delivery-growth-plan-acceptance-receipts", String(offerLaunchDeliveryGrowthPlanAcceptanceReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-expansion-requests", String(offerLaunchDeliveryExpansionRequests.length));
  setText("stat-offer-launch-delivery-expansion-request-receipts", String(offerLaunchDeliveryExpansionRequestReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-expansion-workspaces", String(offerLaunchDeliveryExpansionWorkspaces.length));
  setText("stat-offer-launch-delivery-expansion-workspace-receipts", String(offerLaunchDeliveryExpansionWorkspaceReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-expansion-kickoffs", String(offerLaunchDeliveryExpansionKickoffs.length));
  setText("stat-offer-launch-delivery-expansion-kickoff-receipts", String(offerLaunchDeliveryExpansionKickoffReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-expansion-milestones", String(offerLaunchDeliveryExpansionMilestones.length));
  setText("stat-offer-launch-delivery-expansion-milestone-receipts", String(offerLaunchDeliveryExpansionMilestoneReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-expansion-outcomes", String(offerLaunchDeliveryExpansionOutcomes.length));
  setText("stat-offer-launch-delivery-expansion-outcome-receipts", String(offerLaunchDeliveryExpansionOutcomeReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-expansion-follow-ups", String(offerLaunchDeliveryExpansionFollowUps.length));
  setText("stat-offer-launch-delivery-expansion-follow-up-receipts", String(offerLaunchDeliveryExpansionFollowUpReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-expansion-growth-plans", String(offerLaunchDeliveryExpansionGrowthPlans.length));
  setText("stat-offer-launch-delivery-expansion-growth-plan-receipts", String(offerLaunchDeliveryExpansionGrowthPlanReceipts.filter((item) => item.customerVisible).length));
  setText("stat-offer-launch-delivery-expansion-growth-plan-acceptances", String(offerLaunchDeliveryExpansionGrowthPlanAcceptances.length));
  setText("stat-offer-launch-delivery-expansion-growth-plan-acceptance-receipts", String(offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts.filter((item) => item.customerVisible).length));
  setText("stat-roi-ready", String(roiRecords.filter((item) => item.approvedForTest).length));
  setText("stat-ara-work-packets", String(araWorkPackets.length));
  setText("stat-owner-budget", ownerTimeBudgets.some((item) => item.laborTrapWarning) ? "warning" : "clear");
}

function renderRevenueLanes() {
  renderStack("revenue-lanes", state.ledger.serviceRequests, (item) => {
    const pkg = requestPackage(item);
    return `
      <article class="lane-card">
        <div>
          <strong>${escapeHtml(serviceLaneLabel(item.lane))}</strong>
          <p>${escapeHtml(item.summary)}</p>
          <small>${escapeHtml(item.customer)} / ${escapeHtml(pkg?.title || item.packageId)}</small>
        </div>
        <div class="lane-meta">
          ${chip(item.status)}
          <span>${formatJpy(item.valueJpy)}</span>
        </div>
      </article>
    `;
  });
}

function renderRequests() {
  renderStack("service-request-list", state.ledger.serviceRequests, (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.customer)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${escapeHtml(serviceLaneLabel(item.lane))}${item.ageBand === "under-19" ? " / compatibility review" : ""}</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.epochTimeNeeded ? "EPOCH timing" : "WORKSHOP only"}</span>
      </div>
    </article>
  `);
}

function renderSubmissions() {
  renderStack("submission-queue", state.ledger.submissions, (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(request?.customer || item.requestId)} / ${item.customerVisible ? "customer visible" : "operator only"}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction || "Assign delivery owner.")}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.due)}</span>
        </div>
      </article>
    `;
  });
}

function renderPackages() {
  const renderPackage = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.price)}</span>
      <small>${escapeHtml(item.detail)}</small>
      <small>${item.lowerLabor ? "submission/cohort/system leverage" : "premium live component"}</small>
    </article>
  `;
  renderStack("package-catalog", state.ledger.packages, renderPackage);
  renderStack("portal-packages", state.ledger.packages, (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.detail)}</p>
      </div>
      <span>${escapeHtml(item.price)}</span>
    </article>
  `);
}

function renderRevenueOperatingSystem() {
  renderStack("market-research-list", state.ledger.marketResearchRecords || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.segment)}</strong>
      <span>${escapeHtml(item.sourceLabel)} - confidence ${escapeHtml(item.confidenceScore)}</span>
      <small>${escapeHtml(item.observedGap)}</small>
    </article>
  `, "No market evidence records yet.");

  renderStack("competitor-price-anchor-list", state.ledger.competitorPriceAnchors || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.competitor)}</strong>
      <span>${formatJpy(item.lowPriceJpy)} to ${formatJpy(item.premiumPriceJpy)}</span>
      <small>${escapeHtml(item.offerLabel)}</small>
    </article>
  `, "No competitor price anchors yet.");

  renderStack("offer-experiment-list", state.ledger.offerExperiments || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel)}</strong>
        <p>${escapeHtml(item.nextAction)}</p>
        <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${escapeHtml(item.expectedOperatorMinutes)} operator minutes</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${formatJpy(item.expectedMonthlyRevenueJpy)}</span>
      </div>
    </article>
  `, "No offer experiments yet.");

  renderStack("labor-estimate-list", state.ledger.laborEstimates || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerExperimentId)}</strong>
      <span>${escapeHtml(item.laborTrapWarning ? "labor trap warning" : "lower-labor path")}</span>
      <small>${escapeHtml(item.liveMinutes)} live / ${escapeHtml(item.reviewMinutes)} review / ${escapeHtml(item.araMinutesSaved)} ARA-saved minutes</small>
    </article>
  `, "No labor estimates yet.");

  renderStack("roi-record-list", state.ledger.roiRecords || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerExperimentId)}</strong>
      <span>${escapeHtml(item.approvedForTest ? "test ready" : "hold")}</span>
      <small>${formatJpy(item.expectedRevenueJpy)} revenue / ${formatJpy(item.expectedCostJpy)} cost / ${escapeHtml(item.paybackDays)} days payback</small>
    </article>
  `, "No ROI records yet.");

  renderStack("revenue-audit-list", state.ledger.revenueAuditRecords || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.linkedOfferId)}</strong>
      <span>${escapeHtml(item.status)} - ${escapeHtml(item.lowLaborViable ? "low-labor viable" : "labor trap")}</span>
      <small>${escapeHtml(item.summary)}</small>
    </article>
  `, "No revenue audit records yet.");

  renderStack("revenue-receipt-list", state.ledger.revenueReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.kind)}</strong>
      <span>${escapeHtml(item.status)} - ${escapeHtml(item.linkedRecordId)}</span>
      <small>${escapeHtml(item.summary)}</small>
    </article>
  `, "No revenue receipts yet.");

  renderStack("delivery-log-list", state.ledger.deliveryLogEntries || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.eventKind)}</strong>
      <span>${escapeHtml(item.status)} - ${escapeHtml(item.serviceRequestId)}</span>
      <small>${escapeHtml(item.summary)}</small>
    </article>
  `, "No delivery log entries yet.");

  renderStack("revenue-search-query-list", state.ledger.revenueSearchQueries || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.query)}</strong>
      <span>${escapeHtml(item.role)} - ${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.customerSafeOnly ? "customer-safe only" : "owner/admin search")}</small>
    </article>
  `, "No revenue search queries yet.");

  renderStack("revenue-search-result-list", state.ledger.revenueSearchResults || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.displayLabel)}</strong>
      <span>${escapeHtml(item.recordKind)} - ${escapeHtml(item.recordId)}</span>
      <small>Customer-safe result: ${escapeHtml(item.customerVisible ? "yes" : "no")}</small>
    </article>
  `, "No revenue search results yet.");

  renderStack("offer-template-list", state.ledger.offerTemplates || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${escapeHtml(item.under19GuardRequired ? "under-19 guarded" : "adult/business path")}</small>
      </div>
      <div class="item-meta">
        ${chip("template")}
        <span>${escapeHtml(item.defaultPriceLabel)}</span>
      </div>
    </article>
  `, "No offer templates yet.");

  renderStack("service-page-list", state.ledger.servicePages || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.promise)}</p>
        <small>${escapeHtml(item.audience)} / ${escapeHtml(item.deliveryType || "service")} / ${escapeHtml(item.priceLabel || "price on request")} / ${escapeHtml(item.japanCopyMode)} / ${escapeHtml(item.publicStatus)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.customerVisible && item.webportalExportReady !== false ? "public-safe" : "internal")}
        <span>${escapeHtml(item.intakeCta)}</span>
      </div>
    </article>
  `, "No service pages yet.");

  renderStack("material-asset-list", state.ledger.materialAssets || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.assetKind)} / ${escapeHtml(item.assetFormat || "asset")} / reuse ${escapeHtml(item.reuseCount)} / saves ${escapeHtml(item.expectedTimeSavedMinutes || 0)} min / ${escapeHtml(item.lowLaborLeverage)} leverage</span>
      <small>${escapeHtml(item.customerSafeSummary)}</small>
      <small>${escapeHtml(item.operatorNextAction || "Review the material asset inside WORKSHOP before customer-visible use.")}</small>
    </article>
  `, "No material assets yet.");

  renderStack("marketing-channel-experiment-list", state.ledger.marketingChannelExperiments || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.channel)}</strong>
      <span>${escapeHtml(item.status)} / ${escapeHtml(item.targetSegment)} / ${escapeHtml(item.expectedLeadsPerMonth)} leads/mo / ${escapeHtml(item.expectedConversionRatePercent)}% conversion / ${formatJpy(item.expectedMonthlyRevenueJpy)}</span>
      <small>${escapeHtml(item.nextAction || "Review the channel experiment inside WORKSHOP before outreach.")}</small>
      <small>${escapeHtml(item.aiForwardCopy ? "AI-forward blocked" : "AI-neutral")} / ${escapeHtml(item.webportalExportReady ? "public export" : "App-owned internal")}</small>
    </article>
  `, "No marketing channel experiments yet.");

  renderStack("offer-launch-readiness-list", state.ledger.offerLaunchReadinessRecords || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(serviceLaneLabel(item.lane))} Launch Readiness</strong>
        <p>${escapeHtml(item.operatorNextAction)}</p>
        <small>${escapeHtml(item.launchStage)} / rank ${escapeHtml(item.launchPriorityRank)} / ${escapeHtml(item.timeToCashDays)} day time-to-cash / ${escapeHtml(item.japanCopyMode)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.customerSafeForReceipt ? "receipt-ready" : "review")}
        <span>${escapeHtml(item.launchPriorityScore)} launch score</span>
        <span>${escapeHtml(item.aiForwardCopy ? "AI-forward blocked" : "AI-neutral")}</span>
      </div>
    </article>
  `, "No offer launch readiness records yet.");

  renderStack("offer-launch-readiness-receipt-list", state.ledger.offerLaunchReadinessReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel)}</strong>
      <span>${escapeHtml(item.status)} / ${escapeHtml(item.publicStatus)} / ${escapeHtml(item.priceLabel)}</span>
      <small>${escapeHtml(item.customerSafeMessage)}</small>
    </article>
  `, "No customer-safe offer launch receipts yet.");

  renderStack("offer-launch-intake-action-list", state.ledger.offerLaunchIntakeActions || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer intake")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer intake is queued.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Review the intake request inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-intake-queued")}
        <span>${escapeHtml(item.compatibilityGateRequired ? "fit review required" : "intake queued")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch intake actions yet.");

  renderStack("offer-launch-intake-receipt-list", state.ledger.offerLaunchIntakeReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer intake")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-intake-queued")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP offer request is queued for intake review.")}</small>
    </article>
  `, "No customer-safe offer launch intake receipts yet.");

  renderStack("offer-launch-activation-list", state.ledger.offerLaunchActivations || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer activation")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer activation is waiting for service setup review.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Prepare service setup inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-activation-ready")}
        <span>${escapeHtml(item.activationReady ? "activation ready" : "fit review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch activation records yet.");

  renderStack("offer-launch-activation-receipt-list", state.ledger.offerLaunchActivationReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer activation")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-activation-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP offer path is accepted for service setup.")}</small>
    </article>
  `, "No customer-safe offer launch activation receipts yet.");

  renderStack("offer-launch-service-setup-list", state.ledger.offerLaunchServiceSetups || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer service setup")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer service setup is waiting for delivery workspace review.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Prepare the service setup workspace inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-service-setup-ready")}
        <span>${escapeHtml(item.setupReady ? "setup ready" : "fit review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch service setup records yet.");

  renderStack("offer-launch-service-setup-receipt-list", state.ledger.offerLaunchServiceSetupReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer service setup")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-service-setup-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP service setup is prepared.")}</small>
    </article>
  `, "No customer-safe offer launch service setup receipts yet.");

  renderStack("offer-launch-delivery-workspace-list", state.ledger.offerLaunchDeliveryWorkspaces || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery workspace")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery workspace is waiting for workspace activation review.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Prepare the delivery workspace inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-workspace-ready")}
        <span>${escapeHtml(item.workspaceReady ? "workspace ready" : "fit review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery workspace records yet.");

  renderStack("offer-launch-delivery-workspace-receipt-list", state.ledger.offerLaunchDeliveryWorkspaceReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery workspace")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-workspace-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP delivery workspace is ready.")}</small>
    </article>
  `, "No customer-safe offer launch delivery workspace receipts yet.");

  renderStack("offer-launch-delivery-kickoff-list", state.ledger.offerLaunchDeliveryKickoffs || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery kickoff")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery kickoff is waiting for kickoff review.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Begin the first delivery milestone inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-kickoff-ready")}
        <span>${escapeHtml(item.kickoffReady ? "kickoff ready" : "fit review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery kickoff records yet.");

  renderStack("offer-launch-delivery-kickoff-receipt-list", state.ledger.offerLaunchDeliveryKickoffReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery kickoff")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-kickoff-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP delivery kickoff is ready.")}</small>
    </article>
  `, "No customer-safe offer launch delivery kickoff receipts yet.");

  renderStack("offer-launch-delivery-milestone-list", state.ledger.offerLaunchDeliveryMilestones || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery milestone")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery milestone is waiting for milestone review.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Continue the first delivery milestone inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-milestone-active")}
        <span>${escapeHtml(item.milestoneReady ? "milestone active" : "fit review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery milestone records yet.");

  renderStack("offer-launch-delivery-milestone-receipt-list", state.ledger.offerLaunchDeliveryMilestoneReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery milestone")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-milestone-active")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your first WORKSHOP delivery milestone is active.")}</small>
    </article>
  `, "No customer-safe offer launch delivery milestone receipts yet.");

  renderStack("offer-launch-delivery-outcome-list", state.ledger.offerLaunchDeliveryOutcomes || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery outcome")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery outcome is waiting for outcome review.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Review outcome evidence inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-outcome-ready")}
        <span>${escapeHtml(item.outcomeReady ? "outcome ready" : "fit review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery outcome records yet.");

  renderStack("offer-launch-delivery-outcome-receipt-list", state.ledger.offerLaunchDeliveryOutcomeReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery outcome")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-outcome-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP delivery outcome is ready.")}</small>
    </article>
  `, "No customer-safe offer launch delivery outcome receipts yet.");

  renderStack("offer-launch-delivery-follow-up-list", state.ledger.offerLaunchDeliveryFollowUps || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery follow-up")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery follow-up is waiting for follow-up review.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Review follow-up, renewal, and referral options inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-follow-up-ready")}
        <span>${escapeHtml(item.followUpReady ? "follow-up ready" : "fit review")}</span>
        <span>${escapeHtml(item.renewalReady ? "renewal ready" : "renewal hold")}</span>
        <span>${escapeHtml(item.referralReady ? "referral ready" : "referral hold")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery follow-up records yet.");

  renderStack("offer-launch-delivery-follow-up-receipt-list", state.ledger.offerLaunchDeliveryFollowUpReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery follow-up")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-follow-up-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP follow-up options are ready.")}</small>
    </article>
  `, "No customer-safe offer launch delivery follow-up receipts yet.");

  renderStack("offer-launch-delivery-growth-plan-list", state.ledger.offerLaunchDeliveryGrowthPlans || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery growth plan")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery growth plan is waiting for repeat-service, renewal, or referral review.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Choose the repeat-service, renewal, or referral motion inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-growth-plan-ready")}
        <span>${escapeHtml(item.repeatServiceReady ? "repeat ready" : "repeat hold")}</span>
        <span>${escapeHtml(item.renewalReady ? "renewal ready" : "renewal hold")}</span>
        <span>${escapeHtml(item.referralReady ? "referral ready" : "referral hold")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery growth-plan records yet.");

  renderStack("offer-launch-delivery-growth-plan-receipt-list", state.ledger.offerLaunchDeliveryGrowthPlanReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery growth plan")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-growth-plan-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP growth options are ready.")}</small>
    </article>
  `, "No customer-safe offer launch delivery growth-plan receipts yet.");

  renderStack("offer-launch-delivery-growth-plan-acceptance-list", state.ledger.offerLaunchDeliveryGrowthPlanAcceptances || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery growth-plan acceptance")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery growth-plan acceptance is waiting for repeat-service, renewal, or referral acceptance.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Confirm the accepted repeat-service, renewal, or referral motion inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-growth-plan-acceptance-ready")}
        <span>${escapeHtml(item.acceptanceReady ? "acceptance ready" : "fit review")}</span>
        <span>${escapeHtml(item.renewalAccepted ? "renewal accepted" : "renewal review")}</span>
        <span>${escapeHtml(item.referralAccepted ? "referral accepted" : "referral review")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery growth-plan acceptance records yet.");

  renderStack("offer-launch-delivery-growth-plan-acceptance-receipt-list", state.ledger.offerLaunchDeliveryGrowthPlanAcceptanceReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery growth-plan acceptance")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-growth-plan-acceptance-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP growth-plan acceptance is ready.")}</small>
    </article>
  `, "No customer-safe offer launch delivery growth-plan acceptance receipts yet.");

  renderStack("offer-launch-delivery-expansion-request-list", state.ledger.offerLaunchDeliveryExpansionRequests || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion request")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery expansion request is waiting for next-service preparation.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Prepare the next service step inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-expansion-request-ready")}
        <span>${escapeHtml(item.expansionRequestReady ? "request ready" : "fit review")}</span>
        <span>${escapeHtml(item.renewalRequested ? "renewal requested" : "renewal review")}</span>
        <span>${escapeHtml(item.referralRequested ? "referral requested" : "referral review")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery expansion request records yet.");

  renderStack("offer-launch-delivery-expansion-request-receipt-list", state.ledger.offerLaunchDeliveryExpansionRequestReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion request")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-request-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service request is ready.")}</small>
    </article>
  `, "No customer-safe offer launch delivery expansion-request receipts yet.");

  renderStack("offer-launch-delivery-expansion-workspace-list", state.ledger.offerLaunchDeliveryExpansionWorkspaces || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion workspace")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery expansion workspace is waiting for next-service delivery planning.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Assign the next-service delivery plan inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-expansion-workspace-ready")}
        <span>${escapeHtml(item.expansionWorkspaceReady ? "workspace ready" : "fit review")}</span>
        <span>${escapeHtml(item.renewalRequested ? "renewal requested" : "renewal review")}</span>
        <span>${escapeHtml(item.referralRequested ? "referral requested" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery expansion workspace records yet.");

  renderStack("offer-launch-delivery-expansion-workspace-receipt-list", state.ledger.offerLaunchDeliveryExpansionWorkspaceReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion workspace")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-workspace-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service workspace is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue the next service step inside the expansion workspace.")}</small>
    </article>
  `, "No customer-safe offer launch delivery expansion-workspace receipts yet.");

  renderStack("offer-launch-delivery-expansion-kickoff-list", state.ledger.offerLaunchDeliveryExpansionKickoffs || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion kickoff")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery expansion kickoff is waiting for next-service kickoff.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Begin the next-service delivery kickoff inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-expansion-kickoff-ready")}
        <span>${escapeHtml(item.expansionKickoffReady ? "kickoff ready" : "fit review")}</span>
        <span>${escapeHtml(item.renewalRequested ? "renewal requested" : "renewal review")}</span>
        <span>${escapeHtml(item.referralRequested ? "referral requested" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery expansion kickoff records yet.");

  renderStack("offer-launch-delivery-expansion-kickoff-receipt-list", state.ledger.offerLaunchDeliveryExpansionKickoffReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion kickoff")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-kickoff-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service kickoff is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will begin the next service milestone.")}</small>
    </article>
  `, "No customer-safe offer launch delivery expansion-kickoff receipts yet.");

  renderStack("offer-launch-delivery-expansion-milestone-list", state.ledger.offerLaunchDeliveryExpansionMilestones || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion milestone")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery expansion milestone is waiting for next-service milestone work.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Continue the next-service delivery milestone inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-expansion-milestone-active")}
        <span>${escapeHtml(item.expansionMilestoneReady ? "milestone active" : "fit review")}</span>
        <span>${escapeHtml(item.renewalRequested ? "renewal requested" : "renewal review")}</span>
        <span>${escapeHtml(item.referralRequested ? "referral requested" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery expansion milestone records yet.");

  renderStack("offer-launch-delivery-expansion-milestone-receipt-list", state.ledger.offerLaunchDeliveryExpansionMilestoneReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion milestone")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-milestone-active")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service delivery milestone is active.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue the next service milestone.")}</small>
    </article>
  `, "No customer-safe offer launch delivery expansion-milestone receipts yet.");

  renderStack("offer-launch-delivery-expansion-outcome-list", state.ledger.offerLaunchDeliveryExpansionOutcomes || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion outcome")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery expansion outcome is waiting for next-service outcome review.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Review the next-service delivery outcome inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-expansion-outcome-ready")}
        <span>${escapeHtml(item.expansionOutcomeReady ? "outcome ready" : "fit review")}</span>
        <span>${escapeHtml(item.renewalRequested ? "renewal path" : "renewal review")}</span>
        <span>${escapeHtml(item.referralRequested ? "referral path" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery expansion outcome records yet.");

  renderStack("offer-launch-delivery-expansion-outcome-receipt-list", state.ledger.offerLaunchDeliveryExpansionOutcomeReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion outcome")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-outcome-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service delivery outcome is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review follow-up, renewal, or referral paths.")}</small>
    </article>
  `, "No customer-safe offer launch delivery expansion-outcome receipts yet.");

  renderStack("offer-launch-delivery-expansion-follow-up-list", state.ledger.offerLaunchDeliveryExpansionFollowUps || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion follow-up")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery expansion follow-up is waiting for next-service follow-up review.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Review repeat-service, renewal, and referral options inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-expansion-follow-up-ready")}
        <span>${escapeHtml(item.expansionFollowUpReady ? "follow-up ready" : "fit review")}</span>
        <span>${escapeHtml(item.renewalReady ? "renewal ready" : "renewal review")}</span>
        <span>${escapeHtml(item.referralReady ? "referral ready" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery expansion follow-up records yet.");

  renderStack("offer-launch-delivery-expansion-follow-up-receipt-list", state.ledger.offerLaunchDeliveryExpansionFollowUpReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion follow-up")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-follow-up-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service follow-up options are ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review repeat-service, renewal, or referral options.")}</small>
    </article>
  `, "No customer-safe offer launch delivery expansion follow-up receipts yet.");

  renderStack("offer-launch-delivery-expansion-growth-plan-list", state.ledger.offerLaunchDeliveryExpansionGrowthPlans || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion growth plan")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery expansion growth plan is waiting for next-service growth planning.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Choose repeat-service, renewal, or referral motion inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-expansion-growth-plan-ready")}
        <span>${escapeHtml(item.expansionGrowthPlanReady ? "growth plan ready" : "fit review")}</span>
        <span>${escapeHtml(item.renewalReady ? "renewal ready" : "renewal review")}</span>
        <span>${escapeHtml(item.referralReady ? "referral ready" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery expansion growth-plan records yet.");

  renderStack("offer-launch-delivery-expansion-growth-plan-receipt-list", state.ledger.offerLaunchDeliveryExpansionGrowthPlanReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion growth plan")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-growth-plan-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service growth options are ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review repeat-service, renewal, or referral motion.")}</small>
    </article>
  `, "No customer-safe offer launch delivery expansion growth-plan receipts yet.");

  renderStack("offer-launch-delivery-expansion-growth-plan-acceptance-list", state.ledger.offerLaunchDeliveryExpansionGrowthPlanAcceptances || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion growth-plan acceptance")}</strong>
        <p>${escapeHtml(item.customerSafeStatus || "WORKSHOP launch offer delivery expansion growth-plan acceptance is waiting for accepted next-service motion review.")}</p>
        <small>${escapeHtml(item.operatorNextAction || "Confirm the accepted next-service motion inside WORKSHOP.")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status || "offer-launch-delivery-expansion-growth-plan-acceptance-ready")}
        <span>${escapeHtml(item.expansionGrowthPlanAcceptanceReady ? "acceptance ready" : "fit review")}</span>
        <span>${escapeHtml(item.renewalAccepted ? "renewal accepted" : "renewal review")}</span>
        <span>${escapeHtml(item.referralAccepted ? "referral accepted" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested" : "no timing load")}</span>
      </div>
    </article>
  `, "No App-owned offer launch delivery expansion growth-plan acceptance records yet.");

  renderStack("offer-launch-delivery-expansion-growth-plan-acceptance-receipt-list", state.ledger.offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion growth-plan acceptance")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP accepted next-service motion is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will prepare the accepted next-service motion.")}</small>
    </article>
  `, "No customer-safe offer launch delivery expansion growth-plan acceptance receipts yet.");

  renderStack("ara-work-packet-list", state.ledger.araWorkPackets || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.packetKind)}</strong>
      <span>${escapeHtml(item.humanReviewRequired ? "human review required" : "review optional")}</span>
      <small>${escapeHtml(item.expectedOutput)} / ${escapeHtml(item.expectedMinutesSaved)} minutes saved</small>
    </article>
  `, "No ARA work packets yet.");

  renderStack("owner-time-budget-list", state.ledger.ownerTimeBudgets || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.laborTrapWarning ? "Labor Trap Warning" : "Owner Time Budget Clear")}</strong>
        <p>${escapeHtml(item.operatorNextAction)}</p>
        <small>${escapeHtml(item.committedMinutes)} committed of ${escapeHtml(item.weeklyAvailableMinutes)} available minutes / ${escapeHtml(item.araDelegableMinutes)} delegable</small>
      </div>
      <div class="item-meta">
        ${chip(item.laborTrapWarning ? "warning" : "clear")}
        <span>time guard</span>
      </div>
    </article>
  `, "No owner time budget records yet.");

  renderStack("portal-offer-templates", (state.ledger.offerTemplates || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
      </div>
      <div class="item-meta">
        ${chip(serviceLaneLabel(item.lane))}
        <span>${escapeHtml(item.defaultPriceLabel)}</span>
      </div>
    </article>
  `, "No customer-visible offer templates yet.");

  renderStack("portal-service-pages", (state.ledger.servicePages || []).filter((item) => item.customerVisible && item.webportalExportReady !== false), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${escapeHtml(item.audience)} / ${escapeHtml(item.deliveryType || "service")} / ${escapeHtml(item.priceLabel || "price on request")}</small>
      </div>
      <div class="item-meta">
        ${chip(item.publicStatus)}
        <span>${escapeHtml(item.intakeCta)}</span>
      </div>
    </article>
  `, "No customer-visible service pages yet.");

  renderStack("portal-offer-launch-readiness", (state.ledger.offerLaunchReadinessReceipts || []).filter((item) => item.customerVisible && item.webportalExportReady), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.offerLabel)}</strong>
        <p>${escapeHtml(item.customerSafeMessage)}</p>
        <small>${escapeHtml(item.nextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.publicStatus)}
        <span>${escapeHtml(item.intakeCta)}</span>
        <span>${escapeHtml(item.under19GuardRequired ? "compatibility guarded" : "adult/business path")}</span>
      </div>
    </article>
  `, "No customer-safe launch-ready offers yet.");

  const renderOfferLaunchReadinessReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch-ready offer")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "This WORKSHOP offer is ready for customer intake.")}</small>
      <small>${escapeHtml(item.nextAction || "Request the customer-safe offer path.")}</small>
    </article>
  `;

  setText(
    "offer-launch-readiness-receipt-summary",
    offerLaunchReadinessReceiptExportState.records.length
      ? `${offerLaunchReadinessReceiptExportState.records.length} App-exported offer launch readiness receipt(s) loaded.`
      : "No App-exported offer launch readiness receipts loaded."
  );
  renderStack(
    "portal-offer-launch-readiness-receipt-export",
    offerLaunchReadinessReceiptExportState.records,
    renderOfferLaunchReadinessReceipt,
    "No customer-safe App offer launch readiness receipts loaded."
  );

  renderStack("portal-offer-launch-intake-status", (state.ledger.offerLaunchIntakeReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer intake")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-intake-queued")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP offer request is queued for intake review.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review the request and continue without adding calendar load unless timing becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer intake requests yet.");

  const renderOfferLaunchIntakeReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer intake")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-intake-queued")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP offer request is queued for intake review.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review the request and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.compatibilityGateRequired ? "compatibility review" : "adult/business path")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-intake-receipt-summary",
    offerLaunchIntakeReceiptExportState.records.length
      ? `${offerLaunchIntakeReceiptExportState.records.length} App-exported offer launch intake receipt(s) loaded.`
      : "No App-exported offer launch intake receipts loaded."
  );
  renderStack(
    "portal-offer-launch-intake-receipt-export",
    offerLaunchIntakeReceiptExportState.records,
    renderOfferLaunchIntakeReceipt,
    "No customer-safe App offer launch intake receipts loaded."
  );

  const renderOfferLaunchActivationReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer activation")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-activation-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP offer path is accepted for service setup.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will prepare service setup and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.activationReady ? "service setup ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-activation-receipt-summary",
    offerLaunchActivationReceiptExportState.records.length
      ? `${offerLaunchActivationReceiptExportState.records.length} App-exported offer launch activation receipt(s) loaded.`
      : "No App-exported offer launch activation receipts loaded."
  );
  renderStack(
    "portal-offer-launch-activation-receipt-export",
    offerLaunchActivationReceiptExportState.records,
    renderOfferLaunchActivationReceipt,
    "No customer-safe App offer launch activation receipts loaded."
  );

  renderStack("portal-offer-launch-service-setup-status", (state.ledger.offerLaunchServiceSetupReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer service setup")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-service-setup-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP service setup is prepared.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue delivery setup and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer service setup receipts yet.");

  const renderOfferLaunchServiceSetupReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer service setup")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-service-setup-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP service setup is prepared.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue delivery setup and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.setupReady ? "setup prepared" : "compatibility review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-service-setup-receipt-summary",
    offerLaunchServiceSetupReceiptExportState.records.length
      ? `${offerLaunchServiceSetupReceiptExportState.records.length} App-exported offer launch service setup receipt(s) loaded.`
      : "No App-exported offer launch service setup receipts loaded."
  );
  renderStack(
    "portal-offer-launch-service-setup-receipt-export",
    offerLaunchServiceSetupReceiptExportState.records,
    renderOfferLaunchServiceSetupReceipt,
    "No customer-safe App offer launch service setup receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-workspace-status", (state.ledger.offerLaunchDeliveryWorkspaceReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery workspace")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-workspace-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP delivery workspace is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue delivery in the prepared workspace and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery workspace receipts yet.");

  const renderOfferLaunchDeliveryWorkspaceReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery workspace")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-workspace-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP delivery workspace is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue delivery in the prepared workspace and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.workspaceReady ? "workspace ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-workspace-receipt-summary",
    offerLaunchDeliveryWorkspaceReceiptExportState.records.length
      ? `${offerLaunchDeliveryWorkspaceReceiptExportState.records.length} App-exported offer launch delivery workspace receipt(s) loaded.`
      : "No App-exported offer launch delivery workspace receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-workspace-receipt-export",
    offerLaunchDeliveryWorkspaceReceiptExportState.records,
    renderOfferLaunchDeliveryWorkspaceReceipt,
    "No customer-safe App offer launch delivery workspace receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-kickoff-status", (state.ledger.offerLaunchDeliveryKickoffReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery kickoff")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-kickoff-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP delivery kickoff is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will begin the first delivery milestone and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery kickoff receipts yet.");

  const renderOfferLaunchDeliveryKickoffReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery kickoff")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-kickoff-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP delivery kickoff is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will begin the first delivery milestone and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.kickoffReady ? "kickoff ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-kickoff-receipt-summary",
    offerLaunchDeliveryKickoffReceiptExportState.records.length
      ? `${offerLaunchDeliveryKickoffReceiptExportState.records.length} App-exported offer launch delivery kickoff receipt(s) loaded.`
      : "No App-exported offer launch delivery kickoff receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-kickoff-receipt-export",
    offerLaunchDeliveryKickoffReceiptExportState.records,
    renderOfferLaunchDeliveryKickoffReceipt,
    "No customer-safe App offer launch delivery kickoff receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-milestone-status", (state.ledger.offerLaunchDeliveryMilestoneReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery milestone")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-milestone-active")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your first WORKSHOP delivery milestone is active.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue the first milestone and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery milestone receipts yet.");

  const renderOfferLaunchDeliveryMilestoneReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery milestone")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-milestone-active")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your first WORKSHOP delivery milestone is active.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue the first milestone and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.milestoneReady ? "milestone active" : "compatibility review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-milestone-receipt-summary",
    offerLaunchDeliveryMilestoneReceiptExportState.records.length
      ? `${offerLaunchDeliveryMilestoneReceiptExportState.records.length} App-exported offer launch delivery milestone receipt(s) loaded.`
      : "No App-exported offer launch delivery milestone receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-milestone-receipt-export",
    offerLaunchDeliveryMilestoneReceiptExportState.records,
    renderOfferLaunchDeliveryMilestoneReceipt,
    "No customer-safe App offer launch delivery milestone receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-outcome-status", (state.ledger.offerLaunchDeliveryOutcomeReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery outcome")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-outcome-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP delivery outcome is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review follow-up or renewal options and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery outcome receipts yet.");

  const renderOfferLaunchDeliveryOutcomeReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery outcome")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-outcome-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP delivery outcome is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review follow-up or renewal options and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.outcomeReady ? "outcome ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-outcome-receipt-summary",
    offerLaunchDeliveryOutcomeReceiptExportState.records.length
      ? `${offerLaunchDeliveryOutcomeReceiptExportState.records.length} App-exported offer launch delivery outcome receipt(s) loaded.`
      : "No App-exported offer launch delivery outcome receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-outcome-receipt-export",
    offerLaunchDeliveryOutcomeReceiptExportState.records,
    renderOfferLaunchDeliveryOutcomeReceipt,
    "No customer-safe App offer launch delivery outcome receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-follow-up-status", (state.ledger.offerLaunchDeliveryFollowUpReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery follow-up")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-follow-up-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP follow-up options are ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review renewal or referral options and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery follow-up receipts yet.");

  const renderOfferLaunchDeliveryFollowUpReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery follow-up")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-follow-up-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP follow-up options are ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review renewal or referral options and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.followUpReady ? "follow-up ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.renewalReady ? "renewal ready" : "renewal review")}</span>
        <span>${escapeHtml(item.referralReady ? "referral ready" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-follow-up-receipt-summary",
    offerLaunchDeliveryFollowUpReceiptExportState.records.length
      ? `${offerLaunchDeliveryFollowUpReceiptExportState.records.length} App-exported offer launch delivery follow-up receipt(s) loaded.`
      : "No App-exported offer launch delivery follow-up receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-follow-up-receipt-export",
    offerLaunchDeliveryFollowUpReceiptExportState.records,
    renderOfferLaunchDeliveryFollowUpReceipt,
    "No customer-safe App offer launch delivery follow-up receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-growth-plan-status", (state.ledger.offerLaunchDeliveryGrowthPlanReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery growth plan")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-growth-plan-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP growth options are ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review repeat-service, renewal, or referral options and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery growth-plan receipts yet.");

  const renderOfferLaunchDeliveryGrowthPlanReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery growth plan")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-growth-plan-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP growth options are ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review repeat-service, renewal, or referral options and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.repeatServiceReady ? "repeat ready" : "repeat review")}</span>
        <span>${escapeHtml(item.renewalReady ? "renewal ready" : "renewal review")}</span>
        <span>${escapeHtml(item.referralReady ? "referral ready" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-growth-plan-receipt-summary",
    offerLaunchDeliveryGrowthPlanReceiptExportState.records.length
      ? `${offerLaunchDeliveryGrowthPlanReceiptExportState.records.length} App-exported offer launch delivery growth-plan receipt(s) loaded.`
      : "No App-exported offer launch delivery growth-plan receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-growth-plan-receipt-export",
    offerLaunchDeliveryGrowthPlanReceiptExportState.records,
    renderOfferLaunchDeliveryGrowthPlanReceipt,
    "No customer-safe App offer launch delivery growth-plan receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-growth-plan-acceptance-status", (state.ledger.offerLaunchDeliveryGrowthPlanAcceptanceReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery growth-plan acceptance")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-growth-plan-acceptance-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP growth-plan acceptance is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will prepare the accepted next service motion and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery growth-plan acceptance receipts yet.");

  const renderOfferLaunchDeliveryGrowthPlanAcceptanceReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery growth-plan acceptance")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-growth-plan-acceptance-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP growth-plan acceptance is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will prepare the accepted next service motion and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.acceptanceReady ? "accepted" : "compatibility review")}</span>
        <span>${escapeHtml(item.renewalAccepted ? "renewal accepted" : "renewal review")}</span>
        <span>${escapeHtml(item.referralAccepted ? "referral accepted" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-growth-plan-acceptance-receipt-summary",
    offerLaunchDeliveryGrowthPlanAcceptanceReceiptExportState.records.length
      ? `${offerLaunchDeliveryGrowthPlanAcceptanceReceiptExportState.records.length} App-exported offer launch delivery growth-plan acceptance receipt(s) loaded.`
      : "No App-exported offer launch delivery growth-plan acceptance receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-growth-plan-acceptance-receipt-export",
    offerLaunchDeliveryGrowthPlanAcceptanceReceiptExportState.records,
    renderOfferLaunchDeliveryGrowthPlanAcceptanceReceipt,
    "No customer-safe App offer launch delivery growth-plan acceptance receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-expansion-request-status", (state.ledger.offerLaunchDeliveryExpansionRequestReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion request")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-request-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service request is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will prepare the next service step and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery expansion-request receipts yet.");

  const renderOfferLaunchDeliveryExpansionRequestReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion request")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-request-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service request is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will prepare the next service step and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.expansionRequestReady ? "request ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.renewalRequested ? "renewal requested" : "renewal review")}</span>
        <span>${escapeHtml(item.referralRequested ? "referral requested" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-expansion-request-receipt-summary",
    offerLaunchDeliveryExpansionRequestReceiptExportState.records.length
      ? `${offerLaunchDeliveryExpansionRequestReceiptExportState.records.length} App-exported offer launch delivery expansion-request receipt(s) loaded.`
      : "No App-exported offer launch delivery expansion-request receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-expansion-request-receipt-export",
    offerLaunchDeliveryExpansionRequestReceiptExportState.records,
    renderOfferLaunchDeliveryExpansionRequestReceipt,
    "No customer-safe App offer launch delivery expansion-request receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-expansion-workspace-status", (state.ledger.offerLaunchDeliveryExpansionWorkspaceReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion workspace")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-workspace-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service workspace is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue the next service step inside the expansion workspace without adding calendar load unless timing becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery expansion workspace receipts yet.");

  const renderOfferLaunchDeliveryExpansionWorkspaceReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion workspace")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-workspace-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service workspace is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue the next service step inside the expansion workspace and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.expansionWorkspaceReady ? "workspace ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-expansion-workspace-receipt-summary",
    offerLaunchDeliveryExpansionWorkspaceReceiptExportState.records.length
      ? `${offerLaunchDeliveryExpansionWorkspaceReceiptExportState.records.length} App-exported offer launch delivery expansion workspace receipt(s) loaded.`
      : "No App-exported offer launch delivery expansion workspace receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-expansion-workspace-receipt-export",
    offerLaunchDeliveryExpansionWorkspaceReceiptExportState.records,
    renderOfferLaunchDeliveryExpansionWorkspaceReceipt,
    "No customer-safe App offer launch delivery expansion workspace receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-expansion-kickoff-status", (state.ledger.offerLaunchDeliveryExpansionKickoffReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion kickoff")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-kickoff-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service kickoff is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will begin the next service milestone without adding calendar load unless timing becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery expansion kickoff receipts yet.");

  const renderOfferLaunchDeliveryExpansionKickoffReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion kickoff")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-kickoff-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service kickoff is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will begin the next service milestone and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.expansionKickoffReady ? "kickoff ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-expansion-kickoff-receipt-summary",
    offerLaunchDeliveryExpansionKickoffReceiptExportState.records.length
      ? `${offerLaunchDeliveryExpansionKickoffReceiptExportState.records.length} App-exported offer launch delivery expansion kickoff receipt(s) loaded.`
      : "No App-exported offer launch delivery expansion kickoff receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-expansion-kickoff-receipt-export",
    offerLaunchDeliveryExpansionKickoffReceiptExportState.records,
    renderOfferLaunchDeliveryExpansionKickoffReceipt,
    "No customer-safe App offer launch delivery expansion kickoff receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-expansion-milestone-status", (state.ledger.offerLaunchDeliveryExpansionMilestoneReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion milestone")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-milestone-active")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service delivery milestone is active.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue the next service milestone without adding calendar load unless timing becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery expansion milestone receipts yet.");

  const renderOfferLaunchDeliveryExpansionMilestoneReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion milestone")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-milestone-active")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service delivery milestone is active.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will continue the next service milestone and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.expansionMilestoneReady ? "milestone active" : "compatibility review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-expansion-milestone-receipt-summary",
    offerLaunchDeliveryExpansionMilestoneReceiptExportState.records.length
      ? `${offerLaunchDeliveryExpansionMilestoneReceiptExportState.records.length} App-exported offer launch delivery expansion milestone receipt(s) loaded.`
      : "No App-exported offer launch delivery expansion milestone receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-expansion-milestone-receipt-export",
    offerLaunchDeliveryExpansionMilestoneReceiptExportState.records,
    renderOfferLaunchDeliveryExpansionMilestoneReceipt,
    "No customer-safe App offer launch delivery expansion milestone receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-expansion-outcome-status", (state.ledger.offerLaunchDeliveryExpansionOutcomeReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion outcome")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-outcome-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service delivery outcome is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review the next service follow-up, renewal, or referral path without adding calendar load unless timing becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery expansion outcome receipts yet.");

  const renderOfferLaunchDeliveryExpansionOutcomeReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion outcome")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-outcome-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service delivery outcome is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review follow-up, renewal, or referral paths and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.expansionOutcomeReady ? "outcome ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-expansion-outcome-receipt-summary",
    offerLaunchDeliveryExpansionOutcomeReceiptExportState.records.length
      ? `${offerLaunchDeliveryExpansionOutcomeReceiptExportState.records.length} App-exported offer launch delivery expansion outcome receipt(s) loaded.`
      : "No App-exported offer launch delivery expansion outcome receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-expansion-outcome-receipt-export",
    offerLaunchDeliveryExpansionOutcomeReceiptExportState.records,
    renderOfferLaunchDeliveryExpansionOutcomeReceipt,
    "No customer-safe App offer launch delivery expansion outcome receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-expansion-follow-up-status", (state.ledger.offerLaunchDeliveryExpansionFollowUpReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion follow-up")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-follow-up-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service follow-up options are ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review repeat-service, renewal, or referral options without adding calendar load unless timing becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery expansion follow-up receipts yet.");

  const renderOfferLaunchDeliveryExpansionFollowUpReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion follow-up")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-follow-up-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service follow-up options are ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review repeat-service, renewal, or referral options and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.expansionFollowUpReady ? "follow-up ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-expansion-follow-up-receipt-summary",
    offerLaunchDeliveryExpansionFollowUpReceiptExportState.records.length
      ? `${offerLaunchDeliveryExpansionFollowUpReceiptExportState.records.length} App-exported offer launch delivery expansion follow-up receipt(s) loaded.`
      : "No App-exported offer launch delivery expansion follow-up receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-expansion-follow-up-receipt-export",
    offerLaunchDeliveryExpansionFollowUpReceiptExportState.records,
    renderOfferLaunchDeliveryExpansionFollowUpReceipt,
    "No customer-safe App offer launch delivery expansion follow-up receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-expansion-growth-plan-status", (state.ledger.offerLaunchDeliveryExpansionGrowthPlanReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion growth plan")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-growth-plan-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service growth options are ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review repeat-service, renewal, or referral motion without adding calendar load unless timing becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery expansion growth-plan receipts yet.");

  const renderOfferLaunchDeliveryExpansionGrowthPlanReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion growth plan")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-growth-plan-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP next-service growth options are ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will review repeat-service, renewal, or referral motion and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.expansionGrowthPlanReady ? "growth plan ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.renewalReady ? "renewal ready" : "renewal review")}</span>
        <span>${escapeHtml(item.referralReady ? "referral ready" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-expansion-growth-plan-receipt-summary",
    offerLaunchDeliveryExpansionGrowthPlanReceiptExportState.records.length
      ? `${offerLaunchDeliveryExpansionGrowthPlanReceiptExportState.records.length} App-exported offer launch delivery expansion growth-plan receipt(s) loaded.`
      : "No App-exported offer launch delivery expansion growth-plan receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-expansion-growth-plan-receipt-export",
    offerLaunchDeliveryExpansionGrowthPlanReceiptExportState.records,
    renderOfferLaunchDeliveryExpansionGrowthPlanReceipt,
    "No customer-safe App offer launch delivery expansion growth-plan receipts loaded."
  );

  renderStack("portal-offer-launch-delivery-expansion-growth-plan-acceptance-status", (state.ledger.offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion growth-plan acceptance")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP accepted next-service motion is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will prepare the accepted next-service motion without adding calendar load unless timing becomes necessary.")}</small>
    </article>
  `, "No customer-safe launch offer delivery expansion growth-plan acceptance receipts yet.");

  const renderOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.offerLabel || "Launch offer delivery expansion growth-plan acceptance")}</strong>
      <span>${escapeHtml(item.status || "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-ready")}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your WORKSHOP accepted next-service motion is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "WORKSHOP will prepare the accepted next-service motion and keep EPOCH timing-provider-only if scheduling becomes necessary.")}</small>
      <div class="pill-row">
        <span>${escapeHtml(item.expansionGrowthPlanAcceptanceReady ? "acceptance ready" : "compatibility review")}</span>
        <span>${escapeHtml(item.renewalAccepted ? "renewal accepted" : "renewal review")}</span>
        <span>${escapeHtml(item.referralAccepted ? "referral accepted" : "referral review")}</span>
        <span>${escapeHtml(item.requiresEpochTimingRequest ? "EPOCH timing requested if needed" : "no timing request yet")}</span>
      </div>
    </article>
  `;

  setText(
    "offer-launch-delivery-expansion-growth-plan-acceptance-receipt-summary",
    offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExportState.records.length
      ? `${offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExportState.records.length} App-exported offer launch delivery expansion growth-plan acceptance receipt(s) loaded.`
      : "No App-exported offer launch delivery expansion growth-plan acceptance receipts loaded."
  );
  renderStack(
    "portal-offer-launch-delivery-expansion-growth-plan-acceptance-receipt-export",
    offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExportState.records,
    renderOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt,
    "No customer-safe App offer launch delivery expansion growth-plan acceptance receipts loaded."
  );

  renderStack("portal-revenue-receipts", (state.ledger.revenueReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.kind)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.summary)}</small>
    </article>
  `, "No customer-visible revenue receipts yet.");

  renderStack("portal-delivery-log", (state.ledger.deliveryLogEntries || []).filter((item) => item.productLog && !item.monitorRunnerLog), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.eventKind)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.summary)}</small>
    </article>
  `, "No customer-visible delivery log yet.");

  renderStack("portal-revenue-search", (state.ledger.revenueSearchResults || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.displayLabel)}</strong>
      <span>${escapeHtml(item.recordKind)}</span>
      <small>Limited to customer-safe service records.</small>
    </article>
  `, "No customer-safe revenue search results yet.");
}

function renderPackageEligibility() {
  const renderEligibility = (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${item.lowerLaborDefault ? "lower-labor default" : "premium operator time"} / ${item.acceptsDirectUnder19Intake ? "under-19 direct intake" : "under-19 gated"}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.customerOfferReady ? "offer ready" : "hold"}</span>
        </div>
      </article>
    `;
  };
  const renderPortalEligibility = (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${item.lowerLaborDefault ? "submission or cohort first" : "fit review first"}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.customerOfferReady ? "available" : "reviewed before acceptance"}</span>
        </div>
      </article>
    `;
  };
  renderStack("package-eligibility-list", state.ledger.packageEligibility || [], renderEligibility, "No package eligibility records yet.");
  renderStack("portal-package-readiness", (state.ledger.packageEligibility || []).filter((item) => item.customerOfferReady), renderPortalEligibility, "No customer-facing package readiness records yet.");
}

function renderCompatibilityGates() {
  const renderGate = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(request?.customer || item.ageBand || "Compatibility gate")}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${item.blocksAutoAcceptance ? "blocks automatic acceptance" : "operator review"}${item.guardianTermsRequired ? " / guardian-aware terms" : ""}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  };
  const gates = state.ledger.compatibilityGates || [];
  renderStack("compatibility-gate-list", gates, renderGate, "No compatibility gates yet.");
  renderStack("portal-compatibility-gates", gates.filter((item) => item.customerVisible), renderGate, "No customer-visible compatibility gates yet.");
}

function renderSubmissionReviewCycles() {
  const renderCycle = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.submissionId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.returnWindow)} / due: ${escapeHtml(item.reviewDue)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.stage)}
          <span>${item.requiresEpochTime ? "EPOCH timing" : "WORKSHOP queue"}</span>
        </div>
      </article>
    `;
  };
  const renderPortalCycle = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.submissionId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.returnWindow)} / due: ${escapeHtml(item.reviewDue)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.stage)}
          <span>${item.requiresEpochTime ? "timing confirmation pending" : "review queue active"}</span>
        </div>
      </article>
    `;
  };
  const cycles = state.ledger.submissionReviewCycles || [];
  renderStack("submission-cycle-list", cycles, renderCycle, "No submission review cycles yet.");
  renderStack("portal-submission-cycles", cycles.filter((item) => item.customerVisible), renderPortalCycle, "No customer-visible submission cycles yet.");
}

function renderCohortPlans() {
  const planFor = (planId) => (state.ledger.cohortPlans || []).find((item) => item.id === planId);
  const renderPlan = (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.id)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${item.enrolledCount}/${item.targetCapacity} seats / minimum ${item.minimumViableCount}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.reusableMaterialsReady ? "materials ready" : "materials needed"}</span>
        </div>
      </article>
    `;
  };
  const renderPortalPlan = (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.id)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${item.enrolledCount}/${item.targetCapacity} seats / minimum ${item.minimumViableCount}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.epochWindowRequired ? "timing confirmed after group forms" : "no live timing required"}</span>
        </div>
      </article>
    `;
  };
  const renderCapacityPlan = (item) => {
    const plan = planFor(item.cohortPlanId);
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || plan?.id || item.id)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.enrolledCount)}/${escapeHtml(item.targetCapacity)} seats / minimum ${escapeHtml(item.minimumViableCount)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.epochTimingDependency ? "EPOCH timing dependency" : "materials-only capacity"}</span>
        </div>
      </article>
    `;
  };
  const renderSubscriptionPlan = (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.id)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${formatJpy(item.monthlyPriceJpy)} monthly / ${escapeHtml(item.activeSubscribers)}/${escapeHtml(item.targetSubscribers)} subscribers</small>
          <small>${escapeHtml(item.cadenceLabel)} / ${escapeHtml(item.materialUnitsReady)} material units ready</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.liveTimeRequired ? "live time required" : "lower-labor ready"}</span>
        </div>
      </article>
    `;
  };
  const renderPlanningReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.id)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.summary || item.customerSafeStatus)}</small>
    </article>
  `;
  const renderEnrollment = (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.enrollmentLabel || item.id)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>Seat ${escapeHtml(item.seatNumber)} / ${item.timingConfirmedByEpoch ? "timing confirmed" : "timing pending with EPOCH"}</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.customerVisible ? "customer-safe" : "operator-only"}</span>
      </div>
    </article>
  `;
  const renderSubscriptionLifecycle = (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.cadenceLabel || item.id)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${formatJpy(item.monthlyPriceJpy)} monthly / ${escapeHtml(item.materialUnitsAvailable)} materials available</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.paymentLiveEnabled ? "payment live" : "payment not live"}</span>
      </div>
    </article>
  `;
  const renderPortalLifecycle = (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.cadenceLabel || item.enrollmentLabel || item.id)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${item.monthlyPriceJpy ? `${formatJpy(item.monthlyPriceJpy)} monthly` : `Seat ${escapeHtml(item.seatNumber)}`}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.paymentLiveEnabled ? "payment automation live" : "payment automation not live"}</span>
      </div>
    </article>
  `;
  const renderLifecycleReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.id)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.summary || item.customerSafeStatus)}</small>
    </article>
  `;
  const renderCohortOutcomeReport = (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.renewalSignal || item.id)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>Progress ${escapeHtml(item.progressScore)} / 100</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.customerVisible ? "customer-safe" : "operator-only"}</span>
      </div>
    </article>
  `;
  const renderSubscriptionRenewalReport = (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.renewalReady ? "Renewal ready" : "Renewal review")}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${formatJpy(item.projectedValueJpy)} projected / risk ${escapeHtml(item.riskScore)} / 100</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.paymentLiveEnabled ? "payment live" : "payment not live"}</span>
      </div>
    </article>
  `;
  const renderCohortProgressStatusEvent = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.label || item.id)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `;
  const renderOutcomeRenewalReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.id)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.summary || item.customerSafeStatus)}</small>
    </article>
  `;
  const renderPortalOutcomeReport = (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.renewalSignal || "Progress report")}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>Progress ${escapeHtml(item.progressScore)} / 100</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>customer-safe</span>
      </div>
    </article>
  `;
  const renderPortalRenewalReport = (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.renewalReady ? "Renewal ready" : "Renewal review")}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${formatJpy(item.projectedValueJpy)} projected / payment automation not live</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.requiresEpochTime ? "timing via EPOCH" : "materials-only"}</span>
      </div>
    </article>
  `;
  const renderPortalProgressStatusEvent = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.label || "Progress update")}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `;
  const renderPortalOutcomeRenewalReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.kind || "cohort-outcome-renewal")}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.customerSafeStatus || item.summary)}</small>
    </article>
  `;
  const renderPortalPlanning = (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.cadenceLabel || item.capacityStatus || item.id)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${item.monthlyPriceJpy ? `${formatJpy(item.monthlyPriceJpy)} monthly` : `${escapeHtml(item.enrolledCount)}/${escapeHtml(item.targetCapacity)} seats`}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.liveTimeRequired ? "live review required" : "no extra live time required"}</span>
      </div>
    </article>
  `;
  renderStack("cohort-plan-list", state.ledger.cohortPlans || [], renderPlan, "No cohort or subscription plans yet.");
  renderStack("cohort-capacity-plan-list", state.ledger.cohortCapacityPlans || [], renderCapacityPlan, "No cohort capacity planning records yet.");
  renderStack("subscription-plan-list", state.ledger.subscriptionPlans || [], renderSubscriptionPlan, "No subscription planning records yet.");
  renderStack("cohort-planning-receipt-list", state.ledger.cohortPlanningReceipts || [], renderPlanningReceipt, "No cohort planning receipts yet.");
  renderStack("cohort-enrollment-list", state.ledger.cohortEnrollments || [], renderEnrollment, "No cohort enrollments yet.");
  renderStack("subscription-lifecycle-list", state.ledger.subscriptionLifecycles || [], renderSubscriptionLifecycle, "No subscription lifecycle rows yet.");
  renderStack("subscription-lifecycle-receipt-list", state.ledger.subscriptionLifecycleReceipts || [], renderLifecycleReceipt, "No subscription lifecycle receipts yet.");
  renderStack("cohort-outcome-report-list", state.ledger.cohortOutcomeReports || [], renderCohortOutcomeReport, "No cohort outcome reports yet.");
  renderStack("subscription-renewal-report-list", state.ledger.subscriptionRenewalReports || [], renderSubscriptionRenewalReport, "No subscription renewal reports yet.");
  renderStack("cohort-progress-status-event-list", state.ledger.cohortProgressStatusEvents || [], renderCohortProgressStatusEvent, "No cohort progress status events yet.");
  renderStack("outcome-renewal-receipt-list", state.ledger.outcomeRenewalReceipts || [], renderOutcomeRenewalReceipt, "No outcome renewal receipts yet.");
  renderStack("portal-cohort-plans", state.ledger.cohortPlans || [], renderPortalPlan, "No cohort or materials plans yet.");
  renderStack(
    "portal-cohort-planning-status",
    [
      ...(state.ledger.cohortCapacityPlans || []).filter((item) => item.customerVisible),
      ...(state.ledger.subscriptionPlans || []).filter((item) => item.customerVisible)
    ],
    renderPortalPlanning,
    "No customer-visible cohort planning status yet."
  );
  renderStack(
    "portal-subscription-lifecycle-status",
    [
      ...(state.ledger.cohortEnrollments || []).filter((item) => item.customerVisible),
      ...(state.ledger.subscriptionLifecycles || []).filter((item) => item.customerVisible)
    ],
    renderPortalLifecycle,
    "No customer-visible enrollment or subscription lifecycle status yet."
  );
  renderStack("portal-cohort-outcome-status", (state.ledger.cohortOutcomeReports || []).filter((item) => item.customerVisible), renderPortalOutcomeReport, "No customer-visible cohort outcome status yet.");
  renderStack("portal-subscription-renewal-status", (state.ledger.subscriptionRenewalReports || []).filter((item) => item.customerVisible), renderPortalRenewalReport, "No customer-visible subscription renewal status yet.");
  renderStack("portal-cohort-progress-events", (state.ledger.cohortProgressStatusEvents || []).filter((item) => item.customerVisible), renderPortalProgressStatusEvent, "No customer-visible cohort progress updates yet.");
  renderStack("portal-outcome-renewal-receipts", (state.ledger.outcomeRenewalReceipts || []).filter((item) => item.customerVisible), renderPortalOutcomeRenewalReceipt, "No customer-visible outcome renewal receipts yet.");
}

function renderCrmAndAra() {
  renderStack("crm-list", state.ledger.crmAccounts, (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.name)}</strong>
      <span>${escapeHtml(item.state)}</span>
      <small>${escapeHtml(item.next)}</small>
    </article>
  `);

  renderStack("ara-queue", state.ledger.araPackets, (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.owner)}</span>
      <small>${escapeHtml(item.state)}</small>
    </article>
  `);
}

function renderCrmAraWorkflow() {
  const requestLabel = (requestId) => requestFor(requestId)?.customer || requestId;
  const opportunityFor = (opportunityId) => (state.ledger.crmOpportunities || []).find((item) => item.id === opportunityId);
  const packetFor = (packetId) => (state.ledger.araRevenuePackets || []).find((item) => item.id === packetId);
  const serviceReviewCustomerLabel = (item) => {
    if (item.reviewStatus === "queued") return "review queued";
    if (item.reviewStatus === "approved") return "review complete";
    if (item.reviewStatus === "revision-required") return "revision in progress";
    return item.customerSafeStatus ? "review in progress" : "status pending";
  };

  renderStack("crm-opportunity-list", state.ledger.crmOpportunities || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(requestLabel(item.requestId))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.qualified ? "qualified" : "review first"}</span>
      </div>
    </article>
  `, "No CRM opportunities yet.");

  renderStack("ara-revenue-packet-list", state.ledger.araRevenuePackets || [], (item) => {
    const opportunity = opportunityFor(item.opportunityId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(item.owner)} packet</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(requestLabel(opportunity?.requestId || item.opportunityId))} / review: ${escapeHtml(item.reviewStatus)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.requiresOperatorReview ? "review required" : "ready"}</span>
        </div>
      </article>
    `;
  }, "No ARA revenue packets yet.");

  renderStack("ara-assignment-list", state.ledger.araAssignments || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.assignee)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
      <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
    </article>
  `, "No ARA assignments yet.");

  renderStack("ara-review-receipt-list", state.ledger.araReviewReceipts || [], (item) => {
    const packet = packetFor(item.packetId);
    const opportunity = opportunityFor(packet?.opportunityId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(item.id)}</strong>
        <span>${escapeHtml(item.reviewStatus || item.status)}</span>
        <small>${escapeHtml(requestLabel(opportunity?.requestId || item.packetId))}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  }, "No ARA review receipts yet.");

  renderStack("portal-service-planning-status", (state.ledger.crmOpportunities || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(requestLabel(item.requestId))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${escapeHtml(serviceLaneLabel(item.lane))}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.qualified ? "planning active" : "review first"}</span>
      </div>
    </article>
  `, "No customer-visible planning status yet.");

  renderStack("portal-service-review-status", (state.ledger.araReviewReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>Service review</strong>
      <span>${escapeHtml(serviceReviewCustomerLabel(item))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `, "No customer-visible service review receipts yet.");

  renderStack("ara-review-queue-list", state.ledger.araReviewQueues || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(requestLabel(item.requestId))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.requiresOperatorReview ? "operator review" : "not ready"}</span>
      </div>
    </article>
  `, "No App-owned ARA review queue records yet.");

  renderStack("ara-operator-review-decision-list", state.ledger.araOperatorReviewDecisions || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(requestLabel(item.requestId))}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
      <small>${escapeHtml(item.operatorNextAction)}</small>
    </article>
  `, "No App-owned ARA operator decisions yet.");

  const renderAraReviewStatusReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.status)}</strong>
      <span>${escapeHtml(item.requestId)}</span>
      <small>${escapeHtml(item.customerSafeMessage || item.customerSafeStatus)}</small>
      <small>${escapeHtml(item.nextAction || "")}</small>
    </article>
  `;

  renderStack("ara-review-status-receipt-list", state.ledger.araReviewStatusReceipts || [], renderAraReviewStatusReceipt, "No customer-safe ARA review status receipts yet.");
  renderStack("portal-ara-review-status-receipts", (state.ledger.araReviewStatusReceipts || []).filter((item) => item.customerVisible), renderAraReviewStatusReceipt, "No customer-visible ARA review status receipts yet.");
  setText(
    "ara-review-status-receipt-summary",
    araReviewStatusReceiptExportState.records.length
      ? `${araReviewStatusReceiptExportState.records.length} App-exported ARA review receipt(s) loaded.`
      : "No App-exported ARA review status receipts loaded."
  );
  renderStack(
    "portal-ara-review-status-receipt-export",
    araReviewStatusReceiptExportState.records,
    renderAraReviewStatusReceipt,
    "No customer-safe App ARA review status receipts loaded."
  );

  renderStack("ara-method-materialization-list", state.ledger.araMethodMaterializations || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.methodName || item.id)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="chip-column">
        ${chip(item.status)}
        <span>${item.reusableMethodReady ? "reusable method" : "held"}</span>
      </div>
    </article>
  `, "No App-owned ARA method materialization records yet.");

  const renderAraMaterializationReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.status)}</strong>
      <span>${escapeHtml(item.requestId)}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Your reviewed service method and material plan is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "")}</small>
    </article>
  `;

  renderStack("ara-materialization-receipt-list", state.ledger.araMaterializationReceipts || [], renderAraMaterializationReceipt, "No customer-safe ARA materialization receipts yet.");
  renderStack("portal-ara-materialization-status", (state.ledger.araMaterializationReceipts || []).filter((item) => item.customerVisible), renderAraMaterializationReceipt, "No customer-visible ARA materialization receipts yet.");
  setText(
    "ara-materialization-receipt-summary",
    araMaterializationReceiptExportState.records.length
      ? `${araMaterializationReceiptExportState.records.length} App-exported ARA materialization receipt(s) loaded.`
      : "No App-exported ARA materialization receipts loaded."
  );
  renderStack(
    "portal-ara-materialization-receipt-export",
    araMaterializationReceiptExportState.records,
    renderAraMaterializationReceipt,
    "No customer-safe App ARA materialization receipts loaded."
  );

  renderStack("service-material-reuse-list", state.ledger.serviceMaterialReuseRecords || [], (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus || item.summary)}</p>
          <small>${escapeHtml(item.operatorNextAction || "")}</small>
        </div>
        <div class="chip-column">
          ${chip(item.status)}
          <span>${item.lowLaborReuseReady ? "low-labor reuse" : "review held"}</span>
        </div>
      </article>
    `;
  }, "No App-owned service material reuse records yet.");

  const renderServiceMaterialReuseReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.status)}</strong>
      <span>${escapeHtml(item.requestId)}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Reusable service material support is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "")}</small>
    </article>
  `;

  renderStack("service-material-reuse-receipt-list", state.ledger.serviceMaterialReuseReceipts || [], renderServiceMaterialReuseReceipt, "No customer-safe service material reuse receipts yet.");
  renderStack("portal-service-material-reuse-status", (state.ledger.serviceMaterialReuseReceipts || []).filter((item) => item.customerVisible), renderServiceMaterialReuseReceipt, "No customer-visible service material reuse receipts yet.");
  setText(
    "service-material-reuse-receipt-summary",
    serviceMaterialReuseReceiptExportState.records.length
      ? `${serviceMaterialReuseReceiptExportState.records.length} App-exported service material reuse receipt(s) loaded.`
      : "No App-exported service material reuse receipts loaded."
  );
  renderStack(
    "portal-service-material-reuse-receipt-export",
    serviceMaterialReuseReceiptExportState.records,
    renderServiceMaterialReuseReceipt,
    "No customer-safe App service material reuse receipts loaded."
  );

  renderStack("package-delivery-checklist-list", state.ledger.packageDeliveryChecklists || [], (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus || item.summary)}</p>
          <small>${escapeHtml(item.checklistItemsSummary || "")}</small>
        </div>
        <div class="chip-column">
          ${chip(item.status)}
          <span>${item.checklistReady ? "checklist ready" : "checklist held"}</span>
        </div>
      </article>
    `;
  }, "No App-owned package delivery checklist records yet.");

  const renderPackageDeliveryChecklistReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.status)}</strong>
      <span>${escapeHtml(item.requestId)}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Package delivery preparation is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "")}</small>
    </article>
  `;

  renderStack("package-delivery-checklist-receipt-list", state.ledger.packageDeliveryChecklistReceipts || [], renderPackageDeliveryChecklistReceipt, "No customer-safe package delivery checklist receipts yet.");
  renderStack("portal-package-delivery-checklist-status", (state.ledger.packageDeliveryChecklistReceipts || []).filter((item) => item.customerVisible), renderPackageDeliveryChecklistReceipt, "No customer-visible package delivery checklist receipts yet.");
  setText(
    "package-delivery-checklist-receipt-summary",
    packageDeliveryChecklistReceiptExportState.records.length
      ? `${packageDeliveryChecklistReceiptExportState.records.length} App-exported package delivery checklist receipt(s) loaded.`
      : "No App-exported package delivery checklist receipts loaded."
  );
  renderStack(
    "portal-package-delivery-checklist-receipt-export",
    packageDeliveryChecklistReceiptExportState.records,
    renderPackageDeliveryChecklistReceipt,
    "No customer-safe App package delivery checklist receipts loaded."
  );

  renderStack("package-delivery-checklist-automation-list", state.ledger.packageDeliveryChecklistAutomations || [], (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus || item.repeatDeliveryPlan || "Repeatable package delivery automation is ready.")}</p>
          <small>${escapeHtml(item.operatorNextAction || "")}</small>
        </div>
        <div class="chip-column">
          ${chip(item.status)}
          <span>${item.automationReady ? "automation ready" : "automation held"}</span>
        </div>
      </article>
    `;
  }, "No App-owned package delivery checklist automation records yet.");

  const renderPackageDeliveryChecklistAutomationReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.status)}</strong>
      <span>${escapeHtml(item.requestId)}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Repeatable package delivery preparation is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "")}</small>
    </article>
  `;

  renderStack("package-delivery-checklist-automation-receipt-list", state.ledger.packageDeliveryChecklistAutomationReceipts || [], renderPackageDeliveryChecklistAutomationReceipt, "No customer-safe package delivery automation receipts yet.");
  renderStack("portal-package-delivery-checklist-automation-status", (state.ledger.packageDeliveryChecklistAutomationReceipts || []).filter((item) => item.customerVisible), renderPackageDeliveryChecklistAutomationReceipt, "No customer-visible package delivery automation receipts yet.");
  setText(
    "package-delivery-checklist-automation-receipt-summary",
    packageDeliveryChecklistAutomationReceiptExportState.records.length
      ? `${packageDeliveryChecklistAutomationReceiptExportState.records.length} App-exported package delivery automation receipt(s) loaded.`
      : "No App-exported package delivery automation receipts loaded."
  );
  renderStack(
    "portal-package-delivery-checklist-automation-receipt-export",
    packageDeliveryChecklistAutomationReceiptExportState.records,
    renderPackageDeliveryChecklistAutomationReceipt,
    "No customer-safe App package delivery automation receipts loaded."
  );

  renderStack("package-delivery-execution-list", state.ledger.packageDeliveryExecutions || [], (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus || item.deliveryExecutionPlan || "Repeatable package delivery execution is ready.")}</p>
          <small>${escapeHtml(item.operatorNextAction || "")}</small>
        </div>
        <div class="chip-column">
          ${chip(item.status)}
          <span>${item.executionReady ? "execution ready" : "execution held"}</span>
        </div>
      </article>
    `;
  }, "No App-owned package delivery execution records yet.");

  const renderPackageDeliveryExecutionReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.status)}</strong>
      <span>${escapeHtml(item.requestId)}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Package delivery execution is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "")}</small>
    </article>
  `;

  renderStack("package-delivery-execution-receipt-list", state.ledger.packageDeliveryExecutionReceipts || [], renderPackageDeliveryExecutionReceipt, "No customer-safe package delivery execution receipts yet.");
  renderStack("portal-package-delivery-execution-status", (state.ledger.packageDeliveryExecutionReceipts || []).filter((item) => item.customerVisible), renderPackageDeliveryExecutionReceipt, "No customer-visible package delivery execution receipts yet.");
  setText(
    "package-delivery-execution-receipt-summary",
    packageDeliveryExecutionReceiptExportState.records.length
      ? `${packageDeliveryExecutionReceiptExportState.records.length} App-exported package delivery execution receipt(s) loaded.`
      : "No App-exported package delivery execution receipts loaded."
  );
  renderStack(
    "portal-package-delivery-execution-receipt-export",
    packageDeliveryExecutionReceiptExportState.records,
    renderPackageDeliveryExecutionReceipt,
    "No customer-safe App package delivery execution receipts loaded."
  );

  renderStack("package-delivery-followup-renewal-list", state.ledger.packageDeliveryFollowUpRenewals || [], (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus || item.renewalPath || "Follow-up and renewal review is ready.")}</p>
          <small>${escapeHtml(item.operatorNextAction || "")}</small>
        </div>
        <div class="chip-column">
          ${chip(item.status)}
          <span>${item.renewalReady ? "renewal ready" : "renewal held"}</span>
        </div>
      </article>
    `;
  }, "No App-owned package delivery follow-up/renewal records yet.");

  const renderPackageDeliveryFollowUpRenewalReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.status)}</strong>
      <span>${escapeHtml(item.requestId)}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Follow-up and renewal review is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "")}</small>
    </article>
  `;

  renderStack("package-delivery-followup-renewal-receipt-list", state.ledger.packageDeliveryFollowUpRenewalReceipts || [], renderPackageDeliveryFollowUpRenewalReceipt, "No customer-safe package delivery follow-up/renewal receipts yet.");
  renderStack("portal-package-delivery-followup-renewal-status", (state.ledger.packageDeliveryFollowUpRenewalReceipts || []).filter((item) => item.customerVisible), renderPackageDeliveryFollowUpRenewalReceipt, "No customer-visible package delivery follow-up/renewal receipts yet.");
  setText(
    "package-delivery-followup-renewal-receipt-summary",
    packageDeliveryFollowUpRenewalReceiptExportState.records.length
      ? `${packageDeliveryFollowUpRenewalReceiptExportState.records.length} App-exported package delivery follow-up/renewal receipt(s) loaded.`
      : "No App-exported package delivery follow-up/renewal receipts loaded."
  );
  renderStack(
    "portal-package-delivery-followup-renewal-receipt-export",
    packageDeliveryFollowUpRenewalReceiptExportState.records,
    renderPackageDeliveryFollowUpRenewalReceipt,
    "No customer-safe App package delivery follow-up/renewal receipts loaded."
  );

  renderStack("package-delivery-quality-outcome-list", state.ledger.packageDeliveryQualityOutcomes || [], (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus || item.outcomePath || "Quality and outcome review is ready.")}</p>
          <small>${escapeHtml(item.operatorNextAction || "")}</small>
        </div>
        <div class="chip-column">
          ${chip(item.status)}
          <span>${item.outcomeReady ? "outcome ready" : "outcome held"}</span>
        </div>
      </article>
    `;
  }, "No App-owned package delivery quality/outcome records yet.");

  const renderPackageDeliveryQualityOutcomeReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.status)}</strong>
      <span>${escapeHtml(item.requestId)}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Package delivery quality and outcome review is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "")}</small>
    </article>
  `;

  renderStack("package-delivery-quality-outcome-receipt-list", state.ledger.packageDeliveryQualityOutcomeReceipts || [], renderPackageDeliveryQualityOutcomeReceipt, "No customer-safe package delivery quality/outcome receipts yet.");
  renderStack("portal-package-delivery-quality-outcome-status", (state.ledger.packageDeliveryQualityOutcomeReceipts || []).filter((item) => item.customerVisible), renderPackageDeliveryQualityOutcomeReceipt, "No customer-visible package delivery quality/outcome receipts yet.");
  setText(
    "package-delivery-quality-outcome-receipt-summary",
    packageDeliveryQualityOutcomeReceiptExportState.records.length
      ? `${packageDeliveryQualityOutcomeReceiptExportState.records.length} App-exported package delivery quality/outcome receipt(s) loaded.`
      : "No App-exported package delivery quality/outcome receipts loaded."
  );
  renderStack(
    "portal-package-delivery-quality-outcome-receipt-export",
    packageDeliveryQualityOutcomeReceiptExportState.records,
    renderPackageDeliveryQualityOutcomeReceipt,
    "No customer-safe App package delivery quality/outcome receipts loaded."
  );

  renderStack("package-delivery-account-growth-linkage-list", state.ledger.packageDeliveryAccountGrowthLinkages || [], (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus || "Package delivery account-growth linkage is ready.")}</p>
          <small>${escapeHtml(item.operatorNextAction || "")}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.growthPath || "quality-outcome-retention-referral-expansion")}</span>
        </div>
      </article>
    `;
  }, "No App-owned package delivery account-growth linkages yet.");

  const renderPackageDeliveryAccountGrowthReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.status)}</strong>
      <span>${escapeHtml(item.requestId)}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Package delivery account-growth follow-up is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "")}</small>
    </article>
  `;

  renderStack("package-delivery-account-growth-receipt-list", state.ledger.packageDeliveryAccountGrowthReceipts || [], renderPackageDeliveryAccountGrowthReceipt, "No customer-safe package delivery account-growth receipts yet.");
  renderStack("portal-package-delivery-account-growth-status", (state.ledger.packageDeliveryAccountGrowthReceipts || []).filter((item) => item.customerVisible), renderPackageDeliveryAccountGrowthReceipt, "No customer-visible package delivery account-growth receipts yet.");
  setText(
    "package-delivery-account-growth-receipt-summary",
    packageDeliveryAccountGrowthReceiptExportState.records.length
      ? `${packageDeliveryAccountGrowthReceiptExportState.records.length} App-exported package delivery account-growth receipt(s) loaded.`
      : "No App-exported package delivery account-growth receipts loaded."
  );
  renderStack(
    "portal-package-delivery-account-growth-receipt-export",
    packageDeliveryAccountGrowthReceiptExportState.records,
    renderPackageDeliveryAccountGrowthReceipt,
    "No customer-safe App package delivery account-growth receipts loaded."
  );

  renderStack("package-delivery-retention-report-list", state.ledger.packageDeliveryRetentionReports || [], (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus || "Package delivery retention reporting is ready.")}</p>
          <small>${escapeHtml(item.operatorNextAction || "")}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.reportingPath || "quality-outcome-account-growth-retention-reporting")}</span>
        </div>
      </article>
    `;
  }, "No App-owned package delivery retention reports yet.");

  const renderPackageDeliveryRetentionReportReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.status)}</strong>
      <span>${escapeHtml(item.requestId)}</span>
      <small>${escapeHtml(item.customerSafeMessage || "Package delivery retention reporting is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "")}</small>
    </article>
  `;

  renderStack("package-delivery-retention-report-receipt-list", state.ledger.packageDeliveryRetentionReportReceipts || [], renderPackageDeliveryRetentionReportReceipt, "No customer-safe package delivery retention-report receipts yet.");
  renderStack("portal-package-delivery-retention-report-status", (state.ledger.packageDeliveryRetentionReportReceipts || []).filter((item) => item.customerVisible), renderPackageDeliveryRetentionReportReceipt, "No customer-visible package delivery retention-report receipts yet.");
  setText(
    "package-delivery-retention-report-receipt-summary",
    packageDeliveryRetentionReportReceiptExportState.records.length
      ? `${packageDeliveryRetentionReportReceiptExportState.records.length} App-exported package delivery retention-report receipt(s) loaded.`
      : "No App-exported package delivery retention-report receipts loaded."
  );
  renderStack(
    "portal-package-delivery-retention-report-receipt-export",
    packageDeliveryRetentionReportReceiptExportState.records,
    renderPackageDeliveryRetentionReportReceipt,
    "No customer-safe App package delivery retention-report receipts loaded."
  );

  renderStack("package-delivery-growth-action-list", state.ledger.packageDeliveryGrowthActions || [], (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus || "Package delivery growth action is ready.")}</p>
          <small>${escapeHtml(item.operatorNextAction || "")}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.growthPath || "retention-report-repeat-referral-expansion-action")}</span>
        </div>
      </article>
    `;
  }, "No App-owned package delivery growth actions yet.");

  const renderPackageDeliveryGrowthActionReceipt = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.status)}</strong>
      <span>${escapeHtml(item.requestId)}</span>
      <small>${escapeHtml(item.customerSafeMessage || "A repeat-service, referral, or expansion action is ready.")}</small>
      <small>${escapeHtml(item.nextAction || "")}</small>
    </article>
  `;

  renderStack("package-delivery-growth-action-receipt-list", state.ledger.packageDeliveryGrowthActionReceipts || [], renderPackageDeliveryGrowthActionReceipt, "No customer-safe package delivery growth-action receipts yet.");
  renderStack("portal-package-delivery-growth-action-status", (state.ledger.packageDeliveryGrowthActionReceipts || []).filter((item) => item.customerVisible), renderPackageDeliveryGrowthActionReceipt, "No customer-visible package delivery growth-action receipts yet.");
  setText(
    "package-delivery-growth-action-receipt-summary",
    packageDeliveryGrowthActionReceiptExportState.records.length
      ? `${packageDeliveryGrowthActionReceiptExportState.records.length} App-exported package delivery growth-action receipt(s) loaded.`
      : "No App-exported package delivery growth-action receipts loaded."
  );
  renderStack(
    "portal-package-delivery-growth-action-receipt-export",
    packageDeliveryGrowthActionReceiptExportState.records,
    renderPackageDeliveryGrowthActionReceipt,
    "No customer-safe App package delivery growth-action receipts loaded."
  );
}

function customerResultLabel(status) {
  if (status === "complete") return "result complete";
  if (status === "in-progress") return "review active";
  if (status === "epoch-time-requested") return "timing confirmation";
  if (status === "timing-confirmed") return "timing confirmed";
  if (status === "timing-reschedule-required") return "new timing needed";
  if (status === "recurring-series-active") return "recurring active";
  if (status === "recurring-exception-action-required") return "recurring action";
  if (status === "fit-review") return "result preparation";
  if (status === "compatibility-review") return "compatibility review";
  return "queued";
}

function renderRevenueOutcomeReporting() {
  const opportunityFor = (opportunityId) => (state.ledger.crmOpportunities || []).find((item) => item.id === opportunityId);
  const assignmentFor = (assignmentId) => (state.ledger.araAssignments || []).find((item) => item.id === assignmentId);

  renderStack("revenue-outcome-list", state.ledger.revenueOutcomes || [], (item) => {
    const request = requestFor(item.requestId);
    const opportunity = opportunityFor(item.opportunityId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
          <small>${opportunity ? `Opportunity ${escapeHtml(opportunity.id)}` : "Direct delivery"} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.resultReceiptReady ? "receipt ready" : "awaiting result"}</span>
        </div>
      </article>
    `;
  }, "No revenue outcome records yet.");

  renderStack("delivery-result-receipt-list", state.ledger.deliveryResultReceipts || [], (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(item.id)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(request?.customer || item.requestId)} / ${escapeHtml(item.kind)}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  }, "No delivery result receipts yet.");

  renderStack("ara-review-completion-list", state.ledger.araReviewCompletions || [], (item) => {
    const assignment = assignmentFor(item.assignmentId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(assignment?.assignee || item.assignmentId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${item.reviewComplete ? "review complete" : "review open"} / packet ${escapeHtml(item.packetId)}</small>
        <small>${escapeHtml(item.operatorNextAction)}</small>
      </article>
    `;
  }, "No ARA review completion records yet.");

  renderStack("portal-revenue-outcomes", (state.ledger.revenueOutcomes || []).filter((item) => item.customerVisible), (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Service result")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))}</small>
        </div>
        <div class="item-meta">
          ${chip(customerResultLabel(item.status))}
          <span>${item.resultReceiptReady ? "report open" : "not ready yet"}</span>
        </div>
      </article>
    `;
  }, "No customer-visible result reports yet.");

  renderStack("portal-delivery-results", (state.ledger.deliveryResultReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>Delivery result</strong>
      <span>${escapeHtml(customerResultLabel(item.status))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `, "No customer-visible delivery result receipts yet.");
}

function renewalCustomerLabel(status, ready) {
  if (ready) return "follow-up ready";
  if (status === "compatibility-review") return "compatibility review";
  if (status === "fit-review") return "review first";
  return "waiting for result";
}

function renderCustomerAccountContinuity() {
  const accountFor = (accountId) => (state.ledger.customerAccounts || []).find((item) => item.id === accountId);
  const renewalFor = (renewalId) => (state.ledger.renewalOpportunities || []).find((item) => item.id === renewalId);

  renderStack("customer-account-list", state.ledger.customerAccounts || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.displayName)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${formatJpy(item.lifetimeValueJpy)} / ${escapeHtml(item.accountType)}</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.renewalEligible ? "renewal eligible" : "hold renewal"}</span>
      </div>
    </article>
  `, "No customer account records yet.");

  renderStack("customer-account-history-list", state.ledger.customerAccountHistory || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.event)} / ${formatJpy(item.valueJpy)}</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </article>
    `;
  }, "No customer account history yet.");

  renderStack("renewal-opportunity-list", state.ledger.renewalOpportunities || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.renewalReady ? "ready" : "not ready"}</span>
        </div>
      </article>
    `;
  }, "No renewal opportunities yet.");

  renderStack("customer-follow-up-list", state.ledger.customerFollowUps || [], (item) => {
    const renewal = renewalFor(item.renewalId);
    const account = accountFor(item.accountId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.kind)} / due: ${escapeHtml(item.due)}</small>
        <small>${renewal?.requiresEpochTime ? "EPOCH timing optional" : "no live timing"} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </article>
    `;
  }, "No customer follow-up actions yet.");

  renderStack("portal-account-history", (state.ledger.customerAccountHistory || []).filter((item) => item.customerVisible), (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || "Service history")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(requestFor(item.requestId)?.lane || "service"))}</small>
        </div>
        <div class="item-meta">
          ${chip(customerResultLabel(item.status))}
          <span>${escapeHtml(item.recordedAt)}</span>
        </div>
      </article>
    `;
  }, "No customer-visible account history yet.");

  renderStack("portal-renewal-status", (state.ledger.renewalOpportunities || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(serviceLaneLabel(item.lane))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>Follow-up: ${escapeHtml(item.followUpDue)}</small>
      </div>
      <div class="item-meta">
        ${chip(renewalCustomerLabel(item.status, item.renewalReady))}
        <span>${item.renewalReady ? "available after result" : "waiting"}</span>
      </div>
    </article>
  `, "No customer-visible renewal status yet.");

  renderStack("portal-follow-up-status", (state.ledger.customerFollowUps || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>Follow-up</strong>
      <span>${escapeHtml(renewalCustomerLabel(item.status, true))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
      <small>Due: ${escapeHtml(item.due)}</small>
    </article>
  `, "No customer-visible follow-up status yet.");
}

function growthCustomerLabel(status, ready) {
  if (ready) return "growth ready";
  if (status === "fit-review") return "review first";
  if (status === "compatibility-review") return "compatibility review";
  return "waiting";
}

function renderRetentionReferralGrowth() {
  const accountFor = (accountId) => (state.ledger.customerAccounts || []).find((item) => item.id === accountId);
  const retentionFor = (retentionId) => (state.ledger.retentionHealth || []).find((item) => item.id === retentionId);
  const growthPlanFor = (growthPlanId) => (state.ledger.accountGrowthPlans || []).find((item) => item.id === growthPlanId);
  const conversionFor = (conversionId) => (state.ledger.referralConversions || []).find((item) => item.id === conversionId);

  renderStack("retention-health-list", state.ledger.retentionHealth || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>Score ${escapeHtml(item.retentionScore)} / risk: ${escapeHtml(item.riskLevel)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.growthReady ? "growth ready" : "hold growth"}</span>
        </div>
      </article>
    `;
  }, "No retention health records yet.");

  renderStack("referral-opportunity-list", state.ledger.referralOpportunities || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.referralReady ? "referral ready" : "waiting"}</span>
        </div>
      </article>
    `;
  }, "No referral opportunities yet.");

  renderStack("account-growth-plan-list", state.ledger.accountGrowthPlans || [], (item) => {
    const account = accountFor(item.accountId);
    const retention = retentionFor(item.sourceRetentionId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.planKind)} / ${formatJpy(item.valueJpy)}</small>
          <small>${retention ? `Retention score ${escapeHtml(retention.retentionScore)}` : "Retention record linked"} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.requiresEpochTime ? "EPOCH timing optional" : "lower-labor route"}</span>
        </div>
      </article>
    `;
  }, "No account growth plans yet.");

  renderStack("growth-follow-up-receipt-list", state.ledger.growthFollowUpReceipts || [], (item) => {
    const account = accountFor(item.accountId);
    const growthPlan = growthPlanFor(item.growthPlanId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(growthPlan?.planKind || item.kind)}</small>
        <small>${escapeHtml(item.summary)}</small>
      </article>
    `;
  }, "No growth follow-up receipts yet.");

  renderStack("referral-conversion-list", state.ledger.referralConversions || [], (item) => {
    const account = accountFor(item.accountId);
    const growthPlan = growthPlanFor(item.sourceGrowthPlanId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
          <small>${growthPlan ? escapeHtml(growthPlan.planKind) : "Growth plan linked"} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.conversionReady ? "conversion ready" : "waiting"}</span>
        </div>
      </article>
    `;
  }, "No referral conversion records yet.");

  renderStack("growth-plan-acceptance-list", state.ledger.growthPlanAcceptances || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${item.requiresEpochTime ? "timing only if needed" : "lower-labor accepted"} / accepted: ${item.accepted ? "yes" : "no"}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.acceptedAt || "pending")}</span>
        </div>
      </article>
    `;
  }, "No growth plan acceptances yet.");

  renderStack("expansion-service-request-list", state.ledger.expansionServiceRequests || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.epochTimeNeeded ? "EPOCH timing optional" : "WORKSHOP execution"}</span>
        </div>
      </article>
    `;
  }, "No expansion service requests yet.");

  renderStack("conversion-status-event-list", state.ledger.conversionStatusEvents || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(item.label)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(account?.displayName || item.accountId)}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  }, "No conversion status events yet.");

  renderStack("conversion-receipt-list", state.ledger.conversionReceipts || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.kind)}</small>
        <small>${escapeHtml(item.summary)}</small>
      </article>
    `;
  }, "No conversion receipts yet.");

  renderStack("portal-retention-status", (state.ledger.retentionHealth || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>Retention status</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${item.referralEligible ? "Referral path available after result acceptance" : "Referral path waiting"}</small>
      </div>
      <div class="item-meta">
        ${chip(growthCustomerLabel(item.status, item.growthReady))}
        <span>${escapeHtml(item.riskLevel)}</span>
      </div>
    </article>
  `, "No customer-visible retention status yet.");

  renderStack("portal-referral-path", (state.ledger.referralOpportunities || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(serviceLaneLabel(item.lane))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
      </div>
      <div class="item-meta">
        ${chip(item.referralReady ? "referral path ready" : "waiting")}
        <span>${escapeHtml(item.updatedAt)}</span>
      </div>
    </article>
  `, "No customer-visible referral path yet.");

  renderStack("portal-growth-plan-status", (state.ledger.accountGrowthPlans || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.planKind)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
      </div>
      <div class="item-meta">
        ${chip(growthCustomerLabel(item.status, item.growthReady))}
        <span>${item.requiresEpochTime ? "timing reviewed only if needed" : "no live timing required"}</span>
      </div>
    </article>
  `, "No customer-visible growth plan status yet.");

  renderStack("portal-growth-receipts", (state.ledger.growthFollowUpReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>Growth follow-up</strong>
      <span>${escapeHtml(growthCustomerLabel(item.status, true))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `, "No customer-visible growth receipts yet.");

  renderStack("portal-referral-conversions", (state.ledger.referralConversions || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(serviceLaneLabel(item.lane))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
      </div>
      <div class="item-meta">
        ${chip(item.conversionReady ? "conversion ready" : "waiting")}
        <span>${escapeHtml(item.updatedAt)}</span>
      </div>
    </article>
  `, "No customer-visible referral conversions yet.");

  renderStack("portal-growth-acceptances", (state.ledger.growthPlanAcceptances || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${item.requiresEpochTime ? "Scoped next step" : "Lower-labor next step"}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
      </div>
      <div class="item-meta">
        ${chip(item.accepted ? "accepted" : "waiting")}
        <span>${item.requiresEpochTime ? "timing checked only if needed" : "no live timing required"}</span>
      </div>
    </article>
  `, "No customer-visible growth acceptance records yet.");

  renderStack("portal-expansion-requests", (state.ledger.expansionServiceRequests || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(serviceLaneLabel(item.lane))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
      </div>
      <div class="item-meta">
        ${chip(growthCustomerLabel(item.status, true))}
        <span>${item.epochTimeNeeded ? "timing reviewed only if needed" : "WORKSHOP request"}</span>
      </div>
    </article>
  `, "No customer-visible expansion service requests yet.");

  renderStack("portal-conversion-status", (state.ledger.conversionStatusEvents || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.label)}</strong>
      <span>${escapeHtml(growthCustomerLabel(item.status, true))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `, "No customer-visible conversion status yet.");

  renderStack("portal-conversion-receipts", (state.ledger.conversionReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>Conversion receipt</strong>
      <span>${escapeHtml(growthCustomerLabel(item.status, true))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `, "No customer-visible conversion receipts yet.");
}

function renderDeliveryOverview() {
  renderStack("portal-delivery", state.ledger.deliveryStates, (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.label)}</strong>
        <p>${escapeHtml(item.detail)}</p>
      </div>
      ${chip(item.state)}
    </article>
  `);
}

function renderDeliveryLifecycles() {
  const renderLifecycle = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.currentLabel)} / phase: ${escapeHtml(item.phase)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.currentStatus)}
          <span>${escapeHtml(item.updatedAt)}</span>
        </div>
      </article>
    `;
  };
  const renderPortalLifecycle = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.currentLabel)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.currentStatus)}
          <span>${escapeHtml(item.updatedAt)}</span>
        </div>
      </article>
    `;
  };
  renderStack("delivery-lifecycle-list", state.ledger.deliveryLifecycles, renderLifecycle);
  renderStack("portal-delivery-lifecycle", state.ledger.deliveryLifecycles, renderPortalLifecycle);
}

function renderDeliveryTransitions() {
  renderStack("delivery-transition-list", state.ledger.deliveryTransitions, (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(item.label)}</strong>
        <span>${escapeHtml(item.fromStatus)} -> ${escapeHtml(item.toStatus)}</span>
        <small>${escapeHtml(request?.customer || item.requestId)} / receipt ${escapeHtml(item.receiptId)}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  }, "No delivery transitions yet.");
}

function renderCustomerStatusEvents() {
  const renderEvent = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(item.label)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(request?.customer || item.requestId)}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  };
  renderStack("customer-status-event-list", state.ledger.customerStatusEvents, renderEvent, "No customer-safe status events yet.");
  renderStack("portal-status-list", state.ledger.customerStatusEvents.slice(0, 6), renderEvent, "No customer-visible updates yet.");
}

function renderCustomerServiceStatusExports() {
  setText(
    "customer-service-status-export-summary",
    customerServiceStatusExportState.records.length
      ? `${customerServiceStatusExportState.records.length} App-exported service status record(s) loaded.`
      : "No App-exported service status records loaded."
  );

  renderStack(
    "portal-customer-service-status-export",
    customerServiceStatusExportState.records,
    (item) => `
      <article class="mini-row">
        <strong>${escapeHtml(item.status)}</strong>
        <span>${escapeHtml(item.serviceLane)} / ${escapeHtml(item.requestId)}</span>
        <small>${escapeHtml(item.customerSafeMessage)}</small>
        <small>${escapeHtml(item.nextAction)}</small>
      </article>
    `,
    "No customer-safe App service status exports loaded."
  );
}

function renderServiceLifecycleActions() {
  renderStack(
    "portal-service-lifecycle-actions",
    (state.ledger.serviceLifecycleActions || []).filter((item) => item.customerVisible),
    (item) => {
      const request = requestFor(item.requestId);
      return `
        <article class="mini-row">
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <span>${escapeHtml(item.status)}</span>
          <small>${escapeHtml(item.customerSafeStatus)}</small>
          <small>${escapeHtml(item.reason)}</small>
        </article>
      `;
    },
    "No customer-safe service lifecycle actions yet."
  );
}

function renderServiceLifecycleStatusExports() {
  setText(
    "service-lifecycle-status-export-summary",
    serviceLifecycleStatusExportState.records.length
      ? `${serviceLifecycleStatusExportState.records.length} App-exported service lifecycle status record(s) loaded.`
      : "No App-exported service lifecycle status records loaded."
  );

  renderStack(
    "portal-service-lifecycle-status-export",
    serviceLifecycleStatusExportState.records,
    (item) => `
      <article class="mini-row">
        <strong>${escapeHtml(item.status)}</strong>
        <span>${escapeHtml(item.requestedServiceLane)} / ${escapeHtml(item.requestId)}</span>
        <small>${escapeHtml(item.customerSafeMessage)}</small>
        <small>${escapeHtml(item.nextAction)}</small>
      </article>
    `,
    "No customer-safe App service lifecycle status exports loaded."
  );
}

function renderEpochHandoffs() {
  renderStack("epoch-handoff-list", state.ledger.epochTimeHandoffs, (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(item.kind)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(request?.customer || item.requestId)} / target: ${escapeHtml(item.target)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.bridgeReady ? "bridge ready" : "bridge staged"}</span>
        </div>
      </article>
    `;
  }, "No EPOCH timing handoffs yet.");
}

function renderEpochHandoffPayloads() {
  const renderPayload = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="payload-card">
        <div class="payload-header">
          <div>
            <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
            <p>${escapeHtml(item.customerSafeStatus)}</p>
          </div>
          <div class="item-meta">
            ${chip(item.bridgeState)}
            <span>${escapeHtml(item.kind)}</span>
          </div>
        </div>
        <div class="payload-section">
          <h3>EPOCH schedule request preview</h3>
          ${renderFieldGrid([
            ["requester", item.requestPreview?.requester],
            ["need", item.requestPreview?.need],
            ["requestedWindow", item.requestPreview?.requestedWindow],
            ["timezone", item.requestPreview?.timezone],
            ["status", item.requestPreview?.status],
            ["sandboxOnly", item.requestPreview?.sandboxOnly],
            ["providerGoLiveRequested", item.requestPreview?.providerGoLiveRequested],
            ["customerSafeStatus", item.requestPreview?.customerSafeStatus],
            ["createdAt", item.requestPreview?.createdAt]
          ])}
        </div>
        <div class="payload-section">
          <h3>EPOCH schedule status preview</h3>
          ${renderFieldGrid([
            ["title", item.statusPreview?.title],
            ["owner", item.statusPreview?.owner],
            ["status", item.statusPreview?.status],
            ["time", item.statusPreview?.time],
            ["startIso", item.statusPreview?.startIso],
            ["endIso", item.statusPreview?.endIso],
            ["timezone", item.statusPreview?.timezone],
            ["customerSafeStatus", item.statusPreview?.customerSafeStatus],
            ["detail", item.statusPreview?.detail]
          ])}
        </div>
      </article>
    `;
  };
  const renderPortalPayload = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="payload-card">
        <div class="payload-header">
          <div>
            <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
            <p>${escapeHtml(item.customerSafeStatus)}</p>
          </div>
          <div class="item-meta">
            ${chip(item.status)}
            <span>${escapeHtml(item.kind)}</span>
          </div>
        </div>
        <div class="payload-section">
          <h3>Timing request</h3>
          ${renderFieldGrid([
            ["need", item.requestPreview?.need],
            ["requestedWindow", item.requestPreview?.requestedWindow],
            ["status", item.requestPreview?.status],
            ["customerSafeStatus", item.requestPreview?.customerSafeStatus]
          ])}
        </div>
        <div class="payload-section">
          <h3>Timing status</h3>
          ${renderFieldGrid([
            ["title", item.statusPreview?.title],
            ["time", item.statusPreview?.time],
            ["status", item.statusPreview?.status],
            ["customerSafeStatus", item.statusPreview?.customerSafeStatus]
          ])}
        </div>
      </article>
    `;
  };
  renderStack("epoch-handoff-payload-list", state.ledger.epochTimeHandoffs, renderPayload, "No EPOCH payload previews yet.");
  renderStack("portal-handoff-payload-list", state.ledger.epochTimeHandoffs, renderPortalPayload, "No timing payload previews yet.");
}

function renderEpochTimingReturns() {
  const payloadFor = (payloadId) => (state.ledger.epochTimingReturnPayloads || []).find((item) => item.id === payloadId);
  const renderPayload = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.returnType)} / handoff ${escapeHtml(item.sourceHandoffId)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.epochStatus)}
          <span>${escapeHtml(item.confirmedWindow || "new window needed")}</span>
        </div>
      </article>
    `;
  };
  const renderConsumption = (item) => {
    const request = requestFor(item.requestId);
    const payload = payloadFor(item.returnPayloadId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(payload?.returnType || item.returnPayloadId)} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };
  const renderReceipt = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.summary)}</small>
        <small>${escapeHtml(item.customerSafeStatus || "")}</small>
      </article>
    `;
  };
  const renderPortalConsumption = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Timing status")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
        </div>
        <div class="item-meta">
          ${chip(item.status === "timing-confirmed" ? "timing confirmed" : "new window needed")}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };

  renderStack("epoch-timing-return-list", state.ledger.epochTimingReturnPayloads || [], renderPayload, "No EPOCH timing returns yet.");
  renderStack("epoch-timing-consumption-list", state.ledger.epochTimingReturnConsumptions || [], renderConsumption, "No timing return consumption records yet.");
  renderStack("timing-return-receipt-list", state.ledger.timingReturnReceipts || [], renderReceipt, "No timing return receipts yet.");
  renderStack("portal-timing-return-status", (state.ledger.epochTimingReturnConsumptions || []).filter((item) => item.customerVisible), renderPortalConsumption, "No customer-visible timing returns yet.");
}

function renderEpochRevisedCalendarTiming() {
  const payloadFor = (payloadId) => (state.ledger.epochRevisedCalendarTimingPayloads || []).find((item) => item.id === payloadId);
  const renderPayload = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.timingDisplayLabel)} / ${escapeHtml(item.constraintSummary)}</small>
          <small>Gate: ${escapeHtml(item.conversionGateReason)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.calendarSystemLabel)}
          <span>${item.epochTimingProviderOnly && !item.workshopCalendarOwnership ? "provider only" : "blocked"}</span>
        </div>
      </article>
    `;
  };
  const renderConsumption = (item) => {
    const request = requestFor(item.requestId);
    const payload = payloadFor(item.payloadId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(payload?.timingDisplayLabel || item.payloadId)} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };
  const renderReceipt = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.summary)}</small>
        <small>${escapeHtml(item.customerSafeStatus || "")}</small>
      </article>
    `;
  };
  const renderPortalStatus = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Revised timing context")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
        </div>
        <div class="item-meta">
          ${chip("EPOCH timing context")}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };

  renderStack("epoch-revised-calendar-timing-list", state.ledger.epochRevisedCalendarTimingPayloads || [], renderPayload, "No EPOCH revised timing context yet.");
  renderStack("epoch-revised-calendar-consumption-list", state.ledger.epochRevisedCalendarTimingConsumptions || [], renderConsumption, "No revised timing consumption records yet.");
  renderStack("revised-calendar-timing-receipt-list", state.ledger.revisedCalendarTimingReceipts || [], renderReceipt, "No revised timing receipts yet.");
  renderStack("portal-revised-calendar-timing-status", (state.ledger.epochRevisedCalendarTimingConsumptions || []).filter((item) => item.customerVisible), renderPortalStatus, "No customer-visible revised timing context yet.");
}

function renderTimingAwareFollowUps() {
  const requestForFollowUp = (requestId) => requestFor(requestId);
  const renderFollowUp = (item) => {
    const request = requestForFollowUp(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
          <small>Payload ${escapeHtml(item.revisedTimingPayloadId)} / receipt ${escapeHtml(item.revisedTimingReceiptId)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.epochTimingProviderOnly && !item.workshopCalendarOwnership ? "EPOCH timing provider only" : "boundary blocked"}</span>
        </div>
      </article>
    `;
  };
  const renderRenewalReceipt = (item) => {
    const request = requestForFollowUp(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.summary)}</small>
        <small>${escapeHtml(item.customerSafeStatus || "")}</small>
      </article>
    `;
  };
  const renderPortalFollowUp = (item) => {
    const request = requestForFollowUp(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Service follow-up")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.renewalPromptReady ? "Follow-up ready" : "Follow-up under review")}</small>
        </div>
        <div class="item-meta">
          ${chip("WORKSHOP follow-up")}
          <span>EPOCH timing provider only</span>
        </div>
      </article>
    `;
  };
  const renderPortalRenewal = (item) => {
    const request = requestForFollowUp(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(request?.customer || "Renewal receipt")}</strong>
        <span>${escapeHtml(item.renewalReady ? "renewal ready" : item.status)}</span>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  };
  const renderDeliveryOutcomeAutomation = (item) => {
    const request = requestForFollowUp(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Delivery outcome automation")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>EPOCH timing provider only</span>
        </div>
      </article>
    `;
  };
  const renderDeliveryOutcomeReceipt = (item) => {
    const request = requestForFollowUp(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Delivery outcome receipt")}</strong>
          <p>${escapeHtml(item.customerSafeMessage)}</p>
          <small>${escapeHtml(item.nextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>customer-safe</span>
        </div>
      </article>
    `;
  };
  const renderPortalDeliveryOutcomeReceipt = (item) => `
      <article class="mini-row">
        <strong>${escapeHtml(item.status)}</strong>
        <span>${escapeHtml(item.requestId)}</span>
        <small>${escapeHtml(item.customerSafeMessage)}</small>
        <small>${escapeHtml(item.nextAction)}</small>
      </article>
    `;
  const renderAccountGrowthAutomation = (item) => {
    const request = requestForFollowUp(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Account growth automation")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.growthPath || "retention-referral-expansion")}</span>
        </div>
      </article>
    `;
  };
  const renderAccountGrowthReceipt = (item) => {
    const request = requestForFollowUp(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Account growth receipt")}</strong>
          <p>${escapeHtml(item.customerSafeMessage)}</p>
          <small>${escapeHtml(item.nextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>customer-safe growth</span>
        </div>
      </article>
    `;
  };
  const renderPortalAccountGrowthReceipt = (item) => `
      <article class="mini-row">
        <strong>${escapeHtml(item.status)}</strong>
        <span>${escapeHtml(item.requestId)}</span>
        <small>${escapeHtml(item.customerSafeMessage)}</small>
        <small>${escapeHtml(item.nextAction)}</small>
      </article>
    `;

  renderStack("timing-aware-follow-up-list", state.ledger.timingAwareServiceFollowUps || [], renderFollowUp, "No timing-aware service follow-ups yet.");
  renderStack("timing-aware-renewal-receipt-list", state.ledger.timingAwareRenewalReceipts || [], renderRenewalReceipt, "No timing-aware renewal receipts yet.");
  renderStack("delivery-outcome-automation-list", state.ledger.deliveryOutcomeAutomations || [], renderDeliveryOutcomeAutomation, "No delivery outcome automation records yet.");
  renderStack("delivery-outcome-automation-receipt-list", state.ledger.deliveryOutcomeAutomationReceipts || [], renderDeliveryOutcomeReceipt, "No delivery outcome automation receipts yet.");
  renderStack("account-growth-automation-list", state.ledger.accountGrowthAutomations || [], renderAccountGrowthAutomation, "No account-growth automation records yet.");
  renderStack("account-growth-automation-receipt-list", state.ledger.accountGrowthAutomationReceipts || [], renderAccountGrowthReceipt, "No account-growth automation receipts yet.");
  renderStack("portal-timing-aware-follow-up-status", (state.ledger.timingAwareServiceFollowUps || []).filter((item) => item.customerVisible), renderPortalFollowUp, "No customer-visible timing-aware follow-up status yet.");
  renderStack("portal-timing-aware-renewal-receipts", (state.ledger.timingAwareRenewalReceipts || []).filter((item) => item.customerVisible), renderPortalRenewal, "No customer-visible timing-aware renewal receipts yet.");
  renderStack("portal-delivery-outcome-automation-receipts", (state.ledger.deliveryOutcomeAutomationReceipts || []).filter((item) => item.customerVisible), renderPortalDeliveryOutcomeReceipt, "No customer-visible delivery outcome automation receipts yet.");
  renderStack("portal-account-growth-automation-receipts", (state.ledger.accountGrowthAutomationReceipts || []).filter((item) => item.customerVisible), renderPortalAccountGrowthReceipt, "No customer-visible account-growth automation receipts yet.");
  setText(
    "delivery-outcome-automation-receipt-summary",
    deliveryOutcomeAutomationReceiptExportState.records.length
      ? `${deliveryOutcomeAutomationReceiptExportState.records.length} App-exported delivery outcome receipt(s) loaded.`
      : "No App-exported delivery outcome automation receipts loaded."
  );
  renderStack(
    "portal-delivery-outcome-automation-receipt-export",
    deliveryOutcomeAutomationReceiptExportState.records,
    renderPortalDeliveryOutcomeReceipt,
    "No customer-safe App delivery outcome automation receipts loaded."
  );
  setText(
    "account-growth-automation-receipt-summary",
    accountGrowthAutomationReceiptExportState.records.length
      ? `${accountGrowthAutomationReceiptExportState.records.length} App-exported account-growth receipt(s) loaded.`
      : "No App-exported account-growth automation receipts loaded."
  );
  renderStack(
    "portal-account-growth-automation-receipt-export",
    accountGrowthAutomationReceiptExportState.records,
    renderPortalAccountGrowthReceipt,
    "No customer-safe App account-growth automation receipts loaded."
  );
}

function renderEpochCapacityWaitlist() {
  const payloadFor = (payloadId) => (state.ledger.epochCapacityWaitlistPayloads || []).find((item) => item.id === payloadId);
  const renderPayload = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.payloadKind)} / handoff ${escapeHtml(item.sourceHandoffId)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.epochStatus)}
          <span>${escapeHtml(item.epochStatus === "promoted" ? `${item.releasedCapacity || 0} released` : `position ${item.waitlistPosition || 0}`)}</span>
        </div>
      </article>
    `;
  };
  const renderConsumption = (item) => {
    const request = requestFor(item.requestId);
    const payload = payloadFor(item.capacityPayloadId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(payload?.epochStatus || item.capacityPayloadId)} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };
  const renderReceipt = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.summary)}</small>
        <small>${escapeHtml(item.customerSafeStatus || "")}</small>
      </article>
    `;
  };
  const renderPortalConsumption = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Timing capacity status")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
        </div>
        <div class="item-meta">
          ${chip(item.status === "timing-promoted" ? "timing promoted" : "timing waitlisted")}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };

  renderStack("epoch-capacity-waitlist-list", state.ledger.epochCapacityWaitlistPayloads || [], renderPayload, "No EPOCH capacity/waitlist payloads yet.");
  renderStack("epoch-capacity-consumption-list", state.ledger.epochCapacityWaitlistConsumptions || [], renderConsumption, "No capacity/waitlist consumption records yet.");
  renderStack("capacity-waitlist-receipt-list", state.ledger.capacityWaitlistReceipts || [], renderReceipt, "No capacity/waitlist receipts yet.");
  renderStack("portal-capacity-waitlist-status", (state.ledger.epochCapacityWaitlistConsumptions || []).filter((item) => item.customerVisible), renderPortalConsumption, "No customer-visible capacity or waitlist updates yet.");
}

function renderEpochRecurringSeries() {
  const payloadFor = (payloadId) => (state.ledger.epochRecurringSeriesPayloads || []).find((item) => item.id === payloadId);
  const renderPayload = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.recurrenceLabel)} / ${escapeHtml(item.nextOccurrence)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.seriesStatus)}
          <span>${escapeHtml(`${item.exceptionCount || 0} exceptions`)}</span>
        </div>
      </article>
    `;
  };
  const renderConsumption = (item) => {
    const request = requestFor(item.requestId);
    const payload = payloadFor(item.recurringPayloadId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(payload?.recurrenceLabel || item.recurringPayloadId)} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };
  const renderReceipt = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.summary)}</small>
        <small>${escapeHtml(item.customerSafeStatus || "")}</small>
      </article>
    `;
  };
  const renderPortalConsumption = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Recurring service status")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
        </div>
        <div class="item-meta">
          ${chip(item.status === "recurring-series-active" ? "recurring active" : "action needed")}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };

  renderStack("epoch-recurring-series-list", state.ledger.epochRecurringSeriesPayloads || [], renderPayload, "No EPOCH recurring-series payloads yet.");
  renderStack("epoch-recurring-consumption-list", state.ledger.epochRecurringSeriesConsumptions || [], renderConsumption, "No recurring-series consumption records yet.");
  renderStack("recurring-series-receipt-list", state.ledger.recurringSeriesReceipts || [], renderReceipt, "No recurring-series receipts yet.");
  renderStack("portal-recurring-series-status", (state.ledger.epochRecurringSeriesConsumptions || []).filter((item) => item.customerVisible), renderPortalConsumption, "No customer-visible recurring service status yet.");
}

function renderReceipts() {
  renderStack("receipt-list", state.ledger.receipts, (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.id)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.kind || "receipt")}</small>
      <small>${escapeHtml(item.summary)}</small>
    </article>
  `);

  renderStack(
    "portal-receipt-list",
    state.ledger.receipts.filter((item) => item.customerVisible).slice(0, 6),
    (item) => `
      <article class="mini-row">
        <strong>${escapeHtml(item.id)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.summary)}</small>
      </article>
    `,
    "No customer-facing receipts yet."
  );
}

function renderForms() {
  renderOptions("service-lane-select", serviceLaneOptions, "submission-review");
  renderOptions("service-lifecycle-action-select", serviceLifecycleActionOptions, "change-scope");
  renderOptions("service-lifecycle-lane-select", serviceLaneOptions, "submission-review");
  renderOptions("age-band-select", ageBandOptions, "adult");
  renderOptions("material-status-select", materialStatusOptions, "ready");
}

function renderAll() {
  renderForms();
  renderStats();
  renderRevenueLanes();
  renderRequests();
  renderSubmissions();
  renderPackages();
  renderRevenueOperatingSystem();
  renderPackageEligibility();
  renderCompatibilityGates();
  renderSubmissionReviewCycles();
  renderCohortPlans();
  renderCrmAndAra();
  renderCrmAraWorkflow();
  renderRevenueOutcomeReporting();
  renderCustomerAccountContinuity();
  renderRetentionReferralGrowth();
  renderDeliveryOverview();
  renderDeliveryLifecycles();
  renderDeliveryTransitions();
  renderCustomerStatusEvents();
  renderCustomerServiceStatusExports();
  renderServiceLifecycleActions();
  renderServiceLifecycleStatusExports();
  renderEpochHandoffs();
  renderEpochHandoffPayloads();
  renderEpochTimingReturns();
  renderEpochRevisedCalendarTiming();
  renderTimingAwareFollowUps();
  renderEpochCapacityWaitlist();
  renderEpochRecurringSeries();
  renderReceipts();
}

function prependDeliveryOverview(lifecycle) {
  state.ledger.deliveryStates.unshift({
    id: `state-${Date.now().toString(36)}`,
    label: lifecycle.currentLabel,
    detail: lifecycle.customerSafeStatus,
    state: lifecycle.currentStatus
  });
}

async function handleCustomerServiceStatusImport(event) {
  event.preventDefault();
  const fileInput = byId("customer-service-status-file");
  const confirmation = byId("customer-service-status-export-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose customer-service-status.json first.";
    return;
  }

  try {
    const imported = normalizeCustomerServiceStatusPayload(JSON.parse(await file.text()));
    if (!imported.length) {
      if (confirmation) confirmation.textContent = "No customer-safe Webportal-ready service status records found.";
      return;
    }

    const byStatusId = new Map(customerServiceStatusExportState.records.map((item) => [item.statusId, item]));
    for (const item of imported) byStatusId.set(item.statusId, item);
    customerServiceStatusExportState.records = Array.from(byStatusId.values());
    saveCustomerServiceStatusExports(customerServiceStatusExportState.records);
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Status export could not be read.";
  }
}

function handleClearCustomerServiceStatusExports() {
  customerServiceStatusExportState.records = [];
  saveCustomerServiceStatusExports(customerServiceStatusExportState.records);
  const fileInput = byId("customer-service-status-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleServiceLifecycleStatusImport(event) {
  event.preventDefault();
  const fileInput = byId("service-lifecycle-status-file");
  const confirmation = byId("service-lifecycle-status-export-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose service-lifecycle-status.json first.";
    return;
  }

  try {
    const imported = normalizeServiceLifecycleStatusPayload(JSON.parse(await file.text()));
    if (!imported.length) {
      if (confirmation) confirmation.textContent = "No customer-safe Webportal-ready service lifecycle status records found.";
      return;
    }

    const byStatusId = new Map(serviceLifecycleStatusExportState.records.map((item) => [item.statusId, item]));
    for (const item of imported) byStatusId.set(item.statusId, item);
    serviceLifecycleStatusExportState.records = Array.from(byStatusId.values());
    saveServiceLifecycleStatusExports(serviceLifecycleStatusExportState.records);
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Service lifecycle status export could not be read.";
  }
}

function handleClearServiceLifecycleStatusExports() {
  serviceLifecycleStatusExportState.records = [];
  saveServiceLifecycleStatusExports(serviceLifecycleStatusExportState.records);
  const fileInput = byId("service-lifecycle-status-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleDeliveryOutcomeAutomationReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("delivery-outcome-automation-receipt-file");
  const confirmation = byId("delivery-outcome-automation-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose delivery-outcome-automation-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeDeliveryOutcomeAutomationReceiptPayload(JSON.parse(await file.text()));
    if (!imported.length) {
      if (confirmation) confirmation.textContent = "No customer-safe Webportal-ready delivery outcome automation receipts found.";
      return;
    }

    const byReceiptId = new Map(deliveryOutcomeAutomationReceiptExportState.records.map((item) => [item.receiptId, item]));
    for (const item of imported) byReceiptId.set(item.receiptId, item);
    deliveryOutcomeAutomationReceiptExportState.records = Array.from(byReceiptId.values());
    saveDeliveryOutcomeAutomationReceiptExports(deliveryOutcomeAutomationReceiptExportState.records);
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Delivery outcome automation receipt export could not be read.";
  }
}

function handleClearDeliveryOutcomeAutomationReceiptExports() {
  deliveryOutcomeAutomationReceiptExportState.records = [];
  saveDeliveryOutcomeAutomationReceiptExports(deliveryOutcomeAutomationReceiptExportState.records);
  const fileInput = byId("delivery-outcome-automation-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleAccountGrowthAutomationReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("account-growth-automation-receipt-file");
  const confirmation = byId("account-growth-automation-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose account-growth-automation-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeAccountGrowthAutomationReceiptPayload(JSON.parse(await file.text()));
    if (!imported.length) {
      if (confirmation) confirmation.textContent = "No customer-safe Webportal-ready account-growth automation receipts found.";
      return;
    }

    const byReceiptId = new Map(accountGrowthAutomationReceiptExportState.records.map((item) => [item.receiptId, item]));
    for (const item of imported) byReceiptId.set(item.receiptId, item);
    accountGrowthAutomationReceiptExportState.records = Array.from(byReceiptId.values());
    saveAccountGrowthAutomationReceiptExports(accountGrowthAutomationReceiptExportState.records);
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Account-growth automation receipt export could not be read.";
  }
}

function handleClearAccountGrowthAutomationReceiptExports() {
  accountGrowthAutomationReceiptExportState.records = [];
  saveAccountGrowthAutomationReceiptExports(accountGrowthAutomationReceiptExportState.records);
  const fileInput = byId("account-growth-automation-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleAraReviewStatusReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("ara-review-status-receipt-file");
  const confirmation = byId("ara-review-status-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose ara-review-status-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeAraReviewStatusReceiptPayload(JSON.parse(await file.text()));
    if (!imported.length) {
      if (confirmation) confirmation.textContent = "No customer-safe Webportal-ready ARA review status receipts found.";
      return;
    }

    const byReceiptId = new Map(araReviewStatusReceiptExportState.records.map((item) => [item.receiptId, item]));
    for (const item of imported) byReceiptId.set(item.receiptId, item);
    araReviewStatusReceiptExportState.records = Array.from(byReceiptId.values());
    saveAraReviewStatusReceiptExports(araReviewStatusReceiptExportState.records);
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "ARA review status receipt export could not be read.";
  }
}

function handleClearAraReviewStatusReceiptExports() {
  araReviewStatusReceiptExportState.records = [];
  saveAraReviewStatusReceiptExports(araReviewStatusReceiptExportState.records);
  const fileInput = byId("ara-review-status-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleAraMaterializationReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("ara-materialization-receipt-file");
  const confirmation = byId("ara-materialization-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose ara-materialization-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeAraMaterializationReceiptPayload(JSON.parse(await file.text()));
    if (!imported.length) {
      if (confirmation) confirmation.textContent = "No customer-safe Webportal-ready ARA materialization receipts found.";
      return;
    }

    const byReceiptId = new Map(araMaterializationReceiptExportState.records.map((item) => [item.receiptId, item]));
    for (const item of imported) byReceiptId.set(item.receiptId, item);
    araMaterializationReceiptExportState.records = Array.from(byReceiptId.values());
    saveAraMaterializationReceiptExports(araMaterializationReceiptExportState.records);
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "ARA materialization receipt export could not be read.";
  }
}

function handleClearAraMaterializationReceiptExports() {
  araMaterializationReceiptExportState.records = [];
  saveAraMaterializationReceiptExports(araMaterializationReceiptExportState.records);
  const fileInput = byId("ara-materialization-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleServiceMaterialReuseReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("service-material-reuse-receipt-file");
  const confirmation = byId("service-material-reuse-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose service-material-reuse-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeServiceMaterialReuseReceiptPayload(JSON.parse(await file.text()));
    if (!imported.length) {
      if (confirmation) confirmation.textContent = "No customer-safe Webportal-ready service material reuse receipts found.";
      return;
    }

    const byReceiptId = new Map(serviceMaterialReuseReceiptExportState.records.map((item) => [item.receiptId, item]));
    for (const item of imported) byReceiptId.set(item.receiptId, item);
    serviceMaterialReuseReceiptExportState.records = Array.from(byReceiptId.values());
    saveServiceMaterialReuseReceiptExports(serviceMaterialReuseReceiptExportState.records);
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Service material reuse receipt export could not be read.";
  }
}

function handleClearServiceMaterialReuseReceiptExports() {
  serviceMaterialReuseReceiptExportState.records = [];
  saveServiceMaterialReuseReceiptExports(serviceMaterialReuseReceiptExportState.records);
  const fileInput = byId("service-material-reuse-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handlePackageDeliveryChecklistReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("package-delivery-checklist-receipt-file");
  const confirmation = byId("package-delivery-checklist-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose package-delivery-checklist-receipts.json first.";
    return;
  }

  try {
    const imported = normalizePackageDeliveryChecklistReceiptPayload(JSON.parse(await file.text()));
    if (!imported.length) {
      if (confirmation) confirmation.textContent = "No customer-safe Webportal-ready package delivery checklist receipts found.";
      return;
    }

    const byReceiptId = new Map(packageDeliveryChecklistReceiptExportState.records.map((item) => [item.receiptId, item]));
    for (const item of imported) byReceiptId.set(item.receiptId, item);
    packageDeliveryChecklistReceiptExportState.records = Array.from(byReceiptId.values());
    savePackageDeliveryChecklistReceiptExports(packageDeliveryChecklistReceiptExportState.records);
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Package delivery checklist receipt export could not be read.";
  }
}

function handleClearPackageDeliveryChecklistReceiptExports() {
  packageDeliveryChecklistReceiptExportState.records = [];
  savePackageDeliveryChecklistReceiptExports(packageDeliveryChecklistReceiptExportState.records);
  const fileInput = byId("package-delivery-checklist-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handlePackageDeliveryChecklistAutomationReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("package-delivery-checklist-automation-receipt-file");
  const confirmation = byId("package-delivery-checklist-automation-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose package-delivery-checklist-automation-receipts.json first.";
    return;
  }

  try {
    const imported = normalizePackageDeliveryChecklistAutomationReceiptPayload(JSON.parse(await file.text()));
    if (!imported.length) {
      if (confirmation) confirmation.textContent = "No customer-safe Webportal-ready package delivery automation receipts found.";
      return;
    }

    const byReceiptId = new Map(packageDeliveryChecklistAutomationReceiptExportState.records.map((item) => [item.receiptId, item]));
    for (const item of imported) byReceiptId.set(item.receiptId, item);
    packageDeliveryChecklistAutomationReceiptExportState.records = Array.from(byReceiptId.values());
    savePackageDeliveryChecklistAutomationReceiptExports(packageDeliveryChecklistAutomationReceiptExportState.records);
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Package delivery automation receipt export could not be read.";
  }
}

function handleClearPackageDeliveryChecklistAutomationReceiptExports() {
  packageDeliveryChecklistAutomationReceiptExportState.records = [];
  savePackageDeliveryChecklistAutomationReceiptExports(packageDeliveryChecklistAutomationReceiptExportState.records);
  const fileInput = byId("package-delivery-checklist-automation-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handlePackageDeliveryExecutionReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("package-delivery-execution-receipt-file");
  const confirmation = byId("package-delivery-execution-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose package-delivery-execution-receipts.json first.";
    return;
  }

  try {
    const imported = normalizePackageDeliveryExecutionReceiptPayload(JSON.parse(await file.text()));
    if (!imported.length) {
      if (confirmation) confirmation.textContent = "No customer-safe Webportal-ready package delivery execution receipts found.";
      return;
    }

    const byReceiptId = new Map(packageDeliveryExecutionReceiptExportState.records.map((item) => [item.receiptId, item]));
    for (const item of imported) byReceiptId.set(item.receiptId, item);
    packageDeliveryExecutionReceiptExportState.records = Array.from(byReceiptId.values());
    savePackageDeliveryExecutionReceiptExports(packageDeliveryExecutionReceiptExportState.records);
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Package delivery execution receipt export could not be read.";
  }
}

function handleClearPackageDeliveryExecutionReceiptExports() {
  packageDeliveryExecutionReceiptExportState.records = [];
  savePackageDeliveryExecutionReceiptExports(packageDeliveryExecutionReceiptExportState.records);
  const fileInput = byId("package-delivery-execution-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handlePackageDeliveryFollowUpRenewalReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("package-delivery-followup-renewal-receipt-file");
  const confirmation = byId("package-delivery-followup-renewal-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose package-delivery-followup-renewal-receipts.json first.";
    return;
  }

  try {
    const imported = normalizePackageDeliveryFollowUpRenewalReceiptPayload(JSON.parse(await file.text()));
    if (!imported.length) {
      if (confirmation) confirmation.textContent = "No customer-safe Webportal-ready package delivery follow-up/renewal receipts found.";
      return;
    }

    const byReceiptId = new Map(packageDeliveryFollowUpRenewalReceiptExportState.records.map((item) => [item.receiptId, item]));
    for (const item of imported) byReceiptId.set(item.receiptId, item);
    packageDeliveryFollowUpRenewalReceiptExportState.records = Array.from(byReceiptId.values());
    savePackageDeliveryFollowUpRenewalReceiptExports(packageDeliveryFollowUpRenewalReceiptExportState.records);
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Package delivery follow-up/renewal receipt export could not be read.";
  }
}

function handleClearPackageDeliveryFollowUpRenewalReceiptExports() {
  packageDeliveryFollowUpRenewalReceiptExportState.records = [];
  savePackageDeliveryFollowUpRenewalReceiptExports(packageDeliveryFollowUpRenewalReceiptExportState.records);
  const fileInput = byId("package-delivery-followup-renewal-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handlePackageDeliveryQualityOutcomeReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("package-delivery-quality-outcome-receipt-file");
  const confirmation = byId("package-delivery-quality-outcome-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose package-delivery-quality-outcome-receipts.json first.";
    return;
  }

  try {
    const imported = normalizePackageDeliveryQualityOutcomeReceiptPayload(JSON.parse(await file.text()));
    packageDeliveryQualityOutcomeReceiptExportState.records = imported;
    savePackageDeliveryQualityOutcomeReceiptExports(packageDeliveryQualityOutcomeReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe package delivery quality/outcome receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Package delivery quality/outcome receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearPackageDeliveryQualityOutcomeReceiptExports() {
  packageDeliveryQualityOutcomeReceiptExportState.records = [];
  savePackageDeliveryQualityOutcomeReceiptExports(packageDeliveryQualityOutcomeReceiptExportState.records);
  const fileInput = byId("package-delivery-quality-outcome-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handlePackageDeliveryAccountGrowthReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("package-delivery-account-growth-receipt-file");
  const confirmation = byId("package-delivery-account-growth-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose package-delivery-account-growth-receipts.json first.";
    return;
  }

  try {
    const imported = normalizePackageDeliveryAccountGrowthReceiptPayload(JSON.parse(await file.text()));
    packageDeliveryAccountGrowthReceiptExportState.records = imported;
    savePackageDeliveryAccountGrowthReceiptExports(packageDeliveryAccountGrowthReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe package delivery account-growth receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Package delivery account-growth receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearPackageDeliveryAccountGrowthReceiptExports() {
  packageDeliveryAccountGrowthReceiptExportState.records = [];
  savePackageDeliveryAccountGrowthReceiptExports(packageDeliveryAccountGrowthReceiptExportState.records);
  const fileInput = byId("package-delivery-account-growth-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handlePackageDeliveryRetentionReportReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("package-delivery-retention-report-receipt-file");
  const confirmation = byId("package-delivery-retention-report-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose package-delivery-retention-reporting-receipts.json first.";
    return;
  }

  try {
    const imported = normalizePackageDeliveryRetentionReportReceiptPayload(JSON.parse(await file.text()));
    packageDeliveryRetentionReportReceiptExportState.records = imported;
    savePackageDeliveryRetentionReportReceiptExports(packageDeliveryRetentionReportReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe package delivery retention-report receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Package delivery retention-report receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearPackageDeliveryRetentionReportReceiptExports() {
  packageDeliveryRetentionReportReceiptExportState.records = [];
  savePackageDeliveryRetentionReportReceiptExports(packageDeliveryRetentionReportReceiptExportState.records);
  const fileInput = byId("package-delivery-retention-report-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handlePackageDeliveryGrowthActionReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("package-delivery-growth-action-receipt-file");
  const confirmation = byId("package-delivery-growth-action-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose package-delivery-growth-action-receipts.json first.";
    return;
  }

  try {
    const imported = normalizePackageDeliveryGrowthActionReceiptPayload(JSON.parse(await file.text()));
    packageDeliveryGrowthActionReceiptExportState.records = imported;
    savePackageDeliveryGrowthActionReceiptExports(packageDeliveryGrowthActionReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe package delivery growth-action receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Package delivery growth-action receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearPackageDeliveryGrowthActionReceiptExports() {
  packageDeliveryGrowthActionReceiptExportState.records = [];
  savePackageDeliveryGrowthActionReceiptExports(packageDeliveryGrowthActionReceiptExportState.records);
  const fileInput = byId("package-delivery-growth-action-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchReadinessReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-readiness-receipt-file");
  const confirmation = byId("offer-launch-readiness-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-readiness-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchReadinessReceiptPayload(JSON.parse(await file.text()));
    offerLaunchReadinessReceiptExportState.records = imported;
    saveOfferLaunchReadinessReceiptExports(offerLaunchReadinessReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch readiness receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch readiness receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchReadinessReceiptExports() {
  offerLaunchReadinessReceiptExportState.records = [];
  saveOfferLaunchReadinessReceiptExports(offerLaunchReadinessReceiptExportState.records);
  const fileInput = byId("offer-launch-readiness-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchIntakeReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-intake-receipt-file");
  const confirmation = byId("offer-launch-intake-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-intake-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchIntakeReceiptPayload(JSON.parse(await file.text()));
    offerLaunchIntakeReceiptExportState.records = imported;
    saveOfferLaunchIntakeReceiptExports(offerLaunchIntakeReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch intake receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch intake receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchIntakeReceiptExports() {
  offerLaunchIntakeReceiptExportState.records = [];
  saveOfferLaunchIntakeReceiptExports(offerLaunchIntakeReceiptExportState.records);
  const fileInput = byId("offer-launch-intake-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchActivationReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-activation-receipt-file");
  const confirmation = byId("offer-launch-activation-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-activation-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchActivationReceiptPayload(JSON.parse(await file.text()));
    offerLaunchActivationReceiptExportState.records = imported;
    saveOfferLaunchActivationReceiptExports(offerLaunchActivationReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch activation receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch activation receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchActivationReceiptExports() {
  offerLaunchActivationReceiptExportState.records = [];
  saveOfferLaunchActivationReceiptExports(offerLaunchActivationReceiptExportState.records);
  const fileInput = byId("offer-launch-activation-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchServiceSetupReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-service-setup-receipt-file");
  const confirmation = byId("offer-launch-service-setup-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-service-setup-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchServiceSetupReceiptPayload(JSON.parse(await file.text()));
    offerLaunchServiceSetupReceiptExportState.records = imported;
    saveOfferLaunchServiceSetupReceiptExports(offerLaunchServiceSetupReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch service setup receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch service setup receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchServiceSetupReceiptExports() {
  offerLaunchServiceSetupReceiptExportState.records = [];
  saveOfferLaunchServiceSetupReceiptExports(offerLaunchServiceSetupReceiptExportState.records);
  const fileInput = byId("offer-launch-service-setup-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryWorkspaceReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-workspace-receipt-file");
  const confirmation = byId("offer-launch-delivery-workspace-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-workspace-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryWorkspaceReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryWorkspaceReceiptExportState.records = imported;
    saveOfferLaunchDeliveryWorkspaceReceiptExports(offerLaunchDeliveryWorkspaceReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery workspace receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery workspace receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryWorkspaceReceiptExports() {
  offerLaunchDeliveryWorkspaceReceiptExportState.records = [];
  saveOfferLaunchDeliveryWorkspaceReceiptExports(offerLaunchDeliveryWorkspaceReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-workspace-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryKickoffReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-kickoff-receipt-file");
  const confirmation = byId("offer-launch-delivery-kickoff-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-kickoff-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryKickoffReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryKickoffReceiptExportState.records = imported;
    saveOfferLaunchDeliveryKickoffReceiptExports(offerLaunchDeliveryKickoffReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery kickoff receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery kickoff receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryKickoffReceiptExports() {
  offerLaunchDeliveryKickoffReceiptExportState.records = [];
  saveOfferLaunchDeliveryKickoffReceiptExports(offerLaunchDeliveryKickoffReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-kickoff-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryMilestoneReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-milestone-receipt-file");
  const confirmation = byId("offer-launch-delivery-milestone-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-milestone-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryMilestoneReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryMilestoneReceiptExportState.records = imported;
    saveOfferLaunchDeliveryMilestoneReceiptExports(offerLaunchDeliveryMilestoneReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery milestone receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery milestone receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryMilestoneReceiptExports() {
  offerLaunchDeliveryMilestoneReceiptExportState.records = [];
  saveOfferLaunchDeliveryMilestoneReceiptExports(offerLaunchDeliveryMilestoneReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-milestone-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryOutcomeReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-outcome-receipt-file");
  const confirmation = byId("offer-launch-delivery-outcome-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-outcome-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryOutcomeReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryOutcomeReceiptExportState.records = imported;
    saveOfferLaunchDeliveryOutcomeReceiptExports(offerLaunchDeliveryOutcomeReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery outcome receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery outcome receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryOutcomeReceiptExports() {
  offerLaunchDeliveryOutcomeReceiptExportState.records = [];
  saveOfferLaunchDeliveryOutcomeReceiptExports(offerLaunchDeliveryOutcomeReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-outcome-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryFollowUpReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-follow-up-receipt-file");
  const confirmation = byId("offer-launch-delivery-follow-up-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-follow-up-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryFollowUpReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryFollowUpReceiptExportState.records = imported;
    saveOfferLaunchDeliveryFollowUpReceiptExports(offerLaunchDeliveryFollowUpReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery follow-up receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery follow-up receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryFollowUpReceiptExports() {
  offerLaunchDeliveryFollowUpReceiptExportState.records = [];
  saveOfferLaunchDeliveryFollowUpReceiptExports(offerLaunchDeliveryFollowUpReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-follow-up-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryGrowthPlanReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-growth-plan-receipt-file");
  const confirmation = byId("offer-launch-delivery-growth-plan-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-growth-plan-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryGrowthPlanReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryGrowthPlanReceiptExportState.records = imported;
    saveOfferLaunchDeliveryGrowthPlanReceiptExports(offerLaunchDeliveryGrowthPlanReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery growth-plan receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery growth-plan receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryGrowthPlanReceiptExports() {
  offerLaunchDeliveryGrowthPlanReceiptExportState.records = [];
  saveOfferLaunchDeliveryGrowthPlanReceiptExports(offerLaunchDeliveryGrowthPlanReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-growth-plan-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryGrowthPlanAcceptanceReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-growth-plan-acceptance-receipt-file");
  const confirmation = byId("offer-launch-delivery-growth-plan-acceptance-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-growth-plan-acceptance-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryGrowthPlanAcceptanceReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryGrowthPlanAcceptanceReceiptExportState.records = imported;
    saveOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExports(offerLaunchDeliveryGrowthPlanAcceptanceReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery growth-plan acceptance receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery growth-plan acceptance receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExports() {
  offerLaunchDeliveryGrowthPlanAcceptanceReceiptExportState.records = [];
  saveOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExports(offerLaunchDeliveryGrowthPlanAcceptanceReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-growth-plan-acceptance-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryExpansionRequestReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-expansion-request-receipt-file");
  const confirmation = byId("offer-launch-delivery-expansion-request-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-expansion-request-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryExpansionRequestReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryExpansionRequestReceiptExportState.records = imported;
    saveOfferLaunchDeliveryExpansionRequestReceiptExports(offerLaunchDeliveryExpansionRequestReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery expansion-request receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery expansion-request receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryExpansionRequestReceiptExports() {
  offerLaunchDeliveryExpansionRequestReceiptExportState.records = [];
  saveOfferLaunchDeliveryExpansionRequestReceiptExports(offerLaunchDeliveryExpansionRequestReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-expansion-request-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryExpansionWorkspaceReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-expansion-workspace-receipt-file");
  const confirmation = byId("offer-launch-delivery-expansion-workspace-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-expansion-workspace-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryExpansionWorkspaceReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryExpansionWorkspaceReceiptExportState.records = imported;
    saveOfferLaunchDeliveryExpansionWorkspaceReceiptExports(offerLaunchDeliveryExpansionWorkspaceReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery expansion workspace receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery expansion workspace receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryExpansionWorkspaceReceiptExports() {
  offerLaunchDeliveryExpansionWorkspaceReceiptExportState.records = [];
  saveOfferLaunchDeliveryExpansionWorkspaceReceiptExports(offerLaunchDeliveryExpansionWorkspaceReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-expansion-workspace-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryExpansionKickoffReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-expansion-kickoff-receipt-file");
  const confirmation = byId("offer-launch-delivery-expansion-kickoff-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-expansion-kickoff-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryExpansionKickoffReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryExpansionKickoffReceiptExportState.records = imported;
    saveOfferLaunchDeliveryExpansionKickoffReceiptExports(offerLaunchDeliveryExpansionKickoffReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery expansion kickoff receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery expansion kickoff receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryExpansionKickoffReceiptExports() {
  offerLaunchDeliveryExpansionKickoffReceiptExportState.records = [];
  saveOfferLaunchDeliveryExpansionKickoffReceiptExports(offerLaunchDeliveryExpansionKickoffReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-expansion-kickoff-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryExpansionMilestoneReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-expansion-milestone-receipt-file");
  const confirmation = byId("offer-launch-delivery-expansion-milestone-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-expansion-milestone-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryExpansionMilestoneReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryExpansionMilestoneReceiptExportState.records = imported;
    saveOfferLaunchDeliveryExpansionMilestoneReceiptExports(offerLaunchDeliveryExpansionMilestoneReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery expansion milestone receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery expansion milestone receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryExpansionMilestoneReceiptExports() {
  offerLaunchDeliveryExpansionMilestoneReceiptExportState.records = [];
  saveOfferLaunchDeliveryExpansionMilestoneReceiptExports(offerLaunchDeliveryExpansionMilestoneReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-expansion-milestone-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryExpansionOutcomeReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-expansion-outcome-receipt-file");
  const confirmation = byId("offer-launch-delivery-expansion-outcome-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-expansion-outcome-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryExpansionOutcomeReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryExpansionOutcomeReceiptExportState.records = imported;
    saveOfferLaunchDeliveryExpansionOutcomeReceiptExports(offerLaunchDeliveryExpansionOutcomeReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery expansion outcome receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery expansion outcome receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryExpansionOutcomeReceiptExports() {
  offerLaunchDeliveryExpansionOutcomeReceiptExportState.records = [];
  saveOfferLaunchDeliveryExpansionOutcomeReceiptExports(offerLaunchDeliveryExpansionOutcomeReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-expansion-outcome-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryExpansionFollowUpReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-expansion-follow-up-receipt-file");
  const confirmation = byId("offer-launch-delivery-expansion-follow-up-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-expansion-follow-up-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryExpansionFollowUpReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryExpansionFollowUpReceiptExportState.records = imported;
    saveOfferLaunchDeliveryExpansionFollowUpReceiptExports(offerLaunchDeliveryExpansionFollowUpReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery expansion follow-up receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery expansion follow-up receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryExpansionFollowUpReceiptExports() {
  offerLaunchDeliveryExpansionFollowUpReceiptExportState.records = [];
  saveOfferLaunchDeliveryExpansionFollowUpReceiptExports(offerLaunchDeliveryExpansionFollowUpReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-expansion-follow-up-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryExpansionGrowthPlanReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-expansion-growth-plan-receipt-file");
  const confirmation = byId("offer-launch-delivery-expansion-growth-plan-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-expansion-growth-plan-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryExpansionGrowthPlanReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryExpansionGrowthPlanReceiptExportState.records = imported;
    saveOfferLaunchDeliveryExpansionGrowthPlanReceiptExports(offerLaunchDeliveryExpansionGrowthPlanReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery expansion growth-plan receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery expansion growth-plan receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryExpansionGrowthPlanReceiptExports() {
  offerLaunchDeliveryExpansionGrowthPlanReceiptExportState.records = [];
  saveOfferLaunchDeliveryExpansionGrowthPlanReceiptExports(offerLaunchDeliveryExpansionGrowthPlanReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-expansion-growth-plan-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

async function handleOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptImport(event) {
  event.preventDefault();
  const fileInput = byId("offer-launch-delivery-expansion-growth-plan-acceptance-receipt-file");
  const confirmation = byId("offer-launch-delivery-expansion-growth-plan-acceptance-receipt-summary");
  const file = fileInput?.files?.[0];
  if (!file) {
    if (confirmation) confirmation.textContent = "Choose offer-launch-delivery-expansion-growth-plan-acceptance-receipts.json first.";
    return;
  }

  try {
    const imported = normalizeOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptPayload(JSON.parse(await file.text()));
    offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExportState.records = imported;
    saveOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExports(offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExportState.records);
    if (confirmation) confirmation.textContent = `${imported.length} customer-safe offer launch delivery expansion growth-plan acceptance receipt(s) imported.`;
    renderAll();
  } catch {
    if (confirmation) confirmation.textContent = "Offer launch delivery expansion growth-plan acceptance receipt import failed. Use a customer-safe App export JSON file.";
  }
}

function handleClearOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExports() {
  offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExportState.records = [];
  saveOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExports(offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExportState.records);
  const fileInput = byId("offer-launch-delivery-expansion-growth-plan-acceptance-receipt-file");
  if (fileInput) fileInput.value = "";
  renderAll();
}

function handleOfferLaunchIntakeAction(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const requestedReceiptId = String(data.get("receiptId") || "").trim();
  const safeReceipts = [
    ...offerLaunchReadinessReceiptExportState.records,
    ...(state.ledger.offerLaunchReadinessReceipts || []).filter((item) => item.customerVisible && item.webportalExportReady)
  ];
  const launchReceipt = requestedReceiptId
    ? safeReceipts.find((item) => item.receiptId === requestedReceiptId || item.id === requestedReceiptId)
    : safeReceipts[0];
  const confirmation = byId("offer-launch-intake-confirmation");

  if (!launchReceipt) {
    if (confirmation) confirmation.textContent = "Load or enter a customer-safe offer launch readiness receipt before requesting this offer.";
    return;
  }

  const intakeAction = createOfferLaunchIntakeActionForReceipt(launchReceipt, data);
  const intakeReceipt = createOfferLaunchIntakeReceiptForAction(intakeAction);
  const activation = createOfferLaunchActivationForIntakeReceipt(intakeReceipt);
  const activationReceipt = createOfferLaunchActivationReceiptForActivation(activation);
  const serviceSetup = createOfferLaunchServiceSetupForActivationReceipt(activationReceipt);
  const serviceSetupReceipt = createOfferLaunchServiceSetupReceiptForSetup(serviceSetup);
  const deliveryWorkspace = createOfferLaunchDeliveryWorkspaceForSetupReceipt(serviceSetupReceipt);
  const deliveryWorkspaceReceipt = createOfferLaunchDeliveryWorkspaceReceiptForWorkspace(deliveryWorkspace);
  const deliveryKickoff = createOfferLaunchDeliveryKickoffForWorkspaceReceipt(deliveryWorkspaceReceipt);
  const deliveryKickoffReceipt = createOfferLaunchDeliveryKickoffReceiptForKickoff(deliveryKickoff);
  const deliveryMilestone = createOfferLaunchDeliveryMilestoneForKickoffReceipt(deliveryKickoffReceipt);
  const deliveryMilestoneReceipt = createOfferLaunchDeliveryMilestoneReceiptForMilestone(deliveryMilestone);
  const deliveryOutcome = createOfferLaunchDeliveryOutcomeForMilestoneReceipt(deliveryMilestoneReceipt);
  const deliveryOutcomeReceipt = createOfferLaunchDeliveryOutcomeReceiptForOutcome(deliveryOutcome);
  const deliveryFollowUp = createOfferLaunchDeliveryFollowUpForOutcomeReceipt(deliveryOutcomeReceipt);
  const deliveryFollowUpReceipt = createOfferLaunchDeliveryFollowUpReceiptForFollowUp(deliveryFollowUp);
  const deliveryGrowthPlan = createOfferLaunchDeliveryGrowthPlanForFollowUpReceipt(deliveryFollowUpReceipt);
  const deliveryGrowthPlanReceipt = createOfferLaunchDeliveryGrowthPlanReceiptForGrowthPlan(deliveryGrowthPlan);
  const deliveryGrowthPlanAcceptance = createOfferLaunchDeliveryGrowthPlanAcceptanceForGrowthPlanReceipt(deliveryGrowthPlanReceipt);
  const deliveryGrowthPlanAcceptanceReceipt = createOfferLaunchDeliveryGrowthPlanAcceptanceReceiptForAcceptance(deliveryGrowthPlanAcceptance);
  const deliveryExpansionRequest = createOfferLaunchDeliveryExpansionRequestForAcceptanceReceipt(deliveryGrowthPlanAcceptanceReceipt);
  const deliveryExpansionRequestReceipt = createOfferLaunchDeliveryExpansionRequestReceiptForRequest(deliveryExpansionRequest);
  const deliveryExpansionWorkspace = createOfferLaunchDeliveryExpansionWorkspaceForRequestReceipt(deliveryExpansionRequestReceipt);
  const deliveryExpansionWorkspaceReceipt = createOfferLaunchDeliveryExpansionWorkspaceReceiptForWorkspace(deliveryExpansionWorkspace);
  const deliveryExpansionKickoff = createOfferLaunchDeliveryExpansionKickoffForWorkspaceReceipt(deliveryExpansionWorkspaceReceipt);
  const deliveryExpansionKickoffReceipt = createOfferLaunchDeliveryExpansionKickoffReceiptForKickoff(deliveryExpansionKickoff);
  const deliveryExpansionMilestone = createOfferLaunchDeliveryExpansionMilestoneForKickoffReceipt(deliveryExpansionKickoffReceipt);
  const deliveryExpansionMilestoneReceipt = createOfferLaunchDeliveryExpansionMilestoneReceiptForMilestone(deliveryExpansionMilestone);
  const deliveryExpansionOutcome = createOfferLaunchDeliveryExpansionOutcomeForMilestoneReceipt(deliveryExpansionMilestoneReceipt);
  const deliveryExpansionOutcomeReceipt = createOfferLaunchDeliveryExpansionOutcomeReceiptForOutcome(deliveryExpansionOutcome);
  const deliveryExpansionFollowUp = createOfferLaunchDeliveryExpansionFollowUpForOutcomeReceipt(deliveryExpansionOutcomeReceipt);
  const deliveryExpansionFollowUpReceipt = createOfferLaunchDeliveryExpansionFollowUpReceiptForFollowUp(deliveryExpansionFollowUp);
  const deliveryExpansionGrowthPlan = createOfferLaunchDeliveryExpansionGrowthPlanForFollowUpReceipt(deliveryExpansionFollowUpReceipt);
  const deliveryExpansionGrowthPlanReceipt = createOfferLaunchDeliveryExpansionGrowthPlanReceiptForGrowthPlan(deliveryExpansionGrowthPlan);
  const deliveryExpansionGrowthPlanAcceptance = createOfferLaunchDeliveryExpansionGrowthPlanAcceptanceForGrowthPlanReceipt(deliveryExpansionGrowthPlanReceipt);
  const deliveryExpansionGrowthPlanAcceptanceReceipt = createOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptForAcceptance(deliveryExpansionGrowthPlanAcceptance);
  if (!intakeAction || !intakeReceipt || !activation || !activationReceipt || !serviceSetup || !serviceSetupReceipt || !deliveryWorkspace || !deliveryWorkspaceReceipt || !deliveryKickoff || !deliveryKickoffReceipt || !deliveryMilestone || !deliveryMilestoneReceipt || !deliveryOutcome || !deliveryOutcomeReceipt || !deliveryFollowUp || !deliveryFollowUpReceipt || !deliveryGrowthPlan || !deliveryGrowthPlanReceipt || !deliveryGrowthPlanAcceptance || !deliveryGrowthPlanAcceptanceReceipt || !deliveryExpansionRequest || !deliveryExpansionRequestReceipt || !deliveryExpansionWorkspace || !deliveryExpansionWorkspaceReceipt || !deliveryExpansionKickoff || !deliveryExpansionKickoffReceipt || !deliveryExpansionMilestone || !deliveryExpansionMilestoneReceipt || !deliveryExpansionOutcome || !deliveryExpansionOutcomeReceipt || !deliveryExpansionFollowUp || !deliveryExpansionFollowUpReceipt || !deliveryExpansionGrowthPlan || !deliveryExpansionGrowthPlanReceipt || !deliveryExpansionGrowthPlanAcceptance || !deliveryExpansionGrowthPlanAcceptanceReceipt) {
    if (confirmation) confirmation.textContent = "Offer launch intake request was blocked because the launch receipt was not customer-safe.";
    return;
  }

  state.ledger.offerLaunchIntakeActions ||= [];
  state.ledger.offerLaunchIntakeReceipts ||= [];
  state.ledger.offerLaunchActivations ||= [];
  state.ledger.offerLaunchActivationReceipts ||= [];
  state.ledger.offerLaunchServiceSetups ||= [];
  state.ledger.offerLaunchServiceSetupReceipts ||= [];
  state.ledger.offerLaunchDeliveryWorkspaces ||= [];
  state.ledger.offerLaunchDeliveryWorkspaceReceipts ||= [];
  state.ledger.offerLaunchDeliveryKickoffs ||= [];
  state.ledger.offerLaunchDeliveryKickoffReceipts ||= [];
  state.ledger.offerLaunchDeliveryMilestones ||= [];
  state.ledger.offerLaunchDeliveryMilestoneReceipts ||= [];
  state.ledger.offerLaunchDeliveryOutcomes ||= [];
  state.ledger.offerLaunchDeliveryOutcomeReceipts ||= [];
  state.ledger.offerLaunchDeliveryFollowUps ||= [];
  state.ledger.offerLaunchDeliveryFollowUpReceipts ||= [];
  state.ledger.offerLaunchDeliveryGrowthPlans ||= [];
  state.ledger.offerLaunchDeliveryGrowthPlanReceipts ||= [];
  state.ledger.offerLaunchDeliveryGrowthPlanAcceptances ||= [];
  state.ledger.offerLaunchDeliveryGrowthPlanAcceptanceReceipts ||= [];
  state.ledger.offerLaunchDeliveryExpansionRequests ||= [];
  state.ledger.offerLaunchDeliveryExpansionRequestReceipts ||= [];
  state.ledger.offerLaunchDeliveryExpansionWorkspaces ||= [];
  state.ledger.offerLaunchDeliveryExpansionWorkspaceReceipts ||= [];
  state.ledger.offerLaunchDeliveryExpansionKickoffs ||= [];
  state.ledger.offerLaunchDeliveryExpansionKickoffReceipts ||= [];
  state.ledger.offerLaunchDeliveryExpansionMilestones ||= [];
  state.ledger.offerLaunchDeliveryExpansionMilestoneReceipts ||= [];
  state.ledger.offerLaunchDeliveryExpansionOutcomes ||= [];
  state.ledger.offerLaunchDeliveryExpansionOutcomeReceipts ||= [];
  state.ledger.offerLaunchDeliveryExpansionFollowUps ||= [];
  state.ledger.offerLaunchDeliveryExpansionFollowUpReceipts ||= [];
  state.ledger.offerLaunchDeliveryExpansionGrowthPlans ||= [];
  state.ledger.offerLaunchDeliveryExpansionGrowthPlanReceipts ||= [];
  state.ledger.offerLaunchDeliveryExpansionGrowthPlanAcceptances ||= [];
  state.ledger.offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts ||= [];
  state.ledger.receipts ||= [];
  state.ledger.customerStatusEvents ||= [];
  state.ledger.offerLaunchIntakeActions.unshift(intakeAction);
  state.ledger.offerLaunchIntakeReceipts.unshift(intakeReceipt);
  state.ledger.offerLaunchActivations.unshift(activation);
  state.ledger.offerLaunchActivationReceipts.unshift(activationReceipt);
  state.ledger.offerLaunchServiceSetups.unshift(serviceSetup);
  state.ledger.offerLaunchServiceSetupReceipts.unshift(serviceSetupReceipt);
  state.ledger.offerLaunchDeliveryWorkspaces.unshift(deliveryWorkspace);
  state.ledger.offerLaunchDeliveryWorkspaceReceipts.unshift(deliveryWorkspaceReceipt);
  state.ledger.offerLaunchDeliveryKickoffs.unshift(deliveryKickoff);
  state.ledger.offerLaunchDeliveryKickoffReceipts.unshift(deliveryKickoffReceipt);
  state.ledger.offerLaunchDeliveryMilestones.unshift(deliveryMilestone);
  state.ledger.offerLaunchDeliveryMilestoneReceipts.unshift(deliveryMilestoneReceipt);
  state.ledger.offerLaunchDeliveryOutcomes.unshift(deliveryOutcome);
  state.ledger.offerLaunchDeliveryOutcomeReceipts.unshift(deliveryOutcomeReceipt);
  state.ledger.offerLaunchDeliveryFollowUps.unshift(deliveryFollowUp);
  state.ledger.offerLaunchDeliveryFollowUpReceipts.unshift(deliveryFollowUpReceipt);
  state.ledger.offerLaunchDeliveryGrowthPlans.unshift(deliveryGrowthPlan);
  state.ledger.offerLaunchDeliveryGrowthPlanReceipts.unshift(deliveryGrowthPlanReceipt);
  state.ledger.offerLaunchDeliveryGrowthPlanAcceptances.unshift(deliveryGrowthPlanAcceptance);
  state.ledger.offerLaunchDeliveryGrowthPlanAcceptanceReceipts.unshift(deliveryGrowthPlanAcceptanceReceipt);
  state.ledger.offerLaunchDeliveryExpansionRequests.unshift(deliveryExpansionRequest);
  state.ledger.offerLaunchDeliveryExpansionRequestReceipts.unshift(deliveryExpansionRequestReceipt);
  state.ledger.offerLaunchDeliveryExpansionWorkspaces.unshift(deliveryExpansionWorkspace);
  state.ledger.offerLaunchDeliveryExpansionWorkspaceReceipts.unshift(deliveryExpansionWorkspaceReceipt);
  state.ledger.offerLaunchDeliveryExpansionKickoffs.unshift(deliveryExpansionKickoff);
  state.ledger.offerLaunchDeliveryExpansionKickoffReceipts.unshift(deliveryExpansionKickoffReceipt);
  state.ledger.offerLaunchDeliveryExpansionMilestones.unshift(deliveryExpansionMilestone);
  state.ledger.offerLaunchDeliveryExpansionMilestoneReceipts.unshift(deliveryExpansionMilestoneReceipt);
  state.ledger.offerLaunchDeliveryExpansionOutcomes.unshift(deliveryExpansionOutcome);
  state.ledger.offerLaunchDeliveryExpansionOutcomeReceipts.unshift(deliveryExpansionOutcomeReceipt);
  state.ledger.offerLaunchDeliveryExpansionFollowUps.unshift(deliveryExpansionFollowUp);
  state.ledger.offerLaunchDeliveryExpansionFollowUpReceipts.unshift(deliveryExpansionFollowUpReceipt);
  state.ledger.offerLaunchDeliveryExpansionGrowthPlans.unshift(deliveryExpansionGrowthPlan);
  state.ledger.offerLaunchDeliveryExpansionGrowthPlanReceipts.unshift(deliveryExpansionGrowthPlanReceipt);
  state.ledger.offerLaunchDeliveryExpansionGrowthPlanAcceptances.unshift(deliveryExpansionGrowthPlanAcceptance);
  state.ledger.offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts.unshift(deliveryExpansionGrowthPlanAcceptanceReceipt);
  state.ledger.receipts.unshift(deliveryExpansionGrowthPlanAcceptanceReceipt);
  state.ledger.receipts.unshift(deliveryExpansionGrowthPlanReceipt);
  state.ledger.receipts.unshift(deliveryExpansionFollowUpReceipt);
  state.ledger.receipts.unshift(deliveryExpansionOutcomeReceipt);
  state.ledger.receipts.unshift(deliveryExpansionMilestoneReceipt);
  state.ledger.receipts.unshift(deliveryExpansionKickoffReceipt);
  state.ledger.receipts.unshift(deliveryExpansionWorkspaceReceipt);
  state.ledger.receipts.unshift(deliveryExpansionRequestReceipt);
  state.ledger.receipts.unshift(deliveryGrowthPlanAcceptanceReceipt);
  state.ledger.receipts.unshift(deliveryGrowthPlanReceipt);
  state.ledger.receipts.unshift(deliveryFollowUpReceipt);
  state.ledger.receipts.unshift(deliveryOutcomeReceipt);
  state.ledger.receipts.unshift(deliveryMilestoneReceipt);
  state.ledger.receipts.unshift(deliveryKickoffReceipt);
  state.ledger.receipts.unshift(deliveryWorkspaceReceipt);
  state.ledger.receipts.unshift(serviceSetupReceipt);
  state.ledger.receipts.unshift(activationReceipt);
  state.ledger.receipts.unshift(intakeReceipt);
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-launch-expansion-follow-up"),
    requestId: intakeAction.requestId,
    status: deliveryExpansionFollowUpReceipt.status,
    label: "Offer launch delivery expansion follow-up ready",
    customerSafeStatus: deliveryExpansionFollowUpReceipt.customerSafeMessage,
    createdAt: intakeAction.createdAt
  });
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-launch-expansion-growth-plan"),
    requestId: intakeAction.requestId,
    status: deliveryExpansionGrowthPlanReceipt.status,
    label: "Offer launch delivery expansion growth plan ready",
    customerSafeStatus: deliveryExpansionGrowthPlanReceipt.customerSafeMessage,
    createdAt: intakeAction.createdAt
  });
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-launch-expansion-growth-plan-acceptance"),
    requestId: intakeAction.requestId,
    status: deliveryExpansionGrowthPlanAcceptanceReceipt.status,
    label: "Offer launch delivery expansion growth plan accepted",
    customerSafeStatus: deliveryExpansionGrowthPlanAcceptanceReceipt.customerSafeMessage,
    createdAt: intakeAction.createdAt
  });
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-launch-outcome"),
    requestId: intakeAction.requestId,
    status: deliveryOutcomeReceipt.status,
    label: "Offer launch delivery outcome ready",
    customerSafeStatus: deliveryOutcomeReceipt.customerSafeMessage,
    createdAt: intakeAction.createdAt
  });
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-launch-follow-up"),
    requestId: intakeAction.requestId,
    status: deliveryFollowUpReceipt.status,
    label: "Offer launch delivery follow-up ready",
    customerSafeStatus: deliveryFollowUpReceipt.customerSafeMessage,
    createdAt: intakeAction.createdAt
  });
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-launch-growth-plan"),
    requestId: intakeAction.requestId,
    status: deliveryGrowthPlanReceipt.status,
    label: "Offer launch delivery growth plan ready",
    customerSafeStatus: deliveryGrowthPlanReceipt.customerSafeMessage,
    createdAt: intakeAction.createdAt
  });
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-launch-growth-plan-acceptance"),
    requestId: intakeAction.requestId,
    status: deliveryGrowthPlanAcceptanceReceipt.status,
    label: "Offer launch delivery growth plan accepted",
    customerSafeStatus: deliveryGrowthPlanAcceptanceReceipt.customerSafeMessage,
    createdAt: intakeAction.createdAt
  });
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-launch-expansion-request"),
    requestId: intakeAction.requestId,
    status: deliveryExpansionRequestReceipt.status,
    label: "Offer launch delivery expansion request ready",
    customerSafeStatus: deliveryExpansionRequestReceipt.customerSafeMessage,
    createdAt: intakeAction.createdAt
  });
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-launch-expansion-workspace"),
    requestId: intakeAction.requestId,
    status: deliveryExpansionWorkspaceReceipt.status,
    label: "Offer launch delivery expansion workspace ready",
    customerSafeStatus: deliveryExpansionWorkspaceReceipt.customerSafeMessage,
    createdAt: intakeAction.createdAt
  });
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-launch-expansion-kickoff"),
    requestId: intakeAction.requestId,
    status: deliveryExpansionKickoffReceipt.status,
    label: "Offer launch delivery expansion kickoff ready",
    customerSafeStatus: deliveryExpansionKickoffReceipt.customerSafeMessage,
    createdAt: intakeAction.createdAt
  });
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-launch-expansion-milestone"),
    requestId: intakeAction.requestId,
    status: deliveryExpansionMilestoneReceipt.status,
    label: "Offer launch delivery expansion milestone active",
    customerSafeStatus: deliveryExpansionMilestoneReceipt.customerSafeMessage,
    createdAt: intakeAction.createdAt
  });
  state.ledger.generatedAt = new Date().toISOString();
  saveLedger(state.ledger);
  if (confirmation) confirmation.textContent = deliveryExpansionGrowthPlanAcceptanceReceipt.customerSafeMessage;
  form.reset();
  renderAll();
}

function handleServiceLifecycleAction(event) {
  event.preventDefault();
  const action = createServiceLifecycleActionRecord(new FormData(event.currentTarget));
  state.ledger.serviceLifecycleActions ||= [];
  state.ledger.serviceLifecycleActions.unshift(action);
  state.ledger.customerStatusEvents ||= [];
  state.ledger.customerStatusEvents.unshift({
    id: makeId("status-event-service-lifecycle"),
    requestId: action.requestId,
    status: action.status,
    label: "Service lifecycle action requested",
    customerSafeStatus: action.customerSafeStatus,
    createdAt: action.createdAt
  });
  state.ledger.generatedAt = new Date().toISOString();
  saveLedger(state.ledger);
  const confirmation = byId("service-lifecycle-confirmation");
  if (confirmation) confirmation.textContent = action.customerSafeStatus;
  event.currentTarget.reset();
  renderAll();
}

function handleServiceRequest(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const request = createServiceRequestRecord(data);
  const eligibility = createPackageEligibilityForRequest(request);
  const compatibilityGate = createCompatibilityGateForRequest(request);
  const submission = createSubmissionForRequest(request);
  const reviewCycle = createSubmissionReviewCycleForRequest(request, submission);
  const cohortPlan = createCohortPlanForRequest(request);
  const cohortCapacityPlan = createCohortCapacityPlanForCohortPlan(cohortPlan, request);
  const subscriptionPlan = createSubscriptionPlanForCohortPlan(cohortPlan, request);
  const cohortPlanningReceipt = createCohortPlanningReceiptForPlan(cohortPlan, cohortCapacityPlan, subscriptionPlan, request);
  applyCohortPlanningRecords(cohortPlan, cohortCapacityPlan, subscriptionPlan, cohortPlanningReceipt);
  const crmAccount = createCrmAccountForRequest(request);
  const opportunity = createCrmOpportunityForRequest(request, crmAccount);
  const araPacket = createAraRevenuePacketForOpportunity(opportunity);
  const araAssignment = createAraAssignmentForPacket(araPacket);
  const araReviewReceipt = createAraReviewReceiptForPacket(araPacket, opportunity);
  const handoff = createEpochHandoffForRequest(request);
  const lifecycle = createDeliveryLifecycleForRequest(request, submission, handoff);
  const transitions = createDeliveryTransitionsForRequest(request, submission, handoff);
  const statusEvents = createCustomerStatusEventsForRequest(request, submission, handoff);
  const receipts = createTransitionReceiptsForRequest(request, lifecycle, transitions, handoff);
  const readinessReceipt = createOperatingReadinessReceiptForRequest(request, eligibility, compatibilityGate, reviewCycle, cohortPlan);
  const crmAraReceipt = createCrmAraReceiptForRequest(request, opportunity, araPacket, araAssignment);
  const revenueOutcome = createRevenueOutcomeForRequest(request, lifecycle, opportunity);
  const deliveryResultReceipt = createDeliveryResultReceiptForOutcome(revenueOutcome, request);
  const araReviewCompletion = createAraReviewCompletionForAssignment(araAssignment, araPacket, revenueOutcome);
  const araReviewQueue = createAraReviewQueueForPacket(
    araPacket,
    araAssignment,
    araReviewReceipt,
    revenueOutcome,
    request
  );
  const araOperatorReviewDecision = createAraOperatorReviewDecisionForQueue(
    araReviewQueue,
    araAssignment,
    araReviewCompletion,
    request
  );
  const araReviewStatusReceipt = createAraReviewStatusReceiptForDecision(
    araOperatorReviewDecision,
    request
  );
  const araMethodMaterialization = createAraMethodMaterializationForDecision(
    araOperatorReviewDecision,
    araReviewStatusReceipt,
    state.ledger.materialAssets?.[0]
  );
  const araMaterializationReceipt = createAraMaterializationReceiptForRecord(
    araMethodMaterialization
  );
  const serviceMaterialReuse = createServiceMaterialReuseForMaterialization(
    araMaterializationReceipt,
    request,
    requestPackage(request),
    (state.ledger.materialAssets || []).find((item) => item.id === araMethodMaterialization?.materialAssetId)
  );
  const serviceMaterialReuseReceipt = createServiceMaterialReuseReceiptForRecord(
    serviceMaterialReuse
  );
  const packageDeliveryChecklist = createPackageDeliveryChecklistForReuse(
    serviceMaterialReuse
  );
  const packageDeliveryChecklistReceipt = createPackageDeliveryChecklistReceiptForRecord(
    packageDeliveryChecklist
  );
  const packageDeliveryChecklistAutomation = createPackageDeliveryChecklistAutomationForChecklist(
    packageDeliveryChecklist
  );
  const packageDeliveryChecklistAutomationReceipt = createPackageDeliveryChecklistAutomationReceiptForRecord(
    packageDeliveryChecklistAutomation
  );
  const packageDeliveryExecution = createPackageDeliveryExecutionForAutomation(
    packageDeliveryChecklistAutomation
  );
  const packageDeliveryExecutionReceipt = createPackageDeliveryExecutionReceiptForRecord(
    packageDeliveryExecution
  );
  const packageDeliveryFollowUpRenewal = createPackageDeliveryFollowUpRenewalForExecutionReceipt(
    packageDeliveryExecutionReceipt
  );
  const packageDeliveryFollowUpRenewalReceipt = createPackageDeliveryFollowUpRenewalReceiptForRecord(
    packageDeliveryFollowUpRenewal
  );
  const packageDeliveryQualityOutcome = createPackageDeliveryQualityOutcomeForReceipts(
    packageDeliveryExecutionReceipt,
    packageDeliveryFollowUpRenewalReceipt
  );
  const packageDeliveryQualityOutcomeReceipt = createPackageDeliveryQualityOutcomeReceiptForRecord(
    packageDeliveryQualityOutcome
  );
  const packageDeliveryAccountGrowthLinkage = createPackageDeliveryAccountGrowthLinkageForQualityOutcomeReceipt(
    packageDeliveryQualityOutcomeReceipt
  );
  const packageDeliveryAccountGrowthReceipt = createPackageDeliveryAccountGrowthReceiptForLinkage(
    packageDeliveryAccountGrowthLinkage
  );
  const packageDeliveryRetentionReport = createPackageDeliveryRetentionReportForAccountGrowth(
    packageDeliveryAccountGrowthLinkage,
    packageDeliveryAccountGrowthReceipt,
    packageDeliveryQualityOutcomeReceipt
  );
  const packageDeliveryRetentionReportReceipt = createPackageDeliveryRetentionReportReceiptForRecord(
    packageDeliveryRetentionReport
  );
  const packageDeliveryGrowthAction = createPackageDeliveryGrowthActionForRetentionReport(
    packageDeliveryRetentionReport,
    packageDeliveryRetentionReportReceipt
  );
  const packageDeliveryGrowthActionReceipt = createPackageDeliveryGrowthActionReceiptForAction(
    packageDeliveryGrowthAction
  );
  const customerAccount = createCustomerAccountForRequest(request, crmAccount, revenueOutcome);
  const cohortEnrollment = createCohortEnrollmentForPlans(cohortPlan, cohortCapacityPlan, request, customerAccount);
  const subscriptionLifecycle = createSubscriptionLifecycleForPlan(subscriptionPlan, cohortEnrollment, request, customerAccount);
  const subscriptionLifecycleReceipt = createSubscriptionLifecycleReceiptForLifecycle(subscriptionLifecycle, cohortEnrollment, request);
  const cohortOutcomeReport = createCohortOutcomeReportForLifecycle(subscriptionLifecycle, cohortEnrollment, request, customerAccount);
  const subscriptionRenewalReport = createSubscriptionRenewalReportForOutcome(cohortOutcomeReport, subscriptionLifecycle, request, customerAccount);
  const cohortProgressStatusEvent = createCohortProgressStatusEventForOutcome(cohortOutcomeReport, subscriptionRenewalReport, request);
  const outcomeRenewalReceipt = createOutcomeRenewalReceiptForReport(cohortOutcomeReport, subscriptionRenewalReport, cohortProgressStatusEvent, request);
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
  const timingReturnPayload = createEpochTimingReturnPayloadForHandoff(
    handoff,
    request,
    request.lane === "cohort-subscription" ? "availability-conflict" : "booking-confirmed"
  );
  const timingReturnConsumption = createEpochTimingReturnConsumptionForPayload(timingReturnPayload, request);
  const timingReturnReceipt = createTimingReturnReceiptForConsumption(timingReturnConsumption, timingReturnPayload, request);
  const timingReturnEvent = createCustomerStatusEventForTimingReturn(timingReturnConsumption, request);
  const timingReturnTransition = createDeliveryTransitionForTimingReturn(timingReturnConsumption, request);
  applyEpochTimingReturnConsumption(
    request,
    submission,
    reviewCycle,
    lifecycle,
    handoff,
    revenueOutcome,
    deliveryResultReceipt,
    timingReturnPayload,
    timingReturnConsumption,
    timingReturnReceipt
  );
  const capacityWaitlistPayload = request.lane === "cohort-subscription"
    ? createEpochCapacityWaitlistPayloadForHandoff(handoff, request, "waitlisted")
    : null;
  const capacityWaitlistConsumption = createEpochCapacityWaitlistConsumptionForPayload(capacityWaitlistPayload, request);
  const capacityWaitlistReceipt = createCapacityWaitlistReceiptForConsumption(capacityWaitlistConsumption, capacityWaitlistPayload, request);
  const capacityWaitlistEvent = createCustomerStatusEventForCapacityWaitlist(capacityWaitlistConsumption, request);
  const capacityWaitlistTransition = createDeliveryTransitionForCapacityWaitlist(capacityWaitlistConsumption, request);
  applyEpochCapacityWaitlistConsumption(
    request,
    cohortPlan,
    lifecycle,
    handoff,
    revenueOutcome,
    capacityWaitlistPayload,
    capacityWaitlistConsumption,
    capacityWaitlistReceipt
  );
  const recurringSeriesPayload = createEpochRecurringSeriesPayloadForHandoff(
    handoff,
    request,
    timingReturnConsumption?.status === "timing-reschedule-required" ? "exception-action-required" : "active"
  );
  const recurringSeriesConsumption = createEpochRecurringSeriesConsumptionForPayload(recurringSeriesPayload, request);
  const recurringSeriesReceipt = createRecurringSeriesReceiptForConsumption(recurringSeriesConsumption, recurringSeriesPayload, request);
  const recurringSeriesEvent = createCustomerStatusEventForRecurringSeries(recurringSeriesConsumption, request);
  const recurringSeriesTransition = createDeliveryTransitionForRecurringSeries(recurringSeriesConsumption, request);
  applyEpochRecurringSeriesConsumption(
    request,
    cohortPlan,
    lifecycle,
    handoff,
    revenueOutcome,
    recurringSeriesPayload,
    recurringSeriesConsumption,
    recurringSeriesReceipt
  );
  const revisedTimingPayload = createEpochRevisedCalendarTimingPayloadForHandoff(handoff, request);
  const revisedTimingConsumption = createEpochRevisedCalendarTimingConsumptionForPayload(revisedTimingPayload, request);
  const revisedTimingReceipt = createRevisedCalendarTimingReceiptForConsumption(revisedTimingConsumption, revisedTimingPayload, request);
  const timingAwareFollowUp = createTimingAwareServiceFollowUpForRevisedTiming(
    revisedTimingPayload,
    revisedTimingConsumption,
    revisedTimingReceipt,
    request
  );
  const timingAwareRenewalReceipt = createTimingAwareRenewalReceiptForFollowUp(
    timingAwareFollowUp,
    revisedTimingConsumption,
    request
  );
  const revisedTimingEvent = createCustomerStatusEventForRevisedCalendarTiming(revisedTimingConsumption, request);
  const revisedTimingTransition = createDeliveryTransitionForRevisedCalendarTiming(revisedTimingConsumption, request);
  applyEpochRevisedCalendarTimingConsumption(
    request,
    cohortPlan,
    lifecycle,
    handoff,
    revenueOutcome,
    revisedTimingPayload,
    revisedTimingConsumption,
    revisedTimingReceipt
  );
  const deliveryOutcomeAutomation = createDeliveryOutcomeAutomationForReceipt(
    revenueOutcome,
    deliveryResultReceipt,
    timingAwareRenewalReceipt,
    request
  );
  const deliveryOutcomeAutomationReceipt = createDeliveryOutcomeAutomationReceiptForAutomation(
    deliveryOutcomeAutomation,
    request
  );
  const accountGrowthAutomation = createAccountGrowthAutomationForDeliveryOutcome(
    deliveryOutcomeAutomation,
    deliveryOutcomeAutomationReceipt,
    request
  );
  const accountGrowthAutomationReceipt = createAccountGrowthAutomationReceiptForAutomation(
    accountGrowthAutomation,
    request
  );

  state.ledger.serviceRequests.unshift(request);
  if (eligibility) state.ledger.packageEligibility.unshift(eligibility);
  if (compatibilityGate) state.ledger.compatibilityGates.unshift(compatibilityGate);
  if (submission) state.ledger.submissions.unshift(submission);
  if (reviewCycle) state.ledger.submissionReviewCycles.unshift(reviewCycle);
  if (cohortPlan) state.ledger.cohortPlans.unshift(cohortPlan);
  if (cohortCapacityPlan) state.ledger.cohortCapacityPlans.unshift(cohortCapacityPlan);
  if (subscriptionPlan) state.ledger.subscriptionPlans.unshift(subscriptionPlan);
  if (cohortPlanningReceipt) state.ledger.cohortPlanningReceipts.unshift(cohortPlanningReceipt);
  if (crmAccount) state.ledger.crmAccounts.unshift(crmAccount);
  if (opportunity) state.ledger.crmOpportunities.unshift(opportunity);
  if (araPacket) state.ledger.araRevenuePackets.unshift(araPacket);
  if (araAssignment) state.ledger.araAssignments.unshift(araAssignment);
  if (araReviewReceipt) state.ledger.araReviewReceipts.unshift(araReviewReceipt);
  if (revenueOutcome) state.ledger.revenueOutcomes.unshift(revenueOutcome);
  if (deliveryResultReceipt && revenueOutcome?.resultReceiptReady) state.ledger.deliveryResultReceipts.unshift(deliveryResultReceipt);
  if (araReviewCompletion) state.ledger.araReviewCompletions.unshift(araReviewCompletion);
  state.ledger.araReviewQueues ||= [];
  state.ledger.araOperatorReviewDecisions ||= [];
  state.ledger.araReviewStatusReceipts ||= [];
  state.ledger.araMethodMaterializations ||= [];
  state.ledger.araMaterializationReceipts ||= [];
  state.ledger.serviceMaterialReuseRecords ||= [];
  state.ledger.serviceMaterialReuseReceipts ||= [];
  state.ledger.packageDeliveryChecklists ||= [];
  state.ledger.packageDeliveryChecklistReceipts ||= [];
  state.ledger.packageDeliveryChecklistAutomations ||= [];
  state.ledger.packageDeliveryChecklistAutomationReceipts ||= [];
  state.ledger.packageDeliveryExecutions ||= [];
  state.ledger.packageDeliveryExecutionReceipts ||= [];
  state.ledger.packageDeliveryFollowUpRenewals ||= [];
  state.ledger.packageDeliveryFollowUpRenewalReceipts ||= [];
  state.ledger.packageDeliveryQualityOutcomes ||= [];
  state.ledger.packageDeliveryQualityOutcomeReceipts ||= [];
  state.ledger.packageDeliveryAccountGrowthLinkages ||= [];
  state.ledger.packageDeliveryAccountGrowthReceipts ||= [];
  state.ledger.packageDeliveryRetentionReports ||= [];
  state.ledger.packageDeliveryRetentionReportReceipts ||= [];
  state.ledger.packageDeliveryGrowthActions ||= [];
  state.ledger.packageDeliveryGrowthActionReceipts ||= [];
  if (araReviewQueue) state.ledger.araReviewQueues.unshift(araReviewQueue);
  if (araOperatorReviewDecision) state.ledger.araOperatorReviewDecisions.unshift(araOperatorReviewDecision);
  if (araReviewStatusReceipt) state.ledger.araReviewStatusReceipts.unshift(araReviewStatusReceipt);
  if (araMethodMaterialization) state.ledger.araMethodMaterializations.unshift(araMethodMaterialization);
  if (araMaterializationReceipt) state.ledger.araMaterializationReceipts.unshift(araMaterializationReceipt);
  if (serviceMaterialReuse) state.ledger.serviceMaterialReuseRecords.unshift(serviceMaterialReuse);
  if (serviceMaterialReuseReceipt) state.ledger.serviceMaterialReuseReceipts.unshift(serviceMaterialReuseReceipt);
  if (packageDeliveryChecklist) state.ledger.packageDeliveryChecklists.unshift(packageDeliveryChecklist);
  if (packageDeliveryChecklistReceipt) state.ledger.packageDeliveryChecklistReceipts.unshift(packageDeliveryChecklistReceipt);
  if (packageDeliveryChecklistAutomation) state.ledger.packageDeliveryChecklistAutomations.unshift(packageDeliveryChecklistAutomation);
  if (packageDeliveryChecklistAutomationReceipt) state.ledger.packageDeliveryChecklistAutomationReceipts.unshift(packageDeliveryChecklistAutomationReceipt);
  if (packageDeliveryExecution) state.ledger.packageDeliveryExecutions.unshift(packageDeliveryExecution);
  if (packageDeliveryExecutionReceipt) state.ledger.packageDeliveryExecutionReceipts.unshift(packageDeliveryExecutionReceipt);
  if (packageDeliveryFollowUpRenewal) state.ledger.packageDeliveryFollowUpRenewals.unshift(packageDeliveryFollowUpRenewal);
  if (packageDeliveryFollowUpRenewalReceipt) state.ledger.packageDeliveryFollowUpRenewalReceipts.unshift(packageDeliveryFollowUpRenewalReceipt);
  if (packageDeliveryQualityOutcome) state.ledger.packageDeliveryQualityOutcomes.unshift(packageDeliveryQualityOutcome);
  if (packageDeliveryQualityOutcomeReceipt) state.ledger.packageDeliveryQualityOutcomeReceipts.unshift(packageDeliveryQualityOutcomeReceipt);
  if (packageDeliveryAccountGrowthLinkage) state.ledger.packageDeliveryAccountGrowthLinkages.unshift(packageDeliveryAccountGrowthLinkage);
  if (packageDeliveryAccountGrowthReceipt) state.ledger.packageDeliveryAccountGrowthReceipts.unshift(packageDeliveryAccountGrowthReceipt);
  if (packageDeliveryRetentionReport) state.ledger.packageDeliveryRetentionReports.unshift(packageDeliveryRetentionReport);
  if (packageDeliveryRetentionReportReceipt) state.ledger.packageDeliveryRetentionReportReceipts.unshift(packageDeliveryRetentionReportReceipt);
  if (packageDeliveryGrowthAction) state.ledger.packageDeliveryGrowthActions.unshift(packageDeliveryGrowthAction);
  if (packageDeliveryGrowthActionReceipt) state.ledger.packageDeliveryGrowthActionReceipts.unshift(packageDeliveryGrowthActionReceipt);
  if (customerAccount) state.ledger.customerAccounts.unshift(customerAccount);
  if (cohortEnrollment) state.ledger.cohortEnrollments.unshift(cohortEnrollment);
  if (subscriptionLifecycle) state.ledger.subscriptionLifecycles.unshift(subscriptionLifecycle);
  if (subscriptionLifecycleReceipt) state.ledger.subscriptionLifecycleReceipts.unshift(subscriptionLifecycleReceipt);
  if (cohortOutcomeReport) state.ledger.cohortOutcomeReports.unshift(cohortOutcomeReport);
  if (subscriptionRenewalReport) state.ledger.subscriptionRenewalReports.unshift(subscriptionRenewalReport);
  if (cohortProgressStatusEvent) state.ledger.cohortProgressStatusEvents.unshift(cohortProgressStatusEvent);
  if (outcomeRenewalReceipt) state.ledger.outcomeRenewalReceipts.unshift(outcomeRenewalReceipt);
  if (accountHistory) state.ledger.customerAccountHistory.unshift(accountHistory);
  if (renewalOpportunity) state.ledger.renewalOpportunities.unshift(renewalOpportunity);
  if (customerFollowUp) state.ledger.customerFollowUps.unshift(customerFollowUp);
  if (retentionHealth) state.ledger.retentionHealth.unshift(retentionHealth);
  if (referralOpportunity) state.ledger.referralOpportunities.unshift(referralOpportunity);
  if (accountGrowthPlan) state.ledger.accountGrowthPlans.unshift(accountGrowthPlan);
  if (growthFollowUpReceipt) state.ledger.growthFollowUpReceipts.unshift(growthFollowUpReceipt);
  if (referralConversion) state.ledger.referralConversions.unshift(referralConversion);
  if (growthPlanAcceptance) state.ledger.growthPlanAcceptances.unshift(growthPlanAcceptance);
  if (expansionServiceRequest) state.ledger.expansionServiceRequests.unshift(expansionServiceRequest);
  if (conversionStatusEvent) state.ledger.conversionStatusEvents.unshift(conversionStatusEvent);
  if (conversionReceipt) state.ledger.conversionReceipts.unshift(conversionReceipt);
  if (handoff) state.ledger.epochTimeHandoffs.unshift(handoff);
  if (timingReturnPayload) state.ledger.epochTimingReturnPayloads.unshift(timingReturnPayload);
  if (timingReturnConsumption) state.ledger.epochTimingReturnConsumptions.unshift(timingReturnConsumption);
  if (timingReturnReceipt) state.ledger.timingReturnReceipts.unshift(timingReturnReceipt);
  if (capacityWaitlistPayload) state.ledger.epochCapacityWaitlistPayloads.unshift(capacityWaitlistPayload);
  if (capacityWaitlistConsumption) state.ledger.epochCapacityWaitlistConsumptions.unshift(capacityWaitlistConsumption);
  if (capacityWaitlistReceipt) state.ledger.capacityWaitlistReceipts.unshift(capacityWaitlistReceipt);
  if (recurringSeriesPayload) state.ledger.epochRecurringSeriesPayloads.unshift(recurringSeriesPayload);
  if (recurringSeriesConsumption) state.ledger.epochRecurringSeriesConsumptions.unshift(recurringSeriesConsumption);
  if (recurringSeriesReceipt) state.ledger.recurringSeriesReceipts.unshift(recurringSeriesReceipt);
  if (revisedTimingPayload) state.ledger.epochRevisedCalendarTimingPayloads.unshift(revisedTimingPayload);
  if (revisedTimingConsumption) state.ledger.epochRevisedCalendarTimingConsumptions.unshift(revisedTimingConsumption);
  if (revisedTimingReceipt) state.ledger.revisedCalendarTimingReceipts.unshift(revisedTimingReceipt);
  if (timingAwareFollowUp) state.ledger.timingAwareServiceFollowUps.unshift(timingAwareFollowUp);
  if (timingAwareRenewalReceipt) state.ledger.timingAwareRenewalReceipts.unshift(timingAwareRenewalReceipt);
  state.ledger.deliveryOutcomeAutomations ||= [];
  state.ledger.deliveryOutcomeAutomationReceipts ||= [];
  state.ledger.accountGrowthAutomations ||= [];
  state.ledger.accountGrowthAutomationReceipts ||= [];
  if (deliveryOutcomeAutomation) state.ledger.deliveryOutcomeAutomations.unshift(deliveryOutcomeAutomation);
  if (deliveryOutcomeAutomationReceipt) state.ledger.deliveryOutcomeAutomationReceipts.unshift(deliveryOutcomeAutomationReceipt);
  if (accountGrowthAutomation) state.ledger.accountGrowthAutomations.unshift(accountGrowthAutomation);
  if (accountGrowthAutomationReceipt) state.ledger.accountGrowthAutomationReceipts.unshift(accountGrowthAutomationReceipt);
  state.ledger.deliveryLifecycles.unshift(lifecycle);
  if (revisedTimingTransition) state.ledger.deliveryTransitions.unshift(revisedTimingTransition);
  if (recurringSeriesTransition) state.ledger.deliveryTransitions.unshift(recurringSeriesTransition);
  if (capacityWaitlistTransition) state.ledger.deliveryTransitions.unshift(capacityWaitlistTransition);
  if (timingReturnTransition) state.ledger.deliveryTransitions.unshift(timingReturnTransition);
  if (transitions.length) state.ledger.deliveryTransitions.unshift(...transitions);
  if (revisedTimingEvent) state.ledger.customerStatusEvents.unshift(revisedTimingEvent);
  if (recurringSeriesEvent) state.ledger.customerStatusEvents.unshift(recurringSeriesEvent);
  if (capacityWaitlistEvent) state.ledger.customerStatusEvents.unshift(capacityWaitlistEvent);
  if (timingReturnEvent) state.ledger.customerStatusEvents.unshift(timingReturnEvent);
  if (statusEvents.length) state.ledger.customerStatusEvents.unshift(...statusEvents);
  if (receipts.length) state.ledger.receipts.unshift(...receipts);
  if (revisedTimingReceipt) state.ledger.receipts.unshift(revisedTimingReceipt);
  if (timingAwareRenewalReceipt) state.ledger.receipts.unshift(timingAwareRenewalReceipt);
  if (deliveryOutcomeAutomationReceipt) state.ledger.receipts.unshift(deliveryOutcomeAutomationReceipt);
  if (accountGrowthAutomationReceipt) state.ledger.receipts.unshift(accountGrowthAutomationReceipt);
  if (packageDeliveryGrowthActionReceipt) state.ledger.receipts.unshift(packageDeliveryGrowthActionReceipt);
  if (packageDeliveryRetentionReportReceipt) state.ledger.receipts.unshift(packageDeliveryRetentionReportReceipt);
  if (packageDeliveryFollowUpRenewalReceipt) state.ledger.receipts.unshift(packageDeliveryFollowUpRenewalReceipt);
  if (packageDeliveryExecutionReceipt) state.ledger.receipts.unshift(packageDeliveryExecutionReceipt);
  if (packageDeliveryChecklistAutomationReceipt) state.ledger.receipts.unshift(packageDeliveryChecklistAutomationReceipt);
  if (packageDeliveryChecklistReceipt) state.ledger.receipts.unshift(packageDeliveryChecklistReceipt);
  if (serviceMaterialReuseReceipt) state.ledger.receipts.unshift(serviceMaterialReuseReceipt);
  if (araMaterializationReceipt) state.ledger.receipts.unshift(araMaterializationReceipt);
  if (araReviewStatusReceipt) state.ledger.receipts.unshift(araReviewStatusReceipt);
  if (recurringSeriesReceipt) state.ledger.receipts.unshift(recurringSeriesReceipt);
  if (capacityWaitlistReceipt) state.ledger.receipts.unshift(capacityWaitlistReceipt);
  if (timingReturnReceipt) state.ledger.receipts.unshift(timingReturnReceipt);
  if (readinessReceipt) state.ledger.receipts.unshift(readinessReceipt);
  if (cohortPlanningReceipt) state.ledger.receipts.unshift(cohortPlanningReceipt);
  if (subscriptionLifecycleReceipt) state.ledger.receipts.unshift(subscriptionLifecycleReceipt);
  if (outcomeRenewalReceipt) state.ledger.receipts.unshift(outcomeRenewalReceipt);
  if (crmAraReceipt) state.ledger.receipts.unshift(crmAraReceipt);
  if (conversionReceipt) state.ledger.receipts.unshift({
    id: makeId("receipt-conversion"),
    kind: conversionReceipt.kind,
    status: conversionReceipt.status,
    summary: conversionReceipt.summary,
    requestId: request.id,
    recordedAt: conversionReceipt.createdAt,
    customerVisible: conversionReceipt.customerVisible
  });
  prependDeliveryOverview(lifecycle);
  state.ledger.generatedAt = new Date().toISOString();
  saveLedger(state.ledger);

  const confirmation = byId("service-confirmation");
  if (confirmation) {
    confirmation.textContent = revisedTimingConsumption?.customerSafeStatus || recurringSeriesConsumption?.customerSafeStatus || capacityWaitlistConsumption?.customerSafeStatus || timingReturnConsumption?.customerSafeStatus || (handoff?.bridgeReady ? handoff.customerSafeStatus : request.customerSafeStatus);
  }
  form.reset();
  renderAll();
}

function bindControls() {
  const requestForm = byId("service-request-form");
  if (requestForm) requestForm.addEventListener("submit", handleServiceRequest);

  const lifecycleActionForm = byId("service-lifecycle-action-form");
  if (lifecycleActionForm) lifecycleActionForm.addEventListener("submit", handleServiceLifecycleAction);

  const statusImportForm = byId("customer-service-status-import-form");
  if (statusImportForm) statusImportForm.addEventListener("submit", handleCustomerServiceStatusImport);

  const clearStatusExportButton = byId("clear-customer-service-status-export");
  if (clearStatusExportButton) clearStatusExportButton.addEventListener("click", handleClearCustomerServiceStatusExports);

  const lifecycleStatusImportForm = byId("service-lifecycle-status-import-form");
  if (lifecycleStatusImportForm) lifecycleStatusImportForm.addEventListener("submit", handleServiceLifecycleStatusImport);

  const clearLifecycleStatusExportButton = byId("clear-service-lifecycle-status-export");
  if (clearLifecycleStatusExportButton) clearLifecycleStatusExportButton.addEventListener("click", handleClearServiceLifecycleStatusExports);

  const deliveryOutcomeAutomationReceiptImportForm = byId("delivery-outcome-automation-receipt-import-form");
  if (deliveryOutcomeAutomationReceiptImportForm) deliveryOutcomeAutomationReceiptImportForm.addEventListener("submit", handleDeliveryOutcomeAutomationReceiptImport);

  const clearDeliveryOutcomeAutomationReceiptExportButton = byId("clear-delivery-outcome-automation-receipts");
  if (clearDeliveryOutcomeAutomationReceiptExportButton) clearDeliveryOutcomeAutomationReceiptExportButton.addEventListener("click", handleClearDeliveryOutcomeAutomationReceiptExports);

  const accountGrowthAutomationReceiptImportForm = byId("account-growth-automation-receipt-import-form");
  if (accountGrowthAutomationReceiptImportForm) accountGrowthAutomationReceiptImportForm.addEventListener("submit", handleAccountGrowthAutomationReceiptImport);

  const clearAccountGrowthAutomationReceiptExportButton = byId("clear-account-growth-automation-receipts");
  if (clearAccountGrowthAutomationReceiptExportButton) clearAccountGrowthAutomationReceiptExportButton.addEventListener("click", handleClearAccountGrowthAutomationReceiptExports);

  const offerLaunchReadinessReceiptImportForm = byId("offer-launch-readiness-receipt-import-form");
  if (offerLaunchReadinessReceiptImportForm) offerLaunchReadinessReceiptImportForm.addEventListener("submit", handleOfferLaunchReadinessReceiptImport);

  const clearOfferLaunchReadinessReceiptExportButton = byId("clear-offer-launch-readiness-receipts");
  if (clearOfferLaunchReadinessReceiptExportButton) clearOfferLaunchReadinessReceiptExportButton.addEventListener("click", handleClearOfferLaunchReadinessReceiptExports);

  const offerLaunchIntakeActionForm = byId("offer-launch-intake-action-form");
  if (offerLaunchIntakeActionForm) offerLaunchIntakeActionForm.addEventListener("submit", handleOfferLaunchIntakeAction);

  const offerLaunchIntakeReceiptImportForm = byId("offer-launch-intake-receipt-import-form");
  if (offerLaunchIntakeReceiptImportForm) offerLaunchIntakeReceiptImportForm.addEventListener("submit", handleOfferLaunchIntakeReceiptImport);

  const clearOfferLaunchIntakeReceiptExportButton = byId("clear-offer-launch-intake-receipts");
  if (clearOfferLaunchIntakeReceiptExportButton) clearOfferLaunchIntakeReceiptExportButton.addEventListener("click", handleClearOfferLaunchIntakeReceiptExports);

  const offerLaunchActivationReceiptImportForm = byId("offer-launch-activation-receipt-import-form");
  if (offerLaunchActivationReceiptImportForm) offerLaunchActivationReceiptImportForm.addEventListener("submit", handleOfferLaunchActivationReceiptImport);

  const clearOfferLaunchActivationReceiptExportButton = byId("clear-offer-launch-activation-receipts");
  if (clearOfferLaunchActivationReceiptExportButton) clearOfferLaunchActivationReceiptExportButton.addEventListener("click", handleClearOfferLaunchActivationReceiptExports);

  const offerLaunchServiceSetupReceiptImportForm = byId("offer-launch-service-setup-receipt-import-form");
  if (offerLaunchServiceSetupReceiptImportForm) offerLaunchServiceSetupReceiptImportForm.addEventListener("submit", handleOfferLaunchServiceSetupReceiptImport);

  const clearOfferLaunchServiceSetupReceiptExportButton = byId("clear-offer-launch-service-setup-receipts");
  if (clearOfferLaunchServiceSetupReceiptExportButton) clearOfferLaunchServiceSetupReceiptExportButton.addEventListener("click", handleClearOfferLaunchServiceSetupReceiptExports);

  const offerLaunchDeliveryWorkspaceReceiptImportForm = byId("offer-launch-delivery-workspace-receipt-import-form");
  if (offerLaunchDeliveryWorkspaceReceiptImportForm) offerLaunchDeliveryWorkspaceReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryWorkspaceReceiptImport);

  const clearOfferLaunchDeliveryWorkspaceReceiptExportButton = byId("clear-offer-launch-delivery-workspace-receipts");
  if (clearOfferLaunchDeliveryWorkspaceReceiptExportButton) clearOfferLaunchDeliveryWorkspaceReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryWorkspaceReceiptExports);

  const offerLaunchDeliveryKickoffReceiptImportForm = byId("offer-launch-delivery-kickoff-receipt-import-form");
  if (offerLaunchDeliveryKickoffReceiptImportForm) offerLaunchDeliveryKickoffReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryKickoffReceiptImport);

  const clearOfferLaunchDeliveryKickoffReceiptExportButton = byId("clear-offer-launch-delivery-kickoff-receipts");
  if (clearOfferLaunchDeliveryKickoffReceiptExportButton) clearOfferLaunchDeliveryKickoffReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryKickoffReceiptExports);

  const offerLaunchDeliveryMilestoneReceiptImportForm = byId("offer-launch-delivery-milestone-receipt-import-form");
  if (offerLaunchDeliveryMilestoneReceiptImportForm) offerLaunchDeliveryMilestoneReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryMilestoneReceiptImport);

  const clearOfferLaunchDeliveryMilestoneReceiptExportButton = byId("clear-offer-launch-delivery-milestone-receipts");
  if (clearOfferLaunchDeliveryMilestoneReceiptExportButton) clearOfferLaunchDeliveryMilestoneReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryMilestoneReceiptExports);

  const offerLaunchDeliveryOutcomeReceiptImportForm = byId("offer-launch-delivery-outcome-receipt-import-form");
  if (offerLaunchDeliveryOutcomeReceiptImportForm) offerLaunchDeliveryOutcomeReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryOutcomeReceiptImport);

  const clearOfferLaunchDeliveryOutcomeReceiptExportButton = byId("clear-offer-launch-delivery-outcome-receipts");
  if (clearOfferLaunchDeliveryOutcomeReceiptExportButton) clearOfferLaunchDeliveryOutcomeReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryOutcomeReceiptExports);

  const offerLaunchDeliveryFollowUpReceiptImportForm = byId("offer-launch-delivery-follow-up-receipt-import-form");
  if (offerLaunchDeliveryFollowUpReceiptImportForm) offerLaunchDeliveryFollowUpReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryFollowUpReceiptImport);

  const clearOfferLaunchDeliveryFollowUpReceiptExportButton = byId("clear-offer-launch-delivery-follow-up-receipts");
  if (clearOfferLaunchDeliveryFollowUpReceiptExportButton) clearOfferLaunchDeliveryFollowUpReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryFollowUpReceiptExports);

  const offerLaunchDeliveryGrowthPlanReceiptImportForm = byId("offer-launch-delivery-growth-plan-receipt-import-form");
  if (offerLaunchDeliveryGrowthPlanReceiptImportForm) offerLaunchDeliveryGrowthPlanReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryGrowthPlanReceiptImport);

  const clearOfferLaunchDeliveryGrowthPlanReceiptExportButton = byId("clear-offer-launch-delivery-growth-plan-receipts");
  if (clearOfferLaunchDeliveryGrowthPlanReceiptExportButton) clearOfferLaunchDeliveryGrowthPlanReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryGrowthPlanReceiptExports);

  const offerLaunchDeliveryGrowthPlanAcceptanceReceiptImportForm = byId("offer-launch-delivery-growth-plan-acceptance-receipt-import-form");
  if (offerLaunchDeliveryGrowthPlanAcceptanceReceiptImportForm) offerLaunchDeliveryGrowthPlanAcceptanceReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryGrowthPlanAcceptanceReceiptImport);

  const clearOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExportButton = byId("clear-offer-launch-delivery-growth-plan-acceptance-receipts");
  if (clearOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExportButton) clearOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExports);

  const offerLaunchDeliveryExpansionRequestReceiptImportForm = byId("offer-launch-delivery-expansion-request-receipt-import-form");
  if (offerLaunchDeliveryExpansionRequestReceiptImportForm) offerLaunchDeliveryExpansionRequestReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryExpansionRequestReceiptImport);

  const clearOfferLaunchDeliveryExpansionRequestReceiptExportButton = byId("clear-offer-launch-delivery-expansion-request-receipts");
  if (clearOfferLaunchDeliveryExpansionRequestReceiptExportButton) clearOfferLaunchDeliveryExpansionRequestReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryExpansionRequestReceiptExports);

  const offerLaunchDeliveryExpansionWorkspaceReceiptImportForm = byId("offer-launch-delivery-expansion-workspace-receipt-import-form");
  if (offerLaunchDeliveryExpansionWorkspaceReceiptImportForm) offerLaunchDeliveryExpansionWorkspaceReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryExpansionWorkspaceReceiptImport);

  const clearOfferLaunchDeliveryExpansionWorkspaceReceiptExportButton = byId("clear-offer-launch-delivery-expansion-workspace-receipts");
  if (clearOfferLaunchDeliveryExpansionWorkspaceReceiptExportButton) clearOfferLaunchDeliveryExpansionWorkspaceReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryExpansionWorkspaceReceiptExports);

  const offerLaunchDeliveryExpansionKickoffReceiptImportForm = byId("offer-launch-delivery-expansion-kickoff-receipt-import-form");
  if (offerLaunchDeliveryExpansionKickoffReceiptImportForm) offerLaunchDeliveryExpansionKickoffReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryExpansionKickoffReceiptImport);

  const clearOfferLaunchDeliveryExpansionKickoffReceiptExportButton = byId("clear-offer-launch-delivery-expansion-kickoff-receipts");
  if (clearOfferLaunchDeliveryExpansionKickoffReceiptExportButton) clearOfferLaunchDeliveryExpansionKickoffReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryExpansionKickoffReceiptExports);

  const offerLaunchDeliveryExpansionMilestoneReceiptImportForm = byId("offer-launch-delivery-expansion-milestone-receipt-import-form");
  if (offerLaunchDeliveryExpansionMilestoneReceiptImportForm) offerLaunchDeliveryExpansionMilestoneReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryExpansionMilestoneReceiptImport);

  const clearOfferLaunchDeliveryExpansionMilestoneReceiptExportButton = byId("clear-offer-launch-delivery-expansion-milestone-receipts");
  if (clearOfferLaunchDeliveryExpansionMilestoneReceiptExportButton) clearOfferLaunchDeliveryExpansionMilestoneReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryExpansionMilestoneReceiptExports);

  const offerLaunchDeliveryExpansionOutcomeReceiptImportForm = byId("offer-launch-delivery-expansion-outcome-receipt-import-form");
  if (offerLaunchDeliveryExpansionOutcomeReceiptImportForm) offerLaunchDeliveryExpansionOutcomeReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryExpansionOutcomeReceiptImport);

  const clearOfferLaunchDeliveryExpansionOutcomeReceiptExportButton = byId("clear-offer-launch-delivery-expansion-outcome-receipts");
  if (clearOfferLaunchDeliveryExpansionOutcomeReceiptExportButton) clearOfferLaunchDeliveryExpansionOutcomeReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryExpansionOutcomeReceiptExports);

  const offerLaunchDeliveryExpansionFollowUpReceiptImportForm = byId("offer-launch-delivery-expansion-follow-up-receipt-import-form");
  if (offerLaunchDeliveryExpansionFollowUpReceiptImportForm) offerLaunchDeliveryExpansionFollowUpReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryExpansionFollowUpReceiptImport);

  const clearOfferLaunchDeliveryExpansionFollowUpReceiptExportButton = byId("clear-offer-launch-delivery-expansion-follow-up-receipts");
  if (clearOfferLaunchDeliveryExpansionFollowUpReceiptExportButton) clearOfferLaunchDeliveryExpansionFollowUpReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryExpansionFollowUpReceiptExports);

  const offerLaunchDeliveryExpansionGrowthPlanReceiptImportForm = byId("offer-launch-delivery-expansion-growth-plan-receipt-import-form");
  if (offerLaunchDeliveryExpansionGrowthPlanReceiptImportForm) offerLaunchDeliveryExpansionGrowthPlanReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryExpansionGrowthPlanReceiptImport);

  const clearOfferLaunchDeliveryExpansionGrowthPlanReceiptExportButton = byId("clear-offer-launch-delivery-expansion-growth-plan-receipts");
  if (clearOfferLaunchDeliveryExpansionGrowthPlanReceiptExportButton) clearOfferLaunchDeliveryExpansionGrowthPlanReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryExpansionGrowthPlanReceiptExports);

  const offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptImportForm = byId("offer-launch-delivery-expansion-growth-plan-acceptance-receipt-import-form");
  if (offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptImportForm) offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptImportForm.addEventListener("submit", handleOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptImport);

  const clearOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExportButton = byId("clear-offer-launch-delivery-expansion-growth-plan-acceptance-receipts");
  if (clearOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExportButton) clearOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExportButton.addEventListener("click", handleClearOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptExports);

  const araReviewStatusReceiptImportForm = byId("ara-review-status-receipt-import-form");
  if (araReviewStatusReceiptImportForm) araReviewStatusReceiptImportForm.addEventListener("submit", handleAraReviewStatusReceiptImport);

  const clearAraReviewStatusReceiptExportButton = byId("clear-ara-review-status-receipts");
  if (clearAraReviewStatusReceiptExportButton) clearAraReviewStatusReceiptExportButton.addEventListener("click", handleClearAraReviewStatusReceiptExports);

  const araMaterializationReceiptImportForm = byId("ara-materialization-receipt-import-form");
  if (araMaterializationReceiptImportForm) araMaterializationReceiptImportForm.addEventListener("submit", handleAraMaterializationReceiptImport);

  const clearAraMaterializationReceiptExportButton = byId("clear-ara-materialization-receipts");
  if (clearAraMaterializationReceiptExportButton) clearAraMaterializationReceiptExportButton.addEventListener("click", handleClearAraMaterializationReceiptExports);

  const serviceMaterialReuseReceiptImportForm = byId("service-material-reuse-receipt-import-form");
  if (serviceMaterialReuseReceiptImportForm) serviceMaterialReuseReceiptImportForm.addEventListener("submit", handleServiceMaterialReuseReceiptImport);

  const clearServiceMaterialReuseReceiptExportButton = byId("clear-service-material-reuse-receipts");
  if (clearServiceMaterialReuseReceiptExportButton) clearServiceMaterialReuseReceiptExportButton.addEventListener("click", handleClearServiceMaterialReuseReceiptExports);

  const packageDeliveryChecklistReceiptImportForm = byId("package-delivery-checklist-receipt-import-form");
  if (packageDeliveryChecklistReceiptImportForm) packageDeliveryChecklistReceiptImportForm.addEventListener("submit", handlePackageDeliveryChecklistReceiptImport);

  const clearPackageDeliveryChecklistReceiptExportButton = byId("clear-package-delivery-checklist-receipts");
  if (clearPackageDeliveryChecklistReceiptExportButton) clearPackageDeliveryChecklistReceiptExportButton.addEventListener("click", handleClearPackageDeliveryChecklistReceiptExports);

  const packageDeliveryChecklistAutomationReceiptImportForm = byId("package-delivery-checklist-automation-receipt-import-form");
  if (packageDeliveryChecklistAutomationReceiptImportForm) packageDeliveryChecklistAutomationReceiptImportForm.addEventListener("submit", handlePackageDeliveryChecklistAutomationReceiptImport);

  const clearPackageDeliveryChecklistAutomationReceiptExportButton = byId("clear-package-delivery-checklist-automation-receipts");
  if (clearPackageDeliveryChecklistAutomationReceiptExportButton) clearPackageDeliveryChecklistAutomationReceiptExportButton.addEventListener("click", handleClearPackageDeliveryChecklistAutomationReceiptExports);

  const packageDeliveryExecutionReceiptImportForm = byId("package-delivery-execution-receipt-import-form");
  if (packageDeliveryExecutionReceiptImportForm) packageDeliveryExecutionReceiptImportForm.addEventListener("submit", handlePackageDeliveryExecutionReceiptImport);

  const clearPackageDeliveryExecutionReceiptExportButton = byId("clear-package-delivery-execution-receipts");
  if (clearPackageDeliveryExecutionReceiptExportButton) clearPackageDeliveryExecutionReceiptExportButton.addEventListener("click", handleClearPackageDeliveryExecutionReceiptExports);

  const packageDeliveryFollowUpRenewalReceiptImportForm = byId("package-delivery-followup-renewal-receipt-import-form");
  if (packageDeliveryFollowUpRenewalReceiptImportForm) packageDeliveryFollowUpRenewalReceiptImportForm.addEventListener("submit", handlePackageDeliveryFollowUpRenewalReceiptImport);

  const clearPackageDeliveryFollowUpRenewalReceiptExportButton = byId("clear-package-delivery-followup-renewal-receipts");
  if (clearPackageDeliveryFollowUpRenewalReceiptExportButton) clearPackageDeliveryFollowUpRenewalReceiptExportButton.addEventListener("click", handleClearPackageDeliveryFollowUpRenewalReceiptExports);

  const packageDeliveryQualityOutcomeReceiptImportForm = byId("package-delivery-quality-outcome-receipt-import-form");
  if (packageDeliveryQualityOutcomeReceiptImportForm) packageDeliveryQualityOutcomeReceiptImportForm.addEventListener("submit", handlePackageDeliveryQualityOutcomeReceiptImport);

  const clearPackageDeliveryQualityOutcomeReceiptExportButton = byId("clear-package-delivery-quality-outcome-receipts");
  if (clearPackageDeliveryQualityOutcomeReceiptExportButton) clearPackageDeliveryQualityOutcomeReceiptExportButton.addEventListener("click", handleClearPackageDeliveryQualityOutcomeReceiptExports);

  const packageDeliveryAccountGrowthReceiptImportForm = byId("package-delivery-account-growth-receipt-import-form");
  if (packageDeliveryAccountGrowthReceiptImportForm) packageDeliveryAccountGrowthReceiptImportForm.addEventListener("submit", handlePackageDeliveryAccountGrowthReceiptImport);

  const clearPackageDeliveryAccountGrowthReceiptExportButton = byId("clear-package-delivery-account-growth-receipts");
  if (clearPackageDeliveryAccountGrowthReceiptExportButton) clearPackageDeliveryAccountGrowthReceiptExportButton.addEventListener("click", handleClearPackageDeliveryAccountGrowthReceiptExports);

  const packageDeliveryRetentionReportReceiptImportForm = byId("package-delivery-retention-report-receipt-import-form");
  if (packageDeliveryRetentionReportReceiptImportForm) packageDeliveryRetentionReportReceiptImportForm.addEventListener("submit", handlePackageDeliveryRetentionReportReceiptImport);

  const clearPackageDeliveryRetentionReportReceiptExportButton = byId("clear-package-delivery-retention-report-receipts");
  if (clearPackageDeliveryRetentionReportReceiptExportButton) clearPackageDeliveryRetentionReportReceiptExportButton.addEventListener("click", handleClearPackageDeliveryRetentionReportReceiptExports);

  const packageDeliveryGrowthActionReceiptImportForm = byId("package-delivery-growth-action-receipt-import-form");
  if (packageDeliveryGrowthActionReceiptImportForm) packageDeliveryGrowthActionReceiptImportForm.addEventListener("submit", handlePackageDeliveryGrowthActionReceiptImport);

  const clearPackageDeliveryGrowthActionReceiptExportButton = byId("clear-package-delivery-growth-action-receipts");
  if (clearPackageDeliveryGrowthActionReceiptExportButton) clearPackageDeliveryGrowthActionReceiptExportButton.addEventListener("click", handleClearPackageDeliveryGrowthActionReceiptExports);

  const resetButton = byId("reset-ledger");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      state.ledger = clone(initialWorkshopLedger);
      saveLedger(state.ledger);
      renderAll();
    });
  }
}

renderAll();
bindControls();
