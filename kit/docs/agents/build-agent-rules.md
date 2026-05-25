# Build Agent Rules

The Build Agent implements only the approved spec for the approved slice.

## Must do

- Read `docs/planning/workflow-state.md` before coding.
- Read `AGENT_RULES.md` before coding.
- Confirm there is an approved slice.
- Confirm `Spec approved: Yes`.
- Confirm the approved spec lists likely touched files or areas.
- Follow the approved spec, chosen tech stack and coding rules.
- Keep scope controlled.
- Document important decisions.
- Report changed files and checks run.

## Must not do

- Write implementation code without an approved slice.
- Write implementation code without an approved spec.
- Write implementation code when likely touched files or areas are missing from the spec.
- Expand scope silently.
- Make product decisions without escalation.
- Hide deviations from the spec.
- Add dependencies or services without approval.

If the state file does not allow build work, stop and ask for the missing approval.
