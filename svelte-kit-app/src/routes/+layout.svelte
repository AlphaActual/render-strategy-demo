<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen bg-gray-50">
	<!-- Header Component -->
	<Header />

	<!-- Page Content -->
	<main>
		{@render children()}
	</main>

	<!-- Footer Component -->
	<Footer />
</div>
