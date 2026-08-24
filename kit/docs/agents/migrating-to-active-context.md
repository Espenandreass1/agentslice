# Migrating an Existing AgentSlice Project

1. Add the current kit's `AGENT_RULES.md`, `docs/planning/active-context.md`, and `docs/archive/README.md` without deleting existing records.
2. Copy only the currently true product summary, constraints, current slice/spec, next gate, QA policy, and nearest priorities into `active-context.md`.
3. Reduce `workflow-state.md` to phase, approval fields, next action, valid phases, and hard stops. Save its former long context as a dated snapshot, for example `docs/archive/2026-08/workflow-state-before-active-context.md`.
4. Keep one to three live candidates in `next-slices.md`; archive older proposals. Keep only active constraints in `decisions.md`; archive closed decisions. Keep one short user-facing entry per release in `changelog.md`; archive older entries when needed.
5. Add every moved record and any old-path redirect to `docs/archive/README.md`. If an incoming link cannot be updated, leave a short stub at the old path pointing to its archived location.
6. Update tool rules and bundled skills from this kit. Existing specs, QA reports, and release notes remain valid historical evidence and should be opened only through the index or a direct link.

The approval gates do not change: slice approval, spec approval, independent QA `PASS`/`PASS WITH NOTES`, then human release approval.
