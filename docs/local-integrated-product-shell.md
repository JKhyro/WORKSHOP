# WORKSHOP Local Integrated Product Shell

## Status

Local branch: `codex/local-workshop-avalonia-integrated-product-shell`

Integrated source head: `8bd23f3`

This branch freezes the current WORKSHOP App/Webportal/native shell stack
before deeper revenue and delivery modules are added. It is local Git only; no
GitHub writeback, pull request, issue, live provider, payment, notification,
ad, auth, or public MONITOR exposure is part of this integration checkpoint.

## Integrated App State

- Native C app bridge snapshot and revenue command preview.
- Native revenue execution receipt for `approve-operator-reviewed-offer`.
- App-owned `revenue-execution-history.json` ledger for direct native execution
  receipts.
- App-owned `service-request-inbox.json` ledger for customer-safe Webportal
  service request intent.
- App-owned `service-to-revenue-command.json` ledger linking Webportal service
  inbox entries to native revenue execution history.
- Avalonia Revenue Command rendering for Webportal Service Inbox and Service To
  Native Command status.

## Next Local Product Slice

- `codex/local-workshop-avalonia-revenue-operations-board` builds the WORKSHOP
  Avalonia Revenue / Service Operations Board over the existing App-owned
  service inbox, service-command receipt, and native revenue execution history
  ledgers.
- The board is still local-only, customer-safe, operator-reviewed,
  EPOCH-timing-provider-only, MONITOR-off, and WORKSHOP-owned. It is not an
  EPOCH calendar surface and not a MONITOR development page.
- `codex/local-workshop-avalonia-service-status-feedback` adds the App-owned
  `customer-service-status.json` export ledger so linked service requests and
  native revenue execution history can become customer-safe Webportal status
  records without exposing MONITOR or granting WORKSHOP calendar ownership.
- `codex/local-workshop-webportal-service-status-reader` lets the WORKSHOP
  Webportal import that App-owned `customer-service-status.json` export and
  render only customer-safe, Webportal-ready, EPOCH-timing-provider-only,
  ARA-reviewed, MONITOR-off service status fields.
- `codex/local-workshop-avalonia-service-lifecycle-actions` adds App/Webportal
  service lifecycle actions so scope-change/cancel/material-update/follow-up
  requests are queued as customer-safe WORKSHOP product state, linked to local
  native revenue command evidence, and exported back through
  `service-lifecycle-status.json` without EPOCH calendar ownership or MONITOR
  workflow exposure.
- `codex/local-workshop-epoch-revised-calendar-handoff` adds EPOCH revised
  timing context consumption as a WORKSHOP service-status loop. The App stores
  `epoch-revised-calendar-timing.json`,
  `revised-calendar-timing-receipts.json`, and
  `revised-calendar-timing-status.json`; the Webportal renders only
  customer-safe timing context. EPOCH keeps conversion, recurrence, availability,
  and schedule authority.
- `codex/local-workshop-import-epoch-revised-timing-export` makes that loop
  import EPOCH App's own `epoch-revised-calendar-timing.json` export when it is
  present and safe. WORKSHOP records the payload as service timing context only;
  EPOCH remains the calendar, revised-calendar, and availability authority.
- `codex/local-workshop-timing-aware-followup-renewal` adds timing-aware
  service follow-up and renewal receipts derived from safe EPOCH timing context.
  WORKSHOP owns the service follow-up and customer-safe renewal receipt only;
  EPOCH retains calendar, revised-calendar, recurrence, availability, and timing
  authority.
- `codex/local-workshop-delivery-outcome-app-ledgers` adds App-owned delivery
  outcome automation records and customer-safe automation receipts derived from
  native revenue execution history, service lifecycle status, and timing-aware
  renewal context. The Webportal may import the receipt export; EPOCH remains
  timing-provider-only and MONITOR remains development evidence only.
- `codex/local-workshop-account-growth-app-ledgers` adds App-owned
  account-growth automation records and customer-safe automation receipts
  derived from reviewed delivery outcome automation receipts. WORKSHOP owns the
  retention, referral, repeat-service, conversion, and expansion follow-up
  state; the Webportal imports only customer-safe receipt exports, EPOCH remains
  timing-provider-only, and MONITOR remains development evidence only.
- `codex/local-workshop-ara-review-app-ledgers` adds App-owned ARA review queue,
  operator decision, and customer-safe status receipt ledgers. WORKSHOP owns the
  review gate inside the App; the Webportal imports only customer-safe review
  status receipts, EPOCH remains timing-provider-only, and MONITOR remains
  development evidence only.
- `codex/local-workshop-ara-method-materialization-ledgers` adds App-owned ARA
  method materialization records and customer-safe materialization receipts
  derived from approved review decisions. WORKSHOP owns the reusable method and
  material asset step inside the App; the Webportal imports only customer-safe
  receipt status, EPOCH remains timing-provider-only, and MONITOR remains
  development evidence only.
- `codex/local-workshop-service-material-reuse-ledgers` adds App-owned service
  material reuse records and customer-safe reuse receipts derived from reviewed
  ARA materialization receipts. WORKSHOP owns the package-support and
  lower-labor material reuse step inside the App; the Webportal imports only
  customer-safe reuse receipt status, EPOCH remains timing-provider-only, and
  MONITOR remains development evidence only.
- `codex/local-workshop-package-delivery-checklist-ledgers` adds App-owned
  package delivery checklist records and customer-safe checklist receipts
  derived from reusable service material support. WORKSHOP owns the repeatable
  package delivery checklist inside the App; the Webportal imports only
  customer-safe checklist receipt status, EPOCH remains timing-provider-only,
  and MONITOR remains development evidence only.
- `codex/local-workshop-package-delivery-checklist-automation` adds App-owned
  package delivery checklist automation records and customer-safe automation
  receipts derived from reviewed package delivery checklists. WORKSHOP owns the
  repeatable package delivery automation inside the App; the Webportal imports
  only customer-safe automation receipt status, EPOCH remains
  timing-provider-only, and MONITOR remains development evidence only.
- `codex/local-workshop-package-delivery-execution-ledgers` adds App-owned
  package delivery execution records and customer-safe execution receipts
  derived from reviewed package delivery automation. WORKSHOP owns the
  repeatable package delivery execution inside the App; the Webportal imports
  only customer-safe execution receipt status, EPOCH remains
  timing-provider-only, and MONITOR remains development evidence only.
- `codex/local-workshop-package-delivery-followup-renewal-loop` adds App-owned
  package delivery follow-up/renewal records and customer-safe follow-up
  receipts derived from package delivery execution receipts. WORKSHOP owns the
  repeat and renewal motion inside the App; the Webportal imports only
  customer-safe follow-up/renewal receipt status, EPOCH remains
  timing-provider-only, and MONITOR remains development evidence only.
- `codex/local-workshop-package-delivery-quality-outcome-loop` adds App-owned
  package delivery quality/outcome records and customer-safe outcome receipts
  derived from execution receipts plus follow-up/renewal receipts. WORKSHOP owns
  the quality review, service-improvement signal, and outcome loop inside the
  App; the Webportal imports only customer-safe quality/outcome receipt status,
  EPOCH remains timing-provider-only, and MONITOR remains development evidence
  only.
- `codex/local-workshop-package-delivery-account-growth-linkage` adds App-owned
  package delivery account-growth linkage records and customer-safe
  account-growth receipts derived from reviewed package delivery
  quality/outcome receipts. WORKSHOP owns the repeat-service, retention,
  referral, and expansion linkage inside the App; the Webportal imports only
  customer-safe account-growth receipt status, EPOCH remains
  timing-provider-only, and MONITOR remains development evidence only.
- `codex/local-workshop-package-delivery-retention-reporting` adds App-owned
  package delivery retention-reporting records and customer-safe
  retention-report receipts derived from the internal account-growth linkage,
  the customer-safe account-growth receipt, and the matched quality/outcome
  receipt. WORKSHOP owns the repeat-service/referral/expansion reporting path
  inside the App; the Webportal imports only customer-safe retention-report
  receipt status, EPOCH remains timing-provider-only, and MONITOR remains
  development evidence only.
- `codex/local-workshop-package-delivery-growth-actions` adds App-owned package
  delivery growth-action records and customer-safe growth-action receipts
  derived from ready package delivery retention reporting. WORKSHOP owns the
  repeat-service, referral, and expansion action path inside the App; the
  Webportal imports only customer-safe growth-action receipt status, EPOCH
  remains timing-provider-only, and MONITOR remains development evidence only.
- `codex/local-workshop-app-homepage-workflow-priority-hierarchy-polish`
  elevates the App's primary active workflow navigation before the dense
  operating ledger. This is App-only hierarchy/readability work: no Webportal
  semantics, revenue logic, EPOCH timing ownership, payment/auth/provider, or
  MONITOR workflow exposure changes.
- `codex/local-workshop-offer-launch-readiness` adds App-owned offer launch
  readiness records and customer-safe launch-ready offer receipts. WORKSHOP
  ranks time-to-cash, labor leverage, proof readiness, and channel posture
  inside the App; the Webportal receives only requestable customer-safe offer
  status. EPOCH remains timing-provider-only, and payment/auth/provider and
  MONITOR workflow exposure stay disabled.
- `codex/local-workshop-avalonia-offer-launch-readiness` moves offer launch
  readiness into the Native C/Avalonia App path. Native C now validates
  App-internal launch readiness separately from customer-safe launch receipts,
  and the Avalonia App persists `offer-launch-readiness.json` plus
  `offer-launch-readiness-receipts.json` from native revenue command evidence.
  Launch scores and operator next action stay App-only; the receipt remains
  customer-safe, AI-neutral, EPOCH-timing-provider-only, MONITOR-off, and
  payment/provider-disabled.
- `codex/local-workshop-webportal-offer-launch-receipt-import` lets the
  WORKSHOP Webportal import App-owned `offer-launch-readiness-receipts.json`
  exports. The Webportal normalizer accepts only customer-safe, AI-neutral,
  EPOCH-timing-provider-only launch receipts and rejects launch readiness ids,
  experiment ids, marketing channel ids, revenue/delivery ids, launch scores,
  and operator next actions before rendering customer-safe offer status.

## Boundary Status

- WORKSHOP owns service requests, revenue delivery, customer-safe service
  status, CRM/ARA/ROI context, and revenue command execution.
- EPOCH remains timing-provider-only and does not own WORKSHOP service records.
- MONITOR remains development/control evidence only and does not run service or
  revenue workflows.
- Provider calls, payments, auth, ads, and customer notifications remain
  disabled.
