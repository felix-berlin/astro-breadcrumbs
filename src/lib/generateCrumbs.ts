import type { BreadcrumbItem, BreadcrumbsProps } from "../Breadcrumbs.astro";

type GenerateCrumbs = {
  crumbs: BreadcrumbsProps["crumbs"];
  paths: string[];
  indexText: BreadcrumbsProps["indexText"];
  hasTrailingSlash: boolean;
};

export const generateCrumbs = ({
  crumbs,
  paths,
  indexText,
  hasTrailingSlash,
}: GenerateCrumbs) => {
  /**
   * If crumbs are passed, use them.
   */
  if (crumbs && crumbs?.length > 0) {
    return crumbs;
  }

  const parts: Array<BreadcrumbItem> = [];
  const baseUrl = import.meta.env.BASE_URL;
  const hasBaseUrl = baseUrl !== "/";

  /**
   * Loop through the paths and create a breadcrumb item for each.
   */
  paths.forEach((text: string, index: number) => {
    const generateHref = `/${paths.slice(0, index + 1).join("/")}`;
    const addTrailingSlash = hasTrailingSlash
      ? `${generateHref}/`
      : generateHref;
    const finalHref = addTrailingSlash;

    // strip out any file extensions
    const matches = text.match(/^(.+?)(\.[a-z0-9]+)?\/?$/i);

    if (matches && matches[2]) {
      text = matches[1];
    }

    parts.push({
      text: text,
      href: finalHref,
    });
  });

  /**
   * If there is NO base URL, the index item is missing.
   * Add it to the start of the array.
   */
  if (!hasBaseUrl) {
    parts.unshift({ text: indexText!, href: baseUrl });
  }

  /**
   * If there is a base URL, the index item is present.
   * Modify the first item to use the index page text.
   */
  parts[0] = {
    text: indexText!,
    href: parts[0]?.href,
  };

  return parts;
};
