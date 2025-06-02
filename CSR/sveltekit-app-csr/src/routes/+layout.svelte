<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import '../app.css';

	let { children } = $props();
		// App configuration
	const APP_NAME = 'SvelteKit App CSR';
	const APP_DESCRIPTION = 'A SvelteKit application demonstrating CSR';
	const BASE_APP_URL = 'https://render-strategy-demo-sveltekit-app.vercel.app';
	
	const isErrorPage = $derived($page.url.pathname.startsWith('/error') || $page.status >= 400);
	
</script>

<svelte:head>
	<title>{APP_NAME}</title>
	<meta name="description" content={APP_DESCRIPTION} />
	<meta name="application-name" content={APP_NAME} />
	
	<!-- Open Graph meta tags -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={APP_NAME} />
	<meta property="og:title" content={APP_NAME} />
	<meta property="og:description" content={APP_DESCRIPTION} />
	<meta property="og:image" content="/og-image.jpg" />

	<!-- Twitter Card meta tags -->
	<meta name="twitter:card" content="summary_large_image" />
	
</svelte:head>

<div class="min-h-screen bg-gray-50">
	{#if !isErrorPage}
		<Header />
	{/if}

	<!-- Page Content -->
	<main>
		{@render children()}
	</main>

	{#if !isErrorPage}
		<Footer />
	{/if}
</div>
