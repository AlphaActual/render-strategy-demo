import type { Config } from '@sveltejs/adapter-vercel';

// ISR Configuration for homepage
export const config: Config = {
	isr: {
		// Revalidate every 60 seconds
		expiration: 60
	}
};

// Optional: Add a load function if you need server-side data
export async function load() {
	return {
		timestamp: new Date().toISOString()
	};
}
