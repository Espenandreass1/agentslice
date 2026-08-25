# Active Context

Use this as the short, active memory for a start or resume. Keep it under 180 lines and link to details instead of copying them. Historical records live through the index at `docs/archive/README.md`.

## Product context

- Product: [One or two sentences on what is being built and for whom.]
- Problem and first useful value: [Short confirmed summary.]
- Non-goals: [Short list or `None confirmed yet`.]

## Active constraints

- Product: [Current business, legal, launch, support, or audience constraints.]
- Technical: [Current stack, integration, deployment, or compatibility constraints.]
- Security/data: [Current auth, ownership, privacy, data, or commerce constraints.]

## Current slice and spec

- Slice: [Name and status; details in `current-slice.md`.]
- Spec: [Path and approval status; `None` until drafted.]
- Current QA report: [Path and result; `None` until QA starts.]
- Active checkpoint: `docs/planning/checkpoint.md` [Status; this is a handoff summary, not state truth.]
- Scope boundary: [One short statement, or `No approved scope yet`.]

## Next gate

- Required gate: [Slice approval / spec approval / build / QA / release approval.]
- Human decision or evidence needed: [Short, concrete request.]

## QA policy for the active work

- Focused acceptance tests and relevant domain regressions by default.
- Lint and typecheck for code changes.
- Broader checks required when the changed surface triggers them; see `docs/qa/qa-plan.md`.

## Nearest priorities

1. [Current highest-priority action.]
2. [Next likely action.]
3. [Optional, only if actively relevant.]

## Pointers

- Product detail: `docs/product/vision.md`
- Stack detail: `docs/engineering/tech-stack.md`
- Active decisions: `docs/planning/decisions.md`
- Historical index: `docs/archive/README.md`
- Handoff and telemetry: `docs/planning/checkpoint.md`
