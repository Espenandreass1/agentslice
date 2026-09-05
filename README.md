<div align="center">

# AgentSlice

**A PR-first workflow kit for AI coding agents.**

Local exploration when an idea is uncertain. Automatic lane checks when a change matters.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/espenandreass1/agentslice)](https://github.com/espenandreass1/agentslice/issues)
[![GitHub Discussions](https://img.shields.io/github/discussions/espenandreass1/agentslice)](https://github.com/espenandreass1/agentslice/discussions)

[Website](https://getagentslice.com) · [Discussions](https://github.com/espenandreass1/agentslice/discussions)

</div>

## Quick start

```bash
npx agentslice@latest init
```

1. Paste `INSTALL_PROMPT.md` into Cursor, Claude Code, Codex, or Windsurf.
2. Set `canonicalWorkspace` and the sensitive paths in `agentslice.policy.json`.
3. In GitHub, require **Verify AgentSlice lane** and human review before merging to your protected branch.

## The workflow scales with risk

```text
Concrete user problem
        ↓
Explore locally ── abandon or promote ──→ Formal PR → Independent QA → Human release decision
```

An `explore/<idea>` branch is intentionally light: no PR, preview, spec, QA record, release note, checkpoint, merge, or deployment. It is for finding out whether an idea is worth keeping. Sensitive work is promoted quickly to a controlled PR.

Every formal pull request has exactly one lane:

| Lane | Best for | Process |
|---|---|---|
| `docs` | Text and guidance only | Review affected docs; no required application test or Vercel build |
| `fast-bug` | Reproduced, narrow bug | Focused regression; maximum two application files by default |
| `standard-feature` | One bounded user outcome | Targeted acceptance and domain regression |
| `controlled-change` | Auth, data/RLS, public contract/page, integration, commerce, hosting, CI, production data | Explicit plan, broader QA as triggered, approval, and rollback |

The PR is the live source for lane, scope, work completed, QA result, merge/release decision, and rollback. Low-risk work does not need separate spec, QA, release, and handoff files just to say the same thing.

## Harder to misclassify

The installed GitHub Action runs on PR creation, updates, and description edits. It reads the policy from the trusted base branch and:

- requires exactly one lane marker;
- rejects a non-controlled lane on a sensitive path;
- restricts a `fast-bug` to its configured application-file boundary.

The lane gate is technical enforcement of classification, not a replacement for review. GitHub branch protection should require this check and a human review. The workflow uses `pull_request_target` while checking out only the base ref; GitHub recommends never running untrusted PR code in this event context. [GitHub’s event guidance](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request_target)

## Context without context debt

At start/resume, agents validate the canonical workspace and read only:

- `AGENT_RULES.md`
- `docs/planning/active-context.md`
- `docs/planning/workflow-state.md`
- `docs/planning/current-slice.md`

They add only role-specific inputs after that. History stays intact in `docs/archive/`, but is opened through the index and targeted search only when a concrete question requires it. Active docs are intentionally short; normal PRs are not duplicated into status documents after merge.

## What is included

| File | Purpose |
|---|---|
| `AGENT_RULES.md` | Canonical local-exploration, PR, approval, QA, and archive rules |
| `agentslice.policy.json` | Canonical workspace plus project-specific sensitive paths and lane limits |
| `.github/PULL_REQUEST_TEMPLATE.md` | Live PR status, QA, decision, and rollback template |
| `.github/workflows/agentslice-pr-gate.yml` | CI lane/path guard |
| `docs/planning/active-context.md` | Compact product context and nearest decision |
| `docs/planning/workflow-state.md` | Active planning phase and approvals for document-led/legacy work |
| `.agents/skills/`, `.claude/skills/` | Skills for exploration, planning, controlled specs, QA, release, and archival |

Everything is plain Markdown, JSON, and a small local GitHub Action helper. There is no daemon, editor extension, or application runtime.

## Existing projects

The migration is additive. Existing specs, QA reports, release notes, and decisions remain valid evidence; they are not deleted or bulk-loaded. See [the migration guide](kit/docs/agents/migrating-to-active-context.md).

## Contributing and license

PRs, issues, and real failure transcripts are welcome. AgentSlice is [MIT licensed](LICENSE).
