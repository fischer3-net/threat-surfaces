# Threat Surfaces
## Multivariable Calculus for AI Security

> *A fischer³ Education Course*

---

Agentic AI systems fail in mathematically predictable ways. Understanding those failure modes — and building defenses against them — requires fluency in the mathematics underlying the models themselves. This course builds that fluency.

**Threat Surfaces** is a rigorous but applied introduction to multivariable calculus, taught with a consistent eye toward AI security applications. Every concept is grounded in how it surfaces (often literally) in probability theory, statistical inference, machine learning, and the threat modeling of agentic systems.

This is not a course for math students learning calculus as an end in itself. It is a course for practitioners and researchers who need the mathematical foundations to understand, build, evaluate, and secure AI systems.

---

## Who This Course Is For

- Software engineers entering the AI security space who need to rebuild or deepen mathematical intuition
- Security researchers whose work requires engaging with ML systems at a model level
- PhD students and practitioners preparing for graduate-level statistical methods
- Anyone who has taken Calculus 1 and 2 and wants to extend that foundation toward modern AI and statistical reasoning

**Prerequisites**: Single-variable calculus (derivatives, integrals, chain rule). Familiarity with basic linear algebra is helpful but not required — a refresher is provided. Comfort with LaTeX is assumed for problem set work.

---

## What You Will Learn

By the end of this course you will be able to:

- Reason geometrically and analytically about functions of multiple variables
- Compute and interpret gradients, Jacobians, and Hessians — and understand why these are central to modern ML
- Optimize functions under constraints, understanding both analytical and numerical approaches
- Evaluate multiple integrals and use them to reason about joint probability distributions
- Understand the multivariate normal distribution from first principles
- Apply vector calculus concepts to information geometry and distributional reasoning
- Connect every major concept to probability distributions, maximum likelihood estimation, Bayesian inference, and multivariate regression

---

## How This Course Is Structured

The course is organized into **modules**, each broken into **sub-units** designed to be completed in 30–60 minute sessions. This structure is intentional: the course was built for practitioners with demanding schedules who need to be able to pick up exactly where they left off.

Each sub-unit contains four components:

| Component | Format | Time | Purpose |
|---|---|---|---|
| **Notes** | Markdown | 10–15 min | Concept introduction with worked example |
| **Exercises** | LaTeX PDF | 20–30 min | Hand-worked problem set |
| **Python Lab** | Jupyter Notebook | 15–20 min | Computational implementation and visualization |
| **Solutions** | LaTeX PDF + Notebook | Reference | Separate files — work the problems first |

### Refreshers
Throughout the course, notes link to **optional refresher modules** covering foundational topics that may have been studied years ago: the chain rule, matrix algebra, basic probability, and others. These are ungraded, self-contained, and linked inline at the exact moment they become relevant — not front-loaded as prerequisites.

See [`REFRESHER_INDEX.md`](REFRESHER_INDEX.md) for the complete list.

---

## Course Modules

| Module | Title | Focus |
|---|---|---|
| 00 | Orientation & Prerequisites | Vectors, dot products, notation conventions |
| 01 | Geometry of $\mathbb{R}^n$ | Scalar fields, level sets, geometric intuition |
| 02 | Partial Derivatives & Differentiability | Partials, chain rule, total differential |
| 03 | The Gradient & Directional Derivatives | Gradient fields, steepest ascent, Jacobian |
| 04 | Optimization in Multiple Variables | Critical points, Hessian, Lagrange multipliers |
| 05 | Multiple Integrals | Iterated integrals, coordinate systems, change of variables |
| 06 | The Multivariate Normal (Capstone) | MVN from first principles — synthesis module |
| 07 | Vector Calculus | Divergence, curl, line and surface integrals, major theorems |
| 08 | Capstone Project | Bayesian logistic regression, end-to-end |

Full detail, learning objectives, and time estimates: [`COURSE_GUIDE.md`](COURSE_GUIDE.md)

---

## Repository Structure

```
threat-surfaces/
├── README.md                   # This file
├── COURSE_GUIDE.md             # Full module map with learning objectives
├── REFRESHER_INDEX.md          # Master index of all refresher modules
│
├── templates/                  # Reusable skeletons for all content types
│   ├── notes-template.md
│   ├── exercises-template.tex
│   ├── refresher-template.md
│   └── python-lab-template.ipynb
│
├── refreshers/                 # Optional, ungraded, standalone review modules
│   ├── README.md
│   └── [topic]/
│       ├── notes.md
│       └── python-lab.ipynb   (where applicable)
│
├── modules/                    # Course content
│   └── module-NN-title/
│       ├── README.md
│       └── unit-NN-title/
│           ├── notes.md
│           ├── exercises.tex
│           └── python-lab.ipynb
│
├── solutions/                  # Mirrors modules/ — kept separate
│   └── module-NN-title/
│       └── unit-NN-title/
│           ├── solutions.tex
│           └── solutions.ipynb
│
├── appendices/
│   ├── matrix-calculus.md
│   ├── latex-notation-reference.md
│   └── further-reading.md
│
├── moodle/
│   ├── question-bank/          # Moodle XML exports
│   └── ai-grader/
│       ├── README.md
│       ├── rubrics/            # Per-unit rubric files
│       └── prompts/            # System prompts for grading assistant
│
└── assets/
    ├── figures/                # Static images used in notes
    └── latex-preamble.tex      # Shared LaTeX preamble for all exercise files
```

---

## Moodle Integration

Graded exercises are available for import into the Moodle LMS at `learn.fischer3.net`. Each module's `moodle/question-bank/` export corresponds directly to the exercise files in this repository.

An AI grading assistant is available for open-ended problems. It evaluates submitted solutions against structured rubrics, providing step-level feedback rather than binary right/wrong scoring.

---

## License

Course content is released under [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to use, adapt, and redistribute with attribution.

Python lab code is released under the MIT License.

---

## About fischer³ Education

This course is part of the fischer³ Education initiative — technical education content built at the intersection of mathematics, AI, and security. For more, visit [zero-trust.ai](https://zero-trust.ai).

---

*Course version: 0.1.0-alpha*
*Last updated: February 2026*
