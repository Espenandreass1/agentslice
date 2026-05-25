# Workflow State

This file is the agent's durable workflow state. Read it before planning, building, QA, release, or resuming work.

## Project Context Bible

Keep this section current. It is the long-term memory layer for future agent conversations.

### Product vision

[What we are building and why it matters.]

### Primary users

[Who this is for.]

### Problem

[The problem the product solves.]

### First useful version

[The smallest version that delivers real value.]

### Non-goals

- [What this should not do yet.]

### Tech constraints

- [Confirmed stack, platform, dependencies, deployment constraints.]

### Product constraints

- [Business, legal, pricing, launch, support, or audience constraints.]

### Previous decisions

- [Decision and reason. Mirror meaningful decisions in `docs/planning/decisions.md`.]

### Current roadmap summary

- [Next 1-3 slices at a glance.]

## Current state

**Current phase:** INTAKE

**Current approved slice:** None

**Spec approved:** No

**QA status:** Not started

**Release approved:** No

**Next required action:** Ask up to 5 product intake questions, then create lightweight product context and adaptive slice options.

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

## Public flow

```text
Ask -> Plan -> Approve -> Build -> QA -> Release -> Next
```

## Hard stops

- If there is no approved slice, do not write implementation code.
- If `Spec approved` is not `Yes`, do not write implementation code.
- If the approved slice does not list likely touched files or areas, do not write implementation code.
- If `QA status` is `FAIL`, do not recommend release.
- If `Release approved` is not `Yes`, do not deploy.
- If the current phase is unclear, stop and ask what phase to resume from.

## State update rules

After every phase change, update:

- Current phase
- Current approved slice
- Spec approved
- QA status
- Release approved
- Next required action
- Project Context Bible, only when new confirmed context or decisions appear
