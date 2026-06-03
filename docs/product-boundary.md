# WORKSHOP Product Boundary

## Purpose

WORKSHOP is the product bench for practical revenue and income streams.

It turns services, packages, consulting, support, administrative work, and
ARA-assisted production into trackable operating lanes. It should reduce live
labor by preferring submission work, cohorts, reusable materials, automation,
and platform leverage.

## WORKSHOP owns

- service catalog
- pricing and package rules
- lead intake and conversion strategy
- paid diagnostics
- EIKEN and non-EIKEN education offers
- async writing correction and submission packs
- cohorts and labs as revenue products
- subscription study materials and strategy assets
- consulting, tech support, clerical/admin, database, CRM, management-system,
  and automation services
- AI/dev and vibe-coding service offers, without requiring that phrase in
  customer-facing copy
- CRM opportunity qualification, lead-to-service planning, and service review
  receipts
- ARA revenue work generation, assignment, review, and outcome reporting
- revenue outcomes, delivery result receipts, and review-completion records
  that connect customer requests to service reporting
- customer account history, renewal opportunities, and follow-up state after
  service outcomes are reportable
- retention health, referral opportunities, and account-growth plans after
  account continuity has enough evidence to support repeatable next steps
- referral conversions, growth-plan acceptances, expansion service requests,
  customer-safe conversion status, and conversion receipts after a healthy
  account is ready to become repeat/referral revenue execution

## WORKSHOP does not own

- EPOCH's core calendar/scheduling engine
- Gregorian/revised-calendar conversion rules
- raw CITADEL MONITOR infrastructure
- HERMES project data
- production payment/identity/provider infrastructure until explicitly wired

## EPOCH integration

WORKSHOP may request EPOCH schedule services for:

- appointments
- cohorts
- availability windows
- submission/review deadlines
- reminders
- customer-safe schedule/status events

WORKSHOP may also prepare a local bridge preview that mirrors EPOCH
schedule-request and schedule-status fields. That preview remains a WORKSHOP
handoff record until EPOCH accepts the timing request.

EPOCH remains the schedule provider. WORKSHOP remains the revenue product.
WORKSHOP keeps the customer record, delivery lifecycle, submissions, receipts,
and operator next action even when a timing request is handed off.

## Surface Separation

WORKSHOP has three separate surface classes:

- App: internal product operations for revenue lanes, package readiness,
  submissions, consulting/support work, CRM opportunities, delivery queues,
  ARA packet assignment, operator review, revenue outcomes, result receipts,
  customer accounts, account history, renewals, retention health, referrals,
  account-growth plans, referral conversions, growth-plan acceptances,
  expansion service requests, conversion status events, conversion receipts,
  and follow-up actions.
- Webportal: customer-safe service request, document/submission intake, service
  path comparison, service planning/review status, result reports, service
  history, follow-up visibility, renewal status, retention status, referral
  path, growth plan status, referral conversion status, growth acceptance
  status, expansion request status, customer conversion status, conversion
  receipts, and delivery status.
- MONITOR: operational status/control only, following the HERMES structure with
  WORKSHOP data.

Revenue Audit, Revenue Receipts, Delivery Log, Revenue Search, and Offer
Template are WORKSHOP App/Webportal product modules. MONITOR may link to them
and report their development readiness, but it must not host the product
workflow itself.

Service Page Manager, Material Asset Library, and Marketing Channel Experiments
are also WORKSHOP App/Webportal product modules. The App owns public copy
records, reusable delivery assets, acquisition experiments, source evidence,
operator effort, and review gates. The Webportal may show customer-safe service
pages only. MONITOR may report readiness and receipts for these modules, but it
must not become the public service page editor, asset library, or marketing
experiment board.

Delivery outcome automation is also WORKSHOP-owned product state. It may combine
native revenue execution history, service lifecycle status, and timing-aware
renewal receipts into customer-safe follow-up receipts, but it does not create
calendar ownership, live payment behavior, MONITOR workflow exposure, or
provider integrations. If another appointment, deadline, or service window is
needed, WORKSHOP requests timing from EPOCH.

Account growth automation is also WORKSHOP-owned product state. It may derive
retention, referral, repeat-service, conversion, and expansion follow-up
receipts from reviewed delivery outcome automation receipts, but it does not
create calendar ownership, live payment behavior, MONITOR workflow exposure, or
provider integrations. The Webportal may show customer-safe next-step status
only; internal CRM strategy, market research, and operator controls remain in
the WORKSHOP App.

ARA review queue, operator review decision, and ARA review status receipt
ledgers are also WORKSHOP-owned product state. The App owns the review queue and
operator decision. The Webportal may show only customer-safe review status
receipts after review is complete. Packet ids, assignment ids, opportunity ids,
queue ids, decision ids, and operator controls remain inside the WORKSHOP App,
not the Webportal and not MONITOR.

ARA method materialization records and ARA materialization receipts are also
WORKSHOP-owned product state. The App owns the reusable method/material asset
step after operator review. The Webportal may show only customer-safe
materialization receipt status after human review, reusable method readiness,
and material asset readiness are complete. Packet ids, assignment ids,
opportunity ids, queue ids, decision ids, materialization ids, and operator
material controls remain inside the WORKSHOP App, not the Webportal and not
MONITOR.

Service material reuse records and service material reuse receipts are also
WORKSHOP-owned product state. The App owns the package-support and lower-labor
material reuse step after customer-safe method materialization. The Webportal
may show only customer-safe reuse receipt status after package support,
lower-labor reuse, human review, reusable method readiness, and material asset
readiness are complete. Packet ids, assignment ids, opportunity ids, queue ids,
decision ids, materialization ids, materialization receipt ids, operator next
actions, and package-control records remain inside the WORKSHOP App, not the
Webportal and not MONITOR.

Package delivery checklist records and package delivery checklist receipts are
also WORKSHOP-owned product state. The App owns the repeatable package delivery
checklist after reusable material support is ready. The Webportal may show only
customer-safe checklist receipt status after package support, lower-labor reuse,
human review, checklist readiness, and native execution readiness are complete.
Packet ids, assignment ids, opportunity ids, queue ids, decision ids,
materialization ids, materialization receipt ids, reuse ids, checklist ids,
material asset ids, operator next actions, checklist-control records, and
package-control records remain inside the WORKSHOP App, not the Webportal and
not MONITOR.

Calendar primitives, availability, reminders, recurrence, and revised calendar
contracts belong in EPOCH. WORKSHOP can request timing from EPOCH without
absorbing EPOCH's scheduling product.

WORKSHOP service pages may store `relatedEpochScheduleTemplateId` values for
customer-safe consultation, submission-return, or scope-review timing. Those ids
must point to real EPOCH-owned `EPOCH-SCHEDULE-TEMPLATE-*` records. WORKSHOP may
reference those templates, but it must not define schedule durations,
availability rules, recurrence, or template authority inside the service page.

Customer-safe portal status belongs to WORKSHOP when it describes service
delivery, submission handling, compatibility review, or delivery readiness.
Customer-safe timing confirmation belongs to EPOCH after the handoff is
accepted there.

## Japan-facing language

Japan-facing offer copy should sell the outcome, structure, review quality,
progress clarity, and professional support. It should not lead with AI
terminology unless a specific buyer context makes that useful.

## Local Git Authority

WORKSHOP uses Local Git as the active execution truth. GitHub, pull requests,
remote issues, and remote project writeback are out of scope unless the owner
explicitly changes this authority.
