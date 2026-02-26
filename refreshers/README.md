# Refreshers — Threat Surfaces

> **Optional, ungraded, standalone review modules**
> fischer³ Education

Refreshers exist for one reason: the people who need this course most are often the ones for whom foundational material was studied years ago and is now partially dormant. This folder addresses that directly.

## How Refreshers Work

They are linked inline from sub-unit notes at the exact moment a concept is assumed — not listed as prerequisites to front-load before the course. If the notes say "→ `refreshers/matrix-algebra-basics/`", that is the signal to come here.

## What Refreshers Contain

- `notes.md` — concise concept review, just what you need for this course
- `python-lab.ipynb` — where visualization adds more than a proof (not always present)

No exercises. No grading. No Moodle integration.

## Available Refreshers

See [`REFRESHER_INDEX.md`](../REFRESHER_INDEX.md) for the complete, searchable list.

| Topic Cluster | Refreshers |
|---|---|
| Algebra & Pre-Calculus | Exponential & Log Rules, Sigma Notation, Completing the Square |
| Trigonometry | Trig Essentials |
| Single-Variable Calculus | Single-Variable Chain Rule |
| Linear Algebra | Matrix Algebra Basics |
| Probability | Basic Probability |

## Adding a New Refresher

1. Create a folder here using kebab-case: `refreshers/your-topic-name/`
2. Copy `templates/refresher-template.md` → `your-topic-name/notes.md`
3. Add `python-lab.ipynb` if useful (use `templates/python-lab-template.ipynb`)
4. Add an entry to `REFRESHER_INDEX.md`
5. Link from the relevant sub-unit notes at the point where the concept is assumed
