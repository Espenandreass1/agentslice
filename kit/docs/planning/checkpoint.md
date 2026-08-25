---
checkpointed_at: [YYYY-MM-DD]
state_source: docs/planning/workflow-state.md
slice_ref: docs/planning/current-slice.md
---

# Active Checkpoint

Use this compact checkpoint at every slice or meaningful phase handoff. It is readable by people and simple tools, but `workflow-state.md` remains the only source of truth for phase and approval fields. Keep it under 80 lines; archive the prior snapshot after a human-approved gate or completed slice.

## Status

- Summary: [One sentence on the current milestone.]
- Next action: [Concrete action and required human decision or evidence.]

## Authoritative files

- State and approvals: `docs/planning/workflow-state.md`
- Current slice: `docs/planning/current-slice.md`
- Current spec: [Path or `None`]
- Current QA report: [Path or `None`]
- Release/changelog record: [Path or `None`]

## Checks and evidence

- Completed: [Command/check and short result, or `None yet`.]
- Deferred: [Check, reason, and residual risk, or `None`.]

## Active risks

- [Concrete unresolved risk, owner, or `None known`.]

## Per-slice telemetry (estimate, not a gate)

- Test executions: [Number] — [Purpose and selected scope.]
- Full suite: [Not required / Required and run / Required but deferred] — [Exact reason.]
- Agent/role calls: [Number] — [Roles; independent QA counts separately.]
- Context estimate: [Preflight + role files: characters / 4 ≈ tokens; method and exclusions.]

## Archive action

- Superseded record moved or retained: [Path and archive destination, or `None`.]
