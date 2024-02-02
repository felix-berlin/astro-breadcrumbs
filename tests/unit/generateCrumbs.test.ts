import { generateCrumbs } from "../../src/lib/generateCrumbs.ts";
import { test } from "vitest";

test("generateCrumbs - no crumbs passed", () => {
  const result = generateCrumbs({
    crumbs: [],
    paths: ["path1", "path2"],
    indexText: "Home",
    hasTrailingSlash: true,
  });

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

test("generateCrumbs - with crumbs passed", () => {
  const result = generateCrumbs({
    crumbs: [{ text: "Custom Crumb", href: "/custom-crumb" }],
    paths: ["path1", "path2"],
    indexText: "Home",
    hasTrailingSlash: true,
  });

  // Check if the first crumb is the custom crumb
  expect(result[0]).toEqual({
    text: "Custom Crumb",
    href: "/custom-crumb",
  });

  // Check if only the first crumb is returned
  expect(result[1]).toEqual(undefined);
});

test("generateCrumbs - no trailing slash", () => {
  const result = generateCrumbs({
    crumbs: [],
    paths: ["path1", "path2"],
    indexText: "Home",
    hasTrailingSlash: false,
  });

  // Check if the first crumb is the index page
  expect(result[0]).toEqual({
    text: "Home",
    href: "/",
  });

  // Check if the second crumb is correct
  expect(result[1]).toEqual({
    text: "path1",
    href: "/path1",
  });

  // Check if the third crumb is correct
  expect(result[2]).toEqual({
    text: "path2",
    href: "/path1/path2",
  });
});

test("generateCrumbs - paths with file extensions", () => {
  const result = generateCrumbs({
    crumbs: [],
    paths: ["path1.html", "path2.js"],
    indexText: "Home",
    hasTrailingSlash: true,
  });

  // Check if the first crumb is the index page
  expect(result[0]).toEqual({
    text: "Home",
    href: "/",
  });

  // Check if the second crumb is correct
  expect(result[1]).toEqual({
    text: "path1",
    href: "/path1.html/",
  });

  // Check if the third crumb is correct
  expect(result[2]).toEqual({
    text: "path2",
    href: "/path1.html/path2.js/",
  });
});

test("generateCrumbs - paths with hyphens and underscores", () => {
  const result = generateCrumbs({
    crumbs: [],
    paths: ["path-1", "path_2"],
    indexText: "Home",
    hasTrailingSlash: true,
  });

  // Check if the first crumb is the index page
  expect(result[0]).toEqual({
    text: "Home",
    href: "/",
  });

  // Check if the second crumb is correct
  expect(result[1]).toEqual({
    text: "path-1",
    href: "/path-1/",
  });

  // Check if the third crumb is correct
  expect(result[2]).toEqual({
    text: "path_2",
    href: "/path-1/path_2/",
  });
});
