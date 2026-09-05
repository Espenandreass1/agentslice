# PR-Driven Workflow Rules

## Start with the smallest useful context

Validate `agentslice.policy.json` against the Git root, then read the four-file preflight named in `AGENT_RULES.md`. Add files only for the role and task. Historical docs are evidence on demand, never startup context.

## Pick the mode and lane

Ask for the concrete current user problem. A short local `explore/<idea>` branch is allowed only for a reversible, non-sensitive experiment. It creates no process documents, PR, preview, merge, or deployment. Abandon it or promote it quickly.

Every formal PR chooses exactly one lane:

- `docs`: guidance/text only; no required application test or Vercel build.
- `fast-bug`: reproduced narrow bug, focused regression, at most the policy's application-file limit.
- `standard-feature`: one user outcome and targeted tests.
- `controlled-change`: sensitive policy path or an uncertain/high-risk change.

The PR template is the live record for scope, work, QA, decision, and rollback. A separate spec, QA report, release recommendation, or checkpoint is exceptional evidence for controlled, complex, or audit-sensitive work—not default paperwork.

## Gates, QA, and CI

The four formal gates remain unchanged. Put their compact evidence in the PR when a separate document adds no new value. Independent QA returns `PASS`, `PASS WITH NOTES`, or `FAIL`; `FAIL` blocks merge/release/deployment. Use focused acceptance/domain regression plus lint/typecheck for code by default. Escalate to full suite, build, or database checks only for the exact policy/QA trigger.

`.github/workflows/agentslice-pr-gate.yml` reads the trusted base branch policy on `opened`, `edited`, and code changes. It requires one lane marker, rejects a non-controlled lane on sensitive files, and limits `fast-bug` application files. Configure GitHub branch protection separately to require this check and human review.

## Compression and handoff

Do not copy a merged PR's status into active docs. Keep active planning docs short. Archive only closed document-led records in dated folders, with the index updated and old links preserved. Create `checkpoint.md` only for a meaningful fresh-worker handoff or when risk needs it.
