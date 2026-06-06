import { readFileSync, writeFileSync } from "node:fs";
import { initialWorkshopLedger } from "../web/shared/workshop-data.js";

const args = process.argv.slice(2);

const readOption = (name, fallback = "") => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const hasFlag = (name) => args.includes(`--${name}`);
const readJson = (path) => JSON.parse(readFileSync(path, "utf8").replace(/^\uFEFF/, ""));
const asArray = (value) => Array.isArray(value) ? value : [];
const formatJpy = (value) => `JPY ${Number(value || 0).toLocaleString("en-US")}`;
const perHour = (revenue, minutes) => {
  const hours = Number(minutes || 0) / 60;
  return hours > 0 ? Math.round(Number(revenue || 0) / hours) : 0;
};

const packetPath = readOption("packet");
const reviewPath = readOption("review");
const outPath = readOption("out");
const markdown = hasFlag("markdown");

const packet = packetPath ? readJson(packetPath) : null;
const review = reviewPath ? readJson(reviewPath) : null;
const ledger = initialWorkshopLedger;

const offerId = packet?.offerId || readOption("offer-id", "offer-experiment-submission-001");
const offer = asArray(ledger.offerExperiments).find((item) => item.id === offerId);
const peerOffers = asArray(ledger.offerExperiments).map((item) => ({
  id: item.id,
  offerLabel: item.offerLabel,
  expectedMonthlyRevenueJpy: Number(item.expectedMonthlyRevenueJpy || 0),
  expectedOperatorMinutes: Number(item.expectedOperatorMinutes || 0),
  lowLaborScore: Number(item.lowLaborScore || 0),
  revenuePerOperatorHourJpy: perHour(item.expectedMonthlyRevenueJpy, item.expectedOperatorMinutes)
}));
const selected = packet ? {
  id: packet.offerId,
  offerLabel: packet.offerLabel,
  expectedMonthlyRevenueJpy: Number(packet.expectedMonthlyRevenueJpy || 0),
  expectedOperatorMinutes: Number(packet.expectedOperatorMinutes || 0),
  lowLaborScore: Number(packet.lowLaborScore || 0),
  revenuePerOperatorHourJpy: Number(packet.revenuePerOperatorHourJpy || 0)
} : peerOffers.find((item) => item.id === offerId);

const sortedByRevenueHour = [...peerOffers].sort((a, b) => b.revenuePerOperatorHourJpy - a.revenuePerOperatorHourJpy);
const revenueRank = selected ? sortedByRevenueHour.findIndex((item) => item.id === selected.id) + 1 : 0;
const averageRevenuePerHour = Math.round(peerOffers.reduce((sum, item) => sum + item.revenuePerOperatorHourJpy, 0) / Math.max(1, peerOffers.length));
const averageLowLaborScore = Math.round(peerOffers.reduce((sum, item) => sum + item.lowLaborScore, 0) / Math.max(1, peerOffers.length));

const boundaryFailures = [];
if (packet && packet.kind !== "workshop-offer-action-packet") boundaryFailures.push("packet kind mismatch");
if (packet && packet.valid !== true) boundaryFailures.push("packet is not valid");
if (review && review.kind !== "workshop-offer-review-receipt") boundaryFailures.push("review kind mismatch");
if (packet && review && packet.offerId !== review.offerId) boundaryFailures.push("packet and review offer ids do not match");
if (packet?.boundary?.paymentLiveEnabled !== false) boundaryFailures.push("payment must stay disabled");
if (packet?.boundary?.providerGoLiveRequested !== false) boundaryFailures.push("provider go-live must stay disabled");
if (packet?.boundary?.monitorWorkflowExposed !== false) boundaryFailures.push("MONITOR workflow exposure must stay disabled");

const benchmark = {
  kind: "workshop-offer-benchmark",
  generatedAtUtc: new Date().toISOString(),
  valid: Boolean(selected) && boundaryFailures.length === 0,
  offerId,
  offerLabel: selected?.offerLabel || offer?.offerLabel || "",
  packetPath,
  reviewPath,
  reviewDecision: review?.decision || "",
  approvedForManualOfferTest: review?.approvedForManualOfferTest === true,
  manualTestReady: review?.approvedForManualOfferTest === true && boundaryFailures.length === 0,
  revenueRank,
  peerOfferCount: peerOffers.length,
  expectedMonthlyRevenueJpy: selected?.expectedMonthlyRevenueJpy || 0,
  expectedOperatorMinutes: selected?.expectedOperatorMinutes || 0,
  revenuePerOperatorHourJpy: selected?.revenuePerOperatorHourJpy || 0,
  averageRevenuePerOperatorHourJpy: averageRevenuePerHour,
  lowLaborScore: selected?.lowLaborScore || 0,
  averageLowLaborScore,
  aboveAverageRevenuePerHour: selected ? selected.revenuePerOperatorHourJpy >= averageRevenuePerHour : false,
  aboveAverageLowLabor: selected ? selected.lowLaborScore >= averageLowLaborScore : false,
  boundaryFailures,
  peerOffers,
  nextAction: boundaryFailures.length
    ? "Repair packet/review boundary failures before running a manual offer test."
    : review?.approvedForManualOfferTest === true
      ? "Use this benchmark as the owner-review baseline for one manual offer test; keep Webportal exposure limited to customer-safe service page copy."
      : "Use this benchmark as a pending-owner-review baseline; do not run a manual offer test until Jack approves it.",
  monitorEvidenceSummary: boundaryFailures.length
    ? `WORKSHOP offer benchmark for ${offerId} is blocked by ${boundaryFailures.length} boundary failure(s).`
    : review?.approvedForManualOfferTest === true
      ? `WORKSHOP offer benchmark confirms ${selected.offerLabel} is ready for a bounded owner-reviewed test baseline.`
      : `WORKSHOP offer benchmark prepared ${selected.offerLabel} for Jack owner review; no live test is approved yet.`
};

const renderMarkdown = (item) => `# WORKSHOP Offer Benchmark

Offer: ${item.offerLabel || item.offerId}

- Valid benchmark: ${item.valid}
- Review decision: ${item.reviewDecision || "none"}
- Approved for manual offer test: ${item.approvedForManualOfferTest}
- Manual test ready: ${item.manualTestReady}
- Revenue rank: ${item.revenueRank}/${item.peerOfferCount}
- Expected monthly revenue: ${formatJpy(item.expectedMonthlyRevenueJpy)}
- Revenue per operator hour: ${formatJpy(item.revenuePerOperatorHourJpy)}
- Average revenue per operator hour: ${formatJpy(item.averageRevenuePerOperatorHourJpy)}
- Low-labor score: ${item.lowLaborScore}
- Average low-labor score: ${item.averageLowLaborScore}
- Next action: ${item.nextAction}

## Boundary Failures

${item.boundaryFailures.length ? item.boundaryFailures.map((failure) => `- ${failure}`).join("\n") : "- None"}
`;

const output = markdown ? renderMarkdown(benchmark) : `${JSON.stringify(benchmark, null, 2)}\n`;
if (outPath) {
  writeFileSync(outPath, output, "utf8");
} else {
  process.stdout.write(output);
}

if (!benchmark.valid) process.exitCode = 1;
