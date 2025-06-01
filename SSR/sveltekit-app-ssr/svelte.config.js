import adapter from '@sveltejs/adapter-node'; // Use Node adapter for SSR
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use Node adapter for proper SSR deployment
		adapter: adapter(),
		
		// Ensure SSR is enabled globally
		ssr: {
			noExternal: []
		}
	}
};

export default config;
