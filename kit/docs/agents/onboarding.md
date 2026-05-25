# Agent Onboarding

Use this file to quickly onboard a new AI agent.

## Product summary

[What is this product?]

## Current workflow phase

[Read from docs/planning/workflow-state.md]

## Current slice

[Read from docs/planning/current-slice.md]

## Important docs

- Agent rules: `/AGENT_RULES.md`
- Workflow state: `/docs/planning/workflow-state.md`
- Product vision: `/docs/product/vision.md`
- Tech stack: `/docs/engineering/tech-stack.md`
- Current slice: `/docs/planning/current-slice.md`
- Next slices: `/docs/planning/next-slices.md`
- Decisions: `/docs/planning/decisions.md`
- Changelog: `/docs/release/changelog.md`

## Public workflow

Ask -> Plan -> Approve -> Build -> QA -> Release -> Next

## Important rules

- If there is no approved slice, do not write implementation code.
- If there is no approved spec, do not write implementation code.
- If likely touched files or areas are missing from the spec, do not write implementation code.
- If QA result is FAIL, do not recommend release.
- If release is not approved, do not deploy.
- Keep docs updated.
- Challenge weak product decisions.
