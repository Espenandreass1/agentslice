---
name: run-qa-gate
description: Independently verify a formal PR with risk-based QA and record the decision in the PR.
---

# Run QA Gate

## Read

Verify the workspace and minimal preflight. Read the PR, changed files, QA plan, and at most one directly relevant prior report. Add a controlled spec only if it exists.

## Guardrails

- Use a separate QA agent when available; otherwise switch to a critical independent role.
- Confirm PR lane and policy-sensitive paths before selecting checks.
- `FAIL` blocks merge/release/deployment.

## Check selection

- Default: focused acceptance tests, relevant domain regression, lint, and typecheck for code.
- Broaden only for shared contracts, auth/ownership, database/RLS/migrations, public/commerce flows, build/framework/deploy configuration, or production release.
- Docs needs affected-guidance review, not an application test, build, or Vercel preview.

## Steps

1. Verify outcome, scope, lane, and risk against the PR and policy.
2. Run selected checks and state why they fit; list deferred checks and residual risk.
3. Record independent `PASS`, `PASS WITH NOTES`, or `FAIL` in the PR.
4. Create a separate QA report only when risk/auditability needs it, and link it from the PR.

## Output

Give result, compact checks, residual risk, and merge/release decision needed. Do not repeat the PR plan.
