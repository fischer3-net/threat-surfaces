window.MathJax = {
  tex: {
    inlineMath:  [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,

    // -------------------------------------------------------------------------
    // Course macros — mirrors assets/latex-preamble.tex
    // Keep this file in sync whenever the preamble is updated.
    // -------------------------------------------------------------------------
    macros: {

      // Number systems
      R: "\\mathbb{R}",
      N: "\\mathbb{N}",
      Z: "\\mathbb{Z}",
      Q: "\\mathbb{Q}",
      C: "\\mathbb{C}",

      // Vectors (bold lowercase)
      va: "\\boldsymbol{a}",
      vb: "\\boldsymbol{b}",
      vc: "\\boldsymbol{c}",
      vd: "\\boldsymbol{d}",
      ve: "\\boldsymbol{e}",
      vf: "\\boldsymbol{f}",
      vg: "\\boldsymbol{g}",
      vh: "\\boldsymbol{h}",
      vi: "\\boldsymbol{i}",
      vj: "\\boldsymbol{j}",
      vk: "\\boldsymbol{k}",
      vn: "\\boldsymbol{n}",
      vr: "\\boldsymbol{r}",
      vu: "\\boldsymbol{u}",
      vv: "\\boldsymbol{v}",
      vw: "\\boldsymbol{w}",
      vx: "\\boldsymbol{x}",
      vy: "\\boldsymbol{y}",
      vz: "\\boldsymbol{z}",

      // Greek vector shorthands
      valpha:   "\\boldsymbol{\\alpha}",
      vbeta:    "\\boldsymbol{\\beta}",
      vgamma:   "\\boldsymbol{\\gamma}",
      vdelta:   "\\boldsymbol{\\delta}",
      vepsilon: "\\boldsymbol{\\epsilon}",
      veta:     "\\boldsymbol{\\eta}",
      vtheta:   "\\boldsymbol{\\theta}",
      vlambda:  "\\boldsymbol{\\lambda}",
      vmu:      "\\boldsymbol{\\mu}",
      vnu:      "\\boldsymbol{\\nu}",
      vxi:      "\\boldsymbol{\\xi}",
      vpi:      "\\boldsymbol{\\pi}",
      vrho:     "\\boldsymbol{\\rho}",
      vsigma:   "\\boldsymbol{\\sigma}",
      vtau:     "\\boldsymbol{\\tau}",
      vphi:     "\\boldsymbol{\\phi}",
      vchi:     "\\boldsymbol{\\chi}",
      vpsi:     "\\boldsymbol{\\psi}",
      vomega:   "\\boldsymbol{\\omega}",

      // Matrices (bold uppercase)
      mA: "\\boldsymbol{A}",
      mB: "\\boldsymbol{B}",
      mC: "\\boldsymbol{C}",
      mD: "\\boldsymbol{D}",
      mE: "\\boldsymbol{E}",
      mF: "\\boldsymbol{F}",
      mH: "\\boldsymbol{H}",
      mI: "\\boldsymbol{I}",
      mJ: "\\boldsymbol{J}",
      mK: "\\boldsymbol{K}",
      mL: "\\boldsymbol{L}",
      mM: "\\boldsymbol{M}",
      mP: "\\boldsymbol{P}",
      mQ: "\\boldsymbol{Q}",
      mR: "\\boldsymbol{R}",
      mS: "\\boldsymbol{S}",
      mSigma: "\\boldsymbol{\\Sigma}",
      mT: "\\boldsymbol{T}",
      mU: "\\boldsymbol{U}",
      mV: "\\boldsymbol{V}",
      mW: "\\boldsymbol{W}",
      mX: "\\boldsymbol{X}",
      mY: "\\boldsymbol{Y}",

      // Transpose
      T: "^{\\top}",

      // Calculus
      pd:   ["\\frac{\\partial #1}{\\partial #2}", 2],
      Jac:  ["\\frac{\\partial #1}{\\partial #2}", 2],
      Hess: ["\\nabla^2 #1\\!\\left(#2\\right)", 2],

      // Linear algebra
      tr:    ["\\operatorname{tr}\\!\\left(#1\\right)", 1],
      rank:  ["\\operatorname{rank}\\!\\left(#1\\right)", 1],
      diag:  ["\\operatorname{diag}\\!\\left(#1\\right)", 1],
      spn:   ["\\operatorname{span}\\!\\left\\{#1\\right\\}", 1],
      norm:  ["\\left\\|#1\\right\\|", 1],
      abs:   ["\\left|#1\\right|", 1],
      inner: ["\\langle #1,\\, #2 \\rangle", 2],
      psd:   "\\succeq 0",
      pd_:   "\\succ 0",

      // Probability & statistics
      E:      ["\\mathbb{E}\\left[#1\\right]", 1],
      Var:    ["\\operatorname{Var}\\!\\left(#1\\right)", 1],
      Cov:    ["\\operatorname{Cov}\\!\\left(#1,\\,#2\\right)", 2],
      Cor:    ["\\operatorname{Cor}\\!\\left(#1,\\,#2\\right)", 2],
      given:  "\\,\\vert\\,",
      iid:    "\\overset{\\text{iid}}{\\sim}",
      ind:    "\\overset{\\text{ind}}{\\sim}",

      // Distributions
      Normal:  "\\mathcal{N}",
      MVN:     ["\\mathcal{N}\\!\\left(#1,\\,#2\\right)", 2],
      Bern:    "\\operatorname{Bernoulli}",
      Bin:     "\\operatorname{Binomial}",
      Pois:    "\\operatorname{Poisson}",
      Unif:    "\\operatorname{Uniform}",
      Gam:     "\\operatorname{Gamma}",
      Beta:    "\\operatorname{Beta}",

      // Likelihood & inference
      Lik:       "\\mathcal{L}",
      loglik:    "\\ell",
      FI:        "\\mathcal{I}",
      MLE:       ["\\hat{#1}_{\\text{MLE}}", 1],
      MAP:       ["\\hat{#1}_{\\text{MAP}}", 1],
      posterior: "p(\\boldsymbol{\\theta} \\,\\vert\\, \\boldsymbol{x})",
      prior:     "p(\\boldsymbol{\\theta})",
      likelihood:"p(\\boldsymbol{x} \\,\\vert\\, \\boldsymbol{\\theta})",
      KL:        ["D_{\\text{KL}}\\!\\left(#1\\,\\|\\,#2\\right)", 2],

      // Miscellaneous
      defeq: "\\coloneqq",
      st:    "\\text{ s.t. }",
    }
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});