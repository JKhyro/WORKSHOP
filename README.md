# WORKSHOP

WORKSHOP is the revenue and income-stream product bench. It is separate from
EPOCH and can consume EPOCH scheduling/calendar services when revenue work needs
appointments, availability, deadlines, reminders, or customer-safe schedule
status.

## Product boundary

WORKSHOP owns:

- education service packages, including EIKEN/test-prep submission work,
  cohorts, diagnostics, premium sprints, and subscription materials
- consulting, tech support, clerical/admin, database, CRM, management-system,
  and AI/dev service lanes
- service catalog, pricing, intake, lead conversion, delivery pipeline, and
  customer account strategy
- CRM opportunities, revenue packet assignment, operator review, and
  customer-safe service planning receipts
- revenue outcomes, delivery result receipts, and review-completion records
  that prove whether work is ready for customer-safe reporting
- lower-labor delivery models using submissions, cohorts, reusable materials,
  automation, and platform leverage
- ARA-assisted revenue production across MONITOR, SYMBIOSIS, FURYOKU, and other
  CITADEL projects

WORKSHOP does not own EPOCH calendar primitives or the revised 13-month calendar
contract. Those remain EPOCH-owned.

## Current artifacts

- `docs/product-boundary.md`
- `docs/revenue-operating-model.md`
- `docs/preserved-revenue-work-index.md`
- `docs/runtime-and-packaging.md`
- `docs/monitor-contract.md`
- `native/workshop_core.h`
- `native/workshop_core.c`
- `native/workshop_core_smoke.c`
- `web/index.html`: WORKSHOP surface directory.
- `web/app/index.html`: WORKSHOP App for internal revenue and delivery command.
- `web/webportal/index.html`: WORKSHOP Webportal for customer-safe service
  request and submission intake.
- `web/shared/workshop-data.js`, `web/shared/workshop.js`, and
  `web/shared/styles.css`: shared app/webportal data, renderer, and styling.

## Native C directive

WORKSHOP should preserve the Native C infrastructure directive for reusable
runtime contracts, delivery lifecycle transitions, customer-safe status events,
EPOCH bridge-readiness predicates, scoring, package eligibility, submission
review cycles, cohort/subscription readiness, compatibility routing, revenue
outcome reporting, delivery result receipts, and automation-safe operating
records. UI and web surfaces are clients over that core, not the durable source
of product truth.

The current local operating ledger includes package eligibility, compatibility
gates, submission review cycles, cohort/subscription plans, CRM opportunities,
ARA revenue packets, ARA assignment review records, delivery lifecycles, EPOCH
timing previews, revenue outcomes, delivery result receipts, review-completion
records, customer-safe status events, and receipts.

## MONITOR

WORKSHOP MONITOR is served from the CITADEL monitor system at
`/workshop-monitor.html`. It clones the HERMES MONITOR structure with
WORKSHOP-specific empty/build-ready data, not HERMES project data. Its visible
routes should use revenue/delivery labels, such as Revenue Audit and Delivery
Log, rather than generic EPOCH-style scheduling labels.

WORKSHOP MONITOR is not the WORKSHOP App and not the WORKSHOP Webportal.
Product UI belongs under `web/app` and `web/webportal`; MONITOR remains the
operational status/control surface.

The Webportal may show customer-safe delivery status, result reports,
transition receipts, and EPOCH handoff payload previews, but it must not expose
MONITOR or operator-only controls.
