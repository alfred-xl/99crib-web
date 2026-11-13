#!/usr/bin/env bash

set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: bash scripts/deploy-static.sh /home/USERNAME/public_html" >&2
  exit 2
fi

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
source_dir="$project_root/out"
destination="$1"

if [[ ! -f "$source_dir/index.html" || ! -f "$source_dir/.htaccess" || ! -f "$source_dir/api/contact.php" ]]; then
  echo "The out/ build is incomplete. Run npm run build before deploying." >&2
  exit 1
fi

if [[ ! -d "$destination" ]]; then
  echo "Document root does not exist: $destination" >&2
  exit 1
fi

destination="$(cd "$destination" && pwd -P)"

if [[ "$destination" == / || "$destination" == "$project_root" || "$destination/" == "$project_root/"* || "$project_root/" == "$destination/"* ]]; then
  echo "Keep the repository and the domain's document root in separate directories." >&2
  exit 1
fi

# The trailing /. includes hidden files such as .htaccess and copies the built
# site's contents directly into the document root, without an extra out/ level.
cp -R "$source_dir/." "$destination/"

echo "Published out/ contents to $destination"
