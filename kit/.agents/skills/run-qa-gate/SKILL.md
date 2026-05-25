---
name: run-qa-gate
description: Use after implementation to verify the approved spec. Runs available checks, inspects acceptance criteria and regressions, and writes a QA result of PASS, PASS WITH NOTES, or FAIL.
---

# Run QA Gate

Use this skill after build work is complete and before release recommendation.

## Inputs to inspect

Read these files if they exist:

- `docs/planning/workflow-state.md`
- `AGENT_RULES.md`
- The approved spec in `docs/specs/`
- `docs/planning/current-slice.md`
- `docs/qa/qa-plan.md`
- `docs/qa/regression-checklist.md`
- Recent QA reports in `docs/qa/`
- `docs/engineering/coding-rules.md`
- `docs/release/deployment-checklist.md`

Also inspect changed files and available test commands.

## QA handoff contract

QA receives:

- Approved spec
- Changed files
- Acceptance criteria
- Test commands run or available
- Known risks and edge cases
- What could break

If the tool supports subagents, run QA in a separate QA subagent. If it does not, switch into an independent QA role and evaluate critically before returning to build/release mode.

## Concrete checks

Prefer real project checks over generic review:

- Run the smallest relevant automated checks first.
- If `package.json` exists, inspect scripts and run relevant lint, typecheck, test, and build commands when available.
- If `pyproject.toml` or `requirements.txt` exists, inspect available Python test/lint commands and run them when available.
- If no automated checks exist, perform a focused manual smoke test and say that QA confidence is limited.
- If the team wants CI, use `docs/qa/github-actions-ci-template.yml` as a starting point only after confirming the stack.

## Steps

1. Confirm workflow phase is `BUILD`, `QA_SUBAGENT`, or `QA_RETEST`.
2. Confirm the approved spec and acceptance criteria.
3. Inspect the implementation against the spec.
4. List every changed file and compare it to the approved files or areas.
5. Ask "what could this break?" and identify regression surfaces.
6. Run available tests, linters, type checks, builds, or smoke checks.
7. Note skipped checks and why they were skipped.
8. Check main flow, edge cases, error handling, and obvious regressions.
9. Separate release blockers from non-blocking notes.
10. Produce a QA result.
11. Update `docs/planning/workflow-state.md`:
   - `PASS` or `PASS WITH NOTES` -> `RELEASE_RECOMMENDATION`
   - `FAIL` -> `FIXES`

Do not recommend release if release blockers remain.

## QA result definitions

- `PASS`: Acceptance criteria met, no known release blockers.
- `PASS WITH NOTES`: Acceptance criteria met, no release blockers, but there are follow-up notes.
- `FAIL`: One or more release blockers remain.

## Output format

```markdown
## QA report: [Slice name]

### QA result
PASS / PASS WITH NOTES / FAIL

### Spec checked

### Checks run
- 

### Checks skipped
- 

### Changed files reviewed
- 

### What could break?
- 

### Acceptance criteria result
- [ ] Criterion:

### Findings

#### Release blockers
- 

#### Non-blocking notes
- 

### Regression notes

### File-by-file notes

| File | Change summary | Risk | QA note |
|---|---|---|---|
| [File] | [Summary] | [Low/Medium/High] | [Note] |

### QA confidence
High / Medium / Low, with reason

### Recommendation
Release / Fix before release
```
