import { getFirstCrumb } from "../../src/lib/crumbUtils.ts";
import { test } from "vitest";

test("getFirstCrumb", () => {
  // Test with trailingSlash true and valid baseUrl
  let result = getFirstCrumb(true, "https://www.example.com", 1);
  expect(result).toBe("https://www.example.com/");

  // Test with trailingSlash false and valid baseUrl
  result = getFirstCrumb(false, "https://www.example.com", 1);
  expect(result).toBe("https://www.example.com");

  // Test with invalid baseUrl
  result = getFirstCrumb(true, "ftp://www.example.com", 1);
  expect(result).toBe("/");
});
