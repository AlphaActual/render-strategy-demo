# SvelteKit Blog Application

A modern blog application built with SvelteKit, migrated from the Nuxt 3 version. This application demonstrates server-side rendering, dynamic routing, and modern web development practices.

## Features

- 🏠 **Homepage**: Hero section, features, testimonials, and company information
- 📝 **Blog Listing**: Dynamic blog posts fetched from JSONPlaceholder API
- 📖 **Individual Blog Posts**: Detailed post pages with comments and navigation
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI**: Smooth animations and hover effects
- 🔧 **TypeScript**: Full type safety with Svelte 5 runes
- ⚡ **Performance**: Static prerendering and optimized loading

## Technology Stack

- **Framework**: SvelteKit with Svelte 5
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

## License

This project is for demonstration purposes only.
