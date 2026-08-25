# Deployment Checklist

- [ ] Current slice and spec were explicitly approved.
- [ ] QA result is `PASS` or `PASS WITH NOTES`; blockers are resolved.
- [ ] QA report identifies selected and deferred checks with reasons.
- [ ] QA report and checkpoint state the full-suite decision, test-execution purpose/count, and any residual risk.
- [ ] Relevant build, database, migration, framework, commerce, auth/ownership, and production checks ran or have an explicit risk decision.
- [ ] `workflow-state.md` is in `HUMAN_RELEASE_APPROVAL`.
- [ ] Human release approval received.
- [ ] One short user-facing changelog entry is ready.
- [ ] External release notes are prepared only if an external audience exists.
- [ ] Rollback and post-release monitoring are understood when relevant.
- [ ] Completed checkpoint is archived with the release record before the next slice starts.
