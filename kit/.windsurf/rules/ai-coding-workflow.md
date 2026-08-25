---
trigger: always_on
description: AgentSlice workflow rules for scoped development, independent QA, and human approval gates.
---

# AgentSlice Rules

Follow `AGENT_RULES.md`; `docs/planning/workflow-state.md` alone controls active phase and approval fields.

At every start, resume, or phase change, read `AGENT_RULES.md`, `docs/planning/active-context.md`, `docs/planning/workflow-state.md`, `docs/planning/current-slice.md`, and `docs/planning/checkpoint.md`. The checkpoint is a handoff summary, never state truth. Then add only role context: planning reads vision, tech stack, live next slices; build reads approved spec and coding rules; QA reads approved spec, changed files, QA plan, plus one relevant prior QA report only when needed; release reads current spec, QA report, and changelog.

Do not bulk-read historical folders. Use `docs/archive/README.md` plus targeted search only for a concrete historical need.

Keep the four gates unchanged: human slice approval, human spec approval, independent QA `PASS`/`PASS WITH NOTES`, then human release approval. Never implement without the first two, recommend release after `FAIL`, or deploy without the last. Quick fixes remain fully gated and never reduce auth, ownership, data, privacy, commerce, shared-contract, database/RLS, migration, or production safeguards.

Keep active documents compact: `active-context.md` ≤180 lines; `checkpoint.md` ≤80 lines; `next-slices.md` has one to three living candidates; `decisions.md` has active constraints only; changelog entries are short and user-facing. At handoff refresh the checkpoint; after a human-approved gate archive only superseded history indexed by `docs/archive/README.md`. QA defaults to focused acceptance/domain regression and must state any full-suite trigger. Do not parallelize by default; independent QA/review is the normal exception. Keep output compact and link to earlier evidence instead of repeating it.
