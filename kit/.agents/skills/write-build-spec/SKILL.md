---
name: write-build-spec
description: Use after a product slice has been approved. Creates an adaptive build-ready spec with acceptance criteria and QA checks. Stops before implementation.
---

# Write Build Spec

Use this skill after the human has approved a product slice.

## Inputs to inspect

Read these files if they exist:

- `docs/planning/workflow-state.md`
- `AGENT_RULES.md`
- `docs/planning/current-slice.md`
- `docs/specs/spec-template.md`
- `docs/product/vision.md`
- `docs/engineering/tech-stack.md`
- `docs/engineering/coding-rules.md`
- `docs/qa/qa-plan.md`
- `docs/planning/decisions.md`

## Spec size

Keep the spec proportional to the slice:

- Tiny slice: use goal, scope, acceptance criteria, likely files, QA checks, risks.
- Small slice: add user flow and implementation notes.
- Larger slice: add data/API/security sections only when relevant.

Do not fill sections with generic text. Omit irrelevant sections.

Every build spec must be small enough for a human to review in under 5 minutes, or it must explain why the slice cannot be split further.

## Steps

1. Confirm there is an approved slice.
2. Confirm workflow phase is `SLICE_APPROVED`.
3. If no approved slice exists, stop and ask for slice approval.
4. Identify likely files, modules, APIs, data models, or UI surfaces involved.
5. Write a concrete spec sized to the slice.
6. State what will not change.
7. Estimate complexity and rough change range.
8. Include edge cases, error handling, regression risks, and "what could go wrong" where relevant.
9. Include a QA plan tied to acceptance criteria.
10. Update `docs/planning/workflow-state.md` to `SPEC_DRAFTED` and `Spec approved: No`.
11. Stop for human approval before implementation.

If the slice is not approved or is still vague, stop and ask for approval or clarification.

## Output format

```markdown
## Build spec: [Slice name]

### Approval status
Draft

### Goal

### Included
- 

### Not included
- 

### Likely files or areas touched
- 

### Files or areas that must not change
- 

### Size and complexity
- Human review target:
- Estimated complexity:
- Estimated change range:

### User flow

### Acceptance criteria
- 

### Regression risks
- 

### What could go wrong
- 

### Implementation notes
- 

### Files or areas likely affected
- 

### QA checks
- 

### Risks and unknowns
- 

### Approval needed
Approve, reject, or adjust this spec before build starts.
```
