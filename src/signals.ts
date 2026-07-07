/**
 * RECOVERY STATUS: Directly recovered from compiled bundle
 *
 * These three arrays are the core signal vocabulary of the scoring engine.
 * They are proprietary to SaaSolves and must not be modified without
 * corresponding updates to the scoring heuristics in scoringEngine.ts.
 *
 * Original compiled variable names:
 *   JARGON_SIGNALS  → `_`
 *   OUTCOME_SIGNALS → `M`
 *   WORKFLOW_SIGNALS → `F`
 */

/**
 * Jargon signals — language patterns associated with machine-led,
 * category-first, or infrastructure-heavy B2B copy.
 * Each match penalizes Intuitiveness and Tangibility scores.
 */
export const JARGON_SIGNALS: readonly string[] = [
  "leverage",
  "synerg",
  "robust",
  "seamless",
  "scalable",
  "cutting-edge",
  "next-generation",
  "next generation",
  "revolutionary",
  "ecosystem",
  "paradigm",
  "holistic",
  "end-to-end",
  "best-in-class",
  "turnkey",
  "enterprise-grade",
  "multi-tenant",
  "orchestrat",
  "streamlin",
  "empower",
  "disrupt",
  "decentralized",
  "granular",
  "frictionless",
  "bandwidth",
  "mission-critical",
  "hyper-",
  "cross-functional",
  "actionable",
  "utilize",
  "facilitate",
  "optimiz",
  "architected",
  "purpose-built",
  "cloud-native",
] as const;

/**
 * Outcome signals — language patterns indicating consequence-first
 * or buyer-benefit framing. Each match improves Tangibility score.
 */
export const OUTCOME_SIGNALS: readonly string[] = [
  "save",
  "faster",
  "reduce",
  "less",
  "fewer",
  "without",
  "so you",
  "so your",
  "in minutes",
  "in seconds",
  "stop",
  "avoid",
  "ship",
  "launch",
  "cut",
  "boost",
  "win",
  "close",
  "grow",
  "double",
  "instantly",
  "today",
  "get paid",
  "no more",
] as const;

/**
 * Workflow signals — language patterns indicating recurring-use framing,
 * operational integration, and ongoing-environment positioning.
 * Each match improves Sustainability score.
 */
export const WORKFLOW_SIGNALS: readonly string[] = [
  "workflow",
  "every day",
  "daily",
  "your team",
  "integrat",
  "natively",
  "existing",
  "ongoing",
  "keep",
  "stay",
  "continuous",
  "each week",
  "routine",
  "in your",
  "already use",
  "day-to-day",
  "over time",
] as const;

/**
 * Scoring thresholds — directly recovered from colorScore and labelScore functions.
 * These define the three-tier recognition system.
 */
export const SCORE_THRESHOLDS = {
  RECOGNITION: 72,
  CLEAR: 50,
} as const;

/**
 * Scoring weights — directly recovered from the overall composite formula.
 * overall = tangibility * 0.34 + intuitiveness * 0.40 + sustainability * 0.26
 */
export const SCORING_WEIGHTS = {
  tangibility: 0.34,
  intuitiveness: 0.40,
  sustainability: 0.26,
} as const;

/**
 * Interpretation Window parameters — recovered from window assessment logic.
 */
export const WINDOW_PARAMS = {
  MAX_FIRST_SENTENCE_WORDS: 18,
  MAX_JARGON_IN_OPENING: 1,
} as const;

/**
 * Score floor and ceiling — recovered from clamp function h(t).
 */
export const SCORE_BOUNDS = {
  MIN: 4,
  MAX: 98,
} as const;
