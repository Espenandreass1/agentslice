# AgentSlice

A Markdown workflow kit for building software with AI coding tools.

For setup, copy `INSTALL_PROMPT.md` into your AI coding tool.

## What this is

This is a set of Markdown files, persistent rules, prompts, skills, QA checks and a state file that make the intended workflow explicit and easier for agents to resume.

Public flow:

```text
Ask -> Plan -> Approve -> Build -> QA -> Release -> Next
```

## Who this is for

This kit is for people who are already using an AI coding tool such as Cursor, Claude Code, Codex, Windsurf or similar, but want a clearer workflow before the agent starts changing files.

You should be comfortable opening a project folder, unzipping files into it, and pasting a prompt. This is not a no-code app builder.

## Soft gates, not hard enforcement

The approval gates are persistent workflow rules, not technical enforcement. They help the agent stop at slice, spec, QA and release checkpoints, but they do not block tool calls at the operating-system or editor level.

For hard enforcement, you would need tool-specific hooks or a real runtime gatekeeper. This kit keeps the default install portable and simple.

## What this does NOT do

- It is not an executable runtime.
- It is not a validator or runtime gatekeeper.
- It does not install editor hooks or block file edits at the tool level.
- It cannot technically prevent a user or model from ignoring the rules.
- It does not generate a complete app by itself.
- It does not replace human approval, product judgment, code review, QA, or deployment responsibility.

The value is persistent workflow structure: project context, approval gates, QA handoff, resumable state, and repeatable next-slice planning.

## Main Files

- `AGENT_RULES.md`: permanent workflow contract for agents
- `INSTALL_PROMPT.md`: copy-paste prompt to start the workflow
- `docs/planning/active-context.md`: compact active context for a start or resume
- `docs/planning/workflow-state.md`: phase and approval source of truth
- `docs/product/vision.md`: lightweight product context
- `docs/engineering/tech-stack.md`: chosen or recommended stack
- `docs/planning/next-slices.md`: candidate slices
- `ROADMAP_SLICES.md`: human-readable next-slice view
- `docs/planning/current-slice.md`: approved/current slice
- `docs/archive/README.md`: targeted history index and migration routine
- `docs/specs/spec-template.md`: adaptive build spec template
- `docs/qa/qa-report-template.md`: QA result template
- `docs/qa/github-actions-ci-template.yml`: optional CI starting point
- `AGENTS.md`, `CLAUDE.md`, `.cursor/`, `.windsurf/`: tool-specific workflow rules
- `.agents/skills/`, `.claude/skills/`: reusable workflow skills where supported

## Workflow

First use:

```text
INSTALL_PROMPT.md -> intake questions -> tiny slice approval -> spec approval -> build -> QA
```

Do not start implementation until a slice and spec are clearly approved. Natural approval language is fine.

## Context and history

At startup, agents read only `AGENT_RULES.md`, `active-context.md`, `workflow-state.md`, and `current-slice.md`. Each role then adds only its immediate inputs. Specs, QA reports, releases, decisions, and archives are opened through direct links or the archive index for a concrete need—not as bulk preflight. See `docs/agents/migrating-to-active-context.md` when upgrading an existing project.
