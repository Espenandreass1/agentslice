# Workflow State

This is the only source of truth for the active phase and approval fields. Read it with `AGENT_RULES.md`, `active-context.md`, and `current-slice.md` before acting. Keep long-lived context in `active-context.md`, not here.

## Current state

**Current phase:** INTAKE

**Current approved slice:** None

**Spec approved:** No

**QA status:** Not started

**Release approved:** No

**Next required action:** Ask up to five product intake questions, then update the active context and propose a small set of slice options.

## Valid phases

```text
INTAKE
VISION
SLICE_OPTIONS
SLICE_APPROVED
SPEC_DRAFTED
SPEC_APPROVED
BUILD
QA_SUBAGENT
FIXES
QA_RETEST
RELEASE_RECOMMENDATION
HUMAN_RELEASE_APPROVAL
CHANGELOG
NEXT_SLICE
```

## Hard stops

- No approved slice: do not write implementation code.
- `Spec approved` is not `Yes`: do not write implementation code.
- The approved spec lacks likely touched files or areas: do not write implementation code.
- `QA status` is `FAIL`: do not recommend release.
- `Release approved` is not `Yes`: do not deploy or release.
- The phase or approval fields are unclear: stop and ask where to resume.

## Update rule

After every phase change, update only the six fields in **Current state**. Update `active-context.md` separately when confirmed active context changes.
