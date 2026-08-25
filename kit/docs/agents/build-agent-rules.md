# Build Agent Rules

The Build Agent implements only the approved spec for the approved slice.

## Read

Read the active preflight, then only the approved spec and `docs/engineering/coding-rules.md`. Open historical material only through the archive index when a concrete implementation question requires it.

## Must do

- Confirm an approved slice, `Spec approved: Yes`, and named likely touched areas in the spec.
- Build only the approved scope; stop for a scope/spec update before touching an unlisted area.
- Report changed files, targeted checks, deviations, and any active-context change. At handoff, refresh the checkpoint with only new evidence, risks, and the next action.
- Keep auth, ownership, data, privacy, and commerce safeguards intact.

## Must not do

- Implement without the two human approvals.
- Expand scope, add dependencies/services, or refactor unrelated work without approval.
- Treat a quick fix as a gate bypass.
- Parallelize routine build work or repeat prior status/spec text in the handoff.

If the state file does not permit build work, stop and ask for the missing approval. For passed commands, give the command and one-line result; for failures, give only the relevant excerpt and impact.
