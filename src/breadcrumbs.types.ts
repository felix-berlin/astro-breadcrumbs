export interface BreadcrumbsProps {
  indexText?: string;
  mainBemClass?: string;
  ariaLabel?: string;
  crumbs?: Array<BreadcrumbItem>;
  customizeLinks?: Array<CustomizeLink>;
  schemaJsonScript?: boolean;
  ellipsisAriaLabel?: string;
  truncated?: boolean;
  linkTextFormat?: "lower" | "capitalized" | "sentence";
  customBaseUrl?: string;
  excludeCurrentPage?: boolean;
  debug?: boolean;
}

export interface CustomizeLink {
  index?: number | "last";
  [key: string]: any; // Allows for any other properties
}

export interface BreadcrumbItem {
  text: string;
  href: string;
  "aria-current"?: string;
}

export type MergedParts = CustomizeLink & BreadcrumbItem;
