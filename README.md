# Render Strategy Demo - Monorepo

This is a monorepo demonstrating different rendering strategies with modern web frameworks.

## Live Demos

Experience the different rendering strategies with these live deployments:

### 🔄 CSR (Client-Side Rendering)

- **Next.js CSR**: <https://render-strategy-demo-csr-next-app-c.vercel.app/>
- **Nuxt.js CSR**: <https://render-strategy-demo-csr-nuxt-app-c.vercel.app/>
- **SvelteKit CSR**: <https://render-strategy-demo-csr-sveltekit.vercel.app/>

### 🚀 SSR (Server-Side Rendering)

- **Next.js SSR**: <https://render-strategy-demo-next-app-ssr.vercel.app/>
- **Nuxt.js SSR**: <https://render-strategy-demo-nuxt-app-ssr.vercel.app/>
- **SvelteKit SSR**: <https://render-strategy-demo-sveltekit-app.vercel.app/>

### ⚡ SSG (Static Site Generation)

- **Next.js SSG**: <https://render-strategy-demo-next-app-ssg.vercel.app/>
- **Nuxt.js SSG**: <https://render-strategy-demo-nuxt-app-ssg.vercel.app/>
- **SvelteKit SSG**: <https://render-strategy-demo-sveltekit-app-nine.vercel.app/>

### 🔁 ISR (Incremental Static Regeneration)

- **Next.js ISR**: <https://render-strategy-demo-next-app-isr.vercel.app/>
- **Nuxt.js ISR**: <https://render-strategy-demo-nuxt-app-isr.vercel.app/>
- **SvelteKit ISR**: <https://render-strategy-demo-sveltekit-app-rho.vercel.app/>

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
npm run dev:next        # Start Next.js SSR dev server
npm run dev:nuxt        # Start Nuxt.js SSR dev server  
npm run dev:svelte      # Start SvelteKit SSR dev server
npm run dev:next-isr    # Start Next.js ISR dev server
npm run dev:nuxt-isr    # Start Nuxt.js ISR dev server
npm run dev:svelte-isr  # Start SvelteKit ISR dev server
npm run dev:next-ssg    # Start Next.js SSG dev server
npm run dev:nuxt-ssg    # Start Nuxt.js SSG dev server
npm run dev:svelte-ssg  # Start SvelteKit SSG dev server

# Development - All apps by strategy
npm run dev:ssr         # Start all SSR apps
npm run dev:isr         # Start all ISR apps
npm run dev:ssg         # Start all SSG apps

# Build - Individual apps
npm run build:next      # Build Next.js SSR app
npm run build:nuxt      # Build Nuxt.js SSR app
npm run build:svelte    # Build SvelteKit SSR app
npm run build:next-isr  # Build Next.js ISR app
npm run build:nuxt-isr  # Build Nuxt.js ISR app
npm run build:svelte-isr # Build SvelteKit ISR app
npm run build:next-ssg  # Build Next.js SSG app
npm run build:nuxt-ssg  # Build Nuxt.js SSG app
npm run build:svelte-ssg # Build SvelteKit SSG app

# Build - All apps by strategy
npm run build:ssr       # Build all SSR apps
npm run build:isr       # Build all ISR apps
npm run build:ssg       # Build all SSG apps

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
