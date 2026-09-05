import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { init } from '../lib/init.js';
import { verifyPullRequest } from '../kit/.github/agentslice/verify-pr-lane.mjs';

const policy = JSON.parse(await readFile('kit/agentslice.policy.json', 'utf8'));

test('accepts a documentation-only pull request', () => {
  const result = verifyPullRequest({
    body: '<!-- agentslice:lane=docs -->',
    files: ['README.md', 'docs/guide.md'],
    policy,
  });

  assert.equal(result.ok, true);
  assert.equal(result.lane, 'docs');
});

test('requires controlled-change for sensitive paths', () => {
  const result = verifyPullRequest({
    body: '<!-- agentslice:lane=standard-feature -->',
    files: ['supabase/migrations/20260905.sql'],
    policy,
  });

  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /controlled-change/);
});

test('enforces concrete reproduction and app-file limit for fast bugs', () => {
  const missingReproduction = verifyPullRequest({
    body: '<!-- agentslice:lane=fast-bug -->\n<!-- agentslice:reproduction=TODO -->',
    files: ['src/a.ts'],
    policy,
  });
  assert.equal(missingReproduction.ok, false);
  assert.match(missingReproduction.errors.join('\n'), /reproduction/);

  const tooBroad = verifyPullRequest({
    body: '<!-- agentslice:lane=fast-bug -->\n<!-- agentslice:reproduction=Open settings, save, observe 500 -->',
    files: ['src/a.ts', 'src/b.ts', 'src/c.ts'],
    policy,
  });
  assert.equal(tooBroad.ok, false);
  assert.match(tooBroad.errors.join('\n'), /application files/);
});

test('requires exactly one valid lane marker', () => {
  const result = verifyPullRequest({
    body: '<!-- agentslice:lane=docs -->\n<!-- agentslice:lane=standard-feature -->',
    files: ['README.md'],
    policy,
  });

  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /exactly one/);
});

test('generates policy, PR lane gate, and a compact preflight', async () => {
  const target = await mkdtemp(join(tmpdir(), 'agentslice-kit-test-'));

  try {
    const originalLog = console.log;
    console.log = () => {};
    try {
      await init({ dir: target, yes: true, tools: 'codex' });
    } finally {
      console.log = originalLog;
    }

    const generatedPolicy = JSON.parse(await readFile(join(target, 'agentslice.policy.json'), 'utf8'));
    assert.equal(generatedPolicy.canonicalWorkspace, target);
    await stat(join(target, '.github/PULL_REQUEST_TEMPLATE.md'));
    await stat(join(target, '.github/agentslice/verify-pr-lane.mjs'));
    await stat(join(target, '.github/workflows/agentslice-pr-gate.yml'));

    const preflight = [
      'AGENT_RULES.md',
      'agentslice.policy.json',
      'docs/planning/active-context.md',
      'docs/planning/workflow-state.md',
      'docs/planning/current-slice.md',
    ];
    const lineCounts = await Promise.all(preflight.map(async file =>
      (await readFile(join(target, file), 'utf8')).split('\n').length,
    ));
    assert.ok(lineCounts.reduce((total, count) => total + count, 0) < 500);
  } finally {
    await rm(target, { recursive: true, force: true });
  }
});
