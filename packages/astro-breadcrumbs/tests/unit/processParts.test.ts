import {
  mergeCustomizedLinks,
  customizeListElement,
  processParts,
} from "../../src/lib/generateCrumbs.ts";
import { test, expect } from "vitest";

test("mergeCustomizedLinks - merge custom links", () => {
  const parts = [
    { text: "Home", href: "/" },
    { text: "Path1", href: "/path1" },
  ];
  const customizeLinks = [
    { text: "Custom Home", href: "/custom-home", index: 0 },
  ];

  const result = mergeCustomizedLinks(parts, customizeLinks);

  expect(result[0]).toEqual({
    text: "Custom Home",
    href: "/custom-home",
  });
  expect(result[1]).toEqual({
    text: "Path1",
    href: "/path1",
  });
});

test("mergeCustomizedLinks - custom link with 'last' index", () => {
  const parts = [
    { text: "Home", href: "/" },
    { text: "Path1", href: "/path1" },
  ];
  const customizeLinks = [
    { text: "Custom Last", href: "/custom-last", index: "last" },
  ];

  const result = mergeCustomizedLinks(parts, customizeLinks);

  expect(result[1]).toEqual({
    text: "Custom Last",
    href: "/custom-last",
  });
});

test("mergeCustomizedLinks - custom link with invalid index", () => {
  const parts = [
    { text: "Home", href: "/" },
    { text: "Path1", href: "/path1" },
  ];
  const customizeLinks = [
    { text: "Invalid Index", href: "/invalid-index", index: 5 },
  ];

  const result = mergeCustomizedLinks(parts, customizeLinks);

  expect(result).toEqual(parts);
});

test("customizeListElement - truncated button shown", () => {
  const listElements = [{ text: "Element1" }, { text: "Element2" }];

  const result = customizeListElement(1, true, listElements);

  expect(result).toEqual([{ text: "Element1" }]);
});

test("customizeListElement - truncated button not shown", () => {
  const listElements = [{ text: "Element1" }, { text: "Element2" }];

  const result = customizeListElement(1, false, listElements);

  expect(result).toEqual({ text: "Element2" });
});

test("processParts - exclude current page", () => {
  const parts = [
    { text: "Home", href: "/", isLast: false },
    { text: "Path1", href: "/path1", isLast: true },
  ];
  const customizeListElements = [];

  const result = processParts(parts, customizeListElements, true, false, 2);

  expect(result).toEqual([
    { text: "Home", href: "/", isLast: true, showTruncatedButton: false },
  ]);
});

test("processParts - truncated flag", () => {
  const parts = [
    { text: "Home", href: "/", isLast: false },
    { text: "Path1", href: "/path1", isLast: true },
  ];
  const customizeListElements = [];

  const result = processParts(parts, customizeListElements, false, true, 2);
  console.log(result);

  expect(result).toEqual([
    { text: "Home", href: "/", isLast: false, showTruncatedButton: false },
    { text: "Path1", href: "/path1", isLast: true, showTruncatedButton: true },
  ]);
});

test("processParts - customization options", () => {
  const parts = [
    { text: "Home", href: "/", isLast: false },
    { text: "Path1", href: "/path1", isLast: true },
  ];
  const customizeListElements = [{ index: 1, remove: true }];

  const result = processParts(parts, customizeListElements, false, false, 2);

  expect(result).toEqual([
    { text: "Home", href: "/", isLast: false, showTruncatedButton: false },
  ]);
});
