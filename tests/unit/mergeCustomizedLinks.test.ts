import { mergeCustomizedLinks } from "../../src/lib/generateCrumbs.ts";
import { test, expect } from "vitest";

test("mergeCustomizedLinks - empty customizeLinks array", () => {
  const parts = [{ text: "Home", href: "/" }];
  const customizeLinks = [];
  const result = mergeCustomizedLinks(parts, customizeLinks);
  expect(result).toEqual([{ text: "Home", href: "/" }]);
});

test("mergeCustomizedLinks - customizeLinks with specified index", () => {
  const parts = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
  ];
  const customizeLinks = [{ index: 1, text: "About Us" }];
  const result = mergeCustomizedLinks(parts, customizeLinks);
  expect(result[1].text).toEqual("About Us");
});

test("mergeCustomizedLinks - customizeLinks with is-last property", () => {
  const parts = [
    { text: "Home", href: "/" },
    { text: "Contact", href: "/contact" },
  ];
  const customizeLinks = [{ index: "last", text: "Get in Touch" }];
  const result = mergeCustomizedLinks(parts, customizeLinks);
  expect(result[result.length - 1].text).toEqual("Get in Touch");
});

test("mergeCustomizedLinks - customizeLinks with out-of-bounds index", () => {
  const parts = [{ text: "Home", href: "/" }];
  const customizeLinks = [{ index: 2, text: "Non-existent" }];
  const result = mergeCustomizedLinks(parts, customizeLinks);
  expect(result).toEqual([{ text: "Home", href: "/" }]);
});

test("mergeCustomizedLinks - customizeLinks modifying multiple items", () => {
  const parts = [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
  ];
  const customizeLinks = [
    { index: 0, text: "Start" },
    { index: "last", text: "Reach Us" },
  ];
  const result = mergeCustomizedLinks(parts, customizeLinks);
  expect(result[0].text).toEqual("Start");
  expect(result[result.length - 1].text).toEqual("Reach Us");
});

test("mergeCustomizedLinks - customizeLinks with index 'last'", () => {
  const parts = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" },
  ];
  const customizeLinks = [{ index: "last", text: "Get in Touch" }];
  const result = mergeCustomizedLinks(parts, customizeLinks);
  expect(result[result.length - 1].text).toEqual("Get in Touch");
});

test("mergeCustomizedLinks - customizeLinks with negative index", () => {
  const parts = [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/blog" },
  ];
  const customizeLinks = [{ index: -1, text: "Latest Posts" }];
  const result = mergeCustomizedLinks(parts, customizeLinks);
  // Assuming negative index is treated as invalid and ignored
  expect(result).toEqual(parts);
});

test("mergeCustomizedLinks - customizeLinks with index 'last' and multiple modifications", () => {
  const parts = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" },
  ];
  const customizeLinks = [
    { index: 1, text: "Our Story" },
    { index: "last", text: "Reach Out" },
  ];
  const result = mergeCustomizedLinks(parts, customizeLinks);
  expect(result[1].text).toEqual("Our Story");
  expect(result[result.length - 1].text).toEqual("Reach Out");
});
