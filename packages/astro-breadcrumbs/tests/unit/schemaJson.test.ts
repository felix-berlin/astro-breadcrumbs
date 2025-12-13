import { test } from "vitest";
import { schemaJson } from "../../src/lib/structuredData";
import type { BreadcrumbItem } from "../../src/Breadcrumbs.astro";

test("schemaJson generates correct JSON-LD string", () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { href: "https://example.com/page1", text: "Page 1" },
    { href: "https://example.com/page2", text: "Page 2" },
  ];

  const expectedJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((part, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": part.href,
        name: part.text,
      },
    })),
  });

  const result = schemaJson(breadcrumbItems);

  expect(result).toBe(expectedJson);
});
