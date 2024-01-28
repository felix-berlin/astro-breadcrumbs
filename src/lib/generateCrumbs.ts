import { getBaseUrl, getFirstCrumb } from "./crumbUtils.ts";
import type { BreadcrumbItem, BreadcrumbsProps } from "../Breadcrumbs.astro";

export const generateCrumbs = (
  baseUrl: string | undefined,
  crumbs: BreadcrumbsProps["crumbs"],
  paths: string[],
  hasBaseUrl: boolean,
  trailingSlash: BreadcrumbsProps["trailingSlash"],
  indexText: BreadcrumbsProps["indexText"],
) => {
  let parts: Array<BreadcrumbItem> = [];
  /**
   * If no crumbs are passed, generate them dynamically.
   */
  if (crumbs?.length === 0) {
    /**
     * Array of breadcrumb items.
     * The first item is the index page.
     */
    parts = [
      {
        text: indexText!,
        href: getFirstCrumb(trailingSlash, baseUrl, hasBaseUrl),
      },
    ];

    /**
     * Loop through the paths and create a breadcrumb item for each.
     */
    paths.forEach((text: string, index: number) => {
      const generateHref = `/${paths.slice(0, index + 1).join("/")}`;
      const chooseBaseUrl = getBaseUrl(baseUrl, hasBaseUrl)
        ? getBaseUrl(baseUrl, hasBaseUrl) + generateHref
        : generateHref;
      const addTrailingSlash = trailingSlash
        ? `${chooseBaseUrl}/`
        : chooseBaseUrl;
      const finalHref = addTrailingSlash;

      // strip out any file extensions
      const matches = text.match(/^(.+?)(\.[a-z0-9]+)?\/?$/i);

      if (matches && matches[2]) {
        text = matches[1];
      }

      parts = [
        ...parts,
        {
          text: text.replace(/[-_]/g, " "),
          href: finalHref,
        },
      ];
    });
  }

  /**
   * If crumbs are passed, use them.
   */
  if (crumbs && crumbs?.length > 0) {
    parts = crumbs;
  }

  return parts;
};
