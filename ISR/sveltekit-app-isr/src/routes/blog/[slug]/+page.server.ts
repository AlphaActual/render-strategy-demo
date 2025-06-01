import type { Config } from '@sveltejs/adapter-vercel';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

// ISR Configuration for individual blog posts
export const config: Config = {
	isr: {
		// Revalidate every 600 seconds (10 minutes) for individual posts
		expiration: 600
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

export interface Comment {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}

export const load: PageServerLoad = async ({ params, fetch }) => {
	const postId = parseInt(params.slug || '');
	
	if (isNaN(postId)) {
		throw error(404, 'Post not found');
	}

	try {
		// Fetch post, author, and comments data
		const [postResponse, usersResponse, commentsResponse] = await Promise.all([
			fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
			fetch('https://jsonplaceholder.typicode.com/users'),
			fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
		]);

		if (!postResponse.ok) {
			throw error(404, 'Post not found');
		}

		const post: Post = await postResponse.json();
		const users: User[] = await usersResponse.json();
		const comments: Comment[] = await commentsResponse.json();

		// Find the author
		const author = users.find(user => user.id === post.userId) || null;

		return {
			post,
			author,
			comments: comments.slice(0, 10), // Limit to 10 comments
			timestamp: new Date().toISOString()
		};
	} catch (err) {
		if (err && typeof err === 'object' && 'status' in err) {
			throw err; // Re-throw SvelteKit errors
		}
		console.error('Error fetching post data:', err);
		throw error(500, 'Failed to load post');
	}
};
