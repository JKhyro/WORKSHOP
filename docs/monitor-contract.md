# WORKSHOP MONITOR Contract

## Route

WORKSHOP MONITOR is exposed by the CITADEL monitor generator at:

- `/workshop-monitor.html`
- `/workshop-dashboard.html`
- `/workshop-completion.html`
- `/workshop-scorecard.html`
- `/workshop-timeline.html`
- `/workshop-revenue-audit.html`
- `/workshop-receipts.html`
- `/workshop-delivery-log.html`
- `/workshop-search.html`
- `/workshop-template.html`
- WORKSHOP persona and team child routes matching the HERMES route pattern

Compatibility aliases may redirect `/workshop-work-audit.html` and
`/workshop-runner-log.html` to the canonical WORKSHOP-specific routes, but the
visible tree and focused page titles should use revenue/delivery language so
WORKSHOP does not appear to be the same operating surface as EPOCH.

## Data rule

WORKSHOP MONITOR must use WORKSHOP data only. It may clone HERMES structure,
routes, controls, and page layout, but it must not copy HERMES queue, Discord,
runner, receipt, or project records.

## App, Webportal, And MONITOR Placement

WORKSHOP has three distinct local surfaces:

- WORKSHOP App: `web/app/index.html`
- WORKSHOP Webportal: `web/webportal/index.html`
- WORKSHOP MONITOR: `/workshop-monitor.html`

Product UI belongs in the app and webportal. MONITOR belongs to operational
status, control, receipts, route health, timeline, and build-readiness evidence.
MONITOR must not become the customer portal, app dashboard, package catalog,
delivery desk, consulting/support desk, or CRM.

## Initial state

The current monitor state is empty/build-ready:

- structural personas exist
- queue is empty
- runner controls are visible but return a blocked/no-runner-wired response
- Summary, Scope, and Memory are WORKSHOP-specific

## Next wiring

Future work should add WORKSHOP-specific:

- service catalog queue
- intake/opportunity records
- package eligibility and compatibility gates
- submission review cycles
- cohort and subscription readiness records
- CRM opportunity qualification counts
- ARA-generated revenue packets and assignment-review health
- revenue outcome counts
- delivery result receipt counts
- review-completion counts
- customer account continuity counts
- renewal-ready counts
- customer follow-up counts
- retention-health counts
- referral-ready counts
- account-growth-plan counts
- growth follow-up receipt counts
- referral-conversion counts
- growth-acceptance counts
- expansion-service-request counts
- customer-safe conversion-status counts
- conversion receipt counts
- cohort capacity planning counts
- subscription planning counts
- cohort/subscription planning receipt counts
- cohort enrollment counts
- subscription lifecycle counts
- subscription lifecycle receipt counts
- cohort outcome report counts
- subscription renewal report counts
- customer-safe cohort progress event counts
- outcome renewal receipt counts
- EPOCH capacity/waitlist payload counts consumed as service planning status
- capacity/waitlist consumption counts for scarce delivery timing
- capacity/waitlist receipt counts
- EPOCH recurring-series payload counts consumed as service status
- recurring-series consumption counts for cohorts/subscriptions
- recurring-series receipt counts
- blocked or revision-required reporting counts
- revenue receipts
- runner scripts and safe-resume gates

MONITOR may report counts, readiness, review-required state, receipts, renewal
health, retention health, referral readiness, account-growth health, follow-up
health, referral conversion readiness, expansion request readiness, conversion
receipt health, and safe-access health for CRM/ARA/account-continuity workflows.
It may also report aggregate cohort capacity planning, subscription planning,
cohort/subscription planning receipt counts, cohort enrollment counts,
subscription lifecycle counts, and subscription lifecycle receipt counts as
WORKSHOP-owned revenue and delivery state. It may also report aggregate cohort
outcome report counts, subscription renewal report counts, customer-safe cohort
progress event counts, and outcome renewal receipt counts as WORKSHOP-owned
cohort/subscription reporting state. It may also report aggregate EPOCH recurring-series payload, consumption, and
receipt counts when WORKSHOP consumes customer-safe recurring schedule state for
cohort or subscription delivery. It may report aggregate EPOCH capacity/waitlist
payload, consumption, and receipt counts when WORKSHOP consumes customer-safe
availability pressure as service planning status. Availability windows, holds,
waitlist promotion decisions, reminders, recurrence rules, and calendar-provider
state remain EPOCH-owned.
It must not host the customer intake form, package catalog, CRM desk, ARA packet
editor, customer account dashboard, renewal console, referral console, growth
console, conversion console, customer result dashboard, outcome analytics
dashboard, subscription renewal console, cohort progress console, or service
delivery console.
