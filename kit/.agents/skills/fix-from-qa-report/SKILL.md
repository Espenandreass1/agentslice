---
name: fix-from-qa-report
description: Use when a QA report has FAIL or release blockers. Fixes only approved QA issues, avoids scope expansion, and prepares the work for QA re-test.
---

# Fix From QA Report

Use this skill after QA identifies release blockers.

## Inputs to inspect

Read these files if they exist:

- `docs/planning/workflow-state.md`
- Latest QA report in `docs/qa/`
- Approved spec in `docs/specs/`
- `docs/planning/current-slice.md`
- `docs/engineering/coding-rules.md`
- `docs/planning/decisions.md`

## Steps

1. Confirm workflow phase is `FIXES`.
2. Summarize QA findings.
3. Separate release blockers from non-blocking notes.
4. Confirm which findings are approved to fix if unclear.
5. Fix only the approved release blockers.
6. Avoid unrelated refactors or scope expansion.
7. Run targeted checks.
8. Update `docs/planning/workflow-state.md` to `QA_RETEST`.
9. Provide a re-test summary and recommend running `run-qa-gate` again.

If a requested fix changes scope or product behavior beyond the approved spec, stop and ask for approval.

## Output format

```markdown
## QA fix summary: [Slice name]

### Release blockers addressed
- 

### Files changed
- 

### Checks run
- 

### Remaining issues
- 

### Re-test needed
Run QA again before release recommendation.
```
