<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	// The error status and message are available in the page store
	$: status = $page.status;
	$: message = $page.error?.message || 'An unexpected error occurred.';

	const goHome = () => {
		goto('/');
	};

	const goBack = () => {
		if (window.history.length > 1) {
			window.history.back();
		} else {
			goto('/');
		}
	};
</script>

<svelte:head>
	<title>Error {status}</title>
</svelte:head>

<div class="flex min-h-screen flex-col bg-gray-50">
	<main class="relative flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
		<!-- Background Elements -->
		<div class="absolute inset-0 overflow-hidden">
			<div class="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 blur-3xl"></div>
			<div class="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-purple-200/30 to-blue-200/30 blur-3xl"></div>
		</div>

		<div class="relative z-10 mx-auto max-w-2xl text-center">
			<!-- Error Code with Gradient -->
			<div class="mb-8">
				<h1 class="mb-4 text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-7xl lg:text-8xl">
					{status}
				</h1>
				<div class="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
			</div>

			<!-- Error Message -->
			<div class="mb-12">
				<h2 class="mb-4 text-2xl font-semibold text-primary100 sm:text-3xl lg:text-4xl">
					{#if status === 404}
						Page Not Found
					{:else}
						Something went wrong
					{/if}
				</h2>
				<p class="text-lg leading-relaxed text-primary80 sm:text-xl">
					{#if status === 404}
						The page you're looking for doesn't exist. Please check the URL or return to the homepage.
					{:else}
						{message || 'An unexpected error occurred. Please try again or return to the homepage.'}
					{/if}
				</p>
			</div>

			<!-- Action Buttons -->
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<button
					on:click={goHome}
					class="group inline-flex transform items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
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
				</button>
				<button
					on:click={goBack}
					class="rounded-lg border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
				>
					<svg class="mr-2 h-5 w-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					Go Back
				</button>
			</div>

			<!-- Additional Help Text -->
			<div class="mt-12 pt-8 border-t border-primary10">
				<p class="text-sm text-primary60">
					If this problem persists, please contact our support team.
				</p>
			</div>
		</div>
	</main>
</div>
