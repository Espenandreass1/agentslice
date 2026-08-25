---
name: run-qa-gate
description: Use after implementation to independently verify the approved spec with proportional, evidence-based QA before release recommendation.
---

# Run QA Gate

## Read

Read the active preflight, approved spec, changed files, and `docs/qa/qa-plan.md`. Read at most one directly relevant previous QA report when it informs a retest or known regression. Inspect available test commands as needed. Do not bulk-read QA, spec, release, or decision folders.

## Independence and gate

Use a separate QA agent when available; otherwise switch to a critical independent QA role. This is the normal exception to the no-default-parallel rule. Confirm phase `BUILD`, `QA_SUBAGENT`, or `QA_RETEST`. Return `PASS`, `PASS WITH NOTES`, or `FAIL`; do not recommend release with a blocker.

## Check selection

- Standard: focused acceptance tests, relevant domain regressions, lint, and typecheck for code changes.
- Run the relevant full suite only for shared contracts, auth/ownership, database/RLS/migrations, public user-facing flows (including commerce), build/framework configuration, or production-critical changes/releases. State the exact trigger; otherwise state why focused scope was sufficient.
- Run build and database checks only when the affected surface calls for them.
- If a needed check cannot run, record why and its residual risk. If automation is absent, perform a focused manual smoke test and lower confidence accordingly.

## Steps

1. Compare changed files and behavior to the approved spec and acceptance criteria.
2. Identify what could break, including security/data/ownership implications.
3. Run selected checks; record results, test-execution purpose/count, full-suite decision, and deferrals.
4. Write a QA report of about 120 lines or fewer, linking to the spec and evidence rather than repeating them. State a risk reason for any longer report.
5. Update `workflow-state.md`: `PASS`/`PASS WITH NOTES` → `RELEASE_RECOMMENDATION`; `FAIL` → `FIXES`. Update active context and checkpoint with the next gate, risk, and telemetry.

## Output

Give result, report link, compact check summary, residual risk, and next gate. Do not repeat the spec or QA tables.
