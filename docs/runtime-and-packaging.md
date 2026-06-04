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
- package delivery retention-reporting readiness checks
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

## Local ARA review App ledger slice

- `WorkshopAraReviewQueueStore` persists App-owned ARA review queue records in
  `ara-review-queue.json` after native revenue execution history and the
  service-to-native revenue command receipt agree that the result is ready for
  operator decision.
- `WorkshopAraOperatorReviewDecisionStore` persists App-owned operator review
  decisions in `ara-operator-review-decisions.json`. These decisions remain
  internal and are not exported directly to the Webportal.
- `WorkshopAraReviewStatusReceiptStore` persists customer-safe ARA review
  status receipts in `ara-review-status-receipts.json` only after the operator
  review is complete, native execution is ready, EPOCH remains timing-provider
  only, MONITOR workflow exposure is false, and payment live is false.
- The WORKSHOP App renders the ARA Review Gate as operator product state. The
  Webportal may import and show only customer-safe review status, message, and
  next action; it does not expose packet ids, assignment ids, opportunity ids,
  queue ids, decision ids, or operator review controls.
- MONITOR may report development evidence for the ARA review App ledger slice,
  but it does not run ARA review or customer delivery workflows.

## Local ARA method materialization App ledger slice

- `WorkshopAraMethodMaterializationStore` persists App-owned method
  materialization records in `ara-method-materializations.json` after an
  operator review decision and customer-safe ARA review status receipt prove
  that the reviewed service output is ready to become a reusable delivery
  method or material asset.
- `WorkshopAraMaterializationReceiptStore` persists customer-safe
  materialization receipts in `ara-materialization-receipts.json` only after
  human review is complete, reusable method readiness is true, material asset
  readiness is true, EPOCH remains timing-provider only, WORKSHOP calendar
  ownership is false, MONITOR workflow exposure is false, and payment live is
  false.
- The WORKSHOP App renders ARA Method Materialization as operator product
  state. The Webportal may import and show only customer-safe materialization
  status, message, and next action; it does not expose packet ids, assignment
  ids, opportunity ids, queue ids, decision ids, materialization ids, or
  operator material controls.
- MONITOR may report development evidence for the ARA method materialization
  App ledger slice, but it does not run materialization, customer delivery, or
  reusable-method workflows.

## Local service material reuse App ledger slice

- `WorkshopServiceMaterialReuseStore` persists App-owned service material reuse
  records in `service-material-reuse-records.json` after a customer-safe ARA
  materialization receipt and Webportal service request prove that reviewed
  material can be linked to reusable package support.
- `WorkshopServiceMaterialReuseReceiptStore` persists customer-safe reuse
  receipts in `service-material-reuse-receipts.json` only after human review,
  reusable method readiness, material asset readiness, package support
  readiness, lower-labor reuse readiness, EPOCH timing-provider-only status,
  WORKSHOP calendar ownership false, MONITOR workflow exposure false, and
  payment live false are all true.
- The WORKSHOP App renders Service Material Reuse as internal package-support
  state for reducing repeat labor. The Webportal may import and show only
  customer-safe reuse receipt status, message, and next action; it does not
  expose packet ids, assignment ids, opportunity ids, queue ids, decision ids,
  materialization ids, materialization receipt ids, or package-control records.
- MONITOR may report development evidence for the service material reuse App
  ledger slice, but it does not run reuse, package-support, customer delivery,
  or material workflow controls.

## Local package delivery checklist App ledger slice

- `WorkshopPackageDeliveryChecklistStore` persists App-owned package delivery
  checklist records in `package-delivery-checklists.json` after reusable service
  material support proves that a package can be delivered through a repeatable
  lower-labor checklist.
- `WorkshopPackageDeliveryChecklistReceiptStore` persists customer-safe package
  delivery checklist receipts in
  `package-delivery-checklist-receipts.json` only after human review, package
  support readiness, lower-labor reuse readiness, checklist readiness, native
  execution readiness, EPOCH timing-provider-only status, WORKSHOP calendar
  ownership false, MONITOR workflow exposure false, and payment live false are
  all true.
- The WORKSHOP App renders Package Delivery Checklists as internal package
  delivery control state. The Webportal may import and show only customer-safe
  checklist receipt status, message, and next action; it does not expose packet
  ids, assignment ids, opportunity ids, queue ids, decision ids,
  materialization ids, materialization receipt ids, reuse ids, checklist ids,
  material asset ids, operator next actions, checklist-control records, or
  package-control records.
- MONITOR may report development evidence for the package delivery checklist
  App ledger slice, but it does not run checklist preparation, service delivery,
  package-control, customer delivery, or material workflow controls.

## Local package delivery checklist automation App ledger slice

- `WorkshopPackageDeliveryChecklistAutomationStore` persists App-owned package
  delivery automation records in `package-delivery-checklist-automations.json`
  after a package delivery checklist proves the service path is ready for
  repeatable lower-labor delivery preparation.
- `WorkshopPackageDeliveryChecklistAutomationReceiptStore` persists
  customer-safe package delivery automation receipts in
  `package-delivery-checklist-automation-receipts.json` only after human review,
  package support readiness, lower-labor reuse readiness, checklist readiness,
  automation readiness, native execution readiness, EPOCH timing-provider-only
  status, WORKSHOP calendar ownership false, MONITOR workflow exposure false,
  and payment live false are all true.
- The WORKSHOP App renders Package Delivery Checklist Automation as internal
  automation-control state. The Webportal may import and show only customer-safe
  automation receipt status, message, and next action; it does not expose packet
  ids, assignment ids, opportunity ids, queue ids, decision ids,
  materialization ids, materialization receipt ids, reuse ids, checklist ids,
  automation ids, material asset ids, operator next actions,
  automation-control records, or package-control records.
- MONITOR may report development evidence for the package delivery checklist
  automation App ledger slice, but it does not run automation preparation,
  service delivery, package-control, customer delivery, or material workflow
  controls.

## Local package delivery execution App ledger slice

- `WorkshopPackageDeliveryExecutionStore` persists App-owned package delivery
  execution records in `package-delivery-executions.json` after reviewed
  package delivery automation proves the service path is ready for repeatable
  lower-labor delivery execution.
- `WorkshopPackageDeliveryExecutionReceiptStore` persists customer-safe package
  delivery execution receipts in `package-delivery-execution-receipts.json`
  only after human review, package support readiness, lower-labor reuse
  readiness, checklist readiness, automation readiness, execution readiness,
  native execution readiness, EPOCH timing-provider-only status, WORKSHOP
  calendar ownership false, MONITOR workflow exposure false, and payment live
  false are all true.
- The WORKSHOP App renders Package Delivery Execution as internal
  execution-control state. The Webportal may import and show only customer-safe
  execution receipt status, message, and next action; it does not expose packet
  ids, assignment ids, opportunity ids, queue ids, decision ids,
  materialization ids, materialization receipt ids, reuse ids, checklist ids,
  automation ids, execution ids, material asset ids, operator next actions,
  execution-control records, or package-control records.
- MONITOR may report development evidence for the package delivery execution
  App ledger slice, but it does not run delivery execution, service delivery,
  package-control, customer delivery, or material workflow controls.

## Local package delivery follow-up renewal App ledger slice

- `WorkshopPackageDeliveryFollowUpRenewalStore` persists App-owned package
  delivery follow-up and renewal records in
  `package-delivery-followup-renewals.json` after a customer-safe package
  delivery execution receipt proves a completed delivery path is ready for
  repeat and renewal review.
- `WorkshopPackageDeliveryFollowUpRenewalReceiptStore` persists customer-safe
  follow-up/renewal receipts in
  `package-delivery-followup-renewal-receipts.json` only after human review,
  package support readiness, lower-labor reuse readiness, checklist readiness,
  automation readiness, execution readiness, follow-up readiness, renewal
  readiness, native execution readiness, EPOCH timing-provider-only status,
  WORKSHOP calendar ownership false, MONITOR workflow exposure false, and
  payment live false are all true.
- The WORKSHOP App renders Package Delivery Follow-Up/Renewal as internal
  follow-up-control and renewal-control state. The Webportal may import and
  show only customer-safe follow-up/renewal receipt status, message, and next
  action; it does not expose packet ids, assignment ids, opportunity ids, queue
  ids, decision ids, materialization ids, materialization receipt ids, reuse
  ids, checklist ids, automation ids, execution ids, execution receipt ids,
  follow-up ids, material asset ids, operator next actions,
  follow-up-control records, renewal-control records, or package-control
  records.
- MONITOR may report development evidence for the package delivery
  follow-up/renewal App ledger slice, but it does not run follow-up execution,
  renewal outreach, customer delivery, package-control, or material workflow
  controls.

## Local package delivery quality outcome App ledger slice

- `WorkshopPackageDeliveryQualityOutcomeStore` persists App-owned package
  delivery quality/outcome records in
  `package-delivery-quality-outcomes.json` after both a customer-safe execution
  receipt and a customer-safe follow-up/renewal receipt prove the package path
  is ready for outcome review.
- `WorkshopPackageDeliveryQualityOutcomeReceiptStore` persists customer-safe
  quality/outcome receipts in
  `package-delivery-quality-outcome-receipts.json` only after human review,
  package support readiness, lower-labor reuse readiness, checklist readiness,
  automation readiness, execution readiness, follow-up readiness, renewal
  readiness, quality review readiness, outcome readiness, native execution
  readiness, EPOCH timing-provider-only status, WORKSHOP calendar ownership
  false, MONITOR workflow exposure false, and payment live false are all true.
- The WORKSHOP App renders Package Delivery Quality/Outcome as internal
  quality-control, outcome-control, service-improvement, and renewal-signal
  state. The Webportal may import and show only customer-safe quality/outcome
  receipt status, message, and next action; it does not expose packet ids,
  assignment ids, opportunity ids, queue ids, decision ids, materialization ids,
  materialization receipt ids, reuse ids, checklist ids, automation ids,
  execution ids, execution receipt ids, follow-up ids, follow-up renewal ids,
  follow-up renewal receipt ids, quality outcome ids, outcome ids, material
  asset ids, operator next actions, quality-control records, outcome-control
  records, or package-control records.
- MONITOR may report development evidence for the package delivery
  quality/outcome App ledger slice, but it does not run quality review,
  customer delivery, renewal outreach, package-control, or material workflow
  controls.

## Local package delivery account growth App ledger slice

- `WorkshopPackageDeliveryAccountGrowthLinkageStore` persists App-owned package
  delivery account-growth linkage records in
  `package-delivery-account-growth-linkages.json` after a customer-safe package
  delivery quality/outcome receipt proves the package path is ready to become
  a repeat-service, referral, or expansion follow-up path.
- `WorkshopPackageDeliveryAccountGrowthReceiptStore` persists customer-safe
  account-growth receipts in `package-delivery-account-growth-receipts.json`
  only after human review, package support readiness, lower-labor reuse
  readiness, checklist readiness, automation readiness, execution readiness,
  follow-up readiness, renewal readiness, quality/outcome readiness,
  account-growth readiness, retention readiness, referral readiness, expansion
  readiness, native execution readiness, EPOCH timing-provider-only status,
  WORKSHOP calendar ownership false, MONITOR workflow exposure false, and
  payment live false are all true.
- The WORKSHOP App renders Package Delivery Account Growth as internal
  account-growth-control state. The Webportal may import and show only
  customer-safe account-growth receipt status, message, and next action; it
  does not expose linkage ids, quality outcome receipt ids, account growth plan
  ids, retention/referral/expansion signal ids, packet ids, operator next
  actions, account-growth-control records, outcome-control records, or
  package-control records.
- MONITOR may report development evidence for the package delivery account
  growth App ledger slice, but it does not run account-growth planning,
  referral execution, expansion outreach, package-control, customer delivery,
  or material workflow controls.

## Local package delivery retention reporting App ledger slice

- `WorkshopPackageDeliveryRetentionReportStore` persists App-owned package
  delivery retention-reporting records in
  `package-delivery-retention-reporting.json` after the internal account-growth
  linkage, customer-safe account-growth receipt, and customer-safe
  quality/outcome receipt match the same service request, lane, package, and
  quality/outcome provenance.
- `WorkshopPackageDeliveryRetentionReportReceiptStore` persists customer-safe
  retention-report receipts in
  `package-delivery-retention-reporting-receipts.json` only after human review,
  package support readiness, lower-labor reuse readiness, checklist readiness,
  automation readiness, execution readiness, follow-up readiness, renewal
  readiness, quality/outcome readiness, account-growth readiness, retention
  readiness, referral readiness, expansion readiness, native execution
  readiness, EPOCH timing-provider-only status, WORKSHOP calendar ownership
  false, MONITOR workflow exposure false, and payment live false are all true.
- The WORKSHOP App renders Package Delivery Retention Reporting as internal
  retention-reporting-control state. The Webportal may import and show only
  customer-safe retention-report receipt status, message, and next action; it
  does not expose report ids, account-growth receipt ids, quality/outcome
  receipt ids, account growth plan ids, retention/referral/expansion signal
  ids, packet ids, operator next actions, retention-reporting-control records,
  account-growth-control records, outcome-control records, or package-control
  records.
- MONITOR may report development evidence for the package delivery retention
  reporting App ledger slice, but it does not run retention reporting,
  referral execution, expansion outreach, package-control, customer delivery,
  or material workflow controls.

## Local package delivery growth action App ledger slice

- `WorkshopPackageDeliveryGrowthActionStore` persists App-owned package
  delivery growth-action records in `package-delivery-growth-actions.json`
  after the internal retention-reporting record and customer-safe
  retention-report receipt match the same service request, lane, and package.
- `WorkshopPackageDeliveryGrowthActionReceiptStore` persists customer-safe
  growth-action receipts in `package-delivery-growth-action-receipts.json`
  only after human review, package support readiness, lower-labor reuse
  readiness, checklist readiness, automation readiness, execution readiness,
  follow-up readiness, renewal readiness, quality/outcome readiness,
  account-growth readiness, retention readiness, referral readiness, expansion
  readiness, retention-reporting readiness, native execution readiness, EPOCH
  timing-provider-only status, WORKSHOP calendar ownership false, MONITOR
  workflow exposure false, and payment live false are all true.
- The WORKSHOP App renders Package Delivery Growth Actions as internal
  growth-action-control state for choosing repeat-service, referral, or
  expansion next steps. The Webportal may import and show only customer-safe
  growth-action receipt status, message, and next action; it does not expose
  action ids, retention report ids, retention report receipt ids, account
  growth plan ids, retention/referral/expansion signal ids, packet ids,
  operator next actions, growth-action-control records,
  retention-reporting-control records, account-growth-control records, or
  package-control records.
- MONITOR may report development evidence for the package delivery growth
  action App ledger slice, but it does not run growth actions, referral
  execution, expansion outreach, package-control, customer delivery, or
  material workflow controls.

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

## Local delivery outcome automation slice

- `WorkshopDeliveryOutcomeAutomationStore` persists App-owned delivery outcome
  automation records in `delivery-outcome-automations.json` after native
  revenue execution history, customer-safe service lifecycle status, and a
  timing-aware renewal receipt all exist.
- `WorkshopDeliveryOutcomeAutomationReceiptStore` persists customer-visible
  delivery outcome automation receipts in
  `delivery-outcome-automation-receipts.json` after the full chain is safe for
  Webportal export.
- The automation chain requires direct native execution readiness, ARA operator
  review, customer-visible delivery result evidence, EPOCH timing-provider-only
  status, WORKSHOP calendar ownership false, MONITOR workflow exposure false,
  payment live false, and no immediate EPOCH timing request requirement.
- The WORKSHOP App renders Delivery Outcome Automation as operator product
  state. The Webportal can import the receipt export and render only
  customer-safe status, message, and next action. MONITOR may report evidence,
  but it does not run delivery outcome automation.

## Local account-growth automation slice

- `WorkshopAccountGrowthAutomationStore` persists App-owned account-growth
  automation records in `account-growth-automations.json` after a customer-safe
  delivery outcome automation receipt exists.
- `WorkshopAccountGrowthAutomationReceiptStore` persists customer-visible
  account-growth automation receipts in
  `account-growth-automation-receipts.json` after the retention, referral,
  repeat-service, conversion, and expansion chain is safe for Webportal export.
- The account-growth chain requires customer-safe delivery evidence, ARA
  operator review, renewal readiness, retention readiness, referral readiness,
  growth-plan readiness, conversion readiness, expansion-request readiness,
  EPOCH timing-provider-only status, WORKSHOP calendar ownership false, MONITOR
  workflow exposure false, payment live false, and no immediate EPOCH timing
  request requirement.
- The WORKSHOP App renders Account Growth Automation as operator product
  state. The Webportal can import the receipt export and render only
  customer-safe repeat-service or referral follow-up status. MONITOR may report
  development evidence, but it does not run account-growth automation.

## Local Webportal offer launch receipt import slice

- The WORKSHOP Webportal can import the Avalonia App-owned
  `offer-launch-readiness-receipts.json` export.
- The import normalizer accepts only `offer-launch-readiness` receipts that are
  customer-safe, Webportal-ready, EPOCH-timing-provider-only, AI-neutral,
  payment-disabled, provider-disabled, under-19 compatibility guarded, and
  native-execution-ready.
- The normalizer rejects receipts that expose App-internal launch readiness ids,
  offer experiment ids, marketing channel experiment ids, revenue receipt ids,
  delivery log ids, launch scores, proof/market/labor/cash scores, or operator
  next actions.
- The Webportal renders only the customer-safe offer label, price label, status,
  customer message, and next action. Launch scoring and operator controls remain
  inside the WORKSHOP App; MONITOR may report development evidence only.

## Local Webportal launch offer intake action slice

- The WORKSHOP Webportal can now turn a customer-safe launch readiness receipt
  into an App-owned offer launch intake action and customer-safe intake receipt.
- The action factory accepts only `offer-launch-readiness` receipts that are
  customer-safe, Webportal-ready, EPOCH-timing-provider-only, payment-disabled,
  provider-disabled, AI-neutral, and not MONITOR-exposed.
- Adult and business intake requests queue normally. Under-19 intake requests
  are routed through compatibility fit review while the offer still records the
  under-19 guard policy.
- The customer-safe receipt exposes only request status, service lane, package,
  offer label, price label, message, next action, EPOCH timing-provider-only
  state, and no live payment/provider state. It does not expose launch
  readiness ids, offer experiment ids, marketing channel ids, launch scores, or
  operator next action.
- The App renders the internal intake action and safe receipt. The Webportal
  renders only the safe intake status and remains a customer/request surface,
  not an admin console or MONITOR workflow.

## Local Webportal launch offer intake receipt import slice

- The WORKSHOP Webportal can now import the Avalonia App-owned
  `offer-launch-intake-receipts.json` export after launch offer intake has been
  handled inside the WORKSHOP App.
- The import normalizer accepts only `offer-launch-intake` receipts that are
  customer-safe, Webportal-ready, App-owned intake state, EPOCH-timing-provider
  only, AI-neutral for Japan-facing copy, payment-disabled, provider-disabled,
  under-19 compatibility guarded, and native-execution-ready.
- The normalizer rejects receipts that expose source receipt provenance, launch
  readiness ids, offer experiment ids, marketing channel experiment ids,
  revenue receipt ids, delivery log ids, launch scores, proof/market/labor/cash
  scores, or operator next actions.
- The Webportal renders only the customer-safe request status, service lane,
  offer label, price label, customer message, next action, and timing-provider
  boundary. App provenance, launch scoring, provider go-live, payment controls,
  and operator controls remain inside the WORKSHOP App; MONITOR may report
  development evidence only.

## Local Avalonia launch offer intake slice

- Native C now defines `WorkshopOfferLaunchIntakeAction` and
  `WorkshopOfferLaunchIntakeReceipt`, validating the same boundary as the
  Webportal path: App-owned intake action first, customer-safe receipt second.
- The Avalonia App persists `offer-launch-intake-actions.json` and
  `offer-launch-intake-receipts.json` after a customer-safe launch readiness
  receipt exists. The action keeps source receipt provenance and operator next
  action inside the App; the receipt omits source receipt ids, launch readiness
  ids, offer experiment ids, marketing channel ids, launch scores, and operator
  controls.
- Adult intake queues normally. Under-19 intake is represented as a
  compatibility-gate path. Payment, provider go-live, live provider state,
  AI-forward copy, WORKSHOP calendar ownership, and MONITOR workflow exposure
  remain disabled.

## Local offer launch activation slice

- Native C now validates `WorkshopOfferLaunchActivation` as App-internal
  launch activation state and `WorkshopOfferLaunchActivationReceipt` as the
  customer-safe activation export.
- The Avalonia App persists `offer-launch-activations.json` after a
  customer-safe launch intake receipt is ready, then persists
  `offer-launch-activation-receipts.json` for Webportal-safe activation
  status.
- The static App mirrors the same chain with activation counters and internal
  activation/receipt lists so offer launch readiness can move through intake
  into service setup without becoming a MONITOR workflow.
- The Webportal can import only App-exported
  `offer-launch-activation-receipts.json` records. The normalizer rejects
  intake receipt provenance, activation ids, launch readiness ids, experiment
  ids, marketing channel ids, launch scores, provider go-live flags, payment
  flags, and operator controls before rendering customer-safe activation
  status.
- EPOCH remains timing-provider-only. WORKSHOP owns service setup and launch
  activation state. MONITOR may report implementation evidence only; it does
  not run launch activation, provider setup, payment setup, or service
  delivery.

## Local offer launch service setup slice

- Native C now validates `WorkshopOfferLaunchServiceSetup` as App-internal
  launch service setup state and `WorkshopOfferLaunchServiceSetupReceipt` as
  the customer-safe setup export.
- The Avalonia App persists `offer-launch-service-setups.json` after a
  customer-safe launch activation receipt is ready, then persists
  `offer-launch-service-setup-receipts.json` for Webportal-safe setup status.
- The static App mirrors the same chain with service setup counters and
  internal setup/receipt lists so offer launch work can move from readiness to
  intake, activation, and delivery workspace setup without becoming a MONITOR
  workflow.
- The Webportal can import only App-exported
  `offer-launch-service-setup-receipts.json` records. The normalizer rejects
  activation receipt provenance, setup ids, activation ids, intake provenance,
  launch readiness ids, experiment ids, marketing channel ids, launch scores,
  provider go-live flags, payment flags, and operator controls before rendering
  customer-safe setup status.
- EPOCH remains timing-provider-only. WORKSHOP owns service setup and delivery
  workspace preparation. MONITOR may report implementation evidence only; it
  does not run service setup, provider setup, payment setup, or service
  delivery.

## Local offer launch delivery workspace slice

- Native C now validates `WorkshopOfferLaunchDeliveryWorkspace` as
  App-internal delivery workspace state and
  `WorkshopOfferLaunchDeliveryWorkspaceReceipt` as the customer-safe workspace
  export.
- The Avalonia App persists `offer-launch-delivery-workspaces.json` after a
  customer-safe launch service setup receipt is ready, then persists
  `offer-launch-delivery-workspace-receipts.json` for Webportal-safe workspace
  status.
- The static App mirrors the same chain with delivery workspace counters and
  internal workspace/receipt lists so offer launch work can move from readiness
  to intake, activation, setup, and delivery workspace readiness without
  becoming a MONITOR workflow.
- The Webportal can import only App-exported
  `offer-launch-delivery-workspace-receipts.json` records. The normalizer
  rejects setup receipt provenance, workspace ids, setup ids, activation
  provenance, intake provenance, launch readiness ids, experiment ids,
  marketing channel ids, launch scores, provider go-live flags, payment flags,
  and operator controls before rendering customer-safe workspace status.
- EPOCH remains timing-provider-only. WORKSHOP owns delivery workspace
  activation and service preparation. MONITOR may report implementation
  evidence only; it does not run workspace setup, provider setup, payment setup,
  or service delivery.

## Local offer launch delivery kickoff slice

- Native C now validates `WorkshopOfferLaunchDeliveryKickoff` as App-internal
  delivery kickoff state and `WorkshopOfferLaunchDeliveryKickoffReceipt` as the
  customer-safe first-milestone kickoff export.
- The Avalonia App persists `offer-launch-delivery-kickoffs.json` after a
  customer-safe launch delivery workspace receipt is ready, then persists
  `offer-launch-delivery-kickoff-receipts.json` for Webportal-safe kickoff
  status.
- The static App mirrors the same chain with delivery kickoff counters and
  internal kickoff/receipt lists so offer launch work can move from readiness
  to intake, activation, setup, delivery workspace readiness, and delivery
  kickoff without becoming a MONITOR workflow.
- The Webportal can import only App-exported
  `offer-launch-delivery-kickoff-receipts.json` records. The normalizer rejects
  workspace receipt provenance, kickoff ids, workspace ids, setup ids,
  activation provenance, intake provenance, launch readiness ids, experiment
  ids, marketing channel ids, launch scores, provider go-live flags, payment
  flags, live-provider flags, and operator controls before rendering
  customer-safe first-milestone kickoff status.
- EPOCH remains timing-provider-only. WORKSHOP owns delivery kickoff and
  service preparation. MONITOR may report implementation evidence only; it does
  not run kickoff, provider setup, payment setup, or service delivery.

## Local offer launch delivery milestone slice

- Native C now validates `WorkshopOfferLaunchDeliveryMilestone` as
  App-internal first-delivery milestone state and
  `WorkshopOfferLaunchDeliveryMilestoneReceipt` as the customer-safe first
  milestone status export.
- The Avalonia App persists `offer-launch-delivery-milestones.json` after a
  customer-safe launch delivery kickoff receipt is ready, then persists
  `offer-launch-delivery-milestone-receipts.json` for Webportal-safe first
  milestone status.
- The static App mirrors the same chain with delivery milestone counters and
  internal milestone/receipt lists so offer launch work can move from readiness
  to intake, activation, setup, delivery workspace, kickoff, and first milestone
  without becoming a MONITOR workflow.
- The Webportal can import only App-exported
  `offer-launch-delivery-milestone-receipts.json` records. The normalizer
  rejects kickoff receipt provenance, milestone ids, kickoff ids, workspace ids,
  setup ids, activation provenance, intake provenance, launch readiness ids,
  experiment ids, marketing channel ids, launch scores, provider go-live flags,
  payment flags, live-provider flags, and operator controls before rendering
  customer-safe first-milestone status.
- EPOCH remains timing-provider-only. WORKSHOP owns first-milestone delivery
  state and service preparation. MONITOR may report implementation evidence
  only; it does not run milestone delivery, provider setup, payment setup, or
  service delivery.

## Local offer launch delivery outcome slice

- Native C now validates `WorkshopOfferLaunchDeliveryOutcome` as
  App-internal first-delivery outcome state and
  `WorkshopOfferLaunchDeliveryOutcomeReceipt` as the customer-safe delivery
  outcome status export.
- The Avalonia App persists `offer-launch-delivery-outcomes.json` after a
  customer-safe launch delivery milestone receipt is ready, then persists
  `offer-launch-delivery-outcome-receipts.json` for Webportal-safe outcome and
  follow-up/renewal status.
- The static App mirrors the same chain with delivery outcome counters and
  internal outcome/receipt lists so offer launch work can move from readiness
  through intake, activation, setup, delivery workspace, kickoff, first
  milestone, and outcome review without becoming a MONITOR workflow.
- The Webportal can import only App-exported
  `offer-launch-delivery-outcome-receipts.json` records. The normalizer rejects
  milestone receipt provenance, outcome ids, milestone ids, kickoff ids,
  workspace ids, setup ids, activation provenance, intake provenance, launch
  readiness ids, experiment ids, marketing channel ids, launch scores, provider
  go-live flags, payment flags, live-provider flags, and operator controls
  before rendering customer-safe outcome status.
- EPOCH remains timing-provider-only. WORKSHOP owns delivery outcome and
  follow-up/renewal review. MONITOR may report implementation evidence only; it
  does not run outcome review, provider setup, payment setup, or service
  delivery.

## Local offer launch delivery follow-up slice

- Native C now validates `WorkshopOfferLaunchDeliveryFollowUp` as
  App-internal post-outcome follow-up, renewal, and referral readiness state
  and `WorkshopOfferLaunchDeliveryFollowUpReceipt` as the customer-safe
  follow-up status export.
- The Avalonia App persists `offer-launch-delivery-follow-ups.json` after a
  customer-safe delivery outcome receipt is ready, then persists
  `offer-launch-delivery-follow-up-receipts.json` for Webportal-safe follow-up,
  renewal, and referral status.
- The static App mirrors the same chain with delivery follow-up counters and
  internal follow-up/receipt lists so offer launch work can move from readiness
  through intake, activation, setup, delivery workspace, kickoff, milestone,
  outcome, and renewal/referral review without becoming a MONITOR workflow.
- The Webportal can import only App-exported
  `offer-launch-delivery-follow-up-receipts.json` records. The normalizer
  rejects outcome receipt provenance, follow-up ids, outcome ids, milestone
  provenance, kickoff/workspace/setup/activation/intake provenance, launch
  readiness ids, experiment ids, marketing channel ids, launch scores, provider
  go-live flags, payment flags, live-provider flags, MONITOR/control flags, and
  operator controls before rendering customer-safe follow-up status.
- EPOCH remains timing-provider-only. WORKSHOP owns follow-up, renewal, and
  referral review. MONITOR may report implementation evidence only; it does not
  run follow-up execution, provider setup, payment setup, or service delivery.

## Local offer launch delivery growth-plan slice

- Native C now validates `WorkshopOfferLaunchDeliveryGrowthPlan` as
  App-internal repeat-service, renewal, and referral growth-planning state and
  `WorkshopOfferLaunchDeliveryGrowthPlanReceipt` as the customer-safe
  growth-plan status export.
- The Avalonia App persists `offer-launch-delivery-growth-plans.json` after a
  customer-safe launch delivery follow-up receipt is ready, then persists
  `offer-launch-delivery-growth-plan-receipts.json` for Webportal-safe
  repeat-service, renewal, and referral status.
- The static App mirrors the same chain with delivery growth-plan counters and
  internal growth-plan/receipt lists so offer launch work can move from
  readiness through intake, activation, setup, delivery workspace, kickoff,
  milestone, outcome, follow-up, and repeat-service planning without becoming a
  MONITOR workflow.
- The Webportal can import only App-exported
  `offer-launch-delivery-growth-plan-receipts.json` records. The normalizer
  rejects follow-up receipt provenance, growth-plan ids, follow-up ids, outcome
  provenance, milestone/kickoff/workspace/setup/activation/intake provenance,
  launch readiness ids, experiment ids, marketing channel ids, launch scores,
  provider go-live flags, payment flags, live-provider flags, MONITOR/control
  flags, and operator controls before rendering customer-safe growth-plan
  status.
- EPOCH remains timing-provider-only. WORKSHOP owns growth planning,
  repeat-service, renewal, and referral review. MONITOR may report
  implementation evidence only; it does not run growth-plan execution, provider
  setup, payment setup, or service delivery.

## Local offer launch delivery growth-plan acceptance slice

- Native C now validates
  `WorkshopOfferLaunchDeliveryGrowthPlanAcceptance` as App-internal accepted
  repeat-service, renewal, or referral next-motion state and
  `WorkshopOfferLaunchDeliveryGrowthPlanAcceptanceReceipt` as the
  customer-safe acceptance status export.
- The Avalonia App persists
  `offer-launch-delivery-growth-plan-acceptances.json` after a customer-safe
  delivery growth-plan receipt is ready, then persists
  `offer-launch-delivery-growth-plan-acceptance-receipts.json` for
  Webportal-safe accepted next-service status.
- The static App mirrors the same chain with delivery growth-plan acceptance
  counters and internal acceptance/receipt lists so offer launch work can move
  from readiness through intake, activation, setup, delivery workspace,
  kickoff, milestone, outcome, follow-up, growth planning, and accepted
  repeat-service/referral/renewal motion without becoming a MONITOR workflow.
- The Webportal can import only App-exported
  `offer-launch-delivery-growth-plan-acceptance-receipts.json` records. The
  normalizer rejects growth-plan receipt provenance, acceptance ids,
  growth-plan ids, follow-up/outcome/milestone/kickoff/workspace/setup/
  activation/intake provenance, launch readiness ids, experiment ids,
  marketing channel ids, launch scores, provider go-live flags, payment flags,
  live-provider flags, MONITOR/control flags, and operator controls before
  rendering customer-safe acceptance status.
- EPOCH remains timing-provider-only. WORKSHOP owns growth-plan acceptance and
  next service motion preparation. MONITOR may report implementation evidence
  only; it does not run acceptance execution, provider setup, payment setup, or
  service delivery.

## Local offer launch delivery expansion-request slice

- Native C now validates
  `WorkshopOfferLaunchDeliveryExpansionRequest` as App-internal next-service
  request state after an accepted growth-plan motion and
  `WorkshopOfferLaunchDeliveryExpansionRequestReceipt` as the customer-safe
  expansion-request status export.
- The Avalonia App persists
  `offer-launch-delivery-expansion-requests.json` after a customer-safe
  delivery growth-plan acceptance receipt is ready, then persists
  `offer-launch-delivery-expansion-request-receipts.json` for Webportal-safe
  next-service request status.
- The static App mirrors the same chain with delivery expansion-request
  counters and internal request/receipt lists so offer launch work can move
  from readiness through intake, activation, setup, delivery workspace,
  kickoff, milestone, outcome, follow-up, growth planning, accepted next
  motion, and next-service request preparation without becoming a MONITOR
  workflow.
- The Webportal can import only App-exported
  `offer-launch-delivery-expansion-request-receipts.json` records. The
  normalizer rejects acceptance receipt provenance, expansion-request ids,
  growth-plan ids, follow-up/outcome/milestone/kickoff/workspace/setup/
  activation/intake provenance, launch readiness ids, experiment ids,
  marketing channel ids, launch scores, provider go-live flags, payment flags,
  live-provider flags, MONITOR/control flags, and operator controls before
  rendering customer-safe expansion-request status.
- EPOCH remains timing-provider-only. WORKSHOP owns expansion-request
  preparation and next service motion. MONITOR may report implementation
  evidence only; it does not run expansion-request execution, provider setup,
  payment setup, or service delivery.

## Local offer launch delivery expansion-workspace slice

- Native C now validates
  `WorkshopOfferLaunchDeliveryExpansionWorkspace` as App-internal next-service
  workspace state after a customer-safe expansion-request receipt and
  `WorkshopOfferLaunchDeliveryExpansionWorkspaceReceipt` as the customer-safe
  expansion-workspace status export.
- The Avalonia App persists
  `offer-launch-delivery-expansion-workspaces.json` after a customer-safe
  delivery expansion-request receipt is ready, then persists
  `offer-launch-delivery-expansion-workspace-receipts.json` for Webportal-safe
  next-service workspace status.
- The static App mirrors the same chain with delivery expansion-workspace
  counters and internal workspace/receipt lists, and the launch intake action
  flow now continues from expansion request into an App-owned expansion
  workspace before exposing only the customer-safe receipt.
- The Webportal can import only App-exported
  `offer-launch-delivery-expansion-workspace-receipts.json` records. The
  normalizer rejects expansion request receipt provenance, expansion workspace
  ids, expansion request ids, acceptance/growth/follow-up/outcome/milestone/
  kickoff/workspace/setup/activation/intake provenance, launch readiness ids,
  experiment ids, marketing channel ids, launch scores, provider go-live
  flags, payment flags, live-provider flags, MONITOR/control flags, and
  operator controls before rendering customer-safe expansion-workspace status.
- EPOCH remains timing-provider-only. WORKSHOP owns expansion-workspace
  preparation and next-service delivery planning. MONITOR may report
  implementation evidence only; it does not run expansion-workspace execution,
  provider setup, payment setup, or service delivery.

## Local offer launch delivery expansion-kickoff slice

- Native C now validates
  `WorkshopOfferLaunchDeliveryExpansionKickoff` as App-internal next-service
  kickoff state after a customer-safe expansion-workspace receipt and
  `WorkshopOfferLaunchDeliveryExpansionKickoffReceipt` as the customer-safe
  expansion-kickoff status export.
- The Avalonia App persists
  `offer-launch-delivery-expansion-kickoffs.json` after a customer-safe
  delivery expansion-workspace receipt is ready, then persists
  `offer-launch-delivery-expansion-kickoff-receipts.json` for Webportal-safe
  next-service kickoff status.
- The static App mirrors the same chain with delivery expansion-kickoff
  counters and internal kickoff/receipt lists, and the launch intake action
  flow now continues from expansion workspace into an App-owned expansion
  kickoff before exposing only the customer-safe receipt.
- The Webportal can import only App-exported
  `offer-launch-delivery-expansion-kickoff-receipts.json` records. The
  normalizer rejects expansion workspace receipt provenance, expansion kickoff
  ids, expansion workspace ids, expansion request ids, acceptance/growth/
  follow-up/outcome/milestone/kickoff/workspace/setup/activation/intake
  provenance, launch readiness ids, experiment ids, marketing channel ids,
  launch scores, provider go-live flags, payment flags, live-provider flags,
  MONITOR/control flags, and operator controls before rendering customer-safe
  expansion-kickoff status.
- EPOCH remains timing-provider-only. WORKSHOP owns expansion-kickoff
  preparation and next-service delivery execution readiness. MONITOR may
  report implementation evidence only; it does not run expansion-kickoff
  execution, provider setup, payment setup, or service delivery.

## Local offer launch delivery expansion-milestone slice

- Native C now validates
  `WorkshopOfferLaunchDeliveryExpansionMilestone` as App-internal
  next-service milestone state after a customer-safe expansion-kickoff receipt
  and `WorkshopOfferLaunchDeliveryExpansionMilestoneReceipt` as the
  customer-safe expansion-milestone status export.
- The Avalonia App persists
  `offer-launch-delivery-expansion-milestones.json` after a customer-safe
  delivery expansion-kickoff receipt is ready, then persists
  `offer-launch-delivery-expansion-milestone-receipts.json` for
  Webportal-safe next-service milestone status.
- The static App mirrors the same chain with delivery expansion-milestone
  counters and internal milestone/receipt lists, and the launch intake action
  flow now continues from expansion kickoff into an App-owned expansion
  milestone before exposing only the customer-safe receipt.
- The Webportal can import only App-exported
  `offer-launch-delivery-expansion-milestone-receipts.json` records. The
  normalizer rejects expansion-kickoff receipt provenance, expansion-milestone
  ids, expansion-workspace ids, expansion-request ids, acceptance/growth/
  follow-up/outcome/milestone/kickoff/workspace/setup/activation/intake
  provenance, launch readiness ids, experiment ids, marketing channel ids,
  launch scores, provider go-live flags, payment flags, live-provider flags,
  MONITOR/control flags, and operator controls before rendering customer-safe
  expansion-milestone status.
- EPOCH remains timing-provider-only. WORKSHOP owns expansion-milestone
  delivery and next-service execution status. MONITOR may report
  implementation evidence only; it does not run expansion-milestone execution,
  provider setup, payment setup, or service delivery.

## Local offer launch delivery expansion-outcome slice

- Native C now validates
  `WorkshopOfferLaunchDeliveryExpansionOutcome` as App-internal
  next-service outcome state after a customer-safe expansion-milestone receipt
  and `WorkshopOfferLaunchDeliveryExpansionOutcomeReceipt` as the
  customer-safe expansion-outcome status export.
- The Avalonia App persists
  `offer-launch-delivery-expansion-outcomes.json` after a customer-safe
  delivery expansion-milestone receipt is ready, then persists
  `offer-launch-delivery-expansion-outcome-receipts.json` for
  Webportal-safe next-service outcome status.
- The static App mirrors the same chain with delivery expansion-outcome
  counters and internal outcome/receipt lists, and the launch intake action
  flow now continues from expansion milestone into an App-owned expansion
  outcome before exposing only the customer-safe receipt.
- The Webportal can import only App-exported
  `offer-launch-delivery-expansion-outcome-receipts.json` records. The
  normalizer rejects expansion-milestone receipt provenance, expansion-outcome
  ids, expansion-milestone ids, expansion-kickoff/workspace/request ids,
  acceptance/growth/follow-up/outcome/milestone/kickoff/workspace/setup/
  activation/intake provenance, launch readiness ids, experiment ids,
  marketing channel ids, launch scores, provider go-live flags, payment flags,
  live-provider flags, MONITOR/control flags, and operator controls before
  rendering customer-safe expansion-outcome status.
- EPOCH remains timing-provider-only. WORKSHOP owns expansion-outcome delivery
  status and repeat-service, renewal, or referral review. MONITOR may report
  implementation evidence only; it does not run expansion-outcome execution,
  provider setup, payment setup, or service delivery.
