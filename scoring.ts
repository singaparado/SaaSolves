/**
 * RECOVERY STATUS: Directly recovered from compiled bundle
 * All type shapes are reconstructed from the scoring engine's
 * return values and internal variable structures.
 */

export type LawKey = "tangibility" | "intuitiveness" | "sustainability";

export interface SignalMetrics {
  /** Count of jargon signals detected in copy */
  jargon: number;
  /** Count of outcome/action signals detected */
  outcome: number;
  /** Count of workflow/recurring-use signals detected */
  workflow: number;
  /** Whether any digit appears in the copy */
  hasNumber: boolean;
  /** Whether any sentence exceeds 24 words */
  longSentences: boolean;
  /** Count of reader-directed language (you/your) */
  you: number;
  /** Count of founder-directed language (we/our) */
  we: number;
}

export interface InterpretationWindow {
  /** Whether the first sentence resolves inside ~5 seconds */
  legible: boolean;
  /** Human-readable verdict string */
  verdict: string;
}

export interface LawScore {
  key: LawKey;
  label: string;
  /** 0–100 clamped score (min 4, max 98) */
  score: number;
  /** Diagnostic fracture message explaining why the score is what it is */
  fracture: string;
}

export interface LegibilityResult {
  /** Weighted composite score across all three laws */
  overall: number;
  /** Total word count of the submitted copy */
  wordCount: number;
  /** 5-second interpretation window assessment */
  window: InterpretationWindow;
  /** Individual law scores: Tangibility, Intuitiveness, Sustainability */
  laws: LawScore[];
}

export interface ScoreColorThreshold {
  value: number;
  color: string;
}

export type ScoreLabel =
  | "Recognition-grade"
  | "Clear, not yet magnetic"
  | "Fractured — the market can't feel it";
