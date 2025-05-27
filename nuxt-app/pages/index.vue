<script setup lang="ts">
const features = [
  {
    title: 'Modern Design',
    description: 'Beautiful and responsive UI components built with Tailwind CSS.',
    icon: '🎨'
  },
  {
    title: 'Performance First',
    description: 'Optimized for speed and performance with Nuxt 3.',
    icon: '⚡'
  },
  {
    title: 'Developer Experience',
    description: 'TypeScript support and excellent developer tooling.',
    icon: '👨‍💻'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    content: 'This demo showcases excellent modern web development practices.',
    avatar: 'https://picsum.photos/64/64'
  },
  {
    name: 'Mike Chen',
    role: 'Frontend Developer',
    content: 'The component architecture is clean and well-organized.',
    avatar: 'https://picsum.photos/64/64'
  },
  {
    name: 'Lisa Williams',
    role: 'UX Designer',
    content: 'Beautiful design system with consistent styling.',
    avatar: 'https://picsum.photos/64/64'
  }
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-primary0 via-white to-primary05">
    <!-- Hero Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-primary100 mb-6">
          Welcome to Our
          <span class="bg-gradient-to-r from-primary50 to-primary100 bg-clip-text text-transparent">
            Demo Application
          </span>
        </h1>
        <p class="text-xl text-primary60 mb-8 max-w-3xl mx-auto">
          Experience modern web development with Nuxt 3, TypeScript, and Tailwind CSS. 
          This demo showcases best practices and beautiful design patterns.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-primary100 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary80 transition-all transform hover:scale-105">
            Explore Features
          </button>
          <button class="border-2 border-primary100 text-primary100 px-8 py-3 rounded-lg font-medium hover:bg-primary100 hover:text-white transition-all">
            View Demo
          </button>
        </div>
      </div>
        <!-- Hero Image -->
      <div class="mt-16 max-w-5xl mx-auto">        <div class="relative">
          <Image 
            src="https://picsum.photos/1200/600" 
            alt="Demo Application Screenshot"
            seed="hero-demo"
            class="w-full h-auto rounded-2xl shadow-2xl"
            loading="eager"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary100 mb-4">
            Powerful Features
          </h2>
          <p class="text-lg text-primary60 max-w-2xl mx-auto">
            Discover what makes our demo application special with these key features
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="feature in features" 
            :key="feature.title"
            class="text-center p-8 rounded-xl bg-primary0 hover:bg-primary05 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-xl font-semibold text-primary100 mb-3">{{ feature.title }}</h3>
            <p class="text-primary60">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-primary100 text-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold mb-2">99%</div>
            <div class="text-primary40">Performance Score</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">50k+</div>
            <div class="text-primary40">Active Users</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">24/7</div>
            <div class="text-primary40">Support</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">100+</div>
            <div class="text-primary40">Components</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-primary100 mb-6">
              About This Demo
            </h2>
            <p class="text-lg text-primary60 mb-6">
              This demonstration application showcases modern web development practices using 
              cutting-edge technologies. Built with Nuxt 3 for superior performance and developer experience.
            </p>
            <p class="text-lg text-primary60 mb-8">
              Every component is carefully crafted with accessibility in mind, responsive design principles, 
              and optimized for both performance and user experience.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-1 bg-primary05 text-primary100 rounded-full text-sm font-medium">Nuxt 3</span>
              <span class="px-3 py-1 bg-primary05 text-primary100 rounded-full text-sm font-medium">TypeScript</span>
              <span class="px-3 py-1 bg-primary05 text-primary100 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span class="px-3 py-1 bg-primary05 text-primary100 rounded-full text-sm font-medium">Vue 3</span>
            </div>          </div>          <div>
            <Image 
              src="https://picsum.photos/600/400" 
              alt="About Demo"
              seed="about-demo"
              class="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 px-4 sm:px-6 lg:px-8 bg-primary0">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary100 mb-4">
            What People Say
          </h2>
          <p class="text-lg text-primary60 max-w-2xl mx-auto">
            Hear from developers and designers who love working with modern web technologies
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.name"
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >            <p class="text-primary60 mb-6 italic">"{{ testimonial.content }}"</p>            <div class="flex items-center">
              <Image 
                :src="testimonial.avatar" 
                :alt="testimonial.name"
                :seed="`avatar-${testimonial.name.toLowerCase().replace(' ', '-')}`"
                class="w-12 h-12 rounded-full mr-4"
                fit="cover"
              />
              <div>
                <div class="font-semibold text-primary100">{{ testimonial.name }}</div>
                <div class="text-sm text-primary60">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary50 to-primary100 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Join thousands of developers building amazing applications with modern web technologies.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-primary100 px-8 py-3 rounded-lg font-medium hover:bg-primary05 transition-all transform hover:scale-105">
            Start Building
          </button>
          <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary100 transition-all">
            View Documentation
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-primary100 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">DemoApp</h3>
            <p class="text-primary40">
              A modern web application demo built with the latest technologies.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Product</h4>
            <ul class="space-y-2 text-primary40">
              <li><a href="#" class="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-primary40">
              <li><a href="#" class="hover:text-white transition-colors">About</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Connect</h4>
            <ul class="space-y-2 text-primary40">
              <li><a href="#" class="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" class="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-primary80 mt-12 pt-8 text-center text-primary40">
          <p>&copy; 2025 DemoApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>