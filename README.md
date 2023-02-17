# 🍞 Astro | Breadcrumbs

![npm](https://img.shields.io/npm/dm/astro-breadcrumbs?logo=npm&style=flat-square)
![npm](https://img.shields.io/npm/v/astro-breadcrumbs?logo=npm&style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/felix-berlin/astro-breadcrumbs?label=github&logo=github&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/felix-berlin/astro-breadcrumbs/release.yml?label=release&logo=github&style=flat-square)
![GitHub file size in bytes](https://img.shields.io/github/size/felix-berlin/astro-breadcrumbs/src/Breadcrumbs.astro?label=component%20size&logo=astro&style=flat-square)

Well configurable breadcrumb component for [Astro](https://astro.build/).

> Create breadcrumbs completely dynamically or specify exactly how they should look.
---

This component comes with:

- ❎ No extra dependencies
- ❎ No styles
- ✅ CSS classes with BEM naming convention
- ✅ A11y support
- ✅ Structured data [schema.org JSON-LD](https://schema.org/BreadcrumbList) script tag support

## 📦 Installation

```bash
npm install astro-breadcrumbs
```

---

## 🛠️ Usage

## Props

| Props              |       Types        |     Defaults      | Description                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | :----------------: | :---------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `indexText`        |      `string`      |     `'Home'`      | Label of the first nav element                                                                                                                                                                                                                                                                                                                                                               |
| `mainBemClass`     |      `string`      | `'c-breadcrumbs'` | BEM root class                                                                                                                                                                                                                                                                                                                                                                               |
| `ariaLabel`        |      `string`      |  `'breadcrumbs'`  | Controls the `aria-label` on the parent element (`<nav>`)                                                                                                                                                                                                                                                                                                                                    |
| `crumbs`           | `BreadcrumbItem[]` |       `[]`        | This property expects an array of objects that describe the breadcrumbs "manually". There are two required key value pairs: `text: ''` and `href: ''`, every additional pair will add an attribute to this specific element. For example: `title: 'Part of the breadcrumb list'`, will add an title attribute. If set dynamic creation will be disabled and `indexText` will have no affect. |
| `schemaJsonScript` |     `boolean`      |      `true`       | Enable or disable the [schema.org JSON-LD](https://schema.org/BreadcrumbList) script tag generation. element                                                                                                                                                                                                                                                                                 |
---

## Slots

| Slots       | Defaults | Required | Description                                                                                                                                                                                                                                                                                          |
| ----------- | :------: | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `separator` |    -     |    -     | Add custom elements like svg's or icons after the `<a>` tag. With accessibility in mind you should consider to add a `aria-label=""` or `aria-hidden="true"` to your icon. This slot has no wrapping element so you have to add your own css class, for example: `class="c-breadcrumbs__separator"`. |
| `index`     |    -     |    -     | [The first element] If present `indexText` is deactivated                                                                                                                                                                                                                                            |

---

### Live examples

[Code Sandbox Example](https://codesandbox.io/p/sandbox/astro-breadcrumbs-kl3oj6?file=%2Fsrc%2Fpages%2Fen%2Fcategory%2Fexample%2Fmy-page.astro&selection=%5B%7B%22endColumn%22%3A8%2C%22endLineNumber%22%3A12%2C%22startColumn%22%3A8%2C%22startLineNumber%22%3A12%7D%5D)

Looking for more examples? Check out the [examples](https://github.com/felix-berlin/astro-breadcrumbs/blob/main/astro/src/pages/en/category/astro/page.astro) in the repository.

### Index page as text

```astro
---
import { Breadcrumbs } from "astro-breadcrumbs";
---

<Breadcrumbs indexText={"home"}>

  <span slot="separator" class="c-breadcrumbs__separator">
    <!-- Add icon or text here -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  </span>

</Breadcrumbs>

```

### Output

When the current page is `https://example.wtf/category/astro-is-great` the output will be:

```html
<nav aria-label="Breadcrumbs" class="c-breadcrumbs">
  <ol class="c-breadcrumbs__crumbs">

    <li class="c-breadcrumbs__crumb">
        <a href="/" class="c-breadcrumbs__link">home</a>

        <!-- (separator slot) -->
        <span class="c-breadcrumbs__separator">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </li>

      <li class="c-breadcrumbs__crumb">
        <a href="/category" class="c-breadcrumbs__link">category</a>

        <!-- (separator slot) -->
        <span class="c-breadcrumbs__separator">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </li>

      <li class="c-breadcrumbs__crumb">
        <a href="/category/astro-is-great" class="c-breadcrumbs__link">astro is great</a>
      </li>

  </ol>
</nav>
```

---

### Index page as custom element

```astro
---
import { Breadcrumbs } from "astro-breadcrumbs";
---

<Breadcrumbs>

  <span slot="index">
    <!-- Add custom element for the first element (home icon?) -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
  </span>

  <span slot="separator" class="c-breadcrumbs__separator">
    <!-- Add icon or text here (chevron-right icon?) -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  </span>

</Breadcrumbs>

```

### Output

When the current page is `https://example.wtf/category/astro-is-great` the output will be:

```html
<nav aria-label="Breadcrumbs" class="c-breadcrumbs">
  <ol class="c-breadcrumbs__crumbs">

    <li class="c-breadcrumbs__crumb">

        <a href="/" class="c-breadcrumbs__link">
          <!-- (index slot) Custom element (Home icon?) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </a>

        <!-- (separator slot) -->
        <span class="c-breadcrumbs__separator">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>

      </li>

      <li class="c-breadcrumbs__crumb">

        <a href="/category" class="c-breadcrumbs__link">category</a>

        <!-- (separator slot) -->
        <span class="c-breadcrumbs__separator">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>

      </li>

      <li class="c-breadcrumbs__crumb">

        <a href="/astro-is-great" class="c-breadcrumbs__link">astro is great</a>

      </li>

  </ol>
</nav>
```

<a href="https://www.buymeacoffee.com/felixberlin" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
