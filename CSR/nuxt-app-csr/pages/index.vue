<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Home - Nuxt App CSR',
  description: 'Experience modern web development with Nuxt.js, TypeScript, and Tailwind CSS. This demo showcases best practices and beautiful design patterns.',
  ogTitle: 'Nuxt App CSR - Modern Web Development',
  ogDescription: 'Experience modern web development with Nuxt.js, TypeScript, and Tailwind CSS. This demo showcases best practices and beautiful design patterns.',
  ogUrl: '/',
  ogImage: '/img/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Nuxt App CSR - Modern Web Development',
  twitterDescription: 'Experience modern web development with Nuxt.js, TypeScript, and Tailwind CSS. This demo showcases best practices and beautiful design patterns.'
})

const features = [
  {
    title: 'Modern Design',
    description: 'Beautiful and responsive UI components built with Tailwind CSS.',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Performance First',
    description: 'Optimized for speed and performance with Nuxt 3.',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Developer Experience',
    description: 'TypeScript support and excellent developer tooling.',
    icon: '👨‍💻',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Type Safety',
    description: 'Full TypeScript integration for better code quality.',
    icon: '🛡️',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Component Architecture',
    description: 'Modular and reusable component system.',
    icon: '🧩',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Modern Tooling',
    description: 'Latest development tools and best practices.',
    icon: '🔧',
    color: 'from-red-500 to-pink-500'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    content: 'This demo showcases excellent modern web development practices.',
    avatar: 'https://picsum.photos/64/64',
    seed: 'sarah-johnson',
    company: 'TechCorp'
  },
  {
    name: 'Mike Chen',
    role: 'Frontend Developer',
    content: 'The component architecture is clean and well-organized.',
    avatar: 'https://picsum.photos/64/64',
    seed: 'mike-chen',
    company: 'DevStudio'
  },
  {
    name: 'Lisa Williams',
    role: 'UX Designer',
    content: 'Beautiful design system with consistent styling.',
    avatar: 'https://picsum.photos/64/64',
    seed: 'lisa-williams',
    company: 'DesignLab'
  }
]

const stats = [
  { value: '99%', label: 'Performance Score' },
  { value: '50k+', label: 'Active Users' },
  { value: '24/7', label: 'Support' },
  { value: '100+', label: 'Components' }
]
</script>

<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <section class="text-center mb-16">
        <div class="mb-8">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Our
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Demo Application
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience modern web development with Nuxt 3, TypeScript, and Tailwind CSS. 
            This demo showcases best practices and beautiful design patterns.
          </p>          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#features" class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore Features
              <svg class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <button class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative max-w-5xl mx-auto">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image 
              src="https://picsum.photos/id/3/1200/600" 
              alt="Demo Application Screenshot"
              class="w-full h-auto"
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="mb-20">
        <div class="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
          <div class="grid md:grid-cols-4 gap-8 text-center">
            <div v-for="stat in stats" :key="stat.label" class="transform hover:scale-105 transition-transform duration-300">
              <div class="text-4xl font-bold mb-2">{{ stat.value }}</div>
              <div class="text-blue-100">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="mb-20">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our demo application special with these key features
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="feature in features" 
            :key="feature.title"
            class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
          >
            <div class="flex items-center mb-4">
              <div class="text-3xl mr-4">{{ feature.icon }}</div>
              <div class="w-12 h-1 rounded-full bg-gradient-to-r" :class="feature.color"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="mb-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              About This Demo
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              This demonstration application showcases modern web development practices using 
              cutting-edge technologies. Built with Nuxt 3 for superior performance and developer experience.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Every component is carefully crafted with accessibility in mind, responsive design principles, 
              and optimized for both performance and user experience.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300">Nuxt 3</span>
              <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-300">TypeScript</span>
              <span class="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium hover:bg-cyan-200 transition-colors duration-300">Tailwind CSS</span>
              <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-300">Vue 3</span>
            </div>
          </div>
          <div class="relative">
            <div class="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500">
              <Image 
                src="https://picsum.photos/id/6/600/400" 
                alt="About Demo"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials" class="mb-20">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            What People Say
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from developers and designers who love working with modern web technologies
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.name"
            class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
          >
            <div class="flex items-center mb-6">
              <Image 
                :src="testimonial.avatar" 
                :alt="testimonial.name"
                :seed="testimonial.seed"
                class="w-16 h-16 rounded-full mr-4 ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                fit="cover"
              />
              <div>
                <div class="font-bold text-gray-900 text-lg">{{ testimonial.name }}</div>
                <div class="text-blue-600 font-medium">{{ testimonial.role }}</div>
                <div class="text-sm text-gray-500">{{ testimonial.company }}</div>
              </div>
            </div>
            <p class="text-gray-600 italic leading-relaxed">"{{ testimonial.content }}"</p>
          </div>
        </div>      
      </section>

      <!-- Contact Section -->
      <section id="contact" class="mb-20">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Contact Form -->
          <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input 
                    id="firstName"
                    type="text" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input 
                    id="lastName"
                    type="text" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  id="email"
                  type="email" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input 
                  id="subject"
                  type="text" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows="5" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                  placeholder="Tell us more about your project or question..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="text-center md:text-left">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p class="text-gray-600 leading-relaxed mb-8">
                Whether you're interested in our demo projects, want to discuss modern web development, 
                or have a collaboration idea, we're here to help.
              </p>
            </div>

            <div class="space-y-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Email Us</h4>
                  <p class="text-gray-600">hello@example.com</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Call Us</h4>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Visit Us</h4>
                  <p class="text-gray-600">123 Tech Street, San Francisco, CA</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="pt-8 border-t border-gray-200">
              <h4 class="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-200">
                  <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-200">
                  <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors duration-200">
                  <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                  <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.007 0C5.392 0 .029 5.363.029 11.979c0 5.688 3.979 10.423 9.303 11.622.681-.125 1.171-.56 1.171-1.239 0-.608-.021-2.217-.033-4.35-3.338.725-4.042-1.608-4.042-1.608-.619-1.571-1.508-1.988-1.508-1.988-1.233-.842.094-.825.094-.825 1.363.096 2.081 1.4 2.081 1.4 1.212 2.075 3.181 1.475 3.956 1.129.123-.879.475-1.479.863-1.817-3.017-.342-6.187-1.508-6.187-6.725 0-1.483.533-2.696 1.408-3.646-.142-.342-.608-1.729.133-3.596 0 0 1.146-.367 3.754 1.396a13.15 13.15 0 0 1 3.421-.458c1.158.004 2.325.154 3.421.458 2.608-1.763 3.754-1.396 3.754-1.396.742 1.867.275 3.254.133 3.596.879.95 1.408 2.163 1.408 3.646 0 5.225-3.175 6.379-6.2 6.717.488.421.925 1.25.925 2.517 0 1.817-.017 3.283-.017 3.729 0 .683.488 1.121 1.179 1.233C20.021 22.396 23.979 17.663 23.979 11.979 23.979 5.363 18.615.001 12.007.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <div class="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-white">
          <h2 class="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of developers building amazing applications with modern web technologies.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="group inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Building
              <svg class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>