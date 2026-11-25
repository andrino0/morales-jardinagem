#!/usr/bin/env bash
set -euo pipefail

SOURCE_URL="https://d2ol7oe51mr4n9.cloudfront.net/user_3LnQaxSZGmaUxJe902hriTtUGof/f0315010-07b5-4261-82d4-3541992632ab.zip"

curl -fL --retry 3 "$SOURCE_URL" -o /tmp/morales-jardinagem-source.zip
mkdir -p /tmp/morales-jardinagem-source
unzip -q -o /tmp/morales-jardinagem-source.zip -d /tmp/morales-jardinagem-source

if ! command -v bun >/dev/null 2>&1; then
  curl -fsSL https://bun.sh/install | bash
  export PATH="$HOME/.bun/bin:$PATH"
fi

cd /tmp/morales-jardinagem-source/app
bun install --frozen-lockfile
bun run build
