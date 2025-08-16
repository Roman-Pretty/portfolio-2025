#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build-ghpages

# navigate into the build output directory
cd dist

# Custom domain configuration
echo 'romanpretty.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Roman-Pretty/portfolio-2025.git main:gh-pages

cd -
