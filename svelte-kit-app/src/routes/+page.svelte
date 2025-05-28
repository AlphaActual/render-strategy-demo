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
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Hero Section -->
		<section class="text-center mb-16">
			<div class="mb-8">
				<h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
					Welcome to Our
					<span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Demo Application
					</span>
				</h1>
				<p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
					Experience modern web development with SvelteKit, TypeScript, and Tailwind CSS. 
					This demo showcases best practices and beautiful design patterns.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
					<button class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
						Explore Features
						<svg class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</button>
					<button class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
						View Demo
					</button>
				</div>
			</div>

			<!-- Hero Image -->
			<div class="relative max-w-5xl mx-auto">
				<div class="relative overflow-hidden rounded-2xl shadow-2xl">
					<Image 
						src="https://picsum.photos/1200/600" 
						alt="Demo Application Screenshot"
						seed="hero-demo"
						class="w-full h-auto"
						loading="eager"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
				</div>
			</div>
		</section>

		<!-- Stats Section -->
		<section class="mb-20">
			<div class="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
				<div class="grid md:grid-cols-4 gap-8 text-center">
					{#each stats as stat}
						<div class="transform hover:scale-105 transition-transform duration-300">
							<div class="text-4xl font-bold mb-2">{stat.value}</div>
							<div class="text-blue-100">{stat.label}</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section id="features" class="mb-20">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">
					Powerful Features
				</h2>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					Discover what makes our demo application special with these key features
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each features as feature}
					<div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
						<div class="flex items-center mb-4">
							<div class="text-3xl mr-4">{feature.icon}</div>
							<div class="w-12 h-1 rounded-full bg-gradient-to-r {feature.color}"></div>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
							{feature.title}
						</h3>
						<p class="text-gray-600 leading-relaxed">{feature.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- About Section -->
		<section id="about" class="mb-20">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<h2 class="text-4xl font-bold text-gray-900 mb-6">
						About This Demo
					</h2>
					<p class="text-lg text-gray-600 mb-6 leading-relaxed">
						This demonstration application showcases modern web development practices using 
						cutting-edge technologies. Built with SvelteKit for superior performance and developer experience.
					</p>
					<p class="text-lg text-gray-600 mb-8 leading-relaxed">
						Every component is carefully crafted with accessibility in mind, responsive design principles, 
						and optimized for both performance and user experience.
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300">SvelteKit</span>
						<span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-300">TypeScript</span>
						<span class="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium hover:bg-cyan-200 transition-colors duration-300">Tailwind CSS</span>
						<span class="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-300">Svelte 5</span>
					</div>
				</div>
				<div class="relative">
					<div class="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500">
						<Image 
							src="https://picsum.photos/600/400" 
							alt="About Demo"
							seed="about-demo"
							class="w-full h-auto"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Testimonials Section -->
		<section id="testimonials" class="mb-20">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">
					What People Say
				</h2>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					Hear from developers and designers who love working with modern web technologies
				</p>
			</div>
			
			<div class="grid md:grid-cols-3 gap-8">
				{#each testimonials as testimonial}
					<div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
						<div class="flex items-center mb-6">
							<Image 
								src={testimonial.avatar} 
								alt={testimonial.name}
								seed={testimonial.seed}
								class="w-16 h-16 rounded-full mr-4 ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
								fit="cover"
							/>
							<div>
								<div class="font-bold text-gray-900 text-lg">{testimonial.name}</div>
								<div class="text-blue-600 font-medium">{testimonial.role}</div>
								<div class="text-sm text-gray-500">{testimonial.company}</div>
							</div>
						</div>
						<p class="text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- CTA Section -->
		<section class="text-center">
			<div class="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-white">
				<h2 class="text-4xl font-bold mb-6">
					Ready to Get Started?
				</h2>
				<p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
					Join thousands of developers building amazing applications with modern web technologies.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<button class="group inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
						Start Building
						<svg class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</button>
					<button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
						View Documentation
					</button>
				</div>
			</div>
		</section>
	</div>
</div>
