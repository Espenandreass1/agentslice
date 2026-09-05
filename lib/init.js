import { resolve, join, relative, dirname } from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import fse from 'fs-extra';
import kleur from 'kleur';

const TOOL_DIRS = {
  cursor:   ['.cursor'],
  claude:   ['.claude', 'CLAUDE.md'],
  codex:    ['.codex', 'AGENTS.md'],
  windsurf: ['.windsurf', '.windsurfrules'],
};

// Keep CI and policy files granular so existing projects with a .github folder
// can adopt AgentSlice without overwriting unrelated workflows.
const CORE = [
  'AGENT_RULES.md',
  'INSTALL_PROMPT.md',
  'agentslice.policy.json',
  '.github/PULL_REQUEST_TEMPLATE.md',
  '.github/agentslice/verify-pr-lane.mjs',
  '.github/workflows/agentslice-pr-gate.yml',
  'docs',
  '.agents',
];

const here = dirname(fileURLToPath(import.meta.url));
const KIT = resolve(here, '..', 'kit');

export async function init(opts) {
  const target = resolve(opts.dir ?? '.');
  const tools = await pickTools(opts);
  const paths = [...CORE, ...tools.flatMap(t => TOOL_DIRS[t])].filter(p =>
    existsSync(join(KIT, p))
  );

  console.log(kleur.bold('\nAgentSlice will write:'));
  for (const p of paths) console.log('  ' + kleur.cyan(p));

  if (opts.dryRun) {
    console.log(kleur.gray('\n(dry-run — no files written)'));
    return;
  }

  if (!opts.yes) {
    const { ok } = await ask({
      type: 'confirm',
      name: 'ok',
      message: `Install into ${target}?`,
      initial: true,
    });
    if (!ok) {
      console.log('Aborted.');
      return;
    }
  }

  let written = 0, skipped = 0;
  for (const p of paths) {
    const src = join(KIT, p);
    const dst = join(target, p);
    if (existsSync(dst) && !opts.force) {
      const choice = await onConflict(p);
      if (choice === 'skip') {
        console.log(kleur.gray('  -'), p, kleur.gray('(skipped)'));
        skipped++;
        continue;
      }
      if (choice === 'abort') {
        console.log('Aborted.');
        return;
      }
    }
    await fse.copy(src, dst, { overwrite: true });
    if (p === 'agentslice.policy.json') {
      const policy = await fse.readFile(dst, 'utf8');
      const canonicalWorkspace = JSON.stringify(target).slice(1, -1);
      await fse.writeFile(
        dst,
        policy.replace('__AGENTSLICE_CANONICAL_WORKSPACE__', canonicalWorkspace),
      );
    }
    console.log(kleur.green('  +'), p);
    written++;
  }

  console.log(kleur.bold().green(`\nAgentSlice installed (${written} written, ${skipped} skipped).`));
  console.log('\n' + kleur.bold('Next:') + ' paste this into Cursor / Claude Code / Codex / Windsurf to start the workflow:\n');
  console.log(kleur.cyan('  Start the AgentSlice workflow. Read INSTALL_PROMPT.md and run the intake.'));
  console.log('\nStar the repo if it helps: ' + kleur.cyan('https://github.com/espenandreass1/agentslice') + '\n');
}

async function pickTools(opts) {
  if (opts.tools) return opts.tools.split(',').map(s => s.trim());
  if (opts.yes) return Object.keys(TOOL_DIRS);
  const { picked } = await ask({
    type: 'multiselect',
    name: 'picked',
    message: 'Which tool rules to install?',
    choices: Object.keys(TOOL_DIRS).map(t => ({ title: t, value: t, selected: true })),
    hint: '(space to toggle, enter to confirm)',
    instructions: false,
  });
  return picked && picked.length ? picked : Object.keys(TOOL_DIRS);
}

async function onConflict(path) {
  const { c } = await ask({
    type: 'select',
    name: 'c',
    message: `${path} already exists.`,
    choices: [
      { title: 'Skip',      value: 'skip' },
      { title: 'Overwrite', value: 'overwrite' },
      { title: 'Abort',     value: 'abort' },
    ],
    initial: 0,
  });
  return c ?? 'skip';
}

async function ask(question) {
  const { default: prompts } = await import('prompts');
  return prompts(question);
}
