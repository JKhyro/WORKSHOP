# WORKSHOP Runtime And Packaging

## Native C stance

Native C is the default for reusable WORKSHOP operating logic:

- package eligibility
- service-state transitions
- delivery lifecycle transitions
- submission/review status
- submission review cycle routing
- cohort/subscription readiness
- compatibility routing
- customer-safe delivery status events
- EPOCH handoff bridge-readiness checks
- customer account history references
- CRM opportunity qualification
- ARA revenue packet readiness and owner assignment
- ARA review receipts that preserve request/opportunity/packet linkage
- revenue outcome reportability checks
- delivery result receipt customer-safety checks
- review-completion records for operator-gated assisted work
- customer account continuity checks
- customer-safe service history checks
- renewal readiness checks
- customer follow-up customer-safety checks
- retention health readiness checks
- referral opportunity readiness checks
- account-growth plan readiness checks
- growth follow-up receipt customer-safety checks
- referral conversion readiness checks
- growth-plan acceptance readiness checks
- expansion service request readiness checks
- customer-safe conversion status checks
- conversion receipt customer-safety checks
- automation-safe operating records
- scoring and prioritization helpers
- revenue-lane state machines

Managed/web code may host UI, forms, and adapters, but should not become the
permanent source of reusable business rules.

## Client surfaces

WORKSHOP can have:

- local admin UI
- customer-safe request/status portal
- public offer/intake pages
- MONITOR route
- ARA/operator control surface

EPOCH integration is through scheduling contracts, not copied calendar logic.
The portal may show customer-safe delivery state and EPOCH payload previews, but
MONITOR and operator-only controls stay outside the portal surface.

CRM and ARA records stay WORKSHOP-owned. The internal App may show opportunity
routing, packet owners, assignment review, revenue outcome reporting, and next
actions. Account history, renewal opportunities, retention health, referral
opportunities, account-growth plans, and follow-up actions also stay
WORKSHOP-owned. The customer-safe Webportal should show only service
planning/review status, result reports, delivery result receipts, service
history, renewal visibility, retention status, referral path, growth plan status,
referral conversion status, growth acceptance status, expansion request status,
customer conversion status, conversion receipts, and follow-up status, not ARA
controls, CRM desk controls, renewal/growth/conversion console controls, or
operator packet queues.

## Provider posture

Payment, identity, notification, analytics, and advertising providers remain
no-live-provider until adapter selection, credential handling, webhook policy,
privacy/legal review, and customer-visible behavior are explicitly approved.

## Avalonia shell proof

- `native/workshop_app_bridge.h` exposes the first coarse C ABI for the
  WORKSHOP desktop host.
- `native/workshop_app_bridge.c` returns a revenue/delivery snapshot from
  Native C validation, not from a parallel C# revenue model.
- `src/Workshop.App` is the first Avalonia host. It renders Revenue Command,
  Offer Catalog, Submission Queue, and CRM / ARA / ROI Lab panels from the
  native bridge snapshot.
- `dotnet run --project src/Workshop.App/Workshop.App.csproj -- --smoke` is
  the managed smoke check after the native bridge has been built into `build`.
- WORKSHOP owns revenue, service delivery, CRM, market research, and ARA review
  gates. EPOCH remains a timing provider only. MONITOR remains development/control only.

## Native-backed revenue command slice

- `workshop_app_bridge_preview_revenue_command` previews a validated native
  command chain: service request, package eligibility, offer experiment, labor
  estimate, ROI record, revenue audit, customer-safe revenue receipt, Delivery
  Log entry, ARA work packet with human review required, owner time budget, and
  EPOCH timing handoff.
- The Avalonia shell renders that command chain in the Native Revenue Command
  panel.
- The command preview remains local-only and operator-reviewed. It requests
  timing from EPOCH without taking calendar ownership, and it keeps MONITOR out
  of service delivery workflows.

## Native-backed revenue execution slice

- `workshop_app_bridge_execute_revenue_command` accepts an operator-reviewed
  execution intent such as `approve-operator-reviewed-offer` and returns a
  revenue execution receipt.
- The execution receipt proves CRM opportunity qualification, ARA packet review,
  ARA assignment completion, customer-safe ARA review receipt, revenue outcome,
  customer-safe delivery result receipt, service status event, delivery
  lifecycle transition, and EPOCH timing handoff from the Native C bridge.
- The execution path is local-only and customer-safe: MONITOR workflow exposure
  stays false, ARA output requires human review, and EPOCH remains timing-only.

## Local revenue execution history slice

- `WorkshopRevenueExecutionHistoryStore` persists native revenue execution
  receipts in a WORKSHOP App-owned JSON ledger named
  `revenue-execution-history.json`.
- The default ledger directory is under the local application-data path at
  `KHYRON/WORKSHOP/App`; tests and smoke runs can override it with
  `WORKSHOP_APP_STATE_DIR`.
- The Avalonia shell displays the persisted command count, latest local history
  status, and ledger path in the App. MONITOR remains development/control
  evidence only and does not become a revenue delivery workflow.
- History persistence requires direct native execution, customer-visible receipt
  readiness, operator review completion, EPOCH timing request status, local-only
  execution, and no MONITOR workflow exposure. Fallback receipts are not
  persisted as native revenue history.

## Local Webportal service request inbox slice

- `WorkshopServiceRequestInboxStore` persists customer-safe Webportal service
  request intent in a WORKSHOP App-owned JSON ledger named
  `service-request-inbox.json`.
- The service inbox uses the same local application-data directory and
  `WORKSHOP_APP_STATE_DIR` override as the revenue execution history ledger.
- The Avalonia Revenue Command panel renders the local Webportal Service Inbox
  count and latest customer-safe request status. This is WORKSHOP App/Webportal
  product state; MONITOR may report readiness/evidence only.
- Service inbox entries are local-only, customer-safe, EPOCH-timing-provider
  only, MONITOR-off, and App-owned before a Native C revenue command consumes
  them.

## Local service-to-revenue-command slice

- `WorkshopServiceRevenueCommandReceiptStore` persists the App-owned link
  between a Webportal service request inbox entry and a native revenue execution
  receipt in `service-to-revenue-command.json`.
- The link is written only after a customer-safe service inbox request and
  direct native revenue execution history receipt both exist.
- The Avalonia Revenue Command panel renders Service To Native Command status
  so the operator can see that Webportal service request intent has been
  consumed by local WORKSHOP revenue execution.
- The receipt remains local-only, customer-safe, operator-reviewed,
  EPOCH-timing-provider-only, MONITOR-off, and native-ready; MONITOR may report
  implementation evidence but does not run the service flow.

## Local revenue/service operations board slice

- `WorkshopRevenueOperationsBoardSnapshot` synthesizes the Webportal Service
  Inbox, Service To Native Command receipts, and Native Revenue Execution
  History into one WORKSHOP App-owned revenue/service operations board.
- The board reports pipeline state, latest customer-safe Webportal service
  request, latest service-command link, latest native revenue execution history
  item, EPOCH timing-provider-only status, MONITOR exposure status,
  customer-safe chain status, ARA review status, ledger locations, and the next
  operator action.
- The board is ready only when the request, command link, and native execution
  history agree, EPOCH remains timing-provider-only, MONITOR workflow exposure
  is false, customer-visible receipt state is safe, and ARA operator review is
  complete.
- The Avalonia shell renders Revenue / Service Operations Board above Revenue
  Command and Offer Catalog so WORKSHOP behaves like a revenue operator surface.
  MONITOR remains development/control evidence only.

## Local customer-safe service status feedback slice

- `WorkshopCustomerServiceStatusStore` persists App-owned customer-safe service
  status exports in `customer-service-status.json`.
- `WorkshopCustomerServiceStatusRecord` is created from the linked Webportal
  Service Inbox entry, Service To Native Command receipt, and Native Revenue
  Execution History item after the operations board is ready for operator
  review.
- The exported status is Webportal-ready only when the whole chain is
  customer-safe, ARA operator review is complete, EPOCH remains
  timing-provider-only, and MONITOR workflow exposure is false.
- The Avalonia shell renders Customer-Safe Service Feedback so the operator can
  see what the Webportal may safely show without exposing MONITOR controls or
  giving WORKSHOP calendar ownership.

## Local Webportal service status reader slice

- The WORKSHOP Webportal can import the App-owned
  `customer-service-status.json` export through a browser-local reader.
- The reader keeps only records that are customer-safe, Webportal-ready,
  EPOCH-timing-provider-only, ARA-review-complete, and MONITOR-off.
- The portal renders only the service status, service lane/request label,
  customer-safe message, and next action. It does not expose ARA packet
  controls, CRM internals, MONITOR controls, or EPOCH calendar ownership.
- Customer-visible local portal copy is sanitized so stale localStorage state
  cannot leak MONITOR wording into the customer-facing Webportal.

## Local service lifecycle action slice

- The WORKSHOP Webportal can queue customer-safe service lifecycle actions such
  as scope change, service cancellation, material update, or follow-up request
  without taking EPOCH calendar ownership.
- `WorkshopServiceLifecycleActionStore` persists App-owned lifecycle intent in
  `service-lifecycle-actions.json`, separate from MONITOR development logs.
- `WorkshopServiceLifecycleReceiptStore` links a lifecycle action to the local
  service-to-native-revenue-command receipt and native revenue execution
  history in `service-lifecycle-receipts.json`.
- `WorkshopServiceLifecycleStatusStore` exports customer-safe service lifecycle
  status in `service-lifecycle-status.json` for the Webportal reader.
- The Webportal lifecycle status reader accepts only App-exported records that
  are customer-safe, Webportal-ready, EPOCH-timing-provider-only,
  ARA-review-complete, and MONITOR-off. It renders service change status only
  and does not expose ARA packet controls, CRM internals, native revenue
  execution internals, MONITOR workflow state, or EPOCH calendar ownership.

## Local EPOCH revised timing context slice

- `WorkshopEpochRevisedCalendarTimingPayloadStore` imports the local,
  customer-safe revised timing context that EPOCH returns as a timing-provider
  payload in `epoch-revised-calendar-timing.json`.
- The store first looks for the EPOCH App export through `EPOCH_APP_STATE_DIR`
  or the default local EPOCH App state directory at `KHYRON/EPOCH/App`. If a
  safe EPOCH export is present, WORKSHOP records that exact payload in the
  WORKSHOP App ledger instead of generating a standalone timing context.
- The importer accepts only `EPOCH.App.RevisedTimingProjectionExport` payloads
  that are customer-safe, EPOCH-timing-provider-only, provider-off,
  WORKSHOP-calendar-ownership false, and MONITOR-off. If no safe EPOCH export
  exists, the App may keep a local fallback payload so the service-status loop
  remains demonstrable without pretending WORKSHOP owns calendar authority.
- `WorkshopRevisedCalendarTimingReceiptStore` records WORKSHOP's local
  consumption receipt in `revised-calendar-timing-receipts.json` after the
  payload is accepted as service context only.
- `WorkshopRevisedCalendarTimingStatusStore` exports customer-safe revised
  timing status in `revised-calendar-timing-status.json` for Webportal display.
- The payload and receipt require EPOCH-timing-provider-only true, provider
  go-live false, WORKSHOP calendar ownership false, MONITOR workflow exposure
  false, and the revised timing conversion gate still held by EPOCH.
- The WORKSHOP App and Webportal render revised timing as service context only.
  Calendar rules, conversion gates, availability decisions, recurrence
  authority, and schedule source-of-truth behavior remain in EPOCH.

## Local timing-aware follow-up and renewal slice

- `WorkshopTimingAwareServiceFollowUpStore` persists App-owned service follow-up
  records in `timing-aware-service-followups.json` after WORKSHOP receives
  customer-safe EPOCH revised timing status.
- `WorkshopTimingAwareServiceFollowUp` consumes the accepted EPOCH revised
  timing payload, local revised timing receipt, and Webportal-ready timing
  status as WORKSHOP service context only. It requires EPOCH timing provider
  only, provider go-live false, WORKSHOP calendar ownership false, and MONITOR
  workflow exposure false.
- `WorkshopTimingAwareRenewalReceiptStore` persists customer-visible renewal
  receipts in `timing-aware-renewal-receipts.json` after the follow-up record is
  safe for Webportal export.
- The WORKSHOP App renders Timing-Aware Follow-Up as a service renewal/follow-up
  readiness panel. It does not expose calendar rules, revised-calendar
  conversion logic, availability ownership, live provider calls, payments, auth,
  ads, notifications, or MONITOR workflow controls.
- The WORKSHOP Webportal renders only customer-safe follow-up status and
  renewal receipts. EPOCH timing is requested again only when a follow-up needs
  another appointment, deadline, or service window.
