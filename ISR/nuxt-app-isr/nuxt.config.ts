import tailwindcss from "@tailwindcss/vite";

const cmsDomain = ["https://picsum.photos/"];
const APP_NAME = "Nuxt App ISR";
const BASE_APP_URL = "https://render-strategy-demo-nuxt-app-isr.vercel.app"
export default defineNuxtConfig({
  // Enable ISR (Incremental Static Regeneration)
  nitro: {
    preset: 'vercel',
    prerender: {
      // Configure ISR routes
      routes: ['/sitemap.xml']
    }
  },
  
  // Route rules for ISR configuration
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { isr: 60 }, // Regenerate every 60 seconds
    // Blog pages use ISR
    '/blog': { isr: 300 }, // Regenerate every 5 minutes    '/blog/**': { isr: 600 }, // Regenerate every 10 minutes
    // About page uses ISR
    '/about': { isr: 3600 }, // Regenerate every hour
    // API routes
    '/api/**': { cors: true },
  },
  
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: APP_NAME,

      meta: [
				{ name: 'application-name', content: APP_NAME },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:site_name', content: APP_NAME },
				{ property: 'og:title', content: APP_NAME },
				{ property: 'og:image', content: BASE_APP_URL + '/img/og-image.jpg' },
        { name: 'description', content: 'A Nuxt.js application demonstrating ISR (Incremental Static Regeneration)' },
			],

      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700;800;900&display=swap" }
      ],
    },
  },

  css: ["~/assets/css/tailwind.css"],

  modules: ["@nuxt/image"],

  typescript: {
    typeCheck: true,
  },

  logLevel: "silent",

  vite: {
    build: {
      target: "esnext",
      assetsInlineLimit: 0,
      sourcemap: false,
      reportCompressedSize: false,
    },
    esbuild: {
      legalComments: "none",
    },
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      appName: APP_NAME,
    },

    defaultCacheMaxAge: 7200,
  },

  image: {
    staticFilename: "[publicPath]/img/[name]-[hash][ext]",
    format: ["avif", "webp"],
    domains: [
      ...cmsDomain,
      // add CMS CDN domain here
    ],
  },
});
