# 🍞 Astro | Breadcrumbs

![npm](https://img.shields.io/npm/dm/astro-breadcrumbs?logo=npm&style=flat-square)
![npm](https://img.shields.io/npm/v/astro-breadcrumbs?logo=npm&style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/felix-berlin/astro-breadcrumbs?label=github&logo=github&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/felix-berlin/astro-breadcrumbs/Release?label=release&logo=github&style=flat-square)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/felix-berlin/astro-breadcrumbs?style=flat-square&logo=github)

A dynamic breadcrumbs component for [Astro](https://astro.build/).

---

This component comes with:

- ❎ No extra dependencies
- ❎ No styles
- ✅ CSS classes with BEM naming convention
- ✅ A11y support

## 📦 Installation

```bash
npm install astro-breadcrumbs
```

---

## 🛠️ Usage

```astro
---
import Breadcrumbs from 'astro-breadcrumbs';
---

<Breadcrumbs indexText={"Home"}>
  <span slot="separator" class="c-breadcrumbs__separator">
    // Add icon or text here
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
        <a href="/" class="c-breadcrumbs__link">Home</a>
        <span class="c-breadcrumbs__separator">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </li>
      <li class="c-breadcrumbs__crumb">
        <a href="/de" class="c-breadcrumbs__link">Category</a>
        <span class="c-breadcrumbs__separator">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </li>
      <li class="c-breadcrumbs__crumb">
        <a href="/de/datenschutz-checkbox-fuer-wordpress-kommentare-ohne-plugin" class="c-breadcrumbs__link">Astro is great</a>
      </li>
  </ol>
</nav>
```

---

## Props

| Props            |      Defaults       |  Required |
| ---------------- | :-----------------: | --------: |
| ``indexText``    |     ``'Home'``      | ``false`` |
| ``mainBemClass`` | ``'c-breadcrumbs'`` | ``false`` |

---

## Slots

| Slots         | Defaults | Required |
| ------------- | :------: | :------: |
| ``separator`` |    -     |    -     |
