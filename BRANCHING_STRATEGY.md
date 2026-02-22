# Branching Strategy — Threat Surfaces

> Threat Surfaces: Multivariable Calculus for AI Security
> fischer³ Education

This document defines the Git branching strategy for the `threat-surfaces` repository. It covers branch purposes, naming conventions, merge rules, access control decisions, and the workflow for common tasks.

---

## Guiding Principles

1. **`main` is always student-ready.** Nothing merges to `main` that is incomplete, incorrect, or structurally broken. A student who clones `main` at any point should find a coherent, usable course.

2. **Solutions are access-controlled by branch.** Student-facing content and instructor solutions live on different branches. This is enforced by branch protection, not by convention alone.

3. **Small, purposeful branches.** One module, one refresher, or one infrastructure change per branch. Long-lived feature branches create merge debt — keep branches short and merge frequently.

4. **Branch names are self-documenting.** Any collaborator should be able to read a branch name and know exactly what it contains without opening a single file.

---

## Branch Map

```
main                          ← Student-facing, always stable
│
├── develop                   ← Integration branch; content ready for review
│   │
│   ├── module/module-00-orientation          ─┐
│   ├── module/module-01-geometry-of-rn        │  Content branches
│   ├── module/module-02-partial-derivatives   │  (one per module or unit)
│   ├── ...                                   ─┘
│   │
│   ├── refresher/trig-essentials             ─┐
│   ├── refresher/matrix-algebra-basics        │  Refresher branches
│   ├── refresher/basic-probability            │  (parallel, any time)
│   ├── ...                                   ─┘
│   │
│   ├── infra/add-github-actions              ─┐
│   ├── infra/moodle-question-bank-m00         │  Infrastructure branches
│   ├── infra/ai-grader-rubrics               ─┘
│   │
│   └── fix/typo-module02-unit01-exercises    ← Hotfix branches (from develop)
│
└── solutions                 ← PROTECTED — instructor access only
    │
    ├── solutions/module-00   ─┐
    ├── solutions/module-01    │  Solution sets added as modules complete
    └── ...                   ─┘
```

---

## Branch Definitions

### `main`

**Purpose**: The stable, student-facing branch. This is what users see when they visit the repository. It contains all published course content — notes, exercises, Python labs, templates, refreshers — but **not** solutions.

**Who merges here**: Repository owner only, via pull request from `develop`.

**Merge criteria** (all must be satisfied):
- All sub-unit components present for the module being merged: `notes.md`, `exercises.tex`, `python-lab.ipynb`
- LaTeX files compile without errors
- Jupyter notebooks run cell-by-cell without errors (kernel restart + run all)
- Learning objectives in notes are consistent with exercises and Python lab
- Statistical bridge section present in notes and exercises
- Module `README.md` is complete with unit table and time estimates
- `COURSE_GUIDE.md` and `REFRESHER_INDEX.md` updated if applicable

**Branch protection rules** (configure in GitHub Settings → Branches):
- Require pull request before merging
- Require at least 1 approval (self-review acceptable for solo development; add reviewer requirement when collaborators join)
- Restrict who can push: owner only

---

### `develop`

**Purpose**: The integration branch. Content branches are merged here first. `develop` may contain partially complete material that is internally consistent but not yet ready for students.

**Who merges here**: Repository owner; trusted collaborators via pull request.

**Merge criteria** (relaxed relative to `main`):
- Content is factually correct and complete for the specific sub-unit or unit being merged
- No placeholder text remaining (no `[bracketed template text]` in student-facing files)
- Files named and located correctly per the repository structure

**Branch protection rules**:
- Require pull request before merging
- No direct pushes (force-pushes disabled)

---

### `module/module-NN-title`

**Purpose**: Active development of a specific module. Contains all four sub-unit components (notes, exercises, Python lab, module README) as they are being written.

**Branched from**: `develop`
**Merged into**: `develop` (via pull request)
**Lifetime**: Short — open while the module is being developed, merged and deleted when complete.

**Naming examples**:
```
module/module-00-orientation
module/module-02-partial-derivatives
module/module-07-vector-calculus
```

**Granularity decision**: Branch per module (not per unit) for solo development. If collaborators are writing different units of the same module simultaneously, branch per unit instead:
```
module/module-02-unit-01-partial-derivatives
module/module-02-unit-02-higher-order-partials
```

---

### `refresher/topic-name`

**Purpose**: Development of a single refresher module. Refreshers are independent of the module sequence and can be branched from `develop` at any time.

**Branched from**: `develop`
**Merged into**: `develop` (via pull request)
**Lifetime**: Short — open while the refresher is being written, merged and deleted when complete.

**Naming examples**:
```
refresher/trig-essentials
refresher/matrix-algebra-basics
refresher/completing-the-square
```

---

### `infra/description`

**Purpose**: Infrastructure, tooling, and non-content changes. This includes GitHub Actions workflows, Moodle XML exports, AI grader prompt files, template updates, preamble changes, and repository configuration.

**Branched from**: `develop`
**Merged into**: `develop` (via pull request)
**Lifetime**: Short — merge and delete when the infrastructure work is complete.

**Naming examples**:
```
infra/github-actions-latex-build
infra/moodle-question-bank-module-00
infra/ai-grader-system-prompt
infra/update-latex-preamble-macros
infra/zensical-config
```

**Important**: If a `preamble.tex` change affects existing exercise files, test the impact across all compiled files before merging. Macro changes are breaking changes for any file using the old macro name.

---

### `fix/description`

**Purpose**: Corrections to content or infrastructure already on `develop` or `main`. Typos, incorrect computations, broken LaTeX, outdated cross-references.

**Branched from**: `develop` (for most fixes) or `main` (for critical errors in published content — rare)
**Merged into**: Where it was branched from
**Lifetime**: Minimal — open only as long as it takes to make the fix.

**Naming examples**:
```
fix/typo-module02-unit01-notes
fix/broken-latex-module03-exercises
fix/incorrect-gradient-worked-example
fix/refresher-index-missing-entry
```

---

### `solutions` *(Protected)*

**Purpose**: Instructor-only branch containing all solution files. Students do not have access to this branch.

**Structure**: Mirrors `modules/` in the main branch.

```
solutions/
├── module-00-orientation/
│   ├── unit-01-vectors-review/
│   │   ├── solutions.tex
│   │   └── solutions.ipynb
│   ├── unit-02-dot-cross-products/
│   │   ├── solutions.tex
│   │   └── solutions.ipynb
│   └── ...
├── module-01-geometry-of-rn/
└── ...
```

**Access control** (configure in GitHub Settings → Branches):
- Branch protection: restrict push access to owner only
- If the repository is public: solutions branch should be handled carefully (see **Solutions Access Control** section below)

**How solutions are added**: Solutions for a module are written on a `solutions/module-NN` branch (branched from `solutions`), then merged into `solutions` when complete. They are **never** merged into `develop` or `main`.

```
solutions/module-00   →  solutions   (never to develop or main)
solutions/module-01   →  solutions
```

---

## Solutions Access Control

This is the most consequential branching decision in this repository. Three options are documented below. **Option B is the current recommended approach.**

### Option A — Same Repository, Protected Branch (Current)

Solutions live on the `solutions` branch of this repository. Branch protection restricts read/write access to the owner.

**Works well when**: Repository is private, or when the GitHub plan supports branch-level access restrictions.

**Limitation**: On GitHub Free with a public repository, branch protection restricts *writes* but not *reads*. Anyone can read a public branch, even a protected one. If the repository is public, students can checkout `solutions`.

**Mitigation if repository is public**: Keep solutions as a separate *private* repository (Option B).

---

### Option B — Separate Private Repository *(Recommended)*

Solutions live in a separate private repository: `threat-surfaces-solutions` (or similar). The main `threat-surfaces` repository is public; the solutions repository is private and accessible only to the owner.

```
threat-surfaces/          ← Public repository (student-facing)
threat-surfaces-solutions/ ← Private repository (instructor-only)
```

**Advantages**:
- Clean separation — no risk of accidental exposure
- Solutions repo can be shared with individual collaborators (e.g., PhD advisors, TAs) via repository-level access without granting them access to anything else
- Works on any GitHub plan

**Disadvantage**: Two repositories to maintain. Cross-references between them require absolute URLs rather than relative paths.

**Moodle integration note**: The AI grading assistant will need access to solution files. If using Option B, the grader accesses the private solutions repository via a deploy key or GitHub App, not via the public repository.

---

### Option C — Compiled Solutions, Not Source

Solutions are compiled to PDF and distributed via a separate channel (Moodle, email, course portal) rather than stored in any Git repository. The `.tex` source is kept locally only.

**Advantages**: Zero risk of accidental exposure. Solutions are always in a controlled distribution channel.

**Disadvantage**: Loses the version control and collaboration benefits of Git for solution files. Harder to maintain consistency between exercise and solution files over time.

**Recommended for**: Early stages before Moodle is deployed, or if solution source confidentiality is paramount.

---

## Common Workflows

### Starting a New Module

```bash
# Ensure develop is up to date
git checkout develop
git pull origin develop

# Create module branch
git checkout -b module/module-02-partial-derivatives

# Work: create unit folders, notes, exercises, Python labs
# ... development work ...

# Commit regularly with descriptive messages (see Commit Conventions below)
git add modules/module-02-partial-derivatives/
git commit -m "feat(m02): add unit-01 notes and exercises — partial derivative definition"

# When module is complete, open pull request to develop
git push origin module/module-02-partial-derivatives
# → Open PR on GitHub: module/module-02-partial-derivatives → develop
```

---

### Publishing a Module to Main

```bash
# On GitHub: open pull request from develop → main
# Complete the main branch merge checklist (see main branch definition above)
# Merge via GitHub UI — do not force push to main
# Delete the module branch after merge if not already deleted
```

---

### Adding a Refresher

```bash
git checkout develop
git pull origin develop
git checkout -b refresher/completing-the-square

# Create refreshers/completing-the-square/notes.md
# Update REFRESHER_INDEX.md
# Add inline link from the relevant sub-unit notes

git add refreshers/completing-the-square/ REFRESHER_INDEX.md
git commit -m "feat(refresher): add completing-the-square refresher"
git push origin refresher/completing-the-square
# → Open PR: refresher/completing-the-square → develop
```

---

### Adding Solutions for a Completed Module

```bash
# If using Option A (solutions branch in same repo):
git checkout solutions
git pull origin solutions
git checkout -b solutions/module-02

# Create solution files mirroring module structure
# ... write solutions ...

git add solutions/module-02-partial-derivatives/
git commit -m "feat(solutions): add module-02 unit-01 through unit-04 solutions"
git push origin solutions/module-02
# → Open PR: solutions/module-02 → solutions (NOT to develop or main)
```

---

### Fixing a Content Error

```bash
git checkout develop
git pull origin develop
git checkout -b fix/incorrect-gradient-example-m03-u01

# Make the fix
git add modules/module-03-gradient-and-directional/unit-01-gradient-vector/notes.md
git commit -m "fix(m03-u01): correct gradient computation in worked example"
git push origin fix/incorrect-gradient-example-m03-u01
# → Open PR: fix/... → develop
# → If error is in published main content, also cherry-pick to main or re-merge
```

---

## Commit Message Conventions

This repository uses a simplified version of [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
type(scope): short description

Optional body — explain *why* this change was made, not what.
Reference to related issue if applicable.
```

### Types

| Type | Use for |
|---|---|
| `feat` | New content: new unit, new refresher, new exercise |
| `fix` | Corrections: typos, incorrect math, broken LaTeX or notebook |
| `refactor` | Restructuring without content change: renamed files, reorganized sections |
| `infra` | Infrastructure: GitHub Actions, templates, preamble, Moodle files |
| `docs` | Repository documentation: README, COURSE_GUIDE, this file |
| `wip` | Work in progress: partial content commit, not ready for review |

### Scopes

| Scope | Meaning |
|---|---|
| `m00`, `m01`, ... | Specific module number |
| `m02-u03` | Specific module and unit |
| `refresher` | Any refresher module |
| `solutions` | Solutions branch content |
| `template` | Template file changes |
| `preamble` | LaTeX preamble changes |
| `repo` | Repository-wide changes |

### Examples

```
feat(m01-u02): add level curves unit — notes, exercises, python lab
fix(m02-u03): correct chain rule application in worked example
feat(refresher): add basic-probability refresher with python lab
infra(preamble): add \posterior and \prior shorthand macros
docs(repo): add branching strategy document
wip(m04-u02): hessian unit notes draft — exercises not yet started
fix(m03-u01): fix broken \Hess macro reference in exercise problem 3
```

---

## GitHub Repository Settings Checklist

When setting up the repository on GitHub, configure the following:

### Branch Protection — `main`
- [ ] Require pull request reviews before merging: **Yes** (1 approval)
- [ ] Dismiss stale pull request approvals when new commits are pushed: **Yes**
- [ ] Restrict who can push to matching branches: **Owner only**
- [ ] Do not allow bypassing the above settings: **Yes**
- [ ] Allow force pushes: **No**
- [ ] Allow deletions: **No**

### Branch Protection — `develop`
- [ ] Require pull request reviews before merging: **Yes** (1 approval)
- [ ] Allow force pushes: **No**
- [ ] Allow deletions: **No**

### Branch Protection — `solutions`
- [ ] Require pull request reviews: **Yes**
- [ ] Restrict who can push: **Owner only**
- [ ] Allow force pushes: **No**
- [ ] Allow deletions: **No**
- [ ] *(If public repo: consider moving solutions to a private repository — see Solutions Access Control)*

### General Settings
- [ ] Default branch: `main`
- [ ] Automatically delete head branches after merge: **Yes** (keeps branch list clean)
- [ ] Allow merge commits: **Yes**
- [ ] Allow squash merging: **Yes** *(useful for collapsing WIP commits before merging to develop)*
- [ ] Allow rebase merging: **No** *(avoid for content repos — merge commits preserve history better)*

---

## A Note on Scale

This strategy is designed for a single primary developer with occasional collaborators. If the course ever opens to significant external contribution (community pull requests, co-author modules), the strategy should be revisited to add:

- A `CONTRIBUTING.md` with explicit contribution guidelines
- Issue templates for content errors, refresher requests, and new module proposals
- A more formal review checklist embedded in pull request templates
- Possible GitHub Actions for automated LaTeX compilation checks

These are low priority until the first complete module is published.

---

*Branching Strategy version: 1.0.0*
*Last updated: February 2026*
*Threat Surfaces — fischer³ Education*
