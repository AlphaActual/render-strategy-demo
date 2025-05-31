# Render Strategy Demo - Monorepo

This is a monorepo demonstrating different rendering strategies with modern web frameworks.

## Projects

- **next-app-ssr**: Next.js application with Server-Side Rendering
- **nuxt-app-ssr**: Nuxt.js application with Server-Side Rendering  
- **sveltekit-app-ssr**: SvelteKit application with Server-Side Rendering

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
# Development
npm run dev:next     # Start Next.js dev server
npm run dev:nuxt     # Start Nuxt.js dev server  
npm run dev:svelte   # Start SvelteKit dev server

# Build
npm run build:next   # Build Next.js app
npm run build:nuxt   # Build Nuxt.js app
npm run build:svelte # Build SvelteKit app

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
