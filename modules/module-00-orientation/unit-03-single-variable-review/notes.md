# Module 00, Unit 03 — Single-Variable Review & Notation Setup

> **Threat Surfaces: Multivariable Calculus for AI Security**
> fischer³ Education | Module 00 | Unit 03
>
> **Estimated reading time**: 12–15 minutes
> **Followed by**: Exercises (`exercises.tex`) → Python Lab (`python-lab.ipynb`)

---

## Learning Objectives

By the end of this sub-unit you will be able to:

- [ ] State the definition of a limit and identify when a limit fails to exist
- [ ] Apply the chain rule and product rule fluently to compositions involving exponentials and logarithms
- [ ] Use integration by substitution and integration by parts on standard forms
- [ ] Read and write the LaTeX notation conventions used in all subsequent exercise files
- [ ] Recognize log-likelihood as a function of parameters and describe why it is differentiated rather than the likelihood itself

---

## Refresher Links

If either of the following feels shaky, visit the corresponding refresher **before** continuing:

- → [`refreshers/single-variable-chain-rule/`](../../../refreshers/single-variable-chain-rule/) — chain rule, product rule, common compositions
- → [`refreshers/exponential-and-log-rules/`](../../../refreshers/exponential-and-log-rules/) — $e^x$, $\ln x$, change of base, algebraic rules

---

## 1. Limits and Continuity

### 1.1 The Limit

The limit $\lim_{x \to a} f(x) = L$ means: as $x$ approaches $a$ (but never equals $a$), $f(x)$ approaches $L$. The function need not be defined at $a$ for the limit to exist; it only needs to approach a single value from both sides.

**Three conditions for a limit to fail:**
1. The left-hand and right-hand limits exist but are unequal (jump discontinuity)
2. The function grows without bound near $a$ (vertical asymptote)
3. The function oscillates without settling (e.g., $\sin(1/x)$ near $x = 0$)

In this course, virtually every function you encounter will be continuous and differentiable on its domain. Limits matter here primarily for understanding what differentiability *means* before we generalize it to multiple variables.

### 1.2 Continuity

A function $f$ is **continuous at $a$** if three conditions hold simultaneously:
1. $f(a)$ is defined
2. $\lim_{x \to a} f(x)$ exists
3. $\lim_{x \to a} f(x) = f(a)$

The intuition: no holes, no jumps, no vertical asymptotes. You can draw the graph without lifting your pen.

### 1.3 Differentiability

A function $f$ is **differentiable at $a$** if the following limit exists:

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$$

Differentiability is a stronger condition than continuity: every differentiable function is continuous, but not every continuous function is differentiable ($|x|$ at $x = 0$ is the standard example).

The derivative $f'(a)$ is the instantaneous rate of change of $f$ at $a$ — geometrically, the slope of the tangent line to the graph at the point $(a, f(a))$.

**Why this matters for the course.** The multivariable analogue of the derivative — the gradient — is central to everything from gradient descent to the score function in MLE. The definition above is what we generalize in Module 02.

---

## 2. Differentiation Rules

The rules below are assumed knowledge. This section exists to nail down notation and surface any that feel less automatic.

### 2.1 Basic Rules

| Rule | Statement |
|---|---|
| Power | $\frac{d}{dx} x^n = n x^{n-1}$ |
| Exponential | $\frac{d}{dx} e^x = e^x$ |
| Natural log | $\frac{d}{dx} \ln x = \frac{1}{x}$ |
| Constant | $\frac{d}{dx} c = 0$ |
| Sum/difference | $\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$ |
| Constant multiple | $\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$ |

### 2.2 The Product Rule

For two differentiable functions $u(x)$ and $v(x)$:

$$\frac{d}{dx}[u(x) \cdot v(x)] = u'(x) \cdot v(x) + u(x) \cdot v'(x)$$

A memory device: "derivative of first times second, plus first times derivative of second."

**Example.** Let $f(x) = x^2 e^x$.

$$f'(x) = 2x \cdot e^x + x^2 \cdot e^x = e^x(2x + x^2) = x e^x (x + 2)$$

### 2.3 The Chain Rule

For a composition $f(g(x))$:

$$\frac{d}{dx} f(g(x)) = f'(g(x)) \cdot g'(x)$$

In words: derivative of the outside (evaluated at the inside) times derivative of the inside.

**Example 1.** Let $h(x) = e^{-x^2/2}$.

Here $f(u) = e^u$ and $g(x) = -x^2/2$, so $f'(u) = e^u$ and $g'(x) = -x$.

$$h'(x) = e^{-x^2/2} \cdot (-x) = -x e^{-x^2/2}$$

You will compute this derivative repeatedly — it is the derivative of the Gaussian kernel.

**Example 2.** Let $h(x) = \ln(1 + e^x)$ (the softplus function — a smooth approximation to $\max(0, x)$).

Here $f(u) = \ln u$ and $g(x) = 1 + e^x$, so $f'(u) = 1/u$ and $g'(x) = e^x$.

$$h'(x) = \frac{1}{1 + e^x} \cdot e^x = \frac{e^x}{1 + e^x} = \sigma(x)$$

where $\sigma(x)$ is the **logistic sigmoid function**. This result — that softplus differentiates to sigmoid — appears in neural network gradients.

### 2.4 Chaining Multiple Rules

Most functions you encounter are compositions, products, or both. Work from the outside inward and track which rule applies at each layer.

**Example.** Let $f(x) = \ln\!\bigl(x^2 + 1\bigr)^3$.

Rewrite as $f(x) = 3\ln(x^2 + 1)$.

Apply chain rule with outer $\ln(\cdot)$ and inner $x^2 + 1$:

$$f'(x) = 3 \cdot \frac{1}{x^2 + 1} \cdot 2x = \frac{6x}{x^2 + 1}$$

---

## 3. Integration

Integration appears primarily through two mechanisms in this course: probability density normalization (integrating a PDF to 1) and the definition of expectation. The techniques below are the ones you'll need.

### 3.1 The Fundamental Theorem

If $F'(x) = f(x)$, then:

$$\int_a^b f(x)\, dx = F(b) - F(a)$$

The definite integral measures the signed area between $f$ and the $x$-axis on $[a, b]$.

### 3.2 Substitution

For an integral of the form $\int f(g(x)) g'(x)\, dx$, let $u = g(x)$, $du = g'(x)\, dx$:

$$\int f(g(x)) g'(x)\, dx = \int f(u)\, du$$

**Example.** $\displaystyle\int x e^{-x^2}\, dx$.

Let $u = -x^2$, $du = -2x\, dx$, so $x\, dx = -\tfrac{1}{2} du$:

$$\int x e^{-x^2}\, dx = -\tfrac{1}{2} \int e^u\, du = -\tfrac{1}{2} e^{-x^2} + C$$

### 3.3 Integration by Parts

$$\int u\, dv = uv - \int v\, du$$

Choose $u$ and $dv$ using the **LIATE heuristic** (Logarithms, Inverse trig, Algebraic, Trig, Exponential) — items earlier in the list make better choices for $u$.

**Example.** $\displaystyle\int x e^x\, dx$.

Let $u = x$ (algebraic), $dv = e^x\, dx$. Then $du = dx$, $v = e^x$.

$$\int x e^x\, dx = x e^x - \int e^x\, dx = x e^x - e^x + C = e^x(x - 1) + C$$

---

## 4. Notation Setup

This section establishes the LaTeX conventions used in all exercise and solution files throughout the course. Read it now; refer back to it whenever an expression in an exercise file looks unfamiliar.

### 4.1 Vectors and Matrices

| Notation | Meaning | LaTeX macro |
|---|---|---|
| $\vx$ | Column vector | `\vx` |
| $\mA$ | Matrix | `\mA` |
| $\vx\T$ | Transpose | `\vx\T` |
| $\norm{\vx}$ | Euclidean norm | `\norm{\vx}` |
| $\inner{\vx}{\vy}$ | Inner product | `\inner{\vx}{\vy}` |

### 4.2 Calculus

| Notation | Meaning | LaTeX macro |
|---|---|---|
| $\nabla f(\vx)$ | Gradient of $f$ | `\nabla f(\vx)` |
| $\nabla^2 f(\vx)$ | Hessian of $f$ | `\nabla^2 f(\vx)` |
| $\pd{f}{x_i}$ | Partial derivative | `\pd{f}{x_i}` |
| $\Jac{f}{\vx}$ | Jacobian | `\Jac{f}{\vx}` |
| $\Hess{f}{\vx}$ | Hessian (explicit) | `\Hess{f}{\vx}` |

### 4.3 Probability and Statistics

| Notation | Meaning | LaTeX macro |
|---|---|---|
| $\Normal(\mu, \sigma^2)$ | Normal distribution | `\Normal(\mu, \sigma^2)` |
| $\MVN{\vmu}{\mSigma}$ | Multivariate normal | `\MVN{\vmu}{\mSigma}` |
| $\E[X]$ | Expectation | `\E[X]` |
| $\Var(X)$ | Variance | `\Var(X)` |
| $\MLE{\theta}$ | MLE estimator | `\MLE{\theta}` |
| $\loglik$ | Log-likelihood $\ell(\theta)$ | `\loglik` |
| $\given$ | Conditional bar $\mid$ | `\given` |

### 4.4 Sets and Number Systems

| Notation | Meaning | LaTeX macro |
|---|---|---|
| $\R$ | Real numbers | `\R` |
| $\R^n$ | $n$-dimensional real space | `\R^n` |
| $\defeq$ | Definition equality $:=$ | `\defeq` |

---

## 5. Statistical Bridge: The Log-Likelihood

**Thread: [MLE] Maximum Likelihood Estimation**

This bridge previews the statistical context that will give calculus its urgency throughout the course. No new math is introduced here — only motivation.

### Why We Maximize Likelihood

In statistics, a parametric model assigns a probability to each observed data point $x_i$ given parameters $\theta$. For example, if we believe $x_i \sim \Normal(\mu, \sigma^2)$, then the probability density at $x_i$ is:

$$p(x_i \mid \theta) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\!\left(-\frac{(x_i - \mu)^2}{2\sigma^2}\right)$$

where $\theta = (\mu, \sigma^2)$.

The **likelihood function** treats this density as a function of $\theta$ given a fixed observation:

$$\Lik(\theta) = p(x \mid \theta)$$

For $n$ independent observations, the joint likelihood is a product:

$$\Lik(\theta) = \prod_{i=1}^n p(x_i \mid \theta)$$

**Maximum likelihood estimation (MLE)** asks: for which $\theta$ is this product maximized?

### Why the Log

Products of many small probabilities become numerically unstable — floating-point underflow collapses them to zero. More importantly, products are hard to differentiate. The **log-likelihood** solves both problems:

$$\loglik(\theta) = \ln \Lik(\theta) = \sum_{i=1}^n \ln p(x_i \mid \theta)$$

Because $\ln$ is strictly increasing, the $\theta$ that maximizes $\Lik$ also maximizes $\loglik$. Sums are far easier to differentiate than products.

**The MLE condition.** Setting the derivative to zero:

$$\frac{d\,\loglik}{d\theta} = 0$$

This is a single-variable problem when $\theta$ is a scalar. When $\theta \in \R^p$ — as in regression — it becomes a system of partial derivatives. That generalization is Module 02.

**Worked preview.** For the Normal model, the log-likelihood for a single observation is:

$$\loglik(\mu, \sigma^2) = -\frac{1}{2}\ln(2\pi\sigma^2) - \frac{(x - \mu)^2}{2\sigma^2}$$

To find the MLE for $\mu$ with $\sigma^2$ fixed, differentiate with respect to $\mu$ and set equal to zero:

$$\frac{\partial\, \loglik}{\partial \mu} = \frac{x - \mu}{\sigma^2} = 0 \implies \hat{\mu} = x$$

For $n$ observations, the same calculation yields $\hat{\mu}_{\text{MLE}} = \bar{x}$, the sample mean. What feels like a trivial result is actually a consequence of the calculus you already know, applied to a function of a parameter rather than a spatial variable. The rest of the course builds the machinery to do this in high dimensions.

---

## Summary

| Concept | Key Takeaway |
|---|---|
| Limits | Differentiability requires a well-defined slope; generalized to partials in Module 02 |
| Chain rule | The workhorse of gradient computation — every backpropagation step is a chain rule application |
| Log-likelihood | Differentiating a sum rather than a product; the MLE condition is a derivative equal to zero |
| Notation | Macros in `latex-preamble.tex` — refer to Section 4 whenever an expression looks unfamiliar |

---

## What Comes Next

**Exercises** (`exercises.tex`) — Differentiation and integration problems selected for their direct relevance to statistical models, plus a notation transcription exercise that forces active engagement with the macro system. Estimated 20–30 minutes.

**Python Lab** (`python-lab.ipynb`) — Visualize the log-likelihood surface for the Normal model, plot the score function (derivative of log-likelihood), and confirm the MLE numerically. A preview of the optimization landscape concepts that dominate Modules 03 and 04.

---

## Further Reading

- Stewart, *Calculus: Early Transcendentals*, Chapters 3–5 — comprehensive single-variable reference; skim the sections on differentiation rules and integration techniques if needed
- Casella & Berger, *Statistical Inference*, Chapter 7.2 — MLE theory; the connection between the score function and Fisher information is the statistical payoff of differentiation
- Nielsen, *An Introduction to Exponential Families* — connects the log-likelihood structure of exponential family distributions to the calculus in this unit; highly accessible

---

*Sub-unit version: 1.0.0*
*Last updated: February 2026*
*Module 00, Unit 03 — Threat Surfaces, fischer³ Education*
