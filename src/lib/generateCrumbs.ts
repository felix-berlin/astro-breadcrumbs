import { formatLinkText } from "./formatLinkText";
import type {
  BreadcrumbItem,
  BreadcrumbsProps,
  CustomizeLink,
  MergedParts,
} from "../breadcrumbs.types.ts";

type GenerateCrumbs = {
  crumbs: BreadcrumbsProps["crumbs"];
  paths: string[];
  indexText: BreadcrumbsProps["indexText"];
  hasTrailingSlash: boolean;
  linkTextFormat: BreadcrumbsProps["linkTextFormat"];
  customBaseUrl: BreadcrumbsProps["customBaseUrl"];
  excludeCurrentPage: BreadcrumbsProps["excludeCurrentPage"];
};

export const generateCrumbs = ({
  crumbs,
  paths,
  indexText,
  hasTrailingSlash,
  linkTextFormat,
  customBaseUrl,
  excludeCurrentPage,
}: GenerateCrumbs) => {
  /**
   * If crumbs are passed, use them.
   */
  if (crumbs && crumbs?.length > 0) {
    return crumbs;
  }

  const parts: Array<BreadcrumbItem> = [];
  const baseUrl = import.meta.env.BASE_URL;

  const basePartCount = baseUrl.split("/").filter((s) => s).length;

  const hasBaseUrl = baseUrl !== "/";

  /**
   * If both Astro baseUrl and customBaseUrl are present, remove the items from the paths array
   * that correspond with the Astro base url. They will be replaced with the customBaseUrl.
   */
  if (hasBaseUrl && customBaseUrl) {
    paths = paths.slice(basePartCount);
  }

  // Set the custom base url as the first item in the paths array
  if (customBaseUrl) {
    paths.unshift(customBaseUrl);
  }
  /**
   * Loop through the paths and create a breadcrumb item for each.
   */
  paths.forEach((text: string, index: number) => {
    /**
     * generateHref will create the href out of the paths array.
     * Example: ["path1", "path2"] => /path1/path2
     */
    const generateHref = `/${paths.slice(0, index + 1).join("/")}`;

    const addTrailingSlash = hasTrailingSlash
      ? `${generateHref}/`
      : generateHref;

    const finalHref = addTrailingSlash;

    // strip out any file extensions
    const matches = text.match(/^(.+?)(\.[a-z0-9]+)?\/?$/i);

    if (matches?.[2]) {
      text = matches[1];
    }

    parts.push({
      text: formatLinkText(text, linkTextFormat),
      href: finalHref,
    });
  });

  /**
   * If there is NO base URL, the index item is missing.
   * Add it to the start of the array.
   */
  if (!hasBaseUrl && !customBaseUrl) {
    parts.unshift({
      text: indexText!,
      href: baseUrl,
    });
  }

  /**
   * If there is no customBaseUrl and there is more than one part in the base URL,
   * we have to remove all those extra parts at the start.
   */
  if (!customBaseUrl && basePartCount > 1) {
    let toRemove = basePartCount - 1;
    while (toRemove--) {
      parts.shift();
    }
  }

  /**
   * If there is a base URL, the index item is present.
   * Modify the first item to use the index page text.
   */
  parts[0] = {
    text: indexText!,
    href: parts[0]?.href,
  };

  /**
   * If excludeCurrentPage is true, remove the last item from the parts array.
   */
  if (excludeCurrentPage) {
    parts.pop();
  }

  return parts;
};

/**
 * Merge the parts array with the customizeLinks array.
 */
export const mergeCustomizedLinks = (
  parts: BreadcrumbItem[],
  customizeLinks: CustomizeLink[],
) => {
  // Clone the parts array to avoid direct modification
  const clonedParts: MergedParts[] = parts.map((part) => ({ ...part }));
  const partsLength = clonedParts.length;

  customizeLinks.forEach((customLink, arrayIndex) => {
    let targetIndex =
      customLink.index !== undefined ? customLink.index : arrayIndex;

    if (customLink["is-last"]) {
      targetIndex = partsLength - 1;
    }

    // Validate targetIndex within clonedParts array bounds
    if (!(targetIndex >= 0 && targetIndex < partsLength)) {
      return;
    }

    // Merge customLink properties into the cloned target item
    Object.assign(clonedParts[targetIndex], customLink);

    // Clean up properties that shouldn't be in the final object
    delete clonedParts[targetIndex].index;
    delete clonedParts[targetIndex]["is-last"];
  });

  return clonedParts;
};
