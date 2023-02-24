export const SITE = {
	title: 'Astro Breadcrumbs - Documentation',
	description: 'Well configurable breadcrumb component for Astro.js',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://raw.githubusercontent.com/felix-berlin/astro-breadcrumbs/main/logo-color.svg',
		alt: 'astro-breadcrumb logo',
	},
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/felix-berlin/astro-breadcrumbs/tree/main/docs`;

export const COMMUNITY_INVITE_URL = `https://github.com/felix-berlin/astro-breadcrumbs/discussions`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME,
	appId: import.meta.env.PUBLIC_ALGOLIA_APP_ID,
	apiKey: import.meta.env.PUBLIC_ALGOLIA_API_KEY,
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Start Here': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Installation', link: 'en/installation' },
		],
		'Configuration': [
			{ text: 'Properties', link: 'en/properties' },
			{ text: 'Slots', link: 'en/slots' },
		],
		'Styling': [
			{ text: 'Setup SCSS Config', link: 'en/setup-scss-config' },
			{ text: 'SCSS Style API', link: 'en/scss-api' }
		],
	},
};
