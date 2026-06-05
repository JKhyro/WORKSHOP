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
const coreSmoke = read("../native/workshop_core_smoke.c");
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
const appPackageDeliveryRetentionReport = read("../src/Workshop.App/Models/WorkshopPackageDeliveryRetentionReportRecord.cs");
const appPackageDeliveryRetentionReportReceipt = read("../src/Workshop.App/Models/WorkshopPackageDeliveryRetentionReportReceipt.cs");
const appPackageDeliveryGrowthAction = read("../src/Workshop.App/Models/WorkshopPackageDeliveryGrowthActionRecord.cs");
const appPackageDeliveryGrowthActionReceipt = read("../src/Workshop.App/Models/WorkshopPackageDeliveryGrowthActionReceipt.cs");
const appOfferLaunchReadiness = read("../src/Workshop.App/Models/WorkshopOfferLaunchReadinessRecord.cs");
const appOfferLaunchReadinessReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchReadinessReceipt.cs");
const appOfferLaunchIntakeAction = read("../src/Workshop.App/Models/WorkshopOfferLaunchIntakeActionRecord.cs");
const appOfferLaunchIntakeReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchIntakeReceipt.cs");
const appOfferLaunchActivation = read("../src/Workshop.App/Models/WorkshopOfferLaunchActivationRecord.cs");
const appOfferLaunchActivationReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchActivationReceipt.cs");
const appOfferLaunchServiceSetup = read("../src/Workshop.App/Models/WorkshopOfferLaunchServiceSetupRecord.cs");
const appOfferLaunchServiceSetupReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchServiceSetupReceipt.cs");
const appOfferLaunchDeliveryWorkspace = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryWorkspaceRecord.cs");
const appOfferLaunchDeliveryWorkspaceReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryWorkspaceReceipt.cs");
const appOfferLaunchDeliveryKickoff = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryKickoffRecord.cs");
const appOfferLaunchDeliveryKickoffReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryKickoffReceipt.cs");
const appOfferLaunchDeliveryMilestone = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryMilestoneRecord.cs");
const appOfferLaunchDeliveryMilestoneReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryMilestoneReceipt.cs");
const appOfferLaunchDeliveryOutcome = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryOutcomeRecord.cs");
const appOfferLaunchDeliveryOutcomeReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryOutcomeReceipt.cs");
const appOfferLaunchDeliveryFollowUp = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryFollowUpRecord.cs");
const appOfferLaunchDeliveryFollowUpReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryFollowUpReceipt.cs");
const appOfferLaunchDeliveryGrowthPlan = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryGrowthPlanRecord.cs");
const appOfferLaunchDeliveryGrowthPlanReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryGrowthPlanReceipt.cs");
const appOfferLaunchDeliveryGrowthPlanAcceptance = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord.cs");
const appOfferLaunchDeliveryGrowthPlanAcceptanceReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt.cs");
const appOfferLaunchDeliveryExpansionRequest = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionRequestRecord.cs");
const appOfferLaunchDeliveryExpansionRequestReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionRequestReceipt.cs");
const appOfferLaunchDeliveryExpansionWorkspace = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord.cs");
const appOfferLaunchDeliveryExpansionWorkspaceReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt.cs");
const appOfferLaunchDeliveryExpansionKickoff = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionKickoffRecord.cs");
const appOfferLaunchDeliveryExpansionKickoffReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionKickoffReceipt.cs");
const appOfferLaunchDeliveryExpansionMilestone = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionMilestoneRecord.cs");
const appOfferLaunchDeliveryExpansionMilestoneReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt.cs");
const appOfferLaunchDeliveryExpansionOutcome = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionOutcomeRecord.cs");
const appOfferLaunchDeliveryExpansionOutcomeReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt.cs");
const appOfferLaunchDeliveryExpansionFollowUp = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionFollowUpRecord.cs");
const appOfferLaunchDeliveryExpansionFollowUpReceipt = read("../src/Workshop.App/Models/WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt.cs");
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
const appPackageDeliveryRetentionReportStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryRetentionReportStore.cs");
const appPackageDeliveryRetentionReportReceiptStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryRetentionReportReceiptStore.cs");
const appPackageDeliveryGrowthActionStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryGrowthActionStore.cs");
const appPackageDeliveryGrowthActionReceiptStore = read("../src/Workshop.App/Services/WorkshopPackageDeliveryGrowthActionReceiptStore.cs");
const appOfferLaunchReadinessStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchReadinessStore.cs");
const appOfferLaunchReadinessReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchReadinessReceiptStore.cs");
const appOfferLaunchIntakeActionStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchIntakeActionStore.cs");
const appOfferLaunchIntakeReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchIntakeReceiptStore.cs");
const appOfferLaunchActivationStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchActivationStore.cs");
const appOfferLaunchActivationReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchActivationReceiptStore.cs");
const appOfferLaunchServiceSetupStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchServiceSetupStore.cs");
const appOfferLaunchServiceSetupReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchServiceSetupReceiptStore.cs");
const appOfferLaunchDeliveryWorkspaceStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryWorkspaceStore.cs");
const appOfferLaunchDeliveryWorkspaceReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryWorkspaceReceiptStore.cs");
const appOfferLaunchDeliveryKickoffStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryKickoffStore.cs");
const appOfferLaunchDeliveryKickoffReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryKickoffReceiptStore.cs");
const appOfferLaunchDeliveryMilestoneStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryMilestoneStore.cs");
const appOfferLaunchDeliveryMilestoneReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryMilestoneReceiptStore.cs");
const appOfferLaunchDeliveryOutcomeStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryOutcomeStore.cs");
const appOfferLaunchDeliveryOutcomeReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryOutcomeReceiptStore.cs");
const appOfferLaunchDeliveryFollowUpStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryFollowUpStore.cs");
const appOfferLaunchDeliveryFollowUpReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryFollowUpReceiptStore.cs");
const appOfferLaunchDeliveryGrowthPlanStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryGrowthPlanStore.cs");
const appOfferLaunchDeliveryGrowthPlanReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryGrowthPlanReceiptStore.cs");
const appOfferLaunchDeliveryGrowthPlanAcceptanceStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceStore.cs");
const appOfferLaunchDeliveryGrowthPlanAcceptanceReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceiptStore.cs");
const appOfferLaunchDeliveryExpansionRequestStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionRequestStore.cs");
const appOfferLaunchDeliveryExpansionRequestReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionRequestReceiptStore.cs");
const appOfferLaunchDeliveryExpansionWorkspaceStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionWorkspaceStore.cs");
const appOfferLaunchDeliveryExpansionWorkspaceReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionWorkspaceReceiptStore.cs");
const appOfferLaunchDeliveryExpansionKickoffStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionKickoffStore.cs");
const appOfferLaunchDeliveryExpansionKickoffReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionKickoffReceiptStore.cs");
const appOfferLaunchDeliveryExpansionMilestoneStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionMilestoneStore.cs");
const appOfferLaunchDeliveryExpansionMilestoneReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionMilestoneReceiptStore.cs");
const appOfferLaunchDeliveryExpansionOutcomeStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionOutcomeStore.cs");
const appOfferLaunchDeliveryExpansionOutcomeReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionOutcomeReceiptStore.cs");
const appOfferLaunchDeliveryExpansionFollowUpStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionFollowUpStore.cs");
const appOfferLaunchDeliveryExpansionFollowUpReceiptStore = read("../src/Workshop.App/Services/WorkshopOfferLaunchDeliveryExpansionFollowUpReceiptStore.cs");
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
  "Offer Launch Readiness Receipt Export",
  "offer-launch-readiness-receipt-import-form",
  "offer-launch-readiness-receipt-file",
  "offer-launch-readiness-receipt-summary",
  "portal-offer-launch-readiness-receipt-export",
  "clear-offer-launch-readiness-receipts",
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
  "portal-package-delivery-account-growth-receipt-export",
  "stat-package-delivery-retention-reports",
  "stat-package-delivery-retention-report-receipts",
  "package-delivery-retention-report-list",
  "package-delivery-retention-report-receipt-list",
  "package-delivery-retention-report-receipt-import-form",
  "package-delivery-retention-report-receipt-file",
  "package-delivery-retention-report-receipt-summary",
  "clear-package-delivery-retention-report-receipts",
  "portal-package-delivery-retention-report-status",
  "portal-package-delivery-retention-report-receipt-export",
  "stat-package-delivery-growth-actions",
  "stat-package-delivery-growth-action-receipts",
  "stat-offer-launch-readiness",
  "stat-offer-launch-receipts",
  "stat-offer-launch-intake-actions",
  "stat-offer-launch-intake-receipts",
  "stat-offer-launch-activations",
  "stat-offer-launch-activation-receipts",
  "stat-offer-launch-service-setups",
  "stat-offer-launch-service-setup-receipts",
  "stat-offer-launch-delivery-workspaces",
  "stat-offer-launch-delivery-workspace-receipts",
  "stat-offer-launch-delivery-kickoffs",
  "stat-offer-launch-delivery-kickoff-receipts",
  "stat-offer-launch-delivery-milestones",
  "stat-offer-launch-delivery-milestone-receipts",
  "stat-offer-launch-delivery-outcomes",
  "stat-offer-launch-delivery-outcome-receipts",
  "stat-offer-launch-delivery-follow-ups",
  "stat-offer-launch-delivery-follow-up-receipts",
  "stat-offer-launch-delivery-growth-plans",
  "stat-offer-launch-delivery-growth-plan-receipts",
  "stat-offer-launch-delivery-growth-plan-acceptances",
  "stat-offer-launch-delivery-growth-plan-acceptance-receipts",
  "offer-launch-readiness-list",
  "offer-launch-readiness-receipt-list",
  "offer-launch-intake-action-list",
  "offer-launch-intake-receipt-list",
  "offer-launch-activation-list",
  "offer-launch-activation-receipt-list",
  "offer-launch-service-setup-list",
  "offer-launch-service-setup-receipt-list",
  "offer-launch-delivery-workspace-list",
  "offer-launch-delivery-workspace-receipt-list",
  "offer-launch-delivery-kickoff-list",
  "offer-launch-delivery-kickoff-receipt-list",
  "offer-launch-delivery-milestone-list",
  "offer-launch-delivery-milestone-receipt-list",
  "offer-launch-delivery-outcome-list",
  "offer-launch-delivery-outcome-receipt-list",
  "offer-launch-delivery-follow-up-list",
  "offer-launch-delivery-follow-up-receipt-list",
  "offer-launch-delivery-growth-plan-list",
  "offer-launch-delivery-growth-plan-receipt-list",
  "offer-launch-delivery-growth-plan-acceptance-list",
  "offer-launch-delivery-growth-plan-acceptance-receipt-list",
  "portal-offer-launch-readiness",
  "portal-offer-launch-readiness-receipt-export",
  "Request A Launch-Ready Offer",
  "offer-launch-intake-action-form",
  "offer-launch-intake-receipt-id",
  "offer-launch-intake-customer",
  "offer-launch-intake-age-band",
  "offer-launch-intake-material-status",
  "offer-launch-intake-summary",
  "offer-launch-intake-needs-timing",
  "offer-launch-intake-submit",
  "offer-launch-intake-confirmation",
  "portal-offer-launch-intake-status",
  "Offer Launch Intake Receipt Export",
  "offer-launch-intake-receipt-import-form",
  "offer-launch-intake-receipt-file",
  "offer-launch-intake-receipt-summary",
  "portal-offer-launch-intake-receipt-export",
  "clear-offer-launch-intake-receipts",
  "Offer Launch Activation Receipt Export",
  "offer-launch-activation-receipt-import-form",
  "offer-launch-activation-receipt-file",
  "offer-launch-activation-receipt-summary",
  "portal-offer-launch-activation-receipt-export",
  "clear-offer-launch-activation-receipts",
  "Offer Launch Service Setup Receipt Export",
  "offer-launch-service-setup-receipt-import-form",
  "offer-launch-service-setup-receipt-file",
  "offer-launch-service-setup-receipt-summary",
  "portal-offer-launch-service-setup-status",
  "portal-offer-launch-service-setup-receipt-export",
  "clear-offer-launch-service-setup-receipts",
  "Offer Launch Delivery Workspace Receipt Export",
  "offer-launch-delivery-workspace-receipt-import-form",
  "offer-launch-delivery-workspace-receipt-file",
  "offer-launch-delivery-workspace-receipt-summary",
  "portal-offer-launch-delivery-workspace-status",
  "portal-offer-launch-delivery-workspace-receipt-export",
  "clear-offer-launch-delivery-workspace-receipts",
  "Offer Launch Delivery Kickoff Receipt Export",
  "offer-launch-delivery-kickoff-receipt-import-form",
  "offer-launch-delivery-kickoff-receipt-file",
  "offer-launch-delivery-kickoff-receipt-summary",
  "portal-offer-launch-delivery-kickoff-status",
  "portal-offer-launch-delivery-kickoff-receipt-export",
  "clear-offer-launch-delivery-kickoff-receipts",
  "Offer Launch Delivery Milestone Receipt Export",
  "offer-launch-delivery-milestone-receipt-import-form",
  "offer-launch-delivery-milestone-receipt-file",
  "offer-launch-delivery-milestone-receipt-summary",
  "portal-offer-launch-delivery-milestone-status",
  "portal-offer-launch-delivery-milestone-receipt-export",
  "clear-offer-launch-delivery-milestone-receipts",
  "Offer Launch Delivery Outcome Receipt Export",
  "offer-launch-delivery-outcome-receipt-import-form",
  "offer-launch-delivery-outcome-receipt-file",
  "offer-launch-delivery-outcome-receipt-summary",
  "portal-offer-launch-delivery-outcome-status",
  "portal-offer-launch-delivery-outcome-receipt-export",
  "clear-offer-launch-delivery-outcome-receipts",
  "Offer Launch Delivery Follow-Up Receipt Export",
  "offer-launch-delivery-follow-up-receipt-import-form",
  "offer-launch-delivery-follow-up-receipt-file",
  "offer-launch-delivery-follow-up-receipt-summary",
  "portal-offer-launch-delivery-follow-up-status",
  "portal-offer-launch-delivery-follow-up-receipt-export",
  "clear-offer-launch-delivery-follow-up-receipts",
  "Offer Launch Delivery Growth Plan Receipt Export",
  "offer-launch-delivery-growth-plan-receipt-import-form",
  "offer-launch-delivery-growth-plan-receipt-file",
  "offer-launch-delivery-growth-plan-receipt-summary",
  "portal-offer-launch-delivery-growth-plan-status",
  "portal-offer-launch-delivery-growth-plan-receipt-export",
  "clear-offer-launch-delivery-growth-plan-receipts",
  "Offer Launch Delivery Growth Plan Acceptance Receipt Export",
  "offer-launch-delivery-growth-plan-acceptance-receipt-import-form",
  "offer-launch-delivery-growth-plan-acceptance-receipt-file",
  "offer-launch-delivery-growth-plan-acceptance-receipt-summary",
  "portal-offer-launch-delivery-growth-plan-acceptance-status",
  "portal-offer-launch-delivery-growth-plan-acceptance-receipt-export",
  "clear-offer-launch-delivery-growth-plan-acceptance-receipts",
  "package-delivery-growth-action-list",
  "package-delivery-growth-action-receipt-list",
  "package-delivery-growth-action-receipt-import-form",
  "package-delivery-growth-action-receipt-file",
  "package-delivery-growth-action-receipt-summary",
  "clear-package-delivery-growth-action-receipts",
  "portal-package-delivery-growth-action-status",
  "portal-package-delivery-growth-action-receipt-export"
]) {
  const combined = `${root}\n${app}\n${portal}`;
  if (!combined.includes(phrase)) fail(`WORKSHOP web surface missing ${phrase}`);
}

for (const phrase of ["revenueLanes", "submissions", "packages", "packageEligibility", "marketResearchRecords", "competitorPriceAnchors", "offerExperiments", "laborEstimates", "roiRecords", "revenueAuditRecords", "revenueReceipts", "deliveryLogEntries", "revenueSearchQueries", "revenueSearchResults", "offerTemplates", "servicePages", "materialAssets", "marketingChannelExperiments", "offerLaunchReadinessRecords", "offerLaunchReadinessReceipts", "offerLaunchIntakeActions", "offerLaunchIntakeReceipts", "offerLaunchActivations", "offerLaunchActivationReceipts", "offerLaunchServiceSetups", "offerLaunchServiceSetupReceipts", "offerLaunchDeliveryWorkspaces", "offerLaunchDeliveryWorkspaceReceipts", "offerLaunchDeliveryKickoffs", "offerLaunchDeliveryKickoffReceipts", "offerLaunchDeliveryMilestones", "offerLaunchDeliveryMilestoneReceipts", "offerLaunchDeliveryOutcomes", "offerLaunchDeliveryOutcomeReceipts", "offerLaunchDeliveryFollowUps", "offerLaunchDeliveryFollowUpReceipts", "offerLaunchDeliveryGrowthPlans", "offerLaunchDeliveryGrowthPlanReceipts", "offerLaunchDeliveryGrowthPlanAcceptances", "offerLaunchDeliveryGrowthPlanAcceptanceReceipts", "offerLaunchDeliveryExpansionRequests", "offerLaunchDeliveryExpansionRequestReceipts", "offerLaunchDeliveryExpansionWorkspaces", "offerLaunchDeliveryExpansionWorkspaceReceipts", "offerLaunchDeliveryExpansionKickoffs", "offerLaunchDeliveryExpansionKickoffReceipts", "offerLaunchDeliveryExpansionMilestones", "offerLaunchDeliveryExpansionMilestoneReceipts", "offerLaunchDeliveryExpansionOutcomes", "offerLaunchDeliveryExpansionOutcomeReceipts", "offerLaunchDeliveryExpansionFollowUps", "offerLaunchDeliveryExpansionFollowUpReceipts", "araWorkPackets", "ownerTimeBudgets", "submissionReviewCycles", "cohortPlans", "cohortCapacityPlans", "subscriptionPlans", "cohortPlanningReceipts", "cohortEnrollments", "subscriptionLifecycles", "subscriptionLifecycleReceipts", "cohortOutcomeReports", "subscriptionRenewalReports", "cohortProgressStatusEvents", "outcomeRenewalReceipts", "compatibilityGates", "crmAccounts", "araQueue", "crmOpportunities", "araRevenuePackets", "araAssignments", "araReviewReceipts", "revenueOutcomes", "deliveryResultReceipts", "araReviewCompletions", "araReviewQueues", "araOperatorReviewDecisions", "araReviewStatusReceipts", "araMethodMaterializations", "araMaterializationReceipts", "serviceMaterialReuseRecords", "serviceMaterialReuseReceipts", "packageDeliveryChecklists", "packageDeliveryChecklistReceipts", "packageDeliveryChecklistAutomations", "packageDeliveryChecklistAutomationReceipts", "packageDeliveryExecutions", "packageDeliveryExecutionReceipts", "packageDeliveryFollowUpRenewals", "packageDeliveryFollowUpRenewalReceipts", "packageDeliveryQualityOutcomes", "packageDeliveryQualityOutcomeReceipts", "packageDeliveryAccountGrowthLinkages", "packageDeliveryAccountGrowthReceipts", "packageDeliveryRetentionReports", "packageDeliveryRetentionReportReceipts", "packageDeliveryGrowthActions", "packageDeliveryGrowthActionReceipts", "customerAccounts", "customerAccountHistory", "renewalOpportunities", "customerFollowUps", "retentionHealth", "referralOpportunities", "accountGrowthPlans", "growthFollowUpReceipts", "referralConversions", "growthPlanAcceptances", "expansionServiceRequests", "conversionStatusEvents", "conversionReceipts", "accountGrowthAutomations", "accountGrowthAutomationReceipts", "epochTimingReturnPayloads", "epochTimingReturnConsumptions", "timingReturnReceipts", "epochRevisedCalendarTimingPayloads", "epochRevisedCalendarTimingConsumptions", "revisedCalendarTimingReceipts", "timingAwareServiceFollowUps", "timingAwareRenewalReceipts", "deliveryOutcomeAutomations", "deliveryOutcomeAutomationReceipts", "epochCapacityWaitlistPayloads", "epochCapacityWaitlistConsumptions", "capacityWaitlistReceipts", "epochRecurringSeriesPayloads", "epochRecurringSeriesConsumptions", "recurringSeriesReceipts", "deliveryTimeline", "deliveryLifecycles", "serviceLifecycleActions", "deliveryTransitions", "customerStatusEvents"]) {
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
  "packageDeliveryRetentionReports",
  "packageDeliveryRetentionReportReceipts",
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
  "createPackageDeliveryRetentionReportForAccountGrowth",
  "createPackageDeliveryRetentionReportReceiptForRecord",
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
  "WORKSHOP_OFFER_LAUNCH_READINESS_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchReadinessReceiptExport",
  "normalizeOfferLaunchReadinessReceiptPayload",
  "loadOfferLaunchReadinessReceiptExports",
  "saveOfferLaunchReadinessReceiptExports",
  "offerLaunchReadinessReceiptExportState",
  "offer-launch-readiness-receipts.json",
  "offer-launch-readiness-receipt-import-form",
  "offer-launch-readiness-receipt-file",
  "offer-launch-readiness-receipt-summary",
  "handleOfferLaunchReadinessReceiptImport",
  "handleClearOfferLaunchReadinessReceiptExports",
  "createOfferLaunchIntakeActionForReceipt",
  "createOfferLaunchIntakeReceiptForAction",
  "offerLaunchIntakeActions",
  "offerLaunchIntakeReceipts",
  "normalizeOfferLaunchIntakeReceiptExport",
  "normalizeOfferLaunchIntakeReceiptPayload",
  "loadOfferLaunchIntakeReceiptExports",
  "saveOfferLaunchIntakeReceiptExports",
  "offerLaunchIntakeReceiptExportState",
  "offer-launch-intake-receipts.json",
  "createOfferLaunchActivationForIntakeReceipt",
  "createOfferLaunchActivationReceiptForActivation",
  "offerLaunchActivations",
  "offerLaunchActivationReceipts",
  "normalizeOfferLaunchActivationReceiptExport",
  "normalizeOfferLaunchActivationReceiptPayload",
  "loadOfferLaunchActivationReceiptExports",
  "saveOfferLaunchActivationReceiptExports",
  "offerLaunchActivationReceiptExportState",
  "offer-launch-activation-receipts.json",
  "createOfferLaunchServiceSetupForActivationReceipt",
  "createOfferLaunchServiceSetupReceiptForSetup",
  "offerLaunchServiceSetups",
  "offerLaunchServiceSetupReceipts",
  "WORKSHOP_OFFER_LAUNCH_SERVICE_SETUP_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchServiceSetupReceiptExport",
  "normalizeOfferLaunchServiceSetupReceiptPayload",
  "loadOfferLaunchServiceSetupReceiptExports",
  "saveOfferLaunchServiceSetupReceiptExports",
  "offerLaunchServiceSetupReceiptExportState",
  "offer-launch-service-setup-receipts.json",
  "createOfferLaunchDeliveryWorkspaceForSetupReceipt",
  "createOfferLaunchDeliveryWorkspaceReceiptForWorkspace",
  "offerLaunchDeliveryWorkspaces",
  "offerLaunchDeliveryWorkspaceReceipts",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_WORKSPACE_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryWorkspaceReceiptExport",
  "normalizeOfferLaunchDeliveryWorkspaceReceiptPayload",
  "loadOfferLaunchDeliveryWorkspaceReceiptExports",
  "saveOfferLaunchDeliveryWorkspaceReceiptExports",
  "offerLaunchDeliveryWorkspaceReceiptExportState",
  "offer-launch-delivery-workspace-receipts.json",
  "createOfferLaunchDeliveryKickoffForWorkspaceReceipt",
  "createOfferLaunchDeliveryKickoffReceiptForKickoff",
  "offerLaunchDeliveryKickoffs",
  "offerLaunchDeliveryKickoffReceipts",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_KICKOFF_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryKickoffReceiptExport",
  "normalizeOfferLaunchDeliveryKickoffReceiptPayload",
  "loadOfferLaunchDeliveryKickoffReceiptExports",
  "saveOfferLaunchDeliveryKickoffReceiptExports",
  "offerLaunchDeliveryKickoffReceiptExportState",
  "offer-launch-delivery-kickoff-receipts.json",
  "createOfferLaunchDeliveryMilestoneForKickoffReceipt",
  "createOfferLaunchDeliveryMilestoneReceiptForMilestone",
  "offerLaunchDeliveryMilestones",
  "offerLaunchDeliveryMilestoneReceipts",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_MILESTONE_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryMilestoneReceiptExport",
  "normalizeOfferLaunchDeliveryMilestoneReceiptPayload",
  "loadOfferLaunchDeliveryMilestoneReceiptExports",
  "saveOfferLaunchDeliveryMilestoneReceiptExports",
  "offerLaunchDeliveryMilestoneReceiptExportState",
  "offer-launch-delivery-milestone-receipts.json",
  "createOfferLaunchDeliveryOutcomeForMilestoneReceipt",
  "createOfferLaunchDeliveryOutcomeReceiptForOutcome",
  "offerLaunchDeliveryOutcomes",
  "offerLaunchDeliveryOutcomeReceipts",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_OUTCOME_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryOutcomeReceiptExport",
  "normalizeOfferLaunchDeliveryOutcomeReceiptPayload",
  "loadOfferLaunchDeliveryOutcomeReceiptExports",
  "saveOfferLaunchDeliveryOutcomeReceiptExports",
  "offerLaunchDeliveryOutcomeReceiptExportState",
  "offer-launch-delivery-outcome-receipts.json",
  "createOfferLaunchDeliveryFollowUpForOutcomeReceipt",
  "createOfferLaunchDeliveryFollowUpReceiptForFollowUp",
  "offerLaunchDeliveryFollowUps",
  "offerLaunchDeliveryFollowUpReceipts",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_FOLLOW_UP_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryFollowUpReceiptExport",
  "normalizeOfferLaunchDeliveryFollowUpReceiptPayload",
  "loadOfferLaunchDeliveryFollowUpReceiptExports",
  "saveOfferLaunchDeliveryFollowUpReceiptExports",
  "offerLaunchDeliveryFollowUpReceiptExportState",
  "offer-launch-delivery-follow-up-receipts.json",
  "createOfferLaunchDeliveryGrowthPlanForFollowUpReceipt",
  "createOfferLaunchDeliveryGrowthPlanReceiptForGrowthPlan",
  "offerLaunchDeliveryGrowthPlans",
  "offerLaunchDeliveryGrowthPlanReceipts",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_GROWTH_PLAN_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryGrowthPlanReceiptExport",
  "normalizeOfferLaunchDeliveryGrowthPlanReceiptPayload",
  "loadOfferLaunchDeliveryGrowthPlanReceiptExports",
  "saveOfferLaunchDeliveryGrowthPlanReceiptExports",
  "offerLaunchDeliveryGrowthPlanReceiptExportState",
  "offer-launch-delivery-growth-plan-receipts.json",
  "createOfferLaunchDeliveryGrowthPlanAcceptanceForGrowthPlanReceipt",
  "createOfferLaunchDeliveryGrowthPlanAcceptanceReceiptForAcceptance",
  "offerLaunchDeliveryGrowthPlanAcceptances",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts",
  "createOfferLaunchDeliveryExpansionRequestForAcceptanceReceipt",
  "createOfferLaunchDeliveryExpansionRequestReceiptForRequest",
  "offerLaunchDeliveryExpansionRequests",
  "offerLaunchDeliveryExpansionRequestReceipts",
  "createOfferLaunchDeliveryExpansionWorkspaceForRequestReceipt",
  "createOfferLaunchDeliveryExpansionWorkspaceReceiptForWorkspace",
  "offerLaunchDeliveryExpansionWorkspaces",
  "offerLaunchDeliveryExpansionWorkspaceReceipts",
  "createOfferLaunchDeliveryExpansionKickoffForWorkspaceReceipt",
  "createOfferLaunchDeliveryExpansionKickoffReceiptForKickoff",
  "offerLaunchDeliveryExpansionKickoffs",
  "offerLaunchDeliveryExpansionKickoffReceipts",
  "createOfferLaunchDeliveryExpansionMilestoneForKickoffReceipt",
  "createOfferLaunchDeliveryExpansionMilestoneReceiptForMilestone",
  "offerLaunchDeliveryExpansionMilestones",
  "offerLaunchDeliveryExpansionMilestoneReceipts",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_REQUEST_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryExpansionRequestReceiptExport",
  "normalizeOfferLaunchDeliveryExpansionRequestReceiptPayload",
  "loadOfferLaunchDeliveryExpansionRequestReceiptExports",
  "saveOfferLaunchDeliveryExpansionRequestReceiptExports",
  "offerLaunchDeliveryExpansionRequestReceiptExportState",
  "offer-launch-delivery-expansion-request-receipts.json",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_WORKSPACE_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryExpansionWorkspaceReceiptExport",
  "normalizeOfferLaunchDeliveryExpansionWorkspaceReceiptPayload",
  "loadOfferLaunchDeliveryExpansionWorkspaceReceiptExports",
  "saveOfferLaunchDeliveryExpansionWorkspaceReceiptExports",
  "offerLaunchDeliveryExpansionWorkspaceReceiptExportState",
  "offer-launch-delivery-expansion-workspace-receipts.json",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_KICKOFF_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryExpansionKickoffReceiptExport",
  "normalizeOfferLaunchDeliveryExpansionKickoffReceiptPayload",
  "loadOfferLaunchDeliveryExpansionKickoffReceiptExports",
  "saveOfferLaunchDeliveryExpansionKickoffReceiptExports",
  "offerLaunchDeliveryExpansionKickoffReceiptExportState",
  "offer-launch-delivery-expansion-kickoff-receipts.json",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_MILESTONE_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryExpansionMilestoneReceiptExport",
  "normalizeOfferLaunchDeliveryExpansionMilestoneReceiptPayload",
  "loadOfferLaunchDeliveryExpansionMilestoneReceiptExports",
  "saveOfferLaunchDeliveryExpansionMilestoneReceiptExports",
  "offerLaunchDeliveryExpansionMilestoneReceiptExportState",
  "offer-launch-delivery-expansion-milestone-receipts.json",
  "createOfferLaunchDeliveryExpansionOutcomeForMilestoneReceipt",
  "createOfferLaunchDeliveryExpansionOutcomeReceiptForOutcome",
  "offerLaunchDeliveryExpansionOutcomes",
  "offerLaunchDeliveryExpansionOutcomeReceipts",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_OUTCOME_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryExpansionOutcomeReceiptExport",
  "normalizeOfferLaunchDeliveryExpansionOutcomeReceiptPayload",
  "loadOfferLaunchDeliveryExpansionOutcomeReceiptExports",
  "saveOfferLaunchDeliveryExpansionOutcomeReceiptExports",
  "offerLaunchDeliveryExpansionOutcomeReceiptExportState",
  "offer-launch-delivery-expansion-outcome-receipts.json",
  "createOfferLaunchDeliveryExpansionFollowUpForOutcomeReceipt",
  "createOfferLaunchDeliveryExpansionFollowUpReceiptForFollowUp",
  "offerLaunchDeliveryExpansionFollowUps",
  "offerLaunchDeliveryExpansionFollowUpReceipts",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_EXPANSION_FOLLOW_UP_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryExpansionFollowUpReceiptExport",
  "normalizeOfferLaunchDeliveryExpansionFollowUpReceiptPayload",
  "loadOfferLaunchDeliveryExpansionFollowUpReceiptExports",
  "saveOfferLaunchDeliveryExpansionFollowUpReceiptExports",
  "offerLaunchDeliveryExpansionFollowUpReceiptExportState",
  "offer-launch-delivery-expansion-follow-up-receipts.json",
  "WORKSHOP_OFFER_LAUNCH_DELIVERY_GROWTH_PLAN_ACCEPTANCE_RECEIPT_EXPORT_KEY",
  "normalizeOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExport",
  "normalizeOfferLaunchDeliveryGrowthPlanAcceptanceReceiptPayload",
  "loadOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExports",
  "saveOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExports",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceiptExportState",
  "offer-launch-delivery-growth-plan-acceptance-receipts.json",
  "stat-offer-launch-intake-actions",
  "stat-offer-launch-intake-receipts",
  "stat-offer-launch-activations",
  "stat-offer-launch-activation-receipts",
  "stat-offer-launch-service-setups",
  "stat-offer-launch-service-setup-receipts",
  "stat-offer-launch-delivery-workspaces",
  "stat-offer-launch-delivery-workspace-receipts",
  "stat-offer-launch-delivery-kickoffs",
  "stat-offer-launch-delivery-kickoff-receipts",
  "stat-offer-launch-delivery-milestones",
  "stat-offer-launch-delivery-milestone-receipts",
  "stat-offer-launch-delivery-outcomes",
  "stat-offer-launch-delivery-outcome-receipts",
  "stat-offer-launch-delivery-follow-ups",
  "stat-offer-launch-delivery-follow-up-receipts",
  "stat-offer-launch-delivery-growth-plans",
  "stat-offer-launch-delivery-growth-plan-receipts",
  "stat-offer-launch-delivery-growth-plan-acceptances",
  "stat-offer-launch-delivery-growth-plan-acceptance-receipts",
  "stat-offer-launch-delivery-expansion-requests",
  "stat-offer-launch-delivery-expansion-request-receipts",
  "stat-offer-launch-delivery-expansion-workspaces",
  "stat-offer-launch-delivery-expansion-workspace-receipts",
  "stat-offer-launch-delivery-expansion-kickoffs",
  "stat-offer-launch-delivery-expansion-kickoff-receipts",
  "stat-offer-launch-delivery-expansion-milestones",
  "stat-offer-launch-delivery-expansion-milestone-receipts",
  "stat-offer-launch-delivery-expansion-outcomes",
  "stat-offer-launch-delivery-expansion-outcome-receipts",
  "stat-offer-launch-delivery-expansion-follow-ups",
  "stat-offer-launch-delivery-expansion-follow-up-receipts",
  "offer-launch-intake-action-list",
  "offer-launch-intake-receipt-list",
  "offer-launch-activation-list",
  "offer-launch-activation-receipt-list",
  "offer-launch-service-setup-list",
  "offer-launch-service-setup-receipt-list",
  "offer-launch-delivery-workspace-list",
  "offer-launch-delivery-workspace-receipt-list",
  "offer-launch-delivery-kickoff-list",
  "offer-launch-delivery-kickoff-receipt-list",
  "offer-launch-delivery-milestone-list",
  "offer-launch-delivery-milestone-receipt-list",
  "offer-launch-delivery-outcome-list",
  "offer-launch-delivery-outcome-receipt-list",
  "offer-launch-delivery-follow-up-list",
  "offer-launch-delivery-follow-up-receipt-list",
  "offer-launch-delivery-growth-plan-list",
  "offer-launch-delivery-growth-plan-receipt-list",
  "offer-launch-delivery-growth-plan-acceptance-list",
  "offer-launch-delivery-growth-plan-acceptance-receipt-list",
  "offer-launch-delivery-expansion-request-list",
  "offer-launch-delivery-expansion-request-receipt-list",
  "offer-launch-delivery-expansion-workspace-list",
  "offer-launch-delivery-expansion-workspace-receipt-list",
  "offer-launch-delivery-expansion-kickoff-list",
  "offer-launch-delivery-expansion-kickoff-receipt-list",
  "offer-launch-delivery-expansion-milestone-list",
  "offer-launch-delivery-expansion-milestone-receipt-list",
  "offer-launch-delivery-expansion-outcome-list",
  "offer-launch-delivery-expansion-outcome-receipt-list",
  "offer-launch-delivery-expansion-follow-up-list",
  "offer-launch-delivery-expansion-follow-up-receipt-list",
  "portal-offer-launch-intake-status",
  "portal-offer-launch-intake-receipt-export",
  "portal-offer-launch-activation-receipt-export",
  "portal-offer-launch-service-setup-status",
  "portal-offer-launch-service-setup-receipt-export",
  "portal-offer-launch-delivery-workspace-status",
  "portal-offer-launch-delivery-workspace-receipt-export",
  "portal-offer-launch-delivery-kickoff-status",
  "portal-offer-launch-delivery-kickoff-receipt-export",
  "portal-offer-launch-delivery-milestone-status",
  "portal-offer-launch-delivery-milestone-receipt-export",
  "portal-offer-launch-delivery-outcome-status",
  "portal-offer-launch-delivery-outcome-receipt-export",
  "portal-offer-launch-delivery-follow-up-status",
  "portal-offer-launch-delivery-follow-up-receipt-export",
  "portal-offer-launch-delivery-growth-plan-status",
  "portal-offer-launch-delivery-growth-plan-receipt-export",
  "portal-offer-launch-delivery-growth-plan-acceptance-status",
  "portal-offer-launch-delivery-growth-plan-acceptance-receipt-export",
  "portal-offer-launch-delivery-expansion-request-status",
  "portal-offer-launch-delivery-expansion-request-receipt-export",
  "portal-offer-launch-delivery-expansion-workspace-status",
  "portal-offer-launch-delivery-expansion-workspace-receipt-export",
  "portal-offer-launch-delivery-expansion-kickoff-status",
  "portal-offer-launch-delivery-expansion-kickoff-receipt-export",
  "portal-offer-launch-delivery-expansion-milestone-status",
  "portal-offer-launch-delivery-expansion-milestone-receipt-export",
  "portal-offer-launch-delivery-expansion-outcome-status",
  "portal-offer-launch-delivery-expansion-outcome-receipt-export",
  "portal-offer-launch-delivery-expansion-follow-up-status",
  "portal-offer-launch-delivery-expansion-follow-up-receipt-export",
  "offer-launch-intake-action-form",
  "offer-launch-intake-receipt-id",
  "offer-launch-intake-confirmation",
  "offer-launch-intake-receipt-import-form",
  "offer-launch-intake-receipt-file",
  "offer-launch-intake-receipt-summary",
  "offer-launch-activation-receipt-import-form",
  "offer-launch-activation-receipt-file",
  "offer-launch-activation-receipt-summary",
  "offer-launch-service-setup-receipt-import-form",
  "offer-launch-service-setup-receipt-file",
  "offer-launch-service-setup-receipt-summary",
  "offer-launch-delivery-workspace-receipt-import-form",
  "offer-launch-delivery-workspace-receipt-file",
  "offer-launch-delivery-workspace-receipt-summary",
  "offer-launch-delivery-kickoff-receipt-import-form",
  "offer-launch-delivery-kickoff-receipt-file",
  "offer-launch-delivery-kickoff-receipt-summary",
  "offer-launch-delivery-milestone-receipt-import-form",
  "offer-launch-delivery-milestone-receipt-file",
  "offer-launch-delivery-milestone-receipt-summary",
  "offer-launch-delivery-outcome-receipt-import-form",
  "offer-launch-delivery-outcome-receipt-file",
  "offer-launch-delivery-outcome-receipt-summary",
  "offer-launch-delivery-follow-up-receipt-import-form",
  "offer-launch-delivery-follow-up-receipt-file",
  "offer-launch-delivery-follow-up-receipt-summary",
  "offer-launch-delivery-growth-plan-receipt-import-form",
  "offer-launch-delivery-growth-plan-receipt-file",
  "offer-launch-delivery-growth-plan-receipt-summary",
  "offer-launch-delivery-growth-plan-acceptance-receipt-import-form",
  "offer-launch-delivery-growth-plan-acceptance-receipt-file",
  "offer-launch-delivery-growth-plan-acceptance-receipt-summary",
  "offer-launch-delivery-expansion-request-receipt-import-form",
  "offer-launch-delivery-expansion-request-receipt-file",
  "offer-launch-delivery-expansion-request-receipt-summary",
  "offer-launch-delivery-expansion-workspace-receipt-import-form",
  "offer-launch-delivery-expansion-workspace-receipt-file",
  "offer-launch-delivery-expansion-workspace-receipt-summary",
  "offer-launch-delivery-expansion-kickoff-receipt-import-form",
  "offer-launch-delivery-expansion-kickoff-receipt-file",
  "offer-launch-delivery-expansion-kickoff-receipt-summary",
  "offer-launch-delivery-expansion-milestone-receipt-import-form",
  "offer-launch-delivery-expansion-milestone-receipt-file",
  "offer-launch-delivery-expansion-milestone-receipt-summary",
  "offer-launch-delivery-expansion-outcome-receipt-import-form",
  "offer-launch-delivery-expansion-outcome-receipt-file",
  "offer-launch-delivery-expansion-outcome-receipt-summary",
  "clear-offer-launch-delivery-expansion-outcome-receipts",
  "offer-launch-delivery-expansion-follow-up-receipt-import-form",
  "offer-launch-delivery-expansion-follow-up-receipt-file",
  "offer-launch-delivery-expansion-follow-up-receipt-summary",
  "clear-offer-launch-delivery-expansion-follow-up-receipts",
  "handleOfferLaunchIntakeReceiptImport",
  "handleClearOfferLaunchIntakeReceiptExports",
  "handleOfferLaunchActivationReceiptImport",
  "handleClearOfferLaunchActivationReceiptExports",
  "handleOfferLaunchServiceSetupReceiptImport",
  "handleClearOfferLaunchServiceSetupReceiptExports",
  "handleOfferLaunchDeliveryWorkspaceReceiptImport",
  "handleClearOfferLaunchDeliveryWorkspaceReceiptExports",
  "handleOfferLaunchDeliveryKickoffReceiptImport",
  "handleClearOfferLaunchDeliveryKickoffReceiptExports",
  "handleOfferLaunchDeliveryMilestoneReceiptImport",
  "handleClearOfferLaunchDeliveryMilestoneReceiptExports",
  "handleOfferLaunchDeliveryOutcomeReceiptImport",
  "handleClearOfferLaunchDeliveryOutcomeReceiptExports",
  "handleOfferLaunchDeliveryFollowUpReceiptImport",
  "handleClearOfferLaunchDeliveryFollowUpReceiptExports",
  "handleOfferLaunchDeliveryGrowthPlanReceiptImport",
  "handleClearOfferLaunchDeliveryGrowthPlanReceiptExports",
  "handleOfferLaunchDeliveryGrowthPlanAcceptanceReceiptImport",
  "handleClearOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExports",
  "handleOfferLaunchDeliveryExpansionRequestReceiptImport",
  "handleClearOfferLaunchDeliveryExpansionRequestReceiptExports",
  "handleOfferLaunchDeliveryExpansionWorkspaceReceiptImport",
  "handleClearOfferLaunchDeliveryExpansionWorkspaceReceiptExports",
  "handleOfferLaunchDeliveryExpansionKickoffReceiptImport",
  "handleClearOfferLaunchDeliveryExpansionKickoffReceiptExports",
  "handleOfferLaunchDeliveryExpansionMilestoneReceiptImport",
  "handleClearOfferLaunchDeliveryExpansionMilestoneReceiptExports",
  "handleOfferLaunchDeliveryExpansionOutcomeReceiptImport",
  "handleClearOfferLaunchDeliveryExpansionOutcomeReceiptExports",
  "handleOfferLaunchDeliveryExpansionFollowUpReceiptImport",
  "handleClearOfferLaunchDeliveryExpansionFollowUpReceiptExports",
  "handleOfferLaunchIntakeAction",
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
  "WORKSHOP_PACKAGE_DELIVERY_RETENTION_REPORT_RECEIPT_EXPORT_KEY",
  "normalizePackageDeliveryRetentionReportReceiptExport",
  "normalizePackageDeliveryRetentionReportReceiptPayload",
  "loadPackageDeliveryRetentionReportReceiptExports",
  "savePackageDeliveryRetentionReportReceiptExports",
  "packageDeliveryRetentionReportReceiptExportState",
  "package-delivery-retention-reporting-receipts.json",
  "package-delivery-retention-report-receipt-import-form",
  "package-delivery-retention-report-receipt-file",
  "package-delivery-retention-report-receipt-summary",
  "handlePackageDeliveryRetentionReportReceiptImport",
  "handleClearPackageDeliveryRetentionReportReceiptExports",
  "WORKSHOP_PACKAGE_DELIVERY_GROWTH_ACTION_RECEIPT_EXPORT_KEY",
  "normalizePackageDeliveryGrowthActionReceiptExport",
  "normalizePackageDeliveryGrowthActionReceiptPayload",
  "loadPackageDeliveryGrowthActionReceiptExports",
  "savePackageDeliveryGrowthActionReceiptExports",
  "packageDeliveryGrowthActionReceiptExportState",
  "package-delivery-growth-action-receipts.json",
  "package-delivery-growth-action-receipt-import-form",
  "package-delivery-growth-action-receipt-file",
  "package-delivery-growth-action-receipt-summary",
  "handlePackageDeliveryGrowthActionReceiptImport",
  "handleClearPackageDeliveryGrowthActionReceiptExports",
  "service-page-list",
  "material-asset-list",
  "marketing-channel-experiment-list",
  "offer-launch-readiness-list",
  "offer-launch-readiness-receipt-list",
  "portal-offer-launch-readiness",
  "portal-service-pages",
  "stat-service-pages",
  "stat-material-assets",
  "stat-marketing-channels",
  "stat-offer-launch-readiness",
  "stat-offer-launch-receipts",
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
  "stat-package-delivery-retention-reports",
  "stat-package-delivery-retention-report-receipts",
  "stat-package-delivery-growth-actions",
  "stat-package-delivery-growth-action-receipts",
  "workflow-active-requests",
  "workflow-submissions",
  "workflow-package-delivery",
  "workflow-growth-actions",
  "workflow-epoch-handoffs",
  "workflow-offer-tests",
  "setText(\"workflow-active-requests\"",
  "setText(\"workflow-package-delivery\"",
  "workflow-action-grid",
  "workflow-card",
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

const appWorkflowGridIndex = app.indexOf("workflow-action-grid");
const appOperatingStateIndex = app.indexOf("Operating State");
if (appWorkflowGridIndex < 0 || appOperatingStateIndex < 0 || appWorkflowGridIndex > appOperatingStateIndex) {
  fail("WORKSHOP App workflow priority band must render before the operating ledger");
}

if (portal.includes("workflow-action-grid") || portal.includes("workflow-card")) {
  fail("WORKSHOP Webportal must not render App-only workflow priority controls");
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
  "PackageDeliveryRetentionReportSummary",
  "PackageDeliveryRetentionReportStatus",
  "PackageDeliveryRetentionReportLocation",
  "PackageDeliveryRetentionReportReceiptSummary",
  "PackageDeliveryRetentionReportReceiptStatus",
  "PackageDeliveryRetentionReportReceiptLocation",
  "PackageDeliveryRetentionReportCustomerMessage",
  "PackageDeliveryAccountGrowthReceiptSummary",
  "PackageDeliveryAccountGrowthReceiptStatus",
  "PackageDeliveryAccountGrowthCustomerMessage",
  "PackageDeliveryAccountGrowthReceiptLocation",
  "OfferLaunchReadinessSummary",
  "OfferLaunchReadinessStatus",
  "OfferLaunchReadinessReceiptSummary",
  "OfferLaunchReadinessReceiptStatus",
  "OfferLaunchIntakeActionSummary",
  "OfferLaunchIntakeActionStatus",
  "OfferLaunchIntakeReceiptSummary",
  "OfferLaunchIntakeReceiptStatus",
  "OfferLaunchActivationSummary",
  "OfferLaunchActivationStatus",
  "OfferLaunchActivationReceiptSummary",
  "OfferLaunchActivationReceiptStatus",
  "OfferLaunchActivationCustomerMessage",
  "OfferLaunchServiceSetupSummary",
  "OfferLaunchServiceSetupStatus",
  "OfferLaunchServiceSetupReceiptSummary",
  "OfferLaunchServiceSetupReceiptStatus",
  "OfferLaunchServiceSetupCustomerMessage",
  "OfferLaunchDeliveryWorkspaceSummary",
  "OfferLaunchDeliveryWorkspaceStatus",
  "OfferLaunchDeliveryWorkspaceReceiptSummary",
  "OfferLaunchDeliveryWorkspaceReceiptStatus",
  "OfferLaunchDeliveryWorkspaceCustomerMessage",
  "OfferLaunchDeliveryKickoffSummary",
  "OfferLaunchDeliveryKickoffStatus",
  "OfferLaunchDeliveryKickoffReceiptSummary",
  "OfferLaunchDeliveryKickoffReceiptStatus",
  "OfferLaunchDeliveryKickoffCustomerMessage",
  "OfferLaunchDeliveryMilestoneSummary",
  "OfferLaunchDeliveryMilestoneStatus",
  "OfferLaunchDeliveryMilestoneReceiptSummary",
  "OfferLaunchDeliveryMilestoneReceiptStatus",
  "OfferLaunchDeliveryMilestoneCustomerMessage",
  "OfferLaunchDeliveryOutcomeSummary",
  "OfferLaunchDeliveryOutcomeStatus",
  "OfferLaunchDeliveryOutcomeReceiptSummary",
  "OfferLaunchDeliveryOutcomeReceiptStatus",
  "OfferLaunchDeliveryOutcomeCustomerMessage",
  "OfferLaunchDeliveryFollowUpSummary",
  "OfferLaunchDeliveryFollowUpStatus",
  "OfferLaunchDeliveryFollowUpReceiptSummary",
  "OfferLaunchDeliveryFollowUpReceiptStatus",
  "OfferLaunchDeliveryFollowUpCustomerMessage",
  "OfferLaunchDeliveryGrowthPlanSummary",
  "OfferLaunchDeliveryGrowthPlanStatus",
  "OfferLaunchDeliveryGrowthPlanReceiptSummary",
  "OfferLaunchDeliveryGrowthPlanReceiptStatus",
  "OfferLaunchDeliveryGrowthPlanCustomerMessage",
  "OfferLaunchDeliveryGrowthPlanAcceptanceSummary",
  "OfferLaunchDeliveryGrowthPlanAcceptanceStatus",
  "OfferLaunchDeliveryGrowthPlanAcceptanceReceiptSummary",
  "OfferLaunchDeliveryGrowthPlanAcceptanceReceiptStatus",
  "OfferLaunchDeliveryGrowthPlanAcceptanceCustomerMessage",
  "OfferLaunchDeliveryExpansionRequestSummary",
  "OfferLaunchDeliveryExpansionRequestStatus",
  "OfferLaunchDeliveryExpansionRequestReceiptSummary",
  "OfferLaunchDeliveryExpansionRequestReceiptStatus",
  "OfferLaunchDeliveryExpansionRequestCustomerMessage",
  "OfferLaunchDeliveryExpansionWorkspaceSummary",
  "OfferLaunchDeliveryExpansionWorkspaceStatus",
  "OfferLaunchDeliveryExpansionWorkspaceReceiptSummary",
  "OfferLaunchDeliveryExpansionWorkspaceReceiptStatus",
  "OfferLaunchDeliveryExpansionWorkspaceCustomerMessage",
  "OfferLaunchDeliveryExpansionKickoffSummary",
  "OfferLaunchDeliveryExpansionKickoffStatus",
  "OfferLaunchDeliveryExpansionKickoffReceiptSummary",
  "OfferLaunchDeliveryExpansionKickoffReceiptStatus",
  "OfferLaunchDeliveryExpansionKickoffCustomerMessage",
  "OfferLaunchDeliveryExpansionMilestoneSummary",
  "OfferLaunchDeliveryExpansionMilestoneStatus",
  "OfferLaunchDeliveryExpansionMilestoneReceiptSummary",
  "OfferLaunchDeliveryExpansionMilestoneReceiptStatus",
  "OfferLaunchDeliveryExpansionMilestoneCustomerMessage",
  "OfferLaunchDeliveryExpansionOutcomeSummary",
  "OfferLaunchDeliveryExpansionOutcomeStatus",
  "OfferLaunchDeliveryExpansionOutcomeReceiptSummary",
  "OfferLaunchDeliveryExpansionOutcomeReceiptStatus",
  "OfferLaunchDeliveryExpansionOutcomeCustomerMessage",
  "OfferLaunchDeliveryExpansionFollowUpSummary",
  "OfferLaunchDeliveryExpansionFollowUpStatus",
  "OfferLaunchDeliveryExpansionFollowUpReceiptSummary",
  "OfferLaunchDeliveryExpansionFollowUpReceiptStatus",
  "OfferLaunchDeliveryExpansionFollowUpCustomerMessage",
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
  "WorkshopOfferLaunchReadinessStore.TryAppend",
  "WorkshopOfferLaunchReadinessReceiptStore.TryAppend",
  "WorkshopOfferLaunchIntakeActionStore.TryAppend",
  "WorkshopOfferLaunchIntakeReceiptStore.TryAppend",
  "WorkshopOfferLaunchActivationStore.TryAppend",
  "WorkshopOfferLaunchActivationReceiptStore.TryAppend",
  "WorkshopOfferLaunchServiceSetupStore.TryAppend",
  "WorkshopOfferLaunchServiceSetupReceiptStore.TryAppend",
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
  "App-owned package delivery retention report record(s)",
  "customer-safe package delivery retention-report receipt(s)",
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
  "WorkshopPackageDeliveryRetentionReportRecord",
  "FromReceipts",
  "WORKSHOP.App.PackageDeliveryRetentionReporting",
  "package-delivery-retention-reporting",
  "package-delivery-retention-reporting-ready",
  "QualityOutcomeReceiptMatched",
  "RetentionReportingReady",
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
  "export only the customer-safe retention-report receipt"
]) {
  if (!appPackageDeliveryRetentionReport.includes(phrase)) fail(`Avalonia package delivery retention report record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryRetentionReportReceipt",
  "FromReport",
  "WORKSHOP.App.PackageDeliveryRetentionReportingReceipt",
  "package-delivery-retention-report",
  "customer-safe-package-delivery-retention-report-ready",
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
  "QualityOutcomeReceiptMatched",
  "RetentionReportingReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "retention-reporting-control",
  "Request EPOCH timing only"
]) {
  if (!appPackageDeliveryRetentionReportReceipt.includes(phrase)) fail(`Avalonia package delivery retention report receipt missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-retention-reporting.json",
  "ReportPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryRetentionReportStore.includes(phrase)) fail(`Avalonia package delivery retention report store missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-retention-reporting-receipts.json",
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
  if (!appPackageDeliveryRetentionReportReceiptStore.includes(phrase)) fail(`Avalonia package delivery retention report receipt store missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryGrowthActionRecord",
  "FromRetentionReport",
  "WORKSHOP.App.PackageDeliveryGrowthAction",
  "package-delivery-growth-action",
  "package-delivery-growth-action-ready",
  "retention-report-repeat-referral-expansion-action",
  "GrowthActionReady",
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
  "QualityOutcomeReceiptMatched",
  "RetentionReportingReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "export only the customer-safe growth-action receipt"
]) {
  if (!appPackageDeliveryGrowthAction.includes(phrase)) fail(`Avalonia package delivery growth action record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopPackageDeliveryGrowthActionReceipt",
  "FromAction",
  "WORKSHOP.App.PackageDeliveryGrowthActionReceipt",
  "package-delivery-growth-action",
  "customer-safe-package-delivery-growth-action-ready",
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
  "QualityOutcomeReceiptMatched",
  "RetentionReportingReady",
  "GrowthActionReady",
  "RequiresEpochTimingRequest",
  "NativeExecutionReady",
  "growth-action-control",
  "Request EPOCH timing only"
]) {
  if (!appPackageDeliveryGrowthActionReceipt.includes(phrase)) fail(`Avalonia package delivery growth action receipt missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchReadinessRecord",
  "FromNativeCommand",
  "WORKSHOP.App.OfferLaunchReadiness",
  "offer-launch-readiness-ready",
  "LaunchPriorityScore",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "CustomerSafeForReceipt",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "under-19 requests through compatibility review"
]) {
  if (!appOfferLaunchReadiness.includes(phrase)) fail(`Avalonia offer launch readiness record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchReadinessReceipt",
  "FromReadiness",
  "WORKSHOP.App.OfferLaunchReadinessReceipt",
  "offer-launch-readiness",
  "customer-safe-offer-launch-ready",
  "Adult Async Submission Review",
  "JPY 16,000 / 4 submissions",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH is used only for timing requests",
  "Under-19 requests require compatibility review"
]) {
  if (!appOfferLaunchReadinessReceipt.includes(phrase)) fail(`Avalonia offer launch readiness receipt missing ${phrase}`);
}

for (const forbidden of [
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchReadinessReceipt)) fail(`Avalonia offer launch readiness receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchIntakeActionRecord",
  "FromReadinessReceipt",
  "WORKSHOP.App.OfferLaunchIntakeAction",
  "SourceReceiptId",
  "offer-launch-intake-action",
  "offer-launch-intake-queued",
  "offer-launch-intake-fit-review",
  "AppOwnedIntakeState",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "inside WORKSHOP"
]) {
  if (!appOfferLaunchIntakeAction.includes(phrase)) fail(`Avalonia offer launch intake action missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchIntakeReceipt",
  "FromAction",
  "WORKSHOP.App.OfferLaunchIntakeReceipt",
  "offer-launch-intake",
  "customer-safe-offer-launch-intake-queued",
  "customer-safe-offer-launch-intake-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "AppOwnedIntakeState",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH is used only for timing requests",
  "timing-provider-only"
]) {
  if (!appOfferLaunchIntakeReceipt.includes(phrase)) fail(`Avalonia offer launch intake receipt missing ${phrase}`);
}

for (const forbidden of [
  "SourceReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchIntakeReceipt)) fail(`Avalonia offer launch intake receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchActivationRecord",
  "FromIntakeReceipt",
  "WORKSHOP.App.OfferLaunchActivation",
  "IntakeReceiptId",
  "offer-launch-activation",
  "offer-launch-activation-ready",
  "offer-launch-activation-fit-review",
  "AppOwnedActivationState",
  "AppOwnedIntakeState",
  "ActivationReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "inside WORKSHOP"
]) {
  if (!appOfferLaunchActivation.includes(phrase)) fail(`Avalonia offer launch activation record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchActivationReceipt",
  "FromActivation",
  "WORKSHOP.App.OfferLaunchActivationReceipt",
  "offer-launch-activation",
  "customer-safe-offer-launch-activation-ready",
  "customer-safe-offer-launch-activation-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "AppOwnedActivationState",
  "AppOwnedIntakeState",
  "ActivationReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH is used only for timing",
  "timing if a deadline or appointment becomes necessary"
]) {
  if (!appOfferLaunchActivationReceipt.includes(phrase)) fail(`Avalonia offer launch activation receipt missing ${phrase}`);
}

for (const forbidden of [
  "IntakeReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchActivationReceipt)) fail(`Avalonia offer launch activation receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchServiceSetupRecord",
  "FromActivationReceipt",
  "WORKSHOP.App.OfferLaunchServiceSetup",
  "ActivationReceiptId",
  "offer-launch-service-setup",
  "offer-launch-service-setup-ready",
  "offer-launch-service-setup-fit-review",
  "AppOwnedSetupState",
  "AppOwnedActivationState",
  "SetupReady",
  "ActivationReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe setup receipt"
]) {
  if (!appOfferLaunchServiceSetup.includes(phrase)) fail(`Avalonia offer launch service setup record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchServiceSetupReceipt",
  "FromSetup",
  "WORKSHOP.App.OfferLaunchServiceSetupReceipt",
  "offer-launch-service-setup",
  "customer-safe-offer-launch-service-setup-ready",
  "customer-safe-offer-launch-service-setup-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "AppOwnedSetupState",
  "AppOwnedActivationState",
  "SetupReady",
  "ActivationReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "without adding calendar load"
]) {
  if (!appOfferLaunchServiceSetupReceipt.includes(phrase)) fail(`Avalonia offer launch service setup receipt missing ${phrase}`);
}

for (const forbidden of [
  "ActivationReceiptId",
  "SetupId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchServiceSetupReceipt)) fail(`Avalonia offer launch service setup receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryWorkspaceRecord",
  "FromSetupReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryWorkspace",
  "SetupReceiptId",
  "offer-launch-delivery-workspace",
  "offer-launch-delivery-workspace-ready",
  "offer-launch-delivery-workspace-fit-review",
  "AppOwnedWorkspaceState",
  "AppOwnedSetupState",
  "WorkspaceReady",
  "SetupReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe workspace receipt"
]) {
  if (!appOfferLaunchDeliveryWorkspace.includes(phrase)) fail(`Avalonia offer launch delivery workspace record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryWorkspaceReceipt",
  "FromWorkspace",
  "WORKSHOP.App.OfferLaunchDeliveryWorkspaceReceipt",
  "offer-launch-delivery-workspace",
  "customer-safe-offer-launch-delivery-workspace-ready",
  "customer-safe-offer-launch-delivery-workspace-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "AppOwnedWorkspaceState",
  "AppOwnedSetupState",
  "WorkspaceReady",
  "SetupReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "prepared workspace"
]) {
  if (!appOfferLaunchDeliveryWorkspaceReceipt.includes(phrase)) fail(`Avalonia offer launch delivery workspace receipt missing ${phrase}`);
}

for (const forbidden of [
  "SetupReceiptId",
  "WorkspaceId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryWorkspaceReceipt)) fail(`Avalonia offer launch delivery workspace receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryKickoffRecord",
  "FromWorkspaceReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryKickoff",
  "WorkspaceReceiptId",
  "offer-launch-delivery-kickoff",
  "offer-launch-delivery-kickoff-ready",
  "offer-launch-delivery-kickoff-fit-review",
  "AppOwnedKickoffState",
  "AppOwnedWorkspaceState",
  "KickoffReady",
  "WorkspaceReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe kickoff receipt"
]) {
  if (!appOfferLaunchDeliveryKickoff.includes(phrase)) fail(`Avalonia offer launch delivery kickoff record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryKickoffReceipt",
  "FromKickoff",
  "WORKSHOP.App.OfferLaunchDeliveryKickoffReceipt",
  "offer-launch-delivery-kickoff",
  "customer-safe-offer-launch-delivery-kickoff-ready",
  "customer-safe-offer-launch-delivery-kickoff-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "AppOwnedKickoffState",
  "AppOwnedWorkspaceState",
  "KickoffReady",
  "WorkspaceReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "first delivery milestone"
]) {
  if (!appOfferLaunchDeliveryKickoffReceipt.includes(phrase)) fail(`Avalonia offer launch delivery kickoff receipt missing ${phrase}`);
}

for (const forbidden of [
  "WorkspaceReceiptId",
  "KickoffId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryKickoffReceipt)) fail(`Avalonia offer launch delivery kickoff receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryMilestoneRecord",
  "FromKickoffReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryMilestone",
  "KickoffReceiptId",
  "offer-launch-delivery-milestone",
  "offer-launch-delivery-milestone-active",
  "offer-launch-delivery-milestone-fit-review",
  "AppOwnedMilestoneState",
  "AppOwnedKickoffState",
  "MilestoneReady",
  "KickoffReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe milestone receipt"
]) {
  if (!appOfferLaunchDeliveryMilestone.includes(phrase)) fail(`Avalonia offer launch delivery milestone record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryMilestoneReceipt",
  "FromMilestone",
  "WORKSHOP.App.OfferLaunchDeliveryMilestoneReceipt",
  "offer-launch-delivery-milestone",
  "customer-safe-offer-launch-delivery-milestone-active",
  "customer-safe-offer-launch-delivery-milestone-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "AppOwnedMilestoneState",
  "AppOwnedKickoffState",
  "MilestoneReady",
  "KickoffReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "first milestone"
]) {
  if (!appOfferLaunchDeliveryMilestoneReceipt.includes(phrase)) fail(`Avalonia offer launch delivery milestone receipt missing ${phrase}`);
}

for (const forbidden of [
  "KickoffReceiptId",
  "MilestoneId",
  "KickoffId",
  "WorkspaceReceiptId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryMilestoneReceipt)) fail(`Avalonia offer launch delivery milestone receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryOutcomeRecord",
  "FromMilestoneReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryOutcome",
  "MilestoneReceiptId",
  "offer-launch-delivery-outcome",
  "offer-launch-delivery-outcome-ready",
  "offer-launch-delivery-outcome-fit-review",
  "AppOwnedOutcomeState",
  "AppOwnedMilestoneState",
  "OutcomeReady",
  "MilestoneReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe delivery outcome receipt"
]) {
  if (!appOfferLaunchDeliveryOutcome.includes(phrase)) fail(`Avalonia offer launch delivery outcome record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryOutcomeReceipt",
  "FromOutcome",
  "WORKSHOP.App.OfferLaunchDeliveryOutcomeReceipt",
  "offer-launch-delivery-outcome",
  "customer-safe-offer-launch-delivery-outcome-ready",
  "customer-safe-offer-launch-delivery-outcome-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "AppOwnedOutcomeState",
  "AppOwnedMilestoneState",
  "OutcomeReady",
  "MilestoneReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "follow-up or renewal"
]) {
  if (!appOfferLaunchDeliveryOutcomeReceipt.includes(phrase)) fail(`Avalonia offer launch delivery outcome receipt missing ${phrase}`);
}

for (const forbidden of [
  "MilestoneReceiptId",
  "OutcomeId",
  "MilestoneId",
  "KickoffReceiptId",
  "KickoffId",
  "WorkspaceReceiptId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryOutcomeReceipt)) fail(`Avalonia offer launch delivery outcome receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryFollowUpRecord",
  "FromOutcomeReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryFollowUp",
  "OutcomeReceiptId",
  "offer-launch-delivery-follow-up",
  "offer-launch-delivery-follow-up-ready",
  "offer-launch-delivery-follow-up-fit-review",
  "AppOwnedFollowUpState",
  "AppOwnedOutcomeState",
  "FollowUpReady",
  "RenewalReady",
  "ReferralReady",
  "OutcomeReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe delivery follow-up receipt"
]) {
  if (!appOfferLaunchDeliveryFollowUp.includes(phrase)) fail(`Avalonia offer launch delivery follow-up record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryFollowUpReceipt",
  "FromFollowUp",
  "WORKSHOP.App.OfferLaunchDeliveryFollowUpReceipt",
  "offer-launch-delivery-follow-up",
  "customer-safe-offer-launch-delivery-follow-up-ready",
  "customer-safe-offer-launch-delivery-follow-up-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "AppOwnedFollowUpState",
  "AppOwnedOutcomeState",
  "FollowUpReady",
  "RenewalReady",
  "ReferralReady",
  "OutcomeReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "renewal or referral"
]) {
  if (!appOfferLaunchDeliveryFollowUpReceipt.includes(phrase)) fail(`Avalonia offer launch delivery follow-up receipt missing ${phrase}`);
}

for (const forbidden of [
  "OutcomeReceiptId",
  "FollowUpId",
  "OutcomeId",
  "MilestoneReceiptId",
  "MilestoneId",
  "KickoffReceiptId",
  "KickoffId",
  "WorkspaceReceiptId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryFollowUpReceipt)) fail(`Avalonia offer launch delivery follow-up receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryGrowthPlanRecord",
  "FromFollowUpReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryGrowthPlan",
  "FollowUpReceiptId",
  "offer-launch-delivery-growth-plan",
  "offer-launch-delivery-growth-plan-ready",
  "offer-launch-delivery-growth-plan-fit-review",
  "AppOwnedGrowthPlanState",
  "AppOwnedFollowUpState",
  "FollowUpReady",
  "RenewalReady",
  "ReferralReady",
  "RepeatServiceReady",
  "GrowthPlanReady",
  "OutcomeReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe delivery growth-plan receipt"
]) {
  if (!appOfferLaunchDeliveryGrowthPlan.includes(phrase)) fail(`Avalonia offer launch delivery growth-plan record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryGrowthPlanReceipt",
  "FromGrowthPlan",
  "WORKSHOP.App.OfferLaunchDeliveryGrowthPlanReceipt",
  "offer-launch-delivery-growth-plan",
  "customer-safe-offer-launch-delivery-growth-plan-ready",
  "customer-safe-offer-launch-delivery-growth-plan-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "AppOwnedGrowthPlanState",
  "AppOwnedFollowUpState",
  "FollowUpReady",
  "RenewalReady",
  "ReferralReady",
  "RepeatServiceReady",
  "GrowthPlanReady",
  "OutcomeReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "repeat-service, renewal, or referral"
]) {
  if (!appOfferLaunchDeliveryGrowthPlanReceipt.includes(phrase)) fail(`Avalonia offer launch delivery growth-plan receipt missing ${phrase}`);
}

for (const forbidden of [
  "FollowUpReceiptId",
  "GrowthPlanId",
  "FollowUpId",
  "OutcomeReceiptId",
  "OutcomeId",
  "MilestoneReceiptId",
  "MilestoneId",
  "KickoffReceiptId",
  "KickoffId",
  "WorkspaceReceiptId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryGrowthPlanReceipt)) fail(`Avalonia offer launch delivery growth-plan receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord",
  "FromGrowthPlanReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryGrowthPlanAcceptance",
  "GrowthPlanReceiptId",
  "offer-launch-delivery-growth-plan-acceptance",
  "offer-launch-delivery-growth-plan-acceptance-ready",
  "offer-launch-delivery-growth-plan-acceptance-fit-review",
  "AppOwnedAcceptanceState",
  "AppOwnedGrowthPlanState",
  "GrowthPlanReady",
  "RepeatServiceAccepted",
  "RenewalAccepted",
  "ReferralAccepted",
  "AcceptanceReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe delivery growth-plan acceptance receipt"
]) {
  if (!appOfferLaunchDeliveryGrowthPlanAcceptance.includes(phrase)) fail(`Avalonia offer launch delivery growth-plan acceptance record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt",
  "FromAcceptance",
  "WORKSHOP.App.OfferLaunchDeliveryGrowthPlanAcceptanceReceipt",
  "offer-launch-delivery-growth-plan-acceptance",
  "customer-safe-offer-launch-delivery-growth-plan-acceptance-ready",
  "customer-safe-offer-launch-delivery-growth-plan-acceptance-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "AppOwnedAcceptanceState",
  "AppOwnedGrowthPlanState",
  "GrowthPlanReady",
  "RepeatServiceAccepted",
  "RenewalAccepted",
  "ReferralAccepted",
  "AcceptanceReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "accepted next service motion"
]) {
  if (!appOfferLaunchDeliveryGrowthPlanAcceptanceReceipt.includes(phrase)) fail(`Avalonia offer launch delivery growth-plan acceptance receipt missing ${phrase}`);
}

for (const forbidden of [
  "GrowthPlanReceiptId",
  "AcceptanceId",
  "GrowthPlanId",
  "FollowUpReceiptId",
  "FollowUpId",
  "OutcomeReceiptId",
  "OutcomeId",
  "MilestoneReceiptId",
  "MilestoneId",
  "KickoffReceiptId",
  "KickoffId",
  "WorkspaceReceiptId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryGrowthPlanAcceptanceReceipt)) fail(`Avalonia offer launch delivery growth-plan acceptance receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionRequestRecord",
  "FromAcceptanceReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionRequest",
  "AcceptanceReceiptId",
  "offer-launch-delivery-expansion-request",
  "offer-launch-delivery-expansion-request-ready",
  "offer-launch-delivery-expansion-request-fit-review",
  "AppOwnedExpansionRequestState",
  "AppOwnedAcceptanceState",
  "AcceptanceReady",
  "RepeatServiceRequested",
  "RenewalRequested",
  "ReferralRequested",
  "ExpansionRequestReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe delivery expansion-request receipt"
]) {
  if (!appOfferLaunchDeliveryExpansionRequest.includes(phrase)) fail(`Avalonia offer launch delivery expansion request record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionRequestReceipt",
  "FromExpansionRequest",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionRequestReceipt",
  "offer-launch-delivery-expansion-request",
  "customer-safe-offer-launch-delivery-expansion-request-ready",
  "customer-safe-offer-launch-delivery-expansion-request-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "AppOwnedExpansionRequestState",
  "AppOwnedAcceptanceState",
  "AcceptanceReady",
  "RepeatServiceRequested",
  "RenewalRequested",
  "ReferralRequested",
  "ExpansionRequestReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "next service step"
]) {
  if (!appOfferLaunchDeliveryExpansionRequestReceipt.includes(phrase)) fail(`Avalonia offer launch delivery expansion request receipt missing ${phrase}`);
}

for (const forbidden of [
  "AcceptanceReceiptId",
  "ExpansionRequestId",
  "AcceptanceId",
  "GrowthPlanReceiptId",
  "GrowthPlanId",
  "FollowUpReceiptId",
  "FollowUpId",
  "OutcomeReceiptId",
  "OutcomeId",
  "MilestoneReceiptId",
  "MilestoneId",
  "KickoffReceiptId",
  "KickoffId",
  "WorkspaceReceiptId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryExpansionRequestReceipt)) fail(`Avalonia offer launch delivery expansion request receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord",
  "FromExpansionRequestReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionWorkspace",
  "ExpansionWorkspaceId",
  "ExpansionRequestReceiptId",
  "offer-launch-delivery-expansion-workspace",
  "offer-launch-delivery-expansion-workspace-ready",
  "offer-launch-delivery-expansion-workspace-fit-review",
  "ExpansionWorkspacePath",
  "AppOwnedExpansionWorkspaceState",
  "AppOwnedExpansionRequestState",
  "ExpansionRequestReady",
  "RepeatServiceRequested",
  "RenewalRequested",
  "ReferralRequested",
  "ExpansionWorkspaceReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe expansion workspace receipt"
]) {
  if (!appOfferLaunchDeliveryExpansionWorkspace.includes(phrase)) fail(`Avalonia offer launch delivery expansion workspace record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt",
  "FromExpansionWorkspace",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionWorkspaceReceipt",
  "offer-launch-delivery-expansion-workspace",
  "customer-safe-offer-launch-delivery-expansion-workspace-ready",
  "customer-safe-offer-launch-delivery-expansion-workspace-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "ExpansionWorkspacePath",
  "AppOwnedExpansionWorkspaceState",
  "AppOwnedExpansionRequestState",
  "ExpansionRequestReady",
  "RepeatServiceRequested",
  "RenewalRequested",
  "ReferralRequested",
  "ExpansionWorkspaceReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "expansion workspace"
]) {
  if (!appOfferLaunchDeliveryExpansionWorkspaceReceipt.includes(phrase)) fail(`Avalonia offer launch delivery expansion workspace receipt missing ${phrase}`);
}

for (const forbidden of [
  "ExpansionRequestReceiptId",
  "ExpansionWorkspaceId",
  "ExpansionRequestId",
  "AcceptanceReceiptId",
  "AcceptanceId",
  "GrowthPlanReceiptId",
  "GrowthPlanId",
  "FollowUpReceiptId",
  "FollowUpId",
  "OutcomeReceiptId",
  "OutcomeId",
  "MilestoneReceiptId",
  "MilestoneId",
  "KickoffReceiptId",
  "KickoffId",
  "WorkspaceReceiptId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryExpansionWorkspaceReceipt)) fail(`Avalonia offer launch delivery expansion workspace receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionKickoffRecord",
  "FromExpansionWorkspaceReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionKickoff",
  "ExpansionKickoffId",
  "ExpansionWorkspaceReceiptId",
  "offer-launch-delivery-expansion-kickoff",
  "offer-launch-delivery-expansion-kickoff-ready",
  "offer-launch-delivery-expansion-kickoff-fit-review",
  "ExpansionKickoffPath",
  "ExpansionWorkspacePath",
  "AppOwnedExpansionKickoffState",
  "AppOwnedExpansionWorkspaceState",
  "ExpansionKickoffReady",
  "ExpansionWorkspaceReady",
  "RepeatServiceRequested",
  "RenewalRequested",
  "ReferralRequested",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe expansion kickoff receipt"
]) {
  if (!appOfferLaunchDeliveryExpansionKickoff.includes(phrase)) fail(`Avalonia offer launch delivery expansion kickoff record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionKickoffReceipt",
  "FromExpansionKickoff",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionKickoffReceipt",
  "offer-launch-delivery-expansion-kickoff",
  "customer-safe-offer-launch-delivery-expansion-kickoff-ready",
  "customer-safe-offer-launch-delivery-expansion-kickoff-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "ExpansionKickoffPath",
  "AppOwnedExpansionKickoffState",
  "AppOwnedExpansionWorkspaceState",
  "ExpansionKickoffReady",
  "ExpansionWorkspaceReady",
  "RepeatServiceRequested",
  "RenewalRequested",
  "ReferralRequested",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "next service milestone"
]) {
  if (!appOfferLaunchDeliveryExpansionKickoffReceipt.includes(phrase)) fail(`Avalonia offer launch delivery expansion kickoff receipt missing ${phrase}`);
}

for (const forbidden of [
  "ExpansionWorkspaceReceiptId",
  "ExpansionKickoffId",
  "ExpansionWorkspaceId",
  "ExpansionRequestReceiptId",
  "ExpansionRequestId",
  "AcceptanceReceiptId",
  "AcceptanceId",
  "GrowthPlanReceiptId",
  "GrowthPlanId",
  "FollowUpReceiptId",
  "FollowUpId",
  "OutcomeReceiptId",
  "OutcomeId",
  "MilestoneReceiptId",
  "MilestoneId",
  "KickoffReceiptId",
  "KickoffId",
  "WorkspaceReceiptId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryExpansionKickoffReceipt)) fail(`Avalonia offer launch delivery expansion kickoff receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionMilestoneRecord",
  "FromExpansionKickoffReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionMilestone",
  "ExpansionMilestoneId",
  "ExpansionKickoffReceiptId",
  "offer-launch-delivery-expansion-milestone",
  "offer-launch-delivery-expansion-milestone-active",
  "offer-launch-delivery-expansion-milestone-fit-review",
  "ExpansionMilestonePath",
  "ExpansionKickoffPath",
  "AppOwnedExpansionMilestoneState",
  "AppOwnedExpansionKickoffState",
  "ExpansionMilestoneReady",
  "ExpansionKickoffReady",
  "RepeatServiceRequested",
  "RenewalRequested",
  "ReferralRequested",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe expansion milestone receipt"
]) {
  if (!appOfferLaunchDeliveryExpansionMilestone.includes(phrase)) fail(`Avalonia offer launch delivery expansion milestone record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt",
  "FromExpansionMilestone",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionMilestoneReceipt",
  "offer-launch-delivery-expansion-milestone",
  "customer-safe-offer-launch-delivery-expansion-milestone-active",
  "customer-safe-offer-launch-delivery-expansion-milestone-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "ExpansionMilestonePath",
  "AppOwnedExpansionMilestoneState",
  "AppOwnedExpansionKickoffState",
  "ExpansionMilestoneReady",
  "ExpansionKickoffReady",
  "RepeatServiceRequested",
  "RenewalRequested",
  "ReferralRequested",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "next service milestone"
]) {
  if (!appOfferLaunchDeliveryExpansionMilestoneReceipt.includes(phrase)) fail(`Avalonia offer launch delivery expansion milestone receipt missing ${phrase}`);
}

for (const forbidden of [
  "ExpansionKickoffReceiptId",
  "ExpansionMilestoneId",
  "ExpansionKickoffId",
  "ExpansionWorkspaceReceiptId",
  "ExpansionWorkspaceId",
  "ExpansionRequestReceiptId",
  "ExpansionRequestId",
  "AcceptanceReceiptId",
  "AcceptanceId",
  "GrowthPlanReceiptId",
  "GrowthPlanId",
  "FollowUpReceiptId",
  "FollowUpId",
  "OutcomeReceiptId",
  "OutcomeId",
  "MilestoneReceiptId",
  "MilestoneId",
  "KickoffReceiptId",
  "KickoffId",
  "WorkspaceReceiptId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryExpansionMilestoneReceipt)) fail(`Avalonia offer launch delivery expansion milestone receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionOutcomeRecord",
  "FromExpansionMilestoneReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionOutcome",
  "ExpansionOutcomeId",
  "ExpansionMilestoneReceiptId",
  "offer-launch-delivery-expansion-outcome",
  "offer-launch-delivery-expansion-outcome-ready",
  "offer-launch-delivery-expansion-outcome-fit-review",
  "ExpansionOutcomePath",
  "ExpansionMilestonePath",
  "AppOwnedExpansionOutcomeState",
  "AppOwnedExpansionMilestoneState",
  "ExpansionOutcomeReady",
  "ExpansionMilestoneReady",
  "RepeatServiceRequested",
  "RenewalRequested",
  "ReferralRequested",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe expansion outcome receipt"
]) {
  if (!appOfferLaunchDeliveryExpansionOutcome.includes(phrase)) fail(`Avalonia offer launch delivery expansion outcome record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt",
  "FromExpansionOutcome",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionOutcomeReceipt",
  "offer-launch-delivery-expansion-outcome",
  "customer-safe-offer-launch-delivery-expansion-outcome-ready",
  "customer-safe-offer-launch-delivery-expansion-outcome-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "ExpansionOutcomePath",
  "AppOwnedExpansionOutcomeState",
  "AppOwnedExpansionMilestoneState",
  "ExpansionOutcomeReady",
  "ExpansionMilestoneReady",
  "RepeatServiceRequested",
  "RenewalRequested",
  "ReferralRequested",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "follow-up, renewal, or referral"
]) {
  if (!appOfferLaunchDeliveryExpansionOutcomeReceipt.includes(phrase)) fail(`Avalonia offer launch delivery expansion outcome receipt missing ${phrase}`);
}

for (const forbidden of [
  "ExpansionMilestoneReceiptId",
  "ExpansionOutcomeId",
  "ExpansionMilestoneId",
  "ExpansionKickoffReceiptId",
  "ExpansionKickoffId",
  "ExpansionWorkspaceReceiptId",
  "ExpansionWorkspaceId",
  "ExpansionRequestReceiptId",
  "ExpansionRequestId",
  "AcceptanceReceiptId",
  "AcceptanceId",
  "GrowthPlanReceiptId",
  "GrowthPlanId",
  "FollowUpReceiptId",
  "FollowUpId",
  "OutcomeReceiptId",
  "OutcomeId",
  "MilestoneReceiptId",
  "MilestoneId",
  "KickoffReceiptId",
  "KickoffId",
  "WorkspaceReceiptId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryExpansionOutcomeReceipt)) fail(`Avalonia offer launch delivery expansion outcome receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionFollowUpRecord",
  "FromExpansionOutcomeReceipt",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionFollowUp",
  "ExpansionFollowUpId",
  "ExpansionOutcomeReceiptId",
  "offer-launch-delivery-expansion-follow-up",
  "offer-launch-delivery-expansion-follow-up-ready",
  "offer-launch-delivery-expansion-follow-up-fit-review",
  "ExpansionFollowUpPath",
  "ExpansionOutcomePath",
  "AppOwnedExpansionFollowUpState",
  "AppOwnedExpansionOutcomeState",
  "ExpansionFollowUpReady",
  "ExpansionOutcomeReady",
  "RepeatServiceReady",
  "RenewalReady",
  "ReferralReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "JapanCopyMode",
  "ai-neutral",
  "AiForwardCopy",
  "Under19GuardRequired",
  "RequiresEpochTimingRequest",
  "customer-safe expansion follow-up receipt"
]) {
  if (!appOfferLaunchDeliveryExpansionFollowUp.includes(phrase)) fail(`Avalonia offer launch delivery expansion follow-up record missing ${phrase}`);
}

for (const phrase of [
  "WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt",
  "FromExpansionFollowUp",
  "WORKSHOP.App.OfferLaunchDeliveryExpansionFollowUpReceipt",
  "offer-launch-delivery-expansion-follow-up",
  "customer-safe-offer-launch-delivery-expansion-follow-up-ready",
  "customer-safe-offer-launch-delivery-expansion-follow-up-fit-review",
  "CustomerSafeMessage",
  "CustomerVisibleReceiptReady",
  "WebportalExportReady",
  "ExpansionFollowUpPath",
  "AppOwnedExpansionFollowUpState",
  "AppOwnedExpansionOutcomeState",
  "ExpansionFollowUpReady",
  "ExpansionOutcomeReady",
  "RepeatServiceReady",
  "RenewalReady",
  "ReferralReady",
  "CompatibilityGateRequired",
  "ProviderGoLiveRequested",
  "LiveProviderEnabled",
  "EpochTimingProviderOnly",
  "WorkshopCalendarOwnership",
  "MonitorWorkflowExposed",
  "PaymentLiveEnabled",
  "AiForwardCopy",
  "Under19GuardRequired",
  "EPOCH will be used only",
  "repeat-service, renewal, or referral"
]) {
  if (!appOfferLaunchDeliveryExpansionFollowUpReceipt.includes(phrase)) fail(`Avalonia offer launch delivery expansion follow-up receipt missing ${phrase}`);
}

for (const forbidden of [
  "ExpansionOutcomeReceiptId",
  "ExpansionFollowUpId",
  "ExpansionOutcomeId",
  "ExpansionMilestoneReceiptId",
  "ExpansionMilestoneId",
  "ExpansionKickoffReceiptId",
  "ExpansionKickoffId",
  "ExpansionWorkspaceReceiptId",
  "ExpansionWorkspaceId",
  "ExpansionRequestReceiptId",
  "ExpansionRequestId",
  "AcceptanceReceiptId",
  "AcceptanceId",
  "GrowthPlanReceiptId",
  "GrowthPlanId",
  "FollowUpReceiptId",
  "FollowUpId",
  "OutcomeReceiptId",
  "OutcomeId",
  "MilestoneReceiptId",
  "MilestoneId",
  "KickoffReceiptId",
  "KickoffId",
  "WorkspaceReceiptId",
  "WorkspaceId",
  "SetupReceiptId",
  "SetupId",
  "ActivationReceiptId",
  "ActivationId",
  "SourceReceiptId",
  "IntakeReceiptId",
  "LaunchReadinessId",
  "OfferExperimentId",
  "RevenueReceiptId",
  "DeliveryLogId",
  "CashSpeedScore",
  "LaborLeverageScore",
  "ProofReadinessScore",
  "MarketDemandScore",
  "LaunchPriorityScore",
  "OperatorNextAction"
]) {
  const fieldPattern = new RegExp(`(?:string|int|bool)\\s+${forbidden}\\s*,`);
  if (fieldPattern.test(appOfferLaunchDeliveryExpansionFollowUpReceipt)) fail(`Avalonia offer launch delivery expansion follow-up receipt exposes internal field ${forbidden}`);
}

for (const phrase of [
  "package-delivery-growth-actions.json",
  "ActionPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appPackageDeliveryGrowthActionStore.includes(phrase)) fail(`Avalonia package delivery growth action store missing ${phrase}`);
}

for (const phrase of [
  "package-delivery-growth-action-receipts.json",
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
  if (!appPackageDeliveryGrowthActionReceiptStore.includes(phrase)) fail(`Avalonia package delivery growth action receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-readiness.json",
  "ReadinessPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchReadinessStore.includes(phrase)) fail(`Avalonia offer launch readiness store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-readiness-receipts.json",
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
  if (!appOfferLaunchReadinessReceiptStore.includes(phrase)) fail(`Avalonia offer launch readiness receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-intake-actions.json",
  "ActionPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchIntakeActionStore.includes(phrase)) fail(`Avalonia offer launch intake action store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-intake-receipts.json",
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
  if (!appOfferLaunchIntakeReceiptStore.includes(phrase)) fail(`Avalonia offer launch intake receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-activations.json",
  "ActivationPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchActivationStore.includes(phrase)) fail(`Avalonia offer launch activation store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-activation-receipts.json",
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
  if (!appOfferLaunchActivationReceiptStore.includes(phrase)) fail(`Avalonia offer launch activation receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-service-setups.json",
  "SetupPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchServiceSetupStore.includes(phrase)) fail(`Avalonia offer launch service setup store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-service-setup-receipts.json",
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
  if (!appOfferLaunchServiceSetupReceiptStore.includes(phrase)) fail(`Avalonia offer launch service setup receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-workspaces.json",
  "WorkspacePath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryWorkspaceStore.includes(phrase)) fail(`Avalonia offer launch delivery workspace store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-workspace-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryWorkspaceReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery workspace receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-kickoffs.json",
  "KickoffPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryKickoffStore.includes(phrase)) fail(`Avalonia offer launch delivery kickoff store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-kickoff-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryKickoffReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery kickoff receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-milestones.json",
  "MilestonePath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryMilestoneStore.includes(phrase)) fail(`Avalonia offer launch delivery milestone store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-milestone-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryMilestoneReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery milestone receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-outcomes.json",
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
  if (!appOfferLaunchDeliveryOutcomeStore.includes(phrase)) fail(`Avalonia offer launch delivery outcome store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-outcome-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryOutcomeReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery outcome receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-follow-ups.json",
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
  if (!appOfferLaunchDeliveryFollowUpStore.includes(phrase)) fail(`Avalonia offer launch delivery follow-up store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-follow-up-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryFollowUpReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery follow-up receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-growth-plans.json",
  "GrowthPlanPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryGrowthPlanStore.includes(phrase)) fail(`Avalonia offer launch delivery growth-plan store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-growth-plan-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryGrowthPlanReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery growth-plan receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-growth-plan-acceptances.json",
  "AcceptancePath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryGrowthPlanAcceptanceStore.includes(phrase)) fail(`Avalonia offer launch delivery growth-plan acceptance store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-growth-plan-acceptance-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryGrowthPlanAcceptanceReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery growth-plan acceptance receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-requests.json",
  "ExpansionRequestPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionRequestStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion request store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-request-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionRequestReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion request receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-workspaces.json",
  "ExpansionWorkspacePath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionWorkspaceStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion workspace store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-workspace-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionWorkspaceReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion workspace receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-kickoffs.json",
  "ExpansionKickoffPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionKickoffStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion kickoff store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-kickoff-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionKickoffReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion kickoff receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-milestones.json",
  "ExpansionMilestonePath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionMilestoneStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion milestone store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-milestone-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionMilestoneReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion milestone receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-outcomes.json",
  "ExpansionOutcomePath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionOutcomeStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion outcome store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-outcome-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionOutcomeReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion outcome receipt store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-follow-ups.json",
  "ExpansionFollowUpPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionFollowUpStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion follow-up store missing ${phrase}`);
}

for (const phrase of [
  "offer-launch-delivery-expansion-follow-up-receipts.json",
  "ReceiptPath",
  "Append",
  "TryAppend",
  "ArchiveInvalidRecords",
  "StateDirectoryEnvironmentVariable",
  "Environment.SpecialFolder.LocalApplicationData",
  "KHYRON",
  "WORKSHOP",
  "App"
]) {
  if (!appOfferLaunchDeliveryExpansionFollowUpReceiptStore.includes(phrase)) fail(`Avalonia offer launch delivery expansion follow-up receipt store missing ${phrase}`);
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
  "WorkshopOfferLaunchReadinessStore.Append",
  "WorkshopOfferLaunchReadinessStore.Load",
  "WorkshopOfferLaunchReadinessReceiptStore.Append",
  "WorkshopOfferLaunchReadinessReceiptStore.Load",
  "WorkshopOfferLaunchIntakeActionStore.Append",
  "WorkshopOfferLaunchIntakeActionStore.Load",
  "WorkshopOfferLaunchIntakeReceiptStore.Append",
  "WorkshopOfferLaunchIntakeReceiptStore.Load",
  "WorkshopOfferLaunchActivationStore.Append",
  "WorkshopOfferLaunchActivationStore.Load",
  "WorkshopOfferLaunchActivationReceiptStore.Append",
  "WorkshopOfferLaunchActivationReceiptStore.Load",
  "WorkshopOfferLaunchServiceSetupStore.Append",
  "WorkshopOfferLaunchServiceSetupStore.Load",
  "WorkshopOfferLaunchServiceSetupReceiptStore.Append",
  "WorkshopOfferLaunchServiceSetupReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryWorkspaceStore.Append",
  "WorkshopOfferLaunchDeliveryWorkspaceStore.Load",
  "WorkshopOfferLaunchDeliveryWorkspaceReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryWorkspaceReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryKickoffStore.Append",
  "WorkshopOfferLaunchDeliveryKickoffStore.Load",
  "WorkshopOfferLaunchDeliveryKickoffReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryKickoffReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryMilestoneStore.Append",
  "WorkshopOfferLaunchDeliveryMilestoneStore.Load",
  "WorkshopOfferLaunchDeliveryMilestoneReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryMilestoneReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryOutcomeStore.Append",
  "WorkshopOfferLaunchDeliveryOutcomeStore.Load",
  "WorkshopOfferLaunchDeliveryOutcomeReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryOutcomeReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryFollowUpStore.Append",
  "WorkshopOfferLaunchDeliveryFollowUpStore.Load",
  "WorkshopOfferLaunchDeliveryFollowUpReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryFollowUpReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryGrowthPlanStore.Append",
  "WorkshopOfferLaunchDeliveryGrowthPlanStore.Load",
  "WorkshopOfferLaunchDeliveryGrowthPlanReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryGrowthPlanReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceStore.Append",
  "WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceStore.Load",
  "WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionRequestStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionRequestStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionRequestReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionRequestReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionWorkspaceStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionWorkspaceStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionWorkspaceReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionWorkspaceReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionKickoffStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionKickoffStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionKickoffReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionKickoffReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionMilestoneStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionMilestoneStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionMilestoneReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionMilestoneReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionOutcomeStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionOutcomeStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionOutcomeReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionOutcomeReceiptStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionFollowUpStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionFollowUpStore.Load",
  "WorkshopOfferLaunchDeliveryExpansionFollowUpReceiptStore.Append",
  "WorkshopOfferLaunchDeliveryExpansionFollowUpReceiptStore.Load",
  "offerLaunchReadinessRecords.Count != 1",
  "offerLaunchReadinessRecords[0].Status != \"offer-launch-readiness-ready\"",
  "offerLaunchReadinessRecords[0].LaunchPriorityScore < 80",
  "offerLaunchReadinessRecords[0].CustomerVisible",
  "offerLaunchReadinessRecords[0].CustomerSafeForReceipt",
  "offerLaunchReadinessRecords[0].WebportalExportReady",
  "offerLaunchReadinessRecords[0].EpochTimingProviderOnly",
  "offerLaunchReadinessRecords[0].WorkshopCalendarOwnership",
  "offerLaunchReadinessRecords[0].MonitorWorkflowExposed",
  "offerLaunchReadinessRecords[0].PaymentLiveEnabled",
  "offerLaunchReadinessRecords[0].AiForwardCopy",
  "File.Exists(WorkshopOfferLaunchReadinessStore.ReadinessPath)",
  "offerLaunchReadinessReceipts.Count != 1",
  "offerLaunchReadinessReceipts[0].Kind != \"offer-launch-readiness\"",
  "offerLaunchReadinessReceipts[0].Status != \"customer-safe-offer-launch-ready\"",
  "offerLaunchReadinessReceipts[0].CustomerSafe",
  "offerLaunchReadinessReceipts[0].CustomerVisibleReceiptReady",
  "offerLaunchReadinessReceipts[0].WebportalExportReady",
  "offerLaunchReadinessReceipts[0].EpochTimingProviderOnly",
  "offerLaunchReadinessReceipts[0].WorkshopCalendarOwnership",
  "offerLaunchReadinessReceipts[0].MonitorWorkflowExposed",
  "offerLaunchReadinessReceipts[0].PaymentLiveEnabled",
  "offerLaunchReadinessReceipts[0].AiForwardCopy",
  "File.Exists(WorkshopOfferLaunchReadinessReceiptStore.ReceiptPath)",
  "offerLaunchIntakeActions.Count != 1",
  "offerLaunchIntakeActions[0].Kind != \"offer-launch-intake-action\"",
  "offerLaunchIntakeActions[0].Status != \"offer-launch-intake-queued\"",
  "offerLaunchIntakeActions[0].CustomerVisible",
  "offerLaunchIntakeActions[0].CustomerSafeForReceipt",
  "offerLaunchIntakeActions[0].WebportalExportReady",
  "offerLaunchIntakeActions[0].AppOwnedIntakeState",
  "offerLaunchIntakeActions[0].CompatibilityGateRequired",
  "offerLaunchIntakeActions[0].EpochTimingProviderOnly",
  "offerLaunchIntakeActions[0].WorkshopCalendarOwnership",
  "offerLaunchIntakeActions[0].MonitorWorkflowExposed",
  "offerLaunchIntakeActions[0].PaymentLiveEnabled",
  "offerLaunchIntakeActions[0].ProviderGoLiveRequested",
  "offerLaunchIntakeActions[0].LiveProviderEnabled",
  "File.Exists(WorkshopOfferLaunchIntakeActionStore.ActionPath)",
  "offerLaunchIntakeReceipts.Count != 1",
  "offerLaunchIntakeReceipts[0].Kind != \"offer-launch-intake\"",
  "offerLaunchIntakeReceipts[0].Status != \"customer-safe-offer-launch-intake-queued\"",
  "offerLaunchIntakeReceipts[0].CustomerVisible",
  "offerLaunchIntakeReceipts[0].CustomerSafe",
  "offerLaunchIntakeReceipts[0].CustomerVisibleReceiptReady",
  "offerLaunchIntakeReceipts[0].WebportalExportReady",
  "offerLaunchIntakeReceipts[0].AppOwnedIntakeState",
  "offerLaunchIntakeReceipts[0].CompatibilityGateRequired",
  "offerLaunchIntakeReceipts[0].EpochTimingProviderOnly",
  "offerLaunchIntakeReceipts[0].WorkshopCalendarOwnership",
  "offerLaunchIntakeReceipts[0].MonitorWorkflowExposed",
  "offerLaunchIntakeReceipts[0].PaymentLiveEnabled",
  "offerLaunchIntakeReceipts[0].ProviderGoLiveRequested",
  "offerLaunchIntakeReceipts[0].LiveProviderEnabled",
  "File.Exists(WorkshopOfferLaunchIntakeReceiptStore.ReceiptPath)",
  "offerLaunchActivations.Count != 1",
  "offerLaunchActivations[0].ActivationId != offerLaunchActivation.ActivationId",
  "offerLaunchActivations[0].IntakeReceiptId != offerLaunchIntakeReceipt.ReceiptId",
  "offerLaunchActivations[0].Kind != \"offer-launch-activation\"",
  "offerLaunchActivations[0].Status != \"offer-launch-activation-ready\"",
  "offerLaunchActivations[0].CustomerVisible",
  "offerLaunchActivations[0].CustomerSafeForReceipt",
  "offerLaunchActivations[0].WebportalExportReady",
  "offerLaunchActivations[0].AppOwnedActivationState",
  "offerLaunchActivations[0].AppOwnedIntakeState",
  "offerLaunchActivations[0].ActivationReady",
  "offerLaunchActivations[0].CompatibilityGateRequired",
  "offerLaunchActivations[0].EpochTimingProviderOnly",
  "offerLaunchActivations[0].WorkshopCalendarOwnership",
  "offerLaunchActivations[0].MonitorWorkflowExposed",
  "offerLaunchActivations[0].PaymentLiveEnabled",
  "offerLaunchActivations[0].ProviderGoLiveRequested",
  "offerLaunchActivations[0].LiveProviderEnabled",
  "offerLaunchActivations[0].AiForwardCopy",
  "File.Exists(WorkshopOfferLaunchActivationStore.ActivationPath)",
  "offerLaunchActivationReceipts.Count != 1",
  "offerLaunchActivationReceipts[0].Kind != \"offer-launch-activation\"",
  "offerLaunchActivationReceipts[0].Status != \"customer-safe-offer-launch-activation-ready\"",
  "offerLaunchActivationReceipts[0].CustomerVisible",
  "offerLaunchActivationReceipts[0].CustomerSafe",
  "offerLaunchActivationReceipts[0].CustomerVisibleReceiptReady",
  "offerLaunchActivationReceipts[0].WebportalExportReady",
  "offerLaunchActivationReceipts[0].AppOwnedActivationState",
  "offerLaunchActivationReceipts[0].AppOwnedIntakeState",
  "offerLaunchActivationReceipts[0].ActivationReady",
  "offerLaunchActivationReceipts[0].CompatibilityGateRequired",
  "offerLaunchActivationReceipts[0].EpochTimingProviderOnly",
  "offerLaunchActivationReceipts[0].WorkshopCalendarOwnership",
  "offerLaunchActivationReceipts[0].MonitorWorkflowExposed",
  "offerLaunchActivationReceipts[0].PaymentLiveEnabled",
  "offerLaunchActivationReceipts[0].ProviderGoLiveRequested",
  "offerLaunchActivationReceipts[0].LiveProviderEnabled",
  "offerLaunchActivationReceipts[0].AiForwardCopy",
  "File.Exists(WorkshopOfferLaunchActivationReceiptStore.ReceiptPath)",
  "offerLaunchServiceSetups.Count != 1",
  "offerLaunchServiceSetups[0].SetupId != offerLaunchServiceSetup.SetupId",
  "offerLaunchServiceSetups[0].ActivationReceiptId != offerLaunchActivationReceipt.ReceiptId",
  "offerLaunchServiceSetups[0].Kind != \"offer-launch-service-setup\"",
  "offerLaunchServiceSetups[0].Status != \"offer-launch-service-setup-ready\"",
  "offerLaunchServiceSetups[0].CustomerVisible",
  "offerLaunchServiceSetups[0].CustomerSafeForReceipt",
  "offerLaunchServiceSetups[0].WebportalExportReady",
  "offerLaunchServiceSetups[0].AppOwnedSetupState",
  "offerLaunchServiceSetups[0].AppOwnedActivationState",
  "offerLaunchServiceSetups[0].SetupReady",
  "offerLaunchServiceSetups[0].ActivationReady",
  "offerLaunchServiceSetups[0].CompatibilityGateRequired",
  "offerLaunchServiceSetups[0].EpochTimingProviderOnly",
  "offerLaunchServiceSetups[0].WorkshopCalendarOwnership",
  "offerLaunchServiceSetups[0].MonitorWorkflowExposed",
  "offerLaunchServiceSetups[0].PaymentLiveEnabled",
  "offerLaunchServiceSetups[0].ProviderGoLiveRequested",
  "offerLaunchServiceSetups[0].LiveProviderEnabled",
  "offerLaunchServiceSetups[0].AiForwardCopy",
  "File.Exists(WorkshopOfferLaunchServiceSetupStore.SetupPath)",
  "offerLaunchServiceSetupReceipts.Count != 1",
  "offerLaunchServiceSetupReceipts[0].Kind != \"offer-launch-service-setup\"",
  "offerLaunchServiceSetupReceipts[0].Status != \"customer-safe-offer-launch-service-setup-ready\"",
  "offerLaunchServiceSetupReceipts[0].CustomerVisible",
  "offerLaunchServiceSetupReceipts[0].CustomerSafe",
  "offerLaunchServiceSetupReceipts[0].CustomerVisibleReceiptReady",
  "offerLaunchServiceSetupReceipts[0].WebportalExportReady",
  "offerLaunchServiceSetupReceipts[0].AppOwnedSetupState",
  "offerLaunchServiceSetupReceipts[0].AppOwnedActivationState",
  "offerLaunchServiceSetupReceipts[0].SetupReady",
  "offerLaunchServiceSetupReceipts[0].ActivationReady",
  "offerLaunchServiceSetupReceipts[0].CompatibilityGateRequired",
  "offerLaunchServiceSetupReceipts[0].EpochTimingProviderOnly",
  "offerLaunchServiceSetupReceipts[0].WorkshopCalendarOwnership",
  "offerLaunchServiceSetupReceipts[0].MonitorWorkflowExposed",
  "offerLaunchServiceSetupReceipts[0].PaymentLiveEnabled",
  "offerLaunchServiceSetupReceipts[0].ProviderGoLiveRequested",
  "offerLaunchServiceSetupReceipts[0].LiveProviderEnabled",
  "offerLaunchServiceSetupReceipts[0].AiForwardCopy",
  "File.Exists(WorkshopOfferLaunchServiceSetupReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryWorkspaces.Count != 1",
  "offerLaunchDeliveryWorkspaces[0].WorkspaceId != offerLaunchDeliveryWorkspace.WorkspaceId",
  "offerLaunchDeliveryWorkspaces[0].SetupReceiptId != offerLaunchServiceSetupReceipt.ReceiptId",
  "offerLaunchDeliveryWorkspaces[0].Kind != \"offer-launch-delivery-workspace\"",
  "offerLaunchDeliveryWorkspaces[0].Status != \"offer-launch-delivery-workspace-ready\"",
  "offerLaunchDeliveryWorkspaces[0].CustomerVisible",
  "offerLaunchDeliveryWorkspaces[0].CustomerSafeForReceipt",
  "offerLaunchDeliveryWorkspaces[0].WebportalExportReady",
  "offerLaunchDeliveryWorkspaces[0].AppOwnedWorkspaceState",
  "offerLaunchDeliveryWorkspaces[0].AppOwnedSetupState",
  "offerLaunchDeliveryWorkspaces[0].WorkspaceReady",
  "offerLaunchDeliveryWorkspaces[0].SetupReady",
  "offerLaunchDeliveryWorkspaces[0].CompatibilityGateRequired",
  "offerLaunchDeliveryWorkspaces[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryWorkspaces[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryWorkspaces[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryWorkspaces[0].PaymentLiveEnabled",
  "offerLaunchDeliveryWorkspaces[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryWorkspaces[0].LiveProviderEnabled",
  "offerLaunchDeliveryWorkspaces[0].AiForwardCopy",
  "File.Exists(WorkshopOfferLaunchDeliveryWorkspaceStore.WorkspacePath)",
  "offerLaunchDeliveryWorkspaceReceipts.Count != 1",
  "offerLaunchDeliveryWorkspaceReceipts[0].Kind != \"offer-launch-delivery-workspace\"",
  "offerLaunchDeliveryWorkspaceReceipts[0].Status != \"customer-safe-offer-launch-delivery-workspace-ready\"",
  "offerLaunchDeliveryWorkspaceReceipts[0].CustomerVisible",
  "offerLaunchDeliveryWorkspaceReceipts[0].CustomerSafe",
  "offerLaunchDeliveryWorkspaceReceipts[0].CustomerVisibleReceiptReady",
  "offerLaunchDeliveryWorkspaceReceipts[0].WebportalExportReady",
  "offerLaunchDeliveryWorkspaceReceipts[0].AppOwnedWorkspaceState",
  "offerLaunchDeliveryWorkspaceReceipts[0].AppOwnedSetupState",
  "offerLaunchDeliveryWorkspaceReceipts[0].WorkspaceReady",
  "offerLaunchDeliveryWorkspaceReceipts[0].SetupReady",
  "offerLaunchDeliveryWorkspaceReceipts[0].CompatibilityGateRequired",
  "offerLaunchDeliveryWorkspaceReceipts[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryWorkspaceReceipts[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryWorkspaceReceipts[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryWorkspaceReceipts[0].PaymentLiveEnabled",
  "offerLaunchDeliveryWorkspaceReceipts[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryWorkspaceReceipts[0].LiveProviderEnabled",
  "offerLaunchDeliveryWorkspaceReceipts[0].AiForwardCopy",
  "File.Exists(WorkshopOfferLaunchDeliveryWorkspaceReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryKickoffs.Count != 1",
  "offerLaunchDeliveryKickoffs[0].KickoffId != offerLaunchDeliveryKickoff.KickoffId",
  "offerLaunchDeliveryKickoffs[0].WorkspaceReceiptId != offerLaunchDeliveryWorkspaceReceipt.ReceiptId",
  "offerLaunchDeliveryKickoffs[0].Kind != \"offer-launch-delivery-kickoff\"",
  "offerLaunchDeliveryKickoffs[0].Status != \"offer-launch-delivery-kickoff-ready\"",
  "offerLaunchDeliveryKickoffs[0].CustomerVisible",
  "offerLaunchDeliveryKickoffs[0].CustomerSafeForReceipt",
  "offerLaunchDeliveryKickoffs[0].WebportalExportReady",
  "offerLaunchDeliveryKickoffs[0].AppOwnedKickoffState",
  "offerLaunchDeliveryKickoffs[0].AppOwnedWorkspaceState",
  "offerLaunchDeliveryKickoffs[0].KickoffReady",
  "offerLaunchDeliveryKickoffs[0].WorkspaceReady",
  "offerLaunchDeliveryKickoffs[0].CompatibilityGateRequired",
  "offerLaunchDeliveryKickoffs[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryKickoffs[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryKickoffs[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryKickoffs[0].PaymentLiveEnabled",
  "offerLaunchDeliveryKickoffs[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryKickoffs[0].LiveProviderEnabled",
  "offerLaunchDeliveryKickoffs[0].AiForwardCopy",
  "File.Exists(WorkshopOfferLaunchDeliveryKickoffStore.KickoffPath)",
  "offerLaunchDeliveryKickoffReceipts.Count != 1",
  "offerLaunchDeliveryKickoffReceipts[0].Kind != \"offer-launch-delivery-kickoff\"",
  "offerLaunchDeliveryKickoffReceipts[0].Status != \"customer-safe-offer-launch-delivery-kickoff-ready\"",
  "offerLaunchDeliveryKickoffReceipts[0].CustomerVisible",
  "offerLaunchDeliveryKickoffReceipts[0].CustomerSafe",
  "offerLaunchDeliveryKickoffReceipts[0].CustomerVisibleReceiptReady",
  "offerLaunchDeliveryKickoffReceipts[0].WebportalExportReady",
  "offerLaunchDeliveryKickoffReceipts[0].AppOwnedKickoffState",
  "offerLaunchDeliveryKickoffReceipts[0].AppOwnedWorkspaceState",
  "offerLaunchDeliveryKickoffReceipts[0].KickoffReady",
  "offerLaunchDeliveryKickoffReceipts[0].WorkspaceReady",
  "offerLaunchDeliveryKickoffReceipts[0].CompatibilityGateRequired",
  "offerLaunchDeliveryKickoffReceipts[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryKickoffReceipts[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryKickoffReceipts[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryKickoffReceipts[0].PaymentLiveEnabled",
  "offerLaunchDeliveryKickoffReceipts[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryKickoffReceipts[0].LiveProviderEnabled",
  "offerLaunchDeliveryKickoffReceipts[0].AiForwardCopy",
  "offerLaunchDeliveryKickoffReceipts[0].RequiresEpochTimingRequest",
  "first delivery milestone",
  "File.Exists(WorkshopOfferLaunchDeliveryKickoffReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryMilestones.Count != 1",
  "offerLaunchDeliveryMilestones[0].MilestoneId != offerLaunchDeliveryMilestone.MilestoneId",
  "offerLaunchDeliveryMilestones[0].KickoffReceiptId != offerLaunchDeliveryKickoffReceipt.ReceiptId",
  "offerLaunchDeliveryMilestones[0].Kind != \"offer-launch-delivery-milestone\"",
  "offerLaunchDeliveryMilestones[0].Status != \"offer-launch-delivery-milestone-active\"",
  "offerLaunchDeliveryMilestones[0].CustomerVisible",
  "offerLaunchDeliveryMilestones[0].CustomerSafeForReceipt",
  "offerLaunchDeliveryMilestones[0].WebportalExportReady",
  "offerLaunchDeliveryMilestones[0].AppOwnedMilestoneState",
  "offerLaunchDeliveryMilestones[0].AppOwnedKickoffState",
  "offerLaunchDeliveryMilestones[0].MilestoneReady",
  "offerLaunchDeliveryMilestones[0].KickoffReady",
  "offerLaunchDeliveryMilestones[0].CompatibilityGateRequired",
  "offerLaunchDeliveryMilestones[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryMilestones[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryMilestones[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryMilestones[0].PaymentLiveEnabled",
  "offerLaunchDeliveryMilestones[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryMilestones[0].LiveProviderEnabled",
  "offerLaunchDeliveryMilestones[0].AiForwardCopy",
  "customer-safe milestone receipt",
  "File.Exists(WorkshopOfferLaunchDeliveryMilestoneStore.MilestonePath)",
  "offerLaunchDeliveryMilestoneReceipts.Count != 1",
  "offerLaunchDeliveryMilestoneReceipts[0].Kind != \"offer-launch-delivery-milestone\"",
  "offerLaunchDeliveryMilestoneReceipts[0].Status != \"customer-safe-offer-launch-delivery-milestone-active\"",
  "offerLaunchDeliveryMilestoneReceipts[0].CustomerVisible",
  "offerLaunchDeliveryMilestoneReceipts[0].CustomerSafe",
  "offerLaunchDeliveryMilestoneReceipts[0].CustomerVisibleReceiptReady",
  "offerLaunchDeliveryMilestoneReceipts[0].WebportalExportReady",
  "offerLaunchDeliveryMilestoneReceipts[0].AppOwnedMilestoneState",
  "offerLaunchDeliveryMilestoneReceipts[0].AppOwnedKickoffState",
  "offerLaunchDeliveryMilestoneReceipts[0].MilestoneReady",
  "offerLaunchDeliveryMilestoneReceipts[0].KickoffReady",
  "offerLaunchDeliveryMilestoneReceipts[0].CompatibilityGateRequired",
  "offerLaunchDeliveryMilestoneReceipts[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryMilestoneReceipts[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryMilestoneReceipts[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryMilestoneReceipts[0].PaymentLiveEnabled",
  "offerLaunchDeliveryMilestoneReceipts[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryMilestoneReceipts[0].LiveProviderEnabled",
  "offerLaunchDeliveryMilestoneReceipts[0].AiForwardCopy",
  "offerLaunchDeliveryMilestoneReceipts[0].RequiresEpochTimingRequest",
  "first milestone",
  "File.Exists(WorkshopOfferLaunchDeliveryMilestoneReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryOutcomes.Count != 1",
  "offerLaunchDeliveryOutcomes[0].OutcomeId != offerLaunchDeliveryOutcome.OutcomeId",
  "offerLaunchDeliveryOutcomes[0].MilestoneReceiptId != offerLaunchDeliveryMilestoneReceipt.ReceiptId",
  "offerLaunchDeliveryOutcomes[0].Kind != \"offer-launch-delivery-outcome\"",
  "offerLaunchDeliveryOutcomes[0].Status != \"offer-launch-delivery-outcome-ready\"",
  "offerLaunchDeliveryOutcomes[0].CustomerVisible",
  "offerLaunchDeliveryOutcomes[0].CustomerSafeForReceipt",
  "offerLaunchDeliveryOutcomes[0].WebportalExportReady",
  "offerLaunchDeliveryOutcomes[0].AppOwnedOutcomeState",
  "offerLaunchDeliveryOutcomes[0].AppOwnedMilestoneState",
  "offerLaunchDeliveryOutcomes[0].OutcomeReady",
  "offerLaunchDeliveryOutcomes[0].MilestoneReady",
  "offerLaunchDeliveryOutcomes[0].CompatibilityGateRequired",
  "offerLaunchDeliveryOutcomes[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryOutcomes[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryOutcomes[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryOutcomes[0].PaymentLiveEnabled",
  "offerLaunchDeliveryOutcomes[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryOutcomes[0].LiveProviderEnabled",
  "offerLaunchDeliveryOutcomes[0].AiForwardCopy",
  "customer-safe delivery outcome receipt",
  "File.Exists(WorkshopOfferLaunchDeliveryOutcomeStore.OutcomePath)",
  "offerLaunchDeliveryOutcomeReceipts.Count != 1",
  "offerLaunchDeliveryOutcomeReceipts[0].Kind != \"offer-launch-delivery-outcome\"",
  "offerLaunchDeliveryOutcomeReceipts[0].Status != \"customer-safe-offer-launch-delivery-outcome-ready\"",
  "offerLaunchDeliveryOutcomeReceipts[0].CustomerVisible",
  "offerLaunchDeliveryOutcomeReceipts[0].CustomerSafe",
  "offerLaunchDeliveryOutcomeReceipts[0].CustomerVisibleReceiptReady",
  "offerLaunchDeliveryOutcomeReceipts[0].WebportalExportReady",
  "offerLaunchDeliveryOutcomeReceipts[0].AppOwnedOutcomeState",
  "offerLaunchDeliveryOutcomeReceipts[0].AppOwnedMilestoneState",
  "offerLaunchDeliveryOutcomeReceipts[0].OutcomeReady",
  "offerLaunchDeliveryOutcomeReceipts[0].MilestoneReady",
  "offerLaunchDeliveryOutcomeReceipts[0].CompatibilityGateRequired",
  "offerLaunchDeliveryOutcomeReceipts[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryOutcomeReceipts[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryOutcomeReceipts[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryOutcomeReceipts[0].PaymentLiveEnabled",
  "offerLaunchDeliveryOutcomeReceipts[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryOutcomeReceipts[0].LiveProviderEnabled",
  "offerLaunchDeliveryOutcomeReceipts[0].AiForwardCopy",
  "offerLaunchDeliveryOutcomeReceipts[0].RequiresEpochTimingRequest",
  "follow-up or renewal",
  "File.Exists(WorkshopOfferLaunchDeliveryOutcomeReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryFollowUps.Count != 1",
  "offerLaunchDeliveryFollowUps[0].FollowUpId != offerLaunchDeliveryFollowUp.FollowUpId",
  "offerLaunchDeliveryFollowUps[0].OutcomeReceiptId != offerLaunchDeliveryOutcomeReceipt.ReceiptId",
  "offerLaunchDeliveryFollowUps[0].Kind != \"offer-launch-delivery-follow-up\"",
  "offerLaunchDeliveryFollowUps[0].Status != \"offer-launch-delivery-follow-up-ready\"",
  "offerLaunchDeliveryFollowUps[0].CustomerVisible",
  "offerLaunchDeliveryFollowUps[0].CustomerSafeForReceipt",
  "offerLaunchDeliveryFollowUps[0].WebportalExportReady",
  "offerLaunchDeliveryFollowUps[0].AppOwnedFollowUpState",
  "offerLaunchDeliveryFollowUps[0].AppOwnedOutcomeState",
  "offerLaunchDeliveryFollowUps[0].FollowUpReady",
  "offerLaunchDeliveryFollowUps[0].RenewalReady",
  "offerLaunchDeliveryFollowUps[0].ReferralReady",
  "offerLaunchDeliveryFollowUps[0].OutcomeReady",
  "offerLaunchDeliveryFollowUps[0].CompatibilityGateRequired",
  "offerLaunchDeliveryFollowUps[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryFollowUps[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryFollowUps[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryFollowUps[0].PaymentLiveEnabled",
  "offerLaunchDeliveryFollowUps[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryFollowUps[0].LiveProviderEnabled",
  "offerLaunchDeliveryFollowUps[0].AiForwardCopy",
  "customer-safe delivery follow-up receipt",
  "File.Exists(WorkshopOfferLaunchDeliveryFollowUpStore.FollowUpPath)",
  "offerLaunchDeliveryFollowUpReceipts.Count != 1",
  "offerLaunchDeliveryFollowUpReceipts[0].Kind != \"offer-launch-delivery-follow-up\"",
  "offerLaunchDeliveryFollowUpReceipts[0].Status != \"customer-safe-offer-launch-delivery-follow-up-ready\"",
  "offerLaunchDeliveryFollowUpReceipts[0].CustomerVisible",
  "offerLaunchDeliveryFollowUpReceipts[0].CustomerSafe",
  "offerLaunchDeliveryFollowUpReceipts[0].CustomerVisibleReceiptReady",
  "offerLaunchDeliveryFollowUpReceipts[0].WebportalExportReady",
  "offerLaunchDeliveryFollowUpReceipts[0].AppOwnedFollowUpState",
  "offerLaunchDeliveryFollowUpReceipts[0].AppOwnedOutcomeState",
  "offerLaunchDeliveryFollowUpReceipts[0].FollowUpReady",
  "offerLaunchDeliveryFollowUpReceipts[0].RenewalReady",
  "offerLaunchDeliveryFollowUpReceipts[0].ReferralReady",
  "offerLaunchDeliveryFollowUpReceipts[0].OutcomeReady",
  "offerLaunchDeliveryFollowUpReceipts[0].CompatibilityGateRequired",
  "offerLaunchDeliveryFollowUpReceipts[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryFollowUpReceipts[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryFollowUpReceipts[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryFollowUpReceipts[0].PaymentLiveEnabled",
  "offerLaunchDeliveryFollowUpReceipts[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryFollowUpReceipts[0].LiveProviderEnabled",
  "offerLaunchDeliveryFollowUpReceipts[0].AiForwardCopy",
  "offerLaunchDeliveryFollowUpReceipts[0].RequiresEpochTimingRequest",
  "renewal or referral",
  "File.Exists(WorkshopOfferLaunchDeliveryFollowUpReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryGrowthPlans.Count != 1",
  "offerLaunchDeliveryGrowthPlans[0].GrowthPlanId != offerLaunchDeliveryGrowthPlan.GrowthPlanId",
  "offerLaunchDeliveryGrowthPlans[0].FollowUpReceiptId != offerLaunchDeliveryFollowUpReceipt.ReceiptId",
  "offerLaunchDeliveryGrowthPlans[0].Kind != \"offer-launch-delivery-growth-plan\"",
  "offerLaunchDeliveryGrowthPlans[0].Status != \"offer-launch-delivery-growth-plan-ready\"",
  "offerLaunchDeliveryGrowthPlans[0].CustomerVisible",
  "offerLaunchDeliveryGrowthPlans[0].CustomerSafeForReceipt",
  "offerLaunchDeliveryGrowthPlans[0].WebportalExportReady",
  "offerLaunchDeliveryGrowthPlans[0].AppOwnedGrowthPlanState",
  "offerLaunchDeliveryGrowthPlans[0].AppOwnedFollowUpState",
  "offerLaunchDeliveryGrowthPlans[0].FollowUpReady",
  "offerLaunchDeliveryGrowthPlans[0].RenewalReady",
  "offerLaunchDeliveryGrowthPlans[0].ReferralReady",
  "offerLaunchDeliveryGrowthPlans[0].RepeatServiceReady",
  "offerLaunchDeliveryGrowthPlans[0].GrowthPlanReady",
  "offerLaunchDeliveryGrowthPlans[0].OutcomeReady",
  "offerLaunchDeliveryGrowthPlans[0].CompatibilityGateRequired",
  "offerLaunchDeliveryGrowthPlans[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryGrowthPlans[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryGrowthPlans[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryGrowthPlans[0].PaymentLiveEnabled",
  "offerLaunchDeliveryGrowthPlans[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryGrowthPlans[0].LiveProviderEnabled",
  "offerLaunchDeliveryGrowthPlans[0].AiForwardCopy",
  "customer-safe delivery growth-plan receipt",
  "File.Exists(WorkshopOfferLaunchDeliveryGrowthPlanStore.GrowthPlanPath)",
  "offerLaunchDeliveryGrowthPlanReceipts.Count != 1",
  "offerLaunchDeliveryGrowthPlanReceipts[0].Kind != \"offer-launch-delivery-growth-plan\"",
  "offerLaunchDeliveryGrowthPlanReceipts[0].Status != \"customer-safe-offer-launch-delivery-growth-plan-ready\"",
  "offerLaunchDeliveryGrowthPlanReceipts[0].CustomerVisible",
  "offerLaunchDeliveryGrowthPlanReceipts[0].CustomerSafe",
  "offerLaunchDeliveryGrowthPlanReceipts[0].CustomerVisibleReceiptReady",
  "offerLaunchDeliveryGrowthPlanReceipts[0].WebportalExportReady",
  "offerLaunchDeliveryGrowthPlanReceipts[0].AppOwnedGrowthPlanState",
  "offerLaunchDeliveryGrowthPlanReceipts[0].AppOwnedFollowUpState",
  "offerLaunchDeliveryGrowthPlanReceipts[0].FollowUpReady",
  "offerLaunchDeliveryGrowthPlanReceipts[0].RenewalReady",
  "offerLaunchDeliveryGrowthPlanReceipts[0].ReferralReady",
  "offerLaunchDeliveryGrowthPlanReceipts[0].RepeatServiceReady",
  "offerLaunchDeliveryGrowthPlanReceipts[0].GrowthPlanReady",
  "offerLaunchDeliveryGrowthPlanReceipts[0].OutcomeReady",
  "offerLaunchDeliveryGrowthPlanReceipts[0].CompatibilityGateRequired",
  "offerLaunchDeliveryGrowthPlanReceipts[0].EpochTimingProviderOnly",
  "offerLaunchDeliveryGrowthPlanReceipts[0].WorkshopCalendarOwnership",
  "offerLaunchDeliveryGrowthPlanReceipts[0].MonitorWorkflowExposed",
  "offerLaunchDeliveryGrowthPlanReceipts[0].PaymentLiveEnabled",
  "offerLaunchDeliveryGrowthPlanReceipts[0].ProviderGoLiveRequested",
  "offerLaunchDeliveryGrowthPlanReceipts[0].LiveProviderEnabled",
  "offerLaunchDeliveryGrowthPlanReceipts[0].AiForwardCopy",
  "offerLaunchDeliveryGrowthPlanReceipts[0].RequiresEpochTimingRequest",
  "repeat-service, renewal, and referral options",
  "repeat-service, renewal, or referral",
  "File.Exists(WorkshopOfferLaunchDeliveryGrowthPlanReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryGrowthPlanAcceptances.Count != 1",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].GrowthPlanReceiptId != offerLaunchDeliveryGrowthPlanReceipt.ReceiptId",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].Kind != \"offer-launch-delivery-growth-plan-acceptance\"",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].Status != \"offer-launch-delivery-growth-plan-acceptance-ready\"",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].CustomerVisible",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].CustomerSafeForReceipt",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].WebportalExportReady",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].AppOwnedAcceptanceState",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].AppOwnedGrowthPlanState",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].GrowthPlanReady",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].RepeatServiceAccepted",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].RenewalAccepted",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].ReferralAccepted",
  "offerLaunchDeliveryGrowthPlanAcceptances[0].AcceptanceReady",
  "customer-safe delivery growth-plan acceptance receipt",
  "File.Exists(WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceStore.AcceptancePath)",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts.Count != 1",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].Kind != \"offer-launch-delivery-growth-plan-acceptance\"",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].Status != \"customer-safe-offer-launch-delivery-growth-plan-acceptance-ready\"",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].CustomerVisible",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].CustomerSafe",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].CustomerVisibleReceiptReady",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].WebportalExportReady",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].AppOwnedAcceptanceState",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].AppOwnedGrowthPlanState",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].GrowthPlanReady",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].RepeatServiceAccepted",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].RenewalAccepted",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].ReferralAccepted",
  "offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].AcceptanceReady",
  "accepted next service motion",
  "File.Exists(WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryExpansionRequests.Count != 1",
  "offerLaunchDeliveryExpansionRequests[0].Kind != \"offer-launch-delivery-expansion-request\"",
  "offerLaunchDeliveryExpansionRequests[0].Status != \"offer-launch-delivery-expansion-request-ready\"",
  "offerLaunchDeliveryExpansionRequests[0].ExpansionRequestReady",
  "customer-safe delivery expansion-request receipt",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionRequestStore.ExpansionRequestPath)",
  "offerLaunchDeliveryExpansionRequestReceipts.Count != 1",
  "offerLaunchDeliveryExpansionRequestReceipts[0].Kind != \"offer-launch-delivery-expansion-request\"",
  "offerLaunchDeliveryExpansionRequestReceipts[0].Status != \"customer-safe-offer-launch-delivery-expansion-request-ready\"",
  "offerLaunchDeliveryExpansionRequestReceipts[0].ExpansionRequestReady",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionRequestReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryExpansionWorkspaces.Count != 1",
  "offerLaunchDeliveryExpansionWorkspaces[0].ExpansionWorkspaceId != offerLaunchDeliveryExpansionWorkspace.ExpansionWorkspaceId",
  "offerLaunchDeliveryExpansionWorkspaces[0].ExpansionRequestReceiptId != offerLaunchDeliveryExpansionRequestReceipt.ReceiptId",
  "offerLaunchDeliveryExpansionWorkspaces[0].Kind != \"offer-launch-delivery-expansion-workspace\"",
  "offerLaunchDeliveryExpansionWorkspaces[0].Status != \"offer-launch-delivery-expansion-workspace-ready\"",
  "offerLaunchDeliveryExpansionWorkspaces[0].AppOwnedExpansionWorkspaceState",
  "offerLaunchDeliveryExpansionWorkspaces[0].ExpansionWorkspaceReady",
  "customer-safe expansion workspace receipt",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionWorkspaceStore.ExpansionWorkspacePath)",
  "offerLaunchDeliveryExpansionWorkspaceReceipts.Count != 1",
  "offerLaunchDeliveryExpansionWorkspaceReceipts[0].Kind != \"offer-launch-delivery-expansion-workspace\"",
  "offerLaunchDeliveryExpansionWorkspaceReceipts[0].Status != \"customer-safe-offer-launch-delivery-expansion-workspace-ready\"",
  "offerLaunchDeliveryExpansionWorkspaceReceipts[0].AppOwnedExpansionWorkspaceState",
  "offerLaunchDeliveryExpansionWorkspaceReceipts[0].ExpansionWorkspaceReady",
  "next-service workspace is ready",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionWorkspaceReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryExpansionKickoffs.Count != 1",
  "offerLaunchDeliveryExpansionKickoffs[0].ExpansionKickoffId != offerLaunchDeliveryExpansionKickoff.ExpansionKickoffId",
  "offerLaunchDeliveryExpansionKickoffs[0].ExpansionWorkspaceReceiptId != offerLaunchDeliveryExpansionWorkspaceReceipt.ReceiptId",
  "offerLaunchDeliveryExpansionKickoffs[0].Kind != \"offer-launch-delivery-expansion-kickoff\"",
  "offerLaunchDeliveryExpansionKickoffs[0].Status != \"offer-launch-delivery-expansion-kickoff-ready\"",
  "offerLaunchDeliveryExpansionKickoffs[0].AppOwnedExpansionKickoffState",
  "offerLaunchDeliveryExpansionKickoffs[0].ExpansionKickoffReady",
  "customer-safe expansion kickoff receipt",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionKickoffStore.ExpansionKickoffPath)",
  "offerLaunchDeliveryExpansionKickoffReceipts.Count != 1",
  "offerLaunchDeliveryExpansionKickoffReceipts[0].Kind != \"offer-launch-delivery-expansion-kickoff\"",
  "offerLaunchDeliveryExpansionKickoffReceipts[0].Status != \"customer-safe-offer-launch-delivery-expansion-kickoff-ready\"",
  "offerLaunchDeliveryExpansionKickoffReceipts[0].AppOwnedExpansionKickoffState",
  "offerLaunchDeliveryExpansionKickoffReceipts[0].ExpansionKickoffReady",
  "next-service kickoff is ready",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionKickoffReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryExpansionMilestones.Count != 1",
  "offerLaunchDeliveryExpansionMilestones[0].ExpansionMilestoneId != offerLaunchDeliveryExpansionMilestone.ExpansionMilestoneId",
  "offerLaunchDeliveryExpansionMilestones[0].ExpansionKickoffReceiptId != offerLaunchDeliveryExpansionKickoffReceipt.ReceiptId",
  "offerLaunchDeliveryExpansionMilestones[0].Kind != \"offer-launch-delivery-expansion-milestone\"",
  "offerLaunchDeliveryExpansionMilestones[0].Status != \"offer-launch-delivery-expansion-milestone-active\"",
  "offerLaunchDeliveryExpansionMilestones[0].AppOwnedExpansionMilestoneState",
  "offerLaunchDeliveryExpansionMilestones[0].ExpansionMilestoneReady",
  "customer-safe expansion milestone receipt",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionMilestoneStore.ExpansionMilestonePath)",
  "offerLaunchDeliveryExpansionMilestoneReceipts.Count != 1",
  "offerLaunchDeliveryExpansionMilestoneReceipts[0].Kind != \"offer-launch-delivery-expansion-milestone\"",
  "offerLaunchDeliveryExpansionMilestoneReceipts[0].Status != \"customer-safe-offer-launch-delivery-expansion-milestone-active\"",
  "offerLaunchDeliveryExpansionMilestoneReceipts[0].AppOwnedExpansionMilestoneState",
  "offerLaunchDeliveryExpansionMilestoneReceipts[0].ExpansionMilestoneReady",
  "next-service delivery milestone is active",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionMilestoneReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryExpansionOutcomes.Count != 1",
  "offerLaunchDeliveryExpansionOutcomes[0].ExpansionOutcomeId != offerLaunchDeliveryExpansionOutcome.ExpansionOutcomeId",
  "offerLaunchDeliveryExpansionOutcomes[0].ExpansionMilestoneReceiptId != offerLaunchDeliveryExpansionMilestoneReceipt.ReceiptId",
  "offerLaunchDeliveryExpansionOutcomes[0].Kind != \"offer-launch-delivery-expansion-outcome\"",
  "offerLaunchDeliveryExpansionOutcomes[0].Status != \"offer-launch-delivery-expansion-outcome-ready\"",
  "offerLaunchDeliveryExpansionOutcomes[0].AppOwnedExpansionOutcomeState",
  "offerLaunchDeliveryExpansionOutcomes[0].AppOwnedExpansionMilestoneState",
  "offerLaunchDeliveryExpansionOutcomes[0].ExpansionOutcomeReady",
  "offerLaunchDeliveryExpansionOutcomes[0].ExpansionMilestoneReady",
  "customer-safe expansion outcome receipt",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionOutcomeStore.ExpansionOutcomePath)",
  "offerLaunchDeliveryExpansionOutcomeReceipts.Count != 1",
  "offerLaunchDeliveryExpansionOutcomeReceipts[0].Kind != \"offer-launch-delivery-expansion-outcome\"",
  "offerLaunchDeliveryExpansionOutcomeReceipts[0].Status != \"customer-safe-offer-launch-delivery-expansion-outcome-ready\"",
  "offerLaunchDeliveryExpansionOutcomeReceipts[0].AppOwnedExpansionOutcomeState",
  "offerLaunchDeliveryExpansionOutcomeReceipts[0].AppOwnedExpansionMilestoneState",
  "offerLaunchDeliveryExpansionOutcomeReceipts[0].ExpansionOutcomeReady",
  "offerLaunchDeliveryExpansionOutcomeReceipts[0].ExpansionMilestoneReady",
  "next-service delivery outcome is ready",
  "follow-up, renewal, or referral",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionOutcomeReceiptStore.ReceiptPath)",
  "offerLaunchDeliveryExpansionFollowUps.Count != 1",
  "offerLaunchDeliveryExpansionFollowUps[0].ExpansionFollowUpId != offerLaunchDeliveryExpansionFollowUp.ExpansionFollowUpId",
  "offerLaunchDeliveryExpansionFollowUps[0].ExpansionOutcomeReceiptId != offerLaunchDeliveryExpansionOutcomeReceipt.ReceiptId",
  "offerLaunchDeliveryExpansionFollowUps[0].Kind != \"offer-launch-delivery-expansion-follow-up\"",
  "offerLaunchDeliveryExpansionFollowUps[0].Status != \"offer-launch-delivery-expansion-follow-up-ready\"",
  "offerLaunchDeliveryExpansionFollowUps[0].AppOwnedExpansionFollowUpState",
  "offerLaunchDeliveryExpansionFollowUps[0].AppOwnedExpansionOutcomeState",
  "offerLaunchDeliveryExpansionFollowUps[0].ExpansionFollowUpReady",
  "offerLaunchDeliveryExpansionFollowUps[0].ExpansionOutcomeReady",
  "customer-safe expansion follow-up receipt",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionFollowUpStore.ExpansionFollowUpPath)",
  "offerLaunchDeliveryExpansionFollowUpReceipts.Count != 1",
  "offerLaunchDeliveryExpansionFollowUpReceipts[0].Kind != \"offer-launch-delivery-expansion-follow-up\"",
  "offerLaunchDeliveryExpansionFollowUpReceipts[0].Status != \"customer-safe-offer-launch-delivery-expansion-follow-up-ready\"",
  "offerLaunchDeliveryExpansionFollowUpReceipts[0].AppOwnedExpansionFollowUpState",
  "offerLaunchDeliveryExpansionFollowUpReceipts[0].AppOwnedExpansionOutcomeState",
  "offerLaunchDeliveryExpansionFollowUpReceipts[0].ExpansionFollowUpReady",
  "offerLaunchDeliveryExpansionFollowUpReceipts[0].ExpansionOutcomeReady",
  "next-service follow-up options are ready",
  "File.Exists(WorkshopOfferLaunchDeliveryExpansionFollowUpReceiptStore.ReceiptPath)",
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
  "WorkshopPackageDeliveryRetentionReportStore.Append",
  "WorkshopPackageDeliveryRetentionReportStore.Load",
  "WorkshopPackageDeliveryRetentionReportReceiptStore.Append",
  "WorkshopPackageDeliveryRetentionReportReceiptStore.Load",
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
  "packageDeliveryRetentionReports.Count != 1",
  "packageDeliveryRetentionReports[0].ReportKind != \"package-delivery-retention-reporting\"",
  "packageDeliveryRetentionReports[0].Status != \"package-delivery-retention-reporting-ready\"",
  "packageDeliveryRetentionReports[0].ReportingPath != \"quality-outcome-account-growth-retention-reporting\"",
  "packageDeliveryRetentionReports[0].CustomerVisible",
  "packageDeliveryRetentionReports[0].CustomerSafeForReceipt",
  "packageDeliveryRetentionReports[0].WebportalExportReady",
  "packageDeliveryRetentionReports[0].EpochTimingProviderOnly",
  "packageDeliveryRetentionReports[0].WorkshopCalendarOwnership",
  "packageDeliveryRetentionReports[0].MonitorWorkflowExposed",
  "packageDeliveryRetentionReports[0].PaymentLiveEnabled",
  "packageDeliveryRetentionReports[0].QualityOutcomeReceiptMatched",
  "packageDeliveryRetentionReports[0].RetentionReportingReady",
  "File.Exists(WorkshopPackageDeliveryRetentionReportStore.ReportPath)",
  "packageDeliveryRetentionReportReceipts.Count != 1",
  "packageDeliveryRetentionReportReceipts[0].Kind != \"package-delivery-retention-report\"",
  "packageDeliveryRetentionReportReceipts[0].Status != \"customer-safe-package-delivery-retention-report-ready\"",
  "packageDeliveryRetentionReportReceipts[0].CustomerSafe",
  "packageDeliveryRetentionReportReceipts[0].CustomerVisibleReceiptReady",
  "packageDeliveryRetentionReportReceipts[0].WebportalExportReady",
  "packageDeliveryRetentionReportReceipts[0].EpochTimingProviderOnly",
  "packageDeliveryRetentionReportReceipts[0].WorkshopCalendarOwnership",
  "packageDeliveryRetentionReportReceipts[0].MonitorWorkflowExposed",
  "packageDeliveryRetentionReportReceipts[0].PaymentLiveEnabled",
  "packageDeliveryRetentionReportReceipts[0].QualityOutcomeReceiptMatched",
  "packageDeliveryRetentionReportReceipts[0].RetentionReportingReady",
  "packageDeliveryRetentionReportReceipts[0].Summary.Contains(\"retention-reporting-control\"",
  "packageDeliveryRetentionReportReceipts[0].CustomerSafeMessage.Contains(\"retention reporting is ready\"",
  "packageDeliveryRetentionReportReceipts[0].NextAction.Contains(\"Request EPOCH timing only\"",
  "File.Exists(WorkshopPackageDeliveryRetentionReportReceiptStore.ReceiptPath)",
  "packageDeliveryGrowthActions.Count != 1",
  "packageDeliveryGrowthActions[0].ActionKind != \"package-delivery-growth-action\"",
  "packageDeliveryGrowthActions[0].Status != \"package-delivery-growth-action-ready\"",
  "packageDeliveryGrowthActions[0].GrowthPath != \"retention-report-repeat-referral-expansion-action\"",
  "packageDeliveryGrowthActions[0].CustomerVisible",
  "packageDeliveryGrowthActions[0].CustomerSafeForReceipt",
  "packageDeliveryGrowthActions[0].WebportalExportReady",
  "packageDeliveryGrowthActions[0].EpochTimingProviderOnly",
  "packageDeliveryGrowthActions[0].WorkshopCalendarOwnership",
  "packageDeliveryGrowthActions[0].MonitorWorkflowExposed",
  "packageDeliveryGrowthActions[0].PaymentLiveEnabled",
  "packageDeliveryGrowthActions[0].GrowthActionReady",
  "packageDeliveryGrowthActions[0].RequiresEpochTimingRequest",
  "packageDeliveryGrowthActions[0].CustomerSafeStatus.Contains(\"repeat-service\"",
  "packageDeliveryGrowthActions[0].OperatorNextAction.Contains(\"export only the customer-safe growth-action receipt\"",
  "File.Exists(WorkshopPackageDeliveryGrowthActionStore.ActionPath)",
  "packageDeliveryGrowthActionReceipts.Count != 1",
  "packageDeliveryGrowthActionReceipts[0].Kind != \"package-delivery-growth-action\"",
  "packageDeliveryGrowthActionReceipts[0].Status != \"customer-safe-package-delivery-growth-action-ready\"",
  "packageDeliveryGrowthActionReceipts[0].CustomerSafe",
  "packageDeliveryGrowthActionReceipts[0].CustomerVisibleReceiptReady",
  "packageDeliveryGrowthActionReceipts[0].WebportalExportReady",
  "packageDeliveryGrowthActionReceipts[0].EpochTimingProviderOnly",
  "packageDeliveryGrowthActionReceipts[0].WorkshopCalendarOwnership",
  "packageDeliveryGrowthActionReceipts[0].MonitorWorkflowExposed",
  "packageDeliveryGrowthActionReceipts[0].PaymentLiveEnabled",
  "packageDeliveryGrowthActionReceipts[0].GrowthActionReady",
  "packageDeliveryGrowthActionReceipts[0].RequiresEpochTimingRequest",
  "packageDeliveryGrowthActionReceipts[0].Summary.Contains(\"growth-action-control\"",
  "packageDeliveryGrowthActionReceipts[0].CustomerSafeMessage.Contains(\"repeat-service, referral, or expansion action is ready\"",
  "packageDeliveryGrowthActionReceipts[0].NextAction.Contains(\"Request EPOCH timing only\"",
  "File.Exists(WorkshopPackageDeliveryGrowthActionReceiptStore.ReceiptPath)",
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
  "WorkshopOfferLaunchReadiness",
  "WorkshopOfferLaunchReadinessReceipt",
  "WorkshopOfferLaunchIntakeAction",
  "WorkshopOfferLaunchIntakeReceipt",
  "WorkshopOfferLaunchActivation",
  "WorkshopOfferLaunchActivationReceipt",
  "WorkshopOfferLaunchServiceSetup",
  "WorkshopOfferLaunchServiceSetupReceipt",
  "WorkshopOfferLaunchDeliveryWorkspace",
  "WorkshopOfferLaunchDeliveryWorkspaceReceipt",
  "WorkshopOfferLaunchDeliveryKickoff",
  "WorkshopOfferLaunchDeliveryKickoffReceipt",
  "WorkshopOfferLaunchDeliveryMilestone",
  "WorkshopOfferLaunchDeliveryMilestoneReceipt",
  "WorkshopOfferLaunchDeliveryOutcome",
  "WorkshopOfferLaunchDeliveryOutcomeReceipt",
  "WorkshopOfferLaunchDeliveryFollowUp",
  "WorkshopOfferLaunchDeliveryFollowUpReceipt",
  "WorkshopOfferLaunchDeliveryGrowthPlan",
  "WorkshopOfferLaunchDeliveryGrowthPlanReceipt",
  "WorkshopOfferLaunchDeliveryGrowthPlanAcceptance",
  "WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt",
  "WorkshopOfferLaunchDeliveryExpansionRequest",
  "WorkshopOfferLaunchDeliveryExpansionRequestReceipt",
  "WorkshopOfferLaunchDeliveryExpansionWorkspace",
  "WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt",
  "WorkshopOfferLaunchDeliveryExpansionKickoff",
  "WorkshopOfferLaunchDeliveryExpansionKickoffReceipt",
  "WorkshopOfferLaunchDeliveryExpansionMilestone",
  "WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt",
  "WorkshopOfferLaunchDeliveryExpansionOutcome",
  "WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt",
  "WorkshopOfferLaunchDeliveryExpansionFollowUp",
  "WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt",
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
  "workshop_offer_launch_readiness_is_internal",
  "workshop_offer_launch_readiness_receipt_is_customer_safe",
  "workshop_offer_launch_intake_action_is_internal",
  "workshop_offer_launch_intake_receipt_is_customer_safe",
  "workshop_offer_launch_activation_is_internal",
  "workshop_offer_launch_activation_receipt_is_customer_safe",
  "workshop_offer_launch_service_setup_is_internal",
  "workshop_offer_launch_service_setup_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_workspace_is_internal",
  "workshop_offer_launch_delivery_workspace_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_kickoff_is_internal",
  "workshop_offer_launch_delivery_kickoff_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_milestone_is_internal",
  "workshop_offer_launch_delivery_milestone_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_outcome_is_internal",
  "workshop_offer_launch_delivery_outcome_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_follow_up_is_internal",
  "workshop_offer_launch_delivery_follow_up_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_growth_plan_is_internal",
  "workshop_offer_launch_delivery_growth_plan_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_growth_plan_acceptance_is_internal",
  "workshop_offer_launch_delivery_growth_plan_acceptance_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_expansion_request_is_internal",
  "workshop_offer_launch_delivery_expansion_request_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_expansion_workspace_is_internal",
  "workshop_offer_launch_delivery_expansion_workspace_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_expansion_kickoff_is_internal",
  "workshop_offer_launch_delivery_expansion_kickoff_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_expansion_milestone_is_internal",
  "workshop_offer_launch_delivery_expansion_milestone_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_expansion_outcome_is_internal",
  "workshop_offer_launch_delivery_expansion_outcome_receipt_is_customer_safe",
  "workshop_offer_launch_delivery_expansion_follow_up_is_internal",
  "workshop_offer_launch_delivery_expansion_follow_up_receipt_is_customer_safe",
  "workshop_ara_work_packet_requires_human_review",
  "workshop_owner_time_budget_warns_on_labor_trap",
  "workshop_local_worktree_status_is_local_only"
]) {
  if (!header.includes(fn)) fail(`header missing native function ${fn}`);
  if (!source.includes(fn)) fail(`source missing native function ${fn}`);
}

for (const phrase of [
  "WorkshopOfferLaunchReadiness offer_launch_readiness",
  "WorkshopOfferLaunchReadinessReceipt offer_launch_receipt",
  "WorkshopOfferLaunchIntakeAction offer_launch_intake_action",
  "WorkshopOfferLaunchIntakeReceipt offer_launch_intake_receipt",
  "WorkshopOfferLaunchActivation offer_launch_activation",
  "WorkshopOfferLaunchActivationReceipt offer_launch_activation_receipt",
  "WorkshopOfferLaunchServiceSetup offer_launch_service_setup",
  "WorkshopOfferLaunchServiceSetupReceipt offer_launch_service_setup_receipt",
  "WorkshopOfferLaunchDeliveryWorkspace offer_launch_delivery_workspace",
  "WorkshopOfferLaunchDeliveryWorkspaceReceipt offer_launch_delivery_workspace_receipt",
  "WorkshopOfferLaunchDeliveryKickoff offer_launch_delivery_kickoff",
  "WorkshopOfferLaunchDeliveryKickoffReceipt offer_launch_delivery_kickoff_receipt",
  "WorkshopOfferLaunchDeliveryMilestone offer_launch_delivery_milestone",
  "WorkshopOfferLaunchDeliveryMilestoneReceipt offer_launch_delivery_milestone_receipt",
  "WorkshopOfferLaunchDeliveryOutcome offer_launch_delivery_outcome",
  "WorkshopOfferLaunchDeliveryOutcomeReceipt offer_launch_delivery_outcome_receipt",
  "WorkshopOfferLaunchDeliveryFollowUp offer_launch_delivery_follow_up",
  "WorkshopOfferLaunchDeliveryFollowUpReceipt offer_launch_delivery_follow_up_receipt",
  "WorkshopOfferLaunchDeliveryGrowthPlan offer_launch_delivery_growth_plan",
  "WorkshopOfferLaunchDeliveryGrowthPlanReceipt offer_launch_delivery_growth_plan_receipt",
  "WorkshopOfferLaunchDeliveryGrowthPlanAcceptance offer_launch_delivery_growth_plan_acceptance",
  "WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt offer_launch_delivery_growth_plan_acceptance_receipt",
  "WorkshopOfferLaunchDeliveryExpansionRequest offer_launch_delivery_expansion_request",
  "WorkshopOfferLaunchDeliveryExpansionRequestReceipt offer_launch_delivery_expansion_request_receipt",
  "WorkshopOfferLaunchDeliveryExpansionWorkspace offer_launch_delivery_expansion_workspace",
  "WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt offer_launch_delivery_expansion_workspace_receipt",
  "WorkshopOfferLaunchDeliveryExpansionKickoff offer_launch_delivery_expansion_kickoff",
  "WorkshopOfferLaunchDeliveryExpansionKickoffReceipt offer_launch_delivery_expansion_kickoff_receipt",
  "WorkshopOfferLaunchDeliveryExpansionMilestone offer_launch_delivery_expansion_milestone",
  "WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt offer_launch_delivery_expansion_milestone_receipt",
  "WorkshopOfferLaunchDeliveryExpansionOutcome offer_launch_delivery_expansion_outcome",
  "WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt offer_launch_delivery_expansion_outcome_receipt",
  "WorkshopOfferLaunchDeliveryExpansionFollowUp offer_launch_delivery_expansion_follow_up",
  "WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt offer_launch_delivery_expansion_follow_up_receipt",
  "workshop_offer_launch_readiness_is_internal(&offer_launch_readiness) == 1",
  "offer_launch_readiness.webportal_export_ready = 1",
  "workshop_offer_launch_readiness_is_internal(&offer_launch_readiness) == 0",
  "workshop_offer_launch_readiness_receipt_is_customer_safe(&offer_launch_receipt) == 1",
  "offer_launch_receipt.monitor_workflow_exposed = 1",
  "workshop_offer_launch_readiness_receipt_is_customer_safe(&offer_launch_receipt) == 0",
  "workshop_offer_launch_intake_action_is_internal(&offer_launch_intake_action) == 1",
  "offer_launch_intake_action.provider_go_live_requested = 1",
  "workshop_offer_launch_intake_action_is_internal(&offer_launch_intake_action) == 0",
  "workshop_offer_launch_intake_receipt_is_customer_safe(&offer_launch_intake_receipt) == 1",
  "offer_launch_intake_receipt.payment_live_enabled = 1",
  "workshop_offer_launch_intake_receipt_is_customer_safe(&offer_launch_intake_receipt) == 0",
  "workshop_offer_launch_activation_is_internal(&offer_launch_activation) == 1",
  "offer_launch_activation.webportal_export_ready = 1",
  "workshop_offer_launch_activation_is_internal(&offer_launch_activation) == 0",
  "workshop_offer_launch_activation_receipt_is_customer_safe(&offer_launch_activation_receipt) == 1",
  "offer_launch_activation_receipt.monitor_workflow_exposed = 1",
  "workshop_offer_launch_activation_receipt_is_customer_safe(&offer_launch_activation_receipt) == 0",
  "workshop_offer_launch_service_setup_is_internal(&offer_launch_service_setup) == 1",
  "offer_launch_service_setup.webportal_export_ready = 1",
  "workshop_offer_launch_service_setup_is_internal(&offer_launch_service_setup) == 0",
  "workshop_offer_launch_service_setup_receipt_is_customer_safe(&offer_launch_service_setup_receipt) == 1",
  "offer_launch_service_setup_receipt.provider_go_live_requested = 1",
  "workshop_offer_launch_service_setup_receipt_is_customer_safe(&offer_launch_service_setup_receipt) == 0",
  "workshop_offer_launch_delivery_workspace_is_internal(&offer_launch_delivery_workspace) == 1",
  "offer_launch_delivery_workspace.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_workspace_is_internal(&offer_launch_delivery_workspace) == 0",
  "workshop_offer_launch_delivery_workspace_receipt_is_customer_safe(&offer_launch_delivery_workspace_receipt) == 1",
  "offer_launch_delivery_workspace_receipt.provider_go_live_requested = 1",
  "workshop_offer_launch_delivery_workspace_receipt_is_customer_safe(&offer_launch_delivery_workspace_receipt) == 0",
  "workshop_offer_launch_delivery_kickoff_is_internal(&offer_launch_delivery_kickoff) == 1",
  "offer_launch_delivery_kickoff.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_kickoff_is_internal(&offer_launch_delivery_kickoff) == 0",
  "workshop_offer_launch_delivery_kickoff_receipt_is_customer_safe(&offer_launch_delivery_kickoff_receipt) == 1",
  "offer_launch_delivery_kickoff_receipt.provider_go_live_requested = 1",
  "workshop_offer_launch_delivery_kickoff_receipt_is_customer_safe(&offer_launch_delivery_kickoff_receipt) == 0",
  "workshop_offer_launch_delivery_milestone_is_internal(&offer_launch_delivery_milestone) == 1",
  "offer_launch_delivery_milestone.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_milestone_is_internal(&offer_launch_delivery_milestone) == 0",
  "workshop_offer_launch_delivery_milestone_receipt_is_customer_safe(&offer_launch_delivery_milestone_receipt) == 1",
  "offer_launch_delivery_milestone_receipt.provider_go_live_requested = 1",
  "workshop_offer_launch_delivery_milestone_receipt_is_customer_safe(&offer_launch_delivery_milestone_receipt) == 0",
  "workshop_offer_launch_delivery_outcome_is_internal(&offer_launch_delivery_outcome) == 1",
  "offer_launch_delivery_outcome.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_outcome_is_internal(&offer_launch_delivery_outcome) == 0",
  "workshop_offer_launch_delivery_outcome_receipt_is_customer_safe(&offer_launch_delivery_outcome_receipt) == 1",
  "offer_launch_delivery_outcome_receipt.provider_go_live_requested = 1",
  "workshop_offer_launch_delivery_outcome_receipt_is_customer_safe(&offer_launch_delivery_outcome_receipt) == 0",
  "workshop_offer_launch_delivery_follow_up_is_internal(&offer_launch_delivery_follow_up) == 1",
  "offer_launch_delivery_follow_up.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_follow_up_is_internal(&offer_launch_delivery_follow_up) == 0",
  "workshop_offer_launch_delivery_follow_up_receipt_is_customer_safe(&offer_launch_delivery_follow_up_receipt) == 1",
  "offer_launch_delivery_follow_up_receipt.payment_live_enabled = 1",
  "workshop_offer_launch_delivery_follow_up_receipt_is_customer_safe(&offer_launch_delivery_follow_up_receipt) == 0",
  "workshop_offer_launch_delivery_growth_plan_is_internal(&offer_launch_delivery_growth_plan) == 1",
  "offer_launch_delivery_growth_plan.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_growth_plan_is_internal(&offer_launch_delivery_growth_plan) == 0",
  "workshop_offer_launch_delivery_growth_plan_receipt_is_customer_safe(&offer_launch_delivery_growth_plan_receipt) == 1",
  "offer_launch_delivery_growth_plan_receipt.provider_go_live_requested = 1",
  "workshop_offer_launch_delivery_growth_plan_receipt_is_customer_safe(&offer_launch_delivery_growth_plan_receipt) == 0",
  "workshop_offer_launch_delivery_growth_plan_acceptance_is_internal(&offer_launch_delivery_growth_plan_acceptance) == 1",
  "offer_launch_delivery_growth_plan_acceptance.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_growth_plan_acceptance_is_internal(&offer_launch_delivery_growth_plan_acceptance) == 0",
  "workshop_offer_launch_delivery_growth_plan_acceptance_receipt_is_customer_safe(&offer_launch_delivery_growth_plan_acceptance_receipt) == 1",
  "offer_launch_delivery_growth_plan_acceptance_receipt.payment_live_enabled = 1",
  "workshop_offer_launch_delivery_growth_plan_acceptance_receipt_is_customer_safe(&offer_launch_delivery_growth_plan_acceptance_receipt) == 0",
  "workshop_offer_launch_delivery_expansion_request_is_internal(&offer_launch_delivery_expansion_request) == 1",
  "offer_launch_delivery_expansion_request.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_expansion_request_is_internal(&offer_launch_delivery_expansion_request) == 0",
  "workshop_offer_launch_delivery_expansion_request_receipt_is_customer_safe(&offer_launch_delivery_expansion_request_receipt) == 1",
  "offer_launch_delivery_expansion_request_receipt.monitor_workflow_exposed = 1",
  "workshop_offer_launch_delivery_expansion_request_receipt_is_customer_safe(&offer_launch_delivery_expansion_request_receipt) == 0",
  "workshop_offer_launch_delivery_expansion_workspace_is_internal(&offer_launch_delivery_expansion_workspace) == 1",
  "offer_launch_delivery_expansion_workspace.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_expansion_workspace_is_internal(&offer_launch_delivery_expansion_workspace) == 0",
  "workshop_offer_launch_delivery_expansion_workspace_receipt_is_customer_safe(&offer_launch_delivery_expansion_workspace_receipt) == 1",
  "offer_launch_delivery_expansion_workspace_receipt.payment_live_enabled = 1",
  "workshop_offer_launch_delivery_expansion_workspace_receipt_is_customer_safe(&offer_launch_delivery_expansion_workspace_receipt) == 0",
  "workshop_offer_launch_delivery_expansion_kickoff_is_internal(&offer_launch_delivery_expansion_kickoff) == 1",
  "offer_launch_delivery_expansion_kickoff.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_expansion_kickoff_is_internal(&offer_launch_delivery_expansion_kickoff) == 0",
  "workshop_offer_launch_delivery_expansion_kickoff_receipt_is_customer_safe(&offer_launch_delivery_expansion_kickoff_receipt) == 1",
  "offer_launch_delivery_expansion_kickoff_receipt.provider_go_live_requested = 1",
  "workshop_offer_launch_delivery_expansion_kickoff_receipt_is_customer_safe(&offer_launch_delivery_expansion_kickoff_receipt) == 0",
  "workshop_offer_launch_delivery_expansion_milestone_is_internal(&offer_launch_delivery_expansion_milestone) == 1",
  "offer_launch_delivery_expansion_milestone.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_expansion_milestone_is_internal(&offer_launch_delivery_expansion_milestone) == 0",
  "workshop_offer_launch_delivery_expansion_milestone_receipt_is_customer_safe(&offer_launch_delivery_expansion_milestone_receipt) == 1",
  "offer_launch_delivery_expansion_milestone_receipt.provider_go_live_requested = 1",
  "workshop_offer_launch_delivery_expansion_milestone_receipt_is_customer_safe(&offer_launch_delivery_expansion_milestone_receipt) == 0",
  "workshop_offer_launch_delivery_expansion_outcome_is_internal(&offer_launch_delivery_expansion_outcome) == 1",
  "offer_launch_delivery_expansion_outcome.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_expansion_outcome_is_internal(&offer_launch_delivery_expansion_outcome) == 0",
  "workshop_offer_launch_delivery_expansion_outcome_receipt_is_customer_safe(&offer_launch_delivery_expansion_outcome_receipt) == 1",
  "offer_launch_delivery_expansion_outcome_receipt.payment_live_enabled = 1",
  "workshop_offer_launch_delivery_expansion_outcome_receipt_is_customer_safe(&offer_launch_delivery_expansion_outcome_receipt) == 0",
  "workshop_offer_launch_delivery_expansion_follow_up_is_internal(&offer_launch_delivery_expansion_follow_up) == 1",
  "offer_launch_delivery_expansion_follow_up.webportal_export_ready = 1",
  "workshop_offer_launch_delivery_expansion_follow_up_is_internal(&offer_launch_delivery_expansion_follow_up) == 0",
  "workshop_offer_launch_delivery_expansion_follow_up_receipt_is_customer_safe(&offer_launch_delivery_expansion_follow_up_receipt) == 1",
  "offer_launch_delivery_expansion_follow_up_receipt.payment_live_enabled = 1",
  "workshop_offer_launch_delivery_expansion_follow_up_receipt_is_customer_safe(&offer_launch_delivery_expansion_follow_up_receipt) == 0"
]) {
  if (!coreSmoke.includes(phrase)) fail(`native smoke missing offer launch readiness proof ${phrase}`);
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
const seededLaunchReadiness = initialWorkshopLedger.offerLaunchReadinessRecords?.find((item) => item.id === "launch-readiness-submission-001");
const seededLaunchReceipt = initialWorkshopLedger.offerLaunchReadinessReceipts?.find((item) => item.id === "launch-receipt-submission-001");
if (!seededLaunchReadiness || seededLaunchReadiness.customerVisible !== false || seededLaunchReadiness.webportalExportReady !== false || seededLaunchReadiness.customerSafeForReceipt !== true || seededLaunchReadiness.aiForwardCopy !== false || seededLaunchReadiness.japanCopyMode !== "ai-neutral" || seededLaunchReadiness.under19GuardRequired !== true || seededLaunchReadiness.epochTimingProviderOnly !== true || seededLaunchReadiness.workshopCalendarOwnership !== false || seededLaunchReadiness.monitorWorkflowExposed !== false || seededLaunchReadiness.paymentLiveEnabled !== false || seededLaunchReadiness.launchPriorityScore < 80 || !seededLaunchReadiness.operatorNextAction.includes("under-19 requests through compatibility review")) fail("seeded WORKSHOP ledger missing internal offer launch readiness record");
if (!seededLaunchReceipt || seededLaunchReceipt.kind !== "offer-launch-readiness" || seededLaunchReceipt.status !== "customer-safe-offer-launch-ready" || seededLaunchReceipt.customerVisible !== true || seededLaunchReceipt.webportalExportReady !== true || seededLaunchReceipt.customerSafe !== true || seededLaunchReceipt.aiForwardCopy !== false || seededLaunchReceipt.under19GuardRequired !== true || seededLaunchReceipt.epochTimingProviderOnly !== true || seededLaunchReceipt.workshopCalendarOwnership !== false || seededLaunchReceipt.monitorWorkflowExposed !== false || seededLaunchReceipt.paymentLiveEnabled !== false || !seededLaunchReceipt.nextAction.includes("EPOCH timing is requested only")) fail("seeded WORKSHOP ledger missing customer-safe offer launch readiness receipt");
if (seededLaunchReceipt?.launchReadinessId || seededLaunchReceipt?.offerExperimentId || seededLaunchReceipt?.marketingChannelExperimentId || seededLaunchReceipt?.operatorNextAction || seededLaunchReceipt?.cashSpeedScore || seededLaunchReceipt?.laborLeverageScore || seededLaunchReceipt?.proofReadinessScore || seededLaunchReceipt?.marketDemandScore || seededLaunchReceipt?.launchPriorityScore) fail("offer launch readiness receipt must not expose internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchServicePage = initialWorkshopLedger.servicePages.find((item) => item.id === "service-page-submission-001");
const dynamicLaunchPackage = initialWorkshopLedger.packages.find((item) => item.id === "pkg-submission-4");
const dynamicLaunchOffer = initialWorkshopLedger.offerExperiments.find((item) => item.id === "offer-experiment-submission-001");
const dynamicLaunchChannel = initialWorkshopLedger.marketingChannelExperiments.find((item) => item.id === "marketing-channel-direct-referral-001");
const dynamicLaunchReadiness = createOfferLaunchReadinessForServicePage(dynamicLaunchServicePage, dynamicLaunchPackage, dynamicLaunchOffer, dynamicLaunchChannel);
const dynamicLaunchReceipt = createOfferLaunchReadinessReceiptForRecord(dynamicLaunchReadiness, dynamicLaunchServicePage, dynamicLaunchPackage);
const mismatchedLaunchReadiness = createOfferLaunchReadinessForServicePage(dynamicLaunchServicePage, dynamicLaunchPackage, dynamicLaunchOffer, { ...dynamicLaunchChannel, linkedServicePageId: "service-page-other" });
if (mismatchedLaunchReadiness !== null) fail("offer launch readiness must reject mismatched service-page/channel provenance");
if (!dynamicLaunchReadiness || dynamicLaunchReadiness.customerVisible !== false || dynamicLaunchReadiness.webportalExportReady !== false || dynamicLaunchReadiness.customerSafeForReceipt !== true || dynamicLaunchReadiness.launchPriorityScore < 80 || dynamicLaunchReadiness.aiForwardCopy !== false || dynamicLaunchReadiness.monitorWorkflowExposed !== false || dynamicLaunchReadiness.paymentLiveEnabled !== false || dynamicLaunchReadiness.workshopCalendarOwnership !== false) fail("dynamic offer launch readiness missing internal App-owned launch state");
if (!dynamicLaunchReceipt || dynamicLaunchReceipt.customerVisible !== true || dynamicLaunchReceipt.webportalExportReady !== true || dynamicLaunchReceipt.customerSafe !== true || dynamicLaunchReceipt.aiForwardCopy !== false || dynamicLaunchReceipt.monitorWorkflowExposed !== false || dynamicLaunchReceipt.paymentLiveEnabled !== false || dynamicLaunchReceipt.workshopCalendarOwnership !== false || dynamicLaunchReceipt.launchPriorityScore || dynamicLaunchReceipt.operatorNextAction || dynamicLaunchReceipt.marketingChannelExperimentId || dynamicLaunchReceipt.offerExperimentId) fail("dynamic offer launch readiness receipt leaks internal launch state or is not customer-safe");
const seededLaunchIntakeAction = initialWorkshopLedger.offerLaunchIntakeActions?.find((item) => item.id === "launch-intake-action-submission-001");
const seededLaunchIntakeReceipt = initialWorkshopLedger.offerLaunchIntakeReceipts?.find((item) => item.id === "launch-intake-receipt-submission-001");
if (!seededLaunchIntakeAction || seededLaunchIntakeAction.kind !== "offer-launch-intake-action" || seededLaunchIntakeAction.customerVisible !== false || seededLaunchIntakeAction.webportalExportReady !== false || seededLaunchIntakeAction.customerSafeForReceipt !== true || seededLaunchIntakeAction.appOwnedIntakeState !== true || seededLaunchIntakeAction.epochTimingProviderOnly !== true || seededLaunchIntakeAction.workshopCalendarOwnership !== false || seededLaunchIntakeAction.monitorWorkflowExposed !== false || seededLaunchIntakeAction.paymentLiveEnabled !== false || seededLaunchIntakeAction.providerGoLiveRequested !== false || seededLaunchIntakeAction.liveProviderEnabled !== false || seededLaunchIntakeAction.aiForwardCopy !== false || seededLaunchIntakeAction.japanCopyMode !== "ai-neutral" || seededLaunchIntakeAction.nativeExecutionReady !== true || !seededLaunchIntakeAction.operatorNextAction.includes("inside WORKSHOP")) fail("seeded WORKSHOP ledger missing App-owned launch offer intake action");
if (!seededLaunchIntakeReceipt || seededLaunchIntakeReceipt.kind !== "offer-launch-intake" || seededLaunchIntakeReceipt.customerVisible !== true || seededLaunchIntakeReceipt.webportalExportReady !== true || seededLaunchIntakeReceipt.customerSafe !== true || seededLaunchIntakeReceipt.customerVisibleReceiptReady !== true || seededLaunchIntakeReceipt.appOwnedIntakeState !== true || seededLaunchIntakeReceipt.epochTimingProviderOnly !== true || seededLaunchIntakeReceipt.workshopCalendarOwnership !== false || seededLaunchIntakeReceipt.monitorWorkflowExposed !== false || seededLaunchIntakeReceipt.paymentLiveEnabled !== false || seededLaunchIntakeReceipt.providerGoLiveRequested !== false || seededLaunchIntakeReceipt.liveProviderEnabled !== false || seededLaunchIntakeReceipt.aiForwardCopy !== false || seededLaunchIntakeReceipt.japanCopyMode !== "ai-neutral" || seededLaunchIntakeReceipt.nativeExecutionReady !== true || !seededLaunchIntakeReceipt.nextAction.includes("EPOCH")) fail("seeded WORKSHOP ledger missing customer-safe launch offer intake receipt");
if (seededLaunchIntakeReceipt?.sourceReceiptId || seededLaunchIntakeReceipt?.launchReadinessId || seededLaunchIntakeReceipt?.offerExperimentId || seededLaunchIntakeReceipt?.marketingChannelExperimentId || seededLaunchIntakeReceipt?.operatorNextAction || seededLaunchIntakeReceipt?.cashSpeedScore || seededLaunchIntakeReceipt?.laborLeverageScore || seededLaunchIntakeReceipt?.proofReadinessScore || seededLaunchIntakeReceipt?.marketDemandScore || seededLaunchIntakeReceipt?.launchPriorityScore) fail("launch offer intake receipt must not expose launch receipt provenance, internal launch scoring, experiment, channel, or operator fields");
const launchIntakeForm = new FormData();
launchIntakeForm.set("customer", "Verifier Launch Prospect");
launchIntakeForm.set("ageBand", "adult");
launchIntakeForm.set("materialStatus", "ready");
launchIntakeForm.set("summary", "Request the launch-ready offer path.");
const dynamicLaunchIntakeAction = createOfferLaunchIntakeActionForReceipt(dynamicLaunchReceipt, launchIntakeForm);
const dynamicLaunchIntakeReceipt = createOfferLaunchIntakeReceiptForAction(dynamicLaunchIntakeAction);
const under19LaunchIntakeForm = new FormData();
under19LaunchIntakeForm.set("customer", "Verifier Guarded Prospect");
under19LaunchIntakeForm.set("ageBand", "under-19");
under19LaunchIntakeForm.set("materialStatus", "diagnostic");
under19LaunchIntakeForm.set("summary", "Request guarded launch offer path.");
const under19LaunchIntakeAction = createOfferLaunchIntakeActionForReceipt(dynamicLaunchReceipt, under19LaunchIntakeForm);
const unsafeLaunchIntakeAction = createOfferLaunchIntakeActionForReceipt({ ...dynamicLaunchReceipt, customerSafe: false }, launchIntakeForm);
if (unsafeLaunchIntakeAction !== null) fail("offer launch intake action must reject unsafe launch readiness receipts");
if (!dynamicLaunchIntakeAction || dynamicLaunchIntakeAction.customerVisible !== false || dynamicLaunchIntakeAction.webportalExportReady !== false || dynamicLaunchIntakeAction.customerSafeForReceipt !== true || dynamicLaunchIntakeAction.appOwnedIntakeState !== true || dynamicLaunchIntakeAction.compatibilityGateRequired !== false || dynamicLaunchIntakeAction.epochTimingProviderOnly !== true || dynamicLaunchIntakeAction.workshopCalendarOwnership !== false || dynamicLaunchIntakeAction.monitorWorkflowExposed !== false || dynamicLaunchIntakeAction.paymentLiveEnabled !== false || dynamicLaunchIntakeAction.providerGoLiveRequested !== false || dynamicLaunchIntakeAction.liveProviderEnabled !== false || dynamicLaunchIntakeAction.aiForwardCopy !== false || dynamicLaunchIntakeAction.japanCopyMode !== "ai-neutral" || dynamicLaunchIntakeAction.nativeExecutionReady !== true) fail("dynamic offer launch intake action missing App-owned safe intake gates");
if (!under19LaunchIntakeAction || under19LaunchIntakeAction.compatibilityGateRequired !== true || under19LaunchIntakeAction.status !== "offer-launch-intake-fit-review") fail("under-19 launch offer intake must require compatibility fit review");
if (!dynamicLaunchIntakeReceipt || dynamicLaunchIntakeReceipt.customerVisible !== true || dynamicLaunchIntakeReceipt.webportalExportReady !== true || dynamicLaunchIntakeReceipt.customerSafe !== true || dynamicLaunchIntakeReceipt.customerVisibleReceiptReady !== true || dynamicLaunchIntakeReceipt.appOwnedIntakeState !== true || dynamicLaunchIntakeReceipt.compatibilityGateRequired !== false || dynamicLaunchIntakeReceipt.epochTimingProviderOnly !== true || dynamicLaunchIntakeReceipt.workshopCalendarOwnership !== false || dynamicLaunchIntakeReceipt.monitorWorkflowExposed !== false || dynamicLaunchIntakeReceipt.paymentLiveEnabled !== false || dynamicLaunchIntakeReceipt.providerGoLiveRequested !== false || dynamicLaunchIntakeReceipt.liveProviderEnabled !== false || dynamicLaunchIntakeReceipt.aiForwardCopy !== false || dynamicLaunchIntakeReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchIntakeReceipt.nativeExecutionReady !== true || dynamicLaunchIntakeReceipt.sourceReceiptId || dynamicLaunchIntakeReceipt.launchPriorityScore || dynamicLaunchIntakeReceipt.operatorNextAction || dynamicLaunchIntakeReceipt.marketingChannelExperimentId || dynamicLaunchIntakeReceipt.offerExperimentId) fail("dynamic launch offer intake receipt leaks internal launch state or is not customer-safe");
const seededLaunchActivation = initialWorkshopLedger.offerLaunchActivations?.find((item) => item.id === "launch-activation-submission-001");
const seededLaunchActivationReceipt = initialWorkshopLedger.offerLaunchActivationReceipts?.find((item) => item.id === "launch-activation-receipt-submission-001");
if (!seededLaunchActivation || seededLaunchActivation.kind !== "offer-launch-activation" || seededLaunchActivation.status !== "offer-launch-activation-ready" || seededLaunchActivation.customerVisible !== false || seededLaunchActivation.webportalExportReady !== false || seededLaunchActivation.customerSafeForReceipt !== true || seededLaunchActivation.appOwnedActivationState !== true || seededLaunchActivation.appOwnedIntakeState !== true || seededLaunchActivation.activationReady !== true || seededLaunchActivation.compatibilityGateRequired !== false || seededLaunchActivation.epochTimingProviderOnly !== true || seededLaunchActivation.workshopCalendarOwnership !== false || seededLaunchActivation.monitorWorkflowExposed !== false || seededLaunchActivation.paymentLiveEnabled !== false || seededLaunchActivation.providerGoLiveRequested !== false || seededLaunchActivation.liveProviderEnabled !== false || seededLaunchActivation.aiForwardCopy !== false || seededLaunchActivation.japanCopyMode !== "ai-neutral" || seededLaunchActivation.nativeExecutionReady !== true || !seededLaunchActivation.intakeReceiptId || !seededLaunchActivation.operatorNextAction.includes("inside WORKSHOP")) fail("seeded WORKSHOP ledger missing App-owned offer launch activation record");
if (!seededLaunchActivationReceipt || seededLaunchActivationReceipt.kind !== "offer-launch-activation" || seededLaunchActivationReceipt.status !== "customer-safe-offer-launch-activation-ready" || seededLaunchActivationReceipt.customerVisible !== true || seededLaunchActivationReceipt.webportalExportReady !== true || seededLaunchActivationReceipt.customerSafe !== true || seededLaunchActivationReceipt.customerVisibleReceiptReady !== true || seededLaunchActivationReceipt.appOwnedActivationState !== true || seededLaunchActivationReceipt.appOwnedIntakeState !== true || seededLaunchActivationReceipt.activationReady !== true || seededLaunchActivationReceipt.compatibilityGateRequired !== false || seededLaunchActivationReceipt.epochTimingProviderOnly !== true || seededLaunchActivationReceipt.workshopCalendarOwnership !== false || seededLaunchActivationReceipt.monitorWorkflowExposed !== false || seededLaunchActivationReceipt.paymentLiveEnabled !== false || seededLaunchActivationReceipt.providerGoLiveRequested !== false || seededLaunchActivationReceipt.liveProviderEnabled !== false || seededLaunchActivationReceipt.aiForwardCopy !== false || seededLaunchActivationReceipt.japanCopyMode !== "ai-neutral" || seededLaunchActivationReceipt.nativeExecutionReady !== true || !seededLaunchActivationReceipt.nextAction.includes("WORKSHOP will prepare service setup")) fail("seeded WORKSHOP ledger missing customer-safe offer launch activation receipt");
if (seededLaunchActivationReceipt?.intakeReceiptId || seededLaunchActivationReceipt?.activationId || seededLaunchActivationReceipt?.sourceReceiptId || seededLaunchActivationReceipt?.launchReadinessId || seededLaunchActivationReceipt?.offerExperimentId || seededLaunchActivationReceipt?.marketingChannelExperimentId || seededLaunchActivationReceipt?.operatorNextAction || seededLaunchActivationReceipt?.cashSpeedScore || seededLaunchActivationReceipt?.laborLeverageScore || seededLaunchActivationReceipt?.proofReadinessScore || seededLaunchActivationReceipt?.marketDemandScore || seededLaunchActivationReceipt?.launchPriorityScore) fail("launch offer activation receipt must not expose intake provenance, activation ids, internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchActivation = createOfferLaunchActivationForIntakeReceipt(dynamicLaunchIntakeReceipt);
const dynamicLaunchActivationReceipt = createOfferLaunchActivationReceiptForActivation(dynamicLaunchActivation);
const unsafeLaunchActivation = createOfferLaunchActivationForIntakeReceipt({ ...dynamicLaunchIntakeReceipt, paymentLiveEnabled: true });
const unsafeLaunchActivationReceipt = createOfferLaunchActivationReceiptForActivation({ ...dynamicLaunchActivation, providerGoLiveRequested: true });
if (unsafeLaunchActivation !== null) fail("offer launch activation must reject unsafe launch intake receipts");
if (unsafeLaunchActivationReceipt !== null) fail("offer launch activation receipt must reject provider/live-control activation state");
if (!dynamicLaunchActivation || dynamicLaunchActivation.customerVisible !== false || dynamicLaunchActivation.webportalExportReady !== false || dynamicLaunchActivation.customerSafeForReceipt !== true || dynamicLaunchActivation.appOwnedActivationState !== true || dynamicLaunchActivation.appOwnedIntakeState !== true || dynamicLaunchActivation.activationReady !== true || dynamicLaunchActivation.compatibilityGateRequired !== false || dynamicLaunchActivation.epochTimingProviderOnly !== true || dynamicLaunchActivation.workshopCalendarOwnership !== false || dynamicLaunchActivation.monitorWorkflowExposed !== false || dynamicLaunchActivation.paymentLiveEnabled !== false || dynamicLaunchActivation.providerGoLiveRequested !== false || dynamicLaunchActivation.liveProviderEnabled !== false || dynamicLaunchActivation.aiForwardCopy !== false || dynamicLaunchActivation.japanCopyMode !== "ai-neutral" || dynamicLaunchActivation.nativeExecutionReady !== true || !dynamicLaunchActivation.intakeReceiptId || !dynamicLaunchActivation.operatorNextAction.includes("inside WORKSHOP")) fail("dynamic offer launch activation missing App-owned safe activation gates");
if (!dynamicLaunchActivationReceipt || dynamicLaunchActivationReceipt.customerVisible !== true || dynamicLaunchActivationReceipt.webportalExportReady !== true || dynamicLaunchActivationReceipt.customerSafe !== true || dynamicLaunchActivationReceipt.customerVisibleReceiptReady !== true || dynamicLaunchActivationReceipt.appOwnedActivationState !== true || dynamicLaunchActivationReceipt.appOwnedIntakeState !== true || dynamicLaunchActivationReceipt.activationReady !== true || dynamicLaunchActivationReceipt.compatibilityGateRequired !== false || dynamicLaunchActivationReceipt.epochTimingProviderOnly !== true || dynamicLaunchActivationReceipt.workshopCalendarOwnership !== false || dynamicLaunchActivationReceipt.monitorWorkflowExposed !== false || dynamicLaunchActivationReceipt.paymentLiveEnabled !== false || dynamicLaunchActivationReceipt.providerGoLiveRequested !== false || dynamicLaunchActivationReceipt.liveProviderEnabled !== false || dynamicLaunchActivationReceipt.aiForwardCopy !== false || dynamicLaunchActivationReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchActivationReceipt.nativeExecutionReady !== true || dynamicLaunchActivationReceipt.intakeReceiptId || dynamicLaunchActivationReceipt.activationId || dynamicLaunchActivationReceipt.operatorNextAction || dynamicLaunchActivationReceipt.launchPriorityScore || dynamicLaunchActivationReceipt.marketingChannelExperimentId || dynamicLaunchActivationReceipt.offerExperimentId) fail("dynamic launch offer activation receipt leaks internal launch state or is not customer-safe");
const seededLaunchServiceSetup = initialWorkshopLedger.offerLaunchServiceSetups?.find((item) => item.id === "launch-service-setup-submission-001");
const seededLaunchServiceSetupReceipt = initialWorkshopLedger.offerLaunchServiceSetupReceipts?.find((item) => item.id === "launch-service-setup-receipt-submission-001");
if (!seededLaunchServiceSetup || seededLaunchServiceSetup.kind !== "offer-launch-service-setup" || seededLaunchServiceSetup.status !== "offer-launch-service-setup-ready" || seededLaunchServiceSetup.customerVisible !== false || seededLaunchServiceSetup.webportalExportReady !== false || seededLaunchServiceSetup.customerSafeForReceipt !== true || seededLaunchServiceSetup.appOwnedSetupState !== true || seededLaunchServiceSetup.appOwnedActivationState !== true || seededLaunchServiceSetup.setupReady !== true || seededLaunchServiceSetup.activationReady !== true || seededLaunchServiceSetup.compatibilityGateRequired !== false || seededLaunchServiceSetup.epochTimingProviderOnly !== true || seededLaunchServiceSetup.workshopCalendarOwnership !== false || seededLaunchServiceSetup.monitorWorkflowExposed !== false || seededLaunchServiceSetup.paymentLiveEnabled !== false || seededLaunchServiceSetup.providerGoLiveRequested !== false || seededLaunchServiceSetup.liveProviderEnabled !== false || seededLaunchServiceSetup.aiForwardCopy !== false || seededLaunchServiceSetup.japanCopyMode !== "ai-neutral" || seededLaunchServiceSetup.nativeExecutionReady !== true || !seededLaunchServiceSetup.activationReceiptId || !seededLaunchServiceSetup.operatorNextAction.includes("customer-safe setup receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch service setup record");
if (!seededLaunchServiceSetupReceipt || seededLaunchServiceSetupReceipt.kind !== "offer-launch-service-setup" || seededLaunchServiceSetupReceipt.status !== "customer-safe-offer-launch-service-setup-ready" || seededLaunchServiceSetupReceipt.customerVisible !== true || seededLaunchServiceSetupReceipt.webportalExportReady !== true || seededLaunchServiceSetupReceipt.customerSafe !== true || seededLaunchServiceSetupReceipt.customerVisibleReceiptReady !== true || seededLaunchServiceSetupReceipt.appOwnedSetupState !== true || seededLaunchServiceSetupReceipt.appOwnedActivationState !== true || seededLaunchServiceSetupReceipt.setupReady !== true || seededLaunchServiceSetupReceipt.activationReady !== true || seededLaunchServiceSetupReceipt.compatibilityGateRequired !== false || seededLaunchServiceSetupReceipt.epochTimingProviderOnly !== true || seededLaunchServiceSetupReceipt.workshopCalendarOwnership !== false || seededLaunchServiceSetupReceipt.monitorWorkflowExposed !== false || seededLaunchServiceSetupReceipt.paymentLiveEnabled !== false || seededLaunchServiceSetupReceipt.providerGoLiveRequested !== false || seededLaunchServiceSetupReceipt.liveProviderEnabled !== false || seededLaunchServiceSetupReceipt.aiForwardCopy !== false || seededLaunchServiceSetupReceipt.japanCopyMode !== "ai-neutral" || seededLaunchServiceSetupReceipt.nativeExecutionReady !== true || !seededLaunchServiceSetupReceipt.nextAction.includes("WORKSHOP will continue delivery setup")) fail("seeded WORKSHOP ledger missing customer-safe offer launch service setup receipt");
if (seededLaunchServiceSetupReceipt?.activationReceiptId || seededLaunchServiceSetupReceipt?.setupId || seededLaunchServiceSetupReceipt?.activationId || seededLaunchServiceSetupReceipt?.sourceReceiptId || seededLaunchServiceSetupReceipt?.intakeReceiptId || seededLaunchServiceSetupReceipt?.launchReadinessId || seededLaunchServiceSetupReceipt?.offerExperimentId || seededLaunchServiceSetupReceipt?.marketingChannelExperimentId || seededLaunchServiceSetupReceipt?.operatorNextAction || seededLaunchServiceSetupReceipt?.cashSpeedScore || seededLaunchServiceSetupReceipt?.laborLeverageScore || seededLaunchServiceSetupReceipt?.proofReadinessScore || seededLaunchServiceSetupReceipt?.marketDemandScore || seededLaunchServiceSetupReceipt?.launchPriorityScore) fail("launch offer service setup receipt must not expose setup ids, activation provenance, internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchServiceSetup = createOfferLaunchServiceSetupForActivationReceipt(dynamicLaunchActivationReceipt);
const dynamicLaunchServiceSetupReceipt = createOfferLaunchServiceSetupReceiptForSetup(dynamicLaunchServiceSetup);
const unsafeLaunchServiceSetup = createOfferLaunchServiceSetupForActivationReceipt({ ...dynamicLaunchActivationReceipt, paymentLiveEnabled: true });
const unsafeLaunchServiceSetupReceipt = createOfferLaunchServiceSetupReceiptForSetup({ ...dynamicLaunchServiceSetup, providerGoLiveRequested: true });
if (unsafeLaunchServiceSetup !== null) fail("offer launch service setup must reject unsafe activation receipts");
if (unsafeLaunchServiceSetupReceipt !== null) fail("offer launch service setup receipt must reject provider/live-control setup state");
if (!dynamicLaunchServiceSetup || dynamicLaunchServiceSetup.customerVisible !== false || dynamicLaunchServiceSetup.webportalExportReady !== false || dynamicLaunchServiceSetup.customerSafeForReceipt !== true || dynamicLaunchServiceSetup.appOwnedSetupState !== true || dynamicLaunchServiceSetup.appOwnedActivationState !== true || dynamicLaunchServiceSetup.setupReady !== true || dynamicLaunchServiceSetup.activationReady !== true || dynamicLaunchServiceSetup.compatibilityGateRequired !== false || dynamicLaunchServiceSetup.epochTimingProviderOnly !== true || dynamicLaunchServiceSetup.workshopCalendarOwnership !== false || dynamicLaunchServiceSetup.monitorWorkflowExposed !== false || dynamicLaunchServiceSetup.paymentLiveEnabled !== false || dynamicLaunchServiceSetup.providerGoLiveRequested !== false || dynamicLaunchServiceSetup.liveProviderEnabled !== false || dynamicLaunchServiceSetup.aiForwardCopy !== false || dynamicLaunchServiceSetup.japanCopyMode !== "ai-neutral" || dynamicLaunchServiceSetup.nativeExecutionReady !== true || !dynamicLaunchServiceSetup.activationReceiptId || !dynamicLaunchServiceSetup.operatorNextAction.includes("customer-safe setup receipt")) fail("dynamic offer launch service setup missing App-owned safe setup gates");
if (!dynamicLaunchServiceSetupReceipt || dynamicLaunchServiceSetupReceipt.customerVisible !== true || dynamicLaunchServiceSetupReceipt.webportalExportReady !== true || dynamicLaunchServiceSetupReceipt.customerSafe !== true || dynamicLaunchServiceSetupReceipt.customerVisibleReceiptReady !== true || dynamicLaunchServiceSetupReceipt.appOwnedSetupState !== true || dynamicLaunchServiceSetupReceipt.appOwnedActivationState !== true || dynamicLaunchServiceSetupReceipt.setupReady !== true || dynamicLaunchServiceSetupReceipt.activationReady !== true || dynamicLaunchServiceSetupReceipt.compatibilityGateRequired !== false || dynamicLaunchServiceSetupReceipt.epochTimingProviderOnly !== true || dynamicLaunchServiceSetupReceipt.workshopCalendarOwnership !== false || dynamicLaunchServiceSetupReceipt.monitorWorkflowExposed !== false || dynamicLaunchServiceSetupReceipt.paymentLiveEnabled !== false || dynamicLaunchServiceSetupReceipt.providerGoLiveRequested !== false || dynamicLaunchServiceSetupReceipt.liveProviderEnabled !== false || dynamicLaunchServiceSetupReceipt.aiForwardCopy !== false || dynamicLaunchServiceSetupReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchServiceSetupReceipt.nativeExecutionReady !== true || dynamicLaunchServiceSetupReceipt.activationReceiptId || dynamicLaunchServiceSetupReceipt.setupId || dynamicLaunchServiceSetupReceipt.activationId || dynamicLaunchServiceSetupReceipt.operatorNextAction || dynamicLaunchServiceSetupReceipt.launchPriorityScore || dynamicLaunchServiceSetupReceipt.marketingChannelExperimentId || dynamicLaunchServiceSetupReceipt.offerExperimentId) fail("dynamic launch offer service setup receipt leaks internal setup/activation state or is not customer-safe");
const seededLaunchDeliveryWorkspace = initialWorkshopLedger.offerLaunchDeliveryWorkspaces?.find((item) => item.id === "launch-delivery-workspace-submission-001");
const seededLaunchDeliveryWorkspaceReceipt = initialWorkshopLedger.offerLaunchDeliveryWorkspaceReceipts?.find((item) => item.id === "launch-delivery-workspace-receipt-submission-001");
if (!seededLaunchDeliveryWorkspace || seededLaunchDeliveryWorkspace.kind !== "offer-launch-delivery-workspace" || seededLaunchDeliveryWorkspace.status !== "offer-launch-delivery-workspace-ready" || seededLaunchDeliveryWorkspace.customerVisible !== false || seededLaunchDeliveryWorkspace.webportalExportReady !== false || seededLaunchDeliveryWorkspace.customerSafeForReceipt !== true || seededLaunchDeliveryWorkspace.appOwnedWorkspaceState !== true || seededLaunchDeliveryWorkspace.appOwnedSetupState !== true || seededLaunchDeliveryWorkspace.workspaceReady !== true || seededLaunchDeliveryWorkspace.setupReady !== true || seededLaunchDeliveryWorkspace.compatibilityGateRequired !== false || seededLaunchDeliveryWorkspace.epochTimingProviderOnly !== true || seededLaunchDeliveryWorkspace.workshopCalendarOwnership !== false || seededLaunchDeliveryWorkspace.monitorWorkflowExposed !== false || seededLaunchDeliveryWorkspace.paymentLiveEnabled !== false || seededLaunchDeliveryWorkspace.providerGoLiveRequested !== false || seededLaunchDeliveryWorkspace.liveProviderEnabled !== false || seededLaunchDeliveryWorkspace.aiForwardCopy !== false || seededLaunchDeliveryWorkspace.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryWorkspace.nativeExecutionReady !== true || !seededLaunchDeliveryWorkspace.setupReceiptId || !seededLaunchDeliveryWorkspace.operatorNextAction.includes("customer-safe workspace receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery workspace record");
if (!seededLaunchDeliveryWorkspaceReceipt || seededLaunchDeliveryWorkspaceReceipt.kind !== "offer-launch-delivery-workspace" || seededLaunchDeliveryWorkspaceReceipt.status !== "customer-safe-offer-launch-delivery-workspace-ready" || seededLaunchDeliveryWorkspaceReceipt.customerVisible !== true || seededLaunchDeliveryWorkspaceReceipt.webportalExportReady !== true || seededLaunchDeliveryWorkspaceReceipt.customerSafe !== true || seededLaunchDeliveryWorkspaceReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryWorkspaceReceipt.appOwnedWorkspaceState !== true || seededLaunchDeliveryWorkspaceReceipt.appOwnedSetupState !== true || seededLaunchDeliveryWorkspaceReceipt.workspaceReady !== true || seededLaunchDeliveryWorkspaceReceipt.setupReady !== true || seededLaunchDeliveryWorkspaceReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryWorkspaceReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryWorkspaceReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryWorkspaceReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryWorkspaceReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryWorkspaceReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryWorkspaceReceipt.liveProviderEnabled !== false || seededLaunchDeliveryWorkspaceReceipt.aiForwardCopy !== false || seededLaunchDeliveryWorkspaceReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryWorkspaceReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryWorkspaceReceipt.nextAction.includes("prepared workspace")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery workspace receipt");
if (seededLaunchDeliveryWorkspaceReceipt?.setupReceiptId || seededLaunchDeliveryWorkspaceReceipt?.workspaceId || seededLaunchDeliveryWorkspaceReceipt?.setupId || seededLaunchDeliveryWorkspaceReceipt?.activationReceiptId || seededLaunchDeliveryWorkspaceReceipt?.activationId || seededLaunchDeliveryWorkspaceReceipt?.sourceReceiptId || seededLaunchDeliveryWorkspaceReceipt?.intakeReceiptId || seededLaunchDeliveryWorkspaceReceipt?.launchReadinessId || seededLaunchDeliveryWorkspaceReceipt?.offerExperimentId || seededLaunchDeliveryWorkspaceReceipt?.marketingChannelExperimentId || seededLaunchDeliveryWorkspaceReceipt?.operatorNextAction || seededLaunchDeliveryWorkspaceReceipt?.cashSpeedScore || seededLaunchDeliveryWorkspaceReceipt?.laborLeverageScore || seededLaunchDeliveryWorkspaceReceipt?.proofReadinessScore || seededLaunchDeliveryWorkspaceReceipt?.marketDemandScore || seededLaunchDeliveryWorkspaceReceipt?.launchPriorityScore) fail("launch offer delivery workspace receipt must not expose workspace ids, setup provenance, internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchDeliveryWorkspace = createOfferLaunchDeliveryWorkspaceForSetupReceipt(dynamicLaunchServiceSetupReceipt);
const dynamicLaunchDeliveryWorkspaceReceipt = createOfferLaunchDeliveryWorkspaceReceiptForWorkspace(dynamicLaunchDeliveryWorkspace);
const unsafeLaunchDeliveryWorkspace = createOfferLaunchDeliveryWorkspaceForSetupReceipt({ ...dynamicLaunchServiceSetupReceipt, paymentLiveEnabled: true });
const unsafeLaunchDeliveryWorkspaceReceipt = createOfferLaunchDeliveryWorkspaceReceiptForWorkspace({ ...dynamicLaunchDeliveryWorkspace, providerGoLiveRequested: true });
if (unsafeLaunchDeliveryWorkspace !== null) fail("offer launch delivery workspace must reject unsafe service setup receipts");
if (unsafeLaunchDeliveryWorkspaceReceipt !== null) fail("offer launch delivery workspace receipt must reject provider/live-control workspace state");
if (!dynamicLaunchDeliveryWorkspace || dynamicLaunchDeliveryWorkspace.customerVisible !== false || dynamicLaunchDeliveryWorkspace.webportalExportReady !== false || dynamicLaunchDeliveryWorkspace.customerSafeForReceipt !== true || dynamicLaunchDeliveryWorkspace.appOwnedWorkspaceState !== true || dynamicLaunchDeliveryWorkspace.appOwnedSetupState !== true || dynamicLaunchDeliveryWorkspace.workspaceReady !== true || dynamicLaunchDeliveryWorkspace.setupReady !== true || dynamicLaunchDeliveryWorkspace.compatibilityGateRequired !== false || dynamicLaunchDeliveryWorkspace.epochTimingProviderOnly !== true || dynamicLaunchDeliveryWorkspace.workshopCalendarOwnership !== false || dynamicLaunchDeliveryWorkspace.monitorWorkflowExposed !== false || dynamicLaunchDeliveryWorkspace.paymentLiveEnabled !== false || dynamicLaunchDeliveryWorkspace.providerGoLiveRequested !== false || dynamicLaunchDeliveryWorkspace.liveProviderEnabled !== false || dynamicLaunchDeliveryWorkspace.aiForwardCopy !== false || dynamicLaunchDeliveryWorkspace.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryWorkspace.nativeExecutionReady !== true || !dynamicLaunchDeliveryWorkspace.setupReceiptId || !dynamicLaunchDeliveryWorkspace.operatorNextAction.includes("customer-safe workspace receipt")) fail("dynamic offer launch delivery workspace missing App-owned safe workspace gates");
if (!dynamicLaunchDeliveryWorkspaceReceipt || dynamicLaunchDeliveryWorkspaceReceipt.customerVisible !== true || dynamicLaunchDeliveryWorkspaceReceipt.webportalExportReady !== true || dynamicLaunchDeliveryWorkspaceReceipt.customerSafe !== true || dynamicLaunchDeliveryWorkspaceReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryWorkspaceReceipt.appOwnedWorkspaceState !== true || dynamicLaunchDeliveryWorkspaceReceipt.appOwnedSetupState !== true || dynamicLaunchDeliveryWorkspaceReceipt.workspaceReady !== true || dynamicLaunchDeliveryWorkspaceReceipt.setupReady !== true || dynamicLaunchDeliveryWorkspaceReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryWorkspaceReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryWorkspaceReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryWorkspaceReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryWorkspaceReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryWorkspaceReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryWorkspaceReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryWorkspaceReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryWorkspaceReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryWorkspaceReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryWorkspaceReceipt.setupReceiptId || dynamicLaunchDeliveryWorkspaceReceipt.workspaceId || dynamicLaunchDeliveryWorkspaceReceipt.setupId || dynamicLaunchDeliveryWorkspaceReceipt.operatorNextAction || dynamicLaunchDeliveryWorkspaceReceipt.launchPriorityScore || dynamicLaunchDeliveryWorkspaceReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryWorkspaceReceipt.offerExperimentId) fail("dynamic launch offer delivery workspace receipt leaks internal workspace/setup state or is not customer-safe");
const seededLaunchDeliveryKickoff = initialWorkshopLedger.offerLaunchDeliveryKickoffs?.find((item) => item.id === "launch-delivery-kickoff-submission-001");
const seededLaunchDeliveryKickoffReceipt = initialWorkshopLedger.offerLaunchDeliveryKickoffReceipts?.find((item) => item.id === "launch-delivery-kickoff-receipt-submission-001");
if (!seededLaunchDeliveryKickoff || seededLaunchDeliveryKickoff.kind !== "offer-launch-delivery-kickoff" || seededLaunchDeliveryKickoff.status !== "offer-launch-delivery-kickoff-ready" || seededLaunchDeliveryKickoff.customerVisible !== false || seededLaunchDeliveryKickoff.webportalExportReady !== false || seededLaunchDeliveryKickoff.customerSafeForReceipt !== true || seededLaunchDeliveryKickoff.appOwnedKickoffState !== true || seededLaunchDeliveryKickoff.appOwnedWorkspaceState !== true || seededLaunchDeliveryKickoff.kickoffReady !== true || seededLaunchDeliveryKickoff.workspaceReady !== true || seededLaunchDeliveryKickoff.compatibilityGateRequired !== false || seededLaunchDeliveryKickoff.epochTimingProviderOnly !== true || seededLaunchDeliveryKickoff.workshopCalendarOwnership !== false || seededLaunchDeliveryKickoff.monitorWorkflowExposed !== false || seededLaunchDeliveryKickoff.paymentLiveEnabled !== false || seededLaunchDeliveryKickoff.providerGoLiveRequested !== false || seededLaunchDeliveryKickoff.liveProviderEnabled !== false || seededLaunchDeliveryKickoff.aiForwardCopy !== false || seededLaunchDeliveryKickoff.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryKickoff.nativeExecutionReady !== true || !seededLaunchDeliveryKickoff.workspaceReceiptId || !seededLaunchDeliveryKickoff.operatorNextAction.includes("customer-safe kickoff receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery kickoff record");
if (!seededLaunchDeliveryKickoffReceipt || seededLaunchDeliveryKickoffReceipt.kind !== "offer-launch-delivery-kickoff" || seededLaunchDeliveryKickoffReceipt.status !== "customer-safe-offer-launch-delivery-kickoff-ready" || seededLaunchDeliveryKickoffReceipt.customerVisible !== true || seededLaunchDeliveryKickoffReceipt.webportalExportReady !== true || seededLaunchDeliveryKickoffReceipt.customerSafe !== true || seededLaunchDeliveryKickoffReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryKickoffReceipt.appOwnedKickoffState !== true || seededLaunchDeliveryKickoffReceipt.appOwnedWorkspaceState !== true || seededLaunchDeliveryKickoffReceipt.kickoffReady !== true || seededLaunchDeliveryKickoffReceipt.workspaceReady !== true || seededLaunchDeliveryKickoffReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryKickoffReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryKickoffReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryKickoffReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryKickoffReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryKickoffReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryKickoffReceipt.liveProviderEnabled !== false || seededLaunchDeliveryKickoffReceipt.aiForwardCopy !== false || seededLaunchDeliveryKickoffReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryKickoffReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryKickoffReceipt.nextAction.includes("first delivery milestone")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery kickoff receipt");
if (seededLaunchDeliveryKickoffReceipt?.workspaceReceiptId || seededLaunchDeliveryKickoffReceipt?.kickoffId || seededLaunchDeliveryKickoffReceipt?.workspaceId || seededLaunchDeliveryKickoffReceipt?.setupReceiptId || seededLaunchDeliveryKickoffReceipt?.setupId || seededLaunchDeliveryKickoffReceipt?.activationReceiptId || seededLaunchDeliveryKickoffReceipt?.activationId || seededLaunchDeliveryKickoffReceipt?.sourceReceiptId || seededLaunchDeliveryKickoffReceipt?.intakeReceiptId || seededLaunchDeliveryKickoffReceipt?.launchReadinessId || seededLaunchDeliveryKickoffReceipt?.offerExperimentId || seededLaunchDeliveryKickoffReceipt?.marketingChannelExperimentId || seededLaunchDeliveryKickoffReceipt?.operatorNextAction || seededLaunchDeliveryKickoffReceipt?.cashSpeedScore || seededLaunchDeliveryKickoffReceipt?.laborLeverageScore || seededLaunchDeliveryKickoffReceipt?.proofReadinessScore || seededLaunchDeliveryKickoffReceipt?.marketDemandScore || seededLaunchDeliveryKickoffReceipt?.launchPriorityScore) fail("launch offer delivery kickoff receipt must not expose workspace ids, kickoff ids, internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchDeliveryKickoff = createOfferLaunchDeliveryKickoffForWorkspaceReceipt(dynamicLaunchDeliveryWorkspaceReceipt);
const dynamicLaunchDeliveryKickoffReceipt = createOfferLaunchDeliveryKickoffReceiptForKickoff(dynamicLaunchDeliveryKickoff);
const unsafeLaunchDeliveryKickoff = createOfferLaunchDeliveryKickoffForWorkspaceReceipt({ ...dynamicLaunchDeliveryWorkspaceReceipt, paymentLiveEnabled: true });
const unsafeLaunchDeliveryKickoffReceipt = createOfferLaunchDeliveryKickoffReceiptForKickoff({ ...dynamicLaunchDeliveryKickoff, webportalExportReady: true });
if (unsafeLaunchDeliveryKickoff !== null) fail("offer launch delivery kickoff must reject unsafe delivery workspace receipts");
if (unsafeLaunchDeliveryKickoffReceipt !== null) fail("offer launch delivery kickoff receipt must reject internal/export-ready kickoff state");
if (!dynamicLaunchDeliveryKickoff || dynamicLaunchDeliveryKickoff.customerVisible !== false || dynamicLaunchDeliveryKickoff.webportalExportReady !== false || dynamicLaunchDeliveryKickoff.customerSafeForReceipt !== true || dynamicLaunchDeliveryKickoff.appOwnedKickoffState !== true || dynamicLaunchDeliveryKickoff.appOwnedWorkspaceState !== true || dynamicLaunchDeliveryKickoff.kickoffReady !== true || dynamicLaunchDeliveryKickoff.workspaceReady !== true || dynamicLaunchDeliveryKickoff.compatibilityGateRequired !== false || dynamicLaunchDeliveryKickoff.epochTimingProviderOnly !== true || dynamicLaunchDeliveryKickoff.workshopCalendarOwnership !== false || dynamicLaunchDeliveryKickoff.monitorWorkflowExposed !== false || dynamicLaunchDeliveryKickoff.paymentLiveEnabled !== false || dynamicLaunchDeliveryKickoff.providerGoLiveRequested !== false || dynamicLaunchDeliveryKickoff.liveProviderEnabled !== false || dynamicLaunchDeliveryKickoff.aiForwardCopy !== false || dynamicLaunchDeliveryKickoff.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryKickoff.nativeExecutionReady !== true || !dynamicLaunchDeliveryKickoff.workspaceReceiptId || !dynamicLaunchDeliveryKickoff.operatorNextAction.includes("customer-safe kickoff receipt")) fail("dynamic offer launch delivery kickoff missing App-owned safe kickoff gates");
if (!dynamicLaunchDeliveryKickoffReceipt || dynamicLaunchDeliveryKickoffReceipt.customerVisible !== true || dynamicLaunchDeliveryKickoffReceipt.webportalExportReady !== true || dynamicLaunchDeliveryKickoffReceipt.customerSafe !== true || dynamicLaunchDeliveryKickoffReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryKickoffReceipt.appOwnedKickoffState !== true || dynamicLaunchDeliveryKickoffReceipt.appOwnedWorkspaceState !== true || dynamicLaunchDeliveryKickoffReceipt.kickoffReady !== true || dynamicLaunchDeliveryKickoffReceipt.workspaceReady !== true || dynamicLaunchDeliveryKickoffReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryKickoffReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryKickoffReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryKickoffReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryKickoffReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryKickoffReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryKickoffReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryKickoffReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryKickoffReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryKickoffReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryKickoffReceipt.workspaceReceiptId || dynamicLaunchDeliveryKickoffReceipt.kickoffId || dynamicLaunchDeliveryKickoffReceipt.workspaceId || dynamicLaunchDeliveryKickoffReceipt.setupReceiptId || dynamicLaunchDeliveryKickoffReceipt.setupId || dynamicLaunchDeliveryKickoffReceipt.operatorNextAction || dynamicLaunchDeliveryKickoffReceipt.launchPriorityScore || dynamicLaunchDeliveryKickoffReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryKickoffReceipt.offerExperimentId) fail("dynamic launch offer delivery kickoff receipt leaks internal workspace/kickoff state or is not customer-safe");
const seededLaunchDeliveryMilestone = initialWorkshopLedger.offerLaunchDeliveryMilestones?.find((item) => item.id === "launch-delivery-milestone-submission-001");
const seededLaunchDeliveryMilestoneReceipt = initialWorkshopLedger.offerLaunchDeliveryMilestoneReceipts?.find((item) => item.id === "launch-delivery-milestone-receipt-submission-001");
if (!seededLaunchDeliveryMilestone || seededLaunchDeliveryMilestone.kind !== "offer-launch-delivery-milestone" || seededLaunchDeliveryMilestone.status !== "offer-launch-delivery-milestone-active" || seededLaunchDeliveryMilestone.customerVisible !== false || seededLaunchDeliveryMilestone.webportalExportReady !== false || seededLaunchDeliveryMilestone.customerSafeForReceipt !== true || seededLaunchDeliveryMilestone.appOwnedMilestoneState !== true || seededLaunchDeliveryMilestone.appOwnedKickoffState !== true || seededLaunchDeliveryMilestone.milestoneReady !== true || seededLaunchDeliveryMilestone.kickoffReady !== true || seededLaunchDeliveryMilestone.compatibilityGateRequired !== false || seededLaunchDeliveryMilestone.epochTimingProviderOnly !== true || seededLaunchDeliveryMilestone.workshopCalendarOwnership !== false || seededLaunchDeliveryMilestone.monitorWorkflowExposed !== false || seededLaunchDeliveryMilestone.paymentLiveEnabled !== false || seededLaunchDeliveryMilestone.providerGoLiveRequested !== false || seededLaunchDeliveryMilestone.liveProviderEnabled !== false || seededLaunchDeliveryMilestone.aiForwardCopy !== false || seededLaunchDeliveryMilestone.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryMilestone.nativeExecutionReady !== true || !seededLaunchDeliveryMilestone.kickoffReceiptId || !seededLaunchDeliveryMilestone.operatorNextAction.includes("customer-safe milestone receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery milestone record");
if (!seededLaunchDeliveryMilestoneReceipt || seededLaunchDeliveryMilestoneReceipt.kind !== "offer-launch-delivery-milestone" || seededLaunchDeliveryMilestoneReceipt.status !== "customer-safe-offer-launch-delivery-milestone-active" || seededLaunchDeliveryMilestoneReceipt.customerVisible !== true || seededLaunchDeliveryMilestoneReceipt.webportalExportReady !== true || seededLaunchDeliveryMilestoneReceipt.customerSafe !== true || seededLaunchDeliveryMilestoneReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryMilestoneReceipt.appOwnedMilestoneState !== true || seededLaunchDeliveryMilestoneReceipt.appOwnedKickoffState !== true || seededLaunchDeliveryMilestoneReceipt.milestoneReady !== true || seededLaunchDeliveryMilestoneReceipt.kickoffReady !== true || seededLaunchDeliveryMilestoneReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryMilestoneReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryMilestoneReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryMilestoneReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryMilestoneReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryMilestoneReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryMilestoneReceipt.liveProviderEnabled !== false || seededLaunchDeliveryMilestoneReceipt.aiForwardCopy !== false || seededLaunchDeliveryMilestoneReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryMilestoneReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryMilestoneReceipt.nextAction.includes("first milestone")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery milestone receipt");
if (seededLaunchDeliveryMilestoneReceipt?.kickoffReceiptId || seededLaunchDeliveryMilestoneReceipt?.milestoneId || seededLaunchDeliveryMilestoneReceipt?.kickoffId || seededLaunchDeliveryMilestoneReceipt?.workspaceReceiptId || seededLaunchDeliveryMilestoneReceipt?.workspaceId || seededLaunchDeliveryMilestoneReceipt?.setupReceiptId || seededLaunchDeliveryMilestoneReceipt?.setupId || seededLaunchDeliveryMilestoneReceipt?.activationReceiptId || seededLaunchDeliveryMilestoneReceipt?.activationId || seededLaunchDeliveryMilestoneReceipt?.sourceReceiptId || seededLaunchDeliveryMilestoneReceipt?.intakeReceiptId || seededLaunchDeliveryMilestoneReceipt?.launchReadinessId || seededLaunchDeliveryMilestoneReceipt?.offerExperimentId || seededLaunchDeliveryMilestoneReceipt?.marketingChannelExperimentId || seededLaunchDeliveryMilestoneReceipt?.operatorNextAction || seededLaunchDeliveryMilestoneReceipt?.cashSpeedScore || seededLaunchDeliveryMilestoneReceipt?.laborLeverageScore || seededLaunchDeliveryMilestoneReceipt?.proofReadinessScore || seededLaunchDeliveryMilestoneReceipt?.marketDemandScore || seededLaunchDeliveryMilestoneReceipt?.launchPriorityScore) fail("launch offer delivery milestone receipt must not expose kickoff ids, milestone ids, internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchDeliveryMilestone = createOfferLaunchDeliveryMilestoneForKickoffReceipt(dynamicLaunchDeliveryKickoffReceipt);
const dynamicLaunchDeliveryMilestoneReceipt = createOfferLaunchDeliveryMilestoneReceiptForMilestone(dynamicLaunchDeliveryMilestone);
const unsafeLaunchDeliveryMilestone = createOfferLaunchDeliveryMilestoneForKickoffReceipt({ ...dynamicLaunchDeliveryKickoffReceipt, paymentLiveEnabled: true });
const unsafeLaunchDeliveryMilestoneReceipt = createOfferLaunchDeliveryMilestoneReceiptForMilestone({ ...dynamicLaunchDeliveryMilestone, webportalExportReady: true });
if (unsafeLaunchDeliveryMilestone !== null) fail("offer launch delivery milestone must reject unsafe delivery kickoff receipts");
if (unsafeLaunchDeliveryMilestoneReceipt !== null) fail("offer launch delivery milestone receipt must reject internal/export-ready milestone state");
if (!dynamicLaunchDeliveryMilestone || dynamicLaunchDeliveryMilestone.customerVisible !== false || dynamicLaunchDeliveryMilestone.webportalExportReady !== false || dynamicLaunchDeliveryMilestone.customerSafeForReceipt !== true || dynamicLaunchDeliveryMilestone.appOwnedMilestoneState !== true || dynamicLaunchDeliveryMilestone.appOwnedKickoffState !== true || dynamicLaunchDeliveryMilestone.milestoneReady !== true || dynamicLaunchDeliveryMilestone.kickoffReady !== true || dynamicLaunchDeliveryMilestone.compatibilityGateRequired !== false || dynamicLaunchDeliveryMilestone.epochTimingProviderOnly !== true || dynamicLaunchDeliveryMilestone.workshopCalendarOwnership !== false || dynamicLaunchDeliveryMilestone.monitorWorkflowExposed !== false || dynamicLaunchDeliveryMilestone.paymentLiveEnabled !== false || dynamicLaunchDeliveryMilestone.providerGoLiveRequested !== false || dynamicLaunchDeliveryMilestone.liveProviderEnabled !== false || dynamicLaunchDeliveryMilestone.aiForwardCopy !== false || dynamicLaunchDeliveryMilestone.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryMilestone.nativeExecutionReady !== true || !dynamicLaunchDeliveryMilestone.kickoffReceiptId || !dynamicLaunchDeliveryMilestone.operatorNextAction.includes("customer-safe milestone receipt")) fail("dynamic offer launch delivery milestone missing App-owned safe milestone gates");
if (!dynamicLaunchDeliveryMilestoneReceipt || dynamicLaunchDeliveryMilestoneReceipt.customerVisible !== true || dynamicLaunchDeliveryMilestoneReceipt.webportalExportReady !== true || dynamicLaunchDeliveryMilestoneReceipt.customerSafe !== true || dynamicLaunchDeliveryMilestoneReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryMilestoneReceipt.appOwnedMilestoneState !== true || dynamicLaunchDeliveryMilestoneReceipt.appOwnedKickoffState !== true || dynamicLaunchDeliveryMilestoneReceipt.milestoneReady !== true || dynamicLaunchDeliveryMilestoneReceipt.kickoffReady !== true || dynamicLaunchDeliveryMilestoneReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryMilestoneReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryMilestoneReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryMilestoneReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryMilestoneReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryMilestoneReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryMilestoneReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryMilestoneReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryMilestoneReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryMilestoneReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryMilestoneReceipt.kickoffReceiptId || dynamicLaunchDeliveryMilestoneReceipt.milestoneId || dynamicLaunchDeliveryMilestoneReceipt.kickoffId || dynamicLaunchDeliveryMilestoneReceipt.workspaceReceiptId || dynamicLaunchDeliveryMilestoneReceipt.workspaceId || dynamicLaunchDeliveryMilestoneReceipt.operatorNextAction || dynamicLaunchDeliveryMilestoneReceipt.launchPriorityScore || dynamicLaunchDeliveryMilestoneReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryMilestoneReceipt.offerExperimentId) fail("dynamic launch offer delivery milestone receipt leaks internal kickoff/milestone state or is not customer-safe");
const seededLaunchDeliveryOutcome = initialWorkshopLedger.offerLaunchDeliveryOutcomes?.find((item) => item.id === "launch-delivery-outcome-submission-001");
const seededLaunchDeliveryOutcomeReceipt = initialWorkshopLedger.offerLaunchDeliveryOutcomeReceipts?.find((item) => item.id === "launch-delivery-outcome-receipt-submission-001");
if (!seededLaunchDeliveryOutcome || seededLaunchDeliveryOutcome.kind !== "offer-launch-delivery-outcome" || seededLaunchDeliveryOutcome.status !== "offer-launch-delivery-outcome-ready" || seededLaunchDeliveryOutcome.customerVisible !== false || seededLaunchDeliveryOutcome.webportalExportReady !== false || seededLaunchDeliveryOutcome.customerSafeForReceipt !== true || seededLaunchDeliveryOutcome.appOwnedOutcomeState !== true || seededLaunchDeliveryOutcome.appOwnedMilestoneState !== true || seededLaunchDeliveryOutcome.outcomeReady !== true || seededLaunchDeliveryOutcome.milestoneReady !== true || seededLaunchDeliveryOutcome.compatibilityGateRequired !== false || seededLaunchDeliveryOutcome.epochTimingProviderOnly !== true || seededLaunchDeliveryOutcome.workshopCalendarOwnership !== false || seededLaunchDeliveryOutcome.monitorWorkflowExposed !== false || seededLaunchDeliveryOutcome.paymentLiveEnabled !== false || seededLaunchDeliveryOutcome.providerGoLiveRequested !== false || seededLaunchDeliveryOutcome.liveProviderEnabled !== false || seededLaunchDeliveryOutcome.aiForwardCopy !== false || seededLaunchDeliveryOutcome.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryOutcome.nativeExecutionReady !== true || !seededLaunchDeliveryOutcome.milestoneReceiptId || !seededLaunchDeliveryOutcome.operatorNextAction.includes("customer-safe delivery outcome receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery outcome record");
if (!seededLaunchDeliveryOutcomeReceipt || seededLaunchDeliveryOutcomeReceipt.kind !== "offer-launch-delivery-outcome" || seededLaunchDeliveryOutcomeReceipt.status !== "customer-safe-offer-launch-delivery-outcome-ready" || seededLaunchDeliveryOutcomeReceipt.customerVisible !== true || seededLaunchDeliveryOutcomeReceipt.webportalExportReady !== true || seededLaunchDeliveryOutcomeReceipt.customerSafe !== true || seededLaunchDeliveryOutcomeReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryOutcomeReceipt.appOwnedOutcomeState !== true || seededLaunchDeliveryOutcomeReceipt.appOwnedMilestoneState !== true || seededLaunchDeliveryOutcomeReceipt.outcomeReady !== true || seededLaunchDeliveryOutcomeReceipt.milestoneReady !== true || seededLaunchDeliveryOutcomeReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryOutcomeReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryOutcomeReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryOutcomeReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryOutcomeReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryOutcomeReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryOutcomeReceipt.liveProviderEnabled !== false || seededLaunchDeliveryOutcomeReceipt.aiForwardCopy !== false || seededLaunchDeliveryOutcomeReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryOutcomeReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryOutcomeReceipt.nextAction.includes("follow-up or renewal")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery outcome receipt");
if (seededLaunchDeliveryOutcomeReceipt?.milestoneReceiptId || seededLaunchDeliveryOutcomeReceipt?.outcomeId || seededLaunchDeliveryOutcomeReceipt?.milestoneId || seededLaunchDeliveryOutcomeReceipt?.kickoffReceiptId || seededLaunchDeliveryOutcomeReceipt?.kickoffId || seededLaunchDeliveryOutcomeReceipt?.workspaceReceiptId || seededLaunchDeliveryOutcomeReceipt?.workspaceId || seededLaunchDeliveryOutcomeReceipt?.setupReceiptId || seededLaunchDeliveryOutcomeReceipt?.setupId || seededLaunchDeliveryOutcomeReceipt?.activationReceiptId || seededLaunchDeliveryOutcomeReceipt?.activationId || seededLaunchDeliveryOutcomeReceipt?.sourceReceiptId || seededLaunchDeliveryOutcomeReceipt?.intakeReceiptId || seededLaunchDeliveryOutcomeReceipt?.launchReadinessId || seededLaunchDeliveryOutcomeReceipt?.offerExperimentId || seededLaunchDeliveryOutcomeReceipt?.marketingChannelExperimentId || seededLaunchDeliveryOutcomeReceipt?.operatorNextAction || seededLaunchDeliveryOutcomeReceipt?.cashSpeedScore || seededLaunchDeliveryOutcomeReceipt?.laborLeverageScore || seededLaunchDeliveryOutcomeReceipt?.proofReadinessScore || seededLaunchDeliveryOutcomeReceipt?.marketDemandScore || seededLaunchDeliveryOutcomeReceipt?.launchPriorityScore) fail("launch offer delivery outcome receipt must not expose milestone ids, outcome ids, internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchDeliveryOutcome = createOfferLaunchDeliveryOutcomeForMilestoneReceipt(dynamicLaunchDeliveryMilestoneReceipt);
const dynamicLaunchDeliveryOutcomeReceipt = createOfferLaunchDeliveryOutcomeReceiptForOutcome(dynamicLaunchDeliveryOutcome);
const unsafeLaunchDeliveryOutcome = createOfferLaunchDeliveryOutcomeForMilestoneReceipt({ ...dynamicLaunchDeliveryMilestoneReceipt, paymentLiveEnabled: true });
const unsafeLaunchDeliveryOutcomeReceipt = createOfferLaunchDeliveryOutcomeReceiptForOutcome({ ...dynamicLaunchDeliveryOutcome, webportalExportReady: true });
if (unsafeLaunchDeliveryOutcome !== null) fail("offer launch delivery outcome must reject unsafe delivery milestone receipts");
if (unsafeLaunchDeliveryOutcomeReceipt !== null) fail("offer launch delivery outcome receipt must reject internal/export-ready outcome state");
if (!dynamicLaunchDeliveryOutcome || dynamicLaunchDeliveryOutcome.customerVisible !== false || dynamicLaunchDeliveryOutcome.webportalExportReady !== false || dynamicLaunchDeliveryOutcome.customerSafeForReceipt !== true || dynamicLaunchDeliveryOutcome.appOwnedOutcomeState !== true || dynamicLaunchDeliveryOutcome.appOwnedMilestoneState !== true || dynamicLaunchDeliveryOutcome.outcomeReady !== true || dynamicLaunchDeliveryOutcome.milestoneReady !== true || dynamicLaunchDeliveryOutcome.compatibilityGateRequired !== false || dynamicLaunchDeliveryOutcome.epochTimingProviderOnly !== true || dynamicLaunchDeliveryOutcome.workshopCalendarOwnership !== false || dynamicLaunchDeliveryOutcome.monitorWorkflowExposed !== false || dynamicLaunchDeliveryOutcome.paymentLiveEnabled !== false || dynamicLaunchDeliveryOutcome.providerGoLiveRequested !== false || dynamicLaunchDeliveryOutcome.liveProviderEnabled !== false || dynamicLaunchDeliveryOutcome.aiForwardCopy !== false || dynamicLaunchDeliveryOutcome.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryOutcome.nativeExecutionReady !== true || !dynamicLaunchDeliveryOutcome.milestoneReceiptId || !dynamicLaunchDeliveryOutcome.operatorNextAction.includes("customer-safe delivery outcome receipt")) fail("dynamic offer launch delivery outcome missing App-owned safe outcome gates");
if (!dynamicLaunchDeliveryOutcomeReceipt || dynamicLaunchDeliveryOutcomeReceipt.customerVisible !== true || dynamicLaunchDeliveryOutcomeReceipt.webportalExportReady !== true || dynamicLaunchDeliveryOutcomeReceipt.customerSafe !== true || dynamicLaunchDeliveryOutcomeReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryOutcomeReceipt.appOwnedOutcomeState !== true || dynamicLaunchDeliveryOutcomeReceipt.appOwnedMilestoneState !== true || dynamicLaunchDeliveryOutcomeReceipt.outcomeReady !== true || dynamicLaunchDeliveryOutcomeReceipt.milestoneReady !== true || dynamicLaunchDeliveryOutcomeReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryOutcomeReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryOutcomeReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryOutcomeReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryOutcomeReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryOutcomeReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryOutcomeReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryOutcomeReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryOutcomeReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryOutcomeReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryOutcomeReceipt.milestoneReceiptId || dynamicLaunchDeliveryOutcomeReceipt.outcomeId || dynamicLaunchDeliveryOutcomeReceipt.milestoneId || dynamicLaunchDeliveryOutcomeReceipt.kickoffReceiptId || dynamicLaunchDeliveryOutcomeReceipt.kickoffId || dynamicLaunchDeliveryOutcomeReceipt.workspaceReceiptId || dynamicLaunchDeliveryOutcomeReceipt.workspaceId || dynamicLaunchDeliveryOutcomeReceipt.operatorNextAction || dynamicLaunchDeliveryOutcomeReceipt.launchPriorityScore || dynamicLaunchDeliveryOutcomeReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryOutcomeReceipt.offerExperimentId) fail("dynamic launch offer delivery outcome receipt leaks internal milestone/outcome state or is not customer-safe");
const seededLaunchDeliveryFollowUp = initialWorkshopLedger.offerLaunchDeliveryFollowUps?.find((item) => item.id === "launch-delivery-follow-up-submission-001");
const seededLaunchDeliveryFollowUpReceipt = initialWorkshopLedger.offerLaunchDeliveryFollowUpReceipts?.find((item) => item.id === "launch-delivery-follow-up-receipt-submission-001");
if (!seededLaunchDeliveryFollowUp || seededLaunchDeliveryFollowUp.kind !== "offer-launch-delivery-follow-up" || seededLaunchDeliveryFollowUp.status !== "offer-launch-delivery-follow-up-ready" || seededLaunchDeliveryFollowUp.customerVisible !== false || seededLaunchDeliveryFollowUp.webportalExportReady !== false || seededLaunchDeliveryFollowUp.customerSafeForReceipt !== true || seededLaunchDeliveryFollowUp.appOwnedFollowUpState !== true || seededLaunchDeliveryFollowUp.appOwnedOutcomeState !== true || seededLaunchDeliveryFollowUp.followUpReady !== true || seededLaunchDeliveryFollowUp.renewalReady !== true || seededLaunchDeliveryFollowUp.referralReady !== true || seededLaunchDeliveryFollowUp.outcomeReady !== true || seededLaunchDeliveryFollowUp.compatibilityGateRequired !== false || seededLaunchDeliveryFollowUp.epochTimingProviderOnly !== true || seededLaunchDeliveryFollowUp.workshopCalendarOwnership !== false || seededLaunchDeliveryFollowUp.monitorWorkflowExposed !== false || seededLaunchDeliveryFollowUp.paymentLiveEnabled !== false || seededLaunchDeliveryFollowUp.providerGoLiveRequested !== false || seededLaunchDeliveryFollowUp.liveProviderEnabled !== false || seededLaunchDeliveryFollowUp.aiForwardCopy !== false || seededLaunchDeliveryFollowUp.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryFollowUp.nativeExecutionReady !== true || !seededLaunchDeliveryFollowUp.outcomeReceiptId || !seededLaunchDeliveryFollowUp.operatorNextAction.includes("customer-safe delivery follow-up receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery follow-up record");
if (!seededLaunchDeliveryFollowUpReceipt || seededLaunchDeliveryFollowUpReceipt.kind !== "offer-launch-delivery-follow-up" || seededLaunchDeliveryFollowUpReceipt.status !== "customer-safe-offer-launch-delivery-follow-up-ready" || seededLaunchDeliveryFollowUpReceipt.customerVisible !== true || seededLaunchDeliveryFollowUpReceipt.webportalExportReady !== true || seededLaunchDeliveryFollowUpReceipt.customerSafe !== true || seededLaunchDeliveryFollowUpReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryFollowUpReceipt.appOwnedFollowUpState !== true || seededLaunchDeliveryFollowUpReceipt.appOwnedOutcomeState !== true || seededLaunchDeliveryFollowUpReceipt.followUpReady !== true || seededLaunchDeliveryFollowUpReceipt.renewalReady !== true || seededLaunchDeliveryFollowUpReceipt.referralReady !== true || seededLaunchDeliveryFollowUpReceipt.outcomeReady !== true || seededLaunchDeliveryFollowUpReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryFollowUpReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryFollowUpReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryFollowUpReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryFollowUpReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryFollowUpReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryFollowUpReceipt.liveProviderEnabled !== false || seededLaunchDeliveryFollowUpReceipt.aiForwardCopy !== false || seededLaunchDeliveryFollowUpReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryFollowUpReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryFollowUpReceipt.nextAction.includes("renewal or referral")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery follow-up receipt");
if (seededLaunchDeliveryFollowUpReceipt?.outcomeReceiptId || seededLaunchDeliveryFollowUpReceipt?.followUpId || seededLaunchDeliveryFollowUpReceipt?.outcomeId || seededLaunchDeliveryFollowUpReceipt?.milestoneReceiptId || seededLaunchDeliveryFollowUpReceipt?.milestoneId || seededLaunchDeliveryFollowUpReceipt?.kickoffReceiptId || seededLaunchDeliveryFollowUpReceipt?.kickoffId || seededLaunchDeliveryFollowUpReceipt?.workspaceReceiptId || seededLaunchDeliveryFollowUpReceipt?.workspaceId || seededLaunchDeliveryFollowUpReceipt?.setupReceiptId || seededLaunchDeliveryFollowUpReceipt?.setupId || seededLaunchDeliveryFollowUpReceipt?.activationReceiptId || seededLaunchDeliveryFollowUpReceipt?.activationId || seededLaunchDeliveryFollowUpReceipt?.sourceReceiptId || seededLaunchDeliveryFollowUpReceipt?.intakeReceiptId || seededLaunchDeliveryFollowUpReceipt?.launchReadinessId || seededLaunchDeliveryFollowUpReceipt?.offerExperimentId || seededLaunchDeliveryFollowUpReceipt?.marketingChannelExperimentId || seededLaunchDeliveryFollowUpReceipt?.operatorNextAction || seededLaunchDeliveryFollowUpReceipt?.cashSpeedScore || seededLaunchDeliveryFollowUpReceipt?.laborLeverageScore || seededLaunchDeliveryFollowUpReceipt?.proofReadinessScore || seededLaunchDeliveryFollowUpReceipt?.marketDemandScore || seededLaunchDeliveryFollowUpReceipt?.launchPriorityScore) fail("launch offer delivery follow-up receipt must not expose follow-up/outcome ids, internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchDeliveryFollowUp = createOfferLaunchDeliveryFollowUpForOutcomeReceipt(dynamicLaunchDeliveryOutcomeReceipt);
const dynamicLaunchDeliveryFollowUpReceipt = createOfferLaunchDeliveryFollowUpReceiptForFollowUp(dynamicLaunchDeliveryFollowUp);
const unsafeLaunchDeliveryFollowUp = createOfferLaunchDeliveryFollowUpForOutcomeReceipt({ ...dynamicLaunchDeliveryOutcomeReceipt, paymentLiveEnabled: true });
const unsafeLaunchDeliveryFollowUpReceipt = createOfferLaunchDeliveryFollowUpReceiptForFollowUp({ ...dynamicLaunchDeliveryFollowUp, webportalExportReady: true });
if (unsafeLaunchDeliveryFollowUp !== null) fail("offer launch delivery follow-up must reject unsafe delivery outcome receipts");
if (unsafeLaunchDeliveryFollowUpReceipt !== null) fail("offer launch delivery follow-up receipt must reject internal/export-ready follow-up state");
if (!dynamicLaunchDeliveryFollowUp || dynamicLaunchDeliveryFollowUp.customerVisible !== false || dynamicLaunchDeliveryFollowUp.webportalExportReady !== false || dynamicLaunchDeliveryFollowUp.customerSafeForReceipt !== true || dynamicLaunchDeliveryFollowUp.appOwnedFollowUpState !== true || dynamicLaunchDeliveryFollowUp.appOwnedOutcomeState !== true || dynamicLaunchDeliveryFollowUp.followUpReady !== true || dynamicLaunchDeliveryFollowUp.renewalReady !== true || dynamicLaunchDeliveryFollowUp.referralReady !== true || dynamicLaunchDeliveryFollowUp.outcomeReady !== true || dynamicLaunchDeliveryFollowUp.compatibilityGateRequired !== false || dynamicLaunchDeliveryFollowUp.epochTimingProviderOnly !== true || dynamicLaunchDeliveryFollowUp.workshopCalendarOwnership !== false || dynamicLaunchDeliveryFollowUp.monitorWorkflowExposed !== false || dynamicLaunchDeliveryFollowUp.paymentLiveEnabled !== false || dynamicLaunchDeliveryFollowUp.providerGoLiveRequested !== false || dynamicLaunchDeliveryFollowUp.liveProviderEnabled !== false || dynamicLaunchDeliveryFollowUp.aiForwardCopy !== false || dynamicLaunchDeliveryFollowUp.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryFollowUp.nativeExecutionReady !== true || !dynamicLaunchDeliveryFollowUp.outcomeReceiptId || !dynamicLaunchDeliveryFollowUp.operatorNextAction.includes("customer-safe delivery follow-up receipt")) fail("dynamic offer launch delivery follow-up missing App-owned safe follow-up gates");
if (!dynamicLaunchDeliveryFollowUpReceipt || dynamicLaunchDeliveryFollowUpReceipt.customerVisible !== true || dynamicLaunchDeliveryFollowUpReceipt.webportalExportReady !== true || dynamicLaunchDeliveryFollowUpReceipt.customerSafe !== true || dynamicLaunchDeliveryFollowUpReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryFollowUpReceipt.appOwnedFollowUpState !== true || dynamicLaunchDeliveryFollowUpReceipt.appOwnedOutcomeState !== true || dynamicLaunchDeliveryFollowUpReceipt.followUpReady !== true || dynamicLaunchDeliveryFollowUpReceipt.renewalReady !== true || dynamicLaunchDeliveryFollowUpReceipt.referralReady !== true || dynamicLaunchDeliveryFollowUpReceipt.outcomeReady !== true || dynamicLaunchDeliveryFollowUpReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryFollowUpReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryFollowUpReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryFollowUpReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryFollowUpReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryFollowUpReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryFollowUpReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryFollowUpReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryFollowUpReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryFollowUpReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryFollowUpReceipt.outcomeReceiptId || dynamicLaunchDeliveryFollowUpReceipt.followUpId || dynamicLaunchDeliveryFollowUpReceipt.outcomeId || dynamicLaunchDeliveryFollowUpReceipt.milestoneReceiptId || dynamicLaunchDeliveryFollowUpReceipt.milestoneId || dynamicLaunchDeliveryFollowUpReceipt.operatorNextAction || dynamicLaunchDeliveryFollowUpReceipt.launchPriorityScore || dynamicLaunchDeliveryFollowUpReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryFollowUpReceipt.offerExperimentId) fail("dynamic launch offer delivery follow-up receipt leaks internal outcome/follow-up state or is not customer-safe");
const seededLaunchDeliveryGrowthPlan = initialWorkshopLedger.offerLaunchDeliveryGrowthPlans?.find((item) => item.id === "launch-delivery-growth-plan-submission-001");
const seededLaunchDeliveryGrowthPlanReceipt = initialWorkshopLedger.offerLaunchDeliveryGrowthPlanReceipts?.find((item) => item.id === "launch-delivery-growth-plan-receipt-submission-001");
const seededLaunchDeliveryGrowthPlanAcceptance = initialWorkshopLedger.offerLaunchDeliveryGrowthPlanAcceptances?.find((item) => item.id === "launch-delivery-growth-plan-acceptance-submission-001");
const seededLaunchDeliveryGrowthPlanAcceptanceReceipt = initialWorkshopLedger.offerLaunchDeliveryGrowthPlanAcceptanceReceipts?.find((item) => item.id === "launch-delivery-growth-plan-acceptance-receipt-submission-001");
const seededLaunchDeliveryExpansionRequest = initialWorkshopLedger.offerLaunchDeliveryExpansionRequests?.find((item) => item.id === "launch-delivery-expansion-request-submission-001");
const seededLaunchDeliveryExpansionRequestReceipt = initialWorkshopLedger.offerLaunchDeliveryExpansionRequestReceipts?.find((item) => item.id === "launch-delivery-expansion-request-receipt-submission-001");
const seededLaunchDeliveryExpansionWorkspace = initialWorkshopLedger.offerLaunchDeliveryExpansionWorkspaces?.find((item) => item.id === "launch-delivery-expansion-workspace-submission-001");
const seededLaunchDeliveryExpansionWorkspaceReceipt = initialWorkshopLedger.offerLaunchDeliveryExpansionWorkspaceReceipts?.find((item) => item.id === "launch-delivery-expansion-workspace-receipt-submission-001");
const seededLaunchDeliveryExpansionKickoff = initialWorkshopLedger.offerLaunchDeliveryExpansionKickoffs?.find((item) => item.id === "launch-delivery-expansion-kickoff-submission-001");
const seededLaunchDeliveryExpansionKickoffReceipt = initialWorkshopLedger.offerLaunchDeliveryExpansionKickoffReceipts?.find((item) => item.id === "launch-delivery-expansion-kickoff-receipt-submission-001");
const seededLaunchDeliveryExpansionMilestone = initialWorkshopLedger.offerLaunchDeliveryExpansionMilestones?.find((item) => item.id === "launch-delivery-expansion-milestone-submission-001");
const seededLaunchDeliveryExpansionMilestoneReceipt = initialWorkshopLedger.offerLaunchDeliveryExpansionMilestoneReceipts?.find((item) => item.id === "launch-delivery-expansion-milestone-receipt-submission-001");
const seededLaunchDeliveryExpansionOutcome = initialWorkshopLedger.offerLaunchDeliveryExpansionOutcomes?.find((item) => item.id === "launch-delivery-expansion-outcome-submission-001");
const seededLaunchDeliveryExpansionOutcomeReceipt = initialWorkshopLedger.offerLaunchDeliveryExpansionOutcomeReceipts?.find((item) => item.id === "launch-delivery-expansion-outcome-receipt-submission-001");
const seededLaunchDeliveryExpansionFollowUp = initialWorkshopLedger.offerLaunchDeliveryExpansionFollowUps?.find((item) => item.id === "launch-delivery-expansion-follow-up-submission-001");
const seededLaunchDeliveryExpansionFollowUpReceipt = initialWorkshopLedger.offerLaunchDeliveryExpansionFollowUpReceipts?.find((item) => item.id === "launch-delivery-expansion-follow-up-receipt-submission-001");
if (!seededLaunchDeliveryGrowthPlan || seededLaunchDeliveryGrowthPlan.kind !== "offer-launch-delivery-growth-plan" || seededLaunchDeliveryGrowthPlan.status !== "offer-launch-delivery-growth-plan-ready" || seededLaunchDeliveryGrowthPlan.customerVisible !== false || seededLaunchDeliveryGrowthPlan.webportalExportReady !== false || seededLaunchDeliveryGrowthPlan.customerSafeForReceipt !== true || seededLaunchDeliveryGrowthPlan.appOwnedGrowthPlanState !== true || seededLaunchDeliveryGrowthPlan.appOwnedFollowUpState !== true || seededLaunchDeliveryGrowthPlan.followUpReady !== true || seededLaunchDeliveryGrowthPlan.renewalReady !== true || seededLaunchDeliveryGrowthPlan.referralReady !== true || seededLaunchDeliveryGrowthPlan.repeatServiceReady !== true || seededLaunchDeliveryGrowthPlan.growthPlanReady !== true || seededLaunchDeliveryGrowthPlan.outcomeReady !== true || seededLaunchDeliveryGrowthPlan.compatibilityGateRequired !== false || seededLaunchDeliveryGrowthPlan.epochTimingProviderOnly !== true || seededLaunchDeliveryGrowthPlan.workshopCalendarOwnership !== false || seededLaunchDeliveryGrowthPlan.monitorWorkflowExposed !== false || seededLaunchDeliveryGrowthPlan.paymentLiveEnabled !== false || seededLaunchDeliveryGrowthPlan.providerGoLiveRequested !== false || seededLaunchDeliveryGrowthPlan.liveProviderEnabled !== false || seededLaunchDeliveryGrowthPlan.aiForwardCopy !== false || seededLaunchDeliveryGrowthPlan.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryGrowthPlan.nativeExecutionReady !== true || !seededLaunchDeliveryGrowthPlan.followUpReceiptId || !seededLaunchDeliveryGrowthPlan.operatorNextAction.includes("customer-safe delivery growth-plan receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery growth-plan record");
if (!seededLaunchDeliveryGrowthPlanReceipt || seededLaunchDeliveryGrowthPlanReceipt.kind !== "offer-launch-delivery-growth-plan" || seededLaunchDeliveryGrowthPlanReceipt.status !== "customer-safe-offer-launch-delivery-growth-plan-ready" || seededLaunchDeliveryGrowthPlanReceipt.customerVisible !== true || seededLaunchDeliveryGrowthPlanReceipt.webportalExportReady !== true || seededLaunchDeliveryGrowthPlanReceipt.customerSafe !== true || seededLaunchDeliveryGrowthPlanReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryGrowthPlanReceipt.appOwnedGrowthPlanState !== true || seededLaunchDeliveryGrowthPlanReceipt.appOwnedFollowUpState !== true || seededLaunchDeliveryGrowthPlanReceipt.followUpReady !== true || seededLaunchDeliveryGrowthPlanReceipt.renewalReady !== true || seededLaunchDeliveryGrowthPlanReceipt.referralReady !== true || seededLaunchDeliveryGrowthPlanReceipt.repeatServiceReady !== true || seededLaunchDeliveryGrowthPlanReceipt.growthPlanReady !== true || seededLaunchDeliveryGrowthPlanReceipt.outcomeReady !== true || seededLaunchDeliveryGrowthPlanReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryGrowthPlanReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryGrowthPlanReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryGrowthPlanReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryGrowthPlanReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryGrowthPlanReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryGrowthPlanReceipt.liveProviderEnabled !== false || seededLaunchDeliveryGrowthPlanReceipt.aiForwardCopy !== false || seededLaunchDeliveryGrowthPlanReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryGrowthPlanReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryGrowthPlanReceipt.nextAction.includes("repeat-service, renewal, or referral")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery growth-plan receipt");
if (seededLaunchDeliveryGrowthPlanReceipt?.followUpReceiptId || seededLaunchDeliveryGrowthPlanReceipt?.growthPlanId || seededLaunchDeliveryGrowthPlanReceipt?.followUpId || seededLaunchDeliveryGrowthPlanReceipt?.outcomeReceiptId || seededLaunchDeliveryGrowthPlanReceipt?.outcomeId || seededLaunchDeliveryGrowthPlanReceipt?.milestoneReceiptId || seededLaunchDeliveryGrowthPlanReceipt?.milestoneId || seededLaunchDeliveryGrowthPlanReceipt?.kickoffReceiptId || seededLaunchDeliveryGrowthPlanReceipt?.kickoffId || seededLaunchDeliveryGrowthPlanReceipt?.workspaceReceiptId || seededLaunchDeliveryGrowthPlanReceipt?.workspaceId || seededLaunchDeliveryGrowthPlanReceipt?.setupReceiptId || seededLaunchDeliveryGrowthPlanReceipt?.setupId || seededLaunchDeliveryGrowthPlanReceipt?.activationReceiptId || seededLaunchDeliveryGrowthPlanReceipt?.activationId || seededLaunchDeliveryGrowthPlanReceipt?.sourceReceiptId || seededLaunchDeliveryGrowthPlanReceipt?.intakeReceiptId || seededLaunchDeliveryGrowthPlanReceipt?.launchReadinessId || seededLaunchDeliveryGrowthPlanReceipt?.offerExperimentId || seededLaunchDeliveryGrowthPlanReceipt?.marketingChannelExperimentId || seededLaunchDeliveryGrowthPlanReceipt?.operatorNextAction || seededLaunchDeliveryGrowthPlanReceipt?.cashSpeedScore || seededLaunchDeliveryGrowthPlanReceipt?.laborLeverageScore || seededLaunchDeliveryGrowthPlanReceipt?.proofReadinessScore || seededLaunchDeliveryGrowthPlanReceipt?.marketDemandScore || seededLaunchDeliveryGrowthPlanReceipt?.launchPriorityScore) fail("launch offer delivery growth-plan receipt must not expose growth-plan/follow-up ids, internal launch scoring, experiment, channel, or operator fields");
if (!seededLaunchDeliveryGrowthPlanAcceptance || seededLaunchDeliveryGrowthPlanAcceptance.kind !== "offer-launch-delivery-growth-plan-acceptance" || seededLaunchDeliveryGrowthPlanAcceptance.status !== "offer-launch-delivery-growth-plan-acceptance-ready" || seededLaunchDeliveryGrowthPlanAcceptance.customerVisible !== false || seededLaunchDeliveryGrowthPlanAcceptance.webportalExportReady !== false || seededLaunchDeliveryGrowthPlanAcceptance.customerSafeForReceipt !== true || seededLaunchDeliveryGrowthPlanAcceptance.appOwnedAcceptanceState !== true || seededLaunchDeliveryGrowthPlanAcceptance.appOwnedGrowthPlanState !== true || seededLaunchDeliveryGrowthPlanAcceptance.growthPlanReady !== true || seededLaunchDeliveryGrowthPlanAcceptance.repeatServiceAccepted !== true || seededLaunchDeliveryGrowthPlanAcceptance.renewalAccepted !== true || seededLaunchDeliveryGrowthPlanAcceptance.referralAccepted !== true || seededLaunchDeliveryGrowthPlanAcceptance.acceptanceReady !== true || seededLaunchDeliveryGrowthPlanAcceptance.compatibilityGateRequired !== false || seededLaunchDeliveryGrowthPlanAcceptance.epochTimingProviderOnly !== true || seededLaunchDeliveryGrowthPlanAcceptance.workshopCalendarOwnership !== false || seededLaunchDeliveryGrowthPlanAcceptance.monitorWorkflowExposed !== false || seededLaunchDeliveryGrowthPlanAcceptance.paymentLiveEnabled !== false || seededLaunchDeliveryGrowthPlanAcceptance.providerGoLiveRequested !== false || seededLaunchDeliveryGrowthPlanAcceptance.liveProviderEnabled !== false || seededLaunchDeliveryGrowthPlanAcceptance.aiForwardCopy !== false || seededLaunchDeliveryGrowthPlanAcceptance.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryGrowthPlanAcceptance.nativeExecutionReady !== true || seededLaunchDeliveryGrowthPlanAcceptance.growthPlanReceiptId !== seededLaunchDeliveryGrowthPlanReceipt.id || !seededLaunchDeliveryGrowthPlanAcceptance.operatorNextAction.includes("customer-safe delivery growth-plan acceptance receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery growth-plan acceptance record");
if (!seededLaunchDeliveryGrowthPlanAcceptanceReceipt || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.kind !== "offer-launch-delivery-growth-plan-acceptance" || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.status !== "customer-safe-offer-launch-delivery-growth-plan-acceptance-ready" || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.customerVisible !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.webportalExportReady !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.customerSafe !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.appOwnedAcceptanceState !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.appOwnedGrowthPlanState !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.growthPlanReady !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.repeatServiceAccepted !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.renewalAccepted !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.referralAccepted !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.acceptanceReady !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.liveProviderEnabled !== false || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.aiForwardCopy !== false || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryGrowthPlanAcceptanceReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryGrowthPlanAcceptanceReceipt.nextAction.includes("accepted next service motion")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery growth-plan acceptance receipt");
if (seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.growthPlanReceiptId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.acceptanceId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.growthPlanId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.followUpReceiptId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.followUpId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.outcomeReceiptId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.outcomeId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.milestoneReceiptId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.milestoneId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.kickoffReceiptId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.kickoffId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.workspaceReceiptId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.workspaceId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.setupReceiptId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.setupId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.activationReceiptId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.activationId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.sourceReceiptId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.intakeReceiptId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.launchReadinessId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.offerExperimentId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.marketingChannelExperimentId || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.operatorNextAction || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.cashSpeedScore || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.laborLeverageScore || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.proofReadinessScore || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.marketDemandScore || seededLaunchDeliveryGrowthPlanAcceptanceReceipt?.launchPriorityScore) fail("launch offer delivery growth-plan acceptance receipt must not expose acceptance/growth-plan ids, internal launch scoring, experiment, channel, or operator fields");
if (!seededLaunchDeliveryExpansionRequest || seededLaunchDeliveryExpansionRequest.kind !== "offer-launch-delivery-expansion-request" || seededLaunchDeliveryExpansionRequest.status !== "offer-launch-delivery-expansion-request-ready" || seededLaunchDeliveryExpansionRequest.customerVisible !== false || seededLaunchDeliveryExpansionRequest.webportalExportReady !== false || seededLaunchDeliveryExpansionRequest.customerSafeForReceipt !== true || seededLaunchDeliveryExpansionRequest.appOwnedExpansionRequestState !== true || seededLaunchDeliveryExpansionRequest.appOwnedAcceptanceState !== true || seededLaunchDeliveryExpansionRequest.acceptanceReady !== true || seededLaunchDeliveryExpansionRequest.repeatServiceRequested !== true || seededLaunchDeliveryExpansionRequest.renewalRequested !== true || seededLaunchDeliveryExpansionRequest.referralRequested !== true || seededLaunchDeliveryExpansionRequest.expansionRequestReady !== true || seededLaunchDeliveryExpansionRequest.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionRequest.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionRequest.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionRequest.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionRequest.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionRequest.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionRequest.liveProviderEnabled !== false || seededLaunchDeliveryExpansionRequest.aiForwardCopy !== false || seededLaunchDeliveryExpansionRequest.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionRequest.nativeExecutionReady !== true || seededLaunchDeliveryExpansionRequest.acceptanceReceiptId !== seededLaunchDeliveryGrowthPlanAcceptanceReceipt.id || !seededLaunchDeliveryExpansionRequest.operatorNextAction.includes("customer-safe delivery expansion-request receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery expansion-request record");
if (!seededLaunchDeliveryExpansionRequestReceipt || seededLaunchDeliveryExpansionRequestReceipt.kind !== "offer-launch-delivery-expansion-request" || seededLaunchDeliveryExpansionRequestReceipt.status !== "customer-safe-offer-launch-delivery-expansion-request-ready" || seededLaunchDeliveryExpansionRequestReceipt.customerVisible !== true || seededLaunchDeliveryExpansionRequestReceipt.webportalExportReady !== true || seededLaunchDeliveryExpansionRequestReceipt.customerSafe !== true || seededLaunchDeliveryExpansionRequestReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryExpansionRequestReceipt.appOwnedExpansionRequestState !== true || seededLaunchDeliveryExpansionRequestReceipt.appOwnedAcceptanceState !== true || seededLaunchDeliveryExpansionRequestReceipt.acceptanceReady !== true || seededLaunchDeliveryExpansionRequestReceipt.repeatServiceRequested !== true || seededLaunchDeliveryExpansionRequestReceipt.renewalRequested !== true || seededLaunchDeliveryExpansionRequestReceipt.referralRequested !== true || seededLaunchDeliveryExpansionRequestReceipt.expansionRequestReady !== true || seededLaunchDeliveryExpansionRequestReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionRequestReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionRequestReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionRequestReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionRequestReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionRequestReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionRequestReceipt.liveProviderEnabled !== false || seededLaunchDeliveryExpansionRequestReceipt.aiForwardCopy !== false || seededLaunchDeliveryExpansionRequestReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionRequestReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryExpansionRequestReceipt.nextAction.includes("next service step")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery expansion-request receipt");
if (seededLaunchDeliveryExpansionRequestReceipt?.acceptanceReceiptId || seededLaunchDeliveryExpansionRequestReceipt?.expansionRequestId || seededLaunchDeliveryExpansionRequestReceipt?.acceptanceId || seededLaunchDeliveryExpansionRequestReceipt?.growthPlanReceiptId || seededLaunchDeliveryExpansionRequestReceipt?.growthPlanId || seededLaunchDeliveryExpansionRequestReceipt?.followUpReceiptId || seededLaunchDeliveryExpansionRequestReceipt?.followUpId || seededLaunchDeliveryExpansionRequestReceipt?.outcomeReceiptId || seededLaunchDeliveryExpansionRequestReceipt?.outcomeId || seededLaunchDeliveryExpansionRequestReceipt?.milestoneReceiptId || seededLaunchDeliveryExpansionRequestReceipt?.milestoneId || seededLaunchDeliveryExpansionRequestReceipt?.kickoffReceiptId || seededLaunchDeliveryExpansionRequestReceipt?.kickoffId || seededLaunchDeliveryExpansionRequestReceipt?.workspaceReceiptId || seededLaunchDeliveryExpansionRequestReceipt?.workspaceId || seededLaunchDeliveryExpansionRequestReceipt?.setupReceiptId || seededLaunchDeliveryExpansionRequestReceipt?.setupId || seededLaunchDeliveryExpansionRequestReceipt?.activationReceiptId || seededLaunchDeliveryExpansionRequestReceipt?.activationId || seededLaunchDeliveryExpansionRequestReceipt?.sourceReceiptId || seededLaunchDeliveryExpansionRequestReceipt?.intakeReceiptId || seededLaunchDeliveryExpansionRequestReceipt?.launchReadinessId || seededLaunchDeliveryExpansionRequestReceipt?.offerExperimentId || seededLaunchDeliveryExpansionRequestReceipt?.marketingChannelExperimentId || seededLaunchDeliveryExpansionRequestReceipt?.operatorNextAction || seededLaunchDeliveryExpansionRequestReceipt?.cashSpeedScore || seededLaunchDeliveryExpansionRequestReceipt?.laborLeverageScore || seededLaunchDeliveryExpansionRequestReceipt?.proofReadinessScore || seededLaunchDeliveryExpansionRequestReceipt?.marketDemandScore || seededLaunchDeliveryExpansionRequestReceipt?.launchPriorityScore) fail("launch offer delivery expansion-request receipt must not expose expansion-request/acceptance ids, internal launch scoring, experiment, channel, or operator fields");
if (!seededLaunchDeliveryExpansionWorkspace || seededLaunchDeliveryExpansionWorkspace.kind !== "offer-launch-delivery-expansion-workspace" || seededLaunchDeliveryExpansionWorkspace.status !== "offer-launch-delivery-expansion-workspace-ready" || seededLaunchDeliveryExpansionWorkspace.customerVisible !== false || seededLaunchDeliveryExpansionWorkspace.webportalExportReady !== false || seededLaunchDeliveryExpansionWorkspace.customerSafeForReceipt !== true || seededLaunchDeliveryExpansionWorkspace.appOwnedExpansionWorkspaceState !== true || seededLaunchDeliveryExpansionWorkspace.appOwnedExpansionRequestState !== true || seededLaunchDeliveryExpansionWorkspace.expansionRequestReady !== true || seededLaunchDeliveryExpansionWorkspace.repeatServiceRequested !== true || seededLaunchDeliveryExpansionWorkspace.renewalRequested !== true || seededLaunchDeliveryExpansionWorkspace.referralRequested !== true || seededLaunchDeliveryExpansionWorkspace.expansionWorkspaceReady !== true || seededLaunchDeliveryExpansionWorkspace.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionWorkspace.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionWorkspace.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionWorkspace.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionWorkspace.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionWorkspace.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionWorkspace.liveProviderEnabled !== false || seededLaunchDeliveryExpansionWorkspace.aiForwardCopy !== false || seededLaunchDeliveryExpansionWorkspace.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionWorkspace.nativeExecutionReady !== true || seededLaunchDeliveryExpansionWorkspace.expansionRequestReceiptId !== seededLaunchDeliveryExpansionRequestReceipt.id || !seededLaunchDeliveryExpansionWorkspace.operatorNextAction.includes("customer-safe expansion workspace receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery expansion workspace record");
if (!seededLaunchDeliveryExpansionWorkspaceReceipt || seededLaunchDeliveryExpansionWorkspaceReceipt.kind !== "offer-launch-delivery-expansion-workspace" || seededLaunchDeliveryExpansionWorkspaceReceipt.status !== "customer-safe-offer-launch-delivery-expansion-workspace-ready" || seededLaunchDeliveryExpansionWorkspaceReceipt.customerVisible !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.webportalExportReady !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.customerSafe !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.appOwnedExpansionWorkspaceState !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.appOwnedExpansionRequestState !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.expansionRequestReady !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.repeatServiceRequested !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.renewalRequested !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.referralRequested !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.expansionWorkspaceReady !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionWorkspaceReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionWorkspaceReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionWorkspaceReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionWorkspaceReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionWorkspaceReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionWorkspaceReceipt.liveProviderEnabled !== false || seededLaunchDeliveryExpansionWorkspaceReceipt.aiForwardCopy !== false || seededLaunchDeliveryExpansionWorkspaceReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionWorkspaceReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryExpansionWorkspaceReceipt.nextAction.includes("expansion workspace")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery expansion workspace receipt");
if (seededLaunchDeliveryExpansionWorkspaceReceipt?.expansionRequestReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.expansionWorkspaceId || seededLaunchDeliveryExpansionWorkspaceReceipt?.expansionRequestId || seededLaunchDeliveryExpansionWorkspaceReceipt?.acceptanceReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.acceptanceId || seededLaunchDeliveryExpansionWorkspaceReceipt?.growthPlanReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.growthPlanId || seededLaunchDeliveryExpansionWorkspaceReceipt?.followUpReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.followUpId || seededLaunchDeliveryExpansionWorkspaceReceipt?.outcomeReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.outcomeId || seededLaunchDeliveryExpansionWorkspaceReceipt?.milestoneReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.milestoneId || seededLaunchDeliveryExpansionWorkspaceReceipt?.kickoffReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.kickoffId || seededLaunchDeliveryExpansionWorkspaceReceipt?.workspaceReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.workspaceId || seededLaunchDeliveryExpansionWorkspaceReceipt?.setupReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.setupId || seededLaunchDeliveryExpansionWorkspaceReceipt?.activationReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.activationId || seededLaunchDeliveryExpansionWorkspaceReceipt?.sourceReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.intakeReceiptId || seededLaunchDeliveryExpansionWorkspaceReceipt?.launchReadinessId || seededLaunchDeliveryExpansionWorkspaceReceipt?.offerExperimentId || seededLaunchDeliveryExpansionWorkspaceReceipt?.marketingChannelExperimentId || seededLaunchDeliveryExpansionWorkspaceReceipt?.operatorNextAction || seededLaunchDeliveryExpansionWorkspaceReceipt?.cashSpeedScore || seededLaunchDeliveryExpansionWorkspaceReceipt?.laborLeverageScore || seededLaunchDeliveryExpansionWorkspaceReceipt?.proofReadinessScore || seededLaunchDeliveryExpansionWorkspaceReceipt?.marketDemandScore || seededLaunchDeliveryExpansionWorkspaceReceipt?.launchPriorityScore) fail("launch offer delivery expansion workspace receipt must not expose expansion workspace/request ids, internal launch scoring, experiment, channel, or operator fields");
if (!seededLaunchDeliveryExpansionKickoff || seededLaunchDeliveryExpansionKickoff.kind !== "offer-launch-delivery-expansion-kickoff" || seededLaunchDeliveryExpansionKickoff.status !== "offer-launch-delivery-expansion-kickoff-ready" || seededLaunchDeliveryExpansionKickoff.customerVisible !== false || seededLaunchDeliveryExpansionKickoff.webportalExportReady !== false || seededLaunchDeliveryExpansionKickoff.customerSafeForReceipt !== true || seededLaunchDeliveryExpansionKickoff.appOwnedExpansionKickoffState !== true || seededLaunchDeliveryExpansionKickoff.appOwnedExpansionWorkspaceState !== true || seededLaunchDeliveryExpansionKickoff.expansionWorkspaceReady !== true || seededLaunchDeliveryExpansionKickoff.repeatServiceRequested !== true || seededLaunchDeliveryExpansionKickoff.renewalRequested !== true || seededLaunchDeliveryExpansionKickoff.referralRequested !== true || seededLaunchDeliveryExpansionKickoff.expansionKickoffReady !== true || seededLaunchDeliveryExpansionKickoff.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionKickoff.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionKickoff.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionKickoff.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionKickoff.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionKickoff.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionKickoff.liveProviderEnabled !== false || seededLaunchDeliveryExpansionKickoff.aiForwardCopy !== false || seededLaunchDeliveryExpansionKickoff.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionKickoff.nativeExecutionReady !== true || seededLaunchDeliveryExpansionKickoff.expansionWorkspaceReceiptId !== seededLaunchDeliveryExpansionWorkspaceReceipt.id || !seededLaunchDeliveryExpansionKickoff.operatorNextAction.includes("customer-safe expansion kickoff receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery expansion kickoff record");
if (!seededLaunchDeliveryExpansionKickoffReceipt || seededLaunchDeliveryExpansionKickoffReceipt.kind !== "offer-launch-delivery-expansion-kickoff" || seededLaunchDeliveryExpansionKickoffReceipt.status !== "customer-safe-offer-launch-delivery-expansion-kickoff-ready" || seededLaunchDeliveryExpansionKickoffReceipt.customerVisible !== true || seededLaunchDeliveryExpansionKickoffReceipt.webportalExportReady !== true || seededLaunchDeliveryExpansionKickoffReceipt.customerSafe !== true || seededLaunchDeliveryExpansionKickoffReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryExpansionKickoffReceipt.appOwnedExpansionKickoffState !== true || seededLaunchDeliveryExpansionKickoffReceipt.appOwnedExpansionWorkspaceState !== true || seededLaunchDeliveryExpansionKickoffReceipt.expansionWorkspaceReady !== true || seededLaunchDeliveryExpansionKickoffReceipt.repeatServiceRequested !== true || seededLaunchDeliveryExpansionKickoffReceipt.renewalRequested !== true || seededLaunchDeliveryExpansionKickoffReceipt.referralRequested !== true || seededLaunchDeliveryExpansionKickoffReceipt.expansionKickoffReady !== true || seededLaunchDeliveryExpansionKickoffReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionKickoffReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionKickoffReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionKickoffReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionKickoffReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionKickoffReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionKickoffReceipt.liveProviderEnabled !== false || seededLaunchDeliveryExpansionKickoffReceipt.aiForwardCopy !== false || seededLaunchDeliveryExpansionKickoffReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionKickoffReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryExpansionKickoffReceipt.nextAction.includes("next service milestone")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery expansion kickoff receipt");
if (seededLaunchDeliveryExpansionKickoffReceipt?.expansionWorkspaceReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.expansionKickoffId || seededLaunchDeliveryExpansionKickoffReceipt?.expansionWorkspaceId || seededLaunchDeliveryExpansionKickoffReceipt?.expansionRequestReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.expansionRequestId || seededLaunchDeliveryExpansionKickoffReceipt?.acceptanceReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.acceptanceId || seededLaunchDeliveryExpansionKickoffReceipt?.growthPlanReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.growthPlanId || seededLaunchDeliveryExpansionKickoffReceipt?.followUpReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.followUpId || seededLaunchDeliveryExpansionKickoffReceipt?.outcomeReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.outcomeId || seededLaunchDeliveryExpansionKickoffReceipt?.milestoneReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.milestoneId || seededLaunchDeliveryExpansionKickoffReceipt?.kickoffReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.kickoffId || seededLaunchDeliveryExpansionKickoffReceipt?.workspaceReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.workspaceId || seededLaunchDeliveryExpansionKickoffReceipt?.setupReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.setupId || seededLaunchDeliveryExpansionKickoffReceipt?.activationReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.activationId || seededLaunchDeliveryExpansionKickoffReceipt?.sourceReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.intakeReceiptId || seededLaunchDeliveryExpansionKickoffReceipt?.launchReadinessId || seededLaunchDeliveryExpansionKickoffReceipt?.offerExperimentId || seededLaunchDeliveryExpansionKickoffReceipt?.marketingChannelExperimentId || seededLaunchDeliveryExpansionKickoffReceipt?.operatorNextAction || seededLaunchDeliveryExpansionKickoffReceipt?.cashSpeedScore || seededLaunchDeliveryExpansionKickoffReceipt?.laborLeverageScore || seededLaunchDeliveryExpansionKickoffReceipt?.proofReadinessScore || seededLaunchDeliveryExpansionKickoffReceipt?.marketDemandScore || seededLaunchDeliveryExpansionKickoffReceipt?.launchPriorityScore) fail("launch offer delivery expansion kickoff receipt must not expose expansion kickoff/workspace ids, internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchDeliveryGrowthPlan = createOfferLaunchDeliveryGrowthPlanForFollowUpReceipt(dynamicLaunchDeliveryFollowUpReceipt);
const dynamicLaunchDeliveryGrowthPlanReceipt = createOfferLaunchDeliveryGrowthPlanReceiptForGrowthPlan(dynamicLaunchDeliveryGrowthPlan);
const dynamicLaunchDeliveryGrowthPlanAcceptance = createOfferLaunchDeliveryGrowthPlanAcceptanceForGrowthPlanReceipt(dynamicLaunchDeliveryGrowthPlanReceipt);
const dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt = createOfferLaunchDeliveryGrowthPlanAcceptanceReceiptForAcceptance(dynamicLaunchDeliveryGrowthPlanAcceptance);
const dynamicLaunchDeliveryExpansionRequest = createOfferLaunchDeliveryExpansionRequestForAcceptanceReceipt(dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt);
const dynamicLaunchDeliveryExpansionRequestReceipt = createOfferLaunchDeliveryExpansionRequestReceiptForRequest(dynamicLaunchDeliveryExpansionRequest);
const dynamicLaunchDeliveryExpansionWorkspace = createOfferLaunchDeliveryExpansionWorkspaceForRequestReceipt(dynamicLaunchDeliveryExpansionRequestReceipt);
const dynamicLaunchDeliveryExpansionWorkspaceReceipt = createOfferLaunchDeliveryExpansionWorkspaceReceiptForWorkspace(dynamicLaunchDeliveryExpansionWorkspace);
const dynamicLaunchDeliveryExpansionKickoff = createOfferLaunchDeliveryExpansionKickoffForWorkspaceReceipt(dynamicLaunchDeliveryExpansionWorkspaceReceipt);
const dynamicLaunchDeliveryExpansionKickoffReceipt = createOfferLaunchDeliveryExpansionKickoffReceiptForKickoff(dynamicLaunchDeliveryExpansionKickoff);
const unsafeLaunchDeliveryGrowthPlan = createOfferLaunchDeliveryGrowthPlanForFollowUpReceipt({ ...dynamicLaunchDeliveryFollowUpReceipt, paymentLiveEnabled: true });
const unsafeLaunchDeliveryGrowthPlanReceipt = createOfferLaunchDeliveryGrowthPlanReceiptForGrowthPlan({ ...dynamicLaunchDeliveryGrowthPlan, webportalExportReady: true });
const unsafeLaunchDeliveryGrowthPlanAcceptance = createOfferLaunchDeliveryGrowthPlanAcceptanceForGrowthPlanReceipt({ ...dynamicLaunchDeliveryGrowthPlanReceipt, paymentLiveEnabled: true });
const unsafeLaunchDeliveryGrowthPlanAcceptanceReceipt = createOfferLaunchDeliveryGrowthPlanAcceptanceReceiptForAcceptance({ ...dynamicLaunchDeliveryGrowthPlanAcceptance, webportalExportReady: true });
const unsafeLaunchDeliveryExpansionRequest = createOfferLaunchDeliveryExpansionRequestForAcceptanceReceipt({ ...dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt, paymentLiveEnabled: true });
const unsafeLaunchDeliveryExpansionRequestReceipt = createOfferLaunchDeliveryExpansionRequestReceiptForRequest({ ...dynamicLaunchDeliveryExpansionRequest, webportalExportReady: true });
const unsafeLaunchDeliveryExpansionWorkspace = createOfferLaunchDeliveryExpansionWorkspaceForRequestReceipt({ ...dynamicLaunchDeliveryExpansionRequestReceipt, paymentLiveEnabled: true });
const unsafeLaunchDeliveryExpansionWorkspaceReceipt = createOfferLaunchDeliveryExpansionWorkspaceReceiptForWorkspace({ ...dynamicLaunchDeliveryExpansionWorkspace, webportalExportReady: true });
const unsafeLaunchDeliveryExpansionKickoff = createOfferLaunchDeliveryExpansionKickoffForWorkspaceReceipt({ ...dynamicLaunchDeliveryExpansionWorkspaceReceipt, providerGoLiveRequested: true });
const unsafeLaunchDeliveryExpansionKickoffReceipt = createOfferLaunchDeliveryExpansionKickoffReceiptForKickoff({ ...dynamicLaunchDeliveryExpansionKickoff, webportalExportReady: true });
if (unsafeLaunchDeliveryGrowthPlan !== null) fail("offer launch delivery growth-plan must reject unsafe delivery follow-up receipts");
if (unsafeLaunchDeliveryGrowthPlanReceipt !== null) fail("offer launch delivery growth-plan receipt must reject internal/export-ready growth-plan state");
if (unsafeLaunchDeliveryGrowthPlanAcceptance !== null) fail("offer launch delivery growth-plan acceptance must reject unsafe growth-plan receipts");
if (unsafeLaunchDeliveryGrowthPlanAcceptanceReceipt !== null) fail("offer launch delivery growth-plan acceptance receipt must reject internal/export-ready acceptance state");
if (unsafeLaunchDeliveryExpansionRequest !== null) fail("offer launch delivery expansion request must reject unsafe growth-plan acceptance receipts");
if (unsafeLaunchDeliveryExpansionRequestReceipt !== null) fail("offer launch delivery expansion-request receipt must reject internal/export-ready expansion-request state");
if (unsafeLaunchDeliveryExpansionWorkspace !== null) fail("offer launch delivery expansion workspace must reject unsafe expansion-request receipts");
if (unsafeLaunchDeliveryExpansionWorkspaceReceipt !== null) fail("offer launch delivery expansion-workspace receipt must reject internal/export-ready expansion workspace state");
if (unsafeLaunchDeliveryExpansionKickoff !== null) fail("offer launch delivery expansion kickoff must reject unsafe expansion-workspace receipts");
if (unsafeLaunchDeliveryExpansionKickoffReceipt !== null) fail("offer launch delivery expansion-kickoff receipt must reject internal/export-ready expansion kickoff state");
if (!dynamicLaunchDeliveryGrowthPlan || dynamicLaunchDeliveryGrowthPlan.customerVisible !== false || dynamicLaunchDeliveryGrowthPlan.webportalExportReady !== false || dynamicLaunchDeliveryGrowthPlan.customerSafeForReceipt !== true || dynamicLaunchDeliveryGrowthPlan.appOwnedGrowthPlanState !== true || dynamicLaunchDeliveryGrowthPlan.appOwnedFollowUpState !== true || dynamicLaunchDeliveryGrowthPlan.followUpReady !== true || dynamicLaunchDeliveryGrowthPlan.renewalReady !== true || dynamicLaunchDeliveryGrowthPlan.referralReady !== true || dynamicLaunchDeliveryGrowthPlan.repeatServiceReady !== true || dynamicLaunchDeliveryGrowthPlan.growthPlanReady !== true || dynamicLaunchDeliveryGrowthPlan.outcomeReady !== true || dynamicLaunchDeliveryGrowthPlan.compatibilityGateRequired !== false || dynamicLaunchDeliveryGrowthPlan.epochTimingProviderOnly !== true || dynamicLaunchDeliveryGrowthPlan.workshopCalendarOwnership !== false || dynamicLaunchDeliveryGrowthPlan.monitorWorkflowExposed !== false || dynamicLaunchDeliveryGrowthPlan.paymentLiveEnabled !== false || dynamicLaunchDeliveryGrowthPlan.providerGoLiveRequested !== false || dynamicLaunchDeliveryGrowthPlan.liveProviderEnabled !== false || dynamicLaunchDeliveryGrowthPlan.aiForwardCopy !== false || dynamicLaunchDeliveryGrowthPlan.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryGrowthPlan.nativeExecutionReady !== true || !dynamicLaunchDeliveryGrowthPlan.followUpReceiptId || !dynamicLaunchDeliveryGrowthPlan.operatorNextAction.includes("customer-safe delivery growth-plan receipt")) fail("dynamic offer launch delivery growth-plan missing App-owned safe growth-plan gates");
if (!dynamicLaunchDeliveryGrowthPlanReceipt || dynamicLaunchDeliveryGrowthPlanReceipt.customerVisible !== true || dynamicLaunchDeliveryGrowthPlanReceipt.webportalExportReady !== true || dynamicLaunchDeliveryGrowthPlanReceipt.customerSafe !== true || dynamicLaunchDeliveryGrowthPlanReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryGrowthPlanReceipt.appOwnedGrowthPlanState !== true || dynamicLaunchDeliveryGrowthPlanReceipt.appOwnedFollowUpState !== true || dynamicLaunchDeliveryGrowthPlanReceipt.followUpReady !== true || dynamicLaunchDeliveryGrowthPlanReceipt.renewalReady !== true || dynamicLaunchDeliveryGrowthPlanReceipt.referralReady !== true || dynamicLaunchDeliveryGrowthPlanReceipt.repeatServiceReady !== true || dynamicLaunchDeliveryGrowthPlanReceipt.growthPlanReady !== true || dynamicLaunchDeliveryGrowthPlanReceipt.outcomeReady !== true || dynamicLaunchDeliveryGrowthPlanReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryGrowthPlanReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryGrowthPlanReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryGrowthPlanReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryGrowthPlanReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryGrowthPlanReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryGrowthPlanReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryGrowthPlanReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryGrowthPlanReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryGrowthPlanReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryGrowthPlanReceipt.followUpReceiptId || dynamicLaunchDeliveryGrowthPlanReceipt.growthPlanId || dynamicLaunchDeliveryGrowthPlanReceipt.followUpId || dynamicLaunchDeliveryGrowthPlanReceipt.outcomeReceiptId || dynamicLaunchDeliveryGrowthPlanReceipt.outcomeId || dynamicLaunchDeliveryGrowthPlanReceipt.milestoneReceiptId || dynamicLaunchDeliveryGrowthPlanReceipt.milestoneId || dynamicLaunchDeliveryGrowthPlanReceipt.operatorNextAction || dynamicLaunchDeliveryGrowthPlanReceipt.launchPriorityScore || dynamicLaunchDeliveryGrowthPlanReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryGrowthPlanReceipt.offerExperimentId) fail("dynamic launch offer delivery growth-plan receipt leaks internal growth/follow-up state or is not customer-safe");
if (!dynamicLaunchDeliveryGrowthPlanAcceptance || dynamicLaunchDeliveryGrowthPlanAcceptance.customerVisible !== false || dynamicLaunchDeliveryGrowthPlanAcceptance.webportalExportReady !== false || dynamicLaunchDeliveryGrowthPlanAcceptance.customerSafeForReceipt !== true || dynamicLaunchDeliveryGrowthPlanAcceptance.appOwnedAcceptanceState !== true || dynamicLaunchDeliveryGrowthPlanAcceptance.appOwnedGrowthPlanState !== true || dynamicLaunchDeliveryGrowthPlanAcceptance.growthPlanReady !== true || dynamicLaunchDeliveryGrowthPlanAcceptance.repeatServiceAccepted !== true || dynamicLaunchDeliveryGrowthPlanAcceptance.renewalAccepted !== true || dynamicLaunchDeliveryGrowthPlanAcceptance.referralAccepted !== true || dynamicLaunchDeliveryGrowthPlanAcceptance.acceptanceReady !== true || dynamicLaunchDeliveryGrowthPlanAcceptance.compatibilityGateRequired !== false || dynamicLaunchDeliveryGrowthPlanAcceptance.epochTimingProviderOnly !== true || dynamicLaunchDeliveryGrowthPlanAcceptance.workshopCalendarOwnership !== false || dynamicLaunchDeliveryGrowthPlanAcceptance.monitorWorkflowExposed !== false || dynamicLaunchDeliveryGrowthPlanAcceptance.paymentLiveEnabled !== false || dynamicLaunchDeliveryGrowthPlanAcceptance.providerGoLiveRequested !== false || dynamicLaunchDeliveryGrowthPlanAcceptance.liveProviderEnabled !== false || dynamicLaunchDeliveryGrowthPlanAcceptance.aiForwardCopy !== false || dynamicLaunchDeliveryGrowthPlanAcceptance.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryGrowthPlanAcceptance.nativeExecutionReady !== true || !dynamicLaunchDeliveryGrowthPlanAcceptance.growthPlanReceiptId || !dynamicLaunchDeliveryGrowthPlanAcceptance.operatorNextAction.includes("customer-safe delivery growth-plan acceptance receipt")) fail("dynamic offer launch delivery growth-plan acceptance missing App-owned safe acceptance gates");
if (!dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.customerVisible !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.webportalExportReady !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.customerSafe !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.appOwnedAcceptanceState !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.appOwnedGrowthPlanState !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.growthPlanReady !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.repeatServiceAccepted !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.renewalAccepted !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.referralAccepted !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.acceptanceReady !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.growthPlanReceiptId || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.acceptanceId || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.growthPlanId || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.followUpReceiptId || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.followUpId || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.operatorNextAction || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.launchPriorityScore || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryGrowthPlanAcceptanceReceipt.offerExperimentId) fail("dynamic launch offer delivery growth-plan acceptance receipt leaks internal acceptance/growth-plan state or is not customer-safe");
if (!dynamicLaunchDeliveryExpansionRequest || dynamicLaunchDeliveryExpansionRequest.customerVisible !== false || dynamicLaunchDeliveryExpansionRequest.webportalExportReady !== false || dynamicLaunchDeliveryExpansionRequest.customerSafeForReceipt !== true || dynamicLaunchDeliveryExpansionRequest.appOwnedExpansionRequestState !== true || dynamicLaunchDeliveryExpansionRequest.appOwnedAcceptanceState !== true || dynamicLaunchDeliveryExpansionRequest.acceptanceReady !== true || dynamicLaunchDeliveryExpansionRequest.repeatServiceRequested !== true || dynamicLaunchDeliveryExpansionRequest.renewalRequested !== true || dynamicLaunchDeliveryExpansionRequest.referralRequested !== true || dynamicLaunchDeliveryExpansionRequest.expansionRequestReady !== true || dynamicLaunchDeliveryExpansionRequest.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionRequest.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionRequest.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionRequest.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionRequest.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionRequest.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionRequest.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionRequest.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionRequest.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionRequest.nativeExecutionReady !== true || !dynamicLaunchDeliveryExpansionRequest.acceptanceReceiptId || !dynamicLaunchDeliveryExpansionRequest.operatorNextAction.includes("customer-safe delivery expansion-request receipt")) fail("dynamic offer launch delivery expansion-request missing App-owned safe request gates");
if (!dynamicLaunchDeliveryExpansionRequestReceipt || dynamicLaunchDeliveryExpansionRequestReceipt.customerVisible !== true || dynamicLaunchDeliveryExpansionRequestReceipt.webportalExportReady !== true || dynamicLaunchDeliveryExpansionRequestReceipt.customerSafe !== true || dynamicLaunchDeliveryExpansionRequestReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryExpansionRequestReceipt.appOwnedExpansionRequestState !== true || dynamicLaunchDeliveryExpansionRequestReceipt.appOwnedAcceptanceState !== true || dynamicLaunchDeliveryExpansionRequestReceipt.acceptanceReady !== true || dynamicLaunchDeliveryExpansionRequestReceipt.repeatServiceRequested !== true || dynamicLaunchDeliveryExpansionRequestReceipt.renewalRequested !== true || dynamicLaunchDeliveryExpansionRequestReceipt.referralRequested !== true || dynamicLaunchDeliveryExpansionRequestReceipt.expansionRequestReady !== true || dynamicLaunchDeliveryExpansionRequestReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionRequestReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionRequestReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionRequestReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionRequestReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionRequestReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionRequestReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionRequestReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionRequestReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionRequestReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryExpansionRequestReceipt.acceptanceReceiptId || dynamicLaunchDeliveryExpansionRequestReceipt.expansionRequestId || dynamicLaunchDeliveryExpansionRequestReceipt.acceptanceId || dynamicLaunchDeliveryExpansionRequestReceipt.growthPlanReceiptId || dynamicLaunchDeliveryExpansionRequestReceipt.growthPlanId || dynamicLaunchDeliveryExpansionRequestReceipt.operatorNextAction || dynamicLaunchDeliveryExpansionRequestReceipt.launchPriorityScore || dynamicLaunchDeliveryExpansionRequestReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryExpansionRequestReceipt.offerExperimentId) fail("dynamic launch offer delivery expansion-request receipt leaks internal acceptance/expansion state or is not customer-safe");
if (!dynamicLaunchDeliveryExpansionWorkspace || dynamicLaunchDeliveryExpansionWorkspace.customerVisible !== false || dynamicLaunchDeliveryExpansionWorkspace.webportalExportReady !== false || dynamicLaunchDeliveryExpansionWorkspace.customerSafeForReceipt !== true || dynamicLaunchDeliveryExpansionWorkspace.appOwnedExpansionWorkspaceState !== true || dynamicLaunchDeliveryExpansionWorkspace.appOwnedExpansionRequestState !== true || dynamicLaunchDeliveryExpansionWorkspace.expansionRequestReady !== true || dynamicLaunchDeliveryExpansionWorkspace.repeatServiceRequested !== true || dynamicLaunchDeliveryExpansionWorkspace.renewalRequested !== true || dynamicLaunchDeliveryExpansionWorkspace.referralRequested !== true || dynamicLaunchDeliveryExpansionWorkspace.expansionWorkspaceReady !== true || dynamicLaunchDeliveryExpansionWorkspace.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionWorkspace.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionWorkspace.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionWorkspace.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionWorkspace.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionWorkspace.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionWorkspace.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionWorkspace.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionWorkspace.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionWorkspace.nativeExecutionReady !== true || !dynamicLaunchDeliveryExpansionWorkspace.expansionRequestReceiptId || !dynamicLaunchDeliveryExpansionWorkspace.operatorNextAction.includes("customer-safe expansion workspace receipt")) fail("dynamic offer launch delivery expansion workspace missing App-owned safe workspace gates");
if (!dynamicLaunchDeliveryExpansionWorkspaceReceipt || dynamicLaunchDeliveryExpansionWorkspaceReceipt.customerVisible !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.webportalExportReady !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.customerSafe !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.appOwnedExpansionWorkspaceState !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.appOwnedExpansionRequestState !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.expansionRequestReady !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.repeatServiceRequested !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.renewalRequested !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.referralRequested !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.expansionWorkspaceReady !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionWorkspaceReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionWorkspaceReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionWorkspaceReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionWorkspaceReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionWorkspaceReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionWorkspaceReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionWorkspaceReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionWorkspaceReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryExpansionWorkspaceReceipt.expansionRequestReceiptId || dynamicLaunchDeliveryExpansionWorkspaceReceipt.expansionWorkspaceId || dynamicLaunchDeliveryExpansionWorkspaceReceipt.expansionRequestId || dynamicLaunchDeliveryExpansionWorkspaceReceipt.acceptanceReceiptId || dynamicLaunchDeliveryExpansionWorkspaceReceipt.acceptanceId || dynamicLaunchDeliveryExpansionWorkspaceReceipt.operatorNextAction || dynamicLaunchDeliveryExpansionWorkspaceReceipt.launchPriorityScore || dynamicLaunchDeliveryExpansionWorkspaceReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryExpansionWorkspaceReceipt.offerExperimentId) fail("dynamic launch offer delivery expansion workspace receipt leaks internal expansion workspace/request state or is not customer-safe");
if (!dynamicLaunchDeliveryExpansionKickoff || dynamicLaunchDeliveryExpansionKickoff.customerVisible !== false || dynamicLaunchDeliveryExpansionKickoff.webportalExportReady !== false || dynamicLaunchDeliveryExpansionKickoff.customerSafeForReceipt !== true || dynamicLaunchDeliveryExpansionKickoff.appOwnedExpansionKickoffState !== true || dynamicLaunchDeliveryExpansionKickoff.appOwnedExpansionWorkspaceState !== true || dynamicLaunchDeliveryExpansionKickoff.expansionWorkspaceReady !== true || dynamicLaunchDeliveryExpansionKickoff.repeatServiceRequested !== true || dynamicLaunchDeliveryExpansionKickoff.renewalRequested !== true || dynamicLaunchDeliveryExpansionKickoff.referralRequested !== true || dynamicLaunchDeliveryExpansionKickoff.expansionKickoffReady !== true || dynamicLaunchDeliveryExpansionKickoff.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionKickoff.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionKickoff.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionKickoff.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionKickoff.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionKickoff.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionKickoff.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionKickoff.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionKickoff.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionKickoff.nativeExecutionReady !== true || !dynamicLaunchDeliveryExpansionKickoff.expansionWorkspaceReceiptId || !dynamicLaunchDeliveryExpansionKickoff.operatorNextAction.includes("customer-safe expansion kickoff receipt")) fail("dynamic offer launch delivery expansion kickoff missing App-owned safe kickoff gates");
if (!dynamicLaunchDeliveryExpansionKickoffReceipt || dynamicLaunchDeliveryExpansionKickoffReceipt.customerVisible !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.webportalExportReady !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.customerSafe !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.appOwnedExpansionKickoffState !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.appOwnedExpansionWorkspaceState !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.expansionWorkspaceReady !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.repeatServiceRequested !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.renewalRequested !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.referralRequested !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.expansionKickoffReady !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionKickoffReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionKickoffReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionKickoffReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionKickoffReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionKickoffReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionKickoffReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionKickoffReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionKickoffReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryExpansionKickoffReceipt.expansionWorkspaceReceiptId || dynamicLaunchDeliveryExpansionKickoffReceipt.expansionKickoffId || dynamicLaunchDeliveryExpansionKickoffReceipt.expansionWorkspaceId || dynamicLaunchDeliveryExpansionKickoffReceipt.expansionRequestReceiptId || dynamicLaunchDeliveryExpansionKickoffReceipt.expansionRequestId || dynamicLaunchDeliveryExpansionKickoffReceipt.operatorNextAction || dynamicLaunchDeliveryExpansionKickoffReceipt.launchPriorityScore || dynamicLaunchDeliveryExpansionKickoffReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryExpansionKickoffReceipt.offerExperimentId) fail("dynamic launch offer delivery expansion kickoff receipt leaks internal expansion kickoff/workspace state or is not customer-safe");
if (!seededLaunchDeliveryExpansionMilestone || seededLaunchDeliveryExpansionMilestone.kind !== "offer-launch-delivery-expansion-milestone" || seededLaunchDeliveryExpansionMilestone.status !== "offer-launch-delivery-expansion-milestone-active" || seededLaunchDeliveryExpansionMilestone.customerVisible !== false || seededLaunchDeliveryExpansionMilestone.webportalExportReady !== false || seededLaunchDeliveryExpansionMilestone.customerSafeForReceipt !== true || seededLaunchDeliveryExpansionMilestone.appOwnedExpansionMilestoneState !== true || seededLaunchDeliveryExpansionMilestone.appOwnedExpansionKickoffState !== true || seededLaunchDeliveryExpansionMilestone.expansionKickoffReady !== true || seededLaunchDeliveryExpansionMilestone.repeatServiceRequested !== true || seededLaunchDeliveryExpansionMilestone.renewalRequested !== true || seededLaunchDeliveryExpansionMilestone.referralRequested !== true || seededLaunchDeliveryExpansionMilestone.expansionMilestoneReady !== true || seededLaunchDeliveryExpansionMilestone.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionMilestone.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionMilestone.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionMilestone.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionMilestone.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionMilestone.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionMilestone.liveProviderEnabled !== false || seededLaunchDeliveryExpansionMilestone.aiForwardCopy !== false || seededLaunchDeliveryExpansionMilestone.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionMilestone.nativeExecutionReady !== true || seededLaunchDeliveryExpansionMilestone.expansionKickoffReceiptId !== seededLaunchDeliveryExpansionKickoffReceipt.id || !seededLaunchDeliveryExpansionMilestone.operatorNextAction.includes("customer-safe expansion milestone receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery expansion milestone record");
if (!seededLaunchDeliveryExpansionMilestoneReceipt || seededLaunchDeliveryExpansionMilestoneReceipt.kind !== "offer-launch-delivery-expansion-milestone" || seededLaunchDeliveryExpansionMilestoneReceipt.status !== "customer-safe-offer-launch-delivery-expansion-milestone-active" || seededLaunchDeliveryExpansionMilestoneReceipt.customerVisible !== true || seededLaunchDeliveryExpansionMilestoneReceipt.webportalExportReady !== true || seededLaunchDeliveryExpansionMilestoneReceipt.customerSafe !== true || seededLaunchDeliveryExpansionMilestoneReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryExpansionMilestoneReceipt.appOwnedExpansionMilestoneState !== true || seededLaunchDeliveryExpansionMilestoneReceipt.appOwnedExpansionKickoffState !== true || seededLaunchDeliveryExpansionMilestoneReceipt.expansionKickoffReady !== true || seededLaunchDeliveryExpansionMilestoneReceipt.repeatServiceRequested !== true || seededLaunchDeliveryExpansionMilestoneReceipt.renewalRequested !== true || seededLaunchDeliveryExpansionMilestoneReceipt.referralRequested !== true || seededLaunchDeliveryExpansionMilestoneReceipt.expansionMilestoneReady !== true || seededLaunchDeliveryExpansionMilestoneReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionMilestoneReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionMilestoneReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionMilestoneReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionMilestoneReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionMilestoneReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionMilestoneReceipt.liveProviderEnabled !== false || seededLaunchDeliveryExpansionMilestoneReceipt.aiForwardCopy !== false || seededLaunchDeliveryExpansionMilestoneReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionMilestoneReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryExpansionMilestoneReceipt.nextAction.includes("next service milestone")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery expansion milestone receipt");
if (seededLaunchDeliveryExpansionMilestoneReceipt?.expansionKickoffReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.expansionMilestoneId || seededLaunchDeliveryExpansionMilestoneReceipt?.expansionKickoffId || seededLaunchDeliveryExpansionMilestoneReceipt?.expansionWorkspaceReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.expansionWorkspaceId || seededLaunchDeliveryExpansionMilestoneReceipt?.expansionRequestReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.expansionRequestId || seededLaunchDeliveryExpansionMilestoneReceipt?.acceptanceReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.acceptanceId || seededLaunchDeliveryExpansionMilestoneReceipt?.growthPlanReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.growthPlanId || seededLaunchDeliveryExpansionMilestoneReceipt?.followUpReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.followUpId || seededLaunchDeliveryExpansionMilestoneReceipt?.outcomeReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.outcomeId || seededLaunchDeliveryExpansionMilestoneReceipt?.milestoneReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.milestoneId || seededLaunchDeliveryExpansionMilestoneReceipt?.kickoffReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.kickoffId || seededLaunchDeliveryExpansionMilestoneReceipt?.workspaceReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.workspaceId || seededLaunchDeliveryExpansionMilestoneReceipt?.setupReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.setupId || seededLaunchDeliveryExpansionMilestoneReceipt?.activationReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.activationId || seededLaunchDeliveryExpansionMilestoneReceipt?.sourceReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.intakeReceiptId || seededLaunchDeliveryExpansionMilestoneReceipt?.launchReadinessId || seededLaunchDeliveryExpansionMilestoneReceipt?.offerExperimentId || seededLaunchDeliveryExpansionMilestoneReceipt?.marketingChannelExperimentId || seededLaunchDeliveryExpansionMilestoneReceipt?.operatorNextAction || seededLaunchDeliveryExpansionMilestoneReceipt?.cashSpeedScore || seededLaunchDeliveryExpansionMilestoneReceipt?.laborLeverageScore || seededLaunchDeliveryExpansionMilestoneReceipt?.proofReadinessScore || seededLaunchDeliveryExpansionMilestoneReceipt?.marketDemandScore || seededLaunchDeliveryExpansionMilestoneReceipt?.launchPriorityScore) fail("launch offer delivery expansion milestone receipt must not expose expansion milestone/kickoff ids, internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchDeliveryExpansionMilestone = createOfferLaunchDeliveryExpansionMilestoneForKickoffReceipt(dynamicLaunchDeliveryExpansionKickoffReceipt);
const dynamicLaunchDeliveryExpansionMilestoneReceipt = createOfferLaunchDeliveryExpansionMilestoneReceiptForMilestone(dynamicLaunchDeliveryExpansionMilestone);
const unsafeLaunchDeliveryExpansionMilestone = createOfferLaunchDeliveryExpansionMilestoneForKickoffReceipt({ ...dynamicLaunchDeliveryExpansionKickoffReceipt, providerGoLiveRequested: true });
const unsafeLaunchDeliveryExpansionMilestoneReceipt = createOfferLaunchDeliveryExpansionMilestoneReceiptForMilestone({ ...dynamicLaunchDeliveryExpansionMilestone, webportalExportReady: true });
if (unsafeLaunchDeliveryExpansionMilestone !== null) fail("offer launch delivery expansion milestone must reject unsafe expansion-kickoff receipts");
if (unsafeLaunchDeliveryExpansionMilestoneReceipt !== null) fail("offer launch delivery expansion milestone receipt must reject internal/export-ready expansion milestone state");
if (!dynamicLaunchDeliveryExpansionMilestone || dynamicLaunchDeliveryExpansionMilestone.customerVisible !== false || dynamicLaunchDeliveryExpansionMilestone.webportalExportReady !== false || dynamicLaunchDeliveryExpansionMilestone.customerSafeForReceipt !== true || dynamicLaunchDeliveryExpansionMilestone.appOwnedExpansionMilestoneState !== true || dynamicLaunchDeliveryExpansionMilestone.appOwnedExpansionKickoffState !== true || dynamicLaunchDeliveryExpansionMilestone.expansionKickoffReady !== true || dynamicLaunchDeliveryExpansionMilestone.repeatServiceRequested !== true || dynamicLaunchDeliveryExpansionMilestone.renewalRequested !== true || dynamicLaunchDeliveryExpansionMilestone.referralRequested !== true || dynamicLaunchDeliveryExpansionMilestone.expansionMilestoneReady !== true || dynamicLaunchDeliveryExpansionMilestone.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionMilestone.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionMilestone.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionMilestone.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionMilestone.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionMilestone.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionMilestone.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionMilestone.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionMilestone.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionMilestone.nativeExecutionReady !== true || !dynamicLaunchDeliveryExpansionMilestone.expansionKickoffReceiptId || !dynamicLaunchDeliveryExpansionMilestone.operatorNextAction.includes("customer-safe expansion milestone receipt")) fail("dynamic offer launch delivery expansion milestone missing App-owned safe milestone gates");
if (!dynamicLaunchDeliveryExpansionMilestoneReceipt || dynamicLaunchDeliveryExpansionMilestoneReceipt.customerVisible !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.webportalExportReady !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.customerSafe !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.appOwnedExpansionMilestoneState !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.appOwnedExpansionKickoffState !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.expansionKickoffReady !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.repeatServiceRequested !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.renewalRequested !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.referralRequested !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.expansionMilestoneReady !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionMilestoneReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionMilestoneReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionMilestoneReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionMilestoneReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionMilestoneReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionMilestoneReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionMilestoneReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionMilestoneReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryExpansionMilestoneReceipt.expansionKickoffReceiptId || dynamicLaunchDeliveryExpansionMilestoneReceipt.expansionMilestoneId || dynamicLaunchDeliveryExpansionMilestoneReceipt.expansionKickoffId || dynamicLaunchDeliveryExpansionMilestoneReceipt.expansionWorkspaceReceiptId || dynamicLaunchDeliveryExpansionMilestoneReceipt.expansionWorkspaceId || dynamicLaunchDeliveryExpansionMilestoneReceipt.operatorNextAction || dynamicLaunchDeliveryExpansionMilestoneReceipt.launchPriorityScore || dynamicLaunchDeliveryExpansionMilestoneReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryExpansionMilestoneReceipt.offerExperimentId) fail("dynamic launch offer delivery expansion milestone receipt leaks internal expansion milestone/kickoff state or is not customer-safe");
if (!seededLaunchDeliveryExpansionOutcome || seededLaunchDeliveryExpansionOutcome.kind !== "offer-launch-delivery-expansion-outcome" || seededLaunchDeliveryExpansionOutcome.status !== "offer-launch-delivery-expansion-outcome-ready" || seededLaunchDeliveryExpansionOutcome.customerVisible !== false || seededLaunchDeliveryExpansionOutcome.webportalExportReady !== false || seededLaunchDeliveryExpansionOutcome.customerSafeForReceipt !== true || seededLaunchDeliveryExpansionOutcome.appOwnedExpansionOutcomeState !== true || seededLaunchDeliveryExpansionOutcome.appOwnedExpansionMilestoneState !== true || seededLaunchDeliveryExpansionOutcome.expansionMilestoneReady !== true || seededLaunchDeliveryExpansionOutcome.repeatServiceRequested !== true || seededLaunchDeliveryExpansionOutcome.renewalRequested !== true || seededLaunchDeliveryExpansionOutcome.referralRequested !== true || seededLaunchDeliveryExpansionOutcome.expansionOutcomeReady !== true || seededLaunchDeliveryExpansionOutcome.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionOutcome.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionOutcome.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionOutcome.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionOutcome.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionOutcome.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionOutcome.liveProviderEnabled !== false || seededLaunchDeliveryExpansionOutcome.aiForwardCopy !== false || seededLaunchDeliveryExpansionOutcome.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionOutcome.nativeExecutionReady !== true || seededLaunchDeliveryExpansionOutcome.expansionMilestoneReceiptId !== seededLaunchDeliveryExpansionMilestoneReceipt.id || !seededLaunchDeliveryExpansionOutcome.operatorNextAction.includes("customer-safe expansion outcome receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery expansion outcome record");
if (!seededLaunchDeliveryExpansionOutcomeReceipt || seededLaunchDeliveryExpansionOutcomeReceipt.kind !== "offer-launch-delivery-expansion-outcome" || seededLaunchDeliveryExpansionOutcomeReceipt.status !== "customer-safe-offer-launch-delivery-expansion-outcome-ready" || seededLaunchDeliveryExpansionOutcomeReceipt.customerVisible !== true || seededLaunchDeliveryExpansionOutcomeReceipt.webportalExportReady !== true || seededLaunchDeliveryExpansionOutcomeReceipt.customerSafe !== true || seededLaunchDeliveryExpansionOutcomeReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryExpansionOutcomeReceipt.appOwnedExpansionOutcomeState !== true || seededLaunchDeliveryExpansionOutcomeReceipt.appOwnedExpansionMilestoneState !== true || seededLaunchDeliveryExpansionOutcomeReceipt.expansionMilestoneReady !== true || seededLaunchDeliveryExpansionOutcomeReceipt.repeatServiceRequested !== true || seededLaunchDeliveryExpansionOutcomeReceipt.renewalRequested !== true || seededLaunchDeliveryExpansionOutcomeReceipt.referralRequested !== true || seededLaunchDeliveryExpansionOutcomeReceipt.expansionOutcomeReady !== true || seededLaunchDeliveryExpansionOutcomeReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionOutcomeReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionOutcomeReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionOutcomeReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionOutcomeReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionOutcomeReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionOutcomeReceipt.liveProviderEnabled !== false || seededLaunchDeliveryExpansionOutcomeReceipt.aiForwardCopy !== false || seededLaunchDeliveryExpansionOutcomeReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionOutcomeReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryExpansionOutcomeReceipt.nextAction.includes("follow-up, renewal, or referral")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery expansion outcome receipt");
if (seededLaunchDeliveryExpansionOutcomeReceipt?.expansionMilestoneReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.expansionOutcomeId || seededLaunchDeliveryExpansionOutcomeReceipt?.expansionMilestoneId || seededLaunchDeliveryExpansionOutcomeReceipt?.expansionKickoffReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.expansionKickoffId || seededLaunchDeliveryExpansionOutcomeReceipt?.expansionWorkspaceReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.expansionWorkspaceId || seededLaunchDeliveryExpansionOutcomeReceipt?.expansionRequestReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.expansionRequestId || seededLaunchDeliveryExpansionOutcomeReceipt?.acceptanceReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.acceptanceId || seededLaunchDeliveryExpansionOutcomeReceipt?.growthPlanReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.growthPlanId || seededLaunchDeliveryExpansionOutcomeReceipt?.followUpReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.followUpId || seededLaunchDeliveryExpansionOutcomeReceipt?.outcomeReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.outcomeId || seededLaunchDeliveryExpansionOutcomeReceipt?.milestoneReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.milestoneId || seededLaunchDeliveryExpansionOutcomeReceipt?.kickoffReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.kickoffId || seededLaunchDeliveryExpansionOutcomeReceipt?.workspaceReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.workspaceId || seededLaunchDeliveryExpansionOutcomeReceipt?.setupReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.setupId || seededLaunchDeliveryExpansionOutcomeReceipt?.activationReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.activationId || seededLaunchDeliveryExpansionOutcomeReceipt?.sourceReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.intakeReceiptId || seededLaunchDeliveryExpansionOutcomeReceipt?.launchReadinessId || seededLaunchDeliveryExpansionOutcomeReceipt?.offerExperimentId || seededLaunchDeliveryExpansionOutcomeReceipt?.marketingChannelExperimentId || seededLaunchDeliveryExpansionOutcomeReceipt?.operatorNextAction || seededLaunchDeliveryExpansionOutcomeReceipt?.cashSpeedScore || seededLaunchDeliveryExpansionOutcomeReceipt?.laborLeverageScore || seededLaunchDeliveryExpansionOutcomeReceipt?.proofReadinessScore || seededLaunchDeliveryExpansionOutcomeReceipt?.marketDemandScore || seededLaunchDeliveryExpansionOutcomeReceipt?.launchPriorityScore) fail("launch offer delivery expansion outcome receipt must not expose expansion outcome/milestone ids, internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchDeliveryExpansionOutcome = createOfferLaunchDeliveryExpansionOutcomeForMilestoneReceipt(dynamicLaunchDeliveryExpansionMilestoneReceipt);
const dynamicLaunchDeliveryExpansionOutcomeReceipt = createOfferLaunchDeliveryExpansionOutcomeReceiptForOutcome(dynamicLaunchDeliveryExpansionOutcome);
const unsafeLaunchDeliveryExpansionOutcome = createOfferLaunchDeliveryExpansionOutcomeForMilestoneReceipt({ ...dynamicLaunchDeliveryExpansionMilestoneReceipt, paymentLiveEnabled: true });
const unsafeLaunchDeliveryExpansionOutcomeReceipt = createOfferLaunchDeliveryExpansionOutcomeReceiptForOutcome({ ...dynamicLaunchDeliveryExpansionOutcome, webportalExportReady: true });
if (unsafeLaunchDeliveryExpansionOutcome !== null) fail("offer launch delivery expansion outcome must reject unsafe expansion-milestone receipts");
if (unsafeLaunchDeliveryExpansionOutcomeReceipt !== null) fail("offer launch delivery expansion outcome receipt must reject internal/export-ready expansion outcome state");
if (!dynamicLaunchDeliveryExpansionOutcome || dynamicLaunchDeliveryExpansionOutcome.customerVisible !== false || dynamicLaunchDeliveryExpansionOutcome.webportalExportReady !== false || dynamicLaunchDeliveryExpansionOutcome.customerSafeForReceipt !== true || dynamicLaunchDeliveryExpansionOutcome.appOwnedExpansionOutcomeState !== true || dynamicLaunchDeliveryExpansionOutcome.appOwnedExpansionMilestoneState !== true || dynamicLaunchDeliveryExpansionOutcome.expansionMilestoneReady !== true || dynamicLaunchDeliveryExpansionOutcome.repeatServiceRequested !== true || dynamicLaunchDeliveryExpansionOutcome.renewalRequested !== true || dynamicLaunchDeliveryExpansionOutcome.referralRequested !== true || dynamicLaunchDeliveryExpansionOutcome.expansionOutcomeReady !== true || dynamicLaunchDeliveryExpansionOutcome.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionOutcome.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionOutcome.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionOutcome.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionOutcome.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionOutcome.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionOutcome.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionOutcome.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionOutcome.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionOutcome.nativeExecutionReady !== true || !dynamicLaunchDeliveryExpansionOutcome.expansionMilestoneReceiptId || !dynamicLaunchDeliveryExpansionOutcome.operatorNextAction.includes("customer-safe expansion outcome receipt")) fail("dynamic offer launch delivery expansion outcome missing App-owned safe outcome gates");
if (!dynamicLaunchDeliveryExpansionOutcomeReceipt || dynamicLaunchDeliveryExpansionOutcomeReceipt.customerVisible !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.webportalExportReady !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.customerSafe !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.appOwnedExpansionOutcomeState !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.appOwnedExpansionMilestoneState !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.expansionMilestoneReady !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.repeatServiceRequested !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.renewalRequested !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.referralRequested !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.expansionOutcomeReady !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionOutcomeReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionOutcomeReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionOutcomeReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionOutcomeReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionOutcomeReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionOutcomeReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionOutcomeReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionOutcomeReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryExpansionOutcomeReceipt.expansionMilestoneReceiptId || dynamicLaunchDeliveryExpansionOutcomeReceipt.expansionOutcomeId || dynamicLaunchDeliveryExpansionOutcomeReceipt.expansionMilestoneId || dynamicLaunchDeliveryExpansionOutcomeReceipt.expansionKickoffReceiptId || dynamicLaunchDeliveryExpansionOutcomeReceipt.expansionKickoffId || dynamicLaunchDeliveryExpansionOutcomeReceipt.operatorNextAction || dynamicLaunchDeliveryExpansionOutcomeReceipt.launchPriorityScore || dynamicLaunchDeliveryExpansionOutcomeReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryExpansionOutcomeReceipt.offerExperimentId) fail("dynamic launch offer delivery expansion outcome receipt leaks internal expansion outcome/milestone state or is not customer-safe");
if (!seededLaunchDeliveryExpansionFollowUp || seededLaunchDeliveryExpansionFollowUp.kind !== "offer-launch-delivery-expansion-follow-up" || seededLaunchDeliveryExpansionFollowUp.status !== "offer-launch-delivery-expansion-follow-up-ready" || seededLaunchDeliveryExpansionFollowUp.customerVisible !== false || seededLaunchDeliveryExpansionFollowUp.webportalExportReady !== false || seededLaunchDeliveryExpansionFollowUp.customerSafeForReceipt !== true || seededLaunchDeliveryExpansionFollowUp.appOwnedExpansionFollowUpState !== true || seededLaunchDeliveryExpansionFollowUp.appOwnedExpansionOutcomeState !== true || seededLaunchDeliveryExpansionFollowUp.expansionOutcomeReady !== true || seededLaunchDeliveryExpansionFollowUp.repeatServiceReady !== true || seededLaunchDeliveryExpansionFollowUp.renewalReady !== true || seededLaunchDeliveryExpansionFollowUp.referralReady !== true || seededLaunchDeliveryExpansionFollowUp.expansionFollowUpReady !== true || seededLaunchDeliveryExpansionFollowUp.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionFollowUp.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionFollowUp.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionFollowUp.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionFollowUp.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionFollowUp.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionFollowUp.liveProviderEnabled !== false || seededLaunchDeliveryExpansionFollowUp.aiForwardCopy !== false || seededLaunchDeliveryExpansionFollowUp.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionFollowUp.nativeExecutionReady !== true || seededLaunchDeliveryExpansionFollowUp.expansionOutcomeReceiptId !== seededLaunchDeliveryExpansionOutcomeReceipt.id || !seededLaunchDeliveryExpansionFollowUp.operatorNextAction.includes("customer-safe expansion follow-up receipt")) fail("seeded WORKSHOP ledger missing App-owned offer launch delivery expansion follow-up record");
if (!seededLaunchDeliveryExpansionFollowUpReceipt || seededLaunchDeliveryExpansionFollowUpReceipt.kind !== "offer-launch-delivery-expansion-follow-up" || seededLaunchDeliveryExpansionFollowUpReceipt.status !== "customer-safe-offer-launch-delivery-expansion-follow-up-ready" || seededLaunchDeliveryExpansionFollowUpReceipt.customerVisible !== true || seededLaunchDeliveryExpansionFollowUpReceipt.webportalExportReady !== true || seededLaunchDeliveryExpansionFollowUpReceipt.customerSafe !== true || seededLaunchDeliveryExpansionFollowUpReceipt.customerVisibleReceiptReady !== true || seededLaunchDeliveryExpansionFollowUpReceipt.appOwnedExpansionFollowUpState !== true || seededLaunchDeliveryExpansionFollowUpReceipt.appOwnedExpansionOutcomeState !== true || seededLaunchDeliveryExpansionFollowUpReceipt.expansionOutcomeReady !== true || seededLaunchDeliveryExpansionFollowUpReceipt.repeatServiceReady !== true || seededLaunchDeliveryExpansionFollowUpReceipt.renewalReady !== true || seededLaunchDeliveryExpansionFollowUpReceipt.referralReady !== true || seededLaunchDeliveryExpansionFollowUpReceipt.expansionFollowUpReady !== true || seededLaunchDeliveryExpansionFollowUpReceipt.compatibilityGateRequired !== false || seededLaunchDeliveryExpansionFollowUpReceipt.epochTimingProviderOnly !== true || seededLaunchDeliveryExpansionFollowUpReceipt.workshopCalendarOwnership !== false || seededLaunchDeliveryExpansionFollowUpReceipt.monitorWorkflowExposed !== false || seededLaunchDeliveryExpansionFollowUpReceipt.paymentLiveEnabled !== false || seededLaunchDeliveryExpansionFollowUpReceipt.providerGoLiveRequested !== false || seededLaunchDeliveryExpansionFollowUpReceipt.liveProviderEnabled !== false || seededLaunchDeliveryExpansionFollowUpReceipt.aiForwardCopy !== false || seededLaunchDeliveryExpansionFollowUpReceipt.japanCopyMode !== "ai-neutral" || seededLaunchDeliveryExpansionFollowUpReceipt.nativeExecutionReady !== true || !seededLaunchDeliveryExpansionFollowUpReceipt.nextAction.includes("repeat-service, renewal, or referral")) fail("seeded WORKSHOP ledger missing customer-safe offer launch delivery expansion follow-up receipt");
if (seededLaunchDeliveryExpansionFollowUpReceipt?.expansionOutcomeReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.expansionFollowUpId || seededLaunchDeliveryExpansionFollowUpReceipt?.expansionOutcomeId || seededLaunchDeliveryExpansionFollowUpReceipt?.expansionMilestoneReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.expansionMilestoneId || seededLaunchDeliveryExpansionFollowUpReceipt?.expansionKickoffReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.expansionKickoffId || seededLaunchDeliveryExpansionFollowUpReceipt?.expansionWorkspaceReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.expansionWorkspaceId || seededLaunchDeliveryExpansionFollowUpReceipt?.expansionRequestReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.expansionRequestId || seededLaunchDeliveryExpansionFollowUpReceipt?.acceptanceReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.acceptanceId || seededLaunchDeliveryExpansionFollowUpReceipt?.growthPlanReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.growthPlanId || seededLaunchDeliveryExpansionFollowUpReceipt?.followUpReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.followUpId || seededLaunchDeliveryExpansionFollowUpReceipt?.outcomeReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.outcomeId || seededLaunchDeliveryExpansionFollowUpReceipt?.milestoneReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.milestoneId || seededLaunchDeliveryExpansionFollowUpReceipt?.kickoffReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.kickoffId || seededLaunchDeliveryExpansionFollowUpReceipt?.workspaceReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.workspaceId || seededLaunchDeliveryExpansionFollowUpReceipt?.setupReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.setupId || seededLaunchDeliveryExpansionFollowUpReceipt?.activationReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.activationId || seededLaunchDeliveryExpansionFollowUpReceipt?.sourceReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.intakeReceiptId || seededLaunchDeliveryExpansionFollowUpReceipt?.launchReadinessId || seededLaunchDeliveryExpansionFollowUpReceipt?.offerExperimentId || seededLaunchDeliveryExpansionFollowUpReceipt?.marketingChannelExperimentId || seededLaunchDeliveryExpansionFollowUpReceipt?.operatorNextAction || seededLaunchDeliveryExpansionFollowUpReceipt?.cashSpeedScore || seededLaunchDeliveryExpansionFollowUpReceipt?.laborLeverageScore || seededLaunchDeliveryExpansionFollowUpReceipt?.proofReadinessScore || seededLaunchDeliveryExpansionFollowUpReceipt?.marketDemandScore || seededLaunchDeliveryExpansionFollowUpReceipt?.launchPriorityScore) fail("launch offer delivery expansion follow-up receipt must not expose expansion follow-up/outcome ids, internal launch scoring, experiment, channel, or operator fields");
const dynamicLaunchDeliveryExpansionFollowUp = createOfferLaunchDeliveryExpansionFollowUpForOutcomeReceipt(dynamicLaunchDeliveryExpansionOutcomeReceipt);
const dynamicLaunchDeliveryExpansionFollowUpReceipt = createOfferLaunchDeliveryExpansionFollowUpReceiptForFollowUp(dynamicLaunchDeliveryExpansionFollowUp);
const unsafeLaunchDeliveryExpansionFollowUp = createOfferLaunchDeliveryExpansionFollowUpForOutcomeReceipt({ ...dynamicLaunchDeliveryExpansionOutcomeReceipt, paymentLiveEnabled: true });
const unsafeLaunchDeliveryExpansionFollowUpReceipt = createOfferLaunchDeliveryExpansionFollowUpReceiptForFollowUp({ ...dynamicLaunchDeliveryExpansionFollowUp, webportalExportReady: true });
if (unsafeLaunchDeliveryExpansionFollowUp !== null) fail("offer launch delivery expansion follow-up must reject unsafe expansion-outcome receipts");
if (unsafeLaunchDeliveryExpansionFollowUpReceipt !== null) fail("offer launch delivery expansion follow-up receipt must reject internal/export-ready expansion follow-up state");
if (!dynamicLaunchDeliveryExpansionFollowUp || dynamicLaunchDeliveryExpansionFollowUp.customerVisible !== false || dynamicLaunchDeliveryExpansionFollowUp.webportalExportReady !== false || dynamicLaunchDeliveryExpansionFollowUp.customerSafeForReceipt !== true || dynamicLaunchDeliveryExpansionFollowUp.appOwnedExpansionFollowUpState !== true || dynamicLaunchDeliveryExpansionFollowUp.appOwnedExpansionOutcomeState !== true || dynamicLaunchDeliveryExpansionFollowUp.expansionOutcomeReady !== true || dynamicLaunchDeliveryExpansionFollowUp.repeatServiceReady !== true || dynamicLaunchDeliveryExpansionFollowUp.renewalReady !== true || dynamicLaunchDeliveryExpansionFollowUp.referralReady !== true || dynamicLaunchDeliveryExpansionFollowUp.expansionFollowUpReady !== true || dynamicLaunchDeliveryExpansionFollowUp.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionFollowUp.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionFollowUp.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionFollowUp.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionFollowUp.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionFollowUp.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionFollowUp.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionFollowUp.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionFollowUp.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionFollowUp.nativeExecutionReady !== true || !dynamicLaunchDeliveryExpansionFollowUp.expansionOutcomeReceiptId || !dynamicLaunchDeliveryExpansionFollowUp.operatorNextAction.includes("customer-safe expansion follow-up receipt")) fail("dynamic offer launch delivery expansion follow-up missing App-owned safe follow-up gates");
if (!dynamicLaunchDeliveryExpansionFollowUpReceipt || dynamicLaunchDeliveryExpansionFollowUpReceipt.customerVisible !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.webportalExportReady !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.customerSafe !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.customerVisibleReceiptReady !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.appOwnedExpansionFollowUpState !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.appOwnedExpansionOutcomeState !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.expansionOutcomeReady !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.repeatServiceReady !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.renewalReady !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.referralReady !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.expansionFollowUpReady !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.compatibilityGateRequired !== false || dynamicLaunchDeliveryExpansionFollowUpReceipt.epochTimingProviderOnly !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.workshopCalendarOwnership !== false || dynamicLaunchDeliveryExpansionFollowUpReceipt.monitorWorkflowExposed !== false || dynamicLaunchDeliveryExpansionFollowUpReceipt.paymentLiveEnabled !== false || dynamicLaunchDeliveryExpansionFollowUpReceipt.providerGoLiveRequested !== false || dynamicLaunchDeliveryExpansionFollowUpReceipt.liveProviderEnabled !== false || dynamicLaunchDeliveryExpansionFollowUpReceipt.aiForwardCopy !== false || dynamicLaunchDeliveryExpansionFollowUpReceipt.japanCopyMode !== "ai-neutral" || dynamicLaunchDeliveryExpansionFollowUpReceipt.nativeExecutionReady !== true || dynamicLaunchDeliveryExpansionFollowUpReceipt.expansionOutcomeReceiptId || dynamicLaunchDeliveryExpansionFollowUpReceipt.expansionFollowUpId || dynamicLaunchDeliveryExpansionFollowUpReceipt.expansionOutcomeId || dynamicLaunchDeliveryExpansionFollowUpReceipt.expansionMilestoneReceiptId || dynamicLaunchDeliveryExpansionFollowUpReceipt.expansionMilestoneId || dynamicLaunchDeliveryExpansionFollowUpReceipt.operatorNextAction || dynamicLaunchDeliveryExpansionFollowUpReceipt.launchPriorityScore || dynamicLaunchDeliveryExpansionFollowUpReceipt.marketingChannelExperimentId || dynamicLaunchDeliveryExpansionFollowUpReceipt.offerExperimentId) fail("dynamic launch offer delivery expansion follow-up receipt leaks internal expansion follow-up/outcome state or is not customer-safe");
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
if (!initialWorkshopLedger.packageDeliveryRetentionReports?.some((item) => item.customerVisible === false && item.webportalExportReady === false && item.customerSafeForReceipt === true && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.executionReady === true && item.followUpReady === true && item.renewalReady === true && item.qualityReviewReady === true && item.outcomeReady === true && item.accountGrowthReady === true && item.retentionReady === true && item.referralReady === true && item.expansionReady === true && item.qualityOutcomeReceiptMatched === true && item.retentionReportingReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false && item.epochTimingProviderOnly === true && item.paymentLiveEnabled === false)) fail("seeded WORKSHOP ledger missing internal package delivery retention report");
if (!initialWorkshopLedger.packageDeliveryRetentionReportReceipts?.some((item) => item.customerVisible === true && item.webportalExportReady === true && item.customerSafe === true && item.packageSupportReady === true && item.lowLaborReuseReady === true && item.executionReady === true && item.followUpReady === true && item.renewalReady === true && item.qualityReviewReady === true && item.outcomeReady === true && item.accountGrowthReady === true && item.retentionReady === true && item.referralReady === true && item.expansionReady === true && item.qualityOutcomeReceiptMatched === true && item.retentionReportingReady === true && item.requiresEpochTimingRequest === false && item.monitorWorkflowExposed === false && item.workshopCalendarOwnership === false && item.epochTimingProviderOnly === true && item.paymentLiveEnabled === false)) fail("seeded WORKSHOP ledger missing customer-safe package delivery retention report receipt");
const seededPackageDeliveryGrowthAction = initialWorkshopLedger.packageDeliveryGrowthActions?.find((item) => item.status === "package-delivery-growth-action-ready");
const seededPackageDeliveryGrowthActionReceipt = initialWorkshopLedger.packageDeliveryGrowthActionReceipts?.find((item) => item.status === "customer-safe-package-delivery-growth-action-ready");
if (!seededPackageDeliveryGrowthAction || seededPackageDeliveryGrowthAction.customerVisible !== false || seededPackageDeliveryGrowthAction.webportalExportReady !== false || seededPackageDeliveryGrowthAction.customerSafeForReceipt !== true || seededPackageDeliveryGrowthAction.growthActionReady !== true || seededPackageDeliveryGrowthAction.packageSupportReady !== true || seededPackageDeliveryGrowthAction.lowLaborReuseReady !== true || seededPackageDeliveryGrowthAction.executionReady !== true || seededPackageDeliveryGrowthAction.followUpReady !== true || seededPackageDeliveryGrowthAction.renewalReady !== true || seededPackageDeliveryGrowthAction.qualityReviewReady !== true || seededPackageDeliveryGrowthAction.outcomeReady !== true || seededPackageDeliveryGrowthAction.accountGrowthReady !== true || seededPackageDeliveryGrowthAction.retentionReady !== true || seededPackageDeliveryGrowthAction.referralReady !== true || seededPackageDeliveryGrowthAction.expansionReady !== true || seededPackageDeliveryGrowthAction.qualityOutcomeReceiptMatched !== true || seededPackageDeliveryGrowthAction.retentionReportingReady !== true || seededPackageDeliveryGrowthAction.requiresEpochTimingRequest !== false || seededPackageDeliveryGrowthAction.monitorWorkflowExposed !== false || seededPackageDeliveryGrowthAction.workshopCalendarOwnership !== false || seededPackageDeliveryGrowthAction.epochTimingProviderOnly !== true || seededPackageDeliveryGrowthAction.paymentLiveEnabled !== false || !seededPackageDeliveryGrowthAction.retentionReportId || !seededPackageDeliveryGrowthAction.retentionReportReceiptId || !seededPackageDeliveryGrowthAction.accountGrowthPlanId || !seededPackageDeliveryGrowthAction.retentionSignalId || !seededPackageDeliveryGrowthAction.referralSignalId || !seededPackageDeliveryGrowthAction.expansionSignalId) fail("seeded WORKSHOP ledger missing internal package delivery growth action");
if (!seededPackageDeliveryGrowthActionReceipt || seededPackageDeliveryGrowthActionReceipt.customerVisible !== true || seededPackageDeliveryGrowthActionReceipt.webportalExportReady !== true || seededPackageDeliveryGrowthActionReceipt.customerSafe !== true || seededPackageDeliveryGrowthActionReceipt.growthActionReady !== true || seededPackageDeliveryGrowthActionReceipt.packageSupportReady !== true || seededPackageDeliveryGrowthActionReceipt.lowLaborReuseReady !== true || seededPackageDeliveryGrowthActionReceipt.executionReady !== true || seededPackageDeliveryGrowthActionReceipt.followUpReady !== true || seededPackageDeliveryGrowthActionReceipt.renewalReady !== true || seededPackageDeliveryGrowthActionReceipt.qualityReviewReady !== true || seededPackageDeliveryGrowthActionReceipt.outcomeReady !== true || seededPackageDeliveryGrowthActionReceipt.accountGrowthReady !== true || seededPackageDeliveryGrowthActionReceipt.retentionReady !== true || seededPackageDeliveryGrowthActionReceipt.referralReady !== true || seededPackageDeliveryGrowthActionReceipt.expansionReady !== true || seededPackageDeliveryGrowthActionReceipt.qualityOutcomeReceiptMatched !== true || seededPackageDeliveryGrowthActionReceipt.retentionReportingReady !== true || seededPackageDeliveryGrowthActionReceipt.requiresEpochTimingRequest !== false || seededPackageDeliveryGrowthActionReceipt.monitorWorkflowExposed !== false || seededPackageDeliveryGrowthActionReceipt.workshopCalendarOwnership !== false || seededPackageDeliveryGrowthActionReceipt.epochTimingProviderOnly !== true || seededPackageDeliveryGrowthActionReceipt.paymentLiveEnabled !== false) fail("seeded WORKSHOP ledger missing customer-safe package delivery growth action receipt");
if (seededPackageDeliveryGrowthActionReceipt?.actionId || seededPackageDeliveryGrowthActionReceipt?.retentionReportId || seededPackageDeliveryGrowthActionReceipt?.retentionReportReceiptId || seededPackageDeliveryGrowthActionReceipt?.reportId || seededPackageDeliveryGrowthActionReceipt?.accountGrowthReceiptId || seededPackageDeliveryGrowthActionReceipt?.qualityOutcomeReceiptId || seededPackageDeliveryGrowthActionReceipt?.accountGrowthPlanId || seededPackageDeliveryGrowthActionReceipt?.retentionSignalId || seededPackageDeliveryGrowthActionReceipt?.referralSignalId || seededPackageDeliveryGrowthActionReceipt?.expansionSignalId || seededPackageDeliveryGrowthActionReceipt?.operatorNextAction) fail("seeded package delivery growth action receipt exposes internal action, report, signal, or operator fields");
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
const adultOpenPackageDeliveryRetentionReport = createPackageDeliveryRetentionReportForAccountGrowth(null, null, null);
const adultOpenPackageDeliveryGrowthAction = createPackageDeliveryGrowthActionForRetentionReport(null, null);
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
const adultApprovedPackageDeliveryRetentionReport = createPackageDeliveryRetentionReportForAccountGrowth(adultApprovedPackageDeliveryAccountGrowthLinkage, adultApprovedPackageDeliveryAccountGrowthReceipt, adultApprovedPackageDeliveryQualityOutcomeReceipt);
const adultApprovedPackageDeliveryRetentionReportReceipt = createPackageDeliveryRetentionReportReceiptForRecord(adultApprovedPackageDeliveryRetentionReport);
const adultApprovedPackageDeliveryGrowthAction = createPackageDeliveryGrowthActionForRetentionReport(adultApprovedPackageDeliveryRetentionReport, adultApprovedPackageDeliveryRetentionReportReceipt);
const adultApprovedPackageDeliveryGrowthActionReceipt = createPackageDeliveryGrowthActionReceiptForAction(adultApprovedPackageDeliveryGrowthAction);
const adultMismatchedPackageDeliveryRetentionReport = createPackageDeliveryRetentionReportForAccountGrowth(
  { ...adultApprovedPackageDeliveryAccountGrowthLinkage, qualityOutcomeReceiptId: "quality-outcome-other" },
  adultApprovedPackageDeliveryAccountGrowthReceipt,
  adultApprovedPackageDeliveryQualityOutcomeReceipt
);
const adultMismatchedPackageDeliveryGrowthAction = createPackageDeliveryGrowthActionForRetentionReport(
  adultApprovedPackageDeliveryRetentionReport,
  { ...adultApprovedPackageDeliveryRetentionReportReceipt, packageId: "pkg-other" }
);
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
if (adultOpenPackageDeliveryRetentionReport !== null) fail("open ARA review decision must not produce package delivery retention report");
if (adultOpenPackageDeliveryGrowthAction !== null) fail("open ARA review decision must not produce package delivery growth action");
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
if (adultMismatchedPackageDeliveryRetentionReport !== null) fail("package delivery retention report must reject mismatched quality outcome receipt provenance");
if (!adultApprovedPackageDeliveryRetentionReport || adultApprovedPackageDeliveryRetentionReport.kind !== "package-delivery-retention-reporting" || adultApprovedPackageDeliveryRetentionReport.status !== "package-delivery-retention-reporting-ready" || adultApprovedPackageDeliveryRetentionReport.customerVisible !== false || adultApprovedPackageDeliveryRetentionReport.webportalExportReady !== false || adultApprovedPackageDeliveryRetentionReport.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryRetentionReport.paymentLiveEnabled !== false || adultApprovedPackageDeliveryRetentionReport.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryRetentionReport.customerSafeForReceipt !== true || adultApprovedPackageDeliveryRetentionReport.qualityOutcomeReceiptMatched !== true || adultApprovedPackageDeliveryRetentionReport.retentionReportingReady !== true || adultApprovedPackageDeliveryRetentionReport.accountGrowthReady !== true || adultApprovedPackageDeliveryRetentionReport.retentionReady !== true || adultApprovedPackageDeliveryRetentionReport.referralReady !== true || adultApprovedPackageDeliveryRetentionReport.expansionReady !== true || adultApprovedPackageDeliveryRetentionReport.requiresEpochTimingRequest !== false || adultApprovedPackageDeliveryRetentionReport.packageId !== "pkg-cohort-subscription" || !adultApprovedPackageDeliveryRetentionReport.operatorNextAction.includes("export only the customer-safe retention-report receipt")) fail("approved package delivery retention report missing internal retention-reporting-control state");
if (!adultApprovedPackageDeliveryRetentionReportReceipt || adultApprovedPackageDeliveryRetentionReportReceipt.kind !== "package-delivery-retention-report" || adultApprovedPackageDeliveryRetentionReportReceipt.status !== "customer-safe-package-delivery-retention-report-ready" || adultApprovedPackageDeliveryRetentionReportReceipt.customerVisible !== true || adultApprovedPackageDeliveryRetentionReportReceipt.webportalExportReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryRetentionReportReceipt.paymentLiveEnabled !== false || adultApprovedPackageDeliveryRetentionReportReceipt.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryRetentionReportReceipt.packageSupportReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.lowLaborReuseReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.executionReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.followUpReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.renewalReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.qualityReviewReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.outcomeReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.accountGrowthReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.retentionReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.referralReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.expansionReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.qualityOutcomeReceiptMatched !== true || adultApprovedPackageDeliveryRetentionReportReceipt.retentionReportingReady !== true || adultApprovedPackageDeliveryRetentionReportReceipt.requiresEpochTimingRequest !== false || !adultApprovedPackageDeliveryRetentionReportReceipt.nextAction.includes("Request EPOCH timing only")) fail("approved package delivery retention report receipt missing customer-safe Webportal-ready state");
if (adultApprovedPackageDeliveryRetentionReportReceipt.reportId || adultApprovedPackageDeliveryRetentionReportReceipt.accountGrowthReceiptId || adultApprovedPackageDeliveryRetentionReportReceipt.qualityOutcomeReceiptId || adultApprovedPackageDeliveryRetentionReportReceipt.accountGrowthPlanId || adultApprovedPackageDeliveryRetentionReportReceipt.retentionSignalId || adultApprovedPackageDeliveryRetentionReportReceipt.referralSignalId || adultApprovedPackageDeliveryRetentionReportReceipt.expansionSignalId || adultApprovedPackageDeliveryRetentionReportReceipt.linkageId || adultApprovedPackageDeliveryRetentionReportReceipt.reuseId || adultApprovedPackageDeliveryRetentionReportReceipt.materializationId || adultApprovedPackageDeliveryRetentionReportReceipt.queueId || adultApprovedPackageDeliveryRetentionReportReceipt.decisionId || adultApprovedPackageDeliveryRetentionReportReceipt.packetId || adultApprovedPackageDeliveryRetentionReportReceipt.assignmentId || adultApprovedPackageDeliveryRetentionReportReceipt.checklistId || adultApprovedPackageDeliveryRetentionReportReceipt.automationId || adultApprovedPackageDeliveryRetentionReportReceipt.executionId || adultApprovedPackageDeliveryRetentionReportReceipt.executionReceiptId || adultApprovedPackageDeliveryRetentionReportReceipt.followUpId || adultApprovedPackageDeliveryRetentionReportReceipt.followUpRenewalId || adultApprovedPackageDeliveryRetentionReportReceipt.followUpRenewalReceiptId || adultApprovedPackageDeliveryRetentionReportReceipt.qualityOutcomeId || adultApprovedPackageDeliveryRetentionReportReceipt.outcomeId || adultApprovedPackageDeliveryRetentionReportReceipt.operatorNextAction || !adultApprovedPackageDeliveryRetentionReportReceipt.summary.includes("without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, account-growth-control, retention-reporting-control, or package-control records")) fail("package delivery retention report receipt must not expose internal report, account-growth, outcome, follow-up, execution, automation, checklist, materialization, review, or reuse ids");
if (adultMismatchedPackageDeliveryGrowthAction !== null) fail("package delivery growth action must reject mismatched retention-report receipt provenance");
if (!adultApprovedPackageDeliveryGrowthAction || adultApprovedPackageDeliveryGrowthAction.kind !== "package-delivery-growth-action" || adultApprovedPackageDeliveryGrowthAction.status !== "package-delivery-growth-action-ready" || adultApprovedPackageDeliveryGrowthAction.growthPath !== "retention-report-repeat-referral-expansion-action" || adultApprovedPackageDeliveryGrowthAction.customerVisible !== false || adultApprovedPackageDeliveryGrowthAction.webportalExportReady !== false || adultApprovedPackageDeliveryGrowthAction.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryGrowthAction.paymentLiveEnabled !== false || adultApprovedPackageDeliveryGrowthAction.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryGrowthAction.customerSafeForReceipt !== true || adultApprovedPackageDeliveryGrowthAction.growthActionReady !== true || adultApprovedPackageDeliveryGrowthAction.retentionReportingReady !== true || adultApprovedPackageDeliveryGrowthAction.accountGrowthReady !== true || adultApprovedPackageDeliveryGrowthAction.retentionReady !== true || adultApprovedPackageDeliveryGrowthAction.referralReady !== true || adultApprovedPackageDeliveryGrowthAction.expansionReady !== true || adultApprovedPackageDeliveryGrowthAction.requiresEpochTimingRequest !== false || adultApprovedPackageDeliveryGrowthAction.packageId !== "pkg-cohort-subscription" || !adultApprovedPackageDeliveryGrowthAction.retentionReportId || !adultApprovedPackageDeliveryGrowthAction.retentionReportReceiptId || !adultApprovedPackageDeliveryGrowthAction.operatorNextAction.includes("export only the customer-safe growth-action receipt")) fail("approved package delivery growth action missing internal growth-action-control state");
if (!adultApprovedPackageDeliveryGrowthActionReceipt || adultApprovedPackageDeliveryGrowthActionReceipt.kind !== "package-delivery-growth-action" || adultApprovedPackageDeliveryGrowthActionReceipt.status !== "customer-safe-package-delivery-growth-action-ready" || adultApprovedPackageDeliveryGrowthActionReceipt.customerVisible !== true || adultApprovedPackageDeliveryGrowthActionReceipt.webportalExportReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.monitorWorkflowExposed !== false || adultApprovedPackageDeliveryGrowthActionReceipt.paymentLiveEnabled !== false || adultApprovedPackageDeliveryGrowthActionReceipt.workshopCalendarOwnership !== false || adultApprovedPackageDeliveryGrowthActionReceipt.packageSupportReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.lowLaborReuseReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.executionReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.followUpReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.renewalReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.qualityReviewReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.outcomeReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.accountGrowthReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.retentionReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.referralReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.expansionReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.qualityOutcomeReceiptMatched !== true || adultApprovedPackageDeliveryGrowthActionReceipt.retentionReportingReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.growthActionReady !== true || adultApprovedPackageDeliveryGrowthActionReceipt.requiresEpochTimingRequest !== false || !adultApprovedPackageDeliveryGrowthActionReceipt.nextAction.includes("Request EPOCH timing only")) fail("approved package delivery growth action receipt missing customer-safe Webportal-ready state");
if (adultApprovedPackageDeliveryGrowthActionReceipt.actionId || adultApprovedPackageDeliveryGrowthActionReceipt.retentionReportId || adultApprovedPackageDeliveryGrowthActionReceipt.retentionReportReceiptId || adultApprovedPackageDeliveryGrowthActionReceipt.reportId || adultApprovedPackageDeliveryGrowthActionReceipt.accountGrowthReceiptId || adultApprovedPackageDeliveryGrowthActionReceipt.qualityOutcomeReceiptId || adultApprovedPackageDeliveryGrowthActionReceipt.accountGrowthPlanId || adultApprovedPackageDeliveryGrowthActionReceipt.retentionSignalId || adultApprovedPackageDeliveryGrowthActionReceipt.referralSignalId || adultApprovedPackageDeliveryGrowthActionReceipt.expansionSignalId || adultApprovedPackageDeliveryGrowthActionReceipt.linkageId || adultApprovedPackageDeliveryGrowthActionReceipt.reuseId || adultApprovedPackageDeliveryGrowthActionReceipt.materializationId || adultApprovedPackageDeliveryGrowthActionReceipt.queueId || adultApprovedPackageDeliveryGrowthActionReceipt.decisionId || adultApprovedPackageDeliveryGrowthActionReceipt.packetId || adultApprovedPackageDeliveryGrowthActionReceipt.assignmentId || adultApprovedPackageDeliveryGrowthActionReceipt.checklistId || adultApprovedPackageDeliveryGrowthActionReceipt.automationId || adultApprovedPackageDeliveryGrowthActionReceipt.executionId || adultApprovedPackageDeliveryGrowthActionReceipt.executionReceiptId || adultApprovedPackageDeliveryGrowthActionReceipt.followUpId || adultApprovedPackageDeliveryGrowthActionReceipt.followUpRenewalId || adultApprovedPackageDeliveryGrowthActionReceipt.followUpRenewalReceiptId || adultApprovedPackageDeliveryGrowthActionReceipt.qualityOutcomeId || adultApprovedPackageDeliveryGrowthActionReceipt.outcomeId || adultApprovedPackageDeliveryGrowthActionReceipt.operatorNextAction || !adultApprovedPackageDeliveryGrowthActionReceipt.summary.includes("without exposing internal report, account-growth, quality/outcome, signal, packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, retention-reporting-control, growth-action-control, or package-control records")) fail("package delivery growth action receipt must not expose internal action, report, signal, account-growth, outcome, follow-up, execution, automation, checklist, materialization, review, or reuse ids");

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
const offerLaunchReadinessNormalizerStart = script.indexOf("const normalizeOfferLaunchReadinessReceiptExport");
const offerLaunchReadinessNormalizerEnd = script.indexOf("const normalizeOfferLaunchReadinessReceiptPayload", offerLaunchReadinessNormalizerStart);
const offerLaunchReadinessNormalizer = offerLaunchReadinessNormalizerStart >= 0 && offerLaunchReadinessNormalizerEnd > offerLaunchReadinessNormalizerStart
  ? script.slice(offerLaunchReadinessNormalizerStart, offerLaunchReadinessNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
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
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-readiness\"",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchReadinessNormalizer.includes(phrase)) fail(`offer launch readiness Webportal normalizer missing safety gate ${phrase}`);
}
const portalOfferLaunchReadinessExportStart = script.indexOf('"portal-offer-launch-readiness-receipt-export"');
const portalOfferLaunchReadinessExportEnd = script.indexOf('"No customer-safe App offer launch readiness receipts loaded."', portalOfferLaunchReadinessExportStart);
const portalOfferLaunchReadinessExportRenderer = portalOfferLaunchReadinessExportStart >= 0 && portalOfferLaunchReadinessExportEnd > portalOfferLaunchReadinessExportStart
  ? script.slice(portalOfferLaunchReadinessExportStart, portalOfferLaunchReadinessExportEnd)
  : "";
if (!portalOfferLaunchReadinessExportRenderer || portalOfferLaunchReadinessExportRenderer.includes("launchReadinessId") || portalOfferLaunchReadinessExportRenderer.includes("offerExperimentId") || portalOfferLaunchReadinessExportRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchReadinessExportRenderer.includes("revenueReceiptId") || portalOfferLaunchReadinessExportRenderer.includes("deliveryLogId") || portalOfferLaunchReadinessExportRenderer.includes("cashSpeedScore") || portalOfferLaunchReadinessExportRenderer.includes("laborLeverageScore") || portalOfferLaunchReadinessExportRenderer.includes("proofReadinessScore") || portalOfferLaunchReadinessExportRenderer.includes("marketDemandScore") || portalOfferLaunchReadinessExportRenderer.includes("launchPriorityScore") || portalOfferLaunchReadinessExportRenderer.includes("operatorNextAction")) fail("portal offer launch readiness export exposes internal launch scoring, experiment, channel, revenue, delivery, or operator controls");
const portalOfferLaunchIntakeStatusStart = script.indexOf('renderStack("portal-offer-launch-intake-status"');
const portalOfferLaunchIntakeStatusEnd = script.indexOf('"No customer-safe launch offer intake requests yet."', portalOfferLaunchIntakeStatusStart);
const portalOfferLaunchIntakeStatusRenderer = portalOfferLaunchIntakeStatusStart >= 0 && portalOfferLaunchIntakeStatusEnd > portalOfferLaunchIntakeStatusStart
  ? script.slice(portalOfferLaunchIntakeStatusStart, portalOfferLaunchIntakeStatusEnd)
  : "";
if (!portalOfferLaunchIntakeStatusRenderer || portalOfferLaunchIntakeStatusRenderer.includes("sourceReceiptId") || portalOfferLaunchIntakeStatusRenderer.includes("launchReadinessId") || portalOfferLaunchIntakeStatusRenderer.includes("offerExperimentId") || portalOfferLaunchIntakeStatusRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchIntakeStatusRenderer.includes("revenueReceiptId") || portalOfferLaunchIntakeStatusRenderer.includes("deliveryLogId") || portalOfferLaunchIntakeStatusRenderer.includes("cashSpeedScore") || portalOfferLaunchIntakeStatusRenderer.includes("laborLeverageScore") || portalOfferLaunchIntakeStatusRenderer.includes("proofReadinessScore") || portalOfferLaunchIntakeStatusRenderer.includes("marketDemandScore") || portalOfferLaunchIntakeStatusRenderer.includes("launchPriorityScore") || portalOfferLaunchIntakeStatusRenderer.includes("operatorNextAction") || portalOfferLaunchIntakeStatusRenderer.includes("paymentLiveEnabled") || portalOfferLaunchIntakeStatusRenderer.includes("providerGoLiveRequested") || portalOfferLaunchIntakeStatusRenderer.includes("liveProviderEnabled")) fail("portal offer launch intake status exposes launch provenance, internal launch scoring, provider/payment, or operator controls");
const offerLaunchIntakeNormalizerStart = script.indexOf("const normalizeOfferLaunchIntakeReceiptExport");
const offerLaunchIntakeNormalizerEnd = script.indexOf("const normalizeOfferLaunchIntakeReceiptPayload", offerLaunchIntakeNormalizerStart);
const offerLaunchIntakeNormalizer = offerLaunchIntakeNormalizerStart >= 0 && offerLaunchIntakeNormalizerEnd > offerLaunchIntakeNormalizerStart
  ? script.slice(offerLaunchIntakeNormalizerStart, offerLaunchIntakeNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
  "sourceReceiptId",
  "launchReadinessId",
  "offerExperimentId",
  "marketingChannelExperimentId",
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-intake\"",
  "item.appOwnedIntakeState === true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchIntakeNormalizer.includes(phrase)) fail(`offer launch intake Webportal normalizer missing safety gate ${phrase}`);
}
const portalOfferLaunchIntakeExportStart = script.indexOf('"portal-offer-launch-intake-receipt-export"');
const portalOfferLaunchIntakeExportEnd = script.indexOf('"No customer-safe App offer launch intake receipts loaded."', portalOfferLaunchIntakeExportStart);
const portalOfferLaunchIntakeExportRenderer = portalOfferLaunchIntakeExportStart >= 0 && portalOfferLaunchIntakeExportEnd > portalOfferLaunchIntakeExportStart
  ? script.slice(portalOfferLaunchIntakeExportStart, portalOfferLaunchIntakeExportEnd)
  : "";
if (!portalOfferLaunchIntakeExportRenderer || portalOfferLaunchIntakeExportRenderer.includes("sourceReceiptId") || portalOfferLaunchIntakeExportRenderer.includes("launchReadinessId") || portalOfferLaunchIntakeExportRenderer.includes("offerExperimentId") || portalOfferLaunchIntakeExportRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchIntakeExportRenderer.includes("revenueReceiptId") || portalOfferLaunchIntakeExportRenderer.includes("deliveryLogId") || portalOfferLaunchIntakeExportRenderer.includes("cashSpeedScore") || portalOfferLaunchIntakeExportRenderer.includes("laborLeverageScore") || portalOfferLaunchIntakeExportRenderer.includes("proofReadinessScore") || portalOfferLaunchIntakeExportRenderer.includes("marketDemandScore") || portalOfferLaunchIntakeExportRenderer.includes("launchPriorityScore") || portalOfferLaunchIntakeExportRenderer.includes("operatorNextAction") || portalOfferLaunchIntakeExportRenderer.includes("paymentLiveEnabled") || portalOfferLaunchIntakeExportRenderer.includes("providerGoLiveRequested") || portalOfferLaunchIntakeExportRenderer.includes("liveProviderEnabled")) fail("portal offer launch intake export exposes launch provenance, internal launch scoring, provider/payment, or operator controls");
const offerLaunchActivationNormalizerStart = script.indexOf("const normalizeOfferLaunchActivationReceiptExport");
const offerLaunchActivationNormalizerEnd = script.indexOf("const normalizeOfferLaunchActivationReceiptPayload", offerLaunchActivationNormalizerStart);
const offerLaunchActivationNormalizer = offerLaunchActivationNormalizerStart >= 0 && offerLaunchActivationNormalizerEnd > offerLaunchActivationNormalizerStart
  ? script.slice(offerLaunchActivationNormalizerStart, offerLaunchActivationNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
  "intakeReceiptId",
  "sourceReceiptId",
  "activationId",
  "launchReadinessId",
  "offerExperimentId",
  "marketingChannelExperimentId",
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-activation\"",
  "item.appOwnedActivationState === true",
  "item.appOwnedIntakeState === true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchActivationNormalizer.includes(phrase)) fail(`offer launch activation Webportal normalizer missing safety gate ${phrase}`);
}
const portalOfferLaunchActivationExportStart = script.indexOf('"portal-offer-launch-activation-receipt-export"');
const portalOfferLaunchActivationExportEnd = script.indexOf('"No customer-safe App offer launch activation receipts loaded."', portalOfferLaunchActivationExportStart);
const portalOfferLaunchActivationExportRenderer = portalOfferLaunchActivationExportStart >= 0 && portalOfferLaunchActivationExportEnd > portalOfferLaunchActivationExportStart
  ? script.slice(portalOfferLaunchActivationExportStart, portalOfferLaunchActivationExportEnd)
  : "";
if (!portalOfferLaunchActivationExportRenderer || portalOfferLaunchActivationExportRenderer.includes("intakeReceiptId") || portalOfferLaunchActivationExportRenderer.includes("sourceReceiptId") || portalOfferLaunchActivationExportRenderer.includes("activationId") || portalOfferLaunchActivationExportRenderer.includes("launchReadinessId") || portalOfferLaunchActivationExportRenderer.includes("offerExperimentId") || portalOfferLaunchActivationExportRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchActivationExportRenderer.includes("revenueReceiptId") || portalOfferLaunchActivationExportRenderer.includes("deliveryLogId") || portalOfferLaunchActivationExportRenderer.includes("cashSpeedScore") || portalOfferLaunchActivationExportRenderer.includes("laborLeverageScore") || portalOfferLaunchActivationExportRenderer.includes("proofReadinessScore") || portalOfferLaunchActivationExportRenderer.includes("marketDemandScore") || portalOfferLaunchActivationExportRenderer.includes("launchPriorityScore") || portalOfferLaunchActivationExportRenderer.includes("operatorNextAction") || portalOfferLaunchActivationExportRenderer.includes("paymentLiveEnabled") || portalOfferLaunchActivationExportRenderer.includes("providerGoLiveRequested") || portalOfferLaunchActivationExportRenderer.includes("liveProviderEnabled")) fail("portal offer launch activation export exposes launch provenance, activation ids, internal launch scoring, provider/payment, or operator controls");
const offerLaunchServiceSetupNormalizerStart = script.indexOf("const normalizeOfferLaunchServiceSetupReceiptExport");
const offerLaunchServiceSetupNormalizerEnd = script.indexOf("const normalizeOfferLaunchServiceSetupReceiptPayload", offerLaunchServiceSetupNormalizerStart);
const offerLaunchServiceSetupNormalizer = offerLaunchServiceSetupNormalizerStart >= 0 && offerLaunchServiceSetupNormalizerEnd > offerLaunchServiceSetupNormalizerStart
  ? script.slice(offerLaunchServiceSetupNormalizerStart, offerLaunchServiceSetupNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
  "activationReceiptId",
  "activationId",
  "setupId",
  "intakeReceiptId",
  "launchReadinessId",
  "offerExperimentId",
  "marketingChannelExperimentId",
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-service-setup\"",
  "item.appOwnedSetupState === true",
  "item.appOwnedActivationState === true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchServiceSetupNormalizer.includes(phrase)) fail(`offer launch service setup Webportal normalizer missing safety gate ${phrase}`);
}
const portalOfferLaunchServiceSetupExportStart = script.indexOf('"portal-offer-launch-service-setup-receipt-export"');
const portalOfferLaunchServiceSetupExportEnd = script.indexOf('"No customer-safe App offer launch service setup receipts loaded."', portalOfferLaunchServiceSetupExportStart);
const portalOfferLaunchServiceSetupExportRenderer = portalOfferLaunchServiceSetupExportStart >= 0 && portalOfferLaunchServiceSetupExportEnd > portalOfferLaunchServiceSetupExportStart
  ? script.slice(portalOfferLaunchServiceSetupExportStart, portalOfferLaunchServiceSetupExportEnd)
  : "";
if (!portalOfferLaunchServiceSetupExportRenderer || portalOfferLaunchServiceSetupExportRenderer.includes("activationReceiptId") || portalOfferLaunchServiceSetupExportRenderer.includes("sourceReceiptId") || portalOfferLaunchServiceSetupExportRenderer.includes("setupId") || portalOfferLaunchServiceSetupExportRenderer.includes("activationId") || portalOfferLaunchServiceSetupExportRenderer.includes("intakeReceiptId") || portalOfferLaunchServiceSetupExportRenderer.includes("launchReadinessId") || portalOfferLaunchServiceSetupExportRenderer.includes("offerExperimentId") || portalOfferLaunchServiceSetupExportRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchServiceSetupExportRenderer.includes("revenueReceiptId") || portalOfferLaunchServiceSetupExportRenderer.includes("deliveryLogId") || portalOfferLaunchServiceSetupExportRenderer.includes("cashSpeedScore") || portalOfferLaunchServiceSetupExportRenderer.includes("laborLeverageScore") || portalOfferLaunchServiceSetupExportRenderer.includes("proofReadinessScore") || portalOfferLaunchServiceSetupExportRenderer.includes("marketDemandScore") || portalOfferLaunchServiceSetupExportRenderer.includes("launchPriorityScore") || portalOfferLaunchServiceSetupExportRenderer.includes("operatorNextAction") || portalOfferLaunchServiceSetupExportRenderer.includes("paymentLiveEnabled") || portalOfferLaunchServiceSetupExportRenderer.includes("providerGoLiveRequested") || portalOfferLaunchServiceSetupExportRenderer.includes("liveProviderEnabled")) fail("portal offer launch service setup export exposes setup provenance, activation ids, internal launch scoring, provider/payment, or operator controls");
const offerLaunchDeliveryWorkspaceNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryWorkspaceReceiptExport");
const offerLaunchDeliveryWorkspaceNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryWorkspaceReceiptPayload", offerLaunchDeliveryWorkspaceNormalizerStart);
const offerLaunchDeliveryWorkspaceNormalizer = offerLaunchDeliveryWorkspaceNormalizerStart >= 0 && offerLaunchDeliveryWorkspaceNormalizerEnd > offerLaunchDeliveryWorkspaceNormalizerStart
  ? script.slice(offerLaunchDeliveryWorkspaceNormalizerStart, offerLaunchDeliveryWorkspaceNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
  "setupReceiptId",
  "workspaceId",
  "setupId",
  "activationReceiptId",
  "activationId",
  "intakeReceiptId",
  "launchReadinessId",
  "offerExperimentId",
  "marketingChannelExperimentId",
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-workspace\"",
  "item.appOwnedWorkspaceState === true",
  "item.appOwnedSetupState === true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryWorkspaceNormalizer.includes(phrase)) fail(`offer launch delivery workspace Webportal normalizer missing safety gate ${phrase}`);
}
const portalOfferLaunchDeliveryWorkspaceExportStart = script.indexOf('"portal-offer-launch-delivery-workspace-receipt-export"');
const portalOfferLaunchDeliveryWorkspaceExportEnd = script.indexOf('"No customer-safe App offer launch delivery workspace receipts loaded."', portalOfferLaunchDeliveryWorkspaceExportStart);
const portalOfferLaunchDeliveryWorkspaceExportRenderer = portalOfferLaunchDeliveryWorkspaceExportStart >= 0 && portalOfferLaunchDeliveryWorkspaceExportEnd > portalOfferLaunchDeliveryWorkspaceExportStart
  ? script.slice(portalOfferLaunchDeliveryWorkspaceExportStart, portalOfferLaunchDeliveryWorkspaceExportEnd)
  : "";
if (!portalOfferLaunchDeliveryWorkspaceExportRenderer || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("setupReceiptId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("sourceReceiptId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("workspaceId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("setupId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("activationReceiptId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("activationId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("intakeReceiptId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("launchReadinessId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("offerExperimentId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("revenueReceiptId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("deliveryLogId") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("cashSpeedScore") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("laborLeverageScore") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("proofReadinessScore") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("marketDemandScore") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("launchPriorityScore") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("operatorNextAction") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("paymentLiveEnabled") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("providerGoLiveRequested") || portalOfferLaunchDeliveryWorkspaceExportRenderer.includes("liveProviderEnabled")) fail("portal offer launch delivery workspace export exposes workspace/setup provenance, internal launch scoring, provider/payment, or operator controls");
const offerLaunchDeliveryKickoffNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryKickoffReceiptExport");
const offerLaunchDeliveryKickoffNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryKickoffReceiptPayload", offerLaunchDeliveryKickoffNormalizerStart);
const offerLaunchDeliveryKickoffNormalizer = offerLaunchDeliveryKickoffNormalizerStart >= 0 && offerLaunchDeliveryKickoffNormalizerEnd > offerLaunchDeliveryKickoffNormalizerStart
  ? script.slice(offerLaunchDeliveryKickoffNormalizerStart, offerLaunchDeliveryKickoffNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
  "workspaceReceiptId",
  "kickoffId",
  "workspaceId",
  "setupReceiptId",
  "setupId",
  "activationReceiptId",
  "activationId",
  "intakeReceiptId",
  "launchReadinessId",
  "offerExperimentId",
  "marketingChannelExperimentId",
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-kickoff\"",
  "item.appOwnedKickoffState === true",
  "item.appOwnedWorkspaceState === true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryKickoffNormalizer.includes(phrase)) fail(`offer launch delivery kickoff Webportal normalizer missing safety gate ${phrase}`);
}
const portalOfferLaunchDeliveryKickoffStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-kickoff-status"');
const portalOfferLaunchDeliveryKickoffStatusEnd = script.indexOf('"No customer-safe launch offer delivery kickoff receipts yet."', portalOfferLaunchDeliveryKickoffStatusStart);
const portalOfferLaunchDeliveryKickoffStatusRenderer = portalOfferLaunchDeliveryKickoffStatusStart >= 0 && portalOfferLaunchDeliveryKickoffStatusEnd > portalOfferLaunchDeliveryKickoffStatusStart
  ? script.slice(portalOfferLaunchDeliveryKickoffStatusStart, portalOfferLaunchDeliveryKickoffStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryKickoffStatusRenderer || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("workspaceReceiptId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("sourceReceiptId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("kickoffId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("workspaceId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("setupReceiptId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("setupId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("activationReceiptId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("activationId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("intakeReceiptId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("launchReadinessId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("offerExperimentId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("revenueReceiptId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("deliveryLogId") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("cashSpeedScore") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("laborLeverageScore") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("proofReadinessScore") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("marketDemandScore") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("launchPriorityScore") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("operatorNextAction") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("paymentLiveEnabled") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("providerGoLiveRequested") || portalOfferLaunchDeliveryKickoffStatusRenderer.includes("liveProviderEnabled")) fail("portal offer launch delivery kickoff status exposes workspace/kickoff provenance, internal launch scoring, provider/payment, or operator controls");
const portalOfferLaunchDeliveryKickoffExportStart = script.indexOf('"portal-offer-launch-delivery-kickoff-receipt-export"');
const portalOfferLaunchDeliveryKickoffExportEnd = script.indexOf('"No customer-safe App offer launch delivery kickoff receipts loaded."', portalOfferLaunchDeliveryKickoffExportStart);
const portalOfferLaunchDeliveryKickoffExportRenderer = portalOfferLaunchDeliveryKickoffExportStart >= 0 && portalOfferLaunchDeliveryKickoffExportEnd > portalOfferLaunchDeliveryKickoffExportStart
  ? script.slice(portalOfferLaunchDeliveryKickoffExportStart, portalOfferLaunchDeliveryKickoffExportEnd)
  : "";
if (!portalOfferLaunchDeliveryKickoffExportRenderer || portalOfferLaunchDeliveryKickoffExportRenderer.includes("workspaceReceiptId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("sourceReceiptId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("kickoffId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("workspaceId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("setupReceiptId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("setupId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("activationReceiptId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("activationId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("intakeReceiptId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("launchReadinessId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("offerExperimentId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("revenueReceiptId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("deliveryLogId") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("cashSpeedScore") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("laborLeverageScore") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("proofReadinessScore") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("marketDemandScore") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("launchPriorityScore") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("operatorNextAction") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("paymentLiveEnabled") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("providerGoLiveRequested") || portalOfferLaunchDeliveryKickoffExportRenderer.includes("liveProviderEnabled")) fail("portal offer launch delivery kickoff export exposes workspace/kickoff provenance, internal launch scoring, provider/payment, or operator controls");
const offerLaunchDeliveryMilestoneNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryMilestoneReceiptExport");
const offerLaunchDeliveryMilestoneNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryMilestoneReceiptPayload", offerLaunchDeliveryMilestoneNormalizerStart);
const offerLaunchDeliveryMilestoneNormalizer = offerLaunchDeliveryMilestoneNormalizerStart >= 0 && offerLaunchDeliveryMilestoneNormalizerEnd > offerLaunchDeliveryMilestoneNormalizerStart
  ? script.slice(offerLaunchDeliveryMilestoneNormalizerStart, offerLaunchDeliveryMilestoneNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
  "kickoffReceiptId",
  "milestoneId",
  "kickoffId",
  "workspaceReceiptId",
  "workspaceId",
  "setupReceiptId",
  "setupId",
  "activationReceiptId",
  "activationId",
  "intakeReceiptId",
  "launchReadinessId",
  "offerExperimentId",
  "marketingChannelExperimentId",
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-milestone\"",
  "item.appOwnedMilestoneState === true",
  "item.appOwnedKickoffState === true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryMilestoneNormalizer.includes(phrase)) fail(`offer launch delivery milestone Webportal normalizer missing safety gate ${phrase}`);
}
const portalOfferLaunchDeliveryMilestoneStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-milestone-status"');
const portalOfferLaunchDeliveryMilestoneStatusEnd = script.indexOf('"No customer-safe launch offer delivery milestone receipts yet."', portalOfferLaunchDeliveryMilestoneStatusStart);
const portalOfferLaunchDeliveryMilestoneStatusRenderer = portalOfferLaunchDeliveryMilestoneStatusStart >= 0 && portalOfferLaunchDeliveryMilestoneStatusEnd > portalOfferLaunchDeliveryMilestoneStatusStart
  ? script.slice(portalOfferLaunchDeliveryMilestoneStatusStart, portalOfferLaunchDeliveryMilestoneStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryMilestoneStatusRenderer || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("kickoffReceiptId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("sourceReceiptId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("milestoneId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("kickoffId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("workspaceReceiptId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("workspaceId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("setupReceiptId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("setupId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("activationReceiptId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("activationId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("intakeReceiptId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("launchReadinessId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("offerExperimentId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("revenueReceiptId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("deliveryLogId") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("cashSpeedScore") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("laborLeverageScore") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("proofReadinessScore") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("marketDemandScore") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("launchPriorityScore") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("operatorNextAction") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("paymentLiveEnabled") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("providerGoLiveRequested") || portalOfferLaunchDeliveryMilestoneStatusRenderer.includes("liveProviderEnabled")) fail("portal offer launch delivery milestone status exposes kickoff/milestone provenance, internal launch scoring, provider/payment, or operator controls");
const portalOfferLaunchDeliveryMilestoneExportStart = script.indexOf('"portal-offer-launch-delivery-milestone-receipt-export"');
const portalOfferLaunchDeliveryMilestoneExportEnd = script.indexOf('"No customer-safe App offer launch delivery milestone receipts loaded."', portalOfferLaunchDeliveryMilestoneExportStart);
const portalOfferLaunchDeliveryMilestoneExportRenderer = portalOfferLaunchDeliveryMilestoneExportStart >= 0 && portalOfferLaunchDeliveryMilestoneExportEnd > portalOfferLaunchDeliveryMilestoneExportStart
  ? script.slice(portalOfferLaunchDeliveryMilestoneExportStart, portalOfferLaunchDeliveryMilestoneExportEnd)
  : "";
if (!portalOfferLaunchDeliveryMilestoneExportRenderer || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("kickoffReceiptId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("sourceReceiptId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("milestoneId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("kickoffId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("workspaceReceiptId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("workspaceId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("setupReceiptId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("setupId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("activationReceiptId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("activationId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("intakeReceiptId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("launchReadinessId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("offerExperimentId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("revenueReceiptId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("deliveryLogId") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("cashSpeedScore") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("laborLeverageScore") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("proofReadinessScore") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("marketDemandScore") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("launchPriorityScore") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("operatorNextAction") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("paymentLiveEnabled") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("providerGoLiveRequested") || portalOfferLaunchDeliveryMilestoneExportRenderer.includes("liveProviderEnabled")) fail("portal offer launch delivery milestone export exposes kickoff/milestone provenance, internal launch scoring, provider/payment, or operator controls");
const offerLaunchDeliveryOutcomeNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryOutcomeReceiptExport");
const offerLaunchDeliveryOutcomeNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryOutcomeReceiptPayload", offerLaunchDeliveryOutcomeNormalizerStart);
const offerLaunchDeliveryOutcomeNormalizer = offerLaunchDeliveryOutcomeNormalizerStart >= 0 && offerLaunchDeliveryOutcomeNormalizerEnd > offerLaunchDeliveryOutcomeNormalizerStart
  ? script.slice(offerLaunchDeliveryOutcomeNormalizerStart, offerLaunchDeliveryOutcomeNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
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
  "intakeReceiptId",
  "launchReadinessId",
  "offerExperimentId",
  "marketingChannelExperimentId",
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-outcome\"",
  "item.appOwnedOutcomeState === true",
  "item.appOwnedMilestoneState === true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryOutcomeNormalizer.includes(phrase)) fail(`offer launch delivery outcome Webportal normalizer missing safety gate ${phrase}`);
}
const portalOfferLaunchDeliveryOutcomeStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-outcome-status"');
const portalOfferLaunchDeliveryOutcomeStatusEnd = script.indexOf('"No customer-safe launch offer delivery outcome receipts yet."', portalOfferLaunchDeliveryOutcomeStatusStart);
const portalOfferLaunchDeliveryOutcomeStatusRenderer = portalOfferLaunchDeliveryOutcomeStatusStart >= 0 && portalOfferLaunchDeliveryOutcomeStatusEnd > portalOfferLaunchDeliveryOutcomeStatusStart
  ? script.slice(portalOfferLaunchDeliveryOutcomeStatusStart, portalOfferLaunchDeliveryOutcomeStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryOutcomeStatusRenderer || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("milestoneReceiptId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("sourceReceiptId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("outcomeId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("milestoneId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("kickoffReceiptId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("kickoffId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("workspaceReceiptId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("workspaceId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("setupReceiptId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("setupId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("activationReceiptId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("activationId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("intakeReceiptId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("launchReadinessId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("offerExperimentId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("revenueReceiptId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("deliveryLogId") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("cashSpeedScore") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("laborLeverageScore") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("proofReadinessScore") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("marketDemandScore") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("launchPriorityScore") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("operatorNextAction") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("paymentLiveEnabled") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("providerGoLiveRequested") || portalOfferLaunchDeliveryOutcomeStatusRenderer.includes("liveProviderEnabled")) fail("portal offer launch delivery outcome status exposes milestone/outcome provenance, internal launch scoring, provider/payment, or operator controls");
const portalOfferLaunchDeliveryOutcomeExportStart = script.indexOf('"portal-offer-launch-delivery-outcome-receipt-export"');
const portalOfferLaunchDeliveryOutcomeExportEnd = script.indexOf('"No customer-safe App offer launch delivery outcome receipts loaded."', portalOfferLaunchDeliveryOutcomeExportStart);
const portalOfferLaunchDeliveryOutcomeExportRenderer = portalOfferLaunchDeliveryOutcomeExportStart >= 0 && portalOfferLaunchDeliveryOutcomeExportEnd > portalOfferLaunchDeliveryOutcomeExportStart
  ? script.slice(portalOfferLaunchDeliveryOutcomeExportStart, portalOfferLaunchDeliveryOutcomeExportEnd)
  : "";
if (!portalOfferLaunchDeliveryOutcomeExportRenderer || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("milestoneReceiptId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("sourceReceiptId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("outcomeId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("milestoneId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("kickoffReceiptId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("kickoffId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("workspaceReceiptId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("workspaceId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("setupReceiptId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("setupId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("activationReceiptId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("activationId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("intakeReceiptId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("launchReadinessId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("offerExperimentId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("marketingChannelExperimentId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("revenueReceiptId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("deliveryLogId") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("cashSpeedScore") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("laborLeverageScore") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("proofReadinessScore") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("marketDemandScore") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("launchPriorityScore") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("operatorNextAction") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("paymentLiveEnabled") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("providerGoLiveRequested") || portalOfferLaunchDeliveryOutcomeExportRenderer.includes("liveProviderEnabled")) fail("portal offer launch delivery outcome export exposes milestone/outcome provenance, internal launch scoring, provider/payment, or operator controls");
const offerLaunchDeliveryFollowUpNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryFollowUpReceiptExport");
const offerLaunchDeliveryFollowUpNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryFollowUpReceiptPayload", offerLaunchDeliveryFollowUpNormalizerStart);
const offerLaunchDeliveryFollowUpNormalizer = offerLaunchDeliveryFollowUpNormalizerStart >= 0 && offerLaunchDeliveryFollowUpNormalizerEnd > offerLaunchDeliveryFollowUpNormalizerStart
  ? script.slice(offerLaunchDeliveryFollowUpNormalizerStart, offerLaunchDeliveryFollowUpNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
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
  "intakeReceiptId",
  "launchReadinessId",
  "offerExperimentId",
  "marketingChannelExperimentId",
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-follow-up\"",
  "item.appOwnedFollowUpState === true",
  "item.appOwnedOutcomeState === true",
  "item.epochTimingProviderOnly === true",
  "item.workshopCalendarOwnership !== true",
  "item.monitorWorkflowExposed !== true",
  "item.paymentLiveEnabled !== true",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryFollowUpNormalizer.includes(phrase)) fail(`offer launch delivery follow-up Webportal normalizer missing safety gate ${phrase}`);
}
const followUpForbiddenRenderTerms = [
  "outcomeReceiptId",
  "followUpId",
  "sourceReceiptId",
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
  "paymentLiveEnabled",
  "providerGoLiveRequested",
  "liveProviderEnabled",
  "monitorWorkflowExposed"
];
const portalOfferLaunchDeliveryFollowUpStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-follow-up-status"');
const portalOfferLaunchDeliveryFollowUpStatusEnd = script.indexOf('"No customer-safe launch offer delivery follow-up receipts yet."', portalOfferLaunchDeliveryFollowUpStatusStart);
const portalOfferLaunchDeliveryFollowUpStatusRenderer = portalOfferLaunchDeliveryFollowUpStatusStart >= 0 && portalOfferLaunchDeliveryFollowUpStatusEnd > portalOfferLaunchDeliveryFollowUpStatusStart
  ? script.slice(portalOfferLaunchDeliveryFollowUpStatusStart, portalOfferLaunchDeliveryFollowUpStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryFollowUpStatusRenderer || followUpForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryFollowUpStatusRenderer.includes(term))) fail("portal offer launch delivery follow-up status exposes outcome/follow-up provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const portalOfferLaunchDeliveryFollowUpExportStart = script.indexOf('"portal-offer-launch-delivery-follow-up-receipt-export"');
const portalOfferLaunchDeliveryFollowUpExportEnd = script.indexOf('"No customer-safe App offer launch delivery follow-up receipts loaded."', portalOfferLaunchDeliveryFollowUpExportStart);
const portalOfferLaunchDeliveryFollowUpExportRenderer = portalOfferLaunchDeliveryFollowUpExportStart >= 0 && portalOfferLaunchDeliveryFollowUpExportEnd > portalOfferLaunchDeliveryFollowUpExportStart
  ? script.slice(portalOfferLaunchDeliveryFollowUpExportStart, portalOfferLaunchDeliveryFollowUpExportEnd)
  : "";
if (!portalOfferLaunchDeliveryFollowUpExportRenderer || followUpForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryFollowUpExportRenderer.includes(term))) fail("portal offer launch delivery follow-up export exposes outcome/follow-up provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const offerLaunchDeliveryGrowthPlanNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryGrowthPlanReceiptExport");
const offerLaunchDeliveryGrowthPlanNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryGrowthPlanReceiptPayload", offerLaunchDeliveryGrowthPlanNormalizerStart);
const offerLaunchDeliveryGrowthPlanNormalizer = offerLaunchDeliveryGrowthPlanNormalizerStart >= 0 && offerLaunchDeliveryGrowthPlanNormalizerEnd > offerLaunchDeliveryGrowthPlanNormalizerStart
  ? script.slice(offerLaunchDeliveryGrowthPlanNormalizerStart, offerLaunchDeliveryGrowthPlanNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
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
  "intakeReceiptId",
  "launchReadinessId",
  "offerExperimentId",
  "marketingChannelExperimentId",
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-growth-plan\"",
  "item.appOwnedGrowthPlanState === true",
  "item.appOwnedFollowUpState === true",
  "item.epochTimingProviderOnly === true",
  "item.workshopCalendarOwnership !== true",
  "item.monitorWorkflowExposed !== true",
  "item.paymentLiveEnabled !== true",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryGrowthPlanNormalizer.includes(phrase)) fail(`offer launch delivery growth-plan Webportal normalizer missing safety gate ${phrase}`);
}
const growthPlanForbiddenRenderTerms = [
  "followUpReceiptId",
  "growthPlanId",
  "followUpId",
  "sourceReceiptId",
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
  "paymentLiveEnabled",
  "providerGoLiveRequested",
  "liveProviderEnabled",
  "monitorWorkflowExposed"
];
const portalOfferLaunchDeliveryGrowthPlanStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-growth-plan-status"');
const portalOfferLaunchDeliveryGrowthPlanStatusEnd = script.indexOf('"No customer-safe launch offer delivery growth-plan receipts yet."', portalOfferLaunchDeliveryGrowthPlanStatusStart);
const portalOfferLaunchDeliveryGrowthPlanStatusRenderer = portalOfferLaunchDeliveryGrowthPlanStatusStart >= 0 && portalOfferLaunchDeliveryGrowthPlanStatusEnd > portalOfferLaunchDeliveryGrowthPlanStatusStart
  ? script.slice(portalOfferLaunchDeliveryGrowthPlanStatusStart, portalOfferLaunchDeliveryGrowthPlanStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryGrowthPlanStatusRenderer || growthPlanForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryGrowthPlanStatusRenderer.includes(term))) fail("portal offer launch delivery growth-plan status exposes growth/follow-up provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const portalOfferLaunchDeliveryGrowthPlanExportStart = script.indexOf('"portal-offer-launch-delivery-growth-plan-receipt-export"');
const portalOfferLaunchDeliveryGrowthPlanExportEnd = script.indexOf('"No customer-safe App offer launch delivery growth-plan receipts loaded."', portalOfferLaunchDeliveryGrowthPlanExportStart);
const portalOfferLaunchDeliveryGrowthPlanExportRenderer = portalOfferLaunchDeliveryGrowthPlanExportStart >= 0 && portalOfferLaunchDeliveryGrowthPlanExportEnd > portalOfferLaunchDeliveryGrowthPlanExportStart
  ? script.slice(portalOfferLaunchDeliveryGrowthPlanExportStart, portalOfferLaunchDeliveryGrowthPlanExportEnd)
  : "";
if (!portalOfferLaunchDeliveryGrowthPlanExportRenderer || growthPlanForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryGrowthPlanExportRenderer.includes(term))) fail("portal offer launch delivery growth-plan export exposes growth/follow-up provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const offerLaunchDeliveryGrowthPlanAcceptanceNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryGrowthPlanAcceptanceReceiptExport");
const offerLaunchDeliveryGrowthPlanAcceptanceNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryGrowthPlanAcceptanceReceiptPayload", offerLaunchDeliveryGrowthPlanAcceptanceNormalizerStart);
const offerLaunchDeliveryGrowthPlanAcceptanceNormalizer = offerLaunchDeliveryGrowthPlanAcceptanceNormalizerStart >= 0 && offerLaunchDeliveryGrowthPlanAcceptanceNormalizerEnd > offerLaunchDeliveryGrowthPlanAcceptanceNormalizerStart
  ? script.slice(offerLaunchDeliveryGrowthPlanAcceptanceNormalizerStart, offerLaunchDeliveryGrowthPlanAcceptanceNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
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
  "intakeReceiptId",
  "launchReadinessId",
  "offerExperimentId",
  "marketingChannelExperimentId",
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-growth-plan-acceptance\"",
  "item.appOwnedAcceptanceState === true",
  "item.appOwnedGrowthPlanState === true",
  "item.epochTimingProviderOnly === true",
  "item.workshopCalendarOwnership !== true",
  "item.monitorWorkflowExposed !== true",
  "item.paymentLiveEnabled !== true",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryGrowthPlanAcceptanceNormalizer.includes(phrase)) fail(`offer launch delivery growth-plan acceptance Webportal normalizer missing safety gate ${phrase}`);
}
const growthPlanAcceptanceForbiddenRenderTerms = [
  "growthPlanReceiptId",
  "acceptanceId",
  "growthPlanId",
  "followUpReceiptId",
  "followUpId",
  "sourceReceiptId",
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
  "paymentLiveEnabled",
  "providerGoLiveRequested",
  "liveProviderEnabled",
  "monitorWorkflowExposed"
];
const portalOfferLaunchDeliveryGrowthPlanAcceptanceStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-growth-plan-acceptance-status"');
const portalOfferLaunchDeliveryGrowthPlanAcceptanceStatusEnd = script.indexOf('"No customer-safe launch offer delivery growth-plan acceptance receipts yet."', portalOfferLaunchDeliveryGrowthPlanAcceptanceStatusStart);
const portalOfferLaunchDeliveryGrowthPlanAcceptanceStatusRenderer = portalOfferLaunchDeliveryGrowthPlanAcceptanceStatusStart >= 0 && portalOfferLaunchDeliveryGrowthPlanAcceptanceStatusEnd > portalOfferLaunchDeliveryGrowthPlanAcceptanceStatusStart
  ? script.slice(portalOfferLaunchDeliveryGrowthPlanAcceptanceStatusStart, portalOfferLaunchDeliveryGrowthPlanAcceptanceStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryGrowthPlanAcceptanceStatusRenderer || growthPlanAcceptanceForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryGrowthPlanAcceptanceStatusRenderer.includes(term))) fail("portal offer launch delivery growth-plan acceptance status exposes acceptance/growth-plan provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const portalOfferLaunchDeliveryGrowthPlanAcceptanceExportStart = script.indexOf('"portal-offer-launch-delivery-growth-plan-acceptance-receipt-export"');
const portalOfferLaunchDeliveryGrowthPlanAcceptanceExportEnd = script.indexOf('"No customer-safe App offer launch delivery growth-plan acceptance receipts loaded."', portalOfferLaunchDeliveryGrowthPlanAcceptanceExportStart);
const portalOfferLaunchDeliveryGrowthPlanAcceptanceExportRenderer = portalOfferLaunchDeliveryGrowthPlanAcceptanceExportStart >= 0 && portalOfferLaunchDeliveryGrowthPlanAcceptanceExportEnd > portalOfferLaunchDeliveryGrowthPlanAcceptanceExportStart
  ? script.slice(portalOfferLaunchDeliveryGrowthPlanAcceptanceExportStart, portalOfferLaunchDeliveryGrowthPlanAcceptanceExportEnd)
  : "";
if (!portalOfferLaunchDeliveryGrowthPlanAcceptanceExportRenderer || growthPlanAcceptanceForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryGrowthPlanAcceptanceExportRenderer.includes(term))) fail("portal offer launch delivery growth-plan acceptance export exposes acceptance/growth-plan provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const offerLaunchDeliveryExpansionRequestNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryExpansionRequestReceiptExport");
const offerLaunchDeliveryExpansionRequestNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryExpansionRequestReceiptPayload", offerLaunchDeliveryExpansionRequestNormalizerStart);
const offerLaunchDeliveryExpansionRequestNormalizer = offerLaunchDeliveryExpansionRequestNormalizerStart >= 0 && offerLaunchDeliveryExpansionRequestNormalizerEnd > offerLaunchDeliveryExpansionRequestNormalizerStart
  ? script.slice(offerLaunchDeliveryExpansionRequestNormalizerStart, offerLaunchDeliveryExpansionRequestNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
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
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "providerGoLiveRequested",
  "paymentLiveEnabled",
  "liveProviderEnabled",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-expansion-request\"",
  "item.customerSafe === true",
  "item.webportalExportReady === true || item.customerVisibleReceiptReady === true",
  "item.appOwnedExpansionRequestState === true",
  "item.appOwnedAcceptanceState === true",
  "item.epochTimingProviderOnly === true",
  "item.workshopCalendarOwnership !== true",
  "item.monitorWorkflowExposed !== true",
  "item.paymentLiveEnabled !== true",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryExpansionRequestNormalizer.includes(phrase)) fail(`offer launch delivery expansion-request Webportal normalizer missing safety gate ${phrase}`);
}
const expansionRequestForbiddenRenderTerms = [
  "acceptanceReceiptId",
  "expansionRequestId",
  "acceptanceId",
  "growthPlanReceiptId",
  "growthPlanId",
  "followUpReceiptId",
  "followUpId",
  "sourceReceiptId",
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
  "paymentLiveEnabled",
  "providerGoLiveRequested",
  "liveProviderEnabled",
  "monitorWorkflowExposed",
  "MONITOR",
  "monitor"
];
const portalOfferLaunchDeliveryExpansionRequestStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-expansion-request-status"');
const portalOfferLaunchDeliveryExpansionRequestStatusEnd = script.indexOf('"No customer-safe launch offer delivery expansion-request receipts yet."', portalOfferLaunchDeliveryExpansionRequestStatusStart);
const portalOfferLaunchDeliveryExpansionRequestStatusRenderer = portalOfferLaunchDeliveryExpansionRequestStatusStart >= 0 && portalOfferLaunchDeliveryExpansionRequestStatusEnd > portalOfferLaunchDeliveryExpansionRequestStatusStart
  ? script.slice(portalOfferLaunchDeliveryExpansionRequestStatusStart, portalOfferLaunchDeliveryExpansionRequestStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionRequestStatusRenderer || expansionRequestForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionRequestStatusRenderer.includes(term))) fail("portal offer launch delivery expansion-request status exposes expansion/acceptance provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const portalOfferLaunchDeliveryExpansionRequestExportStart = script.indexOf('"portal-offer-launch-delivery-expansion-request-receipt-export"');
const portalOfferLaunchDeliveryExpansionRequestExportEnd = script.indexOf('"No customer-safe App offer launch delivery expansion-request receipts loaded."', portalOfferLaunchDeliveryExpansionRequestExportStart);
const portalOfferLaunchDeliveryExpansionRequestExportRenderer = portalOfferLaunchDeliveryExpansionRequestExportStart >= 0 && portalOfferLaunchDeliveryExpansionRequestExportEnd > portalOfferLaunchDeliveryExpansionRequestExportStart
  ? script.slice(portalOfferLaunchDeliveryExpansionRequestExportStart, portalOfferLaunchDeliveryExpansionRequestExportEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionRequestExportRenderer || expansionRequestForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionRequestExportRenderer.includes(term))) fail("portal offer launch delivery expansion-request export exposes expansion/acceptance provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const offerLaunchDeliveryExpansionWorkspaceNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryExpansionWorkspaceReceiptExport");
const offerLaunchDeliveryExpansionWorkspaceNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryExpansionWorkspaceReceiptPayload", offerLaunchDeliveryExpansionWorkspaceNormalizerStart);
const offerLaunchDeliveryExpansionWorkspaceNormalizer = offerLaunchDeliveryExpansionWorkspaceNormalizerStart >= 0 && offerLaunchDeliveryExpansionWorkspaceNormalizerEnd > offerLaunchDeliveryExpansionWorkspaceNormalizerStart
  ? script.slice(offerLaunchDeliveryExpansionWorkspaceNormalizerStart, offerLaunchDeliveryExpansionWorkspaceNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
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
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "providerGoLiveRequested",
  "paymentLiveEnabled",
  "liveProviderEnabled",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-expansion-workspace\"",
  "item.customerSafe === true",
  "item.webportalExportReady === true || item.customerVisibleReceiptReady === true",
  "item.appOwnedExpansionWorkspaceState === true",
  "item.appOwnedExpansionRequestState === true",
  "item.epochTimingProviderOnly === true",
  "item.workshopCalendarOwnership !== true",
  "item.monitorWorkflowExposed !== true",
  "item.paymentLiveEnabled !== true",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryExpansionWorkspaceNormalizer.includes(phrase)) fail(`offer launch delivery expansion-workspace Webportal normalizer missing safety gate ${phrase}`);
}
const expansionWorkspaceForbiddenRenderTerms = [
  "expansionRequestReceiptId",
  "expansionWorkspaceId",
  "expansionRequestId",
  "acceptanceReceiptId",
  "acceptanceId",
  "growthPlanReceiptId",
  "growthPlanId",
  "followUpReceiptId",
  "followUpId",
  "sourceReceiptId",
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
  "paymentLiveEnabled",
  "providerGoLiveRequested",
  "liveProviderEnabled",
  "monitorWorkflowExposed",
  "MONITOR",
  "monitor"
];
const portalOfferLaunchDeliveryExpansionWorkspaceStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-expansion-workspace-status"');
const portalOfferLaunchDeliveryExpansionWorkspaceStatusEnd = script.indexOf('"No customer-safe launch offer delivery expansion workspace receipts yet."', portalOfferLaunchDeliveryExpansionWorkspaceStatusStart);
const portalOfferLaunchDeliveryExpansionWorkspaceStatusRenderer = portalOfferLaunchDeliveryExpansionWorkspaceStatusStart >= 0 && portalOfferLaunchDeliveryExpansionWorkspaceStatusEnd > portalOfferLaunchDeliveryExpansionWorkspaceStatusStart
  ? script.slice(portalOfferLaunchDeliveryExpansionWorkspaceStatusStart, portalOfferLaunchDeliveryExpansionWorkspaceStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionWorkspaceStatusRenderer || expansionWorkspaceForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionWorkspaceStatusRenderer.includes(term))) fail("portal offer launch delivery expansion-workspace status exposes expansion workspace/request provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const portalOfferLaunchDeliveryExpansionWorkspaceExportStart = script.indexOf('"portal-offer-launch-delivery-expansion-workspace-receipt-export"');
const portalOfferLaunchDeliveryExpansionWorkspaceExportEnd = script.indexOf('"No customer-safe App offer launch delivery expansion workspace receipts loaded."', portalOfferLaunchDeliveryExpansionWorkspaceExportStart);
const portalOfferLaunchDeliveryExpansionWorkspaceExportRenderer = portalOfferLaunchDeliveryExpansionWorkspaceExportStart >= 0 && portalOfferLaunchDeliveryExpansionWorkspaceExportEnd > portalOfferLaunchDeliveryExpansionWorkspaceExportStart
  ? script.slice(portalOfferLaunchDeliveryExpansionWorkspaceExportStart, portalOfferLaunchDeliveryExpansionWorkspaceExportEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionWorkspaceExportRenderer || expansionWorkspaceForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionWorkspaceExportRenderer.includes(term))) fail("portal offer launch delivery expansion-workspace export exposes expansion workspace/request provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const offerLaunchDeliveryExpansionKickoffNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryExpansionKickoffReceiptExport");
const offerLaunchDeliveryExpansionKickoffNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryExpansionKickoffReceiptPayload", offerLaunchDeliveryExpansionKickoffNormalizerStart);
const offerLaunchDeliveryExpansionKickoffNormalizer = offerLaunchDeliveryExpansionKickoffNormalizerStart >= 0 && offerLaunchDeliveryExpansionKickoffNormalizerEnd > offerLaunchDeliveryExpansionKickoffNormalizerStart
  ? script.slice(offerLaunchDeliveryExpansionKickoffNormalizerStart, offerLaunchDeliveryExpansionKickoffNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
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
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "providerGoLiveRequested",
  "paymentLiveEnabled",
  "liveProviderEnabled",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-expansion-kickoff\"",
  "item.customerSafe === true",
  "item.webportalExportReady === true || item.customerVisibleReceiptReady === true",
  "item.appOwnedExpansionKickoffState === true",
  "item.appOwnedExpansionWorkspaceState === true",
  "item.epochTimingProviderOnly === true",
  "item.workshopCalendarOwnership !== true",
  "item.monitorWorkflowExposed !== true",
  "item.paymentLiveEnabled !== true",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryExpansionKickoffNormalizer.includes(phrase)) fail(`offer launch delivery expansion-kickoff Webportal normalizer missing safety gate ${phrase}`);
}
const expansionKickoffForbiddenRenderTerms = [
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
  "sourceReceiptId",
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
  "paymentLiveEnabled",
  "providerGoLiveRequested",
  "liveProviderEnabled",
  "monitorWorkflowExposed",
  "MONITOR",
  "monitor"
];
const portalOfferLaunchDeliveryExpansionKickoffStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-expansion-kickoff-status"');
const portalOfferLaunchDeliveryExpansionKickoffStatusEnd = script.indexOf('"No customer-safe launch offer delivery expansion kickoff receipts yet."', portalOfferLaunchDeliveryExpansionKickoffStatusStart);
const portalOfferLaunchDeliveryExpansionKickoffStatusRenderer = portalOfferLaunchDeliveryExpansionKickoffStatusStart >= 0 && portalOfferLaunchDeliveryExpansionKickoffStatusEnd > portalOfferLaunchDeliveryExpansionKickoffStatusStart
  ? script.slice(portalOfferLaunchDeliveryExpansionKickoffStatusStart, portalOfferLaunchDeliveryExpansionKickoffStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionKickoffStatusRenderer || expansionKickoffForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionKickoffStatusRenderer.includes(term))) fail("portal offer launch delivery expansion-kickoff status exposes expansion kickoff/workspace provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const portalOfferLaunchDeliveryExpansionKickoffExportStart = script.indexOf('"portal-offer-launch-delivery-expansion-kickoff-receipt-export"');
const portalOfferLaunchDeliveryExpansionKickoffExportEnd = script.indexOf('"No customer-safe App offer launch delivery expansion kickoff receipts loaded."', portalOfferLaunchDeliveryExpansionKickoffExportStart);
const portalOfferLaunchDeliveryExpansionKickoffExportRenderer = portalOfferLaunchDeliveryExpansionKickoffExportStart >= 0 && portalOfferLaunchDeliveryExpansionKickoffExportEnd > portalOfferLaunchDeliveryExpansionKickoffExportStart
  ? script.slice(portalOfferLaunchDeliveryExpansionKickoffExportStart, portalOfferLaunchDeliveryExpansionKickoffExportEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionKickoffExportRenderer || expansionKickoffForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionKickoffExportRenderer.includes(term))) fail("portal offer launch delivery expansion-kickoff export exposes expansion kickoff/workspace provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const offerLaunchDeliveryExpansionMilestoneNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryExpansionMilestoneReceiptExport");
const offerLaunchDeliveryExpansionMilestoneNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryExpansionMilestoneReceiptPayload", offerLaunchDeliveryExpansionMilestoneNormalizerStart);
const offerLaunchDeliveryExpansionMilestoneNormalizer = offerLaunchDeliveryExpansionMilestoneNormalizerStart >= 0 && offerLaunchDeliveryExpansionMilestoneNormalizerEnd > offerLaunchDeliveryExpansionMilestoneNormalizerStart
  ? script.slice(offerLaunchDeliveryExpansionMilestoneNormalizerStart, offerLaunchDeliveryExpansionMilestoneNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
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
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "providerGoLiveRequested",
  "paymentLiveEnabled",
  "liveProviderEnabled",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-expansion-milestone\"",
  "item.customerSafe === true",
  "item.webportalExportReady === true || item.customerVisibleReceiptReady === true",
  "item.appOwnedExpansionMilestoneState === true",
  "item.appOwnedExpansionKickoffState === true",
  "item.epochTimingProviderOnly === true",
  "item.workshopCalendarOwnership !== true",
  "item.monitorWorkflowExposed !== true",
  "item.paymentLiveEnabled !== true",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryExpansionMilestoneNormalizer.includes(phrase)) fail(`offer launch delivery expansion-milestone Webportal normalizer missing safety gate ${phrase}`);
}
const expansionMilestoneForbiddenRenderTerms = [
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
  "sourceReceiptId",
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
  "paymentLiveEnabled",
  "providerGoLiveRequested",
  "liveProviderEnabled",
  "monitorWorkflowExposed",
  "MONITOR",
  "monitor"
];
const portalOfferLaunchDeliveryExpansionMilestoneStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-expansion-milestone-status"');
const portalOfferLaunchDeliveryExpansionMilestoneStatusEnd = script.indexOf('"No customer-safe launch offer delivery expansion milestone receipts yet."', portalOfferLaunchDeliveryExpansionMilestoneStatusStart);
const portalOfferLaunchDeliveryExpansionMilestoneStatusRenderer = portalOfferLaunchDeliveryExpansionMilestoneStatusStart >= 0 && portalOfferLaunchDeliveryExpansionMilestoneStatusEnd > portalOfferLaunchDeliveryExpansionMilestoneStatusStart
  ? script.slice(portalOfferLaunchDeliveryExpansionMilestoneStatusStart, portalOfferLaunchDeliveryExpansionMilestoneStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionMilestoneStatusRenderer || expansionMilestoneForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionMilestoneStatusRenderer.includes(term))) fail("portal offer launch delivery expansion-milestone status exposes expansion milestone/kickoff provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const portalOfferLaunchDeliveryExpansionMilestoneExportStart = script.indexOf('"portal-offer-launch-delivery-expansion-milestone-receipt-export"');
const portalOfferLaunchDeliveryExpansionMilestoneExportEnd = script.indexOf('"No customer-safe App offer launch delivery expansion milestone receipts loaded."', portalOfferLaunchDeliveryExpansionMilestoneExportStart);
const portalOfferLaunchDeliveryExpansionMilestoneExportRenderer = portalOfferLaunchDeliveryExpansionMilestoneExportStart >= 0 && portalOfferLaunchDeliveryExpansionMilestoneExportEnd > portalOfferLaunchDeliveryExpansionMilestoneExportStart
  ? script.slice(portalOfferLaunchDeliveryExpansionMilestoneExportStart, portalOfferLaunchDeliveryExpansionMilestoneExportEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionMilestoneExportRenderer || expansionMilestoneForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionMilestoneExportRenderer.includes(term))) fail("portal offer launch delivery expansion-milestone export exposes expansion milestone/kickoff provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const offerLaunchDeliveryExpansionOutcomeNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryExpansionOutcomeReceiptExport");
const offerLaunchDeliveryExpansionOutcomeNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryExpansionOutcomeReceiptPayload", offerLaunchDeliveryExpansionOutcomeNormalizerStart);
const offerLaunchDeliveryExpansionOutcomeNormalizer = offerLaunchDeliveryExpansionOutcomeNormalizerStart >= 0 && offerLaunchDeliveryExpansionOutcomeNormalizerEnd > offerLaunchDeliveryExpansionOutcomeNormalizerStart
  ? script.slice(offerLaunchDeliveryExpansionOutcomeNormalizerStart, offerLaunchDeliveryExpansionOutcomeNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
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
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "providerGoLiveRequested",
  "paymentLiveEnabled",
  "liveProviderEnabled",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-expansion-outcome\"",
  "item.customerSafe === true",
  "item.webportalExportReady === true || item.customerVisibleReceiptReady === true",
  "item.appOwnedExpansionOutcomeState === true",
  "item.appOwnedExpansionMilestoneState === true",
  "item.epochTimingProviderOnly === true",
  "item.workshopCalendarOwnership !== true",
  "item.monitorWorkflowExposed !== true",
  "item.paymentLiveEnabled !== true",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryExpansionOutcomeNormalizer.includes(phrase)) fail(`offer launch delivery expansion-outcome Webportal normalizer missing safety gate ${phrase}`);
}
const expansionOutcomeForbiddenRenderTerms = [
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
  "sourceReceiptId",
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
  "paymentLiveEnabled",
  "providerGoLiveRequested",
  "liveProviderEnabled",
  "monitorWorkflowExposed",
  "MONITOR",
  "monitor"
];
const portalOfferLaunchDeliveryExpansionOutcomeStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-expansion-outcome-status"');
const portalOfferLaunchDeliveryExpansionOutcomeStatusEnd = script.indexOf('"No customer-safe launch offer delivery expansion outcome receipts yet."', portalOfferLaunchDeliveryExpansionOutcomeStatusStart);
const portalOfferLaunchDeliveryExpansionOutcomeStatusRenderer = portalOfferLaunchDeliveryExpansionOutcomeStatusStart >= 0 && portalOfferLaunchDeliveryExpansionOutcomeStatusEnd > portalOfferLaunchDeliveryExpansionOutcomeStatusStart
  ? script.slice(portalOfferLaunchDeliveryExpansionOutcomeStatusStart, portalOfferLaunchDeliveryExpansionOutcomeStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionOutcomeStatusRenderer || expansionOutcomeForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionOutcomeStatusRenderer.includes(term))) fail("portal offer launch delivery expansion-outcome status exposes expansion outcome/milestone provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const portalOfferLaunchDeliveryExpansionOutcomeExportStart = script.indexOf('"portal-offer-launch-delivery-expansion-outcome-receipt-export"');
const portalOfferLaunchDeliveryExpansionOutcomeExportEnd = script.indexOf('"No customer-safe App offer launch delivery expansion outcome receipts loaded."', portalOfferLaunchDeliveryExpansionOutcomeExportStart);
const portalOfferLaunchDeliveryExpansionOutcomeExportRenderer = portalOfferLaunchDeliveryExpansionOutcomeExportStart >= 0 && portalOfferLaunchDeliveryExpansionOutcomeExportEnd > portalOfferLaunchDeliveryExpansionOutcomeExportStart
  ? script.slice(portalOfferLaunchDeliveryExpansionOutcomeExportStart, portalOfferLaunchDeliveryExpansionOutcomeExportEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionOutcomeExportRenderer || expansionOutcomeForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionOutcomeExportRenderer.includes(term))) fail("portal offer launch delivery expansion-outcome export exposes expansion outcome/milestone provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const offerLaunchDeliveryExpansionFollowUpNormalizerStart = script.indexOf("const normalizeOfferLaunchDeliveryExpansionFollowUpReceiptExport");
const offerLaunchDeliveryExpansionFollowUpNormalizerEnd = script.indexOf("const normalizeOfferLaunchDeliveryExpansionFollowUpReceiptPayload", offerLaunchDeliveryExpansionFollowUpNormalizerStart);
const offerLaunchDeliveryExpansionFollowUpNormalizer = offerLaunchDeliveryExpansionFollowUpNormalizerStart >= 0 && offerLaunchDeliveryExpansionFollowUpNormalizerEnd > offerLaunchDeliveryExpansionFollowUpNormalizerStart
  ? script.slice(offerLaunchDeliveryExpansionFollowUpNormalizerStart, offerLaunchDeliveryExpansionFollowUpNormalizerEnd)
  : "";
for (const phrase of [
  "forbiddenInternalFields",
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
  "cashSpeedScore",
  "laborLeverageScore",
  "proofReadinessScore",
  "marketDemandScore",
  "launchPriorityScore",
  "operatorNextAction",
  "providerGoLiveRequested",
  "paymentLiveEnabled",
  "liveProviderEnabled",
  "Object.prototype.hasOwnProperty.call(item, field)",
  "item.kind === \"offer-launch-delivery-expansion-follow-up\"",
  "item.customerSafe === true",
  "item.webportalExportReady === true || item.customerVisibleReceiptReady === true",
  "item.appOwnedExpansionFollowUpState === true",
  "item.appOwnedExpansionOutcomeState === true",
  "item.epochTimingProviderOnly === true",
  "item.workshopCalendarOwnership !== true",
  "item.monitorWorkflowExposed !== true",
  "item.paymentLiveEnabled !== true",
  "item.providerGoLiveRequested !== true",
  "item.liveProviderEnabled !== true",
  "item.aiForwardCopy !== true",
  "item.japanCopyMode === \"ai-neutral\"",
  "item.under19GuardRequired === true",
  "item.nativeExecutionReady === true"
]) {
  if (!offerLaunchDeliveryExpansionFollowUpNormalizer.includes(phrase)) fail(`offer launch delivery expansion-follow-up Webportal normalizer missing safety gate ${phrase}`);
}
const expansionFollowUpForbiddenRenderTerms = [
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
  "sourceReceiptId",
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
  "paymentLiveEnabled",
  "providerGoLiveRequested",
  "liveProviderEnabled",
  "monitorWorkflowExposed",
  "MONITOR",
  "monitor"
];
const portalOfferLaunchDeliveryExpansionFollowUpStatusStart = script.indexOf('renderStack("portal-offer-launch-delivery-expansion-follow-up-status"');
const portalOfferLaunchDeliveryExpansionFollowUpStatusEnd = script.indexOf('"No customer-safe launch offer delivery expansion follow-up receipts yet."', portalOfferLaunchDeliveryExpansionFollowUpStatusStart);
const portalOfferLaunchDeliveryExpansionFollowUpStatusRenderer = portalOfferLaunchDeliveryExpansionFollowUpStatusStart >= 0 && portalOfferLaunchDeliveryExpansionFollowUpStatusEnd > portalOfferLaunchDeliveryExpansionFollowUpStatusStart
  ? script.slice(portalOfferLaunchDeliveryExpansionFollowUpStatusStart, portalOfferLaunchDeliveryExpansionFollowUpStatusEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionFollowUpStatusRenderer || expansionFollowUpForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionFollowUpStatusRenderer.includes(term))) fail("portal offer launch delivery expansion-follow-up status exposes expansion follow-up/outcome provenance, internal launch scoring, provider/payment, monitor, or operator controls");
const portalOfferLaunchDeliveryExpansionFollowUpExportStart = script.indexOf('"portal-offer-launch-delivery-expansion-follow-up-receipt-export"');
const portalOfferLaunchDeliveryExpansionFollowUpExportEnd = script.indexOf('"No customer-safe App offer launch delivery expansion follow-up receipts loaded."', portalOfferLaunchDeliveryExpansionFollowUpExportStart);
const portalOfferLaunchDeliveryExpansionFollowUpExportRenderer = portalOfferLaunchDeliveryExpansionFollowUpExportStart >= 0 && portalOfferLaunchDeliveryExpansionFollowUpExportEnd > portalOfferLaunchDeliveryExpansionFollowUpExportStart
  ? script.slice(portalOfferLaunchDeliveryExpansionFollowUpExportStart, portalOfferLaunchDeliveryExpansionFollowUpExportEnd)
  : "";
if (!portalOfferLaunchDeliveryExpansionFollowUpExportRenderer || expansionFollowUpForbiddenRenderTerms.some((term) => portalOfferLaunchDeliveryExpansionFollowUpExportRenderer.includes(term))) fail("portal offer launch delivery expansion-follow-up export exposes expansion follow-up/outcome provenance, internal launch scoring, provider/payment, monitor, or operator controls");
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
const packageDeliveryRetentionReportNormalizerStart = script.indexOf("const normalizePackageDeliveryRetentionReportReceiptExport");
const packageDeliveryRetentionReportNormalizerEnd = script.indexOf("const normalizePackageDeliveryRetentionReportReceiptPayload", packageDeliveryRetentionReportNormalizerStart);
const packageDeliveryRetentionReportNormalizer = packageDeliveryRetentionReportNormalizerStart >= 0 && packageDeliveryRetentionReportNormalizerEnd > packageDeliveryRetentionReportNormalizerStart
  ? script.slice(packageDeliveryRetentionReportNormalizerStart, packageDeliveryRetentionReportNormalizerEnd)
  : "";
if (!packageDeliveryRetentionReportNormalizer || packageDeliveryRetentionReportNormalizer.includes("reportId") || packageDeliveryRetentionReportNormalizer.includes("accountGrowthReceiptId") || packageDeliveryRetentionReportNormalizer.includes("qualityOutcomeReceiptId") || packageDeliveryRetentionReportNormalizer.includes("accountGrowthPlanId") || packageDeliveryRetentionReportNormalizer.includes("retentionSignalId") || packageDeliveryRetentionReportNormalizer.includes("referralSignalId") || packageDeliveryRetentionReportNormalizer.includes("expansionSignalId")) fail("package delivery retention report Webportal normalizer exposes internal retention/reporting ids");
const portalPackageDeliveryRetentionReportStatusStart = script.indexOf('renderStack("portal-package-delivery-retention-report-status"');
const portalPackageDeliveryRetentionReportStatusEnd = script.indexOf('"No customer-visible package delivery retention-report receipts yet."', portalPackageDeliveryRetentionReportStatusStart);
const portalPackageDeliveryRetentionReportStatusRenderer = portalPackageDeliveryRetentionReportStatusStart >= 0 && portalPackageDeliveryRetentionReportStatusEnd > portalPackageDeliveryRetentionReportStatusStart
  ? script.slice(portalPackageDeliveryRetentionReportStatusStart, portalPackageDeliveryRetentionReportStatusEnd)
  : "";
if (!portalPackageDeliveryRetentionReportStatusRenderer || portalPackageDeliveryRetentionReportStatusRenderer.includes("operatorNextAction") || portalPackageDeliveryRetentionReportStatusRenderer.includes("packetId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("assignmentId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("opportunityId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("queueId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("decisionId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("materializationId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("materializationReceiptId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("reuseId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("checklistId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("automationId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("executionId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("executionReceiptId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("followUpId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("followUpRenewalId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("followUpRenewalReceiptId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("qualityOutcomeId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("qualityOutcomeReceiptId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("outcomeId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("linkageId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("reportId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("accountGrowthReceiptId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("accountGrowthPlanId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("retentionSignalId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("referralSignalId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("expansionSignalId") || portalPackageDeliveryRetentionReportStatusRenderer.includes("materialAssetId")) fail("portal package delivery retention report status exposes internal retention/reporting, account-growth, outcome, follow-up, execution, automation, checklist, material, or review controls");
const portalPackageDeliveryRetentionReportExportStart = script.indexOf('"portal-package-delivery-retention-report-receipt-export"');
const portalPackageDeliveryRetentionReportExportEnd = script.indexOf('"No customer-safe App package delivery retention-report receipts loaded."', portalPackageDeliveryRetentionReportExportStart);
const portalPackageDeliveryRetentionReportExportRenderer = portalPackageDeliveryRetentionReportExportStart >= 0 && portalPackageDeliveryRetentionReportExportEnd > portalPackageDeliveryRetentionReportExportStart
  ? script.slice(portalPackageDeliveryRetentionReportExportStart, portalPackageDeliveryRetentionReportExportEnd)
  : "";
if (!portalPackageDeliveryRetentionReportExportRenderer || portalPackageDeliveryRetentionReportExportRenderer.includes("operatorNextAction") || portalPackageDeliveryRetentionReportExportRenderer.includes("packetId") || portalPackageDeliveryRetentionReportExportRenderer.includes("assignmentId") || portalPackageDeliveryRetentionReportExportRenderer.includes("opportunityId") || portalPackageDeliveryRetentionReportExportRenderer.includes("queueId") || portalPackageDeliveryRetentionReportExportRenderer.includes("decisionId") || portalPackageDeliveryRetentionReportExportRenderer.includes("materializationId") || portalPackageDeliveryRetentionReportExportRenderer.includes("materializationReceiptId") || portalPackageDeliveryRetentionReportExportRenderer.includes("reuseId") || portalPackageDeliveryRetentionReportExportRenderer.includes("checklistId") || portalPackageDeliveryRetentionReportExportRenderer.includes("automationId") || portalPackageDeliveryRetentionReportExportRenderer.includes("executionId") || portalPackageDeliveryRetentionReportExportRenderer.includes("executionReceiptId") || portalPackageDeliveryRetentionReportExportRenderer.includes("followUpId") || portalPackageDeliveryRetentionReportExportRenderer.includes("followUpRenewalId") || portalPackageDeliveryRetentionReportExportRenderer.includes("followUpRenewalReceiptId") || portalPackageDeliveryRetentionReportExportRenderer.includes("qualityOutcomeId") || portalPackageDeliveryRetentionReportExportRenderer.includes("qualityOutcomeReceiptId") || portalPackageDeliveryRetentionReportExportRenderer.includes("outcomeId") || portalPackageDeliveryRetentionReportExportRenderer.includes("linkageId") || portalPackageDeliveryRetentionReportExportRenderer.includes("reportId") || portalPackageDeliveryRetentionReportExportRenderer.includes("accountGrowthReceiptId") || portalPackageDeliveryRetentionReportExportRenderer.includes("accountGrowthPlanId") || portalPackageDeliveryRetentionReportExportRenderer.includes("retentionSignalId") || portalPackageDeliveryRetentionReportExportRenderer.includes("referralSignalId") || portalPackageDeliveryRetentionReportExportRenderer.includes("expansionSignalId") || portalPackageDeliveryRetentionReportExportRenderer.includes("materialAssetId")) fail("portal package delivery retention report export exposes internal retention/reporting, account-growth, outcome, follow-up, execution, automation, checklist, material, or review controls");
const packageDeliveryGrowthActionNormalizerStart = script.indexOf("const normalizePackageDeliveryGrowthActionReceiptExport");
const packageDeliveryGrowthActionNormalizerEnd = script.indexOf("const normalizePackageDeliveryGrowthActionReceiptPayload", packageDeliveryGrowthActionNormalizerStart);
const packageDeliveryGrowthActionNormalizer = packageDeliveryGrowthActionNormalizerStart >= 0 && packageDeliveryGrowthActionNormalizerEnd > packageDeliveryGrowthActionNormalizerStart
  ? script.slice(packageDeliveryGrowthActionNormalizerStart, packageDeliveryGrowthActionNormalizerEnd)
  : "";
if (!packageDeliveryGrowthActionNormalizer || packageDeliveryGrowthActionNormalizer.includes("retentionReportId") || packageDeliveryGrowthActionNormalizer.includes("retentionReportReceiptId") || packageDeliveryGrowthActionNormalizer.includes("reportId") || packageDeliveryGrowthActionNormalizer.includes("accountGrowthReceiptId") || packageDeliveryGrowthActionNormalizer.includes("qualityOutcomeReceiptId") || packageDeliveryGrowthActionNormalizer.includes("accountGrowthPlanId") || packageDeliveryGrowthActionNormalizer.includes("retentionSignalId") || packageDeliveryGrowthActionNormalizer.includes("referralSignalId") || packageDeliveryGrowthActionNormalizer.includes("expansionSignalId") || packageDeliveryGrowthActionNormalizer.includes("operatorNextAction")) fail("package delivery growth action Webportal normalizer exposes internal growth-action, report, signal, or account-growth ids");
const portalPackageDeliveryGrowthActionStatusStart = script.indexOf('renderStack("portal-package-delivery-growth-action-status"');
const portalPackageDeliveryGrowthActionStatusEnd = script.indexOf('"No customer-visible package delivery growth-action receipts yet."', portalPackageDeliveryGrowthActionStatusStart);
const portalPackageDeliveryGrowthActionStatusRenderer = portalPackageDeliveryGrowthActionStatusStart >= 0 && portalPackageDeliveryGrowthActionStatusEnd > portalPackageDeliveryGrowthActionStatusStart
  ? script.slice(portalPackageDeliveryGrowthActionStatusStart, portalPackageDeliveryGrowthActionStatusEnd)
  : "";
if (!portalPackageDeliveryGrowthActionStatusRenderer || portalPackageDeliveryGrowthActionStatusRenderer.includes("operatorNextAction") || portalPackageDeliveryGrowthActionStatusRenderer.includes("packetId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("assignmentId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("opportunityId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("queueId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("decisionId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("materializationId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("materializationReceiptId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("reuseId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("checklistId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("automationId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("executionId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("executionReceiptId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("followUpId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("followUpRenewalId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("followUpRenewalReceiptId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("qualityOutcomeId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("qualityOutcomeReceiptId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("outcomeId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("linkageId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("reportId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("retentionReportId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("retentionReportReceiptId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("accountGrowthReceiptId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("accountGrowthPlanId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("retentionSignalId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("referralSignalId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("expansionSignalId") || portalPackageDeliveryGrowthActionStatusRenderer.includes("materialAssetId")) fail("portal package delivery growth action status exposes internal growth-action, retention/reporting, account-growth, outcome, follow-up, execution, automation, checklist, material, or review controls");
const portalPackageDeliveryGrowthActionExportStart = script.indexOf('"portal-package-delivery-growth-action-receipt-export"');
const portalPackageDeliveryGrowthActionExportEnd = script.indexOf('"No customer-safe App package delivery growth-action receipts loaded."', portalPackageDeliveryGrowthActionExportStart);
const portalPackageDeliveryGrowthActionExportRenderer = portalPackageDeliveryGrowthActionExportStart >= 0 && portalPackageDeliveryGrowthActionExportEnd > portalPackageDeliveryGrowthActionExportStart
  ? script.slice(portalPackageDeliveryGrowthActionExportStart, portalPackageDeliveryGrowthActionExportEnd)
  : "";
if (!portalPackageDeliveryGrowthActionExportRenderer || portalPackageDeliveryGrowthActionExportRenderer.includes("operatorNextAction") || portalPackageDeliveryGrowthActionExportRenderer.includes("packetId") || portalPackageDeliveryGrowthActionExportRenderer.includes("assignmentId") || portalPackageDeliveryGrowthActionExportRenderer.includes("opportunityId") || portalPackageDeliveryGrowthActionExportRenderer.includes("queueId") || portalPackageDeliveryGrowthActionExportRenderer.includes("decisionId") || portalPackageDeliveryGrowthActionExportRenderer.includes("materializationId") || portalPackageDeliveryGrowthActionExportRenderer.includes("materializationReceiptId") || portalPackageDeliveryGrowthActionExportRenderer.includes("reuseId") || portalPackageDeliveryGrowthActionExportRenderer.includes("checklistId") || portalPackageDeliveryGrowthActionExportRenderer.includes("automationId") || portalPackageDeliveryGrowthActionExportRenderer.includes("executionId") || portalPackageDeliveryGrowthActionExportRenderer.includes("executionReceiptId") || portalPackageDeliveryGrowthActionExportRenderer.includes("followUpId") || portalPackageDeliveryGrowthActionExportRenderer.includes("followUpRenewalId") || portalPackageDeliveryGrowthActionExportRenderer.includes("followUpRenewalReceiptId") || portalPackageDeliveryGrowthActionExportRenderer.includes("qualityOutcomeId") || portalPackageDeliveryGrowthActionExportRenderer.includes("qualityOutcomeReceiptId") || portalPackageDeliveryGrowthActionExportRenderer.includes("outcomeId") || portalPackageDeliveryGrowthActionExportRenderer.includes("linkageId") || portalPackageDeliveryGrowthActionExportRenderer.includes("reportId") || portalPackageDeliveryGrowthActionExportRenderer.includes("retentionReportId") || portalPackageDeliveryGrowthActionExportRenderer.includes("retentionReportReceiptId") || portalPackageDeliveryGrowthActionExportRenderer.includes("accountGrowthReceiptId") || portalPackageDeliveryGrowthActionExportRenderer.includes("accountGrowthPlanId") || portalPackageDeliveryGrowthActionExportRenderer.includes("retentionSignalId") || portalPackageDeliveryGrowthActionExportRenderer.includes("referralSignalId") || portalPackageDeliveryGrowthActionExportRenderer.includes("expansionSignalId") || portalPackageDeliveryGrowthActionExportRenderer.includes("materialAssetId")) fail("portal package delivery growth action export exposes internal growth-action, retention/reporting, account-growth, outcome, follow-up, execution, automation, checklist, material, or review controls");
if (data.includes('return "MONITOR";')) fail("ARA owner factory assigns customer work to MONITOR");

console.log("WORKSHOP boundary verification passed");
