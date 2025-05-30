<script setup lang="ts">
// Footer component
</script>

<template>
  <footer class="bg-primary100 text-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">DemoApp</h3>
          <p class="text-primary40">
            A modern web application demo built with the latest technologies.
          </p>
        </div>        <div>
          <h4 class="font-semibold mb-4">Product</h4>
          <ul class="space-y-2 text-primary40">
            <li><button type="button" class="hover:text-white transition-colors">Features</button></li>
            <li><button type="button" class="hover:text-white transition-colors">Pricing</button></li>
            <li><button type="button" class="hover:text-white transition-colors">Documentation</button></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-primary40">
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-white transition-colors">Blog</NuxtLink></li>
            <li><button type="button" class="hover:text-white transition-colors">Careers</button></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Connect</h4>
          <ul class="space-y-2 text-primary40">
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">GitHub</a></li>
            <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Discord</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-primary80 mt-12 pt-8 text-center text-primary40">
        <p>&copy; 2025 DemoApp. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
