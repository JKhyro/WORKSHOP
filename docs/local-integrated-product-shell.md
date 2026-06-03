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

## Boundary Status

- WORKSHOP owns service requests, revenue delivery, customer-safe service
  status, CRM/ARA/ROI context, and revenue command execution.
- EPOCH remains timing-provider-only and does not own WORKSHOP service records.
- MONITOR remains development/control evidence only and does not run service or
  revenue workflows.
- Provider calls, payments, auth, ads, and customer notifications remain
  disabled.
