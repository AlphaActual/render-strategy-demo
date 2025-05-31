import Link from 'next/link';
import Image from '@/components/Image';

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

// Function to fetch posts data
const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'no-store' // Force fresh data on every request
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to load blog posts');
  }
};

// Function to fetch users data
const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      cache: 'no-store' // Force fresh data on every request
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to load user data');
  }
};

export default async function BlogPage() {
  // Fetch data server-side
  const posts = await fetchPosts();
  const users = await fetchUsers();

  // Helper function to get user by ID
  const getUserById = (userId: number): User | undefined => {
    return users.find(user => user.id === userId);
  };

  // Helper function to format date
  const formatDate = (postId: number): string => {
    const date = new Date(2024, 0, (postId % 28) + 1);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Helper function to calculate reading time
  const calculateReadingTime = (body: string): number => {
    return Math.ceil(body.split(' ').length / 200);
  };

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
                          alt={author?.name || 'User avatar'}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-100"
                        />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                          {author?.name || 'Unknown Author'}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 space-x-2">
                          <span>@{author?.username || 'unknown'}</span>
                          <span>•</span>
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
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">
              There are no blog posts available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
