/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["./tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["./tests/unit/__needsFix/*"],
    globals: true,
    environment: "jsdom",
    coverage: {
      include: ["src/**"],
      reportsDirectory: "./tests/unit/coverage",
    },
  },
});
