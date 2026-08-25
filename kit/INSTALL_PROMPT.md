You are starting or resuming the AgentSlice workflow in this project.

Follow `AGENT_RULES.md`; `docs/planning/workflow-state.md` is the only source of truth for active phase and approval fields. This is planning-only until I explicitly approve both a slice and a build spec.

At every start, resume, or phase change, read only:

- `AGENT_RULES.md`
- `docs/planning/active-context.md`
- `docs/planning/workflow-state.md`
- `docs/planning/current-slice.md`
- `docs/planning/checkpoint.md`

`checkpoint.md` is a short handoff summary only; `workflow-state.md` remains the only source of truth for phase and approvals. For planning, then read `docs/product/vision.md`, `docs/engineering/tech-stack.md`, and live `docs/planning/next-slices.md`. Do not bulk-read decisions, specs, QA reports, changelogs, release notes, or archives. If history is needed, use `docs/archive/README.md` and targeted search.

First run a workspace sanity check:

1. Inspect the project root and decide whether it is the software project or only an unzipped AgentSlice folder.
2. If it is only the kit, stop and ask me to open the real project, copy the kit there, then paste this prompt again.
3. If I provide a real project path and you can safely copy there, offer to copy the kit without overwriting anything; then stop and ask me to reopen that project.
4. Verify these files exist: `AGENT_RULES.md`, `docs/planning/active-context.md`, `docs/planning/workflow-state.md`, `docs/planning/current-slice.md`, `docs/planning/checkpoint.md`, `docs/planning/next-slices.md`, `docs/specs/spec-template.md`, `docs/qa/qa-plan.md`, `docs/qa/qa-report-template.md`, `docs/engineering/coding-rules.md`, and one tool rule file (`AGENTS.md`, `CLAUDE.md`, `.cursor/rules/ai-coding-workflow.mdc`, or `.windsurf/rules/ai-coding-workflow.md`). Report missing workflow files and continue safely; do not create implementation code.

Hard rules:

- Preserve the four gates: human slice approval; human spec approval; independent QA `PASS`/`PASS WITH NOTES`; human release approval.
- Do not write implementation code without both approvals, or when likely touched areas are absent from the approved spec.
- Do not deploy after `FAIL` or without human release approval.
- The quick-fix lane never bypasses gates or security requirements.
- Keep `active-context.md` under 180 lines, `checkpoint.md` under 80 lines, `next-slices.md` to one to three living candidates, and active documents short. At every handoff refresh the checkpoint; after a human-approved gate archive only superseded history using `docs/archive/README.md`.
- Ask at most five product questions and default to minimal mode.
- A small spec and QA report should each be about 120 lines or fewer unless risk justifies more.
- Default QA to focused acceptance tests and relevant domain regression. A full suite needs an explicit shared-contract, auth/ownership, database/RLS/migration, public-flow (including commerce), build/framework, or production-critical/release trigger.
- Do not parallelize by default. Use a separate worker only for a clear independent gain; independent QA/review is the normal exception. Keep command results and handoffs compact and link rather than repeat.

Start now:

1. Set `workflow-state.md` to `INTAKE`, no approved slice/spec/release, `QA status: Not started`, and the next intake action. Refresh the matching `checkpoint.md`.
2. Ask only the missing questions, up to five: what to build, who it is for, problem, first useful version, and not-yet scope. Rough answers are fine.
3. Summarize confirmed answers, then update `vision.md`, `active-context.md`, useful open questions, and one to three live candidates in `next-slices.md`.
4. If the stack is unclear, offer one recommendation and ask approval before recording it in `tech-stack.md`.
5. Recommend one slice, set phase to `SLICE_OPTIONS`, and stop for my explicit slice approval. Do not draft a full spec or build yet.
