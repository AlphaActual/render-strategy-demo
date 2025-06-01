# Static Site Generation (SSG) Applications

This directory contains applications that demonstrate Static Site Generation across different frameworks. All applications have been converted from their SSR counterparts to use SSG rendering mode.

## Applications

### ✅ Completed
- **next-app-ssg**: Next.js SSG application with static export configuration
- **nuxt-app-ssg**: Nuxt.js SSG application with static preset and prerendering
- **sveltekit-app-ssg**: SvelteKit SSG application with static adapter

### 🔮 Future Applications
- **astro-app-ssg**: Astro SSG application  
- **gatsby-app-ssg**: Gatsby SSG application
- **11ty-app-ssg**: 11ty SSG application

## Getting Started

### Development
```bash
# Run all SSG applications
npm run dev:ssg

# Run individual applications
npm run dev:next-ssg
npm run dev:nuxt-ssg
npm run dev:svelte-ssg
```

### Building
```bash
# Build all SSG applications
npm run build:ssg

# Build individual applications
npm run build:next-ssg
npm run build:nuxt-ssg
npm run build:svelte-ssg
```

## About SSG

Static Site Generation pre-builds all pages at build time, creating static HTML files. This provides:

- **Fastest possible page loads**: No server processing needed
- **Excellent SEO**: Full HTML content available to crawlers
- **High security**: No server-side vulnerabilities
- **Easy deployment**: Deploy to any static hosting provider
- **Better caching**: Static files can be cached indefinitely
- **Cost effective**: No server infrastructure required

## Framework-Specific Implementations

### Next.js SSG
- Uses `output: 'export'` in next.config.ts
- Static export generates pure HTML/CSS/JS
- Images configured with `unoptimized: true`
- All pages are pre-rendered at build time

### Nuxt SSG
- Uses `nitro: { preset: 'static' }` in nuxt.config.ts
- Route rules enable prerendering for all routes
- Generated static files in `.output/public`
- Build command uses `npm run generate`

### SvelteKit SSG
- Uses `@sveltejs/adapter-static` adapter
- Individual routes can be prerendered with `export const prerender = true`
- Dynamic routes support prerender entries for specific pages
- Generates static files in `build` directory

## Use Cases

Perfect for:
- Documentation sites
- Marketing websites  
- Blogs with infrequent updates
- Portfolio sites
- Landing pages
- Product showcases
- Event websites
