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
- Keep `next-slices.md` to one to three candidates and archive replaced proposals, state snapshots, and the completed checkpoint instead of deleting history.
- Do not parallelize this sequential handoff.

## Steps

1. Confirm the released slice and short changelog entry.
2. Mark the current slice released and set phase `NEXT_SLICE`.
3. Archive the completed checkpoint in the dated archive and update the index; leave redirects if a referenced path moved.
4. Refresh active context and a new checkpoint: completed outcome, active constraints, next gate, nearest priorities, and reset per-slice telemetry.
5. Refresh one to three living candidates, recommend one, set `SLICE_OPTIONS`, and stop for human slice approval.

## Output

Give the completed slice, links to its spec/QA/changelog/checkpoint, compact next options, recommendation, and explicit approval needed. Do not repeat QA tables or prior status.
