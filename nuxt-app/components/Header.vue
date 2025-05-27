<script setup lang="ts">
// Mobile menu state
const isMobileMenuOpen = ref(false)

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu when clicking outside or on nav links
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Navigation items
const navigationItems = [
  { name: 'Home', href: '/', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Contact', href: '#contact', current: false }
]
</script>

<template>
  <header class="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink 
            to="/" 
            class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
            @click="closeMobileMenu"
          >
            Nuxt 3 SSR mode
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.name"
              :to="item.href"
              class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {{ item.name }}
            </NuxtLink>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger icon -->
            <svg
              v-if="!isMobileMenuOpen"
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
            <!-- Close icon -->
            <svg
              v-else
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
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden transition-all duration-300 ease-in-out"
        :class="{ 'opacity-100': isMobileMenuOpen, 'opacity-0': !isMobileMenuOpen }"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            {{ item.name }}
          </NuxtLink>
          <button 
            @click="closeMobileMenu"
            class="w-full text-left bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
