export interface BreadcrumbsProps {
  indexText?: string;
  mainBemClass?: string;
  ariaLabel?: string;
  crumbs?: BreadcrumbItem[];
  customizeLinks?: CustomizeElement[];
  customizeListElements?: CustomizeListElements[];
  customizeList?: AddAttributes;
  customizeNav?: AddAttributes;
  schemaJsonScript?: boolean;
  ellipsisAriaLabel?: string;
  truncated?: boolean;
  linkTextFormat?: "lower" | "capitalized" | "sentence";
  customBaseUrl?: string;
  excludeCurrentPage?: boolean;
  debug?: boolean;
  separatorAriaHidden?: boolean;
  id?: string;
}

export interface CustomizeElement extends AddAttributes {
  index?: number | "last";
}

export interface CustomizeListElements extends AddAttributes {
  index?: number | "last";
  remove?: boolean;
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
