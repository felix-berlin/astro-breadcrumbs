/// <reference types="vitest" />
import { getViteConfig, envField } from "astro/config";
import { coverageConfigDefaults } from "vitest/config";

export default getViteConfig(
  {
    test: {
      include: ["tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      exclude: ["tests/unit/__needsFix/*"],
      globals: true,
      environment: "jsdom",
      setupFiles: ["tests/unit/vitest.setup.ts"],
      coverage: {
        include: ["src/**"],
        exclude: ["src/**/*.types.*", ...coverageConfigDefaults.exclude],
        reportsDirectory: "tests/unit/coverage",
      },
    },
  },
  {
    srcDir: "demo/src",
  },
);
