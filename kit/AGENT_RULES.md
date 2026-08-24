# AgentSlice Agent Rules

This is the canonical, permanent workflow contract. It must exist in every AgentSlice project. `docs/planning/workflow-state.md` is the only source of truth for the active phase and approval fields; do not infer either from another document.

AgentSlice is a Markdown workflow kit, not an executable gatekeeper. Enforce these rules through your behavior and distinguish human approval from technical enforcement.

## Required approval gates

Do not change these four gates:

1. A human approves the slice before a full build spec is written.
2. A human approves the build spec before implementation begins.
3. Independent QA returns `PASS` or `PASS WITH NOTES` before a release recommendation.
4. A human approves the release before deployment or release.

Natural approval language is valid (`approve`, `approved`, `yes, go`, `go for it`, `looks good`, or equivalent). If it could refer to something other than the current slice, spec, or release, ask for confirmation.

## Progressive context

At every start, resume, or phase change, read only this active preflight:

- `AGENT_RULES.md`
- `docs/planning/active-context.md`
- `docs/planning/workflow-state.md`
- `docs/planning/current-slice.md`

Then add only the context for the current role:

| Role | Read in addition to the active preflight |
|---|---|
| Planning | `docs/product/vision.md`, `docs/engineering/tech-stack.md`, and live `docs/planning/next-slices.md` |
| Build | The approved spec and `docs/engineering/coding-rules.md` |
| QA | The approved spec, changed files, `docs/qa/qa-plan.md`, and at most one directly relevant earlier QA report when needed |
| Release | The current spec, current QA report, and `docs/release/changelog.md` |

Never bulk-read `docs/specs/`, `docs/qa/`, release documents, decision logs, or archives as preflight. When history is needed, start with `docs/archive/README.md`, then use its links or targeted search to open only the relevant record.

### Legacy-project fallback

New AgentSlice projects always include `active-context.md`. In an existing project that predates it, preserve the gates and seed this file from the current state, current slice, vision, and tech stack only; do not compensate by bulk-reading history. Follow `docs/agents/migrating-to-active-context.md` and keep old records reachable through the archive index.

## Hard stops

- No approved slice: do not write implementation code.
- No approved spec, or `Spec approved` is not `Yes`: do not write implementation code.
- The approved spec does not name likely touched files or areas: stop and ask.
- A needed change falls outside the approved spec: stop and obtain a scope/spec update.
- QA result is `FAIL`: do not recommend release.
- Release approval is not `Yes`: do not deploy or release.
- Active phase or approval fields are unclear: stop and ask where to resume.

## Quick-fix lane

Use the quick-fix lane only for a small, reversible correction with a narrow regression surface (normally one or two areas). It may use a compact slice and compact spec, but it never bypasses any of the four gates, scope limits, security review, lint/typecheck, or independent QA.

- A fix already inside an approved spec may be handled as a QA fix and re-tested.
- A new fix needs explicit slice approval, a short approved spec, QA, and release approval like any other slice.
- Auth, ownership, database/RLS, payments/commerce, privacy, migrations, shared contracts, or production configuration are never quick-fix shortcuts; apply the relevant broader QA.

## Scope, QA, and security

- Build only the approved slice. Do not silently expand scope, refactor unrelated code, or add production dependencies without approval.
- Keep slices reviewable in under five minutes. A small spec and QA report should each be about 120 lines or fewer; document a risk-based reason when either must be longer.
- QA is independent: use a separate QA agent where available, otherwise switch to a critical independent QA role.
- Treat auth, data, ownership, privacy, and commerce risks as release blockers until resolved.
- QA must state the checks selected, skipped checks and reasons, acceptance-criteria result, findings, and release recommendation. It links to the spec rather than repeating it.

## Active-document updates and archive

- Update `workflow-state.md` after each phase change. Keep it limited to active phase, approval fields, next action, valid phases, and hard stops.
- Update `active-context.md` when confirmed product context, active constraints, current slice/spec, next gate, QA policy, or nearest priorities change. Keep it at 180 lines or fewer.
- Keep `next-slices.md` to one to three living candidates; keep `decisions.md` to active decisions and constraints; add one short user-facing entry to `changelog.md` per release.
- Do not create separate release notes for an internal or local-first release unless there is an external audience.
- Move closed material to a dated archive; never delete history or leave a link broken. Follow `docs/archive/README.md`.

## Bundled skills

If an AgentSlice instruction names a skill, use the runtime skill when available. Otherwise read `.agents/skills/<skill-name>/SKILL.md` or `.claude/skills/<skill-name>/SKILL.md`; if neither is available, use a transparent general-capability fallback. Do not claim to have used an unavailable skill.
