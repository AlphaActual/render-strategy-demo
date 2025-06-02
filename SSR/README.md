# Server-Side Rendering (SSR) Applications

This directory contains applications that demonstrate Server-Side Rendering across different frameworks.

## Live Demos

- **Next.js SSR**: <https://render-strategy-demo-next-app-ssr.vercel.app/>
- **Nuxt.js SSR**: <https://render-strategy-demo-nuxt-app-ssr.vercel.app/>
- **SvelteKit SSR**: <https://render-strategy-demo-sveltekit-app.vercel.app/>

## Applications

- **next-app-ssr**: Next.js SSR application
- **nuxt-app-ssr**: Nuxt.js SSR application  
- **sveltekit-app-ssr**: SvelteKit SSR application

## About SSR

Server-Side Rendering pre-renders pages on the server before sending them to the client. This provides:

- Better SEO (search engines can crawl the content)
- Faster initial page load for users
- Better performance on slower devices
- Social media preview support

## Running Applications

```bash
# Start individual applications
npm run dev:next     # Next.js SSR
npm run dev:nuxt     # Nuxt.js SSR  
npm run dev:svelte   # SvelteKit SSR

# Start all SSR applications
npm run dev:ssr
```
