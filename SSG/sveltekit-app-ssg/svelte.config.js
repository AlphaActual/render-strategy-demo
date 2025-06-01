import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Static adapter for SSG (Static Site Generation)
		adapter: adapter({
			// Generate a fallback for single-page app mode
			fallback: undefined,
			// Precompress files
			precompress: false,
			// Strict mode
			strict: true
		})
	}
};

export default config;
