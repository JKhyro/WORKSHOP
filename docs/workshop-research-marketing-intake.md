# WORKSHOP Research And Marketing Intake

WORKSHOP needs a safe way to capture new research sources and marketing channel
ideas without exposing raw internal evidence to the customer Webportal.

Run:

```powershell
npm run research:intake -- --kind market-research --source-label "Source name" --source-url https://example.com/source --segment small-business-systems --gap "Observed customer gap" --confidence 74 --evidence-ready
```

For a marketing channel draft:

```powershell
npm run research:intake -- --kind marketing-channel --channel local-partner-referral --service-page service-page-systems-001 --target-segment small-business-systems --leads 5 --conversion 20 --revenue 90000 --minutes-per-lead 18 --next-action "Draft one local partner referral message focused on admin cleanup outcomes."
```

Both modes emit JSON. Use `--out path.json` to write a UTF-8 file for review.

## What It Guarantees

The tool validates that draft records stay App-owned and internal:

- `customerVisible: false`
- `webportalExportReady: false`
- `paymentLiveEnabled: false`
- `providerGoLiveRequested: false`
- `liveProviderEnabled: false`
- `monitorWorkflowExposed: false`
- `japanCopyMode: "ai-neutral"`
- `aiForwardCopy: false`

Marketing channel drafts must also reference an existing WORKSHOP service page
and an existing market research segment. Market research drafts must use HTTPS
source URLs and a confidence score from 0 to 100.

## How To Use The Output

The output is a draft packet, not an automatic ledger mutation. Review it first,
then a later owner slice can promote it into `web/shared/workshop-data.js` or an
App-owned ledger store if the evidence is good enough.

The `monitorEvidenceSummary` field is plain text that can be copied into
WORKSHOP MONITOR evidence by the current owner lane after a real promotion or
commit. This tool does not mutate D-drive MONITOR artifacts by itself.
