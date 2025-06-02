import adapter from '@sveltejs/adapter-static'; // Use static adapter for CSR
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use static adapter for pure CSR deployment
		adapter: adapter({
			// Pages will be generated as a single page application
			fallback: 'index.html'
		})
	}
};

export default config;
