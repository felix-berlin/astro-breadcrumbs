import type { BreadcrumbsProps } from "../Breadcrumbs.astro";

/**
 * Find the separator in a slug.
 *
 * @param   {string}  slug
 *
 * @return  {string | undefined}
 */
const findSeparator = (slug: string) => {
  const separators = ["-", "_"];
  for (const separator of separators) {
    if (slug.includes(separator)) {
      return separator;
    }
  }
};

/**
 * Remove the separator from a slug and replace it with a space.
 *
 * @param   {string}  slug
 *
 * @return  {string}
 */
const unSlugTrimmed = (slug: string) => {
  const separator = findSeparator(slug);
  if (separator) {
    return slug.split(separator).join(" ").trim();
  }
  return slug;
};

/**
 * Format the link text based on the linkTextFormat prop.
 *
 * @return  {string}
 */
export const formatLinkText = (
  slug: string,
  format?: BreadcrumbsProps["linkTextFormat"],
) => {
  const slugToFormat = unSlugTrimmed(slug);

  switch (format) {
    case "lower":
      return slugToFormat.toLowerCase();

    case "capitalized":
      return slugToFormat
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" ");

    case "sentence":
      return slugToFormat.charAt(0).toUpperCase() + slugToFormat.slice(1);

    default:
      return slug;
  }
};
