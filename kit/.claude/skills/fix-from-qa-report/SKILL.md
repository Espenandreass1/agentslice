---
name: fix-from-qa-report
description: Fix QA blockers only within a formal PR's approved lane and scope, then request independent re-test.
---

# Fix From QA Report

## Read

Verify the workspace and minimal preflight. Read the PR, changed files, coding rules, and the blocker evidence or exceptional QA report.

## Guardrails

- Fix only approved blockers inside PR scope. A new area, lane, or user outcome needs reclassification and approval.
- Do not turn a `fast-bug` into a broader feature silently; CI limits remain active.
- Keep sensitive safeguards intact and require independent re-test.

## Steps

1. State only the blocker and intended fix.
2. Implement the narrow fix and run focused checks.
3. Update PR live status and request independent QA re-test.

## Output

Report changed files, one-line checks, residual risk, and re-test next action. Do not create a duplicate status document.
