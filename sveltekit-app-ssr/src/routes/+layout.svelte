<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import ogImage from '$lib/images/og-image.jpg';
	import { base } from '$app/paths';
	import '../app.css';

	let { children } = $props();
	
	// App configuration
	const APP_NAME = 'SvelteKit App SSR';
	const APP_DESCRIPTION = 'A SvelteKit application demonstrating SSR';
	
	const isErrorPage = $derived($page.url.pathname.startsWith('/error') || $page.status >= 400);
	
	// Ensure absolute URL for og:image (required for social media)
	const absoluteOgImage = $derived(
		typeof ogImage === 'string' && ogImage.startsWith('http') 
			? ogImage 
			: `${$page.url.origin}${base}${ogImage}`
	);
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
	<meta property="og:image" content={absoluteOgImage} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="SvelteKit App Preview" />
	
	<!-- Twitter Card meta tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={APP_NAME} />
	<meta name="twitter:description" content={APP_DESCRIPTION} />
	<meta name="twitter:image" content={absoluteOgImage} />
	<meta name="twitter:image:alt" content="SvelteKit App Preview" />
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
