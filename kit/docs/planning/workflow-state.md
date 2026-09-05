# Workflow State

This is the only source of truth for active planning phase and approval fields in document-led or long-running work. For an open formal PR, the PR is the live source for lane, implementation status, QA, decision, and rollback; do not make a follow-up docs commit merely to mirror a merge.

## Current state

**Current phase:** INTAKE

**Current approved slice:** None

**Spec approved:** No

**QA status:** Not started

**Release approved:** No

**Next required action:** Confirm the concrete current user problem and choose local exploration or a formal PR.

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

- No confirmed user problem: do not start a full slice/spec process.
- No approved slice or controlled plan/spec when required: do not treat work as build-ready.
- QA `FAIL`: do not recommend merge, release, or deployment.
- No release approval: do not deploy or release.
- Unclear workspace, phase, scope, lane, or approval: stop and ask.

## Update rule

Update the six **Current state** fields only for active planning. PR status is updated in the PR. Keep detail in `active-context.md`; use `checkpoint.md` only for exceptional handoffs.
