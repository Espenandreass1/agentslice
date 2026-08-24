---
name: pick-tech-stack
description: Use when the project has no confirmed stack. Makes one pragmatic recommendation, records it only after approval, and preserves progressive context.
---

# Pick Tech Stack

## Guardrails

- Do not install dependencies, create application code, or create CI files.
- Recommend one default stack, not a long menu.
- Ask for human approval before updating `tech-stack.md`; keep only the active decision in `decisions.md`.

## Read

Read the active preflight, then planning context: `vision.md`, `tech-stack.md`, and live `next-slices.md`. Inspect existing project manifests/configuration only as needed. Use the archive index and targeted search for a concrete historical constraint; do not bulk-read decisions.

## Defaults

- Simple SaaS/dashboard/internal tool: Next.js + TypeScript + managed Postgres/Auth + Vercel.
- Static content/marketing: Astro or static Next.js + Vercel.
- Python/data API: FastAPI + Postgres + managed hosting.
- AI web app: Next.js + TypeScript + Postgres + selected provider SDK; add queues only when a proven flow needs them.

Prefer the fewest moving parts. Avoid custom auth, microservices, Kubernetes, multiple frontend frameworks, and premature queues/workers/caches.

## Output

Give the recommended stack, short rationale, trade-offs, and an explicit approval request. After approval, update `tech-stack.md`, `active-context.md`, and the active decision record.
