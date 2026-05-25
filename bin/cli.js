#!/usr/bin/env node
import { Command } from 'commander';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { init } from '../lib/init.js';

const here = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(here, '..', 'package.json'), 'utf8'));

const program = new Command();
program
  .name('agentslice')
  .description('Install the AgentSlice workflow kit into a project.')
  .version(pkg.version);

program
  .command('init')
  .description('Bootstrap AgentSlice into the current (or chosen) directory.')
  .option('-d, --dir <path>', 'target directory', '.')
  .option('-t, --tools <list>', 'comma-separated: cursor,claude,codex,windsurf')
  .option('-y, --yes', 'accept all defaults, no prompts')
  .option('--force', 'overwrite existing files without prompting')
  .option('--dry-run', 'print the file list without writing')
  .action(async (opts) => {
    try {
      await init(opts);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  });

program.parseAsync(process.argv);
