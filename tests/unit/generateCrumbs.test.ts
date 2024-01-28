import { generateCrumbs } from "../../src/lib/generateCrumbs.ts";
import { test } from "vitest";

test("generateCrumbs - no crumbs passed", () => {
  const baseUrl = "https://example.com";
  const crumbs = [];
  const paths = ["path1", "path2"];
  const hasBaseUrl = true;
  const trailingSlash = true;
  const indexText = "Home";

  const result = generateCrumbs(
    baseUrl,
    crumbs,
    paths,
    hasBaseUrl,
    trailingSlash,
    indexText,
  );

  // Check if the first crumb is the index page
  expect(result[0]).toEqual({
    text: "Home",
    href: "https://example.com/",
  });

  // Check if the second crumb is correct
  expect(result[1]).toEqual({
    text: "path1",
    href: "https://example.com/path1/",
  });

  // Check if the third crumb is correct
  expect(result[2]).toEqual({
    text: "path2",
    href: "https://example.com/path1/path2/",
  });
});

test("generateCrumbs - with crumbs passed", () => {
  const baseUrl = "https://example.com";
  const crumbs = [{ text: "Custom Crumb", href: "/custom-crumb" }];
  const paths = ["path1", "path2"];
  const hasBaseUrl = true;
  const trailingSlash = true;
  const indexText = "Home";

  const result = generateCrumbs(
    baseUrl,
    crumbs,
    paths,
    hasBaseUrl,
    trailingSlash,
    indexText,
  );

  // Check if the first crumb is the custom crumb
  expect(result[0]).toEqual({
    text: "Custom Crumb",
    href: "/custom-crumb",
  });

  // Check if only the first crumb is returned
  expect(result[1]).toEqual(undefined);
});

test("generateCrumbs - no baseUrl provided", () => {
  const baseUrl = undefined;
  const crumbs = [];
  const paths = ["path1", "path2"];
  const hasBaseUrl = true;
  const trailingSlash = true;
  const indexText = "Home";

  const result = generateCrumbs(
    baseUrl,
    crumbs,
    paths,
    hasBaseUrl,
    trailingSlash,
    indexText,
  );

  // Check if the first crumb is the index page
  expect(result[0]).toEqual({
    text: "Home",
    href: "/",
  });

  // Check if the second crumb is correct
  expect(result[1]).toEqual({
    text: "path1",
    href: "/path1/",
  });

  // Check if the third crumb is correct
  expect(result[2]).toEqual({
    text: "path2",
    href: "/path1/path2/",
  });
});

test("generateCrumbs - no trailing slash", () => {
  const baseUrl = "https://example.com";
  const crumbs = [];
  const paths = ["path1", "path2"];
  const hasBaseUrl = true;
  const trailingSlash = false;
  const indexText = "Home";

  const result = generateCrumbs(
    baseUrl,
    crumbs,
    paths,
    hasBaseUrl,
    trailingSlash,
    indexText,
  );

  // Check if the first crumb is the index page
  expect(result[0]).toEqual({
    text: "Home",
    href: "https://example.com",
  });

  // Check if the second crumb is correct
  expect(result[1]).toEqual({
    text: "path1",
    href: "https://example.com/path1",
  });

  // Check if the third crumb is correct
  expect(result[2]).toEqual({
    text: "path2",
    href: "https://example.com/path1/path2",
  });
});

test("generateCrumbs - paths with file extensions", () => {
  const baseUrl = "https://example.com";
  const crumbs = [];
  const paths = ["path1.html", "path2.js"];
  const hasBaseUrl = true;
  const trailingSlash = true;
  const indexText = "Home";

  const result = generateCrumbs(
    baseUrl,
    crumbs,
    paths,
    hasBaseUrl,
    trailingSlash,
    indexText,
  );

  // Check if the first crumb is the index page
  expect(result[0]).toEqual({
    text: "Home",
    href: "https://example.com/",
  });

  // Check if the second crumb is correct
  expect(result[1]).toEqual({
    text: "path1",
    href: "https://example.com/path1.html/",
  });

  // Check if the third crumb is correct
  expect(result[2]).toEqual({
    text: "path2",
    href: "https://example.com/path1.html/path2.js/",
  });
});

test("generateCrumbs - paths with hyphens and underscores", () => {
  const baseUrl = "https://example.com";
  const crumbs = [];
  const paths = ["path-1", "path_2"];
  const hasBaseUrl = true;
  const trailingSlash = true;
  const indexText = "Home";

  const result = generateCrumbs(
    baseUrl,
    crumbs,
    paths,
    hasBaseUrl,
    trailingSlash,
    indexText,
  );

  // Check if the first crumb is the index page
  expect(result[0]).toEqual({
    text: "Home",
    href: "https://example.com/",
  });

  // Check if the second crumb is correct
  expect(result[1]).toEqual({
    text: "path 1",
    href: "https://example.com/path-1/",
  });

  // Check if the third crumb is correct
  expect(result[2]).toEqual({
    text: "path 2",
    href: "https://example.com/path-1/path_2/",
  });
});
