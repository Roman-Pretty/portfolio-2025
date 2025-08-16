@echo off
REM Build the project
call npm run build-ghpages

REM Navigate to dist directory
cd dist

REM Initialize git repo if not exists
if not exist ".git" (
    git init
    git checkout -b main
)

REM Add all files and commit
git add -A
git commit -m "deploy"

REM Push to gh-pages branch
git push -f https://github.com/Roman-Pretty/portfolio-2025.git main:gh-pages

REM Return to original directory
cd ..
