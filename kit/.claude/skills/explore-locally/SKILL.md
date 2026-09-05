---
name: explore-locally
description: Test a concrete low-risk product idea on a local branch before deciding whether it deserves a formal PR.
---

# Explore Locally

## Read

Verify `agentslice.policy.json` against the Git root. Read the minimal preflight and only source files relevant to the experiment.

## Guardrails

- Ask which concrete current user problem is being tested.
- Work only on `explore/<idea>` (or the policy's configured prefix).
- Create no PR, preview, spec, QA report, release note, checkpoint, workflow-state update, merge, or deployment.
- Keep the experiment short and reversible. It is not release evidence.
- Stop and promote promptly if a sensitive policy area is touched: auth/ownership, data/RLS, public contracts/pages, providers, commerce, hosting, CI, or production data.

## Steps

1. State the hypothesis and smallest observable check.
2. Make only the local changes needed to test it.
3. Run the smallest relevant local check.
4. Either abandon the branch or promote useful evidence to a PR with a user problem, lane, scope, test plan, and rollback.

## Output

Report hypothesis, result, files changed, one-line check result, and `abandon` or `promote` decision. Do not create process paperwork.
