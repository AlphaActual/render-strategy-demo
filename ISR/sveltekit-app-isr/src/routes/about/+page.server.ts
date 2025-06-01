import type { Config } from '@sveltejs/adapter-vercel';

// ISR Configuration for about page
export const config: Config = {
	isr: {
		// Revalidate every hour (3600 seconds) 
		expiration: 3600
	}
};

// Optional: Add a load function to provide server-side data
export async function load() {
	return {
		timestamp: new Date().toISOString(),
		lastUpdated: 'Page regenerated via ISR'
	};
}
