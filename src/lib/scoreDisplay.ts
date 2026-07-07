/**
 * RECOVERY STATUS: Directly recovered from compiled bundle
 *
 * Display utilities for score rendering — color mapping and label mapping.
 * These functions were compiled as `l(t)` and `O(t)` in the production bundle.
 *
 * Color values are exact RGB triples recovered from the bundle.
 * Labels are exact strings recovered from the bundle.
 */

import { SCORE_THRESHOLDS } from "../constants/signals";
import type { ScoreLabel } from "../types/scoring";

/**
 * Maps a 0–100 score to its display color.
 * Three tiers, matching the recognition/clear/fractured label system.
 *
 * RECOVERY: Directly recovered. Original: `function l(t)`
 *   ≥ 72 → green  rgb(92, 158, 122)
 *   ≥ 50 → amber  rgb(226, 201, 140)
 *   <  50 → rust   rgb(184, 100, 62)
 */
export function getScoreColor(score: number): string {
  if (score >= SCORE_THRESHOLDS.RECOGNITION) return "rgb(92,158,122)";
  if (score >= SCORE_THRESHOLDS.CLEAR) return "rgb(226,201,140)";
  return "rgb(184,100,62)";
}

/**
 * Maps a 0–100 score to its tier label.
 *
 * RECOVERY: Directly recovered. Original: `function O(t)`
 */
export function getScoreLabel(score: number): ScoreLabel {
  if (score >= SCORE_THRESHOLDS.RECOGNITION) return "Recognition-grade";
  if (score >= SCORE_THRESHOLDS.CLEAR) return "Clear, not yet magnetic";
  return "Fractured — the market can't feel it";
}
