import BlogPostClient from "./BlogPostClient";

// Pure CSR implementation using catch-all routes [...slug]
// generateStaticParams only creates empty HTML shells - all data fetching happens client-side
// This ensures fair comparison with Nuxt and SvelteKit CSR implementations

// Required for static export - generates all blog post routes
export async function generateStaticParams() {
  // Generate static params for blog posts 1-100 for fair comparison
  // This ensures all blog routes are available during static export
  const params = [];
  
  for (let i = 1; i <= 100; i++) {
    params.push({ slug: [i.toString()] });
  }
  
  return params;
}

export default function BlogPostPage() {
  return <BlogPostClient />;
}