<script lang="ts">
	import Image from '$lib/components/Image.svelte';

	const features = [
		{
			title: 'Modern Design',
			description: 'Beautiful and responsive UI components built with Tailwind CSS.',
			icon: '🎨',
			color: 'from-purple-500 to-pink-500'
		},
		{
			title: 'Performance First',
			description: 'Optimized for speed and performance with SvelteKit.',
			icon: '⚡',
			color: 'from-yellow-500 to-orange-500'
		},
		{
			title: 'Developer Experience',
			description: 'TypeScript support and excellent developer tooling.',
			icon: '👨‍💻',
			color: 'from-blue-500 to-cyan-500'
		},
		{
			title: 'Type Safety',
			description: 'Full TypeScript integration for better code quality.',
			icon: '🛡️',
			color: 'from-green-500 to-emerald-500'
		},
		{
			title: 'Component Architecture',
			description: 'Modular and reusable component system.',
			icon: '🧩',
			color: 'from-indigo-500 to-purple-500'
		},
		{
			title: 'Modern Tooling',
			description: 'Latest development tools and best practices.',
			icon: '🔧',
			color: 'from-red-500 to-pink-500'
		}
	];

	const testimonials = [
		{
			name: 'Sarah Johnson',
			role: 'Product Manager',
			content: 'This demo showcases excellent modern web development practices.',
			avatar: 'https://picsum.photos/64/64',
			seed: 'sarah-johnson',
			company: 'TechCorp'
		},
		{
			name: 'Mike Chen',
			role: 'Frontend Developer',
			content: 'The component architecture is clean and well-organized.',
			avatar: 'https://picsum.photos/64/64',
			seed: 'mike-chen',
			company: 'DevStudio'
		},
		{
			name: 'Lisa Williams',
			role: 'UX Designer',
			content: 'Beautiful design system with consistent styling.',
			avatar: 'https://picsum.photos/64/64',
			seed: 'lisa-williams',
			company: 'DesignLab'
		}
	];

	const stats = [
		{ value: '99%', label: 'Performance Score' },
		{ value: '50k+', label: 'Active Users' },
		{ value: '24/7', label: 'Support' },
		{ value: '100+', label: 'Components' }
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="SvelteKit demo app" />
</svelte:head>

<div class="py-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Hero Section -->
		<section class="mb-16 text-center">
			<div class="mb-8">
				<h1 class="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
					Welcome to Our
					<span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Demo Application
					</span>
				</h1>
				<p class="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">
					Experience modern web development with SvelteKit, TypeScript, and Tailwind CSS. This demo
					showcases best practices and beautiful design patterns.
				</p>
				<div class="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
					<button
						class="group inline-flex transform items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
					>
						Explore Features
						<svg
							class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
					<button
						class="rounded-lg border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
					>
						View Demo
					</button>
				</div>
			</div>

			<!-- Hero Image -->
			<div class="relative mx-auto max-w-5xl">
				<div class="relative overflow-hidden rounded-2xl shadow-2xl">
					<Image
						src="https://picsum.photos/1200/600"
						alt="Demo Application Screenshot"
						seed="hero-demo"
						class="h-auto w-full"
						loading="eager"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
				</div>
			</div>
		</section>

		<!-- Stats Section -->
		<section class="mb-20">
			<div class="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700 p-8 text-white">
				<div class="grid gap-8 text-center md:grid-cols-4">
					{#each stats as stat}
						<div class="transform transition-transform duration-300 hover:scale-105">
							<div class="mb-2 text-4xl font-bold">{stat.value}</div>
							<div class="text-blue-100">{stat.label}</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section id="features" class="mb-20">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-900">Powerful Features</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">
					Discover what makes our demo application special with these key features
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each features as feature}
					<div
						class="group transform rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
					>
						<div class="mb-4 flex items-center">
							<div class="mr-4 text-3xl">{feature.icon}</div>
							<div class="h-1 w-12 rounded-full bg-gradient-to-r {feature.color}"></div>
						</div>
						<h3
							class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
						>
							{feature.title}
						</h3>
						<p class="leading-relaxed text-gray-600">{feature.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- About Section -->
		<section id="about" class="mb-20">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div>
					<h2 class="mb-6 text-4xl font-bold text-gray-900">About This Demo</h2>
					<p class="mb-6 text-lg leading-relaxed text-gray-600">
						This demonstration application showcases modern web development practices using
						cutting-edge technologies. Built with SvelteKit for superior performance and developer
						experience.
					</p>
					<p class="mb-8 text-lg leading-relaxed text-gray-600">
						Every component is carefully crafted with accessibility in mind, responsive design
						principles, and optimized for both performance and user experience.
					</p>
					<div class="flex flex-wrap gap-3">
						<span
							class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 transition-colors duration-300 hover:bg-blue-200"
							>SvelteKit</span
						>
						<span
							class="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800 transition-colors duration-300 hover:bg-purple-200"
							>TypeScript</span
						>
						<span
							class="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-800 transition-colors duration-300 hover:bg-cyan-200"
							>Tailwind CSS</span
						>
						<span
							class="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 transition-colors duration-300 hover:bg-green-200"
							>Svelte 5</span
						>
					</div>
				</div>
				<div class="relative">
					<div
						class="transform overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
					>
						<Image
							src="https://picsum.photos/600/400"
							alt="About Demo"
							seed="about-demo"
							class="h-auto w-full"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Testimonials Section -->
		<section id="testimonials" class="mb-20">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-900">What People Say</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">
					Hear from developers and designers who love working with modern web technologies
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				{#each testimonials as testimonial}
					<div
						class="group transform rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
					>
						<div class="mb-6 flex items-center">
							<Image
								src={testimonial.avatar}
								alt={testimonial.name}
								seed={testimonial.seed}
								class="mr-4 h-16 w-16 rounded-full ring-4 ring-blue-100 transition-all duration-300 group-hover:ring-blue-200"
								fit="cover"
							/>
							<div>
								<div class="text-lg font-bold text-gray-900">{testimonial.name}</div>
								<div class="font-medium text-blue-600">{testimonial.role}</div>
								<div class="text-sm text-gray-500">{testimonial.company}</div>
							</div>
						</div>
						<p class="italic leading-relaxed text-gray-600">"{testimonial.content}"</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- CTA Section -->
		<section class="text-center">
			<div class="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700 p-12 text-white">
				<h2 class="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
				<p class="mx-auto mb-8 max-w-2xl text-xl opacity-90">
					Join thousands of developers building amazing applications with modern web technologies.
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<button
						class="group inline-flex transform items-center rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100"
					>
						Start Building
						<svg
							class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
					<button
						class="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600"
					>
						View Documentation
					</button>
				</div>
			</div>
		</section>
	</div>
</div>
