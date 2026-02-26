# Module 00, Unit 01 — Vectors & Vector Spaces

> **Threat Surfaces: Multivariable Calculus for AI Security**
> fischer³ Education | Module 00 | Unit 01
>
> **Estimated reading time**: 12–15 minutes
> **Followed by**: Exercises (`exercises.tex`) → Python Lab (`python-lab.ipynb`)

---

## Learning Objectives

By the end of this sub-unit you will be able to:

- [ ] Represent points and directions as vectors in $\mathbb{R}^n$ and state the difference between them
- [ ] Perform vector addition and scalar multiplication, both algebraically and geometrically
- [ ] Compute the Euclidean norm of a vector and normalize it to a unit vector
- [ ] Express any vector as a linear combination of basis vectors
- [ ] Recognize vectors as the fundamental data structure of machine learning and statistical models

---

## Prerequisites

This sub-unit assumes:
- Familiarity with the Cartesian coordinate system in 2D and 3D
- Basic algebraic manipulation

No refreshers required for this unit. If coordinate geometry feels unfamiliar, a brief review of plotting points in $\mathbb{R}^2$ and $\mathbb{R}^3$ is sufficient preparation.

---

## 1. What Is a Vector?

A vector is one of two things, depending on context, and keeping that distinction clear will matter throughout this course.

**As a point**: a vector $\vx \in \mathbb{R}^n$ specifies a location in $n$-dimensional space — the endpoint of an arrow drawn from the origin.

**As a direction**: a vector $\vx \in \mathbb{R}^n$ specifies a magnitude and a direction of travel, with no fixed starting position.

Both interpretations appear constantly in statistics and machine learning. A data point (a single observation with $n$ measured features) is a point in $\mathbb{R}^n$. The gradient of a loss function is a direction — the direction of steepest increase — with no fixed location.

**Definition.** The set $\mathbb{R}^n$ is the collection of all ordered $n$-tuples of real numbers:

$$
\mathbb{R}^n = \left\{ \vx = (x_1, x_2, \ldots, x_n) \mid x_i \in \mathbb{R} \text{ for all } i \right\}
$$

Each element $\vx \in \mathbb{R}^n$ is a **vector**. The numbers $x_1, \ldots, x_n$ are its **components** or **coordinates**. We write vectors as column vectors throughout this course (consistent with standard statistical notation):

$$
\vx = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}
$$

> **Notation check.** This course uses bold lowercase for vectors ($\vx, \vy, \vtheta$) and bold uppercase for matrices ($\mX, \mSigma$). Scalars are unbolded ($x, \theta, \lambda$). This convention is defined in `assets/latex-preamble.tex` and used consistently across all exercise files.

---

## 2. Vector Operations

Two operations define the algebraic structure of $\mathbb{R}^n$.

### Vector Addition

Given $\vx, \vy \in \mathbb{R}^n$, their sum is computed componentwise:

$$
\vx + \vy = \begin{pmatrix} x_1 + y_1 \\ x_2 + y_2 \\ \vdots \\ x_n + y_n \end{pmatrix}
$$

Geometrically, this is the **parallelogram rule**: place $\vy$ at the tip of $\vx$; the sum $\vx + \vy$ is the vector reaching the far corner of the parallelogram they form.

### Scalar Multiplication

Given $\vx \in \mathbb{R}^n$ and a scalar $c \in \mathbb{R}$:

$$
c\vx = \begin{pmatrix} cx_1 \\ cx_2 \\ \vdots \\ cx_n \end{pmatrix}
$$

Geometrically, scalar multiplication **stretches** (if $|c| > 1$), **compresses** (if $|c| < 1$), or **reverses** (if $c < 0$) the vector while preserving its direction (or reversing it).

These two operations satisfy properties you would expect from arithmetic — commutativity, associativity, distributivity — making $\mathbb{R}^n$ a **vector space**. The formal axioms are not listed here; what matters is that these familiar rules hold and can be used freely.

---

## 3. Norms: Measuring Length

The **Euclidean norm** (or $\ell_2$ norm) of a vector $\vx \in \mathbb{R}^n$ is its length:

$$
\norm{\vx} = \norm{\vx}_2 = \sqrt{x_1^2 + x_2^2 + \cdots + x_n^2} = \sqrt{\vx\T \vx}
$$

This is the direct generalization of the Pythagorean theorem to $n$ dimensions. In $\mathbb{R}^2$, $\norm{(x_1, x_2)} = \sqrt{x_1^2 + x_2^2}$ is the familiar distance from the origin.

A **unit vector** has norm exactly 1. To normalize any nonzero vector $\vx$ to a unit vector pointing in the same direction:

$$
\hat{\vx} = \frac{\vx}{\norm{\vx}}
$$

Unit vectors matter because they isolate **direction** from **magnitude**. The gradient's direction (which way is uphill?) is captured by the normalized gradient; its magnitude (how steep is the slope?) is captured by the norm.

> ⚠ **The $\ell_2$ norm is not the only norm.** Machine learning regularly uses the $\ell_1$ norm $\norm{\vx}_1 = \sum_i |x_i|$ (Lasso regularization) and the $\ell_\infty$ norm $\norm{\vx}_\infty = \max_i |x_i|$. When "norm" is used without a subscript in this course, it means $\ell_2$ unless stated otherwise.

---

## 4. Linear Combinations & Span

A **linear combination** of vectors $\vv_1, \vv_2, \ldots, \vv_k \in \mathbb{R}^n$ with scalars $c_1, c_2, \ldots, c_k \in \mathbb{R}$ is:

$$
c_1 \vv_1 + c_2 \vv_2 + \cdots + c_k \vv_k = \sum_{i=1}^{k} c_i \vv_i
$$

The **span** of a set of vectors is the collection of all linear combinations you can form from them — the entire set of points reachable by varying the scalars freely.

**Basis vectors** are a set of vectors that span $\mathbb{R}^n$ with no redundancy (each vector adds a genuinely new direction). The **standard basis** for $\mathbb{R}^n$ consists of the unit vectors along each coordinate axis:

$$
\ve_1 = \begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}, \quad
\ve_2 = \begin{pmatrix}0\\1\\\vdots\\0\end{pmatrix}, \quad \ldots, \quad
\ve_n = \begin{pmatrix}0\\0\\\vdots\\1\end{pmatrix}
$$

Any vector $\vx \in \mathbb{R}^n$ can be written uniquely as:

$$
\vx = x_1 \ve_1 + x_2 \ve_2 + \cdots + x_n \ve_n
$$

Its components *are* its coordinates in the standard basis. This observation — that a vector is nothing more than a list of coordinates relative to a chosen basis — is foundational for understanding how coordinate changes (like PCA or whitening transformations) work in machine learning.

---

## Worked Example

**Example.** Let $\vx = (3, -1, 2)\T$ and $\vy = (-1, 4, 0)\T$ in $\mathbb{R}^3$.

**(a)** Compute $2\vx - 3\vy$.

**(b)** Compute $\norm{\vx}$ and normalize $\vx$ to a unit vector $\hat{\vx}$.

**(c)** Express $\vx$ as a linear combination of the standard basis vectors.

**Solution.**

**Part (a).**

$$
2\vx - 3\vy 
= 2\begin{pmatrix}3\\-1\\2\end{pmatrix} - 3\begin{pmatrix}-1\\4\\0\end{pmatrix}
= \begin{pmatrix}6\\-2\\4\end{pmatrix} - \begin{pmatrix}-3\\12\\0\end{pmatrix}
= \begin{pmatrix}9\\-14\\4\end{pmatrix}
$$

**Part (b).**

$$
\norm{\vx} = \sqrt{3^2 + (-1)^2 + 2^2} = \sqrt{9 + 1 + 4} = \sqrt{14}
$$

$$
\hat{\vx} = \frac{1}{\sqrt{14}}\begin{pmatrix}3\\-1\\2\end{pmatrix} = \begin{pmatrix}3/\sqrt{14}\\-1/\sqrt{14}\\2/\sqrt{14}\end{pmatrix}
$$

Verify: $\norm{\hat{\vx}} = \sqrt{9/14 + 1/14 + 4/14} = \sqrt{14/14} = 1$. ✓

**Part (c).**

$$
\vx = 3\ve_1 + (-1)\ve_2 + 2\ve_3
$$

The components of $\vx$ are precisely its coordinates in the standard basis. This is always the case — the representation is immediate by definition.

---

## Watch Out

> ⚠ **Points and vectors are not the same thing, even when they look identical.** The point $(3, -1, 2)$ and the vector $(3, -1, 2)\T$ have the same numerical components but different geometric meanings. A point has a fixed location; a vector can be translated freely. The distinction becomes important when we compute distances between points (requires subtraction) vs. norms of vectors (computed directly). In statistics, **observations are points**; **parameter updates, gradients, and residuals are vectors**.

---

## Statistical Bridge

> 🔗 **[PD] [MLE] [BAY] [GLM]** — Vectors are the native language of statistical modeling. Every concept in this course's statistical threads has a vector representation.

A **data matrix** $\mX \in \mathbb{R}^{n \times p}$ contains $n$ observations, each a point in $\mathbb{R}^p$. Each row is an observation vector; each column is a feature vector. The entire statistical modeling enterprise is, at its core, the study of geometric relationships among these vectors.

A **parameter vector** $\vtheta \in \mathbb{R}^k$ collects all the unknowns in a statistical model into a single geometric object. When we estimate a model, we are finding a point in $\mathbb{R}^k$ — parameter space — that optimizes some criterion. The geometry of that space (its shape, its distances, its curvature) is what the rest of this course is about.

$$
\text{Data point: } \vx_i = \begin{pmatrix}x_{i1}\\\vdots\\x_{ip}\end{pmatrix} \in \mathbb{R}^p \qquad
\text{Parameter vector: } \vtheta = \begin{pmatrix}\theta_1\\\vdots\\\theta_k\end{pmatrix} \in \mathbb{R}^k
$$

The norm $\norm{\vtheta}$ measures the "size" of a parameter vector — and appears directly in $\ell_2$ regularization (Ridge regression), where we penalize $\lambda\norm{\vtheta}^2$ to prevent overfitting. The scalar $\lambda$ controls how much we compress $\vtheta$ toward the origin.

---

## Summary

| Concept | Definition / Formula |
|---|---|
| Vector in $\mathbb{R}^n$ | Ordered $n$-tuple $(x_1, \ldots, x_n)\T$, interpreted as point or direction |
| Vector addition | $(x_1 + y_1, \ldots, x_n + y_n)\T$ — componentwise |
| Scalar multiplication | $(cx_1, \ldots, cx_n)\T$ — stretches / compresses / reverses |
| Euclidean norm | $\norm{\vx} = \sqrt{\sum_i x_i^2} = \sqrt{\vx\T\vx}$ |
| Unit vector | $\hat{\vx} = \vx / \norm{\vx}$, satisfies $\norm{\hat{\vx}} = 1$ |
| Linear combination | $\sum_{i=1}^k c_i \vv_i$ for scalars $c_i$ |
| Standard basis | $\{\ve_1, \ldots, \ve_n\}$ — coordinate axis unit vectors |

---

## Up Next

**Exercises** (`exercises.tex`) — Four problems covering vector arithmetic, norm computation, normalization, and a regression-motivated linear combination problem. Estimated 20–30 minutes.

**Python Lab** (`python-lab.ipynb`) — Visualize vectors in $\mathbb{R}^2$ and $\mathbb{R}^3$, confirm norm calculations symbolically, and plot the geometric effect of scalar multiplication and normalization. You will also build your first parameter-space visualization — a preview of what optimization landscapes look like.

---

## Further Reading

- Stewart, *Calculus: Early Transcendentals*, Chapter 12.1–12.2 — vectors in $\mathbb{R}^2$ and $\mathbb{R}^3$, accessible introduction
- Strang, *Introduction to Linear Algebra*, Chapter 1 — vectors and linear combinations, the foundational text for the linear algebra used throughout this course
- Bishop, *Pattern Recognition and Machine Learning*, Chapter 1.1 — data as vectors in feature space; the ML framing of everything covered here

---

*Sub-unit version: 1.0.0*
*Last updated: February 2026*
*Module 00, Unit 01 — Threat Surfaces, fischer³ Education*
