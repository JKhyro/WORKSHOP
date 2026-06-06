import { writeFileSync } from "node:fs";
import { initialWorkshopLedger } from "../web/shared/workshop-data.js";

const ledger = initialWorkshopLedger;

const asArray = (value) => Array.isArray(value) ? value : [];
const yen = (value) => `JPY ${Math.round(Number(value || 0)).toLocaleString("en-US")}`;
const minutesToHours = (minutes) => Number(minutes || 0) / 60;
const perHour = (revenue, minutes) => {
  const hours = minutesToHours(minutes);
  return hours > 0 ? Math.round(Number(revenue || 0) / hours) : 0;
};
const average = (items, selector) => {
  const values = items.map(selector).map(Number).filter((value) => Number.isFinite(value));
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
};
const byId = (items) => new Map(asArray(items).map((item) => [item.id, item]));
const boolCount = (items, selector) => asArray(items).filter(selector).length;
const seededOfferReportAnchors = [
  "Adult Submission Review Pack",
  "Small Operator CRM Cleanup"
];

const servicePagesById = byId(ledger.servicePages);
const packageByLane = new Map(asArray(ledger.packages).map((item) => [item.lane, item]));
const roiByOfferId = new Map(asArray(ledger.roiRecords).map((record) => [record.offerExperimentId, record]));
const laborByOfferId = new Map(asArray(ledger.laborEstimates).map((record) => [record.offerExperimentId, record]));
const channelByServicePageId = new Map(asArray(ledger.marketingChannelExperiments).map((record) => [record.linkedServicePageId, record]));

const marketSegments = asArray(ledger.marketResearchRecords).map((record) => ({
  id: record.id,
  segment: record.segment,
  confidenceScore: Number(record.confidenceScore || 0),
  evidenceReady: record.evidenceReady === true,
  customerVisible: record.customerVisible === true,
  webportalExportReady: record.webportalExportReady === true
}));

const marketConfidenceBySegment = new Map(marketSegments.map((record) => [record.segment, record.confidenceScore]));

const servicePageForLane = (lane) => asArray(ledger.servicePages).find((page) => {
  const packageId = page.packageId || page.relatedPackageId || "";
  const packageForLane = packageByLane.get(lane);
  return page.lane === lane ||
    (packageForLane && packageId === packageForLane.id) ||
    packageId.includes(lane.split("-")[0]) ||
    page.intakeFormKey?.includes(lane);
});

const scoreOffer = (offer) => {
  const roi = roiByOfferId.get(offer.id);
  const labor = laborByOfferId.get(offer.id);
  const servicePage = servicePageForLane(offer.lane);
  const channel = servicePage ? channelByServicePageId.get(servicePage.id) : null;
  const marketConfidence = channel ? marketConfidenceBySegment.get(channel.targetSegment) || 0 : 0;
  const revenue = Number(offer.expectedMonthlyRevenueJpy || roi?.expectedRevenueJpy || labor?.expectedRevenueJpy || 0);
  const operatorMinutes = Number(offer.expectedOperatorMinutes || roi?.expectedOperatorMinutes || 0);
  const laborTrap = labor?.laborTrapWarning === true;
  const serviceReady = servicePage?.customerVisible === true && servicePage?.webportalExportReady !== false;
  const channelReady = channel?.marketingChannelExperimentReady === true;
  const approvedForTest = roi?.approvedForTest === true;
  const score =
    Number(offer.lowLaborScore || 0) +
    (approvedForTest ? 18 : -8) +
    (laborTrap ? -25 : 12) +
    (serviceReady ? 10 : -8) +
    (channelReady ? 8 : 0) +
    Math.round(marketConfidence / 5);

  return {
    id: offer.id,
    offerLabel: offer.offerLabel,
    lane: offer.lane,
    status: offer.status,
    expectedMonthlyRevenueJpy: revenue,
    expectedOperatorMinutes: operatorMinutes,
    revenuePerOperatorHourJpy: perHour(revenue, operatorMinutes),
    lowLaborScore: Number(offer.lowLaborScore || 0),
    approvedForTest,
    laborTrapWarning: laborTrap,
    servicePageId: servicePage?.id || "",
    servicePageReady: serviceReady,
    marketingChannelId: channel?.id || "",
    expectedLeadsPerMonth: Number(channel?.expectedLeadsPerMonth || 0),
    expectedConversionRatePercent: Number(channel?.expectedConversionRatePercent || 0),
    channelExpectedMonthlyRevenueJpy: Number(channel?.expectedMonthlyRevenueJpy || 0),
    marketConfidenceScore: marketConfidence,
    priorityScore: score,
    nextAction: offer.nextAction || channel?.nextAction || "Choose the next smallest test."
  };
};

const offerCandidates = asArray(ledger.offerExperiments)
  .map(scoreOffer)
  .sort((a, b) => b.priorityScore - a.priorityScore);

const marketingChannels = asArray(ledger.marketingChannelExperiments).map((channel) => ({
  id: channel.id,
  channel: channel.channel,
  targetSegment: channel.targetSegment,
  status: channel.status,
  expectedLeadsPerMonth: Number(channel.expectedLeadsPerMonth || 0),
  expectedConversionRatePercent: Number(channel.expectedConversionRatePercent || 0),
  expectedMonthlyRevenueJpy: Number(channel.expectedMonthlyRevenueJpy || 0),
  operatorMinutesPerLead: Number(channel.operatorMinutesPerLead || 0),
  revenuePerOperatorHourJpy: perHour(channel.expectedMonthlyRevenueJpy, Number(channel.expectedLeadsPerMonth || 0) * Number(channel.operatorMinutesPerLead || 0)),
  linkedServicePageReady: servicePagesById.get(channel.linkedServicePageId)?.customerVisible === true,
  boundarySafe:
    channel.appOwnedMarketingChannelState === true &&
    channel.customerVisible === false &&
    channel.webportalExportReady === false &&
    channel.paymentLiveEnabled !== true &&
    channel.providerGoLiveRequested !== true &&
    channel.monitorWorkflowExposed !== true
}));

const recurringPlans = [
  ...asArray(ledger.subscriptionPlans).map((plan) => ({
    id: plan.id,
    kind: "subscription",
    status: plan.status,
    monthlyRevenuePotentialJpy: Number(plan.monthlyPriceJpy || 0) * Number(plan.targetSubscribers || plan.activeSubscribers || 0),
    liveTimeRequired: plan.liveTimeRequired === true,
    customerVisible: plan.customerVisible === true,
    webportalExportReady: plan.webportalExportReady === true,
    epochTimingProviderOnly: plan.epochTimingProviderOnly === true,
    nextAction: plan.operatorNextAction || "Keep subscription plan ready."
  })),
  ...asArray(ledger.cohortPlans).map((plan) => ({
    id: plan.id,
    kind: "cohort",
    status: plan.status,
    monthlyRevenuePotentialJpy: 0,
    liveTimeRequired: plan.epochWindowRequired === true,
    customerVisible: plan.customerVisible === true,
    webportalExportReady: plan.webportalExportReady === true,
    epochTimingProviderOnly: plan.epochTimingProviderOnly === true,
    nextAction: plan.operatorNextAction || "Keep cohort plan ready."
  }))
];

const boundaryFlags = {
  marketResearchInternalOnly: asArray(ledger.marketResearchRecords).every((item) => item.customerVisible === false && item.webportalExportReady === false),
  marketingChannelsInternalOnly: asArray(ledger.marketingChannelExperiments).every((item) => item.customerVisible === false && item.webportalExportReady === false),
  offerExperimentsInternalOnly: asArray(ledger.offerExperiments).every((item) => item.customerVisible === false && item.webportalExportReady === false),
  paymentLiveDisabled: [
    ...asArray(ledger.marketingChannelExperiments),
    ...asArray(ledger.subscriptionPlans),
    ...asArray(ledger.cohortPlans)
  ].every((item) => item.paymentLiveEnabled !== true && item.providerGoLiveRequested !== true && item.liveProviderEnabled !== true),
  monitorWorkflowHidden: [
    ...asArray(ledger.marketingChannelExperiments),
    ...asArray(ledger.subscriptionPlans),
    ...asArray(ledger.cohortPlans)
  ].every((item) => item.monitorWorkflowExposed !== true)
};

const evidenceGaps = [
  ...offerCandidates
    .filter((item) => !item.approvedForTest || item.laborTrapWarning || !item.servicePageReady || !item.marketingChannelId)
    .map((item) => ({
      id: item.id,
      type: "offer-candidate",
      issue: [
        !item.approvedForTest ? "ROI not approved" : "",
        item.laborTrapWarning ? "labor trap warning" : "",
        !item.servicePageReady ? "service page not customer-safe ready" : "",
        !item.marketingChannelId ? "no linked marketing channel" : ""
      ].filter(Boolean).join("; "),
      nextAction: item.nextAction
    })),
  ...marketingChannels
    .filter((item) => !item.boundarySafe || !item.linkedServicePageReady)
    .map((item) => ({
      id: item.id,
      type: "marketing-channel",
      issue: !item.linkedServicePageReady ? "linked service page not customer-safe ready" : "boundary flags not safe",
      nextAction: "Fix channel readiness before customer-facing promotion."
    }))
];

const summary = {
  generatedAtUtc: new Date().toISOString(),
  counts: {
    marketResearchRecords: asArray(ledger.marketResearchRecords).length,
    evidenceReadyMarketRecords: boolCount(ledger.marketResearchRecords, (item) => item.evidenceReady === true),
    competitorPriceAnchors: asArray(ledger.competitorPriceAnchors).length,
    offerCandidates: offerCandidates.length,
    approvedOfferCandidates: offerCandidates.filter((item) => item.approvedForTest).length,
    marketingChannels: marketingChannels.length,
    readyMarketingChannels: marketingChannels.filter((item) => item.status === "ready-to-list").length,
    recurringPlans: recurringPlans.length,
    evidenceGaps: evidenceGaps.length
  },
  averages: {
    marketConfidenceScore: Math.round(average(asArray(ledger.marketResearchRecords), (item) => item.confidenceScore)),
    offerLowLaborScore: Math.round(average(asArray(ledger.offerExperiments), (item) => item.lowLaborScore)),
    marketingRevenuePerOperatorHourJpy: Math.round(average(marketingChannels, (item) => item.revenuePerOperatorHourJpy))
  },
  topOfferCandidate: offerCandidates[0] || null,
  topMarketingChannel: [...marketingChannels].sort((a, b) => b.revenuePerOperatorHourJpy - a.revenuePerOperatorHourJpy)[0] || null,
  subscriptionRevenuePotentialJpy: recurringPlans.reduce((sum, item) => sum + Number(item.monthlyRevenuePotentialJpy || 0), 0),
  boundaryFlags,
  offerCandidates,
  marketingChannels,
  recurringPlans,
  evidenceGaps
};

const renderMarkdown = (report) => {
  const lines = [
    "# WORKSHOP Growth Analytics",
    "",
    `Generated: ${report.generatedAtUtc}`,
    "",
    "## Snapshot",
    `- Market evidence: ${report.counts.evidenceReadyMarketRecords}/${report.counts.marketResearchRecords} ready; average confidence ${report.averages.marketConfidenceScore}.`,
    `- Offer candidates: ${report.counts.approvedOfferCandidates}/${report.counts.offerCandidates} ROI-approved; average low-labor score ${report.averages.offerLowLaborScore}.`,
    `- Marketing channels: ${report.counts.readyMarketingChannels}/${report.counts.marketingChannels} ready-to-list; average revenue per operator hour ${yen(report.averages.marketingRevenuePerOperatorHourJpy)}.`,
    `- Subscription revenue potential: ${yen(report.subscriptionRevenuePotentialJpy)} monthly if target subscribers convert.`,
    `- Evidence gaps: ${report.counts.evidenceGaps}.`,
    "",
    "## Best Next Offer Test",
    report.topOfferCandidate
      ? `- ${report.topOfferCandidate.offerLabel}: priority ${report.topOfferCandidate.priorityScore}, ${yen(report.topOfferCandidate.expectedMonthlyRevenueJpy)} monthly, ${yen(report.topOfferCandidate.revenuePerOperatorHourJpy)} per operator hour, low-labor score ${report.topOfferCandidate.lowLaborScore}.`
      : "- No offer candidate found.",
    report.topOfferCandidate ? `- Next action: ${report.topOfferCandidate.nextAction}` : "",
    "",
    "## Best Marketing Channel",
    report.topMarketingChannel
      ? `- ${report.topMarketingChannel.channel}: ${report.topMarketingChannel.expectedLeadsPerMonth} leads/month, ${report.topMarketingChannel.expectedConversionRatePercent}% conversion, ${yen(report.topMarketingChannel.expectedMonthlyRevenueJpy)} expected monthly revenue, ${yen(report.topMarketingChannel.revenuePerOperatorHourJpy)} per operator hour.`
      : "- No marketing channel found.",
    "",
    "## Candidate Table",
    "| Candidate | Revenue | Operator hours | Revenue/hour | Low-labor | ROI approved | Labor trap | Service page | Channel |",
    "| --- | ---: | ---: | ---: | ---: | --- | --- | --- | --- |",
    ...report.offerCandidates.map((item) => `| ${item.offerLabel} | ${yen(item.expectedMonthlyRevenueJpy)} | ${minutesToHours(item.expectedOperatorMinutes).toFixed(1)} | ${yen(item.revenuePerOperatorHourJpy)} | ${item.lowLaborScore} | ${item.approvedForTest ? "yes" : "no"} | ${item.laborTrapWarning ? "yes" : "no"} | ${item.servicePageReady ? "ready" : "hold"} | ${item.marketingChannelId || "none"} |`),
    "",
    "## Boundary Flags",
    ...Object.entries(report.boundaryFlags).map(([key, value]) => `- ${key}: ${value ? "pass" : "fail"}`),
    "",
    "## Evidence Gaps",
    ...(report.evidenceGaps.length
      ? report.evidenceGaps.map((item) => `- ${item.id}: ${item.issue}. Next: ${item.nextAction}`)
      : ["- No current evidence gaps."])
  ].filter((line) => line !== "");

  return `${lines.join("\n")}\n`;
};

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const outputIndex = args.indexOf("--out");
const outputPath = outputIndex >= 0 ? args[outputIndex + 1] : "";
const rendered = asJson ? `${JSON.stringify(summary, null, 2)}\n` : renderMarkdown(summary);

if (outputPath) {
  writeFileSync(outputPath, rendered, "utf8");
} else {
  process.stdout.write(rendered);
}
