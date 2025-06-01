# SvelteKit ISR Blog Application

A modern blog application built with SvelteKit and configured for **Incremental Static Regeneration (ISR)** on Vercel. This application demonstrates server-side rendering with intelligent caching, dynamic routing, and modern web development practices.

## Features

- 🏠 **Homepage**: Hero section, features, testimonials, and company information
- 📝 **Blog Listing**: Dynamic blog posts fetched from JSONPlaceholder API
- 📖 **Individual Blog Posts**: Detailed post pages with comments and navigation
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI**: Smooth animations and hover effects
- 🔧 **TypeScript**: Full type safety with Svelte 5 runes
- ⚡ **ISR Performance**: Incremental static regeneration with intelligent caching
- 🚀 **Vercel Optimized**: Built specifically for Vercel deployment

## ISR Configuration

This application uses **Incremental Static Regeneration** to combine the benefits of static generation with dynamic content:

### Cache Strategy
- **Homepage**: 60-second cache expiration
- **Blog Listing**: 300-second cache with query parameter support  
- **Blog Posts**: 600-second cache for individual posts

### Benefits
- Fast loading times through static generation
- Fresh content through automatic revalidation
- Reduced API calls with intelligent caching
- Better SEO with server-side rendering

## Technology Stack

- **Framework**: SvelteKit with Svelte 5
- **Deployment**: Vercel with ISR support
- **Adapter**: `@sveltejs/adapter-vercel`
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **API**: JSONPlaceholder for demo content
- **Images**: Picsum for consistent demo images

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Main layout
│   ├── +page.svelte            # Homepage
│   └── blog/
│       ├── +page.svelte        # Blog listing
│       └── [slug]/
│           └── +page.svelte    # Individual blog posts
├── lib/
│   └── components/
│       ├── Header.svelte       # Navigation header
│       ├── Footer.svelte       # Site footer
│       └── Image.svelte        # Custom image component
└── app.css                     # Global styles and Tailwind imports
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Available Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run check      # Run type checking and linting
```

## API Integration

This application uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for demo content:

- **Posts**: `/posts` - Blog post content
- **Users**: `/users` - Author information
- **Comments**: `/posts/{id}/comments` - Post comments

## Migration from Nuxt

This SvelteKit application was migrated from a Nuxt 3 version, maintaining the same:
- HTML structure and layout
- Tailwind CSS classes and styling
- API integration and data flow
- User interface and user experience

Key changes made during migration:
- Vue Composition API → Svelte 5 runes
- Nuxt routing → SvelteKit routing
- Vue components → Svelte components
- Vue state management → Svelte reactive statements

For detailed migration information, see [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md).

## Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**:
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

2. **Environment Variables**:
   - Set `BYPASS_TOKEN` in Vercel dashboard for cache bypassing
   - Example: `https://your-app.vercel.app/blog?__vercel_bypass=your-token`

3. **ISR Configuration**:
   - Homepage: Revalidates every 60 seconds
   - Blog listing: Revalidates every 300 seconds
   - Blog posts: Revalidates every 600 seconds

### Local Development with ISR

For local testing of ISR functionality:

```bash
# Build the application
npm run build

# Preview with Vercel adapter
npm run preview
```

**Note**: Full ISR functionality requires Vercel deployment. Local development uses standard SvelteKit SSR.

## Environment Setup

Copy `.env.example` to `.env.local` and configure:

```bash
# Cache bypass token for ISR
BYPASS_TOKEN=your-secure-token-here
```

## License

This project is for demonstration purposes only.
