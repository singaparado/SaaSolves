/**
 * RECOVERY STATUS: Directly recovered from compiled bundle (inlined JSX)
 *
 * Displays the overall Legibility Score as a large number with color,
 * tier label, and border tinted to match the score color.
 */

import type { ScoreLabel } from "../../types/scoring";

interface ScoreDisplayProps {
  overall: number;
  color: string;
  label: ScoreLabel;
}

export function ScoreDisplay({ overall, color, label }: ScoreDisplayProps) {
  return (
    <div
      className="border-solid bg-ploy-neutral-primary-s0 flex flex-col justify-center px-8 py-9 border"
      style={{ borderColor: color }}
    >
      <div className="font-button text-ploy-neutral-primary-700 text-[0.6rem] tracking-[0.14em] uppercase mb-3">
        Legibility Score
      </div>
      <div className="flex items-end gap-2">
        <span
          className="font-heading leading-none font-bold text-[4.5rem]"
          style={{ color }}
        >
          {overall}
        </span>
        <span className="font-heading text-ploy-neutral-primary-700 text-2xl mb-2.5">
          /100
        </span>
      </div>
      <div
        className="font-button text-[0.68rem] tracking-[0.1em] uppercase mt-2"
        style={{ color }}
      >
        {label}
      </div>
    </div>
  );
}
