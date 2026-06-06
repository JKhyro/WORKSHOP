# WORKSHOP Offer Action Packet

The offer action packet turns existing WORKSHOP analytics, service page, market evidence, marketing channel, ROI, and labor signals into a single owner-review packet for one offer. It does not publish the offer, does not mutate ledgers, does not enable payment/provider automation, and does not write Webportal state.

Run:

```powershell
npm run offer:packet -- --offer-id offer-experiment-submission-001 --markdown --out .\offer-action.md
```

The default offer is `offer-experiment-submission-001`, the Adult Submission Review Pack. The packet is meant to answer:

- Is the service page customer-safe?
- Is market evidence ready?
- Is ROI approved for a test?
- Is the marketing channel still App-owned/internal?
- What is the expected revenue per operator hour?
- What customer-safe copy candidate can Jack review?
- What internal evidence gaps still block action?

## Boundary

Raw offer experiments, market research, marketing channels, ROI records, labor estimates, promotion queue decisions, and operator next actions remain internal App-owned evidence. Webportal should receive only selected customer-safe service page and status fields after a later owner-approved slice.

The tool refuses to mark an action packet valid when payment, provider,
MONITOR workflow exposure, labor trap warnings, missing service pages, missing
market evidence, or missing ROI approval would make the offer unsafe to act on.
