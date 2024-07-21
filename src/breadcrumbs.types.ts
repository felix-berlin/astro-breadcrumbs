export interface BreadcrumbsProps {
  indexText?: string;
  mainBemClass?: string;
  ariaLabel?: string;
  crumbs?: Array<BreadcrumbItem>;
  customizeLinks?: Array<CustomizeElement>;
  customizeListElements?: Array<CustomizeElement>;
  customizeList?: AddAttributes;
  customizeNav?: AddAttributes;
  schemaJsonScript?: boolean;
  ellipsisAriaLabel?: string;
  truncated?: boolean;
  linkTextFormat?: "lower" | "capitalized" | "sentence";
  customBaseUrl?: string;
  excludeCurrentPage?: boolean;
  debug?: boolean;
}

export interface CustomizeElement extends AddAttributes {
  index?: number | "last";
}

export interface AddAttributes {
  [key: string]: any;
}

export interface BreadcrumbItem {
  text: string;
  href: string;
  "aria-current"?: string;
}

export type MergedParts = CustomizeElement & BreadcrumbItem;
