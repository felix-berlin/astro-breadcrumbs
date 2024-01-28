import { isValidUrl } from "../../src/lib/crumbUtils.ts";
import { test } from "vitest";

test("isValidUrl", () => {
  // Test with a valid URL
  let result = isValidUrl("https://www.example.com");
  expect(result).toBe(true);

  // Test with an invalid URL
  result = isValidUrl("ftp://www.example.com");
  expect(result).toBe(false);

  // Test with a non-string value
  result = isValidUrl(undefined);
  expect(result).toBe(false);

  // Test with a URL without a protocol
  result = isValidUrl("www.example.com");
  expect(result).toBe(false);
});
