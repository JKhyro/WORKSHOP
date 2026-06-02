import { araQueue, crmAccounts, deliveryTimeline, packages, revenueLanes, submissions } from "./workshop-data.js";

const renderStack = (targetId, items, renderItem) => {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items.map(renderItem).join("");
};

const chip = (value) => `<span class="state-chip">${value}</span>`;

renderStack("revenue-lanes", revenueLanes, (item) => `
  <article class="lane-card">
    <div>
      <strong>${item.name}</strong>
      <p>${item.detail}</p>
    </div>
    <div class="lane-meta">
      ${chip(item.state)}
      <span>${item.value}</span>
    </div>
  </article>
`);

renderStack("submission-queue", submissions, (item) => `
  <article class="item-card">
    <div>
      <strong>${item.title}</strong>
      <p>${item.customer}</p>
    </div>
    <div class="item-meta">
      ${chip(item.state)}
      <span>${item.due}</span>
    </div>
  </article>
`);

renderStack("package-catalog", packages, (item) => `
  <article class="mini-row">
    <strong>${item.title}</strong>
    <span>${item.price}</span>
    <small>${item.detail}</small>
  </article>
`);

renderStack("portal-packages", packages, (item) => `
  <article class="item-card">
    <div>
      <strong>${item.title}</strong>
      <p>${item.detail}</p>
    </div>
    <span>${item.price}</span>
  </article>
`);

renderStack("crm-list", crmAccounts, (item) => `
  <article class="mini-row">
    <strong>${item.name}</strong>
    <span>${item.state}</span>
    <small>${item.next}</small>
  </article>
`);

renderStack("ara-queue", araQueue, (item) => `
  <article class="mini-row">
    <strong>${item.title}</strong>
    <span>${item.owner}</span>
    <small>${item.state}</small>
  </article>
`);

renderStack("portal-delivery", deliveryTimeline, (item) => `
  <article class="item-card">
    <div>
      <strong>${item.label}</strong>
      <p>${item.detail}</p>
    </div>
    ${chip(item.state)}
  </article>
`);

const requestForm = document.getElementById("service-request-form");
if (requestForm) {
  requestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(requestForm);
    const requester = form.get("requester");
    const lane = form.get("lane");
    const confirmation = document.getElementById("service-confirmation");
    const delivery = document.getElementById("portal-delivery");
    deliveryTimeline.unshift({
      label: "New service request queued",
      detail: `${requester} requested ${lane}.`,
      state: "queued"
    });
    if (confirmation) confirmation.textContent = "Service request added locally for WORKSHOP operator review.";
    if (delivery) {
      delivery.innerHTML = deliveryTimeline.map((item) => `
        <article class="item-card">
          <div>
            <strong>${item.label}</strong>
            <p>${item.detail}</p>
          </div>
          ${chip(item.state)}
        </article>
      `).join("");
    }
  });
}
