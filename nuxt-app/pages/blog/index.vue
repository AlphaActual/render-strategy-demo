<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

// Fetch posts and users data
const {data: posts} = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')
const {data: users} = await useFetch<User[]>('https://jsonplaceholder.typicode.com/users')


// Create a map for quick user lookup
const userMap = new Map<number, User>()
users.value?.forEach(user => userMap.set(user.id, user))

// Function to get user by ID
const getUserById = (userId: number): User | undefined => userMap.get(userId)
</script>

<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Blog Posts
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing articles and stories from our community using JSONPlaceholder API
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="!posts" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Posts Grid -->
      <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="post in posts"
          :key="post.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          <!-- Post Header -->
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0">
                <div class="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span class="text-white font-semibold text-sm">
                    {{ getUserById(post.userId)?.name?.charAt(0).toUpperCase() || 'U' }}
                  </span>
                </div>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  {{ getUserById(post.userId)?.name || 'Unknown Author' }}
                </p>
                <p class="text-sm text-gray-500">
                  @{{ getUserById(post.userId)?.username || 'unknown' }}
                </p>
              </div>
            </div>            <!-- Post Title -->
            <h2 class="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
              {{ post.title }}
            </h2>

            <!-- Post Excerpt -->
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ post.body }}
            </p>

            <!-- Read More Button -->
            <NuxtLink 
              :to="`/blog/${post.id}`"
              class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Read More
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-if="posts && posts.length === 0" class="text-center py-12">
        <div class="text-gray-400 mb-4">
          <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
        <p class="text-gray-600">There are no blog posts available at the moment.</p>
      </div>
    </div>  </div>
</template>