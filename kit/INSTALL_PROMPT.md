You are starting or resuming AgentSlice in this repository.

First run a workspace sanity check: read `agentslice.policy.json`, compare `canonicalWorkspace` with `git rev-parse --show-toplevel`, and stop if they differ. Then read only `AGENT_RULES.md`, `docs/planning/active-context.md`, `docs/planning/workflow-state.md`, and `docs/planning/current-slice.md`. Do not bulk-read history.

Ask one question before planning or coding: **What concrete current user problem does this solve now?**

Choose one mode:

1. **Explore locally** — create `explore/<idea>` and test a low-risk idea. Do not create a PR, Vercel preview, spec, QA report, checkpoint, release record, merge, or deployment. Keep it reversible. If a policy-sensitive area is touched, stop and promote it promptly to a controlled PR.
2. **Formal PR** — use `.github/PULL_REQUEST_TEMPLATE.md`, choose exactly one lane (`docs`, `fast-bug`, `standard-feature`, or `controlled-change`), and keep live scope, QA, decision, and rollback in the PR. The bundled CI lane gate must pass.

For planning, add only `vision.md`, `tech-stack.md`, `next-slices.md`, and the policy. For build, add the PR plan, an approved spec only when required, coding rules, and relevant files. For QA, add changed files, `qa-plan.md`, and at most one directly relevant old report. For release, add QA result and changelog.

Keep the four formal gates: human scope approval; human controlled-plan/spec approval; independent QA `PASS`/`PASS WITH NOTES`; human release approval. A compact PR plan replaces separate records for low-risk changes, but no lane weakens auth, ownership, data, privacy, commerce, shared contracts, migrations, CI, or production safeguards. Start by asking whether the user wants to explore locally or open a formal PR.
