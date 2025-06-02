"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "@/components/Image";
import { useParams, notFound } from "next/navigation";

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
  website: string;
  phone: string;
  company: {
    name: string;
  };
}

// Comment interface
interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export default function BlogPostClient() {
  const params = useParams();
  // Handle catch-all route [...slug] - slug is an array, take the first element
  const slugArray = params.slug as string[] | string;
  const slug = Array.isArray(slugArray) ? slugArray[0] : slugArray;
  const postId = parseInt(slug || '');

  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Validate post ID
  useEffect(() => {
    if (isNaN(postId) || postId < 1) {
      notFound();
      return;
    }

    // Client-side data fetching
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch post data
        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        
        if (!postResponse.ok) {
          throw new Error("Post not found");
        }
        
        const postData = await postResponse.json();
        setPost(postData);

        // Fetch user data
        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${postData.userId}`
        );
        
        if (!userResponse.ok) {
          throw new Error("User data not found");
        }
        
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch comments
        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        
        if (commentsResponse.ok) {
          const commentsData = await commentsResponse.json();
          setComments(commentsData);
        }

      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error instanceof Error ? error.message : "Failed to load post data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  // Loading state
  if (loading) {
    return (
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="h-64 sm:h-80 lg:h-96 bg-gray-300"></div>
              <div className="p-6 space-y-4">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !post || !user) {
    return (
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {error || "Post not found"}
            </h1>
            <p className="text-gray-600 mb-8">
              The blog post you are looking for could not be loaded.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-300 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Helper functions
  const formatDate = (postId: number): string => {
    const date = new Date(2024, 0, (postId % 28) + 1);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const calculateReadingTime = (body: string): number => {
    return Math.ceil(body.split(" ").length / 200);
  };

  const getRandomHours = (): number => {
    return Math.floor(Math.random() * 24) + 1;
  };

  const formattedDate = formatDate(postId);
  const readingTime = calculateReadingTime(post.body);

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="group inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-300 font-medium"
          >
            <svg
              className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article */}
        <article className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <Image
              src="https://picsum.photos/1200/600"
              seed={`hero-${post.id}`}
              alt={`Hero image for ${post.title}`}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

            {/* Hero Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 backdrop-blur-sm">
                  Article
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Article Header */}
          <div className="px-6 py-8 sm:px-8">
            {/* Author Info */}
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0">
                <Image
                  src="https://picsum.photos/60/60"
                  seed={`user-${user.id}`}
                  alt={`${user.name} avatar`}
                  width={60}
                  height={60}
                  className="h-14 w-14 rounded-full object-cover ring-3 ring-blue-100"
                />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {user.name}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center text-sm text-gray-500 gap-1 sm:gap-2">
                      <span>@{user.username}</span>
                      <span className="hidden sm:inline text-gray-300">•</span>
                      <span>{formattedDate}</span>
                      <span className="hidden sm:inline text-gray-300">•</span>
                      <span>{readingTime} min read</span>
                    </div>
                  </div>
                  {/* Social Share Buttons */}
                  <div className="hidden sm:flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                {post.body}
              </div>
            </div>

            {/* Tags Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Technology
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Tutorial
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Development
                </span>
              </div>
            </div>

            {/* Author Details Card */}
            <div className="mt-12 border-t pt-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  About the Author
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://picsum.photos/80/80"
                      seed={`user-${user.id}`}
                      alt={`${user.name} profile picture`}
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-full object-cover ring-3 ring-white shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {user.name}
                    </h4>
                    <p className="text-blue-600 font-medium mb-2">
                      @{user.username}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 mr-2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="break-all">{user.email}</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 mr-2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                          />
                        </svg>
                        <a
                          href={`https://${user.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {user.website}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 mr-2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        {user.company.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="border-t bg-gradient-to-b from-gray-50 to-white px-6 py-8 sm:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Comments ({comments.length})
            </h3>

            {comments.length > 0 ? (
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Image
                          src="https://picsum.photos/50/50"
                          seed={`comment-${comment.id}`}
                          alt={`${comment.name} avatar`}
                          width={50}
                          height={50}
                          className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col gap-1 mb-3">
                          <h4 className="font-semibold text-gray-900">
                            {comment.name}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center text-sm text-gray-500 gap-1 sm:gap-2">
                            <span className="break-all">{comment.email}</span>
                            <span className="hidden sm:inline text-gray-300">
                              •
                            </span>
                            <span className="text-gray-400">
                              {getRandomHours()}h ago
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {comment.body}
                        </p>

                        {/* Comment Actions */}
                        <div className="flex items-center space-x-4 mt-4">
                          <button className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                            <svg
                              className="h-4 w-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            Like
                          </button>
                          <button className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                            <svg
                              className="h-4 w-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                              />
                            </svg>
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="mx-auto h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600">
                  No comments yet. Be the first to comment!
                </p>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts / Navigation */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              Continue Reading
            </h3>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {postId > 1 ? (
                <Link
                  href={`/blog/${postId - 1}`}
                  className="group flex-1 relative overflow-hidden bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-300">
                      <svg
                        className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="text-sm font-medium text-blue-600 mb-1">
                        Previous Article
                      </div>
                      <div className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        Post {postId - 1}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        ← Go back in the series
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="text-center text-gray-400">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-medium">
                      You're at the beginning!
                    </div>
                  </div>
                </div>
              )}

              {postId < 100 ? (
                <Link
                  href={`/blog/${postId + 1}`}
                  className="group flex-1 relative overflow-hidden bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-end text-right">
                    <div className="mr-4 flex-1">
                      <div className="text-sm font-medium text-blue-600 mb-1">
                        Next Article
                      </div>
                      <div className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        Post {postId + 1}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Continue the journey →
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-300">
                      <svg
                        className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:translate-x-1"
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
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="text-center text-gray-400">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="h-6 w-6 text-gray-400"
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
                    </div>
                    <div className="text-sm font-medium">
                      You've reached the end!
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
