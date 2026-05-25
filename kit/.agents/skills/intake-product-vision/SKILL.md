---
name: intake-product-vision
description: Use on first run or when product context is missing. Asks up to 5 product questions, writes lightweight vision/context, proposes adaptive slice options, and stops for approval.
---

# Intake Product Vision

Use this skill before any implementation work when product context is missing or vague.

## Hard rules

- Ask at most 5 product questions.
- Do not write implementation code.
- Do not write a full build spec.
- Do not choose a slice as approved unless the human explicitly approves it.
- Default to minimal mode unless the human asks for full mode.
- Update `docs/planning/workflow-state.md`.

## Inputs to inspect

Read these files if they exist:

- `docs/planning/workflow-state.md`
- `docs/product/vision.md`
- `docs/engineering/tech-stack.md`
- `docs/planning/next-slices.md`
- `docs/planning/open-questions.md`
- `docs/planning/decisions.md`

## Intake questions

Ask only the questions needed, up to 5:

1. What are you trying to build?
2. Who is it for?
3. What problem should it solve?
4. What should the first useful version do?
5. What should it not do yet?

If the user already answered some of these, do not ask again.

## Adaptive planning

Classify the project before proposing slices:

- `tiny`: very small utility, prototype, landing page, demo, or one-screen app.
- `small`: normal MVP, CRUD app, internal tool, SaaS wedge, or product with a few connected flows.
- `larger`: multi-role product, existing app, complex domain, multiple integrations, payments, compliance, or unclear scope.

Slice count:

- `tiny`: propose 1 recommended slice.
- `small`: propose 2-3 options.
- `larger`: propose 3-5 options.

Do not create a heavy roadmap by default. Use `docs/planning/next-slices.md` as the lightweight planning surface.

## Steps

1. Set workflow phase to `INTAKE`.
2. Ask up to 5 product questions.
3. Summarize the answers and ask for confirmation if the direction is unclear.
4. Create or update `docs/product/vision.md`.
5. If the tech stack is missing or unclear, offer to run `pick-tech-stack`.
6. Capture meaningful unknowns in `docs/planning/open-questions.md`.
7. Propose the adaptive number of first slice options in `docs/planning/next-slices.md`.
8. Recommend one slice.
9. Append real approvals or chosen stack decisions to `docs/planning/decisions.md`.
10. Set workflow phase to `SLICE_OPTIONS`.
11. Stop for human slice approval.

## Output format

```markdown
## Product intake summary

### Product idea

### Target user

### Problem

### First useful version

### Not yet

### Project size
Tiny / small / larger

### Unknowns
- 

## First slice recommendation

### Slice options
- 

### Recommended slice

### Why this slice

### Approval needed
Approve, reject, or adjust this slice before I write a build spec.
```
