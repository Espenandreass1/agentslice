const VALID_LANES = new Set(['docs', 'fast-bug', 'standard-feature', 'controlled-change']);
const ALWAYS_CONTROLLED = ['agentslice.policy.json', '.github/**', '.vercel/**', 'vercel.json'];

function normalize(path) {
  return String(path ?? '').replace(/^\.\//, '').replaceAll('\\', '/');
}

function globToRegExp(pattern) {
  let expression = '^';
  const source = normalize(pattern);

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];
    const afterNext = source[index + 2];

    if (char === '*' && next === '*' && afterNext === '/') {
      expression += '(?:.*/)?';
      index += 2;
    } else if (char === '*' && next === '*') {
      expression += '.*';
      index += 1;
    } else if (char === '*') {
      expression += '[^/]*';
    } else if (char === '?') {
      expression += '[^/]';
    } else {
      expression += char.replace(/[|\\{}()[\]^$+?.]/g, '\\$&');
    }
  }

  return new RegExp(`${expression}$`);
}

function matchesAny(path, patterns = []) {
  const normalized = normalize(path);
  return patterns.some(pattern => globToRegExp(pattern).test(normalized));
}

function laneMarkers(body) {
  return [...String(body ?? '').matchAll(/<!--\s*agentslice:lane=([^\s>]+)\s*-->/g)]
    .map(match => match[1]);
}

function reproductionMarker(body) {
  const match = String(body ?? '').match(/<!--\s*agentslice:reproduction=([\s\S]*?)-->/);
  return match?.[1].trim() ?? '';
}

function isUsableReproduction(value) {
  return value.length > 3 && !/^(not applicable|n\/a|todo|pending)$/i.test(value);
}

function changedApplicationFiles(files, applicationPaths) {
  return files.filter(file =>
    matchesAny(file, applicationPaths)
    && !/(^|\/)[^/]+\.(test|spec)\.[^/]+$/i.test(file)
  );
}

function sensitiveMatches(files, policy) {
  const areas = [...(policy.sensitiveAreas ?? []), {
    name: 'AgentSlice policy and workflow configuration',
    patterns: ALWAYS_CONTROLLED,
  }];

  return areas.flatMap(area => {
    const matchedFiles = files.filter(file => matchesAny(file, area.patterns));
    return matchedFiles.length ? [{ name: area.name, files: matchedFiles }] : [];
  });
}

/**
 * Validate a pull request against the installed AgentSlice policy.
 * This function has no GitHub dependency so projects can unit-test their policy.
 */
export function verifyPullRequest({ body = '', files = [], policy = {} }) {
  const normalizedFiles = [...new Set(files.map(normalize).filter(Boolean))];
  const errors = [];
  const markers = laneMarkers(body);

  if (markers.length !== 1) {
    errors.push(`Expected exactly one <!-- agentslice:lane=... --> marker; found ${markers.length}.`);
  }

  const lane = markers[0];
  if (lane && !VALID_LANES.has(lane)) {
    errors.push(`Unknown lane \"${lane}\". Use docs, fast-bug, standard-feature, or controlled-change.`);
  }

  const sensitive = sensitiveMatches(normalizedFiles, policy);
  if (lane && lane !== 'controlled-change' && sensitive.length) {
    const summary = sensitive
      .map(area => `${area.name}: ${area.files.join(', ')}`)
      .join('; ');
    errors.push(`Lane \"${lane}\" cannot change controlled areas. Reclassify as controlled-change. ${summary}`);
  }

  if (lane === 'docs') {
    const allowedPaths = policy.lanes?.docs?.allowedPaths ?? ['**/*.md', 'docs/**'];
    const disallowed = normalizedFiles.filter(file => !matchesAny(file, allowedPaths));
    if (disallowed.length) {
      errors.push(`Docs lane may change only configured guidance paths. Reclassify or remove: ${disallowed.join(', ')}.`);
    }
  }

  if (lane === 'fast-bug') {
    const reproduction = reproductionMarker(body);
    if (!isUsableReproduction(reproduction)) {
      errors.push('Fast-bug requires a concrete <!-- agentslice:reproduction=... --> marker.');
    }

    const appFiles = changedApplicationFiles(normalizedFiles, policy.applicationPaths ?? []);
    const limit = policy.lanes?.fastBug?.maxApplicationFiles ?? 2;
    if (appFiles.length > limit) {
      errors.push(`Fast-bug changes ${appFiles.length} application files (limit ${limit}): ${appFiles.join(', ')}.`);
    }
  }

  return {
    ok: errors.length === 0,
    lane: VALID_LANES.has(lane) ? lane : null,
    errors,
    changedFiles: normalizedFiles,
    sensitive,
  };
}
