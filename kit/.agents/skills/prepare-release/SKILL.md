---
name: prepare-release
description: Turn a passing formal PR into a concise, traceable release decision without duplicating QA evidence.
---

# Prepare Release

## Read

Verify the workspace and minimal preflight. Read the PR, QA result, current changelog, and exceptional records only when linked by the PR.

## Guardrails

- Require `PASS` or `PASS WITH NOTES` and explicit human release approval before deployment.
- Keep outcome, risk, rollback, and release decision in the PR.
- Add one short changelog entry only when users are affected. Create external release notes only for an external audience.

## Steps

1. State outcome, QA result, residual risk, and rollback in the PR.
2. Obtain human release approval in the PR.
3. Release/deploy only as authorized, then add the short changelog entry when applicable.

## Output

Give PR link, QA result, residual risk, changelog link if created, and approval/deployment result. Do not repeat QA tables.
