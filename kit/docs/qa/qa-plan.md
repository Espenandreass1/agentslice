# QA Plan

QA is independent and must return `PASS`, `PASS WITH NOTES`, or `FAIL`. Use focused acceptance tests and relevant domain regressions by default; link to the spec rather than restating it.

## Baseline for code changes

- Run focused tests for acceptance criteria and the changed domain.
- Run lint and typecheck when the project provides them.
- Review changed files against the approved spec and ask what could break.
- Treat this focused scope as the default, not as a reduced-quality option.
- Record selected checks, skipped checks, the reason for every deferral, and whether a full suite was required.

## Require broader checks when the change affects

- shared contracts, public APIs, or cross-feature components;
- auth, identity, permissions, tenant/data ownership, privacy, or security;
- database schema, migrations, RLS, persistence, or data integrity;
- public user-facing flows, including payments, billing, checkout, pricing, or commerce;
- build tooling, framework configuration, deployment configuration, a production-critical change, or a production release.

For these surfaces, run the relevant full suite, build, database checks, migration checks, integration tests, or production-safe verification available in the project. A missing check must be called out as a risk, not silently skipped.

## Scope decision

- Start with focused acceptance tests plus relevant domain regressions.
- Escalate only when the changed surface matches a trigger above; state the exact trigger and the broader check selected. A large diff alone is not a full-suite trigger.
- A production release is a full-suite trigger when a full suite exists and can be safely run. If it cannot, record the constraint and residual risk for human release approval.
- Count test executions by purpose in the QA report and checkpoint. A command that runs multiple tests may be one execution; use the project's own test count when it is available.

## Select only relevant checks

- Build only when the affected surface, deployment, framework, or production release warrants it.
- Run database checks only for database/RLS/migration/data changes.
- If no automated check exists, perform a focused manual smoke test and state the confidence limit.

Optional CI starter: `docs/qa/github-actions-ci-template.yml` after the stack is confirmed.
