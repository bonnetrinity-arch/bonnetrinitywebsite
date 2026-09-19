#!/usr/bin/env bash
set -euo pipefail
source /home/ubuntu/.user_env
source /opt/.manus/webdev.sh.env
cd /home/ubuntu/bonne-trinity
if git remote get-url github >/dev/null 2>&1; then
  git remote set-url github https://github.com/bonnetrinity-arch/bonnetrinitywebsite.git
else
  git remote add github https://github.com/bonnetrinity-arch/bonnetrinitywebsite.git
fi
git add -A
git diff --cached --quiet || git commit -m "Build BONNE TRINITY multi-page B2B website"
git push -u github main
gh repo view bonnetrinity-arch/bonnetrinitywebsite --json name,visibility,url,defaultBranchRef
printf '\nSTATUS\n'
git status --short
printf '\nHEAD\n'
git log -1 --oneline
