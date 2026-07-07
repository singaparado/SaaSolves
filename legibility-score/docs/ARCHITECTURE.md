# ARCHITECTURE.md
## SaaSolves Legibility Score — System Architecture

---

## Overview

The Legibility Score is a client-side diagnostic application built on an
Astro + React architecture. All scoring computation happens in the browser —
there is no server, no API, no data persistence. This is intentional: the
tool is designed to be deployed as a static site with zero backend dependency.

---

## Directory Structure

```
saasolves-legibility-score/
├── src/
│   ├── components/
│   │   ├── diagnostic/          # Core diagnostic UI components
│   │   │   ├── DiagnosticPanel.tsx   # Primary diagnostic interface
│   │   │   ├── ScoreDisplay.tsx      # Overall score rendering
│   │   │   ├── WindowCard.tsx        # Interpretation Window display
│   │   │   ├── LawCard.tsx           # Individual law score card
│   │   │   └── index.ts              # Barrel exports
│   │   ├── layout/              # Page layout components (to reconstruct)
│   │   └── ui/                  # Shared UI primitives (to reconstruct)
│   ├── pages/
│   │   └── legibility-score.astro    # Astro page (to reconstruct)
│   ├── lib/
│   │   ├── scoringEngine.ts     # Core scoring algorithm (PROPRIETARY)
│   │   └── scoreDisplay.ts      # Color/label mapping utilities
│   ├── types/
│   │   └── scoring.ts           # TypeScript interfaces
│   ├── constants/
│   │   ├── signals.ts           # Signal vocabulary + scoring constants
│   │   └── samples.ts           # Canonical broken sample copy
│   └── styles/                  # Global styles (to reconstruct from CSS)
├── public/                      # Static assets
├── docs/
│   ├── SCORING_ENGINE.md        # Methodology documentation
│   ├── RECOVERY_NOTES.md        # Recovery ledger
│   ├── ARCHITECTURE.md          # This file
│   ├── COMPONENT_TREE.md        # Component hierarchy
│   └── CHANGELOG.md             # Version history
├── astro.config.mjs             # Astro configuration (to reconstruct)
├── tailwind.config.ts           # Tailwind + design token config (to reconstruct)
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

---

## Data Flow

```
User Input (textarea)
        ↓
  [DiagnosticPanel]
        ↓
  scoreInput(rawCopy)             ← lib/scoringEngine.ts
        ↓
  ┌─────────────────────────────────────┐
  │ 1. normalize → lowercase, trim      │
  │ 2. countSignals (jargon/outcome/    │
  │    workflow) against signal arrays  │
  │ 3. compute avgWordsPerSentence      │
  │ 4. compute jargonDensity            │
  │ 5. evaluate first sentence for      │
  │    Interpretation Window            │
  │ 6. apply three law formulas         │
  │ 7. clamp each law score [4, 98]     │
  │ 8. compute weighted composite       │
  │ 9. generate fracture messages       │
  └─────────────────────────────────────┘
        ↓
  LegibilityResult
        ↓
  [ScoreDisplay]   [WindowCard]   [LawCard × 3]
```

---

## Dependency Graph

```
DiagnosticPanel
  ├── scoringEngine        (lib)
  ├── scoreDisplay         (lib)
  ├── BROKEN_SAMPLE_COPY   (constants)
  ├── ScoreDisplay         (component)
  ├── WindowCard           (component)
  └── LawCard              (component)

scoringEngine
  ├── JARGON_SIGNALS       (constants)
  ├── OUTCOME_SIGNALS      (constants)
  ├── WORKFLOW_SIGNALS     (constants)
  ├── SCORE_BOUNDS         (constants)
  ├── SCORE_THRESHOLDS     (constants)
  ├── SCORING_WEIGHTS      (constants)
  ├── WINDOW_PARAMS        (constants)
  └── types/scoring        (types)

scoreDisplay
  ├── SCORE_THRESHOLDS     (constants)
  └── types/scoring        (types)
```

---

## Framework Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Astro | 6.1.9 (recovered from meta tag) |
| UI Library | React | 18.x (inferred from hooks usage) |
| Language | TypeScript | 5.x (inferred from stack) |
| Styling | Tailwind CSS | 3.x (inferred from className patterns) |
| Design Tokens | Custom ploy-* token system | Requires Tailwind config reconstruction |

---

## Deployment Model

The original deployed instance was hosted at:
- Ploy build preview: `https://my-site-0bdf977b.ploy.build/legibility-score`
- Production: `https://saasolves.vercel.app/legibility-score`

The reconstructed repository is intended for independent hosting, with Vercel
as the target deployment platform (matching the existing SaaSolves deployment
infrastructure).

---

## Extension Points

The architecture is designed for the following future expansions:

1. **Additional diagnostic tools**: New diagnostic pages follow the same
   pattern — a `lib/[toolName]Engine.ts` for the scoring logic, a set of
   `components/[toolName]/` UI components, and an Astro page.

2. **Scoring API**: The `scoreInput` function in `lib/scoringEngine.ts` is
   pure — no DOM dependencies. It can be wrapped in an API route or
   serverless function without modification.

3. **Signal vocabulary expansion**: JARGON_SIGNALS, OUTCOME_SIGNALS, and
   WORKFLOW_SIGNALS are isolated in `constants/signals.ts`. Adding signals
   requires only updating the arrays and documenting the change in
   SCORING_ENGINE.md and CHANGELOG.md.

4. **Score history / persistence**: The current architecture has no state
   persistence. Adding localStorage or a backend would require wrapping
   DiagnosticPanel with a context provider and adding a persistence layer
   in `lib/`.
