<script lang="ts" setup>
const error = useError().value;

</script>

<template>
	<div class="error-wrap">

		<main class="error-wrap__main relative h-dvh overflow-hidden">
			<div v-if="error" class="relative z-[10]">
				<h1 class="fs-5xl">{{ 'statusCode' in error ? error.statusCode : 'Unknown' }}</h1>
				<p class="fs-md">
					{{ 'message' in error ? error.message : 'An unexpected error occurred.' }}
				</p>
			</div>
		</main>
	</div>
</template>
