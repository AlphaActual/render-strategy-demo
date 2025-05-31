import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Post, User } from '../+page.js';

export interface Comment {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}

export interface BlogPostPageData {
	post: Post;
	author: User | null;
	comments: Comment[];
}

export const load: PageLoad = async ({ params, fetch }): Promise<BlogPostPageData> => {
	const postId = parseInt(params.slug);
	
	if (isNaN(postId)) {
		throw error(400, 'Invalid post ID');
	}

	try {
		const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

		if (!postResponse.ok) {
			if (postResponse.status === 404) {
				throw error(404, 'Post not found');
			}
			throw error(500, 'Failed to fetch post');
		}

		const post: Post = await postResponse.json();

		const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');

		if (!usersResponse.ok) {
			throw error(500, 'Failed to fetch users');
		}

		const users: User[] = await usersResponse.json();

		const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
		const comments: Comment[] = commentsResponse.ok ? await commentsResponse.json() : [];
		
		const author = users.find(user => user.id === post.userId) || null;

		return {
			post,
			author,
			comments
		};
	} catch (err) {
		console.error('Failed to fetch blog post:', err);
		// If it's already a SvelteKit error, re-throw it
		if (err && typeof err === 'object' && 'status' in err) {
			throw err;
		}
		// Otherwise, throw a generic server error
		throw error(500, 'Failed to load blog post');
	}
};
