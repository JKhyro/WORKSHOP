import { readFileSync, writeFileSync } from "node:fs";
import { initialWorkshopLedger } from "../web/shared/workshop-data.js";

const args = process.argv.slice(2);

const readOption = (name, fallback = "") => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const hasFlag = (name) => args.includes(`--${name}`);
const readJson = (path) => JSON.parse(readFileSync(path, "utf8").replace(/^\uFEFF/, ""));
const formatJpy = (value) => `JPY ${Number(value || 0).toLocaleString("en-US")}`;

const ledger = initialWorkshopLedger;
const offerId = readOption("offer-id", "offer-experiment-submission-001");
const defaultOfferLabel = "Adult Submission Review Pack";
const decisionPath = readOption("decision");
const outPath = readOption("out");
const markdown = hasFlag("markdown");

const offer = (ledger.offerExperiments || []).find((item) => item.id === offerId);
const servicePage = offer ? (ledger.servicePages || []).find((item) => item.id === offer.servicePageId || item.relatedOfferTemplateId === offer.offerTemplateId || item.title === offer.offerLabel) : null;
const channel = offer ? (ledger.marketingChannelExperiments || []).find((item) => item.lane === offer.lane || item.targetSegment === offer.targetSegment || item.linkedServicePageId === servicePage?.id) : null;
const marketEvidence = offer ? (ledger.marketResearchRecords || []).find((item) => item.segment === offer.targetSegment || item.segment === channel?.targetSegment || item.lane === offer.lane) : null;
const roi = offer ? (ledger.roiRecords || []).find((item) => item.offerExperimentId === offer.id || item.lane === offer.lane) : null;
const labor = offer ? (ledger.laborEstimates || []).find((item) => item.offerExperimentId === offer.id || item.lane === offer.lane) : null;
const decisions = decisionPath ? [readJson(decisionPath)] : [];
const acceptedDecision = decisions.find((item) => item.acceptedForLedgerSlice === true && item.valid === true);

const failures = [];
if (!offer) failures.push(`Offer experiment ${offerId} was not found.`);
if (offer && offer.customerVisible !== false) failures.push("Raw offer experiment must remain customerVisible=false.");
if (offer && offer.webportalExportReady !== false) failures.push("Raw offer experiment must remain webportalExportReady=false.");
if (offer && offer.paymentLiveEnabled === true) failures.push("Payment must remain disabled.");
if (offer && offer.providerGoLiveRequested === true) failures.push("Provider go-live must remain disabled.");
if (offer && offer.monitorWorkflowExposed === true) failures.push("MONITOR workflow exposure must remain disabled.");
if (!servicePage || servicePage.customerVisible !== true) failures.push("A customer-safe service page is required before offer action.");
if (!marketEvidence || marketEvidence.evidenceReady !== true) failures.push("Evidence-ready market research is required before offer action.");
if (!channel || channel.webportalExportReady !== false) failures.push("Internal marketing channel evidence is required and must remain Webportal-hidden.");
if (!roi || roi.approvedForTest !== true) failures.push("Approved ROI record is required before offer action.");
if (labor?.laborTrapWarning === true || offer?.laborTrapWarning === true) failures.push("Labor trap warning blocks action packet.");

const revenuePerOperatorHourJpy = offer
  ? Math.round((Number(offer.expectedMonthlyRevenueJpy || 0) / Math.max(1, Number(offer.expectedOperatorMinutes || 0))) * 60)
  : 0;

const packet = {
  kind: "workshop-offer-action-packet",
  generatedAtUtc: new Date().toISOString(),
  valid: failures.length === 0,
  offerId,
  offerLabel: offer?.offerLabel || defaultOfferLabel,
  lane: offer?.lane || "",
  servicePageId: servicePage?.id || "",
  servicePageTitle: servicePage?.title || "",
  customerSafePublicStatus: servicePage?.publicStatus || "",
  customerSafeStatus: servicePage?.customerSafeStatus || "",
  intakeCta: servicePage?.intakeCta || "",
  marketEvidenceId: marketEvidence?.id || "",
  marketConfidenceScore: marketEvidence?.confidenceScore || 0,
  marketingChannelId: channel?.id || "",
  marketingChannelStatus: channel?.status || "",
  expectedMonthlyRevenueJpy: offer?.expectedMonthlyRevenueJpy || 0,
  expectedOperatorMinutes: offer?.expectedOperatorMinutes || 0,
  revenuePerOperatorHourJpy,
  lowLaborScore: offer?.lowLaborScore || 0,
  roiRecordId: roi?.id || "",
  laborEstimateId: labor?.id || "",
  acceptedDecisionId: acceptedDecision?.record?.id || "",
  acceptedDecisionPath: acceptedDecision ? decisionPath : "",
  evidenceGaps: failures,
  internalNextAction: failures.length
    ? "Repair the listed evidence gaps before listing or promoting this offer."
    : "Prepare the service page listing and run one owner-reviewed offer test without enabling live payment/provider automation; do not auto-promote internal evidence.",
  customerSafeCopyCandidate: failures.length
    ? ""
    : `${servicePage.title}: ${servicePage.customerSafeStatus} ${servicePage.intakeCta}`,
  boundary: {
    rawOfferCustomerVisible: offer?.customerVisible,
    rawOfferWebportalExportReady: offer?.webportalExportReady,
    rawMarketingChannelWebportalExportReady: channel?.webportalExportReady,
    paymentLiveEnabled: offer?.paymentLiveEnabled === true,
    providerGoLiveRequested: offer?.providerGoLiveRequested === true,
    monitorWorkflowExposed: offer?.monitorWorkflowExposed === true,
    epochTimingProviderOnly: servicePage?.epochTimingProviderOnly ?? true,
    japanCopyMode: servicePage?.japanCopyMode || "ai-neutral"
  },
  monitorEvidenceSummary: failures.length
    ? `WORKSHOP offer action packet for ${offerId} is blocked by ${failures.length} evidence gap(s).`
    : `WORKSHOP offer action packet for ${offer.offerLabel} is ready for owner review; raw evidence remains App-owned/internal.`
};

const renderMarkdown = (item) => `# WORKSHOP Offer Action Packet

Offer: ${item.offerLabel || item.offerId}

- Status: ${item.valid ? "ready for owner review" : "blocked"}
- Service page: ${item.servicePageTitle || "missing"} (${item.servicePageId || "missing"})
- Channel: ${item.marketingChannelId || "missing"} (${item.marketingChannelStatus || "missing"})
- Expected monthly revenue: ${formatJpy(item.expectedMonthlyRevenueJpy)}
- Expected operator time: ${item.expectedOperatorMinutes} minutes
- Revenue per operator hour: ${formatJpy(item.revenuePerOperatorHourJpy)}
- Low-labor score: ${item.lowLaborScore}
- Market confidence: ${item.marketConfidenceScore}
- Customer-safe copy candidate: ${item.customerSafeCopyCandidate || "not emitted while blocked"}
- Internal next action: ${item.internalNextAction}

## Evidence Gaps

${item.evidenceGaps.length ? item.evidenceGaps.map((gap) => `- ${gap}`).join("\n") : "- None"}

## Boundary

- Raw offer customer visible: ${item.boundary.rawOfferCustomerVisible}
- Raw offer Webportal export ready: ${item.boundary.rawOfferWebportalExportReady}
- Payment live enabled: ${item.boundary.paymentLiveEnabled}
- Provider go-live requested: ${item.boundary.providerGoLiveRequested}
- MONITOR workflow exposed: ${item.boundary.monitorWorkflowExposed}
- Japan copy mode: ${item.boundary.japanCopyMode}
`;

const output = markdown ? renderMarkdown(packet) : `${JSON.stringify(packet, null, 2)}\n`;
if (outPath) {
  writeFileSync(outPath, output, "utf8");
} else {
  process.stdout.write(output);
}

if (!packet.valid) process.exitCode = 1;
