export const WORKSHOP_LEDGER_KEY = "workshop.operatingLedger.v37";

const DEFAULT_EPOCH_TIMEZONE = "Asia/Tokyo";

export const serviceLaneOptions = [
  { value: "submission-review", label: "Submission Review", packageId: "pkg-submission-4" },
  { value: "premium-english-test-prep", label: "Premium English/Test Prep", packageId: "pkg-premium-program" },
  { value: "cohort-subscription", label: "Cohort Or Subscription Materials", packageId: "pkg-cohort-subscription" },
  { value: "tech-support", label: "Technical Support", packageId: "pkg-support-block" },
  { value: "crm-database-admin", label: "CRM, Database, Or Admin Systems", packageId: "pkg-systems-block" },
  { value: "workflow-build", label: "Workflow Or Web/App Build", packageId: "pkg-workflow-build" },
  { value: "operations-consulting", label: "Operations Consulting", packageId: "pkg-consulting" }
];

export const serviceLifecycleActionOptions = [
  { value: "change-scope", label: "Change service scope", status: "scope-change-requested" },
  { value: "cancel-service", label: "Cancel service request", status: "service-cancel-requested" },
  { value: "update-materials", label: "Update submitted materials", status: "materials-update-requested" },
  { value: "request-follow-up", label: "Request follow-up", status: "follow-up-requested" }
];

export const ageBandOptions = [
  { value: "adult", label: "19 or older" },
  { value: "under-19", label: "Under 19, compatibility review required" },
  { value: "business", label: "Business or organization" }
];

export const materialStatusOptions = [
  { value: "ready", label: "Ready to submit" },
  { value: "diagnostic", label: "Needs diagnostic first" },
  { value: "planning", label: "Needs service plan" }
];

export const initialWorkshopLedger = {
  version: 35,
  generatedAt: "2026-06-04T22:20:00+09:00",
  serviceRequests: [
    {
      id: "req-edu-submission-001",
      customer: "Adult writing client",
      ageBand: "adult",
      lane: "submission-review",
      packageId: "pkg-submission-4",
      materialStatus: "ready",
      status: "timing-confirmed",
      summary: "EIKEN writing draft review with structured next-action feedback.",
      valueJpy: 16000,
      epochTimeNeeded: true,
      customerSafeStatus: "Return timing is confirmed; WORKSHOP can proceed with the submission review.",
      operatorNextAction: "Assign the reviewer and complete the delivery result inside WORKSHOP.",
      createdAt: "2026-06-03T09:00:00+09:00"
    },
    {
      id: "req-crm-setup-001",
      customer: "Small business operator",
      ageBand: "business",
      lane: "crm-database-admin",
      packageId: "pkg-systems-block",
      materialStatus: "planning",
      status: "fit-review",
      summary: "CRM cleanup and simple delivery tracking setup.",
      valueJpy: 45000,
      epochTimeNeeded: false,
      customerSafeStatus: "Scope and fit review are in progress.",
      operatorNextAction: "Review the current workflow and propose the smallest useful setup plan.",
      createdAt: "2026-06-03T09:20:00+09:00"
    },
    {
      id: "req-cohort-001",
      customer: "Adult test-prep cohort",
      ageBand: "adult",
      lane: "cohort-subscription",
      packageId: "pkg-cohort-subscription",
      materialStatus: "diagnostic",
      status: "recurring-exception-action-required",
      summary: "Cohort interest for EIKEN, TOEIC, IELTS, TOEFL, and academic writing support.",
      valueJpy: 120000,
      epochTimeNeeded: true,
      customerSafeStatus: "Recurring cohort timing has one exception; WORKSHOP is preparing the next timing action.",
      operatorNextAction: "Review the recurring service timing update and send only the affected timing change to EPOCH.",
      createdAt: "2026-06-03T09:40:00+09:00"
    }
  ],
  packages: [
    {
      id: "pkg-submission-4",
      title: "Four Submission Review Pack",
      lane: "submission-review",
      price: "JPY 16,000 / 4 submissions",
      valueJpy: 16000,
      readiness: "available",
      lowerLabor: true,
      detail: "Teacher-reviewed writing or document feedback with a clear revision path."
    },
    {
      id: "pkg-premium-program",
      title: "Premium English And Test-Prep Program",
      lane: "premium-english-test-prep",
      price: "JPY 45,000+ monthly",
      valueJpy: 45000,
      readiness: "limited",
      lowerLabor: false,
      detail: "Personalized EIKEN 5 through 1, TOEIC, IELTS, TOEFL, academic, or professional English support."
    },
    {
      id: "pkg-cohort-subscription",
      title: "Cohort And Strategy Materials",
      lane: "cohort-subscription",
      price: "JPY 20,000+ monthly",
      valueJpy: 20000,
      readiness: "queued",
      lowerLabor: true,
      detail: "Small cohort review cycles, reusable study materials, and structured progress tracking."
    },
    {
      id: "pkg-support-block",
      title: "Technical Support Block",
      lane: "tech-support",
      price: "JPY 45,000+ block",
      valueJpy: 45000,
      readiness: "available",
      lowerLabor: true,
      detail: "Device, app, account, workflow, and small-operator support with documented handoff."
    },
    {
      id: "pkg-systems-block",
      title: "CRM, Database, And Admin Systems Block",
      lane: "crm-database-admin",
      price: "Scoped quote",
      valueJpy: 75000,
      readiness: "fit-review",
      lowerLabor: true,
      detail: "Practical setup or cleanup for records, dashboards, client tracking, and recurring admin work."
    },
    {
      id: "pkg-workflow-build",
      title: "Workflow Or Web/App Build",
      lane: "workflow-build",
      price: "Scoped quote",
      valueJpy: 120000,
      readiness: "fit-review",
      lowerLabor: true,
      detail: "Finished systems, automation, and customer-facing tools framed around the business result."
    },
    {
      id: "pkg-consulting",
      title: "Operations Consulting",
      lane: "operations-consulting",
      price: "Scoped quote",
      valueJpy: 90000,
      readiness: "fit-review",
      lowerLabor: false,
      detail: "Business process, planning, service delivery, and administration support where appropriate."
    }
  ],
  packageEligibility: [
    {
      id: "eligibility-submission-4",
      packageId: "pkg-submission-4",
      status: "available",
      customerOfferReady: true,
      lowerLaborDefault: true,
      acceptsDirectAdultIntake: true,
      acceptsDirectUnder19Intake: false,
      operatorNextAction: "Accept adult submission intake and route under-19 requests through compatibility review.",
      customerSafeStatus: "Submission review packs are available for adult learners and professional document work."
    },
    {
      id: "eligibility-premium-program",
      packageId: "pkg-premium-program",
      status: "fit-review",
      customerOfferReady: true,
      lowerLaborDefault: false,
      acceptsDirectAdultIntake: true,
      acceptsDirectUnder19Intake: false,
      operatorNextAction: "Use fit review before adding recurring live delivery time.",
      customerSafeStatus: "Premium programs are available after a short fit and scope review."
    },
    {
      id: "eligibility-cohort-subscription",
      packageId: "pkg-cohort-subscription",
      status: "queued",
      customerOfferReady: true,
      lowerLaborDefault: true,
      acceptsDirectAdultIntake: true,
      acceptsDirectUnder19Intake: false,
      operatorNextAction: "Cluster compatible adult demand before sending final timing to EPOCH.",
      customerSafeStatus: "Cohort and materials access can be requested; timing is confirmed after demand clusters."
    },
    {
      id: "eligibility-systems-block",
      packageId: "pkg-systems-block",
      status: "fit-review",
      customerOfferReady: true,
      lowerLaborDefault: true,
      acceptsDirectAdultIntake: true,
      acceptsDirectUnder19Intake: false,
      operatorNextAction: "Confirm the smallest useful system scope before quoting delivery.",
      customerSafeStatus: "Systems and CRM work is available after scope review."
    }
  ],
  marketResearchRecords: [
    {
      id: "market-eiken-writing-001",
      sourceLabel: "EIKEN official grade and skills map",
      sourceUrl: "https://www.eiken.or.jp/eiken/en/grades/",
      segment: "adult-test-prep",
      observedGap: "EIKEN spans 5 through 1, so WORKSHOP should offer broad test-prep lanes instead of only Pre-1.",
      confidenceScore: 86,
      evidenceReady: true,
      customerVisible: false,
      webportalExportReady: false
    },
    {
      id: "market-sme-workflow-001",
      sourceLabel: "Japan SME workflow and AI adoption caution",
      sourceUrl: "https://global.rakuten.com/corp/news/press/2025/0129_01.html",
      segment: "small-business-systems",
      observedGap: "Outcome-led CRM/admin workflow offers can sell structure without leading with AI terminology.",
      confidenceScore: 78,
      evidenceReady: true,
      customerVisible: false,
      webportalExportReady: false
    }
  ],
  competitorPriceAnchors: [
    {
      id: "price-anchor-low-cost-writing-001",
      competitor: "Low-cost automated correction tools",
      offerLabel: "generic writing correction",
      lowPriceJpy: 480,
      premiumPriceJpy: 5000,
      sourceUrl: "https://www.eikendojo.com/",
      evidenceReady: true,
      customerVisible: false,
      webportalExportReady: false
    },
    {
      id: "price-anchor-premium-testprep-001",
      competitor: "Premium private online exam support",
      offerLabel: "private writing/test-prep support",
      lowPriceJpy: 31680,
      premiumPriceJpy: 45760,
      sourceUrl: "https://www.eltschool.jp/en/price?purpose=eiken_basic",
      evidenceReady: true,
      customerVisible: false,
      webportalExportReady: false
    }
  ],
  offerExperiments: [
    {
      id: "offer-experiment-submission-001",
      offerLabel: "Adult Submission Review Pack",
      lane: "submission-review",
      status: "available",
      expectedMonthlyRevenueJpy: 160000,
      expectedOperatorMinutes: 480,
      lowLaborScore: 92,
      customerVisible: true,
      nextAction: "List the offer through the Webportal intake and keep delivery async-first."
    },
    {
      id: "offer-experiment-systems-001",
      offerLabel: "Small Operator CRM Cleanup",
      lane: "crm-database-admin",
      status: "fit-review",
      expectedMonthlyRevenueJpy: 225000,
      expectedOperatorMinutes: 720,
      lowLaborScore: 84,
      customerVisible: true,
      nextAction: "Test one scoped systems block with a fixed review checklist."
    }
  ],
  laborEstimates: [
    {
      id: "labor-estimate-submission-001",
      offerExperimentId: "offer-experiment-submission-001",
      prepMinutes: 60,
      liveMinutes: 0,
      reviewMinutes: 240,
      adminMinutes: 60,
      expectedRevenueJpy: 160000,
      araMinutesSaved: 180,
      laborTrapWarning: false,
      customerVisible: false,
      webportalExportReady: false
    },
    {
      id: "labor-estimate-live-heavy-001",
      offerExperimentId: "offer-experiment-live-heavy-001",
      prepMinutes: 90,
      liveMinutes: 960,
      reviewMinutes: 120,
      adminMinutes: 120,
      expectedRevenueJpy: 180000,
      araMinutesSaved: 60,
      laborTrapWarning: true,
      customerVisible: false,
      webportalExportReady: false
    }
  ],
  roiRecords: [
    {
      id: "roi-submission-001",
      offerExperimentId: "offer-experiment-submission-001",
      expectedRevenueJpy: 160000,
      expectedCostJpy: 20000,
      expectedOperatorMinutes: 480,
      paybackDays: 7,
      approvedForTest: true,
      customerVisible: false,
      webportalExportReady: false
    },
    {
      id: "roi-live-heavy-001",
      offerExperimentId: "offer-experiment-live-heavy-001",
      expectedRevenueJpy: 180000,
      expectedCostJpy: 50000,
      expectedOperatorMinutes: 1290,
      paybackDays: 30,
      approvedForTest: false,
      customerVisible: false,
      webportalExportReady: false
    }
  ],
  revenueAuditRecords: [
    {
      id: "revenue-audit-submission-001",
      linkedOfferId: "offer-experiment-submission-001",
      status: "available",
      lowLaborViable: true,
      customerVisible: false,
      summary: "Revenue Audit product module marks submission packs as the fastest low-labor test lane."
    },
    {
      id: "revenue-audit-live-heavy-001",
      linkedOfferId: "offer-experiment-live-heavy-001",
      status: "blocked",
      lowLaborViable: false,
      customerVisible: false,
      summary: "Live-heavy classes are blocked as a default lane because they risk recreating a labor trap."
    }
  ],
  revenueReceipts: [
    {
      id: "revenue-receipt-submission-001",
      kind: "revenue-experiment",
      linkedRecordId: "offer-experiment-submission-001",
      status: "queued",
      customerVisible: true,
      summary: "Revenue Receipts product module recorded a testable async submission offer."
    }
  ],
  deliveryLogEntries: [
    {
      id: "delivery-log-submission-001",
      serviceRequestId: "req-edu-submission-001",
      eventKind: "submission-review-queued",
      status: "timing-confirmed",
      productLog: true,
      monitorRunnerLog: false,
      summary: "Delivery Log product module recorded a customer-safe submission workflow."
    }
  ],
  revenueSearchQueries: [
    {
      id: "revenue-search-001",
      query: "submission",
      role: "owner",
      includePrivateRecords: true,
      customerSafeOnly: false,
      status: "available"
    },
    {
      id: "revenue-search-002",
      query: "submission",
      role: "client",
      includePrivateRecords: false,
      customerSafeOnly: true,
      status: "available"
    }
  ],
  revenueSearchResults: [
    {
      id: "revenue-result-001",
      queryId: "revenue-search-002",
      recordId: "pkg-submission-4",
      recordKind: "offer-template",
      displayLabel: "Four Submission Review Pack",
      customerVisible: true
    }
  ],
  offerTemplates: [
    {
      id: "offer-template-submission-001",
      offerLabel: "Four Submission Review Pack",
      lane: "submission-review",
      defaultPriceLabel: "JPY 16,000 / 4 submissions",
      under19GuardRequired: true,
      customerVisible: true,
      customerSafeStatus: "Async writing or document review with structured feedback and a clear next action."
    },
    {
      id: "offer-template-systems-001",
      offerLabel: "Small Operator CRM Cleanup",
      lane: "crm-database-admin",
      defaultPriceLabel: "Scoped quote",
      under19GuardRequired: false,
      customerVisible: true,
      customerSafeStatus: "Practical setup or cleanup for records, follow-ups, and recurring admin work."
    }
  ],
  servicePages: [
    {
      id: "service-page-submission-001",
      title: "Adult Submission Review Pack",
      audience: "Adults, university students, and professionals who need written work reviewed without live lesson overhead.",
      promise: "Structured correction, revision priorities, and next-action notes for English writing or document submissions.",
      relatedPackageId: "pkg-submission-4",
      relatedOfferTemplateId: "offer-template-submission-001",
      relatedEpochScheduleTemplateId: "EPOCH-SCHEDULE-TEMPLATE-001",
      publicStatus: "ready",
      japanCopyMode: "ai-neutral",
      customerVisible: true,
      intakeCta: "Request a submission review",
      customerSafeStatus: "Submission review is available as an async-first service path with clear turnaround and customer-safe status updates."
    },
    {
      id: "service-page-systems-001",
      title: "Small Operator CRM And Admin Cleanup",
      audience: "Small operators who need cleaner customer records, follow-up tracking, and practical admin workflow support.",
      promise: "A scoped cleanup plan that turns scattered records into a simple follow-up and delivery tracking workflow.",
      relatedPackageId: "pkg-systems-block",
      relatedOfferTemplateId: "offer-template-systems-001",
      relatedEpochScheduleTemplateId: "EPOCH-SCHEDULE-TEMPLATE-003",
      publicStatus: "fit-review",
      japanCopyMode: "ai-neutral",
      customerVisible: true,
      intakeCta: "Request a systems review",
      customerSafeStatus: "Systems cleanup is available after a short scope and fit review."
    }
  ],
  materialAssets: [
    {
      id: "material-asset-eiken-writing-rubric-001",
      title: "Adult EIKEN Writing Review Rubric",
      assetKind: "rubric",
      linkedOfferId: "offer-experiment-submission-001",
      reuseCount: 4,
      customerVisible: false,
      araDraftReady: true,
      humanReviewRequired: true,
      lowLaborLeverage: "high",
      customerSafeSummary: "A reusable review rubric supports consistent writing feedback without turning the offer into live-class labor."
    },
    {
      id: "material-asset-crm-cleanup-checklist-001",
      title: "Small Operator CRM Cleanup Checklist",
      assetKind: "checklist",
      linkedOfferId: "offer-experiment-systems-001",
      reuseCount: 3,
      customerVisible: false,
      araDraftReady: true,
      humanReviewRequired: true,
      lowLaborLeverage: "high",
      customerSafeSummary: "A reusable systems checklist keeps scope reviews repeatable and easier to delegate."
    }
  ],
  marketingChannelExperiments: [
    {
      id: "marketing-channel-direct-referral-001",
      channel: "direct-referral",
      linkedServicePageId: "service-page-submission-001",
      targetSegment: "adult-test-prep",
      status: "ready-to-list",
      expectedLeadsPerMonth: 6,
      expectedConversionRatePercent: 35,
      expectedMonthlyRevenueJpy: 96000,
      operatorMinutesPerLead: 12,
      aiForwardCopy: false,
      nextAction: "Prepare direct referral copy that sells structure, turnaround, and review quality without leading with AI."
    },
    {
      id: "marketing-channel-local-business-001",
      channel: "small-business-outreach",
      linkedServicePageId: "service-page-systems-001",
      targetSegment: "small-business-systems",
      status: "research",
      expectedLeadsPerMonth: 4,
      expectedConversionRatePercent: 25,
      expectedMonthlyRevenueJpy: 75000,
      operatorMinutesPerLead: 20,
      aiForwardCopy: false,
      nextAction: "Build a short local business systems audit message focused on follow-up clarity and admin cleanup."
    }
  ],
  offerLaunchReadinessRecords: [
    {
      id: "launch-readiness-submission-001",
      servicePageId: "service-page-submission-001",
      packageId: "pkg-submission-4",
      offerExperimentId: "offer-experiment-submission-001",
      marketingChannelExperimentId: "marketing-channel-direct-referral-001",
      lane: "submission-review",
      launchStage: "ready-to-list",
      launchPriorityRank: 1,
      timeToCashDays: 3,
      expectedMonthlyRevenueJpy: 160000,
      expectedOperatorMinutes: 480,
      cashSpeedScore: 94,
      laborLeverageScore: 91,
      proofReadinessScore: 88,
      marketDemandScore: 86,
      launchPriorityScore: 90,
      japanCopyMode: "ai-neutral",
      aiForwardCopy: false,
      under19GuardRequired: true,
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      humanReviewRequired: true,
      operatorNextAction: "Publish the adult submission review service page first, route under-19 requests through compatibility review, and keep delivery async-first.",
      customerSafeStatus: "Adult submission review is ready to request with clear turnaround, structured feedback, and compatibility review for under-19 requests."
    },
    {
      id: "launch-readiness-systems-001",
      servicePageId: "service-page-systems-001",
      packageId: "pkg-systems-block",
      offerExperimentId: "offer-experiment-systems-001",
      marketingChannelExperimentId: "marketing-channel-local-business-001",
      lane: "crm-database-admin",
      launchStage: "scope-review",
      launchPriorityRank: 2,
      timeToCashDays: 10,
      expectedMonthlyRevenueJpy: 225000,
      expectedOperatorMinutes: 720,
      cashSpeedScore: 78,
      laborLeverageScore: 84,
      proofReadinessScore: 82,
      marketDemandScore: 78,
      launchPriorityScore: 81,
      japanCopyMode: "ai-neutral",
      aiForwardCopy: false,
      under19GuardRequired: false,
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      humanReviewRequired: true,
      operatorNextAction: "List the systems review as a scope-first service and keep CRM strategy, pricing experiments, and internal workflow notes inside the App.",
      customerSafeStatus: "Small-operator systems cleanup is ready for scope review with practical follow-up and delivery tracking support."
    }
  ],
  offerLaunchReadinessReceipts: [
    {
      id: "launch-receipt-submission-001",
      kind: "offer-launch-readiness",
      status: "customer-safe-offer-launch-ready",
      servicePageId: "service-page-submission-001",
      packageId: "pkg-submission-4",
      lane: "submission-review",
      offerLabel: "Adult Submission Review Pack",
      publicStatus: "ready",
      priceLabel: "JPY 16,000 / 4 submissions",
      intakeCta: "Request a submission review",
      customerSafeMessage: "Adult submission review is open for async writing or document feedback with structured next-action notes.",
      nextAction: "Send the writing or document material through WORKSHOP intake. EPOCH timing is requested only if a deadline or appointment is needed.",
      customerSafe: true,
      customerVisible: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      aiForwardCopy: false,
      under19GuardRequired: true
    },
    {
      id: "launch-receipt-systems-001",
      kind: "offer-launch-readiness",
      status: "customer-safe-offer-launch-ready",
      servicePageId: "service-page-systems-001",
      packageId: "pkg-systems-block",
      lane: "crm-database-admin",
      offerLabel: "Small Operator CRM And Admin Cleanup",
      publicStatus: "scope-review",
      priceLabel: "Scoped quote",
      intakeCta: "Request a systems review",
      customerSafeMessage: "Systems cleanup is available as a scope-first service for follow-up tracking, customer records, and recurring admin workflow clarity.",
      nextAction: "Request a short scope review through WORKSHOP. EPOCH timing is used only if a planning appointment is needed.",
      customerSafe: true,
      customerVisible: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      aiForwardCopy: false,
      under19GuardRequired: false
    }
  ],
  offerLaunchIntakeActions: [
    {
      id: "launch-intake-action-submission-001",
      requestId: "launch-intake-submission-001",
      sourceReceiptId: "launch-receipt-submission-001",
      kind: "offer-launch-intake-action",
      status: "offer-launch-intake-queued",
      customer: "Adult writing prospect",
      ageBand: "adult",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      materialStatus: "ready",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      requestSummary: "Request the launch-ready submission review path for a writing draft.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedIntakeState: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      customerSafeStatus: "WORKSHOP received the launch-ready offer request and queued it for intake review. EPOCH timing is used only if a deadline or appointment is needed.",
      operatorNextAction: "Review the launch offer intake request inside WORKSHOP, apply the under-19 compatibility gate if needed, and convert it into service delivery only after approval.",
      createdAt: "2026-06-04T12:20:00+09:00"
    }
  ],
  offerLaunchIntakeReceipts: [
    {
      id: "launch-intake-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-intake",
      status: "customer-safe-offer-launch-intake-queued",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerSafeMessage: "Your launch-ready WORKSHOP offer request is queued for intake review.",
      nextAction: "WORKSHOP will review the request and ask EPOCH for timing only if a deadline, appointment, or reminder is needed.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedIntakeState: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T12:20:00+09:00"
    }
  ],
  offerLaunchActivations: [
    {
      id: "launch-activation-submission-001",
      intakeReceiptId: "launch-intake-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-activation",
      status: "offer-launch-activation-ready",
      activationPath: "adult-service-delivery-setup",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP accepted the launch-ready offer intake for service setup. EPOCH remains timing-provider-only.",
      operatorNextAction: "Prepare the delivery workspace, reusable material path, and service request handoff inside WORKSHOP before exporting only the customer-safe activation receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedActivationState: true,
      appOwnedIntakeState: true,
      activationReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T12:24:00+09:00"
    }
  ],
  offerLaunchActivationReceipts: [
    {
      id: "launch-activation-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-activation",
      status: "customer-safe-offer-launch-activation-ready",
      activationPath: "adult-service-delivery-setup",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP offer path is accepted for service setup. EPOCH is used only for timing if a deadline or appointment becomes necessary.",
      nextAction: "WORKSHOP will prepare service setup without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedActivationState: true,
      appOwnedIntakeState: true,
      activationReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T12:24:00+09:00"
    }
  ],
  offerLaunchServiceSetups: [
    {
      id: "launch-service-setup-submission-001",
      activationReceiptId: "launch-activation-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-service-setup",
      status: "offer-launch-service-setup-ready",
      setupPath: "adult-service-delivery-workspace",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP prepared the service setup lane after launch activation. EPOCH remains timing-provider-only.",
      operatorNextAction: "Create the delivery workspace, assign reusable materials, and keep only the customer-safe setup receipt available for Webportal import.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedSetupState: true,
      appOwnedActivationState: true,
      setupReady: true,
      activationReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T12:28:00+09:00"
    }
  ],
  offerLaunchServiceSetupReceipts: [
    {
      id: "launch-service-setup-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-service-setup",
      status: "customer-safe-offer-launch-service-setup-ready",
      setupPath: "adult-service-delivery-workspace",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP service setup is prepared. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed.",
      nextAction: "WORKSHOP will continue delivery setup without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedSetupState: true,
      appOwnedActivationState: true,
      setupReady: true,
      activationReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T12:28:00+09:00"
    }
  ],
  offerLaunchDeliveryWorkspaces: [
    {
      id: "launch-delivery-workspace-submission-001",
      setupReceiptId: "launch-service-setup-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-workspace",
      status: "offer-launch-delivery-workspace-ready",
      workspacePath: "adult-service-delivery-workspace-active",
      setupPath: "adult-service-delivery-workspace",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP prepared the delivery workspace after service setup. EPOCH remains timing-provider-only.",
      operatorNextAction: "Assign reusable materials, delivery checklist, and review queue inside WORKSHOP, then export only the customer-safe workspace receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedWorkspaceState: true,
      appOwnedSetupState: true,
      workspaceReady: true,
      setupReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T12:32:00+09:00"
    }
  ],
  offerLaunchDeliveryWorkspaceReceipts: [
    {
      id: "launch-delivery-workspace-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-workspace",
      status: "customer-safe-offer-launch-delivery-workspace-ready",
      workspacePath: "adult-service-delivery-workspace-active",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP delivery workspace is ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed.",
      nextAction: "WORKSHOP will continue delivery in the prepared workspace without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedWorkspaceState: true,
      appOwnedSetupState: true,
      workspaceReady: true,
      setupReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T12:32:00+09:00"
    }
  ],
  offerLaunchDeliveryKickoffs: [
    {
      id: "launch-delivery-kickoff-submission-001",
      workspaceReceiptId: "launch-delivery-workspace-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-kickoff",
      status: "offer-launch-delivery-kickoff-ready",
      kickoffPath: "adult-service-delivery-kickoff-active",
      workspacePath: "adult-service-delivery-workspace-active",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP moved the prepared delivery workspace into kickoff. EPOCH remains timing-provider-only.",
      operatorNextAction: "Start the first delivery milestone, assign the review queue, and export only the customer-safe kickoff receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedKickoffState: true,
      appOwnedWorkspaceState: true,
      kickoffReady: true,
      workspaceReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T19:10:00+09:00"
    }
  ],
  offerLaunchDeliveryKickoffReceipts: [
    {
      id: "launch-delivery-kickoff-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-kickoff",
      status: "customer-safe-offer-launch-delivery-kickoff-ready",
      kickoffPath: "adult-service-delivery-kickoff-active",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP delivery kickoff is ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed.",
      nextAction: "WORKSHOP will begin the first delivery milestone without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedKickoffState: true,
      appOwnedWorkspaceState: true,
      kickoffReady: true,
      workspaceReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T19:10:00+09:00"
    }
  ],
  offerLaunchDeliveryMilestones: [
    {
      id: "launch-delivery-milestone-submission-001",
      kickoffReceiptId: "launch-delivery-kickoff-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-milestone",
      status: "offer-launch-delivery-milestone-active",
      milestonePath: "adult-service-first-delivery-milestone-active",
      kickoffPath: "adult-service-delivery-kickoff-active",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP started the first delivery milestone. EPOCH remains timing-provider-only.",
      operatorNextAction: "Complete the first delivery milestone review and export only the customer-safe milestone receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedMilestoneState: true,
      appOwnedKickoffState: true,
      milestoneReady: true,
      kickoffReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T20:05:00+09:00"
    }
  ],
  offerLaunchDeliveryMilestoneReceipts: [
    {
      id: "launch-delivery-milestone-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-milestone",
      status: "customer-safe-offer-launch-delivery-milestone-active",
      milestonePath: "adult-service-first-delivery-milestone-active",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your first WORKSHOP delivery milestone is active. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed.",
      nextAction: "WORKSHOP will continue the first milestone without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedMilestoneState: true,
      appOwnedKickoffState: true,
      milestoneReady: true,
      kickoffReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T20:05:00+09:00"
    }
  ],
  offerLaunchDeliveryOutcomes: [
    {
      id: "launch-delivery-outcome-submission-001",
      milestoneReceiptId: "launch-delivery-milestone-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-outcome",
      status: "offer-launch-delivery-outcome-ready",
      outcomePath: "adult-service-launch-delivery-outcome-ready",
      milestonePath: "adult-service-first-delivery-milestone-active",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP completed the first delivery outcome and can review follow-up or renewal options. EPOCH remains timing-provider-only.",
      operatorNextAction: "Review outcome evidence and export only the customer-safe delivery outcome receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedOutcomeState: true,
      appOwnedMilestoneState: true,
      outcomeReady: true,
      milestoneReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T20:20:00+09:00"
    }
  ],
  offerLaunchDeliveryOutcomeReceipts: [
    {
      id: "launch-delivery-outcome-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-outcome",
      status: "customer-safe-offer-launch-delivery-outcome-ready",
      outcomePath: "adult-service-launch-delivery-outcome-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your first WORKSHOP delivery outcome is ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed.",
      nextAction: "WORKSHOP will review follow-up or renewal options without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedOutcomeState: true,
      appOwnedMilestoneState: true,
      outcomeReady: true,
      milestoneReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T20:20:00+09:00"
    }
  ],
  offerLaunchDeliveryFollowUps: [
    {
      id: "launch-delivery-follow-up-submission-001",
      outcomeReceiptId: "launch-delivery-outcome-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-follow-up",
      status: "offer-launch-delivery-follow-up-ready",
      followUpPath: "adult-service-launch-delivery-follow-up-ready",
      outcomePath: "adult-service-launch-delivery-outcome-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP prepared follow-up, renewal, and referral review from the completed launch delivery outcome. EPOCH remains timing-provider-only.",
      operatorNextAction: "Review follow-up, renewal, and referral options, then export only the customer-safe delivery follow-up receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedFollowUpState: true,
      appOwnedOutcomeState: true,
      followUpReady: true,
      renewalReady: true,
      referralReady: true,
      outcomeReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T20:35:00+09:00"
    }
  ],
  offerLaunchDeliveryFollowUpReceipts: [
    {
      id: "launch-delivery-follow-up-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-follow-up",
      status: "customer-safe-offer-launch-delivery-follow-up-ready",
      followUpPath: "adult-service-launch-delivery-follow-up-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP follow-up options are ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed.",
      nextAction: "WORKSHOP will review renewal or referral options without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedFollowUpState: true,
      appOwnedOutcomeState: true,
      followUpReady: true,
      renewalReady: true,
      referralReady: true,
      outcomeReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T20:35:00+09:00"
    }
  ],
  offerLaunchDeliveryGrowthPlans: [
    {
      id: "launch-delivery-growth-plan-submission-001",
      followUpReceiptId: "launch-delivery-follow-up-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-growth-plan",
      status: "offer-launch-delivery-growth-plan-ready",
      growthPlanPath: "adult-service-launch-delivery-growth-plan-ready",
      followUpPath: "adult-service-launch-delivery-follow-up-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP prepared repeat-service, renewal, and referral planning from customer-safe follow-up status. EPOCH remains timing-provider-only.",
      operatorNextAction: "Choose the repeat-service, renewal, or referral motion inside WORKSHOP, then export only the customer-safe delivery growth-plan receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedGrowthPlanState: true,
      appOwnedFollowUpState: true,
      followUpReady: true,
      renewalReady: true,
      referralReady: true,
      repeatServiceReady: true,
      growthPlanReady: true,
      outcomeReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T20:50:00+09:00"
    }
  ],
  offerLaunchDeliveryGrowthPlanReceipts: [
    {
      id: "launch-delivery-growth-plan-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-growth-plan",
      status: "customer-safe-offer-launch-delivery-growth-plan-ready",
      growthPlanPath: "adult-service-launch-delivery-growth-plan-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP repeat-service, renewal, and referral options are ready for review. EPOCH will be used only if timing is needed.",
      nextAction: "WORKSHOP will review the next repeat-service, renewal, or referral motion without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedGrowthPlanState: true,
      appOwnedFollowUpState: true,
      followUpReady: true,
      renewalReady: true,
      referralReady: true,
      repeatServiceReady: true,
      growthPlanReady: true,
      outcomeReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T20:50:00+09:00"
    }
  ],
  offerLaunchDeliveryGrowthPlanAcceptances: [
    {
      id: "launch-delivery-growth-plan-acceptance-submission-001",
      growthPlanReceiptId: "launch-delivery-growth-plan-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-growth-plan-acceptance",
      status: "offer-launch-delivery-growth-plan-acceptance-ready",
      acceptancePath: "adult-service-launch-delivery-growth-plan-accepted",
      growthPlanPath: "adult-service-launch-delivery-growth-plan-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP prepared customer-safe repeat-service, renewal, and referral acceptance from the growth-plan receipt. EPOCH remains timing-provider-only.",
      operatorNextAction: "Confirm the accepted repeat-service, renewal, or referral motion inside WORKSHOP, then export only the customer-safe delivery growth-plan acceptance receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedAcceptanceState: true,
      appOwnedGrowthPlanState: true,
      growthPlanReady: true,
      repeatServiceAccepted: true,
      renewalAccepted: true,
      referralAccepted: true,
      acceptanceReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T21:20:00+09:00"
    }
  ],
  offerLaunchDeliveryGrowthPlanAcceptanceReceipts: [
    {
      id: "launch-delivery-growth-plan-acceptance-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-growth-plan-acceptance",
      status: "customer-safe-offer-launch-delivery-growth-plan-acceptance-ready",
      acceptancePath: "adult-service-launch-delivery-growth-plan-accepted",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP repeat-service, renewal, or referral path has been accepted for the next delivery step. EPOCH will be used only if timing is needed.",
      nextAction: "WORKSHOP will prepare the accepted next service motion without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedAcceptanceState: true,
      appOwnedGrowthPlanState: true,
      growthPlanReady: true,
      repeatServiceAccepted: true,
      renewalAccepted: true,
      referralAccepted: true,
      acceptanceReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T21:20:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionRequests: [
    {
      id: "launch-delivery-expansion-request-submission-001",
      acceptanceReceiptId: "launch-delivery-growth-plan-acceptance-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-request",
      status: "offer-launch-delivery-expansion-request-ready",
      expansionPath: "adult-service-launch-delivery-expansion-request-ready",
      acceptancePath: "adult-service-launch-delivery-growth-plan-accepted",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP prepared the accepted repeat-service, renewal, or referral motion as an App-owned expansion request. EPOCH remains timing-provider-only.",
      operatorNextAction: "Prepare the next-service delivery workspace or intake inside WORKSHOP, then export only the customer-safe delivery expansion-request receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedExpansionRequestState: true,
      appOwnedAcceptanceState: true,
      acceptanceReady: true,
      repeatServiceRequested: true,
      renewalRequested: true,
      referralRequested: true,
      expansionRequestReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T21:50:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionRequestReceipts: [
    {
      id: "launch-delivery-expansion-request-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-request",
      status: "customer-safe-offer-launch-delivery-expansion-request-ready",
      expansionPath: "adult-service-launch-delivery-expansion-request-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP repeat-service, renewal, or referral request is ready for the next service step. EPOCH will be used only if timing is needed.",
      nextAction: "WORKSHOP will prepare the next service step without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedExpansionRequestState: true,
      appOwnedAcceptanceState: true,
      acceptanceReady: true,
      repeatServiceRequested: true,
      renewalRequested: true,
      referralRequested: true,
      expansionRequestReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T21:50:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionWorkspaces: [
    {
      id: "launch-delivery-expansion-workspace-submission-001",
      expansionRequestReceiptId: "launch-delivery-expansion-request-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-workspace",
      status: "offer-launch-delivery-expansion-workspace-ready",
      expansionWorkspacePath: "adult-service-launch-delivery-expansion-workspace-ready",
      expansionPath: "adult-service-launch-delivery-expansion-request-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP prepared the next-service expansion workspace. EPOCH remains timing-provider-only.",
      operatorNextAction: "Assign the next-service delivery plan inside WORKSHOP, then export only the customer-safe expansion workspace receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedExpansionWorkspaceState: true,
      appOwnedExpansionRequestState: true,
      expansionRequestReady: true,
      repeatServiceRequested: true,
      renewalRequested: true,
      referralRequested: true,
      expansionWorkspaceReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T22:20:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionWorkspaceReceipts: [
    {
      id: "launch-delivery-expansion-workspace-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-workspace",
      status: "customer-safe-offer-launch-delivery-expansion-workspace-ready",
      expansionWorkspacePath: "adult-service-launch-delivery-expansion-workspace-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP next-service workspace is ready. EPOCH will be used only if timing is needed.",
      nextAction: "WORKSHOP will continue the next service step inside the expansion workspace without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedExpansionWorkspaceState: true,
      appOwnedExpansionRequestState: true,
      expansionRequestReady: true,
      repeatServiceRequested: true,
      renewalRequested: true,
      referralRequested: true,
      expansionWorkspaceReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-04T22:20:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionKickoffs: [
    {
      id: "launch-delivery-expansion-kickoff-submission-001",
      expansionWorkspaceReceiptId: "launch-delivery-expansion-workspace-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-kickoff",
      status: "offer-launch-delivery-expansion-kickoff-ready",
      expansionKickoffPath: "adult-service-launch-delivery-expansion-kickoff-active",
      expansionWorkspacePath: "adult-service-launch-delivery-expansion-workspace-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP moved the next-service expansion workspace into kickoff. EPOCH remains timing-provider-only.",
      operatorNextAction: "Begin the next-service delivery kickoff inside WORKSHOP, then export only the customer-safe expansion kickoff receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedExpansionKickoffState: true,
      appOwnedExpansionWorkspaceState: true,
      expansionKickoffReady: true,
      expansionWorkspaceReady: true,
      repeatServiceRequested: true,
      renewalRequested: true,
      referralRequested: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T00:30:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionKickoffReceipts: [
    {
      id: "launch-delivery-expansion-kickoff-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-kickoff",
      status: "customer-safe-offer-launch-delivery-expansion-kickoff-ready",
      expansionKickoffPath: "adult-service-launch-delivery-expansion-kickoff-active",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP next-service kickoff is ready. EPOCH will be used only if timing is needed.",
      nextAction: "WORKSHOP will begin the next service milestone without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedExpansionKickoffState: true,
      appOwnedExpansionWorkspaceState: true,
      expansionKickoffReady: true,
      expansionWorkspaceReady: true,
      repeatServiceRequested: true,
      renewalRequested: true,
      referralRequested: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T00:30:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionMilestones: [
    {
      id: "launch-delivery-expansion-milestone-submission-001",
      expansionKickoffReceiptId: "launch-delivery-expansion-kickoff-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-milestone",
      status: "offer-launch-delivery-expansion-milestone-active",
      expansionMilestonePath: "adult-service-launch-delivery-expansion-milestone-active",
      expansionKickoffPath: "adult-service-launch-delivery-expansion-kickoff-active",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP started the next-service delivery milestone. EPOCH remains timing-provider-only.",
      operatorNextAction: "Complete the next-service delivery milestone review and export only the customer-safe expansion milestone receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedExpansionMilestoneState: true,
      appOwnedExpansionKickoffState: true,
      expansionMilestoneReady: true,
      expansionKickoffReady: true,
      repeatServiceRequested: true,
      renewalRequested: true,
      referralRequested: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T01:10:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionMilestoneReceipts: [
    {
      id: "launch-delivery-expansion-milestone-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-milestone",
      status: "customer-safe-offer-launch-delivery-expansion-milestone-active",
      expansionMilestonePath: "adult-service-launch-delivery-expansion-milestone-active",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP next-service delivery milestone is active. EPOCH will be used only if timing is needed.",
      nextAction: "WORKSHOP will continue the next service milestone without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedExpansionMilestoneState: true,
      appOwnedExpansionKickoffState: true,
      expansionMilestoneReady: true,
      expansionKickoffReady: true,
      repeatServiceRequested: true,
      renewalRequested: true,
      referralRequested: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T01:10:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionOutcomes: [
    {
      id: "launch-delivery-expansion-outcome-submission-001",
      expansionMilestoneReceiptId: "launch-delivery-expansion-milestone-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-outcome",
      status: "offer-launch-delivery-expansion-outcome-ready",
      expansionOutcomePath: "adult-service-launch-delivery-expansion-outcome-ready",
      expansionMilestonePath: "adult-service-launch-delivery-expansion-milestone-active",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP completed the next-service delivery outcome and can review follow-up, renewal, or referral options. EPOCH remains timing-provider-only.",
      operatorNextAction: "Review expansion outcome evidence and export only the customer-safe expansion outcome receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedExpansionOutcomeState: true,
      appOwnedExpansionMilestoneState: true,
      expansionOutcomeReady: true,
      expansionMilestoneReady: true,
      repeatServiceRequested: true,
      renewalRequested: true,
      referralRequested: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T01:35:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionOutcomeReceipts: [
    {
      id: "launch-delivery-expansion-outcome-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-outcome",
      status: "customer-safe-offer-launch-delivery-expansion-outcome-ready",
      expansionOutcomePath: "adult-service-launch-delivery-expansion-outcome-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP next-service delivery outcome is ready. EPOCH will be used only if timing is needed.",
      nextAction: "WORKSHOP will review the next service follow-up, renewal, or referral path without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedExpansionOutcomeState: true,
      appOwnedExpansionMilestoneState: true,
      expansionOutcomeReady: true,
      expansionMilestoneReady: true,
      repeatServiceRequested: true,
      renewalRequested: true,
      referralRequested: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T01:35:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionFollowUps: [
    {
      id: "launch-delivery-expansion-follow-up-submission-001",
      expansionOutcomeReceiptId: "launch-delivery-expansion-outcome-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-follow-up",
      status: "offer-launch-delivery-expansion-follow-up-ready",
      expansionFollowUpPath: "adult-service-launch-delivery-expansion-follow-up-ready",
      expansionOutcomePath: "adult-service-launch-delivery-expansion-outcome-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP prepared next-service follow-up, renewal, and referral review from the expansion outcome. EPOCH remains timing-provider-only.",
      operatorNextAction: "Review the repeat-service, renewal, and referral path, then export only the customer-safe expansion follow-up receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedExpansionFollowUpState: true,
      appOwnedExpansionOutcomeState: true,
      expansionFollowUpReady: true,
      expansionOutcomeReady: true,
      repeatServiceReady: true,
      renewalReady: true,
      referralReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T02:05:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionFollowUpReceipts: [
    {
      id: "launch-delivery-expansion-follow-up-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-follow-up",
      status: "customer-safe-offer-launch-delivery-expansion-follow-up-ready",
      expansionFollowUpPath: "adult-service-launch-delivery-expansion-follow-up-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP next-service follow-up options are ready. EPOCH will be used only if timing is needed.",
      nextAction: "WORKSHOP will review repeat-service, renewal, or referral options without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedExpansionFollowUpState: true,
      appOwnedExpansionOutcomeState: true,
      expansionFollowUpReady: true,
      expansionOutcomeReady: true,
      repeatServiceReady: true,
      renewalReady: true,
      referralReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T02:05:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionGrowthPlans: [
    {
      id: "launch-delivery-expansion-growth-plan-submission-001",
      expansionFollowUpReceiptId: "launch-delivery-expansion-follow-up-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-growth-plan",
      status: "offer-launch-delivery-expansion-growth-plan-ready",
      expansionGrowthPlanPath: "adult-service-launch-delivery-expansion-growth-plan-ready",
      expansionFollowUpPath: "adult-service-launch-delivery-expansion-follow-up-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP prepared next-service repeat-service, renewal, and referral growth planning from the expansion follow-up. EPOCH remains timing-provider-only.",
      operatorNextAction: "Choose the repeat-service, renewal, or referral motion, then export only the customer-safe expansion growth-plan receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedExpansionGrowthPlanState: true,
      appOwnedExpansionFollowUpState: true,
      expansionFollowUpReady: true,
      repeatServiceReady: true,
      renewalReady: true,
      referralReady: true,
      expansionGrowthPlanReady: true,
      expansionOutcomeReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T02:35:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionGrowthPlanReceipts: [
    {
      id: "launch-delivery-expansion-growth-plan-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-growth-plan",
      status: "customer-safe-offer-launch-delivery-expansion-growth-plan-ready",
      expansionGrowthPlanPath: "adult-service-launch-delivery-expansion-growth-plan-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP next-service growth options are ready for review. EPOCH will be used only if timing is needed.",
      nextAction: "WORKSHOP will review the next repeat-service, renewal, or referral motion without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedExpansionGrowthPlanState: true,
      appOwnedExpansionFollowUpState: true,
      expansionFollowUpReady: true,
      repeatServiceReady: true,
      renewalReady: true,
      referralReady: true,
      expansionGrowthPlanReady: true,
      expansionOutcomeReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T02:35:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionGrowthPlanAcceptances: [
    {
      id: "launch-delivery-expansion-growth-plan-acceptance-submission-001",
      expansionGrowthPlanReceiptId: "launch-delivery-expansion-growth-plan-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-growth-plan-acceptance",
      status: "offer-launch-delivery-expansion-growth-plan-acceptance-ready",
      expansionGrowthPlanAcceptancePath: "adult-service-launch-delivery-expansion-growth-plan-accepted",
      expansionGrowthPlanPath: "adult-service-launch-delivery-expansion-growth-plan-ready",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeStatus: "WORKSHOP accepted the next-service repeat-service, renewal, or referral motion from the expansion growth-plan receipt. EPOCH remains timing-provider-only.",
      operatorNextAction: "Confirm the accepted next-service motion, then export only the customer-safe expansion growth-plan acceptance receipt.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      appOwnedExpansionGrowthPlanAcceptanceState: true,
      appOwnedExpansionGrowthPlanState: true,
      appOwnedExpansionFollowUpState: true,
      expansionGrowthPlanReady: true,
      expansionFollowUpReady: true,
      expansionOutcomeReady: true,
      repeatServiceAccepted: true,
      renewalAccepted: true,
      referralAccepted: true,
      expansionGrowthPlanAcceptanceReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T03:05:00+09:00"
    }
  ],
  offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts: [
    {
      id: "launch-delivery-expansion-growth-plan-acceptance-receipt-submission-001",
      requestId: "launch-intake-submission-001",
      kind: "offer-launch-delivery-expansion-growth-plan-acceptance",
      status: "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-ready",
      expansionGrowthPlanAcceptancePath: "adult-service-launch-delivery-expansion-growth-plan-accepted",
      serviceLane: "submission-review",
      packageId: "pkg-submission-4",
      offerLabel: "Adult Submission Review Pack",
      priceLabel: "JPY 16,000 / 4 submissions",
      customerLabel: "Adult writing prospect",
      customerSafeMessage: "Your WORKSHOP next-service repeat-service, renewal, or referral motion has been accepted. EPOCH will be used only if timing is needed.",
      nextAction: "WORKSHOP will prepare the accepted next-service motion without adding calendar load unless timing becomes necessary.",
      customerSafe: true,
      customerVisible: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      appOwnedExpansionGrowthPlanAcceptanceState: true,
      appOwnedExpansionGrowthPlanState: true,
      appOwnedExpansionFollowUpState: true,
      expansionGrowthPlanReady: true,
      expansionFollowUpReady: true,
      expansionOutcomeReady: true,
      repeatServiceAccepted: true,
      renewalAccepted: true,
      referralAccepted: true,
      expansionGrowthPlanAcceptanceReady: true,
      compatibilityGateRequired: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      providerGoLiveRequested: false,
      liveProviderEnabled: false,
      aiForwardCopy: false,
      japanCopyMode: "ai-neutral",
      under19GuardRequired: true,
      nativeExecutionReady: true,
      requiresEpochTimingRequest: false,
      recordedAt: "2026-06-05T03:05:00+09:00"
    }
  ],
  araWorkPackets: [
    {
      id: "ara-work-packet-market-001",
      packetKind: "market-research",
      linkedOfferId: "offer-experiment-submission-001",
      expectedOutput: "Competitor scan and offer-positioning notes",
      humanReviewRequired: true,
      customerSafe: false,
      expectedMinutesSaved: 90
    },
    {
      id: "ara-work-packet-copy-001",
      packetKind: "offer-copy",
      linkedOfferId: "offer-experiment-systems-001",
      expectedOutput: "Outcome-led service page draft without AI-forward language",
      humanReviewRequired: true,
      customerSafe: false,
      expectedMinutesSaved: 120
    }
  ],
  ownerTimeBudgets: [
    {
      id: "owner-time-budget-week-001",
      weeklyAvailableMinutes: 900,
      committedMinutes: 720,
      araDelegableMinutes: 240,
      laborTrapWarning: false,
      customerVisible: false,
      webportalExportReady: false,
      operatorNextAction: "Prioritize submission packs, reusable materials, and ARA-prepared research before adding live classes."
    }
  ],
  submissions: [
    {
      id: "sub-writing-001",
      requestId: "req-edu-submission-001",
      kind: "writing-review",
      title: "EIKEN essay review",
      status: "materials-received",
      due: "2026-06-05 18:00 JST",
      customerVisible: true,
      customerSafeStatus: "Draft received and the return window is confirmed.",
      operatorNextAction: "Assign the reviewer and prepare the customer-safe result receipt."
    },
    {
      id: "sub-systems-001",
      requestId: "req-crm-setup-001",
      kind: "systems-request",
      title: "CRM cleanup scope",
      status: "fit-review",
      due: "Scope pending",
      customerVisible: false,
      customerSafeStatus: "Scope review is internal until the delivery path is agreed.",
      operatorNextAction: "Collect source-system notes and confirm the smallest useful scope."
    }
  ],
  submissionReviewCycles: [
    {
      id: "cycle-writing-001",
      submissionId: "sub-writing-001",
      requestId: "req-edu-submission-001",
      stage: "materials-received",
      intakeAt: "2026-06-03T09:00:00+09:00",
      reviewDue: "2026-06-05 18:00 JST",
      returnWindow: "2026-06-05 18:00 JST",
      requiresEpochTime: true,
      customerVisible: true,
      operatorNextAction: "Assign reviewer and complete the delivery result.",
      customerSafeStatus: "Draft received and the return window is confirmed."
    },
    {
      id: "cycle-systems-001",
      submissionId: "sub-systems-001",
      requestId: "req-crm-setup-001",
      stage: "fit-review",
      intakeAt: "2026-06-03T09:20:00+09:00",
      reviewDue: "Scope pending",
      returnWindow: "Quoted after fit review",
      requiresEpochTime: false,
      customerVisible: false,
      operatorNextAction: "Review source-system notes and confirm the smallest useful scope.",
      customerSafeStatus: "Scope review is internal until the delivery path is agreed."
    }
  ],
  cohortPlans: [
    {
      id: "cohort-adult-test-prep",
      packageId: "pkg-cohort-subscription",
      lane: "cohort-subscription",
      status: "queued",
      enrolledCount: 3,
      targetCapacity: 6,
      minimumViableCount: 3,
      reusableMaterialsReady: true,
      epochWindowRequired: true,
      recurringStatus: "exception-action-required",
      nextServiceWindow: "2026-06-17 19:00 JST",
      exceptionCount: 1,
      lastRecurringReceiptId: "receipt-recurring-series-001",
      operatorNextAction: "Resolve the recurring exception before expanding the cohort sequence.",
      customerSafeStatus: "Cohort enrollment is open; one recurring service window needs a new timing action."
    },
    {
      id: "materials-subscription-writing",
      packageId: "pkg-cohort-subscription",
      lane: "cohort-subscription",
      status: "available",
      enrolledCount: 0,
      targetCapacity: 20,
      minimumViableCount: 1,
      reusableMaterialsReady: true,
      epochWindowRequired: false,
      operatorNextAction: "Sell materials access without adding live calendar load.",
      customerSafeStatus: "Study materials and strategy access are available without a live class commitment."
    }
  ],
  cohortCapacityPlans: [
    {
      id: "cohort-capacity-adult-test-prep",
      cohortPlanId: "cohort-adult-test-prep",
      requestId: "req-cohort-001",
      packageId: "pkg-cohort-subscription",
      status: "timing-waitlisted",
      enrolledCount: 3,
      targetCapacity: 6,
      minimumViableCount: 3,
      reusableMaterialsReady: true,
      epochTimingDependency: true,
      capacityStatus: "waitlisted",
      customerVisible: true,
      operatorNextAction: "Keep compatible demand clustered while EPOCH returns timing-only capacity status.",
      customerSafeStatus: "Cohort capacity is ready; timing remains waitlisted with EPOCH.",
      updatedAt: "2026-06-03T23:55:00+09:00"
    },
    {
      id: "cohort-capacity-writing-materials",
      cohortPlanId: "materials-subscription-writing",
      requestId: "req-cohort-001",
      packageId: "pkg-cohort-subscription",
      status: "available",
      enrolledCount: 0,
      targetCapacity: 20,
      minimumViableCount: 1,
      reusableMaterialsReady: true,
      epochTimingDependency: false,
      capacityStatus: "materials-access-open",
      customerVisible: true,
      operatorNextAction: "Sell materials access without adding live calendar load.",
      customerSafeStatus: "Materials access can stay open without a live class commitment.",
      updatedAt: "2026-06-03T23:55:00+09:00"
    }
  ],
  subscriptionPlans: [
    {
      id: "subscription-writing-strategy",
      cohortPlanId: "materials-subscription-writing",
      requestId: "req-cohort-001",
      packageId: "pkg-cohort-subscription",
      status: "available",
      monthlyPriceJpy: 20000,
      activeSubscribers: 0,
      targetSubscribers: 20,
      materialUnitsReady: 12,
      liveTimeRequired: false,
      cadenceLabel: "monthly materials and strategy access",
      customerVisible: true,
      operatorNextAction: "Keep subscription access available as lower-labor delivery.",
      customerSafeStatus: "Study materials and strategy access are available without a live class commitment.",
      updatedAt: "2026-06-03T23:55:00+09:00"
    },
    {
      id: "subscription-cohort-lab",
      cohortPlanId: "cohort-adult-test-prep",
      requestId: "req-cohort-001",
      packageId: "pkg-cohort-subscription",
      status: "queued",
      monthlyPriceJpy: 20000,
      activeSubscribers: 3,
      targetSubscribers: 18,
      materialUnitsReady: 8,
      liveTimeRequired: false,
      cadenceLabel: "monthly cohort lab plus reusable review material",
      customerVisible: true,
      operatorNextAction: "Open subscription access while cohort timing is resolved through EPOCH.",
      customerSafeStatus: "Cohort materials access is queued while timing is resolved.",
      updatedAt: "2026-06-03T23:55:00+09:00"
    }
  ],
  cohortPlanningReceipts: [
    {
      id: "receipt-cohort-planning-001",
      kind: "cohort-subscription-planning",
      status: "ready",
      cohortPlanId: "cohort-adult-test-prep",
      capacityPlanId: "cohort-capacity-adult-test-prep",
      subscriptionPlanId: "subscription-cohort-lab",
      requestId: "req-cohort-001",
      summary: "WORKSHOP cohort capacity and subscription planning are tracked without taking calendar ownership.",
      recordedAt: "2026-06-03T23:55:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Cohort and subscription planning are ready; EPOCH remains responsible for timing."
    }
  ],
  cohortEnrollments: [
    {
      id: "enrollment-cohort-001",
      cohortPlanId: "cohort-adult-test-prep",
      requestId: "req-cohort-001",
      customerAccountId: "account-cohort-001",
      status: "timing-waitlisted",
      seatNumber: 1,
      timingConfirmedByEpoch: false,
      enrollmentLabel: "Adult test-prep cohort seat",
      customerVisible: true,
      operatorNextAction: "Keep enrollment active while EPOCH returns timing-only status.",
      customerSafeStatus: "Enrollment is recorded; timing is still being resolved through EPOCH.",
      createdAt: "2026-06-04T00:15:00+09:00"
    }
  ],
  subscriptionLifecycles: [
    {
      id: "subscription-lifecycle-cohort-001",
      subscriptionPlanId: "subscription-cohort-lab",
      enrollmentId: "enrollment-cohort-001",
      requestId: "req-cohort-001",
      customerAccountId: "account-cohort-001",
      status: "queued",
      monthlyPriceJpy: 20000,
      materialUnitsAvailable: 8,
      renewalReady: true,
      paymentLiveEnabled: false,
      cadenceLabel: "monthly cohort lab plus reusable review material",
      customerVisible: true,
      operatorNextAction: "Open materials access and renewal tracking without live payment automation.",
      customerSafeStatus: "Subscription access is queued and renewal-ready without live payment activation.",
      updatedAt: "2026-06-04T00:15:00+09:00"
    }
  ],
  subscriptionLifecycleReceipts: [
    {
      id: "receipt-subscription-lifecycle-001",
      kind: "subscription-lifecycle",
      status: "queued",
      subscriptionLifecycleId: "subscription-lifecycle-cohort-001",
      enrollmentId: "enrollment-cohort-001",
      requestId: "req-cohort-001",
      summary: "WORKSHOP subscription lifecycle is queued without live payment activation.",
      recordedAt: "2026-06-04T00:15:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Subscription lifecycle is recorded; payment integration is not live."
    }
  ],
  cohortOutcomeReports: [
    {
      id: "outcome-cohort-001",
      cohortPlanId: "cohort-adult-test-prep",
      enrollmentId: "enrollment-cohort-001",
      subscriptionLifecycleId: "subscription-lifecycle-cohort-001",
      requestId: "req-cohort-001",
      customerAccountId: "account-cohort-001",
      status: "in-progress",
      progressScore: 64,
      renewalSignal: "renewal-ready",
      customerVisible: true,
      operatorNextAction: "Review progress summary and prepare renewal offer without live payment automation.",
      customerSafeStatus: "Cohort progress is recorded; renewal can be reviewed while EPOCH owns timing.",
      updatedAt: "2026-06-04T00:35:00+09:00"
    }
  ],
  subscriptionRenewalReports: [
    {
      id: "renewal-report-cohort-001",
      subscriptionLifecycleId: "subscription-lifecycle-cohort-001",
      outcomeReportId: "outcome-cohort-001",
      requestId: "req-cohort-001",
      customerAccountId: "account-cohort-001",
      status: "queued",
      renewalReady: true,
      riskScore: 22,
      projectedValueJpy: 20000,
      paymentLiveEnabled: false,
      requiresEpochTime: true,
      customerVisible: true,
      operatorNextAction: "Queue renewal review and request timing-only updates from EPOCH if needed.",
      customerSafeStatus: "Renewal readiness is recorded without live payment activation.",
      updatedAt: "2026-06-04T00:35:00+09:00"
    }
  ],
  cohortProgressStatusEvents: [
    {
      id: "progress-status-cohort-001",
      outcomeReportId: "outcome-cohort-001",
      renewalReportId: "renewal-report-cohort-001",
      requestId: "req-cohort-001",
      status: "in-progress",
      label: "Cohort progress update ready",
      customerVisible: true,
      customerSafeStatus: "Progress and renewal status are visible; schedule timing remains with EPOCH.",
      createdAt: "2026-06-04T00:35:00+09:00"
    }
  ],
  outcomeRenewalReceipts: [
    {
      id: "receipt-outcome-renewal-001",
      kind: "cohort-outcome-renewal",
      status: "queued",
      outcomeReportId: "outcome-cohort-001",
      renewalReportId: "renewal-report-cohort-001",
      requestId: "req-cohort-001",
      summary: "WORKSHOP outcome and renewal reporting are recorded without live payment automation.",
      recordedAt: "2026-06-04T00:35:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Outcome and renewal reporting are recorded; payment automation is not live."
    }
  ],
  compatibilityGates: [
    {
      id: "gate-under-19-default",
      requestId: "",
      status: "compatibility-review",
      ageBand: "under-19",
      guardianTermsRequired: true,
      blocksAutoAcceptance: true,
      customerVisible: true,
      operatorNextAction: "Do not accept under-19 work until compatibility and guardian-aware terms are cleared.",
      customerSafeStatus: "Under-19 requests require compatibility review before service acceptance."
    },
    {
      id: "gate-premium-live-time",
      requestId: "req-crm-setup-001",
      status: "fit-review",
      ageBand: "business",
      guardianTermsRequired: false,
      blocksAutoAcceptance: true,
      customerVisible: false,
      operatorNextAction: "Confirm scope before committing scarce live delivery time.",
      customerSafeStatus: "Scope review is required before acceptance."
    }
  ],
  crmAccounts: [
    { id: "crm-priority-prospect", name: "Priority prospect", state: "fit review", next: "Request sample work" },
    { id: "crm-returning-customer", name: "Returning customer", state: "delivery", next: "Send status update" },
    { id: "crm-school-operator", name: "School/operator lead", state: "proposal", next: "Prepare service system offer" }
  ],
  araPackets: [
    { id: "ara-template-001", title: "Reusable review template", state: "ready", owner: "SYMBIOSIS" },
    { id: "ara-comparison-001", title: "Package comparison table", state: "queued", owner: "FURYOKU" },
    { id: "ara-digest-001", title: "Lead status digest", state: "planned", owner: "WORKSHOP" }
  ],
  crmOpportunities: [
    {
      id: "opp-systems-001",
      accountId: "crm-priority-prospect",
      requestId: "req-crm-setup-001",
      lane: "crm-database-admin",
      status: "fit-review",
      valueJpy: 75000,
      qualified: true,
      customerVisible: true,
      customerSafeStatus: "Scope review is in progress for the requested system setup.",
      operatorNextAction: "Convert the qualified opportunity into an ARA-assisted delivery packet."
    },
    {
      id: "opp-cohort-001",
      accountId: "crm-school-operator",
      requestId: "req-cohort-001",
      lane: "cohort-subscription",
      status: "queued",
      valueJpy: 120000,
      qualified: true,
      customerVisible: true,
      customerSafeStatus: "Cohort interest is recorded and awaiting compatible demand.",
      operatorNextAction: "Cluster similar leads and assign a materials-prep packet."
    }
  ],
  araRevenuePackets: [
    {
      id: "ara-packet-systems-001",
      opportunityId: "opp-systems-001",
      owner: "SYMBIOSIS",
      status: "queued",
      reviewStatus: "operator-review",
      customerVisible: false,
      requiresOperatorReview: true,
      customerSafeStatus: "A service plan is being prepared for review.",
      operatorNextAction: "Prepare scoped CRM cleanup plan and delivery checklist."
    },
    {
      id: "ara-packet-cohort-001",
      opportunityId: "opp-cohort-001",
      owner: "FURYOKU",
      status: "queued",
      reviewStatus: "queued",
      customerVisible: false,
      requiresOperatorReview: true,
      customerSafeStatus: "Cohort preparation is queued until compatible demand clusters.",
      operatorNextAction: "Generate the cohort material sequence after demand threshold clears."
    }
  ],
  araAssignments: [
    {
      id: "ara-assignment-systems-001",
      packetId: "ara-packet-systems-001",
      assignee: "SYMBIOSIS",
      status: "in-progress",
      accepted: true,
      reviewRequired: true,
      reviewComplete: false,
      customerSafeStatus: "Service plan preparation is active.",
      operatorNextAction: "Review the packet output before sending a customer-safe plan."
    },
    {
      id: "ara-assignment-cohort-001",
      packetId: "ara-packet-cohort-001",
      assignee: "FURYOKU",
      status: "queued",
      accepted: true,
      reviewRequired: true,
      reviewComplete: false,
      customerSafeStatus: "Cohort planning is queued.",
      operatorNextAction: "Wait for demand cluster and then review generated materials."
    }
  ],
  araReviewReceipts: [
    {
      id: "receipt-ara-review-001",
      requestId: "req-crm-setup-001",
      opportunityId: "opp-systems-001",
      packetId: "ara-packet-systems-001",
      kind: "operator-review",
      summary: "Operator review opened for scoped service plan.",
      reviewStatus: "operator-review",
      createdAt: "2026-06-03T12:40:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Service plan review is in progress."
    },
    {
      id: "receipt-ara-review-002",
      requestId: "req-cohort-001",
      opportunityId: "opp-cohort-001",
      packetId: "ara-packet-cohort-001",
      kind: "operator-review",
      summary: "Cohort planning review queued until compatible demand clusters.",
      reviewStatus: "queued",
      createdAt: "2026-06-03T12:45:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Cohort planning is queued until compatible demand clusters."
    }
  ],
  revenueOutcomes: [
    {
      id: "outcome-submission-001",
      requestId: "req-edu-submission-001",
      opportunityId: "",
      lifecycleId: "lifecycle-001",
      packageId: "pkg-submission-4",
      lane: "submission-review",
      status: "timing-confirmed",
      valueJpy: 16000,
      customerVisible: true,
      resultReceiptReady: true,
      customerSafeStatus: "Return timing is confirmed; the result report can proceed after WORKSHOP delivery review.",
      operatorNextAction: "Complete the writing feedback and issue the customer-safe result receipt.",
      updatedAt: "2026-06-03T21:01:00+09:00"
    },
    {
      id: "outcome-systems-001",
      requestId: "req-crm-setup-001",
      opportunityId: "opp-systems-001",
      lifecycleId: "lifecycle-002",
      packageId: "pkg-systems-block",
      lane: "crm-database-admin",
      status: "fit-review",
      valueJpy: 75000,
      customerVisible: true,
      resultReceiptReady: true,
      customerSafeStatus: "A service plan is being reviewed before the customer-facing result is sent.",
      operatorNextAction: "Complete the service plan review and issue a customer-safe result summary.",
      updatedAt: "2026-06-03T15:35:00+09:00"
    },
    {
      id: "outcome-cohort-001",
      requestId: "req-cohort-001",
      opportunityId: "opp-cohort-001",
      lifecycleId: "lifecycle-003",
      packageId: "pkg-cohort-subscription",
      lane: "cohort-subscription",
      status: "recurring-exception-action-required",
      valueJpy: 120000,
      customerVisible: true,
      resultReceiptReady: false,
      customerSafeStatus: "Recurring cohort timing needs one action before the cohort result report can proceed.",
      operatorNextAction: "Resolve the recurring exception while keeping cohort delivery planning inside WORKSHOP.",
      updatedAt: "2026-06-03T22:56:00+09:00"
    }
  ],
  deliveryResultReceipts: [
    {
      id: "result-receipt-submission-001",
      outcomeId: "outcome-submission-001",
      requestId: "req-edu-submission-001",
      kind: "delivery-result",
      status: "timing-confirmed",
      summary: "Writing submission result report is open after EPOCH returned the timing confirmation.",
      createdAt: "2026-06-03T21:01:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Your return timing is confirmed and the submission review can proceed."
    },
    {
      id: "result-receipt-systems-001",
      outcomeId: "outcome-systems-001",
      requestId: "req-crm-setup-001",
      kind: "delivery-result",
      status: "fit-review",
      summary: "Systems service result is being reviewed before customer delivery.",
      createdAt: "2026-06-03T15:35:00+09:00",
      customerVisible: true,
      customerSafeStatus: "A customer-safe service result is being prepared for review."
    }
  ],
  araReviewCompletions: [
    {
      id: "ara-review-completion-systems-001",
      assignmentId: "ara-assignment-systems-001",
      packetId: "ara-packet-systems-001",
      outcomeId: "outcome-systems-001",
      status: "operator-review",
      reviewComplete: false,
      customerVisible: false,
      customerSafeStatus: "Service plan review is in progress.",
      operatorNextAction: "Approve or return the service plan before sending the customer result.",
      completedAt: ""
    },
    {
      id: "ara-review-completion-cohort-001",
      assignmentId: "ara-assignment-cohort-001",
      packetId: "ara-packet-cohort-001",
      outcomeId: "outcome-cohort-001",
      status: "queued",
      reviewComplete: false,
      customerVisible: false,
      customerSafeStatus: "Cohort planning review is queued.",
      operatorNextAction: "Complete review after compatible cohort demand is confirmed.",
      completedAt: ""
    }
  ],
  araReviewQueues: [
    {
      id: "ara-review-queue-systems-001",
      requestId: "req-crm-setup-001",
      opportunityId: "opp-systems-001",
      packetId: "ara-packet-systems-001",
      reviewReceiptId: "receipt-ara-review-001",
      revenueOutcomeId: "outcome-systems-001",
      deliveryResultReceiptId: "result-receipt-systems-001",
      kind: "ara-operator-review-queue",
      status: "ara-review-ready-for-decision",
      reviewStatus: "operator-review-complete",
      customerVisible: false,
      customerSafeForDecision: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      requiresOperatorReview: true,
      araReviewComplete: true,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP has an internal service review ready for operator decision. Customer-facing output remains gated.",
      operatorNextAction: "Review the service output, then approve or return it before customer-visible delivery proceeds.",
      createdAt: "2026-06-04T02:10:00+09:00"
    }
  ],
  araOperatorReviewDecisions: [
    {
      id: "ara-review-decision-systems-001",
      queueId: "ara-review-queue-systems-001",
      requestId: "req-crm-setup-001",
      opportunityId: "opp-systems-001",
      packetId: "ara-packet-systems-001",
      reviewReceiptId: "receipt-ara-review-001",
      revenueOutcomeId: "outcome-systems-001",
      deliveryResultReceiptId: "result-receipt-systems-001",
      kind: "ara-operator-review-decision",
      status: "ara-review-approved",
      decision: "approved",
      approved: true,
      revisionRequired: false,
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      requiresOperatorReview: true,
      operatorReviewed: true,
      araReviewComplete: true,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP operator review is complete; the customer-safe service result can proceed.",
      operatorNextAction: "Prepare the customer-safe review receipt and continue service delivery inside WORKSHOP.",
      createdAt: "2026-06-04T02:15:00+09:00"
    }
  ],
  araReviewStatusReceipts: [
    {
      id: "ara-review-status-receipt-systems-001",
      queueId: "ara-review-queue-systems-001",
      decisionId: "ara-review-decision-systems-001",
      requestId: "req-crm-setup-001",
      revenueOutcomeId: "outcome-systems-001",
      deliveryResultReceiptId: "result-receipt-systems-001",
      kind: "ara-review-status",
      status: "customer-safe-ara-review-ready",
      summary: "WORKSHOP operator review completed for an assisted service result without exposing internal packet or assignment controls.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      nativeExecutionReady: true,
      customerSafeMessage: "WORKSHOP operator review is complete; the customer-safe service result can proceed.",
      nextAction: "Review the customer-safe service result in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
      recordedAt: "2026-06-04T02:15:00+09:00"
    }
  ],
  araMethodMaterializations: [
    {
      id: "ara-method-materialization-systems-001",
      queueId: "ara-review-queue-systems-001",
      decisionId: "ara-review-decision-systems-001",
      reviewStatusReceiptId: "ara-review-status-receipt-systems-001",
      requestId: "req-crm-setup-001",
      revenueOutcomeId: "outcome-systems-001",
      deliveryResultReceiptId: "result-receipt-systems-001",
      kind: "ara-method-materialization",
      status: "ara-materialization-ready",
      methodName: "Reviewed service-delivery method pack",
      materialAssetId: "material-asset-crm-cleanup-checklist-001",
      reusableMethodStatus: "reviewed-method-and-material-ready",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      reusableMethodReady: true,
      materialAssetReady: true,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP has materialized the reviewed service method into reusable internal delivery assets. Customer-facing output remains receipt-gated.",
      operatorNextAction: "Attach the reviewed method to reusable material and service assets before customer-visible delivery proceeds.",
      createdAt: "2026-06-04T02:18:00+09:00"
    }
  ],
  araMaterializationReceipts: [
    {
      id: "ara-materialization-receipt-systems-001",
      materializationId: "ara-method-materialization-systems-001",
      reviewStatusReceiptId: "ara-review-status-receipt-systems-001",
      requestId: "req-crm-setup-001",
      revenueOutcomeId: "outcome-systems-001",
      deliveryResultReceiptId: "result-receipt-systems-001",
      kind: "ara-method-materialization",
      status: "customer-safe-ara-materialization-ready",
      summary: "WORKSHOP materialized a reviewed service method into reusable method and material records without exposing internal packet, queue, decision, or materialization controls.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      reusableMethodReady: true,
      materialAssetReady: true,
      nativeExecutionReady: true,
      customerSafeMessage: "Your reviewed service method and material plan is ready for delivery tracking.",
      nextAction: "Review the customer-safe delivery plan in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
      recordedAt: "2026-06-04T02:18:00+09:00"
    }
  ],
  serviceMaterialReuseRecords: [
    {
      id: "service-material-reuse-systems-001",
      materializationReceiptId: "ara-materialization-receipt-systems-001",
      materializationId: "ara-method-materialization-systems-001",
      requestId: "req-crm-setup-001",
      revenueOutcomeId: "outcome-systems-001",
      deliveryResultReceiptId: "result-receipt-systems-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      packageSupportStatus: "reviewed-service-material-support-ready",
      materialAssetId: "material-asset-crm-cleanup-checklist-001",
      kind: "service-material-reuse",
      status: "service-material-reuse-ready",
      summary: "Reviewed service material is linked to the systems package and reusable checklist for lower-labor repeat delivery.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      reusableMethodReady: true,
      materialAssetReady: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP has prepared reusable service material support for this service path. Customer-facing delivery remains receipt-gated.",
      operatorNextAction: "Attach the reusable material support to the package delivery checklist before the next customer-facing update.",
      createdAt: "2026-06-04T02:24:00+09:00"
    }
  ],
  serviceMaterialReuseReceipts: [
    {
      id: "service-material-reuse-receipt-systems-001",
      reuseId: "service-material-reuse-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      materialAssetId: "material-asset-crm-cleanup-checklist-001",
      kind: "service-material-reuse",
      status: "customer-safe-service-material-reuse-ready",
      summary: "WORKSHOP converted reviewed service material into reusable package support without exposing internal packet, queue, decision, materialization, or package-control records.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      reusableMethodReady: true,
      materialAssetReady: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      nativeExecutionReady: true,
      customerSafeMessage: "Reusable service material support is ready for this service path.",
      nextAction: "Review the customer-safe service material plan in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
      recordedAt: "2026-06-04T02:24:00+09:00"
    }
  ],
  packageDeliveryChecklists: [
    {
      id: "package-delivery-checklist-systems-001",
      reuseId: "service-material-reuse-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      materialAssetId: "material-asset-crm-cleanup-checklist-001",
      kind: "package-delivery-checklist",
      status: "package-delivery-checklist-ready",
      summary: "Reusable systems material support is converted into a repeatable delivery checklist for lower-labor CRM cleanup delivery.",
      checklistItemsSummary: "scope confirmed; data/source access checked; cleanup checklist attached; delivery proof prepared; follow-up system status prepared; EPOCH timing requested only if a meeting or deadline is needed",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      reusableMethodReady: true,
      materialAssetReady: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP has prepared a repeatable package delivery checklist for this service path. Customer-facing delivery remains receipt-gated.",
      operatorNextAction: "Use this package delivery checklist for the next repeat delivery, then export only the customer-safe checklist receipt.",
      createdAt: "2026-06-04T02:31:00+09:00"
    }
  ],
  packageDeliveryChecklistReceipts: [
    {
      id: "package-delivery-checklist-receipt-systems-001",
      checklistId: "package-delivery-checklist-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-checklist",
      status: "customer-safe-package-delivery-checklist-ready",
      summary: "WORKSHOP prepared a repeatable package delivery checklist from reviewed reusable material without exposing internal packet, queue, decision, materialization, reuse, checklist-control, or package-control records.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      nativeExecutionReady: true,
      customerSafeMessage: "Package delivery preparation is ready for this service path.",
      nextAction: "Review the customer-safe package delivery status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
      recordedAt: "2026-06-04T02:31:00+09:00"
    }
  ],
  packageDeliveryChecklistAutomations: [
    {
      id: "package-delivery-checklist-automation-systems-001",
      checklistId: "package-delivery-checklist-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-checklist-automation",
      status: "package-delivery-checklist-automation-ready",
      repeatDeliveryPlan: "Repeat delivery can reuse the systems package checklist with operator review before customer-visible output.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP has prepared repeatable package delivery automation for this service path. EPOCH remains timing-provider-only.",
      operatorNextAction: "Use this automation to prepare the next package delivery draft, then export only the customer-safe automation receipt.",
      createdAt: "2026-06-04T02:38:00+09:00"
    }
  ],
  packageDeliveryChecklistAutomationReceipts: [
    {
      id: "package-delivery-checklist-automation-receipt-systems-001",
      automationId: "package-delivery-checklist-automation-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-checklist-automation",
      status: "customer-safe-package-delivery-automation-ready",
      summary: "WORKSHOP prepared repeatable package delivery automation from an internal checklist without exposing internal packet, queue, decision, materialization, reuse, checklist, automation-control, or package-control records.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeMessage: "Repeatable package delivery preparation is ready for this service path.",
      nextAction: "Review the customer-safe package delivery automation status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
      recordedAt: "2026-06-04T02:38:00+09:00"
    }
  ],
  packageDeliveryExecutions: [
    {
      id: "package-delivery-execution-systems-001",
      automationId: "package-delivery-checklist-automation-systems-001",
      checklistId: "package-delivery-checklist-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-execution",
      status: "package-delivery-execution-ready",
      deliveryExecutionPlan: "Execute the systems package delivery path from reviewed automation with operator approval before any customer-visible output.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP has prepared repeatable package delivery execution for this service path. EPOCH remains timing-provider-only.",
      operatorNextAction: "Use this execution record to complete the next package delivery step, then export only the customer-safe execution receipt.",
      createdAt: "2026-06-04T02:44:00+09:00"
    }
  ],
  packageDeliveryExecutionReceipts: [
    {
      id: "package-delivery-execution-receipt-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-execution",
      status: "customer-safe-package-delivery-execution-ready",
      summary: "WORKSHOP prepared package delivery execution from reviewed automation without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution-control, or package-control records.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeMessage: "Package delivery execution is ready for this service path.",
      nextAction: "Review the customer-safe package delivery execution status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
      recordedAt: "2026-06-04T02:44:00+09:00"
    }
  ],
  packageDeliveryFollowUpRenewals: [
    {
      id: "package-delivery-followup-renewal-systems-001",
      executionReceiptId: "package-delivery-execution-receipt-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-followup-renewal",
      status: "package-delivery-followup-renewal-ready",
      renewalPath: "Follow up on systems package delivery and prepare a renewal or next-step service review only after operator approval.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      followUpReady: true,
      renewalReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP has prepared customer follow-up and renewal review for this completed delivery path. EPOCH remains timing-provider-only.",
      operatorNextAction: "Use this follow-up/renewal record to prepare the next customer-safe contact, then export only the customer-safe follow-up renewal receipt.",
      createdAt: "2026-06-04T02:50:00+09:00"
    }
  ],
  packageDeliveryFollowUpRenewalReceipts: [
    {
      id: "package-delivery-followup-renewal-receipt-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-followup-renewal",
      status: "customer-safe-package-delivery-followup-renewal-ready",
      summary: "WORKSHOP prepared a follow-up and renewal loop from a customer-safe package delivery execution receipt without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, or package-control records.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      followUpReady: true,
      renewalReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeMessage: "Follow-up and renewal review is ready for this service path.",
      nextAction: "Review the customer-safe follow-up/renewal status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
      recordedAt: "2026-06-04T02:50:00+09:00"
    }
  ],
  packageDeliveryQualityOutcomes: [
    {
      id: "package-delivery-quality-outcome-systems-001",
      executionReceiptId: "package-delivery-execution-receipt-systems-001",
      followUpRenewalReceiptId: "package-delivery-followup-renewal-receipt-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-quality-outcome",
      status: "package-delivery-quality-outcome-ready",
      qualityReviewPath: "Review delivery quality for the systems package, compare execution and follow-up receipts, and keep internal scoring inside WORKSHOP.",
      outcomePath: "Prepare customer-safe outcome guidance, renewal signal, and next service recommendation without exposing internal quality-control records.",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      followUpReady: true,
      renewalReady: true,
      qualityReviewReady: true,
      outcomeReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP has prepared delivery quality and outcome review for this package path. EPOCH remains timing-provider-only.",
      operatorNextAction: "Use this internal quality/outcome record to decide the next service improvement, then export only the customer-safe quality outcome receipt.",
      createdAt: "2026-06-04T03:10:00+09:00"
    }
  ],
  packageDeliveryQualityOutcomeReceipts: [
    {
      id: "package-delivery-quality-outcome-receipt-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-quality-outcome",
      status: "customer-safe-package-delivery-quality-outcome-ready",
      summary: "WORKSHOP prepared a package delivery quality and outcome loop from customer-safe execution and follow-up renewal receipts without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, or package-control records.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      followUpReady: true,
      renewalReady: true,
      qualityReviewReady: true,
      outcomeReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeMessage: "Package delivery quality and outcome review is ready for this service path.",
      nextAction: "Review the customer-safe quality/outcome status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
      recordedAt: "2026-06-04T03:10:00+09:00"
    }
  ],
  packageDeliveryAccountGrowthLinkages: [
    {
      id: "package-delivery-account-growth-linkage-systems-001",
      qualityOutcomeReceiptId: "package-delivery-quality-outcome-receipt-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      accountGrowthPlanId: "package-growth-plan-from-req-crm-setup-001",
      retentionSignalId: "retention-signal-from-req-crm-setup-001",
      referralSignalId: "referral-signal-from-req-crm-setup-001",
      expansionSignalId: "expansion-signal-from-req-crm-setup-001",
      kind: "package-delivery-account-growth-linkage",
      status: "package-delivery-account-growth-ready",
      growthPath: "quality-outcome-retention-referral-expansion",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      followUpReady: true,
      renewalReady: true,
      qualityReviewReady: true,
      outcomeReady: true,
      accountGrowthReady: true,
      retentionReady: true,
      referralReady: true,
      expansionReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP has linked package delivery quality/outcome review to the next account-growth path. EPOCH remains timing-provider-only.",
      operatorNextAction: "Use this internal account-growth linkage to decide the next repeat-service, referral, or expansion path, then export only the customer-safe account-growth receipt.",
      createdAt: "2026-06-04T03:35:00+09:00"
    }
  ],
  packageDeliveryAccountGrowthReceipts: [
    {
      id: "package-delivery-account-growth-receipt-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-account-growth",
      status: "customer-safe-package-delivery-account-growth-ready",
      summary: "WORKSHOP prepared a package delivery account-growth loop from a customer-safe quality/outcome receipt without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, account-growth-control, or package-control records.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      followUpReady: true,
      renewalReady: true,
      qualityReviewReady: true,
      outcomeReady: true,
      accountGrowthReady: true,
      retentionReady: true,
      referralReady: true,
      expansionReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeMessage: "Package delivery account-growth follow-up is ready for this service path.",
      nextAction: "Review the customer-safe account-growth status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
      recordedAt: "2026-06-04T03:35:00+09:00"
    }
  ],
  packageDeliveryRetentionReports: [
    {
      id: "package-delivery-retention-report-systems-001",
      accountGrowthReceiptId: "package-delivery-account-growth-receipt-systems-001",
      qualityOutcomeReceiptId: "package-delivery-quality-outcome-receipt-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      accountGrowthPlanId: "package-growth-plan-from-req-crm-setup-001",
      retentionSignalId: "retention-signal-from-req-crm-setup-001",
      referralSignalId: "referral-signal-from-req-crm-setup-001",
      expansionSignalId: "expansion-signal-from-req-crm-setup-001",
      kind: "package-delivery-retention-reporting",
      status: "package-delivery-retention-reporting-ready",
      reportingPath: "quality-outcome-account-growth-retention-reporting",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      followUpReady: true,
      renewalReady: true,
      qualityReviewReady: true,
      outcomeReady: true,
      accountGrowthReady: true,
      retentionReady: true,
      referralReady: true,
      expansionReady: true,
      qualityOutcomeReceiptMatched: true,
      retentionReportingReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP has prepared customer-safe retention reporting from account-growth and quality/outcome receipts. EPOCH remains timing-provider-only.",
      operatorNextAction: "Use this internal retention report to decide the repeat-service, referral, or expansion report, then export only the customer-safe retention-report receipt.",
      createdAt: "2026-06-04T04:20:00+09:00"
    }
  ],
  packageDeliveryRetentionReportReceipts: [
    {
      id: "package-delivery-retention-report-receipt-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-retention-report",
      status: "customer-safe-package-delivery-retention-report-ready",
      summary: "WORKSHOP prepared a package delivery retention report from customer-safe quality/outcome and account-growth receipts without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, account-growth-control, retention-reporting-control, or package-control records.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      followUpReady: true,
      renewalReady: true,
      qualityReviewReady: true,
      outcomeReady: true,
      accountGrowthReady: true,
      retentionReady: true,
      referralReady: true,
      expansionReady: true,
      qualityOutcomeReceiptMatched: true,
      retentionReportingReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeMessage: "Package delivery retention reporting is ready for this service path.",
      nextAction: "Review the customer-safe retention report in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
      recordedAt: "2026-06-04T04:20:00+09:00"
    }
  ],
  packageDeliveryGrowthActions: [
    {
      id: "package-delivery-growth-action-systems-001",
      retentionReportId: "package-delivery-retention-report-systems-001",
      retentionReportReceiptId: "package-delivery-retention-report-receipt-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      accountGrowthPlanId: "package-growth-plan-from-req-crm-setup-001",
      retentionSignalId: "retention-signal-from-req-crm-setup-001",
      referralSignalId: "referral-signal-from-req-crm-setup-001",
      expansionSignalId: "expansion-signal-from-req-crm-setup-001",
      kind: "package-delivery-growth-action",
      status: "package-delivery-growth-action-ready",
      growthPath: "retention-report-repeat-referral-expansion-action",
      customerVisible: false,
      customerSafeForReceipt: true,
      webportalExportReady: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      followUpReady: true,
      renewalReady: true,
      qualityReviewReady: true,
      outcomeReady: true,
      accountGrowthReady: true,
      retentionReady: true,
      referralReady: true,
      expansionReady: true,
      qualityOutcomeReceiptMatched: true,
      retentionReportingReady: true,
      growthActionReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeStatus: "WORKSHOP has prepared the repeat-service, referral, and expansion action path from retention reporting. EPOCH remains timing-provider-only.",
      operatorNextAction: "Choose the next repeat-service, referral, or expansion action inside WORKSHOP, then export only the customer-safe growth-action receipt.",
      createdAt: "2026-06-04T04:45:00+09:00"
    }
  ],
  packageDeliveryGrowthActionReceipts: [
    {
      id: "package-delivery-growth-action-receipt-systems-001",
      requestId: "req-crm-setup-001",
      serviceLane: "crm-database-admin",
      packageId: "pkg-systems-block",
      kind: "package-delivery-growth-action",
      status: "customer-safe-package-delivery-growth-action-ready",
      summary: "WORKSHOP prepared a customer-safe growth action receipt from retention reporting without exposing internal report, account-growth, quality/outcome, signal, packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, retention-reporting-control, growth-action-control, or package-control records.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      operatorReviewed: true,
      araReviewComplete: true,
      humanReviewComplete: true,
      packageSupportReady: true,
      lowLaborReuseReady: true,
      checklistReady: true,
      automationReady: true,
      executionReady: true,
      followUpReady: true,
      renewalReady: true,
      qualityReviewReady: true,
      outcomeReady: true,
      accountGrowthReady: true,
      retentionReady: true,
      referralReady: true,
      expansionReady: true,
      qualityOutcomeReceiptMatched: true,
      retentionReportingReady: true,
      growthActionReady: true,
      requiresEpochTimingRequest: false,
      nativeExecutionReady: true,
      customerSafeMessage: "A repeat-service, referral, or expansion action is ready for this service path.",
      nextAction: "Review the customer-safe growth action in WORKSHOP. Request EPOCH timing only if another appointment, deadline, or service window is needed.",
      recordedAt: "2026-06-04T04:45:00+09:00"
    }
  ],
  customerAccounts: [
    {
      id: "account-adult-writing-001",
      crmAccountId: "crm-returning-customer",
      displayName: "Adult writing client",
      accountType: "adult",
      status: "active",
      lifetimeValueJpy: 16000,
      activeRequestCount: 1,
      completedResultCount: 1,
      renewalEligible: true,
      customerVisible: true,
      nextFollowUpDue: "After result receipt",
      customerSafeStatus: "Your service history is active and ready for future submission reviews.",
      operatorNextAction: "Offer the next submission pack after the result receipt is sent.",
      updatedAt: "2026-06-03T18:20:00+09:00"
    },
    {
      id: "account-business-systems-001",
      crmAccountId: "crm-priority-prospect",
      displayName: "Small business operator",
      accountType: "business",
      status: "fit-review",
      lifetimeValueJpy: 75000,
      activeRequestCount: 1,
      completedResultCount: 1,
      renewalEligible: true,
      customerVisible: true,
      nextFollowUpDue: "After service plan review",
      customerSafeStatus: "Your service history is recorded and the next systems step can be reviewed.",
      operatorNextAction: "Prepare a renewal or follow-up scope after the first result report clears review.",
      updatedAt: "2026-06-03T18:25:00+09:00"
    },
    {
      id: "account-cohort-001",
      crmAccountId: "crm-school-operator",
      displayName: "Adult test-prep cohort",
      accountType: "adult",
      status: "recurring-exception-action-required",
      lifetimeValueJpy: 120000,
      activeRequestCount: 1,
      completedResultCount: 0,
      renewalEligible: false,
      customerVisible: true,
      nextFollowUpDue: "After recurring timing exception clears",
      customerSafeStatus: "Cohort interest is recorded; one recurring service window needs a new timing action.",
      operatorNextAction: "Hold renewal prompts until the recurring timing exception is resolved.",
      updatedAt: "2026-06-03T22:56:00+09:00"
    }
  ],
  customerAccountHistory: [
    {
      id: "history-submission-001",
      accountId: "account-adult-writing-001",
      requestId: "req-edu-submission-001",
      outcomeId: "outcome-submission-001",
      event: "submission-result-opened",
      status: "epoch-time-requested",
      valueJpy: 16000,
      customerVisible: true,
      customerSafeStatus: "Submission review history is recorded and the next review can be requested after the result report.",
      operatorNextAction: "Attach returned feedback and queue the next submission-pack prompt.",
      recordedAt: "2026-06-03T18:20:00+09:00"
    },
    {
      id: "history-systems-001",
      accountId: "account-business-systems-001",
      requestId: "req-crm-setup-001",
      outcomeId: "outcome-systems-001",
      event: "systems-result-review",
      status: "fit-review",
      valueJpy: 75000,
      customerVisible: true,
      customerSafeStatus: "Systems service history is recorded while the customer-safe result is prepared.",
      operatorNextAction: "Link the reviewed service plan to account history before proposing the next block.",
      recordedAt: "2026-06-03T18:25:00+09:00"
    },
    {
      id: "history-cohort-001",
      accountId: "account-cohort-001",
      requestId: "req-cohort-001",
      outcomeId: "outcome-cohort-001",
      event: "recurring-series-status-consumed",
      status: "recurring-exception-action-required",
      valueJpy: 120000,
      customerVisible: true,
      customerSafeStatus: "Recurring cohort timing status is recorded and one service window needs action.",
      operatorNextAction: "Hold renewal prompts until the recurring timing exception is resolved.",
      recordedAt: "2026-06-03T22:56:00+09:00"
    }
  ],
  renewalOpportunities: [
    {
      id: "renewal-submission-001",
      accountId: "account-adult-writing-001",
      sourceOutcomeId: "outcome-submission-001",
      packageId: "pkg-submission-4",
      lane: "submission-review",
      status: "queued",
      valueJpy: 16000,
      renewalReady: true,
      requiresEpochTime: false,
      customerVisible: true,
      followUpDue: "After result receipt",
      customerSafeStatus: "A next submission review can be requested after this result report is returned.",
      operatorNextAction: "Send a short next-submission prompt when the current result receipt is sent.",
      updatedAt: "2026-06-03T18:20:00+09:00"
    },
    {
      id: "renewal-systems-001",
      accountId: "account-business-systems-001",
      sourceOutcomeId: "outcome-systems-001",
      packageId: "pkg-systems-block",
      lane: "crm-database-admin",
      status: "fit-review",
      valueJpy: 75000,
      renewalReady: true,
      requiresEpochTime: true,
      customerVisible: true,
      followUpDue: "After service plan review",
      customerSafeStatus: "A next systems-support step can be reviewed after the current result is ready.",
      operatorNextAction: "Prepare the next scoped support block and request EPOCH timing only if a planning session is needed.",
      updatedAt: "2026-06-03T18:25:00+09:00"
    },
    {
      id: "renewal-cohort-001",
      accountId: "account-cohort-001",
      sourceOutcomeId: "outcome-cohort-001",
      packageId: "pkg-cohort-subscription",
      lane: "cohort-subscription",
      status: "queued",
      valueJpy: 120000,
      renewalReady: false,
      requiresEpochTime: false,
      customerVisible: true,
      followUpDue: "After compatible demand clusters",
      customerSafeStatus: "Cohort follow-up opens after the group plan is ready.",
      operatorNextAction: "Do not prompt renewal until the cohort result report is ready.",
      updatedAt: "2026-06-03T18:30:00+09:00"
    }
  ],
  customerFollowUps: [
    {
      id: "followup-submission-001",
      renewalId: "renewal-submission-001",
      accountId: "account-adult-writing-001",
      kind: "renewal-prompt",
      status: "queued",
      requiresEpochTime: false,
      customerVisible: true,
      due: "After result receipt",
      customerSafeStatus: "Optional next-step follow-up will be available after the result report.",
      operatorNextAction: "Prepare the next submission pack prompt without adding live calendar time.",
      createdAt: "2026-06-03T18:20:00+09:00"
    },
    {
      id: "followup-systems-001",
      renewalId: "renewal-systems-001",
      accountId: "account-business-systems-001",
      kind: "scope-follow-up",
      status: "fit-review",
      requiresEpochTime: true,
      customerVisible: true,
      due: "After service plan review",
      customerSafeStatus: "A follow-up scope review can be requested after the current service result.",
      operatorNextAction: "Draft the next scoped support block and decide whether EPOCH timing is needed.",
      createdAt: "2026-06-03T18:25:00+09:00"
    }
  ],
  retentionHealth: [
    {
      id: "retention-submission-001",
      accountId: "account-adult-writing-001",
      sourceRenewalId: "renewal-submission-001",
      status: "queued",
      retentionScore: 82,
      riskLevel: "low",
      referralEligible: true,
      growthReady: true,
      customerVisible: true,
      customerSafeStatus: "Your submission review history is healthy and ready for future review work.",
      operatorNextAction: "Offer the next submission pack and invite a soft referral after result delivery.",
      updatedAt: "2026-06-03T19:40:00+09:00"
    },
    {
      id: "retention-systems-001",
      accountId: "account-business-systems-001",
      sourceRenewalId: "renewal-systems-001",
      status: "fit-review",
      retentionScore: 76,
      riskLevel: "medium",
      referralEligible: true,
      growthReady: true,
      customerVisible: true,
      customerSafeStatus: "Your systems service path is active and the next support block can be reviewed.",
      operatorNextAction: "Prepare a scoped growth plan and ask for a referral only after the current result is accepted.",
      updatedAt: "2026-06-03T19:45:00+09:00"
    },
    {
      id: "retention-cohort-001",
      accountId: "account-cohort-001",
      sourceRenewalId: "renewal-cohort-001",
      status: "queued",
      retentionScore: 48,
      riskLevel: "waiting",
      referralEligible: false,
      growthReady: false,
      customerVisible: true,
      customerSafeStatus: "Cohort follow-up is waiting until compatible demand is confirmed.",
      operatorNextAction: "Hold growth and referral prompts until the cohort plan clears.",
      updatedAt: "2026-06-03T19:50:00+09:00"
    }
  ],
  referralOpportunities: [
    {
      id: "referral-submission-001",
      accountId: "account-adult-writing-001",
      sourceRetentionId: "retention-submission-001",
      lane: "submission-review",
      status: "queued",
      valueJpy: 16000,
      referralReady: true,
      customerVisible: true,
      customerSafeStatus: "A referral path can be shared after the current result report is returned.",
      operatorNextAction: "Send a simple referral prompt tied to the submission review pack.",
      updatedAt: "2026-06-03T19:40:00+09:00"
    },
    {
      id: "referral-systems-001",
      accountId: "account-business-systems-001",
      sourceRetentionId: "retention-systems-001",
      lane: "crm-database-admin",
      status: "fit-review",
      valueJpy: 75000,
      referralReady: true,
      customerVisible: true,
      customerSafeStatus: "A referral path can be reviewed after the current systems result is accepted.",
      operatorNextAction: "Prepare a professional referral ask after the reviewed service result is accepted.",
      updatedAt: "2026-06-03T19:45:00+09:00"
    }
  ],
  accountGrowthPlans: [
    {
      id: "growth-submission-001",
      accountId: "account-adult-writing-001",
      sourceRetentionId: "retention-submission-001",
      sourceReferralId: "referral-submission-001",
      planKind: "submission-pack-growth",
      status: "queued",
      valueJpy: 16000,
      growthReady: true,
      requiresEpochTime: false,
      customerVisible: true,
      customerSafeStatus: "The next submission pack is available after the current result report.",
      operatorNextAction: "Offer the next four-submission pack without adding live calendar load.",
      updatedAt: "2026-06-03T19:40:00+09:00"
    },
    {
      id: "growth-systems-001",
      accountId: "account-business-systems-001",
      sourceRetentionId: "retention-systems-001",
      sourceReferralId: "referral-systems-001",
      planKind: "support-block-growth",
      status: "fit-review",
      valueJpy: 75000,
      growthReady: true,
      requiresEpochTime: true,
      customerVisible: true,
      customerSafeStatus: "The next systems support block can be reviewed after the current result is ready.",
      operatorNextAction: "Draft the next systems-support block and request EPOCH timing only if a planning session is needed.",
      updatedAt: "2026-06-03T19:45:00+09:00"
    }
  ],
  growthFollowUpReceipts: [
    {
      id: "growth-receipt-submission-001",
      growthPlanId: "growth-submission-001",
      accountId: "account-adult-writing-001",
      kind: "account-growth-follow-up",
      status: "queued",
      customerVisible: true,
      summary: "Submission-pack growth follow-up is queued after result delivery.",
      customerSafeStatus: "A next submission pack can be requested after the current result report.",
      createdAt: "2026-06-03T19:40:00+09:00"
    },
    {
      id: "growth-receipt-systems-001",
      growthPlanId: "growth-systems-001",
      accountId: "account-business-systems-001",
      kind: "account-growth-follow-up",
      status: "fit-review",
      customerVisible: true,
      summary: "Systems account-growth follow-up is ready for scope review.",
      customerSafeStatus: "A next support block can be reviewed after the current service result.",
      createdAt: "2026-06-03T19:45:00+09:00"
    }
  ],
  referralConversions: [
    {
      id: "conversion-submission-001",
      referralId: "referral-submission-001",
      accountId: "account-adult-writing-001",
      sourceGrowthPlanId: "growth-submission-001",
      lane: "submission-review",
      status: "queued",
      valueJpy: 16000,
      conversionReady: true,
      customerVisible: true,
      customerSafeStatus: "A repeat submission review path is ready after the current result report.",
      operatorNextAction: "Send the repeat-pack invitation and keep the referral ask soft.",
      updatedAt: "2026-06-03T20:20:00+09:00"
    },
    {
      id: "conversion-systems-001",
      referralId: "referral-systems-001",
      accountId: "account-business-systems-001",
      sourceGrowthPlanId: "growth-systems-001",
      lane: "crm-database-admin",
      status: "fit-review",
      valueJpy: 75000,
      conversionReady: true,
      customerVisible: true,
      customerSafeStatus: "A next systems-support block can be scoped after the current service result is accepted.",
      operatorNextAction: "Convert the growth plan into a scoped support-block request after acceptance.",
      updatedAt: "2026-06-03T20:25:00+09:00"
    }
  ],
  growthPlanAcceptances: [
    {
      id: "acceptance-submission-001",
      growthPlanId: "growth-submission-001",
      conversionId: "conversion-submission-001",
      accountId: "account-adult-writing-001",
      status: "queued",
      accepted: true,
      requiresEpochTime: false,
      customerVisible: true,
      customerSafeStatus: "The next submission pack can be opened without a live scheduling step.",
      operatorNextAction: "Open the repeat submission pack and send the customer-safe next-step message.",
      acceptedAt: "2026-06-03T20:20:00+09:00"
    },
    {
      id: "acceptance-systems-001",
      growthPlanId: "growth-systems-001",
      conversionId: "conversion-systems-001",
      accountId: "account-business-systems-001",
      status: "fit-review",
      accepted: true,
      requiresEpochTime: true,
      customerVisible: true,
      customerSafeStatus: "The next systems-support block can be scoped; timing is reviewed only if a planning session is needed.",
      operatorNextAction: "Create the expansion request and request EPOCH timing only if a session is necessary.",
      acceptedAt: "2026-06-03T20:25:00+09:00"
    }
  ],
  expansionServiceRequests: [
    {
      id: "expansion-submission-001",
      acceptanceId: "acceptance-submission-001",
      accountId: "account-adult-writing-001",
      lane: "submission-review",
      packageId: "pkg-submission-4",
      status: "queued",
      valueJpy: 16000,
      epochTimeNeeded: false,
      customerVisible: true,
      customerSafeStatus: "Your next submission review pack is ready to open.",
      operatorNextAction: "Open the repeat pack and attach the first submission slot.",
      createdAt: "2026-06-03T20:20:00+09:00"
    },
    {
      id: "expansion-systems-001",
      acceptanceId: "acceptance-systems-001",
      accountId: "account-business-systems-001",
      lane: "crm-database-admin",
      packageId: "pkg-systems-block",
      status: "fit-review",
      valueJpy: 75000,
      epochTimeNeeded: true,
      customerVisible: true,
      customerSafeStatus: "Your next systems-support block is ready for scope review.",
      operatorNextAction: "Prepare the support-block scope and request EPOCH timing only for the planning session.",
      createdAt: "2026-06-03T20:25:00+09:00"
    }
  ],
  conversionStatusEvents: [
    {
      id: "conversion-status-submission-001",
      conversionId: "conversion-submission-001",
      expansionRequestId: "expansion-submission-001",
      accountId: "account-adult-writing-001",
      status: "queued",
      label: "Repeat pack ready",
      customerVisible: true,
      customerSafeStatus: "The next submission pack is ready to open after the current result report.",
      createdAt: "2026-06-03T20:20:00+09:00"
    },
    {
      id: "conversion-status-systems-001",
      conversionId: "conversion-systems-001",
      expansionRequestId: "expansion-systems-001",
      accountId: "account-business-systems-001",
      status: "fit-review",
      label: "Expansion scope review",
      customerVisible: true,
      customerSafeStatus: "The next systems-support block is ready for scope review.",
      createdAt: "2026-06-03T20:25:00+09:00"
    }
  ],
  conversionReceipts: [
    {
      id: "conversion-receipt-submission-001",
      conversionId: "conversion-submission-001",
      expansionRequestId: "expansion-submission-001",
      accountId: "account-adult-writing-001",
      kind: "referral-conversion",
      status: "queued",
      customerVisible: true,
      summary: "Repeat submission pack conversion is ready without adding live calendar load.",
      customerSafeStatus: "Your next submission review pack can be opened after the current result report.",
      createdAt: "2026-06-03T20:20:00+09:00"
    },
    {
      id: "conversion-receipt-systems-001",
      conversionId: "conversion-systems-001",
      expansionRequestId: "expansion-systems-001",
      accountId: "account-business-systems-001",
      kind: "growth-execution",
      status: "fit-review",
      customerVisible: true,
      summary: "Systems account-growth conversion is ready for scoped support-block execution.",
      customerSafeStatus: "Your next systems-support block can be scoped after the current service result.",
      createdAt: "2026-06-03T20:25:00+09:00"
    }
  ],
  epochTimeHandoffs: [
    {
      id: "epoch-handoff-001",
      requestId: "req-edu-submission-001",
      kind: "review-deadline",
      status: "timing-confirmed",
      target: "2026-06-05 18:00 JST",
      bridgeReady: true,
      bridgeState: "return-consumed",
      operatorNextAction: "Assign the reviewer now that EPOCH returned the timing confirmation.",
      customerSafeStatus: "EPOCH returned a confirmed timing window for WORKSHOP delivery.",
      receiptIds: ["receipt-transition-001", "receipt-bridge-001", "receipt-timing-return-001"],
      requestPreview: {
        requester: "WORKSHOP timing handoff",
        need: "submission-review-return",
        requestedWindow: "2026-06-05 18:00 JST",
        timezone: DEFAULT_EPOCH_TIMEZONE,
        status: "returned",
        sandboxOnly: true,
        providerGoLiveRequested: false,
        customerSafeStatus: "Confirmed timing returned locally to WORKSHOP.",
        createdAt: "2026-06-03T09:00:00+09:00"
      },
      statusPreview: {
        title: "Submission review return window",
        owner: "EPOCH",
        status: "confirmed",
        time: "2026-06-05 18:00 JST",
        startIso: "",
        endIso: "",
        timezone: DEFAULT_EPOCH_TIMEZONE,
        customerSafeStatus: "Submission return window is confirmed.",
        detail: "Schedule-bound review return window returned to WORKSHOP."
      }
    },
    {
      id: "epoch-handoff-002",
      requestId: "req-cohort-001",
      kind: "cohort-window",
      status: "timing-reschedule-required",
      target: "Demand-cluster window to be confirmed",
      bridgeReady: true,
      bridgeState: "return-consumed",
      operatorNextAction: "Choose a revised cohort window and send a new timing-only request to EPOCH.",
      customerSafeStatus: "EPOCH returned that the cohort window needs rescheduling.",
      receiptIds: ["receipt-transition-003", "receipt-bridge-002", "receipt-timing-return-002"],
      requestPreview: {
        requester: "WORKSHOP timing handoff",
        need: "project-planning-session",
        requestedWindow: "Demand-cluster window to be confirmed",
        timezone: DEFAULT_EPOCH_TIMEZONE,
        status: "needs-reschedule",
        sandboxOnly: true,
        providerGoLiveRequested: false,
        customerSafeStatus: "Timing request returned with no available window.",
        createdAt: "2026-06-03T09:40:00+09:00"
      },
      statusPreview: {
        title: "Cohort planning window",
        owner: "EPOCH",
        status: "needs-reschedule",
        time: "Demand-cluster window to be confirmed",
        startIso: "",
        endIso: "",
        timezone: DEFAULT_EPOCH_TIMEZONE,
        customerSafeStatus: "Cohort timing needs a new window.",
        detail: "EPOCH returned schedule status only; WORKSHOP owns the service plan."
      }
    }
  ],
  epochTimingReturnPayloads: [
    {
      id: "epoch-time-return-001",
      sourceHandoffId: "epoch-handoff-001",
      requestId: "req-edu-submission-001",
      returnType: "booking-confirmed",
      epochStatus: "returned",
      confirmedWindow: "2026-06-05 18:00 JST",
      customerVisible: true,
      providerGoLiveRequested: false,
      customerSafeStatus: "Confirmed timing returned locally to WORKSHOP.",
      returnedAt: "2026-06-03T21:00:00+09:00"
    },
    {
      id: "epoch-time-return-002",
      sourceHandoffId: "epoch-handoff-002",
      requestId: "req-cohort-001",
      returnType: "availability-conflict",
      epochStatus: "needs-reschedule",
      confirmedWindow: "",
      customerVisible: true,
      providerGoLiveRequested: false,
      customerSafeStatus: "No local availability is open for the requested cohort timing; choose a new window.",
      returnedAt: "2026-06-03T21:05:00+09:00"
    }
  ],
  epochTimingReturnConsumptions: [
    {
      id: "timing-consumption-001",
      sourceHandoffId: "epoch-handoff-001",
      returnPayloadId: "epoch-time-return-001",
      requestId: "req-edu-submission-001",
      status: "timing-confirmed",
      customerVisible: true,
      operatorNextAction: "Assign the reviewer and complete the delivery result inside WORKSHOP.",
      customerSafeStatus: "Return timing is confirmed; WORKSHOP can proceed with the submission review.",
      consumedAt: "2026-06-03T21:01:00+09:00"
    },
    {
      id: "timing-consumption-002",
      sourceHandoffId: "epoch-handoff-002",
      returnPayloadId: "epoch-time-return-002",
      requestId: "req-cohort-001",
      status: "timing-reschedule-required",
      customerVisible: true,
      operatorNextAction: "Choose a new cohort window and send only the timing change to EPOCH.",
      customerSafeStatus: "Cohort timing needs a new window; WORKSHOP is preparing a revised timing request.",
      consumedAt: "2026-06-03T21:06:00+09:00"
    }
  ],
  timingReturnReceipts: [
    {
      id: "receipt-timing-return-001",
      kind: "epoch-timing-return",
      status: "timing-confirmed",
      summary: "Adult writing client consumed the EPOCH timing confirmation into WORKSHOP delivery status.",
      requestId: "req-edu-submission-001",
      sourceHandoffId: "epoch-handoff-001",
      returnPayloadId: "epoch-time-return-001",
      consumptionId: "timing-consumption-001",
      recordedAt: "2026-06-03T21:01:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Return timing is confirmed; WORKSHOP can proceed with the submission review."
    },
    {
      id: "receipt-timing-return-002",
      kind: "epoch-timing-return",
      status: "timing-reschedule-required",
      summary: "Adult test-prep cohort consumed an EPOCH availability conflict and needs a new WORKSHOP timing request.",
      requestId: "req-cohort-001",
      sourceHandoffId: "epoch-handoff-002",
      returnPayloadId: "epoch-time-return-002",
      consumptionId: "timing-consumption-002",
      recordedAt: "2026-06-03T21:06:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Cohort timing needs a new window; WORKSHOP is preparing a revised timing request."
    }
  ],
  epochRevisedCalendarTimingPayloads: [
    {
      id: "epoch-revised-timing-payload-001",
      sourceHandoffId: "epoch-handoff-002",
      requestId: "req-cohort-001",
      calendarSystemLabel: "revised-13-month",
      timingDisplayLabel: "13 x 28 projection, conversion held",
      constraintSummary: "1 common-year day and 2 leap-year days outside months.",
      conversionGateReason: "Gregorian/revised conversion remains gated until owner approval.",
      epochProjectionReceiptId: "EPOCH-REVISED-CONSTRAINT-PROJECTION",
      customerVisible: true,
      providerGoLiveRequested: false,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      customerSafeStatus: "EPOCH returned customer-safe revised timing context; WORKSHOP keeps service delivery ownership only.",
      returnedAt: "2026-06-04T00:45:00+09:00"
    }
  ],
  epochRevisedCalendarTimingConsumptions: [
    {
      id: "epoch-revised-timing-consumption-001",
      payloadId: "epoch-revised-timing-payload-001",
      sourceHandoffId: "epoch-handoff-002",
      requestId: "req-cohort-001",
      status: "recurring-exception-action-required",
      customerVisible: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      operatorNextAction: "Use the returned timing display as service context only; send any timing change back to EPOCH.",
      customerSafeStatus: "Revised timing context is available from EPOCH; WORKSHOP is preparing the service step without calendar ownership.",
      consumedAt: "2026-06-04T00:46:00+09:00"
    }
  ],
  revisedCalendarTimingReceipts: [
    {
      id: "receipt-epoch-revised-timing-001",
      kind: "epoch-revised-calendar-timing",
      status: "recurring-exception-action-required",
      summary: "Adult test-prep cohort consumed EPOCH revised timing context as WORKSHOP service status only.",
      requestId: "req-cohort-001",
      sourceHandoffId: "epoch-handoff-002",
      payloadId: "epoch-revised-timing-payload-001",
      consumptionId: "epoch-revised-timing-consumption-001",
      recordedAt: "2026-06-04T00:46:00+09:00",
      customerVisible: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      customerSafeStatus: "Revised timing context is available from EPOCH; WORKSHOP is preparing the service step without calendar ownership."
    }
  ],
  timingAwareServiceFollowUps: [
    {
      id: "timing-aware-follow-up-001",
      timingStatusId: "epoch-revised-timing-consumption-001",
      revisedTimingPayloadId: "epoch-revised-timing-payload-001",
      revisedTimingReceiptId: "receipt-epoch-revised-timing-001",
      sourceHandoffId: "epoch-handoff-002",
      requestId: "req-cohort-001",
      actionKind: "timing-aware-service-follow-up",
      status: "follow-up-ready",
      customerVisible: true,
      customerSafe: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      renewalPromptReady: true,
      operatorNextAction: "Prepare the customer-safe renewal or follow-up message, and request EPOCH timing only if a new service session is needed.",
      customerSafeStatus: "EPOCH returned revised timing context; WORKSHOP can prepare the service follow-up without owning calendar rules.",
      createdAt: "2026-06-04T01:10:00+09:00"
    }
  ],
  timingAwareRenewalReceipts: [
    {
      id: "timing-aware-renewal-receipt-001",
      kind: "timing-aware-renewal",
      followUpId: "timing-aware-follow-up-001",
      requestId: "req-cohort-001",
      timingStatusId: "epoch-revised-timing-consumption-001",
      revisedTimingPayloadId: "epoch-revised-timing-payload-001",
      status: "renewal-follow-up-ready",
      summary: "WORKSHOP prepared a renewal/follow-up receipt from customer-safe EPOCH timing context.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      renewalReady: true,
      requiresEpochTimingRequest: false,
      customerSafeStatus: "Your service follow-up is ready; EPOCH remains the timing provider if another appointment or deadline is needed.",
      recordedAt: "2026-06-04T01:10:00+09:00"
    }
  ],
  deliveryOutcomeAutomations: [
    {
      id: "delivery-outcome-automation-001",
      kind: "delivery-outcome-automation",
      requestId: "req-cohort-001",
      revenueOutcomeId: "outcome-001",
      deliveryResultReceiptId: "delivery-result-receipt-001",
      timingAwareRenewalReceiptId: "timing-aware-renewal-receipt-001",
      status: "delivery-outcome-automation-ready",
      customerVisible: false,
      customerSafe: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      araReviewComplete: true,
      renewalReady: true,
      requiresEpochTimingRequest: false,
      operatorNextAction: "Review the delivery outcome automation receipt and request EPOCH timing only if another appointment or deadline is needed.",
      customerSafeStatus: "WORKSHOP delivery outcome follow-up is ready. EPOCH remains timing-provider-only for appointments and deadlines.",
      recordedAt: "2026-06-04T01:20:00+09:00"
    }
  ],
  deliveryOutcomeAutomationReceipts: [
    {
      id: "delivery-outcome-automation-receipt-001",
      kind: "delivery-outcome-automation",
      automationId: "delivery-outcome-automation-001",
      requestId: "req-cohort-001",
      revenueOutcomeId: "outcome-001",
      deliveryResultReceiptId: "delivery-result-receipt-001",
      timingAwareRenewalReceiptId: "timing-aware-renewal-receipt-001",
      status: "customer-safe-delivery-outcome-ready",
      summary: "WORKSHOP prepared a customer-safe delivery outcome automation receipt from local service and renewal context.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      araReviewComplete: true,
      renewalReady: true,
      requiresEpochTimingRequest: false,
      customerSafeMessage: "Your WORKSHOP delivery outcome follow-up is ready. EPOCH remains the timing provider for any next appointment or deadline.",
      nextAction: "Review the outcome and request EPOCH timing only if another service window is needed.",
      recordedAt: "2026-06-04T01:20:00+09:00"
    }
  ],
  accountGrowthAutomations: [
    {
      id: "account-growth-automation-001",
      kind: "account-growth-automation",
      deliveryOutcomeAutomationId: "delivery-outcome-automation-001",
      deliveryOutcomeAutomationReceiptId: "delivery-outcome-automation-receipt-001",
      requestId: "req-cohort-001",
      revenueOutcomeId: "outcome-001",
      deliveryResultReceiptId: "delivery-result-receipt-001",
      timingAwareRenewalReceiptId: "timing-aware-renewal-receipt-001",
      retentionHealthId: "retention-cohort-001",
      referralOpportunityId: "referral-from-req-cohort-001",
      accountGrowthPlanId: "growth-from-req-cohort-001",
      growthFollowUpReceiptId: "growth-follow-up-from-req-cohort-001",
      referralConversionId: "referral-conversion-from-req-cohort-001",
      growthPlanAcceptanceId: "growth-acceptance-from-req-cohort-001",
      expansionServiceRequestId: "expansion-from-req-cohort-001",
      conversionStatusEventId: "conversion-status-from-req-cohort-001",
      conversionReceiptId: "conversion-receipt-from-req-cohort-001",
      status: "account-growth-automation-ready",
      growthPath: "retention-referral-expansion",
      customerVisible: false,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      araReviewComplete: true,
      renewalReady: true,
      retentionReady: true,
      referralReady: true,
      growthPlanReady: true,
      conversionReady: true,
      expansionRequestReady: true,
      requiresEpochTimingRequest: false,
      operatorNextAction: "Review the account-growth automation receipt, then open the repeat service path or referral follow-up without adding live calendar load.",
      customerSafeStatus: "WORKSHOP account-growth follow-up is ready from the reviewed delivery outcome. EPOCH remains timing-provider-only for appointments and deadlines.",
      customerSafeMessage: "Your WORKSHOP service path is ready for a next-step follow-up. Any future appointment or deadline remains handled through EPOCH.",
      recordedAt: "2026-06-04T01:25:00+09:00"
    }
  ],
  accountGrowthAutomationReceipts: [
    {
      id: "account-growth-automation-receipt-001",
      kind: "account-growth-automation",
      automationId: "account-growth-automation-001",
      deliveryOutcomeAutomationId: "delivery-outcome-automation-001",
      deliveryOutcomeAutomationReceiptId: "delivery-outcome-automation-receipt-001",
      requestId: "req-cohort-001",
      revenueOutcomeId: "outcome-001",
      deliveryResultReceiptId: "delivery-result-receipt-001",
      timingAwareRenewalReceiptId: "timing-aware-renewal-receipt-001",
      retentionHealthId: "retention-cohort-001",
      referralOpportunityId: "referral-from-req-cohort-001",
      accountGrowthPlanId: "growth-from-req-cohort-001",
      growthFollowUpReceiptId: "growth-follow-up-from-req-cohort-001",
      referralConversionId: "referral-conversion-from-req-cohort-001",
      growthPlanAcceptanceId: "growth-acceptance-from-req-cohort-001",
      expansionServiceRequestId: "expansion-from-req-cohort-001",
      conversionStatusEventId: "conversion-status-from-req-cohort-001",
      conversionReceiptId: "conversion-receipt-from-req-cohort-001",
      status: "customer-safe-account-growth-ready",
      summary: "WORKSHOP prepared a customer-safe account-growth automation receipt from reviewed delivery outcome, renewal, retention, and repeat-service context.",
      customerVisible: true,
      customerSafe: true,
      customerVisibleReceiptReady: true,
      webportalExportReady: true,
      epochTimingProviderOnly: true,
      workshopCalendarOwnership: false,
      monitorWorkflowExposed: false,
      paymentLiveEnabled: false,
      araReviewComplete: true,
      renewalReady: true,
      retentionReady: true,
      referralReady: true,
      growthPlanReady: true,
      conversionReady: true,
      expansionRequestReady: true,
      requiresEpochTimingRequest: false,
      customerSafeMessage: "Your WORKSHOP next-step service path is ready. Timing is only requested from EPOCH if a new appointment or deadline is needed.",
      nextAction: "Open the next repeat service or referral follow-up inside WORKSHOP. Request EPOCH timing only if a new service window is needed.",
      recordedAt: "2026-06-04T01:25:00+09:00"
    }
  ],
  epochCapacityWaitlistPayloads: [
    {
      id: "epoch-capacity-waitlist-payload-001",
      sourceHandoffId: "epoch-handoff-002",
      requestId: "req-cohort-001",
      payloadKind: "capacity-waitlisted",
      capacitySnapshotId: "EPOCH-CAPACITY-001",
      waitlistEntryId: "EPOCH-WAITLIST-001",
      holdReleaseId: "",
      promotionCandidateId: "",
      capacityReceiptId: "EPOCH-CAPACITY-RECEIPT-001",
      epochStatus: "waitlisted",
      waitlistPosition: 1,
      releasedCapacity: 0,
      customerVisible: true,
      providerGoLiveRequested: false,
      customerSafeStatus: "Preferred cohort timing is full; EPOCH placed the request on the local waitlist.",
      returnedAt: "2026-06-03T23:15:00+09:00"
    },
    {
      id: "epoch-capacity-waitlist-payload-002",
      sourceHandoffId: "epoch-handoff-002",
      requestId: "req-cohort-001",
      payloadKind: "capacity-promoted",
      capacitySnapshotId: "EPOCH-CAPACITY-002",
      waitlistEntryId: "EPOCH-WAITLIST-001",
      holdReleaseId: "EPOCH-HOLD-RELEASE-001",
      promotionCandidateId: "EPOCH-PROMOTION-001",
      capacityReceiptId: "EPOCH-CAPACITY-RECEIPT-002",
      epochStatus: "promoted",
      waitlistPosition: 0,
      releasedCapacity: 1,
      customerVisible: true,
      providerGoLiveRequested: false,
      customerSafeStatus: "A released local hold promoted the waitlisted cohort request into a timing slot.",
      returnedAt: "2026-06-03T23:20:00+09:00"
    }
  ],
  epochCapacityWaitlistConsumptions: [
    {
      id: "capacity-consumption-001",
      capacityPayloadId: "epoch-capacity-waitlist-payload-001",
      sourceHandoffId: "epoch-handoff-002",
      requestId: "req-cohort-001",
      status: "timing-waitlisted",
      customerVisible: true,
      operatorNextAction: "Keep cohort planning in WORKSHOP and wait for EPOCH promotion status.",
      customerSafeStatus: "Preferred cohort timing is waitlisted; WORKSHOP is holding delivery planning without taking calendar ownership.",
      consumedAt: "2026-06-03T23:16:00+09:00"
    },
    {
      id: "capacity-consumption-002",
      capacityPayloadId: "epoch-capacity-waitlist-payload-002",
      sourceHandoffId: "epoch-handoff-002",
      requestId: "req-cohort-001",
      status: "timing-promoted",
      customerVisible: true,
      operatorNextAction: "Prepare customer-safe cohort delivery after EPOCH confirms the promoted timing slot.",
      customerSafeStatus: "Waitlisted timing was promoted; WORKSHOP can prepare the service plan around the returned slot.",
      consumedAt: "2026-06-03T23:21:00+09:00"
    }
  ],
  capacityWaitlistReceipts: [
    {
      id: "receipt-capacity-waitlist-001",
      kind: "epoch-capacity-waitlist",
      status: "timing-waitlisted",
      summary: "WORKSHOP consumed an EPOCH capacity waitlist update as service planning status only.",
      requestId: "req-cohort-001",
      sourceHandoffId: "epoch-handoff-002",
      capacityPayloadId: "epoch-capacity-waitlist-payload-001",
      consumptionId: "capacity-consumption-001",
      recordedAt: "2026-06-03T23:16:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Preferred cohort timing is waitlisted; WORKSHOP is holding delivery planning without taking calendar ownership."
    },
    {
      id: "receipt-capacity-waitlist-002",
      kind: "epoch-capacity-waitlist",
      status: "timing-promoted",
      summary: "WORKSHOP consumed an EPOCH waitlist promotion as delivery planning status only.",
      requestId: "req-cohort-001",
      sourceHandoffId: "epoch-handoff-002",
      capacityPayloadId: "epoch-capacity-waitlist-payload-002",
      consumptionId: "capacity-consumption-002",
      recordedAt: "2026-06-03T23:21:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Waitlisted timing was promoted; WORKSHOP can prepare the service plan around the returned slot."
    }
  ],
  epochRecurringSeriesPayloads: [
    {
      id: "epoch-recurring-series-payload-001",
      sourceHandoffId: "epoch-handoff-002",
      requestId: "req-cohort-001",
      seriesId: "EPOCH-SERIES-001",
      seriesStatus: "exception-action-required",
      recurrenceLabel: "Weekly cohort review window",
      nextOccurrence: "2026-06-17 19:00 JST",
      exceptionCount: 1,
      customerVisible: true,
      providerGoLiveRequested: false,
      customerSafeStatus: "EPOCH returned a recurring service timing update; one instance needs a new window.",
      returnedAt: "2026-06-03T22:55:00+09:00"
    }
  ],
  epochRecurringSeriesConsumptions: [
    {
      id: "recurring-consumption-001",
      recurringPayloadId: "epoch-recurring-series-payload-001",
      sourceHandoffId: "epoch-handoff-002",
      requestId: "req-cohort-001",
      status: "recurring-exception-action-required",
      customerVisible: true,
      operatorNextAction: "Review the recurring service timing update and send only the affected timing change to EPOCH.",
      customerSafeStatus: "Recurring cohort timing has one exception; WORKSHOP is preparing the next timing action.",
      consumedAt: "2026-06-03T22:56:00+09:00"
    }
  ],
  recurringSeriesReceipts: [
    {
      id: "receipt-recurring-series-001",
      kind: "epoch-recurring-series",
      status: "recurring-exception-action-required",
      summary: "Adult test-prep cohort consumed a customer-safe EPOCH recurring-series update without taking calendar ownership.",
      requestId: "req-cohort-001",
      sourceHandoffId: "epoch-handoff-002",
      recurringPayloadId: "epoch-recurring-series-payload-001",
      consumptionId: "recurring-consumption-001",
      recordedAt: "2026-06-03T22:56:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Recurring cohort timing has one exception; WORKSHOP is preparing the next timing action."
    }
  ],
  deliveryLifecycles: [
    {
      id: "lifecycle-001",
      requestId: "req-edu-submission-001",
      phase: "timing-return-consumed",
      currentStatus: "timing-confirmed",
      currentLabel: "Timing return confirmed",
      submissionStatus: "materials-received",
      handoffStatus: "returned",
      operatorNextAction: "Assign the reviewer and complete the delivery result inside WORKSHOP.",
      customerSafeStatus: "Return timing is confirmed; WORKSHOP can proceed with the submission review.",
      receiptIds: ["receipt-transition-001", "receipt-bridge-001", "receipt-timing-return-001"],
      updatedAt: "2026-06-03T21:01:00+09:00"
    },
    {
      id: "lifecycle-002",
      requestId: "req-crm-setup-001",
      phase: "fit-review",
      currentStatus: "fit-review",
      currentLabel: "Scope review in progress",
      submissionStatus: "fit-review",
      handoffStatus: "not-requested",
      operatorNextAction: "Review the current workflow and propose the smallest useful setup plan.",
      customerSafeStatus: "Scope and fit review are in progress.",
      receiptIds: ["receipt-transition-002"],
      updatedAt: "2026-06-03T09:20:00+09:00"
    },
    {
      id: "lifecycle-003",
      requestId: "req-cohort-001",
      phase: "recurring-series-consumed",
      currentStatus: "recurring-exception-action-required",
      currentLabel: "Recurring timing action needed",
      submissionStatus: "not-opened",
      handoffStatus: "exception-action-required",
      operatorNextAction: "Review the recurring service timing update and send only the affected timing change to EPOCH.",
      customerSafeStatus: "Recurring cohort timing has one exception; WORKSHOP is preparing the next timing action.",
      receiptIds: ["receipt-transition-003", "receipt-bridge-002", "receipt-timing-return-002", "receipt-recurring-series-001"],
      updatedAt: "2026-06-03T22:56:00+09:00"
    }
  ],
  serviceLifecycleActions: [
    {
      id: "service-lifecycle-action-001",
      requestId: "req-edu-submission-001",
      actionKind: "change-scope",
      requestedServiceLane: "submission-review",
      reason: "Customer wants to adjust the review scope before delivery.",
      status: "scope-change-requested",
      customerVisible: true,
      epochTimingProviderOnly: true,
      monitorWorkflowExposed: false,
      appOwnedLifecycleState: true,
      customerSafeStatus: "Change service scope is queued for WORKSHOP App review. EPOCH remains timing-provider-only.",
      createdAt: "2026-06-03T23:05:00+09:00"
    }
  ],
  deliveryTransitions: [
    {
      id: "transition-005b",
      requestId: "req-cohort-001",
      label: "EPOCH recurring series consumed",
      fromStatus: "timing-reschedule-required",
      toStatus: "recurring-exception-action-required",
      customerSafeStatus: "Recurring cohort timing has one exception; WORKSHOP is preparing the next timing action.",
      operatorNextAction: "Review the recurring service timing update and send only the affected timing change to EPOCH.",
      receiptId: "receipt-recurring-series-001",
      changedAt: "2026-06-03T22:56:00+09:00"
    },
    {
      id: "transition-001",
      requestId: "req-edu-submission-001",
      label: "Materials accepted",
      fromStatus: "intake-ready",
      toStatus: "materials-received",
      customerSafeStatus: "Submission received and review preparation has started.",
      operatorNextAction: "Queue the reviewer and confirm the return deadline.",
      receiptId: "receipt-transition-001",
      changedAt: "2026-06-03T09:00:00+09:00"
    },
    {
      id: "transition-002",
      requestId: "req-edu-submission-001",
      label: "EPOCH timing handoff prepared",
      fromStatus: "materials-received",
      toStatus: "epoch-time-requested",
      customerSafeStatus: "Timing request sent to EPOCH for scheduling review.",
      operatorNextAction: "Wait for the EPOCH return-window confirmation.",
      receiptId: "receipt-bridge-001",
      changedAt: "2026-06-03T09:05:00+09:00"
    },
    {
      id: "transition-002b",
      requestId: "req-edu-submission-001",
      label: "EPOCH timing return consumed",
      fromStatus: "epoch-time-requested",
      toStatus: "timing-confirmed",
      customerSafeStatus: "Return timing is confirmed; WORKSHOP can proceed with the submission review.",
      operatorNextAction: "Assign the reviewer and complete the delivery result inside WORKSHOP.",
      receiptId: "receipt-timing-return-001",
      changedAt: "2026-06-03T21:01:00+09:00"
    },
    {
      id: "transition-003",
      requestId: "req-crm-setup-001",
      label: "Scope review opened",
      fromStatus: "intake-ready",
      toStatus: "fit-review",
      customerSafeStatus: "Scope and fit review are in progress.",
      operatorNextAction: "Review the current workflow and propose the smallest useful setup plan.",
      receiptId: "receipt-transition-002",
      changedAt: "2026-06-03T09:20:00+09:00"
    },
    {
      id: "transition-004",
      requestId: "req-cohort-001",
      label: "Cohort planning queued",
      fromStatus: "intake-ready",
      toStatus: "queued",
      customerSafeStatus: "Cohort interest recorded and queued for planning.",
      operatorNextAction: "Cluster demand and prepare the cohort timing request after intake clears.",
      receiptId: "receipt-transition-003",
      changedAt: "2026-06-03T09:40:00+09:00"
    },
    {
      id: "transition-005",
      requestId: "req-cohort-001",
      label: "EPOCH timing return needs new window",
      fromStatus: "epoch-time-requested",
      toStatus: "timing-reschedule-required",
      customerSafeStatus: "Cohort timing needs a new window; WORKSHOP is preparing a revised timing request.",
      operatorNextAction: "Choose a new cohort window and send only the timing change to EPOCH.",
      receiptId: "receipt-timing-return-002",
      changedAt: "2026-06-03T21:06:00+09:00"
    }
  ],
  customerStatusEvents: [
    {
      id: "status-event-001",
      requestId: "req-edu-submission-001",
      status: "materials-received",
      label: "Submission received",
      customerSafeStatus: "Draft received and waiting for the confirmed return window.",
      createdAt: "2026-06-03T09:00:00+09:00"
    },
    {
      id: "status-event-002",
      requestId: "req-edu-submission-001",
      status: "epoch-time-requested",
      label: "Timing request sent",
      customerSafeStatus: "Timing request sent to EPOCH for scheduling review.",
      createdAt: "2026-06-03T09:05:00+09:00"
    },
    {
      id: "status-event-002b",
      requestId: "req-edu-submission-001",
      status: "timing-confirmed",
      label: "Timing return confirmed",
      customerSafeStatus: "Return timing is confirmed; WORKSHOP can proceed with the submission review.",
      createdAt: "2026-06-03T21:01:00+09:00"
    },
    {
      id: "status-event-003",
      requestId: "req-crm-setup-001",
      status: "fit-review",
      label: "Scope review in progress",
      customerSafeStatus: "Scope and fit review are in progress.",
      createdAt: "2026-06-03T09:20:00+09:00"
    },
    {
      id: "status-event-004",
      requestId: "req-cohort-001",
      status: "queued",
      label: "Cohort planning queued",
      customerSafeStatus: "Cohort interest recorded and queued for planning.",
      createdAt: "2026-06-03T09:40:00+09:00"
    },
    {
      id: "status-event-005",
      requestId: "req-cohort-001",
      status: "timing-reschedule-required",
      label: "New timing window needed",
      customerSafeStatus: "Cohort timing needs a new window; WORKSHOP is preparing a revised timing request.",
      createdAt: "2026-06-03T21:06:00+09:00"
    },
    {
      id: "status-event-005b",
      requestId: "req-cohort-001",
      status: "recurring-exception-action-required",
      label: "Recurring service timing action needed",
      customerSafeStatus: "Recurring cohort timing has one exception; WORKSHOP is preparing the next timing action.",
      createdAt: "2026-06-03T22:56:00+09:00"
    }
  ],
  deliveryStates: [
    { id: "state-request", label: "Request captured", detail: "WORKSHOP records the service request and chosen lane.", state: "complete" },
    { id: "state-fit", label: "Fit and material review", detail: "Compatibility, scope, and materials are checked before delivery proceeds.", state: "in-progress" },
    { id: "state-epoch", label: "Time handoff if needed", detail: "Only timing fields are handed to EPOCH; service ownership stays in WORKSHOP.", state: "queued" },
    { id: "state-delivery", label: "Delivery and return", detail: "WORKSHOP owns submission handling, service output, and customer-safe delivery status.", state: "queued" },
    { id: "state-conversion", label: "Repeat and referral conversion", detail: "WORKSHOP converts healthy accounts into lower-labor repeat work, referrals, or scoped expansion requests.", state: "queued" }
  ],
  receipts: [
    {
      id: "receipt-bridge-001",
      kind: "epoch-bridge",
      status: "ready",
      summary: "Adult writing client timing payload is ready for EPOCH schedule intake.",
      requestId: "req-edu-submission-001",
      recordedAt: "2026-06-03T09:05:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-bridge-002",
      kind: "epoch-bridge",
      status: "queued",
      summary: "Adult test-prep cohort timing payload is staged until WORKSHOP clears intake.",
      requestId: "req-cohort-001",
      recordedAt: "2026-06-03T09:45:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-timing-return-001",
      kind: "epoch-timing-return",
      status: "timing-confirmed",
      summary: "Adult writing client consumed the EPOCH timing confirmation into WORKSHOP delivery status.",
      requestId: "req-edu-submission-001",
      recordedAt: "2026-06-03T21:01:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-timing-return-002",
      kind: "epoch-timing-return",
      status: "timing-reschedule-required",
      summary: "Adult test-prep cohort consumed an EPOCH availability conflict and needs a new WORKSHOP timing request.",
      requestId: "req-cohort-001",
      recordedAt: "2026-06-03T21:06:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-recurring-series-001",
      kind: "epoch-recurring-series",
      status: "recurring-exception-action-required",
      summary: "Adult test-prep cohort consumed a customer-safe EPOCH recurring-series update without taking calendar ownership.",
      requestId: "req-cohort-001",
      recordedAt: "2026-06-03T22:56:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-capacity-waitlist-001",
      kind: "epoch-capacity-waitlist",
      status: "timing-waitlisted",
      summary: "WORKSHOP consumed an EPOCH capacity waitlist update as service planning status only.",
      requestId: "req-cohort-001",
      recordedAt: "2026-06-03T23:16:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-capacity-waitlist-002",
      kind: "epoch-capacity-waitlist",
      status: "timing-promoted",
      summary: "WORKSHOP consumed an EPOCH waitlist promotion as delivery planning status only.",
      requestId: "req-cohort-001",
      recordedAt: "2026-06-03T23:21:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-transition-001",
      kind: "delivery-transition",
      status: "complete",
      summary: "Adult writing client moved from intake-ready to materials-received.",
      requestId: "req-edu-submission-001",
      recordedAt: "2026-06-03T09:00:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-transition-002",
      kind: "delivery-transition",
      status: "complete",
      summary: "Small business operator moved from intake-ready to fit-review.",
      requestId: "req-crm-setup-001",
      recordedAt: "2026-06-03T09:20:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-transition-003",
      kind: "delivery-transition",
      status: "complete",
      summary: "Adult test-prep cohort moved from intake-ready to queued.",
      requestId: "req-cohort-001",
      recordedAt: "2026-06-03T09:40:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-boundary-001",
      kind: "boundary",
      status: "complete",
      summary: "WORKSHOP service records are separate from EPOCH timing records.",
      requestId: "",
      recordedAt: "2026-06-03T09:50:00+09:00",
      customerVisible: false
    },
    {
      id: "receipt-ledger-001",
      kind: "ledger",
      status: "ready",
      summary: "Local ledger contains services, packages, submissions, customer-safe events, transitions, and EPOCH handoff previews.",
      requestId: "",
      recordedAt: "2026-06-03T09:55:00+09:00",
      customerVisible: false
    },
    {
      id: "receipt-readiness-001",
      kind: "eligibility",
      status: "ready",
      summary: "Package eligibility, submission review cycles, cohort plans, and compatibility gates are tracked as WORKSHOP operating records.",
      requestId: "",
      recordedAt: "2026-06-03T12:30:00+09:00",
      customerVisible: false
    },
    {
      id: "receipt-cohort-planning-001",
      kind: "cohort-subscription-planning",
      status: "ready",
      summary: "Cohort capacity planning and subscription planning are tracked as WORKSHOP operating records.",
      requestId: "req-cohort-001",
      recordedAt: "2026-06-03T23:55:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-subscription-lifecycle-001",
      kind: "subscription-lifecycle",
      status: "queued",
      summary: "Subscription lifecycle and enrollment execution are tracked as WORKSHOP operating records.",
      requestId: "req-cohort-001",
      recordedAt: "2026-06-04T00:15:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-outcome-renewal-001",
      kind: "cohort-outcome-renewal",
      status: "queued",
      summary: "Cohort outcome analytics, progress status, and renewal reporting are tracked as WORKSHOP operating records.",
      requestId: "req-cohort-001",
      recordedAt: "2026-06-04T00:35:00+09:00",
      customerVisible: true
    },
    {
      id: "receipt-crm-ara-001",
      kind: "crm-ara-assignment",
      status: "ready",
      summary: "CRM opportunities, revenue work packets, assignments, and review receipts are tracked as WORKSHOP operating records.",
      requestId: "",
      recordedAt: "2026-06-03T12:45:00+09:00",
      customerVisible: false
    },
    {
      id: "receipt-conversion-execution-001",
      kind: "conversion-execution",
      status: "ready",
      summary: "Referral conversions, growth acceptances, expansion requests, conversion statuses, and conversion receipts are tracked as WORKSHOP operating records.",
      requestId: "",
      recordedAt: "2026-06-03T20:30:00+09:00",
      customerVisible: false
    }
  ]
};

export const revenueLanes = initialWorkshopLedger.serviceRequests.map((request) => ({
  name: serviceLaneOptions.find((lane) => lane.value === request.lane)?.label || request.lane,
  state: request.status,
  value: `JPY ${request.valueJpy.toLocaleString("en-US")}`,
  detail: request.summary
}));

export const submissions = initialWorkshopLedger.submissions;
export const packages = initialWorkshopLedger.packages;
export const packageEligibility = initialWorkshopLedger.packageEligibility;
export const submissionReviewCycles = initialWorkshopLedger.submissionReviewCycles;
export const cohortPlans = initialWorkshopLedger.cohortPlans;
export const cohortCapacityPlans = initialWorkshopLedger.cohortCapacityPlans;
export const subscriptionPlans = initialWorkshopLedger.subscriptionPlans;
export const cohortPlanningReceipts = initialWorkshopLedger.cohortPlanningReceipts;
export const cohortEnrollments = initialWorkshopLedger.cohortEnrollments;
export const subscriptionLifecycles = initialWorkshopLedger.subscriptionLifecycles;
export const subscriptionLifecycleReceipts = initialWorkshopLedger.subscriptionLifecycleReceipts;
export const cohortOutcomeReports = initialWorkshopLedger.cohortOutcomeReports;
export const subscriptionRenewalReports = initialWorkshopLedger.subscriptionRenewalReports;
export const cohortProgressStatusEvents = initialWorkshopLedger.cohortProgressStatusEvents;
export const outcomeRenewalReceipts = initialWorkshopLedger.outcomeRenewalReceipts;
export const compatibilityGates = initialWorkshopLedger.compatibilityGates;
export const crmAccounts = initialWorkshopLedger.crmAccounts;
export const araQueue = initialWorkshopLedger.araPackets;
export const crmOpportunities = initialWorkshopLedger.crmOpportunities;
export const araRevenuePackets = initialWorkshopLedger.araRevenuePackets;
export const araAssignments = initialWorkshopLedger.araAssignments;
export const araReviewReceipts = initialWorkshopLedger.araReviewReceipts;
export const revenueOutcomes = initialWorkshopLedger.revenueOutcomes;
export const deliveryResultReceipts = initialWorkshopLedger.deliveryResultReceipts;
export const araReviewCompletions = initialWorkshopLedger.araReviewCompletions;
export const araReviewQueues = initialWorkshopLedger.araReviewQueues;
export const araOperatorReviewDecisions = initialWorkshopLedger.araOperatorReviewDecisions;
export const araReviewStatusReceipts = initialWorkshopLedger.araReviewStatusReceipts;
export const araMethodMaterializations = initialWorkshopLedger.araMethodMaterializations;
export const araMaterializationReceipts = initialWorkshopLedger.araMaterializationReceipts;
export const serviceMaterialReuseRecords = initialWorkshopLedger.serviceMaterialReuseRecords;
export const serviceMaterialReuseReceipts = initialWorkshopLedger.serviceMaterialReuseReceipts;
export const packageDeliveryChecklists = initialWorkshopLedger.packageDeliveryChecklists;
export const packageDeliveryChecklistReceipts = initialWorkshopLedger.packageDeliveryChecklistReceipts;
export const packageDeliveryChecklistAutomations = initialWorkshopLedger.packageDeliveryChecklistAutomations;
export const packageDeliveryChecklistAutomationReceipts = initialWorkshopLedger.packageDeliveryChecklistAutomationReceipts;
export const packageDeliveryExecutions = initialWorkshopLedger.packageDeliveryExecutions;
export const packageDeliveryExecutionReceipts = initialWorkshopLedger.packageDeliveryExecutionReceipts;
export const packageDeliveryFollowUpRenewals = initialWorkshopLedger.packageDeliveryFollowUpRenewals;
export const packageDeliveryFollowUpRenewalReceipts = initialWorkshopLedger.packageDeliveryFollowUpRenewalReceipts;
export const packageDeliveryQualityOutcomes = initialWorkshopLedger.packageDeliveryQualityOutcomes;
export const packageDeliveryQualityOutcomeReceipts = initialWorkshopLedger.packageDeliveryQualityOutcomeReceipts;
export const packageDeliveryAccountGrowthLinkages = initialWorkshopLedger.packageDeliveryAccountGrowthLinkages;
export const packageDeliveryAccountGrowthReceipts = initialWorkshopLedger.packageDeliveryAccountGrowthReceipts;
export const packageDeliveryRetentionReports = initialWorkshopLedger.packageDeliveryRetentionReports;
export const packageDeliveryRetentionReportReceipts = initialWorkshopLedger.packageDeliveryRetentionReportReceipts;
export const packageDeliveryGrowthActions = initialWorkshopLedger.packageDeliveryGrowthActions;
export const packageDeliveryGrowthActionReceipts = initialWorkshopLedger.packageDeliveryGrowthActionReceipts;
export const offerLaunchDeliveryExpansionRequests = initialWorkshopLedger.offerLaunchDeliveryExpansionRequests;
export const offerLaunchDeliveryExpansionRequestReceipts = initialWorkshopLedger.offerLaunchDeliveryExpansionRequestReceipts;
export const offerLaunchDeliveryExpansionWorkspaces = initialWorkshopLedger.offerLaunchDeliveryExpansionWorkspaces;
export const offerLaunchDeliveryExpansionWorkspaceReceipts = initialWorkshopLedger.offerLaunchDeliveryExpansionWorkspaceReceipts;
export const offerLaunchDeliveryExpansionKickoffs = initialWorkshopLedger.offerLaunchDeliveryExpansionKickoffs;
export const offerLaunchDeliveryExpansionKickoffReceipts = initialWorkshopLedger.offerLaunchDeliveryExpansionKickoffReceipts;
export const offerLaunchDeliveryExpansionMilestones = initialWorkshopLedger.offerLaunchDeliveryExpansionMilestones;
export const offerLaunchDeliveryExpansionMilestoneReceipts = initialWorkshopLedger.offerLaunchDeliveryExpansionMilestoneReceipts;
export const offerLaunchDeliveryExpansionOutcomes = initialWorkshopLedger.offerLaunchDeliveryExpansionOutcomes;
export const offerLaunchDeliveryExpansionOutcomeReceipts = initialWorkshopLedger.offerLaunchDeliveryExpansionOutcomeReceipts;
export const offerLaunchDeliveryExpansionFollowUps = initialWorkshopLedger.offerLaunchDeliveryExpansionFollowUps;
export const offerLaunchDeliveryExpansionFollowUpReceipts = initialWorkshopLedger.offerLaunchDeliveryExpansionFollowUpReceipts;
export const offerLaunchDeliveryExpansionGrowthPlans = initialWorkshopLedger.offerLaunchDeliveryExpansionGrowthPlans;
export const offerLaunchDeliveryExpansionGrowthPlanReceipts = initialWorkshopLedger.offerLaunchDeliveryExpansionGrowthPlanReceipts;
export const offerLaunchDeliveryExpansionGrowthPlanAcceptances = initialWorkshopLedger.offerLaunchDeliveryExpansionGrowthPlanAcceptances;
export const offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts = initialWorkshopLedger.offerLaunchDeliveryExpansionGrowthPlanAcceptanceReceipts;
export const customerAccounts = initialWorkshopLedger.customerAccounts;
export const customerAccountHistory = initialWorkshopLedger.customerAccountHistory;
export const renewalOpportunities = initialWorkshopLedger.renewalOpportunities;
export const customerFollowUps = initialWorkshopLedger.customerFollowUps;
export const retentionHealth = initialWorkshopLedger.retentionHealth;
export const referralOpportunities = initialWorkshopLedger.referralOpportunities;
export const accountGrowthPlans = initialWorkshopLedger.accountGrowthPlans;
export const growthFollowUpReceipts = initialWorkshopLedger.growthFollowUpReceipts;
export const referralConversions = initialWorkshopLedger.referralConversions;
export const growthPlanAcceptances = initialWorkshopLedger.growthPlanAcceptances;
export const expansionServiceRequests = initialWorkshopLedger.expansionServiceRequests;
export const conversionStatusEvents = initialWorkshopLedger.conversionStatusEvents;
export const conversionReceipts = initialWorkshopLedger.conversionReceipts;
export const accountGrowthAutomations = initialWorkshopLedger.accountGrowthAutomations;
export const accountGrowthAutomationReceipts = initialWorkshopLedger.accountGrowthAutomationReceipts;
export const epochRecurringSeriesPayloads = initialWorkshopLedger.epochRecurringSeriesPayloads;
export const epochRecurringSeriesConsumptions = initialWorkshopLedger.epochRecurringSeriesConsumptions;
export const recurringSeriesReceipts = initialWorkshopLedger.recurringSeriesReceipts;
export const epochCapacityWaitlistPayloads = initialWorkshopLedger.epochCapacityWaitlistPayloads;
export const epochCapacityWaitlistConsumptions = initialWorkshopLedger.epochCapacityWaitlistConsumptions;
export const capacityWaitlistReceipts = initialWorkshopLedger.capacityWaitlistReceipts;
export const serviceLifecycleActions = initialWorkshopLedger.serviceLifecycleActions;
export const deliveryTimeline = initialWorkshopLedger.deliveryStates;

const EPOCH_NEED_BY_LANE = {
  "submission-review": "submission-review-return",
  "premium-english-test-prep": "project-planning-session",
  "cohort-subscription": "project-planning-session",
  "tech-support": "project-planning-session",
  "crm-database-admin": "project-planning-session",
  "workflow-build": "project-planning-session",
  "operations-consulting": "project-planning-session"
};

export function makeId(prefix) {
  const random = Math.random().toString(36).slice(2, 8);
  return `${prefix}-${Date.now().toString(36)}-${random}`;
}

export function serviceLaneLabel(value) {
  return serviceLaneOptions.find((lane) => lane.value === value)?.label || value;
}

export function serviceLifecycleActionLabel(value) {
  return serviceLifecycleActionOptions.find((action) => action.value === value)?.label || value;
}

export function createServiceLifecycleActionRecord(form) {
  const requestId = String(form.get("requestId") || "").trim() || "req-edu-submission-001";
  const actionKind = String(form.get("actionKind") || "change-scope");
  const requestedServiceLane = String(form.get("serviceLane") || "submission-review");
  const reason = String(form.get("reason") || "").trim() || "Customer requested a service lifecycle change.";
  const createdAt = new Date().toISOString();
  const status = serviceLifecycleActionOptions.find((action) => action.value === actionKind)?.status || "service-lifecycle-action-requested";
  return {
    id: makeId("service-lifecycle-action"),
    requestId,
    actionKind,
    requestedServiceLane,
    reason,
    status,
    customerVisible: true,
    epochTimingProviderOnly: true,
    monitorWorkflowExposed: false,
    appOwnedLifecycleState: true,
    customerSafeStatus: `${serviceLifecycleActionLabel(actionKind)} is queued for WORKSHOP App review. EPOCH remains timing-provider-only.`,
    createdAt
  };
}

function requestNeedsCompatibilityReview(request) {
  return request.ageBand === "under-19";
}

function requestStatusForForm(ageBand, materialStatus, needsTiming) {
  if (ageBand === "under-19") return "compatibility-review";
  if (materialStatus === "ready" && needsTiming) return "epoch-time-requested";
  if (materialStatus === "ready") return "materials-received";
  if (materialStatus === "planning") return "fit-review";
  return "queued";
}

function requestedWindowForRequest(request) {
  if (request.lane === "submission-review") return "First available review return window JST";
  if (request.lane === "cohort-subscription") return "Demand-cluster window to be confirmed";
  return "First available planning window JST";
}

function epochNeedForRequest(request) {
  return EPOCH_NEED_BY_LANE[request.lane] || "project-planning-session";
}

function epochStatusTitleForRequest(request) {
  if (request.lane === "submission-review") return "Submission review return window";
  if (request.lane === "cohort-subscription") return "Cohort planning window";
  return "Project planning session";
}

function operatorNextActionForRequest(request) {
  if (request.status === "compatibility-review") {
    return "Complete compatibility review before accepting work or handing timing to EPOCH.";
  }
  if (request.status === "epoch-time-requested") {
    return "Confirm the requested window with EPOCH and assign delivery ownership.";
  }
  if (request.status === "timing-confirmed") {
    return "Proceed with WORKSHOP delivery using the confirmed timing window.";
  }
  if (request.status === "timing-reschedule-required") {
    return "Choose a new timing window and send only the timing change to EPOCH.";
  }
  if (request.status === "recurring-exception-action-required") {
    return "Review the recurring service timing update and send only the affected timing change to EPOCH.";
  }
  if (request.status === "recurring-series-active") {
    return "Keep the recurring cohort or subscription delivery sequence active inside WORKSHOP.";
  }
  if (request.status === "materials-received") {
    return "Assign the delivery owner and confirm the return plan.";
  }
  if (request.status === "fit-review") {
    return "Check scope, materials, and the smallest useful delivery plan.";
  }
  if (request.status === "queued" && request.lane === "cohort-subscription") {
    return "Cluster demand and prepare the cohort timing request after intake clears.";
  }
  return "Advance the next delivery step inside WORKSHOP.";
}

function customerSafeStatusForRequest(request) {
  if (request.status === "compatibility-review") {
    return "Compatibility review is required before service acceptance.";
  }
  if (request.status === "epoch-time-requested") {
    return "Request received; timing is being confirmed.";
  }
  if (request.status === "timing-confirmed") {
    return "Return timing is confirmed; WORKSHOP can proceed with delivery.";
  }
  if (request.status === "timing-reschedule-required") {
    return "Timing needs a new window; WORKSHOP is preparing a revised timing request.";
  }
  if (request.status === "recurring-exception-action-required") {
    return "Recurring service timing has one exception; WORKSHOP is preparing the next timing action.";
  }
  if (request.status === "recurring-series-active") {
    return "Recurring service timing is active; WORKSHOP can continue delivery.";
  }
  if (request.status === "materials-received") {
    return "Materials received and queued for delivery review.";
  }
  if (request.status === "fit-review") {
    return "Scope and fit review are in progress.";
  }
  if (request.status === "queued") {
    return request.lane === "cohort-subscription"
      ? "Cohort interest recorded and queued for planning."
      : "Request recorded and queued for operator planning.";
  }
  return "Request recorded for WORKSHOP review.";
}

function bridgeReadyForRequest(request) {
  return request.epochTimeNeeded &&
    !requestNeedsCompatibilityReview(request) &&
    request.materialStatus === "ready";
}

function handoffKindForRequest(request) {
  if (request.lane === "submission-review") return "review-deadline";
  if (request.lane === "cohort-subscription") return "cohort-window";
  return "planning-window";
}

function handoffCustomerSafeStatus(request, bridgeReady) {
  if (!bridgeReady) {
    return "Timing need recorded; the handoff will be prepared after WORKSHOP clears intake.";
  }
  return "Timing request sent to EPOCH for scheduling review.";
}

function handoffOperatorNextAction(request, bridgeReady) {
  if (!bridgeReady) {
    return requestNeedsCompatibilityReview(request)
      ? "Do not send the timing handoff until compatibility review is complete."
      : "Hold the EPOCH submission until WORKSHOP clears intake readiness.";
  }
  return "Copy the preview into the EPOCH schedule request ledger and wait for confirmation.";
}

function deliveryPhaseForRequest(request, submission, handoff) {
  if (request.status === "compatibility-review") return "compatibility-review";
  if (request.status === "recurring-series-active" || request.status === "recurring-exception-action-required") return "recurring-series-consumed";
  if (handoff?.bridgeReady) return "timing-handoff";
  if (submission) return "delivery-prep";
  if (request.status === "fit-review") return "fit-review";
  if (request.status === "queued") return "queue-planning";
  return "intake";
}

function deliveryLabelForRequest(request, submission, handoff) {
  if (request.status === "compatibility-review") return "Compatibility review required";
  if (request.status === "recurring-series-active") return "Recurring timing active";
  if (request.status === "recurring-exception-action-required") return "Recurring timing action needed";
  if (handoff?.bridgeReady) return "Timing handoff queued";
  if (submission) return "Materials received";
  if (request.status === "fit-review") return "Scope review in progress";
  if (request.status === "queued") return request.lane === "cohort-subscription"
    ? "Queued for cohort planning"
    : "Queued for operator planning";
  return "Request captured";
}

function createTransitionRecord(requestId, label, fromStatus, toStatus, customerSafeStatus, operatorNextAction, changedAt) {
  return {
    id: makeId("transition"),
    requestId,
    label,
    fromStatus,
    toStatus,
    customerSafeStatus,
    operatorNextAction,
    receiptId: makeId("receipt-transition"),
    changedAt
  };
}

function createStatusEventRecord(requestId, status, label, customerSafeStatus, createdAt) {
  return {
    id: makeId("status-event"),
    requestId,
    status,
    label,
    customerSafeStatus,
    createdAt
  };
}

function directUnder19Ready() {
  return false;
}

export function createPackageEligibilityForRequest(request) {
  const packageItem = initialWorkshopLedger.packages.find((item) => item.id === request.packageId);
  const lowerLaborDefault = Boolean(packageItem?.lowerLabor);
  const adultReady = request.ageBand !== "under-19";
  return {
    id: makeId("eligibility"),
    packageId: request.packageId,
    requestId: request.id,
    status: request.status === "compatibility-review" ? "compatibility-review" : adultReady ? "available" : "fit-review",
    customerOfferReady: adultReady,
    lowerLaborDefault,
    acceptsDirectAdultIntake: true,
    acceptsDirectUnder19Intake: directUnder19Ready(packageItem),
    operatorNextAction: adultReady
      ? `Confirm ${serviceLaneLabel(request.lane)} readiness and keep delivery inside WORKSHOP.`
      : "Complete compatibility review before accepting or scheduling the work.",
    customerSafeStatus: adultReady
      ? `${packageItem?.title || "Selected service"} is available after intake review.`
      : "Compatibility review is required before service acceptance."
  };
}

export function createCompatibilityGateForRequest(request) {
  if (request.ageBand !== "under-19") return null;
  return {
    id: makeId("gate"),
    requestId: request.id,
    status: "compatibility-review",
    ageBand: request.ageBand,
    guardianTermsRequired: true,
    blocksAutoAcceptance: true,
    customerVisible: true,
    operatorNextAction: "Confirm compatibility and guardian-aware terms before accepting work.",
    customerSafeStatus: "Compatibility review is required before service acceptance."
  };
}

export function createSubmissionReviewCycleForRequest(request, submission) {
  if (!submission) return null;
  return {
    id: makeId("cycle"),
    submissionId: submission.id,
    requestId: request.id,
    stage: submission.status,
    intakeAt: request.createdAt,
    reviewDue: submission.due,
    returnWindow: request.epochTimeNeeded ? "Confirmed after EPOCH timing response" : "Operator review queue",
    requiresEpochTime: Boolean(request.epochTimeNeeded),
    customerVisible: submission.customerVisible,
    operatorNextAction: submission.operatorNextAction,
    customerSafeStatus: submission.customerSafeStatus
  };
}

export function createCohortPlanForRequest(request) {
  if (request.lane !== "cohort-subscription") return null;
  const compatible = request.status !== "compatibility-review";
  return {
    id: makeId("cohort"),
    packageId: request.packageId,
    requestId: request.id,
    lane: request.lane,
    status: compatible ? "queued" : "compatibility-review",
    enrolledCount: compatible ? 1 : 0,
    targetCapacity: 6,
    minimumViableCount: 3,
    reusableMaterialsReady: true,
    epochWindowRequired: true,
    operatorNextAction: compatible
      ? "Cluster compatible demand and prepare one EPOCH cohort-window request."
      : "Hold cohort enrollment until compatibility review clears.",
    customerSafeStatus: compatible
      ? "Cohort interest recorded; timing will be confirmed after demand clusters."
      : "Compatibility review is required before cohort enrollment."
  };
}

export function createCohortCapacityPlanForCohortPlan(cohortPlan, request) {
  if (!cohortPlan || !request || request.lane !== "cohort-subscription") return null;
  const compatible = request.status !== "compatibility-review";
  return {
    id: makeId("cohort-capacity"),
    cohortPlanId: cohortPlan.id,
    requestId: request.id,
    packageId: request.packageId,
    status: compatible ? cohortPlan.status : "compatibility-review",
    enrolledCount: cohortPlan.enrolledCount,
    targetCapacity: cohortPlan.targetCapacity,
    minimumViableCount: cohortPlan.minimumViableCount,
    reusableMaterialsReady: Boolean(cohortPlan.reusableMaterialsReady),
    epochTimingDependency: Boolean(cohortPlan.epochWindowRequired),
    capacityStatus: compatible ? "cluster-ready" : "compatibility-review",
    customerVisible: true,
    operatorNextAction: compatible
      ? "Cluster compatible demand and keep timing ownership in EPOCH."
      : "Hold capacity planning until compatibility review clears.",
    customerSafeStatus: compatible
      ? "Cohort capacity planning is open; timing will be confirmed through EPOCH."
      : "Compatibility review is required before cohort capacity planning.",
    updatedAt: request.createdAt
  };
}

export function createSubscriptionPlanForCohortPlan(cohortPlan, request) {
  if (!cohortPlan || !request || request.lane !== "cohort-subscription") return null;
  const compatible = request.status !== "compatibility-review";
  return {
    id: makeId("subscription-plan"),
    cohortPlanId: cohortPlan.id,
    requestId: request.id,
    packageId: request.packageId,
    status: compatible ? "queued" : "compatibility-review",
    monthlyPriceJpy: 20000,
    activeSubscribers: compatible ? cohortPlan.enrolledCount : 0,
    targetSubscribers: Math.max(cohortPlan.targetCapacity * 3, 12),
    materialUnitsReady: compatible ? 8 : 0,
    liveTimeRequired: false,
    cadenceLabel: "monthly materials and strategy access",
    customerVisible: true,
    operatorNextAction: compatible
      ? "Open lower-labor subscription access while cohort timing is resolved."
      : "Hold subscription offer until compatibility review clears.",
    customerSafeStatus: compatible
      ? "Materials and strategy access can be prepared without adding live calendar load."
      : "Compatibility review is required before subscription access.",
    updatedAt: request.createdAt
  };
}

export function createCohortPlanningReceiptForPlan(cohortPlan, capacityPlan, subscriptionPlan, request) {
  if (!cohortPlan || !capacityPlan || !subscriptionPlan || !request) return null;
  return {
    id: makeId("receipt-cohort-planning"),
    kind: "cohort-subscription-planning",
    status: capacityPlan.status,
    cohortPlanId: cohortPlan.id,
    capacityPlanId: capacityPlan.id,
    subscriptionPlanId: subscriptionPlan.id,
    requestId: request.id,
    summary: `${request.customer} created WORKSHOP cohort capacity and subscription planning records.`,
    recordedAt: request.createdAt,
    customerVisible: true,
    customerSafeStatus: "Cohort/subscription planning is tracked in WORKSHOP; EPOCH remains responsible for timing."
  };
}

export function applyCohortPlanningRecords(cohortPlan, capacityPlan, subscriptionPlan, receipt) {
  if (!cohortPlan || !capacityPlan || !subscriptionPlan) return;
  cohortPlan.capacityPlanId = capacityPlan.id;
  cohortPlan.subscriptionPlanId = subscriptionPlan.id;
  cohortPlan.lastPlanningReceiptId = receipt?.id || cohortPlan.lastPlanningReceiptId || "";
  cohortPlan.subscriptionStatus = subscriptionPlan.status;
  cohortPlan.capacityStatus = capacityPlan.capacityStatus;
  cohortPlan.customerSafeStatus = capacityPlan.customerSafeStatus;
  cohortPlan.operatorNextAction = capacityPlan.operatorNextAction;
}

export function createCohortEnrollmentForPlans(cohortPlan, capacityPlan, request, customerAccount) {
  if (!cohortPlan || !capacityPlan || !request || request.lane !== "cohort-subscription") return null;
  return {
    id: makeId("enrollment"),
    cohortPlanId: cohortPlan.id,
    requestId: request.id,
    customerAccountId: customerAccount?.id || "",
    status: capacityPlan.status,
    seatNumber: Math.max(1, Number(capacityPlan.enrolledCount || cohortPlan.enrolledCount || 1)),
    timingConfirmedByEpoch: capacityPlan.status === "timing-confirmed" || capacityPlan.status === "timing-promoted",
    enrollmentLabel: "Cohort or materials access enrollment",
    customerVisible: true,
    operatorNextAction: "Keep enrollment in WORKSHOP and request timing-only changes from EPOCH when needed.",
    customerSafeStatus: "Enrollment is recorded; timing status remains connected to EPOCH.",
    createdAt: request.createdAt
  };
}

export function createSubscriptionLifecycleForPlan(subscriptionPlan, enrollment, request, customerAccount) {
  if (!subscriptionPlan || !enrollment || !request || request.lane !== "cohort-subscription") return null;
  return {
    id: makeId("subscription-lifecycle"),
    subscriptionPlanId: subscriptionPlan.id,
    enrollmentId: enrollment.id,
    requestId: request.id,
    customerAccountId: customerAccount?.id || "",
    status: subscriptionPlan.status,
    monthlyPriceJpy: subscriptionPlan.monthlyPriceJpy,
    materialUnitsAvailable: subscriptionPlan.materialUnitsReady,
    renewalReady: subscriptionPlan.liveTimeRequired === false,
    paymentLiveEnabled: false,
    cadenceLabel: subscriptionPlan.cadenceLabel,
    customerVisible: true,
    operatorNextAction: "Track access and renewal readiness without live payment automation.",
    customerSafeStatus: "Subscription access is tracked in WORKSHOP; payment automation is not live.",
    updatedAt: request.createdAt
  };
}

export function createSubscriptionLifecycleReceiptForLifecycle(lifecycle, enrollment, request) {
  if (!lifecycle || !enrollment || !request) return null;
  return {
    id: makeId("receipt-subscription-lifecycle"),
    kind: "subscription-lifecycle",
    status: lifecycle.status,
    subscriptionLifecycleId: lifecycle.id,
    enrollmentId: enrollment.id,
    requestId: request.id,
    summary: `${request.customer} created WORKSHOP enrollment and subscription lifecycle records.`,
    recordedAt: request.createdAt,
    customerVisible: true,
    customerSafeStatus: "Enrollment and subscription lifecycle are recorded; EPOCH remains responsible for timing."
  };
}

export function createCohortOutcomeReportForLifecycle(lifecycle, enrollment, request, customerAccount) {
  if (!lifecycle || !enrollment || !request || request.lane !== "cohort-subscription") return null;
  const progressScore = lifecycle.status === "timing-confirmed" ? 78 : 64;
  return {
    id: makeId("outcome-cohort"),
    cohortPlanId: enrollment.cohortPlanId,
    enrollmentId: enrollment.id,
    subscriptionLifecycleId: lifecycle.id,
    requestId: request.id,
    customerAccountId: customerAccount?.id || lifecycle.customerAccountId || "",
    status: "in-progress",
    progressScore,
    renewalSignal: lifecycle.renewalReady ? "renewal-ready" : "renewal-watch",
    customerVisible: true,
    operatorNextAction: "Review progress summary and prepare renewal messaging without live payment automation.",
    customerSafeStatus: "Cohort progress is recorded; renewal can be reviewed while EPOCH owns timing.",
    updatedAt: request.createdAt
  };
}

export function createSubscriptionRenewalReportForOutcome(outcomeReport, lifecycle, request, customerAccount) {
  if (!outcomeReport || !lifecycle || !request || request.lane !== "cohort-subscription") return null;
  const renewalReady = Boolean(lifecycle.renewalReady);
  return {
    id: makeId("renewal-report"),
    subscriptionLifecycleId: lifecycle.id,
    outcomeReportId: outcomeReport.id,
    requestId: request.id,
    customerAccountId: customerAccount?.id || lifecycle.customerAccountId || "",
    status: renewalReady ? "queued" : "fit-review",
    renewalReady,
    riskScore: renewalReady ? 22 : 48,
    projectedValueJpy: Number(lifecycle.monthlyPriceJpy || 0),
    paymentLiveEnabled: false,
    requiresEpochTime: Boolean(request.epochTimeNeeded),
    customerVisible: true,
    operatorNextAction: request.epochTimeNeeded
      ? "Queue renewal review and request timing-only updates from EPOCH if needed."
      : "Queue renewal review without activating payment automation.",
    customerSafeStatus: request.epochTimeNeeded
      ? "Renewal readiness is recorded; any timing update remains with EPOCH."
      : "Renewal readiness is recorded without live payment activation.",
    updatedAt: request.createdAt
  };
}

export function createCohortProgressStatusEventForOutcome(outcomeReport, renewalReport, request) {
  if (!outcomeReport || !renewalReport || !request || request.lane !== "cohort-subscription") return null;
  return {
    id: makeId("progress-status"),
    outcomeReportId: outcomeReport.id,
    renewalReportId: renewalReport.id,
    requestId: request.id,
    status: outcomeReport.status,
    label: "Cohort progress update ready",
    customerVisible: true,
    customerSafeStatus: renewalReport.requiresEpochTime
      ? "Progress and renewal status are visible; schedule timing remains with EPOCH."
      : "Progress and renewal status are visible; payment automation is not live.",
    createdAt: request.createdAt
  };
}

export function createOutcomeRenewalReceiptForReport(outcomeReport, renewalReport, event, request) {
  if (!outcomeReport || !renewalReport || !event || !request || request.lane !== "cohort-subscription") return null;
  return {
    id: makeId("receipt-outcome-renewal"),
    kind: "cohort-outcome-renewal",
    status: renewalReport.status,
    outcomeReportId: outcomeReport.id,
    renewalReportId: renewalReport.id,
    requestId: request.id,
    summary: `${request.customer} created WORKSHOP outcome analytics and renewal reporting records.`,
    recordedAt: request.createdAt,
    customerVisible: true,
    customerSafeStatus: "Outcome and renewal reporting are recorded; payment automation is not live."
  };
}

export function createOperatingReadinessReceiptForRequest(request, eligibility, gate, reviewCycle, cohortPlan) {
  const parts = [
    eligibility ? "package eligibility" : "",
    gate ? "compatibility gate" : "",
    reviewCycle ? "submission review cycle" : "",
    cohortPlan ? "cohort plan" : ""
  ].filter(Boolean);
  if (!parts.length) return null;
  return {
    id: makeId("receipt-readiness"),
    kind: "operating-readiness",
    status: gate ? "compatibility-review" : "ready",
    summary: `${request.customer} created WORKSHOP ${parts.join(", ")} records.`,
    requestId: request.id,
    recordedAt: request.createdAt,
    customerVisible: false
  };
}

export function createOfferLaunchReadinessForServicePage(servicePage, packageRecord, offerExperiment, channelExperiment) {
  if (!servicePage || !packageRecord || !offerExperiment || !channelExperiment) return null;
  if (servicePage.relatedPackageId !== packageRecord.id) return null;
  if (offerExperiment.lane !== packageRecord.lane) return null;
  if (channelExperiment.linkedServicePageId !== servicePage.id) return null;

  const lowerLaborReady = Boolean(packageRecord.lowerLabor) && Number(offerExperiment.lowLaborScore || 0) >= 80;
  const aiNeutralReady = servicePage.japanCopyMode === "ai-neutral" && channelExperiment.aiForwardCopy === false;
  const marketReady = Number(channelExperiment.expectedMonthlyRevenueJpy || 0) > 0 && Number(channelExperiment.expectedConversionRatePercent || 0) > 0;
  const cashSpeedScore = Math.max(45, 100 - Math.min(60, Number(channelExperiment.operatorMinutesPerLead || 0)) - Math.min(30, Number(packageRecord.valueJpy || 0) > 90000 ? 12 : 0));
  const laborLeverageScore = Math.min(98, Math.max(40, Number(offerExperiment.lowLaborScore || 0)));
  const proofReadinessScore = servicePage.publicStatus === "ready" ? 90 : servicePage.publicStatus === "fit-review" ? 78 : 66;
  const marketDemandScore = Math.min(96, Math.max(50, Math.round(Number(channelExperiment.expectedConversionRatePercent || 0) + Number(channelExperiment.expectedLeadsPerMonth || 0) * 7)));
  const launchPriorityScore = Math.round((cashSpeedScore + laborLeverageScore + proofReadinessScore + marketDemandScore) / 4);
  const readyForReceipt =
    servicePage.customerVisible &&
    offerExperiment.customerVisible &&
    aiNeutralReady &&
    marketReady &&
    !servicePage.monitorWorkflowExposed &&
    lowerLaborReady;

  return {
    id: makeId("launch-readiness"),
    servicePageId: servicePage.id,
    packageId: packageRecord.id,
    offerExperimentId: offerExperiment.id,
    marketingChannelExperimentId: channelExperiment.id,
    lane: packageRecord.lane,
    launchStage: readyForReceipt ? channelExperiment.status : "fit-review",
    launchPriorityRank: readyForReceipt ? 1 : 3,
    timeToCashDays: packageRecord.lane === "submission-review" ? 3 : 10,
    expectedMonthlyRevenueJpy: Number(offerExperiment.expectedMonthlyRevenueJpy || channelExperiment.expectedMonthlyRevenueJpy || 0),
    expectedOperatorMinutes: Number(offerExperiment.expectedOperatorMinutes || 0),
    cashSpeedScore,
    laborLeverageScore,
    proofReadinessScore,
    marketDemandScore,
    launchPriorityScore,
    japanCopyMode: servicePage.japanCopyMode,
    aiForwardCopy: Boolean(channelExperiment.aiForwardCopy),
    under19GuardRequired: packageRecord.lane.includes("english") || packageRecord.lane.includes("prep") || packageRecord.lane === "submission-review",
    customerVisible: false,
    customerSafeForReceipt: readyForReceipt,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    humanReviewRequired: true,
    operatorNextAction: readyForReceipt
      ? `Launch ${servicePage.title} through the Webportal and keep internal pricing, channel, and score records inside the App.`
      : `Complete launch readiness review for ${servicePage.title} before customer-safe offer visibility expands.`,
    customerSafeStatus: readyForReceipt
      ? `${servicePage.title} is ready for customer-safe Webportal request routing.`
      : `${servicePage.title} is waiting for launch readiness review.`
  };
}

export function createOfferLaunchReadinessReceiptForRecord(readinessRecord, servicePage, packageRecord) {
  if (!readinessRecord || !servicePage || !packageRecord) return null;
  if (readinessRecord.servicePageId !== servicePage.id || readinessRecord.packageId !== packageRecord.id) return null;

  const customerSafe =
    readinessRecord.customerSafeForReceipt &&
    servicePage.customerVisible &&
    readinessRecord.epochTimingProviderOnly &&
    !readinessRecord.workshopCalendarOwnership &&
    !readinessRecord.monitorWorkflowExposed &&
    !readinessRecord.paymentLiveEnabled &&
    !readinessRecord.aiForwardCopy;

  return {
    id: makeId("launch-receipt"),
    kind: "offer-launch-readiness",
    status: customerSafe ? "customer-safe-offer-launch-ready" : "customer-safe-offer-launch-blocked",
    servicePageId: servicePage.id,
    packageId: packageRecord.id,
    lane: packageRecord.lane,
    offerLabel: servicePage.title,
    publicStatus: servicePage.publicStatus,
    priceLabel: packageRecord.price,
    intakeCta: servicePage.intakeCta,
    customerSafeMessage: customerSafe
      ? servicePage.customerSafeStatus
      : "This service path is waiting for launch readiness review.",
    nextAction: customerSafe
      ? "Request this service through WORKSHOP intake. EPOCH timing is used only for appointments, deadlines, or reminders."
      : "Wait for WORKSHOP to finish launch readiness review before requesting this path.",
    customerSafe,
    customerVisible: customerSafe,
    webportalExportReady: customerSafe,
    epochTimingProviderOnly: readinessRecord.epochTimingProviderOnly,
    workshopCalendarOwnership: readinessRecord.workshopCalendarOwnership,
    monitorWorkflowExposed: readinessRecord.monitorWorkflowExposed,
    paymentLiveEnabled: readinessRecord.paymentLiveEnabled,
    aiForwardCopy: readinessRecord.aiForwardCopy,
    under19GuardRequired: readinessRecord.under19GuardRequired
  };
}

export function createOfferLaunchIntakeActionForReceipt(launchReceipt, formData = new FormData()) {
  if (!launchReceipt || typeof launchReceipt !== "object") return null;
  const customer = String(formData.get?.("customer") || "Launch offer prospect").trim() || "Launch offer prospect";
  const ageBand = String(formData.get?.("ageBand") || "adult");
  const materialStatus = String(formData.get?.("materialStatus") || "planning");
  const summary = String(formData.get?.("summary") || `Request ${launchReceipt.offerLabel || "launch-ready offer"} through WORKSHOP intake.`).trim();
  const needsTiming = formData.get?.("needsTiming") === "on";
  const safeReceipt =
    launchReceipt.kind === "offer-launch-readiness" &&
    launchReceipt.customerSafe === true &&
    launchReceipt.customerVisible === true &&
    launchReceipt.webportalExportReady === true &&
    launchReceipt.epochTimingProviderOnly === true &&
    launchReceipt.workshopCalendarOwnership !== true &&
    launchReceipt.monitorWorkflowExposed !== true &&
    launchReceipt.paymentLiveEnabled !== true &&
    launchReceipt.providerGoLiveRequested !== true &&
    launchReceipt.liveProviderEnabled !== true &&
    launchReceipt.aiForwardCopy !== true;
  if (!safeReceipt) return null;

  const under19GuardRequired = launchReceipt.under19GuardRequired === true || ageBand === "under-19";
  const compatibilityGateRequired = ageBand === "under-19";
  const status = compatibilityGateRequired ? "offer-launch-intake-fit-review" : "offer-launch-intake-queued";

  return {
    id: makeId("launch-intake-action"),
    requestId: makeId("launch-intake"),
    sourceReceiptId: launchReceipt.id || launchReceipt.receiptId,
    kind: "offer-launch-intake-action",
    status,
    customer,
    ageBand,
    serviceLane: launchReceipt.lane || launchReceipt.serviceLane || "submission-review",
    packageId: launchReceipt.packageId || "package",
    materialStatus,
    offerLabel: launchReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: launchReceipt.priceLabel || "pricing visible after review",
    requestSummary: summary,
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedIntakeState: true,
    compatibilityGateRequired,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: needsTiming,
    customerSafeStatus: compatibilityGateRequired
      ? "WORKSHOP received this launch-ready offer request and routed it through fit review before service delivery."
      : "WORKSHOP received this launch-ready offer request and queued it for intake review.",
    operatorNextAction: compatibilityGateRequired
      ? "Complete the compatibility gate before converting this launch offer intake into delivery."
      : "Review the launch offer intake request, then convert it into service delivery when approved.",
    createdAt: new Date().toISOString()
  };
}

export function createOfferLaunchIntakeReceiptForAction(intakeAction) {
  if (!intakeAction || typeof intakeAction !== "object") return null;
  const customerSafe =
    intakeAction.customerSafeForReceipt === true &&
    intakeAction.appOwnedIntakeState === true &&
    intakeAction.epochTimingProviderOnly === true &&
    intakeAction.workshopCalendarOwnership !== true &&
    intakeAction.monitorWorkflowExposed !== true &&
    intakeAction.paymentLiveEnabled !== true &&
    intakeAction.providerGoLiveRequested !== true &&
    intakeAction.liveProviderEnabled !== true &&
    intakeAction.aiForwardCopy !== true &&
    intakeAction.japanCopyMode === "ai-neutral" &&
    intakeAction.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-intake-receipt"),
    requestId: intakeAction.requestId,
    kind: "offer-launch-intake",
    status: intakeAction.compatibilityGateRequired
      ? "customer-safe-offer-launch-intake-fit-review"
      : "customer-safe-offer-launch-intake-queued",
    serviceLane: intakeAction.serviceLane,
    packageId: intakeAction.packageId,
    offerLabel: intakeAction.offerLabel,
    priceLabel: intakeAction.priceLabel,
    customerSafeMessage: intakeAction.compatibilityGateRequired
      ? "Your WORKSHOP offer request is in fit review before delivery starts."
      : "Your launch-ready WORKSHOP offer request is queued for intake review.",
    nextAction: intakeAction.requiresEpochTimingRequest
      ? "WORKSHOP will review the request and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will review the request and continue without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedIntakeState: true,
    compatibilityGateRequired: intakeAction.compatibilityGateRequired,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: intakeAction.under19GuardRequired,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: intakeAction.requiresEpochTimingRequest,
    recordedAt: intakeAction.createdAt
  };
}

export function createOfferLaunchActivationForIntakeReceipt(intakeReceipt) {
  if (!intakeReceipt || typeof intakeReceipt !== "object") return null;
  const safeReceipt =
    intakeReceipt.kind === "offer-launch-intake" &&
    intakeReceipt.customerSafe === true &&
    intakeReceipt.customerVisible === true &&
    intakeReceipt.customerVisibleReceiptReady === true &&
    intakeReceipt.webportalExportReady === true &&
    intakeReceipt.appOwnedIntakeState === true &&
    intakeReceipt.epochTimingProviderOnly === true &&
    intakeReceipt.workshopCalendarOwnership !== true &&
    intakeReceipt.monitorWorkflowExposed !== true &&
    intakeReceipt.paymentLiveEnabled !== true &&
    intakeReceipt.providerGoLiveRequested !== true &&
    intakeReceipt.liveProviderEnabled !== true &&
    intakeReceipt.aiForwardCopy !== true &&
    intakeReceipt.japanCopyMode === "ai-neutral" &&
    intakeReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const compatibilityGateRequired = intakeReceipt.compatibilityGateRequired === true;
  const activationReady = !compatibilityGateRequired;
  return {
    id: makeId("launch-activation"),
    intakeReceiptId: intakeReceipt.id || intakeReceipt.receiptId,
    requestId: intakeReceipt.requestId || intakeReceipt.serviceRequestId,
    kind: "offer-launch-activation",
    status: activationReady ? "offer-launch-activation-ready" : "offer-launch-activation-fit-review",
    activationPath: activationReady ? "adult-service-delivery-setup" : "compatibility-review-before-delivery",
    serviceLane: intakeReceipt.serviceLane || "submission-review",
    packageId: intakeReceipt.packageId || "package",
    offerLabel: intakeReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: intakeReceipt.priceLabel || "pricing visible after review",
    customerLabel: intakeReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: activationReady
      ? "WORKSHOP accepted the launch-ready offer intake for service setup. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding this launch-ready offer intake for compatibility review before service setup.",
    operatorNextAction: activationReady
      ? "Prepare the delivery workspace, reusable material path, and service request handoff inside WORKSHOP before exporting only the customer-safe activation receipt."
      : "Complete compatibility review before activating this offer for delivery, then export only the customer-safe activation receipt.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedActivationState: true,
    appOwnedIntakeState: true,
    activationReady,
    compatibilityGateRequired,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: intakeReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: intakeReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchActivationReceiptForActivation(activation) {
  if (!activation || typeof activation !== "object") return null;
  const customerSafe =
    activation.customerSafeForReceipt === true &&
    activation.customerVisible !== true &&
    activation.webportalExportReady !== true &&
    activation.appOwnedActivationState === true &&
    activation.appOwnedIntakeState === true &&
    activation.epochTimingProviderOnly === true &&
    activation.workshopCalendarOwnership !== true &&
    activation.monitorWorkflowExposed !== true &&
    activation.paymentLiveEnabled !== true &&
    activation.providerGoLiveRequested !== true &&
    activation.liveProviderEnabled !== true &&
    activation.aiForwardCopy !== true &&
    activation.japanCopyMode === "ai-neutral" &&
    activation.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-activation-receipt"),
    requestId: activation.requestId,
    kind: "offer-launch-activation",
    status: activation.activationReady
      ? "customer-safe-offer-launch-activation-ready"
      : "customer-safe-offer-launch-activation-fit-review",
    activationPath: activation.activationPath,
    serviceLane: activation.serviceLane,
    packageId: activation.packageId,
    offerLabel: activation.offerLabel,
    priceLabel: activation.priceLabel,
    customerLabel: activation.customerLabel,
    customerSafeMessage: activation.activationReady
      ? "Your WORKSHOP offer path is accepted for service setup. EPOCH is used only for timing if a deadline or appointment becomes necessary."
      : "Your WORKSHOP offer path is in compatibility review before service setup.",
    nextAction: activation.requiresEpochTimingRequest
      ? "WORKSHOP will prepare service setup and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will prepare service setup without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedActivationState: true,
    appOwnedIntakeState: true,
    activationReady: activation.activationReady === true,
    compatibilityGateRequired: activation.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: activation.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: activation.requiresEpochTimingRequest === true,
    recordedAt: activation.recordedAt
  };
}

export function createOfferLaunchServiceSetupForActivationReceipt(activationReceipt) {
  if (!activationReceipt || typeof activationReceipt !== "object") return null;
  const safeReceipt =
    activationReceipt.kind === "offer-launch-activation" &&
    activationReceipt.customerSafe === true &&
    activationReceipt.customerVisible === true &&
    activationReceipt.customerVisibleReceiptReady === true &&
    activationReceipt.webportalExportReady === true &&
    activationReceipt.appOwnedActivationState === true &&
    activationReceipt.epochTimingProviderOnly === true &&
    activationReceipt.workshopCalendarOwnership !== true &&
    activationReceipt.monitorWorkflowExposed !== true &&
    activationReceipt.paymentLiveEnabled !== true &&
    activationReceipt.providerGoLiveRequested !== true &&
    activationReceipt.liveProviderEnabled !== true &&
    activationReceipt.aiForwardCopy !== true &&
    activationReceipt.japanCopyMode === "ai-neutral" &&
    activationReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const setupReady = activationReceipt.activationReady === true && activationReceipt.compatibilityGateRequired !== true;
  return {
    id: makeId("launch-service-setup"),
    activationReceiptId: activationReceipt.id || activationReceipt.receiptId,
    requestId: activationReceipt.requestId || activationReceipt.serviceRequestId,
    kind: "offer-launch-service-setup",
    status: setupReady ? "offer-launch-service-setup-ready" : "offer-launch-service-setup-fit-review",
    setupPath: setupReady ? "adult-service-delivery-workspace" : "compatibility-review-before-service-setup",
    serviceLane: activationReceipt.serviceLane || "submission-review",
    packageId: activationReceipt.packageId || "package",
    offerLabel: activationReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: activationReceipt.priceLabel || "pricing visible after review",
    customerLabel: activationReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: setupReady
      ? "WORKSHOP prepared the service setup lane after launch activation. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding service setup until compatibility review is complete.",
    operatorNextAction: setupReady
      ? "Create the delivery workspace, assign reusable materials, and keep only the customer-safe setup receipt available for Webportal import."
      : "Complete compatibility review before creating the service setup workspace, then export only the customer-safe setup receipt.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedSetupState: true,
    appOwnedActivationState: true,
    setupReady,
    activationReady: activationReceipt.activationReady === true,
    compatibilityGateRequired: activationReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: activationReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: activationReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchServiceSetupReceiptForSetup(setup) {
  if (!setup || typeof setup !== "object") return null;
  const customerSafe =
    setup.customerSafeForReceipt === true &&
    setup.customerVisible !== true &&
    setup.webportalExportReady !== true &&
    setup.appOwnedSetupState === true &&
    setup.appOwnedActivationState === true &&
    setup.epochTimingProviderOnly === true &&
    setup.workshopCalendarOwnership !== true &&
    setup.monitorWorkflowExposed !== true &&
    setup.paymentLiveEnabled !== true &&
    setup.providerGoLiveRequested !== true &&
    setup.liveProviderEnabled !== true &&
    setup.aiForwardCopy !== true &&
    setup.japanCopyMode === "ai-neutral" &&
    setup.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-service-setup-receipt"),
    requestId: setup.requestId,
    kind: "offer-launch-service-setup",
    status: setup.setupReady
      ? "customer-safe-offer-launch-service-setup-ready"
      : "customer-safe-offer-launch-service-setup-fit-review",
    setupPath: setup.setupPath,
    serviceLane: setup.serviceLane,
    packageId: setup.packageId,
    offerLabel: setup.offerLabel,
    priceLabel: setup.priceLabel,
    customerLabel: setup.customerLabel,
    customerSafeMessage: setup.setupReady
      ? "Your WORKSHOP service setup is prepared. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
      : "Your WORKSHOP service setup is waiting for compatibility review before delivery begins.",
    nextAction: setup.requiresEpochTimingRequest
      ? "WORKSHOP will continue delivery setup and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will continue delivery setup without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedSetupState: true,
    appOwnedActivationState: true,
    setupReady: setup.setupReady === true,
    activationReady: setup.activationReady === true,
    compatibilityGateRequired: setup.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: setup.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: setup.requiresEpochTimingRequest === true,
    recordedAt: setup.recordedAt
  };
}

export function createOfferLaunchDeliveryWorkspaceForSetupReceipt(setupReceipt) {
  if (!setupReceipt || typeof setupReceipt !== "object") return null;
  const safeReceipt =
    setupReceipt.kind === "offer-launch-service-setup" &&
    setupReceipt.customerSafe === true &&
    setupReceipt.customerVisible === true &&
    setupReceipt.customerVisibleReceiptReady === true &&
    setupReceipt.webportalExportReady === true &&
    setupReceipt.appOwnedSetupState === true &&
    setupReceipt.epochTimingProviderOnly === true &&
    setupReceipt.workshopCalendarOwnership !== true &&
    setupReceipt.monitorWorkflowExposed !== true &&
    setupReceipt.paymentLiveEnabled !== true &&
    setupReceipt.providerGoLiveRequested !== true &&
    setupReceipt.liveProviderEnabled !== true &&
    setupReceipt.aiForwardCopy !== true &&
    setupReceipt.japanCopyMode === "ai-neutral" &&
    setupReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const workspaceReady = setupReceipt.setupReady === true && setupReceipt.compatibilityGateRequired !== true;
  return {
    id: makeId("launch-delivery-workspace"),
    setupReceiptId: setupReceipt.id || setupReceipt.receiptId,
    requestId: setupReceipt.requestId || setupReceipt.serviceRequestId,
    kind: "offer-launch-delivery-workspace",
    status: workspaceReady ? "offer-launch-delivery-workspace-ready" : "offer-launch-delivery-workspace-fit-review",
    workspacePath: workspaceReady ? "adult-service-delivery-workspace-active" : "compatibility-review-before-delivery-workspace",
    setupPath: setupReceipt.setupPath || "service-delivery-workspace",
    serviceLane: setupReceipt.serviceLane || "submission-review",
    packageId: setupReceipt.packageId || "package",
    offerLabel: setupReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: setupReceipt.priceLabel || "pricing visible after review",
    customerLabel: setupReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: workspaceReady
      ? "WORKSHOP prepared the delivery workspace after service setup. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding the delivery workspace until compatibility review is complete.",
    operatorNextAction: workspaceReady
      ? "Assign reusable materials, delivery checklist, and review queue inside WORKSHOP, then export only the customer-safe workspace receipt."
      : "Complete compatibility review before delivery workspace activation, then export only the customer-safe workspace receipt.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedWorkspaceState: true,
    appOwnedSetupState: true,
    workspaceReady,
    setupReady: setupReceipt.setupReady === true,
    compatibilityGateRequired: setupReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: setupReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: setupReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryWorkspaceReceiptForWorkspace(workspace) {
  if (!workspace || typeof workspace !== "object") return null;
  const customerSafe =
    workspace.customerSafeForReceipt === true &&
    workspace.customerVisible !== true &&
    workspace.webportalExportReady !== true &&
    workspace.appOwnedWorkspaceState === true &&
    workspace.appOwnedSetupState === true &&
    workspace.epochTimingProviderOnly === true &&
    workspace.workshopCalendarOwnership !== true &&
    workspace.monitorWorkflowExposed !== true &&
    workspace.paymentLiveEnabled !== true &&
    workspace.providerGoLiveRequested !== true &&
    workspace.liveProviderEnabled !== true &&
    workspace.aiForwardCopy !== true &&
    workspace.japanCopyMode === "ai-neutral" &&
    workspace.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-workspace-receipt"),
    requestId: workspace.requestId,
    kind: "offer-launch-delivery-workspace",
    status: workspace.workspaceReady
      ? "customer-safe-offer-launch-delivery-workspace-ready"
      : "customer-safe-offer-launch-delivery-workspace-fit-review",
    workspacePath: workspace.workspacePath,
    serviceLane: workspace.serviceLane,
    packageId: workspace.packageId,
    offerLabel: workspace.offerLabel,
    priceLabel: workspace.priceLabel,
    customerLabel: workspace.customerLabel,
    customerSafeMessage: workspace.workspaceReady
      ? "Your WORKSHOP delivery workspace is ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
      : "Your WORKSHOP delivery workspace is waiting for compatibility review before delivery begins.",
    nextAction: workspace.requiresEpochTimingRequest
      ? "WORKSHOP will continue delivery in the prepared workspace and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will continue delivery in the prepared workspace without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedWorkspaceState: true,
    appOwnedSetupState: true,
    workspaceReady: workspace.workspaceReady === true,
    setupReady: workspace.setupReady === true,
    compatibilityGateRequired: workspace.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: workspace.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: workspace.requiresEpochTimingRequest === true,
    recordedAt: workspace.recordedAt
  };
}

export function createOfferLaunchDeliveryKickoffForWorkspaceReceipt(workspaceReceipt) {
  if (!workspaceReceipt || typeof workspaceReceipt !== "object") return null;
  const safeReceipt =
    workspaceReceipt.kind === "offer-launch-delivery-workspace" &&
    workspaceReceipt.customerSafe === true &&
    workspaceReceipt.customerVisible === true &&
    workspaceReceipt.customerVisibleReceiptReady === true &&
    workspaceReceipt.webportalExportReady === true &&
    workspaceReceipt.appOwnedWorkspaceState === true &&
    workspaceReceipt.epochTimingProviderOnly === true &&
    workspaceReceipt.workshopCalendarOwnership !== true &&
    workspaceReceipt.monitorWorkflowExposed !== true &&
    workspaceReceipt.paymentLiveEnabled !== true &&
    workspaceReceipt.providerGoLiveRequested !== true &&
    workspaceReceipt.liveProviderEnabled !== true &&
    workspaceReceipt.aiForwardCopy !== true &&
    workspaceReceipt.japanCopyMode === "ai-neutral" &&
    workspaceReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const kickoffReady = workspaceReceipt.workspaceReady === true && workspaceReceipt.compatibilityGateRequired !== true;
  return {
    id: makeId("launch-delivery-kickoff"),
    workspaceReceiptId: workspaceReceipt.id || workspaceReceipt.receiptId,
    requestId: workspaceReceipt.requestId || workspaceReceipt.serviceRequestId,
    kind: "offer-launch-delivery-kickoff",
    status: kickoffReady ? "offer-launch-delivery-kickoff-ready" : "offer-launch-delivery-kickoff-fit-review",
    kickoffPath: kickoffReady ? "adult-service-delivery-kickoff-active" : "compatibility-review-before-delivery-kickoff",
    workspacePath: workspaceReceipt.workspacePath || "service-delivery-workspace",
    serviceLane: workspaceReceipt.serviceLane || "submission-review",
    packageId: workspaceReceipt.packageId || "package",
    offerLabel: workspaceReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: workspaceReceipt.priceLabel || "pricing visible after review",
    customerLabel: workspaceReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: kickoffReady
      ? "WORKSHOP moved the prepared delivery workspace into kickoff. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding delivery kickoff until compatibility review is complete.",
    operatorNextAction: kickoffReady
      ? "Start the first delivery milestone, assign the review queue, and export only the customer-safe kickoff receipt."
      : "Complete compatibility review before delivery kickoff, then export only the customer-safe kickoff receipt.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedKickoffState: true,
    appOwnedWorkspaceState: true,
    kickoffReady,
    workspaceReady: workspaceReceipt.workspaceReady === true,
    compatibilityGateRequired: workspaceReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: workspaceReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: workspaceReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryKickoffReceiptForKickoff(kickoff) {
  if (!kickoff || typeof kickoff !== "object") return null;
  const customerSafe =
    kickoff.customerSafeForReceipt === true &&
    kickoff.customerVisible !== true &&
    kickoff.webportalExportReady !== true &&
    kickoff.appOwnedKickoffState === true &&
    kickoff.appOwnedWorkspaceState === true &&
    kickoff.epochTimingProviderOnly === true &&
    kickoff.workshopCalendarOwnership !== true &&
    kickoff.monitorWorkflowExposed !== true &&
    kickoff.paymentLiveEnabled !== true &&
    kickoff.providerGoLiveRequested !== true &&
    kickoff.liveProviderEnabled !== true &&
    kickoff.aiForwardCopy !== true &&
    kickoff.japanCopyMode === "ai-neutral" &&
    kickoff.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-kickoff-receipt"),
    requestId: kickoff.requestId,
    kind: "offer-launch-delivery-kickoff",
    status: kickoff.kickoffReady
      ? "customer-safe-offer-launch-delivery-kickoff-ready"
      : "customer-safe-offer-launch-delivery-kickoff-fit-review",
    kickoffPath: kickoff.kickoffPath,
    serviceLane: kickoff.serviceLane,
    packageId: kickoff.packageId,
    offerLabel: kickoff.offerLabel,
    priceLabel: kickoff.priceLabel,
    customerLabel: kickoff.customerLabel,
    customerSafeMessage: kickoff.kickoffReady
      ? "Your WORKSHOP delivery kickoff is ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
      : "Your WORKSHOP delivery kickoff is waiting for compatibility review before the first delivery milestone begins.",
    nextAction: kickoff.requiresEpochTimingRequest
      ? "WORKSHOP will begin the first delivery milestone and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will begin the first delivery milestone without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedKickoffState: true,
    appOwnedWorkspaceState: true,
    kickoffReady: kickoff.kickoffReady === true,
    workspaceReady: kickoff.workspaceReady === true,
    compatibilityGateRequired: kickoff.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: kickoff.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: kickoff.requiresEpochTimingRequest === true,
    recordedAt: kickoff.recordedAt
  };
}

export function createOfferLaunchDeliveryMilestoneForKickoffReceipt(kickoffReceipt) {
  if (!kickoffReceipt || typeof kickoffReceipt !== "object") return null;
  const safeReceipt =
    kickoffReceipt.kind === "offer-launch-delivery-kickoff" &&
    kickoffReceipt.customerSafe === true &&
    kickoffReceipt.customerVisible === true &&
    kickoffReceipt.customerVisibleReceiptReady === true &&
    kickoffReceipt.webportalExportReady === true &&
    kickoffReceipt.appOwnedKickoffState === true &&
    kickoffReceipt.epochTimingProviderOnly === true &&
    kickoffReceipt.workshopCalendarOwnership !== true &&
    kickoffReceipt.monitorWorkflowExposed !== true &&
    kickoffReceipt.paymentLiveEnabled !== true &&
    kickoffReceipt.providerGoLiveRequested !== true &&
    kickoffReceipt.liveProviderEnabled !== true &&
    kickoffReceipt.aiForwardCopy !== true &&
    kickoffReceipt.japanCopyMode === "ai-neutral" &&
    kickoffReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const milestoneReady = kickoffReceipt.kickoffReady === true && kickoffReceipt.compatibilityGateRequired !== true;
  return {
    id: makeId("launch-delivery-milestone"),
    kickoffReceiptId: kickoffReceipt.id || kickoffReceipt.receiptId,
    requestId: kickoffReceipt.requestId || kickoffReceipt.serviceRequestId,
    kind: "offer-launch-delivery-milestone",
    status: milestoneReady ? "offer-launch-delivery-milestone-active" : "offer-launch-delivery-milestone-fit-review",
    milestonePath: milestoneReady ? "adult-service-first-delivery-milestone-active" : "compatibility-review-before-first-delivery-milestone",
    kickoffPath: kickoffReceipt.kickoffPath || "service-delivery-kickoff",
    serviceLane: kickoffReceipt.serviceLane || "submission-review",
    packageId: kickoffReceipt.packageId || "package",
    offerLabel: kickoffReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: kickoffReceipt.priceLabel || "pricing visible after review",
    customerLabel: kickoffReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: milestoneReady
      ? "WORKSHOP started the first delivery milestone. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding the first delivery milestone until compatibility review is complete.",
    operatorNextAction: milestoneReady
      ? "Complete the first delivery milestone review and export only the customer-safe milestone receipt."
      : "Complete compatibility review before first delivery milestone work, then export only the customer-safe milestone receipt.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedMilestoneState: true,
    appOwnedKickoffState: true,
    milestoneReady,
    kickoffReady: kickoffReceipt.kickoffReady === true,
    compatibilityGateRequired: kickoffReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: kickoffReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: kickoffReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryMilestoneReceiptForMilestone(milestone) {
  if (!milestone || typeof milestone !== "object") return null;
  const customerSafe =
    milestone.kind === "offer-launch-delivery-milestone" &&
    milestone.customerSafeForReceipt === true &&
    milestone.customerVisible !== true &&
    milestone.webportalExportReady !== true &&
    milestone.appOwnedMilestoneState === true &&
    milestone.appOwnedKickoffState === true &&
    milestone.epochTimingProviderOnly === true &&
    milestone.workshopCalendarOwnership !== true &&
    milestone.monitorWorkflowExposed !== true &&
    milestone.paymentLiveEnabled !== true &&
    milestone.providerGoLiveRequested !== true &&
    milestone.liveProviderEnabled !== true &&
    milestone.aiForwardCopy !== true &&
    milestone.japanCopyMode === "ai-neutral" &&
    milestone.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-milestone-receipt"),
    requestId: milestone.requestId,
    kind: "offer-launch-delivery-milestone",
    status: milestone.milestoneReady
      ? "customer-safe-offer-launch-delivery-milestone-active"
      : "customer-safe-offer-launch-delivery-milestone-fit-review",
    milestonePath: milestone.milestonePath,
    serviceLane: milestone.serviceLane,
    packageId: milestone.packageId,
    offerLabel: milestone.offerLabel,
    priceLabel: milestone.priceLabel,
    customerLabel: milestone.customerLabel,
    customerSafeMessage: milestone.milestoneReady
      ? "Your first WORKSHOP delivery milestone is active. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
      : "Your first WORKSHOP delivery milestone is waiting for compatibility review before delivery continues.",
    nextAction: milestone.requiresEpochTimingRequest
      ? "WORKSHOP will continue the first milestone and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will continue the first milestone without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedMilestoneState: true,
    appOwnedKickoffState: true,
    milestoneReady: milestone.milestoneReady === true,
    kickoffReady: milestone.kickoffReady === true,
    compatibilityGateRequired: milestone.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: milestone.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: milestone.requiresEpochTimingRequest === true,
    recordedAt: milestone.recordedAt
  };
}

export function createOfferLaunchDeliveryOutcomeForMilestoneReceipt(milestoneReceipt) {
  if (!milestoneReceipt || typeof milestoneReceipt !== "object") return null;
  const safeReceipt =
    milestoneReceipt.kind === "offer-launch-delivery-milestone" &&
    milestoneReceipt.customerSafe === true &&
    milestoneReceipt.customerVisible === true &&
    milestoneReceipt.customerVisibleReceiptReady === true &&
    milestoneReceipt.webportalExportReady === true &&
    milestoneReceipt.appOwnedMilestoneState === true &&
    milestoneReceipt.epochTimingProviderOnly === true &&
    milestoneReceipt.workshopCalendarOwnership !== true &&
    milestoneReceipt.monitorWorkflowExposed !== true &&
    milestoneReceipt.paymentLiveEnabled !== true &&
    milestoneReceipt.providerGoLiveRequested !== true &&
    milestoneReceipt.liveProviderEnabled !== true &&
    milestoneReceipt.aiForwardCopy !== true &&
    milestoneReceipt.japanCopyMode === "ai-neutral" &&
    milestoneReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const outcomeReady = milestoneReceipt.milestoneReady === true && milestoneReceipt.compatibilityGateRequired !== true;
  return {
    id: makeId("launch-delivery-outcome"),
    milestoneReceiptId: milestoneReceipt.id || milestoneReceipt.receiptId,
    requestId: milestoneReceipt.requestId || milestoneReceipt.serviceRequestId,
    kind: "offer-launch-delivery-outcome",
    status: outcomeReady ? "offer-launch-delivery-outcome-ready" : "offer-launch-delivery-outcome-fit-review",
    outcomePath: outcomeReady ? "adult-service-launch-delivery-outcome-ready" : "compatibility-review-before-launch-delivery-outcome",
    milestonePath: milestoneReceipt.milestonePath || "service-delivery-milestone-active",
    serviceLane: milestoneReceipt.serviceLane || "submission-review",
    packageId: milestoneReceipt.packageId || "package",
    offerLabel: milestoneReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: milestoneReceipt.priceLabel || "pricing visible after review",
    customerLabel: milestoneReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: outcomeReady
      ? "WORKSHOP completed the first delivery outcome and can review follow-up or renewal options. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding the delivery outcome until compatibility review is complete.",
    operatorNextAction: outcomeReady
      ? "Review outcome evidence and export only the customer-safe delivery outcome receipt."
      : "Complete compatibility review before outcome status is exported.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedOutcomeState: true,
    appOwnedMilestoneState: true,
    outcomeReady,
    milestoneReady: milestoneReceipt.milestoneReady === true,
    compatibilityGateRequired: milestoneReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: milestoneReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: milestoneReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryOutcomeReceiptForOutcome(outcome) {
  if (!outcome || typeof outcome !== "object") return null;
  const customerSafe =
    outcome.kind === "offer-launch-delivery-outcome" &&
    outcome.customerSafeForReceipt === true &&
    outcome.customerVisible !== true &&
    outcome.webportalExportReady !== true &&
    outcome.appOwnedOutcomeState === true &&
    outcome.appOwnedMilestoneState === true &&
    outcome.epochTimingProviderOnly === true &&
    outcome.workshopCalendarOwnership !== true &&
    outcome.monitorWorkflowExposed !== true &&
    outcome.paymentLiveEnabled !== true &&
    outcome.providerGoLiveRequested !== true &&
    outcome.liveProviderEnabled !== true &&
    outcome.aiForwardCopy !== true &&
    outcome.japanCopyMode === "ai-neutral" &&
    outcome.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-outcome-receipt"),
    requestId: outcome.requestId,
    kind: "offer-launch-delivery-outcome",
    status: outcome.outcomeReady
      ? "customer-safe-offer-launch-delivery-outcome-ready"
      : "customer-safe-offer-launch-delivery-outcome-fit-review",
    outcomePath: outcome.outcomePath,
    serviceLane: outcome.serviceLane,
    packageId: outcome.packageId,
    offerLabel: outcome.offerLabel,
    priceLabel: outcome.priceLabel,
    customerLabel: outcome.customerLabel,
    customerSafeMessage: outcome.outcomeReady
      ? "Your first WORKSHOP delivery outcome is ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
      : "Your WORKSHOP delivery outcome is waiting for compatibility review before follow-up planning continues.",
    nextAction: outcome.requiresEpochTimingRequest
      ? "WORKSHOP will review follow-up or renewal options and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will review follow-up or renewal options without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedOutcomeState: true,
    appOwnedMilestoneState: true,
    outcomeReady: outcome.outcomeReady === true,
    milestoneReady: outcome.milestoneReady === true,
    compatibilityGateRequired: outcome.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: outcome.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: outcome.requiresEpochTimingRequest === true,
    recordedAt: outcome.recordedAt
  };
}

export function createOfferLaunchDeliveryFollowUpForOutcomeReceipt(outcomeReceipt) {
  if (!outcomeReceipt || typeof outcomeReceipt !== "object") return null;
  const safeReceipt =
    outcomeReceipt.kind === "offer-launch-delivery-outcome" &&
    outcomeReceipt.customerSafe === true &&
    outcomeReceipt.customerVisible === true &&
    outcomeReceipt.customerVisibleReceiptReady === true &&
    outcomeReceipt.webportalExportReady === true &&
    outcomeReceipt.appOwnedOutcomeState === true &&
    outcomeReceipt.epochTimingProviderOnly === true &&
    outcomeReceipt.workshopCalendarOwnership !== true &&
    outcomeReceipt.monitorWorkflowExposed !== true &&
    outcomeReceipt.paymentLiveEnabled !== true &&
    outcomeReceipt.providerGoLiveRequested !== true &&
    outcomeReceipt.liveProviderEnabled !== true &&
    outcomeReceipt.aiForwardCopy !== true &&
    outcomeReceipt.japanCopyMode === "ai-neutral" &&
    outcomeReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const followUpReady = outcomeReceipt.outcomeReady === true && outcomeReceipt.compatibilityGateRequired !== true;
  return {
    id: makeId("launch-delivery-follow-up"),
    outcomeReceiptId: outcomeReceipt.id || outcomeReceipt.receiptId,
    requestId: outcomeReceipt.requestId || outcomeReceipt.serviceRequestId,
    kind: "offer-launch-delivery-follow-up",
    status: followUpReady ? "offer-launch-delivery-follow-up-ready" : "offer-launch-delivery-follow-up-fit-review",
    followUpPath: followUpReady ? "adult-service-launch-delivery-follow-up-ready" : "compatibility-review-before-launch-delivery-follow-up",
    outcomePath: outcomeReceipt.outcomePath || "service-delivery-outcome-ready",
    serviceLane: outcomeReceipt.serviceLane || "submission-review",
    packageId: outcomeReceipt.packageId || "package",
    offerLabel: outcomeReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: outcomeReceipt.priceLabel || "pricing visible after review",
    customerLabel: outcomeReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: followUpReady
      ? "WORKSHOP prepared follow-up, renewal, and referral review from the completed launch delivery outcome. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding follow-up planning until compatibility review is complete.",
    operatorNextAction: followUpReady
      ? "Review follow-up, renewal, and referral options, then export only the customer-safe delivery follow-up receipt."
      : "Complete compatibility review before follow-up status is exported.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedFollowUpState: true,
    appOwnedOutcomeState: true,
    followUpReady,
    renewalReady: followUpReady,
    referralReady: followUpReady,
    outcomeReady: outcomeReceipt.outcomeReady === true,
    compatibilityGateRequired: outcomeReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: outcomeReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: outcomeReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryFollowUpReceiptForFollowUp(followUp) {
  if (!followUp || typeof followUp !== "object") return null;
  const customerSafe =
    followUp.kind === "offer-launch-delivery-follow-up" &&
    followUp.customerSafeForReceipt === true &&
    followUp.customerVisible !== true &&
    followUp.webportalExportReady !== true &&
    followUp.appOwnedFollowUpState === true &&
    followUp.appOwnedOutcomeState === true &&
    followUp.epochTimingProviderOnly === true &&
    followUp.workshopCalendarOwnership !== true &&
    followUp.monitorWorkflowExposed !== true &&
    followUp.paymentLiveEnabled !== true &&
    followUp.providerGoLiveRequested !== true &&
    followUp.liveProviderEnabled !== true &&
    followUp.aiForwardCopy !== true &&
    followUp.japanCopyMode === "ai-neutral" &&
    followUp.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-follow-up-receipt"),
    requestId: followUp.requestId,
    kind: "offer-launch-delivery-follow-up",
    status: followUp.followUpReady
      ? "customer-safe-offer-launch-delivery-follow-up-ready"
      : "customer-safe-offer-launch-delivery-follow-up-fit-review",
    followUpPath: followUp.followUpPath,
    serviceLane: followUp.serviceLane,
    packageId: followUp.packageId,
    offerLabel: followUp.offerLabel,
    priceLabel: followUp.priceLabel,
    customerLabel: followUp.customerLabel,
    customerSafeMessage: followUp.followUpReady
      ? "Your WORKSHOP follow-up options are ready. EPOCH will be used only if a deadline, appointment, or reminder timing request is needed."
      : "Your WORKSHOP follow-up options are waiting for compatibility review before renewal or referral planning continues.",
    nextAction: followUp.requiresEpochTimingRequest
      ? "WORKSHOP will review renewal or referral options and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will review renewal or referral options without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedFollowUpState: true,
    appOwnedOutcomeState: true,
    followUpReady: followUp.followUpReady === true,
    renewalReady: followUp.renewalReady === true,
    referralReady: followUp.referralReady === true,
    outcomeReady: followUp.outcomeReady === true,
    compatibilityGateRequired: followUp.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: followUp.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: followUp.requiresEpochTimingRequest === true,
    recordedAt: followUp.recordedAt
  };
}

export function createOfferLaunchDeliveryGrowthPlanForFollowUpReceipt(followUpReceipt) {
  if (!followUpReceipt || typeof followUpReceipt !== "object") return null;
  const safeReceipt =
    followUpReceipt.kind === "offer-launch-delivery-follow-up" &&
    followUpReceipt.customerSafe === true &&
    followUpReceipt.customerVisible === true &&
    followUpReceipt.customerVisibleReceiptReady === true &&
    followUpReceipt.webportalExportReady === true &&
    followUpReceipt.appOwnedFollowUpState === true &&
    followUpReceipt.epochTimingProviderOnly === true &&
    followUpReceipt.workshopCalendarOwnership !== true &&
    followUpReceipt.monitorWorkflowExposed !== true &&
    followUpReceipt.paymentLiveEnabled !== true &&
    followUpReceipt.providerGoLiveRequested !== true &&
    followUpReceipt.liveProviderEnabled !== true &&
    followUpReceipt.aiForwardCopy !== true &&
    followUpReceipt.japanCopyMode === "ai-neutral" &&
    followUpReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const growthPlanReady =
    followUpReceipt.followUpReady === true &&
    followUpReceipt.outcomeReady === true &&
    (followUpReceipt.renewalReady === true || followUpReceipt.referralReady === true) &&
    followUpReceipt.compatibilityGateRequired !== true;
  return {
    id: makeId("launch-delivery-growth-plan"),
    followUpReceiptId: followUpReceipt.id || followUpReceipt.receiptId,
    requestId: followUpReceipt.requestId || followUpReceipt.serviceRequestId,
    kind: "offer-launch-delivery-growth-plan",
    status: growthPlanReady ? "offer-launch-delivery-growth-plan-ready" : "offer-launch-delivery-growth-plan-fit-review",
    growthPlanPath: growthPlanReady ? "adult-service-launch-delivery-growth-plan-ready" : "compatibility-review-before-launch-delivery-growth-plan",
    followUpPath: followUpReceipt.followUpPath || "service-delivery-follow-up-ready",
    serviceLane: followUpReceipt.serviceLane || "submission-review",
    packageId: followUpReceipt.packageId || "package",
    offerLabel: followUpReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: followUpReceipt.priceLabel || "pricing visible after review",
    customerLabel: followUpReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: growthPlanReady
      ? "WORKSHOP prepared repeat-service, renewal, and referral planning from customer-safe follow-up status. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding growth planning until compatibility review is complete.",
    operatorNextAction: growthPlanReady
      ? "Choose the repeat-service, renewal, or referral motion inside WORKSHOP, then export only the customer-safe delivery growth-plan receipt."
      : "Complete compatibility review before growth-plan status is exported.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedGrowthPlanState: true,
    appOwnedFollowUpState: true,
    followUpReady: followUpReceipt.followUpReady === true,
    renewalReady: followUpReceipt.renewalReady === true,
    referralReady: followUpReceipt.referralReady === true,
    repeatServiceReady: growthPlanReady,
    growthPlanReady,
    outcomeReady: followUpReceipt.outcomeReady === true,
    compatibilityGateRequired: followUpReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: followUpReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: followUpReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryGrowthPlanReceiptForGrowthPlan(growthPlan) {
  if (!growthPlan || typeof growthPlan !== "object") return null;
  const customerSafe =
    growthPlan.kind === "offer-launch-delivery-growth-plan" &&
    growthPlan.customerSafeForReceipt === true &&
    growthPlan.customerVisible !== true &&
    growthPlan.webportalExportReady !== true &&
    growthPlan.appOwnedGrowthPlanState === true &&
    growthPlan.appOwnedFollowUpState === true &&
    growthPlan.epochTimingProviderOnly === true &&
    growthPlan.workshopCalendarOwnership !== true &&
    growthPlan.monitorWorkflowExposed !== true &&
    growthPlan.paymentLiveEnabled !== true &&
    growthPlan.providerGoLiveRequested !== true &&
    growthPlan.liveProviderEnabled !== true &&
    growthPlan.aiForwardCopy !== true &&
    growthPlan.japanCopyMode === "ai-neutral" &&
    growthPlan.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-growth-plan-receipt"),
    requestId: growthPlan.requestId,
    kind: "offer-launch-delivery-growth-plan",
    status: growthPlan.growthPlanReady
      ? "customer-safe-offer-launch-delivery-growth-plan-ready"
      : "customer-safe-offer-launch-delivery-growth-plan-fit-review",
    growthPlanPath: growthPlan.growthPlanPath,
    serviceLane: growthPlan.serviceLane,
    packageId: growthPlan.packageId,
    offerLabel: growthPlan.offerLabel,
    priceLabel: growthPlan.priceLabel,
    customerLabel: growthPlan.customerLabel,
    customerSafeMessage: growthPlan.growthPlanReady
      ? "Your WORKSHOP repeat-service, renewal, and referral options are ready for review. EPOCH will be used only if timing is needed."
      : "Your WORKSHOP growth options are waiting for compatibility review before renewal or referral planning continues.",
    nextAction: growthPlan.requiresEpochTimingRequest
      ? "WORKSHOP will review the next repeat-service, renewal, or referral motion and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will review the next repeat-service, renewal, or referral motion without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedGrowthPlanState: true,
    appOwnedFollowUpState: true,
    followUpReady: growthPlan.followUpReady === true,
    renewalReady: growthPlan.renewalReady === true,
    referralReady: growthPlan.referralReady === true,
    repeatServiceReady: growthPlan.repeatServiceReady === true,
    growthPlanReady: growthPlan.growthPlanReady === true,
    outcomeReady: growthPlan.outcomeReady === true,
    compatibilityGateRequired: growthPlan.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: growthPlan.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: growthPlan.requiresEpochTimingRequest === true,
    recordedAt: growthPlan.recordedAt
  };
}

export function createOfferLaunchDeliveryGrowthPlanAcceptanceForGrowthPlanReceipt(growthPlanReceipt) {
  if (!growthPlanReceipt || typeof growthPlanReceipt !== "object") return null;
  const safeReceipt =
    growthPlanReceipt.kind === "offer-launch-delivery-growth-plan" &&
    growthPlanReceipt.customerSafe === true &&
    growthPlanReceipt.customerVisible === true &&
    growthPlanReceipt.customerVisibleReceiptReady === true &&
    growthPlanReceipt.webportalExportReady === true &&
    growthPlanReceipt.appOwnedGrowthPlanState === true &&
    growthPlanReceipt.epochTimingProviderOnly === true &&
    growthPlanReceipt.workshopCalendarOwnership !== true &&
    growthPlanReceipt.monitorWorkflowExposed !== true &&
    growthPlanReceipt.paymentLiveEnabled !== true &&
    growthPlanReceipt.providerGoLiveRequested !== true &&
    growthPlanReceipt.liveProviderEnabled !== true &&
    growthPlanReceipt.aiForwardCopy !== true &&
    growthPlanReceipt.japanCopyMode === "ai-neutral" &&
    growthPlanReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const acceptanceReady =
    growthPlanReceipt.growthPlanReady === true &&
    (growthPlanReceipt.repeatServiceReady === true ||
      growthPlanReceipt.renewalReady === true ||
      growthPlanReceipt.referralReady === true) &&
    growthPlanReceipt.compatibilityGateRequired !== true;
  return {
    id: makeId("launch-delivery-growth-plan-acceptance"),
    growthPlanReceiptId: growthPlanReceipt.id || growthPlanReceipt.receiptId,
    requestId: growthPlanReceipt.requestId || growthPlanReceipt.serviceRequestId,
    kind: "offer-launch-delivery-growth-plan-acceptance",
    status: acceptanceReady
      ? "offer-launch-delivery-growth-plan-acceptance-ready"
      : "offer-launch-delivery-growth-plan-acceptance-fit-review",
    acceptancePath: acceptanceReady ? "adult-service-launch-delivery-growth-plan-accepted" : "compatibility-review-before-launch-delivery-growth-plan-acceptance",
    growthPlanPath: growthPlanReceipt.growthPlanPath || "adult-service-launch-delivery-growth-plan-ready",
    serviceLane: growthPlanReceipt.serviceLane || "submission-review",
    packageId: growthPlanReceipt.packageId || "package",
    offerLabel: growthPlanReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: growthPlanReceipt.priceLabel || "pricing visible after review",
    customerLabel: growthPlanReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: acceptanceReady
      ? "WORKSHOP prepared customer-safe repeat-service, renewal, and referral acceptance from the growth-plan receipt. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding growth-plan acceptance until compatibility review is complete.",
    operatorNextAction: acceptanceReady
      ? "Confirm the accepted repeat-service, renewal, or referral motion inside WORKSHOP, then export only the customer-safe delivery growth-plan acceptance receipt."
      : "Complete compatibility review before growth-plan acceptance status is exported.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedAcceptanceState: true,
    appOwnedGrowthPlanState: true,
    growthPlanReady: growthPlanReceipt.growthPlanReady === true,
    repeatServiceAccepted: acceptanceReady && growthPlanReceipt.repeatServiceReady === true,
    renewalAccepted: acceptanceReady && growthPlanReceipt.renewalReady === true,
    referralAccepted: acceptanceReady && growthPlanReceipt.referralReady === true,
    acceptanceReady,
    compatibilityGateRequired: growthPlanReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: growthPlanReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: growthPlanReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryGrowthPlanAcceptanceReceiptForAcceptance(acceptance) {
  if (!acceptance || typeof acceptance !== "object") return null;
  const customerSafe =
    acceptance.kind === "offer-launch-delivery-growth-plan-acceptance" &&
    acceptance.customerSafeForReceipt === true &&
    acceptance.customerVisible !== true &&
    acceptance.webportalExportReady !== true &&
    acceptance.appOwnedAcceptanceState === true &&
    acceptance.appOwnedGrowthPlanState === true &&
    acceptance.epochTimingProviderOnly === true &&
    acceptance.workshopCalendarOwnership !== true &&
    acceptance.monitorWorkflowExposed !== true &&
    acceptance.paymentLiveEnabled !== true &&
    acceptance.providerGoLiveRequested !== true &&
    acceptance.liveProviderEnabled !== true &&
    acceptance.aiForwardCopy !== true &&
    acceptance.japanCopyMode === "ai-neutral" &&
    acceptance.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-growth-plan-acceptance-receipt"),
    requestId: acceptance.requestId,
    kind: "offer-launch-delivery-growth-plan-acceptance",
    status: acceptance.acceptanceReady
      ? "customer-safe-offer-launch-delivery-growth-plan-acceptance-ready"
      : "customer-safe-offer-launch-delivery-growth-plan-acceptance-fit-review",
    acceptancePath: acceptance.acceptancePath,
    serviceLane: acceptance.serviceLane,
    packageId: acceptance.packageId,
    offerLabel: acceptance.offerLabel,
    priceLabel: acceptance.priceLabel,
    customerLabel: acceptance.customerLabel,
    customerSafeMessage: acceptance.acceptanceReady
      ? "Your WORKSHOP repeat-service, renewal, or referral path has been accepted for the next delivery step. EPOCH will be used only if timing is needed."
      : "Your WORKSHOP growth-plan acceptance is waiting for compatibility review before the next service motion continues.",
    nextAction: acceptance.requiresEpochTimingRequest
      ? "WORKSHOP will prepare the accepted next service motion and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will prepare the accepted next service motion without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedAcceptanceState: true,
    appOwnedGrowthPlanState: true,
    growthPlanReady: acceptance.growthPlanReady === true,
    repeatServiceAccepted: acceptance.repeatServiceAccepted === true,
    renewalAccepted: acceptance.renewalAccepted === true,
    referralAccepted: acceptance.referralAccepted === true,
    acceptanceReady: acceptance.acceptanceReady === true,
    compatibilityGateRequired: acceptance.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: acceptance.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: acceptance.requiresEpochTimingRequest === true,
    recordedAt: acceptance.recordedAt
  };
}

export function createOfferLaunchDeliveryExpansionRequestForAcceptanceReceipt(acceptanceReceipt) {
  if (!acceptanceReceipt || typeof acceptanceReceipt !== "object") return null;
  const safeReceipt =
    acceptanceReceipt.kind === "offer-launch-delivery-growth-plan-acceptance" &&
    acceptanceReceipt.customerSafe === true &&
    acceptanceReceipt.customerVisible === true &&
    acceptanceReceipt.customerVisibleReceiptReady === true &&
    acceptanceReceipt.webportalExportReady === true &&
    acceptanceReceipt.appOwnedAcceptanceState === true &&
    acceptanceReceipt.epochTimingProviderOnly === true &&
    acceptanceReceipt.workshopCalendarOwnership !== true &&
    acceptanceReceipt.monitorWorkflowExposed !== true &&
    acceptanceReceipt.paymentLiveEnabled !== true &&
    acceptanceReceipt.providerGoLiveRequested !== true &&
    acceptanceReceipt.liveProviderEnabled !== true &&
    acceptanceReceipt.aiForwardCopy !== true &&
    acceptanceReceipt.japanCopyMode === "ai-neutral" &&
    acceptanceReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const expansionRequestReady =
    acceptanceReceipt.acceptanceReady === true &&
    (acceptanceReceipt.repeatServiceAccepted === true ||
      acceptanceReceipt.renewalAccepted === true ||
      acceptanceReceipt.referralAccepted === true) &&
    acceptanceReceipt.compatibilityGateRequired !== true;
  return {
    id: makeId("launch-delivery-expansion-request"),
    acceptanceReceiptId: acceptanceReceipt.id || acceptanceReceipt.receiptId,
    requestId: acceptanceReceipt.requestId || acceptanceReceipt.serviceRequestId,
    kind: "offer-launch-delivery-expansion-request",
    status: expansionRequestReady
      ? "offer-launch-delivery-expansion-request-ready"
      : "offer-launch-delivery-expansion-request-fit-review",
    expansionPath: expansionRequestReady ? "adult-service-launch-delivery-expansion-request-ready" : "compatibility-review-before-launch-delivery-expansion-request",
    acceptancePath: acceptanceReceipt.acceptancePath || "adult-service-launch-delivery-growth-plan-accepted",
    serviceLane: acceptanceReceipt.serviceLane || "submission-review",
    packageId: acceptanceReceipt.packageId || "package",
    offerLabel: acceptanceReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: acceptanceReceipt.priceLabel || "pricing visible after review",
    customerLabel: acceptanceReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: expansionRequestReady
      ? "WORKSHOP prepared the accepted repeat-service, renewal, or referral motion as an App-owned expansion request. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding the expansion request until compatibility review is complete.",
    operatorNextAction: expansionRequestReady
      ? "Prepare the next-service delivery workspace or intake inside WORKSHOP, then export only the customer-safe delivery expansion-request receipt."
      : "Complete compatibility review before expansion-request status is exported.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedExpansionRequestState: true,
    appOwnedAcceptanceState: true,
    acceptanceReady: acceptanceReceipt.acceptanceReady === true,
    repeatServiceRequested: expansionRequestReady && acceptanceReceipt.repeatServiceAccepted === true,
    renewalRequested: expansionRequestReady && acceptanceReceipt.renewalAccepted === true,
    referralRequested: expansionRequestReady && acceptanceReceipt.referralAccepted === true,
    expansionRequestReady,
    compatibilityGateRequired: acceptanceReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: acceptanceReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: acceptanceReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryExpansionRequestReceiptForRequest(expansionRequest) {
  if (!expansionRequest || typeof expansionRequest !== "object") return null;
  const customerSafe =
    expansionRequest.kind === "offer-launch-delivery-expansion-request" &&
    expansionRequest.customerSafeForReceipt === true &&
    expansionRequest.customerVisible !== true &&
    expansionRequest.webportalExportReady !== true &&
    expansionRequest.appOwnedExpansionRequestState === true &&
    expansionRequest.appOwnedAcceptanceState === true &&
    expansionRequest.epochTimingProviderOnly === true &&
    expansionRequest.workshopCalendarOwnership !== true &&
    expansionRequest.monitorWorkflowExposed !== true &&
    expansionRequest.paymentLiveEnabled !== true &&
    expansionRequest.providerGoLiveRequested !== true &&
    expansionRequest.liveProviderEnabled !== true &&
    expansionRequest.aiForwardCopy !== true &&
    expansionRequest.japanCopyMode === "ai-neutral" &&
    expansionRequest.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-expansion-request-receipt"),
    requestId: expansionRequest.requestId,
    kind: "offer-launch-delivery-expansion-request",
    status: expansionRequest.expansionRequestReady
      ? "customer-safe-offer-launch-delivery-expansion-request-ready"
      : "customer-safe-offer-launch-delivery-expansion-request-fit-review",
    expansionPath: expansionRequest.expansionPath,
    serviceLane: expansionRequest.serviceLane,
    packageId: expansionRequest.packageId,
    offerLabel: expansionRequest.offerLabel,
    priceLabel: expansionRequest.priceLabel,
    customerLabel: expansionRequest.customerLabel,
    customerSafeMessage: expansionRequest.expansionRequestReady
      ? "Your WORKSHOP repeat-service, renewal, or referral request is ready for the next service step. EPOCH will be used only if timing is needed."
      : "Your WORKSHOP next-service request is waiting for compatibility review before delivery continues.",
    nextAction: expansionRequest.requiresEpochTimingRequest
      ? "WORKSHOP will prepare the next service step and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will prepare the next service step without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedExpansionRequestState: true,
    appOwnedAcceptanceState: true,
    acceptanceReady: expansionRequest.acceptanceReady === true,
    repeatServiceRequested: expansionRequest.repeatServiceRequested === true,
    renewalRequested: expansionRequest.renewalRequested === true,
    referralRequested: expansionRequest.referralRequested === true,
    expansionRequestReady: expansionRequest.expansionRequestReady === true,
    compatibilityGateRequired: expansionRequest.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionRequest.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionRequest.requiresEpochTimingRequest === true,
    recordedAt: expansionRequest.recordedAt
  };
}

export function createOfferLaunchDeliveryExpansionWorkspaceForRequestReceipt(expansionRequestReceipt) {
  if (!expansionRequestReceipt || typeof expansionRequestReceipt !== "object") return null;
  const safeReceipt =
    expansionRequestReceipt.kind === "offer-launch-delivery-expansion-request" &&
    expansionRequestReceipt.customerSafe === true &&
    expansionRequestReceipt.customerVisible === true &&
    expansionRequestReceipt.customerVisibleReceiptReady === true &&
    expansionRequestReceipt.webportalExportReady === true &&
    expansionRequestReceipt.appOwnedExpansionRequestState === true &&
    expansionRequestReceipt.epochTimingProviderOnly === true &&
    expansionRequestReceipt.workshopCalendarOwnership !== true &&
    expansionRequestReceipt.monitorWorkflowExposed !== true &&
    expansionRequestReceipt.paymentLiveEnabled !== true &&
    expansionRequestReceipt.providerGoLiveRequested !== true &&
    expansionRequestReceipt.liveProviderEnabled !== true &&
    expansionRequestReceipt.aiForwardCopy !== true &&
    expansionRequestReceipt.japanCopyMode === "ai-neutral" &&
    expansionRequestReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const expansionWorkspaceReady =
    expansionRequestReceipt.expansionRequestReady === true &&
    (expansionRequestReceipt.repeatServiceRequested === true ||
      expansionRequestReceipt.renewalRequested === true ||
      expansionRequestReceipt.referralRequested === true) &&
    expansionRequestReceipt.compatibilityGateRequired !== true;
  return {
    id: makeId("launch-delivery-expansion-workspace"),
    expansionRequestReceiptId: expansionRequestReceipt.id || expansionRequestReceipt.receiptId,
    requestId: expansionRequestReceipt.requestId || expansionRequestReceipt.serviceRequestId,
    kind: "offer-launch-delivery-expansion-workspace",
    status: expansionWorkspaceReady
      ? "offer-launch-delivery-expansion-workspace-ready"
      : "offer-launch-delivery-expansion-workspace-fit-review",
    expansionWorkspacePath: expansionWorkspaceReady ? "adult-service-launch-delivery-expansion-workspace-ready" : "compatibility-review-before-launch-delivery-expansion-workspace",
    expansionPath: expansionRequestReceipt.expansionPath || "adult-service-launch-delivery-expansion-request-ready",
    serviceLane: expansionRequestReceipt.serviceLane || "submission-review",
    packageId: expansionRequestReceipt.packageId || "package",
    offerLabel: expansionRequestReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: expansionRequestReceipt.priceLabel || "pricing visible after review",
    customerLabel: expansionRequestReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: expansionWorkspaceReady
      ? "WORKSHOP prepared the next-service expansion workspace. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding the expansion workspace until compatibility review is complete.",
    operatorNextAction: expansionWorkspaceReady
      ? "Assign the next-service delivery plan inside WORKSHOP, then export only the customer-safe expansion workspace receipt."
      : "Complete compatibility review before expansion workspace activation, then export only the customer-safe expansion workspace receipt.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedExpansionWorkspaceState: true,
    appOwnedExpansionRequestState: true,
    expansionRequestReady: expansionRequestReceipt.expansionRequestReady === true,
    repeatServiceRequested: expansionWorkspaceReady && expansionRequestReceipt.repeatServiceRequested === true,
    renewalRequested: expansionWorkspaceReady && expansionRequestReceipt.renewalRequested === true,
    referralRequested: expansionWorkspaceReady && expansionRequestReceipt.referralRequested === true,
    expansionWorkspaceReady,
    compatibilityGateRequired: expansionRequestReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionRequestReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionRequestReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryExpansionWorkspaceReceiptForWorkspace(expansionWorkspace) {
  if (!expansionWorkspace || typeof expansionWorkspace !== "object") return null;
  const customerSafe =
    expansionWorkspace.kind === "offer-launch-delivery-expansion-workspace" &&
    expansionWorkspace.customerSafeForReceipt === true &&
    expansionWorkspace.customerVisible !== true &&
    expansionWorkspace.webportalExportReady !== true &&
    expansionWorkspace.appOwnedExpansionWorkspaceState === true &&
    expansionWorkspace.appOwnedExpansionRequestState === true &&
    expansionWorkspace.epochTimingProviderOnly === true &&
    expansionWorkspace.workshopCalendarOwnership !== true &&
    expansionWorkspace.monitorWorkflowExposed !== true &&
    expansionWorkspace.paymentLiveEnabled !== true &&
    expansionWorkspace.providerGoLiveRequested !== true &&
    expansionWorkspace.liveProviderEnabled !== true &&
    expansionWorkspace.aiForwardCopy !== true &&
    expansionWorkspace.japanCopyMode === "ai-neutral" &&
    expansionWorkspace.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-expansion-workspace-receipt"),
    requestId: expansionWorkspace.requestId,
    kind: "offer-launch-delivery-expansion-workspace",
    status: expansionWorkspace.expansionWorkspaceReady
      ? "customer-safe-offer-launch-delivery-expansion-workspace-ready"
      : "customer-safe-offer-launch-delivery-expansion-workspace-fit-review",
    expansionWorkspacePath: expansionWorkspace.expansionWorkspacePath,
    serviceLane: expansionWorkspace.serviceLane,
    packageId: expansionWorkspace.packageId,
    offerLabel: expansionWorkspace.offerLabel,
    priceLabel: expansionWorkspace.priceLabel,
    customerLabel: expansionWorkspace.customerLabel,
    customerSafeMessage: expansionWorkspace.expansionWorkspaceReady
      ? "Your WORKSHOP next-service workspace is ready. EPOCH will be used only if timing is needed."
      : "Your WORKSHOP next-service workspace is waiting for compatibility review before delivery continues.",
    nextAction: expansionWorkspace.requiresEpochTimingRequest
      ? "WORKSHOP will continue the next service step inside the expansion workspace and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will continue the next service step inside the expansion workspace without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedExpansionWorkspaceState: true,
    appOwnedExpansionRequestState: true,
    expansionRequestReady: expansionWorkspace.expansionRequestReady === true,
    repeatServiceRequested: expansionWorkspace.repeatServiceRequested === true,
    renewalRequested: expansionWorkspace.renewalRequested === true,
    referralRequested: expansionWorkspace.referralRequested === true,
    expansionWorkspaceReady: expansionWorkspace.expansionWorkspaceReady === true,
    compatibilityGateRequired: expansionWorkspace.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionWorkspace.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionWorkspace.requiresEpochTimingRequest === true,
    recordedAt: expansionWorkspace.recordedAt
  };
}

export function createOfferLaunchDeliveryExpansionKickoffForWorkspaceReceipt(expansionWorkspaceReceipt) {
  if (!expansionWorkspaceReceipt || typeof expansionWorkspaceReceipt !== "object") return null;
  const safeForKickoff =
    expansionWorkspaceReceipt.kind === "offer-launch-delivery-expansion-workspace" &&
    expansionWorkspaceReceipt.customerSafe === true &&
    expansionWorkspaceReceipt.customerVisible === true &&
    expansionWorkspaceReceipt.customerVisibleReceiptReady === true &&
    expansionWorkspaceReceipt.webportalExportReady === true &&
    expansionWorkspaceReceipt.appOwnedExpansionWorkspaceState === true &&
    expansionWorkspaceReceipt.epochTimingProviderOnly === true &&
    expansionWorkspaceReceipt.workshopCalendarOwnership !== true &&
    expansionWorkspaceReceipt.monitorWorkflowExposed !== true &&
    expansionWorkspaceReceipt.paymentLiveEnabled !== true &&
    expansionWorkspaceReceipt.providerGoLiveRequested !== true &&
    expansionWorkspaceReceipt.liveProviderEnabled !== true &&
    expansionWorkspaceReceipt.aiForwardCopy !== true &&
    expansionWorkspaceReceipt.japanCopyMode === "ai-neutral" &&
    expansionWorkspaceReceipt.nativeExecutionReady === true;
  if (!safeForKickoff) return null;

  const expansionKickoffReady =
    expansionWorkspaceReceipt.expansionWorkspaceReady === true &&
    (expansionWorkspaceReceipt.repeatServiceRequested === true ||
      expansionWorkspaceReceipt.renewalRequested === true ||
      expansionWorkspaceReceipt.referralRequested === true) &&
    expansionWorkspaceReceipt.compatibilityGateRequired !== true;

  return {
    id: makeId("launch-delivery-expansion-kickoff"),
    expansionWorkspaceReceiptId: expansionWorkspaceReceipt.id,
    requestId: expansionWorkspaceReceipt.requestId,
    kind: "offer-launch-delivery-expansion-kickoff",
    status: expansionKickoffReady
      ? "offer-launch-delivery-expansion-kickoff-ready"
      : "offer-launch-delivery-expansion-kickoff-fit-review",
    expansionKickoffPath: expansionKickoffReady ? "adult-service-launch-delivery-expansion-kickoff-active" : "compatibility-review-before-launch-delivery-expansion-kickoff",
    expansionWorkspacePath: expansionWorkspaceReceipt.expansionWorkspacePath,
    serviceLane: expansionWorkspaceReceipt.serviceLane,
    packageId: expansionWorkspaceReceipt.packageId,
    offerLabel: expansionWorkspaceReceipt.offerLabel,
    priceLabel: expansionWorkspaceReceipt.priceLabel,
    customerLabel: expansionWorkspaceReceipt.customerLabel,
    customerSafeStatus: expansionKickoffReady
      ? "WORKSHOP moved the next-service expansion workspace into kickoff. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding next-service kickoff until compatibility review is complete.",
    operatorNextAction: expansionKickoffReady
      ? "Begin the next-service delivery kickoff inside WORKSHOP, then export only the customer-safe expansion kickoff receipt."
      : "Complete compatibility review before next-service kickoff, then export only the customer-safe expansion kickoff receipt.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedExpansionKickoffState: true,
    appOwnedExpansionWorkspaceState: true,
    expansionKickoffReady,
    expansionWorkspaceReady: expansionWorkspaceReceipt.expansionWorkspaceReady === true,
    repeatServiceRequested: expansionKickoffReady && expansionWorkspaceReceipt.repeatServiceRequested === true,
    renewalRequested: expansionKickoffReady && expansionWorkspaceReceipt.renewalRequested === true,
    referralRequested: expansionKickoffReady && expansionWorkspaceReceipt.referralRequested === true,
    compatibilityGateRequired: expansionWorkspaceReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionWorkspaceReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionWorkspaceReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryExpansionKickoffReceiptForKickoff(expansionKickoff) {
  if (!expansionKickoff || typeof expansionKickoff !== "object") return null;
  const customerSafe =
    expansionKickoff.kind === "offer-launch-delivery-expansion-kickoff" &&
    expansionKickoff.customerSafeForReceipt === true &&
    expansionKickoff.customerVisible !== true &&
    expansionKickoff.webportalExportReady !== true &&
    expansionKickoff.appOwnedExpansionKickoffState === true &&
    expansionKickoff.appOwnedExpansionWorkspaceState === true &&
    expansionKickoff.epochTimingProviderOnly === true &&
    expansionKickoff.workshopCalendarOwnership !== true &&
    expansionKickoff.monitorWorkflowExposed !== true &&
    expansionKickoff.paymentLiveEnabled !== true &&
    expansionKickoff.providerGoLiveRequested !== true &&
    expansionKickoff.liveProviderEnabled !== true &&
    expansionKickoff.aiForwardCopy !== true &&
    expansionKickoff.japanCopyMode === "ai-neutral" &&
    expansionKickoff.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-expansion-kickoff-receipt"),
    requestId: expansionKickoff.requestId,
    kind: "offer-launch-delivery-expansion-kickoff",
    status: expansionKickoff.expansionKickoffReady
      ? "customer-safe-offer-launch-delivery-expansion-kickoff-ready"
      : "customer-safe-offer-launch-delivery-expansion-kickoff-fit-review",
    expansionKickoffPath: expansionKickoff.expansionKickoffPath,
    serviceLane: expansionKickoff.serviceLane,
    packageId: expansionKickoff.packageId,
    offerLabel: expansionKickoff.offerLabel,
    priceLabel: expansionKickoff.priceLabel,
    customerLabel: expansionKickoff.customerLabel,
    customerSafeMessage: expansionKickoff.expansionKickoffReady
      ? "Your WORKSHOP next-service kickoff is ready. EPOCH will be used only if timing is needed."
      : "Your WORKSHOP next-service kickoff is waiting for compatibility review before delivery continues.",
    nextAction: expansionKickoff.requiresEpochTimingRequest
      ? "WORKSHOP will begin the next service milestone and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will begin the next service milestone without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedExpansionKickoffState: true,
    appOwnedExpansionWorkspaceState: true,
    expansionKickoffReady: expansionKickoff.expansionKickoffReady === true,
    expansionWorkspaceReady: expansionKickoff.expansionWorkspaceReady === true,
    repeatServiceRequested: expansionKickoff.repeatServiceRequested === true,
    renewalRequested: expansionKickoff.renewalRequested === true,
    referralRequested: expansionKickoff.referralRequested === true,
    compatibilityGateRequired: expansionKickoff.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionKickoff.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionKickoff.requiresEpochTimingRequest === true,
    recordedAt: expansionKickoff.recordedAt
  };
}

export function createOfferLaunchDeliveryExpansionMilestoneForKickoffReceipt(expansionKickoffReceipt) {
  if (!expansionKickoffReceipt || typeof expansionKickoffReceipt !== "object") return null;
  const safeForMilestone =
    expansionKickoffReceipt.kind === "offer-launch-delivery-expansion-kickoff" &&
    expansionKickoffReceipt.customerSafe === true &&
    expansionKickoffReceipt.customerVisible === true &&
    expansionKickoffReceipt.customerVisibleReceiptReady === true &&
    expansionKickoffReceipt.webportalExportReady === true &&
    expansionKickoffReceipt.appOwnedExpansionKickoffState === true &&
    expansionKickoffReceipt.epochTimingProviderOnly === true &&
    expansionKickoffReceipt.workshopCalendarOwnership !== true &&
    expansionKickoffReceipt.monitorWorkflowExposed !== true &&
    expansionKickoffReceipt.paymentLiveEnabled !== true &&
    expansionKickoffReceipt.providerGoLiveRequested !== true &&
    expansionKickoffReceipt.liveProviderEnabled !== true &&
    expansionKickoffReceipt.aiForwardCopy !== true &&
    expansionKickoffReceipt.japanCopyMode === "ai-neutral" &&
    expansionKickoffReceipt.nativeExecutionReady === true;
  if (!safeForMilestone) return null;

  const expansionMilestoneReady =
    expansionKickoffReceipt.expansionKickoffReady === true &&
    (expansionKickoffReceipt.repeatServiceRequested === true ||
      expansionKickoffReceipt.renewalRequested === true ||
      expansionKickoffReceipt.referralRequested === true) &&
    expansionKickoffReceipt.compatibilityGateRequired !== true;

  return {
    id: makeId("launch-delivery-expansion-milestone"),
    expansionKickoffReceiptId: expansionKickoffReceipt.id,
    requestId: expansionKickoffReceipt.requestId,
    kind: "offer-launch-delivery-expansion-milestone",
    status: expansionMilestoneReady
      ? "offer-launch-delivery-expansion-milestone-active"
      : "offer-launch-delivery-expansion-milestone-fit-review",
    expansionMilestonePath: expansionMilestoneReady ? "adult-service-launch-delivery-expansion-milestone-active" : "compatibility-review-before-launch-delivery-expansion-milestone",
    expansionKickoffPath: expansionKickoffReceipt.expansionKickoffPath,
    serviceLane: expansionKickoffReceipt.serviceLane,
    packageId: expansionKickoffReceipt.packageId,
    offerLabel: expansionKickoffReceipt.offerLabel,
    priceLabel: expansionKickoffReceipt.priceLabel,
    customerLabel: expansionKickoffReceipt.customerLabel,
    customerSafeStatus: expansionMilestoneReady
      ? "WORKSHOP started the next-service delivery milestone. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding the next-service delivery milestone until compatibility review is complete.",
    operatorNextAction: expansionMilestoneReady
      ? "Complete the next-service delivery milestone review and export only the customer-safe expansion milestone receipt."
      : "Complete compatibility review before next-service milestone delivery, then export only the customer-safe expansion milestone receipt.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedExpansionMilestoneState: true,
    appOwnedExpansionKickoffState: true,
    expansionMilestoneReady,
    expansionKickoffReady: expansionKickoffReceipt.expansionKickoffReady === true,
    repeatServiceRequested: expansionMilestoneReady && expansionKickoffReceipt.repeatServiceRequested === true,
    renewalRequested: expansionMilestoneReady && expansionKickoffReceipt.renewalRequested === true,
    referralRequested: expansionMilestoneReady && expansionKickoffReceipt.referralRequested === true,
    compatibilityGateRequired: expansionKickoffReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionKickoffReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionKickoffReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryExpansionMilestoneReceiptForMilestone(expansionMilestone) {
  if (!expansionMilestone || typeof expansionMilestone !== "object") return null;
  const customerSafe =
    expansionMilestone.kind === "offer-launch-delivery-expansion-milestone" &&
    expansionMilestone.customerSafeForReceipt === true &&
    expansionMilestone.customerVisible !== true &&
    expansionMilestone.webportalExportReady !== true &&
    expansionMilestone.appOwnedExpansionMilestoneState === true &&
    expansionMilestone.appOwnedExpansionKickoffState === true &&
    expansionMilestone.epochTimingProviderOnly === true &&
    expansionMilestone.workshopCalendarOwnership !== true &&
    expansionMilestone.monitorWorkflowExposed !== true &&
    expansionMilestone.paymentLiveEnabled !== true &&
    expansionMilestone.providerGoLiveRequested !== true &&
    expansionMilestone.liveProviderEnabled !== true &&
    expansionMilestone.aiForwardCopy !== true &&
    expansionMilestone.japanCopyMode === "ai-neutral" &&
    expansionMilestone.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-expansion-milestone-receipt"),
    requestId: expansionMilestone.requestId,
    kind: "offer-launch-delivery-expansion-milestone",
    status: expansionMilestone.expansionMilestoneReady
      ? "customer-safe-offer-launch-delivery-expansion-milestone-active"
      : "customer-safe-offer-launch-delivery-expansion-milestone-fit-review",
    expansionMilestonePath: expansionMilestone.expansionMilestonePath,
    serviceLane: expansionMilestone.serviceLane,
    packageId: expansionMilestone.packageId,
    offerLabel: expansionMilestone.offerLabel,
    priceLabel: expansionMilestone.priceLabel,
    customerLabel: expansionMilestone.customerLabel,
    customerSafeMessage: expansionMilestone.expansionMilestoneReady
      ? "Your WORKSHOP next-service delivery milestone is active. EPOCH will be used only if timing is needed."
      : "Your WORKSHOP next-service delivery milestone is waiting for compatibility review before delivery continues.",
    nextAction: expansionMilestone.requiresEpochTimingRequest
      ? "WORKSHOP will continue the next service milestone and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will continue the next service milestone without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedExpansionMilestoneState: true,
    appOwnedExpansionKickoffState: true,
    expansionMilestoneReady: expansionMilestone.expansionMilestoneReady === true,
    expansionKickoffReady: expansionMilestone.expansionKickoffReady === true,
    repeatServiceRequested: expansionMilestone.repeatServiceRequested === true,
    renewalRequested: expansionMilestone.renewalRequested === true,
    referralRequested: expansionMilestone.referralRequested === true,
    compatibilityGateRequired: expansionMilestone.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionMilestone.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionMilestone.requiresEpochTimingRequest === true,
    recordedAt: expansionMilestone.recordedAt
  };
}

export function createOfferLaunchDeliveryExpansionOutcomeForMilestoneReceipt(expansionMilestoneReceipt) {
  if (!expansionMilestoneReceipt || typeof expansionMilestoneReceipt !== "object") return null;
  const safeForOutcome =
    expansionMilestoneReceipt.kind === "offer-launch-delivery-expansion-milestone" &&
    expansionMilestoneReceipt.customerSafe === true &&
    expansionMilestoneReceipt.customerVisible === true &&
    expansionMilestoneReceipt.customerVisibleReceiptReady === true &&
    expansionMilestoneReceipt.webportalExportReady === true &&
    expansionMilestoneReceipt.appOwnedExpansionMilestoneState === true &&
    expansionMilestoneReceipt.epochTimingProviderOnly === true &&
    expansionMilestoneReceipt.workshopCalendarOwnership !== true &&
    expansionMilestoneReceipt.monitorWorkflowExposed !== true &&
    expansionMilestoneReceipt.paymentLiveEnabled !== true &&
    expansionMilestoneReceipt.providerGoLiveRequested !== true &&
    expansionMilestoneReceipt.liveProviderEnabled !== true &&
    expansionMilestoneReceipt.aiForwardCopy !== true &&
    expansionMilestoneReceipt.japanCopyMode === "ai-neutral" &&
    expansionMilestoneReceipt.nativeExecutionReady === true;
  if (!safeForOutcome) return null;

  const expansionOutcomeReady =
    expansionMilestoneReceipt.expansionMilestoneReady === true &&
    (expansionMilestoneReceipt.repeatServiceRequested === true ||
      expansionMilestoneReceipt.renewalRequested === true ||
      expansionMilestoneReceipt.referralRequested === true) &&
    expansionMilestoneReceipt.compatibilityGateRequired !== true;

  return {
    id: makeId("launch-delivery-expansion-outcome"),
    expansionMilestoneReceiptId: expansionMilestoneReceipt.id || expansionMilestoneReceipt.receiptId,
    requestId: expansionMilestoneReceipt.requestId,
    kind: "offer-launch-delivery-expansion-outcome",
    status: expansionOutcomeReady
      ? "offer-launch-delivery-expansion-outcome-ready"
      : "offer-launch-delivery-expansion-outcome-fit-review",
    expansionOutcomePath: expansionOutcomeReady ? "adult-service-launch-delivery-expansion-outcome-ready" : "compatibility-review-before-launch-delivery-expansion-outcome",
    expansionMilestonePath: expansionMilestoneReceipt.expansionMilestonePath,
    serviceLane: expansionMilestoneReceipt.serviceLane,
    packageId: expansionMilestoneReceipt.packageId,
    offerLabel: expansionMilestoneReceipt.offerLabel,
    priceLabel: expansionMilestoneReceipt.priceLabel,
    customerLabel: expansionMilestoneReceipt.customerLabel,
    customerSafeStatus: expansionOutcomeReady
      ? "WORKSHOP completed the next-service delivery outcome and can review follow-up, renewal, or referral options. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding the next-service delivery outcome until compatibility review is complete.",
    operatorNextAction: expansionOutcomeReady
      ? "Review expansion outcome evidence and export only the customer-safe expansion outcome receipt."
      : "Complete compatibility review before next-service outcome status is exported.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedExpansionOutcomeState: true,
    appOwnedExpansionMilestoneState: true,
    expansionOutcomeReady,
    expansionMilestoneReady: expansionMilestoneReceipt.expansionMilestoneReady === true,
    repeatServiceRequested: expansionOutcomeReady && expansionMilestoneReceipt.repeatServiceRequested === true,
    renewalRequested: expansionOutcomeReady && expansionMilestoneReceipt.renewalRequested === true,
    referralRequested: expansionOutcomeReady && expansionMilestoneReceipt.referralRequested === true,
    compatibilityGateRequired: expansionMilestoneReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionMilestoneReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionMilestoneReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryExpansionOutcomeReceiptForOutcome(expansionOutcome) {
  if (!expansionOutcome || typeof expansionOutcome !== "object") return null;
  const customerSafe =
    expansionOutcome.kind === "offer-launch-delivery-expansion-outcome" &&
    expansionOutcome.customerSafeForReceipt === true &&
    expansionOutcome.customerVisible !== true &&
    expansionOutcome.webportalExportReady !== true &&
    expansionOutcome.appOwnedExpansionOutcomeState === true &&
    expansionOutcome.appOwnedExpansionMilestoneState === true &&
    expansionOutcome.epochTimingProviderOnly === true &&
    expansionOutcome.workshopCalendarOwnership !== true &&
    expansionOutcome.monitorWorkflowExposed !== true &&
    expansionOutcome.paymentLiveEnabled !== true &&
    expansionOutcome.providerGoLiveRequested !== true &&
    expansionOutcome.liveProviderEnabled !== true &&
    expansionOutcome.aiForwardCopy !== true &&
    expansionOutcome.japanCopyMode === "ai-neutral" &&
    expansionOutcome.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-expansion-outcome-receipt"),
    requestId: expansionOutcome.requestId,
    kind: "offer-launch-delivery-expansion-outcome",
    status: expansionOutcome.expansionOutcomeReady
      ? "customer-safe-offer-launch-delivery-expansion-outcome-ready"
      : "customer-safe-offer-launch-delivery-expansion-outcome-fit-review",
    expansionOutcomePath: expansionOutcome.expansionOutcomePath,
    serviceLane: expansionOutcome.serviceLane,
    packageId: expansionOutcome.packageId,
    offerLabel: expansionOutcome.offerLabel,
    priceLabel: expansionOutcome.priceLabel,
    customerLabel: expansionOutcome.customerLabel,
    customerSafeMessage: expansionOutcome.expansionOutcomeReady
      ? "Your WORKSHOP next-service delivery outcome is ready. EPOCH will be used only if timing is needed."
      : "Your WORKSHOP next-service delivery outcome is waiting for compatibility review before follow-up planning continues.",
    nextAction: expansionOutcome.requiresEpochTimingRequest
      ? "WORKSHOP will review the next service follow-up, renewal, or referral path and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will review the next service follow-up, renewal, or referral path without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedExpansionOutcomeState: true,
    appOwnedExpansionMilestoneState: true,
    expansionOutcomeReady: expansionOutcome.expansionOutcomeReady === true,
    expansionMilestoneReady: expansionOutcome.expansionMilestoneReady === true,
    repeatServiceRequested: expansionOutcome.repeatServiceRequested === true,
    renewalRequested: expansionOutcome.renewalRequested === true,
    referralRequested: expansionOutcome.referralRequested === true,
    compatibilityGateRequired: expansionOutcome.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionOutcome.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionOutcome.requiresEpochTimingRequest === true,
    recordedAt: expansionOutcome.recordedAt
  };
}

export function createOfferLaunchDeliveryExpansionFollowUpForOutcomeReceipt(expansionOutcomeReceipt) {
  if (!expansionOutcomeReceipt || typeof expansionOutcomeReceipt !== "object") return null;
  const safeForFollowUp =
    expansionOutcomeReceipt.kind === "offer-launch-delivery-expansion-outcome" &&
    expansionOutcomeReceipt.customerSafe === true &&
    expansionOutcomeReceipt.customerVisible === true &&
    expansionOutcomeReceipt.customerVisibleReceiptReady === true &&
    expansionOutcomeReceipt.webportalExportReady === true &&
    expansionOutcomeReceipt.appOwnedExpansionOutcomeState === true &&
    expansionOutcomeReceipt.epochTimingProviderOnly === true &&
    expansionOutcomeReceipt.workshopCalendarOwnership !== true &&
    expansionOutcomeReceipt.monitorWorkflowExposed !== true &&
    expansionOutcomeReceipt.paymentLiveEnabled !== true &&
    expansionOutcomeReceipt.providerGoLiveRequested !== true &&
    expansionOutcomeReceipt.liveProviderEnabled !== true &&
    expansionOutcomeReceipt.aiForwardCopy !== true &&
    expansionOutcomeReceipt.japanCopyMode === "ai-neutral" &&
    expansionOutcomeReceipt.nativeExecutionReady === true;
  if (!safeForFollowUp) return null;

  const expansionFollowUpReady =
    expansionOutcomeReceipt.expansionOutcomeReady === true &&
    (expansionOutcomeReceipt.repeatServiceRequested === true ||
      expansionOutcomeReceipt.renewalRequested === true ||
      expansionOutcomeReceipt.referralRequested === true) &&
    expansionOutcomeReceipt.compatibilityGateRequired !== true;

  return {
    id: makeId("launch-delivery-expansion-follow-up"),
    expansionOutcomeReceiptId: expansionOutcomeReceipt.id || expansionOutcomeReceipt.receiptId,
    requestId: expansionOutcomeReceipt.requestId,
    kind: "offer-launch-delivery-expansion-follow-up",
    status: expansionFollowUpReady
      ? "offer-launch-delivery-expansion-follow-up-ready"
      : "offer-launch-delivery-expansion-follow-up-fit-review",
    expansionFollowUpPath: expansionFollowUpReady ? "adult-service-launch-delivery-expansion-follow-up-ready" : "compatibility-review-before-launch-delivery-expansion-follow-up",
    expansionOutcomePath: expansionOutcomeReceipt.expansionOutcomePath,
    serviceLane: expansionOutcomeReceipt.serviceLane,
    packageId: expansionOutcomeReceipt.packageId,
    offerLabel: expansionOutcomeReceipt.offerLabel,
    priceLabel: expansionOutcomeReceipt.priceLabel,
    customerLabel: expansionOutcomeReceipt.customerLabel,
    customerSafeStatus: expansionFollowUpReady
      ? "WORKSHOP prepared next-service follow-up, renewal, and referral review from the expansion outcome. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding next-service follow-up planning until compatibility review is complete.",
    operatorNextAction: expansionFollowUpReady
      ? "Review the repeat-service, renewal, and referral path, then export only the customer-safe expansion follow-up receipt."
      : "Complete compatibility review before next-service follow-up status is exported.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedExpansionFollowUpState: true,
    appOwnedExpansionOutcomeState: true,
    expansionFollowUpReady,
    expansionOutcomeReady: expansionOutcomeReceipt.expansionOutcomeReady === true,
    repeatServiceReady: expansionFollowUpReady && expansionOutcomeReceipt.repeatServiceRequested === true,
    renewalReady: expansionFollowUpReady && expansionOutcomeReceipt.renewalRequested === true,
    referralReady: expansionFollowUpReady && expansionOutcomeReceipt.referralRequested === true,
    compatibilityGateRequired: expansionOutcomeReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionOutcomeReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionOutcomeReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryExpansionFollowUpReceiptForFollowUp(expansionFollowUp) {
  if (!expansionFollowUp || typeof expansionFollowUp !== "object") return null;
  const customerSafe =
    expansionFollowUp.kind === "offer-launch-delivery-expansion-follow-up" &&
    expansionFollowUp.customerSafeForReceipt === true &&
    expansionFollowUp.customerVisible !== true &&
    expansionFollowUp.webportalExportReady !== true &&
    expansionFollowUp.appOwnedExpansionFollowUpState === true &&
    expansionFollowUp.appOwnedExpansionOutcomeState === true &&
    expansionFollowUp.epochTimingProviderOnly === true &&
    expansionFollowUp.workshopCalendarOwnership !== true &&
    expansionFollowUp.monitorWorkflowExposed !== true &&
    expansionFollowUp.paymentLiveEnabled !== true &&
    expansionFollowUp.providerGoLiveRequested !== true &&
    expansionFollowUp.liveProviderEnabled !== true &&
    expansionFollowUp.aiForwardCopy !== true &&
    expansionFollowUp.japanCopyMode === "ai-neutral" &&
    expansionFollowUp.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-expansion-follow-up-receipt"),
    requestId: expansionFollowUp.requestId,
    kind: "offer-launch-delivery-expansion-follow-up",
    status: expansionFollowUp.expansionFollowUpReady
      ? "customer-safe-offer-launch-delivery-expansion-follow-up-ready"
      : "customer-safe-offer-launch-delivery-expansion-follow-up-fit-review",
    expansionFollowUpPath: expansionFollowUp.expansionFollowUpPath,
    serviceLane: expansionFollowUp.serviceLane,
    packageId: expansionFollowUp.packageId,
    offerLabel: expansionFollowUp.offerLabel,
    priceLabel: expansionFollowUp.priceLabel,
    customerLabel: expansionFollowUp.customerLabel,
    customerSafeMessage: expansionFollowUp.expansionFollowUpReady
      ? "Your WORKSHOP next-service follow-up options are ready. EPOCH will be used only if timing is needed."
      : "Your WORKSHOP next-service follow-up options are waiting for compatibility review before renewal or referral planning continues.",
    nextAction: expansionFollowUp.requiresEpochTimingRequest
      ? "WORKSHOP will review repeat-service, renewal, or referral options and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will review repeat-service, renewal, or referral options without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedExpansionFollowUpState: true,
    appOwnedExpansionOutcomeState: true,
    expansionFollowUpReady: expansionFollowUp.expansionFollowUpReady === true,
    expansionOutcomeReady: expansionFollowUp.expansionOutcomeReady === true,
    repeatServiceReady: expansionFollowUp.repeatServiceReady === true,
    renewalReady: expansionFollowUp.renewalReady === true,
    referralReady: expansionFollowUp.referralReady === true,
    compatibilityGateRequired: expansionFollowUp.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionFollowUp.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionFollowUp.requiresEpochTimingRequest === true,
    recordedAt: expansionFollowUp.recordedAt
  };
}

export function createOfferLaunchDeliveryExpansionGrowthPlanForFollowUpReceipt(expansionFollowUpReceipt) {
  if (!expansionFollowUpReceipt || typeof expansionFollowUpReceipt !== "object") return null;
  const safeForGrowthPlan =
    expansionFollowUpReceipt.kind === "offer-launch-delivery-expansion-follow-up" &&
    expansionFollowUpReceipt.customerSafe === true &&
    expansionFollowUpReceipt.customerVisible === true &&
    expansionFollowUpReceipt.customerVisibleReceiptReady === true &&
    expansionFollowUpReceipt.webportalExportReady === true &&
    expansionFollowUpReceipt.appOwnedExpansionFollowUpState === true &&
    expansionFollowUpReceipt.epochTimingProviderOnly === true &&
    expansionFollowUpReceipt.workshopCalendarOwnership !== true &&
    expansionFollowUpReceipt.monitorWorkflowExposed !== true &&
    expansionFollowUpReceipt.paymentLiveEnabled !== true &&
    expansionFollowUpReceipt.providerGoLiveRequested !== true &&
    expansionFollowUpReceipt.liveProviderEnabled !== true &&
    expansionFollowUpReceipt.aiForwardCopy !== true &&
    expansionFollowUpReceipt.japanCopyMode === "ai-neutral" &&
    expansionFollowUpReceipt.under19GuardRequired === true &&
    expansionFollowUpReceipt.nativeExecutionReady === true;
  if (!safeForGrowthPlan) return null;

  const expansionGrowthPlanReady =
    expansionFollowUpReceipt.expansionFollowUpReady === true &&
    expansionFollowUpReceipt.expansionOutcomeReady === true &&
    (expansionFollowUpReceipt.repeatServiceReady === true ||
      expansionFollowUpReceipt.renewalReady === true ||
      expansionFollowUpReceipt.referralReady === true) &&
    expansionFollowUpReceipt.compatibilityGateRequired !== true;

  return {
    id: makeId("launch-delivery-expansion-growth-plan"),
    expansionFollowUpReceiptId: expansionFollowUpReceipt.id || expansionFollowUpReceipt.receiptId,
    requestId: expansionFollowUpReceipt.requestId,
    kind: "offer-launch-delivery-expansion-growth-plan",
    status: expansionGrowthPlanReady
      ? "offer-launch-delivery-expansion-growth-plan-ready"
      : "offer-launch-delivery-expansion-growth-plan-fit-review",
    expansionGrowthPlanPath: expansionGrowthPlanReady ? "adult-service-launch-delivery-expansion-growth-plan-ready" : "compatibility-review-before-launch-delivery-expansion-growth-plan",
    expansionFollowUpPath: expansionFollowUpReceipt.expansionFollowUpPath,
    serviceLane: expansionFollowUpReceipt.serviceLane,
    packageId: expansionFollowUpReceipt.packageId,
    offerLabel: expansionFollowUpReceipt.offerLabel,
    priceLabel: expansionFollowUpReceipt.priceLabel,
    customerLabel: expansionFollowUpReceipt.customerLabel,
    customerSafeStatus: expansionGrowthPlanReady
      ? "WORKSHOP prepared next-service repeat-service, renewal, and referral growth planning from the expansion follow-up. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding next-service growth planning until compatibility review is complete.",
    operatorNextAction: expansionGrowthPlanReady
      ? "Choose the repeat-service, renewal, or referral motion, then export only the customer-safe expansion growth-plan receipt."
      : "Complete compatibility review before expansion growth-plan status is exported.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedExpansionGrowthPlanState: true,
    appOwnedExpansionFollowUpState: true,
    expansionFollowUpReady: expansionFollowUpReceipt.expansionFollowUpReady === true,
    repeatServiceReady: expansionGrowthPlanReady && expansionFollowUpReceipt.repeatServiceReady === true,
    renewalReady: expansionGrowthPlanReady && expansionFollowUpReceipt.renewalReady === true,
    referralReady: expansionGrowthPlanReady && expansionFollowUpReceipt.referralReady === true,
    expansionGrowthPlanReady,
    expansionOutcomeReady: expansionFollowUpReceipt.expansionOutcomeReady === true,
    compatibilityGateRequired: expansionFollowUpReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionFollowUpReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionFollowUpReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryExpansionGrowthPlanReceiptForGrowthPlan(expansionGrowthPlan) {
  if (!expansionGrowthPlan || typeof expansionGrowthPlan !== "object") return null;
  const customerSafe =
    expansionGrowthPlan.kind === "offer-launch-delivery-expansion-growth-plan" &&
    expansionGrowthPlan.customerSafeForReceipt === true &&
    expansionGrowthPlan.customerVisible !== true &&
    expansionGrowthPlan.webportalExportReady !== true &&
    expansionGrowthPlan.appOwnedExpansionGrowthPlanState === true &&
    expansionGrowthPlan.appOwnedExpansionFollowUpState === true &&
    expansionGrowthPlan.epochTimingProviderOnly === true &&
    expansionGrowthPlan.workshopCalendarOwnership !== true &&
    expansionGrowthPlan.monitorWorkflowExposed !== true &&
    expansionGrowthPlan.paymentLiveEnabled !== true &&
    expansionGrowthPlan.providerGoLiveRequested !== true &&
    expansionGrowthPlan.liveProviderEnabled !== true &&
    expansionGrowthPlan.aiForwardCopy !== true &&
    expansionGrowthPlan.japanCopyMode === "ai-neutral" &&
    expansionGrowthPlan.under19GuardRequired === true &&
    expansionGrowthPlan.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-expansion-growth-plan-receipt"),
    requestId: expansionGrowthPlan.requestId,
    kind: "offer-launch-delivery-expansion-growth-plan",
    status: expansionGrowthPlan.expansionGrowthPlanReady
      ? "customer-safe-offer-launch-delivery-expansion-growth-plan-ready"
      : "customer-safe-offer-launch-delivery-expansion-growth-plan-fit-review",
    expansionGrowthPlanPath: expansionGrowthPlan.expansionGrowthPlanPath,
    serviceLane: expansionGrowthPlan.serviceLane,
    packageId: expansionGrowthPlan.packageId,
    offerLabel: expansionGrowthPlan.offerLabel,
    priceLabel: expansionGrowthPlan.priceLabel,
    customerLabel: expansionGrowthPlan.customerLabel,
    customerSafeMessage: expansionGrowthPlan.expansionGrowthPlanReady
      ? "Your WORKSHOP next-service growth options are ready for review. EPOCH will be used only if timing is needed."
      : "Your WORKSHOP next-service growth options are waiting for compatibility review before renewal or referral planning continues.",
    nextAction: expansionGrowthPlan.requiresEpochTimingRequest
      ? "WORKSHOP will review the next repeat-service, renewal, or referral motion and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will review the next repeat-service, renewal, or referral motion without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedExpansionGrowthPlanState: true,
    appOwnedExpansionFollowUpState: true,
    expansionFollowUpReady: expansionGrowthPlan.expansionFollowUpReady === true,
    repeatServiceReady: expansionGrowthPlan.repeatServiceReady === true,
    renewalReady: expansionGrowthPlan.renewalReady === true,
    referralReady: expansionGrowthPlan.referralReady === true,
    expansionGrowthPlanReady: expansionGrowthPlan.expansionGrowthPlanReady === true,
    expansionOutcomeReady: expansionGrowthPlan.expansionOutcomeReady === true,
    compatibilityGateRequired: expansionGrowthPlan.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionGrowthPlan.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionGrowthPlan.requiresEpochTimingRequest === true,
    recordedAt: expansionGrowthPlan.recordedAt
  };
}

export function createOfferLaunchDeliveryExpansionGrowthPlanAcceptanceForGrowthPlanReceipt(expansionGrowthPlanReceipt) {
  if (!expansionGrowthPlanReceipt || typeof expansionGrowthPlanReceipt !== "object") return null;
  const safeReceipt =
    expansionGrowthPlanReceipt.kind === "offer-launch-delivery-expansion-growth-plan" &&
    expansionGrowthPlanReceipt.customerSafe === true &&
    expansionGrowthPlanReceipt.customerVisible === true &&
    expansionGrowthPlanReceipt.customerVisibleReceiptReady === true &&
    expansionGrowthPlanReceipt.webportalExportReady === true &&
    expansionGrowthPlanReceipt.appOwnedExpansionGrowthPlanState === true &&
    expansionGrowthPlanReceipt.appOwnedExpansionFollowUpState === true &&
    expansionGrowthPlanReceipt.epochTimingProviderOnly === true &&
    expansionGrowthPlanReceipt.workshopCalendarOwnership !== true &&
    expansionGrowthPlanReceipt.monitorWorkflowExposed !== true &&
    expansionGrowthPlanReceipt.paymentLiveEnabled !== true &&
    expansionGrowthPlanReceipt.providerGoLiveRequested !== true &&
    expansionGrowthPlanReceipt.liveProviderEnabled !== true &&
    expansionGrowthPlanReceipt.aiForwardCopy !== true &&
    expansionGrowthPlanReceipt.japanCopyMode === "ai-neutral" &&
    expansionGrowthPlanReceipt.under19GuardRequired === true &&
    expansionGrowthPlanReceipt.nativeExecutionReady === true;
  if (!safeReceipt) return null;

  const acceptanceReady =
    expansionGrowthPlanReceipt.expansionGrowthPlanReady === true &&
    expansionGrowthPlanReceipt.expansionFollowUpReady === true &&
    expansionGrowthPlanReceipt.expansionOutcomeReady === true &&
    (expansionGrowthPlanReceipt.repeatServiceReady === true ||
      expansionGrowthPlanReceipt.renewalReady === true ||
      expansionGrowthPlanReceipt.referralReady === true) &&
    expansionGrowthPlanReceipt.compatibilityGateRequired !== true;

  return {
    id: makeId("launch-delivery-expansion-growth-plan-acceptance"),
    expansionGrowthPlanReceiptId: expansionGrowthPlanReceipt.id || expansionGrowthPlanReceipt.receiptId,
    requestId: expansionGrowthPlanReceipt.requestId || expansionGrowthPlanReceipt.serviceRequestId,
    kind: "offer-launch-delivery-expansion-growth-plan-acceptance",
    status: acceptanceReady
      ? "offer-launch-delivery-expansion-growth-plan-acceptance-ready"
      : "offer-launch-delivery-expansion-growth-plan-acceptance-fit-review",
    expansionGrowthPlanAcceptancePath: acceptanceReady ? "adult-service-launch-delivery-expansion-growth-plan-accepted" : "compatibility-review-before-launch-delivery-expansion-growth-plan-acceptance",
    expansionGrowthPlanPath: expansionGrowthPlanReceipt.expansionGrowthPlanPath || "adult-service-launch-delivery-expansion-growth-plan-ready",
    serviceLane: expansionGrowthPlanReceipt.serviceLane || "submission-review",
    packageId: expansionGrowthPlanReceipt.packageId || "package",
    offerLabel: expansionGrowthPlanReceipt.offerLabel || "Launch-ready WORKSHOP offer",
    priceLabel: expansionGrowthPlanReceipt.priceLabel || "pricing visible after review",
    customerLabel: expansionGrowthPlanReceipt.customerLabel || "Launch offer prospect",
    customerSafeStatus: acceptanceReady
      ? "WORKSHOP accepted the next-service repeat-service, renewal, or referral motion from the expansion growth-plan receipt. EPOCH remains timing-provider-only."
      : "WORKSHOP is holding expansion growth-plan acceptance until compatibility review is complete.",
    operatorNextAction: acceptanceReady
      ? "Confirm the accepted next-service motion, then export only the customer-safe expansion growth-plan acceptance receipt."
      : "Complete compatibility review before expansion growth-plan acceptance status is exported.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    appOwnedExpansionGrowthPlanAcceptanceState: true,
    appOwnedExpansionGrowthPlanState: true,
    appOwnedExpansionFollowUpState: true,
    expansionGrowthPlanReady: expansionGrowthPlanReceipt.expansionGrowthPlanReady === true,
    expansionFollowUpReady: expansionGrowthPlanReceipt.expansionFollowUpReady === true,
    expansionOutcomeReady: expansionGrowthPlanReceipt.expansionOutcomeReady === true,
    repeatServiceAccepted: acceptanceReady && expansionGrowthPlanReceipt.repeatServiceReady === true,
    renewalAccepted: acceptanceReady && expansionGrowthPlanReceipt.renewalReady === true,
    referralAccepted: acceptanceReady && expansionGrowthPlanReceipt.referralReady === true,
    expansionGrowthPlanAcceptanceReady: acceptanceReady,
    compatibilityGateRequired: expansionGrowthPlanReceipt.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionGrowthPlanReceipt.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionGrowthPlanReceipt.requiresEpochTimingRequest === true,
    recordedAt: new Date().toISOString()
  };
}

export function createOfferLaunchDeliveryExpansionGrowthPlanAcceptanceReceiptForAcceptance(expansionGrowthPlanAcceptance) {
  if (!expansionGrowthPlanAcceptance || typeof expansionGrowthPlanAcceptance !== "object") return null;
  const customerSafe =
    expansionGrowthPlanAcceptance.kind === "offer-launch-delivery-expansion-growth-plan-acceptance" &&
    expansionGrowthPlanAcceptance.customerSafeForReceipt === true &&
    expansionGrowthPlanAcceptance.customerVisible !== true &&
    expansionGrowthPlanAcceptance.webportalExportReady !== true &&
    expansionGrowthPlanAcceptance.appOwnedExpansionGrowthPlanAcceptanceState === true &&
    expansionGrowthPlanAcceptance.appOwnedExpansionGrowthPlanState === true &&
    expansionGrowthPlanAcceptance.appOwnedExpansionFollowUpState === true &&
    expansionGrowthPlanAcceptance.epochTimingProviderOnly === true &&
    expansionGrowthPlanAcceptance.workshopCalendarOwnership !== true &&
    expansionGrowthPlanAcceptance.monitorWorkflowExposed !== true &&
    expansionGrowthPlanAcceptance.paymentLiveEnabled !== true &&
    expansionGrowthPlanAcceptance.providerGoLiveRequested !== true &&
    expansionGrowthPlanAcceptance.liveProviderEnabled !== true &&
    expansionGrowthPlanAcceptance.aiForwardCopy !== true &&
    expansionGrowthPlanAcceptance.japanCopyMode === "ai-neutral" &&
    expansionGrowthPlanAcceptance.under19GuardRequired === true &&
    expansionGrowthPlanAcceptance.nativeExecutionReady === true;
  if (!customerSafe) return null;

  return {
    id: makeId("launch-delivery-expansion-growth-plan-acceptance-receipt"),
    requestId: expansionGrowthPlanAcceptance.requestId,
    kind: "offer-launch-delivery-expansion-growth-plan-acceptance",
    status: expansionGrowthPlanAcceptance.expansionGrowthPlanAcceptanceReady
      ? "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-ready"
      : "customer-safe-offer-launch-delivery-expansion-growth-plan-acceptance-fit-review",
    expansionGrowthPlanAcceptancePath: expansionGrowthPlanAcceptance.expansionGrowthPlanAcceptancePath,
    serviceLane: expansionGrowthPlanAcceptance.serviceLane,
    packageId: expansionGrowthPlanAcceptance.packageId,
    offerLabel: expansionGrowthPlanAcceptance.offerLabel,
    priceLabel: expansionGrowthPlanAcceptance.priceLabel,
    customerLabel: expansionGrowthPlanAcceptance.customerLabel,
    customerSafeMessage: expansionGrowthPlanAcceptance.expansionGrowthPlanAcceptanceReady
      ? "Your WORKSHOP next-service repeat-service, renewal, or referral motion has been accepted. EPOCH will be used only if timing is needed."
      : "Your WORKSHOP expansion growth-plan acceptance is waiting for compatibility review before the next service motion continues.",
    nextAction: expansionGrowthPlanAcceptance.requiresEpochTimingRequest
      ? "WORKSHOP will prepare the accepted next-service motion and ask EPOCH only for deadline, appointment, or reminder timing."
      : "WORKSHOP will prepare the accepted next-service motion without adding calendar load unless timing becomes necessary.",
    customerSafe: true,
    customerVisible: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    appOwnedExpansionGrowthPlanAcceptanceState: true,
    appOwnedExpansionGrowthPlanState: true,
    appOwnedExpansionFollowUpState: true,
    expansionGrowthPlanReady: expansionGrowthPlanAcceptance.expansionGrowthPlanReady === true,
    expansionFollowUpReady: expansionGrowthPlanAcceptance.expansionFollowUpReady === true,
    expansionOutcomeReady: expansionGrowthPlanAcceptance.expansionOutcomeReady === true,
    repeatServiceAccepted: expansionGrowthPlanAcceptance.repeatServiceAccepted === true,
    renewalAccepted: expansionGrowthPlanAcceptance.renewalAccepted === true,
    referralAccepted: expansionGrowthPlanAcceptance.referralAccepted === true,
    expansionGrowthPlanAcceptanceReady: expansionGrowthPlanAcceptance.expansionGrowthPlanAcceptanceReady === true,
    compatibilityGateRequired: expansionGrowthPlanAcceptance.compatibilityGateRequired === true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    providerGoLiveRequested: false,
    liveProviderEnabled: false,
    aiForwardCopy: false,
    japanCopyMode: "ai-neutral",
    under19GuardRequired: expansionGrowthPlanAcceptance.under19GuardRequired === true,
    nativeExecutionReady: true,
    requiresEpochTimingRequest: expansionGrowthPlanAcceptance.requiresEpochTimingRequest === true,
    recordedAt: expansionGrowthPlanAcceptance.recordedAt
  };
}

function araOwnerForLane(lane) {
  if (lane === "cohort-subscription") return "FURYOKU";
  if (lane === "workflow-build" || lane === "crm-database-admin") return "SYMBIOSIS";
  if (lane === "operations-consulting") return "SYMBIOSIS";
  return "WORKSHOP";
}

export function createCrmAccountForRequest(request) {
  return {
    id: makeId("crm"),
    name: request.customer,
    state: request.status === "compatibility-review" ? "compatibility review" : "service planning",
    next: request.status === "compatibility-review"
      ? "Complete compatibility review before service planning"
      : `Prepare ${serviceLaneLabel(request.lane)} service plan`
  };
}

export function createCrmOpportunityForRequest(request, account) {
  const qualified = request.status !== "compatibility-review" && request.status !== "canceled";
  return {
    id: makeId("opp"),
    accountId: account?.id || makeId("crm"),
    requestId: request.id,
    lane: request.lane,
    status: qualified ? request.status : "fit-review",
    valueJpy: Number(request.valueJpy || 0),
    qualified,
    customerVisible: true,
    customerSafeStatus: qualified
      ? "Service request is in review and the delivery path is being prepared."
      : "Compatibility review is required before service planning begins.",
    operatorNextAction: qualified
      ? "Convert the opportunity into an assigned work packet and review the output before customer delivery."
      : "Complete compatibility review before creating a work packet."
  };
}

export function createAraRevenuePacketForOpportunity(opportunity) {
  if (!opportunity?.qualified) return null;
  const owner = araOwnerForLane(opportunity.lane);
  return {
    id: makeId("ara-packet"),
    opportunityId: opportunity.id,
    owner,
    status: "queued",
    reviewStatus: "operator-review",
    customerVisible: false,
    requiresOperatorReview: true,
    customerSafeStatus: "Service plan is being prepared for review.",
    operatorNextAction: `Assign ${owner} to prepare the first service plan and route it through operator review.`
  };
}

export function createAraAssignmentForPacket(packet) {
  if (!packet) return null;
  return {
    id: makeId("ara-assignment"),
    packetId: packet.id,
    assignee: packet.owner,
    status: "in-progress",
    accepted: true,
    reviewRequired: true,
    reviewComplete: false,
    customerSafeStatus: "Service planning is active.",
    operatorNextAction: "Review the assigned packet output before sending any customer-facing plan."
  };
}

export function createAraReviewReceiptForPacket(packet, opportunity) {
  if (!packet || !opportunity) return null;
  return {
    id: makeId("receipt-ara-review"),
    requestId: opportunity.requestId,
    opportunityId: opportunity.id,
    packetId: packet.id,
    kind: "operator-review",
    summary: `${serviceLaneLabel(opportunity.lane)} service plan review opened.`,
    reviewStatus: packet.reviewStatus,
    createdAt: new Date().toISOString(),
    customerVisible: true,
    customerSafeStatus: packet.customerSafeStatus
  };
}

export function createCrmAraReceiptForRequest(request, opportunity, packet, assignment) {
  if (!opportunity) return null;
  const pieces = [
    "CRM opportunity",
    packet ? "work packet" : "",
    assignment ? "assignment" : ""
  ].filter(Boolean);
  return {
    id: makeId("receipt-crm-ara"),
    kind: "crm-ara-assignment",
    status: packet ? "ready" : "fit-review",
    summary: `${request.customer} created ${pieces.join(", ")} records inside WORKSHOP.`,
    requestId: request.id,
    recordedAt: request.createdAt,
    customerVisible: false
  };
}

function outcomeStatusForRequest(request, lifecycle) {
  if (request.status === "compatibility-review") return "compatibility-review";
  if (request.status === "epoch-time-requested") return "epoch-time-requested";
  if (request.status === "materials-received") return "in-progress";
  if (request.status === "fit-review") return "fit-review";
  if (lifecycle?.currentStatus) return lifecycle.currentStatus;
  return request.status || "queued";
}

function outcomeCustomerSafeStatus(request, outcomeStatus) {
  if (outcomeStatus === "compatibility-review") {
    return "Compatibility review must be completed before a delivery result can be issued.";
  }
  if (outcomeStatus === "epoch-time-requested") {
    return "The result report is open and waiting for the confirmed return window.";
  }
  if (outcomeStatus === "timing-confirmed") {
    return "Return timing is confirmed; the result report can proceed after WORKSHOP delivery review.";
  }
  if (outcomeStatus === "timing-reschedule-required") {
    return "Timing needs a new window before the result report can proceed.";
  }
  if (outcomeStatus === "timing-waitlisted") {
    return "Timing is waitlisted; WORKSHOP is holding delivery planning until EPOCH returns a promotion or new timing status.";
  }
  if (outcomeStatus === "timing-promoted") {
    return "Waitlisted timing was promoted; the result report can proceed after EPOCH confirms the returned slot.";
  }
  if (outcomeStatus === "recurring-exception-action-required") {
    return "Recurring service timing needs one action before the result report can proceed.";
  }
  if (outcomeStatus === "recurring-series-active") {
    return "Recurring service timing is active and the result report can proceed after WORKSHOP delivery review.";
  }
  if (outcomeStatus === "in-progress") {
    return "Delivery review is active and the result report will be issued after review.";
  }
  if (outcomeStatus === "fit-review") {
    return "A service result is being prepared after scope review.";
  }
  if (outcomeStatus === "complete") {
    return "The customer-safe service result has been completed.";
  }
  return "The service result is queued for the next review step.";
}

function outcomeOperatorNextAction(request, outcomeStatus) {
  if (outcomeStatus === "compatibility-review") {
    return "Complete compatibility review before opening a customer result receipt.";
  }
  if (outcomeStatus === "epoch-time-requested") {
    return "Confirm timing with EPOCH, complete delivery review, and issue the result receipt.";
  }
  if (outcomeStatus === "timing-confirmed") {
    return "Complete the delivery review and issue the customer-safe result receipt.";
  }
  if (outcomeStatus === "timing-reschedule-required") {
    return "Request a new timing window from EPOCH before promising a delivery slot.";
  }
  if (outcomeStatus === "timing-waitlisted") {
    return "Hold service delivery planning in WORKSHOP and wait for EPOCH promotion status.";
  }
  if (outcomeStatus === "timing-promoted") {
    return "Prepare the customer-safe service plan around the promoted timing slot.";
  }
  if (outcomeStatus === "recurring-exception-action-required") {
    return "Resolve the recurring timing exception before promising the affected service window.";
  }
  if (outcomeStatus === "recurring-series-active") {
    return "Continue the recurring delivery sequence and issue customer-safe result receipts when ready.";
  }
  if (outcomeStatus === "fit-review") {
    return "Finish scope review and prepare the customer-safe result summary.";
  }
  if (outcomeStatus === "complete") {
    return "Archive the delivery result and queue renewal or follow-up if useful.";
  }
  return `Advance ${serviceLaneLabel(request.lane)} to the next customer-safe result step.`;
}

export function createRevenueOutcomeForRequest(request, lifecycle, opportunity) {
  if (!request) return null;
  const status = outcomeStatusForRequest(request, lifecycle);
  return {
    id: makeId("outcome"),
    requestId: request.id,
    opportunityId: opportunity?.id || "",
    lifecycleId: lifecycle?.id || "",
    packageId: request.packageId,
    lane: request.lane,
    status,
    valueJpy: Number(opportunity?.valueJpy || request.valueJpy || 0),
    customerVisible: true,
    resultReceiptReady: !["compatibility-review", "queued", "timing-reschedule-required", "timing-waitlisted", "recurring-exception-action-required"].includes(status),
    customerSafeStatus: outcomeCustomerSafeStatus(request, status),
    operatorNextAction: outcomeOperatorNextAction(request, status),
    updatedAt: request.createdAt
  };
}

export function createDeliveryResultReceiptForOutcome(outcome, request) {
  if (!outcome || !request || !outcome.resultReceiptReady) return null;
  return {
    id: makeId("result-receipt"),
    outcomeId: outcome.id,
    requestId: request.id,
    kind: "delivery-result",
    status: outcome.status,
    summary: `${request.customer} ${serviceLaneLabel(request.lane)} result reporting opened.`,
    createdAt: outcome.updatedAt || request.createdAt,
    customerVisible: true,
    customerSafeStatus: outcome.customerSafeStatus
  };
}

export function createAraReviewCompletionForAssignment(assignment, packet, outcome) {
  if (!assignment || !packet || !outcome) return null;
  return {
    id: makeId("ara-review-completion"),
    assignmentId: assignment.id,
    packetId: packet.id,
    outcomeId: outcome.id,
    status: assignment.reviewComplete ? "approved" : packet.reviewStatus || "operator-review",
    reviewComplete: Boolean(assignment.reviewComplete),
    customerVisible: false,
    customerSafeStatus: assignment.reviewComplete
      ? "Service review is complete."
      : assignment.customerSafeStatus || "Service review is in progress.",
    operatorNextAction: assignment.reviewComplete
      ? "Issue the customer-safe result receipt and queue follow-up."
      : "Complete review before sending the customer-facing result.",
    completedAt: assignment.reviewComplete ? new Date().toISOString() : ""
  };
}

export function createAraReviewQueueForPacket(packet, assignment, reviewReceipt, outcome, request) {
  if (!packet || !assignment || !reviewReceipt || !outcome || !request) return null;
  const customerSafeForDecision =
    packet.requiresOperatorReview === true &&
    packet.customerVisible !== true &&
    assignment.reviewRequired === true &&
    reviewReceipt.customerVisible === true &&
    Boolean(reviewReceipt.customerSafeStatus) &&
    outcome.customerVisible === true;
  if (!customerSafeForDecision) return null;

  return {
    id: makeId("ara-review-queue"),
    requestId: request.id,
    opportunityId: outcome.opportunityId || "",
    packetId: packet.id,
    assignmentId: assignment.id,
    reviewReceiptId: reviewReceipt.id,
    revenueOutcomeId: outcome.id,
    deliveryResultReceiptId: "",
    kind: "ara-operator-review-queue",
    status: "ara-review-ready-for-decision",
    reviewStatus: assignment.reviewComplete ? "operator-review-complete" : packet.reviewStatus,
    customerVisible: false,
    customerSafeForDecision: true,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    requiresOperatorReview: true,
    araReviewComplete: Boolean(assignment.reviewComplete),
    nativeExecutionReady: true,
    customerSafeStatus: "WORKSHOP has an internal service review ready for operator decision. Customer-facing output remains gated.",
    operatorNextAction: "Review the service output, then approve or return it before customer-visible delivery proceeds.",
    createdAt: new Date().toISOString()
  };
}

export function createAraOperatorReviewDecisionForQueue(queue, assignment, reviewCompletion, request) {
  if (!queue || !assignment || !reviewCompletion || !request) return null;
  const approved =
    queue.customerSafeForDecision === true &&
    assignment.reviewComplete === true &&
    reviewCompletion.reviewComplete === true &&
    reviewCompletion.status === "approved" &&
    queue.monitorWorkflowExposed !== true &&
    queue.paymentLiveEnabled !== true;

  return {
    id: makeId("ara-review-decision"),
    queueId: queue.id,
    requestId: request.id,
    opportunityId: queue.opportunityId,
    packetId: queue.packetId,
    assignmentId: assignment.id,
    reviewReceiptId: queue.reviewReceiptId,
    revenueOutcomeId: queue.revenueOutcomeId,
    deliveryResultReceiptId: queue.deliveryResultReceiptId || "",
    kind: "ara-operator-review-decision",
    status: approved ? "ara-review-approved" : "ara-review-revision-required",
    decision: approved ? "approved" : "revision-required",
    approved,
    revisionRequired: !approved,
    customerVisible: false,
    customerSafeForReceipt: approved,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    requiresOperatorReview: true,
    operatorReviewed: true,
    araReviewComplete: approved,
    nativeExecutionReady: true,
    customerSafeStatus: approved
      ? "WORKSHOP operator review is complete; the customer-safe service result can proceed."
      : "WORKSHOP operator review requires revision before customer-visible delivery.",
    operatorNextAction: approved
      ? "Prepare the customer-safe review receipt and continue service delivery inside WORKSHOP."
      : "Return the service output for revision before creating a customer-safe receipt.",
    createdAt: new Date().toISOString()
  };
}

export function createAraReviewStatusReceiptForDecision(decision, request) {
  if (!decision || !request) return null;
  const customerSafe =
    decision.approved === true &&
    decision.customerSafeForReceipt === true &&
    decision.operatorReviewed === true &&
    decision.araReviewComplete === true &&
    decision.nativeExecutionReady === true &&
    decision.epochTimingProviderOnly === true &&
    decision.monitorWorkflowExposed !== true &&
    decision.paymentLiveEnabled !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("ara-review-status-receipt"),
    queueId: decision.queueId,
    decisionId: decision.id,
    requestId: request.id,
    revenueOutcomeId: decision.revenueOutcomeId,
    deliveryResultReceiptId: decision.deliveryResultReceiptId || "",
    kind: "ara-review-status",
    status: "customer-safe-ara-review-ready",
    summary: "WORKSHOP operator review completed for an assisted service result without exposing internal packet or assignment controls.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    nativeExecutionReady: true,
    customerSafeMessage: "WORKSHOP operator review is complete; the customer-safe service result can proceed.",
    nextAction: "Review the customer-safe service result in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
    recordedAt: decision.createdAt
  };
}

export function createAraMethodMaterializationForDecision(decision, statusReceipt, materialAsset) {
  if (!decision || !statusReceipt) return null;
  const materialSafe =
    decision.approved === true &&
    decision.customerSafeForReceipt === true &&
    decision.operatorReviewed === true &&
    decision.araReviewComplete === true &&
    decision.nativeExecutionReady === true &&
    decision.epochTimingProviderOnly === true &&
    decision.monitorWorkflowExposed !== true &&
    decision.paymentLiveEnabled !== true &&
    statusReceipt.customerSafe === true &&
    statusReceipt.customerVisibleReceiptReady === true &&
    statusReceipt.webportalExportReady === true &&
    statusReceipt.araReviewComplete === true &&
    statusReceipt.nativeExecutionReady === true &&
    statusReceipt.epochTimingProviderOnly === true &&
    statusReceipt.monitorWorkflowExposed !== true &&
    statusReceipt.paymentLiveEnabled !== true;
  if (!materialSafe) return null;

  return {
    id: makeId("ara-method-materialization"),
    queueId: decision.queueId,
    decisionId: decision.id,
    reviewStatusReceiptId: statusReceipt.id,
    requestId: decision.requestId,
    revenueOutcomeId: decision.revenueOutcomeId,
    deliveryResultReceiptId: decision.deliveryResultReceiptId || "",
    kind: "ara-method-materialization",
    status: "ara-materialization-ready",
    methodName: "Reviewed service-delivery method pack",
    materialAssetId: materialAsset?.id || `material-asset-${decision.requestId}`,
    reusableMethodStatus: "reviewed-method-and-material-ready",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    reusableMethodReady: true,
    materialAssetReady: true,
    nativeExecutionReady: true,
    customerSafeStatus: "WORKSHOP has materialized the reviewed service method into reusable internal delivery assets. Customer-facing output remains receipt-gated.",
    operatorNextAction: "Attach the reviewed method to reusable material and service assets before customer-visible delivery proceeds.",
    createdAt: new Date().toISOString()
  };
}

export function createAraMaterializationReceiptForRecord(materialization) {
  if (!materialization) return null;
  const customerSafe =
    materialization.customerSafeForReceipt === true &&
    materialization.operatorReviewed === true &&
    materialization.araReviewComplete === true &&
    materialization.humanReviewComplete === true &&
    materialization.reusableMethodReady === true &&
    materialization.materialAssetReady === true &&
    materialization.nativeExecutionReady === true &&
    materialization.epochTimingProviderOnly === true &&
    materialization.workshopCalendarOwnership !== true &&
    materialization.monitorWorkflowExposed !== true &&
    materialization.paymentLiveEnabled !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("ara-materialization-receipt"),
    materializationId: materialization.id,
    reviewStatusReceiptId: materialization.reviewStatusReceiptId,
    requestId: materialization.requestId,
    revenueOutcomeId: materialization.revenueOutcomeId,
    deliveryResultReceiptId: materialization.deliveryResultReceiptId || "",
    kind: "ara-method-materialization",
    status: "customer-safe-ara-materialization-ready",
    summary: "WORKSHOP materialized a reviewed service method into reusable method and material records without exposing internal packet, queue, decision, or materialization controls.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    reusableMethodReady: true,
    materialAssetReady: true,
    nativeExecutionReady: true,
    customerSafeMessage: "Your reviewed service method and material plan is ready for delivery tracking.",
    nextAction: "Review the customer-safe delivery plan in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
    recordedAt: materialization.createdAt
  };
}

function fallbackPackageForServiceLane(serviceLane) {
  const lane = serviceLaneOptions.find((option) => option.value === serviceLane);
  return initialWorkshopLedger.packages.find((item) => item.id === lane?.packageId) || initialWorkshopLedger.packages[0];
}

function fallbackMaterialAssetForServiceLane(serviceLane) {
  if (["crm-database-admin", "workflow-build", "tech-support", "operations-consulting"].includes(serviceLane)) {
    return initialWorkshopLedger.materialAssets.find((item) => item.id === "material-asset-crm-cleanup-checklist-001") || initialWorkshopLedger.materialAssets[0];
  }

  return initialWorkshopLedger.materialAssets.find((item) => item.id === "material-asset-eiken-writing-rubric-001") || initialWorkshopLedger.materialAssets[0];
}

export function createServiceMaterialReuseForMaterialization(materializationReceipt, request, packageItem, materialAsset) {
  if (!materializationReceipt || !request) return null;
  const selectedPackage = packageItem || fallbackPackageForServiceLane(request.lane);
  const selectedMaterial = materialAsset || fallbackMaterialAssetForServiceLane(request.lane);
  const safeForReuse =
    materializationReceipt.customerSafe === true &&
    materializationReceipt.customerVisibleReceiptReady === true &&
    materializationReceipt.webportalExportReady === true &&
    materializationReceipt.operatorReviewed === true &&
    materializationReceipt.araReviewComplete === true &&
    materializationReceipt.humanReviewComplete === true &&
    materializationReceipt.reusableMethodReady === true &&
    materializationReceipt.materialAssetReady === true &&
    materializationReceipt.nativeExecutionReady === true &&
    materializationReceipt.epochTimingProviderOnly === true &&
    materializationReceipt.workshopCalendarOwnership !== true &&
    materializationReceipt.monitorWorkflowExposed !== true &&
    materializationReceipt.paymentLiveEnabled !== true &&
    request.status !== "compatibility-review";
  if (!safeForReuse) return null;

  return {
    id: makeId("service-material-reuse"),
    materializationReceiptId: materializationReceipt.id,
    materializationId: materializationReceipt.materializationId,
    requestId: request.id,
    revenueOutcomeId: materializationReceipt.revenueOutcomeId,
    deliveryResultReceiptId: materializationReceipt.deliveryResultReceiptId || "",
    serviceLane: request.lane,
    packageId: selectedPackage?.id || request.packageId || "pkg-consulting",
    packageSupportStatus: "reviewed-service-material-support-ready",
    materialAssetId: selectedMaterial?.id || `material-asset-${request.id}`,
    kind: "service-material-reuse",
    status: "service-material-reuse-ready",
    summary: `Reviewed service material is linked to ${selectedPackage?.title || "the selected package"} and reusable assets for lower-labor repeat delivery.`,
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    reusableMethodReady: true,
    materialAssetReady: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    nativeExecutionReady: true,
    customerSafeStatus: "WORKSHOP has prepared reusable service material support for this service path. Customer-facing delivery remains receipt-gated.",
    operatorNextAction: "Attach the reusable material support to the package delivery checklist before the next customer-facing update.",
    createdAt: new Date().toISOString()
  };
}

export function createServiceMaterialReuseReceiptForRecord(reuseRecord) {
  if (!reuseRecord) return null;
  const customerSafe =
    reuseRecord.customerSafeForReceipt === true &&
    reuseRecord.operatorReviewed === true &&
    reuseRecord.araReviewComplete === true &&
    reuseRecord.humanReviewComplete === true &&
    reuseRecord.reusableMethodReady === true &&
    reuseRecord.materialAssetReady === true &&
    reuseRecord.packageSupportReady === true &&
    reuseRecord.lowLaborReuseReady === true &&
    reuseRecord.nativeExecutionReady === true &&
    reuseRecord.epochTimingProviderOnly === true &&
    reuseRecord.workshopCalendarOwnership !== true &&
    reuseRecord.monitorWorkflowExposed !== true &&
    reuseRecord.paymentLiveEnabled !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("service-material-reuse-receipt"),
    reuseId: reuseRecord.id,
    requestId: reuseRecord.requestId,
    serviceLane: reuseRecord.serviceLane,
    packageId: reuseRecord.packageId,
    materialAssetId: reuseRecord.materialAssetId,
    kind: "service-material-reuse",
    status: "customer-safe-service-material-reuse-ready",
    summary: "WORKSHOP converted reviewed service material into reusable package support without exposing internal packet, queue, decision, materialization, or package-control records.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    reusableMethodReady: true,
    materialAssetReady: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    nativeExecutionReady: true,
    customerSafeMessage: "Reusable service material support is ready for this service path.",
    nextAction: "Review the customer-safe service material plan in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
    recordedAt: reuseRecord.createdAt
  };
}

function checklistItemsForPackage(packageId, serviceLane) {
  const normalized = `${packageId || ""} ${serviceLane || ""}`.toLowerCase();
  if (normalized.includes("submission") || normalized.includes("writing")) {
    return "intake fit confirmed; submitted writing saved; rubric attached; review pass completed; customer-safe summary prepared; next submission or EPOCH timing need checked";
  }
  if (normalized.includes("cohort") || normalized.includes("subscription")) {
    return "cohort fit confirmed; reusable lesson/material pack attached; progress checkpoint prepared; renewal path checked; EPOCH timing requested only if a session or deadline is needed";
  }
  if (normalized.includes("systems") || normalized.includes("crm") || normalized.includes("database") || normalized.includes("admin")) {
    return "scope confirmed; data/source access checked; cleanup checklist attached; delivery proof prepared; follow-up system status prepared; EPOCH timing requested only if a meeting or deadline is needed";
  }
  return "scope confirmed; reusable material attached; delivery proof prepared; customer-safe status prepared; follow-up or renewal path checked; EPOCH timing requested only if needed";
}

export function createPackageDeliveryChecklistForReuse(reuseRecord) {
  if (!reuseRecord) return null;
  const safeForChecklist =
    reuseRecord.customerSafeForReceipt === true &&
    reuseRecord.operatorReviewed === true &&
    reuseRecord.araReviewComplete === true &&
    reuseRecord.humanReviewComplete === true &&
    reuseRecord.reusableMethodReady === true &&
    reuseRecord.materialAssetReady === true &&
    reuseRecord.packageSupportReady === true &&
    reuseRecord.lowLaborReuseReady === true &&
    reuseRecord.nativeExecutionReady === true &&
    reuseRecord.epochTimingProviderOnly === true &&
    reuseRecord.customerVisible !== true &&
    reuseRecord.webportalExportReady !== true &&
    reuseRecord.workshopCalendarOwnership !== true &&
    reuseRecord.monitorWorkflowExposed !== true &&
    reuseRecord.paymentLiveEnabled !== true;
  if (!safeForChecklist) return null;

  return {
    id: makeId("package-delivery-checklist"),
    reuseId: reuseRecord.id,
    requestId: reuseRecord.requestId,
    serviceLane: reuseRecord.serviceLane,
    packageId: reuseRecord.packageId,
    materialAssetId: reuseRecord.materialAssetId,
    kind: "package-delivery-checklist",
    status: "package-delivery-checklist-ready",
    summary: `Reusable material support is converted into a repeatable delivery checklist for ${reuseRecord.packageId}.`,
    checklistItemsSummary: checklistItemsForPackage(reuseRecord.packageId, reuseRecord.serviceLane),
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    reusableMethodReady: true,
    materialAssetReady: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    nativeExecutionReady: true,
    customerSafeStatus: "WORKSHOP has prepared a repeatable package delivery checklist for this service path. Customer-facing delivery remains receipt-gated.",
    operatorNextAction: "Use this package delivery checklist for the next repeat delivery, then export only the customer-safe checklist receipt.",
    createdAt: new Date().toISOString()
  };
}

export function createPackageDeliveryChecklistReceiptForRecord(checklistRecord) {
  if (!checklistRecord) return null;
  const customerSafe =
    checklistRecord.customerSafeForReceipt === true &&
    checklistRecord.operatorReviewed === true &&
    checklistRecord.araReviewComplete === true &&
    checklistRecord.humanReviewComplete === true &&
    checklistRecord.packageSupportReady === true &&
    checklistRecord.lowLaborReuseReady === true &&
    checklistRecord.checklistReady === true &&
    checklistRecord.nativeExecutionReady === true &&
    checklistRecord.epochTimingProviderOnly === true &&
    checklistRecord.customerVisible !== true &&
    checklistRecord.webportalExportReady !== true &&
    checklistRecord.workshopCalendarOwnership !== true &&
    checklistRecord.monitorWorkflowExposed !== true &&
    checklistRecord.paymentLiveEnabled !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("package-delivery-checklist-receipt"),
    checklistId: checklistRecord.id,
    requestId: checklistRecord.requestId,
    serviceLane: checklistRecord.serviceLane,
    packageId: checklistRecord.packageId,
    kind: "package-delivery-checklist",
    status: "customer-safe-package-delivery-checklist-ready",
    summary: "WORKSHOP prepared a repeatable package delivery checklist from reviewed reusable material without exposing internal packet, queue, decision, materialization, reuse, checklist-control, or package-control records.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    nativeExecutionReady: true,
    customerSafeMessage: "Package delivery preparation is ready for this service path.",
    nextAction: "Review the customer-safe package delivery status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
    recordedAt: checklistRecord.createdAt
  };
}

export function createPackageDeliveryChecklistAutomationForChecklist(checklistRecord) {
  if (!checklistRecord) return null;
  const safeForAutomation =
    checklistRecord.customerSafeForReceipt === true &&
    checklistRecord.operatorReviewed === true &&
    checklistRecord.araReviewComplete === true &&
    checklistRecord.humanReviewComplete === true &&
    checklistRecord.packageSupportReady === true &&
    checklistRecord.lowLaborReuseReady === true &&
    checklistRecord.checklistReady === true &&
    checklistRecord.nativeExecutionReady === true &&
    checklistRecord.epochTimingProviderOnly === true &&
    checklistRecord.customerVisible !== true &&
    checklistRecord.webportalExportReady !== true &&
    checklistRecord.workshopCalendarOwnership !== true &&
    checklistRecord.monitorWorkflowExposed !== true &&
    checklistRecord.paymentLiveEnabled !== true;
  if (!safeForAutomation) return null;

  return {
    id: makeId("package-delivery-checklist-automation"),
    checklistId: checklistRecord.id,
    requestId: checklistRecord.requestId,
    serviceLane: checklistRecord.serviceLane,
    packageId: checklistRecord.packageId,
    kind: "package-delivery-checklist-automation",
    status: "package-delivery-checklist-automation-ready",
    repeatDeliveryPlan: `Repeat delivery can reuse the ${checklistRecord.packageId} checklist with operator review before customer-visible output.`,
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeStatus: "WORKSHOP has prepared repeatable package delivery automation for this service path. EPOCH remains timing-provider-only.",
    operatorNextAction: "Use this automation to prepare the next package delivery draft, then export only the customer-safe automation receipt.",
    createdAt: new Date().toISOString()
  };
}

export function createPackageDeliveryChecklistAutomationReceiptForRecord(automationRecord) {
  if (!automationRecord) return null;
  const customerSafe =
    automationRecord.customerSafeForReceipt === true &&
    automationRecord.operatorReviewed === true &&
    automationRecord.araReviewComplete === true &&
    automationRecord.humanReviewComplete === true &&
    automationRecord.packageSupportReady === true &&
    automationRecord.lowLaborReuseReady === true &&
    automationRecord.checklistReady === true &&
    automationRecord.automationReady === true &&
    automationRecord.nativeExecutionReady === true &&
    automationRecord.epochTimingProviderOnly === true &&
    automationRecord.requiresEpochTimingRequest !== true &&
    automationRecord.customerVisible !== true &&
    automationRecord.webportalExportReady !== true &&
    automationRecord.workshopCalendarOwnership !== true &&
    automationRecord.monitorWorkflowExposed !== true &&
    automationRecord.paymentLiveEnabled !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("package-delivery-checklist-automation-receipt"),
    automationId: automationRecord.id,
    requestId: automationRecord.requestId,
    serviceLane: automationRecord.serviceLane,
    packageId: automationRecord.packageId,
    kind: "package-delivery-checklist-automation",
    status: "customer-safe-package-delivery-automation-ready",
    summary: "WORKSHOP prepared repeatable package delivery automation from an internal checklist without exposing internal packet, queue, decision, materialization, reuse, checklist, automation-control, or package-control records.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeMessage: "Repeatable package delivery preparation is ready for this service path.",
    nextAction: "Review the customer-safe package delivery automation status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
    recordedAt: automationRecord.createdAt
  };
}

export function createPackageDeliveryExecutionForAutomation(automationRecord) {
  if (!automationRecord) return null;
  const safeForExecution =
    automationRecord.customerSafeForReceipt === true &&
    automationRecord.operatorReviewed === true &&
    automationRecord.araReviewComplete === true &&
    automationRecord.humanReviewComplete === true &&
    automationRecord.packageSupportReady === true &&
    automationRecord.lowLaborReuseReady === true &&
    automationRecord.checklistReady === true &&
    automationRecord.automationReady === true &&
    automationRecord.nativeExecutionReady === true &&
    automationRecord.epochTimingProviderOnly === true &&
    automationRecord.requiresEpochTimingRequest !== true &&
    automationRecord.customerVisible !== true &&
    automationRecord.webportalExportReady !== true &&
    automationRecord.workshopCalendarOwnership !== true &&
    automationRecord.monitorWorkflowExposed !== true &&
    automationRecord.paymentLiveEnabled !== true;
  if (!safeForExecution) return null;

  return {
    id: makeId("package-delivery-execution"),
    automationId: automationRecord.id,
    checklistId: automationRecord.checklistId,
    requestId: automationRecord.requestId,
    serviceLane: automationRecord.serviceLane,
    packageId: automationRecord.packageId,
    kind: "package-delivery-execution",
    status: "package-delivery-execution-ready",
    deliveryExecutionPlan: `Execute the ${automationRecord.packageId} package delivery path from reviewed automation with operator approval before any customer-visible output.`,
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeStatus: "WORKSHOP has prepared repeatable package delivery execution for this service path. EPOCH remains timing-provider-only.",
    operatorNextAction: "Use this execution record to complete the next package delivery step, then export only the customer-safe execution receipt.",
    createdAt: new Date().toISOString()
  };
}

export function createPackageDeliveryExecutionReceiptForRecord(executionRecord) {
  if (!executionRecord) return null;
  const customerSafe =
    executionRecord.customerSafeForReceipt === true &&
    executionRecord.operatorReviewed === true &&
    executionRecord.araReviewComplete === true &&
    executionRecord.humanReviewComplete === true &&
    executionRecord.packageSupportReady === true &&
    executionRecord.lowLaborReuseReady === true &&
    executionRecord.checklistReady === true &&
    executionRecord.automationReady === true &&
    executionRecord.executionReady === true &&
    executionRecord.nativeExecutionReady === true &&
    executionRecord.epochTimingProviderOnly === true &&
    executionRecord.requiresEpochTimingRequest !== true &&
    executionRecord.customerVisible !== true &&
    executionRecord.webportalExportReady !== true &&
    executionRecord.workshopCalendarOwnership !== true &&
    executionRecord.monitorWorkflowExposed !== true &&
    executionRecord.paymentLiveEnabled !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("package-delivery-execution-receipt"),
    requestId: executionRecord.requestId,
    serviceLane: executionRecord.serviceLane,
    packageId: executionRecord.packageId,
    kind: "package-delivery-execution",
    status: "customer-safe-package-delivery-execution-ready",
    summary: "WORKSHOP prepared package delivery execution from reviewed automation without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution-control, or package-control records.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeMessage: "Package delivery execution is ready for this service path.",
    nextAction: "Review the customer-safe package delivery execution status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
    recordedAt: executionRecord.createdAt
  };
}

export function createPackageDeliveryFollowUpRenewalForExecutionReceipt(executionReceipt) {
  if (!executionReceipt) return null;
  const safeForFollowUp =
    executionReceipt.customerSafe === true &&
    executionReceipt.customerVisibleReceiptReady === true &&
    executionReceipt.webportalExportReady === true &&
    executionReceipt.operatorReviewed === true &&
    executionReceipt.araReviewComplete === true &&
    executionReceipt.humanReviewComplete === true &&
    executionReceipt.packageSupportReady === true &&
    executionReceipt.lowLaborReuseReady === true &&
    executionReceipt.checklistReady === true &&
    executionReceipt.automationReady === true &&
    executionReceipt.executionReady === true &&
    executionReceipt.nativeExecutionReady === true &&
    executionReceipt.epochTimingProviderOnly === true &&
    executionReceipt.requiresEpochTimingRequest !== true &&
    executionReceipt.workshopCalendarOwnership !== true &&
    executionReceipt.monitorWorkflowExposed !== true &&
    executionReceipt.paymentLiveEnabled !== true;
  if (!safeForFollowUp) return null;

  return {
    id: makeId("package-delivery-followup-renewal"),
    executionReceiptId: executionReceipt.id,
    requestId: executionReceipt.requestId,
    serviceLane: executionReceipt.serviceLane,
    packageId: executionReceipt.packageId,
    kind: "package-delivery-followup-renewal",
    status: "package-delivery-followup-renewal-ready",
    renewalPath: `Follow up on ${executionReceipt.packageId} delivery and prepare a renewal or next-step service review only after operator approval.`,
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    followUpReady: true,
    renewalReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeStatus: "WORKSHOP has prepared customer follow-up and renewal review for this completed delivery path. EPOCH remains timing-provider-only.",
    operatorNextAction: "Use this follow-up/renewal record to prepare the next customer-safe contact, then export only the customer-safe follow-up renewal receipt.",
    createdAt: new Date().toISOString()
  };
}

export function createPackageDeliveryFollowUpRenewalReceiptForRecord(followUpRecord) {
  if (!followUpRecord) return null;
  const customerSafe =
    followUpRecord.customerSafeForReceipt === true &&
    followUpRecord.operatorReviewed === true &&
    followUpRecord.araReviewComplete === true &&
    followUpRecord.humanReviewComplete === true &&
    followUpRecord.packageSupportReady === true &&
    followUpRecord.lowLaborReuseReady === true &&
    followUpRecord.checklistReady === true &&
    followUpRecord.automationReady === true &&
    followUpRecord.executionReady === true &&
    followUpRecord.followUpReady === true &&
    followUpRecord.renewalReady === true &&
    followUpRecord.nativeExecutionReady === true &&
    followUpRecord.epochTimingProviderOnly === true &&
    followUpRecord.requiresEpochTimingRequest !== true &&
    followUpRecord.customerVisible !== true &&
    followUpRecord.webportalExportReady !== true &&
    followUpRecord.workshopCalendarOwnership !== true &&
    followUpRecord.monitorWorkflowExposed !== true &&
    followUpRecord.paymentLiveEnabled !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("package-delivery-followup-renewal-receipt"),
    requestId: followUpRecord.requestId,
    serviceLane: followUpRecord.serviceLane,
    packageId: followUpRecord.packageId,
    kind: "package-delivery-followup-renewal",
    status: "customer-safe-package-delivery-followup-renewal-ready",
    summary: "WORKSHOP prepared a follow-up and renewal loop from a customer-safe package delivery execution receipt without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, or package-control records.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    followUpReady: true,
    renewalReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeMessage: "Follow-up and renewal review is ready for this service path.",
    nextAction: "Review the customer-safe follow-up/renewal status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
    recordedAt: followUpRecord.createdAt
  };
}

export function createPackageDeliveryQualityOutcomeForReceipts(executionReceipt, followUpReceipt) {
  if (!executionReceipt || !followUpReceipt) return null;
  const receiptsMatch =
    executionReceipt.requestId === followUpReceipt.requestId &&
    executionReceipt.packageId === followUpReceipt.packageId &&
    executionReceipt.serviceLane === followUpReceipt.serviceLane;
  const safeForOutcome =
    receiptsMatch &&
    executionReceipt.customerSafe === true &&
    executionReceipt.customerVisibleReceiptReady === true &&
    executionReceipt.webportalExportReady === true &&
    executionReceipt.operatorReviewed === true &&
    executionReceipt.araReviewComplete === true &&
    executionReceipt.humanReviewComplete === true &&
    executionReceipt.packageSupportReady === true &&
    executionReceipt.lowLaborReuseReady === true &&
    executionReceipt.checklistReady === true &&
    executionReceipt.automationReady === true &&
    executionReceipt.executionReady === true &&
    executionReceipt.nativeExecutionReady === true &&
    executionReceipt.epochTimingProviderOnly === true &&
    executionReceipt.requiresEpochTimingRequest !== true &&
    executionReceipt.workshopCalendarOwnership !== true &&
    executionReceipt.monitorWorkflowExposed !== true &&
    executionReceipt.paymentLiveEnabled !== true &&
    followUpReceipt.customerSafe === true &&
    followUpReceipt.customerVisibleReceiptReady === true &&
    followUpReceipt.webportalExportReady === true &&
    followUpReceipt.operatorReviewed === true &&
    followUpReceipt.araReviewComplete === true &&
    followUpReceipt.humanReviewComplete === true &&
    followUpReceipt.packageSupportReady === true &&
    followUpReceipt.lowLaborReuseReady === true &&
    followUpReceipt.checklistReady === true &&
    followUpReceipt.automationReady === true &&
    followUpReceipt.executionReady === true &&
    followUpReceipt.followUpReady === true &&
    followUpReceipt.renewalReady === true &&
    followUpReceipt.nativeExecutionReady === true &&
    followUpReceipt.epochTimingProviderOnly === true &&
    followUpReceipt.requiresEpochTimingRequest !== true &&
    followUpReceipt.workshopCalendarOwnership !== true &&
    followUpReceipt.monitorWorkflowExposed !== true &&
    followUpReceipt.paymentLiveEnabled !== true;
  if (!safeForOutcome) return null;

  return {
    id: makeId("package-delivery-quality-outcome"),
    executionReceiptId: executionReceipt.id,
    followUpRenewalReceiptId: followUpReceipt.id,
    requestId: executionReceipt.requestId,
    serviceLane: executionReceipt.serviceLane,
    packageId: executionReceipt.packageId,
    kind: "package-delivery-quality-outcome",
    status: "package-delivery-quality-outcome-ready",
    qualityReviewPath: `Review delivery quality for ${executionReceipt.packageId}, compare execution and follow-up receipts, and keep the internal outcome score inside WORKSHOP.`,
    outcomePath: "Prepare customer-safe outcome guidance, renewal signal, and next service recommendation without exposing internal quality-control records.",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    followUpReady: true,
    renewalReady: true,
    qualityReviewReady: true,
    outcomeReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeStatus: "WORKSHOP has prepared delivery quality and outcome review for this package path. EPOCH remains timing-provider-only.",
    operatorNextAction: "Use this internal quality/outcome record to decide the next service improvement, then export only the customer-safe quality outcome receipt.",
    createdAt: new Date().toISOString()
  };
}

export function createPackageDeliveryQualityOutcomeReceiptForRecord(outcomeRecord) {
  if (!outcomeRecord) return null;
  const customerSafe =
    outcomeRecord.customerSafeForReceipt === true &&
    outcomeRecord.operatorReviewed === true &&
    outcomeRecord.araReviewComplete === true &&
    outcomeRecord.humanReviewComplete === true &&
    outcomeRecord.packageSupportReady === true &&
    outcomeRecord.lowLaborReuseReady === true &&
    outcomeRecord.checklistReady === true &&
    outcomeRecord.automationReady === true &&
    outcomeRecord.executionReady === true &&
    outcomeRecord.followUpReady === true &&
    outcomeRecord.renewalReady === true &&
    outcomeRecord.qualityReviewReady === true &&
    outcomeRecord.outcomeReady === true &&
    outcomeRecord.nativeExecutionReady === true &&
    outcomeRecord.epochTimingProviderOnly === true &&
    outcomeRecord.requiresEpochTimingRequest !== true &&
    outcomeRecord.customerVisible !== true &&
    outcomeRecord.webportalExportReady !== true &&
    outcomeRecord.workshopCalendarOwnership !== true &&
    outcomeRecord.monitorWorkflowExposed !== true &&
    outcomeRecord.paymentLiveEnabled !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("package-delivery-quality-outcome-receipt"),
    requestId: outcomeRecord.requestId,
    serviceLane: outcomeRecord.serviceLane,
    packageId: outcomeRecord.packageId,
    kind: "package-delivery-quality-outcome",
    status: "customer-safe-package-delivery-quality-outcome-ready",
    summary: "WORKSHOP prepared a package delivery quality and outcome loop from customer-safe execution and follow-up renewal receipts without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, or package-control records.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    followUpReady: true,
    renewalReady: true,
    qualityReviewReady: true,
    outcomeReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeMessage: "Package delivery quality and outcome review is ready for this service path.",
    nextAction: "Review the customer-safe quality/outcome status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
    recordedAt: outcomeRecord.createdAt
  };
}

export function createPackageDeliveryAccountGrowthLinkageForQualityOutcomeReceipt(qualityOutcomeReceipt) {
  if (!qualityOutcomeReceipt) return null;
  const safeForAccountGrowth =
    qualityOutcomeReceipt.customerSafe === true &&
    qualityOutcomeReceipt.customerVisibleReceiptReady === true &&
    qualityOutcomeReceipt.webportalExportReady === true &&
    qualityOutcomeReceipt.operatorReviewed === true &&
    qualityOutcomeReceipt.araReviewComplete === true &&
    qualityOutcomeReceipt.humanReviewComplete === true &&
    qualityOutcomeReceipt.packageSupportReady === true &&
    qualityOutcomeReceipt.lowLaborReuseReady === true &&
    qualityOutcomeReceipt.checklistReady === true &&
    qualityOutcomeReceipt.automationReady === true &&
    qualityOutcomeReceipt.executionReady === true &&
    qualityOutcomeReceipt.followUpReady === true &&
    qualityOutcomeReceipt.renewalReady === true &&
    qualityOutcomeReceipt.qualityReviewReady === true &&
    qualityOutcomeReceipt.outcomeReady === true &&
    qualityOutcomeReceipt.nativeExecutionReady === true &&
    qualityOutcomeReceipt.epochTimingProviderOnly === true &&
    qualityOutcomeReceipt.requiresEpochTimingRequest !== true &&
    qualityOutcomeReceipt.workshopCalendarOwnership !== true &&
    qualityOutcomeReceipt.monitorWorkflowExposed !== true &&
    qualityOutcomeReceipt.paymentLiveEnabled !== true;
  if (!safeForAccountGrowth) return null;

  const suffix = qualityOutcomeReceipt.requestId || qualityOutcomeReceipt.packageId || "package";
  return {
    id: makeId("package-delivery-account-growth-linkage"),
    qualityOutcomeReceiptId: qualityOutcomeReceipt.id,
    requestId: qualityOutcomeReceipt.requestId,
    serviceLane: qualityOutcomeReceipt.serviceLane,
    packageId: qualityOutcomeReceipt.packageId,
    accountGrowthPlanId: `package-growth-plan-from-${suffix}`,
    retentionSignalId: `retention-signal-from-${suffix}`,
    referralSignalId: `referral-signal-from-${suffix}`,
    expansionSignalId: `expansion-signal-from-${suffix}`,
    kind: "package-delivery-account-growth-linkage",
    status: "package-delivery-account-growth-ready",
    growthPath: "quality-outcome-retention-referral-expansion",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    followUpReady: true,
    renewalReady: true,
    qualityReviewReady: true,
    outcomeReady: true,
    accountGrowthReady: true,
    retentionReady: true,
    referralReady: true,
    expansionReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeStatus: "WORKSHOP has linked package delivery quality/outcome review to the next account-growth path. EPOCH remains timing-provider-only.",
    operatorNextAction: "Use this internal account-growth linkage to decide the next repeat-service, referral, or expansion path, then export only the customer-safe account-growth receipt.",
    createdAt: qualityOutcomeReceipt.recordedAt || new Date().toISOString()
  };
}

export function createPackageDeliveryAccountGrowthReceiptForLinkage(linkageRecord) {
  if (!linkageRecord) return null;
  const customerSafe =
    linkageRecord.customerSafeForReceipt === true &&
    linkageRecord.operatorReviewed === true &&
    linkageRecord.araReviewComplete === true &&
    linkageRecord.humanReviewComplete === true &&
    linkageRecord.packageSupportReady === true &&
    linkageRecord.lowLaborReuseReady === true &&
    linkageRecord.checklistReady === true &&
    linkageRecord.automationReady === true &&
    linkageRecord.executionReady === true &&
    linkageRecord.followUpReady === true &&
    linkageRecord.renewalReady === true &&
    linkageRecord.qualityReviewReady === true &&
    linkageRecord.outcomeReady === true &&
    linkageRecord.accountGrowthReady === true &&
    linkageRecord.retentionReady === true &&
    linkageRecord.referralReady === true &&
    linkageRecord.expansionReady === true &&
    linkageRecord.nativeExecutionReady === true &&
    linkageRecord.epochTimingProviderOnly === true &&
    linkageRecord.requiresEpochTimingRequest !== true &&
    linkageRecord.customerVisible !== true &&
    linkageRecord.webportalExportReady !== true &&
    linkageRecord.workshopCalendarOwnership !== true &&
    linkageRecord.monitorWorkflowExposed !== true &&
    linkageRecord.paymentLiveEnabled !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("package-delivery-account-growth-receipt"),
    requestId: linkageRecord.requestId,
    serviceLane: linkageRecord.serviceLane,
    packageId: linkageRecord.packageId,
    kind: "package-delivery-account-growth",
    status: "customer-safe-package-delivery-account-growth-ready",
    summary: "WORKSHOP prepared a package delivery account-growth loop from a customer-safe quality/outcome receipt without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, account-growth-control, or package-control records.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    followUpReady: true,
    renewalReady: true,
    qualityReviewReady: true,
    outcomeReady: true,
    accountGrowthReady: true,
    retentionReady: true,
    referralReady: true,
    expansionReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeMessage: "Package delivery account-growth follow-up is ready for this service path.",
    nextAction: "Review the customer-safe account-growth status in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
    recordedAt: linkageRecord.createdAt
  };
}

export function createPackageDeliveryRetentionReportForAccountGrowth(accountGrowthLinkage, accountGrowthReceipt, qualityOutcomeReceipt) {
  if (!accountGrowthLinkage || !accountGrowthReceipt || !qualityOutcomeReceipt) return null;
  const receiptsMatch =
    accountGrowthLinkage.qualityOutcomeReceiptId === qualityOutcomeReceipt.id &&
    accountGrowthLinkage.requestId === accountGrowthReceipt.requestId &&
    accountGrowthLinkage.serviceLane === accountGrowthReceipt.serviceLane &&
    accountGrowthLinkage.packageId === accountGrowthReceipt.packageId &&
    accountGrowthReceipt.requestId === qualityOutcomeReceipt.requestId &&
    accountGrowthReceipt.serviceLane === qualityOutcomeReceipt.serviceLane &&
    accountGrowthReceipt.packageId === qualityOutcomeReceipt.packageId;
  const safeForReport =
    receiptsMatch &&
    accountGrowthReceipt.customerSafe === true &&
    accountGrowthReceipt.customerVisibleReceiptReady === true &&
    accountGrowthReceipt.webportalExportReady === true &&
    accountGrowthReceipt.operatorReviewed === true &&
    accountGrowthReceipt.araReviewComplete === true &&
    accountGrowthReceipt.humanReviewComplete === true &&
    accountGrowthReceipt.packageSupportReady === true &&
    accountGrowthReceipt.lowLaborReuseReady === true &&
    accountGrowthReceipt.checklistReady === true &&
    accountGrowthReceipt.automationReady === true &&
    accountGrowthReceipt.executionReady === true &&
    accountGrowthReceipt.followUpReady === true &&
    accountGrowthReceipt.renewalReady === true &&
    accountGrowthReceipt.qualityReviewReady === true &&
    accountGrowthReceipt.outcomeReady === true &&
    accountGrowthReceipt.accountGrowthReady === true &&
    accountGrowthReceipt.retentionReady === true &&
    accountGrowthReceipt.referralReady === true &&
    accountGrowthReceipt.expansionReady === true &&
    accountGrowthReceipt.nativeExecutionReady === true &&
    accountGrowthReceipt.epochTimingProviderOnly === true &&
    accountGrowthReceipt.requiresEpochTimingRequest !== true &&
    accountGrowthReceipt.workshopCalendarOwnership !== true &&
    accountGrowthReceipt.monitorWorkflowExposed !== true &&
    accountGrowthReceipt.paymentLiveEnabled !== true &&
    qualityOutcomeReceipt.customerSafe === true &&
    qualityOutcomeReceipt.customerVisibleReceiptReady === true &&
    qualityOutcomeReceipt.webportalExportReady === true &&
    qualityOutcomeReceipt.operatorReviewed === true &&
    qualityOutcomeReceipt.araReviewComplete === true &&
    qualityOutcomeReceipt.humanReviewComplete === true &&
    qualityOutcomeReceipt.packageSupportReady === true &&
    qualityOutcomeReceipt.lowLaborReuseReady === true &&
    qualityOutcomeReceipt.checklistReady === true &&
    qualityOutcomeReceipt.automationReady === true &&
    qualityOutcomeReceipt.executionReady === true &&
    qualityOutcomeReceipt.followUpReady === true &&
    qualityOutcomeReceipt.renewalReady === true &&
    qualityOutcomeReceipt.qualityReviewReady === true &&
    qualityOutcomeReceipt.outcomeReady === true &&
    qualityOutcomeReceipt.nativeExecutionReady === true &&
    qualityOutcomeReceipt.epochTimingProviderOnly === true &&
    qualityOutcomeReceipt.requiresEpochTimingRequest !== true &&
    qualityOutcomeReceipt.workshopCalendarOwnership !== true &&
    qualityOutcomeReceipt.monitorWorkflowExposed !== true &&
    qualityOutcomeReceipt.paymentLiveEnabled !== true;
  if (!safeForReport) return null;

  const suffix = accountGrowthReceipt.requestId || accountGrowthReceipt.packageId || "package";
  return {
    id: makeId("package-delivery-retention-report"),
    accountGrowthReceiptId: accountGrowthReceipt.id,
    qualityOutcomeReceiptId: qualityOutcomeReceipt.id,
    requestId: accountGrowthReceipt.requestId,
    serviceLane: accountGrowthReceipt.serviceLane,
    packageId: accountGrowthReceipt.packageId,
    accountGrowthPlanId: accountGrowthLinkage.accountGrowthPlanId || `package-growth-plan-from-${suffix}`,
    retentionSignalId: accountGrowthLinkage.retentionSignalId || `retention-signal-from-${suffix}`,
    referralSignalId: accountGrowthLinkage.referralSignalId || `referral-signal-from-${suffix}`,
    expansionSignalId: accountGrowthLinkage.expansionSignalId || `expansion-signal-from-${suffix}`,
    kind: "package-delivery-retention-reporting",
    status: "package-delivery-retention-reporting-ready",
    reportingPath: "quality-outcome-account-growth-retention-reporting",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    followUpReady: true,
    renewalReady: true,
    qualityReviewReady: true,
    outcomeReady: true,
    accountGrowthReady: true,
    retentionReady: true,
    referralReady: true,
    expansionReady: true,
    qualityOutcomeReceiptMatched: true,
    retentionReportingReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeStatus: "WORKSHOP has prepared customer-safe retention reporting from account-growth and quality/outcome receipts. EPOCH remains timing-provider-only.",
    operatorNextAction: "Use this internal retention report to decide the repeat-service, referral, or expansion report, then export only the customer-safe retention-report receipt.",
    createdAt: accountGrowthReceipt.recordedAt || qualityOutcomeReceipt.recordedAt || new Date().toISOString()
  };
}

export function createPackageDeliveryRetentionReportReceiptForRecord(reportRecord) {
  if (!reportRecord) return null;
  const customerSafe =
    reportRecord.customerSafeForReceipt === true &&
    reportRecord.operatorReviewed === true &&
    reportRecord.araReviewComplete === true &&
    reportRecord.humanReviewComplete === true &&
    reportRecord.packageSupportReady === true &&
    reportRecord.lowLaborReuseReady === true &&
    reportRecord.checklistReady === true &&
    reportRecord.automationReady === true &&
    reportRecord.executionReady === true &&
    reportRecord.followUpReady === true &&
    reportRecord.renewalReady === true &&
    reportRecord.qualityReviewReady === true &&
    reportRecord.outcomeReady === true &&
    reportRecord.accountGrowthReady === true &&
    reportRecord.retentionReady === true &&
    reportRecord.referralReady === true &&
    reportRecord.expansionReady === true &&
    reportRecord.qualityOutcomeReceiptMatched === true &&
    reportRecord.retentionReportingReady === true &&
    reportRecord.nativeExecutionReady === true &&
    reportRecord.epochTimingProviderOnly === true &&
    reportRecord.requiresEpochTimingRequest !== true &&
    reportRecord.customerVisible !== true &&
    reportRecord.webportalExportReady !== true &&
    reportRecord.workshopCalendarOwnership !== true &&
    reportRecord.monitorWorkflowExposed !== true &&
    reportRecord.paymentLiveEnabled !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("package-delivery-retention-report-receipt"),
    requestId: reportRecord.requestId,
    serviceLane: reportRecord.serviceLane,
    packageId: reportRecord.packageId,
    kind: "package-delivery-retention-report",
    status: "customer-safe-package-delivery-retention-report-ready",
    summary: "WORKSHOP prepared a package delivery retention report from customer-safe quality/outcome and account-growth receipts without exposing internal packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, quality-control, outcome-control, account-growth-control, retention-reporting-control, or package-control records.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    followUpReady: true,
    renewalReady: true,
    qualityReviewReady: true,
    outcomeReady: true,
    accountGrowthReady: true,
    retentionReady: true,
    referralReady: true,
    expansionReady: true,
    qualityOutcomeReceiptMatched: true,
    retentionReportingReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeMessage: "Package delivery retention reporting is ready for this service path.",
    nextAction: "Review the customer-safe retention report in WORKSHOP. Request EPOCH timing only if another appointment or deadline is needed.",
    recordedAt: reportRecord.createdAt
  };
}

export function createPackageDeliveryGrowthActionForRetentionReport(retentionReport, retentionReportReceipt) {
  if (!retentionReport || !retentionReportReceipt) return null;
  const receiptsMatch =
    retentionReport.requestId === retentionReportReceipt.requestId &&
    retentionReport.serviceLane === retentionReportReceipt.serviceLane &&
    retentionReport.packageId === retentionReportReceipt.packageId &&
    retentionReport.retentionReportingReady === true &&
    retentionReportReceipt.retentionReportingReady === true;
  const safeForAction =
    receiptsMatch &&
    retentionReport.customerSafeForReceipt === true &&
    retentionReport.customerVisible !== true &&
    retentionReport.webportalExportReady !== true &&
    retentionReport.operatorReviewed === true &&
    retentionReport.araReviewComplete === true &&
    retentionReport.humanReviewComplete === true &&
    retentionReport.packageSupportReady === true &&
    retentionReport.lowLaborReuseReady === true &&
    retentionReport.checklistReady === true &&
    retentionReport.automationReady === true &&
    retentionReport.executionReady === true &&
    retentionReport.followUpReady === true &&
    retentionReport.renewalReady === true &&
    retentionReport.qualityReviewReady === true &&
    retentionReport.outcomeReady === true &&
    retentionReport.accountGrowthReady === true &&
    retentionReport.retentionReady === true &&
    retentionReport.referralReady === true &&
    retentionReport.expansionReady === true &&
    retentionReport.qualityOutcomeReceiptMatched === true &&
    retentionReport.retentionReportingReady === true &&
    retentionReport.nativeExecutionReady === true &&
    retentionReport.epochTimingProviderOnly === true &&
    retentionReport.requiresEpochTimingRequest !== true &&
    retentionReport.workshopCalendarOwnership !== true &&
    retentionReport.monitorWorkflowExposed !== true &&
    retentionReport.paymentLiveEnabled !== true &&
    retentionReportReceipt.customerSafe === true &&
    retentionReportReceipt.customerVisibleReceiptReady === true &&
    retentionReportReceipt.webportalExportReady === true &&
    retentionReportReceipt.operatorReviewed === true &&
    retentionReportReceipt.araReviewComplete === true &&
    retentionReportReceipt.humanReviewComplete === true &&
    retentionReportReceipt.packageSupportReady === true &&
    retentionReportReceipt.lowLaborReuseReady === true &&
    retentionReportReceipt.checklistReady === true &&
    retentionReportReceipt.automationReady === true &&
    retentionReportReceipt.executionReady === true &&
    retentionReportReceipt.followUpReady === true &&
    retentionReportReceipt.renewalReady === true &&
    retentionReportReceipt.qualityReviewReady === true &&
    retentionReportReceipt.outcomeReady === true &&
    retentionReportReceipt.accountGrowthReady === true &&
    retentionReportReceipt.retentionReady === true &&
    retentionReportReceipt.referralReady === true &&
    retentionReportReceipt.expansionReady === true &&
    retentionReportReceipt.qualityOutcomeReceiptMatched === true &&
    retentionReportReceipt.nativeExecutionReady === true &&
    retentionReportReceipt.epochTimingProviderOnly === true &&
    retentionReportReceipt.requiresEpochTimingRequest !== true &&
    retentionReportReceipt.workshopCalendarOwnership !== true &&
    retentionReportReceipt.monitorWorkflowExposed !== true &&
    retentionReportReceipt.paymentLiveEnabled !== true;
  if (!safeForAction) return null;

  const suffix = retentionReport.requestId || retentionReport.packageId || "package";
  return {
    id: makeId("package-delivery-growth-action"),
    retentionReportId: retentionReport.id,
    retentionReportReceiptId: retentionReportReceipt.id,
    requestId: retentionReport.requestId,
    serviceLane: retentionReport.serviceLane,
    packageId: retentionReport.packageId,
    accountGrowthPlanId: retentionReport.accountGrowthPlanId || `package-growth-plan-from-${suffix}`,
    retentionSignalId: retentionReport.retentionSignalId || `retention-signal-from-${suffix}`,
    referralSignalId: retentionReport.referralSignalId || `referral-signal-from-${suffix}`,
    expansionSignalId: retentionReport.expansionSignalId || `expansion-signal-from-${suffix}`,
    kind: "package-delivery-growth-action",
    status: "package-delivery-growth-action-ready",
    growthPath: "retention-report-repeat-referral-expansion-action",
    customerVisible: false,
    customerSafeForReceipt: true,
    webportalExportReady: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    followUpReady: true,
    renewalReady: true,
    qualityReviewReady: true,
    outcomeReady: true,
    accountGrowthReady: true,
    retentionReady: true,
    referralReady: true,
    expansionReady: true,
    qualityOutcomeReceiptMatched: true,
    retentionReportingReady: true,
    growthActionReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeStatus: "WORKSHOP has prepared the repeat-service, referral, and expansion action path from retention reporting. EPOCH remains timing-provider-only.",
    operatorNextAction: "Choose the next repeat-service, referral, or expansion action inside WORKSHOP, then export only the customer-safe growth-action receipt.",
    createdAt: retentionReport.createdAt || retentionReportReceipt.recordedAt || new Date().toISOString()
  };
}

export function createPackageDeliveryGrowthActionReceiptForAction(actionRecord) {
  if (!actionRecord) return null;
  const customerSafe =
    actionRecord.customerSafeForReceipt === true &&
    actionRecord.operatorReviewed === true &&
    actionRecord.araReviewComplete === true &&
    actionRecord.humanReviewComplete === true &&
    actionRecord.packageSupportReady === true &&
    actionRecord.lowLaborReuseReady === true &&
    actionRecord.checklistReady === true &&
    actionRecord.automationReady === true &&
    actionRecord.executionReady === true &&
    actionRecord.followUpReady === true &&
    actionRecord.renewalReady === true &&
    actionRecord.qualityReviewReady === true &&
    actionRecord.outcomeReady === true &&
    actionRecord.accountGrowthReady === true &&
    actionRecord.retentionReady === true &&
    actionRecord.referralReady === true &&
    actionRecord.expansionReady === true &&
    actionRecord.qualityOutcomeReceiptMatched === true &&
    actionRecord.retentionReportingReady === true &&
    actionRecord.growthActionReady === true &&
    actionRecord.nativeExecutionReady === true &&
    actionRecord.epochTimingProviderOnly === true &&
    actionRecord.requiresEpochTimingRequest !== true &&
    actionRecord.customerVisible !== true &&
    actionRecord.webportalExportReady !== true &&
    actionRecord.workshopCalendarOwnership !== true &&
    actionRecord.monitorWorkflowExposed !== true &&
    actionRecord.paymentLiveEnabled !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("package-delivery-growth-action-receipt"),
    requestId: actionRecord.requestId,
    serviceLane: actionRecord.serviceLane,
    packageId: actionRecord.packageId,
    kind: "package-delivery-growth-action",
    status: "customer-safe-package-delivery-growth-action-ready",
    summary: "WORKSHOP prepared a customer-safe growth action receipt from retention reporting without exposing internal report, account-growth, quality/outcome, signal, packet, queue, decision, materialization, reuse, checklist, automation, execution, follow-up-control, renewal-control, retention-reporting-control, growth-action-control, or package-control records.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    operatorReviewed: true,
    araReviewComplete: true,
    humanReviewComplete: true,
    packageSupportReady: true,
    lowLaborReuseReady: true,
    checklistReady: true,
    automationReady: true,
    executionReady: true,
    followUpReady: true,
    renewalReady: true,
    qualityReviewReady: true,
    outcomeReady: true,
    accountGrowthReady: true,
    retentionReady: true,
    referralReady: true,
    expansionReady: true,
    qualityOutcomeReceiptMatched: true,
    retentionReportingReady: true,
    growthActionReady: true,
    requiresEpochTimingRequest: false,
    nativeExecutionReady: true,
    customerSafeMessage: "A repeat-service, referral, or expansion action is ready for this service path.",
    nextAction: "Review the customer-safe growth action in WORKSHOP. Request EPOCH timing only if another appointment, deadline, or service window is needed.",
    recordedAt: actionRecord.createdAt
  };
}

function accountStatusForRequest(request, outcome) {
  if (request.status === "compatibility-review") return "compatibility-review";
  if (outcome?.resultReceiptReady) return request.status === "fit-review" ? "fit-review" : "active";
  return request.status || "queued";
}

function accountCustomerSafeStatus(request, outcome) {
  if (request.status === "compatibility-review") {
    return "Service history is held until compatibility review clears.";
  }
  if (outcome?.resultReceiptReady) {
    return "Service history is recorded and future follow-up can be reviewed.";
  }
  return "Service history is recorded and waiting for the current result to be ready.";
}

function accountOperatorNextAction(request, outcome) {
  if (request.status === "compatibility-review") {
    return "Clear compatibility review before opening renewal or follow-up prompts.";
  }
  if (outcome?.resultReceiptReady) {
    return `Prepare the next ${serviceLaneLabel(request.lane)} follow-up after the customer-safe result is sent.`;
  }
  return "Keep the account warm, but do not prompt renewal until the result report is ready.";
}

export function createCustomerAccountForRequest(request, crmAccount, outcome) {
  if (!request) return null;
  const resultReady = Boolean(outcome?.resultReceiptReady);
  return {
    id: makeId("account"),
    crmAccountId: crmAccount?.id || "",
    displayName: request.customer,
    accountType: request.ageBand,
    status: accountStatusForRequest(request, outcome),
    lifetimeValueJpy: Number(outcome?.valueJpy || request.valueJpy || 0),
    activeRequestCount: 1,
    completedResultCount: resultReady ? 1 : 0,
    renewalEligible: resultReady && request.status !== "compatibility-review",
    customerVisible: true,
    nextFollowUpDue: resultReady ? "After result receipt" : "After result readiness",
    customerSafeStatus: accountCustomerSafeStatus(request, outcome),
    operatorNextAction: accountOperatorNextAction(request, outcome),
    updatedAt: outcome?.updatedAt || request.createdAt
  };
}

export function createCustomerAccountHistoryForOutcome(account, outcome, request, resultReceipt) {
  if (!account || !outcome || !request) return null;
  return {
    id: makeId("history"),
    accountId: account.id,
    requestId: request.id,
    outcomeId: outcome.id,
    event: resultReceipt ? "delivery-result-recorded" : "service-result-opened",
    status: outcome.status,
    valueJpy: Number(outcome.valueJpy || request.valueJpy || 0),
    customerVisible: true,
    customerSafeStatus: resultReceipt
      ? "Service history is recorded with a customer-safe result receipt."
      : outcome.customerSafeStatus,
    operatorNextAction: resultReceipt
      ? "Link the result receipt to account history and queue follow-up."
      : "Keep this account history open until a result receipt is ready.",
    recordedAt: resultReceipt?.createdAt || outcome.updatedAt || request.createdAt
  };
}

function renewalStatusForOutcome(outcome, request) {
  if (request.status === "compatibility-review") return "compatibility-review";
  if (outcome?.resultReceiptReady) return request.status === "fit-review" ? "fit-review" : "queued";
  return "queued";
}

function renewalCustomerSafeStatus(outcome, request) {
  if (request.status === "compatibility-review") {
    return "Follow-up opens only after compatibility review clears.";
  }
  if (outcome?.resultReceiptReady) {
    return "A next-step follow-up can be reviewed after the current result is sent.";
  }
  return "Follow-up opens after the current service result is ready.";
}

function renewalOperatorNextAction(outcome, request) {
  if (request.status === "compatibility-review") {
    return "Do not prompt renewal until compatibility review clears.";
  }
  if (outcome?.resultReceiptReady) {
    return `Prepare a customer-safe next-step prompt for ${serviceLaneLabel(request.lane)}.`;
  }
  return "Hold renewal prompt until the result report becomes ready.";
}

export function createRenewalOpportunityForOutcome(outcome, request, account) {
  if (!outcome || !request || !account) return null;
  const renewalReady = Boolean(outcome.resultReceiptReady && request.status !== "compatibility-review");
  return {
    id: makeId("renewal"),
    accountId: account.id,
    sourceOutcomeId: outcome.id,
    packageId: request.packageId,
    lane: request.lane,
    status: renewalStatusForOutcome(outcome, request),
    valueJpy: Number(outcome.valueJpy || request.valueJpy || 0),
    renewalReady,
    requiresEpochTime: renewalReady && request.lane !== "submission-review",
    customerVisible: true,
    followUpDue: renewalReady ? "After result receipt" : "After result readiness",
    customerSafeStatus: renewalCustomerSafeStatus(outcome, request),
    operatorNextAction: renewalOperatorNextAction(outcome, request),
    updatedAt: outcome.updatedAt || request.createdAt
  };
}

export function createCustomerFollowUpForRenewal(renewal, account, request) {
  if (!renewal || !account || !request || !renewal.renewalReady) return null;
  return {
    id: makeId("followup"),
    renewalId: renewal.id,
    accountId: account.id,
    kind: renewal.requiresEpochTime ? "scope-follow-up" : "renewal-prompt",
    status: renewal.status,
    requiresEpochTime: Boolean(renewal.requiresEpochTime),
    customerVisible: true,
    due: renewal.followUpDue,
    customerSafeStatus: renewal.customerSafeStatus,
    operatorNextAction: renewal.requiresEpochTime
      ? "Prepare the follow-up scope and request EPOCH timing only if a session is needed."
      : "Send the next-step prompt without adding live calendar time.",
    createdAt: renewal.updatedAt || request.createdAt
  };
}

function retentionScoreForAccount(account, renewal) {
  if (!account?.renewalEligible || !renewal?.renewalReady) return 45;
  if (account.accountType === "business") return 76;
  return 82;
}

function retentionRiskForScore(score) {
  if (score >= 80) return "low";
  if (score >= 65) return "medium";
  return "waiting";
}

export function createRetentionHealthForAccount(account, renewal, request) {
  if (!account || !request) return null;
  const score = retentionScoreForAccount(account, renewal);
  const growthReady = Boolean(renewal?.renewalReady && account.renewalEligible);
  return {
    id: makeId("retention"),
    accountId: account.id,
    sourceRenewalId: renewal?.id || "",
    status: account.status,
    retentionScore: score,
    riskLevel: retentionRiskForScore(score),
    referralEligible: growthReady && request.status !== "compatibility-review",
    growthReady,
    customerVisible: true,
    customerSafeStatus: growthReady
      ? "Your service history is healthy and future support can be reviewed."
      : "Future follow-up is waiting for the current service result to be ready.",
    operatorNextAction: growthReady
      ? "Prepare the retention follow-up, referral prompt, and account-growth route."
      : "Do not open referral or growth prompts until the account is renewal-ready.",
    updatedAt: renewal?.updatedAt || account.updatedAt || request.createdAt
  };
}

export function createReferralOpportunityForRetention(retention, account, renewal, request) {
  if (!retention || !account || !renewal || !request || !retention.referralEligible) return null;
  return {
    id: makeId("referral"),
    accountId: account.id,
    sourceRetentionId: retention.id,
    lane: request.lane,
    status: renewal.status,
    valueJpy: Number(renewal.valueJpy || account.lifetimeValueJpy || request.valueJpy || 0),
    referralReady: true,
    customerVisible: true,
    customerSafeStatus: "A referral path can be shared after the current result is accepted.",
    operatorNextAction: `Prepare a customer-safe referral prompt for ${serviceLaneLabel(request.lane)}.`,
    updatedAt: retention.updatedAt
  };
}

function growthPlanKindForLane(lane) {
  if (lane === "submission-review") return "submission-pack-growth";
  if (lane === "cohort-subscription") return "cohort-materials-growth";
  if (lane === "crm-database-admin" || lane === "workflow-build") return "support-block-growth";
  return "service-growth";
}

export function createAccountGrowthPlanForRetention(retention, referral, account, renewal, request) {
  if (!retention || !account || !renewal || !request || !retention.growthReady) return null;
  return {
    id: makeId("growth"),
    accountId: account.id,
    sourceRetentionId: retention.id,
    sourceReferralId: referral?.id || "",
    planKind: growthPlanKindForLane(request.lane),
    status: renewal.status,
    valueJpy: Number(renewal.valueJpy || account.lifetimeValueJpy || request.valueJpy || 0),
    growthReady: true,
    requiresEpochTime: Boolean(renewal.requiresEpochTime),
    customerVisible: true,
    customerSafeStatus: renewal.requiresEpochTime
      ? "The next support step can be reviewed and scheduled only if timing is needed."
      : "The next lower-labor service step can be requested after the current result.",
    operatorNextAction: renewal.requiresEpochTime
      ? "Draft the account-growth plan and request EPOCH timing only if a planning session is needed."
      : "Offer the next lower-labor service step without adding live calendar load.",
    updatedAt: retention.updatedAt
  };
}

export function createGrowthFollowUpReceiptForPlan(growthPlan, account, request) {
  if (!growthPlan || !account || !request || !growthPlan.growthReady) return null;
  return {
    id: makeId("growth-receipt"),
    growthPlanId: growthPlan.id,
    accountId: account.id,
    kind: "account-growth-follow-up",
    status: growthPlan.status,
    customerVisible: true,
    summary: `${serviceLaneLabel(request.lane)} account-growth follow-up opened.`,
    customerSafeStatus: growthPlan.customerSafeStatus,
    createdAt: growthPlan.updatedAt || request.createdAt
  };
}

export function createReferralConversionForOpportunity(referral, account, growthPlan, request) {
  if (!referral || !account || !request || !referral.referralReady) return null;
  return {
    id: makeId("conversion"),
    referralId: referral.id,
    accountId: account.id,
    sourceGrowthPlanId: growthPlan?.id || "",
    lane: request.lane,
    status: referral.status,
    valueJpy: Number(referral.valueJpy || growthPlan?.valueJpy || account.lifetimeValueJpy || request.valueJpy || 0),
    conversionReady: true,
    customerVisible: true,
    customerSafeStatus: growthPlan?.requiresEpochTime
      ? "A next service step can be reviewed and scheduled only if timing is needed."
      : "A next lower-labor service step is ready to open after the current result.",
    operatorNextAction: growthPlan?.requiresEpochTime
      ? "Convert the referral/growth path into a scoped request and request EPOCH timing only if needed."
      : "Convert the referral/growth path into a lower-labor repeat request without live calendar load.",
    updatedAt: referral.updatedAt || growthPlan?.updatedAt || request.createdAt
  };
}

export function createGrowthPlanAcceptanceForPlan(growthPlan, conversion, account, request) {
  if (!growthPlan || !conversion || !account || !request || !growthPlan.growthReady || !conversion.conversionReady) return null;
  return {
    id: makeId("acceptance"),
    growthPlanId: growthPlan.id,
    conversionId: conversion.id,
    accountId: account.id,
    status: growthPlan.status,
    accepted: true,
    requiresEpochTime: Boolean(growthPlan.requiresEpochTime),
    customerVisible: true,
    customerSafeStatus: growthPlan.requiresEpochTime
      ? "The next service step is accepted for scope review; timing is reviewed only if a session is needed."
      : "The next lower-labor service step is accepted and can open without live scheduling.",
    operatorNextAction: growthPlan.requiresEpochTime
      ? "Create the expansion request and request EPOCH timing only for the planning session."
      : "Create the lower-labor expansion request and keep it out of live calendar load.",
    acceptedAt: conversion.updatedAt || growthPlan.updatedAt || request.createdAt
  };
}

export function createExpansionServiceRequestForAcceptance(acceptance, growthPlan, account, request) {
  if (!acceptance || !growthPlan || !account || !request || !acceptance.accepted) return null;
  return {
    id: makeId("expansion"),
    acceptanceId: acceptance.id,
    accountId: account.id,
    lane: request.lane,
    packageId: request.packageId,
    status: acceptance.status,
    valueJpy: Number(growthPlan.valueJpy || request.valueJpy || account.lifetimeValueJpy || 0),
    epochTimeNeeded: Boolean(acceptance.requiresEpochTime),
    customerVisible: true,
    customerSafeStatus: acceptance.requiresEpochTime
      ? "The next service request is ready for scope review; timing is checked only if needed."
      : "The next lower-labor request is ready to open.",
    operatorNextAction: acceptance.requiresEpochTime
      ? "Prepare the expansion scope and request EPOCH timing only for a planning session."
      : "Open the expansion request as async or reusable-material work.",
    createdAt: acceptance.acceptedAt || request.createdAt
  };
}

export function createConversionStatusEventForExpansion(conversion, expansionRequest, account) {
  if (!conversion || !expansionRequest || !account) return null;
  return {
    id: makeId("conversion-status"),
    conversionId: conversion.id,
    expansionRequestId: expansionRequest.id,
    accountId: account.id,
    status: expansionRequest.status,
    label: expansionRequest.epochTimeNeeded ? "Expansion scope review" : "Repeat request ready",
    customerVisible: true,
    customerSafeStatus: expansionRequest.customerSafeStatus,
    createdAt: expansionRequest.createdAt
  };
}

export function createConversionReceiptForExpansion(conversion, expansionRequest, statusEvent) {
  if (!conversion || !expansionRequest || !statusEvent) return null;
  return {
    id: makeId("conversion-receipt"),
    conversionId: conversion.id,
    expansionRequestId: expansionRequest.id,
    accountId: expansionRequest.accountId,
    kind: expansionRequest.epochTimeNeeded ? "growth-execution" : "referral-conversion",
    status: expansionRequest.status,
    customerVisible: true,
    summary: expansionRequest.epochTimeNeeded
      ? "Account-growth conversion is ready for scoped service execution."
      : "Repeat/referral conversion is ready for lower-labor execution.",
    customerSafeStatus: expansionRequest.customerSafeStatus,
    createdAt: statusEvent.createdAt
  };
}

export function createServiceRequestRecord(form) {
  const lane = String(form.get("lane") || "submission-review");
  const ageBand = String(form.get("ageBand") || "adult");
  const materialStatus = String(form.get("material") || "diagnostic");
  const laneOption = serviceLaneOptions.find((option) => option.value === lane) || serviceLaneOptions[0];
  const selectedPackage = initialWorkshopLedger.packages.find((item) => item.id === laneOption.packageId);
  const needsTiming = form.get("needsTiming") === "on";
  const createdAt = new Date().toISOString();
  const request = {
    id: makeId("req"),
    customer: String(form.get("requester") || "").trim() || "New customer",
    ageBand,
    lane,
    packageId: laneOption.packageId,
    materialStatus,
    status: requestStatusForForm(ageBand, materialStatus, needsTiming),
    summary: String(form.get("summary") || "").trim(),
    valueJpy: Number(selectedPackage?.valueJpy || 0),
    epochTimeNeeded: needsTiming,
    createdAt
  };
  request.customerSafeStatus = customerSafeStatusForRequest(request);
  request.operatorNextAction = operatorNextActionForRequest(request);
  return request;
}

export function createSubmissionForRequest(request) {
  if (request.materialStatus !== "ready" || request.status === "compatibility-review") return null;
  return {
    id: makeId("sub"),
    requestId: request.id,
    kind: request.lane === "submission-review" || request.lane === "premium-english-test-prep" ? "writing-review" : "document-review",
    title: `${serviceLaneLabel(request.lane)} material`,
    status: "materials-received",
    due: request.epochTimeNeeded ? "Pending EPOCH timing confirmation" : "Operator review queue",
    customerVisible: true,
    customerSafeStatus: request.epochTimeNeeded
      ? "Materials received and waiting for the confirmed delivery window."
      : "Materials received and queued for delivery review.",
    operatorNextAction: request.epochTimeNeeded
      ? "Wait for EPOCH timing confirmation before assigning the final return slot."
      : "Assign the delivery owner and start review."
  };
}

export function createEpochScheduleRequestPreview(request, bridgeReady) {
  return {
    requester: "WORKSHOP timing handoff",
    need: epochNeedForRequest(request),
    requestedWindow: requestedWindowForRequest(request),
    timezone: DEFAULT_EPOCH_TIMEZONE,
    status: "queued",
    sandboxOnly: true,
    providerGoLiveRequested: false,
    customerSafeStatus: bridgeReady
      ? "Timing request received; availability is being checked."
      : "Timing request is staged and will be sent after WORKSHOP intake clears.",
    createdAt: request.createdAt
  };
}

export function createEpochScheduleStatusPreview(request, bridgeReady) {
  return {
    title: epochStatusTitleForRequest(request),
    owner: "EPOCH",
    status: bridgeReady ? "queued" : "planned",
    time: requestedWindowForRequest(request),
    startIso: "",
    endIso: "",
    timezone: DEFAULT_EPOCH_TIMEZONE,
    customerSafeStatus: bridgeReady
      ? `${epochStatusTitleForRequest(request)} is being reviewed.`
      : "Schedule-bound preview prepared locally until WORKSHOP clears intake.",
    detail: bridgeReady
      ? `Schedule-bound ${epochStatusTitleForRequest(request).toLowerCase()} requested from WORKSHOP.`
      : "Only the timing preview is prepared here; WORKSHOP has not released the request to EPOCH yet."
  };
}

export function createEpochHandoffForRequest(request) {
  if (!request.epochTimeNeeded) return null;
  const bridgeReady = bridgeReadyForRequest(request);
  return {
    id: makeId("epoch-handoff"),
    requestId: request.id,
    kind: handoffKindForRequest(request),
    status: bridgeReady ? "epoch-time-requested" : "queued",
    target: requestedWindowForRequest(request),
    bridgeReady,
    bridgeState: bridgeReady ? "payload-ready" : "waiting-on-workshop",
    operatorNextAction: handoffOperatorNextAction(request, bridgeReady),
    customerSafeStatus: handoffCustomerSafeStatus(request, bridgeReady),
    receiptIds: [],
    requestPreview: createEpochScheduleRequestPreview(request, bridgeReady),
    statusPreview: createEpochScheduleStatusPreview(request, bridgeReady)
  };
}

export function createEpochTimingReturnPayloadForHandoff(handoff, request, returnType = "booking-confirmed") {
  if (!handoff || !request || !handoff.bridgeReady) return null;
  const conflict = returnType === "availability-conflict";
  return {
    id: makeId("epoch-time-return"),
    sourceHandoffId: handoff.id,
    requestId: request.id,
    returnType: conflict ? "availability-conflict" : "booking-confirmed",
    epochStatus: conflict ? "needs-reschedule" : "returned",
    confirmedWindow: conflict ? "" : handoff.target,
    customerVisible: true,
    providerGoLiveRequested: false,
    customerSafeStatus: conflict
      ? "No local availability is open for the requested timing; choose a new window."
      : "Confirmed timing returned locally to WORKSHOP.",
    returnedAt: new Date().toISOString()
  };
}

export function createEpochTimingReturnConsumptionForPayload(payload, request) {
  if (!payload || !request || payload.providerGoLiveRequested) return null;
  const conflict = payload.returnType === "availability-conflict" || payload.epochStatus === "needs-reschedule";
  return {
    id: makeId("timing-consumption"),
    sourceHandoffId: payload.sourceHandoffId,
    returnPayloadId: payload.id,
    requestId: request.id,
    status: conflict ? "timing-reschedule-required" : "timing-confirmed",
    customerVisible: payload.customerVisible,
    operatorNextAction: conflict
      ? "Choose a new timing window and send only the timing change to EPOCH."
      : "Proceed with WORKSHOP delivery using the confirmed timing window.",
    customerSafeStatus: conflict
      ? "Timing needs a new window; WORKSHOP is preparing a revised timing request."
      : "Return timing is confirmed; WORKSHOP can proceed with delivery.",
    consumedAt: new Date().toISOString()
  };
}

export function createCustomerStatusEventForTimingReturn(consumption, request) {
  if (!consumption || !request) return null;
  return createStatusEventRecord(
    request.id,
    consumption.status,
    consumption.status === "timing-confirmed" ? "Timing return confirmed" : "New timing window needed",
    consumption.customerSafeStatus,
    consumption.consumedAt
  );
}

export function createDeliveryTransitionForTimingReturn(consumption, request) {
  if (!consumption || !request) return null;
  return createTransitionRecord(
    request.id,
    consumption.status === "timing-confirmed" ? "EPOCH timing return consumed" : "EPOCH timing return needs new window",
    "epoch-time-requested",
    consumption.status,
    consumption.customerSafeStatus,
    consumption.operatorNextAction,
    consumption.consumedAt
  );
}

export function createTimingReturnReceiptForConsumption(consumption, payload, request) {
  if (!consumption || !payload || !request) return null;
  return {
    id: makeId("receipt-timing-return"),
    kind: "epoch-timing-return",
    status: consumption.status,
    summary: consumption.status === "timing-confirmed"
      ? `${request.customer} consumed the EPOCH timing confirmation into WORKSHOP delivery status.`
      : `${request.customer} consumed an EPOCH availability conflict and needs a revised WORKSHOP timing request.`,
    requestId: request.id,
    sourceHandoffId: payload.sourceHandoffId,
    returnPayloadId: payload.id,
    consumptionId: consumption.id,
    recordedAt: consumption.consumedAt,
    customerVisible: true,
    customerSafeStatus: consumption.customerSafeStatus
  };
}

export function createEpochRevisedCalendarTimingPayloadForHandoff(handoff, request) {
  if (!handoff || !request || !handoff.bridgeReady || request.lane !== "cohort-subscription") return null;
  return {
    id: makeId("epoch-revised-timing-payload"),
    sourceHandoffId: handoff.id,
    requestId: request.id,
    calendarSystemLabel: "revised-13-month",
    timingDisplayLabel: "13 x 28 projection, conversion held",
    constraintSummary: "1 common-year day and 2 leap-year days outside months.",
    conversionGateReason: "Gregorian/revised conversion remains gated until owner approval.",
    epochProjectionReceiptId: `EPOCH-REVISED-CONSTRAINT-FROM-${handoff.id}`,
    customerVisible: true,
    providerGoLiveRequested: false,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    customerSafeStatus: "EPOCH returned customer-safe revised timing context; WORKSHOP keeps service delivery ownership only.",
    returnedAt: new Date().toISOString()
  };
}

export function createEpochRevisedCalendarTimingConsumptionForPayload(payload, request) {
  if (!payload || !request || payload.providerGoLiveRequested || !payload.epochTimingProviderOnly || payload.workshopCalendarOwnership) return null;
  return {
    id: makeId("epoch-revised-timing-consumption"),
    payloadId: payload.id,
    sourceHandoffId: payload.sourceHandoffId,
    requestId: request.id,
    status: "recurring-exception-action-required",
    customerVisible: payload.customerVisible,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    operatorNextAction: "Use the returned timing display as service context only; send any timing change back to EPOCH.",
    customerSafeStatus: "Revised timing context is available from EPOCH; WORKSHOP is preparing the service step without calendar ownership.",
    consumedAt: new Date().toISOString()
  };
}

export function createCustomerStatusEventForRevisedCalendarTiming(consumption, request) {
  if (!consumption || !request) return null;
  return createStatusEventRecord(
    request.id,
    consumption.status,
    "Revised timing context returned",
    consumption.customerSafeStatus,
    consumption.consumedAt
  );
}

export function createDeliveryTransitionForRevisedCalendarTiming(consumption, request) {
  if (!consumption || !request) return null;
  return createTransitionRecord(
    request.id,
    "EPOCH revised timing context consumed",
    request.status === "recurring-series-active" ? "recurring-series-active" : "recurring-exception-action-required",
    consumption.status,
    consumption.customerSafeStatus,
    consumption.operatorNextAction,
    consumption.consumedAt
  );
}

export function createRevisedCalendarTimingReceiptForConsumption(consumption, payload, request) {
  if (!consumption || !payload || !request) return null;
  return {
    id: makeId("receipt-epoch-revised-timing"),
    kind: "epoch-revised-calendar-timing",
    status: consumption.status,
    summary: `${request.customer} consumed EPOCH revised timing context as WORKSHOP service status only.`,
    requestId: request.id,
    sourceHandoffId: payload.sourceHandoffId,
    payloadId: payload.id,
    consumptionId: consumption.id,
    recordedAt: consumption.consumedAt,
    customerVisible: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    customerSafeStatus: consumption.customerSafeStatus
  };
}

export function createTimingAwareServiceFollowUpForRevisedTiming(payload, consumption, receipt, request) {
  if (!payload || !consumption || !receipt || !request) return null;
  const customerSafe =
    payload.customerVisible === true &&
    payload.providerGoLiveRequested !== true &&
    payload.epochTimingProviderOnly === true &&
    payload.workshopCalendarOwnership !== true &&
    consumption.customerVisible === true &&
    consumption.epochTimingProviderOnly === true &&
    consumption.workshopCalendarOwnership !== true &&
    receipt.customerVisible === true &&
    receipt.epochTimingProviderOnly === true &&
    receipt.workshopCalendarOwnership !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("timing-aware-follow-up"),
    timingStatusId: consumption.id,
    revisedTimingPayloadId: payload.id,
    revisedTimingReceiptId: receipt.id,
    sourceHandoffId: payload.sourceHandoffId,
    requestId: request.id,
    actionKind: "timing-aware-service-follow-up",
    status: "follow-up-ready",
    customerVisible: true,
    customerSafe: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    renewalPromptReady: true,
    operatorNextAction: "Prepare the customer-safe renewal or follow-up message, and request EPOCH timing only if a new service session is needed.",
    customerSafeStatus: "EPOCH returned revised timing context; WORKSHOP can prepare the service follow-up without owning calendar rules.",
    createdAt: consumption.consumedAt
  };
}

export function createTimingAwareRenewalReceiptForFollowUp(followUp, consumption, request) {
  if (!followUp || !consumption || !request || !followUp.renewalPromptReady) return null;
  const customerSafe =
    followUp.customerSafe === true &&
    followUp.webportalExportReady === true &&
    followUp.epochTimingProviderOnly === true &&
    followUp.workshopCalendarOwnership !== true &&
    followUp.monitorWorkflowExposed !== true &&
    consumption.epochTimingProviderOnly === true &&
    consumption.workshopCalendarOwnership !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("timing-aware-renewal-receipt"),
    kind: "timing-aware-renewal",
    followUpId: followUp.id,
    requestId: request.id,
    timingStatusId: consumption.id,
    revisedTimingPayloadId: followUp.revisedTimingPayloadId,
    status: "renewal-follow-up-ready",
    summary: "WORKSHOP prepared a renewal/follow-up receipt from customer-safe EPOCH timing context.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    renewalReady: true,
    requiresEpochTimingRequest: false,
    customerSafeStatus: "Your service follow-up is ready; EPOCH remains the timing provider if another appointment or deadline is needed.",
    recordedAt: consumption.consumedAt
  };
}

export function createDeliveryOutcomeAutomationForReceipt(revenueOutcome, deliveryResultReceipt, timingAwareRenewalReceipt, request) {
  if (!revenueOutcome || !deliveryResultReceipt || !timingAwareRenewalReceipt || !request) return null;
  const customerSafe =
    deliveryResultReceipt.customerVisible === true &&
    timingAwareRenewalReceipt.customerSafe === true &&
    timingAwareRenewalReceipt.customerVisibleReceiptReady === true &&
    timingAwareRenewalReceipt.epochTimingProviderOnly === true &&
    timingAwareRenewalReceipt.workshopCalendarOwnership !== true &&
    timingAwareRenewalReceipt.monitorWorkflowExposed !== true &&
    timingAwareRenewalReceipt.renewalReady === true &&
    timingAwareRenewalReceipt.requiresEpochTimingRequest !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("delivery-outcome-automation"),
    kind: "delivery-outcome-automation",
    requestId: request.id,
    revenueOutcomeId: revenueOutcome.id,
    deliveryResultReceiptId: deliveryResultReceipt.id,
    timingAwareRenewalReceiptId: timingAwareRenewalReceipt.id,
    status: "delivery-outcome-automation-ready",
    customerVisible: false,
    customerSafe: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    araReviewComplete: true,
    renewalReady: true,
    requiresEpochTimingRequest: false,
    operatorNextAction: "Review the delivery outcome automation receipt and request EPOCH timing only if another appointment or deadline is needed.",
    customerSafeStatus: "WORKSHOP delivery outcome follow-up is ready. EPOCH remains timing-provider-only for appointments and deadlines.",
    recordedAt: new Date().toISOString()
  };
}

export function createDeliveryOutcomeAutomationReceiptForAutomation(automation, request) {
  if (!automation || !request) return null;
  const customerSafe =
    automation.customerSafe === true &&
    automation.webportalExportReady === true &&
    automation.epochTimingProviderOnly === true &&
    automation.workshopCalendarOwnership !== true &&
    automation.monitorWorkflowExposed !== true &&
    automation.paymentLiveEnabled !== true &&
    automation.araReviewComplete === true &&
    automation.renewalReady === true &&
    automation.requiresEpochTimingRequest !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("delivery-outcome-automation-receipt"),
    kind: "delivery-outcome-automation",
    automationId: automation.id,
    requestId: request.id,
    revenueOutcomeId: automation.revenueOutcomeId,
    deliveryResultReceiptId: automation.deliveryResultReceiptId,
    timingAwareRenewalReceiptId: automation.timingAwareRenewalReceiptId,
    status: "customer-safe-delivery-outcome-ready",
    summary: "WORKSHOP prepared a customer-safe delivery outcome automation receipt from local service and renewal context.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    araReviewComplete: true,
    renewalReady: true,
    requiresEpochTimingRequest: false,
    customerSafeMessage: "Your WORKSHOP delivery outcome follow-up is ready. EPOCH remains the timing provider for any next appointment or deadline.",
    nextAction: "Review the outcome and request EPOCH timing only if another service window is needed.",
    recordedAt: automation.recordedAt
  };
}

export function createAccountGrowthAutomationForDeliveryOutcome(automation, automationReceipt, request) {
  if (!automation || !automationReceipt || !request) return null;
  const customerSafe =
    automation.customerSafe === true &&
    automation.webportalExportReady === true &&
    automationReceipt.customerSafe === true &&
    automationReceipt.customerVisibleReceiptReady === true &&
    automationReceipt.webportalExportReady === true &&
    automationReceipt.epochTimingProviderOnly === true &&
    automationReceipt.workshopCalendarOwnership !== true &&
    automationReceipt.monitorWorkflowExposed !== true &&
    automationReceipt.paymentLiveEnabled !== true &&
    automationReceipt.araReviewComplete === true &&
    automationReceipt.renewalReady === true &&
    automationReceipt.requiresEpochTimingRequest !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("account-growth-automation"),
    kind: "account-growth-automation",
    deliveryOutcomeAutomationId: automation.id,
    deliveryOutcomeAutomationReceiptId: automationReceipt.id,
    requestId: request.id,
    revenueOutcomeId: automationReceipt.revenueOutcomeId,
    deliveryResultReceiptId: automationReceipt.deliveryResultReceiptId,
    timingAwareRenewalReceiptId: automationReceipt.timingAwareRenewalReceiptId,
    retentionHealthId: `retention-from-${request.id}`,
    referralOpportunityId: `referral-from-${request.id}`,
    accountGrowthPlanId: `growth-from-${request.id}`,
    growthFollowUpReceiptId: `growth-follow-up-from-${request.id}`,
    referralConversionId: `referral-conversion-from-${request.id}`,
    growthPlanAcceptanceId: `growth-acceptance-from-${request.id}`,
    expansionServiceRequestId: `expansion-from-${request.id}`,
    conversionStatusEventId: `conversion-status-from-${request.id}`,
    conversionReceiptId: `conversion-receipt-from-${request.id}`,
    status: "account-growth-automation-ready",
    growthPath: "retention-referral-expansion",
    customerVisible: false,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    araReviewComplete: true,
    renewalReady: true,
    retentionReady: true,
    referralReady: true,
    growthPlanReady: true,
    conversionReady: true,
    expansionRequestReady: true,
    requiresEpochTimingRequest: false,
    operatorNextAction: "Review the account-growth automation receipt, then open the repeat service path or referral follow-up without adding live calendar load.",
    customerSafeStatus: "WORKSHOP account-growth follow-up is ready from the reviewed delivery outcome. EPOCH remains timing-provider-only for appointments and deadlines.",
    customerSafeMessage: "Your WORKSHOP service path is ready for a next-step follow-up. Any future appointment or deadline remains handled through EPOCH.",
    recordedAt: automationReceipt.recordedAt
  };
}

export function createAccountGrowthAutomationReceiptForAutomation(automation, request) {
  if (!automation || !request) return null;
  const customerSafe =
    automation.customerSafe === true &&
    automation.customerVisibleReceiptReady === true &&
    automation.webportalExportReady === true &&
    automation.epochTimingProviderOnly === true &&
    automation.workshopCalendarOwnership !== true &&
    automation.monitorWorkflowExposed !== true &&
    automation.paymentLiveEnabled !== true &&
    automation.araReviewComplete === true &&
    automation.renewalReady === true &&
    automation.retentionReady === true &&
    automation.referralReady === true &&
    automation.growthPlanReady === true &&
    automation.conversionReady === true &&
    automation.expansionRequestReady === true &&
    automation.requiresEpochTimingRequest !== true;
  if (!customerSafe) return null;

  return {
    id: makeId("account-growth-automation-receipt"),
    kind: "account-growth-automation",
    automationId: automation.id,
    deliveryOutcomeAutomationId: automation.deliveryOutcomeAutomationId,
    deliveryOutcomeAutomationReceiptId: automation.deliveryOutcomeAutomationReceiptId,
    requestId: request.id,
    revenueOutcomeId: automation.revenueOutcomeId,
    deliveryResultReceiptId: automation.deliveryResultReceiptId,
    timingAwareRenewalReceiptId: automation.timingAwareRenewalReceiptId,
    retentionHealthId: automation.retentionHealthId,
    referralOpportunityId: automation.referralOpportunityId,
    accountGrowthPlanId: automation.accountGrowthPlanId,
    growthFollowUpReceiptId: automation.growthFollowUpReceiptId,
    referralConversionId: automation.referralConversionId,
    growthPlanAcceptanceId: automation.growthPlanAcceptanceId,
    expansionServiceRequestId: automation.expansionServiceRequestId,
    conversionStatusEventId: automation.conversionStatusEventId,
    conversionReceiptId: automation.conversionReceiptId,
    status: "customer-safe-account-growth-ready",
    summary: "WORKSHOP prepared a customer-safe account-growth automation receipt from reviewed delivery outcome, renewal, retention, and repeat-service context.",
    customerVisible: true,
    customerSafe: true,
    customerVisibleReceiptReady: true,
    webportalExportReady: true,
    epochTimingProviderOnly: true,
    workshopCalendarOwnership: false,
    monitorWorkflowExposed: false,
    paymentLiveEnabled: false,
    araReviewComplete: true,
    renewalReady: true,
    retentionReady: true,
    referralReady: true,
    growthPlanReady: true,
    conversionReady: true,
    expansionRequestReady: true,
    requiresEpochTimingRequest: false,
    customerSafeMessage: "Your WORKSHOP next-step service path is ready. Timing is only requested from EPOCH if a new appointment or deadline is needed.",
    nextAction: "Open the next repeat service or referral follow-up inside WORKSHOP. Request EPOCH timing only if a new service window is needed.",
    recordedAt: automation.recordedAt
  };
}

export function createEpochCapacityWaitlistPayloadForHandoff(handoff, request, capacityState = "waitlisted") {
  if (!handoff || !request || !handoff.bridgeReady) return null;
  const promoted = capacityState === "promoted";
  return {
    id: makeId("epoch-capacity-waitlist-payload"),
    sourceHandoffId: handoff.id,
    requestId: request.id,
    payloadKind: promoted ? "capacity-promoted" : "capacity-waitlisted",
    capacitySnapshotId: `EPOCH-CAPACITY-FROM-${handoff.id}`,
    waitlistEntryId: `EPOCH-WAITLIST-FROM-${handoff.id}`,
    holdReleaseId: promoted ? `EPOCH-HOLD-RELEASE-FROM-${handoff.id}` : "",
    promotionCandidateId: promoted ? `EPOCH-PROMOTION-FROM-${handoff.id}` : "",
    capacityReceiptId: `EPOCH-CAPACITY-RECEIPT-FROM-${handoff.id}`,
    epochStatus: promoted ? "promoted" : "waitlisted",
    waitlistPosition: promoted ? 0 : 1,
    releasedCapacity: promoted ? 1 : 0,
    customerVisible: true,
    providerGoLiveRequested: false,
    customerSafeStatus: promoted
      ? "EPOCH promoted the waitlisted timing request into a local availability slot."
      : "Preferred timing is full; EPOCH placed the request on the local waitlist.",
    returnedAt: new Date().toISOString()
  };
}

export function createEpochCapacityWaitlistConsumptionForPayload(payload, request) {
  if (!payload || !request || payload.providerGoLiveRequested) return null;
  const promoted = payload.epochStatus === "promoted";
  return {
    id: makeId("capacity-consumption"),
    capacityPayloadId: payload.id,
    sourceHandoffId: payload.sourceHandoffId,
    requestId: request.id,
    status: promoted ? "timing-promoted" : "timing-waitlisted",
    customerVisible: payload.customerVisible,
    operatorNextAction: promoted
      ? "Prepare customer-safe service delivery after EPOCH confirms the promoted timing slot."
      : "Keep service planning in WORKSHOP and wait for EPOCH promotion status.",
    customerSafeStatus: promoted
      ? "Waitlisted timing was promoted; WORKSHOP can prepare service delivery around the returned slot."
      : "Preferred timing is waitlisted; WORKSHOP is holding delivery planning without taking calendar ownership.",
    consumedAt: new Date().toISOString()
  };
}

export function createCustomerStatusEventForCapacityWaitlist(consumption, request) {
  if (!consumption || !request) return null;
  return createStatusEventRecord(
    request.id,
    consumption.status,
    consumption.status === "timing-promoted" ? "Waitlisted timing promoted" : "Timing waitlisted",
    consumption.customerSafeStatus,
    consumption.consumedAt
  );
}

export function createDeliveryTransitionForCapacityWaitlist(consumption, request) {
  if (!consumption || !request) return null;
  return createTransitionRecord(
    request.id,
    consumption.status === "timing-promoted" ? "EPOCH waitlist promotion consumed" : "EPOCH capacity waitlist consumed",
    request.status === "timing-waitlisted" ? "timing-waitlisted" : "epoch-time-requested",
    consumption.status,
    consumption.customerSafeStatus,
    consumption.operatorNextAction,
    consumption.consumedAt
  );
}

export function createCapacityWaitlistReceiptForConsumption(consumption, payload, request) {
  if (!consumption || !payload || !request) return null;
  return {
    id: makeId("receipt-capacity-waitlist"),
    kind: "epoch-capacity-waitlist",
    status: consumption.status,
    summary: consumption.status === "timing-promoted"
      ? `${request.customer} consumed an EPOCH waitlist promotion into WORKSHOP delivery planning.`
      : `${request.customer} consumed an EPOCH capacity waitlist update into WORKSHOP service status.`,
    requestId: request.id,
    sourceHandoffId: payload.sourceHandoffId,
    capacityPayloadId: payload.id,
    consumptionId: consumption.id,
    recordedAt: consumption.consumedAt,
    customerVisible: true,
    customerSafeStatus: consumption.customerSafeStatus
  };
}

function requestSupportsRecurringSeries(request) {
  return request?.lane === "cohort-subscription";
}

export function createEpochRecurringSeriesPayloadForHandoff(handoff, request, seriesState = "active") {
  if (!handoff || !request || !handoff.bridgeReady || !requestSupportsRecurringSeries(request)) return null;
  const exception = seriesState === "exception-action-required" ||
    request.status === "timing-reschedule-required" ||
    request.status === "recurring-exception-action-required";
  return {
    id: makeId("epoch-recurring-series-payload"),
    sourceHandoffId: handoff.id,
    requestId: request.id,
    seriesId: `EPOCH-SERIES-FROM-${handoff.id}`,
    seriesStatus: exception ? "exception-action-required" : "active",
    recurrenceLabel: "Weekly cohort or subscription service window",
    nextOccurrence: exception ? "Next affected service window" : handoff.target,
    exceptionCount: exception ? 1 : 0,
    customerVisible: true,
    providerGoLiveRequested: false,
    customerSafeStatus: exception
      ? "EPOCH returned a recurring service timing update; one instance needs a new window."
      : "EPOCH returned recurring service timing as active for WORKSHOP delivery.",
    returnedAt: new Date().toISOString()
  };
}

export function createEpochRecurringSeriesConsumptionForPayload(payload, request) {
  if (!payload || !request || payload.providerGoLiveRequested) return null;
  const exception = payload.seriesStatus === "exception-action-required" || Number(payload.exceptionCount || 0) > 0;
  return {
    id: makeId("recurring-consumption"),
    recurringPayloadId: payload.id,
    sourceHandoffId: payload.sourceHandoffId,
    requestId: request.id,
    status: exception ? "recurring-exception-action-required" : "recurring-series-active",
    customerVisible: payload.customerVisible,
    operatorNextAction: exception
      ? "Review the recurring service timing update and send only the affected timing change to EPOCH."
      : "Keep the cohort or subscription delivery sequence active inside WORKSHOP.",
    customerSafeStatus: exception
      ? "Recurring cohort timing has one exception; WORKSHOP is preparing the next timing action."
      : "Recurring service timing is active; WORKSHOP can continue the cohort or subscription sequence.",
    consumedAt: new Date().toISOString()
  };
}

export function createCustomerStatusEventForRecurringSeries(consumption, request) {
  if (!consumption || !request) return null;
  return createStatusEventRecord(
    request.id,
    consumption.status,
    consumption.status === "recurring-series-active" ? "Recurring service timing active" : "Recurring service timing action needed",
    consumption.customerSafeStatus,
    consumption.consumedAt
  );
}

export function createDeliveryTransitionForRecurringSeries(consumption, request) {
  if (!consumption || !request) return null;
  return createTransitionRecord(
    request.id,
    consumption.status === "recurring-series-active" ? "EPOCH recurring series active" : "EPOCH recurring series consumed",
    request.status === "timing-confirmed" ? "timing-confirmed" : "timing-reschedule-required",
    consumption.status,
    consumption.customerSafeStatus,
    consumption.operatorNextAction,
    consumption.consumedAt
  );
}

export function createRecurringSeriesReceiptForConsumption(consumption, payload, request) {
  if (!consumption || !payload || !request) return null;
  return {
    id: makeId("receipt-recurring-series"),
    kind: "epoch-recurring-series",
    status: consumption.status,
    summary: consumption.status === "recurring-series-active"
      ? `${request.customer} consumed active EPOCH recurring-series timing into WORKSHOP service delivery.`
      : `${request.customer} consumed a customer-safe EPOCH recurring-series exception without taking calendar ownership.`,
    requestId: request.id,
    sourceHandoffId: payload.sourceHandoffId,
    recurringPayloadId: payload.id,
    consumptionId: consumption.id,
    recordedAt: consumption.consumedAt,
    customerVisible: true,
    customerSafeStatus: consumption.customerSafeStatus
  };
}

export function applyEpochRevisedCalendarTimingConsumption(request, cohortPlan, lifecycle, handoff, outcome, payload, consumption, receipt) {
  if (!request || !payload || !consumption || payload.workshopCalendarOwnership || !payload.epochTimingProviderOnly) return;
  request.status = consumption.status;
  request.customerSafeStatus = consumption.customerSafeStatus;
  request.operatorNextAction = consumption.operatorNextAction;

  if (cohortPlan) {
    cohortPlan.status = consumption.status;
    cohortPlan.revisedTimingContext = payload.timingDisplayLabel;
    cohortPlan.revisedTimingGate = payload.conversionGateReason;
    cohortPlan.lastRevisedTimingReceiptId = receipt?.id || cohortPlan.lastRevisedTimingReceiptId || "";
    cohortPlan.customerSafeStatus = consumption.customerSafeStatus;
    cohortPlan.operatorNextAction = consumption.operatorNextAction;
  }

  if (handoff) {
    handoff.status = consumption.status;
    handoff.bridgeState = "revised-timing-context-consumed";
    handoff.customerSafeStatus = payload.customerSafeStatus;
    handoff.operatorNextAction = consumption.operatorNextAction;
    handoff.receiptIds = [...(handoff.receiptIds || []), receipt?.id].filter(Boolean);
    handoff.statusPreview = {
      ...handoff.statusPreview,
      status: consumption.status,
      time: payload.timingDisplayLabel,
      customerSafeStatus: payload.customerSafeStatus,
      detail: "EPOCH returned revised timing context only; WORKSHOP owns service delivery planning."
    };
  }

  if (lifecycle) {
    lifecycle.phase = "revised-timing-context-consumed";
    lifecycle.currentStatus = consumption.status;
    lifecycle.currentLabel = "Revised timing context returned";
    lifecycle.handoffStatus = payload.calendarSystemLabel;
    lifecycle.customerSafeStatus = consumption.customerSafeStatus;
    lifecycle.operatorNextAction = consumption.operatorNextAction;
    lifecycle.updatedAt = consumption.consumedAt;
    lifecycle.receiptIds = [...(lifecycle.receiptIds || []), receipt?.id].filter(Boolean);
  }

  if (outcome) {
    outcome.status = consumption.status;
    outcome.resultReceiptReady = false;
    outcome.customerSafeStatus = outcomeCustomerSafeStatus(request, consumption.status);
    outcome.operatorNextAction = outcomeOperatorNextAction(request, consumption.status);
    outcome.updatedAt = consumption.consumedAt;
  }
}

export function applyEpochCapacityWaitlistConsumption(request, cohortPlan, lifecycle, handoff, outcome, payload, consumption, receipt) {
  if (!request || !payload || !consumption) return;
  request.status = consumption.status;
  request.customerSafeStatus = consumption.customerSafeStatus;
  request.operatorNextAction = consumption.operatorNextAction;

  if (cohortPlan) {
    cohortPlan.status = consumption.status;
    cohortPlan.capacityStatus = payload.epochStatus;
    cohortPlan.waitlistPosition = payload.waitlistPosition;
    cohortPlan.lastCapacityReceiptId = receipt?.id || cohortPlan.lastCapacityReceiptId || "";
    cohortPlan.customerSafeStatus = consumption.customerSafeStatus;
    cohortPlan.operatorNextAction = consumption.operatorNextAction;
  }

  if (handoff) {
    handoff.status = consumption.status;
    handoff.bridgeState = "capacity-waitlist-consumed";
    handoff.customerSafeStatus = payload.customerSafeStatus;
    handoff.operatorNextAction = consumption.operatorNextAction;
    handoff.receiptIds = [...(handoff.receiptIds || []), receipt?.id].filter(Boolean);
    handoff.statusPreview = {
      ...handoff.statusPreview,
      status: payload.epochStatus,
      customerSafeStatus: payload.customerSafeStatus,
      detail: "EPOCH returned capacity and waitlist status only; WORKSHOP owns service delivery planning."
    };
  }

  if (lifecycle) {
    lifecycle.phase = "capacity-waitlist-consumed";
    lifecycle.currentStatus = consumption.status;
    lifecycle.currentLabel = consumption.status === "timing-promoted" ? "Waitlisted timing promoted" : "Timing waitlisted";
    lifecycle.handoffStatus = payload.epochStatus;
    lifecycle.customerSafeStatus = consumption.customerSafeStatus;
    lifecycle.operatorNextAction = consumption.operatorNextAction;
    lifecycle.updatedAt = consumption.consumedAt;
    lifecycle.receiptIds = [...(lifecycle.receiptIds || []), receipt?.id].filter(Boolean);
  }

  if (outcome) {
    outcome.status = consumption.status;
    outcome.resultReceiptReady = consumption.status === "timing-promoted";
    outcome.customerSafeStatus = outcomeCustomerSafeStatus(request, consumption.status);
    outcome.operatorNextAction = outcomeOperatorNextAction(request, consumption.status);
    outcome.updatedAt = consumption.consumedAt;
  }
}

export function applyEpochRecurringSeriesConsumption(request, cohortPlan, lifecycle, handoff, outcome, payload, consumption, receipt) {
  if (!request || !payload || !consumption) return;
  request.status = consumption.status;
  request.customerSafeStatus = consumption.customerSafeStatus;
  request.operatorNextAction = consumption.operatorNextAction;

  if (cohortPlan) {
    cohortPlan.status = consumption.status;
    cohortPlan.recurringStatus = payload.seriesStatus;
    cohortPlan.nextServiceWindow = payload.nextOccurrence;
    cohortPlan.exceptionCount = payload.exceptionCount;
    cohortPlan.lastRecurringReceiptId = receipt?.id || cohortPlan.lastRecurringReceiptId || "";
    cohortPlan.customerSafeStatus = consumption.customerSafeStatus;
    cohortPlan.operatorNextAction = consumption.operatorNextAction;
  }

  if (handoff) {
    handoff.status = consumption.status;
    handoff.bridgeState = "recurring-series-consumed";
    handoff.customerSafeStatus = payload.customerSafeStatus;
    handoff.operatorNextAction = consumption.operatorNextAction;
    handoff.receiptIds = [...(handoff.receiptIds || []), receipt?.id].filter(Boolean);
    handoff.statusPreview = {
      ...handoff.statusPreview,
      status: payload.seriesStatus,
      time: payload.nextOccurrence || handoff.target,
      customerSafeStatus: payload.customerSafeStatus,
      detail: "EPOCH returned recurring schedule status only; WORKSHOP owns cohort and subscription delivery."
    };
  }

  if (lifecycle) {
    lifecycle.phase = "recurring-series-consumed";
    lifecycle.currentStatus = consumption.status;
    lifecycle.currentLabel = consumption.status === "recurring-series-active" ? "Recurring timing active" : "Recurring timing action needed";
    lifecycle.handoffStatus = payload.seriesStatus;
    lifecycle.customerSafeStatus = consumption.customerSafeStatus;
    lifecycle.operatorNextAction = consumption.operatorNextAction;
    lifecycle.updatedAt = consumption.consumedAt;
    lifecycle.receiptIds = [...(lifecycle.receiptIds || []), receipt?.id].filter(Boolean);
  }

  if (outcome) {
    outcome.status = consumption.status;
    outcome.resultReceiptReady = consumption.status === "recurring-series-active";
    outcome.customerSafeStatus = outcomeCustomerSafeStatus(request, consumption.status);
    outcome.operatorNextAction = outcomeOperatorNextAction(request, consumption.status);
    outcome.updatedAt = consumption.consumedAt;
  }
}

export function applyEpochTimingReturnConsumption(request, submission, reviewCycle, lifecycle, handoff, outcome, resultReceipt, payload, consumption, receipt) {
  if (!request || !payload || !consumption) return;
  request.status = consumption.status;
  request.customerSafeStatus = consumption.customerSafeStatus;
  request.operatorNextAction = consumption.operatorNextAction;

  if (submission) {
    submission.due = payload.confirmedWindow || "New timing window required";
    submission.customerSafeStatus = consumption.status === "timing-confirmed"
      ? "Materials received and the return timing is confirmed."
      : "Materials received; a new timing window is being prepared.";
    submission.operatorNextAction = consumption.operatorNextAction;
  }

  if (reviewCycle) {
    reviewCycle.reviewDue = payload.confirmedWindow || "New timing window required";
    reviewCycle.returnWindow = payload.confirmedWindow || "Reschedule through EPOCH timing";
    reviewCycle.customerSafeStatus = submission?.customerSafeStatus || consumption.customerSafeStatus;
    reviewCycle.operatorNextAction = consumption.operatorNextAction;
  }

  if (handoff) {
    handoff.status = consumption.status;
    handoff.bridgeState = "return-consumed";
    handoff.customerSafeStatus = payload.customerSafeStatus;
    handoff.operatorNextAction = consumption.operatorNextAction;
    handoff.receiptIds = [...(handoff.receiptIds || []), receipt?.id].filter(Boolean);
    handoff.statusPreview = {
      ...handoff.statusPreview,
      status: payload.epochStatus,
      time: payload.confirmedWindow || handoff.target,
      customerSafeStatus: payload.customerSafeStatus,
      detail: "EPOCH returned schedule status only; WORKSHOP owns service delivery."
    };
  }

  if (lifecycle) {
    lifecycle.phase = consumption.status === "timing-confirmed" ? "timing-return-consumed" : "timing-return-conflict";
    lifecycle.currentStatus = consumption.status;
    lifecycle.currentLabel = consumption.status === "timing-confirmed" ? "Timing return confirmed" : "New timing window needed";
    lifecycle.handoffStatus = payload.epochStatus;
    lifecycle.customerSafeStatus = consumption.customerSafeStatus;
    lifecycle.operatorNextAction = consumption.operatorNextAction;
    lifecycle.updatedAt = consumption.consumedAt;
    lifecycle.receiptIds = [...(lifecycle.receiptIds || []), receipt?.id].filter(Boolean);
  }

  if (outcome) {
    outcome.status = consumption.status;
    outcome.resultReceiptReady = consumption.status === "timing-confirmed";
    outcome.customerSafeStatus = outcomeCustomerSafeStatus(request, consumption.status);
    outcome.operatorNextAction = outcomeOperatorNextAction(request, consumption.status);
    outcome.updatedAt = consumption.consumedAt;
  }

  if (resultReceipt) {
    resultReceipt.status = consumption.status;
    resultReceipt.summary = `${request.customer} result reporting opened after timing return consumption.`;
    resultReceipt.createdAt = consumption.consumedAt;
    resultReceipt.customerSafeStatus = consumption.status === "timing-confirmed"
      ? "Your return timing is confirmed and the service review can proceed."
      : "A new timing window is needed before the service review can proceed.";
  }
}

export function createDeliveryLifecycleForRequest(request, submission, handoff) {
  return {
    id: makeId("lifecycle"),
    requestId: request.id,
    phase: deliveryPhaseForRequest(request, submission, handoff),
    currentStatus: request.status,
    currentLabel: deliveryLabelForRequest(request, submission, handoff),
    submissionStatus: submission?.status || "not-opened",
    handoffStatus: handoff?.status || "not-requested",
    operatorNextAction: handoff?.bridgeReady ? handoff.operatorNextAction : request.operatorNextAction,
    customerSafeStatus: handoff?.bridgeReady ? handoff.customerSafeStatus : request.customerSafeStatus,
    receiptIds: [],
    updatedAt: request.createdAt
  };
}

export function createDeliveryTransitionsForRequest(request, submission, handoff) {
  const transitions = [];
  if (request.status === "compatibility-review") {
    transitions.push(createTransitionRecord(
      request.id,
      "Compatibility gate opened",
      "intake-ready",
      "compatibility-review",
      request.customerSafeStatus,
      request.operatorNextAction,
      request.createdAt
    ));
  } else if (submission) {
    transitions.push(createTransitionRecord(
      request.id,
      "Materials accepted",
      "intake-ready",
      "materials-received",
      submission.customerSafeStatus,
      submission.operatorNextAction,
      request.createdAt
    ));
  } else if (request.status === "fit-review") {
    transitions.push(createTransitionRecord(
      request.id,
      "Scope review opened",
      "intake-ready",
      "fit-review",
      request.customerSafeStatus,
      request.operatorNextAction,
      request.createdAt
    ));
  } else if (request.status === "queued") {
    transitions.push(createTransitionRecord(
      request.id,
      request.lane === "cohort-subscription" ? "Cohort planning queued" : "Operator queue recorded",
      "intake-ready",
      "queued",
      request.customerSafeStatus,
      request.operatorNextAction,
      request.createdAt
    ));
  }

  if (handoff) {
    transitions.push(createTransitionRecord(
      request.id,
      handoff.bridgeReady ? "EPOCH timing handoff prepared" : "EPOCH timing handoff staged",
      submission?.status || request.status,
      handoff.status,
      handoff.customerSafeStatus,
      handoff.operatorNextAction,
      request.createdAt
    ));
  }

  return transitions;
}

export function createCustomerStatusEventsForRequest(request, submission, handoff) {
  const events = [
    createStatusEventRecord(
      request.id,
      request.status,
      deliveryLabelForRequest(request, submission, handoff),
      request.customerSafeStatus,
      request.createdAt
    )
  ];

  if (submission) {
    events.push(createStatusEventRecord(
      request.id,
      submission.status,
      "Submission received",
      submission.customerSafeStatus,
      request.createdAt
    ));
  }

  if (handoff) {
    events.push(createStatusEventRecord(
      request.id,
      handoff.status,
      handoff.bridgeReady ? "Timing request sent" : "Timing preview staged",
      handoff.customerSafeStatus,
      request.createdAt
    ));
  }

  return events;
}

export function createTransitionReceiptsForRequest(request, lifecycle, transitions, handoff) {
  const receipts = transitions.map((transition) => {
    const bridgeReceipt = transition.toStatus === "epoch-time-requested" || transition.label.includes("handoff");
    return {
      id: transition.receiptId,
      kind: bridgeReceipt ? "epoch-bridge" : "delivery-transition",
      status: bridgeReceipt && handoff ? (handoff.bridgeReady ? "ready" : "queued") : transition.toStatus === "blocked" ? "blocked" : "complete",
      summary: bridgeReceipt && handoff
        ? handoff.bridgeReady
          ? `${request.customer} timing payload is ready for EPOCH schedule intake.`
          : `${request.customer} timing payload is staged until WORKSHOP clears intake.`
        : `${request.customer} moved from ${transition.fromStatus} to ${transition.toStatus}.`,
      requestId: request.id,
      recordedAt: transition.changedAt,
      customerVisible: true
    };
  });

  if (handoff && !receipts.some((receipt) => receipt.kind === "epoch-bridge")) {
    receipts.push({
      id: makeId("receipt-bridge"),
      kind: "epoch-bridge",
      status: handoff.bridgeReady ? "ready" : "queued",
      summary: handoff.bridgeReady
        ? `${request.customer} timing payload is ready for EPOCH schedule intake.`
        : `${request.customer} timing payload is staged until WORKSHOP clears intake.`,
      requestId: request.id,
      recordedAt: request.createdAt,
      customerVisible: true
    });
  }

  lifecycle.receiptIds = receipts.map((receipt) => receipt.id);
  if (handoff) handoff.receiptIds = receipts.map((receipt) => receipt.id);
  return receipts;
}
