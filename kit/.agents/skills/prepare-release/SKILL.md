---
name: prepare-release
description: Use after QA has passed or passed with notes. Creates a release recommendation, summarizes tested changes, lists risks, and prepares changelog/release notes. Waits for human release approval.
---

# Prepare Release

Use this skill only after QA result is `PASS` or `PASS WITH NOTES`.

## Inputs to inspect

Read these files if they exist:

- `docs/planning/workflow-state.md`
- Latest QA report in `docs/qa/`
- Approved spec in `docs/specs/`
- `docs/planning/current-slice.md`
- `docs/release/changelog.md`
- `docs/release/release-notes.md`
- `docs/release/deployment-checklist.md`
- `docs/planning/decisions.md`

## Steps

1. Confirm workflow phase is `RELEASE_RECOMMENDATION`.
2. Confirm QA status is `PASS` or `PASS WITH NOTES`.
3. Summarize what was built.
4. Summarize what was tested.
5. List known limitations and risks.
6. Draft changelog and release note entries.
7. Recommend release or do not release yet.
8. Update `docs/planning/workflow-state.md` to `HUMAN_RELEASE_APPROVAL` and `Release approved: No`.
9. If release is later approved, append that decision to `docs/planning/decisions.md`.
10. Stop for explicit human release approval.

Do not deploy without human approval.

## Output format

```markdown
## Release recommendation: [Slice name]

### QA status
PASS / PASS WITH NOTES

### What was built

### What was tested

### Known limitations

### Risks

### Changelog entry draft

### Release notes draft

### Deployment checklist
- [ ] 

### Recommendation
Release / Do not release yet

### Human approval needed
Approve before deploy/release.
```
