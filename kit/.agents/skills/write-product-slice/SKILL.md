---
name: write-product-slice
description: Use when planning the next product slice from product vision, open questions, current state, or a rough feature idea. Produces adaptive slice options and recommends one. Does not build code.
---

# Write Product Slice

Use this skill to turn product direction into a small, buildable slice.

## Inputs to inspect

Read these files if they exist:

- `docs/planning/workflow-state.md`
- `AGENT_RULES.md`
- `docs/product/vision.md`
- `docs/engineering/tech-stack.md`
- `docs/planning/current-slice.md`
- `docs/planning/next-slices.md`
- `docs/planning/decisions.md`
- `docs/planning/open-questions.md`

If this skill is not installed as a runtime skill, follow these instructions from this bundled `SKILL.md` file.

## Adaptive slice count

- Tiny project or very small next step: propose 1 recommended slice.
- Small product/MVP: propose 2-3 slice options.
- Larger or ambiguous product: propose 3-5 slice options.

Prefer the smallest slice that creates visible user value and can be QA'd.

Every slice must be small enough for a human to review in under 5 minutes. Split vague or broad slices before asking for approval.

## Steps

1. Confirm workflow phase is `VISION`, `SLICE_OPTIONS`, or `NEXT_SLICE`. If not, explain the mismatch before continuing.
2. Summarize the current product context in 3-6 bullets.
3. Identify constraints, risks, and unresolved questions.
4. Propose the adaptive number of possible product slices.
5. Recommend one slice and explain why it should come next.
6. Define included scope and non-scope.
7. List likely files or areas touched.
8. List what must not change.
9. Estimate complexity and rough change range.
10. Define acceptance criteria and regression risks.
11. Update `docs/planning/next-slices.md`.
12. Update `ROADMAP_SLICES.md` when a roadmap view would help.
13. Set `docs/planning/workflow-state.md` to `SLICE_OPTIONS`.
14. Stop for human approval.

Do not build. Do not write a full implementation spec until the slice is approved.

## Output format

```markdown
## Product slice options

### Context summary
- 

### Slice options
- 

## Recommended slice

### Slice name

### Why this slice

### Included
- 

### Not included
- 

### Likely files or areas touched
- 

### Must not change
- 

### Size and complexity
- Review target:
- Estimated complexity:
- Estimated change range:

### Acceptance criteria
- 

### Regression risks
- 

### Risks and questions
- 

### Approval needed
Approve, reject, or adjust this slice before I write the full build spec.
```
