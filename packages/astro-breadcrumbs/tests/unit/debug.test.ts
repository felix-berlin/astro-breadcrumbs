import { describe, it, expect, vi } from "vitest";
import { debugInformation } from "../../src/lib/debug.ts";

describe("debugInformation", () => {
  it("should not log anything when debug is false", () => {
    const consoleLogSpy = vi.spyOn(console, "log");
    const consoleTableSpy = vi.spyOn(console, "table");
    debugInformation(false, [], {});
    expect(consoleLogSpy).not.toHaveBeenCalled();
    expect(consoleTableSpy).not.toHaveBeenCalled();
    consoleLogSpy.mockRestore();
    consoleTableSpy.mockRestore();
  });

  it("should log parts and customizedParts when debug is true", () => {
    const parts = [{ text: "Home", href: "/" }];
    const customizedParts = { "/": { text: "Home", href: "/" } };
    const consoleLogSpy = vi.spyOn(console, "log");
    const consoleTableSpy = vi.spyOn(console, "table");
    debugInformation(true, parts, customizedParts);
    expect(consoleLogSpy).toHaveBeenCalledTimes(4);
    expect(consoleTableSpy).toHaveBeenCalledTimes(2);
    expect(consoleTableSpy).toHaveBeenCalledWith(parts);
    expect(consoleTableSpy).toHaveBeenCalledWith(customizedParts);
    consoleLogSpy.mockRestore();
    consoleTableSpy.mockRestore();
  });
});