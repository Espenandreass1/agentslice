# Deployment Checklist

Use the PR as the current decision record. For a controlled or production release, confirm:

- [ ] One valid lane passed the AgentSlice CI gate.
- [ ] Human scope approval and, when controlled, plan/spec approval are visible in the PR.
- [ ] Independent QA is `PASS` or `PASS WITH NOTES`; blockers are resolved.
- [ ] The PR states selected/deferred checks, residual risk, and rollback.
- [ ] Relevant auth/ownership, database/RLS/migration, commerce, build/framework, and production checks ran or have an explicit human risk decision.
- [ ] Human release approval is recorded before deployment.
- [ ] One short user-facing changelog entry is ready when users are affected.

Create external release notes only when an external audience exists. Do not create them for internal/local-first releases.
