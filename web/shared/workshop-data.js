export const WORKSHOP_LEDGER_KEY = "workshop.operatingLedger.v1";

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
  version: 4,
  generatedAt: "2026-06-03T15:30:00+09:00",
  serviceRequests: [
    {
      id: "req-edu-submission-001",
      customer: "Adult writing client",
      ageBand: "adult",
      lane: "submission-review",
      packageId: "pkg-submission-4",
      materialStatus: "ready",
      status: "epoch-time-requested",
      summary: "EIKEN writing draft review with structured next-action feedback.",
      valueJpy: 16000,
      epochTimeNeeded: true,
      customerSafeStatus: "Submission received; review timing is being confirmed.",
      operatorNextAction: "Confirm the return window with EPOCH and assign the reviewer.",
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
      status: "queued",
      summary: "Cohort interest for EIKEN, TOEIC, IELTS, TOEFL, and academic writing support.",
      valueJpy: 120000,
      epochTimeNeeded: true,
      customerSafeStatus: "Cohort interest recorded and queued for planning.",
      operatorNextAction: "Cluster demand and prepare the cohort timing request after intake clears.",
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
  submissions: [
    {
      id: "sub-writing-001",
      requestId: "req-edu-submission-001",
      kind: "writing-review",
      title: "EIKEN essay review",
      status: "materials-received",
      due: "Pending EPOCH timing confirmation",
      customerVisible: true,
      customerSafeStatus: "Draft received and waiting for the confirmed return window.",
      operatorNextAction: "Assign the reviewer after the EPOCH return window is confirmed."
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
      reviewDue: "Pending EPOCH timing confirmation",
      returnWindow: "Confirmed after timing handoff",
      requiresEpochTime: true,
      customerVisible: true,
      operatorNextAction: "Assign reviewer after EPOCH confirms the return window.",
      customerSafeStatus: "Draft received and waiting for the confirmed return window."
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
      operatorNextAction: "Confirm compatible demand and prepare one EPOCH cohort-window request.",
      customerSafeStatus: "Cohort enrollment is open for compatible adult learners."
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
      status: "epoch-time-requested",
      valueJpy: 16000,
      customerVisible: true,
      resultReceiptReady: true,
      customerSafeStatus: "Submission received; the result report will be issued after the return window is confirmed.",
      operatorNextAction: "Confirm the return window and attach the writing feedback result receipt after delivery.",
      updatedAt: "2026-06-03T15:30:00+09:00"
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
      status: "queued",
      valueJpy: 120000,
      customerVisible: true,
      resultReceiptReady: false,
      customerSafeStatus: "Cohort planning is queued until compatible demand clusters.",
      operatorNextAction: "Wait for the demand cluster, then create the cohort result report.",
      updatedAt: "2026-06-03T15:40:00+09:00"
    }
  ],
  deliveryResultReceipts: [
    {
      id: "result-receipt-submission-001",
      outcomeId: "outcome-submission-001",
      requestId: "req-edu-submission-001",
      kind: "delivery-result",
      status: "epoch-time-requested",
      summary: "Writing submission result report is open and waiting for the confirmed return window.",
      createdAt: "2026-06-03T15:30:00+09:00",
      customerVisible: true,
      customerSafeStatus: "Your submission is recorded and the result report will follow the confirmed return window."
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
  epochTimeHandoffs: [
    {
      id: "epoch-handoff-001",
      requestId: "req-edu-submission-001",
      kind: "review-deadline",
      status: "epoch-time-requested",
      target: "2026-06-05 18:00 JST",
      bridgeReady: true,
      bridgeState: "payload-ready",
      operatorNextAction: "Copy the preview into the EPOCH schedule request ledger and wait for the return-window confirmation.",
      customerSafeStatus: "Timing request sent to EPOCH for scheduling review.",
      receiptIds: ["receipt-transition-001", "receipt-bridge-001"],
      requestPreview: {
        requester: "WORKSHOP timing handoff",
        need: "submission-review-return",
        requestedWindow: "2026-06-05 18:00 JST",
        timezone: DEFAULT_EPOCH_TIMEZONE,
        status: "queued",
        sandboxOnly: true,
        providerGoLiveRequested: false,
        customerSafeStatus: "Timing request received; availability is being checked.",
        createdAt: "2026-06-03T09:00:00+09:00"
      },
      statusPreview: {
        title: "Submission review return window",
        owner: "EPOCH",
        status: "queued",
        time: "2026-06-05 18:00 JST",
        startIso: "",
        endIso: "",
        timezone: DEFAULT_EPOCH_TIMEZONE,
        customerSafeStatus: "Submission return window is being reviewed.",
        detail: "Schedule-bound review return window requested from WORKSHOP."
      }
    },
    {
      id: "epoch-handoff-002",
      requestId: "req-cohort-001",
      kind: "cohort-window",
      status: "queued",
      target: "Demand-cluster window to be confirmed",
      bridgeReady: false,
      bridgeState: "waiting-on-workshop",
      operatorNextAction: "Hold the EPOCH submission until cohort demand reaches the planning threshold.",
      customerSafeStatus: "Timing need recorded; the final cohort window will be prepared after intake review.",
      receiptIds: ["receipt-transition-003", "receipt-bridge-002"],
      requestPreview: {
        requester: "WORKSHOP timing handoff",
        need: "project-planning-session",
        requestedWindow: "Demand-cluster window to be confirmed",
        timezone: DEFAULT_EPOCH_TIMEZONE,
        status: "queued",
        sandboxOnly: true,
        providerGoLiveRequested: false,
        customerSafeStatus: "Timing request is staged and will be sent after WORKSHOP intake clears.",
        createdAt: "2026-06-03T09:40:00+09:00"
      },
      statusPreview: {
        title: "Cohort planning window",
        owner: "EPOCH",
        status: "planned",
        time: "Demand-cluster window to be confirmed",
        startIso: "",
        endIso: "",
        timezone: DEFAULT_EPOCH_TIMEZONE,
        customerSafeStatus: "Cohort timing preview is staged locally.",
        detail: "Schedule-bound preview prepared inside WORKSHOP until the cohort is ready for handoff."
      }
    }
  ],
  deliveryLifecycles: [
    {
      id: "lifecycle-001",
      requestId: "req-edu-submission-001",
      phase: "timing-handoff",
      currentStatus: "epoch-time-requested",
      currentLabel: "Timing handoff queued",
      submissionStatus: "materials-received",
      handoffStatus: "epoch-time-requested",
      operatorNextAction: "Confirm the return window with EPOCH and assign the reviewer.",
      customerSafeStatus: "Submission received; review timing is being confirmed.",
      receiptIds: ["receipt-transition-001", "receipt-bridge-001"],
      updatedAt: "2026-06-03T09:00:00+09:00"
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
      phase: "queue-planning",
      currentStatus: "queued",
      currentLabel: "Queued for cohort planning",
      submissionStatus: "not-opened",
      handoffStatus: "queued",
      operatorNextAction: "Cluster demand and prepare the cohort timing request after intake clears.",
      customerSafeStatus: "Cohort interest recorded and queued for planning.",
      receiptIds: ["receipt-transition-003", "receipt-bridge-002"],
      updatedAt: "2026-06-03T09:40:00+09:00"
    }
  ],
  deliveryTransitions: [
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
      status: "queued",
      label: "Timing preview staged",
      customerSafeStatus: "Timing need recorded; the final cohort window will be prepared after intake review.",
      createdAt: "2026-06-03T09:45:00+09:00"
    }
  ],
  deliveryStates: [
    { id: "state-request", label: "Request captured", detail: "WORKSHOP records the service request and chosen lane.", state: "complete" },
    { id: "state-fit", label: "Fit and material review", detail: "Compatibility, scope, and materials are checked before delivery proceeds.", state: "in-progress" },
    { id: "state-epoch", label: "Time handoff if needed", detail: "Only timing fields are handed to EPOCH; service ownership stays in WORKSHOP.", state: "queued" },
    { id: "state-delivery", label: "Delivery and return", detail: "WORKSHOP owns submission handling, service output, and customer-safe delivery status.", state: "queued" }
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
      id: "receipt-crm-ara-001",
      kind: "crm-ara-assignment",
      status: "ready",
      summary: "CRM opportunities, revenue work packets, assignments, and review receipts are tracked as WORKSHOP operating records.",
      requestId: "",
      recordedAt: "2026-06-03T12:45:00+09:00",
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
  if (handoff?.bridgeReady) return "timing-handoff";
  if (submission) return "delivery-prep";
  if (request.status === "fit-review") return "fit-review";
  if (request.status === "queued") return "queue-planning";
  return "intake";
}

function deliveryLabelForRequest(request, submission, handoff) {
  if (request.status === "compatibility-review") return "Compatibility review required";
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
    resultReceiptReady: status !== "compatibility-review" && status !== "queued",
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
