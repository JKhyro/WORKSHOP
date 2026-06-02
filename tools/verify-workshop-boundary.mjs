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
  "EPOCH Provides Time",
  "Open EPOCH Scheduling Portal"
]) {
  const combined = `${root}\n${app}\n${portal}`;
  if (!combined.includes(phrase)) fail(`WORKSHOP web surface missing ${phrase}`);
}

for (const phrase of ["revenueLanes", "submissions", "packages", "crmAccounts", "araQueue", "deliveryTimeline"]) {
  if (!data.includes(phrase)) fail(`WORKSHOP data missing ${phrase}`);
}

for (const phrase of [
  "WORKSHOP_LEDGER_KEY",
  "initialWorkshopLedger",
  "serviceRequests",
  "epochTimeHandoffs",
  "deliveryStates",
  "createServiceRequestRecord",
  "createSubmissionForRequest",
  "createEpochHandoffForRequest",
  "compatibility-review",
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
  "epoch-handoff-list",
  "portal-status-list",
  "receipt-list",
  "reset-ledger"
]) {
  if (!script.includes(phrase) && !app.includes(phrase) && !portal.includes(phrase)) fail(`WORKSHOP web workflow missing ${phrase}`);
}

for (const phrase of [
  "service-lane-select",
  "age-band-select",
  "material-status-select",
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

for (const status of ["DRAFT", "AVAILABLE", "QUEUED", "IN_PROGRESS", "BLOCKED", "COMPLETE", "FIT_REVIEW", "MATERIALS_RECEIVED", "EPOCH_TIME_REQUESTED", "CANCELED"]) {
  if (!header.includes(`WORKSHOP_STATUS_${status}`)) fail(`header missing ${status}`);
}

for (const label of ["draft", "available", "queued", "in-progress", "blocked", "complete", "fit-review", "materials-received", "epoch-time-requested", "canceled"]) {
  if (!source.includes(`"${label}"`)) fail(`source missing label ${label}`);
}

for (const type of [
  "WorkshopServiceRequest",
  "WorkshopSubmission",
  "WorkshopPackage",
  "WorkshopEpochTimeHandoff",
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
  "workshop_epoch_handoff_is_customer_safe"
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

console.log("WORKSHOP boundary verification passed");
