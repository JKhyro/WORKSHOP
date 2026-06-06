import { writeFileSync } from "node:fs";
import { initialWorkshopLedger } from "../web/shared/workshop-data.js";

const args = process.argv.slice(2);

const readOption = (name, fallback = "") => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const hasFlag = (name) => args.includes(`--${name}`);
const numberOption = (name, fallback = 0) => {
  const value = Number(readOption(name, String(fallback)));
  return Number.isFinite(value) ? value : fallback;
};

const slug = (value) => String(value || "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")
  .slice(0, 64) || "draft";

const nowStamp = () => new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, "Z");
const servicePageIds = new Set((initialWorkshopLedger.servicePages || []).map((item) => item.id));
const marketSegments = new Set((initialWorkshopLedger.marketResearchRecords || []).map((item) => item.segment));

const appOwnedBoundary = {
  customerVisible: false,
  webportalExportReady: false,
  epochTimingProviderOnly: true,
  workshopCalendarOwnership: false,
  monitorWorkflowExposed: false,
  paymentLiveEnabled: false,
  providerGoLiveRequested: false,
  liveProviderEnabled: false,
  aiForwardCopy: false,
  japanCopyMode: "ai-neutral"
};

const validateHttpsUrl = (url) => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
};

const validationResult = (record, checks) => {
  const failures = checks.filter((check) => !check.pass).map((check) => check.message);
  return {
    valid: failures.length === 0,
    failures,
    record
  };
};

const buildMarketResearchRecord = () => {
  const segment = readOption("segment", "adult-test-prep");
  const sourceLabel = readOption("source-label", "Draft source");
  const sourceUrl = readOption("source-url", "https://example.com/source");
  const confidenceScore = numberOption("confidence", 70);
  const record = {
    id: readOption("id", `market-${slug(segment)}-${nowStamp()}`),
    sourceLabel,
    sourceUrl,
    segment,
    observedGap: readOption("gap", "Record the observed customer gap before promoting this offer."),
    confidenceScore,
    evidenceReady: hasFlag("evidence-ready") || confidenceScore >= 70,
    ...appOwnedBoundary
  };

  return validationResult(record, [
    { pass: record.id.startsWith("market-"), message: "market research id must start with market-" },
    { pass: Boolean(record.sourceLabel), message: "source label is required" },
    { pass: validateHttpsUrl(record.sourceUrl), message: "source URL must be HTTPS" },
    { pass: Boolean(record.segment), message: "segment is required" },
    { pass: Boolean(record.observedGap), message: "observed gap is required" },
    { pass: record.confidenceScore >= 0 && record.confidenceScore <= 100, message: "confidence must be 0-100" },
    { pass: record.customerVisible === false && record.webportalExportReady === false, message: "market research must stay App-owned/internal" },
    { pass: record.paymentLiveEnabled === false && record.providerGoLiveRequested === false, message: "research intake must not enable payment/provider controls" },
    { pass: record.monitorWorkflowExposed === false, message: "research intake must not expose MONITOR workflow" },
    { pass: record.japanCopyMode === "ai-neutral" && record.aiForwardCopy === false, message: "research copy must stay ai-neutral" }
  ]);
};

const buildMarketingChannelRecord = () => {
  const channel = readOption("channel", "direct-referral");
  const linkedServicePageId = readOption("service-page", "service-page-submission-001");
  const targetSegment = readOption("target-segment", "adult-test-prep");
  const expectedLeadsPerMonth = numberOption("leads", 3);
  const expectedConversionRatePercent = numberOption("conversion", 25);
  const expectedMonthlyRevenueJpy = numberOption("revenue", 50000);
  const operatorMinutesPerLead = numberOption("minutes-per-lead", 15);
  const record = {
    id: readOption("id", `marketing-channel-${slug(channel)}-${nowStamp()}`),
    channel,
    linkedServicePageId,
    targetSegment,
    status: readOption("status", "research"),
    expectedLeadsPerMonth,
    expectedConversionRatePercent,
    expectedMonthlyRevenueJpy,
    operatorMinutesPerLead,
    marketingChannelExperimentReady: expectedLeadsPerMonth > 0 && expectedConversionRatePercent > 0,
    appOwnedMarketingChannelState: true,
    ...appOwnedBoundary,
    nextAction: readOption("next-action", "Keep the channel App-owned until evidence and service-page readiness are reviewed.")
  };

  return validationResult(record, [
    { pass: record.id.startsWith("marketing-channel-"), message: "marketing channel id must start with marketing-channel-" },
    { pass: Boolean(record.channel), message: "channel is required" },
    { pass: servicePageIds.has(record.linkedServicePageId), message: "linked service page must exist in WORKSHOP seed data" },
    { pass: marketSegments.has(record.targetSegment), message: "target segment should match existing market research evidence" },
    { pass: record.expectedLeadsPerMonth >= 0, message: "leads must be non-negative" },
    { pass: record.expectedConversionRatePercent >= 0 && record.expectedConversionRatePercent <= 100, message: "conversion must be 0-100" },
    { pass: record.expectedMonthlyRevenueJpy >= 0, message: "expected revenue must be non-negative" },
    { pass: record.operatorMinutesPerLead >= 0, message: "operator minutes per lead must be non-negative" },
    { pass: record.appOwnedMarketingChannelState === true, message: "marketing channel must be App-owned" },
    { pass: record.customerVisible === false && record.webportalExportReady === false, message: "marketing channel must stay internal" },
    { pass: record.paymentLiveEnabled === false && record.providerGoLiveRequested === false && record.liveProviderEnabled === false, message: "marketing intake must not enable payment/provider/live controls" },
    { pass: record.monitorWorkflowExposed === false, message: "marketing intake must not expose MONITOR workflow" },
    { pass: record.japanCopyMode === "ai-neutral" && record.aiForwardCopy === false, message: "marketing copy must stay ai-neutral" }
  ]);
};

const kind = readOption("kind", "market-research");
const result = kind === "marketing-channel"
  ? buildMarketingChannelRecord()
  : buildMarketResearchRecord();

const packet = {
  kind,
  generatedAtUtc: new Date().toISOString(),
  valid: result.valid,
  failures: result.failures,
  record: result.record,
  monitorEvidenceSummary: result.valid
    ? `${kind} draft ${result.record.id} is App-owned/internal, customerVisible=false, webportalExportReady=false, payment/provider off, MONITOR workflow hidden.`
    : `${kind} draft failed validation and should not be added to WORKSHOP ledgers.`
};

const output = `${JSON.stringify(packet, null, 2)}\n`;
const outPath = readOption("out");
if (outPath) {
  writeFileSync(outPath, output, "utf8");
} else {
  process.stdout.write(output);
}

if (!packet.valid) process.exitCode = 1;
