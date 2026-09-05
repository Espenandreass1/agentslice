---
name: write-build-spec
description: Create a compact controlled-change plan only when the PR needs more durable detail than its template safely holds.
---

# Write Build Spec

## Read

Verify the workspace and minimal preflight. Read the formal PR, policy, coding rules, and planning context. Open one historical record only for a concrete unresolved constraint.

## Guardrails

- Use this for `controlled-change`, audit-sensitive, or unusually risky work—not ordinary docs, fast bugs, or bounded features.
- The PR remains the live status source.
- Require human controlled plan/spec approval before sensitive implementation proceeds.
- Keep the spec around 120 lines or fewer; explain a longer record by risk.

## Steps

1. Link the PR and state the user problem, touched/must-not-touch areas, policy trigger, acceptance, QA, and rollback.
2. Set human approval evidence in the PR and planning state only when it is active planning.
3. Stop for explicit controlled plan/spec approval.

## Output

Link the compact plan and request approval. Do not duplicate PR status or create an unnecessary checkpoint.
