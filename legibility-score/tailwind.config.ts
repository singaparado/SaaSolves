/**
 * RECOVERY STATUS: INFERRED + PARTIALLY RECOVERED
 *
 * The Tailwind configuration was not present in the compiled bundle.
 * This file reconstructs the design token system from:
 *   1. All className values extracted from the compiled JSX
 *   2. All rgb() color values present in the scoring engine
 *   3. The ploy-* CSS custom property system
 *   4. Background color values from inline styles (e.g. rgb(11,34,63) for textarea)
 *
 * Color values marked DIRECTLY RECOVERED are exact RGB triples from the bundle.
 * Color values marked INFERRED are reasonable approximations from the dark navy
 * design system visible in the rendered HTML and consistent with SaaSolves
 * visual identity (deep navy, aegean blue, gold accent, ivory text).
 *
 * This config must be validated against the actual compiled CSS
 * (footer.0ypq6iQR.css) if that file is recovered.
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "ploy-background-primary": "rgb(2, 11, 24)",       // DIRECTLY RECOVERED — primary bg
        "ploy-background-accent-primary": "rgb(200, 164, 93)", // INFERRED — gold CTA bg
        "ploy-background-inverse": "rgb(247, 241, 227)",   // INFERRED — ivory inverse bg

        "ploy-text-primary": "rgb(247, 241, 227)",         // INFERRED — ivory primary text
        "ploy-text-secondary": "rgb(180, 170, 148)",       // INFERRED — muted ivory secondary
        "ploy-text-inverse": "rgb(2, 11, 24)",             // INFERRED — dark on light

        "ploy-accent-primary": "rgb(200, 164, 93)",        // INFERRED — gold accent
        "ploy-accent-primary-500": "rgb(200, 164, 93)",    // INFERRED — gold mid
        "ploy-accent-primary-600": "rgb(180, 144, 73)",    // INFERRED — gold dark (focus border)
        "ploy-accent-secondary-950": "rgb(6, 21, 38)",     // DIRECTLY RECOVERED

        "ploy-neutral-primary-700": "rgb(90, 100, 120)",   // INFERRED — muted label text
        "ploy-neutral-primary-800": "rgb(60, 70, 90)",     // INFERRED — darker muted
        "ploy-neutral-primary-900": "rgb(20, 30, 50)",     // INFERRED — border base
        "ploy-neutral-primary-s0": "rgb(6, 21, 38)",       // DIRECTLY RECOVERED — panel surface
        "ploy-neutral-inverse-50": "rgb(247, 241, 227)",   // DIRECTLY RECOVERED — html class
        "ploy-neutral-inverse-600": "rgb(180, 170, 148)",  // INFERRED

        "ploy-border-primary": "rgb(30, 50, 80)",          // INFERRED — from border classes
        "ploy-button-primary-border": "rgb(200, 164, 93)", // INFERRED — gold button border
        "ploy-button-primary-text": "rgb(2, 11, 24)",      // INFERRED — dark text on gold button
        "ploy-button-secondary-text": "rgb(200, 164, 93)", // INFERRED
      },

      fontFamily: {
        // DIRECTLY RECOVERED from HTML style attribute
        sans: ["Proza Libre", "sans-serif"],
        // INFERRED from font-heading / font-button class usage
        heading: ["Proza Libre", "sans-serif"],
        button: ["Proza Libre", "sans-serif"],
      },

      fontSize: {
        // Standard Tailwind sizes used throughout — no custom overrides needed
      },

      boxShadow: {
        // DIRECTLY RECOVERED from compiled className strings
        "diagnostic-panel":
          "0px 4px 28px 0px rgba(0,0,0,0.45), 0px 1px 4px 0px rgba(0,0,0,0.25)",
        "cta-hover":
          "0 18px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(200,164,93,0.35)",
      },

      transitionTimingFunction: {
        // DIRECTLY RECOVERED from compiled className
        "cta-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
