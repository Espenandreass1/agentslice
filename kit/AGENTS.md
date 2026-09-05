# AgentSlice Runtime Rules

Follow `AGENT_RULES.md`. Before editing, read `agentslice.policy.json`, verify its canonical workspace against the Git root, then read only `AGENT_RULES.md`, `docs/planning/active-context.md`, `docs/planning/workflow-state.md`, and `docs/planning/current-slice.md`. Stop on a workspace mismatch. Use archives only through the index and targeted search.

Choose a mode before coding. Local `explore/<idea>` work is brief, reversible, and never creates a PR, preview, spec, QA record, checkpoint, workflow-state update, merge, or deployment. Ask which current user problem it solves. Promote policy-sensitive work—auth, data/RLS, ownership, public pages/contracts, integrations, commerce, hosting, CI, or production data—promptly to a `controlled-change` PR.

Every formal PR has exactly one lane marker: `docs`, `fast-bug`, `standard-feature`, or `controlled-change`. The PR is the live source for lane, work completed, QA, merge/release decision, and rollback. The bundled CI gate checks the marker, sensitive paths, and fast-bug's application-file limit whenever the PR or its description changes. Read only role-specific inputs: planning adds vision/stack/live candidates; build adds PR plan, approved spec if any, and coding rules; QA adds changed files, QA plan, and at most one relevant old report; release adds current QA and changelog.

The four gates remain for formal deployable work: human scope approval; human spec/plan approval for controlled implementation; independent QA `PASS`/`PASS WITH NOTES`; human release approval. Never deploy after `FAIL` or without release approval. Low-risk PRs use compact PR evidence, not separate spec/QA/release/handoff documents. Keep active docs short, preserve closed history in dated archives with redirects, default QA to focused acceptance/domain regression plus lint/typecheck for code, and use broader checks only for the stated risk triggers.

Do not parallelize by default; independent QA/review is the normal exception. Keep output compact and link rather than repeat.
