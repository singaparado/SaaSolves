# CHANGELOG.md

## [1.0.0-recovered] — July 2026

### Reconstruction
- Recovered scoring engine from compiled Ploy AI production bundle
- Restored semantic variable names (JARGON_SIGNALS, OUTCOME_SIGNALS, WORKFLOW_SIGNALS)
- Restored semantic function names (scoreInput, clampScore, countSignals, getFractureMessage, getScoreColor, getScoreLabel)
- Extracted all four React components (DiagnosticPanel, ScoreDisplay, WindowCard, LawCard)
- Established TypeScript type system (LegibilityResult, LawScore, SignalMetrics, InterpretationWindow)
- Documented complete methodology in SCORING_ENGINE.md
- Created full recovery ledger in RECOVERY_NOTES.md
- All scoring heuristics preserved exactly from compiled bundle

### Source
- Original platform: Ploy AI (Astro v6.1.9)
- Original deployment: https://saasolves.vercel.app/legibility-score
- Recovery method: Compiled bundle + rendered HTML extraction

---

## Future versions

Increment version numbers here as the repository evolves post-reconstruction.
Any modification to scoring heuristics, signal arrays, or formula coefficients
must be documented with rationale.
