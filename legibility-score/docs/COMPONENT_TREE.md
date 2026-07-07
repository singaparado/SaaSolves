# COMPONENT_TREE.md
## SaaSolves Legibility Score — Component Hierarchy

Recovery Status: HIGH CONFIDENCE
All components reconstructed from compiled JSX in production bundle.

---

## Page Tree

```
LegibilityScorePage (legibility-score.astro)
├── Nav                          [INFERRED — from footer.pYR9_Y61.js import z]
├── HeroSection                  [INFERRED — from footer.pYR9_Y61.js import R]
│   ├── kicker: "Free Diagnostic // The Legibility Score"
│   ├── headlineLead: "Your product is legible to you. The question is whether it's legible to a "
│   ├── headlineAccent: "stranger."
│   ├── segments: [
│   │   "74% of visitors leave when meaning isn't clear at first contact.",
│   │   "Score your hero copy against the Three Laws in seconds — then see exactly where it fractures."
│   │ ]
│   ├── primaryCta: { label: "Run the Diagnostic →", href: "#diagnostic" }
│   ├── secondaryCta: { label: "How scoring works", href: "#diagnostic" }
│   └── ctaNote: "No signup. No call. Just the read the market already gives you."
│
├── DiagnosticPanel              [DIRECTLY RECOVERED]
│   ├── Section Header
│   │   ├── Kicker: "// The Legibility Score"
│   │   ├── H2: "Score your hero copy against the Three Laws."
│   │   └── Description paragraph
│   │
│   ├── Input Panel
│   │   ├── Panel Header
│   │   │   ├── Label: "Submit Your Interface"
│   │   │   └── Button: "Load a broken sample →"
│   │   └── Input Area
│   │       ├── Textarea (placeholder recovered verbatim)
│   │       ├── Word count display
│   │       └── Button: "Run Diagnostic →"
│   │
│   └── Results Panel (conditional — renders after submission)
│       ├── ScoreDisplay         [DIRECTLY RECOVERED]
│       │   ├── Label: "Legibility Score"
│       │   ├── Score number (4.5rem, color-coded)
│       │   └── Tier label (color-coded)
│       │
│       ├── WindowCard           [DIRECTLY RECOVERED]
│       │   ├── Status: "The Interpretation Window · Passed/Failed"
│       │   └── Verdict string
│       │
│       ├── LawCard × 3         [DIRECTLY RECOVERED]
│       │   ├── Label (Tangibility / Intuitiveness / Sustainability)
│       │   ├── Score number
│       │   ├── Progress bar
│       │   └── Fracture message
│       │
│       └── SaaScan CTA
│           ├── Description paragraph
│           └── "Commission a SaaScan →" (mailto link, pre-filled)
│
└── Footer                       [INFERRED — from footer.pYR9_Y61.js import E]
```

---

## Component Props

### DiagnosticPanel
No external props. Self-contained with internal useState.

### ScoreDisplay
```typescript
interface ScoreDisplayProps {
  overall: number;      // 0–100
  color: string;        // rgb(...) from getScoreColor
  label: ScoreLabel;    // tier label from getScoreLabel
}
```

### WindowCard
```typescript
interface WindowCardProps {
  window: InterpretationWindow;
  // { legible: boolean, verdict: string }
}
```

### LawCard
```typescript
interface LawCardProps {
  law: LawScore;
  // { key, label, score, fracture }
  color: string;        // rgb(...) from getScoreColor
}
```
