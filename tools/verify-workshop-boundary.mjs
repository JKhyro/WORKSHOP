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
const {
  createCustomerStatusEventsForRequest,
  createDeliveryLifecycleForRequest,
  createDeliveryTransitionsForRequest,
  createEpochHandoffForRequest,
  createServiceRequestRecord,
  createSubmissionForRequest,
  createTransitionReceiptsForRequest
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
  "Open EPOCH Scheduling Portal"
]) {
  const combined = `${root}\n${app}\n${portal}`;
  if (!combined.includes(phrase)) fail(`WORKSHOP web surface missing ${phrase}`);
}

for (const phrase of ["revenueLanes", "submissions", "packages", "crmAccounts", "araQueue", "deliveryTimeline", "deliveryLifecycles", "deliveryTransitions", "customerStatusEvents"]) {
  if (!data.includes(phrase)) fail(`WORKSHOP data missing ${phrase}`);
}

for (const phrase of [
  "WORKSHOP_LEDGER_KEY",
  "initialWorkshopLedger",
  "serviceRequests",
  "epochTimeHandoffs",
  "deliveryLifecycles",
  "deliveryTransitions",
  "customerStatusEvents",
  "deliveryStates",
  "createServiceRequestRecord",
  "createSubmissionForRequest",
  "createEpochHandoffForRequest",
  "createDeliveryLifecycleForRequest",
  "createDeliveryTransitionsForRequest",
  "createCustomerStatusEventsForRequest",
  "createTransitionReceiptsForRequest",
  "compatibility-review",
  "requestPreview",
  "statusPreview",
  "operatorNextAction",
  "bridgeReady",
  "EIKEN 5 through 1"
]) {
  if (!data.includes(phrase)) fail(`WORKSHOP data missing ledger phrase ${phrase}`);
}

for (const phrase of [
  "localStorage",
  "WORKSHOP_LEDGER_KEY",
  "handleServiceRequest",
  "service-request-form",
  "service-request-list",
  "delivery-lifecycle-list",
  "delivery-transition-list",
  "customer-status-event-list",
  "epoch-handoff-list",
  "epoch-handoff-payload-list",
  "portal-delivery-lifecycle",
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

for (const path of ["web/app/index.html", "web/webportal/index.html", "docs/preserved-revenue-work-index.md"]) {
  if (!readme.includes(path)) fail(`README missing ${path}`);
}

for (const status of ["DRAFT", "AVAILABLE", "QUEUED", "IN_PROGRESS", "BLOCKED", "COMPLETE", "FIT_REVIEW", "MATERIALS_RECEIVED", "EPOCH_TIME_REQUESTED", "CANCELED", "COMPATIBILITY_REVIEW"]) {
  if (!header.includes(`WORKSHOP_STATUS_${status}`)) fail(`header missing ${status}`);
}

for (const label of ["draft", "available", "queued", "in-progress", "blocked", "complete", "fit-review", "materials-received", "epoch-time-requested", "canceled", "compatibility-review"]) {
  if (!source.includes(`"${label}"`)) fail(`source missing label ${label}`);
}

for (const type of [
  "WorkshopServiceRequest",
  "WorkshopSubmission",
  "WorkshopPackage",
  "WorkshopEpochTimeHandoff",
  "WorkshopDeliveryLifecycle",
  "WorkshopCustomerSafeStatusEvent",
  "WorkshopEpochBridgePayload",
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
  "workshop_submission_needs_review",
  "workshop_epoch_handoff_is_customer_safe",
  "workshop_delivery_transition_is_allowed",
  "workshop_delivery_lifecycle_is_valid",
  "workshop_customer_safe_status_event_is_valid",
  "workshop_epoch_bridge_payload_is_ready"
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

for (const forbiddenPortal of ["workshop-monitor.html", "../app/index.html", "reset-ledger"]) {
  if (portal.includes(forbiddenPortal)) fail(`WORKSHOP portal exposes internal control ${forbiddenPortal}`);
}

const fakeForm = new Map([
  ["requester", "  "],
  ["lane", "premium-english-test-prep"],
  ["ageBand", "under-19"],
  ["material", "ready"],
  ["summary", "Needs EIKEN writing review"],
  ["needsTiming", "on"]
]);
const request = createServiceRequestRecord(fakeForm);
const submission = createSubmissionForRequest(request);
const handoff = createEpochHandoffForRequest(request);
const lifecycle = createDeliveryLifecycleForRequest(request, submission, handoff);
const transitions = createDeliveryTransitionsForRequest(request, submission, handoff);
const events = createCustomerStatusEventsForRequest(request, submission, handoff);
const receipts = createTransitionReceiptsForRequest(request, lifecycle, transitions, handoff);

if (request.customer !== "New customer") fail("request factory did not default blank customer");
if (request.status !== "compatibility-review") fail("request factory missing under-19 compatibility status");
if (request.valueJpy !== 45000) fail("request factory did not inherit selected package value");
if (submission !== null) fail("compatibility-review route should not open the submission queue");
if (!handoff || handoff.bridgeReady !== false || handoff.status !== "queued") fail("handoff factory missing staged EPOCH timing request");
if (handoff.requestPreview?.status !== "queued" || handoff.requestPreview?.providerGoLiveRequested !== false) fail("handoff preview is not aligned to EPOCH request fields");
if (handoff.statusPreview?.owner !== "EPOCH") fail("handoff status preview is not aligned to EPOCH status fields");
if (lifecycle.currentStatus !== "compatibility-review") fail("delivery lifecycle factory missing compatibility-review state");
if (!transitions.some((transition) => transition.toStatus === "compatibility-review")) fail("delivery transitions missing compatibility-review transition");
if (!events.some((item) => item.status === "compatibility-review")) fail("customer-safe events missing compatibility-review status");
if (!receipts.some((receipt) => receipt.kind === "epoch-bridge")) fail("transition receipts missing EPOCH bridge receipt");

console.log("WORKSHOP boundary verification passed");
