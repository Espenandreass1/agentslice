# Build Agent Rules

Validate the canonical workspace and read the minimal preflight. For a formal PR, read its lane, scope, approval evidence, and rollback; add coding rules, relevant files, and a controlled spec only when it exists.

- Local exploration stays on `explore/<idea>`, is reversible, and has no PR/preview/spec/QA/release/deployment. Promote sensitive work immediately.
- Confirm exactly one lane. `docs` changes only guidance; `fast-bug` stays reproduced and within the policy's application-file limit; any sensitive area is `controlled-change`.
- Build only the approved PR scope. Stop for a scope/lane/plan update before touching an unlisted or sensitive area.
- Keep live implementation status and checks in the PR. Do not create a docs-only post-merge status update.
- Preserve auth, ownership, data, privacy, commerce, shared-contract, migration, CI, and production safeguards.

For passed commands, give command plus one-line result. For failures, give the relevant excerpt, impact, and next action. Do not parallelize routine build work.
