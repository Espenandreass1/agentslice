# AgentSlice Runtime Rules

Follow the canonical contract in `AGENT_RULES.md`. `docs/planning/workflow-state.md` is the only source of truth for active phase and approval fields.

## Active preflight

At every start, resume, and phase change, read:

- `AGENT_RULES.md`
- `docs/planning/active-context.md`
- `docs/planning/workflow-state.md`
- `docs/planning/current-slice.md`

Then use role-specific context only: planning reads vision, tech stack, and live next slices; build reads the approved spec and coding rules; QA reads the approved spec, changed files, QA plan, and at most one directly relevant prior QA report; release reads current spec, QA report, and changelog. Do not bulk-read historical directories. Use `docs/archive/README.md` and targeted search only when history is needed.

## Gates and hard stops

Keep all four gates: human slice approval, human spec approval, independent QA `PASS`/`PASS WITH NOTES`, then human release approval. Do not write implementation code without the approved slice and spec, recommend release after `FAIL`, deploy without release approval, or continue when phase/scope is unclear.

The quick-fix lane never bypasses these gates or reduces safeguards for auth, ownership, data, privacy, commerce, shared contracts, migrations, or production configuration.

## Workflow behavior

- Default to minimal mode and ask at most five intake questions.
- Keep `active-context.md` under 180 lines and update it with confirmed active context.
- Keep `next-slices.md` to one to three living candidates and `decisions.md` to active constraints.
- Use the archive index and dated folders to preserve closed history without loading it at startup.
- QA is independent, links to evidence rather than repeating the spec, and selects checks according to `docs/qa/qa-plan.md`.

Bundled skills are available under `.agents/skills/` and `.claude/skills/` when no runtime equivalent exists.
