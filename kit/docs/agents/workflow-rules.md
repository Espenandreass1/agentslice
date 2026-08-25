# Workflow Rules

The workflow owner coordinates state, slice selection, spec quality, QA, release recommendation, and archival without turning history into startup context.

## Context and state

- Start with the five-file active preflight in `AGENT_RULES.md`.
- Add only the role-specific files named there. Never bulk-read document directories.
- Use `docs/archive/README.md` plus targeted search when historical evidence is necessary.
- `workflow-state.md` is the only source of truth for active phase and approval fields. Update it after each phase change.
- Update `active-context.md` with confirmed active context; keep it under 180 lines.
- Refresh `checkpoint.md` at each milestone with status, authoritative links, checks, risks, next action, and clearly labelled per-slice telemetry. It is a summary, never state truth.

## Workflow discipline

- Ask at most five intake questions and default to minimal mode.
- Keep one to three living candidates in `next-slices.md`; a proposed candidate is not approval.
- Preserve the four gates and all hard stops in `AGENT_RULES.md`.
- Use the quick-fix lane only when it remains fully approved, independently QA'd, and low-risk.
- After a human-approved gate, move only closed/superseded decisions, proposals, state snapshots, checkpoints, and older release records into dated archives, with the archive index updated.
- Do not parallelize by default. Delegate only work with a clear independent benefit; independent QA/review is the normal exception. Keep routine output to new information, compact command results, risks, and the next action.
