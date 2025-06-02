<script lang="ts">
	import Image from '$lib/components/Image.svelte';

	const teamMembers = [
		{
			name: 'Sarah Johnson',
			role: 'Lead Developer',
			bio: 'Full-stack developer with 8+ years of experience in modern web technologies.',
			avatar: 'https://picsum.photos/400/400',
			seed: 'sarah-johnson-team',
			skills: ['Svelte 5', 'SvelteKit', 'TypeScript', 'Node.js']
		},
		{
			name: 'Mike Chen',
			role: 'Frontend Architect',
			bio: 'Passionate about creating beautiful and performant user interfaces.',
			avatar: 'https://picsum.photos/400/400',
			seed: 'mike-chen-team',
			skills: ['React', 'Svelte', 'Tailwind CSS', 'Three.js']
		},
		{
			name: 'Lisa Williams',
			role: 'UX/UI Designer',
			bio: 'Design systems expert with a focus on accessibility and user experience.',
			avatar: 'https://picsum.photos/400/400',
			seed: 'lisa-williams-team',
			skills: ['Figma', 'Design Systems', 'Accessibility', 'Prototyping']
		},
		{
			name: 'Alex Rodriguez',
			role: 'DevOps Engineer',
			bio: 'Infrastructure specialist ensuring scalable and reliable deployments.',
			avatar: 'https://picsum.photos/400/400',
			seed: 'alex-rodriguez-team',
			skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD']
		}
	];

	const milestones = [
		{
			year: '2021',
			title: 'Project Inception',
			description: 'Started as a small experiment to explore modern web frameworks.',
			icon: '🚀'
		},
		{
			year: '2022',
			title: 'Framework Evolution',
			description: 'Expanded to include multiple frameworks for comprehensive comparison.',
			icon: '⚡'
		},
		{
			year: '2023',
			title: 'Performance Focus',
			description: 'Implemented advanced optimization techniques and best practices.',
			icon: '🎯'
		},
		{
			year: '2024',
			title: 'Community Growth',
			description: 'Became a reference point for developers learning modern web development.',
			icon: '🌟'
		},
		{
			year: '2025',
			title: 'Future Innovation',
			description: 'Continuing to evolve with the latest web technologies and standards.',
			icon: '🔮'
		}
	];

	const values = [
		{
			title: 'Innovation',
			description:
				"We embrace cutting-edge technologies and push the boundaries of what's possible.",
			icon: '💡',
			color: 'from-yellow-500 to-orange-500'
		},
		{
			title: 'Quality',
			description: 'Every line of code is crafted with attention to detail and best practices.',
			icon: '✨',
			color: 'from-blue-500 to-cyan-500'
		},
		{
			title: 'Performance',
			description: 'Speed and efficiency are at the core of everything we build.',
			icon: '⚡',
			color: 'from-green-500 to-emerald-500'
		},
		{
			title: 'Accessibility',
			description: 'We believe the web should be accessible to everyone, everywhere.',
			icon: '🌍',
			color: 'from-purple-500 to-pink-500'
		}
	];
</script>

<svelte:head>
	<title>About Us - SvelteKit App CSR</title>
	<meta
		name="description"
		content="Learn about our team, mission, and the technology behind our modern web development demo."
	/>
	<meta property="og:title" content="About Us - SvelteKit App CSR" />
	<meta property="og:description" content="Learn about our team, mission, and the technology behind our modern web development demo." />
	<meta property="og:url" content="/about" />
	<meta property="og:image" content="/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About Us - SvelteKit App CSR" />
	<meta name="twitter:description" content="Learn about our team, mission, and the technology behind our modern web development demo." />
</svelte:head>

<div class="py-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Hero Section -->
		<section class="mb-20 text-center">
			<div class="mb-8">
				<h1 class="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
					About
					<span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Our Team
					</span>
				</h1>
				<p class="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">
					We are passionate developers and designers dedicated to showcasing the best of modern web
					development. Our demo applications represent the cutting edge of technology and design.
				</p>
			</div>

			<!-- Hero Image -->
			<div class="relative mx-auto mb-12 max-w-4xl">
				<div class="relative overflow-hidden rounded-2xl shadow-2xl">
					<Image
						src="https://picsum.photos/id/214/1000/500"
						alt="Our team working together"
						class="h-auto w-full"
						loading="eager"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
					<div class="absolute bottom-8 left-8 text-white">
						<h3 class="mb-2 text-2xl font-bold">Building the Future</h3>
						<p class="text-white/90">One component at a time</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Mission Section -->
		<section class="mb-20">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div>
					<h2 class="mb-6 text-4xl font-bold text-gray-900">Our Mission</h2>
					<p class="mb-6 text-lg leading-relaxed text-gray-600">
						We believe in the power of modern web technologies to create exceptional user
						experiences. Our mission is to demonstrate how thoughtful architecture, beautiful
						design, and performance optimization can come together to create something truly
						remarkable.
					</p>
					<p class="mb-8 text-lg leading-relaxed text-gray-600">
						Through our demo applications, we showcase best practices in Svelte 5, SvelteKit,
						TypeScript, and modern CSS frameworks. Each project serves as both a learning resource
						and a testament to what's possible when technology meets creativity.
					</p>
					<div class="grid grid-cols-2 gap-6">
						<div class="text-center">
							<div class="mb-2 text-3xl font-bold text-blue-600">5+</div>
							<div class="text-gray-600">Years Experience</div>
						</div>
						<div class="text-center">
							<div class="mb-2 text-3xl font-bold text-purple-600">100+</div>
							<div class="text-gray-600">Projects Completed</div>
						</div>
					</div>
				</div>
				<div class="relative">
					<div
						class="transform overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
					>
						<Image
							src="https://picsum.photos/id/524/600/400"
							alt="Our mission in action"
							class="h-auto w-full"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Values Section -->
		<section class="mb-20">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-900">Our Values</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">
					The principles that guide everything we do and build
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each values as value}
					<div
						class="group transform rounded-xl border border-gray-100 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
					>
						<div class="mb-4 text-4xl">{value.icon}</div>
						<div class="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r {value.color}"></div>
						<h3
							class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
						>
							{value.title}
						</h3>
						<p class="leading-relaxed text-gray-600">{value.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Timeline Section -->
		<section class="mb-20">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-900">Our Journey</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">
					From humble beginnings to modern excellence
				</p>
			</div>			<div class="relative">
				<!-- Timeline line - responsive positioning -->
				<div
					class="absolute left-8 h-full w-1 rounded-full bg-gradient-to-b from-blue-600 to-purple-600 lg:left-1/2 lg:-translate-x-1/2 lg:transform"
				></div>

				<div class="space-y-8 lg:space-y-12">
					{#each milestones as milestone, index}
						<div
							class="relative flex items-center {index % 2 === 0
								? 'lg:justify-start'
								: 'lg:justify-end'}"
						>
							<!-- Timeline dot - responsive positioning -->
							<div
								class="absolute left-[34px] z-10 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-blue-600 bg-white lg:left-1/2"
							></div>

							<!-- Content -->
							<div
								class="group ml-20 lg:ml-0 lg:w-5/12 {index % 2 === 0
									? 'lg:pr-8 lg:text-right'
									: 'lg:pl-8 lg:text-left'}"
							>
								<div
									class="transform rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
								>									<div
										class="mb-3 flex items-center {index % 2 === 0
											? 'lg:justify-end'
											: 'lg:justify-start'}"
									>
										<span class="mr-3 text-2xl">{milestone.icon}</span>
										<span class="text-2xl font-bold text-blue-600">{milestone.year}</span>
									</div>
									<h3
										class="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
									>
										{milestone.title}
									</h3>					<p class="leading-relaxed text-gray-600">{milestone.description}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Team Section -->
		<section class="mb-20">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-900">Meet Our Team</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">
					The talented individuals behind our innovative projects
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each teamMembers as member}
					<div
						class="group transform overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
					>
						<div class="relative overflow-hidden">
							<Image
								src={member.avatar}
								alt={member.name}
								seed={member.seed}
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
								fit="cover"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>
						</div>
						<div class="p-6">
							<h3
								class="mb-1 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
							>
								{member.name}
							</h3>
							<p class="mb-3 font-medium text-blue-600">{member.role}</p>
							<p class="mb-4 text-sm leading-relaxed text-gray-600">{member.bio}</p>
							<div class="flex flex-wrap gap-2">
								{#each member.skills as skill}
									<span
										class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 transition-colors duration-300 hover:bg-blue-200"
									>
										{skill}
									</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- CTA Section -->
		<section class="text-center">
			<div class="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700 p-12 text-white">
				<h2 class="mb-6 text-4xl font-bold">Ready to Work Together?</h2>
				<p class="mx-auto mb-8 max-w-2xl text-xl opacity-90">
					Whether you're looking to learn from our demos or collaborate on a project, we'd love to
					hear from you.
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<button
						class="group inline-flex transform items-center rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100"
					>
						Get In Touch
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
						View Our Work
					</button>
				</div>
			</div>
		</section>
	</div>
</div>
