import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: undefined,
  base: "/astro-breadcrumbs",
  trailingSlash: "never",
  integrations: [mdx()],
});
