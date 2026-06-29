import type { BreadcrumbItem } from "../breadcrumbs.types.ts";

const toAbsoluteId = (href: string, baseUrl: URL | string): string =>
  new URL(href.replace(/\.html$/, ""), baseUrl).href;

export const schemaJson = (
  parts: BreadcrumbItem[],
  baseUrl: URL | string,
): string =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: parts.map((part, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": toAbsoluteId(part.href, baseUrl),
        name: part.text,
      },
    })),
  });
