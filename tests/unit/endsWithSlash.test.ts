import { endsWithSlash } from "../../src/lib/crumbUtils.ts";
import { test } from "vitest";

test("endsWithSlash", () => {
  // Test with a URL that ends with a slash
  let result = endsWithSlash("https://www.example.com/");
  expect(result).toBe(true);

  // Test with a URL that does not end with a slash
  result = endsWithSlash("https://www.example.com");
  expect(result).toBe(false);

  // Test with a non-string value
  result = endsWithSlash(undefined);
  expect(result).toBe(false);
});
