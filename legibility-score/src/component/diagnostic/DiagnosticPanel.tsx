/**
 * RECOVERY STATUS: Directly recovered from compiled bundle
 *
 * The primary diagnostic interface component.
 * Reconstructed from the compiled `function B()` in the production bundle.
 *
 * Contains:
 *   - Section header with kicker, headline, description
 *   - Textarea input for hero copy submission
 *   - Word count display
 *   - "Load a broken sample" utility
 *   - "Run Diagnostic" trigger
 *   - Results display (conditional on submission)
 *
 * The mailto CTA at the bottom of results is preserved exactly,
 * including the pre-filled subject and body from the compiled bundle.
 */

import { useState } from "react";
import { scoreInput } from "../../lib/scoringEngine";
import { getScoreColor, getScoreLabel } from "../../lib/scoreDisplay";
import { BROKEN_SAMPLE_COPY } from "../../constants/samples";
import type { LegibilityResult } from "../../types/scoring";
import { ScoreDisplay } from "./ScoreDisplay";
import { LawCard } from "./LawCard";
import { WindowCard } from "./WindowCard";

export function DiagnosticPanel() {
  const [copy, setCopy] = useState<string>("");
  const [result, setResult] = useState<LegibilityResult | null>(null);

  function runDiagnostic() {
    const wordCount = copy.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount < 3) return;
    setResult(scoreInput(copy));
  }

  function loadBrokenSample() {
    setCopy(BROKEN_SAMPLE_COPY);
    setResult(null);
  }

  const wordCount = copy.trim()
    ? copy.trim().split(/\s+/).filter(Boolean).length
    : 0;

  return (
    <section
      id="diagnostic"
      className="isolate border-solid border-ploy-neutral-primary-900/20 bg-ploy-background-primary relative px-[6vw] py-[10vh] border-t"
    >
      <div className="max-w-[62.5rem] mx-auto">

        {/* Section header */}
        <div className="border-solid border-ploy-accent-primary/20 mb-12 pb-6 border-b">
          <div className="font-button text-ploy-accent-primary-500 text-xs tracking-widest uppercase mb-2.5">
            // The Legibility Score
          </div>
          <h2 className="font-heading leading-[1.1] font-bold mb-3.5 max-md:text-4xl lg:text-5xl">
            Score your hero copy against the Three Laws.
          </h2>
          <p className="text-ploy-text-secondary leading-[1.75] text-base max-w-[42.5rem]">
            Paste the first thing a visitor reads on your homepage. We grade it
            the way the market does — in seconds, against Tangibility,
            Intuitiveness, and Sustainability — and name exactly where the
            narrative fractures.
          </p>
        </div>

        {/* Input panel */}
        <div className="border-solid border-ploy-neutral-primary-900/20 bg-ploy-background-primary shadow-[0px_4px_28px_0px_rgba(0,0,0,0.45),0px_1px_4px_0px_rgba(0,0,0,0.25)] border">

          {/* Panel header */}
          <div className="border-solid border-ploy-text-primary/10 bg-ploy-neutral-primary-s0 flex justify-between items-center px-6 py-3.5 border-b">
            <span className="font-button text-[rgb(226,201,140)] text-[0.62rem] tracking-[0.0744rem] uppercase block">
              Submit Your Interface
            </span>
            <button
              onClick={loadBrokenSample}
              className="font-button text-ploy-neutral-primary-700 text-[0.6rem] tracking-wider uppercase cursor-pointer hover:text-[rgb(226,201,140)]"
            >
              Load a broken sample →
            </button>
          </div>

          {/* Textarea and submit */}
          <div className="px-6 py-7">
            <textarea
              value={copy}
              onChange={(e) => setCopy(e.target.value)}
              rows={4}
              placeholder="Paste your homepage hero copy — the headline and first line a stranger reads..."
              className="font-button border-solid border-ploy-border-primary bg-[rgb(11,34,63)] text-ploy-text-primary text-sm leading-relaxed w-full block px-4 py-3.5 border resize-y placeholder:text-ploy-neutral-primary-700 focus:outline-none focus:border-ploy-accent-primary-600"
            />
            <div className="flex flex-wrap items-center justify-between gap-4 mt-5">
              <span className="font-button text-ploy-neutral-primary-700 text-[0.6rem] tracking-wider uppercase">
                {copy.trim()
                  ? `${wordCount} words analyzed`
                  : "// Awaiting narrative input"}
              </span>
              <button
                onClick={runDiagnostic}
                data-ploy-component-type="button"
                data-ploy-component-variant="primary"
                className="font-button border-solid border-ploy-button-primary-border bg-ploy-background-accent-primary text-ploy-button-primary-text font-semibold text-xs tracking-[0.08em] uppercase relative inline-flex items-center gap-2 cursor-pointer duration-[0.25s] ease-[cubic-bezier(0.16,1,0.3,1)] px-[1.625rem] py-3 rounded-xl hover:[translate:0_-2px] hover:shadow-[0_18px_48px_rgba(0,0,0,0.45),0_0_0_1px_rgba(200,164,93,0.35)] border"
              >
                Run Diagnostic →
              </button>
            </div>
          </div>
        </div>

        {/* Results — conditionally rendered */}
        {result && (
          <div className="mt-9">

            {/* Overall score + Interpretation Window */}
            <div className="grid gap-6 mb-6 max-md:grid-cols-[1fr] md:grid-cols-[0.9fr_1.1fr]">
              <ScoreDisplay
                overall={result.overall}
                color={getScoreColor(result.overall)}
                label={getScoreLabel(result.overall)}
              />
              <WindowCard window={result.window} />
            </div>

            {/* Three law cards */}
            <div className="grid gap-4 max-md:grid-cols-[1fr] md:grid-cols-[repeat(3,1fr)]">
              {result.laws.map((law) => (
                <LawCard
                  key={law.key}
                  law={law}
                  color={getScoreColor(law.score)}
                />
              ))}
            </div>

            {/* SaaScan CTA */}
            <div className="border-solid border-ploy-accent-primary/20 flex flex-wrap items-center justify-between gap-6 mt-7 px-7 py-7 border">
              <p className="text-ploy-text-secondary leading-[1.7] text-sm max-w-[34rem]">
                This is the automated read. A SaaScan goes forensic — mapping
                the uncodified buyer psychology this scanner can't see, and
                returning a written Narrative Audit.
              </p>
              <a
                href="mailto:saasolves@gmail.com?subject=SaaScan%20%E2%80%94%20Narrative%20Audit%20Request&body=Hi%20Mahdi.%20I%20ran%20the%20Legibility%20Score%20and%20want%20the%20forensic%20read.%0A%0A-%20Platform%20URL%3A%0A-%20My%20current%20hero%20copy%3A"
                data-ploy-component-type="button"
                data-ploy-component-variant="primary"
                className="font-button border-solid border-ploy-button-primary-border bg-ploy-background-accent-primary text-ploy-button-primary-text font-semibold text-xs tracking-[0.08em] uppercase relative inline-flex items-center gap-2 duration-[0.25s] ease-[cubic-bezier(0.16,1,0.3,1)] px-[1.625rem] py-3 rounded-xl hover:[translate:0_-2px] hover:shadow-[0_18px_48px_rgba(0,0,0,0.45),0_0_0_1px_rgba(200,164,93,0.35)] border whitespace-nowrap"
              >
                Commission a SaaScan →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
