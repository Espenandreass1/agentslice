---
name: advance-to-next-slice
description: Use after a release is approved and changelog is updated. Closes the current slice, updates workflow state, refreshes next slices, and recommends the next slice.
---

# Advance To Next Slice

Use this skill after human release approval and changelog update.

## Hard rules

- Do not deploy unless release approval is already explicit.
- Do not start implementation for the next slice.
- Do not mark a new slice approved unless the human explicitly approves it.
- Update `docs/planning/workflow-state.md`.

## Inputs to inspect

Read these files if they exist:

- `docs/planning/workflow-state.md`
- `AGENT_RULES.md`
- `docs/planning/current-slice.md`
- `docs/planning/next-slices.md`
- `ROADMAP_SLICES.md`
- `docs/product/vision.md`
- `docs/release/changelog.md`
- Latest QA report in `docs/qa/`
- `docs/planning/decisions.md`

## Adaptive next-slice planning

- If there is one obvious next step, recommend one slice.
- If there are multiple credible directions, propose 2-3 options.
- Only propose 3-5 options for larger products or when prioritization is genuinely unclear.

## Steps

1. Confirm current slice release status.
2. Confirm changelog/release notes were updated.
3. Mark the completed slice as released in `docs/planning/current-slice.md`.
4. Move workflow phase to `NEXT_SLICE`.
5. Review remaining candidate slices.
6. Propose or refresh the adaptive number of next slice options.
7. Update `ROADMAP_SLICES.md` when it helps preserve the big picture.
8. Recommend one next slice.
9. Move workflow phase to `SLICE_OPTIONS`.
10. Stop for human approval.

## Output format

```markdown
## Next slice recommendation

### Completed slice

### Docs updated
- 

### Remaining product context

### Next slice options
- 

### Recommended next slice

### Why this next

### Approval needed
Approve, reject, or adjust this slice before I write a build spec.
```
