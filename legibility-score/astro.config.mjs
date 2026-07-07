/**
 * RECOVERY STATUS: INFERRED
 * Reconstructed from Astro 6.1.9 + React + Tailwind stack
 * identified in compiled bundle metadata.
 */
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
  site: "https://saasolves.vercel.app",
});
