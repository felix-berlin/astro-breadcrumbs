import { describe, expect, test } from "vitest";
import { schemaJson } from "../../src/lib/structuredData";
import type { BreadcrumbItem } from "../../src/Breadcrumbs.astro";

const BASE = "https://example.com";

const makeExpected = (items: { id: string; name: string }[]) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ id, name }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@id": id, name },
    })),
  });

describe("schemaJson", () => {
  test("generates correct JSON-LD with absolute hrefs", () => {
    const parts: BreadcrumbItem[] = [
      { href: "https://example.com/page1", text: "Page 1" },
      { href: "https://example.com/page2", text: "Page 2" },
    ];

    expect(schemaJson(parts, BASE)).toBe(
      makeExpected([
        { id: "https://example.com/page1", name: "Page 1" },
        { id: "https://example.com/page2", name: "Page 2" },
      ]),
    );
  });

  test("resolves relative hrefs to absolute URLs", () => {
    const parts: BreadcrumbItem[] = [
      { href: "/", text: "Home" },
      { href: "/books", text: "Books" },
      { href: "/books/fiction", text: "Fiction" },
    ];

    expect(schemaJson(parts, BASE)).toBe(
      makeExpected([
        { id: "https://example.com/", name: "Home" },
        { id: "https://example.com/books", name: "Books" },
        { id: "https://example.com/books/fiction", name: "Fiction" },
      ]),
    );
  });

  test("strips .html suffix from @id", () => {
    const parts: BreadcrumbItem[] = [
      { href: "/about.html", text: "About" },
      { href: "https://example.com/contact.html", text: "Contact" },
    ];

    expect(schemaJson(parts, BASE)).toBe(
      makeExpected([
        { id: "https://example.com/about", name: "About" },
        { id: "https://example.com/contact", name: "Contact" },
      ]),
    );
  });

  test("accepts URL object as baseUrl", () => {
    const parts: BreadcrumbItem[] = [{ href: "/about", text: "About" }];
    const url = new URL("https://example.com/current/page");

    expect(schemaJson(parts, url)).toBe(
      makeExpected([{ id: "https://example.com/about", name: "About" }]),
    );
  });
});
