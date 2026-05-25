# Coding Rules

Use these as default rules until the project has stronger local conventions.

## Defaults

- Keep the first version boring and easy to change.
- Prefer explicit names, small functions and clear data flow.
- Build only the approved slice.
- Do not add production dependencies without approval.
- Do not introduce auth, billing, queues, background jobs or external services unless the spec requires them.
- Do not refactor unrelated code while implementing a slice.

## Frontend

- Keep components focused on one job.
- Separate data loading, state handling and presentational UI when the file starts getting hard to scan.
- Handle loading, empty and error states for user-facing flows.
- Use existing design system/components before inventing new ones.

## Backend and Data

- Validate inputs at the boundary.
- Keep database changes explicit and reversible where possible.
- Avoid hardcoded tenant/user/project IDs.
- Treat auth, permissions and data ownership as release blockers, not polish.

## Tests and Checks

- If behavior changes, add or update a focused test where the project has a test setup.
- If no test setup exists, write a short manual smoke test in the QA report.
- Run the smallest useful check first, then broader checks before release.

## Anti-patterns

- Expanding scope because it is "easy."
- Rewriting working code to match a preference.
- Hiding deviations from the approved spec.
- Shipping with unclear auth, data loss, payment or privacy risk.
