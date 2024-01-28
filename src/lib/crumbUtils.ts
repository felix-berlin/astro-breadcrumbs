import type { BreadcrumbItem, BreadcrumbsProps } from "../Breadcrumbs.astro";

/**
 * Log a warning message to the console.
 *
 * @param message
 */
export const coloredWarnLog = (message: string) => {
  console.warn(
    "\x1b[43m",
    "Astro Breadcrumbs",
    "\x1b[0m",
    "\x1b[33m",
    message,
    "\x1b[0m",
  );
};

/**
 * Check if a URL is valid.
 *
 * @param url
 */
export const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  if (!URL.canParse(url)) return false;

  const urlToCheck = new URL(url);

  const checkProtocol =
    urlToCheck.protocol === "http:" || urlToCheck.protocol === "https:";

  if (!checkProtocol) coloredWarnLog("Astro Breadcrumbs");

  return checkProtocol;
};

/**
 * Check if a URL ends with a slash.
 *
 * @param url
 */
export const endsWithSlash = (url: string | undefined): boolean => {
  if (!url) return false;

  return url.endsWith("/");
};

/**
 * Get the base URL.
 * If the base URL is not valid, return a relative URL.
 *
 * @returns string | undefined | null
 *
 */
export const getBaseUrl = (
  baseUrl: BreadcrumbsProps["baseUrl"],
  hasBaseUrl: number | undefined,
): string | undefined | null => {
  if (endsWithSlash(baseUrl) && hasBaseUrl) {
    coloredWarnLog(
      "Base URL should not have a trailing slash. Falling back to relative URL.",
    );

    return null;
  }
  if (!isValidUrl(baseUrl) && hasBaseUrl) {
    coloredWarnLog("Base URL is not valid. Falling back to relative URL.");

    return null;
  }

  return baseUrl;
};

/**
 * Get the first breadcrumb.
 */
export const getFirstCrumb = (
  trailingSlash: BreadcrumbsProps["trailingSlash"],
  baseUrl: BreadcrumbsProps["baseUrl"],
  hasBaseUrl: number | undefined,
): string => {
  if (trailingSlash && getBaseUrl(baseUrl, hasBaseUrl))
    return `${getBaseUrl(baseUrl, hasBaseUrl)}/`;

  return getBaseUrl(baseUrl, hasBaseUrl) ?? "/";
};
