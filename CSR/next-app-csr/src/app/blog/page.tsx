"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "@/components/Image";

// Post interface
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// User interface
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data client-side using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch posts and users in parallel
        const [postsResponse, usersResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/users")
        ]);

        if (!postsResponse.ok || !usersResponse.ok) {
          throw new Error("Failed to fetch blog data");
        }

        const postsData = await postsResponse.json();
        const usersData = await usersResponse.json();

        setPosts(postsData);
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error instanceof Error ? error.message : "Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // Helper function to get user by ID
  const getUserById = (userId: number): User | undefined => {
    return users.find((user) => user.id === userId);
  };

  // Helper function to format date
  const formatDate = (postId: number): string => {
    const date = new Date(2024, 0, (postId % 28) + 1);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  // Helper function to calculate reading time
  const calculateReadingTime = (body: string): number => {
    return Math.ceil(body.split(" ").length / 200);
  };

  // Loading state
  if (loading) {
    return (
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Loading amazing articles and stories from our community...
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-5 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="mt-6 h-10 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
          </div>
          <div className="text-center py-12">
            <div className="text-red-400 mb-4">
              <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Error Loading Posts
            </h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing articles and stories from our community using
            JSONPlaceholder API
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const author = getUserById(post.userId);
              const readingTime = calculateReadingTime(post.body);
              const postDate = formatDate(post.id);

              return (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 flex flex-col"
                >
                  {/* Thumbnail Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://picsum.photos/400/240"
                      seed={`post-${post.id}`}
                      alt={`Thumbnail for ${post.title}`}
                      width={400}
                      height={240}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 backdrop-blur-sm">
                        Article
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Author Info */}
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0">
                        <Image
                          src="https://picsum.photos/40/40"
                          seed={`user-${post.userId}`}
                          alt={author?.name || "User avatar"}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-100"
                        />
                      </div>{" "}                      <div className="ml-3 flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                          {author?.name || "Unknown Author"}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center text-xs text-gray-500 gap-1 sm:gap-2">
                          <span>
                            @{author?.username || "unknown"}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span>{postDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Post Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* Post Excerpt */}
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-1">
                      {post.body}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/blog/${post.id}`}
                        className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        Read More
                        <svg
                          className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                      {/* Reading Time Estimate */}
                      <span className="text-xs text-gray-400 font-medium">
                        {readingTime} min read
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No posts found
            </h3>
            <p className="text-gray-600">
              There are no blog posts available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
