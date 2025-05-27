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
  website: string;
  phone: string;
  company: {
    name: string;
  };
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

// Get the post ID from the route
const route = useRoute()
const postId = route.params.slug as string

// Fetch post data
const { data: post, error: postError, pending: postPending } = await useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
  key: `post-${postId}`,
  server: true
})

// If post doesn't exist, throw error to trigger 404
if (postError.value || !post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  })
}

// Fetch user data for the post author
const { data: postUser, error: userError } = await useFetch<User>(`https://jsonplaceholder.typicode.com/users/${post.value.userId}`, {
  key: `user-${post.value.userId}`,
  server: true
})

// Fetch comments for the post
const { data: comments, error: commentsError } = await useFetch<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
  key: `comments-${postId}`,
  server: true,
  default: () => []
})

// Handle errors
if (userError.value || commentsError.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Failed to load post data'
  })
}

// Format date (since JSONPlaceholder doesn't provide dates, we'll use a mock date)
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

const mockDate = new Date(2024, 0, parseInt(postId) % 28 + 1) // Mock date based on post ID
const formattedDate = formatDate(mockDate)

// Function to get initials
const getInitials = (name: string): string => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}
</script>

<template>
  <div class="py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Back Navigation -->
      <div class="mb-8">
        <NuxtLink 
          to="/blog"
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </NuxtLink>
      </div>      <!-- Article -->
      <article v-if="post && postUser" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Article Header -->
        <div class="px-6 py-8 sm:px-8">
          <div class="mb-6">
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {{ post.title }}
            </h1>
            
            <!-- Author Info -->
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span class="text-white font-semibold">
                    {{ getInitials(postUser.name) }}
                  </span>
                </div>
              </div>
              <div class="ml-4">
                <div class="flex items-center space-x-4">
                  <div>
                    <p class="text-lg font-medium text-gray-900">{{ postUser.name }}</p>
                    <div class="flex items-center text-sm text-gray-500 space-x-4">
                      <span>@{{ postUser.username }}</span>
                      <span>•</span>
                      <span>{{ formattedDate }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Article Content -->
          <div class="prose prose-lg max-w-none">
            <div class="text-gray-700 leading-relaxed whitespace-pre-line">
              {{ post.body }}
            </div>
          </div>

          <!-- Author Details Card -->
          <div class="mt-12 border-t pt-8">
            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span class="text-white font-semibold text-lg">
                      {{ getInitials(postUser.name) }}
                    </span>
                  </div>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-medium text-gray-900">{{ postUser.name }}</h4>
                  <p class="text-gray-600 mb-2">@{{ postUser.username }}</p>
                  <div class="space-y-1 text-sm text-gray-600">
                    <p><strong>Email:</strong> {{ postUser.email }}</p>
                    <p><strong>Website:</strong> 
                      <a :href="`https://${postUser.website}`" target="_blank" class="text-blue-600 hover:text-blue-800">
                        {{ postUser.website }}
                      </a>
                    </p>
                    <p><strong>Company:</strong> {{ postUser.company.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        <!-- Comments Section -->
        <div class="border-t bg-gray-50 px-6 py-8 sm:px-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Comments ({{ comments?.length || 0 }})
          </h3>
          
          <div v-if="comments && comments.length > 0" class="space-y-6">
            <div 
              v-for="comment in comments" 
              :key="comment.id"
              class="bg-white rounded-lg p-6 shadow-sm border"
            >
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0">
                  <div class="h-10 w-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                    <span class="text-white font-medium text-sm">
                      {{ comment.name.charAt(0).toUpperCase() }}
                    </span>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="flex items-center space-x-2 mb-2">
                    <h4 class="font-medium text-gray-900">{{ comment.name }}</h4>
                    <span class="text-gray-400">•</span>
                    <span class="text-sm text-gray-500">{{ comment.email }}</span>
                  </div>
                  <p class="text-gray-700 leading-relaxed">{{ comment.body }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-8">
            <div class="text-gray-400 mb-4">
              <svg class="mx-auto h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p class="text-gray-600">No comments yet. Be the first to comment!</p>
          </div>
        </div>
      </article>

      <!-- Related Posts / Navigation -->
      <div class="mt-8 flex justify-between">
        <NuxtLink 
          v-if="parseInt(postId) > 1"
          :to="`/blog/${parseInt(postId) - 1}`"
          class="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200"
        >
          <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Previous Post
        </NuxtLink>
        <div v-else></div>

        <NuxtLink 
          v-if="parseInt(postId) < 100"
          :to="`/blog/${parseInt(postId) + 1}`"
          class="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200"
        >
          Next Post
          <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
        <div v-else></div>
      </div>
    </div>
  </div>
</template>