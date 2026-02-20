# Astro Breadcrumbs Copilot Instructions

## Project Overview
`astro-breadcrumbs` is a highly configurable, zero-dependency breadcrumb component for Astro. It supports dynamic generation from URL paths, manual crumbs, custom styling (SCSS/CSS), and structured data (JSON-LD).

## Architecture & Structure
- **Monorepo Structure**:
  - `src/`: Core library source code.
  - `demo/`: Astro project for testing/demoing the component.
  - `docs/`: Documentation site (Starlight).
  - `tests/`: Unit tests.
- **Core Component**: `src/Breadcrumbs.astro` is the main entry point. It orchestrates logic and rendering.
- **Logic Separation**: Complex logic (crumb generation, formatting) is isolated in `src/lib/` (e.g., `generateCrumbs.ts`, `structuredData.ts`) to facilitate testing.
- **Styling**:
  - BEM naming convention (`c-breadcrumbs__crumbs`, etc.).
  - Source styles in `src/breadcrumbs.scss`.
  - Compiled CSS in `src/breadcrumbs.css`.

## Critical Workflows

### Testing
- **Unit Tests**: Run with `pnpm test:unit`.
- **Framework**: Uses `vitest` and `astro/container` for rendering components in isolation.
- **Pattern**:
  ```typescript
  import { experimental_AstroContainer as AstroContainer } from "astro/container";
  import Breadcrumbs from "../../src/Breadcrumbs.astro";

  // ... inside test
  const container = await AstroContainer.create();
  const render = await container.renderToString(Breadcrumbs, { props, slots });
  expect(render).toContain("...");
  ```

### Development
- **Demo App**: Use the `demo` workspace to test changes visually.
  - Run `pnpm --filter demo dev` (or `cd demo && pnpm dev`).
- **Style Compilation**: `demo` package handles SCSS compilation (`styles:build`, `styles:watch`).

## Conventions & Patterns

### Component Props
- Defined in `src/breadcrumbs.types.ts`.
- `BreadcrumbsProps` interface controls all configuration.
- Default values are set in `Breadcrumbs.astro` destructuring.

### Logic & Data Flow
- **`generateCrumbs`**: Central function in `src/lib/generateCrumbs.ts` that merges auto-generated paths with manual overrides (`crumbs` prop).
- **Slots**: Use `Astro.slots.has("separator")` to conditionally render classes or elements.
- **Environment**: Access `import.meta.env.BASE_URL` for base path handling.

### Accessibility (A11y)
- Always include `aria-label` for the nav element.
- Use `aria-current="page"` for the last breadcrumb.
- Ensure separators are hidden from screen readers if purely decorative.

## Key Files
- `src/Breadcrumbs.astro`: Main component.
- `src/lib/generateCrumbs.ts`: Core logic for crumb generation.
- `src/breadcrumbs.types.ts`: Type definitions.
- `tests/unit/Breadcrumbs.test.ts`: Component rendering tests.
