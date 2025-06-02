import adapter from '@sveltejs/adapter-vercel'; // Use Vercel adapter for Vercel deployment
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use Vercel adapter for proper SSR deployment on Vercel
		adapter: adapter()
	}
};

export default config;
