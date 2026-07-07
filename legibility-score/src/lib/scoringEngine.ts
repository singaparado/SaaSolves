/**
 * RECOVERY STATUS: Directly recovered from compiled bundle
 *
 * This is the canonical SaaSolves Legibility Scoring Engine.
 * All numerical heuristics are preserved exactly as compiled.
 * Only variable names, structure, and documentation have been restored.
 *
 * Original compiled function names:
 *   countSignals       → `i(t, a)`
 *   clampScore         → `h(t)`
 *   getFractureMessage → `x(t, a, r)`
 *   scoreInput         → `I(t)`
 *
 * The scoring methodology is proprietary to SaaSolves.
 * Do not modify heuristic values without updating SCORING_ENGINE.md.
 */

import {
  JARGON_SIGNALS,
  OUTCOME_SIGNALS,
  WORKFLOW_SIGNALS,
  SCORE_BOUNDS,
  SCORE_THRESHOLDS,
  SCORING_WEIGHTS,
  WINDOW_PARAMS,
} from "../constants/signals";
import type {
  LawKey,
  LegibilityResult,
  SignalMetrics,
} from "../types/scoring";

/**
 * Counts how many signals from a given list appear in the input string.
 * Uses substring matching — partial matches are intentional (e.g. "synerg"
 * catches "synergy", "synergistic", "synergize").
 *
 * RECOVERY: Directly recovered. Original: `function i(t, a)`
 */
function countSignals(text: string, signals: readonly string[]): number {
  return signals.reduce(
    (count, signal) => (text.includes(signal) ? count + 1 : count),
    0
  );
}

/**
 * Clamps a raw score to the valid output range [4, 98].
 * Floor of 4 prevents a zero score even for maximally broken copy.
 * Ceiling of 98 prevents a perfect score — no copy is flawless.
 *
 * RECOVERY: Directly recovered. Original: `function h(t)`
 */
function clampScore(raw: number): number {
  return Math.max(SCORE_BOUNDS.MIN, Math.min(SCORE_BOUNDS.MAX, Math.round(raw)));
}

/**
 * Produces a human-readable fracture message for a given law score.
 * Messages are tiered: passing (≥72), partial, or failing — with
 * context-sensitive diagnosis based on which specific signals fired.
 *
 * RECOVERY: Directly recovered. Original: `function x(t, a, r)`
 */
function getFractureMessage(
  law: LawKey,
  score: number,
  metrics: SignalMetrics
): string {
  if (law === "tangibility") {
    if (score >= SCORE_THRESHOLDS.RECOGNITION) {
      return "Outcomes are legible — a stranger can name what changes for them.";
    }
    if (!metrics.hasNumber && metrics.outcome === 0) {
      return "No concrete outcome or number. The reader learns what it is, never what it does for them.";
    }
    return "Capability is stated but the payoff stays abstract. Anchor each claim to a result the buyer already wants.";
  }

  if (law === "intuitiveness") {
    if (score >= SCORE_THRESHOLDS.RECOGNITION) {
      return "Reads at the speed of thought — low jargon, natural sentence rhythm.";
    }
    if (metrics.jargon >= 2) {
      return `${metrics.jargon} jargon signals detected. Machine-led syntax raises the cognitive floor before meaning lands.`;
    }
    if (metrics.longSentences) {
      return "Sentences run long. The first read demands effort the visitor won't spend.";
    }
    return "Phrasing leans on category language instead of how the buyer actually talks.";
  }

  // sustainability
  if (score >= SCORE_THRESHOLDS.RECOGNITION) {
    return "Anchored to recurring use — the product reads as an ongoing environment, not a one-time tool.";
  }
  if (metrics.workflow === 0) {
    return "No link to a recurring workflow. Value reads as a one-off, not a system embedded in daily performance.";
  }
  if (metrics.we > metrics.you) {
    return "The copy talks about you more than the reader. Reframe around their standing workflow.";
  }
  return "Relevance is momentary. Tie the product to something the buyer returns to every week.";
}

/**
 * Primary scoring function. Accepts raw hero copy and returns a complete
 * LegibilityResult including overall score, Interpretation Window assessment,
 * and individual law scores with fracture diagnostics.
 *
 * RECOVERY: Directly recovered. Original: `function I(t)`
 *
 * Scoring formulas (preserved exactly):
 *   tangibility    = clamp(46 + outcome*9 + (hasNumber ? 16 : 0) - jargon*6 + (you > we ? 6 : 0))
 *   intuitiveness  = clamp(98 - jargonDensity*900 - jargon*6 - (longSentences ? 18 : 0) - max(0, avgWordsPerSentence-16)*1.4)
 *   sustainability = clamp(42 + workflow*13 + (you > we ? 10 : -4) + (outcome > 0 ? 6 : 0))
 *   overall        = round(tangibility*0.34 + intuitiveness*0.40 + sustainability*0.26)
 */
export function scoreInput(rawCopy: string): LegibilityResult {
  const normalized = rawCopy.toLowerCase().replace(/\s+/g, " ").trim();
  const wordCount = normalized.split(" ").filter(Boolean).length;

  const sentences = rawCopy
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const avgWordsPerSentence = sentences.length ? wordCount / sentences.length : wordCount;

  const firstSentenceRaw = (sentences[0] || rawCopy).toLowerCase();
  const firstSentenceWordCount = firstSentenceRaw
    .split(/\s+/)
    .filter(Boolean).length;

  // Signal counts
  const jargonCount = countSignals(normalized, JARGON_SIGNALS);
  const outcomeCount = countSignals(normalized, OUTCOME_SIGNALS);
  const workflowCount = countSignals(normalized, WORKFLOW_SIGNALS);
  const hasNumber = /\d/.test(rawCopy);
  const youCount = countSignals(normalized, ["you", "your"]);
  const weCount = countSignals(normalized, ["we ", "our ", "we're", "we've"]);
  const jargonDensity = wordCount ? jargonCount / wordCount : 0;
  const hasLongSentences = avgWordsPerSentence > 24;

  const metrics: SignalMetrics = {
    jargon: jargonCount,
    outcome: outcomeCount,
    workflow: workflowCount,
    hasNumber,
    longSentences: hasLongSentences,
    you: youCount,
    we: weCount,
  };

  // Law scores — formulas preserved exactly from compiled bundle
  const tangibilityScore = clampScore(
    46 +
    outcomeCount * 9 +
    (hasNumber ? 16 : 0) -
    jargonCount * 6 +
    (youCount > weCount ? 6 : 0)
  );

  const intuitivenessScore = clampScore(
    98 -
    jargonDensity * 900 -
    jargonCount * 6 -
    (hasLongSentences ? 18 : 0) -
    Math.max(0, avgWordsPerSentence - 16) * 1.4
  );

  const sustainabilityScore = clampScore(
    42 +
    workflowCount * 13 +
    (youCount > weCount ? 10 : -4) +
    (outcomeCount > 0 ? 6 : 0)
  );

  const overallScore = Math.round(
    tangibilityScore * SCORING_WEIGHTS.tangibility +
    intuitivenessScore * SCORING_WEIGHTS.intuitiveness +
    sustainabilityScore * SCORING_WEIGHTS.sustainability
  );

  // Interpretation Window — recovered from compiled bundle
  const firstSentenceJargon = countSignals(firstSentenceRaw, JARGON_SIGNALS);
  const windowLegible =
    firstSentenceWordCount <= WINDOW_PARAMS.MAX_FIRST_SENTENCE_WORDS &&
    firstSentenceJargon < WINDOW_PARAMS.MAX_JARGON_IN_OPENING;

  return {
    overall: overallScore,
    wordCount,
    window: {
      legible: windowLegible,
      verdict: windowLegible
        ? "Legible inside the 5-second window. The first line resolves before the visitor decides to leave."
        : "Silent exit likely. The opening line is too dense to resolve in 5 seconds — most visitors leave before the value surfaces.",
    },
    laws: [
      {
        key: "tangibility",
        label: "Tangibility",
        score: tangibilityScore,
        fracture: getFractureMessage("tangibility", tangibilityScore, metrics),
      },
      {
        key: "intuitiveness",
        label: "Intuitiveness",
        score: intuitivenessScore,
        fracture: getFractureMessage("intuitiveness", intuitivenessScore, metrics),
      },
      {
        key: "sustainability",
        label: "Sustainability",
        score: sustainabilityScore,
        fracture: getFractureMessage("sustainability", sustainabilityScore, metrics),
      },
    ],
  };
}
