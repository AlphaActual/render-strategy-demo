import type { PageLoad } from './$types';

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
	error?: string;
}

export const load: PageLoad = async ({ fetch }): Promise<BlogPageData> => {
	try {
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
			posts,
			users
		};
	} catch (error) {
		console.error('Failed to fetch data:', error);
		return {
			posts: [],
			users: [],
			error: 'Failed to load blog posts'
		};
	}
};
