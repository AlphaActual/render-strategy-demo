<script lang="ts">
	import { page } from '$app/stores';

	// The error status and message are available in the page store
	$: status = $page.status;
	$: message = $page.error?.message || 'An unexpected error occurred.';
</script>

<svelte:head>
	<title>Error {status}</title>
</svelte:head>

<div class="flex min-h-screen flex-col bg-gray-50">
	<main class="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
		<div class="w-full max-w-md text-center">
			<div class="mb-8">
				<div class="mb-4 text-red-400">
					<svg class="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
						/>
					</svg>
				</div>
				<h1 class="mb-4 text-6xl font-bold text-gray-900">{status}</h1>
				<h2 class="mb-6 text-2xl font-semibold text-gray-700">
					{#if status === 404}
						Page Not Found
					{:else if status === 500}
						Internal Server Error
					{:else}
						Oops! Something went wrong
					{/if}
				</h2>
				<p class="mb-8 leading-relaxed text-gray-600">
					{message}
				</p>
			</div>

			<div class="space-y-4">
				<a
					href="/"
					class="inline-flex transform items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
				>
					<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
					Go Home
				</a>

				<div>
					<button
						on:click={() => history.back()}
						class="inline-flex items-center rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
					>
						<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						Go Back
					</button>
				</div>
			</div>
		</div>
	</main>
</div>
