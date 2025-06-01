import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// Force SSR for this page - no prerendering
// This ensures true server-side rendering on each request
export const prerender = false;
export const ssr = true;

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

export interface BlogPageData {
	posts: Post[];
	users: User[];
}

export const load: PageLoad = async ({ fetch }): Promise<BlogPageData> => {
	try {
		const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
		
		if (!postsResponse.ok) {
			throw error(500, 'Failed to fetch posts from the API');
		}
		
		const posts: Post[] = await postsResponse.json();
		
		const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
		
		if (!usersResponse.ok) {
			throw error(500, 'Failed to fetch users from the API');
		}
		
		const users: User[] = await usersResponse.json();

		return {
			posts,
			users
		};
	} catch (err) {
		console.error('Failed to fetch data:', err);
		throw error(500, 'Failed to load blog posts');
	}
};
