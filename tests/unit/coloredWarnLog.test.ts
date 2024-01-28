import { coloredWarnLog } from "../../src/lib/crumbUtils.ts";
import { test, vi } from "vitest";

test("coloredWarnLog should log warning message", () => {
  const consoleSpy = vi.spyOn(console, "warn").mockImplementation();

  const message = "Test warning message";
  coloredWarnLog(message);

  expect(consoleSpy).toHaveBeenCalledWith(
    "\x1b[43m",
    "Astro Breadcrumbs",
    "\x1b[0m",
    "\x1b[33m",
    message,
    "\x1b[0m",
  );

  consoleSpy.mockRestore();
});
