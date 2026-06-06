# WORKSHOP State Discipline

WORKSHOP should not depend on chat history alone. Before a material local cycle,
run the repo-local state card:

```powershell
npm run state
```

The card reads the current git branch, latest commit, dirty status, and the
WORKSHOP MONITOR Summary, Scope, Memory, and Completion section files. It gives
a compact starting point for the next cycle.

## How To Use It

Use the state card before choosing owner mode, support mode, or blocked mode.

- Owner mode is allowed when the WORKSHOP worktree is clean or clearly owned by
  this thread, and the next task stays inside WORKSHOP scope.
- Support mode is required when another thread owns a dirty shared branch.
- Blocked mode is required when branch ownership, pair health, or writeback
  authority is ambiguous.

The card is a state intake, not permission to mutate. If the card says the
worktree is dirty, inspect ownership before editing.

## Scope Reminder

WORKSHOP owns revenue, product, service delivery, internal App ledgers,
customer-safe Webportal request/status/receipt surfaces, and local product
layout work when branch ownership is clear.

WORKSHOP does not own Enterprise MONITOR global structure, HERMES runtime or
rolebooks, SKILLING/SKILBASE promotion policy, GitHub writeback unless the user
asks for it, or EPOCH calendar/availability authority.

## CRM Layout Rule

Future WORKSHOP changes should improve a visible module or place new records
inside an existing module. Avoid adding another top-level ledger section unless
there is a clear product reason.

The current module direction is:

- WORKSHOP App: internal operator CRM.
- WORKSHOP Webportal: customer-safe request, status, delivery, offer, cohort,
  subscription, receipt, and help surfaces.
- EPOCH App/Webportal: timing and scheduling CRM/portal work only after branch
  ownership is clear.

## MONITOR Use

After a material local commit, update WORKSHOP MONITOR Summary, Memory, and
Completion through the owner lane for that cycle. If another thread owns
MONITOR closeout, report the needed evidence instead of editing the generated
artifacts.
