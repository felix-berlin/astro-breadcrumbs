import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap'
import matomo from 'astro-matomo';

// https://astro.build/config
export default defineConfig({
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact(),
		// Enable React for the Algolia search component.
		react(),
		mdx(),
		sitemap(),
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
	site: `https://docs.astro-breadcrumbs.kasimir.dev`,
});
