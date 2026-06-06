# WORKSHOP Offer Review Execution

WORKSHOP now has enough internal analytics, research promotion, service page,
marketing channel, ROI, labor, and offer action packet evidence to support a
bounded owner-reviewed offer test. This workflow records the review decision
and benchmark baseline without mutating App ledgers, enabling payment/provider
automation, or exposing raw evidence to Webportal.

## Commands

Create an action packet:

```powershell
npm run offer:packet -- --offer-id offer-experiment-submission-001 --out .\offer-packet.json
```

Record Jack owner-review when Jack has actually reviewed it. For dry-run
verification, use `--decision needs-revision` or `--decision park` rather than
pretending owner approval happened:

```powershell
npm run offer:review -- --packet .\offer-packet.json --decision approve-test --reason "Jack approved one bounded async-first offer test." --out .\offer-review.json
```

Create the benchmark baseline:

```powershell
npm run offer:benchmark -- --packet .\offer-packet.json --review .\offer-review.json --out .\offer-benchmark.json
```

Audit a browser proof manifest:

```powershell
npm run proof:audit -- --manifest D:\CITADEL\_control\product-surface-proofs\workshop-epoch-crm-final-20260607\proof-manifest.json
```

## Review Contract

The `workshop-offer-review-receipt` must prove:

- the input packet is a valid `workshop-offer-action-packet`;
- raw offer and marketing evidence remains App-owned/internal;
- payment, provider go-live, live provider, and MONITOR workflow exposure are
  disabled;
- EPOCH remains timing-provider-only;
- Japan copy mode remains `ai-neutral`;
- an approval emits customer-safe copy only as an owner-review candidate.

## Benchmark Contract

The `workshop-offer-benchmark` compares the selected offer against seeded offer
candidates. It records revenue rank, revenue per operator hour, low-labor score,
approval state, pending-review state, and boundary failures. The benchmark is
an internal baseline for one manual test only after Jack approval. It is not a
live listing, payment processor action, provider request, or Webportal
publication.

## Adult Submission Review Pack Manual Launch Checklist

Use this checklist only after Jack has actually reviewed the packet and
`npm run offer:packet`, `npm run offer:review`, and `npm run offer:benchmark`
all produce valid artifacts for
`offer-experiment-submission-001`.

- Confirm the reviewed service page is `service-page-submission-001`.
- Confirm the customer-safe copy candidate says what the customer receives and
  does not mention ROI, market research, marketing channel experiments, App
  ledger paths, or MONITOR evidence.
- Confirm the benchmark records revenue rank `1/2`, no boundary failures, and
  no live payment/provider automation.
- Publish or share only the customer-safe service page/intake copy manually.
- Keep raw research, offer experiment, benchmark, and review receipt artifacts
  App-owned/internal.
- Capture the first manual test result as a later WORKSHOP receipt before
  repeating, expanding, or automating the offer.

## Boundary

This execution layer is non-UI WORKSHOP functionality. It does not alter the
CRM shell, route grouping, relationship cue layout, native relationship map, or
EPOCH scheduler UI. It gives the operator a durable path from generated packet
to owner review to benchmark evidence while keeping Webportal customer-safe.
