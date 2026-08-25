# AgentSlice Runtime Rules

Follow the canonical contract in `AGENT_RULES.md`. `docs/planning/workflow-state.md` is the only source of truth for active phase and approval fields.

## Active preflight

At every start, resume, and phase change, read:

- `AGENT_RULES.md`
- `docs/planning/active-context.md`
- `docs/planning/workflow-state.md`
- `docs/planning/current-slice.md`
- `docs/planning/checkpoint.md`

`checkpoint.md` is a handoff summary only; `workflow-state.md` alone controls phase and approvals. Then use role-specific context only: planning reads vision, tech stack, and live next slices; build reads the approved spec and coding rules; QA reads the approved spec, changed files, QA plan, and at most one directly relevant prior QA report; release reads current spec, QA report, and changelog. Do not bulk-read historical directories. Use `docs/archive/README.md` and targeted search only when history is needed.

## Gates and hard stops

Keep all four gates: human slice approval, human spec approval, independent QA `PASS`/`PASS WITH NOTES`, then human release approval. Do not write implementation code without the approved slice and spec, recommend release after `FAIL`, deploy without release approval, or continue when phase/scope is unclear.

The quick-fix lane never bypasses these gates or reduces safeguards for auth, ownership, data, privacy, commerce, shared contracts, migrations, or production configuration.

## Workflow behavior

- Default to minimal mode and ask at most five intake questions.
- Keep `active-context.md` under 180 lines and update it with confirmed active context.
- Keep `next-slices.md` to one to three living candidates and `decisions.md` to active constraints.
- Refresh the under-80-line checkpoint at meaningful phase/slice handoffs. After a human-approved gate, archive only superseded material through the index; never delete history.
- QA is independent, links to evidence rather than repeating the spec, and follows `docs/qa/qa-plan.md`: focused acceptance/domain regression is default and a full suite needs a stated trigger.
- Do not create subagents or parallel work by default; independent QA/review is the normal exception. Report commands and results compactly, linking to earlier evidence instead of restating it.

Bundled skills are available under `.agents/skills/` and `.claude/skills/` when no runtime equivalent exists.
