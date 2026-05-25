<div align="center">

# AgentSlice

A free, open-source workflow kit for AI coding agents.  
Makes Cursor, Claude Code, Codex and Windsurf ask before they edit.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/espenandreass1/agentslice)](https://github.com/espenandreass1/agentslice/issues)
[![Discussions](https://img.shields.io/github/discussions/espenandreass1/agentslice)](https://github.com/espenandreass1/agentslice/discussions)

[Website](https://getagentslice.com) •
[Discussions](https://github.com/espenandreass1/agentslice/discussions)

</div>

---

## Quick start

```bash
npx agentslice init
# Paste INSTALL_PROMPT.md into Cursor / Claude Code / Codex / Windsurf
# Watch the agent ask, plan, and wait
```

That's it. No build step, no runtime, no editor extension.

## 30-second demo

<div align="center">
  <img src="https://getagentslice.com/assets/demo-poster.jpg" alt="AgentSlice demo" width="600">
</div>

## What it does

AI coding agents work better when they know the next step. Without a workflow they suffer from three failure modes developers describe constantly:

- **Context drift** — the agent forgets what was decided two messages ago and reopens settled questions.
- **Wandering edits** — the agent expands the task, touches files you didn't ask about, and burns tokens on detours.
- **Editing without asking** — the agent jumps straight to changes before you've approved a plan.

AgentSlice gives the agent a project-local workflow it actually reads: a tiny set of Markdown files that pin down the phases, the gates, and the next required action so the agent asks first, plans first, and waits for approval before it edits.

## What's in the kit

| File | Purpose |
|---|---|
| `INSTALL_PROMPT.md` | The one prompt you paste into your AI tool to bootstrap the workflow. |
| `docs/planning/workflow-state.md` | Resumable state file — current phase, approved slice, QA status, next allowed action. |
| `.agents/skills/` | Shared planning skills: intake, slice planning, spec, QA gate, release, advance. |
| `.cursor/rules/` | Project rules for Cursor. |
| `.claude/skills/` + `CLAUDE.md` | Skills and project memory for Claude Code. |
| `.codex/skills/` + `AGENTS.md` | Skills and project rules for Codex. |
| `.windsurf/rules/` + `.windsurfrules` | Rules for Windsurf. |

Everything is plain Markdown. You can read it, fork it, edit it for your stack.

## Supported tools

Cursor · Claude Code · Codex · Windsurf · OpenCode · any agent that respects project-level rule files (`AGENTS.md`, `CLAUDE.md`, `.cursor/rules/`, `.windsurfrules`).

## How it works

```
Ask → Plan → Approve → Build → QA → Release → Next
```

1. **Ask.** The agent asks up to five product questions and writes lightweight context.
2. **Plan.** It proposes a first *slice* — the smallest end-to-end vertical you can ship.
3. **Approve.** You approve, reject, or adjust the slice. The agent waits.
4. **Build.** Only after approval does the agent write code.
5. **QA.** The agent (or a QA subagent, where supported) checks the work and reports PASS / PASS WITH NOTES / FAIL.
6. **Release.** A release recommendation is written. You approve.
7. **Next.** The state file advances to the next slice. The loop repeats.

The state lives in `docs/planning/workflow-state.md` so the next agent session resumes from a real checkpoint instead of re-guessing.

## Why this exists

I spent 3 months experimenting with building AI products and testing different workflows. This is the workflow that actually worked — intake questions, slice discipline, QA handoff, cross-tool consistency. 

The category norm in 2026 is open and forkable: `awesome-cursorrules` has 27k stars, BMAD is open source, shadcn made free components into a category. So I'm making it available free for everyone.

## Why no runtime, why just Markdown

AgentSlice is deliberately not an editor extension, daemon, or hook system. Two reasons:

1. **Portability.** The same files work in Cursor, Claude Code, Codex, Windsurf, OpenCode, and any future agent that reads project rules. A runtime would lock you into one tool.
2. **Honesty.** No Markdown file can *force* an LLM to obey. The gates are soft — discipline through clarity, not enforcement. AgentSlice is up-front about this. The workflow is durable because it lives in your repo, not because it traps the model.

If you need hard enforcement, pair AgentSlice with Cursor's PLAN / ASK toggle or Claude Code's hooks. AgentSlice gives the agent the workflow; your tool of choice can add the gates.

## Contributing

PRs, issues, and discussion are all welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

The fastest way to help: open an issue with the exact prompt + tool + transcript where AgentSlice misbehaved. Real failure transcripts are gold for tuning the rules.

## License

[MIT](./LICENSE). Use it however you want — personal projects, client work, internal tooling, your own product. If you build something on top of AgentSlice, a link back is appreciated but not required.

## Maintainer

Built and maintained by [Espen Andreassen](https://www.linkedin.com/in/andreassenespen/). Reach out at espen@getagentslice.com or [open a discussion](https://github.com/espenandreass1/agentslice/discussions).

---

<div align="center">
Made in Norway. Opinionated. Free. MIT.
</div>
