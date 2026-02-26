# Module 00, Unit 02 — Dot Products & Cross Products

> **Threat Surfaces: Multivariable Calculus for AI Security**
> fischer³ Education | Module 00 | Unit 02
>
> **Estimated reading time**: 12–15 minutes
> **Followed by**: Exercises (`exercises.tex`) → Python Lab (`python-lab.ipynb`)

---

## Learning Objectives

By the end of this sub-unit you will be able to:

- [ ] Compute the dot product of two vectors algebraically and using the angle formula
- [ ] Interpret the dot product geometrically as a projection and as a measure of alignment
- [ ] Use the dot product to find the angle between two vectors and to test orthogonality
- [ ] Compute the scalar and vector projections of one vector onto another
- [ ] Compute the cross product of two vectors in $\mathbb{R}^3$ and interpret it geometrically
- [ ] Recognize orthogonality as the central geometric concept in least squares regression

---

## Prerequisites

This sub-unit assumes:
- Vectors in $\mathbb{R}^n$, norms, and unit vectors (Module 00, Unit 01)
- Basic trigonometry — cosine, the unit circle, and the range of $\cos\theta$

If trigonometry feels rusty:
- → [`refreshers/trig-essentials/`](../../../refreshers/trig-essentials/notes.md) — covers $\sin$, $\cos$, key identities, and radian measure

---

## 1. The Dot Product

The **dot product** (also called the **inner product** or **scalar product**) takes two vectors and returns a single scalar. It is the most important operation in this course — it appears in projection, orthogonality, the gradient, covariance, and regression.

**Definition.** For $\vx, \vy \in \mathbb{R}^n$:

$$
\vx \cdot \vy = \vx\T\vy = \sum_{i=1}^{n} x_i y_i = x_1 y_1 + x_2 y_2 + \cdots + x_n y_n
$$

The result is a scalar — a single real number, not a vector.

**Example.** For $\vx = (2, -1, 3)\T$ and $\vy = (4, 2, -1)\T$:

$$
\vx \cdot \vy = (2)(4) + (-1)(2) + (3)(-1) = 8 - 2 - 3 = 3
$$

Notice the connection to the norm from Unit 01:

$$
\vx \cdot \vx = \sum_{i=1}^n x_i^2 = \norm{\vx}^2
$$

The norm is the square root of a vector's dot product with itself. Every norm computation you did in Unit 01 was a special case of the dot product.

> **Notation check.** This course writes the dot product as $\vx \cdot \vy$ in prose and $\vx\T\vy$ in matrix expressions. Both mean the same thing. In the statistical literature you will frequently see $\langle \vx, \vy \rangle$ for the inner product — this is also identical for the standard Euclidean dot product.

---

## 2. Geometric Interpretation: Angle & Alignment

The algebraic definition above is efficient for computation, but the geometric definition reveals what the dot product *means*.

**Theorem (Geometric dot product).** For any $\vx, \vy \in \mathbb{R}^n$ with $\theta$ the angle between them ($0 \leq \theta \leq \pi$):

$$
\vx \cdot \vy = \norm{\vx}\,\norm{\vy}\cos\theta
$$

This is the key formula. It says the dot product measures two things simultaneously: the magnitudes of both vectors, and how well they are *aligned* (via $\cos\theta$).

Rearranging to find the angle:

$$
\cos\theta = \frac{\vx \cdot \vy}{\norm{\vx}\,\norm{\vy}} = \hat{\vx} \cdot \hat{\vy}
$$

The cosine of the angle between two vectors is the dot product of their normalizations. This is worth memorizing.

### What $\cos\theta$ Tells You

| Angle $\theta$ | $\cos\theta$ | Dot product | Interpretation |
|---|---|---|---|
| $0°$ | $1$ | $\norm{\vx}\norm{\vy}$ | Same direction — maximum alignment |
| $0° < \theta < 90°$ | $(0, 1)$ | Positive | Acute angle — partially aligned |
| $90°$ | $0$ | $0$ | **Orthogonal** — no alignment |
| $90° < \theta < 180°$ | $(-1, 0)$ | Negative | Obtuse angle — partially opposed |
| $180°$ | $-1$ | $-\norm{\vx}\norm{\vy}$ | Opposite directions — maximum opposition |

The zero case is the most important: **two vectors are orthogonal if and only if their dot product is zero.**

$$
\vx \perp \vy \iff \vx \cdot \vy = 0
$$

Orthogonality is the generalization of "perpendicular" to $n$ dimensions. It is foundational in linear algebra, statistics, and signal processing.

---

## 3. Projection

The geometric interpretation of the dot product leads directly to projection — decomposing one vector into a component that aligns with another and a component that is orthogonal to it.

**Scalar projection** of $\vx$ onto $\vy$ (also called the component of $\vx$ in the direction of $\vy$):

$$
\text{comp}_{\vy}\,\vx = \frac{\vx \cdot \vy}{\norm{\vy}} = \norm{\vx}\cos\theta
$$

This is a scalar — the signed length of the shadow that $\vx$ casts on the line through $\vy$.

**Vector projection** of $\vx$ onto $\vy$ — the actual vector along $\vy$:

$$
\text{proj}_{\vy}\,\vx = \frac{\vx \cdot \vy}{\norm{\vy}^2}\,\vy = \frac{\vx \cdot \vy}{\vy \cdot \vy}\,\vy
$$

The vector projection has the scalar projection as its magnitude and points in the direction of $\vy$.

**The orthogonal component** of $\vx$ relative to $\vy$ — what is left after removing the projection:

$$
\vx_\perp = \vx - \text{proj}_{\vy}\,\vx
$$

This component is orthogonal to $\vy$ by construction: $\vx_\perp \cdot \vy = 0$. Verify this in the worked example below — it is a useful habit.

> ⚠ **The projection formula requires the denominator to be $\norm{\vy}^2 = \vy \cdot \vy$, not $\norm{\vy}$.** This is a common error. If you normalize $\vy$ to $\hat{\vy}$ first, the formula simplifies to $\text{proj}_{\hat{\vy}}\,\vx = (\vx \cdot \hat{\vy})\hat{\vy}$, which is easier to remember and harder to get wrong.

---

## 4. The Cross Product

The cross product is defined only in $\mathbb{R}^3$. It takes two vectors and returns a third vector — perpendicular to both.

**Definition.** For $\vx = (x_1, x_2, x_3)\T$ and $\vy = (y_1, y_2, y_3)\T$:

$$
\vx \times \vy = \begin{vmatrix} \vi & \vj & \vk \\ x_1 & x_2 & x_3 \\ y_1 & y_2 & y_3 \end{vmatrix}
= \begin{pmatrix} x_2 y_3 - x_3 y_2 \\ x_3 y_1 - x_1 y_3 \\ x_1 y_2 - x_2 y_1 \end{pmatrix}
$$

where $\vi, \vj, \vk$ are the standard basis vectors $\ve_1, \ve_2, \ve_3$.

### Key Properties

**Magnitude:** $\norm{\vx \times \vy} = \norm{\vx}\,\norm{\vy}\sin\theta$

This equals the area of the parallelogram spanned by $\vx$ and $\vy$. Compare with the dot product: $\vx \cdot \vy = \norm{\vx}\norm{\vy}\cos\theta$. Together, $\sin\theta$ and $\cos\theta$ capture the full angular relationship.

**Direction:** $\vx \times \vy$ is perpendicular to both $\vx$ and $\vy$, with orientation given by the **right-hand rule** — curl the fingers of your right hand from $\vx$ toward $\vy$; your thumb points in the direction of $\vx \times \vy$.

**Anti-commutativity:** $\vx \times \vy = -(\vy \times \vx)$. The cross product is not commutative — order matters and reversal flips the sign.

**Parallel vectors:** If $\vx$ and $\vy$ are parallel ($\theta = 0$ or $\theta = \pi$), then $\sin\theta = 0$ and $\vx \times \vy = \vzero$. In particular, $\vx \times \vx = \vzero$ for any $\vx$.

> **Scope note.** The cross product is specific to $\mathbb{R}^3$ and plays a smaller role in the statistical material than the dot product. It appears in the vector calculus modules (curl in Module 07) and in some physics-adjacent derivations. The more important concept to internalize deeply is the dot product and orthogonality — those are universal in any dimension.

---

## Worked Example

**Example.** Let $\va = (1, 2, -1)\T$ and $\vb = (3, 0, 2)\T$.

**(a)** Compute $\va \cdot \vb$ and find the angle $\theta$ between $\va$ and $\vb$.

**(b)** Compute $\text{proj}_{\vb}\,\va$ and the orthogonal component $\va_\perp$.

**(c)** Compute $\va \times \vb$ and verify it is orthogonal to both $\va$ and $\vb$.

**Solution.**

**Part (a).**

$$
\va \cdot \vb = (1)(3) + (2)(0) + (-1)(2) = 3 + 0 - 2 = 1
$$

$$
\norm{\va} = \sqrt{1 + 4 + 1} = \sqrt{6}, \qquad \norm{\vb} = \sqrt{9 + 0 + 4} = \sqrt{13}
$$

$$
\cos\theta = \frac{\va \cdot \vb}{\norm{\va}\,\norm{\vb}} = \frac{1}{\sqrt{6}\cdot\sqrt{13}} = \frac{1}{\sqrt{78}}
$$

$$
\theta = \arccos\!\left(\frac{1}{\sqrt{78}}\right) \approx \arccos(0.1133) \approx 83.5°
$$

The angle is close to $90°$, which makes sense — the dot product is small (1) relative to the product of the norms ($\sqrt{78} \approx 8.83$).

**Part (b).**

$$
\text{proj}_{\vb}\,\va = \frac{\va \cdot \vb}{\norm{\vb}^2}\,\vb = \frac{1}{13}\begin{pmatrix}3\\0\\2\end{pmatrix} = \begin{pmatrix}3/13\\0\\2/13\end{pmatrix}
$$

$$
\va_\perp = \va - \text{proj}_{\vb}\,\va = \begin{pmatrix}1\\2\\-1\end{pmatrix} - \begin{pmatrix}3/13\\0\\2/13\end{pmatrix} = \begin{pmatrix}10/13\\2\\-15/13\end{pmatrix}
$$

**Verification** that $\va_\perp \perp \vb$:

$$
\va_\perp \cdot \vb = \frac{10}{13}(3) + 2(0) + \left(-\frac{15}{13}\right)(2) = \frac{30}{13} - \frac{30}{13} = 0 \quad \checkmark
$$

**Part (c).**

$$
\va \times \vb = \begin{vmatrix}\vi & \vj & \vk \\ 1 & 2 & -1 \\ 3 & 0 & 2\end{vmatrix}
= \vi\bigl((2)(2)-(-1)(0)\bigr) - \vj\bigl((1)(2)-(-1)(3)\bigr) + \vk\bigl((1)(0)-(2)(3)\bigr)
$$

$$
= \vi(4) - \vj(2+3) + \vk(0-6) = \begin{pmatrix}4\\-5\\-6\end{pmatrix}
$$

**Verification** of orthogonality to $\va$:
$$
(4)(1) + (-5)(2) + (-6)(-1) = 4 - 10 + 6 = 0 \quad \checkmark
$$

**Verification** of orthogonality to $\vb$:
$$
(4)(3) + (-5)(0) + (-6)(2) = 12 + 0 - 12 = 0 \quad \checkmark
$$

---

## Watch Out

> ⚠ **The dot product of two vectors is a scalar. The cross product is a vector. These are different objects.** A common error is to treat the dot product result as a vector or to confuse the two operations. In statistics and ML, you almost always want the dot product (scalar). The cross product is specific to $\mathbb{R}^3$ and has limited statistical application.

> ⚠ **Orthogonality does not mean the vectors are "small" or "unrelated" in a causal sense.** In statistics, two variables can be orthogonal (uncorrelated) and still have a strong common cause. Orthogonality is a purely geometric property of the vectors representing those variables in a given sample.

---

## Statistical Bridge

> 🔗 **[GLM]** — Orthogonality is the geometric heart of least squares regression.

In ordinary least squares (OLS), we model the response vector $\vy \in \mathbb{R}^n$ as a linear combination of the columns of the design matrix $\mX \in \mathbb{R}^{n \times p}$. The OLS estimate $\hat{\vy} = \mX\hat{\vbeta}$ is the **projection** of $\vy$ onto the column space of $\mX$.

The residual vector $\ve = \vy - \hat{\vy}$ is the orthogonal component — exactly the $\va_\perp$ construction from Part (b) of the worked example, applied in $\mathbb{R}^n$.

The defining property of OLS residuals is orthogonality to every column of $\mX$:

$$
\mX\T(\vy - \mX\hat{\vbeta}) = \mX\T\ve = \vzero
$$

These are the **normal equations** — named precisely because the residual is *normal* (perpendicular) to the fitted values. Every column $\vx_j$ of $\mX$ satisfies $\vx_j \cdot \ve = 0$.

$$
\underbrace{\vy}_{\text{observed}} = \underbrace{\hat{\vy}}_{\text{projection onto col}(\mX)} + \underbrace{\ve}_{\perp\, \text{to col}(\mX)}
$$

This decomposition — observed = fitted + residual, with fitted $\perp$ residual — is the Pythagorean theorem in $\mathbb{R}^n$, and it is what makes OLS geometrically elegant. The formula $\hat{\vbeta} = (\mX\T\mX)^{-1}\mX\T\vy$ is the formula for a projection, derived entirely from the orthogonality condition $\mX\T\ve = \vzero$.

We will derive this in full in Module 06. For now, hold onto the image: **regression is projection, and residuals are orthogonal components.**

---

## Summary

| Concept | Formula |
|---|---|
| Dot product (algebraic) | $\vx \cdot \vy = \sum_i x_i y_i = \vx\T\vy$ |
| Dot product (geometric) | $\vx \cdot \vy = \norm{\vx}\norm{\vy}\cos\theta$ |
| Angle between vectors | $\cos\theta = \dfrac{\vx \cdot \vy}{\norm{\vx}\norm{\vy}}$ |
| Orthogonality condition | $\vx \perp \vy \iff \vx \cdot \vy = 0$ |
| Norm via dot product | $\norm{\vx}^2 = \vx \cdot \vx$ |
| Vector projection | $\text{proj}_{\vy}\,\vx = \dfrac{\vx \cdot \vy}{\norm{\vy}^2}\,\vy$ |
| Orthogonal component | $\vx_\perp = \vx - \text{proj}_{\vy}\,\vx$ |
| Cross product (magnitude) | $\norm{\vx \times \vy} = \norm{\vx}\norm{\vy}\sin\theta$ |
| Cross product (direction) | Perpendicular to both $\vx$ and $\vy$; right-hand rule |

---

## Up Next

**Exercises** (`exercises.tex`) — Problems covering dot product computation, angle finding, projection and orthogonal decomposition, cross product, and a regression geometry problem connecting the projection formula to OLS.

**Python Lab** (`python-lab.ipynb`) — Visualize vector projections and orthogonal decomposition in $\mathbb{R}^2$ and $\mathbb{R}^3$. Plot the OLS projection geometry in a concrete two-variable regression example. Build geometric intuition for why residuals are orthogonal to fitted values.

---

## Further Reading

- Stewart, *Calculus: Early Transcendentals*, Chapter 12.3 (dot product) and 12.4 (cross product) — standard reference treatment
- Strang, *Introduction to Linear Algebra*, Chapter 4.1–4.2 — orthogonality and projections in the linear algebra framing; this is the foundation for the Module 06 regression derivation
- Bishop, *PRML*, Chapter 3.1.1 — least squares as a projection problem

---

*Sub-unit version: 1.0.0*
*Last updated: February 2026*
*Module 00, Unit 02 — Threat Surfaces, fischer³ Education*
