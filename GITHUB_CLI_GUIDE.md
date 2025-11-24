# GitHub CLI Guide

> A comprehensive guide to using GitHub CLI (`gh`) for managing your repositories

## What is GitHub CLI?

GitHub CLI (`gh`) is an official command-line tool from GitHub that brings GitHub functionality to your terminal. It allows you to create repositories, manage pull requests, issues, and more without leaving the command line.

**Official Documentation**: https://cli.github.com/

## Installation

### Windows

```bash
# Using winget (recommended for Windows 10/11)
winget install --id GitHub.cli --accept-source-agreements --accept-package-agreements
```

### macOS

```bash
# Using Homebrew
brew install gh
```

### Linux

```bash
# Debian/Ubuntu
sudo apt install gh

# Fedora/RHEL
sudo dnf install gh

# Arch Linux
sudo pacman -S github-cli
```

## First-Time Setup

### 1. Authenticate with GitHub

After installation, you need to authenticate:

```bash
gh auth login
```

This will:
1. Show you a one-time code
2. Open a browser to https://github.com/login/device
3. Ask you to paste the code
4. Authorize GitHub CLI to access your account

**Check Authentication Status**:
```bash
gh auth status
```

## Creating a Repository from a Local Project

This is the workflow we just used for your feedback app. Here's how to do it again for future projects:

### Step-by-Step Process

#### 1. Initialize Git Repository (if not already done)

```bash
cd /path/to/your/project
git init
```

#### 2. Stage and Commit Your Files

```bash
# Add all files
git add .

# Or add specific files
git add README.md src/

# Create initial commit
git commit -m "Initial commit: Project description here"
```

#### 3. Create GitHub Repository and Push

**Option A: Create and push in one command** (recommended)

```bash
gh repo create PROJECT-NAME --public --source=. --description="Your project description" --push
```

**Option B: Create repository without pushing**

```bash
gh repo create PROJECT-NAME --public --description="Your project description"
```

Then manually add remote and push:

```bash
git remote add origin https://github.com/YOUR-USERNAME/PROJECT-NAME.git
git branch -M main
git push -u origin main
```

### Command Options Explained

```bash
gh repo create PROJECT-NAME [flags]
```

**Common Flags**:
- `--public` - Create a public repository (anyone can view)
- `--private` - Create a private repository (only you can view)
- `--source=.` - Use current directory as source
- `--push` - Push local commits to the new repository
- `--description="..."` - Add a description to your repository
- `--homepage="URL"` - Set repository homepage URL
- `--enable-issues` - Enable issues (default: true)
- `--enable-wiki` - Enable wiki (default: true)

**Examples**:

```bash
# Create a private repo without pushing
gh repo create my-secret-project --private --source=.

# Create public repo with homepage
gh repo create my-website --public --source=. --homepage="https://mysite.com" --push

# Create repo with custom settings
gh repo create my-api --public --source=. --description="REST API for my app" --enable-issues --push
```

## Common GitHub CLI Commands

### Repository Management

```bash
# View repository in browser
gh repo view --web

# Clone a repository
gh repo clone USERNAME/REPO-NAME

# Fork a repository
gh repo fork USERNAME/REPO-NAME

# List your repositories
gh repo list

# Delete a repository (careful!)
gh repo delete REPO-NAME
```

### Working with Issues

```bash
# Create a new issue
gh issue create --title "Bug: App crashes" --body "Description here"

# List issues
gh issue list

# View an issue
gh issue view 123

# Close an issue
gh issue close 123
```

### Working with Pull Requests

```bash
# Create a pull request
gh pr create --title "Add new feature" --body "Description"

# List pull requests
gh pr list

# View a pull request
gh pr view 456

# Checkout a pull request locally
gh pr checkout 456

# Merge a pull request
gh pr merge 456
```

### Releases

```bash
# Create a release
gh release create v1.0.0 --title "Version 1.0.0" --notes "Release notes here"

# List releases
gh release list

# Download release assets
gh release download v1.0.0
```

### GitHub Actions

```bash
# View workflow runs
gh run list

# View specific run
gh run view 789

# Re-run a workflow
gh run rerun 789
```

## Quick Reference Workflow

### Starting a New Project from Scratch

```bash
# 1. Create project directory
mkdir my-new-project
cd my-new-project

# 2. Initialize git
git init

# 3. Create initial files
echo "# My New Project" > README.md
# ... add your code files ...

# 4. Make initial commit
git add .
git commit -m "Initial commit: Project setup"

# 5. Create GitHub repo and push
gh repo create my-new-project --public --source=. --push
```

### Adding an Existing Local Project to GitHub

This is what we did with your feedback app:

```bash
# 1. Navigate to your project
cd /path/to/existing/project

# 2. Initialize git (if not already done)
git init

# 3. Stage all files
git add .

# 4. Create initial commit
git commit -m "Initial commit: Add existing project"

# 5. Create GitHub repo and push
gh repo create PROJECT-NAME --public --source=. --description="Description here" --push
```

### Handling the "nul" File Error on Windows

If you encounter the "nul" file error (like we did):

```bash
# Remove the problematic file
rm -f nul

# Then proceed with git add
git add .
```

The "nul" issue occurs because "nul" is a reserved device name on Windows.

## Troubleshooting

### Command Not Found After Installation

**On Windows**: The PATH might not be updated in your current terminal session.

**Solutions**:
1. Close and reopen your terminal
2. Use the full path: `"C:\Program Files\GitHub CLI\gh.exe"`
3. Add to PATH manually in System Environment Variables

### Authentication Expired

If you see authentication errors:

```bash
gh auth login
```

Follow the prompts to re-authenticate.

### Repository Already Exists

If you try to create a repo that already exists:

```bash
# Delete the remote repo first (careful!)
gh repo delete USERNAME/REPO-NAME

# Or use a different name
gh repo create PROJECT-NAME-v2 --public --source=. --push
```

### Push Rejected / Conflicts

If your push is rejected:

```bash
# Pull remote changes first
git pull origin main --rebase

# Resolve conflicts if any, then push
git push origin main
```

## Best Practices

### 1. Always Use Meaningful Commit Messages

```bash
# Good
git commit -m "feat: Add user authentication with JWT"
git commit -m "fix: Resolve memory leak in data processor"
git commit -m "docs: Update API documentation"

# Less helpful
git commit -m "update"
git commit -m "fix stuff"
```

### 2. Create .gitignore Before First Commit

```bash
# Example .gitignore for Node.js projects
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
echo ".next/" >> .gitignore
echo "dist/" >> .gitignore

# Then commit it
git add .gitignore
git commit -m "chore: Add .gitignore"
```

### 3. Keep Sensitive Data Out of Git

Never commit:
- API keys
- Passwords
- Private keys
- `.env` files with secrets
- Database credentials

Use `.gitignore` and environment variables instead.

### 4. Commit Often, Push Regularly

```bash
# Work on a feature
git add .
git commit -m "feat: Add feature X"

# Work some more
git add .
git commit -m "feat: Improve feature X with Y"

# Push when you reach a good stopping point
git push
```

### 5. Use Branches for Features

```bash
# Create a new branch
git checkout -b feature/new-feature

# Work and commit
git add .
git commit -m "feat: Implement new feature"

# Push branch
git push -u origin feature/new-feature

# Create pull request
gh pr create --title "Add new feature" --body "Description"
```

## Useful Aliases

Add these to your shell configuration (`.bashrc`, `.zshrc`, etc.):

```bash
# Git aliases
alias gs='git status'
alias ga='git add'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline --graph'

# GitHub CLI aliases
alias ghrc='gh repo create'
alias ghpr='gh pr create'
alias ghis='gh issue create'
```

## Advanced Features

### Working with Multiple Accounts

```bash
# Login to a different account
gh auth login --hostname github.com --username another-user

# Switch between accounts
gh auth switch
```

### Using gh as a Git Credential Helper

```bash
# Configure git to use gh for authentication
gh auth setup-git
```

This allows regular `git` commands to use your `gh` authentication.

### Scripting with GitHub CLI

```bash
# Get repository info as JSON
gh repo view --json name,description,url

# List issues and parse with jq
gh issue list --json number,title | jq '.[] | .title'

# Bulk operations
for repo in repo1 repo2 repo3; do
  gh repo create $repo --public
done
```

## Getting Help

### Command-Specific Help

```bash
# General help
gh help

# Help for specific command
gh repo create --help
gh pr create --help
gh issue list --help
```

### Online Resources

- **Official Docs**: https://cli.github.com/manual/
- **GitHub**: https://github.com/cli/cli
- **Community**: https://github.com/cli/cli/discussions

## Summary: Your Go-To Commands

Here's a quick reference for the most common workflow:

```bash
# 1. Start new project
mkdir my-project && cd my-project
git init

# 2. Add code and commit
git add .
git commit -m "Initial commit"

# 3. Create GitHub repo and push
gh repo create my-project --public --source=. --push

# 4. Make changes and push
git add .
git commit -m "feat: Add new feature"
git push

# 5. View repo in browser
gh repo view --web
```

---

**Created**: 2025-01-24
**For**: Managing GitHub repositories via command line
**Related**: README.md, CLAUDE.md
