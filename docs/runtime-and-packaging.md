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
