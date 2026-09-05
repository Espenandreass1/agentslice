# AgentSlice Agent Rules

This is the canonical workflow contract. It must exist in every AgentSlice project. AgentSlice is PR-first: a formal change is described, reviewed, QA'd, and decided in its pull request. `docs/planning/workflow-state.md` remains the source of truth for long-running product planning and legacy document-led work; it must not be updated just to duplicate a merged PR's status.

## Start safely and use minimal context

Before editing, run a workspace sanity check:

1. Read `agentslice.policy.json` and compare `canonicalWorkspace` with the repository root (`git rev-parse --show-toplevel`).
2. If they differ, stop and ask which checkout is canonical. Do not silently edit a similarly named clone, an old cloud-sync copy, or an unzipped kit.
3. Read only `AGENT_RULES.md`, `docs/planning/active-context.md`, `docs/planning/workflow-state.md`, and `docs/planning/current-slice.md`.

Add only the files needed for the work:

| Work | Read in addition |
|---|---|
| Explore locally | Relevant source files and the policy's sensitive areas |
| Plan a formal change | Product vision, tech stack, live `next-slices.md`, and policy |
| Build | The PR description, approved spec only when one exists, coding rules, and relevant files |
| QA | PR description, changed files, QA plan, and at most one directly relevant earlier QA report |
| Release | PR description, current QA result, and changelog |

Never bulk-read specs, QA reports, decisions, release records, or archives. For a concrete historical question, start with `docs/archive/README.md`, then follow one link or use targeted search.

## Choose an operating mode before code

### Local exploration

Use a local `explore/<idea>` branch to test whether an idea is worth preserving. It creates no PR, Vercel preview, spec, QA report, release note, checkpoint, or workflow-state update. Keep it short, reversible, and local-only. It is never deployable evidence.

Ask first: **What concrete current user problem does this solve?** If there is no answer, keep the work exploratory or stop; do not create a slice around a hypothetical scenario.

Never keep a sensitive change in local exploration. Auth, ownership, privacy, database/RLS, migrations, public contracts/pages, providers/integrations, commerce, hosting, CI, deployment, or production data must be promoted promptly to a controlled PR. Follow the project-specific `sensitiveAreas` policy rather than re-inferring risk.

End exploration by either deleting/abandoning the branch or promoting the useful evidence to a PR. At promotion, state the user problem, chosen lane, scope, test plan, and rollback in the PR. A compact PR plan replaces a separate spec for low-risk work.

### Formal PR workflow

Every formal PR has exactly one lane marker from the bundled PR template. The PR is the live source for its lane, completed work, QA result, merge/release decision, rollback, and links to exceptional artifacts. Update that PR while it is open; do not create a follow-up documentation commit solely to mark it completed after merge.

Use a separate spec, QA report, release recommendation, or handoff only when risk, auditability, or a project policy requires it. Link to each other and add only new information; do not repeat a spec in a QA report or QA table in a release recommendation.

## Four lanes

| Lane | Use for | Required evidence | Never use for |
|---|---|---|---|
| `docs` | Text, guidance, or Markdown-only changes | PR summary and affected-doc review | App, configuration, deployment, or sensitive paths |
| `fast-bug` | A reproduced, narrow bug with at most two application files | Reproduction, focused regression, strict file boundary | Sensitive paths, refactors, or adjacent feature work |
| `standard-feature` | One clear user outcome with a bounded surface | User problem, acceptance check, targeted tests | Sensitive paths or multi-surface contract changes |
| `controlled-change` | Database, auth, public contract/page, provider, commerce, hosting, production data, or any policy-sensitive change | Explicit scope, QA decision, approval and rollback | Nothing; choose it whenever uncertain |

The GitHub workflow enforces one valid lane, blocks unsafe lane/path combinations, and enforces the fast-bug application-file limit. It reruns when the PR description changes. CI is a safety net, not evidence that a change is safe: keep branch protection and human review enabled for the repository.

## Approval gates and hard stops

The four approval gates remain unchanged for formal, deployable work. In PR-led work their evidence may live in the PR instead of separate Markdown files:

1. Human scope/slice approval before a change is treated as build-ready.
2. Human implementation-plan/spec approval before controlled implementation proceeds.
3. Independent QA returns `PASS` or `PASS WITH NOTES` before a release recommendation or merge decision.
4. Human release approval before deployment or release.

Natural approval language is valid when it clearly refers to the current PR or artifact. For a controlled change, a compact PR plan may be the approved spec, but it must name likely touched areas, acceptance criteria, risks, QA, and rollback. Local exploration is not formal implementation and cannot satisfy or bypass a gate.

Hard stops:

- Unknown canonical workspace, lane, scope, or approval: stop and ask.
- No concrete user problem: do not start a full slice/spec process.
- A non-controlled lane touches a policy-sensitive path: stop, reclassify as `controlled-change`, and update the PR.
- `fast-bug` exceeds its configured application-file boundary: stop and reclassify.
- QA `FAIL`: do not recommend merge, release, or deployment.
- Missing release approval: do not deploy or release.
- Auth, ownership, data, privacy, commerce, shared contracts, migrations, and production configuration remain release blockers until resolved.

## QA policy

QA is independent: use a separate QA agent when available; otherwise switch to a critical independent role. Default to focused acceptance tests plus relevant domain regression, and lint/typecheck for code changes. Run a full suite only when the change touches shared contracts, auth/ownership, database/RLS/migrations, public flows including commerce, build/framework/deploy configuration, or a production release. Run build and database checks only when that surface warrants them.

The PR must say which checks ran, why they were selected, why broader checks were deferred, and the residual risk. Small exceptional specs and QA reports should be about 120 lines or fewer; explain a longer record by risk. A documentation PR has no required application test or Vercel build. A canceled provider deployment can still appear or consume capacity; it means no completed preview, not necessarily zero cost.

## Compact records, history, and output

- Keep `active-context.md` under 180 lines, `workflow-state.md` to phase/approvals/next action/valid phases/hard stops, `next-slices.md` to one to three candidates, `decisions.md` to active constraints, and the changelog to one short user-facing entry per release.
- At a meaningful formal handoff, use `checkpoint.md` only when an active PR needs a fresh-worker handoff or risk requires it. It is not required for docs, fast-bug, or short standard-feature PRs.
- After a completed milestone, archive closed records in a dated folder and update `docs/archive/README.md`. Never delete history or break links; leave a stub or index redirect for a moved target.
- Do not parallelize by default. Use another agent only for a real independent gain; independent QA/review is the normal exception.
- For a passed command, report the command and a one-line result. For a failure, report only the relevant excerpt, impact, and next action. Link to authoritative evidence instead of restating it.

## Bundled skills

If an AgentSlice instruction names a skill, use the runtime skill when available. Otherwise read `.agents/skills/<skill-name>/SKILL.md` or `.claude/skills/<skill-name>/SKILL.md`; if neither is available, use a transparent general-capability fallback. Do not claim to have used an unavailable skill.
