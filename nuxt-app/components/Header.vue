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
      <!-- Full Screen Mobile Menu -->
      <div
        class="fixed inset-0 z-50 md:hidden h-dvh transition-all duration-500 ease-out"
        :class="
          isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        "
        @click="closeMobileMenu"
      >
        <!-- Menu Content with backdrop and blur -->
        <div
          class="fixed inset-0 h-dvh flex flex-col bg-white/95 backdrop-blur-lg"
          @click.stop
        >
          <!-- Header with close button -->
          <div
            class="flex items-center justify-between p-6 border-b border-gray-200/50"
          >
            <h2
              class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Menu
            </h2>
            <button
              @click="closeMobileMenu"
              class="p-2 rounded-full hover:bg-black/10 transition-all duration-300 hover:rotate-90"
            >
              <svg
                class="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          <!-- Navigation Items -->
          <div class="flex-1 flex flex-col justify-center px-8 py-12">
            <nav class="space-y-8">
              <NuxtLink
                v-for="(item, index) in navigationItems"
                :key="item.name"
                :to="item.href"
                @click="closeMobileMenu"
                class="group block text-3xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-500"
                :class="[{ 'delay-150': index === 1}, { 'delay-300': index === 2}, { 'delay-500': index === 3}, isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0']"
              >
                <span class="flex items-center group-hover:translate-x-2 transition-all duration-300">
                  {{ item.name }}
                  <svg
                    class="ml-4 h-6 w-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2"
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
                <div
                  class="h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 w-0 group-hover:w-full transition-all duration-500 mt-2"
                ></div>
              </NuxtLink>
            </nav>

            <!-- Call to Action Button -->
            <div class="mt-16">
              <button
                @click="closeMobileMenu"
                class="group w-full max-w-sm mx-auto flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1  slide-in-from-bottom animation-delay-[400ms]"
              >
                <span>Get Started</span>
                <svg
                  class="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
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

            <!-- Footer -->
            <div class="p-6 border-t border-gray-200/50">
              <p class="text-center text-sm text-gray-500">
                © 2025 Nuxt 3 SSR Demo. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
