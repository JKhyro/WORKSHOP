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
actions. The customer-safe Webportal should show only service planning/review
status, result reports, and delivery result receipts, not ARA controls or
operator packet queues.

## Provider posture

Payment, identity, notification, analytics, and advertising providers remain
no-live-provider until adapter selection, credential handling, webhook policy,
privacy/legal review, and customer-visible behavior are explicitly approved.
