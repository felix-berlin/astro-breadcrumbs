# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Run unit tests with coverage
pnpm test:unit

# Run a single test file
pnpm vitest run tests/unit/generateCrumbs.test.ts

# Start the demo app for visual testing
pnpm --filter demo dev

# Compile SCSS to CSS (run from demo/)
pnpm --filter demo styles:build
pnpm --filter demo styles:watch

# Start the docs site
pnpm --filter astro-breadcrumbs-docs dev
```

## Architecture

This is a pnpm monorepo with three workspaces: the library itself (root), `demo/` (visual sandbox), and `docs/` (Starlight documentation site).

**Data flow in `src/Breadcrumbs.astro`** (the only exported component):
1. `generateCrumbs` builds the crumb array — either from `Astro.url.pathname` (dynamic mode) or from the `crumbs` prop (static/manual mode). Handles `BASE_URL`, `customBaseUrl`, and trailing slashes.
2. `mergeCustomizedLinks` applies per-index attribute overrides from `customizeLinks`.
3. `processParts` adds `isLast` / `showTruncatedButton` flags and filters out removed or excluded items.
4. The template renders `<BreadcrumbLink>` and `<BreadcrumbSeparator>` sub-components per crumb, plus an optional JSON-LD `<script>` tag via `schemaJson`.

**Client-side truncation** (`src/lib/truncated.ts`): A `Truncated` custom element (`<astro-breadcrumbs>`) uses `ResizeObserver` to toggle `is-truncated` on the nav when crumbs overflow their container. The ellipsis button removes the class on click.

**Logic is isolated from the template** to keep `src/lib/` functions unit-testable without a full Astro render:
- `src/lib/generateCrumbs.ts` — crumb generation, merging, processing
- `src/lib/structuredData.ts` — JSON-LD schema output
- `src/lib/formatLinkText.ts` — text casing transforms
- `src/lib/truncated.ts` — client-side custom element
- `src/lib/helper.ts` — small utilities (`isLastElement`, `truncatedButtonVisible`)

**Types**: all component props are defined in `src/breadcrumbs.types.ts` (`BreadcrumbsProps`, `BreadcrumbItem`, `CustomizeElement`, etc.). Default prop values are set in `Breadcrumbs.astro`'s destructuring, not in the type file.

## Testing Patterns

Tests use `vitest` + `astro/container`. Component rendering tests follow this pattern:

```typescript
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Breadcrumbs from "../../src/Breadcrumbs.astro";

const container = await AstroContainer.create();
const render = await container.renderToString(Breadcrumbs, { props, slots });
expect(render).toContain("...");
```

Logic utility functions are tested directly without a container (e.g., `generateCrumbs.test.ts`, `formatLinkText.test.ts`).

The `tests/unit/setupTestEnvironmentCompatibility.ts` file patches `TextEncoder` to fix a jsdom/vitest incompatibility — do not remove it.

## Styling

- BEM naming convention with `c-breadcrumbs` as the default root class (overridable via `mainBemClass` prop).
- Source: `src/breadcrumbs.scss` and `src/breadcrumbs-dist.scss`
- Compiled output: `src/breadcrumbs.css` (compiled via `pnpm --filter demo styles:build`)
- Users can import either the SCSS (for customization via variables) or the CSS (for CSS custom properties).

## Releases

Uses `semantic-release` triggered by `pnpm release`. Commit messages must follow Conventional Commits for the release to be categorized correctly.
