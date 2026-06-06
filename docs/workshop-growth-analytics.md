# WORKSHOP Growth Analytics

WORKSHOP has enough App-owned research, marketing, offer, ROI, labor, service
page, cohort, and subscription data to make a useful operator report without
adding another UI panel.

Run:

```powershell
npm run analytics
```

The report ranks the best next offer test, summarizes marketing channels,
shows revenue per operator hour, lists evidence gaps, and checks that raw
research/marketing/offer experiments stay App-owned rather than customer
visible.

For automation or MONITOR ingestion, use JSON:

```powershell
npm run analytics -- --json --out .\growth-analytics.json
```

Use `--out` for machine-readable files on Windows so Node writes UTF-8 directly.
Plain PowerShell redirection can change the file encoding.

## What It Measures

- Market evidence readiness and average confidence.
- Offer candidate revenue, operator minutes, revenue per operator hour, ROI
  approval, low-labor score, labor-trap risk, service page readiness, and linked
  marketing channel.
- Marketing channel leads, conversion rate, expected monthly revenue, operator
  minutes per lead, revenue per operator hour, linked service page readiness,
  and boundary safety.
- Subscription revenue potential from target subscriber counts.
- Boundary flags for internal-only market research, marketing channels, offer
  experiments, payment/provider disabled state, and MONITOR workflow hidden
  state.

## Current Reading

The current seed data ranks `Adult Submission Review Pack` as the best next
offer test. It has ROI approval, a ready customer-safe service page, a linked
direct-referral channel, high low-labor score, and no labor-trap warning.

The current evidence gap is `offer-experiment-systems-001`: it has a service
page and marketing channel, but ROI approval is still missing.

## Boundaries

This is an internal operator analytics tool. It does not change App/Webportal
layout, does not expose raw App-owned research or marketing data to Webportal,
does not enable provider or payment controls, and does not give WORKSHOP any
EPOCH calendar authority.
