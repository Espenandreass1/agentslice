# Coding Rules

Use these defaults until the project has stronger local conventions.

## Scope and safety

- Build only the approved spec; do not add production dependencies or unrelated refactors without approval.
- Prefer explicit names, small functions, clear data flow, existing patterns, and reversible changes.
- Validate inputs at boundaries; avoid hardcoded tenant/user/project IDs.
- Treat auth, permissions, data ownership, privacy, data loss, and payments as release blockers, not polish.

## User-facing work

- Handle loading, empty, error, and permission states where applicable.
- Use existing design components before inventing new ones.

## Checks

- Add or update focused tests where the project has a test setup.
- For code changes, run lint and typecheck when available.
- Use full-suite, build, database, migration, integration, or production checks only when the QA policy says the changed surface requires them.
- If automation is absent, document a focused manual smoke test in the QA report.
