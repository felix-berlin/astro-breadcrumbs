import { describe, it, expect } from "vitest";
import { truncatedButtonVisible } from "../../src/lib/helper.ts";

describe("truncatedButtonVisible", () => {
  it("returns true when conditions are met", () => {
    expect(truncatedButtonVisible(true, 1, 2)).toBe(true);
  });

  it("returns false when truncated is false", () => {
    expect(truncatedButtonVisible(false, 1, 2)).toBe(false);
  });

  it("returns false when index is not 1", () => {
    expect(truncatedButtonVisible(true, 0, 2)).toBe(false);
  });

  it("returns false when pathLength is not greater than 1", () => {
    expect(truncatedButtonVisible(true, 1, 1)).toBe(false);
  });
});
