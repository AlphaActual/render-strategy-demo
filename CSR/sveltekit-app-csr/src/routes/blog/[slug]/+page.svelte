<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import type { BlogPostPageData, Comment } from './+page.js';
	import type { Post, User } from '../+page.js';
	interface Props {
		data: BlogPostPageData;
	}

	let { data }: Props = $props();
	const post: Post | null = data.post;
	const author: User | null = data.author;
	const comments: Comment[] = data.comments || [];
	// Format date (since JSONPlaceholder doesn't provide dates, we'll use a mock date)
	const formatDate = (date: Date): string => {
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(date);
	};

	let mockDate = $derived(post ? new Date(2024, 0, (post.id % 28) + 1) : new Date());
	let formattedDate = $derived(formatDate(mockDate));
</script>

<svelte:head>
	<title>{post?.title ? `${post.title} - SvelteKit App CSR` : 'Blog Post - SvelteKit App CSR'}</title>
	<meta
		name="description"
		content={post?.body?.substring(0, 160) || 'Read this amazing blog post'}
	/>	<meta property="og:title" content={post?.title ? `${post.title} - SvelteKit App CSR` : 'Blog Post - SvelteKit App CSR'} />
	<meta property="og:description" content={post?.body?.substring(0, 160) || 'Read this amazing blog post'} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post?.title ? `${post.title} - SvelteKit App CSR` : 'Blog Post - SvelteKit App CSR'} />
	<meta name="twitter:description" content={post?.body?.substring(0, 160) || 'Read this amazing blog post'} />
</svelte:head>

<div class="py-8">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Back Navigation -->
		<div class="mb-8">
			<a
				href="/blog"
				class="group inline-flex items-center rounded-lg bg-blue-50 px-4 py-2 font-medium text-blue-600 transition-all duration-300 hover:bg-blue-100 hover:text-blue-800"
			>
				<svg
					class="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Back to Blog
			</a>
		</div>
		
		{#if post && author}
			<!-- Article -->
			<article class="overflow-hidden rounded-xl bg-white shadow-xl">
				<!-- Hero Image -->
				<div class="relative h-64 overflow-hidden sm:h-80 lg:h-96">
					<Image
						src="https://picsum.photos/1200/600"
						seed="hero-{post.id}"
						alt="Hero image for {post.title}"
						class="h-full w-full object-cover"
						fit="cover"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
					></div>

					<!-- Hero Content Overlay -->
					<div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
						<div class="mb-4">
							<span
								class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 backdrop-blur-sm"
							>
								Article
							</span>
						</div>
						<h1 class="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
							{post.title}
						</h1>
					</div>
				</div>

				<!-- Article Header -->
				<div class="px-6 py-8 sm:px-8">
					<!-- Author Info -->
					<div class="mb-8 flex items-center">
						<div class="flex-shrink-0">
							<Image
								src="https://picsum.photos/60/60"
								seed="user-{author.id}"
								alt="{author.name} avatar"
								class="ring-3 h-14 w-14 rounded-full object-cover ring-blue-100"
								fit="cover"
							/>
						</div>						<div class="ml-4 flex-1">
							<div class="flex flex-col gap-2">
								<div>
									<p class="text-lg font-semibold text-gray-900">{author.name}</p>
									<div class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2 text-sm text-gray-500">
										<span>@{author.username}</span>
										<span class="hidden sm:inline text-gray-300">•</span>
										<span>{formattedDate}</span>
										<span class="hidden sm:inline text-gray-300">•</span>
										<span>{Math.ceil(post.body.split(' ').length / 200)} min read</span>
									</div>
								</div>
								<!-- Social Share Buttons -->
								<div class="hidden items-center space-x-2 sm:flex">
									<button
										class="rounded-full p-2 text-gray-400 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
										aria-label="Share on Twitter"
									>
										<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
											/>
										</svg>
									</button>
									<button
										class="rounded-full p-2 text-gray-400 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
										aria-label="Share on Facebook"
									>
										<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
											/>
										</svg>
									</button>
									<button
										class="rounded-full p-2 text-gray-400 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
										aria-label="Share on LinkedIn"
									>
										<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>

					<!-- Article Content -->
					<div class="max-w-none">
						<div class="whitespace-pre-line text-lg leading-relaxed text-gray-700">
							{post.body}
						</div>
					</div>

					<!-- Tags Section -->
					<div class="mt-8 border-t border-gray-200 pt-6">
						<div class="flex flex-wrap gap-2">
							<span
								class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
							>
								Technology
							</span>
							<span
								class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
							>
								Tutorial
							</span>
							<span
								class="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800"
							>
								Development
							</span>
						</div>
					</div>

					<!-- Author Details Card -->
					<div class="mt-12 border-t pt-8">
						<div
							class="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-6"
						>
							<h3 class="mb-4 text-lg font-semibold text-gray-900">About the Author</h3>
							<div class="flex items-start space-x-4">
								<div class="flex-shrink-0">
									<Image
										src="https://picsum.photos/80/80"
										seed="user-{author.id}"
										alt="{author.name} profile picture"
										class="ring-3 h-16 w-16 rounded-full object-cover shadow-lg ring-white"
										fit="cover"
									/>
								</div>
								<div class="flex-1">
									<h4 class="text-lg font-semibold text-gray-900">{author.name}</h4>
									<p class="mb-2 font-medium text-blue-600">@{author.username}</p>										<div class="space-y-2 text-sm text-gray-600">
											<div class="flex items-center">
												<svg
													class="mr-2 h-4 w-4 text-gray-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
													/>
												</svg>
											<span class="break-all">{author.email}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>				<!-- Comments Section -->
				<div class="border-t bg-gradient-to-b from-gray-50 to-white px-6 py-8 sm:px-8">
					<h3 class="mb-6 text-2xl font-bold text-gray-900">
						Comments ({comments?.length || 0})
					</h3>

					{#if comments && comments.length > 0}
						<div class="space-y-6">
							{#each comments as comment (comment.id)}
								<div
									class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
								>
									<div class="flex items-start space-x-4">
										<div class="flex-shrink-0">
											<Image
												src="https://picsum.photos/50/50"
												seed="comment-{comment.id}"
												alt="{comment.name} avatar"
												class="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
												fit="cover"
											/>
										</div>
										<div class="flex-1">
											<div class="flex flex-col gap-1 mb-3">
												<h4 class="font-semibold text-gray-900">{comment.name}</h4>												<div class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center text-sm text-gray-500 gap-1 sm:gap-2">
													<span class="break-all">{comment.email}</span>
													<span class="hidden sm:inline text-gray-300">•</span>
													<span class="text-gray-400"
														>{Math.floor(Math.random() * 24) + 1}h ago</span
													>
												</div>
											</div>
											<p class="leading-relaxed text-gray-700">{comment.body}</p>

											<!-- Comment Actions -->
											<div class="mt-4 flex items-center space-x-4">
												<button
													class="flex items-center text-sm text-gray-500 transition-colors duration-200 hover:text-blue-600"
												>
													<svg
														class="mr-1 h-4 w-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
														/>
													</svg>
													Like
												</button>
												<button
													class="flex items-center text-sm text-gray-500 transition-colors duration-200 hover:text-blue-600"
												>
													<svg
														class="mr-1 h-4 w-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
														/>
													</svg>
													Reply
												</button>
											</div>
										</div>
									</div>
								</div>
							{/each}
						</div>
					{:else}
						<div class="py-8 text-center">
							<div class="mb-4 text-gray-400">
								<svg class="mx-auto h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
							</div>
							<p class="text-gray-600">No comments yet. Be the first to comment!</p>
						</div>
					{/if}
				</div>
			</article>

			<!-- Related Posts / Navigation -->
			<div class="mt-12">
				<div
					class="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8"
				>
					<h3 class="mb-6 text-center text-lg font-semibold text-gray-900">Continue Reading</h3>
					<div class="flex flex-col justify-between gap-4 sm:flex-row">
						{#if post.id > 1}
							<a
								href="/blog/{post.id - 1}"
								class="group relative flex-1 transform overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
							>
								<div
									class="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								></div>
								<div class="relative z-10 flex items-center">
									<div
										class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 transition-colors duration-300 group-hover:bg-blue-200"
									>
										<svg
											class="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:-translate-x-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 19l-7-7 7-7"
											/>
										</svg>
									</div>
									<div class="ml-4 flex-1">
										<div class="mb-1 text-sm font-medium text-blue-600">Previous Article</div>
										<div
											class="font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700"
										>
											Post {post.id - 1}
										</div>
										<div class="mt-1 text-sm text-gray-500">← Go back in the series</div>
									</div>
								</div>
							</a>
						{:else}
							<div class="flex flex-1 items-center justify-center p-6">
								<div class="text-center text-gray-400">
									<div
										class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100"
									>
										<svg
											class="h-6 w-6 text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 19l-7-7 7-7"
											/>
										</svg>
									</div>
									<div class="text-sm font-medium">You're at the beginning!</div>
								</div>
							</div>
						{/if}
						{#if post.id < 100}
							<a
								href="/blog/{post.id + 1}"
								class="group relative flex-1 transform overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
							>
								<div
									class="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								></div>
								<div class="relative z-10 flex items-center justify-end text-right">
									<div class="mr-4 flex-1">
										<div class="mb-1 text-sm font-medium text-blue-600">Next Article</div>
										<div
											class="font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700"
										>
											Post {post.id + 1}
										</div>
										<div class="mt-1 text-sm text-gray-500">Continue the journey →</div>
									</div>
									<div
										class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 transition-colors duration-300 group-hover:bg-blue-200"
									>
										<svg
											class="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:translate-x-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</div>
								</div>
							</a>
						{:else}
							<div class="flex flex-1 items-center justify-center p-6">
								<div class="text-center text-gray-400">
									<div
										class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100"
									>
										<svg
											class="h-6 w-6 text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</div>
									<div class="text-sm font-medium">You've reached the end!</div>
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
