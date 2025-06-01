<script lang="ts">
	interface Props {
		src: string;
		alt?: string;
		loading?: 'lazy' | 'eager';
		fit?: 'contain' | 'cover';
		width?: string | number;
		height?: string | number;
		class?: string;
		seed?: string;
	}

	let {
		src,
		alt = 'DemoApp',
		loading = 'lazy',
		fit = 'contain',
		width,
		height,
		class: className = '',
		seed = 'demoapp'
	}: Props = $props();

	// Function to convert picsum random URLs to seeded URLs for consistent images
	const getConsistentImageSrc = () => {
		const url = src;

		// Check if it's a picsum.photos URL
		if (url.includes('picsum.photos')) {
			// If it has a random parameter, replace it with seed
			if (url.includes('?random=') || url.includes('&random=')) {
				// Extract the base URL without random parameter
				const baseUrl = url.split('?')[0];

				// Check if there are other query parameters
				const urlObj = new URL(url);
				const params = new URLSearchParams(urlObj.search);

				// Remove random parameter and add seed
				params.delete('random');

				// Convert to seed-based URL
				const pathParts = baseUrl.split('/');
				const dimensions = pathParts.slice(-2); // Get width and height

				// Create seed-based URL
				const seedUrl = `https://picsum.photos/seed/${seed}/${dimensions.join('/')}`;

				// Add remaining parameters if any
				const remainingParams = params.toString();
				return remainingParams ? `${seedUrl}?${remainingParams}` : seedUrl;
			}

			// If it doesn't have random parameter but is a direct picsum URL, convert to seed
			if (url.match(/picsum\.photos\/\d+\/?\d*$/)) {
				const pathParts = url.split('/');
				const dimensions = pathParts.slice(-2); // Get width and height
				return `https://picsum.photos/seed/${seed}/${dimensions.join('/')}`;
			}

			// If it's already using seed or id, keep as is
			if (url.includes('/seed/') || url.includes('/id/')) {
				return url;
			}
		}

		// Return original URL if not a picsum URL
		return url;
	};

	const finalSrc = getConsistentImageSrc();

	const objectFitClass = fit === 'cover' ? 'object-cover' : 'object-contain';
</script>

<img
	src={finalSrc}
	{alt}
	{loading}
	decoding="async"
	{width}
	{height}
	class="{objectFitClass} {className}"
/>
