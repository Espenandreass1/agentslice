---
name: prepare-release
description: Use after independent QA passes. Makes a concise, traceable release recommendation and waits for human approval.
---

# Prepare Release

## Read

Read the active preflight, current approved spec, current QA report, and `docs/release/changelog.md`. Do not bulk-read release notes, older QA reports, decisions, or archives.

## Guardrails

- Confirm phase `RELEASE_RECOMMENDATION` and QA result `PASS` or `PASS WITH NOTES`.
- Link to QA evidence; do not repeat QA tables or the full spec.
- Do not deploy without explicit human release approval.
- Draft external release notes only when an external audience exists; internal/local-first releases use the changelog only.

## Steps

1. State the slice outcome, QA result, known limitations, and residual risks concisely.
2. Draft one short user-facing changelog entry with links to the spec and QA report.
3. Set phase `HUMAN_RELEASE_APPROVAL`, `Release approved: No`, and update the next gate in active context.
4. Stop for human approval. After approval, release/deploy as authorized and record the short changelog entry.
