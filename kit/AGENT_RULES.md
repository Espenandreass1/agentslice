# AgentSlice Agent Rules

These rules are the permanent workflow contract for this project. Re-read this file at the start of every new conversation, every new slice, and every resume after a context reset.

AgentSlice is a Markdown workflow kit, not an executable runtime. The gates are not technically enforced, so you must enforce them through your behavior.

## Core Rule

You are forbidden from editing application code until both are true:

1. A slice has been explicitly approved by the human.
2. A build spec for that slice has been explicitly approved by the human.

Accept natural approval language such as "approve", "approved", "yes, go", "go for it", "looks good", or equivalent. If the approval could refer to something other than the current slice or spec, ask for quick confirmation before editing application code.

## Read First

Before planning, building, QA, release, or resuming work, read:

- `AGENT_RULES.md`
- `docs/planning/workflow-state.md`
- `docs/product/vision.md`
- `docs/engineering/tech-stack.md`
- `docs/planning/current-slice.md`
- `docs/planning/next-slices.md`
- `docs/planning/decisions.md`
- `docs/specs/`
- `docs/qa/`
- `docs/release/changelog.md`

## Slice Discipline

Every slice must be small enough for a human to review in under 5 minutes.

Before implementation, every approved slice/spec must state:

- exact files or areas likely to be touched
- what will not change
- expected complexity and rough line-change range
- acceptance criteria
- regression risks
- QA checks

If any scope is ambiguous, ask clarifying questions before proposing or implementing the slice.

## Hard Stops

- No approved slice: do not write implementation code.
- No approved spec: do not write implementation code.
- `Spec approved` is not `Yes`: do not write implementation code.
- Changed files are outside the approved spec: stop and ask.
- QA result is `FAIL`: do not recommend release.
- Release is not approved by the human: do not deploy.
- Current phase is unclear: stop and ask what phase to resume from.

## Scope Control

- Build only the approved slice.
- Do not expand scope during implementation.
- Do not rewrite unrelated files.
- Do not add production dependencies without approval.
- Do not make broad refactors unless the approved slice is a refactor.
- Keep facts, assumptions, risks, and recommendations separate.

## Context And Memory

Keep `docs/planning/workflow-state.md` updated after every phase change. Keep its Project Context Bible current enough that a new agent conversation can understand the product, non-goals, constraints, active slice, and previous decisions.

Use `docs/planning/decisions.md` for meaningful trade-offs and approvals. Use `docs/release/changelog.md` only after release approval.

## Bundled Skill Files

Some tools expose skills as installed commands. Other tools only see the bundled skill files in the repository.

When an AgentSlice instruction names a skill:

1. Use the installed/runtime skill if the tool makes it available.
2. If it is not installed, read the bundled file at `.agents/skills/<skill-name>/SKILL.md` or `.claude/skills/<skill-name>/SKILL.md`.
3. If neither file is readable, use your general capability as a fallback and say that the named skill was not available.

Never claim that you used a skill that was not installed or read.

## QA Behavior

QA must answer:

- what changed
- which files were touched
- what could break
- which checks were run
- which checks were skipped and why
- whether acceptance criteria passed
- whether release is recommended

If no separate QA subagent exists, switch into an independent QA role and review the work critically before returning to build or release mode.
