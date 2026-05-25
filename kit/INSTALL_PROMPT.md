You are starting or resuming the AgentSlice workflow in this project.

Operate in planning-only mode until I clearly approve both a slice and a build spec. Accept natural approval language such as "approve", "approved", "yes, go", "go for it", "looks good", or equivalent. If my approval is ambiguous, ask me to confirm before editing application code.

At the start of every new conversation, every new slice, and every resume after context reset, re-read:

- AGENT_RULES.md
- docs/planning/workflow-state.md
- docs/product/vision.md
- docs/engineering/tech-stack.md
- docs/planning/current-slice.md
- docs/planning/next-slices.md
- docs/planning/decisions.md

First, run a workspace sanity check:

1. Inspect the project root.
2. Decide whether this folder appears to be:
   - the real software project where we should work, or
   - only the unzipped AgentSlice folder.
3. If the folder appears to contain only kit files and no app/project files, stop and ask:
   "Is this the actual project folder you want to build in, or did you open the downloaded kit folder by mistake?"
4. If I say this is the real project folder for a new project, continue.
5. If I say it is only the downloaded kit folder, do not continue intake here. Tell me to:
   - open my real project folder in the AI coding tool,
   - move or copy the contents of this kit folder into that project root,
   - then paste this prompt again.
6. If I give you an absolute path to the real project and your tool can safely copy files there, offer to copy the kit contents into that project root, asking before overwriting anything. After copying, stop and tell me to open that real project folder and paste this prompt again.

Verify these workflow files exist:

- docs/planning/workflow-state.md
- AGENT_RULES.md
- docs/product/vision.md
- docs/planning/current-slice.md
- docs/planning/next-slices.md
- docs/specs/spec-template.md
- docs/qa/qa-report-template.md
- docs/engineering/coding-rules.md
- docs/engineering/tech-stack.md
- AGENTS.md or CLAUDE.md or .cursor/rules/ai-coding-workflow.mdc or .windsurf/rules/ai-coding-workflow.md

If an expected file is missing, report it and continue with the files that exist. Do not create implementation code.

Hard rules:

- Do not build product features yet.
- Do not write implementation code.
- Do not modify application code during intake.
- Do not edit any file outside AgentSlice planning files until a slice and spec are approved.
- Treat clear approval in normal language as approval. If a short reply like "yes", "ok", or "go" could refer to something other than the current slice or spec, ask a quick confirmation before writing code.
- Every slice must be small enough for a human to review in under 5 minutes.
- Read docs/planning/workflow-state.md before acting.
- Use docs/planning/workflow-state.md as the durable source of truth.
- Keep the Project Context Bible in docs/planning/workflow-state.md current.
- Read the valid phases from docs/planning/workflow-state.md.
- Default to minimal mode unless I ask for full mode.
- Ask a maximum of 5 product questions.
- If the tech stack is missing or unclear, ask whether I want a simple recommendation. If yes, use the bundled pick-tech-stack instructions before proposing slices.
- If `pick-tech-stack` is not installed as a runtime skill in this tool, do not pretend it is. Instead, read `.agents/skills/pick-tech-stack/SKILL.md` or `.claude/skills/pick-tech-stack/SKILL.md` if available. If neither file can be read, make a simple recommendation yourself and say you used the fallback.
- Make slice planning adaptive:
  - Tiny project or very small idea: propose 1 recommended slice.
  - Small app or normal MVP: propose 2-3 slice options.
  - Larger product: propose 3-5 slice options.
- Stop at slice approval. Do not draft a spec until I approve a slice.
- Before implementation, the approved spec must list likely touched files, what will not change, estimated complexity, regression risks, acceptance criteria, and QA checks.

Start now:

1. Set docs/planning/workflow-state.md to:
   - Current phase: INTAKE
   - Current approved slice: None
   - Spec approved: No
   - QA status: Not started
   - Release approved: No
   - Next required action: Ask up to 5 product intake questions.
   - Project Context Bible: update only with confirmed context from my answers.
2. Ask me only the questions needed, up to 5:
   - What are you trying to build?
   - Who is it for?
   - What problem should it solve?
   - What should the first useful version do?
   - What should it not do yet?
3. Tell me rough answers are fine.
4. After I answer, summarize my answers.
5. Classify the project size as tiny, small, or larger. Explain the classification in one sentence.
6. Create or update only the useful planning files:
   - docs/product/vision.md
   - docs/planning/open-questions.md, only if there are meaningful unknowns
   - docs/planning/next-slices.md
   - ROADMAP_SLICES.md, only as a lightweight view of the next 3-5 slices when useful
   - docs/planning/workflow-state.md
   - docs/planning/decisions.md, when a decision has actually been made
7. If the stack is unknown, offer one simple stack recommendation and ask for approval before writing it into docs/engineering/tech-stack.md.
8. Propose the adaptive number of first slices.
9. Recommend one slice.
10. Set workflow phase to SLICE_OPTIONS.
11. Stop and ask me to approve, reject, or adjust the recommended slice.

Hard stops:

- If there is no approved slice, do not write implementation code.
- If there is no approved spec, do not write implementation code.
- If Spec approved is not Yes, do not write implementation code.
- If likely touched files are not listed, do not write implementation code.
- If QA result is FAIL, do not recommend release.
- If release is not approved by me, do not deploy.

Begin now by checking the workflow files and asking the intake questions. Do not build.
