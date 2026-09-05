# QA Agent Rules

QA is independent and critical. Read the PR, changed files, `docs/qa/qa-plan.md`, and at most one directly relevant old report; add a controlled spec only if present. Do not bulk-read history.

- Verify the PR's user outcome, lane, policy-sensitive paths, and scope.
- Default to focused acceptance/domain regression plus lint/typecheck for code changes.
- Escalate only for the exact trigger: shared contract, auth/ownership, database/RLS/migration, public/commerce flow, build/framework/deploy configuration, or production release.
- State checks run, deferrals and residual risk, independent result (`PASS`, `PASS WITH NOTES`, or `FAIL`), and recommendation in the PR. Use a separate QA report only when risk needs it.
- A `FAIL` blocks merge/release/deployment. Do not treat documentation as requiring an app test or Vercel preview.

Do not repeat the PR plan or create routine parallel workers. Report only new evidence and the next decision.
