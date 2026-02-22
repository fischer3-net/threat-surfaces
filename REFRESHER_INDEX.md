# Refresher Index — Threat Surfaces

> Multivariable Calculus for AI Security | fischer³ Education

Refreshers are **optional, ungraded, standalone** review modules for foundational topics that may have been studied years ago. They are not prerequisites to be front-loaded — go to a refresher when a specific gap surfaces, at the moment the course material links you there.

Each refresher contains:
- **Notes** — concise concept review, just what you need for this course
- **Worked examples** — one or two, enough to rebuild pattern recognition
- **Python lab** — where visualization adds more than a proof (marked below)

---

## How to Use This Index

**Option 1 — Follow inline links.** The most effective method. Each sub-unit's notes link to relevant refreshers at the exact moment a concept is assumed. Trust the course to surface what you need.

**Option 2 — Browse by topic cluster.** If you know there's a whole area that feels shaky before starting, browse the clusters below and work through the relevant refreshers first.

**Option 3 — Search this file.** Use your editor's search to find a specific concept you're unsure about.

---

## Topic Clusters

### Algebra & Pre-Calculus

| Refresher | Folder | Python Lab | First Used |
|---|---|---|---|
| Exponential & Logarithm Rules | `refreshers/exponential-and-log-rules/` | No | Module 02, Unit 01 |
| Sigma Notation & Summation Rules | `refreshers/sigma-notation/` | No | Module 05, Unit 01 |
| Completing the Square | `refreshers/completing-the-square/` | No | Module 06, Unit 02 |

---

### Trigonometry

| Refresher | Folder | Python Lab | First Used |
|---|---|---|---|
| Trigonometry Essentials | `refreshers/trig-essentials/` | Yes | Module 00, Unit 02 |

Covers: unit circle, $\sin$, $\cos$, $\tan$ and their inverses, key identities (Pythagorean, double angle), converting between degrees and radians. The Python lab plots the functions and the unit circle interactively.

---

### Single-Variable Calculus

| Refresher | Folder | Python Lab | First Used |
|---|---|---|---|
| Single-Variable Chain Rule | `refreshers/single-variable-chain-rule/` | No | Module 00, Unit 03 |

Covers: the chain rule $\frac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x)$, common compositions (exponential, logarithm, power), nested compositions, and the product rule. Heavy on worked examples.

---

### Linear Algebra

| Refresher | Folder | Python Lab | First Used |
|---|---|---|---|
| Matrix Algebra Basics | `refreshers/matrix-algebra-basics/` | Yes | Module 03, Unit 03 |

Covers: matrix multiplication, transpose, inverse (existence conditions), determinants (2×2 and 3×3), eigenvalues and eigenvectors (conceptual and computational), positive definiteness. The Python lab uses NumPy throughout — students who complete this refresher will be prepared for the Hessian and Fisher Information material.

---

### Probability

| Refresher | Folder | Python Lab | First Used |
|---|---|---|---|
| Basic Probability | `refreshers/basic-probability/` | Yes | Module 05, Unit 01 |

Covers: sample spaces and events, probability axioms, conditional probability, Bayes' theorem, independence, discrete and continuous random variables, PDFs and CDFs, expectation and variance. The Python lab simulates experiments and plots distributions using `scipy.stats`.

---

## Full Alphabetical Index

| Concept | Refresher Module | Notes |
|---|---|---|
| Bayes' theorem | `basic-probability` | Foundational for all Bayesian bridge sections |
| Chain rule (single variable) | `single-variable-chain-rule` | Extended to multivariable in Module 02, Unit 03 |
| Completing the square | `completing-the-square` | Essential for Gaussian integral derivation in Module 06 |
| Conditional probability | `basic-probability` | |
| Determinants | `matrix-algebra-basics` | Needed for Jacobian determinant in Module 05 |
| Eigenvalues & eigenvectors | `matrix-algebra-basics` | Needed for Hessian classification in Module 04 |
| Expectation & variance | `basic-probability` | |
| Exponential function rules | `exponential-and-log-rules` | |
| Inverse matrix | `matrix-algebra-basics` | Needed for $\Sigma^{-1}$ in Module 06 |
| Logarithm rules | `exponential-and-log-rules` | Critical for log-likelihood work throughout |
| Matrix multiplication | `matrix-algebra-basics` | |
| PDFs & CDFs | `basic-probability` | |
| Positive definiteness | `matrix-algebra-basics` | Needed for Hessian and covariance matrix |
| Product rule | `single-variable-chain-rule` | Included in chain rule refresher |
| Pythagorean identity | `trig-essentials` | |
| Radian measure | `trig-essentials` | |
| Sigma notation | `sigma-notation` | |
| $\sin$, $\cos$, $\tan$ | `trig-essentials` | |
| Transpose | `matrix-algebra-basics` | |
| Unit circle | `trig-essentials` | |

---

## Adding New Refreshers

As you work through the course, you may encounter gaps not covered by the refreshers above. New refreshers can be added at any time:

1. Create a new folder under `refreshers/` using kebab-case naming
2. Add `notes.md` using the `templates/refresher-template.md` skeleton
3. Add `python-lab.ipynb` if visualization helps (optional)
4. Add an entry to this index under the appropriate cluster and to the alphabetical table
5. Link from the relevant sub-unit notes file

This index is a living document. It is expected to grow as the course is used.

---

## What Refreshers Are Not

Refreshers are not a substitute for working through the course material. They are a tool for resolving a specific, identified gap at the moment it matters. If you find yourself working through multiple refreshers before starting the course, that is a signal to reconsider the prerequisites — a stronger single-variable calculus foundation may be needed before this course.

---

*Refresher Index version: 0.1.0-alpha*
*Last updated: February 2026*
