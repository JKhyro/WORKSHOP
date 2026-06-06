# WORKSHOP Research Promotion Decision

The research promotion decision tool records an owner-review decision for a
record that has already passed through `npm run research:queue`. It does not promote drafts by itself and does not mutate App ledgers, Webportal state, MONITOR artifacts, or customer-safe receipts.

Run:

```powershell
npm run research:decision -- --queue .\promotion-queue.json --record-id market-adult-test-prep-001 --decision accept-for-ledger-slice --reason "Source, segment, and boundary evidence are ready for a later ledger slice." --out .\promotion-decision.json
```

## Decisions

- `accept-for-ledger-slice`: the queue record is `ready-for-review`, remains
  App-owned/internal, and may be used in a later owner-reviewed App-ledger slice.
- `needs-evidence`: more source, segment, conversion, confidence, or observed
  gap evidence is required before promotion.
- `reject-boundary`: the draft is rejected because it attempted customer,
  Webportal, payment, provider, calendar, MONITOR, or AI-forward exposure.
- `park`: the draft is safe but not important enough to act on now.

## Boundary

An accepted decision still remains internal. It must preserve:

- `customerVisible: false`
- `webportalExportReady: false`
- `epochTimingProviderOnly: true`
- `workshopCalendarOwnership: false`
- `monitorWorkflowExposed: false`
- `paymentLiveEnabled: false`
- `providerGoLiveRequested: false`
- `liveProviderEnabled: false`
- `aiForwardCopy: false`
- `japanCopyMode: "ai-neutral"`

The output is a decision receipt, not an automatic ledger mutation. A later
implementation slice must still create the actual App-owned ledger promotion
and customer-safe Webportal export, if Jack approves it.
