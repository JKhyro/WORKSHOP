import { readFileSync, writeFileSync } from "node:fs";
import { initialWorkshopLedger } from "../web/shared/workshop-data.js";

const args = process.argv.slice(2);

const readOption = (name, fallback = "") => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const readRepeated = (name) => {
  const values = [];
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === `--${name}` && args[index + 1]) values.push(args[index + 1]);
  }
  return values;
};

const positionalFiles = args.filter((arg, index) => {
  if (arg.startsWith("--")) return false;
  const previous = args[index - 1] || "";
  return !["--file", "--out"].includes(previous);
});

const draftPaths = [...readRepeated("file"), ...positionalFiles];
const servicePageIds = new Set((initialWorkshopLedger.servicePages || []).map((item) => item.id));
const marketSegments = new Set((initialWorkshopLedger.marketResearchRecords || []).map((item) => item.segment));

const validateHttpsUrl = (url) => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
};

const isFalse = (value) => value === false;
const isTrue = (value) => value === true;

const boundaryFailures = (record) => {
  const failures = [];
  if (!isFalse(record.customerVisible)) failures.push("customerVisible must be false");
  if (!isFalse(record.webportalExportReady)) failures.push("webportalExportReady must be false");
  if (!isTrue(record.epochTimingProviderOnly)) failures.push("epochTimingProviderOnly must be true");
  if (!isFalse(record.workshopCalendarOwnership)) failures.push("workshopCalendarOwnership must be false");
  if (!isFalse(record.monitorWorkflowExposed)) failures.push("monitorWorkflowExposed must be false");
  if (!isFalse(record.paymentLiveEnabled)) failures.push("paymentLiveEnabled must be false");
  if (!isFalse(record.providerGoLiveRequested)) failures.push("providerGoLiveRequested must be false");
  if (!isFalse(record.liveProviderEnabled)) failures.push("liveProviderEnabled must be false");
  if (!isFalse(record.aiForwardCopy)) failures.push("aiForwardCopy must be false");
  if (record.japanCopyMode !== "ai-neutral") failures.push("japanCopyMode must be ai-neutral");
  return failures;
};

const classifyMarketResearch = (record) => {
  if (!record.sourceLabel || !validateHttpsUrl(record.sourceUrl)) {
    return {
      classification: "needs-source",
      reasons: ["Market research drafts need a source label and HTTPS source URL."]
    };
  }
  if (!record.segment || !marketSegments.has(record.segment)) {
    return {
      classification: "needs-segment-match",
      reasons: ["Market research segment must match existing WORKSHOP market evidence before review."]
    };
  }
  if (!record.observedGap || Number(record.confidenceScore) < 70 || record.evidenceReady !== true) {
    return {
      classification: "needs-source",
      reasons: ["Market research needs an observed gap, confidence >= 70, and evidenceReady=true."]
    };
  }
  return {
    classification: "ready-for-review",
    reasons: ["Market research draft is internally safe and ready for owner review."]
  };
};

const classifyMarketingChannel = (record) => {
  if (!record.linkedServicePageId || !servicePageIds.has(record.linkedServicePageId)) {
    return {
      classification: "needs-service-page",
      reasons: ["Marketing channel drafts must reference an existing WORKSHOP service page."]
    };
  }
  if (!record.targetSegment || !marketSegments.has(record.targetSegment)) {
    return {
      classification: "needs-segment-match",
      reasons: ["Marketing channel target segment must match existing WORKSHOP market evidence."]
    };
  }
  if (!record.channel || Number(record.expectedLeadsPerMonth) <= 0 || Number(record.expectedConversionRatePercent) <= 0) {
    return {
      classification: "needs-source",
      reasons: ["Marketing channel needs channel name, expected leads, and conversion evidence."]
    };
  }
  return {
    classification: "ready-for-review",
    reasons: ["Marketing channel draft is internally safe and ready for owner review."]
  };
};

const normalizeDrafts = (input) => {
  if (Array.isArray(input)) return input;
  if (Array.isArray(input.drafts)) return input.drafts;
  if (Array.isArray(input.records)) return input.records;
  return [input];
};

const packetRecord = (draft) => draft.record || draft;
const packetKind = (draft, record) => draft.kind || record.kind || (record.appOwnedMarketingChannelState ? "marketing-channel" : "market-research");

const classifyDraft = (draft, sourcePath) => {
  const record = packetRecord(draft);
  const kind = packetKind(draft, record);
  const failures = boundaryFailures(record);
  if (failures.length) {
    return {
      id: record.id || "(missing id)",
      kind,
      sourcePath,
      classification: "rejected-boundary",
      readyForPromotionReview: false,
      reasons: failures,
      nextAction: "Reject this draft and regenerate it through WORKSHOP research:intake before review.",
      monitorEvidenceSummary: `${kind} draft ${record.id || "(missing id)"} rejected: boundary flags are not App-owned/internal.`,
      boundary: {
        customerVisible: record.customerVisible,
        webportalExportReady: record.webportalExportReady,
        monitorWorkflowExposed: record.monitorWorkflowExposed,
        paymentLiveEnabled: record.paymentLiveEnabled,
        providerGoLiveRequested: record.providerGoLiveRequested,
        liveProviderEnabled: record.liveProviderEnabled,
        japanCopyMode: record.japanCopyMode
      }
    };
  }

  const result = kind === "marketing-channel"
    ? classifyMarketingChannel(record)
    : classifyMarketResearch(record);
  const ready = result.classification === "ready-for-review";
  return {
    id: record.id || "(missing id)",
    kind,
    sourcePath,
    classification: result.classification,
    readyForPromotionReview: ready,
    reasons: result.reasons,
    nextAction: ready
      ? "Review this draft, then promote it in a later owner slice only if the evidence is accepted."
      : "Repair the listed evidence issue before promotion review.",
    monitorEvidenceSummary: ready
      ? `${kind} draft ${record.id || "(missing id)"} is ready-for-review and remains App-owned/internal.`
      : `${kind} draft ${record.id || "(missing id)"} is ${result.classification} and should not be promoted yet.`,
    boundary: {
      customerVisible: record.customerVisible,
      webportalExportReady: record.webportalExportReady,
      epochTimingProviderOnly: record.epochTimingProviderOnly,
      workshopCalendarOwnership: record.workshopCalendarOwnership,
      monitorWorkflowExposed: record.monitorWorkflowExposed,
      paymentLiveEnabled: record.paymentLiveEnabled,
      providerGoLiveRequested: record.providerGoLiveRequested,
      liveProviderEnabled: record.liveProviderEnabled,
      aiForwardCopy: record.aiForwardCopy,
      japanCopyMode: record.japanCopyMode
    }
  };
};

const loadDraftFile = (path) => {
  const parsed = JSON.parse(readFileSync(path, "utf8").replace(/^\uFEFF/, ""));
  return normalizeDrafts(parsed).map((draft) => classifyDraft(draft, path));
};

const records = [];
const failures = [];
for (const path of draftPaths) {
  try {
    records.push(...loadDraftFile(path));
  } catch (error) {
    failures.push({ path, message: error.message });
  }
}

if (!draftPaths.length) {
  failures.push({ path: "", message: "Pass at least one --file path or positional draft packet path." });
}

const counts = records.reduce((summary, record) => {
  summary[record.classification] = (summary[record.classification] || 0) + 1;
  return summary;
}, {});

const packet = {
  kind: "research-promotion-queue",
  generatedAtUtc: new Date().toISOString(),
  valid: failures.length === 0,
  sourceCount: draftPaths.length,
  recordCount: records.length,
  counts,
  failures,
  records,
  monitorEvidenceSummary: failures.length === 0
    ? `WORKSHOP research promotion queue reviewed ${records.length} draft(s); ${counts["ready-for-review"] || 0} ready-for-review, ${counts["rejected-boundary"] || 0} rejected-boundary.`
    : "WORKSHOP research promotion queue could not read every draft packet."
};

const output = `${JSON.stringify(packet, null, 2)}\n`;
const outPath = readOption("out");
if (outPath) {
  writeFileSync(outPath, output, "utf8");
} else {
  process.stdout.write(output);
}

if (!packet.valid) process.exitCode = 1;
