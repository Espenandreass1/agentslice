# AgentSlice Kit

This kit makes AI coding work PR-first without making every small change document-heavy.

## Start here

1. Read `INSTALL_PROMPT.md` in the real project—not in an unzipped copy of this kit.
2. Set `agentslice.policy.json` to the canonical Git root and adapt its sensitive paths to the project.
3. Enable the bundled GitHub lane gate and require it with human review in branch protection.

## Operating modes

- **Local exploration:** a short `explore/<idea>` branch tests a concrete current user problem. It has no PR, preview, spec, QA record, checkpoint, merge, or deployment. Sensitive work must be promoted promptly.
- **Formal PR:** the PR template holds lane, scope, completed work, QA, merge/release decision, and rollback. Use one of four lanes: `docs`, `fast-bug`, `standard-feature`, or `controlled-change`.

Use a separate spec, QA report, release recommendation, or checkpoint only when a controlled, audit-sensitive, or unusually risky change needs information the PR cannot safely carry.

## Main files

- `AGENT_RULES.md`: canonical workflow contract
- `agentslice.policy.json`: workspace and sensitive-area policy
- `.github/PULL_REQUEST_TEMPLATE.md`: live PR record
- `.github/workflows/agentslice-pr-gate.yml`: lane/path CI check
- `docs/planning/active-context.md`: short active product context
- `docs/planning/workflow-state.md`: planning phase and approval source for document-led work
- `docs/archive/README.md`: targeted history index
- `.agents/skills/`, `.claude/skills/`: reusable AgentSlice skills

## Context and gates

At startup, validate the policy workspace and read only `AGENT_RULES.md`, active context, workflow state, and current slice. Add role-specific files only when needed. Do not bulk-read historical folders.

The formal gates remain: human scope approval, human controlled plan/spec approval, independent QA `PASS`/`PASS WITH NOTES`, then human release approval. CI can enforce lane classification, but it does not replace human review or the safeguards for auth, data, ownership, commerce, and production changes.

See `docs/agents/migrating-to-active-context.md` for the safe additive migration routine.
