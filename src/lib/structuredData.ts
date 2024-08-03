import type { BreadcrumbItem } from "../breadcrumbs.types.ts";

/**
 * Generates a JSON-LD string for the BreadcrumbList schema.
 *
 * @param   {BreadcrumbItem[]}  parts
 *
 * @return  {string}
 */
export const schemaJson = (parts: BreadcrumbItem[]): string =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: parts.map((part, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": part.href,
        name: part.text,
      },
    })),
  });
