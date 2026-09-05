# Agent Onboarding

1. Verify that `agentslice.policy.json` names the current Git root. Stop on a mismatch.
2. Read `AGENT_RULES.md`, active context, workflow state, and current slice—nothing historical by default.
3. Ask what concrete user problem is being solved and whether this is a local exploration or a formal PR.
4. For a PR, choose one lane from the template and read only the role-specific files named in `AGENT_RULES.md`.
5. Keep live work status, QA, merge/release decision, and rollback in the PR. Do not add a post-merge docs-only status commit.

Use `docs/agents/migrating-to-active-context.md` when adopting AgentSlice in an existing project.
