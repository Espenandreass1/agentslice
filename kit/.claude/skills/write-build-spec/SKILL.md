---
name: write-build-spec
description: Use after a human approves a slice. Produces a compact, build-ready spec with traceable acceptance and QA checks, then stops for spec approval.
---

# Write Build Spec

## Read

Read the active preflight, then planning context (`vision.md`, `tech-stack.md`, live `next-slices.md`) and the spec template. Read `qa-plan.md` only to select checks for the proposed spec. Use archive records only through the index for a concrete unresolved constraint.

## Guardrails

- Confirm an approved slice and phase `SLICE_APPROVED`; otherwise stop.
- Do not implement. Set `Spec approved: No` and phase `SPEC_DRAFTED` after drafting.
- Keep a small spec to about 120 lines or fewer. If risk requires more, explain why and link to focused supporting material.
- Name likely touched areas, must-not-change areas, observable acceptance criteria, risks, and QA checks.

## Steps

1. Convert the approved slice into the smallest concrete spec.
2. Link to current slice, active context, and only directly relevant decisions instead of copying them.
3. Choose focused QA checks and identify any trigger for broader QA.
4. Update `current-slice.md`, `active-context.md`, and `workflow-state.md`.
5. Stop for explicit human spec approval.

## Output

Present the compact spec and ask to approve, reject, or adjust it before build starts.
