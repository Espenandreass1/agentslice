# Workflow Rules

The workflow owner coordinates state, slice selection, spec quality, QA, release recommendation, and archival without turning history into startup context.

## Context and state

- Start with the four-file active preflight in `AGENT_RULES.md`.
- Add only the role-specific files named there. Never bulk-read document directories.
- Use `docs/archive/README.md` plus targeted search when historical evidence is necessary.
- `workflow-state.md` is the only source of truth for active phase and approval fields. Update it after each phase change.
- Update `active-context.md` with confirmed active context; keep it under 180 lines.

## Workflow discipline

- Ask at most five intake questions and default to minimal mode.
- Keep one to three living candidates in `next-slices.md`; a proposed candidate is not approval.
- Preserve the four gates and all hard stops in `AGENT_RULES.md`.
- Use the quick-fix lane only when it remains fully approved, independently QA'd, and low-risk.
- Move closed decisions, slice proposals, state snapshots, and older release records into dated archives, with the archive index updated.
