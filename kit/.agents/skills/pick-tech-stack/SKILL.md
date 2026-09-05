---
name: pick-tech-stack
description: Recommend one pragmatic stack only when the active product direction truly needs a stack decision.
---

# Pick Tech Stack

## Read

Verify the canonical workspace and minimal preflight. Add planning context and inspect project manifests only as needed.

## Guardrails

- Do not install dependencies, create application code, or create CI files.
- Recommend one default, not a long menu; record it only after human approval.
- Consider the policy's sensitive areas and preserve active decisions only.

## Defaults

- Simple SaaS/dashboard: Next.js + TypeScript + managed Postgres/Auth + Vercel.
- Static content: Astro or static Next.js + Vercel.
- Python/data API: FastAPI + Postgres + managed hosting.
- AI web app: Next.js + TypeScript + Postgres + selected provider SDK; add queues only when proven.

## Output

Give recommendation, short trade-off, and approval needed. Update tech stack and active context after approval; no checkpoint unless a controlled handoff needs one.
