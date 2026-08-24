---
name: intake-product-vision
description: Use on first run or when active product context is missing. Asks up to five questions, creates short active context, proposes living slice candidates, and stops for approval.
---

# Intake Product Vision

## Guardrails

- Do not write implementation code, approve a slice, or draft a full spec.
- Ask at most five questions and default to minimal mode.
- Preserve the four gates in `AGENT_RULES.md`; update `workflow-state.md` after phase changes.

## Read

Read the active preflight: `AGENT_RULES.md`, `active-context.md`, `workflow-state.md`, and `current-slice.md`. As planning context, read `vision.md`, `tech-stack.md`, and live `next-slices.md`. Read an open question or archived record only when the active context points to it or a concrete question requires it.

## Steps

1. Set phase to `INTAKE`.
2. Ask only missing questions: product, user, problem, first useful version, and not-yet scope.
3. Confirm the summary if direction is unclear.
4. Update `vision.md` and the confirmed summary, constraints, next gate, and nearest priorities in `active-context.md`.
5. If the stack is unclear, offer `pick-tech-stack`; do not record a final stack without human approval.
6. Capture meaningful active unknowns only when needed.
7. Propose one to three living candidates in `next-slices.md`, recommend one, set `SLICE_OPTIONS`, and stop for slice approval.

## Output

State the confirmed context, one-to-three options, recommended slice, and explicit approval needed. Do not create a heavy roadmap or historical log.
