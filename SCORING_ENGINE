# SCORING_ENGINE.md
## SaaSolves Legibility Score — Proprietary Methodology

**Recovery Status:** Directly recovered from compiled production bundle  
**Methodology Owner:** Mahdi Singaparado / SaaSolves  
**Last Verified:** Reconstruction from Ploy-compiled bundle, July 2026

---

## Overview

The Legibility Score is a proprietary diagnostic engine that evaluates B2B SaaS
homepage hero copy against the Three Laws of Translation. It produces a 0–100
composite score and per-law fracture diagnostics in real time, client-side,
with no server dependency.

The engine does not evaluate grammar, style, or readability in the conventional
sense. It evaluates the degree to which copy creates the cognitive conditions
for buyer recognition — the moment a stranger understands what changes in their
life if they adopt the product.

---

## The Three Laws of Translation

### I. Tangibility
Measures whether the copy produces a legible before-and-after state for the
reader. A tangible copy allows a stranger to name what changes for them before
they understand how the product works.

**Score formula (preserved exactly):**
```
tangibility = clamp(46 + outcome*9 + (hasNumber ? 16 : 0) - jargon*6 + (you > we ? 6 : 0))
```

**Fracture conditions (in priority order):**
1. ≥ 72: "Outcomes are legible — a stranger can name what changes for them."
2. No number AND no outcome signals: "No concrete outcome or number. The reader learns what it is, never what it does for them."
3. Partial: "Capability is stated but the payoff stays abstract."

### II. Intuitiveness
Measures the cognitive load imposed by the copy. A high-intuitiveness copy
reads at the speed of thought — low jargon density, natural sentence rhythm,
no machine-led syntax that requires the reader to translate before understanding.

**Score formula (preserved exactly):**
```
intuitiveness = clamp(98 - jargonDensity*900 - jargon*6 - (longSentences ? 18 : 0) - max(0, avgWords-16)*1.4)
```

Where `jargonDensity = jargonCount / wordCount`.

**Fracture conditions (in priority order):**
1. ≥ 72: "Reads at the speed of thought — low jargon, natural sentence rhythm."
2. jargon ≥ 2: "[N] jargon signals detected. Machine-led syntax raises the cognitive floor."
3. Long sentences: "Sentences run long. The first read demands effort the visitor won't spend."
4. Default: "Phrasing leans on category language instead of how the buyer actually talks."

### III. Sustainability
Measures whether the copy frames the product as an ongoing operational
environment rather than a one-time tool. A sustainable copy anchors the product
to something the buyer returns to every week.

**Score formula (preserved exactly):**
```
sustainability = clamp(42 + workflow*13 + (you > we ? 10 : -4) + (outcome > 0 ? 6 : 0))
```

**Fracture conditions (in priority order):**
1. ≥ 72: "Anchored to recurring use — the product reads as an ongoing environment."
2. workflow = 0: "No link to a recurring workflow. Value reads as a one-off."
3. we > you: "The copy talks about you more than the reader."
4. Default: "Relevance is momentary. Tie the product to something the buyer returns to every week."

---

## Composite Score

```
overall = round(tangibility*0.34 + intuitiveness*0.40 + sustainability*0.26)
```

Intuitiveness carries the highest weight (0.40) because it is the first law
the reader encounters — copy that is cognitively inaccessible prevents the
other two laws from being evaluated at all.

---

## Score Tiers

| Score | Tier Label | Color |
|-------|-----------|-------|
| ≥ 72 | Recognition-grade | rgb(92, 158, 122) — green |
| 50–71 | Clear, not yet magnetic | rgb(226, 201, 140) — amber |
| < 50 | Fractured — the market can't feel it | rgb(184, 100, 62) — rust |

---

## The Interpretation Window

The Interpretation Window is an additional diagnostic layer that assesses
whether the **first sentence alone** resolves inside a 5-second read.

**Logic (preserved exactly):**
```
windowLegible = firstSentenceWordCount <= 18 AND firstSentenceJargonCount < 2
```

This is independent of the overall score. A copy can score well overall while
failing the Interpretation Window if the first sentence is too dense, meaning
the opening creates a silent exit before the body copy is ever read.

---

## Signal Vocabulary

### JARGON_SIGNALS (35 signals)
Penalize Intuitiveness and Tangibility. Match by substring to catch inflected
forms (e.g. "synerg" catches synergy, synergistic, synergize).

Full list: leverage, synerg, robust, seamless, scalable, cutting-edge,
next-generation, next generation, revolutionary, ecosystem, paradigm, holistic,
end-to-end, best-in-class, turnkey, enterprise-grade, multi-tenant, orchestrat,
streamlin, empower, disrupt, decentralized, granular, frictionless, bandwidth,
mission-critical, hyper-, cross-functional, actionable, utilize, facilitate,
optimiz, architected, purpose-built, cloud-native

### OUTCOME_SIGNALS (24 signals)
Improve Tangibility. Indicate consequence-first or buyer-benefit framing.

Full list: save, faster, reduce, less, fewer, without, so you, so your,
in minutes, in seconds, stop, avoid, ship, launch, cut, boost, win, close,
grow, double, instantly, today, get paid, no more

### WORKFLOW_SIGNALS (17 signals)
Improve Sustainability. Indicate recurring-use and operational-integration framing.

Full list: workflow, every day, daily, your team, integrat, natively, existing,
ongoing, keep, stay, continuous, each week, routine, in your, already use,
day-to-day, over time

---

## Score Bounds

All three law scores are clamped to [4, 98] by the `clampScore` function.

- Floor of 4: No copy scores zero — even maximally broken copy has some floor.
- Ceiling of 98: No copy scores 100 — no copy is categorically flawless.

---

## Modification Policy

The numerical heuristics in this engine are proprietary. Changes to signal
arrays, formula coefficients, thresholds, or clamp bounds require:

1. A documented rationale in CHANGELOG.md
2. A version bump
3. Regression testing against the canonical broken sample copy
4. Verification that the three-tier color system remains semantically valid
