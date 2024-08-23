import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import matomo from "astro-matomo";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.astro-breadcrumbs.kasimir.dev",
  integrations: [
    starlight({
      title: "Astro Breadcrumbs",
      social: {
        github: "https://github.com/felix-berlin/astro-breadcrumbs",
      },
      editLink: {
        baseUrl:
          "https://github.com/felix-berlin/astro-breadcrumbs/tree/main/docs/",
      },
      logo: {
        light: "./src/assets/logo-light-simple.svg",
        dark: "./src/assets/logo-dark-simple.svg",
      },
      customCss: [
        "./node_modules/astro-breadcrumbs/src/breadcrumbs.css",
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Start here",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Installation", link: "/start-here/getting-started/" },
            { label: "Demo", link: "/start-here/demo/" },
          ],
        },
        {
          label: "Configuration",
          items: [
            { label: "Properties", link: "/configuration/properties/" },
            { label: "Slots", link: "/configuration/slots/" },
          ],
        },
        {
          label: "Styling",
          items: [
            { label: "Setup SCSS Config", link: "/styling/setup-scss-config/" },
            { label: "SCSS Style API", link: "/styling/scss-api/" },
            { label: "CSS Styles", link: "/styling/css-api/" },
          ],
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
      plugins: [starlightLinksValidator()],
      components: {
        Footer: "./src/components/Footer.astro",
      },
    }),
    matomo({
      enabled: import.meta.env.PROD,
      host: "https://analytics.webshaped.de/",
      siteId: 10,
      debug: false,
      heartBeatTimer: 5,
      disableCookies: true,
      preconnect: true,
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
