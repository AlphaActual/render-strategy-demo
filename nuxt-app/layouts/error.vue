<script lang="ts" setup>
const error = useError().value;

const goHome = () => {
	navigateTo('/');
	clearError();
};

const goBack = () => {
	if (window.history.length > 1) {
		window.history.back();
	} else {
		navigateTo('/');
	}
	clearError();
};
</script>

<template>
	<div class="error-wrap bg-gray-50">
		

		<main class="error-wrap__main relative flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
			<!-- Background Elements -->
			<div class="absolute inset-0 overflow-hidden">
				<div class="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
				<div class="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
			</div>

			<div v-if="error" class="relative z-10 text-center max-w-2xl mx-auto">				<!-- Error Code with Gradient -->
				<div class="mb-8">
					<h1 class="mb-4 text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-7xl lg:text-8xl">
						{{ 'statusCode' in error ? error.statusCode : '500' }}
					</h1>
					<div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
				</div>

				<!-- Error Message -->
				<div class="mb-12">
					<h2 class="mb-4 text-2xl font-semibold text-primary100 sm:text-3xl lg:text-4xl">
						{{ 'statusCode' in error && error.statusCode === 404 ? 'Page Not Found' : 'Something went wrong' }}
					</h2>
					<p class="text-lg leading-relaxed text-primary80 sm:text-xl">
						{{ 'statusCode' in error && error.statusCode === 404 
							? 'The page you\'re looking for doesn\'t exist. Please check the URL or return to the homepage.'
							: ('message' in error ? error.message : 'An unexpected error occurred. Please try again or return to the homepage.') }}
					</p>
				</div>

				<!-- Action Buttons -->
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<button 
						@click="goHome"
						class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
					>
						<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
						Go Home
					</button>
					<button 
						@click="goBack"
						class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
					>
						<svg class="mr-2 h-5 w-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
						</svg>
						Go Back
					</button>
				</div>				<!-- Additional Help Text -->
				<div class="mt-12 pt-8 border-t border-primary10">
					<p class="text-sm text-primary60">
						If this problem persists, please contact our support team.
					</p>
				</div>
			</div>
		</main>

		
	</div>
</template>
