#!/usr/bin/env bash
set -euo pipefail

# Keep hook lightweight to stay under timeout and avoid blocking tool flows.
if [ ! -d .git ]; then
  echo "[auto-review] No git repository detected; skipping."
  exit 0
fi

if git diff --quiet && git diff --cached --quiet; then
  echo "[auto-review] No local changes to review."
  exit 0
fi

count=$(git status --porcelain | wc -l | tr -d ' ')
echo "[auto-review] Local changes detected in ${count} file(s)."
