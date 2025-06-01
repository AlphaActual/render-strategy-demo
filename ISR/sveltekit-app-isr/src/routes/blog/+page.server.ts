import type { Config } from '@sveltejs/adapter-vercel';
import type { PageServerLoad } from './$types';

// ISR Configuration for blog listing
export const config: Config = {
	isr: {
		// Revalidate every 300 seconds (5 minutes) for blog listing
		expiration: 300,
		// Allow query parameters like pagination
		allowQuery: ['page', 'limit']
	}
};

export interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

export interface User {
	id: number;
	name: string;
	email: string;
	username: string;
}

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		// Fetch posts and users data
		const [postsResponse, usersResponse] = await Promise.all([
			fetch('https://jsonplaceholder.typicode.com/posts'),
			fetch('https://jsonplaceholder.typicode.com/users')
		]);

		if (!postsResponse.ok || !usersResponse.ok) {
			throw new Error('Failed to fetch data');
		}

		const posts: Post[] = await postsResponse.json();
		const users: User[] = await usersResponse.json();

		return {
			posts: posts.slice(0, 20), // Limit to 20 posts for demo
			users,
			timestamp: new Date().toISOString()
		};
	} catch (error) {
		console.error('Error fetching blog data:', error);
		return {
			posts: [],
			users: [],
			timestamp: new Date().toISOString()
		};
	}
};
