<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	// Mobile menu state
	let isMobileMenuOpen = $state(false);

	// Handle scrolling to contact section when page loads with hash
	onMount(() => {
		if (typeof window !== 'undefined') {
			if (window.location.hash === '#contact' && $page.url.pathname === '/') {
				setTimeout(() => {
					const contactSection = document.getElementById('contact');
					if (contactSection) {
						contactSection.scrollIntoView({ behavior: 'smooth' });
					}
				}, 100);
			}
		}
	});

	// Watch for route changes to handle contact hash
	$effect(() => {
		if ($page.url.pathname === '/' && $page.url.hash === '#contact') {
			setTimeout(() => {
				const contactSection = document.getElementById('contact');
				if (contactSection) {
					contactSection.scrollIntoView({ behavior: 'smooth' });
				}
			}, 100);
		}
	});

	// Toggle mobile menu
	const toggleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};

	// Close mobile menu when clicking outside or on nav links
	const closeMobileMenu = () => {
		isMobileMenuOpen = false;
	};

	// Handle contact navigation
	const handleContactClick = (e: Event) => {
		e.preventDefault();

		if ($page.url.pathname === '/') {
			// If on home page, just scroll to contact section
			const contactSection = document.getElementById('contact');
			if (contactSection) {
				contactSection.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			// If on another page, navigate to home page and then scroll to contact
			goto('/#contact');
		}

		closeMobileMenu();
	};

	// Navigation items
	const navigationItems = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Blog', href: '/blog', current: false },
		{ name: 'About', href: '/about', current: false },
		{ name: 'Contact', href: '#contact', current: false, isContact: true }
	];
</script>

<header class="border-primary10 sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur-md">
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex items-center">
				<a
					href="/"
					class="text-primary100 text-2xl font-bold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
					onclick={closeMobileMenu}				>
					SvelteKit CSR mode
				</a>
			</div>			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-4">
					{#each navigationItems as item}
						{#if item.isContact}
							<button
								onclick={handleContactClick}
								class="text-primary80 hover:text-primary100 hover:bg-primary05 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300"
							>
								{item.name}
							</button>
						{:else}
							<a
								href={item.href}
								class="text-primary80 hover:text-primary100 hover:bg-primary05 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300"
							>
								{item.name}
							</a>
						{/if}
					{/each}
					<button
						class="group inline-flex transform items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
					>
						Get Started
						<svg
							class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
					</button>
				</div>
			</div>
			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={toggleMobileMenu}
					class="text-primary80 hover:text-primary100 hover:bg-primary05 inline-flex items-center justify-center rounded-lg p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
					aria-expanded={isMobileMenuOpen}
					aria-controls="mobile-menu"
					aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
				>
					<span class="sr-only">Open main menu</span>
					<!-- Hamburger icon -->
					{#if !isMobileMenuOpen}
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{:else}
						<!-- Close icon -->
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Full Screen Mobile Menu -->
		<div
			id="mobile-menu"
			class="fixed inset-0 z-50 h-dvh transition-all duration-500 ease-out md:hidden"
			class:opacity-100={isMobileMenuOpen}
			class:scale-100={isMobileMenuOpen}
			class:opacity-0={!isMobileMenuOpen}
			class:scale-95={!isMobileMenuOpen}
			class:pointer-events-none={!isMobileMenuOpen}
			role="dialog"
			tabindex="0"
			aria-modal="true"
			aria-labelledby="mobile-menu-title"
			onclick={closeMobileMenu}
			onkeydown={(e) => {
				if (e.key === 'Escape') {
					closeMobileMenu();
				}
				// Allow closing with Enter or Space for accessibility
				if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
					closeMobileMenu();
				}
			}}
		>
			<!-- Menu Content with backdrop and blur -->
			<div
				class="fixed inset-0 flex h-dvh flex-col bg-white/95 backdrop-blur-lg"
				role="presentation"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(e) => {
					// Allow closing with Escape from inner div as well
					if (e.key === 'Escape') {
						closeMobileMenu();
					}
				}}
			>
				<!-- Header with close button -->
				<div class="flex items-center justify-between border-b border-gray-200/50 p-6">
					<h2
						id="mobile-menu-title"
						class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent"
					>
						Menu
					</h2>
					<button
						onclick={closeMobileMenu}
						class="rounded-full p-2 transition-all duration-300 hover:rotate-90 hover:bg-black/10"
						aria-label="Close menu"
					>
						<svg
							class="h-6 w-6 text-gray-600"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>				<!-- Navigation Items -->
				<div class="flex flex-1 flex-col justify-center px-8 py-12">
					<nav class="space-y-8" aria-label="Mobile navigation">
						{#each navigationItems as item, index}
							{#if item.isContact}
								<button
									onclick={handleContactClick}
									class="group block text-3xl font-semibold text-gray-700 transition-all duration-500 hover:text-blue-600 text-left"
									class:translate-x-0={isMobileMenuOpen}
									class:opacity-100={isMobileMenuOpen}
									class:translate-x-10={!isMobileMenuOpen}
									class:opacity-0={!isMobileMenuOpen}
									class:delay-150={index === 1}
									class:delay-300={index === 2}
									class:delay-500={index === 3}
								>
									<span
										class="flex items-center transition-all duration-300 group-hover:translate-x-2"
									>
										{item.name}
										<svg
											class="ml-4 h-6 w-6 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100"
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
									</span>
									<div
										class="mt-2 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full"
									></div>
								</button>
							{:else}
								<a
									href={item.href}
									onclick={closeMobileMenu}
									class="group block text-3xl font-semibold text-gray-700 transition-all duration-500 hover:text-blue-600"
									class:translate-x-0={isMobileMenuOpen}
									class:opacity-100={isMobileMenuOpen}
									class:translate-x-10={!isMobileMenuOpen}
									class:opacity-0={!isMobileMenuOpen}
									class:delay-150={index === 1}
									class:delay-300={index === 2}
									class:delay-500={index === 3}
								>
									<span
										class="flex items-center transition-all duration-300 group-hover:translate-x-2"
									>
										{item.name}
										<svg
											class="ml-4 h-6 w-6 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100"
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
									</span>
									<div
										class="mt-2 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full"
									></div>
								</a>
							{/if}
						{/each}
					</nav>

					<!-- Call to Action Button -->
					<div class="mt-16">
						<button
							onclick={closeMobileMenu}
							class="group mx-auto flex w-full max-w-sm transform items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-2xl"
						>
							<span>Get Started</span>
							<svg
								class="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
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
						</button>
					</div>				<!-- Footer -->
					<div class="border-t border-gray-200/50 p-6">
						<p class="text-center text-sm text-gray-500">
							© 2025 SvelteKit CSR Demo. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
