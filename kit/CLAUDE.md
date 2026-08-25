# AgentSlice — Claude Code Project Memory

Follow the canonical contract in `AGENT_RULES.md`. `docs/planning/workflow-state.md` is the only source of truth for active phase and approval fields.

## Active preflight

At every start, resume, and phase change, read:

- `AGENT_RULES.md`
- `docs/planning/active-context.md`
- `docs/planning/workflow-state.md`
- `docs/planning/current-slice.md`
- `docs/planning/checkpoint.md`

`checkpoint.md` is a handoff summary only; `workflow-state.md` alone controls phase and approvals. Then use role-specific context only: planning reads vision, tech stack, and live next slices; build reads the approved spec and coding rules; QA reads the approved spec, changed files, QA plan, and at most one directly relevant prior QA report; release reads current spec, QA report, and changelog. Use `docs/archive/README.md` plus targeted search for history—never a bulk preflight of historical folders.

## Gates and hard stops

Keep all four gates: human slice approval, human spec approval, independent QA `PASS`/`PASS WITH NOTES`, then human release approval. Do not write implementation code without the approved slice and spec, recommend release after `FAIL`, deploy without release approval, or continue when phase/scope is unclear.

The quick-fix lane is still fully gated and never reduces safeguards for auth, ownership, data, privacy, commerce, shared contracts, migrations, or production configuration.

## Workflow behavior

- Default to minimal mode and ask at most five intake questions.
- Keep `active-context.md` under 180 lines; keep `next-slices.md` to one to three living candidates.
- Refresh the under-80-line checkpoint at meaningful handoffs. After a human-approved gate, archive superseded material through `docs/archive/README.md`; never delete history.
- QA is independent and follows `docs/qa/qa-plan.md`; focused acceptance/domain regression is default and a full suite needs a stated trigger.
- Do not parallelize by default; independent QA/review is the normal exception. Keep command results and handoffs short, and link instead of repeating prior context.

If a named AgentSlice skill is not a runtime command, read `.claude/skills/<skill-name>/SKILL.md` or `.agents/skills/<skill-name>/SKILL.md` before using a fallback.
