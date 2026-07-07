/**
 * RECOVERY STATUS: Directly recovered from compiled bundle (inlined JSX)
 *
 * Displays the Interpretation Window assessment — the 5-second
 * legibility check on the first sentence of the submitted copy.
 *
 * Shows passed/failed status and the verdict string from the scoring engine.
 */

import type { InterpretationWindow } from "../../types/scoring";

interface WindowCardProps {
  window: InterpretationWindow;
}

export function WindowCard({ window }: WindowCardProps) {
  return (
    <div className="border-solid border-ploy-border-primary bg-ploy-background-primary flex flex-col justify-center px-7 py-8 border-l-[5px]">
      <div className="font-button text-ploy-accent-primary-500 text-[0.6rem] tracking-[0.12em] uppercase mb-3">
        {`The Interpretation Window · ${window.legible ? "Passed" : "Failed"}`}
      </div>
      <p className="font-heading leading-relaxed italic text-xl text-ploy-text-primary">
        5s{" "}
        <span className="font-heading not-italic text-ploy-text-secondary text-base">
          — {window.verdict}
        </span>
      </p>
    </div>
  );
}
