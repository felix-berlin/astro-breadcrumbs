import type { BreadcrumbItem, MergedParts } from "../types/breadcrumbs.types.ts";

export const debugInformation = (debug: boolean, parts: BreadcrumbItem[], customizedParts: MergedParts) => {
  if (!debug) {
    return;
  }
  console.log("__ autogenerated parts __");
  console.table(parts);
  console.log("__ customized parts __");
  console.table(customizedParts);
}