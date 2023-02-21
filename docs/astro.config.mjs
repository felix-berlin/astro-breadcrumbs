import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact(),
		// Enable React for the Algolia search component.
		react(),
		mdx(),
		sitemap(),
	],
	site: `https://docs.astro-breadcrumbs.kasimir.dev`,
});
