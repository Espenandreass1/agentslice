---
name: advance-to-next-slice
description: Close the planning loop after a release without creating stale docs that mirror the merged PR.
---

# Advance To Next Slice

## Read

Verify the workspace and minimal preflight. Add live planning candidates and the relevant changelog entry only when users were affected.

## Guardrails

- Confirm the release decision from the PR; do not create a post-merge status-doc commit.
- Keep one to three candidates and archive only superseded document-led records.
- Use a checkpoint only for an actual fresh-worker handoff or exceptional risk.

## Steps

1. Link the completed PR from the changelog/current planning context if useful.
2. Remove stale active planning references without duplicating PR QA/release status.
3. Archive closed proposals, decisions, or exceptional records through the index.
4. Recommend the next concrete user problem or stop if none is confirmed.

## Output

Give completed outcome/PR, compact next options, recommendation, and the next human decision.
