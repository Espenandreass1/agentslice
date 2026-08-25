---
name: write-product-slice
description: Use to turn active product direction into one to three small living slice candidates and recommend one. Does not write a full spec or code.
---

# Write Product Slice

## Read

Read the active preflight, then `vision.md`, `tech-stack.md`, and live `next-slices.md`. Use an open question or archive record only when it directly resolves an active planning decision.

## Guardrails

- Do not build or write a full implementation spec until human slice approval.
- Keep candidates small enough for human review in under five minutes.
- Keep exactly one to three living candidates in `next-slices.md`; archive replaced proposals instead of accumulating them.
- Do not parallelize this sequential planning step.

## Steps

1. Confirm phase is `VISION`, `SLICE_OPTIONS`, or `NEXT_SLICE`; otherwise explain the mismatch.
2. Summarize active product context and constraints without duplicating source documents.
3. Propose one to three candidates with value, likely areas, non-scope, risks, and priority.
4. Recommend the smallest visible-value slice and state its acceptance criteria, rough size, and must-not-change areas.
5. Update `next-slices.md`, `active-context.md`, phase `SLICE_OPTIONS`, and checkpoint.
6. Stop for explicit human slice approval.

## Output

Give concise options, one recommendation, and the requested approval. A quick fix is still a fully gated slice; do not repeat the active context or historical proposals.
