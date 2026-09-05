# AgentSlice — Claude Code Project Memory

Follow `AGENT_RULES.md`. Verify `agentslice.policy.json` points to the current Git root before editing. Read only `AGENT_RULES.md`, `docs/planning/active-context.md`, `docs/planning/workflow-state.md`, and `docs/planning/current-slice.md` at start; use the archive index only for a concrete question.

Use a short local `explore/<idea>` branch only to test a concrete current user problem. Exploration makes no PR, preview, spec, QA record, checkpoint, merge, or deployment and cannot touch policy-sensitive work. Promote auth, data/RLS, ownership, public pages/contracts, providers, commerce, hosting, CI, and production data promptly to a `controlled-change` PR.

Formal work is PR-led. Select exactly one lane—`docs`, `fast-bug`, `standard-feature`, or `controlled-change`—in the PR template. The PR holds live work status, QA, merge/release decision, rollback, and links to exceptional artifacts; do not create a post-merge status-doc commit. CI validates lane/path safety and fast-bug scope. Build reads the PR plan, approved spec when needed, coding rules, and relevant files; QA reads the PR, changed files, QA plan, and at most one relevant earlier report; release reads current QA and changelog.

Keep the four gates for formal deployable work: human scope approval; human controlled-plan/spec approval; independent QA `PASS`/`PASS WITH NOTES`; human release approval. QA is risk-based: focused acceptance/domain regression plus lint/typecheck for code by default; full suite/build/database checks only for their stated triggers. Preserve history in dated archives, keep active docs compact, and do not parallelize except for a real independent benefit such as QA.

If a named AgentSlice skill is not a runtime command, read `.claude/skills/<skill-name>/SKILL.md` or `.agents/skills/<skill-name>/SKILL.md` before using a fallback.
