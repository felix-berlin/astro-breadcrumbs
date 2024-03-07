import { checkStringStartAndEnd } from "../../src/lib/helper.ts";
import { test } from "vitest";

describe("checkStringStartAndEnd", () => {
  test("should return true when string starts and ends with a letter", () => {
    const str = "Hello";
    const result = checkStringStartAndEnd(str);
    expect(result).toBe(true);
  });

  test("should return false when string does not start with a letter", () => {
    const str = "1Hello";
    const result = checkStringStartAndEnd(str);
    expect(result).toBe(false);
  });

  test("should return false when string does not end with a letter", () => {
    const str = "Hello1";
    const result = checkStringStartAndEnd(str);
    expect(result).toBe(false);
  });

  test("should return false when string is undefined", () => {
    const str = undefined;
    const result = checkStringStartAndEnd(str);
    expect(result).toBe(false);
  });
});
