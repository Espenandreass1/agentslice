# QA Plan

QA is independent and must return `PASS`, `PASS WITH NOTES`, or `FAIL`. Use focused acceptance tests and relevant domain regressions by default; link to the spec rather than restating it.

## Baseline for code changes

- Run focused tests for acceptance criteria and the changed domain.
- Run lint and typecheck when the project provides them.
- Review changed files against the approved spec and ask what could break.
- Record selected checks, skipped checks, and the reason for every deferral.

## Require broader checks when the change affects

- shared contracts, public APIs, or cross-feature components;
- auth, identity, permissions, tenant/data ownership, privacy, or security;
- database schema, migrations, RLS, persistence, or data integrity;
- public payments, billing, checkout, pricing, or commerce;
- build tooling, framework configuration, deployment configuration, or a production release.

For these surfaces, run the relevant full suite, build, database checks, migration checks, integration tests, or production-safe verification available in the project. A missing check must be called out as a risk, not silently skipped.

## Select only relevant checks

- Build only when the affected surface, deployment, framework, or production release warrants it.
- Run database checks only for database/RLS/migration/data changes.
- If no automated check exists, perform a focused manual smoke test and state the confidence limit.

Optional CI starter: `docs/qa/github-actions-ci-template.yml` after the stack is confirmed.
