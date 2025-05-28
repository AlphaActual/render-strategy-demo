<script lang="ts">
	// Mobile menu state
	let isMobileMenuOpen = $state(false);

	// Toggle mobile menu
	const toggleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};

	// Close mobile menu when clicking outside or on nav links
	const closeMobileMenu = () => {
		isMobileMenuOpen = false;
	};

	// Navigation items
	const navigationItems = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Blog', href: '/blog', current: false },
		{ name: 'About', href: '#about', current: false },
		{ name: 'Contact', href: '#contact', current: false }
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
					onclick={closeMobileMenu}
				>
					SvelteKit SSR mode
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-4">
					{#each navigationItems as item}
						<a
							href={item.href}
							class="text-primary80 hover:text-primary100 hover:bg-primary05 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300"
						>
							{item.name}
						</a>
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
					aria-expanded="false"
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
		<!-- Mobile menu -->
		{#if isMobileMenuOpen}
			<div class="opacity-100 transition-all duration-300 ease-in-out md:hidden">
				<div
					class="border-primary10 space-y-1 border-t bg-white/95 px-2 pb-3 pt-2 backdrop-blur-md sm:px-3"
				>
					{#each navigationItems as item}
						<a
							href={item.href}
							onclick={closeMobileMenu}
							class="text-primary80 hover:text-primary100 hover:bg-primary05 block rounded-lg px-3 py-2 text-base font-medium transition-all duration-300"
						>
							{item.name}
						</a>
					{/each}
					<button
						onclick={closeMobileMenu}
						class="group block w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-2 text-left text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
					>
						<span class="inline-flex items-center">
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
						</span>
					</button>
				</div>
			</div>
		{/if}
	</nav>
</header>
