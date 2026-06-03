export const WORKSHOP_LEDGER_KEY = "workshop.operatingLedger.v6";

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
  version: 15,
  generatedAt: "2026-06-04T01:10:00+09:00",
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
      customerVisible: false
    },
    {
      id: "market-sme-workflow-001",
      sourceLabel: "Japan SME workflow and AI adoption caution",
      sourceUrl: "https://global.rakuten.com/corp/news/press/2025/0129_01.html",
      segment: "small-business-systems",
      observedGap: "Outcome-led CRM/admin workflow offers can sell structure without leading with AI terminology.",
      confidenceScore: 78,
      customerVisible: false
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
      evidenceReady: true
    },
    {
      id: "price-anchor-premium-testprep-001",
      competitor: "Premium private online exam support",
      offerLabel: "private writing/test-prep support",
      lowPriceJpy: 31680,
      premiumPriceJpy: 45760,
      sourceUrl: "https://www.eltschool.jp/en/price?purpose=eiken_basic",
      evidenceReady: true
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
      laborTrapWarning: false
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
      laborTrapWarning: true
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
      approvedForTest: true
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
