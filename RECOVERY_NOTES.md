# RECOVERY_NOTES.md
## SaaSolves Legibility Score — Recovery Ledger

**Reconstruction Date:** July 2026  
**Source Material:** Compiled Ploy AI production bundle + rendered HTML  
**Recovery Engineer:** Claude (Anthropic) on behalf of Mahdi Singaparado  

---

## Recovery Status Definitions

| Status | Meaning |
|--------|---------|
| **DIRECTLY RECOVERED** | Extracted verbatim or near-verbatim from compiled bundle |
| **HIGH CONFIDENCE** | Reconstructed with near-certainty from surrounding compiled evidence |
| **INFERRED** | Reconstructed from architectural patterns; plausible but not directly verifiable |
| **ASSUMED** | Required for completeness; represents standard practice for this stack |

---

## Recovery Ledger

### Core Scoring Engine

| Item | File | Status | Notes |
|------|------|--------|-------|
| JARGON_SIGNALS array | `constants/signals.ts` | DIRECTLY RECOVERED | 35 signals, extracted verbatim from compiled `_` variable |
| OUTCOME_SIGNALS array | `constants/signals.ts` | DIRECTLY RECOVERED | 24 signals, extracted verbatim from compiled `M` variable |
| WORKFLOW_SIGNALS array | `constants/signals.ts` | DIRECTLY RECOVERED | 17 signals, extracted verbatim from compiled `F` variable |
| countSignals function | `lib/scoringEngine.ts` | DIRECTLY RECOVERED | Exact reduce logic from compiled `i(t, a)` |
| clampScore function | `lib/scoringEngine.ts` | DIRECTLY RECOVERED | Math.max/min bounds [4, 98] from compiled `h(t)` |
| Tangibility formula | `lib/scoringEngine.ts` | DIRECTLY RECOVERED | `46 + outcome*9 + (hasNumber?16:0) - jargon*6 + (you>we?6:0)` |
| Intuitiveness formula | `lib/scoringEngine.ts` | DIRECTLY RECOVERED | `98 - density*900 - jargon*6 - (longSentences?18:0) - max(0,avg-16)*1.4` |
| Sustainability formula | `lib/scoringEngine.ts` | DIRECTLY RECOVERED | `42 + workflow*13 + (you>we?10:-4) + (outcome>0?6:0)` |
| Composite formula | `lib/scoringEngine.ts` | DIRECTLY RECOVERED | `tangibility*0.34 + intuitiveness*0.40 + sustainability*0.26` |
| All fracture messages | `lib/scoringEngine.ts` | DIRECTLY RECOVERED | All 11 diagnostic strings extracted verbatim |
| Window logic | `lib/scoringEngine.ts` | DIRECTLY RECOVERED | `wordCount <= 18 AND jargon < 2` on first sentence |
| Window verdict strings | `lib/scoringEngine.ts` | DIRECTLY RECOVERED | Both pass/fail strings extracted verbatim |
| getFractureMessage fn | `lib/scoringEngine.ts` | DIRECTLY RECOVERED | Full branching logic from compiled `x(t, a, r)` |
| scoreInput fn | `lib/scoringEngine.ts` | DIRECTLY RECOVERED | Full body from compiled `I(t)` |
| BROKEN_SAMPLE_COPY | `constants/samples.ts` | DIRECTLY RECOVERED | Verbatim from compiled `P` constant |

### Display Utilities

| Item | File | Status | Notes |
|------|------|--------|-------|
| getScoreColor | `lib/scoreDisplay.ts` | DIRECTLY RECOVERED | Three RGB values from compiled `l(t)` |
| getScoreLabel | `lib/scoreDisplay.ts` | DIRECTLY RECOVERED | Three tier labels from compiled `O(t)` |
| Score tier thresholds (72, 50) | `constants/signals.ts` | DIRECTLY RECOVERED | Extracted from compiled conditional logic |

### React Components

| Item | File | Status | Notes |
|------|------|--------|-------|
| DiagnosticPanel structure | `components/diagnostic/DiagnosticPanel.tsx` | DIRECTLY RECOVERED | Reconstructed from compiled `function B()` JSX |
| Section header copy | `DiagnosticPanel.tsx` | DIRECTLY RECOVERED | All text strings extracted verbatim |
| Textarea placeholder | `DiagnosticPanel.tsx` | DIRECTLY RECOVERED | Verbatim from compiled bundle |
| "Load a broken sample" button | `DiagnosticPanel.tsx` | DIRECTLY RECOVERED | Label and behavior recovered |
| "Run Diagnostic →" button | `DiagnosticPanel.tsx` | DIRECTLY RECOVERED | Label and 3-word minimum guard recovered |
| Word count display | `DiagnosticPanel.tsx` | DIRECTLY RECOVERED | Logic and label string recovered |
| "// Awaiting narrative input" label | `DiagnosticPanel.tsx` | DIRECTLY RECOVERED | Verbatim |
| Results grid layout | `DiagnosticPanel.tsx` | DIRECTLY RECOVERED | Grid columns from compiled className |
| SaaScan CTA copy | `DiagnosticPanel.tsx` | DIRECTLY RECOVERED | Verbatim paragraph text |
| SaaScan mailto href | `DiagnosticPanel.tsx` | DIRECTLY RECOVERED | Full pre-filled mailto URL extracted verbatim |
| ScoreDisplay component | `components/diagnostic/ScoreDisplay.tsx` | HIGH CONFIDENCE | Extracted from inlined JSX in compiled B() |
| WindowCard component | `components/diagnostic/WindowCard.tsx` | HIGH CONFIDENCE | Extracted from inlined JSX in compiled B() |
| LawCard component | `components/diagnostic/LawCard.tsx` | HIGH CONFIDENCE | Extracted from inlined JSX in compiled B() |
| All Tailwind classNames | All components | DIRECTLY RECOVERED | Extracted verbatim from compiled JSX strings |

### TypeScript Types

| Item | File | Status | Notes |
|------|------|--------|-------|
| LegibilityResult shape | `types/scoring.ts` | HIGH CONFIDENCE | Inferred from return value of compiled `I(t)` |
| LawScore shape | `types/scoring.ts` | HIGH CONFIDENCE | Inferred from `laws` array structure |
| SignalMetrics shape | `types/scoring.ts` | HIGH CONFIDENCE | Inferred from compiled `m` object |
| InterpretationWindow shape | `types/scoring.ts` | HIGH CONFIDENCE | Inferred from compiled `window` object |
| ScoreLabel union type | `types/scoring.ts` | DIRECTLY RECOVERED | Three exact strings from compiled `O(t)` |
| LawKey union type | `types/scoring.ts` | DIRECTLY RECOVERED | Three keys from compiled law array |

### Page Structure

| Item | Status | Notes |
|------|--------|-------|
| Page title | DIRECTLY RECOVERED | "The Legibility Score — SaaSolves" |
| Meta description | DIRECTLY RECOVERED | Verbatim from rendered HTML |
| Canonical URL | DIRECTLY RECOVERED | From rendered HTML (saasolves.vercel.app) |
| Author meta | DIRECTLY RECOVERED | "Mahdi Singaparado" |
| OG title / description | DIRECTLY RECOVERED | Verbatim from rendered HTML |
| Hero kicker text | DIRECTLY RECOVERED | "Free Diagnostic // The Legibility Score" |
| Hero headline | DIRECTLY RECOVERED | "Your product is legible to you..." |
| Hero subtext segments | DIRECTLY RECOVERED | Both bullet segments verbatim |
| Primary CTA label | DIRECTLY RECOVERED | "Run the Diagnostic →" |
| Secondary CTA label | DIRECTLY RECOVERED | "How scoring works" |
| CTA note | DIRECTLY RECOVERED | "No signup. No call. Just the read the market already gives you." |

### Design System

| Item | Status | Notes |
|------|--------|-------|
| All CSS custom properties (ploy-*) | DIRECTLY RECOVERED | Extracted from rendered HTML classList analysis |
| Score colors (green/amber/rust) | DIRECTLY RECOVERED | RGB triples verbatim from bundle |
| Font: Proza Libre | DIRECTLY RECOVERED | From HTML style attribute |
| font-heading / font-button classes | DIRECTLY RECOVERED | Present in compiled classNames |
| Background color rgb(11,34,63) | DIRECTLY RECOVERED | Textarea background from compiled JSX |

### What Was NOT Recoverable

| Item | Reason |
|------|--------|
| Footer component source | Referenced as `footer.pYR9_Y61.js` — external compiled bundle, not provided |
| Nav/Header component source | Referenced as part of footer bundle — not provided |
| Tailwind config | Not present in compiled output — must be reconstructed from className usage |
| Full CSS stylesheet | Only `footer.0ypq6iQR.css` linked, not provided |
| Astro page frontmatter | Compiled away — page structure inferred from rendered HTML |
| Original component file names | Compiled to hashed bundle names — inferred from logical architecture |

---

## Compilation Artifacts Identified

The following minification patterns were detected and reversed:

| Compiled Name | Restored Name | Confidence |
|---------------|---------------|------------|
| `_` | `JARGON_SIGNALS` | DIRECTLY RECOVERED |
| `M` | `OUTCOME_SIGNALS` | DIRECTLY RECOVERED |
| `F` | `WORKFLOW_SIGNALS` | DIRECTLY RECOVERED |
| `i(t, a)` | `countSignals(text, signals)` | DIRECTLY RECOVERED |
| `h(t)` | `clampScore(raw)` | DIRECTLY RECOVERED |
| `x(t, a, r)` | `getFractureMessage(law, score, metrics)` | DIRECTLY RECOVERED |
| `I(t)` | `scoreInput(rawCopy)` | DIRECTLY RECOVERED |
| `l(t)` | `getScoreColor(score)` | DIRECTLY RECOVERED |
| `O(t)` | `getScoreLabel(score)` | DIRECTLY RECOVERED |
| `P` | `BROKEN_SAMPLE_COPY` | DIRECTLY RECOVERED |
| `B()` | `DiagnosticPanel()` | DIRECTLY RECOVERED |
| `z` | `Nav` (or equivalent) | INFERRED from import pattern |
| `R` | `HeroSection` (or equivalent) | INFERRED from import pattern |
| `E` | `Footer` (or equivalent) | INFERRED from import pattern |
| `k` | `useState` (React) | DIRECTLY RECOVERED from `import{r as k}from"./index.CuAuE6gz.js"` — React's index export |

---

## Known Gaps

1. **Footer / Nav components**: The `footer.pYR9_Y61.js` bundle was not provided.
   These components need to be rebuilt separately or matched to the main
   SaaSolves site's existing navigation system.

2. **Astro integration layer**: The page wrapper (`.astro` file, frontmatter,
   layout) is inferred from the HTML structure. The exact Astro component
   hierarchy requires reconstruction based on architectural intent.

3. **Tailwind configuration**: The full set of `ploy-*` custom tokens requires
   a Tailwind config that maps them to actual CSS values. These values can be
   extracted from the compiled CSS if the footer stylesheet is provided.

---

## Provenance Statement

All code in this repository originates from the compiled production output of
a website built and owned by Mahdi Singaparado for SaaSolves. The scoring
methodology, signal arrays, fracture messages, and diagnostic concepts are
proprietary intellectual property of SaaSolves. This reconstruction exists
solely to restore source-level ownership and maintainability of that IP.
