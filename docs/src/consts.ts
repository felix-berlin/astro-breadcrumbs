export const SITE = {
	title: 'Astro Breadcrumbs - Documentation',
	description: 'Well configurable breadcrumb component for Astro.js',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://raw.githubusercontent.com/felix-berlin/astro-breadcrumbs/main/logo-color.svg',
		alt:
			'astro-breadcrumb logo',
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
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Start Here': [
			{ text: 'Introduction', link: 'en/introduction' },
		],
		'Configuration': [
			{ text: 'Properties', link: 'en/properties' },
			{ text: 'Slots', link: 'en/slots' },
			{ text: 'Styles', link: 'en/styles' }
		],
	},
};
