<script setup lang="ts">
// Mobile menu state
const isMobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile menu when clicking outside or on nav links
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Navigation items
const navigationItems = [
  { name: "Home", href: "/", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "#contact", current: false },
];
</script>

<template>
  <header
    class="bg-white/95 backdrop-blur-md border-b border-primary10 sticky top-0 z-50 shadow-sm"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="text-2xl font-bold text-primary100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
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
              class="text-primary80 hover:text-primary100 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary05 rounded-lg"
            >
              {{ item.name }}
            </NuxtLink>
            <button
              class="group inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-lg text-primary80 hover:text-primary100 hover:bg-primary05 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300"
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
        :class="{
          'opacity-100': isMobileMenuOpen,
          'opacity-0': !isMobileMenuOpen,
        }"
      >
        <div
          class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-primary10"
        >
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            @click="closeMobileMenu"
            class="text-primary80 hover:text-primary100 hover:bg-primary05 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
          >
            {{ item.name }}
          </NuxtLink>
          <button
            @click="closeMobileMenu"
            class="group w-full text-left bg-gradient-to-r from-blue-600 to-blue-700 text-white block px-3 py-2 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
    </nav>
  </header>
</template>
