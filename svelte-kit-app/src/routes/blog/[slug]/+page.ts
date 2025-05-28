import type { PageLoad } from './$types';
import type { Post, User } from '../+page.js';

export interface BlogPostPageData {
	post: Post | null;
	author: User | null;
	error?: string;
}

export const load: PageLoad = async ({ params, fetch }): Promise<BlogPostPageData> => {
	const postId = parseInt(params.slug);
	
	if (isNaN(postId)) {
		return {
			post: null,
			author: null,
			error: 'Invalid post ID'
		};
	}

	try {
		const [postResponse, usersResponse] = await Promise.all([
			fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
			fetch('https://jsonplaceholder.typicode.com/users')
		]);

		if (!postResponse.ok) {
			if (postResponse.status === 404) {
				return {
					post: null,
					author: null,
					error: 'Post not found'
				};
			}
			throw new Error('Failed to fetch post');
		}

		if (!usersResponse.ok) {
			throw new Error('Failed to fetch users');
		}

		const post: Post = await postResponse.json();
		const users: User[] = await usersResponse.json();
		const author = users.find(user => user.id === post.userId) || null;

		return {
			post,
			author
		};
	} catch (error) {
		console.error('Failed to fetch blog post:', error);
		return {
			post: null,
			author: null,
			error: 'Failed to load blog post'
		};
	}
};
