import {
  WORKSHOP_LEDGER_KEY,
  ageBandOptions,
  createAraAssignmentForPacket,
  createAraRevenuePacketForOpportunity,
  createAraReviewReceiptForPacket,
  createCohortPlanForRequest,
  createCompatibilityGateForRequest,
  createCrmAraReceiptForRequest,
  createCrmAccountForRequest,
  createCrmOpportunityForRequest,
  createCustomerStatusEventsForRequest,
  createDeliveryLifecycleForRequest,
  createDeliveryTransitionsForRequest,
  createEpochHandoffForRequest,
  createOperatingReadinessReceiptForRequest,
  createPackageEligibilityForRequest,
  createServiceRequestRecord,
  createSubmissionReviewCycleForRequest,
  createSubmissionForRequest,
  createTransitionReceiptsForRequest,
  initialWorkshopLedger,
  materialStatusOptions,
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
    "epochTimeHandoffs",
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
  renderDeliveryOverview();
  renderDeliveryLifecycles();
  renderDeliveryTransitions();
  renderCustomerStatusEvents();
  renderEpochHandoffs();
  renderEpochHandoffPayloads();
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
  if (handoff) state.ledger.epochTimeHandoffs.unshift(handoff);
  state.ledger.deliveryLifecycles.unshift(lifecycle);
  if (transitions.length) state.ledger.deliveryTransitions.unshift(...transitions);
  if (statusEvents.length) state.ledger.customerStatusEvents.unshift(...statusEvents);
  if (receipts.length) state.ledger.receipts.unshift(...receipts);
  if (readinessReceipt) state.ledger.receipts.unshift(readinessReceipt);
  if (crmAraReceipt) state.ledger.receipts.unshift(crmAraReceipt);
  prependDeliveryOverview(lifecycle);
  state.ledger.generatedAt = new Date().toISOString();
  saveLedger(state.ledger);

  const confirmation = byId("service-confirmation");
  if (confirmation) {
    confirmation.textContent = handoff?.bridgeReady ? handoff.customerSafeStatus : request.customerSafeStatus;
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
