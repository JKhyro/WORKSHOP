import { readFileSync, writeFileSync } from "node:fs";

const args = process.argv.slice(2);
const allowedDecisions = new Set(["accept-for-ledger-slice", "needs-evidence", "reject-boundary", "park"]);

const readOption = (name, fallback = "") => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const hasFlag = (name) => args.includes(`--${name}`);

const readJson = (path) => JSON.parse(readFileSync(path, "utf8").replace(/^\uFEFF/, ""));

const queuePath = readOption("queue");
const recordId = readOption("record-id");
const decision = readOption("decision");
const reason = readOption("reason");
const reviewer = readOption("reviewer", "owner-review");
const outPath = readOption("out");

const failures = [];
if (!queuePath) failures.push("Pass --queue with a research promotion queue JSON path.");
if (!recordId) failures.push("Pass --record-id for the queued draft under review.");
if (!allowedDecisions.has(decision)) failures.push(`Pass --decision as one of: ${Array.from(allowedDecisions).join(", ")}.`);
if (!reason || reason.trim().length < 12) failures.push("Pass --reason with at least 12 characters of owner-review rationale.");

let queue = null;
let record = null;
if (queuePath) {
  try {
    queue = readJson(queuePath);
    record = (queue.records || []).find((item) => item.id === recordId);
    if (!record && recordId) failures.push(`Queued record ${recordId} was not found.`);
  } catch (error) {
    failures.push(`Could not read queue packet: ${error.message}`);
  }
}

const boundary = record?.boundary || {};
const boundaryFailures = [];
if (boundary.customerVisible !== false) boundaryFailures.push("customerVisible must be false");
if (boundary.webportalExportReady !== false) boundaryFailures.push("webportalExportReady must be false");
if (boundary.epochTimingProviderOnly !== true) boundaryFailures.push("epochTimingProviderOnly must be true");
if (boundary.workshopCalendarOwnership !== false) boundaryFailures.push("workshopCalendarOwnership must be false");
if (boundary.monitorWorkflowExposed !== false) boundaryFailures.push("monitorWorkflowExposed must be false");
if (boundary.paymentLiveEnabled !== false) boundaryFailures.push("paymentLiveEnabled must be false");
if (boundary.providerGoLiveRequested !== false) boundaryFailures.push("providerGoLiveRequested must be false");
if (boundary.liveProviderEnabled !== false) boundaryFailures.push("liveProviderEnabled must be false");
if (boundary.aiForwardCopy !== false) boundaryFailures.push("aiForwardCopy must be false");
if (boundary.japanCopyMode !== "ai-neutral") boundaryFailures.push("japanCopyMode must be ai-neutral");

const ready = record?.classification === "ready-for-review" && record?.readyForPromotionReview === true;
if (decision === "accept-for-ledger-slice" && !ready) {
  failures.push("accept-for-ledger-slice requires a ready-for-review queue record.");
}
if (decision === "accept-for-ledger-slice" && boundaryFailures.length) {
  failures.push("accept-for-ledger-slice is blocked by boundary failures.");
}
if (record?.classification === "rejected-boundary" && decision !== "reject-boundary") {
  failures.push("rejected-boundary queue records can only receive reject-boundary decisions.");
}

const accepted = failures.length === 0 && decision === "accept-for-ledger-slice";
const valid = failures.length === 0;
const receipt = {
  kind: "research-promotion-decision",
  generatedAtUtc: new Date().toISOString(),
  valid,
  acceptedForLedgerSlice: accepted,
  decision,
  reviewer,
  reason,
  queuePath,
  sourceQueueKind: queue?.kind || "",
  sourceQueueGeneratedAtUtc: queue?.generatedAtUtc || "",
  record: record ? {
    id: record.id,
    kind: record.kind,
    classification: record.classification,
    readyForPromotionReview: record.readyForPromotionReview === true,
    sourcePath: record.sourcePath || "",
    reasons: record.reasons || [],
    nextAction: record.nextAction || ""
  } : null,
  boundary,
  boundaryFailures,
  failures,
  nextAction: accepted
    ? "Create a later App-ledger promotion slice from this accepted decision receipt; do not auto-promote from the decision tool."
    : "Do not promote this draft until the decision and boundary failures are resolved.",
  monitorEvidenceSummary: accepted
    ? `WORKSHOP research promotion decision accepted ${record.id} for a later owner-reviewed App-ledger slice.`
    : `WORKSHOP research promotion decision kept ${recordId || "(missing id)"} out of App-ledger promotion.`
};

const output = `${JSON.stringify(receipt, null, 2)}\n`;
if (outPath) {
  writeFileSync(outPath, output, "utf8");
} else if (hasFlag("json") || !outPath) {
  process.stdout.write(output);
}

if (!valid) process.exitCode = 1;
