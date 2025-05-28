<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import '../app.css';

	let { children } = $props();

	const isErrorPage = $derived($page.url.pathname.startsWith('/error') || $page.status >= 400);
</script>

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
