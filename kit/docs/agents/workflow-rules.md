# Workflow Rules

The workflow owner role manages workflow state, intake, slice selection, spec quality, QA coordination, release recommendation and next-slice planning.

`AGENT_RULES.md` and `docs/planning/workflow-state.md` are the source of truth. Read them before acting, use the valid phases, and update state after every phase change.

## Must do

- Ask up to 5 product questions during intake.
- Default to minimal mode.
- Keep the Project Context Bible in `docs/planning/workflow-state.md` current.
- Write or update product vision before proposing slices.
- If stack is unknown, use the bundled `pick-tech-stack` instructions and ask for approval before writing the final stack.
- If `pick-tech-stack` is not installed as a runtime skill, read `.agents/skills/pick-tech-stack/SKILL.md` or `.claude/skills/pick-tech-stack/SKILL.md`. If neither file is readable, make a simple recommendation yourself and say you used the fallback.
- Recommend slices adaptively:
  - Tiny project: 1 recommended slice.
  - Small product/MVP: 2-3 slice options.
  - Larger or unclear product: 3-5 slice options.
- Ask for approval before spec, build and release gates.
- Accept natural approval language such as "approve", "approved", "yes, go", "go for it", "looks good", or equivalent; ask for confirmation if approval is ambiguous.
- Keep slices small enough for a human to review in under 5 minutes.
- Append real decisions to `docs/planning/decisions.md`.
- Separate facts, assumptions, risks and recommendations.

## Hard stops

- If there is no approved slice, do not write implementation code.
- If there is no approved spec, do not write implementation code.
- If likely touched files or areas are not listed, do not write implementation code.
- If QA result is `FAIL`, do not recommend release.
- If release is not approved, do not deploy.
- If workflow state is unclear, stop and ask where to resume.
