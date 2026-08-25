# Regression Checklist

Use this only for areas touched by the approved slice. It supports focused QA; it is not a mandatory bulk checklist.

Before release, check:

- [ ] Existing core flows related to this slice still work
- [ ] No broken navigation in touched areas
- [ ] No obvious UI regressions in touched screens
- [ ] No known data loss risk
- [ ] No new unhandled errors
- [ ] Existing relevant tests pass
- [ ] New acceptance criteria are covered
- [ ] Auth, permissions and privacy still hold where relevant

Run broader checks only when `docs/qa/qa-plan.md` says the changed surface requires them. Record any skipped relevant item and why in the QA report.

Record whether the full suite was required and the exact trigger in the QA report; do not run it merely from habit.
