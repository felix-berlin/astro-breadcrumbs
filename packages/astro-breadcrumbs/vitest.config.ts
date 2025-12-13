/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig(
  {
    test: {
      include: ["tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      globals: true,
      environment: "jsdom",
      setupFiles: ["tests/unit/vitest.setup.ts"],
      coverage: {
        include: ["src/**/*.{js,jsx,ts,tsx,astro}"],
        reportsDirectory: "tests/unit/coverage",
      },
    },
  },
  {
    srcDir: "../../demo/src",
  },
);
