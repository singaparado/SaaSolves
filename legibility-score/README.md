# The Legibility Score
### A SaaSolves Diagnostic Tool

**Live:** https://saasolves.vercel.app/legibility-score  
**Owner:** Mahdi Singaparado / SaaSolves  
**Stack:** Astro 6.1.9 + React + TypeScript + Tailwind CSS

---

## What It Does

The Legibility Score is a real-time diagnostic engine that evaluates B2B SaaS
homepage hero copy against the Three Laws of Translation:

- **Tangibility** — Does a stranger know what changes for them?
- **Intuitiveness** — Does it read at the speed of thought?
- **Sustainability** — Does it frame the product as an ongoing environment?

Paste hero copy. Receive a 0–100 composite Legibility Score, an Interpretation
Window assessment (5-second first-sentence legibility), and per-law fracture
diagnostics explaining exactly where the narrative breaks down.

No signup. No server. No data collected. Runs entirely client-side.

---

## Repository Status

This repository was reconstructed from compiled production output after the
original source was inaccessible through the Ploy AI builder. All scoring
heuristics, signal vocabulary, fracture messages, and diagnostic concepts are
proprietary to SaaSolves and have been preserved exactly.

See [`docs/RECOVERY_NOTES.md`](docs/RECOVERY_NOTES.md) for the full recovery
ledger, including recovery status (directly recovered / inferred / assumed)
for every file and function.

---

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/scoringEngine.ts` | Core proprietary scoring algorithm |
| `src/constants/signals.ts` | Signal vocabulary + scoring constants |
| `src/components/diagnostic/DiagnosticPanel.tsx` | Primary UI component |
| `docs/SCORING_ENGINE.md` | Full methodology documentation |
| `docs/RECOVERY_NOTES.md` | Recovery ledger |

---

## Scoring Methodology

The composite score weights:
- Tangibility: 34%
- Intuitiveness: 40%
- Sustainability: 26%

All heuristics are documented in [`docs/SCORING_ENGINE.md`](docs/SCORING_ENGINE.md).
**Do not modify scoring constants without updating that document.**

---

## Development

```bash
npm install
npm run dev
```

---

## Deployment

Deployed to Vercel. Connected to the main SaaSolves domain at
`saasolves.vercel.app/legibility-score`.

---

## Intellectual Property

The Legibility Score methodology — including the Three Laws of Translation,
the Interpretation Window concept, signal vocabulary, fracture message system,
and scoring formulas — is proprietary intellectual property of SaaSolves /
Mahdi Singaparado. This repository exists to establish and maintain source-level
ownership of that IP.
