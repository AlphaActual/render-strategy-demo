<script setup>
const config = useRuntimeConfig();

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: null
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  fit: {
    type: String,
    default: 'contain'
  },
  width: {
    type: [String, Number],
    default: null
  },
  height: {
    type: [String, Number],
    default: null
  },
  class: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <nuxt-img
    v-bind="props"
    :alt="props.alt ?? config.public.appName"
    :loading="props.loading"
    decoding="async"
    :preload="props.loading === 'eager'"
    :fit="props.fit"
  />
</template>
