---
name: advance-to-next-slice
description: Use after a human-approved release. Closes the active slice, preserves history through the archive index, refreshes living candidates, and waits for the next slice approval.
---

# Advance To Next Slice

## Read

Read the active preflight. As planning context, read `vision.md`, `tech-stack.md`, and live `next-slices.md`; read the current changelog entry only when confirming the completed release. Use the archive index for any historical question.

## Guardrails

- Confirm release approval before marking work released or deploying.
- Do not approve or implement the next slice.
- Keep `next-slices.md` to one to three candidates and archive replaced proposals/state snapshots instead of deleting history.

## Steps

1. Confirm the released slice and short changelog entry.
2. Mark the current slice released and set phase `NEXT_SLICE`.
3. Refresh active context: completed outcome, active constraints, next gate, and nearest priorities.
4. Refresh one to three living candidates, recommend one, set `SLICE_OPTIONS`, and stop for human slice approval.

## Output

Give the completed slice, links to its spec/QA/changelog, compact next options, recommendation, and explicit approval needed.
