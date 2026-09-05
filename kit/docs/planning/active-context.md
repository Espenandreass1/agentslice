# Active Context

Keep this short (180 lines maximum). It is the active product memory, not a PR status mirror. Historical evidence is available through `docs/archive/README.md` only when a concrete question needs it.

## Product context

- Product and users: [One or two confirmed sentences.]
- Concrete current problem: [What user problem is active now, or `None confirmed`.]
- First useful outcome / non-goals: [Short confirmed scope.]

## Active constraints

- Product: [Current business, legal, audience, or launch constraints.]
- Technical: [Stack, compatibility, integration, or deploy constraints.]
- Security/data: [Auth, ownership, privacy, data, commerce, or policy constraints.]

## Current planning work

- Current slice: [Name/status; `current-slice.md` holds detail.]
- Current formal PR: [URL/number or `None`. The PR holds live status.]
- Current controlled spec/QA record: [Link only when required, otherwise `None`.]
- Scope boundary: [One short statement.]

## Next decision

- Needed: [User problem / explore or PR / slice approval / controlled plan approval / QA / release approval.]
- Evidence or human decision: [Short concrete request.]

## QA default

- Focused acceptance tests and relevant domain regression.
- Lint/typecheck for code changes.
- Full suite, build, and database checks only for the explicit trigger in `docs/qa/qa-plan.md`.

## Nearest priorities

1. [Current action.]
2. [Next likely action.]
3. [Optional only when live.]

## Pointers

- Project risk map: `agentslice.policy.json`
- Product detail: `docs/product/vision.md`
- Stack detail: `docs/engineering/tech-stack.md`
- Living candidates: `docs/planning/next-slices.md`
- Historical index: `docs/archive/README.md`
