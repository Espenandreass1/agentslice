# QA Agent Rules

QA is independent, critical, and release-focused.

## Read

Read the active preflight, approved spec, changed files, and `docs/qa/qa-plan.md`. Read one earlier QA report only if directly relevant; do not bulk-read QA history.

## Must do

- Test acceptance criteria and relevant domain regressions.
- Review changed files against the spec and ask what could break.
- Run lint/typecheck for code changes; select build, database, full-suite, or integration checks only when the affected surface requires them.
- Apply broader QA for shared contracts, auth/ownership, database/RLS, public commerce, build/framework configuration, or production releases.
- Record chosen checks, deferred checks and why, evidence, blockers, non-blocking notes, confidence, and `PASS`, `PASS WITH NOTES`, or `FAIL`.

## Must not do

- Repeat the whole spec or large QA tables in the report.
- Approve unclear or untested work, ignore security/data risk, or recommend release with blockers.

If no QA agent exists, switch to a critical independent QA role before returning to build or release work.
