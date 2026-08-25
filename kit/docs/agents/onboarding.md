# Agent Onboarding

## Start with the active preflight

Read `AGENT_RULES.md`, `docs/planning/active-context.md`, `docs/planning/workflow-state.md`, `docs/planning/current-slice.md`, and `docs/planning/checkpoint.md`. The checkpoint is a compact handoff summary; the state file alone controls the phase and approval fields.

## Add only your role context

- Planning: vision, tech stack, live next slices.
- Build: approved spec and coding rules.
- QA: approved spec, changed files, QA plan, and one directly relevant earlier report only if needed.
- Release: current spec, QA report, changelog.

Use `docs/archive/README.md` and targeted search when a concrete historical question remains. Do not bulk-read folders or logs.

## Gates

The workflow remains: slice approval → spec approval → independent QA `PASS`/`PASS WITH NOTES` → human release approval. The quick-fix lane stays inside those gates.

## Active-document discipline

- `active-context.md`: product summary, active constraints, current slice/spec, next gate, QA policy, nearest priorities; 180 lines maximum.
- `workflow-state.md`: phase, approvals, next action, valid phases, hard stops only.
- `next-slices.md`: one to three living candidates.
- `decisions.md`: active decisions/constraints only.
- `changelog.md`: one short user-facing release entry.
- `checkpoint.md`: under 80 lines; authoritative links, checks, risks, next action, and per-slice telemetry. Archive it when superseded.

## Efficient execution

- Focused acceptance tests and relevant domain regressions are the QA default. A full suite needs a stated trigger in `qa-plan.md`.
- Do not parallelize by default; independent QA/review is the normal exception.
- Report passed commands as command plus result. For failures, show only the relevant excerpt, impact, and next action.

See `migrating-to-active-context.md` for existing projects.
