# Migrating an Existing AgentSlice Project

This migration is additive and preserves old projects and history.

1. Add `AGENT_RULES.md`, `agentslice.policy.json`, `.github/PULL_REQUEST_TEMPLATE.md`, `.github/agentslice/verify-pr-lane.mjs`, and `.github/workflows/agentslice-pr-gate.yml` without replacing unrelated GitHub workflows. Set `canonicalWorkspace` to the one Git root agents should edit.
2. Adapt `sensitiveAreas`, `applicationPaths`, and the docs/fast-bug lane limits in the policy to the actual project. For Matlenke, include Supabase/database/RLS, login/ownership/creator profiles, OpenAI/social imports, Oda/cart/commerce, public recipe/store pages, and Vercel/GitHub Actions/deploy configuration.
3. Protect the main branch in GitHub: require human review and the **Verify AgentSlice lane** check. CI validates classification; branch protection enforces review.
4. Seed `active-context.md` from current facts only. Reduce `workflow-state.md` to its active fields. Keep legacy specs, QA reports, and release records valid; do not bulk-import them into new context.
5. Move closed decisions, old proposals, old state snapshots, exceptional checkpoints, and older release notes to a dated archive. Update `docs/archive/README.md` and leave redirects for existing links.
6. Use a short `explore/<idea>` branch for a low-risk idea. It gets no PR, preview, spec, QA record, or deployment. Promote anything valuable to a PR; promote sensitive work immediately as `controlled-change`.
7. For new PRs, use the template and keep lane, progress, QA, merge/release decision, and rollback there. Do not add a docs-only commit after merge just to update status.

The formal gates still apply: human scope approval; human controlled plan/spec approval; independent QA `PASS`/`PASS WITH NOTES`; human release approval. The evidence can be compact and PR-based, but auth, data, ownership, commerce, and production safeguards are not relaxed.
