# QA Plan

QA is independent and returns `PASS`, `PASS WITH NOTES`, or `FAIL`. For ordinary PRs, record the decision in the PR's QA section; use `qa-report-template.md` only when risk or auditability needs a separate report.

## Default for code changes

- Focused acceptance tests for the PR's stated user outcome.
- Relevant domain regression.
- Lint and typecheck when the project provides them.
- Review changed files against PR scope and policy-sensitive areas.

This is the normal quality baseline. State selected checks, deferred checks, their reason, and residual risk in the PR.

## Require broader checks for

- shared contracts, public APIs, or cross-feature components;
- auth, identity, permissions, ownership, privacy, or security;
- database schema, migrations, RLS, persistence, or data integrity;
- public user-facing flows, payments, billing, checkout, pricing, or commerce;
- build/framework/deployment configuration, production-critical work, or a production release.

Run the relevant full suite, build, database/migration checks, integration tests, or production-safe verification available in the project. If a required check cannot run, make that a visible release risk.

## Lane expectations

- `docs`: review affected guidance. No application test, Vercel build, or preview is required. A canceled provider deployment can still be visible or consume capacity; it does not prove zero cost.
- `fast-bug`: reproduce, fix, and run the focused regression. Reclassify if more than the configured application-file limit or any sensitive path is needed.
- `standard-feature`: focused acceptance and relevant regression.
- `controlled-change`: use the exact broader checks triggered by the affected risk area and document rollback.

An optional generic CI starter is at `docs/qa/github-actions-ci-template.yml`; the installed PR lane gate is at `.github/workflows/agentslice-pr-gate.yml`.
