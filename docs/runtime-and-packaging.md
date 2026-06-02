# WORKSHOP Runtime And Packaging

## Native C stance

Native C is the default for reusable WORKSHOP operating logic:

- package eligibility
- service-state transitions
- submission/review status
- customer account history references
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

## Provider posture

Payment, identity, notification, analytics, and advertising providers remain
no-live-provider until adapter selection, credential handling, webhook policy,
privacy/legal review, and customer-visible behavior are explicitly approved.
