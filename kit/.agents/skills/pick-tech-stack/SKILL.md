---
name: pick-tech-stack
description: Use when the project has no stack yet or the stack choice is unclear. Gives a simple, opinionated recommendation with trade-offs and asks for approval before updating tech-stack.md.
---

# Pick Tech Stack

Use this skill before slice planning when the product idea is clear but the technical foundation is missing or vague.

If this skill is not installed as a runtime skill, follow these instructions from this bundled `SKILL.md` file. Do not claim the runtime skill was available unless it was actually available.

## Hard rules

- Do not install dependencies.
- Do not create application code.
- Do not create CI files yet.
- Recommend one default stack, not a menu of ten options.
- Ask for human approval before writing the final choice to `docs/engineering/tech-stack.md`.
- Append the approved stack decision to `docs/planning/decisions.md`.

## Inputs to inspect

Read these files if they exist:

- `docs/product/vision.md`
- `docs/planning/open-questions.md`
- `docs/planning/decisions.md`
- Existing app files such as `package.json`, `pyproject.toml`, `requirements.txt`, framework config files, or deployment config.

## Default recommendations

Use these as practical defaults, then adjust for the actual product:

- Simple SaaS, marketplace, dashboard, internal tool, or CRUD app: Next.js + TypeScript + Tailwind/shadcn + Supabase Postgres/Auth + Vercel.
- SaaS where polished hosted auth is more important than simplest setup: Next.js + TypeScript + Tailwind/shadcn + Clerk + Neon Postgres + Vercel.
- Static content, portfolio, marketing site, or docs-heavy site: Astro or Next.js static + Vercel.
- Python API, data-heavy tool, or automation backend: FastAPI + Postgres + Render or Fly.io.
- AI app with a web UI: Next.js + TypeScript + Vercel + Postgres + the chosen AI provider SDK. Add queues only when background jobs are truly needed.

For non-technical founders and designers, prefer the fewest moving parts and the best managed services over maximum flexibility.

## Anti-patterns

Avoid by default:

- Custom auth for a first version.
- Microservices for an MVP.
- Kubernetes or complex infrastructure.
- Multiple frontend frameworks in one project.
- Adding queues, workers, caches, or event buses before the product flow proves it needs them.
- Choosing a stack because it is trendy rather than because it reduces delivery risk.

## Output format

```markdown
## Tech stack recommendation

### Recommended stack
- Frontend:
- Backend:
- Database:
- Auth:
- Hosting:
- Payments:
- Email:
- Analytics:

### Why this stack
- 

### Trade-offs
- 

### Alternatives considered
- 

### Avoid for now
- 

### Approval needed
Approve, reject, or adjust this stack before I write it into docs/engineering/tech-stack.md.
```
