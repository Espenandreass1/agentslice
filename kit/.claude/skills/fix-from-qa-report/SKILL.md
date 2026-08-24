---
name: fix-from-qa-report
description: Use after QA finds blockers. Fixes only approved blockers within the approved scope and prepares an independent QA re-test.
---

# Fix From QA Report

## Read

Read the active preflight, then the approved spec, `coding-rules.md`, changed files, and the current QA report that identified the blocker. Do not scan all QA reports or decision history.

## Guardrails

- Confirm phase `FIXES` and distinguish blockers from non-blocking notes.
- Fix only approved blockers inside the approved spec. A scope/product change requires renewed approval.
- Run focused checks and preserve auth, ownership, data, privacy, and commerce safeguards.
- A QA fix is not a release approval and always needs independent re-test.

## Steps

1. Summarize the specific blockers and requested fixes.
2. Implement only those fixes; report files changed and checks run.
3. Update active context if the active risk or next gate changed.
4. Set phase `QA_RETEST` and run `run-qa-gate` again.
