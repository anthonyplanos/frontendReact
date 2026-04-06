$ErrorActionPreference = 'Stop'

# Keep hook lightweight to stay under timeout and avoid blocking tool flows.
if (-not (Test-Path '.git')) {
    Write-Output '[auto-review] No git repository detected; skipping.'
    exit 0
}

$changed = git status --porcelain 2>$null
if (-not $changed) {
    Write-Output '[auto-review] No local changes to review.'
    exit 0
}

$count = ($changed | Measure-Object -Line).Lines
Write-Output "[auto-review] Local changes detected in $count file(s)."
exit 0
