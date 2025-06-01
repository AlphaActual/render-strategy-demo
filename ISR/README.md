# Incremental Static Regeneration (ISR) Applications

This directory contains applications that demonstrate Incremental Static Regeneration across different frameworks.

## Applications

- **next-app-isr**: Next.js ISR application
- **nuxt-app-isr**: Nuxt.js ISR application  
- **sveltekit-app-isr**: SvelteKit ISR application

## About ISR

Incremental Static Regeneration (ISR) combines the benefits of Static Site Generation (SSG) and Server-Side Rendering (SSR). It allows you to:

- Pre-generate static pages at build time for optimal performance
- Regenerate pages in the background when content changes
- Serve stale content while new content is being generated
- Scale to millions of pages without long build times
- Provide excellent SEO and performance benefits

## Key Features

### Next.js ISR
- Uses `revalidate` property for page-level ISR configuration
- Configurable revalidation periods (60s for homepage, 5-10 minutes for blog)
- `generateStaticParams` for pre-generating popular routes
- Automatic stale-while-revalidate caching

### Nuxt.js ISR  
- Uses `routeRules` with `isr` property for configuration
- Different revalidation periods per route type
- Built-in caching with `useFetch` and proper cache keys
- Nitro-powered ISR with Vercel preset

### SvelteKit ISR
- ISR-like behavior through proper caching strategies
- Server-side rendering with client-side hydration
- Configurable prerendering and caching policies
- Load functions with fetch caching

## Running Applications

```bash
# Start individual applications
npm run dev:next     # Next.js ISR
npm run dev:nuxt     # Nuxt.js ISR  
npm run dev:svelte   # SvelteKit ISR

# Start all ISR applications
npm run dev:isr
```
