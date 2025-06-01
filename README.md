# Render Strategy Demo - Monorepo

This is a monorepo demonstrating different rendering strategies with modern web frameworks.

## Structure

The monorepo is organized by rendering strategy for easy comparison and analysis:

### SSR (Server-Side Rendering)

- **SSR/next-app-ssr**: Next.js application with Server-Side Rendering
- **SSR/nuxt-app-ssr**: Nuxt.js application with Server-Side Rendering  
- **SSR/sveltekit-app-ssr**: SvelteKit application with Server-Side Rendering

### ISR (Incremental Static Regeneration) ✅

- **ISR/next-app-isr**: Next.js application with Incremental Static Regeneration
- **ISR/nuxt-app-isr**: Nuxt.js application with Incremental Static Regeneration  
- **ISR/sveltekit-app-isr**: SvelteKit application with Incremental Static Regeneration

### SSG (Static Site Generation) ✅

- **SSG/next-app-ssg**: Next.js application with Static Site Generation
- **SSG/nuxt-app-ssg**: Nuxt.js application with Static Site Generation  
- **SSG/sveltekit-app-ssg**: SvelteKit application with Static Site Generation

### Future Additions

- **CSR/**: Client-Side Rendering applications

## Workspace Setup

This monorepo is configured as an npm workspace to enable Vercel's "skipping unaffected projects" feature, which automatically skips builds for unchanged projects in a monorepo.

### Requirements Met

✅ **GitHub repository**: Connected to GitHub  
✅ **npm workspaces**: Configured with root package.json  
✅ **Package manager lockfile**: package-lock.json at repository root  
✅ **Unique package names**: Each project has a unique name  
✅ **Explicit dependencies**: Dependencies declared in package.json files  

### Available Scripts

```bash
# Development - Individual apps
npm run dev:next     # Start Next.js dev server
npm run dev:nuxt     # Start Nuxt.js dev server  
npm run dev:svelte   # Start SvelteKit dev server

# Development - All SSR apps
npm run dev:ssr      # Start all SSR apps

# Build - Individual apps
npm run build:next   # Build Next.js app
npm run build:nuxt   # Build Nuxt.js app
npm run build:svelte # Build SvelteKit app

# Build - All SSR apps
npm run build:ssr    # Build all SSR apps

# Install dependencies for all workspaces
npm install
```

### Vercel Configuration

With this workspace setup, Vercel will:
- Only build projects that have changed
- Skip builds for unaffected projects
- Reduce build queue times
- Not occupy concurrent build slots for skipped projects

Each project can be deployed independently while benefiting from monorepo optimizations.
