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

## Boundary Status

- WORKSHOP owns service requests, revenue delivery, customer-safe service
  status, CRM/ARA/ROI context, and revenue command execution.
- EPOCH remains timing-provider-only and does not own WORKSHOP service records.
- MONITOR remains development/control evidence only and does not run service or
  revenue workflows.
- Provider calls, payments, auth, ads, and customer notifications remain
  disabled.
