export const WORKSHOP_LEDGER_KEY = "workshop.operatingLedger.v1";

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
  version: 1,
  generatedAt: "2026-06-03T09:00:00+09:00",
  serviceRequests: [
    {
      id: "req-edu-submission-001",
      customer: "Adult writing client",
      ageBand: "adult",
      lane: "submission-review",
      packageId: "pkg-submission-4",
      materialStatus: "ready",
      status: "materials-received",
      summary: "EIKEN writing draft review with structured next-action feedback.",
      valueJpy: 16000,
      epochTimeNeeded: true,
      customerSafeStatus: "Submission received; review timing is being confirmed.",
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
      customerSafeStatus: "Fit review in progress.",
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
      customerSafeStatus: "Cohort interest recorded.",
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
  submissions: [
    {
      id: "sub-writing-001",
      requestId: "req-edu-submission-001",
      kind: "writing-review",
      title: "EIKEN essay review",
      status: "materials-received",
      due: "2026-06-05T18:00:00+09:00",
      customerVisible: true
    },
    {
      id: "sub-systems-001",
      requestId: "req-crm-setup-001",
      kind: "systems-request",
      title: "CRM cleanup scope",
      status: "fit-review",
      due: "scope pending",
      customerVisible: false
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
    { id: "ara-digest-001", title: "Lead status digest", state: "planned", owner: "MONITOR" }
  ],
  epochTimeHandoffs: [
    {
      id: "epoch-handoff-001",
      requestId: "req-edu-submission-001",
      kind: "review-deadline",
      status: "epoch-time-requested",
      target: "2026-06-05T18:00:00+09:00",
      customerSafeStatus: "Review deadline requested."
    },
    {
      id: "epoch-handoff-002",
      requestId: "req-cohort-001",
      kind: "cohort-window",
      status: "queued",
      target: "pending demand cluster",
      customerSafeStatus: "Cohort schedule window not confirmed yet."
    }
  ],
  deliveryStates: [
    { id: "state-request", label: "Request received", detail: "WORKSHOP captured the service request.", state: "complete" },
    { id: "state-fit", label: "Fit and material check", detail: "Operator confirms readiness, compatibility, and scope.", state: "in-progress" },
    { id: "state-epoch", label: "Schedule if needed", detail: "Timing requests go to EPOCH only when needed.", state: "queued" },
    { id: "state-delivery", label: "Delivery work", detail: "WORKSHOP owns service output and customer status.", state: "queued" }
  ],
  receipts: [
    { id: "receipt-boundary-001", status: "complete", summary: "WORKSHOP service records are separate from EPOCH time records." },
    { id: "receipt-ledger-001", status: "ready", summary: "Local ledger contains services, packages, submissions, CRM, ARA, and EPOCH handoffs." }
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
export const crmAccounts = initialWorkshopLedger.crmAccounts;
export const araQueue = initialWorkshopLedger.araPackets;
export const deliveryTimeline = initialWorkshopLedger.deliveryStates;

export function makeId(prefix) {
  const random = Math.random().toString(36).slice(2, 8);
  return `${prefix}-${Date.now().toString(36)}-${random}`;
}

export function serviceLaneLabel(value) {
  return serviceLaneOptions.find((lane) => lane.value === value)?.label || value;
}

export function createServiceRequestRecord(form) {
  const lane = String(form.get("lane") || "submission-review");
  const ageBand = String(form.get("ageBand") || "adult");
  const materialStatus = String(form.get("material") || "diagnostic");
  const laneOption = serviceLaneOptions.find((option) => option.value === lane) || serviceLaneOptions[0];
  const needsTiming = form.get("needsTiming") === "on";
  const status = ageBand === "under-19"
    ? "compatibility-review"
    : materialStatus === "ready"
      ? "materials-received"
      : "fit-review";
  const createdAt = new Date().toISOString();
  return {
    id: makeId("req"),
    customer: String(form.get("requester") || "New customer").trim(),
    ageBand,
    lane,
    packageId: laneOption.packageId,
    materialStatus,
    status,
    summary: String(form.get("summary") || "").trim(),
    valueJpy: 0,
    epochTimeNeeded: needsTiming,
    customerSafeStatus: ageBand === "under-19"
      ? "Compatibility review required before service acceptance."
      : needsTiming
        ? "Request received; timing need will be handed to EPOCH."
        : "Request received for WORKSHOP operator review.",
    createdAt
  };
}

export function createSubmissionForRequest(request) {
  if (request.materialStatus !== "ready") return null;
  return {
    id: makeId("sub"),
    requestId: request.id,
    kind: request.lane === "submission-review" || request.lane === "premium-english-test-prep" ? "writing-review" : "document-review",
    title: `${serviceLaneLabel(request.lane)} material`,
    status: "materials-received",
    due: request.epochTimeNeeded ? "Needs EPOCH review deadline" : "Operator review queue",
    customerVisible: true
  };
}

export function createEpochHandoffForRequest(request) {
  if (!request.epochTimeNeeded) return null;
  return {
    id: makeId("epoch-handoff"),
    requestId: request.id,
    kind: request.lane === "cohort-subscription" ? "cohort-window" : "appointment-or-deadline",
    status: "epoch-time-requested",
    target: "pending EPOCH confirmation",
    customerSafeStatus: "Timing request queued for EPOCH."
  };
}
