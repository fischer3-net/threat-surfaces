# Course Guide — Threat Surfaces

> Multivariable Calculus for AI Security | fischer³ Education

This document is the authoritative map of the course. It contains every module, every sub-unit, learning objectives, time estimates, statistical bridges, and prerequisite relationships. Consult it when planning sessions, returning after a break, or deciding which refreshers to visit.

---

## How to Use This Course

### The Sub-Unit Rhythm
Every sub-unit follows the same four-part structure:

1. **Notes** (`notes.md`) — Read the concept, study the worked example. *~10–15 min*
2. **Exercises** (`exercises.tex` → compiled PDF) — Work the problems by hand. *~20–30 min*
3. **Python Lab** (`python-lab.ipynb`) — Implement and visualize computationally. *~15–20 min*
4. **Solutions** (`solutions/`) — Check your work. Never skip this step.

A complete sub-unit is **45–65 minutes**. You can stop and resume between any of the four parts — each is independently self-contained.

### Refreshers
When notes reference a foundational topic that may be rusty, they link directly to a refresher module. Refreshers are **optional and ungraded**. Do not front-load them — go when a specific gap surfaces. See [`REFRESHER_INDEX.md`](REFRESHER_INDEX.md).

### Statistical Bridges
Each module ends with a Bridge section connecting the calculus to one or more of the course's four statistical threads:
- **[PD]** Probability distributions & expectation
- **[MLE]** Maximum likelihood estimation
- **[BAY]** Bayesian inference
- **[GLM]** Multivariate regression & GLMs

---

## Module 00 — Orientation & Prerequisites
*Calibration module. Establish notation, verify starting point, surface any gaps before they become obstacles.*

**Module learning objectives:**
- Confirm fluency with vectors and vector operations in $\mathbb{R}^2$ and $\mathbb{R}^3$
- Establish the notation conventions used throughout this course
- Identify and address any gaps in single-variable calculus fluency

---

### Unit 00-01 — Vectors & Vector Spaces
**Time estimate**: 50–60 min
**Learning objectives**:
- Represent points and directions as vectors in $\mathbb{R}^n$
- Perform vector addition, scalar multiplication, and compute vector norms
- Understand the geometric meaning of linear combinations

**Refresher links**: None required
**Statistical bridge**: None (orientation unit)

---

### Unit 00-02 — Dot Products & Cross Products
**Time estimate**: 55–65 min
**Learning objectives**:
- Compute dot products and interpret them geometrically (angle, projection)
- Compute cross products in $\mathbb{R}^3$ and interpret the result geometrically
- Use dot products to establish orthogonality — a concept that recurs throughout the statistical material

**Refresher links**: → `trig-essentials` if angle/projection geometry feels shaky
**Statistical bridge**: Orthogonality in least squares regression [GLM]

---

### Unit 00-03 — Single-Variable Review & Notation Setup
**Time estimate**: 45–55 min
**Learning objectives**:
- Review limits, continuity, and differentiability in one variable
- Review the chain rule, product rule, and integration techniques
- Establish the LaTeX notation and conventions used in all subsequent exercise files

**Refresher links**: → `single-variable-chain-rule`, → `exponential-and-log-rules`
**Statistical bridge**: Log-likelihood as a function to be differentiated [MLE]

---

## Module 01 — Geometry of $\mathbb{R}^n$
*Build the visual and geometric intuition that makes everything else tractable. Functions of multiple variables are landscapes — learn to read them before computing them.*

**Module learning objectives:**
- Visualize and reason about scalar fields and vector fields
- Interpret level curves and level surfaces as geometric objects
- Develop pre-formal intuition for the gradient

---

### Unit 01-01 — Functions of Multiple Variables & Scalar Fields
**Time estimate**: 50–60 min
**Learning objectives**:
- Define functions $f: \mathbb{R}^n \to \mathbb{R}$ and understand their domain and range
- Distinguish scalar fields from vector fields
- Plot and interpret functions of two variables as surfaces in $\mathbb{R}^3$

**Refresher links**: None
**Statistical bridge**: Probability density functions as scalar fields over parameter space [PD]

---

### Unit 01-02 — Level Curves & Level Surfaces
**Time estimate**: 50–60 min
**Learning objectives**:
- Define and construct level curves (contour lines) for $f(x,y)$
- Extend to level surfaces for $f(x,y,z)$
- Interpret the geometry: what does it mean to move along a level curve vs. across them?

**Refresher links**: None
**Statistical bridge**: Likelihood contours as level curves of $\ell(\theta)$; confidence ellipses [MLE, BAY]

---

### Unit 01-03 — Introduction to Vector Fields & Geometric Intuition for the Gradient
**Time estimate**: 55–65 min
**Learning objectives**:
- Define vector fields as functions $F: \mathbb{R}^n \to \mathbb{R}^n$
- Develop geometric intuition for the gradient before formal computation: the gradient is perpendicular to level curves and points uphill
- Identify this structure in familiar statistical contexts

**Refresher links**: None
**Statistical bridge**: The score function $\nabla_\theta \ell(\theta)$ as a vector field [MLE]

---

## Module 02 — Partial Derivatives & Differentiability
*The computational core. This is where multivariable calculus becomes a working tool rather than a geometric abstraction.*

**Module learning objectives:**
- Compute partial derivatives formally and interpret them geometrically
- Apply the multivariable chain rule
- Understand differentiability and the total differential

---

### Unit 02-01 — Partial Derivatives: Definition & Computation
**Time estimate**: 55–65 min
**Learning objectives**:
- Define the partial derivative $\partial f / \partial x_i$ as a limit
- Compute partial derivatives for polynomial, exponential, and logarithmic functions
- Interpret partial derivatives geometrically as slope in one direction with others held fixed

**Refresher links**: → `exponential-and-log-rules`
**Statistical bridge**: Partial derivatives of joint log-likelihoods with respect to individual parameters [MLE]

---

### Unit 02-02 — Higher-Order Partials & Clairaut's Theorem
**Time estimate**: 50–60 min
**Learning objectives**:
- Compute second-order partial derivatives $\partial^2 f / \partial x_i \partial x_j$
- State and apply Clairaut's theorem on equality of mixed partials
- Construct the matrix of second-order partials (preview of the Hessian)

**Refresher links**: None
**Statistical bridge**: Symmetry of the observed information matrix [MLE, BAY]

---

### Unit 02-03 — The Multivariable Chain Rule
**Time estimate**: 60–70 min
**Learning objectives**:
- State and apply the chain rule for composite functions $f(g(t))$ where $g: \mathbb{R} \to \mathbb{R}^n$
- Extend to the general case: $f(g_1, \ldots, g_n)$ where each $g_i$ depends on multiple variables
- Construct dependency diagrams for complex compositions

**Refresher links**: → `single-variable-chain-rule`
**Statistical bridge**: Chain rule in backpropagation; reparameterization in Bayesian models [MLE, BAY]

---

### Unit 02-04 — The Total Differential & Linear Approximation
**Time estimate**: 50–60 min
**Learning objectives**:
- Define the total differential $df = \sum_i \frac{\partial f}{\partial x_i} dx_i$
- Use the total differential for linear approximation of $f$ near a point
- Connect the total differential to the concept of tangent planes

**Refresher links**: None
**Statistical bridge**: Delta method for variance approximation in statistical estimation [PD, MLE]

---

## Module 03 — The Gradient & Directional Derivatives
*The gradient is the engine of modern machine learning. This module builds complete understanding — geometric, analytic, and computational — of the most important object in this course.*

**Module learning objectives:**
- Define and compute the gradient as a vector-valued function
- Compute directional derivatives and understand their relationship to the gradient
- Define the Jacobian matrix for vector-valued functions
- Connect gradient descent as an algorithm to the gradient as a mathematical object

---

### Unit 03-01 — The Gradient Vector
**Time estimate**: 55–65 min
**Learning objectives**:
- Define $\nabla f = \left(\frac{\partial f}{\partial x_1}, \ldots, \frac{\partial f}{\partial x_n}\right)$ formally
- Compute gradients for functions of two and three variables
- Confirm the geometric claim: $\nabla f$ is perpendicular to level curves and points in the direction of steepest ascent

**Refresher links**: None
**Statistical bridge**: Gradient of the log-likelihood $\nabla_\theta \log p(x|\theta)$; the score function [MLE]

---

### Unit 03-02 — Directional Derivatives
**Time estimate**: 50–60 min
**Learning objectives**:
- Define the directional derivative $D_{\mathbf{u}} f$ in direction $\mathbf{u}$
- Derive the formula $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$
- Identify steepest ascent/descent directions and interpret their magnitudes

**Refresher links**: → `trig-essentials` if dot product/angle review needed
**Statistical bridge**: Sensitivity analysis — how does a likelihood change in a given parameter direction? [MLE, BAY]

---

### Unit 03-03 — The Jacobian Matrix
**Time estimate**: 60–70 min
**Learning objectives**:
- Define the Jacobian $J_f$ for vector-valued functions $f: \mathbb{R}^n \to \mathbb{R}^m$
- Compute Jacobians for 2D and 3D cases
- Interpret the Jacobian as the linear transformation that best approximates $f$ locally

**Refresher links**: → `matrix-algebra-basics`
**Statistical bridge**: Jacobian in the change-of-variables formula for probability distributions [PD]; Jacobian in neural network layer transformations [GLM]

---

### Unit 03-04 — Gradient Descent as an Algorithm
**Time estimate**: 55–65 min
**Learning objectives**:
- Derive gradient descent from the geometric properties of the gradient
- Implement gradient descent for a simple function analytically and computationally
- Discuss convergence, learning rate, and pathological landscapes (saddle points, flat regions)

**Refresher links**: None
**Statistical bridge**: Stochastic gradient descent for MLE; MAP estimation via gradient ascent on log-posterior [MLE, BAY, GLM]

---

## Module 04 — Optimization in Multiple Variables
*Finding maxima, minima, and saddle points. The Hessian as the second-order story. Constrained optimization via Lagrange multipliers. This module is the direct mathematical foundation of statistical estimation.*

**Module learning objectives:**
- Classify critical points using the Hessian and its eigenvalues
- Apply the method of Lagrange multipliers to constrained optimization problems
- Connect the Hessian to the Fisher Information Matrix

---

### Unit 04-01 — Critical Points & the First-Order Condition
**Time estimate**: 50–60 min
**Learning objectives**:
- Define critical points as solutions to $\nabla f = \mathbf{0}$
- Find critical points analytically for functions of two variables
- Understand why $\nabla f = \mathbf{0}$ is necessary but not sufficient for a maximum or minimum

**Refresher links**: None
**Statistical bridge**: MLE as the solution to $\nabla_\theta \log \mathcal{L}(\theta) = \mathbf{0}$ — the score equations [MLE]

---

### Unit 04-02 — The Hessian Matrix & Second-Order Classification
**Time estimate**: 65–75 min
**Learning objectives**:
- Define the Hessian $H_f$ as the matrix of second-order partial derivatives
- Use the determinant test (2D) and eigenvalue analysis to classify critical points
- Define positive definite, negative definite, and indefinite matrices
- Identify saddle points and their significance

**Refresher links**: → `matrix-algebra-basics` (eigenvalues)
**Statistical bridge**: Hessian of the log-likelihood = negative observed Fisher Information; curvature of the likelihood surface [MLE, BAY]

---

### Unit 04-03 — Constrained Optimization & Lagrange Multipliers
**Time estimate**: 65–75 min
**Learning objectives**:
- State the Lagrange multiplier theorem and its geometric intuition
- Solve constrained optimization problems of the form $\max f(x)$ subject to $g(x) = c$
- Handle multiple constraints

**Refresher links**: None
**Statistical bridge**: Regularization as a constraint (Lasso/Ridge); maximum entropy distributions [GLM, BAY]

---

### Unit 04-04 — Numerical Optimization Methods (Survey)
**Time estimate**: 55–65 min
**Learning objectives**:
- Survey Newton's method, quasi-Newton (BFGS), and conjugate gradient in the multivariable setting
- Understand why second-order methods (using the Hessian) converge faster than first-order methods
- Identify the trade-offs: computational cost vs. convergence rate

**Refresher links**: None
**Statistical bridge**: Newton-Raphson for MLE; Hessian-based optimizers in `scipy.optimize` and `statsmodels` [MLE, GLM]

---

## Module 05 — Multiple Integrals
*Extending integration to higher dimensions — the mathematical machinery behind joint probability, marginal distributions, and normalizing constants in Bayesian inference.*

**Module learning objectives:**
- Set up and evaluate double and triple integrals
- Change the order of integration and convert between coordinate systems
- Apply the change of variables formula using the Jacobian determinant

---

### Unit 05-01 — Double Integrals over Rectangular Regions
**Time estimate**: 55–65 min
**Learning objectives**:
- Define the double integral $\iint_R f(x,y)\, dA$ as a limit of Riemann sums
- Evaluate via iterated integrals using Fubini's theorem
- Interpret geometrically as signed volume under a surface

**Refresher links**: → `sigma-notation` if Riemann sum setup is unfamiliar
**Statistical bridge**: Joint probability over rectangular regions; joint PDFs [PD]

---

### Unit 05-02 — Double Integrals over General Regions
**Time estimate**: 60–70 min
**Learning objectives**:
- Set up double integrals over non-rectangular (Type I and Type II) regions
- Choose and change the order of integration to simplify evaluation
- Sketch regions of integration from integral bounds

**Refresher links**: None
**Statistical bridge**: Computing marginal distributions by integrating out one variable from a joint PDF [PD, BAY]

---

### Unit 05-03 — Polar Coordinates & Change of Coordinate Systems
**Time estimate**: 60–70 min
**Learning objectives**:
- Convert between Cartesian and polar coordinates
- Evaluate double integrals in polar coordinates
- Understand why the area element becomes $r\,dr\,d\theta$

**Refresher links**: → `trig-essentials`
**Statistical bridge**: Gaussian integral $\int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\pi}$ — the key to the normal distribution's normalizing constant [PD]

---

### Unit 05-04 — Triple Integrals & Cylindrical/Spherical Coordinates
**Time estimate**: 65–75 min
**Learning objectives**:
- Extend to triple integrals over 3D regions
- Evaluate in cylindrical and spherical coordinates with correct volume elements
- Recognize when a coordinate change makes an intractable integral tractable

**Refresher links**: → `trig-essentials`
**Statistical bridge**: Spherically symmetric distributions; chi-squared distribution derivation [PD]

---

### Unit 05-05 — Change of Variables & the Jacobian Determinant
**Time estimate**: 65–75 min
**Learning objectives**:
- State and apply the change of variables formula: $\iint f(\mathbf{x})\,d\mathbf{x} = \iint f(T(\mathbf{u})) |J_T(\mathbf{u})|\,d\mathbf{u}$
- Compute Jacobian determinants for 2D and 3D transformations
- Connect to the earlier Jacobian matrix from Module 03

**Refresher links**: → `matrix-algebra-basics` (determinants)
**Statistical bridge**: Change of variables for probability distributions; normalizing flows [PD, BAY]

---

## Module 06 — The Multivariate Normal Distribution (Capstone Integration)
*No new calculus — only new depth. This module synthesizes everything from Modules 01–05 to derive the multivariate normal distribution from first principles.*

**Module learning objectives:**
- Derive the MVN density function and understand every component
- Interpret the covariance matrix geometrically as a linear transformation of the standard normal
- Derive marginal and conditional distributions analytically
- Connect the MVN to multivariate regression and Bayesian linear models

---

### Unit 06-01 — The Covariance Matrix as a Geometric Object
**Time estimate**: 55–65 min
**Learning objectives**:
- Interpret $\Sigma$ as encoding both variances and correlations
- Understand $\Sigma$ as a positive semi-definite matrix and connect to eigendecomposition
- Visualize the effect of $\Sigma$ on the shape of the distribution

**Refresher links**: → `matrix-algebra-basics` (eigendecomposition)
**Statistical bridge**: All four — $\Sigma$ appears everywhere [PD, MLE, BAY, GLM]

---

### Unit 06-02 — Deriving the MVN Density
**Time estimate**: 65–75 min
**Learning objectives**:
- Derive the normalizing constant of the MVN using the Gaussian integral and Jacobian determinant
- Write and interpret the full density: $p(\mathbf{x}) = (2\pi)^{-n/2}|\Sigma|^{-1/2} \exp\left(-\frac{1}{2}(\mathbf{x}-\mu)^\top \Sigma^{-1}(\mathbf{x}-\mu)\right)$
- Understand the quadratic form in the exponent as a level surface (ellipsoid)

**Refresher links**: → `completing-the-square`, → `matrix-algebra-basics`
**Statistical bridge**: The likelihood function for linear regression; Bayesian prior conjugacy [MLE, BAY, GLM]

---

### Unit 06-03 — Marginals, Conditionals & the Schur Complement
**Time estimate**: 65–75 min
**Learning objectives**:
- Derive marginal distributions of subvectors from a joint MVN
- Derive the conditional distribution of one subvector given another
- Introduce the Schur complement as the computational tool

**Refresher links**: → `basic-probability` (conditioning)
**Statistical bridge**: Kalman filter; Gaussian process conditioning; Bayesian updating with Gaussian likelihood [BAY]

---

### Unit 06-04 — MVN in Regression & Bayesian Linear Models
**Time estimate**: 60–70 min
**Learning objectives**:
- Write the multivariate linear regression model in MVN form
- Derive OLS estimates geometrically (projection) and analytically (gradient of RSS)
- State and interpret the Bayesian linear model with Gaussian prior and likelihood

**Refresher links**: None
**Statistical bridge**: Direct application — this is the module [MLE, BAY, GLM]

---

## Module 07 — Vector Calculus
*The full treatment. Divergence, curl, line integrals, surface integrals, and the three fundamental theorems. Complete both for mathematical completeness and for information geometry applications.*

**Module learning objectives:**
- Define and compute divergence and curl of vector fields
- Evaluate line integrals and surface integrals
- State and apply Green's, Stokes', and the Divergence theorem
- Connect these ideas to KL divergence and the Fisher information metric

---

### Unit 07-01 — Divergence & Curl
**Time estimate**: 60–70 min
**Learning objectives**:
- Define divergence $\nabla \cdot \mathbf{F}$ and interpret physically (source/sink)
- Define curl $\nabla \times \mathbf{F}$ and interpret (rotation)
- Compute both for 2D and 3D vector fields

**Refresher links**: None
**Statistical bridge**: Conceptual — flow of probability mass; continuity equations in distributional dynamics [PD]

---

### Unit 07-02 — Line Integrals
**Time estimate**: 60–70 min
**Learning objectives**:
- Define the line integral $\int_C f\,ds$ and $\int_C \mathbf{F} \cdot d\mathbf{r}$
- Evaluate line integrals by parameterization
- Define path independence and conservative vector fields

**Refresher links**: None
**Statistical bridge**: Path independence and the existence of potential functions — connection to log-partition functions in exponential families [PD, MLE]

---

### Unit 07-03 — Surface Integrals & Flux
**Time estimate**: 65–75 min
**Learning objectives**:
- Define and evaluate surface integrals $\iint_S f\,dS$ and flux $\iint_S \mathbf{F} \cdot d\mathbf{S}$
- Parameterize surfaces and compute surface area elements
- Compute flux through closed surfaces

**Refresher links**: → `trig-essentials` (parameterization)
**Statistical bridge**: Measure-theoretic foundations of probability — surfaces as boundaries of probability regions [PD, BAY]

---

### Unit 07-04 — Green's Theorem (Full Proof) & Stokes' Theorem (Statement)
**Time estimate**: 65–75 min
**Learning objectives**:
- State and prove Green's theorem (the 2D case of Stokes')
- State Stokes' theorem in 3D and understand why it generalizes Green's
- Apply Green's theorem to compute areas via line integrals

**Refresher links**: None
**Statistical bridge**: Conceptual — the fundamental theorem structure (boundary determines interior) appears in variational inference [BAY]

---

### Unit 07-05 — The Divergence Theorem & Unifying Perspective
**Time estimate**: 60–70 min
**Learning objectives**:
- State and apply the Divergence theorem
- See the three major theorems as instances of a single structural idea: the generalized Stokes' theorem
- Appreciate the connection to exterior calculus and differential forms (conceptual introduction only)

**Refresher links**: None
**Statistical bridge**: None formal — this is mathematical synthesis

---

### Unit 07-06 — Information Geometry: The Fisher Metric (Applied Capstone)
**Time estimate**: 65–75 min
**Learning objectives**:
- Define the Fisher information matrix as a Riemannian metric on the space of distributions
- Interpret KL divergence as a (asymmetric) distance on distribution space
- Understand natural gradient descent and why it converges faster than ordinary gradient descent

**Refresher links**: → `basic-probability`
**Statistical bridge**: Direct application — ties Fisher information (Module 04) to the geometric structure of Module 07 [MLE, BAY, GLM]

---

## Module 08 — Capstone Project
*Bayesian logistic regression, end to end. Every calculation traces back to a specific module. The goal is fluency, not just comprehension.*

---

### Unit 08-01 — Problem Setup & Likelihood
**Time estimate**: 55–65 min

### Unit 08-02 — Gradient of the Log-Posterior
**Time estimate**: 60–70 min

### Unit 08-03 — Hessian & the Laplace Approximation
**Time estimate**: 65–75 min

### Unit 08-04 — Integration for Predictive Distributions
**Time estimate**: 60–70 min

### Unit 08-05 — Full Solution & Reflection
**Time estimate**: 45–55 min *(review and synthesis only)*

---

## Appendices

| File | Contents |
|---|---|
| `appendices/matrix-calculus.md` | Derivatives with respect to vectors and matrices — essential for regression |
| `appendices/latex-notation-reference.md` | All macros defined in `latex-preamble.tex` with examples |
| `appendices/further-reading.md` | Per-module recommended readings |

---

## Estimated Total Course Time

| Section | Units | Estimated Time |
|---|---|---|
| Module 00 | 3 units | ~3 hours |
| Module 01 | 3 units | ~3 hours |
| Module 02 | 4 units | ~4 hours |
| Module 03 | 4 units | ~4 hours |
| Module 04 | 4 units | ~4.5 hours |
| Module 05 | 5 units | ~5.5 hours |
| Module 06 | 4 units | ~4.5 hours |
| Module 07 | 6 units | ~6.5 hours |
| Module 08 | 5 units | ~5 hours |
| **Total** | **38 units** | **~40 hours** |

At 5 hours per week, this is approximately an **8-week course**. At 3 hours per week, approximately **13 weeks**. Individual pace will vary significantly based on background and depth of engagement with exercises.

---

*Course Guide version: 0.1.0-alpha*
*Last updated: February 2026*
