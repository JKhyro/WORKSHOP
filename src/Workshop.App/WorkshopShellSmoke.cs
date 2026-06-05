using Workshop.App.Native;
using Workshop.App.Services;
using System.Text.Json;

namespace Workshop.App;

internal static class WorkshopShellSmoke
{
    public static int Run()
    {
        string? previousStateDirectory = Environment.GetEnvironmentVariable(
            WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable);
        string? previousEpochStateDirectory = Environment.GetEnvironmentVariable(
            WorkshopEpochRevisedCalendarTimingPayloadStore.EpochStateDirectoryEnvironmentVariable);
        string smokeStateDirectory = Path.Combine(
            Path.GetTempPath(),
            "Workshop.App.Smoke",
            Guid.NewGuid().ToString("N"));
        string smokeEpochStateDirectory = Path.Combine(
            Path.GetTempPath(),
            "Workshop.App.EpochExportSmoke",
            Guid.NewGuid().ToString("N"));

        try
        {
            Environment.SetEnvironmentVariable(
                WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable,
                smokeStateDirectory);
            Environment.SetEnvironmentVariable(
                WorkshopEpochRevisedCalendarTimingPayloadStore.EpochStateDirectoryEnvironmentVariable,
                smokeEpochStateDirectory);
            WriteEpochRevisedTimingExportFixture(smokeEpochStateDirectory);

            WorkshopShellSnapshot snapshot = WorkshopNative.LoadSnapshot();
            WorkshopRevenueCommandResult command = WorkshopNative.LoadRevenueCommand();
            WorkshopRevenueExecutionReceipt execution = WorkshopNative.ExecuteRevenueCommand("approve-operator-reviewed-offer");
            IReadOnlyList<WorkshopLaborEstimateRecord> laborEstimates =
                WorkshopLaborEstimateStore.EnsureDefaults(command);
            WorkshopOwnerTimeBudgetRecord ownerTimeBudget =
                WorkshopOwnerTimeBudgetStore.EnsureDefault(command);
            IReadOnlyList<WorkshopOwnerTimeBudgetRecord> ownerTimeBudgets =
                WorkshopOwnerTimeBudgetStore.Load();
            WorkshopOfferLaunchReadinessRecord offerLaunchReadiness =
                WorkshopOfferLaunchReadinessStore.Append(snapshot, command, execution);
            IReadOnlyList<WorkshopOfferLaunchReadinessRecord> offerLaunchReadinessRecords =
                WorkshopOfferLaunchReadinessStore.Load();
            WorkshopOfferLaunchReadinessReceipt offerLaunchReadinessReceipt =
                WorkshopOfferLaunchReadinessReceiptStore.Append(offerLaunchReadiness);
            IReadOnlyList<WorkshopOfferLaunchReadinessReceipt> offerLaunchReadinessReceipts =
                WorkshopOfferLaunchReadinessReceiptStore.Load();
            WorkshopOfferLaunchIntakeActionRecord offerLaunchIntakeAction =
                WorkshopOfferLaunchIntakeActionStore.Append(offerLaunchReadinessReceipt);
            IReadOnlyList<WorkshopOfferLaunchIntakeActionRecord> offerLaunchIntakeActions =
                WorkshopOfferLaunchIntakeActionStore.Load();
            WorkshopOfferLaunchIntakeReceipt offerLaunchIntakeReceipt =
                WorkshopOfferLaunchIntakeReceiptStore.Append(offerLaunchIntakeAction);
            IReadOnlyList<WorkshopOfferLaunchIntakeReceipt> offerLaunchIntakeReceipts =
                WorkshopOfferLaunchIntakeReceiptStore.Load();
            WorkshopOfferLaunchActivationRecord offerLaunchActivation =
                WorkshopOfferLaunchActivationStore.Append(offerLaunchIntakeReceipt);
            IReadOnlyList<WorkshopOfferLaunchActivationRecord> offerLaunchActivations =
                WorkshopOfferLaunchActivationStore.Load();
            WorkshopOfferLaunchActivationReceipt offerLaunchActivationReceipt =
                WorkshopOfferLaunchActivationReceiptStore.Append(offerLaunchActivation);
            IReadOnlyList<WorkshopOfferLaunchActivationReceipt> offerLaunchActivationReceipts =
                WorkshopOfferLaunchActivationReceiptStore.Load();
            WorkshopOfferLaunchServiceSetupRecord offerLaunchServiceSetup =
                WorkshopOfferLaunchServiceSetupStore.Append(offerLaunchActivationReceipt);
            IReadOnlyList<WorkshopOfferLaunchServiceSetupRecord> offerLaunchServiceSetups =
                WorkshopOfferLaunchServiceSetupStore.Load();
            WorkshopOfferLaunchServiceSetupReceipt offerLaunchServiceSetupReceipt =
                WorkshopOfferLaunchServiceSetupReceiptStore.Append(offerLaunchServiceSetup);
            IReadOnlyList<WorkshopOfferLaunchServiceSetupReceipt> offerLaunchServiceSetupReceipts =
                WorkshopOfferLaunchServiceSetupReceiptStore.Load();
            WorkshopOfferLaunchDeliveryWorkspaceRecord offerLaunchDeliveryWorkspace =
                WorkshopOfferLaunchDeliveryWorkspaceStore.Append(offerLaunchServiceSetupReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryWorkspaceRecord> offerLaunchDeliveryWorkspaces =
                WorkshopOfferLaunchDeliveryWorkspaceStore.Load();
            WorkshopOfferLaunchDeliveryWorkspaceReceipt offerLaunchDeliveryWorkspaceReceipt =
                WorkshopOfferLaunchDeliveryWorkspaceReceiptStore.Append(offerLaunchDeliveryWorkspace);
            IReadOnlyList<WorkshopOfferLaunchDeliveryWorkspaceReceipt> offerLaunchDeliveryWorkspaceReceipts =
                WorkshopOfferLaunchDeliveryWorkspaceReceiptStore.Load();
            WorkshopOfferLaunchDeliveryKickoffRecord offerLaunchDeliveryKickoff =
                WorkshopOfferLaunchDeliveryKickoffStore.Append(offerLaunchDeliveryWorkspaceReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryKickoffRecord> offerLaunchDeliveryKickoffs =
                WorkshopOfferLaunchDeliveryKickoffStore.Load();
            WorkshopOfferLaunchDeliveryKickoffReceipt offerLaunchDeliveryKickoffReceipt =
                WorkshopOfferLaunchDeliveryKickoffReceiptStore.Append(offerLaunchDeliveryKickoff);
            IReadOnlyList<WorkshopOfferLaunchDeliveryKickoffReceipt> offerLaunchDeliveryKickoffReceipts =
                WorkshopOfferLaunchDeliveryKickoffReceiptStore.Load();
            WorkshopOfferLaunchDeliveryMilestoneRecord offerLaunchDeliveryMilestone =
                WorkshopOfferLaunchDeliveryMilestoneStore.Append(offerLaunchDeliveryKickoffReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryMilestoneRecord> offerLaunchDeliveryMilestones =
                WorkshopOfferLaunchDeliveryMilestoneStore.Load();
            WorkshopOfferLaunchDeliveryMilestoneReceipt offerLaunchDeliveryMilestoneReceipt =
                WorkshopOfferLaunchDeliveryMilestoneReceiptStore.Append(offerLaunchDeliveryMilestone);
            IReadOnlyList<WorkshopOfferLaunchDeliveryMilestoneReceipt> offerLaunchDeliveryMilestoneReceipts =
                WorkshopOfferLaunchDeliveryMilestoneReceiptStore.Load();
            WorkshopOfferLaunchDeliveryOutcomeRecord offerLaunchDeliveryOutcome =
                WorkshopOfferLaunchDeliveryOutcomeStore.Append(offerLaunchDeliveryMilestoneReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryOutcomeRecord> offerLaunchDeliveryOutcomes =
                WorkshopOfferLaunchDeliveryOutcomeStore.Load();
            WorkshopOfferLaunchDeliveryOutcomeReceipt offerLaunchDeliveryOutcomeReceipt =
                WorkshopOfferLaunchDeliveryOutcomeReceiptStore.Append(offerLaunchDeliveryOutcome);
            IReadOnlyList<WorkshopOfferLaunchDeliveryOutcomeReceipt> offerLaunchDeliveryOutcomeReceipts =
                WorkshopOfferLaunchDeliveryOutcomeReceiptStore.Load();
            WorkshopOfferLaunchDeliveryFollowUpRecord offerLaunchDeliveryFollowUp =
                WorkshopOfferLaunchDeliveryFollowUpStore.Append(offerLaunchDeliveryOutcomeReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryFollowUpRecord> offerLaunchDeliveryFollowUps =
                WorkshopOfferLaunchDeliveryFollowUpStore.Load();
            WorkshopOfferLaunchDeliveryFollowUpReceipt offerLaunchDeliveryFollowUpReceipt =
                WorkshopOfferLaunchDeliveryFollowUpReceiptStore.Append(offerLaunchDeliveryFollowUp);
            IReadOnlyList<WorkshopOfferLaunchDeliveryFollowUpReceipt> offerLaunchDeliveryFollowUpReceipts =
                WorkshopOfferLaunchDeliveryFollowUpReceiptStore.Load();
            WorkshopOfferLaunchDeliveryGrowthPlanRecord offerLaunchDeliveryGrowthPlan =
                WorkshopOfferLaunchDeliveryGrowthPlanStore.Append(offerLaunchDeliveryFollowUpReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryGrowthPlanRecord> offerLaunchDeliveryGrowthPlans =
                WorkshopOfferLaunchDeliveryGrowthPlanStore.Load();
            WorkshopOfferLaunchDeliveryGrowthPlanReceipt offerLaunchDeliveryGrowthPlanReceipt =
                WorkshopOfferLaunchDeliveryGrowthPlanReceiptStore.Append(offerLaunchDeliveryGrowthPlan);
            IReadOnlyList<WorkshopOfferLaunchDeliveryGrowthPlanReceipt> offerLaunchDeliveryGrowthPlanReceipts =
                WorkshopOfferLaunchDeliveryGrowthPlanReceiptStore.Load();
            WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord offerLaunchDeliveryGrowthPlanAcceptance =
                WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceStore.Append(offerLaunchDeliveryGrowthPlanReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceRecord> offerLaunchDeliveryGrowthPlanAcceptances =
                WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceStore.Load();
            WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt offerLaunchDeliveryGrowthPlanAcceptanceReceipt =
                WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceiptStore.Append(offerLaunchDeliveryGrowthPlanAcceptance);
            IReadOnlyList<WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt> offerLaunchDeliveryGrowthPlanAcceptanceReceipts =
                WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceiptStore.Load();
            WorkshopOfferLaunchDeliveryExpansionRequestRecord offerLaunchDeliveryExpansionRequest =
                WorkshopOfferLaunchDeliveryExpansionRequestStore.Append(offerLaunchDeliveryGrowthPlanAcceptanceReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionRequestRecord> offerLaunchDeliveryExpansionRequests =
                WorkshopOfferLaunchDeliveryExpansionRequestStore.Load();
            WorkshopOfferLaunchDeliveryExpansionRequestReceipt offerLaunchDeliveryExpansionRequestReceipt =
                WorkshopOfferLaunchDeliveryExpansionRequestReceiptStore.Append(offerLaunchDeliveryExpansionRequest);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionRequestReceipt> offerLaunchDeliveryExpansionRequestReceipts =
                WorkshopOfferLaunchDeliveryExpansionRequestReceiptStore.Load();
            WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord offerLaunchDeliveryExpansionWorkspace =
                WorkshopOfferLaunchDeliveryExpansionWorkspaceStore.Append(offerLaunchDeliveryExpansionRequestReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionWorkspaceRecord> offerLaunchDeliveryExpansionWorkspaces =
                WorkshopOfferLaunchDeliveryExpansionWorkspaceStore.Load();
            WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt offerLaunchDeliveryExpansionWorkspaceReceipt =
                WorkshopOfferLaunchDeliveryExpansionWorkspaceReceiptStore.Append(offerLaunchDeliveryExpansionWorkspace);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt> offerLaunchDeliveryExpansionWorkspaceReceipts =
                WorkshopOfferLaunchDeliveryExpansionWorkspaceReceiptStore.Load();
            WorkshopOfferLaunchDeliveryExpansionKickoffRecord offerLaunchDeliveryExpansionKickoff =
                WorkshopOfferLaunchDeliveryExpansionKickoffStore.Append(offerLaunchDeliveryExpansionWorkspaceReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionKickoffRecord> offerLaunchDeliveryExpansionKickoffs =
                WorkshopOfferLaunchDeliveryExpansionKickoffStore.Load();
            WorkshopOfferLaunchDeliveryExpansionKickoffReceipt offerLaunchDeliveryExpansionKickoffReceipt =
                WorkshopOfferLaunchDeliveryExpansionKickoffReceiptStore.Append(offerLaunchDeliveryExpansionKickoff);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionKickoffReceipt> offerLaunchDeliveryExpansionKickoffReceipts =
                WorkshopOfferLaunchDeliveryExpansionKickoffReceiptStore.Load();
            WorkshopOfferLaunchDeliveryExpansionMilestoneRecord offerLaunchDeliveryExpansionMilestone =
                WorkshopOfferLaunchDeliveryExpansionMilestoneStore.Append(offerLaunchDeliveryExpansionKickoffReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionMilestoneRecord> offerLaunchDeliveryExpansionMilestones =
                WorkshopOfferLaunchDeliveryExpansionMilestoneStore.Load();
            WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt offerLaunchDeliveryExpansionMilestoneReceipt =
                WorkshopOfferLaunchDeliveryExpansionMilestoneReceiptStore.Append(offerLaunchDeliveryExpansionMilestone);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt> offerLaunchDeliveryExpansionMilestoneReceipts =
                WorkshopOfferLaunchDeliveryExpansionMilestoneReceiptStore.Load();
            WorkshopOfferLaunchDeliveryExpansionOutcomeRecord offerLaunchDeliveryExpansionOutcome =
                WorkshopOfferLaunchDeliveryExpansionOutcomeStore.Append(offerLaunchDeliveryExpansionMilestoneReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionOutcomeRecord> offerLaunchDeliveryExpansionOutcomes =
                WorkshopOfferLaunchDeliveryExpansionOutcomeStore.Load();
            WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt offerLaunchDeliveryExpansionOutcomeReceipt =
                WorkshopOfferLaunchDeliveryExpansionOutcomeReceiptStore.Append(offerLaunchDeliveryExpansionOutcome);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt> offerLaunchDeliveryExpansionOutcomeReceipts =
                WorkshopOfferLaunchDeliveryExpansionOutcomeReceiptStore.Load();
            WorkshopOfferLaunchDeliveryExpansionFollowUpRecord offerLaunchDeliveryExpansionFollowUp =
                WorkshopOfferLaunchDeliveryExpansionFollowUpStore.Append(offerLaunchDeliveryExpansionOutcomeReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionFollowUpRecord> offerLaunchDeliveryExpansionFollowUps =
                WorkshopOfferLaunchDeliveryExpansionFollowUpStore.Load();
            WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt offerLaunchDeliveryExpansionFollowUpReceipt =
                WorkshopOfferLaunchDeliveryExpansionFollowUpReceiptStore.Append(offerLaunchDeliveryExpansionFollowUp);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionFollowUpReceipt> offerLaunchDeliveryExpansionFollowUpReceipts =
                WorkshopOfferLaunchDeliveryExpansionFollowUpReceiptStore.Load();
            WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord offerLaunchDeliveryExpansionGrowthPlan =
                WorkshopOfferLaunchDeliveryExpansionGrowthPlanStore.Append(offerLaunchDeliveryExpansionFollowUpReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionGrowthPlanRecord> offerLaunchDeliveryExpansionGrowthPlans =
                WorkshopOfferLaunchDeliveryExpansionGrowthPlanStore.Load();
            WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt offerLaunchDeliveryExpansionGrowthPlanReceipt =
                WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceiptStore.Append(offerLaunchDeliveryExpansionGrowthPlan);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceipt> offerLaunchDeliveryExpansionGrowthPlanReceipts =
                WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceiptStore.Load();
            WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord offerLaunchDeliveryExpansionGrowthPlanAcceptance =
                WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceStore.Append(offerLaunchDeliveryExpansionGrowthPlanReceipt);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceRecord> offerLaunchDeliveryExpansionGrowthPlanAcceptances =
                WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceStore.Load();
            WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt =
                WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptStore.Append(offerLaunchDeliveryExpansionGrowthPlanAcceptance);
            IReadOnlyList<WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt> offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts =
                WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptStore.Load();
            WorkshopRevenueExecutionHistoryEntry historyEntry = WorkshopRevenueExecutionHistoryStore.Append(
                execution,
                "Workshop.App.Smoke");
            IReadOnlyList<WorkshopRevenueExecutionHistoryEntry> history = WorkshopRevenueExecutionHistoryStore.Load();
            WorkshopWebportalServiceRequest serviceInboxRequest = WorkshopServiceRequestInboxStore.EnsureDefaultWebportalRequest();
            IReadOnlyList<WorkshopWebportalServiceRequest> serviceInbox = WorkshopServiceRequestInboxStore.Load();
            WorkshopServiceRevenueCommandReceipt serviceCommandReceipt =
                WorkshopServiceRevenueCommandReceiptStore.Append(serviceInboxRequest, historyEntry, execution);
            IReadOnlyList<WorkshopServiceRevenueCommandReceipt> serviceCommandReceipts =
                WorkshopServiceRevenueCommandReceiptStore.Load();
            WorkshopAraReviewQueueRecord araReviewQueue =
                WorkshopAraReviewQueueStore.Append(historyEntry, serviceCommandReceipt);
            IReadOnlyList<WorkshopAraReviewQueueRecord> araReviewQueueRecords =
                WorkshopAraReviewQueueStore.Load();
            WorkshopAraOperatorReviewDecision araReviewDecision =
                WorkshopAraOperatorReviewDecisionStore.Append(araReviewQueue);
            IReadOnlyList<WorkshopAraOperatorReviewDecision> araReviewDecisions =
                WorkshopAraOperatorReviewDecisionStore.Load();
            WorkshopAraReviewStatusReceipt araReviewStatusReceipt =
                WorkshopAraReviewStatusReceiptStore.Append(araReviewDecision);
            IReadOnlyList<WorkshopAraReviewStatusReceipt> araReviewStatusReceipts =
                WorkshopAraReviewStatusReceiptStore.Load();
            WorkshopAraMethodMaterializationRecord araMethodMaterialization =
                WorkshopAraMethodMaterializationStore.Append(araReviewDecision, araReviewStatusReceipt);
            IReadOnlyList<WorkshopAraMethodMaterializationRecord> araMethodMaterializations =
                WorkshopAraMethodMaterializationStore.Load();
            WorkshopAraMaterializationReceipt araMaterializationReceipt =
                WorkshopAraMaterializationReceiptStore.Append(araMethodMaterialization);
            IReadOnlyList<WorkshopAraMaterializationReceipt> araMaterializationReceipts =
                WorkshopAraMaterializationReceiptStore.Load();
            WorkshopServiceMaterialReuseRecord serviceMaterialReuse =
                WorkshopServiceMaterialReuseStore.Append(araMaterializationReceipt, serviceInboxRequest);
            IReadOnlyList<WorkshopServiceMaterialReuseRecord> serviceMaterialReuseRecords =
                WorkshopServiceMaterialReuseStore.Load();
            WorkshopServiceMaterialReuseReceipt serviceMaterialReuseReceipt =
                WorkshopServiceMaterialReuseReceiptStore.Append(serviceMaterialReuse);
            IReadOnlyList<WorkshopServiceMaterialReuseReceipt> serviceMaterialReuseReceipts =
                WorkshopServiceMaterialReuseReceiptStore.Load();
            WorkshopPackageDeliveryChecklistRecord packageDeliveryChecklist =
                WorkshopPackageDeliveryChecklistStore.Append(serviceMaterialReuse);
            IReadOnlyList<WorkshopPackageDeliveryChecklistRecord> packageDeliveryChecklists =
                WorkshopPackageDeliveryChecklistStore.Load();
            WorkshopPackageDeliveryChecklistReceipt packageDeliveryChecklistReceipt =
                WorkshopPackageDeliveryChecklistReceiptStore.Append(packageDeliveryChecklist);
            IReadOnlyList<WorkshopPackageDeliveryChecklistReceipt> packageDeliveryChecklistReceipts =
                WorkshopPackageDeliveryChecklistReceiptStore.Load();
            WorkshopPackageDeliveryChecklistAutomationRecord packageDeliveryChecklistAutomation =
                WorkshopPackageDeliveryChecklistAutomationStore.Append(packageDeliveryChecklist);
            IReadOnlyList<WorkshopPackageDeliveryChecklistAutomationRecord> packageDeliveryChecklistAutomations =
                WorkshopPackageDeliveryChecklistAutomationStore.Load();
            WorkshopPackageDeliveryChecklistAutomationReceipt packageDeliveryChecklistAutomationReceipt =
                WorkshopPackageDeliveryChecklistAutomationReceiptStore.Append(packageDeliveryChecklistAutomation);
            IReadOnlyList<WorkshopPackageDeliveryChecklistAutomationReceipt> packageDeliveryChecklistAutomationReceipts =
                WorkshopPackageDeliveryChecklistAutomationReceiptStore.Load();
            WorkshopPackageDeliveryExecutionRecord packageDeliveryExecution =
                WorkshopPackageDeliveryExecutionStore.Append(packageDeliveryChecklistAutomation);
            IReadOnlyList<WorkshopPackageDeliveryExecutionRecord> packageDeliveryExecutions =
                WorkshopPackageDeliveryExecutionStore.Load();
            WorkshopPackageDeliveryExecutionReceipt packageDeliveryExecutionReceipt =
                WorkshopPackageDeliveryExecutionReceiptStore.Append(packageDeliveryExecution);
            IReadOnlyList<WorkshopPackageDeliveryExecutionReceipt> packageDeliveryExecutionReceipts =
                WorkshopPackageDeliveryExecutionReceiptStore.Load();
            WorkshopPackageDeliveryFollowUpRenewalRecord packageDeliveryFollowUpRenewal =
                WorkshopPackageDeliveryFollowUpRenewalStore.Append(packageDeliveryExecutionReceipt);
            IReadOnlyList<WorkshopPackageDeliveryFollowUpRenewalRecord> packageDeliveryFollowUpRenewals =
                WorkshopPackageDeliveryFollowUpRenewalStore.Load();
            WorkshopPackageDeliveryFollowUpRenewalReceipt packageDeliveryFollowUpRenewalReceipt =
                WorkshopPackageDeliveryFollowUpRenewalReceiptStore.Append(packageDeliveryFollowUpRenewal);
            IReadOnlyList<WorkshopPackageDeliveryFollowUpRenewalReceipt> packageDeliveryFollowUpRenewalReceipts =
                WorkshopPackageDeliveryFollowUpRenewalReceiptStore.Load();
            WorkshopPackageDeliveryQualityOutcomeRecord packageDeliveryQualityOutcome =
                WorkshopPackageDeliveryQualityOutcomeStore.Append(
                    packageDeliveryExecutionReceipt,
                    packageDeliveryFollowUpRenewalReceipt);
            IReadOnlyList<WorkshopPackageDeliveryQualityOutcomeRecord> packageDeliveryQualityOutcomes =
                WorkshopPackageDeliveryQualityOutcomeStore.Load();
            WorkshopPackageDeliveryQualityOutcomeReceipt packageDeliveryQualityOutcomeReceipt =
                WorkshopPackageDeliveryQualityOutcomeReceiptStore.Append(packageDeliveryQualityOutcome);
            IReadOnlyList<WorkshopPackageDeliveryQualityOutcomeReceipt> packageDeliveryQualityOutcomeReceipts =
                WorkshopPackageDeliveryQualityOutcomeReceiptStore.Load();
            WorkshopPackageDeliveryAccountGrowthLinkageRecord packageDeliveryAccountGrowthLinkage =
                WorkshopPackageDeliveryAccountGrowthLinkageStore.Append(packageDeliveryQualityOutcomeReceipt);
            IReadOnlyList<WorkshopPackageDeliveryAccountGrowthLinkageRecord> packageDeliveryAccountGrowthLinkages =
                WorkshopPackageDeliveryAccountGrowthLinkageStore.Load();
            WorkshopPackageDeliveryAccountGrowthReceipt packageDeliveryAccountGrowthReceipt =
                WorkshopPackageDeliveryAccountGrowthReceiptStore.Append(packageDeliveryAccountGrowthLinkage);
            IReadOnlyList<WorkshopPackageDeliveryAccountGrowthReceipt> packageDeliveryAccountGrowthReceipts =
                WorkshopPackageDeliveryAccountGrowthReceiptStore.Load();
            WorkshopPackageDeliveryRetentionReportRecord packageDeliveryRetentionReport =
                WorkshopPackageDeliveryRetentionReportStore.Append(
                    packageDeliveryAccountGrowthLinkage,
                    packageDeliveryAccountGrowthReceipt,
                    packageDeliveryQualityOutcomeReceipt);
            IReadOnlyList<WorkshopPackageDeliveryRetentionReportRecord> packageDeliveryRetentionReports =
                WorkshopPackageDeliveryRetentionReportStore.Load();
            WorkshopPackageDeliveryRetentionReportReceipt packageDeliveryRetentionReportReceipt =
                WorkshopPackageDeliveryRetentionReportReceiptStore.Append(packageDeliveryRetentionReport);
            IReadOnlyList<WorkshopPackageDeliveryRetentionReportReceipt> packageDeliveryRetentionReportReceipts =
                WorkshopPackageDeliveryRetentionReportReceiptStore.Load();
            WorkshopPackageDeliveryGrowthActionRecord packageDeliveryGrowthAction =
                WorkshopPackageDeliveryGrowthActionStore.Append(
                    packageDeliveryRetentionReport,
                    packageDeliveryRetentionReportReceipt);
            IReadOnlyList<WorkshopPackageDeliveryGrowthActionRecord> packageDeliveryGrowthActions =
                WorkshopPackageDeliveryGrowthActionStore.Load();
            WorkshopPackageDeliveryGrowthActionReceipt packageDeliveryGrowthActionReceipt =
                WorkshopPackageDeliveryGrowthActionReceiptStore.Append(packageDeliveryGrowthAction);
            IReadOnlyList<WorkshopPackageDeliveryGrowthActionReceipt> packageDeliveryGrowthActionReceipts =
                WorkshopPackageDeliveryGrowthActionReceiptStore.Load();
            WorkshopRevenueOperationsBoardSnapshot operationsBoard =
                WorkshopRevenueOperationsBoardSnapshot.FromLedgers(
                    serviceInbox,
                    serviceCommandReceipts,
                    history,
                    WorkshopServiceRequestInboxStore.InboxPath,
                    WorkshopServiceRevenueCommandReceiptStore.ReceiptPath,
                    WorkshopRevenueExecutionHistoryStore.HistoryPath);
            WorkshopCustomerServiceStatusRecord customerStatus =
                WorkshopCustomerServiceStatusStore.Append(serviceInboxRequest, serviceCommandReceipt, historyEntry);
            IReadOnlyList<WorkshopCustomerServiceStatusRecord> customerStatuses =
                WorkshopCustomerServiceStatusStore.Load();
            WorkshopServiceLifecycleAction lifecycleAction =
                WorkshopServiceLifecycleActionStore.EnsureDefaultLifecycleAction();
            IReadOnlyList<WorkshopServiceLifecycleAction> lifecycleActions =
                WorkshopServiceLifecycleActionStore.Load();
            WorkshopServiceLifecycleReceipt lifecycleReceipt =
                WorkshopServiceLifecycleReceiptStore.Append(lifecycleAction, serviceCommandReceipt, historyEntry);
            IReadOnlyList<WorkshopServiceLifecycleReceipt> lifecycleReceipts =
                WorkshopServiceLifecycleReceiptStore.Load();
            WorkshopServiceLifecycleStatusRecord lifecycleStatus =
                WorkshopServiceLifecycleStatusStore.Append(lifecycleAction, lifecycleReceipt);
            IReadOnlyList<WorkshopServiceLifecycleStatusRecord> lifecycleStatuses =
                WorkshopServiceLifecycleStatusStore.Load();
            WorkshopEpochRevisedCalendarTimingPayload revisedTimingPayload =
                WorkshopEpochRevisedCalendarTimingPayloadStore.EnsureDefaultPayload();
            IReadOnlyList<WorkshopEpochRevisedCalendarTimingPayload> revisedTimingPayloads =
                WorkshopEpochRevisedCalendarTimingPayloadStore.Load();
            WorkshopRevisedCalendarTimingReceipt revisedTimingReceipt =
                WorkshopRevisedCalendarTimingReceiptStore.Append(revisedTimingPayload);
            IReadOnlyList<WorkshopRevisedCalendarTimingReceipt> revisedTimingReceipts =
                WorkshopRevisedCalendarTimingReceiptStore.Load();
            WorkshopRevisedCalendarTimingStatusRecord revisedTimingStatus =
                WorkshopRevisedCalendarTimingStatusStore.Append(revisedTimingPayload, revisedTimingReceipt);
            IReadOnlyList<WorkshopRevisedCalendarTimingStatusRecord> revisedTimingStatuses =
                WorkshopRevisedCalendarTimingStatusStore.Load();
            WorkshopTimingAwareServiceFollowUp timingAwareFollowUp =
                WorkshopTimingAwareServiceFollowUpStore.Append(
                    revisedTimingPayload,
                    revisedTimingReceipt,
                    revisedTimingStatus);
            IReadOnlyList<WorkshopTimingAwareServiceFollowUp> timingAwareFollowUps =
                WorkshopTimingAwareServiceFollowUpStore.Load();
            WorkshopTimingAwareRenewalReceipt timingAwareRenewalReceipt =
                WorkshopTimingAwareRenewalReceiptStore.Append(
                    timingAwareFollowUp,
                    revisedTimingStatus);
            IReadOnlyList<WorkshopTimingAwareRenewalReceipt> timingAwareRenewalReceipts =
                WorkshopTimingAwareRenewalReceiptStore.Load();
            WorkshopDeliveryOutcomeAutomationRecord deliveryOutcomeAutomation =
                WorkshopDeliveryOutcomeAutomationStore.Append(
                    historyEntry,
                    lifecycleStatus,
                    timingAwareRenewalReceipt);
            IReadOnlyList<WorkshopDeliveryOutcomeAutomationRecord> deliveryOutcomeAutomations =
                WorkshopDeliveryOutcomeAutomationStore.Load();
            WorkshopDeliveryOutcomeAutomationReceipt deliveryOutcomeAutomationReceipt =
                WorkshopDeliveryOutcomeAutomationReceiptStore.Append(deliveryOutcomeAutomation);
            IReadOnlyList<WorkshopDeliveryOutcomeAutomationReceipt> deliveryOutcomeAutomationReceipts =
                WorkshopDeliveryOutcomeAutomationReceiptStore.Load();
            WorkshopAccountGrowthAutomationRecord accountGrowthAutomation =
                WorkshopAccountGrowthAutomationStore.Append(
                    deliveryOutcomeAutomation,
                    deliveryOutcomeAutomationReceipt);
            IReadOnlyList<WorkshopAccountGrowthAutomationRecord> accountGrowthAutomations =
                WorkshopAccountGrowthAutomationStore.Load();
            WorkshopAccountGrowthAutomationReceipt accountGrowthAutomationReceipt =
                WorkshopAccountGrowthAutomationReceiptStore.Append(accountGrowthAutomation);
            IReadOnlyList<WorkshopAccountGrowthAutomationReceipt> accountGrowthAutomationReceipts =
                WorkshopAccountGrowthAutomationReceiptStore.Load();

            if (snapshot.ProductName != "WORKSHOP" ||
                snapshot.CoreStatus != "native-core-ready" ||
                snapshot.LowLaborScore < 80 ||
                snapshot.MonthlyRevenueTargetJpy != 300000 ||
                !snapshot.AraHumanReviewRequired ||
                !snapshot.EpochBoundaryEnforced ||
                !snapshot.MonitorBoundaryEnforced ||
                !command.NativeCommandReady ||
                !command.LowLaborViable ||
                !command.RoiTestReady ||
                !command.AraReviewRequired ||
                command.EpochHandoffStatus != "epoch-time-requested" ||
                !execution.NativeExecutionReady ||
                !execution.ExecutedLocally ||
                !execution.CustomerVisibleReceiptReady ||
                !execution.AraOperatorReviewComplete ||
                execution.MonitorWorkflowExposed ||
                execution.ExecutionStatus != "epoch-time-requested" ||
                execution.DeliveryResultReceiptId != "workshop-exec-delivery-receipt-001" ||
                offerLaunchReadinessRecords.Count != 1 ||
                offerLaunchReadinessRecords[0].LaunchReadinessId != offerLaunchReadiness.LaunchReadinessId ||
                offerLaunchReadinessRecords[0].ServiceRequestId != command.ServiceRequestId ||
                offerLaunchReadinessRecords[0].OfferExperimentId != command.OfferExperimentId ||
                offerLaunchReadinessRecords[0].RevenueReceiptId != command.RevenueReceiptId ||
                offerLaunchReadinessRecords[0].DeliveryLogId != command.DeliveryLogId ||
                offerLaunchReadinessRecords[0].EpochHandoffStatus != command.EpochHandoffStatus ||
                offerLaunchReadinessRecords[0].Status != "offer-launch-readiness-ready" ||
                offerLaunchReadinessRecords[0].LaunchPriorityScore < 80 ||
                offerLaunchReadinessRecords[0].CustomerVisible ||
                !offerLaunchReadinessRecords[0].CustomerSafeForReceipt ||
                offerLaunchReadinessRecords[0].WebportalExportReady ||
                !offerLaunchReadinessRecords[0].EpochTimingProviderOnly ||
                offerLaunchReadinessRecords[0].WorkshopCalendarOwnership ||
                offerLaunchReadinessRecords[0].MonitorWorkflowExposed ||
                offerLaunchReadinessRecords[0].PaymentLiveEnabled ||
                offerLaunchReadinessRecords[0].AiForwardCopy ||
                offerLaunchReadinessRecords[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchReadinessRecords[0].Under19GuardRequired ||
                !offerLaunchReadinessRecords[0].OperatorNextAction.Contains("under-19 requests through compatibility review", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchReadinessStore.ReadinessPath) ||
                offerLaunchReadinessReceipts.Count != 1 ||
                offerLaunchReadinessReceipts[0].ReceiptId != offerLaunchReadinessReceipt.ReceiptId ||
                offerLaunchReadinessReceipts[0].ServiceRequestId != command.ServiceRequestId ||
                offerLaunchReadinessReceipts[0].PackageId != "pkg-submission-4" ||
                offerLaunchReadinessReceipts[0].Kind != "offer-launch-readiness" ||
                offerLaunchReadinessReceipts[0].Status != "customer-safe-offer-launch-ready" ||
                !offerLaunchReadinessReceipts[0].CustomerSafe ||
                !offerLaunchReadinessReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchReadinessReceipts[0].WebportalExportReady ||
                !offerLaunchReadinessReceipts[0].EpochTimingProviderOnly ||
                offerLaunchReadinessReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchReadinessReceipts[0].MonitorWorkflowExposed ||
                offerLaunchReadinessReceipts[0].PaymentLiveEnabled ||
                offerLaunchReadinessReceipts[0].AiForwardCopy ||
                offerLaunchReadinessReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchReadinessReceipts[0].Under19GuardRequired ||
                !offerLaunchReadinessReceipts[0].CustomerSafeMessage.Contains("EPOCH is used only for timing requests", StringComparison.Ordinal) ||
                !offerLaunchReadinessReceipts[0].NextAction.Contains("Under-19 requests require compatibility review", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchReadinessReceiptStore.ReceiptPath) ||
                offerLaunchIntakeActions.Count != 1 ||
                offerLaunchIntakeActions[0].ActionId != offerLaunchIntakeAction.ActionId ||
                offerLaunchIntakeActions[0].SourceReceiptId != offerLaunchReadinessReceipt.ReceiptId ||
                offerLaunchIntakeActions[0].Kind != "offer-launch-intake-action" ||
                offerLaunchIntakeActions[0].Status != "offer-launch-intake-queued" ||
                offerLaunchIntakeActions[0].CustomerVisible ||
                !offerLaunchIntakeActions[0].CustomerSafeForReceipt ||
                offerLaunchIntakeActions[0].WebportalExportReady ||
                !offerLaunchIntakeActions[0].AppOwnedIntakeState ||
                offerLaunchIntakeActions[0].CompatibilityGateRequired ||
                !offerLaunchIntakeActions[0].EpochTimingProviderOnly ||
                offerLaunchIntakeActions[0].WorkshopCalendarOwnership ||
                offerLaunchIntakeActions[0].MonitorWorkflowExposed ||
                offerLaunchIntakeActions[0].PaymentLiveEnabled ||
                offerLaunchIntakeActions[0].ProviderGoLiveRequested ||
                offerLaunchIntakeActions[0].LiveProviderEnabled ||
                offerLaunchIntakeActions[0].AiForwardCopy ||
                offerLaunchIntakeActions[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchIntakeActions[0].Under19GuardRequired ||
                !offerLaunchIntakeActions[0].NativeExecutionReady ||
                offerLaunchIntakeActions[0].RequiresEpochTimingRequest ||
                !offerLaunchIntakeActions[0].OperatorNextAction.Contains("inside WORKSHOP", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchIntakeActionStore.ActionPath) ||
                offerLaunchIntakeReceipts.Count != 1 ||
                offerLaunchIntakeReceipts[0].ReceiptId != offerLaunchIntakeReceipt.ReceiptId ||
                offerLaunchIntakeReceipts[0].Kind != "offer-launch-intake" ||
                offerLaunchIntakeReceipts[0].Status != "customer-safe-offer-launch-intake-queued" ||
                !offerLaunchIntakeReceipts[0].CustomerVisible ||
                !offerLaunchIntakeReceipts[0].CustomerSafe ||
                !offerLaunchIntakeReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchIntakeReceipts[0].WebportalExportReady ||
                !offerLaunchIntakeReceipts[0].AppOwnedIntakeState ||
                offerLaunchIntakeReceipts[0].CompatibilityGateRequired ||
                !offerLaunchIntakeReceipts[0].EpochTimingProviderOnly ||
                offerLaunchIntakeReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchIntakeReceipts[0].MonitorWorkflowExposed ||
                offerLaunchIntakeReceipts[0].PaymentLiveEnabled ||
                offerLaunchIntakeReceipts[0].ProviderGoLiveRequested ||
                offerLaunchIntakeReceipts[0].LiveProviderEnabled ||
                offerLaunchIntakeReceipts[0].AiForwardCopy ||
                offerLaunchIntakeReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchIntakeReceipts[0].Under19GuardRequired ||
                !offerLaunchIntakeReceipts[0].NativeExecutionReady ||
                offerLaunchIntakeReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchIntakeReceipts[0].CustomerSafeMessage.Contains("EPOCH is used only for timing requests", StringComparison.Ordinal) ||
                !offerLaunchIntakeReceipts[0].NextAction.Contains("timing-provider-only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchIntakeReceiptStore.ReceiptPath) ||
                offerLaunchActivations.Count != 1 ||
                offerLaunchActivations[0].ActivationId != offerLaunchActivation.ActivationId ||
                offerLaunchActivations[0].IntakeReceiptId != offerLaunchIntakeReceipt.ReceiptId ||
                offerLaunchActivations[0].Kind != "offer-launch-activation" ||
                offerLaunchActivations[0].Status != "offer-launch-activation-ready" ||
                offerLaunchActivations[0].CustomerVisible ||
                !offerLaunchActivations[0].CustomerSafeForReceipt ||
                offerLaunchActivations[0].WebportalExportReady ||
                !offerLaunchActivations[0].AppOwnedActivationState ||
                !offerLaunchActivations[0].AppOwnedIntakeState ||
                !offerLaunchActivations[0].ActivationReady ||
                offerLaunchActivations[0].CompatibilityGateRequired ||
                !offerLaunchActivations[0].EpochTimingProviderOnly ||
                offerLaunchActivations[0].WorkshopCalendarOwnership ||
                offerLaunchActivations[0].MonitorWorkflowExposed ||
                offerLaunchActivations[0].PaymentLiveEnabled ||
                offerLaunchActivations[0].ProviderGoLiveRequested ||
                offerLaunchActivations[0].LiveProviderEnabled ||
                offerLaunchActivations[0].AiForwardCopy ||
                offerLaunchActivations[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchActivations[0].Under19GuardRequired ||
                !offerLaunchActivations[0].NativeExecutionReady ||
                offerLaunchActivations[0].RequiresEpochTimingRequest ||
                !offerLaunchActivations[0].OperatorNextAction.Contains("inside WORKSHOP", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchActivationStore.ActivationPath) ||
                offerLaunchActivationReceipts.Count != 1 ||
                offerLaunchActivationReceipts[0].ReceiptId != offerLaunchActivationReceipt.ReceiptId ||
                offerLaunchActivationReceipts[0].Kind != "offer-launch-activation" ||
                offerLaunchActivationReceipts[0].Status != "customer-safe-offer-launch-activation-ready" ||
                !offerLaunchActivationReceipts[0].CustomerVisible ||
                !offerLaunchActivationReceipts[0].CustomerSafe ||
                !offerLaunchActivationReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchActivationReceipts[0].WebportalExportReady ||
                !offerLaunchActivationReceipts[0].AppOwnedActivationState ||
                !offerLaunchActivationReceipts[0].AppOwnedIntakeState ||
                !offerLaunchActivationReceipts[0].ActivationReady ||
                offerLaunchActivationReceipts[0].CompatibilityGateRequired ||
                !offerLaunchActivationReceipts[0].EpochTimingProviderOnly ||
                offerLaunchActivationReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchActivationReceipts[0].MonitorWorkflowExposed ||
                offerLaunchActivationReceipts[0].PaymentLiveEnabled ||
                offerLaunchActivationReceipts[0].ProviderGoLiveRequested ||
                offerLaunchActivationReceipts[0].LiveProviderEnabled ||
                offerLaunchActivationReceipts[0].AiForwardCopy ||
                offerLaunchActivationReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchActivationReceipts[0].Under19GuardRequired ||
                !offerLaunchActivationReceipts[0].NativeExecutionReady ||
                offerLaunchActivationReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchActivationReceipts[0].CustomerSafeMessage.Contains("EPOCH is used only for timing", StringComparison.Ordinal) ||
                !offerLaunchActivationReceipts[0].NextAction.Contains("without adding calendar load", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchActivationReceiptStore.ReceiptPath) ||
                offerLaunchServiceSetups.Count != 1 ||
                offerLaunchServiceSetups[0].SetupId != offerLaunchServiceSetup.SetupId ||
                offerLaunchServiceSetups[0].ActivationReceiptId != offerLaunchActivationReceipt.ReceiptId ||
                offerLaunchServiceSetups[0].Kind != "offer-launch-service-setup" ||
                offerLaunchServiceSetups[0].Status != "offer-launch-service-setup-ready" ||
                offerLaunchServiceSetups[0].CustomerVisible ||
                !offerLaunchServiceSetups[0].CustomerSafeForReceipt ||
                offerLaunchServiceSetups[0].WebportalExportReady ||
                !offerLaunchServiceSetups[0].AppOwnedSetupState ||
                !offerLaunchServiceSetups[0].AppOwnedActivationState ||
                !offerLaunchServiceSetups[0].SetupReady ||
                !offerLaunchServiceSetups[0].ActivationReady ||
                offerLaunchServiceSetups[0].CompatibilityGateRequired ||
                !offerLaunchServiceSetups[0].EpochTimingProviderOnly ||
                offerLaunchServiceSetups[0].WorkshopCalendarOwnership ||
                offerLaunchServiceSetups[0].MonitorWorkflowExposed ||
                offerLaunchServiceSetups[0].PaymentLiveEnabled ||
                offerLaunchServiceSetups[0].ProviderGoLiveRequested ||
                offerLaunchServiceSetups[0].LiveProviderEnabled ||
                offerLaunchServiceSetups[0].AiForwardCopy ||
                offerLaunchServiceSetups[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchServiceSetups[0].Under19GuardRequired ||
                !offerLaunchServiceSetups[0].NativeExecutionReady ||
                offerLaunchServiceSetups[0].RequiresEpochTimingRequest ||
                !offerLaunchServiceSetups[0].OperatorNextAction.Contains("customer-safe setup receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchServiceSetupStore.SetupPath) ||
                offerLaunchServiceSetupReceipts.Count != 1 ||
                offerLaunchServiceSetupReceipts[0].ReceiptId != offerLaunchServiceSetupReceipt.ReceiptId ||
                offerLaunchServiceSetupReceipts[0].Kind != "offer-launch-service-setup" ||
                offerLaunchServiceSetupReceipts[0].Status != "customer-safe-offer-launch-service-setup-ready" ||
                !offerLaunchServiceSetupReceipts[0].CustomerVisible ||
                !offerLaunchServiceSetupReceipts[0].CustomerSafe ||
                !offerLaunchServiceSetupReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchServiceSetupReceipts[0].WebportalExportReady ||
                !offerLaunchServiceSetupReceipts[0].AppOwnedSetupState ||
                !offerLaunchServiceSetupReceipts[0].AppOwnedActivationState ||
                !offerLaunchServiceSetupReceipts[0].SetupReady ||
                !offerLaunchServiceSetupReceipts[0].ActivationReady ||
                offerLaunchServiceSetupReceipts[0].CompatibilityGateRequired ||
                !offerLaunchServiceSetupReceipts[0].EpochTimingProviderOnly ||
                offerLaunchServiceSetupReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchServiceSetupReceipts[0].MonitorWorkflowExposed ||
                offerLaunchServiceSetupReceipts[0].PaymentLiveEnabled ||
                offerLaunchServiceSetupReceipts[0].ProviderGoLiveRequested ||
                offerLaunchServiceSetupReceipts[0].LiveProviderEnabled ||
                offerLaunchServiceSetupReceipts[0].AiForwardCopy ||
                offerLaunchServiceSetupReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchServiceSetupReceipts[0].Under19GuardRequired ||
                !offerLaunchServiceSetupReceipts[0].NativeExecutionReady ||
                offerLaunchServiceSetupReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchServiceSetupReceipts[0].CustomerSafeMessage.Contains("EPOCH will be used only", StringComparison.Ordinal) ||
                !offerLaunchServiceSetupReceipts[0].NextAction.Contains("without adding calendar load", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchServiceSetupReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryWorkspaces.Count != 1 ||
                offerLaunchDeliveryWorkspaces[0].WorkspaceId != offerLaunchDeliveryWorkspace.WorkspaceId ||
                offerLaunchDeliveryWorkspaces[0].SetupReceiptId != offerLaunchServiceSetupReceipt.ReceiptId ||
                offerLaunchDeliveryWorkspaces[0].Kind != "offer-launch-delivery-workspace" ||
                offerLaunchDeliveryWorkspaces[0].Status != "offer-launch-delivery-workspace-ready" ||
                offerLaunchDeliveryWorkspaces[0].CustomerVisible ||
                !offerLaunchDeliveryWorkspaces[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryWorkspaces[0].WebportalExportReady ||
                !offerLaunchDeliveryWorkspaces[0].AppOwnedWorkspaceState ||
                !offerLaunchDeliveryWorkspaces[0].AppOwnedSetupState ||
                !offerLaunchDeliveryWorkspaces[0].WorkspaceReady ||
                !offerLaunchDeliveryWorkspaces[0].SetupReady ||
                offerLaunchDeliveryWorkspaces[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryWorkspaces[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryWorkspaces[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryWorkspaces[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryWorkspaces[0].PaymentLiveEnabled ||
                offerLaunchDeliveryWorkspaces[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryWorkspaces[0].LiveProviderEnabled ||
                offerLaunchDeliveryWorkspaces[0].AiForwardCopy ||
                offerLaunchDeliveryWorkspaces[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryWorkspaces[0].Under19GuardRequired ||
                !offerLaunchDeliveryWorkspaces[0].NativeExecutionReady ||
                offerLaunchDeliveryWorkspaces[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryWorkspaces[0].OperatorNextAction.Contains("customer-safe workspace receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryWorkspaceStore.WorkspacePath) ||
                offerLaunchDeliveryWorkspaceReceipts.Count != 1 ||
                offerLaunchDeliveryWorkspaceReceipts[0].ReceiptId != offerLaunchDeliveryWorkspaceReceipt.ReceiptId ||
                offerLaunchDeliveryWorkspaceReceipts[0].Kind != "offer-launch-delivery-workspace" ||
                offerLaunchDeliveryWorkspaceReceipts[0].Status != "customer-safe-offer-launch-delivery-workspace-ready" ||
                !offerLaunchDeliveryWorkspaceReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryWorkspaceReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryWorkspaceReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryWorkspaceReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryWorkspaceReceipts[0].AppOwnedWorkspaceState ||
                !offerLaunchDeliveryWorkspaceReceipts[0].AppOwnedSetupState ||
                !offerLaunchDeliveryWorkspaceReceipts[0].WorkspaceReady ||
                !offerLaunchDeliveryWorkspaceReceipts[0].SetupReady ||
                offerLaunchDeliveryWorkspaceReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryWorkspaceReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryWorkspaceReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryWorkspaceReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryWorkspaceReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryWorkspaceReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryWorkspaceReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryWorkspaceReceipts[0].AiForwardCopy ||
                offerLaunchDeliveryWorkspaceReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryWorkspaceReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryWorkspaceReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryWorkspaceReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryWorkspaceReceipts[0].CustomerSafeMessage.Contains("EPOCH will be used only", StringComparison.Ordinal) ||
                !offerLaunchDeliveryWorkspaceReceipts[0].NextAction.Contains("prepared workspace", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryWorkspaceReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryKickoffs.Count != 1 ||
                offerLaunchDeliveryKickoffs[0].KickoffId != offerLaunchDeliveryKickoff.KickoffId ||
                offerLaunchDeliveryKickoffs[0].WorkspaceReceiptId != offerLaunchDeliveryWorkspaceReceipt.ReceiptId ||
                offerLaunchDeliveryKickoffs[0].Kind != "offer-launch-delivery-kickoff" ||
                offerLaunchDeliveryKickoffs[0].Status != "offer-launch-delivery-kickoff-ready" ||
                offerLaunchDeliveryKickoffs[0].CustomerVisible ||
                !offerLaunchDeliveryKickoffs[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryKickoffs[0].WebportalExportReady ||
                !offerLaunchDeliveryKickoffs[0].AppOwnedKickoffState ||
                !offerLaunchDeliveryKickoffs[0].AppOwnedWorkspaceState ||
                !offerLaunchDeliveryKickoffs[0].KickoffReady ||
                !offerLaunchDeliveryKickoffs[0].WorkspaceReady ||
                offerLaunchDeliveryKickoffs[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryKickoffs[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryKickoffs[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryKickoffs[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryKickoffs[0].PaymentLiveEnabled ||
                offerLaunchDeliveryKickoffs[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryKickoffs[0].LiveProviderEnabled ||
                offerLaunchDeliveryKickoffs[0].AiForwardCopy ||
                offerLaunchDeliveryKickoffs[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryKickoffs[0].Under19GuardRequired ||
                !offerLaunchDeliveryKickoffs[0].NativeExecutionReady ||
                offerLaunchDeliveryKickoffs[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryKickoffs[0].OperatorNextAction.Contains("customer-safe kickoff receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryKickoffStore.KickoffPath) ||
                offerLaunchDeliveryKickoffReceipts.Count != 1 ||
                offerLaunchDeliveryKickoffReceipts[0].ReceiptId != offerLaunchDeliveryKickoffReceipt.ReceiptId ||
                offerLaunchDeliveryKickoffReceipts[0].Kind != "offer-launch-delivery-kickoff" ||
                offerLaunchDeliveryKickoffReceipts[0].Status != "customer-safe-offer-launch-delivery-kickoff-ready" ||
                !offerLaunchDeliveryKickoffReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryKickoffReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryKickoffReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryKickoffReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryKickoffReceipts[0].AppOwnedKickoffState ||
                !offerLaunchDeliveryKickoffReceipts[0].AppOwnedWorkspaceState ||
                !offerLaunchDeliveryKickoffReceipts[0].KickoffReady ||
                !offerLaunchDeliveryKickoffReceipts[0].WorkspaceReady ||
                offerLaunchDeliveryKickoffReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryKickoffReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryKickoffReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryKickoffReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryKickoffReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryKickoffReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryKickoffReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryKickoffReceipts[0].AiForwardCopy ||
                offerLaunchDeliveryKickoffReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryKickoffReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryKickoffReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryKickoffReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryKickoffReceipts[0].CustomerSafeMessage.Contains("EPOCH will be used only", StringComparison.Ordinal) ||
                !offerLaunchDeliveryKickoffReceipts[0].NextAction.Contains("first delivery milestone", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryKickoffReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryMilestones.Count != 1 ||
                offerLaunchDeliveryMilestones[0].MilestoneId != offerLaunchDeliveryMilestone.MilestoneId ||
                offerLaunchDeliveryMilestones[0].KickoffReceiptId != offerLaunchDeliveryKickoffReceipt.ReceiptId ||
                offerLaunchDeliveryMilestones[0].Kind != "offer-launch-delivery-milestone" ||
                offerLaunchDeliveryMilestones[0].Status != "offer-launch-delivery-milestone-active" ||
                offerLaunchDeliveryMilestones[0].CustomerVisible ||
                !offerLaunchDeliveryMilestones[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryMilestones[0].WebportalExportReady ||
                !offerLaunchDeliveryMilestones[0].AppOwnedMilestoneState ||
                !offerLaunchDeliveryMilestones[0].AppOwnedKickoffState ||
                !offerLaunchDeliveryMilestones[0].MilestoneReady ||
                !offerLaunchDeliveryMilestones[0].KickoffReady ||
                offerLaunchDeliveryMilestones[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryMilestones[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryMilestones[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryMilestones[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryMilestones[0].PaymentLiveEnabled ||
                offerLaunchDeliveryMilestones[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryMilestones[0].LiveProviderEnabled ||
                offerLaunchDeliveryMilestones[0].AiForwardCopy ||
                offerLaunchDeliveryMilestones[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryMilestones[0].Under19GuardRequired ||
                !offerLaunchDeliveryMilestones[0].NativeExecutionReady ||
                offerLaunchDeliveryMilestones[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryMilestones[0].OperatorNextAction.Contains("customer-safe milestone receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryMilestoneStore.MilestonePath) ||
                offerLaunchDeliveryMilestoneReceipts.Count != 1 ||
                offerLaunchDeliveryMilestoneReceipts[0].ReceiptId != offerLaunchDeliveryMilestoneReceipt.ReceiptId ||
                offerLaunchDeliveryMilestoneReceipts[0].Kind != "offer-launch-delivery-milestone" ||
                offerLaunchDeliveryMilestoneReceipts[0].Status != "customer-safe-offer-launch-delivery-milestone-active" ||
                !offerLaunchDeliveryMilestoneReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryMilestoneReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryMilestoneReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryMilestoneReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryMilestoneReceipts[0].AppOwnedMilestoneState ||
                !offerLaunchDeliveryMilestoneReceipts[0].AppOwnedKickoffState ||
                !offerLaunchDeliveryMilestoneReceipts[0].MilestoneReady ||
                !offerLaunchDeliveryMilestoneReceipts[0].KickoffReady ||
                offerLaunchDeliveryMilestoneReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryMilestoneReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryMilestoneReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryMilestoneReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryMilestoneReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryMilestoneReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryMilestoneReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryMilestoneReceipts[0].AiForwardCopy ||
                offerLaunchDeliveryMilestoneReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryMilestoneReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryMilestoneReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryMilestoneReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryMilestoneReceipts[0].CustomerSafeMessage.Contains("EPOCH will be used only", StringComparison.Ordinal) ||
                !offerLaunchDeliveryMilestoneReceipts[0].NextAction.Contains("first milestone", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryMilestoneReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryOutcomes.Count != 1 ||
                offerLaunchDeliveryOutcomes[0].OutcomeId != offerLaunchDeliveryOutcome.OutcomeId ||
                offerLaunchDeliveryOutcomes[0].MilestoneReceiptId != offerLaunchDeliveryMilestoneReceipt.ReceiptId ||
                offerLaunchDeliveryOutcomes[0].Kind != "offer-launch-delivery-outcome" ||
                offerLaunchDeliveryOutcomes[0].Status != "offer-launch-delivery-outcome-ready" ||
                offerLaunchDeliveryOutcomes[0].CustomerVisible ||
                !offerLaunchDeliveryOutcomes[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryOutcomes[0].WebportalExportReady ||
                !offerLaunchDeliveryOutcomes[0].AppOwnedOutcomeState ||
                !offerLaunchDeliveryOutcomes[0].AppOwnedMilestoneState ||
                !offerLaunchDeliveryOutcomes[0].OutcomeReady ||
                !offerLaunchDeliveryOutcomes[0].MilestoneReady ||
                offerLaunchDeliveryOutcomes[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryOutcomes[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryOutcomes[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryOutcomes[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryOutcomes[0].PaymentLiveEnabled ||
                offerLaunchDeliveryOutcomes[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryOutcomes[0].LiveProviderEnabled ||
                offerLaunchDeliveryOutcomes[0].AiForwardCopy ||
                offerLaunchDeliveryOutcomes[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryOutcomes[0].Under19GuardRequired ||
                !offerLaunchDeliveryOutcomes[0].NativeExecutionReady ||
                offerLaunchDeliveryOutcomes[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryOutcomes[0].OperatorNextAction.Contains("customer-safe delivery outcome receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryOutcomeStore.OutcomePath) ||
                offerLaunchDeliveryOutcomeReceipts.Count != 1 ||
                offerLaunchDeliveryOutcomeReceipts[0].ReceiptId != offerLaunchDeliveryOutcomeReceipt.ReceiptId ||
                offerLaunchDeliveryOutcomeReceipts[0].Kind != "offer-launch-delivery-outcome" ||
                offerLaunchDeliveryOutcomeReceipts[0].Status != "customer-safe-offer-launch-delivery-outcome-ready" ||
                !offerLaunchDeliveryOutcomeReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryOutcomeReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryOutcomeReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryOutcomeReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryOutcomeReceipts[0].AppOwnedOutcomeState ||
                !offerLaunchDeliveryOutcomeReceipts[0].AppOwnedMilestoneState ||
                !offerLaunchDeliveryOutcomeReceipts[0].OutcomeReady ||
                !offerLaunchDeliveryOutcomeReceipts[0].MilestoneReady ||
                offerLaunchDeliveryOutcomeReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryOutcomeReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryOutcomeReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryOutcomeReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryOutcomeReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryOutcomeReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryOutcomeReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryOutcomeReceipts[0].AiForwardCopy ||
                offerLaunchDeliveryOutcomeReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryOutcomeReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryOutcomeReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryOutcomeReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryOutcomeReceipts[0].CustomerSafeMessage.Contains("EPOCH will be used only", StringComparison.Ordinal) ||
                !offerLaunchDeliveryOutcomeReceipts[0].NextAction.Contains("follow-up or renewal", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryOutcomeReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryFollowUps.Count != 1 ||
                offerLaunchDeliveryFollowUps[0].FollowUpId != offerLaunchDeliveryFollowUp.FollowUpId ||
                offerLaunchDeliveryFollowUps[0].OutcomeReceiptId != offerLaunchDeliveryOutcomeReceipt.ReceiptId ||
                offerLaunchDeliveryFollowUps[0].Kind != "offer-launch-delivery-follow-up" ||
                offerLaunchDeliveryFollowUps[0].Status != "offer-launch-delivery-follow-up-ready" ||
                offerLaunchDeliveryFollowUps[0].CustomerVisible ||
                !offerLaunchDeliveryFollowUps[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryFollowUps[0].WebportalExportReady ||
                !offerLaunchDeliveryFollowUps[0].AppOwnedFollowUpState ||
                !offerLaunchDeliveryFollowUps[0].AppOwnedOutcomeState ||
                !offerLaunchDeliveryFollowUps[0].FollowUpReady ||
                !offerLaunchDeliveryFollowUps[0].RenewalReady ||
                !offerLaunchDeliveryFollowUps[0].ReferralReady ||
                !offerLaunchDeliveryFollowUps[0].OutcomeReady ||
                offerLaunchDeliveryFollowUps[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryFollowUps[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryFollowUps[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryFollowUps[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryFollowUps[0].PaymentLiveEnabled ||
                offerLaunchDeliveryFollowUps[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryFollowUps[0].LiveProviderEnabled ||
                offerLaunchDeliveryFollowUps[0].AiForwardCopy ||
                offerLaunchDeliveryFollowUps[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryFollowUps[0].Under19GuardRequired ||
                !offerLaunchDeliveryFollowUps[0].NativeExecutionReady ||
                offerLaunchDeliveryFollowUps[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryFollowUps[0].OperatorNextAction.Contains("customer-safe delivery follow-up receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryFollowUpStore.FollowUpPath) ||
                offerLaunchDeliveryFollowUpReceipts.Count != 1 ||
                offerLaunchDeliveryFollowUpReceipts[0].ReceiptId != offerLaunchDeliveryFollowUpReceipt.ReceiptId ||
                offerLaunchDeliveryFollowUpReceipts[0].Kind != "offer-launch-delivery-follow-up" ||
                offerLaunchDeliveryFollowUpReceipts[0].Status != "customer-safe-offer-launch-delivery-follow-up-ready" ||
                !offerLaunchDeliveryFollowUpReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryFollowUpReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryFollowUpReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryFollowUpReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryFollowUpReceipts[0].AppOwnedFollowUpState ||
                !offerLaunchDeliveryFollowUpReceipts[0].AppOwnedOutcomeState ||
                !offerLaunchDeliveryFollowUpReceipts[0].FollowUpReady ||
                !offerLaunchDeliveryFollowUpReceipts[0].RenewalReady ||
                !offerLaunchDeliveryFollowUpReceipts[0].ReferralReady ||
                !offerLaunchDeliveryFollowUpReceipts[0].OutcomeReady ||
                offerLaunchDeliveryFollowUpReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryFollowUpReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryFollowUpReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryFollowUpReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryFollowUpReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryFollowUpReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryFollowUpReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryFollowUpReceipts[0].AiForwardCopy ||
                offerLaunchDeliveryFollowUpReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryFollowUpReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryFollowUpReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryFollowUpReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryFollowUpReceipts[0].CustomerSafeMessage.Contains("EPOCH will be used only", StringComparison.Ordinal) ||
                !offerLaunchDeliveryFollowUpReceipts[0].NextAction.Contains("renewal or referral", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryFollowUpReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryGrowthPlans.Count != 1 ||
                offerLaunchDeliveryGrowthPlans[0].GrowthPlanId != offerLaunchDeliveryGrowthPlan.GrowthPlanId ||
                offerLaunchDeliveryGrowthPlans[0].FollowUpReceiptId != offerLaunchDeliveryFollowUpReceipt.ReceiptId ||
                offerLaunchDeliveryGrowthPlans[0].Kind != "offer-launch-delivery-growth-plan" ||
                offerLaunchDeliveryGrowthPlans[0].Status != "offer-launch-delivery-growth-plan-ready" ||
                offerLaunchDeliveryGrowthPlans[0].CustomerVisible ||
                !offerLaunchDeliveryGrowthPlans[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryGrowthPlans[0].WebportalExportReady ||
                !offerLaunchDeliveryGrowthPlans[0].AppOwnedGrowthPlanState ||
                !offerLaunchDeliveryGrowthPlans[0].AppOwnedFollowUpState ||
                !offerLaunchDeliveryGrowthPlans[0].FollowUpReady ||
                !offerLaunchDeliveryGrowthPlans[0].RenewalReady ||
                !offerLaunchDeliveryGrowthPlans[0].ReferralReady ||
                !offerLaunchDeliveryGrowthPlans[0].RepeatServiceReady ||
                !offerLaunchDeliveryGrowthPlans[0].GrowthPlanReady ||
                !offerLaunchDeliveryGrowthPlans[0].OutcomeReady ||
                offerLaunchDeliveryGrowthPlans[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryGrowthPlans[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryGrowthPlans[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryGrowthPlans[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryGrowthPlans[0].PaymentLiveEnabled ||
                offerLaunchDeliveryGrowthPlans[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryGrowthPlans[0].LiveProviderEnabled ||
                offerLaunchDeliveryGrowthPlans[0].AiForwardCopy ||
                offerLaunchDeliveryGrowthPlans[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryGrowthPlans[0].Under19GuardRequired ||
                !offerLaunchDeliveryGrowthPlans[0].NativeExecutionReady ||
                offerLaunchDeliveryGrowthPlans[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryGrowthPlans[0].OperatorNextAction.Contains("customer-safe delivery growth-plan receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryGrowthPlanStore.GrowthPlanPath) ||
                offerLaunchDeliveryGrowthPlanReceipts.Count != 1 ||
                offerLaunchDeliveryGrowthPlanReceipts[0].ReceiptId != offerLaunchDeliveryGrowthPlanReceipt.ReceiptId ||
                offerLaunchDeliveryGrowthPlanReceipts[0].Kind != "offer-launch-delivery-growth-plan" ||
                offerLaunchDeliveryGrowthPlanReceipts[0].Status != "customer-safe-offer-launch-delivery-growth-plan-ready" ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].AppOwnedGrowthPlanState ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].AppOwnedFollowUpState ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].FollowUpReady ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].RenewalReady ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].ReferralReady ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].RepeatServiceReady ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].GrowthPlanReady ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].OutcomeReady ||
                offerLaunchDeliveryGrowthPlanReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryGrowthPlanReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryGrowthPlanReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryGrowthPlanReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryGrowthPlanReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryGrowthPlanReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryGrowthPlanReceipts[0].AiForwardCopy ||
                offerLaunchDeliveryGrowthPlanReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryGrowthPlanReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].CustomerSafeMessage.Contains("repeat-service, renewal, and referral options", StringComparison.Ordinal) ||
                !offerLaunchDeliveryGrowthPlanReceipts[0].NextAction.Contains("repeat-service, renewal, or referral", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryGrowthPlanReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryGrowthPlanAcceptances.Count != 1 ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].AcceptanceId != offerLaunchDeliveryGrowthPlanAcceptance.AcceptanceId ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].GrowthPlanReceiptId != offerLaunchDeliveryGrowthPlanReceipt.ReceiptId ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].Kind != "offer-launch-delivery-growth-plan-acceptance" ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].Status != "offer-launch-delivery-growth-plan-acceptance-ready" ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].CustomerVisible ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].WebportalExportReady ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].AppOwnedAcceptanceState ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].AppOwnedGrowthPlanState ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].GrowthPlanReady ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].RepeatServiceAccepted ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].RenewalAccepted ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].ReferralAccepted ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].AcceptanceReady ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].PaymentLiveEnabled ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].LiveProviderEnabled ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].AiForwardCopy ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].Under19GuardRequired ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].NativeExecutionReady ||
                offerLaunchDeliveryGrowthPlanAcceptances[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryGrowthPlanAcceptances[0].OperatorNextAction.Contains("customer-safe delivery growth-plan acceptance receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceStore.AcceptancePath) ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts.Count != 1 ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].ReceiptId != offerLaunchDeliveryGrowthPlanAcceptanceReceipt.ReceiptId ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].Kind != "offer-launch-delivery-growth-plan-acceptance" ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].Status != "customer-safe-offer-launch-delivery-growth-plan-acceptance-ready" ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].AppOwnedAcceptanceState ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].AppOwnedGrowthPlanState ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].GrowthPlanReady ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].RepeatServiceAccepted ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].RenewalAccepted ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].ReferralAccepted ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].AcceptanceReady ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].AiForwardCopy ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].CustomerSafeMessage.Contains("repeat-service, renewal, or referral path has been accepted", StringComparison.Ordinal) ||
                !offerLaunchDeliveryGrowthPlanAcceptanceReceipts[0].NextAction.Contains("accepted next service motion", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryExpansionRequests.Count != 1 ||
                offerLaunchDeliveryExpansionRequests[0].ExpansionRequestId != offerLaunchDeliveryExpansionRequest.ExpansionRequestId ||
                offerLaunchDeliveryExpansionRequests[0].AcceptanceReceiptId != offerLaunchDeliveryGrowthPlanAcceptanceReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionRequests[0].Kind != "offer-launch-delivery-expansion-request" ||
                offerLaunchDeliveryExpansionRequests[0].Status != "offer-launch-delivery-expansion-request-ready" ||
                offerLaunchDeliveryExpansionRequests[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionRequests[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryExpansionRequests[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionRequests[0].AppOwnedExpansionRequestState ||
                !offerLaunchDeliveryExpansionRequests[0].AppOwnedAcceptanceState ||
                !offerLaunchDeliveryExpansionRequests[0].AcceptanceReady ||
                !offerLaunchDeliveryExpansionRequests[0].RepeatServiceRequested ||
                !offerLaunchDeliveryExpansionRequests[0].RenewalRequested ||
                !offerLaunchDeliveryExpansionRequests[0].ReferralRequested ||
                !offerLaunchDeliveryExpansionRequests[0].ExpansionRequestReady ||
                offerLaunchDeliveryExpansionRequests[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionRequests[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionRequests[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionRequests[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionRequests[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionRequests[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionRequests[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionRequests[0].AiForwardCopy ||
                offerLaunchDeliveryExpansionRequests[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryExpansionRequests[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionRequests[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionRequests[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionRequests[0].OperatorNextAction.Contains("customer-safe delivery expansion-request receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionRequestStore.ExpansionRequestPath) ||
                offerLaunchDeliveryExpansionRequestReceipts.Count != 1 ||
                offerLaunchDeliveryExpansionRequestReceipts[0].ReceiptId != offerLaunchDeliveryExpansionRequestReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionRequestReceipts[0].Kind != "offer-launch-delivery-expansion-request" ||
                offerLaunchDeliveryExpansionRequestReceipts[0].Status != "customer-safe-offer-launch-delivery-expansion-request-ready" ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].AppOwnedExpansionRequestState ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].AppOwnedAcceptanceState ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].AcceptanceReady ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].RepeatServiceRequested ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].RenewalRequested ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].ReferralRequested ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].ExpansionRequestReady ||
                offerLaunchDeliveryExpansionRequestReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionRequestReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionRequestReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionRequestReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionRequestReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionRequestReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionRequestReceipts[0].AiForwardCopy ||
                offerLaunchDeliveryExpansionRequestReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionRequestReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].CustomerSafeMessage.Contains("repeat-service, renewal, or referral request is ready", StringComparison.Ordinal) ||
                !offerLaunchDeliveryExpansionRequestReceipts[0].NextAction.Contains("next service step", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionRequestReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryExpansionWorkspaces.Count != 1 ||
                offerLaunchDeliveryExpansionWorkspaces[0].ExpansionWorkspaceId != offerLaunchDeliveryExpansionWorkspace.ExpansionWorkspaceId ||
                offerLaunchDeliveryExpansionWorkspaces[0].ExpansionRequestReceiptId != offerLaunchDeliveryExpansionRequestReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionWorkspaces[0].Kind != "offer-launch-delivery-expansion-workspace" ||
                offerLaunchDeliveryExpansionWorkspaces[0].Status != "offer-launch-delivery-expansion-workspace-ready" ||
                offerLaunchDeliveryExpansionWorkspaces[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionWorkspaces[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryExpansionWorkspaces[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionWorkspaces[0].AppOwnedExpansionWorkspaceState ||
                !offerLaunchDeliveryExpansionWorkspaces[0].AppOwnedExpansionRequestState ||
                !offerLaunchDeliveryExpansionWorkspaces[0].ExpansionRequestReady ||
                !offerLaunchDeliveryExpansionWorkspaces[0].RepeatServiceRequested ||
                !offerLaunchDeliveryExpansionWorkspaces[0].RenewalRequested ||
                !offerLaunchDeliveryExpansionWorkspaces[0].ReferralRequested ||
                !offerLaunchDeliveryExpansionWorkspaces[0].ExpansionWorkspaceReady ||
                offerLaunchDeliveryExpansionWorkspaces[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionWorkspaces[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionWorkspaces[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionWorkspaces[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionWorkspaces[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionWorkspaces[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionWorkspaces[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionWorkspaces[0].AiForwardCopy ||
                offerLaunchDeliveryExpansionWorkspaces[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryExpansionWorkspaces[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionWorkspaces[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionWorkspaces[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionWorkspaces[0].OperatorNextAction.Contains("customer-safe expansion workspace receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionWorkspaceStore.ExpansionWorkspacePath) ||
                offerLaunchDeliveryExpansionWorkspaceReceipts.Count != 1 ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].ReceiptId != offerLaunchDeliveryExpansionWorkspaceReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].Kind != "offer-launch-delivery-expansion-workspace" ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].Status != "customer-safe-offer-launch-delivery-expansion-workspace-ready" ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].AppOwnedExpansionWorkspaceState ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].AppOwnedExpansionRequestState ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].ExpansionRequestReady ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].RepeatServiceRequested ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].RenewalRequested ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].ReferralRequested ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].ExpansionWorkspaceReady ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].AiForwardCopy ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionWorkspaceReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].CustomerSafeMessage.Contains("next-service workspace is ready", StringComparison.Ordinal) ||
                !offerLaunchDeliveryExpansionWorkspaceReceipts[0].NextAction.Contains("expansion workspace", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionWorkspaceReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryExpansionKickoffs.Count != 1 ||
                offerLaunchDeliveryExpansionKickoffs[0].ExpansionKickoffId != offerLaunchDeliveryExpansionKickoff.ExpansionKickoffId ||
                offerLaunchDeliveryExpansionKickoffs[0].ExpansionWorkspaceReceiptId != offerLaunchDeliveryExpansionWorkspaceReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionKickoffs[0].Kind != "offer-launch-delivery-expansion-kickoff" ||
                offerLaunchDeliveryExpansionKickoffs[0].Status != "offer-launch-delivery-expansion-kickoff-ready" ||
                offerLaunchDeliveryExpansionKickoffs[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionKickoffs[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryExpansionKickoffs[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionKickoffs[0].AppOwnedExpansionKickoffState ||
                !offerLaunchDeliveryExpansionKickoffs[0].AppOwnedExpansionWorkspaceState ||
                !offerLaunchDeliveryExpansionKickoffs[0].ExpansionKickoffReady ||
                !offerLaunchDeliveryExpansionKickoffs[0].ExpansionWorkspaceReady ||
                !offerLaunchDeliveryExpansionKickoffs[0].RepeatServiceRequested ||
                !offerLaunchDeliveryExpansionKickoffs[0].RenewalRequested ||
                !offerLaunchDeliveryExpansionKickoffs[0].ReferralRequested ||
                offerLaunchDeliveryExpansionKickoffs[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionKickoffs[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionKickoffs[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionKickoffs[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionKickoffs[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionKickoffs[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionKickoffs[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionKickoffs[0].AiForwardCopy ||
                offerLaunchDeliveryExpansionKickoffs[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryExpansionKickoffs[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionKickoffs[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionKickoffs[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionKickoffs[0].OperatorNextAction.Contains("customer-safe expansion kickoff receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionKickoffStore.ExpansionKickoffPath) ||
                offerLaunchDeliveryExpansionKickoffReceipts.Count != 1 ||
                offerLaunchDeliveryExpansionKickoffReceipts[0].ReceiptId != offerLaunchDeliveryExpansionKickoffReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionKickoffReceipts[0].Kind != "offer-launch-delivery-expansion-kickoff" ||
                offerLaunchDeliveryExpansionKickoffReceipts[0].Status != "customer-safe-offer-launch-delivery-expansion-kickoff-ready" ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].AppOwnedExpansionKickoffState ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].AppOwnedExpansionWorkspaceState ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].ExpansionKickoffReady ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].ExpansionWorkspaceReady ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].RepeatServiceRequested ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].RenewalRequested ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].ReferralRequested ||
                offerLaunchDeliveryExpansionKickoffReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionKickoffReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionKickoffReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionKickoffReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionKickoffReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionKickoffReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionKickoffReceipts[0].AiForwardCopy ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionKickoffReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].CustomerSafeMessage.Contains("next-service kickoff is ready", StringComparison.Ordinal) ||
                !offerLaunchDeliveryExpansionKickoffReceipts[0].NextAction.Contains("next service milestone", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionKickoffReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryExpansionMilestones.Count != 1 ||
                offerLaunchDeliveryExpansionMilestones[0].ExpansionMilestoneId != offerLaunchDeliveryExpansionMilestone.ExpansionMilestoneId ||
                offerLaunchDeliveryExpansionMilestones[0].ExpansionKickoffReceiptId != offerLaunchDeliveryExpansionKickoffReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionMilestones[0].Kind != "offer-launch-delivery-expansion-milestone" ||
                offerLaunchDeliveryExpansionMilestones[0].Status != "offer-launch-delivery-expansion-milestone-active" ||
                offerLaunchDeliveryExpansionMilestones[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionMilestones[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryExpansionMilestones[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionMilestones[0].AppOwnedExpansionMilestoneState ||
                !offerLaunchDeliveryExpansionMilestones[0].AppOwnedExpansionKickoffState ||
                !offerLaunchDeliveryExpansionMilestones[0].ExpansionMilestoneReady ||
                !offerLaunchDeliveryExpansionMilestones[0].ExpansionKickoffReady ||
                !offerLaunchDeliveryExpansionMilestones[0].RepeatServiceRequested ||
                !offerLaunchDeliveryExpansionMilestones[0].RenewalRequested ||
                !offerLaunchDeliveryExpansionMilestones[0].ReferralRequested ||
                offerLaunchDeliveryExpansionMilestones[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionMilestones[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionMilestones[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionMilestones[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionMilestones[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionMilestones[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionMilestones[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionMilestones[0].AiForwardCopy ||
                offerLaunchDeliveryExpansionMilestones[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryExpansionMilestones[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionMilestones[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionMilestones[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionMilestones[0].OperatorNextAction.Contains("customer-safe expansion milestone receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionMilestoneStore.ExpansionMilestonePath) ||
                offerLaunchDeliveryExpansionMilestoneReceipts.Count != 1 ||
                offerLaunchDeliveryExpansionMilestoneReceipts[0].ReceiptId != offerLaunchDeliveryExpansionMilestoneReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionMilestoneReceipts[0].Kind != "offer-launch-delivery-expansion-milestone" ||
                offerLaunchDeliveryExpansionMilestoneReceipts[0].Status != "customer-safe-offer-launch-delivery-expansion-milestone-active" ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].AppOwnedExpansionMilestoneState ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].AppOwnedExpansionKickoffState ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].ExpansionMilestoneReady ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].ExpansionKickoffReady ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].RepeatServiceRequested ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].RenewalRequested ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].ReferralRequested ||
                offerLaunchDeliveryExpansionMilestoneReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionMilestoneReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionMilestoneReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionMilestoneReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionMilestoneReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionMilestoneReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionMilestoneReceipts[0].AiForwardCopy ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionMilestoneReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].CustomerSafeMessage.Contains("next-service delivery milestone is active", StringComparison.Ordinal) ||
                !offerLaunchDeliveryExpansionMilestoneReceipts[0].NextAction.Contains("next service milestone", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionMilestoneReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryExpansionOutcomes.Count != 1 ||
                offerLaunchDeliveryExpansionOutcomes[0].ExpansionOutcomeId != offerLaunchDeliveryExpansionOutcome.ExpansionOutcomeId ||
                offerLaunchDeliveryExpansionOutcomes[0].ExpansionMilestoneReceiptId != offerLaunchDeliveryExpansionMilestoneReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionOutcomes[0].Kind != "offer-launch-delivery-expansion-outcome" ||
                offerLaunchDeliveryExpansionOutcomes[0].Status != "offer-launch-delivery-expansion-outcome-ready" ||
                offerLaunchDeliveryExpansionOutcomes[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionOutcomes[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryExpansionOutcomes[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionOutcomes[0].AppOwnedExpansionOutcomeState ||
                !offerLaunchDeliveryExpansionOutcomes[0].AppOwnedExpansionMilestoneState ||
                !offerLaunchDeliveryExpansionOutcomes[0].ExpansionOutcomeReady ||
                !offerLaunchDeliveryExpansionOutcomes[0].ExpansionMilestoneReady ||
                !offerLaunchDeliveryExpansionOutcomes[0].RepeatServiceRequested ||
                !offerLaunchDeliveryExpansionOutcomes[0].RenewalRequested ||
                !offerLaunchDeliveryExpansionOutcomes[0].ReferralRequested ||
                offerLaunchDeliveryExpansionOutcomes[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionOutcomes[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionOutcomes[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionOutcomes[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionOutcomes[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionOutcomes[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionOutcomes[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionOutcomes[0].AiForwardCopy ||
                offerLaunchDeliveryExpansionOutcomes[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryExpansionOutcomes[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionOutcomes[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionOutcomes[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionOutcomes[0].OperatorNextAction.Contains("customer-safe expansion outcome receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionOutcomeStore.ExpansionOutcomePath) ||
                offerLaunchDeliveryExpansionOutcomeReceipts.Count != 1 ||
                offerLaunchDeliveryExpansionOutcomeReceipts[0].ReceiptId != offerLaunchDeliveryExpansionOutcomeReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionOutcomeReceipts[0].Kind != "offer-launch-delivery-expansion-outcome" ||
                offerLaunchDeliveryExpansionOutcomeReceipts[0].Status != "customer-safe-offer-launch-delivery-expansion-outcome-ready" ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].AppOwnedExpansionOutcomeState ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].AppOwnedExpansionMilestoneState ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].ExpansionOutcomeReady ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].ExpansionMilestoneReady ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].RepeatServiceRequested ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].RenewalRequested ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].ReferralRequested ||
                offerLaunchDeliveryExpansionOutcomeReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionOutcomeReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionOutcomeReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionOutcomeReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionOutcomeReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionOutcomeReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionOutcomeReceipts[0].AiForwardCopy ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionOutcomeReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].CustomerSafeMessage.Contains("next-service delivery outcome is ready", StringComparison.Ordinal) ||
                !offerLaunchDeliveryExpansionOutcomeReceipts[0].NextAction.Contains("follow-up, renewal, or referral", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionOutcomeReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryExpansionFollowUps.Count != 1 ||
                offerLaunchDeliveryExpansionFollowUps[0].ExpansionFollowUpId != offerLaunchDeliveryExpansionFollowUp.ExpansionFollowUpId ||
                offerLaunchDeliveryExpansionFollowUps[0].ExpansionOutcomeReceiptId != offerLaunchDeliveryExpansionOutcomeReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionFollowUps[0].Kind != "offer-launch-delivery-expansion-follow-up" ||
                offerLaunchDeliveryExpansionFollowUps[0].Status != "offer-launch-delivery-expansion-follow-up-ready" ||
                offerLaunchDeliveryExpansionFollowUps[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionFollowUps[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryExpansionFollowUps[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionFollowUps[0].AppOwnedExpansionFollowUpState ||
                !offerLaunchDeliveryExpansionFollowUps[0].AppOwnedExpansionOutcomeState ||
                !offerLaunchDeliveryExpansionFollowUps[0].ExpansionFollowUpReady ||
                !offerLaunchDeliveryExpansionFollowUps[0].ExpansionOutcomeReady ||
                !offerLaunchDeliveryExpansionFollowUps[0].RepeatServiceReady ||
                !offerLaunchDeliveryExpansionFollowUps[0].RenewalReady ||
                !offerLaunchDeliveryExpansionFollowUps[0].ReferralReady ||
                offerLaunchDeliveryExpansionFollowUps[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionFollowUps[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionFollowUps[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionFollowUps[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionFollowUps[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionFollowUps[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionFollowUps[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionFollowUps[0].AiForwardCopy ||
                offerLaunchDeliveryExpansionFollowUps[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryExpansionFollowUps[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionFollowUps[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionFollowUps[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionFollowUps[0].OperatorNextAction.Contains("customer-safe expansion follow-up receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionFollowUpStore.ExpansionFollowUpPath) ||
                offerLaunchDeliveryExpansionFollowUpReceipts.Count != 1 ||
                offerLaunchDeliveryExpansionFollowUpReceipts[0].ReceiptId != offerLaunchDeliveryExpansionFollowUpReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionFollowUpReceipts[0].Kind != "offer-launch-delivery-expansion-follow-up" ||
                offerLaunchDeliveryExpansionFollowUpReceipts[0].Status != "customer-safe-offer-launch-delivery-expansion-follow-up-ready" ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].AppOwnedExpansionFollowUpState ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].AppOwnedExpansionOutcomeState ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].ExpansionFollowUpReady ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].ExpansionOutcomeReady ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].RepeatServiceReady ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].RenewalReady ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].ReferralReady ||
                offerLaunchDeliveryExpansionFollowUpReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionFollowUpReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionFollowUpReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionFollowUpReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionFollowUpReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionFollowUpReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionFollowUpReceipts[0].AiForwardCopy ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionFollowUpReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].CustomerSafeMessage.Contains("next-service follow-up options are ready", StringComparison.Ordinal) ||
                !offerLaunchDeliveryExpansionFollowUpReceipts[0].NextAction.Contains("repeat-service, renewal, or referral", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionFollowUpReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryExpansionGrowthPlans.Count != 1 ||
                offerLaunchDeliveryExpansionGrowthPlans[0].ExpansionGrowthPlanId != offerLaunchDeliveryExpansionGrowthPlan.ExpansionGrowthPlanId ||
                offerLaunchDeliveryExpansionGrowthPlans[0].ExpansionFollowUpReceiptId != offerLaunchDeliveryExpansionFollowUpReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionGrowthPlans[0].Kind != "offer-launch-delivery-expansion-growth-plan" ||
                offerLaunchDeliveryExpansionGrowthPlans[0].Status != "offer-launch-delivery-expansion-growth-plan-ready" ||
                offerLaunchDeliveryExpansionGrowthPlans[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryExpansionGrowthPlans[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].AppOwnedExpansionGrowthPlanState ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].AppOwnedExpansionFollowUpState ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].ExpansionFollowUpReady ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].RepeatServiceReady ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].RenewalReady ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].ReferralReady ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].ExpansionGrowthPlanReady ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].ExpansionOutcomeReady ||
                offerLaunchDeliveryExpansionGrowthPlans[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionGrowthPlans[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionGrowthPlans[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionGrowthPlans[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionGrowthPlans[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionGrowthPlans[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionGrowthPlans[0].AiForwardCopy ||
                offerLaunchDeliveryExpansionGrowthPlans[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionGrowthPlans[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionGrowthPlans[0].OperatorNextAction.Contains("customer-safe expansion growth-plan receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionGrowthPlanStore.ExpansionGrowthPlanPath) ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts.Count != 1 ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts[0].ReceiptId != offerLaunchDeliveryExpansionGrowthPlanReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts[0].Kind != "offer-launch-delivery-expansion-growth-plan" ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts[0].Status != "customer-safe-offer-launch-delivery-expansion-growth-plan-ready" ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].AppOwnedExpansionGrowthPlanState ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].AppOwnedExpansionFollowUpState ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].ExpansionFollowUpReady ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].RepeatServiceReady ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].RenewalReady ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].ReferralReady ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].ExpansionGrowthPlanReady ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].ExpansionOutcomeReady ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts[0].AiForwardCopy ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionGrowthPlanReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].CustomerSafeMessage.Contains("next-service growth options are ready", StringComparison.Ordinal) ||
                !offerLaunchDeliveryExpansionGrowthPlanReceipts[0].NextAction.Contains("repeat-service, renewal, or referral", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionGrowthPlanReceiptStore.ReceiptPath) ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances.Count != 1 ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].ExpansionGrowthPlanAcceptanceId != offerLaunchDeliveryExpansionGrowthPlanAcceptance.ExpansionGrowthPlanAcceptanceId ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].ExpansionGrowthPlanReceiptId != offerLaunchDeliveryExpansionGrowthPlanReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].Kind != "offer-launch-delivery-expansion-growth-plan-acceptance" ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].Status != "offer-launch-delivery-expansion-growth-plan-acceptance-ready" ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].CustomerSafeForReceipt ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].AppOwnedExpansionGrowthPlanAcceptanceState ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].AppOwnedExpansionGrowthPlanState ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].AppOwnedExpansionFollowUpState ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].ExpansionGrowthPlanReady ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].ExpansionFollowUpReady ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].ExpansionOutcomeReady ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].RepeatServiceAccepted ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].RenewalAccepted ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].ReferralAccepted ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].ExpansionGrowthPlanAcceptanceReady ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].AiForwardCopy ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].JapanCopyMode != "ai-neutral" ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptances[0].OperatorNextAction.Contains("customer-safe expansion growth-plan acceptance receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceStore.ExpansionGrowthPlanAcceptancePath) ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts.Count != 1 ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].ReceiptId != offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipt.ReceiptId ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].Kind != "offer-launch-delivery-expansion-growth-plan-acceptance" ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].Status != "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-ready" ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].CustomerVisible ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].CustomerSafe ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].CustomerVisibleReceiptReady ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].WebportalExportReady ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].AppOwnedExpansionGrowthPlanAcceptanceState ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].AppOwnedExpansionGrowthPlanState ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].AppOwnedExpansionFollowUpState ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].ExpansionGrowthPlanReady ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].ExpansionFollowUpReady ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].ExpansionOutcomeReady ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].RepeatServiceAccepted ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].RenewalAccepted ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].ReferralAccepted ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].ExpansionGrowthPlanAcceptanceReady ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].CompatibilityGateRequired ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].EpochTimingProviderOnly ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].WorkshopCalendarOwnership ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].MonitorWorkflowExposed ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].PaymentLiveEnabled ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].ProviderGoLiveRequested ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].LiveProviderEnabled ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].AiForwardCopy ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].Under19GuardRequired ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].NativeExecutionReady ||
                offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].RequiresEpochTimingRequest ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].CustomerSafeMessage.Contains("next-service repeat-service, renewal, or referral motion has been accepted", StringComparison.Ordinal) ||
                !offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts[0].NextAction.Contains("accepted next-service motion", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptStore.ReceiptPath) ||
                laborEstimates.Count != 2 ||
                !laborEstimates.Any(estimate =>
                    estimate.EstimateId == "labor-estimate-submission-001" &&
                    estimate.SourceSurface == "WORKSHOP.App.LaborEstimateLedger" &&
                    estimate.Status == "lower-labor-path-ready" &&
                    estimate.PrepMinutes == 60 &&
                    estimate.LiveMinutes == 0 &&
                    estimate.ReviewMinutes == 240 &&
                    estimate.AdminMinutes == 60 &&
                    estimate.ExpectedRevenueJpy == 160000 &&
                    estimate.AraMinutesSaved == 180 &&
                    estimate.TotalOperatorMinutes == 360 &&
                    estimate.ExpectedYenPerOperatorHour > 0 &&
                    !estimate.LaborTrapWarning &&
                    estimate.LowLaborViable &&
                    estimate.AsyncFirstDelivery &&
                    estimate.AppOwnedLaborEstimateState &&
                    !estimate.CustomerVisible &&
                    !estimate.WebportalExportReady &&
                    estimate.EpochTimingProviderOnly &&
                    !estimate.WorkshopCalendarOwnership &&
                    !estimate.MonitorWorkflowExposed &&
                    !estimate.PaymentLiveEnabled &&
                    !estimate.ProviderGoLiveRequested &&
                    !estimate.LiveProviderEnabled &&
                    !estimate.AiForwardCopy &&
                    estimate.JapanCopyMode == "ai-neutral" &&
                    estimate.OperatorNextAction.Contains("lower-labor lane", StringComparison.Ordinal)) ||
                !laborEstimates.Any(estimate =>
                    estimate.EstimateId == "labor-estimate-live-heavy-001" &&
                    estimate.Status == "labor-trap-warning" &&
                    estimate.LiveMinutes == 960 &&
                    estimate.LaborTrapWarning &&
                    !estimate.LowLaborViable &&
                    !estimate.CustomerVisible &&
                    !estimate.WebportalExportReady &&
                    estimate.EpochTimingProviderOnly &&
                    !estimate.WorkshopCalendarOwnership &&
                    !estimate.MonitorWorkflowExposed &&
                    estimate.OperatorNextAction.Contains("Do not approve", StringComparison.Ordinal)) ||
                !File.Exists(WorkshopLaborEstimateStore.EstimatePath) ||
                ownerTimeBudgets.Count != 1 ||
                ownerTimeBudgets[0].BudgetId != ownerTimeBudget.BudgetId ||
                ownerTimeBudgets[0].SourceSurface != "WORKSHOP.App.OwnerTimeBudgetGuard" ||
                ownerTimeBudgets[0].Status != "owner-time-budget-clear" ||
                ownerTimeBudgets[0].WeeklyAvailableMinutes != 900 ||
                ownerTimeBudgets[0].CommittedMinutes != 720 ||
                ownerTimeBudgets[0].AraDelegableMinutes != 240 ||
                ownerTimeBudgets[0].LaborTrapWarning ||
                !ownerTimeBudgets[0].OwnerTimeBudgetClear ||
                !ownerTimeBudgets[0].LowLaborPriorityReady ||
                !ownerTimeBudgets[0].AraDelegationRecommended ||
                !ownerTimeBudgets[0].AppOwnedOwnerTimeBudgetState ||
                ownerTimeBudgets[0].CustomerVisible ||
                ownerTimeBudgets[0].WebportalExportReady ||
                !ownerTimeBudgets[0].EpochTimingProviderOnly ||
                ownerTimeBudgets[0].WorkshopCalendarOwnership ||
                ownerTimeBudgets[0].MonitorWorkflowExposed ||
                ownerTimeBudgets[0].PaymentLiveEnabled ||
                ownerTimeBudgets[0].ProviderGoLiveRequested ||
                ownerTimeBudgets[0].LiveProviderEnabled ||
                ownerTimeBudgets[0].AiForwardCopy ||
                ownerTimeBudgets[0].JapanCopyMode != "ai-neutral" ||
                !ownerTimeBudgets[0].OperatorNextAction.Contains("submission packs", StringComparison.Ordinal) ||
                !File.Exists(WorkshopOwnerTimeBudgetStore.BudgetPath) ||
                history.Count != 1 ||
                history[0].HistoryId != historyEntry.HistoryId ||
                history[0].DeliveryResultReceiptId != "workshop-exec-delivery-receipt-001" ||
                !history[0].CustomerVisibleReceiptReady ||
                !history[0].AraOperatorReviewComplete ||
                history[0].MonitorWorkflowExposed ||
                !File.Exists(WorkshopRevenueExecutionHistoryStore.HistoryPath) ||
                serviceInbox.Count != 1 ||
                serviceInbox[0].RequestId != serviceInboxRequest.RequestId ||
                !serviceInbox[0].CustomerSafe ||
                !serviceInbox[0].EpochTimingProviderOnly ||
                serviceInbox[0].MonitorWorkflowExposed ||
                !serviceInbox[0].AppOwnedInboxState ||
                !File.Exists(WorkshopServiceRequestInboxStore.InboxPath) ||
                serviceCommandReceipts.Count != 1 ||
                serviceCommandReceipts[0].ReceiptId != serviceCommandReceipt.ReceiptId ||
                serviceCommandReceipts[0].RequestId != serviceInboxRequest.RequestId ||
                serviceCommandReceipts[0].ExecutionHistoryId != historyEntry.HistoryId ||
                !serviceCommandReceipts[0].CustomerSafe ||
                !serviceCommandReceipts[0].CustomerVisibleReceiptReady ||
                !serviceCommandReceipts[0].AraOperatorReviewComplete ||
                !serviceCommandReceipts[0].EpochTimingProviderOnly ||
                serviceCommandReceipts[0].MonitorWorkflowExposed ||
                !serviceCommandReceipts[0].NativeExecutionReady ||
                !File.Exists(WorkshopServiceRevenueCommandReceiptStore.ReceiptPath) ||
                araReviewQueueRecords.Count != 1 ||
                araReviewQueueRecords[0].QueueId != araReviewQueue.QueueId ||
                araReviewQueueRecords[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                araReviewQueueRecords[0].OpportunityId != historyEntry.OpportunityId ||
                araReviewQueueRecords[0].AraPacketId != historyEntry.AraPacketId ||
                araReviewQueueRecords[0].AraReviewReceiptId != historyEntry.AraReviewReceiptId ||
                araReviewQueueRecords[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                araReviewQueueRecords[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                araReviewQueueRecords[0].ExecutionHistoryId != historyEntry.HistoryId ||
                araReviewQueueRecords[0].ServiceCommandReceiptId != serviceCommandReceipt.ReceiptId ||
                araReviewQueueRecords[0].QueueKind != "ara-operator-review-queue" ||
                araReviewQueueRecords[0].Status != "ara-review-ready-for-decision" ||
                araReviewQueueRecords[0].ReviewStatus != "operator-review-complete" ||
                araReviewQueueRecords[0].CustomerVisible ||
                !araReviewQueueRecords[0].CustomerSafeForDecision ||
                araReviewQueueRecords[0].WebportalExportReady ||
                !araReviewQueueRecords[0].EpochTimingProviderOnly ||
                araReviewQueueRecords[0].MonitorWorkflowExposed ||
                araReviewQueueRecords[0].PaymentLiveEnabled ||
                !araReviewQueueRecords[0].RequiresOperatorReview ||
                !araReviewQueueRecords[0].AraReviewComplete ||
                !araReviewQueueRecords[0].NativeExecutionReady ||
                !araReviewQueueRecords[0].OperatorNextAction.Contains("Approve or return", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAraReviewQueueStore.QueuePath) ||
                araReviewDecisions.Count != 1 ||
                araReviewDecisions[0].DecisionId != araReviewDecision.DecisionId ||
                araReviewDecisions[0].QueueId != araReviewQueue.QueueId ||
                araReviewDecisions[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                araReviewDecisions[0].DecisionKind != "ara-operator-review-decision" ||
                araReviewDecisions[0].Status != "ara-review-approved" ||
                araReviewDecisions[0].Decision != "approved" ||
                !araReviewDecisions[0].Approved ||
                araReviewDecisions[0].RevisionRequired ||
                araReviewDecisions[0].CustomerVisible ||
                !araReviewDecisions[0].CustomerSafeForReceipt ||
                araReviewDecisions[0].WebportalExportReady ||
                !araReviewDecisions[0].EpochTimingProviderOnly ||
                araReviewDecisions[0].MonitorWorkflowExposed ||
                araReviewDecisions[0].PaymentLiveEnabled ||
                !araReviewDecisions[0].RequiresOperatorReview ||
                !araReviewDecisions[0].OperatorReviewed ||
                !araReviewDecisions[0].AraReviewComplete ||
                !araReviewDecisions[0].NativeExecutionReady ||
                !File.Exists(WorkshopAraOperatorReviewDecisionStore.DecisionPath) ||
                araReviewStatusReceipts.Count != 1 ||
                araReviewStatusReceipts[0].ReceiptId != araReviewStatusReceipt.ReceiptId ||
                araReviewStatusReceipts[0].QueueId != araReviewQueue.QueueId ||
                araReviewStatusReceipts[0].DecisionId != araReviewDecision.DecisionId ||
                araReviewStatusReceipts[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                araReviewStatusReceipts[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                araReviewStatusReceipts[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                araReviewStatusReceipts[0].Kind != "ara-review-status" ||
                araReviewStatusReceipts[0].Status != "customer-safe-ara-review-ready" ||
                !araReviewStatusReceipts[0].CustomerSafe ||
                !araReviewStatusReceipts[0].CustomerVisibleReceiptReady ||
                !araReviewStatusReceipts[0].WebportalExportReady ||
                !araReviewStatusReceipts[0].EpochTimingProviderOnly ||
                araReviewStatusReceipts[0].MonitorWorkflowExposed ||
                araReviewStatusReceipts[0].PaymentLiveEnabled ||
                !araReviewStatusReceipts[0].OperatorReviewed ||
                !araReviewStatusReceipts[0].AraReviewComplete ||
                !araReviewStatusReceipts[0].NativeExecutionReady ||
                !araReviewStatusReceipts[0].Summary.Contains("without exposing internal packet", StringComparison.Ordinal) ||
                !araReviewStatusReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAraReviewStatusReceiptStore.ReceiptPath) ||
                araMethodMaterializations.Count != 1 ||
                araMethodMaterializations[0].MaterializationId != araMethodMaterialization.MaterializationId ||
                araMethodMaterializations[0].QueueId != araReviewQueue.QueueId ||
                araMethodMaterializations[0].DecisionId != araReviewDecision.DecisionId ||
                araMethodMaterializations[0].ReviewStatusReceiptId != araReviewStatusReceipt.ReceiptId ||
                araMethodMaterializations[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                araMethodMaterializations[0].MaterializationKind != "ara-method-materialization" ||
                araMethodMaterializations[0].Status != "ara-materialization-ready" ||
                araMethodMaterializations[0].CustomerVisible ||
                !araMethodMaterializations[0].CustomerSafeForReceipt ||
                araMethodMaterializations[0].WebportalExportReady ||
                !araMethodMaterializations[0].EpochTimingProviderOnly ||
                araMethodMaterializations[0].WorkshopCalendarOwnership ||
                araMethodMaterializations[0].MonitorWorkflowExposed ||
                araMethodMaterializations[0].PaymentLiveEnabled ||
                !araMethodMaterializations[0].OperatorReviewed ||
                !araMethodMaterializations[0].AraReviewComplete ||
                !araMethodMaterializations[0].HumanReviewComplete ||
                !araMethodMaterializations[0].ReusableMethodReady ||
                !araMethodMaterializations[0].MaterialAssetReady ||
                !araMethodMaterializations[0].NativeExecutionReady ||
                !araMethodMaterializations[0].OperatorNextAction.Contains("Attach the reviewed method", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAraMethodMaterializationStore.MaterializationPath) ||
                araMaterializationReceipts.Count != 1 ||
                araMaterializationReceipts[0].ReceiptId != araMaterializationReceipt.ReceiptId ||
                araMaterializationReceipts[0].MaterializationId != araMethodMaterialization.MaterializationId ||
                araMaterializationReceipts[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                araMaterializationReceipts[0].Kind != "ara-method-materialization" ||
                araMaterializationReceipts[0].Status != "customer-safe-ara-materialization-ready" ||
                !araMaterializationReceipts[0].CustomerSafe ||
                !araMaterializationReceipts[0].CustomerVisibleReceiptReady ||
                !araMaterializationReceipts[0].WebportalExportReady ||
                !araMaterializationReceipts[0].EpochTimingProviderOnly ||
                araMaterializationReceipts[0].WorkshopCalendarOwnership ||
                araMaterializationReceipts[0].MonitorWorkflowExposed ||
                araMaterializationReceipts[0].PaymentLiveEnabled ||
                !araMaterializationReceipts[0].OperatorReviewed ||
                !araMaterializationReceipts[0].AraReviewComplete ||
                !araMaterializationReceipts[0].HumanReviewComplete ||
                !araMaterializationReceipts[0].ReusableMethodReady ||
                !araMaterializationReceipts[0].MaterialAssetReady ||
                !araMaterializationReceipts[0].NativeExecutionReady ||
                !araMaterializationReceipts[0].Summary.Contains("without exposing internal packet, queue, decision, or materialization controls", StringComparison.Ordinal) ||
                !araMaterializationReceipts[0].CustomerSafeMessage.Contains("reviewed service method and material plan", StringComparison.Ordinal) ||
                !araMaterializationReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAraMaterializationReceiptStore.ReceiptPath) ||
                serviceMaterialReuseRecords.Count != 1 ||
                serviceMaterialReuseRecords[0].ReuseId != serviceMaterialReuse.ReuseId ||
                serviceMaterialReuseRecords[0].MaterializationReceiptId != araMaterializationReceipt.ReceiptId ||
                serviceMaterialReuseRecords[0].MaterializationId != araMethodMaterialization.MaterializationId ||
                serviceMaterialReuseRecords[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                serviceMaterialReuseRecords[0].PackageId != "pkg-submission-4" ||
                serviceMaterialReuseRecords[0].MaterialAssetId != "material-asset-eiken-writing-rubric-001" ||
                serviceMaterialReuseRecords[0].ReuseKind != "service-material-reuse" ||
                serviceMaterialReuseRecords[0].Status != "service-material-reuse-ready" ||
                serviceMaterialReuseRecords[0].PackageSupportStatus != "reviewed-service-material-support-ready" ||
                serviceMaterialReuseRecords[0].CustomerVisible ||
                !serviceMaterialReuseRecords[0].CustomerSafeForReceipt ||
                serviceMaterialReuseRecords[0].WebportalExportReady ||
                !serviceMaterialReuseRecords[0].EpochTimingProviderOnly ||
                serviceMaterialReuseRecords[0].WorkshopCalendarOwnership ||
                serviceMaterialReuseRecords[0].MonitorWorkflowExposed ||
                serviceMaterialReuseRecords[0].PaymentLiveEnabled ||
                !serviceMaterialReuseRecords[0].OperatorReviewed ||
                !serviceMaterialReuseRecords[0].AraReviewComplete ||
                !serviceMaterialReuseRecords[0].HumanReviewComplete ||
                !serviceMaterialReuseRecords[0].ReusableMethodReady ||
                !serviceMaterialReuseRecords[0].MaterialAssetReady ||
                !serviceMaterialReuseRecords[0].PackageSupportReady ||
                !serviceMaterialReuseRecords[0].LowLaborReuseReady ||
                !serviceMaterialReuseRecords[0].NativeExecutionReady ||
                !serviceMaterialReuseRecords[0].OperatorNextAction.Contains("Attach the reusable material support", StringComparison.Ordinal) ||
                !File.Exists(WorkshopServiceMaterialReuseStore.ReusePath) ||
                serviceMaterialReuseReceipts.Count != 1 ||
                serviceMaterialReuseReceipts[0].ReceiptId != serviceMaterialReuseReceipt.ReceiptId ||
                serviceMaterialReuseReceipts[0].ReuseId != serviceMaterialReuse.ReuseId ||
                serviceMaterialReuseReceipts[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                serviceMaterialReuseReceipts[0].PackageId != "pkg-submission-4" ||
                serviceMaterialReuseReceipts[0].MaterialAssetId != "material-asset-eiken-writing-rubric-001" ||
                serviceMaterialReuseReceipts[0].Kind != "service-material-reuse" ||
                serviceMaterialReuseReceipts[0].Status != "customer-safe-service-material-reuse-ready" ||
                !serviceMaterialReuseReceipts[0].CustomerSafe ||
                !serviceMaterialReuseReceipts[0].CustomerVisibleReceiptReady ||
                !serviceMaterialReuseReceipts[0].WebportalExportReady ||
                !serviceMaterialReuseReceipts[0].EpochTimingProviderOnly ||
                serviceMaterialReuseReceipts[0].WorkshopCalendarOwnership ||
                serviceMaterialReuseReceipts[0].MonitorWorkflowExposed ||
                serviceMaterialReuseReceipts[0].PaymentLiveEnabled ||
                !serviceMaterialReuseReceipts[0].OperatorReviewed ||
                !serviceMaterialReuseReceipts[0].AraReviewComplete ||
                !serviceMaterialReuseReceipts[0].HumanReviewComplete ||
                !serviceMaterialReuseReceipts[0].ReusableMethodReady ||
                !serviceMaterialReuseReceipts[0].MaterialAssetReady ||
                !serviceMaterialReuseReceipts[0].PackageSupportReady ||
                !serviceMaterialReuseReceipts[0].LowLaborReuseReady ||
                !serviceMaterialReuseReceipts[0].NativeExecutionReady ||
                !serviceMaterialReuseReceipts[0].Summary.Contains("without exposing internal packet, queue, decision, materialization, or package-control records", StringComparison.Ordinal) ||
                !serviceMaterialReuseReceipts[0].CustomerSafeMessage.Contains("Reusable service material support is ready", StringComparison.Ordinal) ||
                !serviceMaterialReuseReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                serviceMaterialReuseReceipts[0].Summary.Contains("operator next action", StringComparison.OrdinalIgnoreCase) ||
                serviceMaterialReuseReceipts[0].Summary.Contains("packet id", StringComparison.OrdinalIgnoreCase) ||
                !File.Exists(WorkshopServiceMaterialReuseReceiptStore.ReceiptPath) ||
                packageDeliveryChecklists.Count != 1 ||
                packageDeliveryChecklists[0].ChecklistId != packageDeliveryChecklist.ChecklistId ||
                packageDeliveryChecklists[0].ReuseId != serviceMaterialReuse.ReuseId ||
                packageDeliveryChecklists[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryChecklists[0].PackageId != "pkg-submission-4" ||
                packageDeliveryChecklists[0].MaterialAssetId != "material-asset-eiken-writing-rubric-001" ||
                packageDeliveryChecklists[0].ChecklistKind != "package-delivery-checklist" ||
                packageDeliveryChecklists[0].Status != "package-delivery-checklist-ready" ||
                packageDeliveryChecklists[0].CustomerVisible ||
                !packageDeliveryChecklists[0].CustomerSafeForReceipt ||
                packageDeliveryChecklists[0].WebportalExportReady ||
                !packageDeliveryChecklists[0].EpochTimingProviderOnly ||
                packageDeliveryChecklists[0].WorkshopCalendarOwnership ||
                packageDeliveryChecklists[0].MonitorWorkflowExposed ||
                packageDeliveryChecklists[0].PaymentLiveEnabled ||
                !packageDeliveryChecklists[0].OperatorReviewed ||
                !packageDeliveryChecklists[0].AraReviewComplete ||
                !packageDeliveryChecklists[0].HumanReviewComplete ||
                !packageDeliveryChecklists[0].ReusableMethodReady ||
                !packageDeliveryChecklists[0].MaterialAssetReady ||
                !packageDeliveryChecklists[0].PackageSupportReady ||
                !packageDeliveryChecklists[0].LowLaborReuseReady ||
                !packageDeliveryChecklists[0].ChecklistReady ||
                !packageDeliveryChecklists[0].NativeExecutionReady ||
                !packageDeliveryChecklists[0].ChecklistItemsSummary.Contains("rubric attached", StringComparison.Ordinal) ||
                !packageDeliveryChecklists[0].OperatorNextAction.Contains("export only the customer-safe checklist receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopPackageDeliveryChecklistStore.ChecklistPath) ||
                packageDeliveryChecklistReceipts.Count != 1 ||
                packageDeliveryChecklistReceipts[0].ReceiptId != packageDeliveryChecklistReceipt.ReceiptId ||
                packageDeliveryChecklistReceipts[0].ChecklistId != packageDeliveryChecklist.ChecklistId ||
                packageDeliveryChecklistReceipts[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryChecklistReceipts[0].PackageId != "pkg-submission-4" ||
                packageDeliveryChecklistReceipts[0].Kind != "package-delivery-checklist" ||
                packageDeliveryChecklistReceipts[0].Status != "customer-safe-package-delivery-checklist-ready" ||
                !packageDeliveryChecklistReceipts[0].CustomerSafe ||
                !packageDeliveryChecklistReceipts[0].CustomerVisibleReceiptReady ||
                !packageDeliveryChecklistReceipts[0].WebportalExportReady ||
                !packageDeliveryChecklistReceipts[0].EpochTimingProviderOnly ||
                packageDeliveryChecklistReceipts[0].WorkshopCalendarOwnership ||
                packageDeliveryChecklistReceipts[0].MonitorWorkflowExposed ||
                packageDeliveryChecklistReceipts[0].PaymentLiveEnabled ||
                !packageDeliveryChecklistReceipts[0].OperatorReviewed ||
                !packageDeliveryChecklistReceipts[0].AraReviewComplete ||
                !packageDeliveryChecklistReceipts[0].HumanReviewComplete ||
                !packageDeliveryChecklistReceipts[0].PackageSupportReady ||
                !packageDeliveryChecklistReceipts[0].LowLaborReuseReady ||
                !packageDeliveryChecklistReceipts[0].ChecklistReady ||
                !packageDeliveryChecklistReceipts[0].NativeExecutionReady ||
                !packageDeliveryChecklistReceipts[0].Summary.Contains("without exposing internal packet, queue, decision, materialization, reuse, checklist-control, or package-control records", StringComparison.Ordinal) ||
                !packageDeliveryChecklistReceipts[0].CustomerSafeMessage.Contains("Package delivery preparation is ready", StringComparison.Ordinal) ||
                !packageDeliveryChecklistReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                packageDeliveryChecklistReceipts[0].Summary.Contains("operator next action", StringComparison.OrdinalIgnoreCase) ||
                packageDeliveryChecklistReceipts[0].Summary.Contains("reuse id", StringComparison.OrdinalIgnoreCase) ||
                !File.Exists(WorkshopPackageDeliveryChecklistReceiptStore.ReceiptPath) ||
                packageDeliveryChecklistAutomations.Count != 1 ||
                packageDeliveryChecklistAutomations[0].AutomationId != packageDeliveryChecklistAutomation.AutomationId ||
                packageDeliveryChecklistAutomations[0].ChecklistId != packageDeliveryChecklist.ChecklistId ||
                packageDeliveryChecklistAutomations[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryChecklistAutomations[0].PackageId != "pkg-submission-4" ||
                packageDeliveryChecklistAutomations[0].AutomationKind != "package-delivery-checklist-automation" ||
                packageDeliveryChecklistAutomations[0].Status != "package-delivery-checklist-automation-ready" ||
                packageDeliveryChecklistAutomations[0].CustomerVisible ||
                !packageDeliveryChecklistAutomations[0].CustomerSafeForReceipt ||
                packageDeliveryChecklistAutomations[0].WebportalExportReady ||
                !packageDeliveryChecklistAutomations[0].EpochTimingProviderOnly ||
                packageDeliveryChecklistAutomations[0].WorkshopCalendarOwnership ||
                packageDeliveryChecklistAutomations[0].MonitorWorkflowExposed ||
                packageDeliveryChecklistAutomations[0].PaymentLiveEnabled ||
                !packageDeliveryChecklistAutomations[0].OperatorReviewed ||
                !packageDeliveryChecklistAutomations[0].AraReviewComplete ||
                !packageDeliveryChecklistAutomations[0].HumanReviewComplete ||
                !packageDeliveryChecklistAutomations[0].PackageSupportReady ||
                !packageDeliveryChecklistAutomations[0].LowLaborReuseReady ||
                !packageDeliveryChecklistAutomations[0].ChecklistReady ||
                !packageDeliveryChecklistAutomations[0].AutomationReady ||
                packageDeliveryChecklistAutomations[0].RequiresEpochTimingRequest ||
                !packageDeliveryChecklistAutomations[0].NativeExecutionReady ||
                !packageDeliveryChecklistAutomations[0].OperatorNextAction.Contains("export only the customer-safe automation receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopPackageDeliveryChecklistAutomationStore.AutomationPath) ||
                packageDeliveryChecklistAutomationReceipts.Count != 1 ||
                packageDeliveryChecklistAutomationReceipts[0].ReceiptId != packageDeliveryChecklistAutomationReceipt.ReceiptId ||
                packageDeliveryChecklistAutomationReceipts[0].AutomationId != packageDeliveryChecklistAutomation.AutomationId ||
                packageDeliveryChecklistAutomationReceipts[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryChecklistAutomationReceipts[0].PackageId != "pkg-submission-4" ||
                packageDeliveryChecklistAutomationReceipts[0].Kind != "package-delivery-checklist-automation" ||
                packageDeliveryChecklistAutomationReceipts[0].Status != "customer-safe-package-delivery-automation-ready" ||
                !packageDeliveryChecklistAutomationReceipts[0].CustomerSafe ||
                !packageDeliveryChecklistAutomationReceipts[0].CustomerVisibleReceiptReady ||
                !packageDeliveryChecklistAutomationReceipts[0].WebportalExportReady ||
                !packageDeliveryChecklistAutomationReceipts[0].EpochTimingProviderOnly ||
                packageDeliveryChecklistAutomationReceipts[0].WorkshopCalendarOwnership ||
                packageDeliveryChecklistAutomationReceipts[0].MonitorWorkflowExposed ||
                packageDeliveryChecklistAutomationReceipts[0].PaymentLiveEnabled ||
                !packageDeliveryChecklistAutomationReceipts[0].OperatorReviewed ||
                !packageDeliveryChecklistAutomationReceipts[0].AraReviewComplete ||
                !packageDeliveryChecklistAutomationReceipts[0].HumanReviewComplete ||
                !packageDeliveryChecklistAutomationReceipts[0].PackageSupportReady ||
                !packageDeliveryChecklistAutomationReceipts[0].LowLaborReuseReady ||
                !packageDeliveryChecklistAutomationReceipts[0].ChecklistReady ||
                !packageDeliveryChecklistAutomationReceipts[0].AutomationReady ||
                packageDeliveryChecklistAutomationReceipts[0].RequiresEpochTimingRequest ||
                !packageDeliveryChecklistAutomationReceipts[0].NativeExecutionReady ||
                !packageDeliveryChecklistAutomationReceipts[0].Summary.Contains("without exposing internal packet, queue, decision, materialization, reuse, checklist, automation-control, or package-control records", StringComparison.Ordinal) ||
                !packageDeliveryChecklistAutomationReceipts[0].CustomerSafeMessage.Contains("Repeatable package delivery preparation is ready", StringComparison.Ordinal) ||
                !packageDeliveryChecklistAutomationReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                packageDeliveryChecklistAutomationReceipts[0].Summary.Contains("operator next action", StringComparison.OrdinalIgnoreCase) ||
                packageDeliveryChecklistAutomationReceipts[0].Summary.Contains("checklist id", StringComparison.OrdinalIgnoreCase) ||
                !File.Exists(WorkshopPackageDeliveryChecklistAutomationReceiptStore.ReceiptPath) ||
                packageDeliveryExecutions.Count != 1 ||
                packageDeliveryExecutions[0].ExecutionId != packageDeliveryExecution.ExecutionId ||
                packageDeliveryExecutions[0].AutomationId != packageDeliveryChecklistAutomation.AutomationId ||
                packageDeliveryExecutions[0].ChecklistId != packageDeliveryChecklist.ChecklistId ||
                packageDeliveryExecutions[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryExecutions[0].PackageId != "pkg-submission-4" ||
                packageDeliveryExecutions[0].ExecutionKind != "package-delivery-execution" ||
                packageDeliveryExecutions[0].Status != "package-delivery-execution-ready" ||
                packageDeliveryExecutions[0].CustomerVisible ||
                !packageDeliveryExecutions[0].CustomerSafeForReceipt ||
                packageDeliveryExecutions[0].WebportalExportReady ||
                !packageDeliveryExecutions[0].EpochTimingProviderOnly ||
                packageDeliveryExecutions[0].WorkshopCalendarOwnership ||
                packageDeliveryExecutions[0].MonitorWorkflowExposed ||
                packageDeliveryExecutions[0].PaymentLiveEnabled ||
                !packageDeliveryExecutions[0].OperatorReviewed ||
                !packageDeliveryExecutions[0].AraReviewComplete ||
                !packageDeliveryExecutions[0].HumanReviewComplete ||
                !packageDeliveryExecutions[0].PackageSupportReady ||
                !packageDeliveryExecutions[0].LowLaborReuseReady ||
                !packageDeliveryExecutions[0].ChecklistReady ||
                !packageDeliveryExecutions[0].AutomationReady ||
                !packageDeliveryExecutions[0].ExecutionReady ||
                packageDeliveryExecutions[0].RequiresEpochTimingRequest ||
                !packageDeliveryExecutions[0].NativeExecutionReady ||
                !packageDeliveryExecutions[0].OperatorNextAction.Contains("export only the customer-safe execution receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopPackageDeliveryExecutionStore.ExecutionPath) ||
                packageDeliveryExecutionReceipts.Count != 1 ||
                packageDeliveryExecutionReceipts[0].ReceiptId != packageDeliveryExecutionReceipt.ReceiptId ||
                packageDeliveryExecutionReceipts[0].ExecutionId != packageDeliveryExecution.ExecutionId ||
                packageDeliveryExecutionReceipts[0].AutomationId != packageDeliveryChecklistAutomation.AutomationId ||
                packageDeliveryExecutionReceipts[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryExecutionReceipts[0].PackageId != "pkg-submission-4" ||
                packageDeliveryExecutionReceipts[0].Kind != "package-delivery-execution" ||
                packageDeliveryExecutionReceipts[0].Status != "customer-safe-package-delivery-execution-ready" ||
                !packageDeliveryExecutionReceipts[0].CustomerSafe ||
                !packageDeliveryExecutionReceipts[0].CustomerVisibleReceiptReady ||
                !packageDeliveryExecutionReceipts[0].WebportalExportReady ||
                !packageDeliveryExecutionReceipts[0].EpochTimingProviderOnly ||
                packageDeliveryExecutionReceipts[0].WorkshopCalendarOwnership ||
                packageDeliveryExecutionReceipts[0].MonitorWorkflowExposed ||
                packageDeliveryExecutionReceipts[0].PaymentLiveEnabled ||
                !packageDeliveryExecutionReceipts[0].OperatorReviewed ||
                !packageDeliveryExecutionReceipts[0].AraReviewComplete ||
                !packageDeliveryExecutionReceipts[0].HumanReviewComplete ||
                !packageDeliveryExecutionReceipts[0].PackageSupportReady ||
                !packageDeliveryExecutionReceipts[0].LowLaborReuseReady ||
                !packageDeliveryExecutionReceipts[0].ChecklistReady ||
                !packageDeliveryExecutionReceipts[0].AutomationReady ||
                !packageDeliveryExecutionReceipts[0].ExecutionReady ||
                packageDeliveryExecutionReceipts[0].RequiresEpochTimingRequest ||
                !packageDeliveryExecutionReceipts[0].NativeExecutionReady ||
                !packageDeliveryExecutionReceipts[0].Summary.Contains("without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution-control, or package-control records", StringComparison.Ordinal) ||
                !packageDeliveryExecutionReceipts[0].CustomerSafeMessage.Contains("Package delivery execution is ready", StringComparison.Ordinal) ||
                !packageDeliveryExecutionReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                packageDeliveryExecutionReceipts[0].Summary.Contains("operator next action", StringComparison.OrdinalIgnoreCase) ||
                packageDeliveryExecutionReceipts[0].Summary.Contains("execution id", StringComparison.OrdinalIgnoreCase) ||
                !File.Exists(WorkshopPackageDeliveryExecutionReceiptStore.ReceiptPath) ||
                packageDeliveryFollowUpRenewals.Count != 1 ||
                packageDeliveryFollowUpRenewals[0].FollowUpId != packageDeliveryFollowUpRenewal.FollowUpId ||
                packageDeliveryFollowUpRenewals[0].ExecutionReceiptId != packageDeliveryExecutionReceipt.ReceiptId ||
                packageDeliveryFollowUpRenewals[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryFollowUpRenewals[0].PackageId != "pkg-submission-4" ||
                packageDeliveryFollowUpRenewals[0].LoopKind != "package-delivery-followup-renewal" ||
                packageDeliveryFollowUpRenewals[0].Status != "package-delivery-followup-renewal-ready" ||
                packageDeliveryFollowUpRenewals[0].CustomerVisible ||
                !packageDeliveryFollowUpRenewals[0].CustomerSafeForReceipt ||
                packageDeliveryFollowUpRenewals[0].WebportalExportReady ||
                !packageDeliveryFollowUpRenewals[0].EpochTimingProviderOnly ||
                packageDeliveryFollowUpRenewals[0].WorkshopCalendarOwnership ||
                packageDeliveryFollowUpRenewals[0].MonitorWorkflowExposed ||
                packageDeliveryFollowUpRenewals[0].PaymentLiveEnabled ||
                !packageDeliveryFollowUpRenewals[0].OperatorReviewed ||
                !packageDeliveryFollowUpRenewals[0].AraReviewComplete ||
                !packageDeliveryFollowUpRenewals[0].HumanReviewComplete ||
                !packageDeliveryFollowUpRenewals[0].PackageSupportReady ||
                !packageDeliveryFollowUpRenewals[0].LowLaborReuseReady ||
                !packageDeliveryFollowUpRenewals[0].ChecklistReady ||
                !packageDeliveryFollowUpRenewals[0].AutomationReady ||
                !packageDeliveryFollowUpRenewals[0].ExecutionReady ||
                !packageDeliveryFollowUpRenewals[0].FollowUpReady ||
                !packageDeliveryFollowUpRenewals[0].RenewalReady ||
                packageDeliveryFollowUpRenewals[0].RequiresEpochTimingRequest ||
                !packageDeliveryFollowUpRenewals[0].NativeExecutionReady ||
                !packageDeliveryFollowUpRenewals[0].OperatorNextAction.Contains("export only the customer-safe follow-up renewal receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopPackageDeliveryFollowUpRenewalStore.FollowUpPath) ||
                packageDeliveryFollowUpRenewalReceipts.Count != 1 ||
                packageDeliveryFollowUpRenewalReceipts[0].ReceiptId != packageDeliveryFollowUpRenewalReceipt.ReceiptId ||
                packageDeliveryFollowUpRenewalReceipts[0].FollowUpId != packageDeliveryFollowUpRenewal.FollowUpId ||
                packageDeliveryFollowUpRenewalReceipts[0].ExecutionReceiptId != packageDeliveryExecutionReceipt.ReceiptId ||
                packageDeliveryFollowUpRenewalReceipts[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryFollowUpRenewalReceipts[0].PackageId != "pkg-submission-4" ||
                packageDeliveryFollowUpRenewalReceipts[0].Kind != "package-delivery-followup-renewal" ||
                packageDeliveryFollowUpRenewalReceipts[0].Status != "customer-safe-package-delivery-followup-renewal-ready" ||
                !packageDeliveryFollowUpRenewalReceipts[0].CustomerSafe ||
                !packageDeliveryFollowUpRenewalReceipts[0].CustomerVisibleReceiptReady ||
                !packageDeliveryFollowUpRenewalReceipts[0].WebportalExportReady ||
                !packageDeliveryFollowUpRenewalReceipts[0].EpochTimingProviderOnly ||
                packageDeliveryFollowUpRenewalReceipts[0].WorkshopCalendarOwnership ||
                packageDeliveryFollowUpRenewalReceipts[0].MonitorWorkflowExposed ||
                packageDeliveryFollowUpRenewalReceipts[0].PaymentLiveEnabled ||
                !packageDeliveryFollowUpRenewalReceipts[0].OperatorReviewed ||
                !packageDeliveryFollowUpRenewalReceipts[0].AraReviewComplete ||
                !packageDeliveryFollowUpRenewalReceipts[0].HumanReviewComplete ||
                !packageDeliveryFollowUpRenewalReceipts[0].PackageSupportReady ||
                !packageDeliveryFollowUpRenewalReceipts[0].LowLaborReuseReady ||
                !packageDeliveryFollowUpRenewalReceipts[0].ChecklistReady ||
                !packageDeliveryFollowUpRenewalReceipts[0].AutomationReady ||
                !packageDeliveryFollowUpRenewalReceipts[0].ExecutionReady ||
                !packageDeliveryFollowUpRenewalReceipts[0].FollowUpReady ||
                !packageDeliveryFollowUpRenewalReceipts[0].RenewalReady ||
                packageDeliveryFollowUpRenewalReceipts[0].RequiresEpochTimingRequest ||
                !packageDeliveryFollowUpRenewalReceipts[0].NativeExecutionReady ||
                !packageDeliveryFollowUpRenewalReceipts[0].Summary.Contains("without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, or package-control records", StringComparison.Ordinal) ||
                !packageDeliveryFollowUpRenewalReceipts[0].CustomerSafeMessage.Contains("Follow-up and renewal review is ready", StringComparison.Ordinal) ||
                !packageDeliveryFollowUpRenewalReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                packageDeliveryFollowUpRenewalReceipts[0].Summary.Contains("operator next action", StringComparison.OrdinalIgnoreCase) ||
                packageDeliveryFollowUpRenewalReceipts[0].Summary.Contains("follow-up id", StringComparison.OrdinalIgnoreCase) ||
                !File.Exists(WorkshopPackageDeliveryFollowUpRenewalReceiptStore.ReceiptPath) ||
                packageDeliveryQualityOutcomes.Count != 1 ||
                packageDeliveryQualityOutcomes[0].OutcomeId != packageDeliveryQualityOutcome.OutcomeId ||
                packageDeliveryQualityOutcomes[0].ExecutionReceiptId != packageDeliveryExecutionReceipt.ReceiptId ||
                packageDeliveryQualityOutcomes[0].FollowUpRenewalReceiptId != packageDeliveryFollowUpRenewalReceipt.ReceiptId ||
                packageDeliveryQualityOutcomes[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryQualityOutcomes[0].PackageId != "pkg-submission-4" ||
                packageDeliveryQualityOutcomes[0].LoopKind != "package-delivery-quality-outcome" ||
                packageDeliveryQualityOutcomes[0].Status != "package-delivery-quality-outcome-ready" ||
                packageDeliveryQualityOutcomes[0].CustomerVisible ||
                !packageDeliveryQualityOutcomes[0].CustomerSafeForReceipt ||
                packageDeliveryQualityOutcomes[0].WebportalExportReady ||
                !packageDeliveryQualityOutcomes[0].EpochTimingProviderOnly ||
                packageDeliveryQualityOutcomes[0].WorkshopCalendarOwnership ||
                packageDeliveryQualityOutcomes[0].MonitorWorkflowExposed ||
                packageDeliveryQualityOutcomes[0].PaymentLiveEnabled ||
                !packageDeliveryQualityOutcomes[0].OperatorReviewed ||
                !packageDeliveryQualityOutcomes[0].AraReviewComplete ||
                !packageDeliveryQualityOutcomes[0].HumanReviewComplete ||
                !packageDeliveryQualityOutcomes[0].PackageSupportReady ||
                !packageDeliveryQualityOutcomes[0].LowLaborReuseReady ||
                !packageDeliveryQualityOutcomes[0].ChecklistReady ||
                !packageDeliveryQualityOutcomes[0].AutomationReady ||
                !packageDeliveryQualityOutcomes[0].ExecutionReady ||
                !packageDeliveryQualityOutcomes[0].FollowUpReady ||
                !packageDeliveryQualityOutcomes[0].RenewalReady ||
                !packageDeliveryQualityOutcomes[0].QualityReviewReady ||
                !packageDeliveryQualityOutcomes[0].OutcomeReady ||
                packageDeliveryQualityOutcomes[0].RequiresEpochTimingRequest ||
                !packageDeliveryQualityOutcomes[0].NativeExecutionReady ||
                !packageDeliveryQualityOutcomes[0].OperatorNextAction.Contains("export only the customer-safe quality outcome receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopPackageDeliveryQualityOutcomeStore.OutcomePath) ||
                packageDeliveryQualityOutcomeReceipts.Count != 1 ||
                packageDeliveryQualityOutcomeReceipts[0].ReceiptId != packageDeliveryQualityOutcomeReceipt.ReceiptId ||
                packageDeliveryQualityOutcomeReceipts[0].OutcomeId != packageDeliveryQualityOutcome.OutcomeId ||
                packageDeliveryQualityOutcomeReceipts[0].ExecutionReceiptId != packageDeliveryExecutionReceipt.ReceiptId ||
                packageDeliveryQualityOutcomeReceipts[0].FollowUpRenewalReceiptId != packageDeliveryFollowUpRenewalReceipt.ReceiptId ||
                packageDeliveryQualityOutcomeReceipts[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryQualityOutcomeReceipts[0].PackageId != "pkg-submission-4" ||
                packageDeliveryQualityOutcomeReceipts[0].Kind != "package-delivery-quality-outcome" ||
                packageDeliveryQualityOutcomeReceipts[0].Status != "customer-safe-package-delivery-quality-outcome-ready" ||
                !packageDeliveryQualityOutcomeReceipts[0].CustomerSafe ||
                !packageDeliveryQualityOutcomeReceipts[0].CustomerVisibleReceiptReady ||
                !packageDeliveryQualityOutcomeReceipts[0].WebportalExportReady ||
                !packageDeliveryQualityOutcomeReceipts[0].EpochTimingProviderOnly ||
                packageDeliveryQualityOutcomeReceipts[0].WorkshopCalendarOwnership ||
                packageDeliveryQualityOutcomeReceipts[0].MonitorWorkflowExposed ||
                packageDeliveryQualityOutcomeReceipts[0].PaymentLiveEnabled ||
                !packageDeliveryQualityOutcomeReceipts[0].OperatorReviewed ||
                !packageDeliveryQualityOutcomeReceipts[0].AraReviewComplete ||
                !packageDeliveryQualityOutcomeReceipts[0].HumanReviewComplete ||
                !packageDeliveryQualityOutcomeReceipts[0].PackageSupportReady ||
                !packageDeliveryQualityOutcomeReceipts[0].LowLaborReuseReady ||
                !packageDeliveryQualityOutcomeReceipts[0].ChecklistReady ||
                !packageDeliveryQualityOutcomeReceipts[0].AutomationReady ||
                !packageDeliveryQualityOutcomeReceipts[0].ExecutionReady ||
                !packageDeliveryQualityOutcomeReceipts[0].FollowUpReady ||
                !packageDeliveryQualityOutcomeReceipts[0].RenewalReady ||
                !packageDeliveryQualityOutcomeReceipts[0].QualityReviewReady ||
                !packageDeliveryQualityOutcomeReceipts[0].OutcomeReady ||
                packageDeliveryQualityOutcomeReceipts[0].RequiresEpochTimingRequest ||
                !packageDeliveryQualityOutcomeReceipts[0].NativeExecutionReady ||
                !packageDeliveryQualityOutcomeReceipts[0].Summary.Contains("without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, or package-control records", StringComparison.Ordinal) ||
                !packageDeliveryQualityOutcomeReceipts[0].CustomerSafeMessage.Contains("Package delivery quality and outcome review is ready", StringComparison.Ordinal) ||
                !packageDeliveryQualityOutcomeReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                packageDeliveryQualityOutcomeReceipts[0].Summary.Contains("operator next action", StringComparison.OrdinalIgnoreCase) ||
                packageDeliveryQualityOutcomeReceipts[0].Summary.Contains("outcome id", StringComparison.OrdinalIgnoreCase) ||
                !File.Exists(WorkshopPackageDeliveryQualityOutcomeReceiptStore.ReceiptPath) ||
                packageDeliveryAccountGrowthLinkages.Count != 1 ||
                packageDeliveryAccountGrowthLinkages[0].LinkageId != packageDeliveryAccountGrowthLinkage.LinkageId ||
                packageDeliveryAccountGrowthLinkages[0].QualityOutcomeReceiptId != packageDeliveryQualityOutcomeReceipt.ReceiptId ||
                packageDeliveryAccountGrowthLinkages[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryAccountGrowthLinkages[0].PackageId != "pkg-submission-4" ||
                packageDeliveryAccountGrowthLinkages[0].LinkageKind != "package-delivery-account-growth-linkage" ||
                packageDeliveryAccountGrowthLinkages[0].Status != "package-delivery-account-growth-ready" ||
                packageDeliveryAccountGrowthLinkages[0].GrowthPath != "quality-outcome-retention-referral-expansion" ||
                packageDeliveryAccountGrowthLinkages[0].CustomerVisible ||
                !packageDeliveryAccountGrowthLinkages[0].CustomerSafeForReceipt ||
                packageDeliveryAccountGrowthLinkages[0].WebportalExportReady ||
                !packageDeliveryAccountGrowthLinkages[0].EpochTimingProviderOnly ||
                packageDeliveryAccountGrowthLinkages[0].WorkshopCalendarOwnership ||
                packageDeliveryAccountGrowthLinkages[0].MonitorWorkflowExposed ||
                packageDeliveryAccountGrowthLinkages[0].PaymentLiveEnabled ||
                !packageDeliveryAccountGrowthLinkages[0].OperatorReviewed ||
                !packageDeliveryAccountGrowthLinkages[0].AraReviewComplete ||
                !packageDeliveryAccountGrowthLinkages[0].HumanReviewComplete ||
                !packageDeliveryAccountGrowthLinkages[0].PackageSupportReady ||
                !packageDeliveryAccountGrowthLinkages[0].LowLaborReuseReady ||
                !packageDeliveryAccountGrowthLinkages[0].ChecklistReady ||
                !packageDeliveryAccountGrowthLinkages[0].AutomationReady ||
                !packageDeliveryAccountGrowthLinkages[0].ExecutionReady ||
                !packageDeliveryAccountGrowthLinkages[0].FollowUpReady ||
                !packageDeliveryAccountGrowthLinkages[0].RenewalReady ||
                !packageDeliveryAccountGrowthLinkages[0].QualityReviewReady ||
                !packageDeliveryAccountGrowthLinkages[0].OutcomeReady ||
                !packageDeliveryAccountGrowthLinkages[0].AccountGrowthReady ||
                !packageDeliveryAccountGrowthLinkages[0].RetentionReady ||
                !packageDeliveryAccountGrowthLinkages[0].ReferralReady ||
                !packageDeliveryAccountGrowthLinkages[0].ExpansionReady ||
                packageDeliveryAccountGrowthLinkages[0].RequiresEpochTimingRequest ||
                !packageDeliveryAccountGrowthLinkages[0].NativeExecutionReady ||
                !packageDeliveryAccountGrowthLinkages[0].OperatorNextAction.Contains("export only the customer-safe account-growth receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopPackageDeliveryAccountGrowthLinkageStore.LinkagePath) ||
                packageDeliveryAccountGrowthReceipts.Count != 1 ||
                packageDeliveryAccountGrowthReceipts[0].ReceiptId != packageDeliveryAccountGrowthReceipt.ReceiptId ||
                packageDeliveryAccountGrowthReceipts[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryAccountGrowthReceipts[0].PackageId != "pkg-submission-4" ||
                packageDeliveryAccountGrowthReceipts[0].Kind != "package-delivery-account-growth" ||
                packageDeliveryAccountGrowthReceipts[0].Status != "customer-safe-package-delivery-account-growth-ready" ||
                !packageDeliveryAccountGrowthReceipts[0].CustomerSafe ||
                !packageDeliveryAccountGrowthReceipts[0].CustomerVisibleReceiptReady ||
                !packageDeliveryAccountGrowthReceipts[0].WebportalExportReady ||
                !packageDeliveryAccountGrowthReceipts[0].EpochTimingProviderOnly ||
                packageDeliveryAccountGrowthReceipts[0].WorkshopCalendarOwnership ||
                packageDeliveryAccountGrowthReceipts[0].MonitorWorkflowExposed ||
                packageDeliveryAccountGrowthReceipts[0].PaymentLiveEnabled ||
                !packageDeliveryAccountGrowthReceipts[0].OperatorReviewed ||
                !packageDeliveryAccountGrowthReceipts[0].AraReviewComplete ||
                !packageDeliveryAccountGrowthReceipts[0].HumanReviewComplete ||
                !packageDeliveryAccountGrowthReceipts[0].PackageSupportReady ||
                !packageDeliveryAccountGrowthReceipts[0].LowLaborReuseReady ||
                !packageDeliveryAccountGrowthReceipts[0].ChecklistReady ||
                !packageDeliveryAccountGrowthReceipts[0].AutomationReady ||
                !packageDeliveryAccountGrowthReceipts[0].ExecutionReady ||
                !packageDeliveryAccountGrowthReceipts[0].FollowUpReady ||
                !packageDeliveryAccountGrowthReceipts[0].RenewalReady ||
                !packageDeliveryAccountGrowthReceipts[0].QualityReviewReady ||
                !packageDeliveryAccountGrowthReceipts[0].OutcomeReady ||
                !packageDeliveryAccountGrowthReceipts[0].AccountGrowthReady ||
                !packageDeliveryAccountGrowthReceipts[0].RetentionReady ||
                !packageDeliveryAccountGrowthReceipts[0].ReferralReady ||
                !packageDeliveryAccountGrowthReceipts[0].ExpansionReady ||
                packageDeliveryAccountGrowthReceipts[0].RequiresEpochTimingRequest ||
                !packageDeliveryAccountGrowthReceipts[0].NativeExecutionReady ||
                !packageDeliveryAccountGrowthReceipts[0].Summary.Contains("account-growth-control", StringComparison.Ordinal) ||
                !packageDeliveryAccountGrowthReceipts[0].CustomerSafeMessage.Contains("account-growth follow-up is ready", StringComparison.Ordinal) ||
                !packageDeliveryAccountGrowthReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                packageDeliveryAccountGrowthReceipts[0].Summary.Contains("operator next action", StringComparison.OrdinalIgnoreCase) ||
                !File.Exists(WorkshopPackageDeliveryAccountGrowthReceiptStore.ReceiptPath) ||
                packageDeliveryRetentionReports.Count != 1 ||
                packageDeliveryRetentionReports[0].ReportId != packageDeliveryRetentionReport.ReportId ||
                packageDeliveryRetentionReports[0].AccountGrowthReceiptId != packageDeliveryAccountGrowthReceipt.ReceiptId ||
                packageDeliveryRetentionReports[0].QualityOutcomeReceiptId != packageDeliveryQualityOutcomeReceipt.ReceiptId ||
                packageDeliveryRetentionReports[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryRetentionReports[0].PackageId != "pkg-submission-4" ||
                packageDeliveryRetentionReports[0].ReportKind != "package-delivery-retention-reporting" ||
                packageDeliveryRetentionReports[0].Status != "package-delivery-retention-reporting-ready" ||
                packageDeliveryRetentionReports[0].ReportingPath != "quality-outcome-account-growth-retention-reporting" ||
                packageDeliveryRetentionReports[0].CustomerVisible ||
                !packageDeliveryRetentionReports[0].CustomerSafeForReceipt ||
                packageDeliveryRetentionReports[0].WebportalExportReady ||
                !packageDeliveryRetentionReports[0].EpochTimingProviderOnly ||
                packageDeliveryRetentionReports[0].WorkshopCalendarOwnership ||
                packageDeliveryRetentionReports[0].MonitorWorkflowExposed ||
                packageDeliveryRetentionReports[0].PaymentLiveEnabled ||
                !packageDeliveryRetentionReports[0].OperatorReviewed ||
                !packageDeliveryRetentionReports[0].AraReviewComplete ||
                !packageDeliveryRetentionReports[0].HumanReviewComplete ||
                !packageDeliveryRetentionReports[0].PackageSupportReady ||
                !packageDeliveryRetentionReports[0].LowLaborReuseReady ||
                !packageDeliveryRetentionReports[0].ChecklistReady ||
                !packageDeliveryRetentionReports[0].AutomationReady ||
                !packageDeliveryRetentionReports[0].ExecutionReady ||
                !packageDeliveryRetentionReports[0].FollowUpReady ||
                !packageDeliveryRetentionReports[0].RenewalReady ||
                !packageDeliveryRetentionReports[0].QualityReviewReady ||
                !packageDeliveryRetentionReports[0].OutcomeReady ||
                !packageDeliveryRetentionReports[0].AccountGrowthReady ||
                !packageDeliveryRetentionReports[0].RetentionReady ||
                !packageDeliveryRetentionReports[0].ReferralReady ||
                !packageDeliveryRetentionReports[0].ExpansionReady ||
                !packageDeliveryRetentionReports[0].QualityOutcomeReceiptMatched ||
                !packageDeliveryRetentionReports[0].RetentionReportingReady ||
                packageDeliveryRetentionReports[0].RequiresEpochTimingRequest ||
                !packageDeliveryRetentionReports[0].NativeExecutionReady ||
                !packageDeliveryRetentionReports[0].OperatorNextAction.Contains("export only the customer-safe retention-report receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopPackageDeliveryRetentionReportStore.ReportPath) ||
                packageDeliveryRetentionReportReceipts.Count != 1 ||
                packageDeliveryRetentionReportReceipts[0].ReceiptId != packageDeliveryRetentionReportReceipt.ReceiptId ||
                packageDeliveryRetentionReportReceipts[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryRetentionReportReceipts[0].PackageId != "pkg-submission-4" ||
                packageDeliveryRetentionReportReceipts[0].Kind != "package-delivery-retention-report" ||
                packageDeliveryRetentionReportReceipts[0].Status != "customer-safe-package-delivery-retention-report-ready" ||
                !packageDeliveryRetentionReportReceipts[0].CustomerSafe ||
                !packageDeliveryRetentionReportReceipts[0].CustomerVisibleReceiptReady ||
                !packageDeliveryRetentionReportReceipts[0].WebportalExportReady ||
                !packageDeliveryRetentionReportReceipts[0].EpochTimingProviderOnly ||
                packageDeliveryRetentionReportReceipts[0].WorkshopCalendarOwnership ||
                packageDeliveryRetentionReportReceipts[0].MonitorWorkflowExposed ||
                packageDeliveryRetentionReportReceipts[0].PaymentLiveEnabled ||
                !packageDeliveryRetentionReportReceipts[0].OperatorReviewed ||
                !packageDeliveryRetentionReportReceipts[0].AraReviewComplete ||
                !packageDeliveryRetentionReportReceipts[0].HumanReviewComplete ||
                !packageDeliveryRetentionReportReceipts[0].PackageSupportReady ||
                !packageDeliveryRetentionReportReceipts[0].LowLaborReuseReady ||
                !packageDeliveryRetentionReportReceipts[0].ChecklistReady ||
                !packageDeliveryRetentionReportReceipts[0].AutomationReady ||
                !packageDeliveryRetentionReportReceipts[0].ExecutionReady ||
                !packageDeliveryRetentionReportReceipts[0].FollowUpReady ||
                !packageDeliveryRetentionReportReceipts[0].RenewalReady ||
                !packageDeliveryRetentionReportReceipts[0].QualityReviewReady ||
                !packageDeliveryRetentionReportReceipts[0].OutcomeReady ||
                !packageDeliveryRetentionReportReceipts[0].AccountGrowthReady ||
                !packageDeliveryRetentionReportReceipts[0].RetentionReady ||
                !packageDeliveryRetentionReportReceipts[0].ReferralReady ||
                !packageDeliveryRetentionReportReceipts[0].ExpansionReady ||
                !packageDeliveryRetentionReportReceipts[0].QualityOutcomeReceiptMatched ||
                !packageDeliveryRetentionReportReceipts[0].RetentionReportingReady ||
                packageDeliveryRetentionReportReceipts[0].RequiresEpochTimingRequest ||
                !packageDeliveryRetentionReportReceipts[0].NativeExecutionReady ||
                !packageDeliveryRetentionReportReceipts[0].Summary.Contains("retention-reporting-control", StringComparison.Ordinal) ||
                !packageDeliveryRetentionReportReceipts[0].CustomerSafeMessage.Contains("retention reporting is ready", StringComparison.Ordinal) ||
                !packageDeliveryRetentionReportReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                packageDeliveryRetentionReportReceipts[0].Summary.Contains("operator next action", StringComparison.OrdinalIgnoreCase) ||
                !File.Exists(WorkshopPackageDeliveryRetentionReportReceiptStore.ReceiptPath) ||
                packageDeliveryGrowthActions.Count != 1 ||
                packageDeliveryGrowthActions[0].ActionId != packageDeliveryGrowthAction.ActionId ||
                packageDeliveryGrowthActions[0].RetentionReportId != packageDeliveryRetentionReport.ReportId ||
                packageDeliveryGrowthActions[0].RetentionReportReceiptId != packageDeliveryRetentionReportReceipt.ReceiptId ||
                packageDeliveryGrowthActions[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryGrowthActions[0].PackageId != "pkg-submission-4" ||
                packageDeliveryGrowthActions[0].ActionKind != "package-delivery-growth-action" ||
                packageDeliveryGrowthActions[0].Status != "package-delivery-growth-action-ready" ||
                packageDeliveryGrowthActions[0].GrowthPath != "retention-report-repeat-referral-expansion-action" ||
                packageDeliveryGrowthActions[0].CustomerVisible ||
                !packageDeliveryGrowthActions[0].CustomerSafeForReceipt ||
                packageDeliveryGrowthActions[0].WebportalExportReady ||
                !packageDeliveryGrowthActions[0].EpochTimingProviderOnly ||
                packageDeliveryGrowthActions[0].WorkshopCalendarOwnership ||
                packageDeliveryGrowthActions[0].MonitorWorkflowExposed ||
                packageDeliveryGrowthActions[0].PaymentLiveEnabled ||
                !packageDeliveryGrowthActions[0].OperatorReviewed ||
                !packageDeliveryGrowthActions[0].AraReviewComplete ||
                !packageDeliveryGrowthActions[0].HumanReviewComplete ||
                !packageDeliveryGrowthActions[0].PackageSupportReady ||
                !packageDeliveryGrowthActions[0].LowLaborReuseReady ||
                !packageDeliveryGrowthActions[0].ChecklistReady ||
                !packageDeliveryGrowthActions[0].AutomationReady ||
                !packageDeliveryGrowthActions[0].ExecutionReady ||
                !packageDeliveryGrowthActions[0].FollowUpReady ||
                !packageDeliveryGrowthActions[0].RenewalReady ||
                !packageDeliveryGrowthActions[0].QualityReviewReady ||
                !packageDeliveryGrowthActions[0].OutcomeReady ||
                !packageDeliveryGrowthActions[0].AccountGrowthReady ||
                !packageDeliveryGrowthActions[0].RetentionReady ||
                !packageDeliveryGrowthActions[0].ReferralReady ||
                !packageDeliveryGrowthActions[0].ExpansionReady ||
                !packageDeliveryGrowthActions[0].QualityOutcomeReceiptMatched ||
                !packageDeliveryGrowthActions[0].RetentionReportingReady ||
                !packageDeliveryGrowthActions[0].GrowthActionReady ||
                packageDeliveryGrowthActions[0].RequiresEpochTimingRequest ||
                !packageDeliveryGrowthActions[0].NativeExecutionReady ||
                !packageDeliveryGrowthActions[0].CustomerSafeStatus.Contains("repeat-service", StringComparison.Ordinal) ||
                !packageDeliveryGrowthActions[0].OperatorNextAction.Contains("export only the customer-safe growth-action receipt", StringComparison.Ordinal) ||
                !File.Exists(WorkshopPackageDeliveryGrowthActionStore.ActionPath) ||
                packageDeliveryGrowthActionReceipts.Count != 1 ||
                packageDeliveryGrowthActionReceipts[0].ReceiptId != packageDeliveryGrowthActionReceipt.ReceiptId ||
                packageDeliveryGrowthActionReceipts[0].ServiceRequestId != serviceInboxRequest.RequestId ||
                packageDeliveryGrowthActionReceipts[0].PackageId != "pkg-submission-4" ||
                packageDeliveryGrowthActionReceipts[0].Kind != "package-delivery-growth-action" ||
                packageDeliveryGrowthActionReceipts[0].Status != "customer-safe-package-delivery-growth-action-ready" ||
                !packageDeliveryGrowthActionReceipts[0].CustomerSafe ||
                !packageDeliveryGrowthActionReceipts[0].CustomerVisibleReceiptReady ||
                !packageDeliveryGrowthActionReceipts[0].WebportalExportReady ||
                !packageDeliveryGrowthActionReceipts[0].EpochTimingProviderOnly ||
                packageDeliveryGrowthActionReceipts[0].WorkshopCalendarOwnership ||
                packageDeliveryGrowthActionReceipts[0].MonitorWorkflowExposed ||
                packageDeliveryGrowthActionReceipts[0].PaymentLiveEnabled ||
                !packageDeliveryGrowthActionReceipts[0].OperatorReviewed ||
                !packageDeliveryGrowthActionReceipts[0].AraReviewComplete ||
                !packageDeliveryGrowthActionReceipts[0].HumanReviewComplete ||
                !packageDeliveryGrowthActionReceipts[0].PackageSupportReady ||
                !packageDeliveryGrowthActionReceipts[0].LowLaborReuseReady ||
                !packageDeliveryGrowthActionReceipts[0].ChecklistReady ||
                !packageDeliveryGrowthActionReceipts[0].AutomationReady ||
                !packageDeliveryGrowthActionReceipts[0].ExecutionReady ||
                !packageDeliveryGrowthActionReceipts[0].FollowUpReady ||
                !packageDeliveryGrowthActionReceipts[0].RenewalReady ||
                !packageDeliveryGrowthActionReceipts[0].QualityReviewReady ||
                !packageDeliveryGrowthActionReceipts[0].OutcomeReady ||
                !packageDeliveryGrowthActionReceipts[0].AccountGrowthReady ||
                !packageDeliveryGrowthActionReceipts[0].RetentionReady ||
                !packageDeliveryGrowthActionReceipts[0].ReferralReady ||
                !packageDeliveryGrowthActionReceipts[0].ExpansionReady ||
                !packageDeliveryGrowthActionReceipts[0].QualityOutcomeReceiptMatched ||
                !packageDeliveryGrowthActionReceipts[0].RetentionReportingReady ||
                !packageDeliveryGrowthActionReceipts[0].GrowthActionReady ||
                packageDeliveryGrowthActionReceipts[0].RequiresEpochTimingRequest ||
                !packageDeliveryGrowthActionReceipts[0].NativeExecutionReady ||
                !packageDeliveryGrowthActionReceipts[0].Summary.Contains("growth-action-control", StringComparison.Ordinal) ||
                !packageDeliveryGrowthActionReceipts[0].CustomerSafeMessage.Contains("repeat-service, referral, or expansion action is ready", StringComparison.Ordinal) ||
                !packageDeliveryGrowthActionReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                packageDeliveryGrowthActionReceipts[0].Summary.Contains("operator next action", StringComparison.OrdinalIgnoreCase) ||
                !File.Exists(WorkshopPackageDeliveryGrowthActionReceiptStore.ReceiptPath) ||
                !operationsBoard.ReadyForOperatorReview ||
                !operationsBoard.EpochTimingProviderOnly ||
                operationsBoard.MonitorWorkflowExposed ||
                !operationsBoard.CustomerSafeChain ||
                !operationsBoard.AraReviewComplete ||
                operationsBoard.BoardStatus != "revenue/service operations board ready" ||
                !operationsBoard.OperatorNextAction.Contains("approve the next WORKSHOP-owned delivery transition", StringComparison.Ordinal) ||
                !operationsBoard.PipelineSummary.Contains("1 service inbox request", StringComparison.Ordinal) ||
                !operationsBoard.SafetySummary.Contains("EPOCH timing provider only: true", StringComparison.Ordinal) ||
                !operationsBoard.LedgerSummary.Contains(WorkshopRevenueExecutionHistoryStore.HistoryPath, StringComparison.Ordinal) ||
                customerStatuses.Count != 1 ||
                customerStatuses[0].StatusId != customerStatus.StatusId ||
                customerStatuses[0].RequestId != serviceInboxRequest.RequestId ||
                !customerStatuses[0].CustomerSafe ||
                !customerStatuses[0].WebportalExportReady ||
                !customerStatuses[0].EpochTimingProviderOnly ||
                !customerStatuses[0].AraReviewComplete ||
                customerStatuses[0].MonitorWorkflowExposed ||
                !customerStatuses[0].CustomerSafeMessage.Contains("EPOCH remains timing-provider-only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopCustomerServiceStatusStore.StatusPath) ||
                lifecycleActions.Count != 1 ||
                lifecycleActions[0].ActionId != lifecycleAction.ActionId ||
                !lifecycleActions[0].CustomerSafe ||
                !lifecycleActions[0].EpochTimingProviderOnly ||
                lifecycleActions[0].MonitorWorkflowExposed ||
                !lifecycleActions[0].AppOwnedLifecycleState ||
                !File.Exists(WorkshopServiceLifecycleActionStore.ActionPath) ||
                lifecycleReceipts.Count != 1 ||
                lifecycleReceipts[0].ReceiptId != lifecycleReceipt.ReceiptId ||
                lifecycleReceipts[0].ActionId != lifecycleAction.ActionId ||
                lifecycleReceipts[0].ServiceCommandReceiptId != serviceCommandReceipt.ReceiptId ||
                !lifecycleReceipts[0].CustomerSafe ||
                !lifecycleReceipts[0].CustomerVisibleReceiptReady ||
                !lifecycleReceipts[0].AraOperatorReviewComplete ||
                !lifecycleReceipts[0].EpochTimingProviderOnly ||
                lifecycleReceipts[0].MonitorWorkflowExposed ||
                !lifecycleReceipts[0].NativeExecutionReady ||
                !File.Exists(WorkshopServiceLifecycleReceiptStore.ReceiptPath) ||
                lifecycleStatuses.Count != 1 ||
                lifecycleStatuses[0].StatusId != lifecycleStatus.StatusId ||
                lifecycleStatuses[0].ActionId != lifecycleAction.ActionId ||
                !lifecycleStatuses[0].CustomerSafe ||
                !lifecycleStatuses[0].WebportalExportReady ||
                !lifecycleStatuses[0].EpochTimingProviderOnly ||
                !lifecycleStatuses[0].AraReviewComplete ||
                lifecycleStatuses[0].MonitorWorkflowExposed ||
                !lifecycleStatuses[0].CustomerSafeMessage.Contains("EPOCH remains timing-provider-only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopServiceLifecycleStatusStore.StatusPath) ||
                revisedTimingPayloads.Count != 1 ||
                revisedTimingPayloads[0].PayloadId != revisedTimingPayload.PayloadId ||
                revisedTimingPayload.PayloadId != "epoch-revised-timing-export-001" ||
                revisedTimingPayload.SourceSurface != "EPOCH.App.RevisedTimingProjectionExport" ||
                revisedTimingPayloads[0].CalendarSystemLabel != "revised-13-month" ||
                revisedTimingPayloads[0].ProviderGoLiveRequested ||
                !revisedTimingPayloads[0].EpochTimingProviderOnly ||
                revisedTimingPayloads[0].WorkshopCalendarOwnership ||
                revisedTimingPayloads[0].MonitorWorkflowExposed ||
                !revisedTimingPayloads[0].ConversionGateReason.Contains("gated", StringComparison.Ordinal) ||
                !File.Exists(WorkshopEpochRevisedCalendarTimingPayloadStore.PayloadPath) ||
                revisedTimingReceipts.Count != 1 ||
                revisedTimingReceipts[0].ReceiptId != revisedTimingReceipt.ReceiptId ||
                revisedTimingReceipts[0].PayloadId != revisedTimingPayload.PayloadId ||
                revisedTimingReceipts[0].Kind != "epoch-revised-calendar-timing" ||
                !revisedTimingReceipts[0].CustomerVisibleReceiptReady ||
                !revisedTimingReceipts[0].EpochTimingProviderOnly ||
                revisedTimingReceipts[0].WorkshopCalendarOwnership ||
                revisedTimingReceipts[0].MonitorWorkflowExposed ||
                !File.Exists(WorkshopRevisedCalendarTimingReceiptStore.ReceiptPath) ||
                revisedTimingStatuses.Count != 1 ||
                revisedTimingStatuses[0].StatusId != revisedTimingStatus.StatusId ||
                revisedTimingStatuses[0].PayloadId != revisedTimingPayload.PayloadId ||
                revisedTimingStatuses[0].ReceiptId != revisedTimingReceipt.ReceiptId ||
                !revisedTimingStatuses[0].CustomerSafe ||
                !revisedTimingStatuses[0].WebportalExportReady ||
                !revisedTimingStatuses[0].EpochTimingProviderOnly ||
                revisedTimingStatuses[0].WorkshopCalendarOwnership ||
                revisedTimingStatuses[0].MonitorWorkflowExposed ||
                !revisedTimingStatuses[0].CustomerSafeMessage.Contains("EPOCH-provided revised timing context", StringComparison.Ordinal) ||
                !File.Exists(WorkshopRevisedCalendarTimingStatusStore.StatusPath) ||
                timingAwareFollowUps.Count != 1 ||
                timingAwareFollowUps[0].FollowUpId != timingAwareFollowUp.FollowUpId ||
                timingAwareFollowUps[0].RequestId != revisedTimingPayload.RequestId ||
                timingAwareFollowUps[0].TimingStatusId != revisedTimingStatus.StatusId ||
                timingAwareFollowUps[0].RevisedTimingPayloadId != revisedTimingPayload.PayloadId ||
                timingAwareFollowUps[0].RevisedTimingReceiptId != revisedTimingReceipt.ReceiptId ||
                timingAwareFollowUps[0].ActionKind != "timing-aware-service-follow-up" ||
                timingAwareFollowUps[0].Status != "follow-up-ready" ||
                !timingAwareFollowUps[0].CustomerSafe ||
                !timingAwareFollowUps[0].WebportalExportReady ||
                !timingAwareFollowUps[0].EpochTimingProviderOnly ||
                timingAwareFollowUps[0].WorkshopCalendarOwnership ||
                timingAwareFollowUps[0].MonitorWorkflowExposed ||
                !timingAwareFollowUps[0].RenewalPromptReady ||
                !timingAwareFollowUps[0].OperatorNextAction.Contains("request EPOCH timing only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopTimingAwareServiceFollowUpStore.FollowUpPath) ||
                timingAwareRenewalReceipts.Count != 1 ||
                timingAwareRenewalReceipts[0].ReceiptId != timingAwareRenewalReceipt.ReceiptId ||
                timingAwareRenewalReceipts[0].FollowUpId != timingAwareFollowUp.FollowUpId ||
                timingAwareRenewalReceipts[0].RequestId != revisedTimingPayload.RequestId ||
                timingAwareRenewalReceipts[0].TimingStatusId != revisedTimingStatus.StatusId ||
                timingAwareRenewalReceipts[0].RevisedTimingPayloadId != revisedTimingPayload.PayloadId ||
                timingAwareRenewalReceipts[0].Kind != "timing-aware-renewal" ||
                timingAwareRenewalReceipts[0].Status != "renewal-follow-up-ready" ||
                !timingAwareRenewalReceipts[0].CustomerSafe ||
                !timingAwareRenewalReceipts[0].CustomerVisibleReceiptReady ||
                !timingAwareRenewalReceipts[0].EpochTimingProviderOnly ||
                timingAwareRenewalReceipts[0].WorkshopCalendarOwnership ||
                timingAwareRenewalReceipts[0].MonitorWorkflowExposed ||
                !timingAwareRenewalReceipts[0].RenewalReady ||
                timingAwareRenewalReceipts[0].RequiresEpochTimingRequest ||
                !timingAwareRenewalReceipts[0].CustomerSafeStatus.Contains("EPOCH remains the timing provider", StringComparison.Ordinal) ||
                !File.Exists(WorkshopTimingAwareRenewalReceiptStore.ReceiptPath) ||
                deliveryOutcomeAutomations.Count != 1 ||
                deliveryOutcomeAutomations[0].AutomationId != deliveryOutcomeAutomation.AutomationId ||
                deliveryOutcomeAutomations[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                deliveryOutcomeAutomations[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                deliveryOutcomeAutomations[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                deliveryOutcomeAutomations[0].ExecutionHistoryId != historyEntry.HistoryId ||
                deliveryOutcomeAutomations[0].LifecycleStatusId != lifecycleStatus.StatusId ||
                deliveryOutcomeAutomations[0].TimingAwareRenewalReceiptId != timingAwareRenewalReceipt.ReceiptId ||
                deliveryOutcomeAutomations[0].AutomationKind != "delivery-outcome-automation" ||
                deliveryOutcomeAutomations[0].Status != "delivery-outcome-automation-ready" ||
                !deliveryOutcomeAutomations[0].CustomerSafe ||
                !deliveryOutcomeAutomations[0].WebportalExportReady ||
                !deliveryOutcomeAutomations[0].EpochTimingProviderOnly ||
                deliveryOutcomeAutomations[0].WorkshopCalendarOwnership ||
                deliveryOutcomeAutomations[0].MonitorWorkflowExposed ||
                deliveryOutcomeAutomations[0].PaymentLiveEnabled ||
                !deliveryOutcomeAutomations[0].AraReviewComplete ||
                !deliveryOutcomeAutomations[0].RenewalReady ||
                deliveryOutcomeAutomations[0].RequiresEpochTimingRequest ||
                !deliveryOutcomeAutomations[0].NativeExecutionReady ||
                !deliveryOutcomeAutomations[0].OperatorNextAction.Contains("request EPOCH timing only", StringComparison.Ordinal) ||
                !deliveryOutcomeAutomations[0].CustomerSafeMessage.Contains("EPOCH remains timing-provider-only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopDeliveryOutcomeAutomationStore.AutomationPath) ||
                deliveryOutcomeAutomationReceipts.Count != 1 ||
                deliveryOutcomeAutomationReceipts[0].ReceiptId != deliveryOutcomeAutomationReceipt.ReceiptId ||
                deliveryOutcomeAutomationReceipts[0].AutomationId != deliveryOutcomeAutomation.AutomationId ||
                deliveryOutcomeAutomationReceipts[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                deliveryOutcomeAutomationReceipts[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                deliveryOutcomeAutomationReceipts[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                deliveryOutcomeAutomationReceipts[0].LifecycleStatusId != lifecycleStatus.StatusId ||
                deliveryOutcomeAutomationReceipts[0].TimingAwareRenewalReceiptId != timingAwareRenewalReceipt.ReceiptId ||
                deliveryOutcomeAutomationReceipts[0].Kind != "delivery-outcome-automation" ||
                deliveryOutcomeAutomationReceipts[0].Status != "customer-safe-delivery-outcome-ready" ||
                !deliveryOutcomeAutomationReceipts[0].CustomerSafe ||
                !deliveryOutcomeAutomationReceipts[0].CustomerVisibleReceiptReady ||
                !deliveryOutcomeAutomationReceipts[0].WebportalExportReady ||
                !deliveryOutcomeAutomationReceipts[0].EpochTimingProviderOnly ||
                deliveryOutcomeAutomationReceipts[0].WorkshopCalendarOwnership ||
                deliveryOutcomeAutomationReceipts[0].MonitorWorkflowExposed ||
                deliveryOutcomeAutomationReceipts[0].PaymentLiveEnabled ||
                !deliveryOutcomeAutomationReceipts[0].AraReviewComplete ||
                !deliveryOutcomeAutomationReceipts[0].RenewalReady ||
                deliveryOutcomeAutomationReceipts[0].RequiresEpochTimingRequest ||
                !deliveryOutcomeAutomationReceipts[0].CustomerSafeMessage.Contains("EPOCH remains timing-provider-only", StringComparison.Ordinal) ||
                !deliveryOutcomeAutomationReceipts[0].NextAction.Contains("request timing through EPOCH", StringComparison.Ordinal) ||
                !File.Exists(WorkshopDeliveryOutcomeAutomationReceiptStore.ReceiptPath) ||
                accountGrowthAutomations.Count != 1 ||
                accountGrowthAutomations[0].AutomationId != accountGrowthAutomation.AutomationId ||
                accountGrowthAutomations[0].DeliveryOutcomeAutomationId != deliveryOutcomeAutomation.AutomationId ||
                accountGrowthAutomations[0].DeliveryOutcomeAutomationReceiptId != deliveryOutcomeAutomationReceipt.ReceiptId ||
                accountGrowthAutomations[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                accountGrowthAutomations[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                accountGrowthAutomations[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                accountGrowthAutomations[0].TimingAwareRenewalReceiptId != timingAwareRenewalReceipt.ReceiptId ||
                accountGrowthAutomations[0].AutomationKind != "account-growth-automation" ||
                accountGrowthAutomations[0].Status != "account-growth-automation-ready" ||
                accountGrowthAutomations[0].GrowthPath != "retention-referral-expansion" ||
                !accountGrowthAutomations[0].CustomerSafe ||
                !accountGrowthAutomations[0].CustomerVisibleReceiptReady ||
                !accountGrowthAutomations[0].WebportalExportReady ||
                !accountGrowthAutomations[0].EpochTimingProviderOnly ||
                accountGrowthAutomations[0].WorkshopCalendarOwnership ||
                accountGrowthAutomations[0].MonitorWorkflowExposed ||
                accountGrowthAutomations[0].PaymentLiveEnabled ||
                !accountGrowthAutomations[0].AraReviewComplete ||
                !accountGrowthAutomations[0].RenewalReady ||
                !accountGrowthAutomations[0].RetentionReady ||
                !accountGrowthAutomations[0].ReferralReady ||
                !accountGrowthAutomations[0].GrowthPlanReady ||
                !accountGrowthAutomations[0].ConversionReady ||
                !accountGrowthAutomations[0].ExpansionRequestReady ||
                accountGrowthAutomations[0].RequiresEpochTimingRequest ||
                !accountGrowthAutomations[0].NativeExecutionReady ||
                !accountGrowthAutomations[0].OperatorNextAction.Contains("without adding live calendar load", StringComparison.Ordinal) ||
                !accountGrowthAutomations[0].CustomerSafeStatus.Contains("EPOCH remains timing-provider-only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAccountGrowthAutomationStore.AutomationPath) ||
                accountGrowthAutomationReceipts.Count != 1 ||
                accountGrowthAutomationReceipts[0].ReceiptId != accountGrowthAutomationReceipt.ReceiptId ||
                accountGrowthAutomationReceipts[0].AutomationId != accountGrowthAutomation.AutomationId ||
                accountGrowthAutomationReceipts[0].DeliveryOutcomeAutomationId != deliveryOutcomeAutomation.AutomationId ||
                accountGrowthAutomationReceipts[0].DeliveryOutcomeAutomationReceiptId != deliveryOutcomeAutomationReceipt.ReceiptId ||
                accountGrowthAutomationReceipts[0].ServiceRequestId != historyEntry.ServiceRequestId ||
                accountGrowthAutomationReceipts[0].RevenueOutcomeId != historyEntry.RevenueOutcomeId ||
                accountGrowthAutomationReceipts[0].DeliveryResultReceiptId != historyEntry.DeliveryResultReceiptId ||
                accountGrowthAutomationReceipts[0].TimingAwareRenewalReceiptId != timingAwareRenewalReceipt.ReceiptId ||
                accountGrowthAutomationReceipts[0].Kind != "account-growth-automation" ||
                accountGrowthAutomationReceipts[0].Status != "customer-safe-account-growth-ready" ||
                !accountGrowthAutomationReceipts[0].CustomerSafe ||
                !accountGrowthAutomationReceipts[0].CustomerVisibleReceiptReady ||
                !accountGrowthAutomationReceipts[0].WebportalExportReady ||
                !accountGrowthAutomationReceipts[0].EpochTimingProviderOnly ||
                accountGrowthAutomationReceipts[0].WorkshopCalendarOwnership ||
                accountGrowthAutomationReceipts[0].MonitorWorkflowExposed ||
                accountGrowthAutomationReceipts[0].PaymentLiveEnabled ||
                !accountGrowthAutomationReceipts[0].AraReviewComplete ||
                !accountGrowthAutomationReceipts[0].RenewalReady ||
                !accountGrowthAutomationReceipts[0].RetentionReady ||
                !accountGrowthAutomationReceipts[0].ReferralReady ||
                !accountGrowthAutomationReceipts[0].GrowthPlanReady ||
                !accountGrowthAutomationReceipts[0].ConversionReady ||
                !accountGrowthAutomationReceipts[0].ExpansionRequestReady ||
                accountGrowthAutomationReceipts[0].RequiresEpochTimingRequest ||
                !accountGrowthAutomationReceipts[0].CustomerSafeMessage.Contains("next-step follow-up", StringComparison.Ordinal) ||
                !accountGrowthAutomationReceipts[0].NextAction.Contains("Request EPOCH timing only", StringComparison.Ordinal) ||
                !File.Exists(WorkshopAccountGrowthAutomationReceiptStore.ReceiptPath))
            {
                return 2;
            }

            return 0;
        }
        catch
        {
            return 1;
        }
        finally
        {
            Environment.SetEnvironmentVariable(
                WorkshopRevenueExecutionHistoryStore.StateDirectoryEnvironmentVariable,
                previousStateDirectory);
            Environment.SetEnvironmentVariable(
                WorkshopEpochRevisedCalendarTimingPayloadStore.EpochStateDirectoryEnvironmentVariable,
                previousEpochStateDirectory);

            try
            {
                if (Directory.Exists(smokeStateDirectory))
                {
                    Directory.Delete(smokeStateDirectory, true);
                }

                if (Directory.Exists(smokeEpochStateDirectory))
                {
                    Directory.Delete(smokeEpochStateDirectory, true);
                }
            }
            catch (IOException)
            {
                // Smoke state is isolated under the temp directory and can be cleaned later.
            }
        }
    }

    private static void WriteEpochRevisedTimingExportFixture(string epochStateDirectory)
    {
        Directory.CreateDirectory(epochStateDirectory);

        WorkshopEpochRevisedCalendarTimingPayload payload =
            WorkshopEpochRevisedCalendarTimingPayload.FromEpochTimingProjection(
                "epoch-revised-timing-export-001",
                DateTimeOffset.UtcNow);

        JsonSerializerOptions jsonOptions = new()
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            WriteIndented = true
        };

        string path = Path.Combine(
            epochStateDirectory,
            WorkshopEpochRevisedCalendarTimingPayloadStore.PayloadFileName);
        File.WriteAllText(path, JsonSerializer.Serialize(new[] { payload }, jsonOptions));
    }
}
