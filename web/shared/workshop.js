import {
  WORKSHOP_LEDGER_KEY,
  ageBandOptions,
  createEpochHandoffForRequest,
  createServiceRequestRecord,
  createSubmissionForRequest,
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
    "submissions",
    "crmAccounts",
    "araPackets",
    "epochTimeHandoffs",
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

function renderStats() {
  const requests = state.ledger.serviceRequests;
  const submissions = state.ledger.submissions;
  const handoffs = state.ledger.epochTimeHandoffs;
  const totalValue = requests.reduce((sum, item) => sum + Number(item.valueJpy || 0), 0);
  setText("stat-active-requests", String(requests.filter((item) => !["complete", "canceled"].includes(item.status)).length));
  setText("stat-submissions", String(submissions.length));
  setText("stat-epoch-handoffs", String(handoffs.length));
  setText("stat-pipeline-value", formatJpy(totalValue));
}

function renderRevenueLanes() {
  renderStack("revenue-lanes", state.ledger.serviceRequests, (item) => {
    const pkg = requestPackage(item);
    return `
      <article class="lane-card">
        <div>
          <strong>${escapeHtml(serviceLaneLabel(item.lane))}</strong>
          <p>${escapeHtml(item.summary)}</p>
          <small>${escapeHtml(item.customer)} · ${escapeHtml(pkg?.title || item.packageId)}</small>
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
        <small>${escapeHtml(serviceLaneLabel(item.lane))}${item.ageBand === "under-19" ? " · compatibility review" : ""}</small>
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
    const request = state.ledger.serviceRequests.find((entry) => entry.id === item.requestId);
    return `
      <article class="item-card">
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(request?.customer || item.requestId)}</p>
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

function renderDelivery() {
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

function renderEpochHandoffs() {
  renderStack("epoch-handoff-list", state.ledger.epochTimeHandoffs, (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.kind)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.customerSafeStatus)} · ${escapeHtml(item.target)}</small>
    </article>
  `, "No EPOCH timing handoffs yet.");

  renderStack("portal-status-list", state.ledger.serviceRequests.slice(0, 5), (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.customer)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.customerSafeStatus)}</small>
    </article>
  `);
}

function renderReceipts() {
  renderStack("receipt-list", state.ledger.receipts, (item) => `
    <article class="mini-row">
      <strong>${escapeHtml(item.id)}</strong>
      <span>${escapeHtml(item.status)}</span>
      <small>${escapeHtml(item.summary)}</small>
    </article>
  `);
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
  renderCrmAndAra();
  renderDelivery();
  renderEpochHandoffs();
  renderReceipts();
}

function appendReceipt(summary, status = "ready") {
  state.ledger.receipts.unshift({
    id: `receipt-${Date.now().toString(36)}`,
    status,
    summary
  });
}

function addDeliveryState(label, detail, stateValue) {
  state.ledger.deliveryStates.unshift({
    id: `state-${Date.now().toString(36)}`,
    label,
    detail,
    state: stateValue
  });
}

function handleServiceRequest(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const request = createServiceRequestRecord(data);
  const submission = createSubmissionForRequest(request);
  const handoff = createEpochHandoffForRequest(request);

  state.ledger.serviceRequests.unshift(request);
  if (submission) state.ledger.submissions.unshift(submission);
  if (handoff) state.ledger.epochTimeHandoffs.unshift(handoff);
  addDeliveryState(
    request.ageBand === "under-19" ? "Compatibility review required" : "New service request queued",
    request.customerSafeStatus,
    request.status
  );
  appendReceipt(`${request.customer} requested ${serviceLaneLabel(request.lane)}.`);
  saveLedger(state.ledger);

  const confirmation = byId("service-confirmation");
  if (confirmation) confirmation.textContent = request.customerSafeStatus;
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
