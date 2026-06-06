# WORKSHOP Research Promotion Queue

WORKSHOP research and marketing drafts should be reviewed before they become
durable App-owned evidence. The promotion queue reads JSON packets created by
`npm run research:intake` and classifies them without mutating ledgers,
Webportal, MONITOR, or customer-safe receipts.

Run:

```powershell
npm run research:queue -- --file .\draft-market.json --file .\draft-channel.json
```

Use positional file paths if preferred:

```powershell
npm run research:queue -- .\draft-market.json .\draft-channel.json --out .\promotion-queue.json
```

## Queue Classifications

- `ready-for-review`: the draft is App-owned/internal and has enough evidence
  for owner review.
- `needs-source`: source, confidence, observed-gap, lead, or conversion
  evidence is not strong enough yet.
- `needs-segment-match`: the draft does not match an existing WORKSHOP market
  segment.
- `needs-service-page`: the marketing channel does not reference an existing
  WORKSHOP service page.
- `rejected-boundary`: the draft tries to expose raw internal research,
  Webportal export, MONITOR workflow, payment, provider, live-provider, calendar
  ownership, or AI-forward copy state.

## Boundary

This is an internal operator review queue. It does not promote drafts by itself,
does not edit `web/shared/workshop-data.js`, does not write App ledger stores,
and does not render anything in Webportal.

Every accepted draft remains:

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

The output includes `monitorEvidenceSummary` text for owner review evidence,
but MONITOR should only be updated after a real committed promotion or tooling
slice.
