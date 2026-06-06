import { readFileSync, writeFileSync } from "node:fs";

const args = process.argv.slice(2);
const decisions = new Set(["approve-test", "needs-revision", "reject-boundary", "park"]);

const readOption = (name, fallback = "") => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const hasFlag = (name) => args.includes(`--${name}`);
const readJson = (path) => JSON.parse(readFileSync(path, "utf8").replace(/^\uFEFF/, ""));
const formatJpy = (value) => `JPY ${Number(value || 0).toLocaleString("en-US")}`;

const packetPath = readOption("packet");
const decision = readOption("decision", "approve-test");
const reviewer = readOption("reviewer", "Jack owner-review");
const reason = readOption("reason", "Owner review approved one bounded async-first offer test.");
const outPath = readOption("out");
const markdown = hasFlag("markdown");

const failures = [];
if (!packetPath) failures.push("Pass --packet with a WORKSHOP offer action packet JSON path.");
if (!decisions.has(decision)) failures.push(`Pass --decision as one of: ${Array.from(decisions).join(", ")}.`);
if (!reason || reason.trim().length < 16) failures.push("Pass --reason with at least 16 characters of owner-review rationale.");

let packet = null;
if (packetPath) {
  try {
    packet = readJson(packetPath);
  } catch (error) {
    failures.push(`Could not read offer action packet: ${error.message}`);
  }
}

const boundary = packet?.boundary || {};
const boundaryFailures = [];
if (packet?.kind !== "workshop-offer-action-packet") boundaryFailures.push("packet kind must be workshop-offer-action-packet");
if (packet?.valid !== true) boundaryFailures.push("packet must be valid before owner approval");
if (boundary.rawOfferCustomerVisible !== false) boundaryFailures.push("raw offer customerVisible must stay false");
if (boundary.rawOfferWebportalExportReady !== false) boundaryFailures.push("raw offer webportalExportReady must stay false");
if (boundary.rawMarketingChannelWebportalExportReady !== false) boundaryFailures.push("raw marketing channel webportalExportReady must stay false");
if (boundary.paymentLiveEnabled !== false) boundaryFailures.push("paymentLiveEnabled must stay false");
if (boundary.providerGoLiveRequested !== false) boundaryFailures.push("providerGoLiveRequested must stay false");
if (boundary.monitorWorkflowExposed !== false) boundaryFailures.push("monitorWorkflowExposed must stay false");
if (boundary.epochTimingProviderOnly !== true) boundaryFailures.push("epochTimingProviderOnly must stay true");
if (boundary.japanCopyMode !== "ai-neutral") boundaryFailures.push("japanCopyMode must be ai-neutral");

if (decision === "approve-test" && boundaryFailures.length) {
  failures.push("approve-test is blocked by packet boundary failures.");
}
if (decision === "approve-test" && packet?.evidenceGaps?.length) {
  failures.push("approve-test is blocked while packet evidence gaps remain.");
}
if (decision === "reject-boundary" && !boundaryFailures.length) {
  failures.push("reject-boundary requires at least one boundary failure.");
}

const approved = failures.length === 0 && decision === "approve-test";
const receipt = {
  kind: "workshop-offer-review-receipt",
  generatedAtUtc: new Date().toISOString(),
  valid: failures.length === 0,
  approvedForManualOfferTest: approved,
  decision,
  reviewer,
  reason,
  packetPath,
  offerId: packet?.offerId || "",
  offerLabel: packet?.offerLabel || "",
  servicePageId: packet?.servicePageId || "",
  marketingChannelId: packet?.marketingChannelId || "",
  expectedMonthlyRevenueJpy: packet?.expectedMonthlyRevenueJpy || 0,
  expectedOperatorMinutes: packet?.expectedOperatorMinutes || 0,
  revenuePerOperatorHourJpy: packet?.revenuePerOperatorHourJpy || 0,
  lowLaborScore: packet?.lowLaborScore || 0,
  marketConfidenceScore: packet?.marketConfidenceScore || 0,
  customerSafeCopyCandidate: approved ? packet?.customerSafeCopyCandidate || "" : "",
  boundary,
  boundaryFailures,
  failures,
  nextAction: approved
    ? "Run one manual customer-safe listing/test from the approved service page; do not enable live payment/provider automation."
    : decision === "park"
      ? "Keep the offer internal until Jack completes owner review and explicitly approves a manual test."
      : "Keep the offer internal until the owner-review failures are resolved.",
  monitorEvidenceSummary: approved
    ? `WORKSHOP owner review approved ${packet.offerLabel} for one bounded manual offer test; raw evidence remains App-owned/internal.`
    : decision === "park"
      ? `WORKSHOP offer review receipt parked ${packet?.offerLabel || "the offer"} for Jack owner review; no live test is approved yet.`
      : `WORKSHOP offer review receipt did not approve ${packet?.offerLabel || "the offer"} for action.`
};

const renderMarkdown = (item) => `# WORKSHOP Offer Review Receipt

Offer: ${item.offerLabel || item.offerId || "missing"}

- Decision: ${item.decision}
- Valid receipt: ${item.valid}
- Approved for manual offer test: ${item.approvedForManualOfferTest}
- Reviewer: ${item.reviewer}
- Reason: ${item.reason}
- Service page: ${item.servicePageId || "missing"}
- Marketing channel: ${item.marketingChannelId || "missing"}
- Expected monthly revenue: ${formatJpy(item.expectedMonthlyRevenueJpy)}
- Revenue per operator hour: ${formatJpy(item.revenuePerOperatorHourJpy)}
- Customer-safe copy candidate: ${item.customerSafeCopyCandidate || "not emitted unless approved"}
- Next action: ${item.nextAction}

## Boundary Failures

${item.boundaryFailures.length ? item.boundaryFailures.map((failure) => `- ${failure}`).join("\n") : "- None"}

## Receipt Failures

${item.failures.length ? item.failures.map((failure) => `- ${failure}`).join("\n") : "- None"}
`;

const output = markdown ? renderMarkdown(receipt) : `${JSON.stringify(receipt, null, 2)}\n`;
if (outPath) {
  writeFileSync(outPath, output, "utf8");
} else {
  process.stdout.write(output);
}

if (!receipt.valid) process.exitCode = 1;
