import { formatLinkText } from "./formatLinkText";
import type {
  BreadcrumbItem,
  BreadcrumbsProps,
  CustomizeElement,
  MergedParts,
} from "../breadcrumbs.types.ts";
import { isLastElement, truncatedButtonVisible } from "../lib/helper.ts";

type GenerateCrumbs = {
  crumbs: BreadcrumbsProps["crumbs"];
  paths: string[];
  indexText: BreadcrumbsProps["indexText"];
  hasTrailingSlash: boolean;
  linkTextFormat: BreadcrumbsProps["linkTextFormat"];
  customBaseUrl: BreadcrumbsProps["customBaseUrl"];
};

export const generateCrumbs = ({
  crumbs,
  paths,
  indexText,
  hasTrailingSlash,
  linkTextFormat,
  customBaseUrl,
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

  return parts;
};

/**
 * Merge the parts array with the customizeLinks array.
 */
export const mergeCustomizedLinks = (
  parts: BreadcrumbItem[],
  customizeLinks: CustomizeElement[],
) => {
  // Clone the parts array to avoid direct modification
  const clonedParts: MergedParts[] = parts.map((part) => ({ ...part }));
  const partsLength = clonedParts.length;

  customizeLinks.forEach((customLink, arrayIndex) => {
    let targetIndex = arrayIndex;

    if (typeof customLink.index === "number") {
      targetIndex = customLink.index;
    } else if (customLink.index === "last") {
      targetIndex = partsLength - 1;
    }

    if (!(targetIndex >= 0 && targetIndex < partsLength)) {
      return;
    }

    Object.assign(clonedParts[targetIndex], customLink);

    delete clonedParts[targetIndex].index;
  });

  return clonedParts;
};

/**
 * Returns the list element to be customized.
 *
 * @param   {number}              index
 * @param   {boolean}             truncatedButtonShown
 * @param   {BreadcrumbsProps[]}  listElements
 */
export const customizeListElement = (
  index: number,
  truncatedButtonShown: boolean,
  listElements: BreadcrumbsProps["customizeListElements"] = [],
) => {
  if (truncatedButtonShown) {
    // Remove the item at index 1
    return listElements.filter((item, index) => index !== 1);
  }

  // Return the item by index
  return listElements[index];
};

/**
 * Processes the breadcrumb parts by adding additional properties and filtering based on customization options.
 *
 * @param {BreadcrumbItem[]} customizedParts - The array of breadcrumb items to be processed.
 * @param {CustomizeElement[]} customizeListElements - The array of customization options, each containing an index and a remove flag.
 * @param {boolean} excludeCurrentPage - Flag indicating whether to exclude the current page from the breadcrumbs.
 * @param {boolean} truncated - Flag indicating whether the breadcrumbs are truncated.
 * @param {number} pathLength - The length of the breadcrumb path.
 * @returns {BreadcrumbItem[]} The processed array of breadcrumb items.
 */
export const processParts = (
  customizedParts: BreadcrumbItem[],
  customizeListElements: CustomizeElement[],
  excludeCurrentPage: boolean,
  truncated: boolean,
  pathLength: number,
) => {
  const processedParts = customizedParts
    .map((part, index, array) => {
      // Determine if the current part is the last element in the array
      const isLast = isLastElement(index, array);

      // Determine if the truncated button should be visible for the current part
      const showTruncatedButton = truncatedButtonVisible(
        truncated,
        index,
        pathLength,
      );

      // Return the part with additional properties
      return { ...part, isLast, showTruncatedButton };
    })
    .filter((part, index) => {
      // Check if any item in customizeListElements has remove: true
      const shouldRemove = customizeListElements.some(
        (config) => config.remove && config.index === index,
      );

      // Filter out the part if it should be removed
      if (shouldRemove) {
        return false;
      }

      // Filter out the last element if excludeCurrentPage is true
      return !(excludeCurrentPage && part.isLast);
    });

  // Remove the separator for the last part if excludeCurrentPage is true
  if (excludeCurrentPage && processedParts.length > 0) {
    // Set the last element as the previous last element
    processedParts[processedParts.length - 1].isLast = true;
  }

  return processedParts;
};
