import {
  WORKSHOP_LEDGER_KEY,
  ageBandOptions,
  createAraAssignmentForPacket,
  createAraRevenuePacketForOpportunity,
  createAraReviewCompletionForAssignment,
  createAraReviewReceiptForPacket,
  createCohortPlanForRequest,
  createCompatibilityGateForRequest,
  createCustomerAccountForRequest,
  createCustomerAccountHistoryForOutcome,
  createCustomerFollowUpForRenewal,
  createAccountGrowthPlanForRetention,
  createCrmAraReceiptForRequest,
  createCrmAccountForRequest,
  createCrmOpportunityForRequest,
  createCustomerStatusEventsForRequest,
  createCustomerStatusEventForTimingReturn,
  createCustomerStatusEventForRecurringSeries,
  createDeliveryLifecycleForRequest,
  createDeliveryTransitionForRecurringSeries,
  createDeliveryTransitionForCapacityWaitlist,
  createDeliveryTransitionForTimingReturn,
  createDeliveryResultReceiptForOutcome,
  createDeliveryTransitionsForRequest,
  createEpochCapacityWaitlistConsumptionForPayload,
  createEpochCapacityWaitlistPayloadForHandoff,
  createEpochHandoffForRequest,
  createEpochRecurringSeriesConsumptionForPayload,
  createEpochRecurringSeriesPayloadForHandoff,
  createEpochTimingReturnConsumptionForPayload,
  createEpochTimingReturnPayloadForHandoff,
  createOperatingReadinessReceiptForRequest,
  createPackageEligibilityForRequest,
  createCapacityWaitlistReceiptForConsumption,
  createCustomerStatusEventForCapacityWaitlist,
  createReferralOpportunityForRetention,
  createRenewalOpportunityForOutcome,
  createRetentionHealthForAccount,
  createRevenueOutcomeForRequest,
  createServiceRequestRecord,
  createSubmissionReviewCycleForRequest,
  createSubmissionForRequest,
  createTransitionReceiptsForRequest,
  createRecurringSeriesReceiptForConsumption,
  createTimingReturnReceiptForConsumption,
  applyEpochCapacityWaitlistConsumption,
  applyEpochRecurringSeriesConsumption,
  applyEpochTimingReturnConsumption,
  createGrowthFollowUpReceiptForPlan,
  createGrowthPlanAcceptanceForPlan,
  initialWorkshopLedger,
  makeId,
  materialStatusOptions,
  createConversionReceiptForExpansion,
  createConversionStatusEventForExpansion,
  createExpansionServiceRequestForAcceptance,
  createReferralConversionForOpportunity,
  serviceLaneLabel,
  serviceLaneOptions
} from "./workshop-data.js";

const clone = (value) => JSON.parse(JSON.stringify(value));

const escapeHtml = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const getStorage = () => {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
};

const mergeLedger = (stored) => {
  const base = clone(initialWorkshopLedger);
  if (!stored || typeof stored !== "object") return base;
  for (const key of [
    "serviceRequests",
    "packages",
    "packageEligibility",
    "submissions",
    "submissionReviewCycles",
    "cohortPlans",
    "compatibilityGates",
    "crmAccounts",
    "araPackets",
    "crmOpportunities",
    "araRevenuePackets",
    "araAssignments",
    "araReviewReceipts",
    "revenueOutcomes",
    "deliveryResultReceipts",
    "araReviewCompletions",
    "customerAccounts",
    "customerAccountHistory",
    "renewalOpportunities",
    "customerFollowUps",
    "retentionHealth",
    "referralOpportunities",
    "accountGrowthPlans",
    "growthFollowUpReceipts",
    "referralConversions",
    "growthPlanAcceptances",
    "expansionServiceRequests",
    "conversionStatusEvents",
    "conversionReceipts",
    "epochTimeHandoffs",
    "epochTimingReturnPayloads",
    "epochTimingReturnConsumptions",
    "timingReturnReceipts",
    "epochCapacityWaitlistPayloads",
    "epochCapacityWaitlistConsumptions",
    "capacityWaitlistReceipts",
    "epochRecurringSeriesPayloads",
    "epochRecurringSeriesConsumptions",
    "recurringSeriesReceipts",
    "deliveryLifecycles",
    "deliveryTransitions",
    "customerStatusEvents",
    "deliveryStates",
    "receipts"
  ]) {
    if (Array.isArray(stored[key])) base[key] = stored[key];
  }
  base.version = stored.version || base.version;
  base.generatedAt = stored.generatedAt || base.generatedAt;
  return base;
};

const loadLedger = () => {
  const storage = getStorage();
  if (!storage) return clone(initialWorkshopLedger);
  try {
    return mergeLedger(JSON.parse(storage.getItem(WORKSHOP_LEDGER_KEY)));
  } catch {
    return clone(initialWorkshopLedger);
  }
};

const saveLedger = (nextLedger) => {
  const storage = getStorage();
  if (storage) storage.setItem(WORKSHOP_LEDGER_KEY, JSON.stringify(nextLedger));
};

const state = {
  ledger: loadLedger()
};

const byId = (id) => document.getElementById(id);

const renderStack = (targetId, items, renderItem, emptyText = "No records yet.") => {
  const target = byId(targetId);
  if (!target) return;
  target.innerHTML = items.length
    ? items.map(renderItem).join("")
    : `<p class="empty-state">${escapeHtml(emptyText)}</p>`;
};

const chip = (value) => `<span class="state-chip">${escapeHtml(value)}</span>`;

const formatJpy = (value) => Number(value || 0).toLocaleString("en-US", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0
});

const requestFor = (requestId) => state.ledger.serviceRequests.find((item) => item.id === requestId);
const requestPackage = (request) => state.ledger.packages.find((item) => item.id === request.packageId);

const setText = (id, value) => {
  const target = byId(id);
  if (target) target.textContent = value;
};

const renderOptions = (targetId, options, selected) => {
  const target = byId(targetId);
  if (!target) return;
  target.innerHTML = options.map((option) => `
    <option value="${escapeHtml(option.value)}"${option.value === selected ? " selected" : ""}>${escapeHtml(option.label)}</option>
  `).join("");
};

const previewValue = (value) => {
  if (typeof value === "boolean") return value ? "true" : "false";
  if (value === "") return "(empty)";
  return String(value ?? "n/a");
};

const renderFieldGrid = (fields) => `
  <dl class="payload-grid">
    ${fields.map(([label, value]) => `
      <div>
        <dt>${escapeHtml(label)}</dt>
        <dd>${escapeHtml(previewValue(value))}</dd>
      </div>
    `).join("")}
  </dl>
`;

function renderStats() {
  const requests = state.ledger.serviceRequests;
  const submissions = state.ledger.submissions;
  const handoffs = state.ledger.epochTimeHandoffs;
  const eligibility = state.ledger.packageEligibility || [];
  const gates = state.ledger.compatibilityGates || [];
  const opportunities = state.ledger.crmOpportunities || [];
  const packets = state.ledger.araRevenuePackets || [];
  const assignments = state.ledger.araAssignments || [];
  const outcomes = state.ledger.revenueOutcomes || [];
  const resultReceipts = state.ledger.deliveryResultReceipts || [];
  const reviewCompletions = state.ledger.araReviewCompletions || [];
  const accounts = state.ledger.customerAccounts || [];
  const renewals = state.ledger.renewalOpportunities || [];
  const followUps = state.ledger.customerFollowUps || [];
  const retention = state.ledger.retentionHealth || [];
  const referrals = state.ledger.referralOpportunities || [];
  const growthPlans = state.ledger.accountGrowthPlans || [];
  const growthReceipts = state.ledger.growthFollowUpReceipts || [];
  const referralConversions = state.ledger.referralConversions || [];
  const growthAcceptances = state.ledger.growthPlanAcceptances || [];
  const expansionRequests = state.ledger.expansionServiceRequests || [];
  const conversionStatuses = state.ledger.conversionStatusEvents || [];
  const conversionReceipts = state.ledger.conversionReceipts || [];
  const timingReturnPayloads = state.ledger.epochTimingReturnPayloads || [];
  const timingReturnConsumptions = state.ledger.epochTimingReturnConsumptions || [];
  const timingReturnReceipts = state.ledger.timingReturnReceipts || [];
  const capacityWaitlistPayloads = state.ledger.epochCapacityWaitlistPayloads || [];
  const capacityWaitlistConsumptions = state.ledger.epochCapacityWaitlistConsumptions || [];
  const capacityWaitlistReceipts = state.ledger.capacityWaitlistReceipts || [];
  const recurringSeriesPayloads = state.ledger.epochRecurringSeriesPayloads || [];
  const recurringSeriesConsumptions = state.ledger.epochRecurringSeriesConsumptions || [];
  const recurringSeriesReceipts = state.ledger.recurringSeriesReceipts || [];
  const totalValue = requests.reduce((sum, item) => sum + Number(item.valueJpy || 0), 0);
  setText("stat-active-requests", String(requests.filter((item) => !["complete", "canceled"].includes(item.status)).length));
  setText("stat-submissions", String(submissions.length));
  setText("stat-epoch-handoffs", String(handoffs.length));
  setText("stat-pipeline-value", formatJpy(totalValue));
  setText("stat-offer-ready", String(eligibility.filter((item) => item.customerOfferReady).length));
  setText("stat-compatibility-gates", String(gates.filter((item) => item.blocksAutoAcceptance).length));
  setText("stat-crm-opportunities", String(opportunities.filter((item) => item.qualified).length));
  setText("stat-ara-packets", String(packets.length));
  setText("stat-ara-assignments", String(assignments.filter((item) => item.reviewRequired).length));
  setText("stat-revenue-outcomes", String(outcomes.length));
  setText("stat-result-receipts", String(resultReceipts.filter((item) => item.customerVisible).length));
  setText("stat-review-complete", String(reviewCompletions.filter((item) => item.reviewComplete).length));
  setText("stat-customer-accounts", String(accounts.filter((item) => item.customerVisible).length));
  setText("stat-renewal-ready", String(renewals.filter((item) => item.renewalReady).length));
  setText("stat-follow-ups", String(followUps.length));
  setText("stat-retention-healthy", String(retention.filter((item) => item.growthReady).length));
  setText("stat-referral-ready", String(referrals.filter((item) => item.referralReady).length));
  setText("stat-growth-plans", String(growthPlans.filter((item) => item.growthReady).length));
  setText("stat-growth-receipts", String(growthReceipts.length));
  setText("stat-conversions-ready", String(referralConversions.filter((item) => item.conversionReady).length));
  setText("stat-growth-accepted", String(growthAcceptances.filter((item) => item.accepted).length));
  setText("stat-expansion-requests", String(expansionRequests.length));
  setText("stat-conversion-statuses", String(conversionStatuses.filter((item) => item.customerVisible).length));
  setText("stat-conversion-receipts", String(conversionReceipts.length));
  setText("stat-timing-returns", String(timingReturnPayloads.length));
  setText("stat-timing-consumed", String(timingReturnConsumptions.length));
  setText("stat-timing-return-receipts", String(timingReturnReceipts.length));
  setText("stat-capacity-payloads", String(capacityWaitlistPayloads.length));
  setText("stat-capacity-consumed", String(capacityWaitlistConsumptions.length));
  setText("stat-capacity-receipts", String(capacityWaitlistReceipts.length));
  setText("stat-recurring-series-payloads", String(recurringSeriesPayloads.length));
  setText("stat-recurring-consumed", String(recurringSeriesConsumptions.length));
  setText("stat-recurring-receipts", String(recurringSeriesReceipts.length));
}

function renderRevenueLanes() {
  renderStack("revenue-lanes", state.ledger.serviceRequests, (item) => {
    const pkg = requestPackage(item);
    return `
      <article class="lane-card">
        <div>
          <strong>${escapeHtml(serviceLaneLabel(item.lane))}</strong>
          <p>${escapeHtml(item.summary)}</p>
          <small>${escapeHtml(item.customer)} / ${escapeHtml(pkg?.title || item.packageId)}</small>
        </div>
        <div class="lane-meta">
          ${chip(item.status)}
          <span>${formatJpy(item.valueJpy)}</span>
        </div>
      </article>
    `;
  });
}

function renderRequests() {
  renderStack("service-request-list", state.ledger.serviceRequests, (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.customer)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${escapeHtml(serviceLaneLabel(item.lane))}${item.ageBand === "under-19" ? " / compatibility review" : ""}</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.epochTimeNeeded ? "EPOCH timing" : "WORKSHOP only"}</span>
      </div>
    </article>
  `);
}

function renderSubmissions() {
  renderStack("submission-queue", state.ledger.submissions, (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(request?.customer || item.requestId)} / ${item.customerVisible ? "customer visible" : "operator only"}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction || "Assign delivery owner.")}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.due)}</span>
        </div>
      </article>
    `;
  });
}

function renderPackages() {
  const renderPackage = (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.price)}</span>
      <small>${escapeHtml(item.detail)}</small>
      <small>${item.lowerLabor ? "submission/cohort/system leverage" : "premium live component"}</small>
    </article>
  `;
  renderStack("package-catalog", state.ledger.packages, renderPackage);
  renderStack("portal-packages", state.ledger.packages, (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.detail)}</p>
      </div>
      <span>${escapeHtml(item.price)}</span>
    </article>
  `);
}

function renderPackageEligibility() {
  const renderEligibility = (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${item.lowerLaborDefault ? "lower-labor default" : "premium operator time"} / ${item.acceptsDirectUnder19Intake ? "under-19 direct intake" : "under-19 gated"}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.customerOfferReady ? "offer ready" : "hold"}</span>
        </div>
      </article>
    `;
  };
  const renderPortalEligibility = (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.packageId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${item.lowerLaborDefault ? "submission or cohort first" : "fit review first"}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.customerOfferReady ? "available" : "reviewed before acceptance"}</span>
        </div>
      </article>
    `;
  };
  renderStack("package-eligibility-list", state.ledger.packageEligibility || [], renderEligibility, "No package eligibility records yet.");
  renderStack("portal-package-readiness", (state.ledger.packageEligibility || []).filter((item) => item.customerOfferReady), renderPortalEligibility, "No customer-facing package readiness records yet.");
}

function renderCompatibilityGates() {
  const renderGate = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(request?.customer || item.ageBand || "Compatibility gate")}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${item.blocksAutoAcceptance ? "blocks automatic acceptance" : "operator review"}${item.guardianTermsRequired ? " / guardian-aware terms" : ""}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  };
  const gates = state.ledger.compatibilityGates || [];
  renderStack("compatibility-gate-list", gates, renderGate, "No compatibility gates yet.");
  renderStack("portal-compatibility-gates", gates.filter((item) => item.customerVisible), renderGate, "No customer-visible compatibility gates yet.");
}

function renderSubmissionReviewCycles() {
  const renderCycle = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.submissionId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.returnWindow)} / due: ${escapeHtml(item.reviewDue)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.stage)}
          <span>${item.requiresEpochTime ? "EPOCH timing" : "WORKSHOP queue"}</span>
        </div>
      </article>
    `;
  };
  const renderPortalCycle = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.submissionId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.returnWindow)} / due: ${escapeHtml(item.reviewDue)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.stage)}
          <span>${item.requiresEpochTime ? "timing confirmation pending" : "review queue active"}</span>
        </div>
      </article>
    `;
  };
  const cycles = state.ledger.submissionReviewCycles || [];
  renderStack("submission-cycle-list", cycles, renderCycle, "No submission review cycles yet.");
  renderStack("portal-submission-cycles", cycles.filter((item) => item.customerVisible), renderPortalCycle, "No customer-visible submission cycles yet.");
}

function renderCohortPlans() {
  const renderPlan = (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.id)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${item.enrolledCount}/${item.targetCapacity} seats / minimum ${item.minimumViableCount}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.reusableMaterialsReady ? "materials ready" : "materials needed"}</span>
        </div>
      </article>
    `;
  };
  const renderPortalPlan = (item) => {
    const pkg = state.ledger.packages.find((packageItem) => packageItem.id === item.packageId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(pkg?.title || item.id)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${item.enrolledCount}/${item.targetCapacity} seats / minimum ${item.minimumViableCount}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.epochWindowRequired ? "timing confirmed after group forms" : "no live timing required"}</span>
        </div>
      </article>
    `;
  };
  renderStack("cohort-plan-list", state.ledger.cohortPlans || [], renderPlan, "No cohort or subscription plans yet.");
  renderStack("portal-cohort-plans", state.ledger.cohortPlans || [], renderPortalPlan, "No cohort or materials plans yet.");
}

function renderCrmAndAra() {
  renderStack("crm-list", state.ledger.crmAccounts, (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.name)}</strong>
      <span>${escapeHtml(item.state)}</span>
      <small>${escapeHtml(item.next)}</small>
    </article>
  `);

  renderStack("ara-queue", state.ledger.araPackets, (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.owner)}</span>
      <small>${escapeHtml(item.state)}</small>
    </article>
  `);
}

function renderCrmAraWorkflow() {
  const requestLabel = (requestId) => requestFor(requestId)?.customer || requestId;
  const opportunityFor = (opportunityId) => (state.ledger.crmOpportunities || []).find((item) => item.id === opportunityId);
  const packetFor = (packetId) => (state.ledger.araRevenuePackets || []).find((item) => item.id === packetId);
  const serviceReviewCustomerLabel = (item) => {
    if (item.reviewStatus === "queued") return "review queued";
    if (item.reviewStatus === "approved") return "review complete";
    if (item.reviewStatus === "revision-required") return "revision in progress";
    return item.customerSafeStatus ? "review in progress" : "status pending";
  };

  renderStack("crm-opportunity-list", state.ledger.crmOpportunities || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(requestLabel(item.requestId))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.qualified ? "qualified" : "review first"}</span>
      </div>
    </article>
  `, "No CRM opportunities yet.");

  renderStack("ara-revenue-packet-list", state.ledger.araRevenuePackets || [], (item) => {
    const opportunity = opportunityFor(item.opportunityId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(item.owner)} packet</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(requestLabel(opportunity?.requestId || item.opportunityId))} / review: ${escapeHtml(item.reviewStatus)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.requiresOperatorReview ? "review required" : "ready"}</span>
        </div>
      </article>
    `;
  }, "No ARA revenue packets yet.");

  renderStack("ara-assignment-list", state.ledger.araAssignments || [], (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.assignee)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
      <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
    </article>
  `, "No ARA assignments yet.");

  renderStack("ara-review-receipt-list", state.ledger.araReviewReceipts || [], (item) => {
    const packet = packetFor(item.packetId);
    const opportunity = opportunityFor(packet?.opportunityId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(item.id)}</strong>
        <span>${escapeHtml(item.reviewStatus || item.status)}</span>
        <small>${escapeHtml(requestLabel(opportunity?.requestId || item.packetId))}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  }, "No ARA review receipts yet.");

  renderStack("portal-service-planning-status", (state.ledger.crmOpportunities || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(requestLabel(item.requestId))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${escapeHtml(serviceLaneLabel(item.lane))}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.qualified ? "planning active" : "review first"}</span>
      </div>
    </article>
  `, "No customer-visible planning status yet.");

  renderStack("portal-service-review-status", (state.ledger.araReviewReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>Service review</strong>
      <span>${escapeHtml(serviceReviewCustomerLabel(item))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `, "No customer-visible service review receipts yet.");
}

function customerResultLabel(status) {
  if (status === "complete") return "result complete";
  if (status === "in-progress") return "review active";
  if (status === "epoch-time-requested") return "timing confirmation";
  if (status === "timing-confirmed") return "timing confirmed";
  if (status === "timing-reschedule-required") return "new timing needed";
  if (status === "recurring-series-active") return "recurring active";
  if (status === "recurring-exception-action-required") return "recurring action";
  if (status === "fit-review") return "result preparation";
  if (status === "compatibility-review") return "compatibility review";
  return "queued";
}

function renderRevenueOutcomeReporting() {
  const opportunityFor = (opportunityId) => (state.ledger.crmOpportunities || []).find((item) => item.id === opportunityId);
  const assignmentFor = (assignmentId) => (state.ledger.araAssignments || []).find((item) => item.id === assignmentId);

  renderStack("revenue-outcome-list", state.ledger.revenueOutcomes || [], (item) => {
    const request = requestFor(item.requestId);
    const opportunity = opportunityFor(item.opportunityId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
          <small>${opportunity ? `Opportunity ${escapeHtml(opportunity.id)}` : "Direct delivery"} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.resultReceiptReady ? "receipt ready" : "awaiting result"}</span>
        </div>
      </article>
    `;
  }, "No revenue outcome records yet.");

  renderStack("delivery-result-receipt-list", state.ledger.deliveryResultReceipts || [], (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(item.id)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(request?.customer || item.requestId)} / ${escapeHtml(item.kind)}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  }, "No delivery result receipts yet.");

  renderStack("ara-review-completion-list", state.ledger.araReviewCompletions || [], (item) => {
    const assignment = assignmentFor(item.assignmentId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(assignment?.assignee || item.assignmentId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${item.reviewComplete ? "review complete" : "review open"} / packet ${escapeHtml(item.packetId)}</small>
        <small>${escapeHtml(item.operatorNextAction)}</small>
      </article>
    `;
  }, "No ARA review completion records yet.");

  renderStack("portal-revenue-outcomes", (state.ledger.revenueOutcomes || []).filter((item) => item.customerVisible), (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Service result")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))}</small>
        </div>
        <div class="item-meta">
          ${chip(customerResultLabel(item.status))}
          <span>${item.resultReceiptReady ? "report open" : "not ready yet"}</span>
        </div>
      </article>
    `;
  }, "No customer-visible result reports yet.");

  renderStack("portal-delivery-results", (state.ledger.deliveryResultReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>Delivery result</strong>
      <span>${escapeHtml(customerResultLabel(item.status))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `, "No customer-visible delivery result receipts yet.");
}

function renewalCustomerLabel(status, ready) {
  if (ready) return "follow-up ready";
  if (status === "compatibility-review") return "compatibility review";
  if (status === "fit-review") return "review first";
  return "waiting for result";
}

function renderCustomerAccountContinuity() {
  const accountFor = (accountId) => (state.ledger.customerAccounts || []).find((item) => item.id === accountId);
  const renewalFor = (renewalId) => (state.ledger.renewalOpportunities || []).find((item) => item.id === renewalId);

  renderStack("customer-account-list", state.ledger.customerAccounts || [], (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.displayName)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${formatJpy(item.lifetimeValueJpy)} / ${escapeHtml(item.accountType)}</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </div>
      <div class="item-meta">
        ${chip(item.status)}
        <span>${item.renewalEligible ? "renewal eligible" : "hold renewal"}</span>
      </div>
    </article>
  `, "No customer account records yet.");

  renderStack("customer-account-history-list", state.ledger.customerAccountHistory || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.event)} / ${formatJpy(item.valueJpy)}</small>
        <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </article>
    `;
  }, "No customer account history yet.");

  renderStack("renewal-opportunity-list", state.ledger.renewalOpportunities || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.renewalReady ? "ready" : "not ready"}</span>
        </div>
      </article>
    `;
  }, "No renewal opportunities yet.");

  renderStack("customer-follow-up-list", state.ledger.customerFollowUps || [], (item) => {
    const renewal = renewalFor(item.renewalId);
    const account = accountFor(item.accountId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.kind)} / due: ${escapeHtml(item.due)}</small>
        <small>${renewal?.requiresEpochTime ? "EPOCH timing optional" : "no live timing"} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
      </article>
    `;
  }, "No customer follow-up actions yet.");

  renderStack("portal-account-history", (state.ledger.customerAccountHistory || []).filter((item) => item.customerVisible), (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || "Service history")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(requestFor(item.requestId)?.lane || "service"))}</small>
        </div>
        <div class="item-meta">
          ${chip(customerResultLabel(item.status))}
          <span>${escapeHtml(item.recordedAt)}</span>
        </div>
      </article>
    `;
  }, "No customer-visible account history yet.");

  renderStack("portal-renewal-status", (state.ledger.renewalOpportunities || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(serviceLaneLabel(item.lane))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>Follow-up: ${escapeHtml(item.followUpDue)}</small>
      </div>
      <div class="item-meta">
        ${chip(renewalCustomerLabel(item.status, item.renewalReady))}
        <span>${item.renewalReady ? "available after result" : "waiting"}</span>
      </div>
    </article>
  `, "No customer-visible renewal status yet.");

  renderStack("portal-follow-up-status", (state.ledger.customerFollowUps || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>Follow-up</strong>
      <span>${escapeHtml(renewalCustomerLabel(item.status, true))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
      <small>Due: ${escapeHtml(item.due)}</small>
    </article>
  `, "No customer-visible follow-up status yet.");
}

function growthCustomerLabel(status, ready) {
  if (ready) return "growth ready";
  if (status === "fit-review") return "review first";
  if (status === "compatibility-review") return "compatibility review";
  return "waiting";
}

function renderRetentionReferralGrowth() {
  const accountFor = (accountId) => (state.ledger.customerAccounts || []).find((item) => item.id === accountId);
  const retentionFor = (retentionId) => (state.ledger.retentionHealth || []).find((item) => item.id === retentionId);
  const growthPlanFor = (growthPlanId) => (state.ledger.accountGrowthPlans || []).find((item) => item.id === growthPlanId);
  const conversionFor = (conversionId) => (state.ledger.referralConversions || []).find((item) => item.id === conversionId);

  renderStack("retention-health-list", state.ledger.retentionHealth || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>Score ${escapeHtml(item.retentionScore)} / risk: ${escapeHtml(item.riskLevel)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.growthReady ? "growth ready" : "hold growth"}</span>
        </div>
      </article>
    `;
  }, "No retention health records yet.");

  renderStack("referral-opportunity-list", state.ledger.referralOpportunities || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.referralReady ? "referral ready" : "waiting"}</span>
        </div>
      </article>
    `;
  }, "No referral opportunities yet.");

  renderStack("account-growth-plan-list", state.ledger.accountGrowthPlans || [], (item) => {
    const account = accountFor(item.accountId);
    const retention = retentionFor(item.sourceRetentionId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.planKind)} / ${formatJpy(item.valueJpy)}</small>
          <small>${retention ? `Retention score ${escapeHtml(retention.retentionScore)}` : "Retention record linked"} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.requiresEpochTime ? "EPOCH timing optional" : "lower-labor route"}</span>
        </div>
      </article>
    `;
  }, "No account growth plans yet.");

  renderStack("growth-follow-up-receipt-list", state.ledger.growthFollowUpReceipts || [], (item) => {
    const account = accountFor(item.accountId);
    const growthPlan = growthPlanFor(item.growthPlanId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(growthPlan?.planKind || item.kind)}</small>
        <small>${escapeHtml(item.summary)}</small>
      </article>
    `;
  }, "No growth follow-up receipts yet.");

  renderStack("referral-conversion-list", state.ledger.referralConversions || [], (item) => {
    const account = accountFor(item.accountId);
    const growthPlan = growthPlanFor(item.sourceGrowthPlanId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
          <small>${growthPlan ? escapeHtml(growthPlan.planKind) : "Growth plan linked"} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.conversionReady ? "conversion ready" : "waiting"}</span>
        </div>
      </article>
    `;
  }, "No referral conversion records yet.");

  renderStack("growth-plan-acceptance-list", state.ledger.growthPlanAcceptances || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${item.requiresEpochTime ? "timing only if needed" : "lower-labor accepted"} / accepted: ${item.accepted ? "yes" : "no"}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.acceptedAt || "pending")}</span>
        </div>
      </article>
    `;
  }, "No growth plan acceptances yet.");

  renderStack("expansion-service-request-list", state.ledger.expansionServiceRequests || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(serviceLaneLabel(item.lane))} / ${formatJpy(item.valueJpy)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.epochTimeNeeded ? "EPOCH timing optional" : "WORKSHOP execution"}</span>
        </div>
      </article>
    `;
  }, "No expansion service requests yet.");

  renderStack("conversion-status-event-list", state.ledger.conversionStatusEvents || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(item.label)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(account?.displayName || item.accountId)}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  }, "No conversion status events yet.");

  renderStack("conversion-receipt-list", state.ledger.conversionReceipts || [], (item) => {
    const account = accountFor(item.accountId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(account?.displayName || item.accountId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.kind)}</small>
        <small>${escapeHtml(item.summary)}</small>
      </article>
    `;
  }, "No conversion receipts yet.");

  renderStack("portal-retention-status", (state.ledger.retentionHealth || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>Retention status</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
        <small>${item.referralEligible ? "Referral path available after result acceptance" : "Referral path waiting"}</small>
      </div>
      <div class="item-meta">
        ${chip(growthCustomerLabel(item.status, item.growthReady))}
        <span>${escapeHtml(item.riskLevel)}</span>
      </div>
    </article>
  `, "No customer-visible retention status yet.");

  renderStack("portal-referral-path", (state.ledger.referralOpportunities || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(serviceLaneLabel(item.lane))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
      </div>
      <div class="item-meta">
        ${chip(item.referralReady ? "referral path ready" : "waiting")}
        <span>${escapeHtml(item.updatedAt)}</span>
      </div>
    </article>
  `, "No customer-visible referral path yet.");

  renderStack("portal-growth-plan-status", (state.ledger.accountGrowthPlans || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.planKind)}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
      </div>
      <div class="item-meta">
        ${chip(growthCustomerLabel(item.status, item.growthReady))}
        <span>${item.requiresEpochTime ? "timing reviewed only if needed" : "no live timing required"}</span>
      </div>
    </article>
  `, "No customer-visible growth plan status yet.");

  renderStack("portal-growth-receipts", (state.ledger.growthFollowUpReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>Growth follow-up</strong>
      <span>${escapeHtml(growthCustomerLabel(item.status, true))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `, "No customer-visible growth receipts yet.");

  renderStack("portal-referral-conversions", (state.ledger.referralConversions || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(serviceLaneLabel(item.lane))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
      </div>
      <div class="item-meta">
        ${chip(item.conversionReady ? "conversion ready" : "waiting")}
        <span>${escapeHtml(item.updatedAt)}</span>
      </div>
    </article>
  `, "No customer-visible referral conversions yet.");

  renderStack("portal-growth-acceptances", (state.ledger.growthPlanAcceptances || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${item.requiresEpochTime ? "Scoped next step" : "Lower-labor next step"}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
      </div>
      <div class="item-meta">
        ${chip(item.accepted ? "accepted" : "waiting")}
        <span>${item.requiresEpochTime ? "timing checked only if needed" : "no live timing required"}</span>
      </div>
    </article>
  `, "No customer-visible growth acceptance records yet.");

  renderStack("portal-expansion-requests", (state.ledger.expansionServiceRequests || []).filter((item) => item.customerVisible), (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(serviceLaneLabel(item.lane))}</strong>
        <p>${escapeHtml(item.customerSafeStatus)}</p>
      </div>
      <div class="item-meta">
        ${chip(growthCustomerLabel(item.status, true))}
        <span>${item.epochTimeNeeded ? "timing reviewed only if needed" : "WORKSHOP request"}</span>
      </div>
    </article>
  `, "No customer-visible expansion service requests yet.");

  renderStack("portal-conversion-status", (state.ledger.conversionStatusEvents || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.label)}</strong>
      <span>${escapeHtml(growthCustomerLabel(item.status, true))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `, "No customer-visible conversion status yet.");

  renderStack("portal-conversion-receipts", (state.ledger.conversionReceipts || []).filter((item) => item.customerVisible), (item) => `
    <article class="mini-row">
      <strong>Conversion receipt</strong>
      <span>${escapeHtml(growthCustomerLabel(item.status, true))}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `, "No customer-visible conversion receipts yet.");
}

function renderDeliveryOverview() {
  renderStack("portal-delivery", state.ledger.deliveryStates, (item) => `
    <article class="item-card">
      <div>
        <strong>${escapeHtml(item.label)}</strong>
        <p>${escapeHtml(item.detail)}</p>
      </div>
      ${chip(item.state)}
    </article>
  `);
}

function renderDeliveryLifecycles() {
  const renderLifecycle = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.currentLabel)} / phase: ${escapeHtml(item.phase)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.currentStatus)}
          <span>${escapeHtml(item.updatedAt)}</span>
        </div>
      </article>
    `;
  };
  const renderPortalLifecycle = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.currentLabel)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.currentStatus)}
          <span>${escapeHtml(item.updatedAt)}</span>
        </div>
      </article>
    `;
  };
  renderStack("delivery-lifecycle-list", state.ledger.deliveryLifecycles, renderLifecycle);
  renderStack("portal-delivery-lifecycle", state.ledger.deliveryLifecycles, renderPortalLifecycle);
}

function renderDeliveryTransitions() {
  renderStack("delivery-transition-list", state.ledger.deliveryTransitions, (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(item.label)}</strong>
        <span>${escapeHtml(item.fromStatus)} -> ${escapeHtml(item.toStatus)}</span>
        <small>${escapeHtml(request?.customer || item.requestId)} / receipt ${escapeHtml(item.receiptId)}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  }, "No delivery transitions yet.");
}

function renderCustomerStatusEvents() {
  const renderEvent = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(item.label)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(request?.customer || item.requestId)}</small>
        <small>${escapeHtml(item.customerSafeStatus)}</small>
      </article>
    `;
  };
  renderStack("customer-status-event-list", state.ledger.customerStatusEvents, renderEvent, "No customer-safe status events yet.");
  renderStack("portal-status-list", state.ledger.customerStatusEvents.slice(0, 6), renderEvent, "No customer-visible updates yet.");
}

function renderEpochHandoffs() {
  renderStack("epoch-handoff-list", state.ledger.epochTimeHandoffs, (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(item.kind)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(request?.customer || item.requestId)} / target: ${escapeHtml(item.target)}</small>
          <small>Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${item.bridgeReady ? "bridge ready" : "bridge staged"}</span>
        </div>
      </article>
    `;
  }, "No EPOCH timing handoffs yet.");
}

function renderEpochHandoffPayloads() {
  const renderPayload = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="payload-card">
        <div class="payload-header">
          <div>
            <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
            <p>${escapeHtml(item.customerSafeStatus)}</p>
          </div>
          <div class="item-meta">
            ${chip(item.bridgeState)}
            <span>${escapeHtml(item.kind)}</span>
          </div>
        </div>
        <div class="payload-section">
          <h3>EPOCH schedule request preview</h3>
          ${renderFieldGrid([
            ["requester", item.requestPreview?.requester],
            ["need", item.requestPreview?.need],
            ["requestedWindow", item.requestPreview?.requestedWindow],
            ["timezone", item.requestPreview?.timezone],
            ["status", item.requestPreview?.status],
            ["sandboxOnly", item.requestPreview?.sandboxOnly],
            ["providerGoLiveRequested", item.requestPreview?.providerGoLiveRequested],
            ["customerSafeStatus", item.requestPreview?.customerSafeStatus],
            ["createdAt", item.requestPreview?.createdAt]
          ])}
        </div>
        <div class="payload-section">
          <h3>EPOCH schedule status preview</h3>
          ${renderFieldGrid([
            ["title", item.statusPreview?.title],
            ["owner", item.statusPreview?.owner],
            ["status", item.statusPreview?.status],
            ["time", item.statusPreview?.time],
            ["startIso", item.statusPreview?.startIso],
            ["endIso", item.statusPreview?.endIso],
            ["timezone", item.statusPreview?.timezone],
            ["customerSafeStatus", item.statusPreview?.customerSafeStatus],
            ["detail", item.statusPreview?.detail]
          ])}
        </div>
      </article>
    `;
  };
  const renderPortalPayload = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="payload-card">
        <div class="payload-header">
          <div>
            <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
            <p>${escapeHtml(item.customerSafeStatus)}</p>
          </div>
          <div class="item-meta">
            ${chip(item.status)}
            <span>${escapeHtml(item.kind)}</span>
          </div>
        </div>
        <div class="payload-section">
          <h3>Timing request</h3>
          ${renderFieldGrid([
            ["need", item.requestPreview?.need],
            ["requestedWindow", item.requestPreview?.requestedWindow],
            ["status", item.requestPreview?.status],
            ["customerSafeStatus", item.requestPreview?.customerSafeStatus]
          ])}
        </div>
        <div class="payload-section">
          <h3>Timing status</h3>
          ${renderFieldGrid([
            ["title", item.statusPreview?.title],
            ["time", item.statusPreview?.time],
            ["status", item.statusPreview?.status],
            ["customerSafeStatus", item.statusPreview?.customerSafeStatus]
          ])}
        </div>
      </article>
    `;
  };
  renderStack("epoch-handoff-payload-list", state.ledger.epochTimeHandoffs, renderPayload, "No EPOCH payload previews yet.");
  renderStack("portal-handoff-payload-list", state.ledger.epochTimeHandoffs, renderPortalPayload, "No timing payload previews yet.");
}

function renderEpochTimingReturns() {
  const payloadFor = (payloadId) => (state.ledger.epochTimingReturnPayloads || []).find((item) => item.id === payloadId);
  const renderPayload = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.returnType)} / handoff ${escapeHtml(item.sourceHandoffId)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.epochStatus)}
          <span>${escapeHtml(item.confirmedWindow || "new window needed")}</span>
        </div>
      </article>
    `;
  };
  const renderConsumption = (item) => {
    const request = requestFor(item.requestId);
    const payload = payloadFor(item.returnPayloadId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(payload?.returnType || item.returnPayloadId)} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };
  const renderReceipt = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.summary)}</small>
        <small>${escapeHtml(item.customerSafeStatus || "")}</small>
      </article>
    `;
  };
  const renderPortalConsumption = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Timing status")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
        </div>
        <div class="item-meta">
          ${chip(item.status === "timing-confirmed" ? "timing confirmed" : "new window needed")}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };

  renderStack("epoch-timing-return-list", state.ledger.epochTimingReturnPayloads || [], renderPayload, "No EPOCH timing returns yet.");
  renderStack("epoch-timing-consumption-list", state.ledger.epochTimingReturnConsumptions || [], renderConsumption, "No timing return consumption records yet.");
  renderStack("timing-return-receipt-list", state.ledger.timingReturnReceipts || [], renderReceipt, "No timing return receipts yet.");
  renderStack("portal-timing-return-status", (state.ledger.epochTimingReturnConsumptions || []).filter((item) => item.customerVisible), renderPortalConsumption, "No customer-visible timing returns yet.");
}

function renderEpochCapacityWaitlist() {
  const payloadFor = (payloadId) => (state.ledger.epochCapacityWaitlistPayloads || []).find((item) => item.id === payloadId);
  const renderPayload = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.payloadKind)} / handoff ${escapeHtml(item.sourceHandoffId)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.epochStatus)}
          <span>${escapeHtml(item.epochStatus === "promoted" ? `${item.releasedCapacity || 0} released` : `position ${item.waitlistPosition || 0}`)}</span>
        </div>
      </article>
    `;
  };
  const renderConsumption = (item) => {
    const request = requestFor(item.requestId);
    const payload = payloadFor(item.capacityPayloadId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(payload?.epochStatus || item.capacityPayloadId)} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };
  const renderReceipt = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.summary)}</small>
        <small>${escapeHtml(item.customerSafeStatus || "")}</small>
      </article>
    `;
  };
  const renderPortalConsumption = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Timing capacity status")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
        </div>
        <div class="item-meta">
          ${chip(item.status === "timing-promoted" ? "timing promoted" : "timing waitlisted")}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };

  renderStack("epoch-capacity-waitlist-list", state.ledger.epochCapacityWaitlistPayloads || [], renderPayload, "No EPOCH capacity/waitlist payloads yet.");
  renderStack("epoch-capacity-consumption-list", state.ledger.epochCapacityWaitlistConsumptions || [], renderConsumption, "No capacity/waitlist consumption records yet.");
  renderStack("capacity-waitlist-receipt-list", state.ledger.capacityWaitlistReceipts || [], renderReceipt, "No capacity/waitlist receipts yet.");
  renderStack("portal-capacity-waitlist-status", (state.ledger.epochCapacityWaitlistConsumptions || []).filter((item) => item.customerVisible), renderPortalConsumption, "No customer-visible capacity or waitlist updates yet.");
}

function renderEpochRecurringSeries() {
  const payloadFor = (payloadId) => (state.ledger.epochRecurringSeriesPayloads || []).find((item) => item.id === payloadId);
  const renderPayload = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(item.recurrenceLabel)} / ${escapeHtml(item.nextOccurrence)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.seriesStatus)}
          <span>${escapeHtml(`${item.exceptionCount || 0} exceptions`)}</span>
        </div>
      </article>
    `;
  };
  const renderConsumption = (item) => {
    const request = requestFor(item.requestId);
    const payload = payloadFor(item.recurringPayloadId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
          <small>${escapeHtml(payload?.recurrenceLabel || item.recurringPayloadId)} / Next action: ${escapeHtml(item.operatorNextAction)}</small>
        </div>
        <div class="item-meta">
          ${chip(item.status)}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };
  const renderReceipt = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="mini-row">
        <strong>${escapeHtml(request?.customer || item.requestId)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.summary)}</small>
        <small>${escapeHtml(item.customerSafeStatus || "")}</small>
      </article>
    `;
  };
  const renderPortalConsumption = (item) => {
    const request = requestFor(item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(request?.customer || "Recurring service status")}</strong>
          <p>${escapeHtml(item.customerSafeStatus)}</p>
        </div>
        <div class="item-meta">
          ${chip(item.status === "recurring-series-active" ? "recurring active" : "action needed")}
          <span>${escapeHtml(item.consumedAt)}</span>
        </div>
      </article>
    `;
  };

  renderStack("epoch-recurring-series-list", state.ledger.epochRecurringSeriesPayloads || [], renderPayload, "No EPOCH recurring-series payloads yet.");
  renderStack("epoch-recurring-consumption-list", state.ledger.epochRecurringSeriesConsumptions || [], renderConsumption, "No recurring-series consumption records yet.");
  renderStack("recurring-series-receipt-list", state.ledger.recurringSeriesReceipts || [], renderReceipt, "No recurring-series receipts yet.");
  renderStack("portal-recurring-series-status", (state.ledger.epochRecurringSeriesConsumptions || []).filter((item) => item.customerVisible), renderPortalConsumption, "No customer-visible recurring service status yet.");
}

function renderReceipts() {
  renderStack("receipt-list", state.ledger.receipts, (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.id)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.kind || "receipt")}</small>
      <small>${escapeHtml(item.summary)}</small>
    </article>
  `);

  renderStack(
    "portal-receipt-list",
    state.ledger.receipts.filter((item) => item.customerVisible).slice(0, 6),
    (item) => `
      <article class="mini-row">
        <strong>${escapeHtml(item.id)}</strong>
        <span>${escapeHtml(item.status)}</span>
        <small>${escapeHtml(item.summary)}</small>
      </article>
    `,
    "No customer-facing receipts yet."
  );
}

function renderForms() {
  renderOptions("service-lane-select", serviceLaneOptions, "submission-review");
  renderOptions("age-band-select", ageBandOptions, "adult");
  renderOptions("material-status-select", materialStatusOptions, "ready");
}

function renderAll() {
  renderForms();
  renderStats();
  renderRevenueLanes();
  renderRequests();
  renderSubmissions();
  renderPackages();
  renderPackageEligibility();
  renderCompatibilityGates();
  renderSubmissionReviewCycles();
  renderCohortPlans();
  renderCrmAndAra();
  renderCrmAraWorkflow();
  renderRevenueOutcomeReporting();
  renderCustomerAccountContinuity();
  renderRetentionReferralGrowth();
  renderDeliveryOverview();
  renderDeliveryLifecycles();
  renderDeliveryTransitions();
  renderCustomerStatusEvents();
  renderEpochHandoffs();
  renderEpochHandoffPayloads();
  renderEpochTimingReturns();
  renderEpochCapacityWaitlist();
  renderEpochRecurringSeries();
  renderReceipts();
}

function prependDeliveryOverview(lifecycle) {
  state.ledger.deliveryStates.unshift({
    id: `state-${Date.now().toString(36)}`,
    label: lifecycle.currentLabel,
    detail: lifecycle.customerSafeStatus,
    state: lifecycle.currentStatus
  });
}

function handleServiceRequest(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const request = createServiceRequestRecord(data);
  const eligibility = createPackageEligibilityForRequest(request);
  const compatibilityGate = createCompatibilityGateForRequest(request);
  const submission = createSubmissionForRequest(request);
  const reviewCycle = createSubmissionReviewCycleForRequest(request, submission);
  const cohortPlan = createCohortPlanForRequest(request);
  const crmAccount = createCrmAccountForRequest(request);
  const opportunity = createCrmOpportunityForRequest(request, crmAccount);
  const araPacket = createAraRevenuePacketForOpportunity(opportunity);
  const araAssignment = createAraAssignmentForPacket(araPacket);
  const araReviewReceipt = createAraReviewReceiptForPacket(araPacket, opportunity);
  const handoff = createEpochHandoffForRequest(request);
  const lifecycle = createDeliveryLifecycleForRequest(request, submission, handoff);
  const transitions = createDeliveryTransitionsForRequest(request, submission, handoff);
  const statusEvents = createCustomerStatusEventsForRequest(request, submission, handoff);
  const receipts = createTransitionReceiptsForRequest(request, lifecycle, transitions, handoff);
  const readinessReceipt = createOperatingReadinessReceiptForRequest(request, eligibility, compatibilityGate, reviewCycle, cohortPlan);
  const crmAraReceipt = createCrmAraReceiptForRequest(request, opportunity, araPacket, araAssignment);
  const revenueOutcome = createRevenueOutcomeForRequest(request, lifecycle, opportunity);
  const deliveryResultReceipt = createDeliveryResultReceiptForOutcome(revenueOutcome, request);
  const araReviewCompletion = createAraReviewCompletionForAssignment(araAssignment, araPacket, revenueOutcome);
  const customerAccount = createCustomerAccountForRequest(request, crmAccount, revenueOutcome);
  const accountHistory = createCustomerAccountHistoryForOutcome(customerAccount, revenueOutcome, request, deliveryResultReceipt);
  const renewalOpportunity = createRenewalOpportunityForOutcome(revenueOutcome, request, customerAccount);
  const customerFollowUp = createCustomerFollowUpForRenewal(renewalOpportunity, customerAccount, request);
  const retentionHealth = createRetentionHealthForAccount(customerAccount, renewalOpportunity, request);
  const referralOpportunity = createReferralOpportunityForRetention(retentionHealth, customerAccount, renewalOpportunity, request);
  const accountGrowthPlan = createAccountGrowthPlanForRetention(retentionHealth, referralOpportunity, customerAccount, renewalOpportunity, request);
  const growthFollowUpReceipt = createGrowthFollowUpReceiptForPlan(accountGrowthPlan, customerAccount, request);
  const referralConversion = createReferralConversionForOpportunity(referralOpportunity, customerAccount, accountGrowthPlan, request);
  const growthPlanAcceptance = createGrowthPlanAcceptanceForPlan(accountGrowthPlan, referralConversion, customerAccount, request);
  const expansionServiceRequest = createExpansionServiceRequestForAcceptance(growthPlanAcceptance, accountGrowthPlan, customerAccount, request);
  const conversionStatusEvent = createConversionStatusEventForExpansion(referralConversion, expansionServiceRequest, customerAccount);
  const conversionReceipt = createConversionReceiptForExpansion(referralConversion, expansionServiceRequest, conversionStatusEvent);
  const timingReturnPayload = createEpochTimingReturnPayloadForHandoff(
    handoff,
    request,
    request.lane === "cohort-subscription" ? "availability-conflict" : "booking-confirmed"
  );
  const timingReturnConsumption = createEpochTimingReturnConsumptionForPayload(timingReturnPayload, request);
  const timingReturnReceipt = createTimingReturnReceiptForConsumption(timingReturnConsumption, timingReturnPayload, request);
  const timingReturnEvent = createCustomerStatusEventForTimingReturn(timingReturnConsumption, request);
  const timingReturnTransition = createDeliveryTransitionForTimingReturn(timingReturnConsumption, request);
  applyEpochTimingReturnConsumption(
    request,
    submission,
    reviewCycle,
    lifecycle,
    handoff,
    revenueOutcome,
    deliveryResultReceipt,
    timingReturnPayload,
    timingReturnConsumption,
    timingReturnReceipt
  );
  const capacityWaitlistPayload = request.lane === "cohort-subscription"
    ? createEpochCapacityWaitlistPayloadForHandoff(handoff, request, "waitlisted")
    : null;
  const capacityWaitlistConsumption = createEpochCapacityWaitlistConsumptionForPayload(capacityWaitlistPayload, request);
  const capacityWaitlistReceipt = createCapacityWaitlistReceiptForConsumption(capacityWaitlistConsumption, capacityWaitlistPayload, request);
  const capacityWaitlistEvent = createCustomerStatusEventForCapacityWaitlist(capacityWaitlistConsumption, request);
  const capacityWaitlistTransition = createDeliveryTransitionForCapacityWaitlist(capacityWaitlistConsumption, request);
  applyEpochCapacityWaitlistConsumption(
    request,
    cohortPlan,
    lifecycle,
    handoff,
    revenueOutcome,
    capacityWaitlistPayload,
    capacityWaitlistConsumption,
    capacityWaitlistReceipt
  );
  const recurringSeriesPayload = createEpochRecurringSeriesPayloadForHandoff(
    handoff,
    request,
    timingReturnConsumption?.status === "timing-reschedule-required" ? "exception-action-required" : "active"
  );
  const recurringSeriesConsumption = createEpochRecurringSeriesConsumptionForPayload(recurringSeriesPayload, request);
  const recurringSeriesReceipt = createRecurringSeriesReceiptForConsumption(recurringSeriesConsumption, recurringSeriesPayload, request);
  const recurringSeriesEvent = createCustomerStatusEventForRecurringSeries(recurringSeriesConsumption, request);
  const recurringSeriesTransition = createDeliveryTransitionForRecurringSeries(recurringSeriesConsumption, request);
  applyEpochRecurringSeriesConsumption(
    request,
    cohortPlan,
    lifecycle,
    handoff,
    revenueOutcome,
    recurringSeriesPayload,
    recurringSeriesConsumption,
    recurringSeriesReceipt
  );

  state.ledger.serviceRequests.unshift(request);
  if (eligibility) state.ledger.packageEligibility.unshift(eligibility);
  if (compatibilityGate) state.ledger.compatibilityGates.unshift(compatibilityGate);
  if (submission) state.ledger.submissions.unshift(submission);
  if (reviewCycle) state.ledger.submissionReviewCycles.unshift(reviewCycle);
  if (cohortPlan) state.ledger.cohortPlans.unshift(cohortPlan);
  if (crmAccount) state.ledger.crmAccounts.unshift(crmAccount);
  if (opportunity) state.ledger.crmOpportunities.unshift(opportunity);
  if (araPacket) state.ledger.araRevenuePackets.unshift(araPacket);
  if (araAssignment) state.ledger.araAssignments.unshift(araAssignment);
  if (araReviewReceipt) state.ledger.araReviewReceipts.unshift(araReviewReceipt);
  if (revenueOutcome) state.ledger.revenueOutcomes.unshift(revenueOutcome);
  if (deliveryResultReceipt && revenueOutcome?.resultReceiptReady) state.ledger.deliveryResultReceipts.unshift(deliveryResultReceipt);
  if (araReviewCompletion) state.ledger.araReviewCompletions.unshift(araReviewCompletion);
  if (customerAccount) state.ledger.customerAccounts.unshift(customerAccount);
  if (accountHistory) state.ledger.customerAccountHistory.unshift(accountHistory);
  if (renewalOpportunity) state.ledger.renewalOpportunities.unshift(renewalOpportunity);
  if (customerFollowUp) state.ledger.customerFollowUps.unshift(customerFollowUp);
  if (retentionHealth) state.ledger.retentionHealth.unshift(retentionHealth);
  if (referralOpportunity) state.ledger.referralOpportunities.unshift(referralOpportunity);
  if (accountGrowthPlan) state.ledger.accountGrowthPlans.unshift(accountGrowthPlan);
  if (growthFollowUpReceipt) state.ledger.growthFollowUpReceipts.unshift(growthFollowUpReceipt);
  if (referralConversion) state.ledger.referralConversions.unshift(referralConversion);
  if (growthPlanAcceptance) state.ledger.growthPlanAcceptances.unshift(growthPlanAcceptance);
  if (expansionServiceRequest) state.ledger.expansionServiceRequests.unshift(expansionServiceRequest);
  if (conversionStatusEvent) state.ledger.conversionStatusEvents.unshift(conversionStatusEvent);
  if (conversionReceipt) state.ledger.conversionReceipts.unshift(conversionReceipt);
  if (handoff) state.ledger.epochTimeHandoffs.unshift(handoff);
  if (timingReturnPayload) state.ledger.epochTimingReturnPayloads.unshift(timingReturnPayload);
  if (timingReturnConsumption) state.ledger.epochTimingReturnConsumptions.unshift(timingReturnConsumption);
  if (timingReturnReceipt) state.ledger.timingReturnReceipts.unshift(timingReturnReceipt);
  if (capacityWaitlistPayload) state.ledger.epochCapacityWaitlistPayloads.unshift(capacityWaitlistPayload);
  if (capacityWaitlistConsumption) state.ledger.epochCapacityWaitlistConsumptions.unshift(capacityWaitlistConsumption);
  if (capacityWaitlistReceipt) state.ledger.capacityWaitlistReceipts.unshift(capacityWaitlistReceipt);
  if (recurringSeriesPayload) state.ledger.epochRecurringSeriesPayloads.unshift(recurringSeriesPayload);
  if (recurringSeriesConsumption) state.ledger.epochRecurringSeriesConsumptions.unshift(recurringSeriesConsumption);
  if (recurringSeriesReceipt) state.ledger.recurringSeriesReceipts.unshift(recurringSeriesReceipt);
  state.ledger.deliveryLifecycles.unshift(lifecycle);
  if (recurringSeriesTransition) state.ledger.deliveryTransitions.unshift(recurringSeriesTransition);
  if (capacityWaitlistTransition) state.ledger.deliveryTransitions.unshift(capacityWaitlistTransition);
  if (timingReturnTransition) state.ledger.deliveryTransitions.unshift(timingReturnTransition);
  if (transitions.length) state.ledger.deliveryTransitions.unshift(...transitions);
  if (recurringSeriesEvent) state.ledger.customerStatusEvents.unshift(recurringSeriesEvent);
  if (capacityWaitlistEvent) state.ledger.customerStatusEvents.unshift(capacityWaitlistEvent);
  if (timingReturnEvent) state.ledger.customerStatusEvents.unshift(timingReturnEvent);
  if (statusEvents.length) state.ledger.customerStatusEvents.unshift(...statusEvents);
  if (receipts.length) state.ledger.receipts.unshift(...receipts);
  if (recurringSeriesReceipt) state.ledger.receipts.unshift(recurringSeriesReceipt);
  if (capacityWaitlistReceipt) state.ledger.receipts.unshift(capacityWaitlistReceipt);
  if (timingReturnReceipt) state.ledger.receipts.unshift(timingReturnReceipt);
  if (readinessReceipt) state.ledger.receipts.unshift(readinessReceipt);
  if (crmAraReceipt) state.ledger.receipts.unshift(crmAraReceipt);
  if (conversionReceipt) state.ledger.receipts.unshift({
    id: makeId("receipt-conversion"),
    kind: conversionReceipt.kind,
    status: conversionReceipt.status,
    summary: conversionReceipt.summary,
    requestId: request.id,
    recordedAt: conversionReceipt.createdAt,
    customerVisible: conversionReceipt.customerVisible
  });
  prependDeliveryOverview(lifecycle);
  state.ledger.generatedAt = new Date().toISOString();
  saveLedger(state.ledger);

  const confirmation = byId("service-confirmation");
  if (confirmation) {
    confirmation.textContent = recurringSeriesConsumption?.customerSafeStatus || capacityWaitlistConsumption?.customerSafeStatus || timingReturnConsumption?.customerSafeStatus || (handoff?.bridgeReady ? handoff.customerSafeStatus : request.customerSafeStatus);
  }
  form.reset();
  renderAll();
}

function bindControls() {
  const requestForm = byId("service-request-form");
  if (requestForm) requestForm.addEventListener("submit", handleServiceRequest);

  const resetButton = byId("reset-ledger");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      state.ledger = clone(initialWorkshopLedger);
      saveLedger(state.ledger);
      renderAll();
    });
  }
}

renderAll();
bindControls();
