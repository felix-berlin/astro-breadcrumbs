---
title: "Properties"
description: "Lorem ipsum dolor sit amet - 4"
---

## indexText

**Type:** `string`

**Default:** `Home`

Label of the first nav element.

```astro
<astro-breadcrumbs indexText="Home" />
```

## mainBemClass

**Type:** `string`

**Default:** `c-breadcrumbs`

BEM root.

```astro
<astro-breadcrumbs mainBemClass="bread-crumb" />
```

## ariaLabel

**Type:** `string`

**Default:** `breadcrumbs`

Controls the `aria-label` on the parent element (`<nav>`).

```astro
<astro-breadcrumbs ariaLabel="a structured list of pages" />
```

## crumbs

**Type:** `BreadcrumbItem[]`

**Default:** `[]`

This property expects an array of objects that describe the breadcrumbs "manually". There are two required key value pairs: `text: ''` and `href: ''`, every additional pair will add an attribute to this specific element. For example: `title: 'Part of the breadcrumb list'`, will add an title attribute. If set dynamic creation will be disabled and `indexText` will have no affect.

## schemaJsonScript

**Type:** `boolean`

**Default:** `true`

Enable or disable the [schema.org JSON-LD](https://schema.org/BreadcrumbList) script tag generation.

```astro
<astro-breadcrumbs schemaJsonScript={false} />
```
