import { getBaseUrl } from "../../src/lib/crumbUtils.ts";
import { test } from "vitest";

test("getBaseUrl", () => {
  // Test with a base URL that ends with a slash
  let result = getBaseUrl("https://www.example.com/", 21);
  expect(result).toBe(null);

  // Test with a base URL that is not valid
  result = getBaseUrl("ftp://www.example.com", 21);
  expect(result).toBe(null);

  // Test with a valid base URL
  result = getBaseUrl("https://www.example.com", 21);
  expect(result).toBe("https://www.example.com");
});
