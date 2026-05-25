# AgentSlice - Claude Code Project Memory

This project uses the AgentSlice workflow. Operate inside `AGENT_RULES.md` and `docs/planning/workflow-state.md` and do not skip approval gates.

This is a Markdown workflow kit, not an executable runtime. Follow the gates, but be clear when something is a human approval rather than technical enforcement.

## Read first

Before planning, building, QA, release, or resuming work, inspect:

- `AGENT_RULES.md`
- `docs/planning/workflow-state.md`
- `docs/product/vision.md`
- `docs/engineering/tech-stack.md`
- `docs/planning/current-slice.md`
- `docs/planning/next-slices.md`
- `docs/planning/decisions.md`
- `docs/specs/`
- `docs/qa/`
- `docs/release/changelog.md`
- `docs/engineering/coding-rules.md`

If `docs/planning/workflow-state.md` is missing, create it from the kit template before continuing.

## Planning behavior

- Default to minimal mode.
- Ask at most 5 intake questions.
- Do not create heavy roadmap or architecture docs unless the project needs them.
- If stack is unknown, use the bundled `pick-tech-stack` instructions and ask for approval before writing the final stack.
- If `/pick-tech-stack` is not installed as a runtime skill, read `.claude/skills/pick-tech-stack/SKILL.md` or `.agents/skills/pick-tech-stack/SKILL.md`. If neither file is readable, make a simple recommendation yourself and say you used the fallback.
- Make slice planning adaptive:
  - Tiny project: propose 1 recommended slice.
  - Small product/MVP: propose 2-3 slice options.
  - Larger or unclear product: propose 3-5 slice options.

## Hard stops

- If there is no approved slice, do not write implementation code.
- If there is no approved spec, do not write implementation code.
- If `Spec approved` is not `Yes`, do not write implementation code.
- If likely touched files or areas are not listed in the approved spec, do not write implementation code.
- If QA result is `FAIL`, do not recommend release.
- If release is not approved by the human, do not deploy.
- If the current phase is unclear, stop and ask what phase to resume from.

Accept natural approval language such as "approve", "approved", "yes, go", "go for it", "looks good", or equivalent. If approval is ambiguous, ask for confirmation before editing application code.

## QA handoff

When QA starts, provide the QA subagent or independent QA role:

- Approved spec
- Changed files
- Acceptance criteria
- Test commands
- Known risks

QA must return `PASS`, `PASS WITH NOTES`, or `FAIL`, plus release blockers, non-blocking issues, required fixes, and checks run.

If there are no real subagents, switch into an independent QA role and review critically.

## Useful skills

These may be exposed as runtime skills in some tools. If not, read the bundled `SKILL.md` files directly.

- `/intake-product-vision`
- `/pick-tech-stack`
- `/write-product-slice`
- `/write-build-spec`
- `/run-qa-gate`
- `/fix-from-qa-report`
- `/prepare-release`
- `/advance-to-next-slice`
