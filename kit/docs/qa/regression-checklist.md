# Regression Checklist

Use this only for areas touched by the PR. It supports focused QA; it is not a mandatory bulk checklist.

- [ ] The stated user outcome works.
- [ ] Relevant core flows still work.
- [ ] No obvious navigation or UI regression in touched areas.
- [ ] No known data-loss or unhandled-error risk.
- [ ] Relevant existing tests and new acceptance checks pass.
- [ ] Auth, permissions, ownership, and privacy still hold where relevant.

Run broader checks only when `docs/qa/qa-plan.md` identifies the affected-surface trigger. Record skipped relevant items and why in the PR's QA section; use a separate report only when risk requires it.
