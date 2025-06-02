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

const { data: posts } = await useFetch<Post[]>(
  "https://jsonplaceholder.typicode.com/posts",
  {
    server: true,
  }
);
const { data: users } = await useFetch<User[]>(
  "https://jsonplaceholder.typicode.com/users",
  {
    server: true,
  }
);

// SEO
useSeoMeta({
  title: "Blog Posts - Nuxt App CSR",
  description:
    "Discover amazing articles and stories from our community. Browse through our collection of blog posts covering various topics.",
  ogTitle: "Blog Posts - Nuxt App CSR",
  ogDescription:
    "Discover amazing articles and stories from our community. Browse through our collection of blog posts covering various topics.",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Blog Posts - Nuxt App CSR",
  twitterDescription:
    "Discover amazing articles and stories from our community. Browse through our collection of blog posts covering various topics.",
});
</script>

<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing articles and stories from our community using
          JSONPlaceholder API
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="!posts" class="flex justify-center items-center py-12">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
        ></div>
      </div>
      <!-- Posts Grid -->
      <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="post in posts"
          :key="post.id"
          class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 flex flex-col"
        >
          <!-- Thumbnail Image -->
          <div class="relative overflow-hidden">
            <Image
              src="https://picsum.photos/400/240"
              :seed="`post-${post.id}`"
              :alt="`Thumbnail for ${post.title}`"
              class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              fit="cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 backdrop-blur-sm"
              >
                Article
              </span>
            </div>
          </div>
          <!-- Post Content -->
          <div class="p-6 flex flex-col flex-1">
            <!-- Author Info -->
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0">
                <Image
                  src="https://picsum.photos/40/40"
                  :seed="`user-${post.userId}`"
                  :alt="
                    users?.find((u) => u.id === post.userId)?.name ||
                    'User avatar'
                  "
                  class="h-10 w-10 rounded-full object-cover ring-2 ring-blue-100"
                  fit="cover"
                />
              </div>              <div class="ml-3 flex-1">
                <p class="text-sm font-semibold text-gray-900">
                  {{
                    users?.find((u) => u.id === post.userId)?.name ||
                    "Unknown Author"
                  }}
                </p>
                <div class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center text-xs text-gray-500 gap-1 sm:gap-2">
                  <span>@{{
                      users?.find((u) => u.id === post.userId)?.username ||
                      "unknown"
                    }}</span>
                  <span class="hidden sm:inline">•</span>
                  <span>{{
                    new Date(2024, 0, (post.id % 28) + 1).toLocaleDateString(
                      "en-US",
                      { month: "short", day: "numeric" }
                    )
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Post Title -->
            <h2
              class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300"
            >
              {{ post.title }}
            </h2>

            <!-- Post Excerpt -->
            <p class="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-1">
              {{ post.body }}
            </p>

            <!-- Read More Button -->
            <div class="flex items-center justify-between">
              <NuxtLink
                :to="`/blog/${post.id}`"
                class="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Read More
                <svg
                  class="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
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
              </NuxtLink>
              <!-- Reading Time Estimate -->
              <span class="text-xs text-gray-400 font-medium">
                {{ Math.ceil(post.body.split(" ").length / 200) }} min read
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-if="posts && posts.length === 0" class="text-center py-12">
        <div class="text-gray-400 mb-4">
          <svg
            class="mx-auto h-12 w-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
        <p class="text-gray-600">
          There are no blog posts available at the moment.
        </p>
      </div>
    </div>
  </div>
</template>
