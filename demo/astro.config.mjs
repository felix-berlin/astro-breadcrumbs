import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: "/astro-breadcrumbs",
  trailingSlash: "always",
  integrations: [mdx()],

  vite: {
    css: {
      preprocessorMaxWorkers: true,
    },
  },
});
