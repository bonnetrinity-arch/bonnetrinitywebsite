#!/usr/bin/env bash
set -euo pipefail
source /home/ubuntu/.user_env
source /opt/.manus/webdev.sh.env
cd /home/ubuntu/bonne-trinity
if ! gh repo view bonnetrinity-arch/bonne-trinity >/dev/null 2>&1; then
  gh repo create bonnetrinity-arch/bonne-trinity --private --source=. --remote=github --push
else
  git remote get-url github >/dev/null 2>&1 || git remote add github https://github.com/bonnetrinity-arch/bonne-trinity.git
  git push -u github main
fi
gh repo view bonnetrinity-arch/bonne-trinity --json name,visibility,url,defaultBranchRef
git status --short
git log -1 --oneline
git remote -v
