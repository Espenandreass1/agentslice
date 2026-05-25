# QA Plan

QA should be proportional to the approved slice and grounded in real checks where possible.

## Default QA areas

- Approved spec
- Changed files
- Acceptance criteria
- Available test commands
- Known risks
- Main user flow
- Edge cases
- Error handling
- Regression checks
- Security/privacy where relevant
- Performance where relevant

## Useful commands to look for

- Node: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`
- Python: `pytest`, project-specific lint/type commands
- Framework smoke checks: local app route, API endpoint, CLI command, or manual browser flow

If no automated checks exist, state that clearly and run a focused manual smoke test.

## Optional CI

`docs/qa/github-actions-ci-template.yml` is a starting point for GitHub Actions. Copy it into `.github/workflows/ci.yml` only after the stack is confirmed.

## Required QA result

Each QA run must return one of:

- PASS
- PASS WITH NOTES
- FAIL
