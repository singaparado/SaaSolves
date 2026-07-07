/**
 * RECOVERY STATUS: Directly recovered from compiled bundle (inlined JSX)
 *
 * Renders a single law score card — label, numeric score, progress bar,
 * and fracture message. Used across all three laws (Tangibility,
 * Intuitiveness, Sustainability).
 */

import type { LawScore } from "../../types/scoring";

interface LawCardProps {
  law: LawScore;
  color: string;
}

export function LawCard({ law, color }: LawCardProps) {
  return (
    <div className="border-solid border-ploy-neutral-primary-900/20 bg-ploy-background-primary flex flex-col px-6 py-6 border">
      <div className="flex justify-between items-baseline mb-3.5">
        <span className="font-button text-ploy-text-primary text-[0.68rem] tracking-[0.1em] uppercase">
          {law.label}
        </span>
        <span
          className="font-heading font-bold text-lg"
          style={{ color }}
        >
          {law.score}
        </span>
      </div>

      {/* Progress bar */}
      <div className="bg-ploy-neutral-primary-s0 h-1.5 w-full mb-4 overflow-hidden">
        <div
          className="h-full"
          style={{ width: `${law.score}%`, backgroundColor: color }}
        />
      </div>

      <p className="text-ploy-text-secondary leading-[1.7] text-sm">
        {law.fracture}
      </p>
    </div>
  );
}
