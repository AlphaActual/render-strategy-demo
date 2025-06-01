import tailwindcss from "@tailwindcss/vite";

const cmsDomain = ["https://picsum.photos/"];
const APP_NAME = "Nuxt App SSG";
const BASE_APP_URL = "https://render-strategy-demo-nuxt-app-ssg.vercel.app"
export default defineNuxtConfig({
  // Enable SSG mode - prerendering for all routes
  ssr: true,  // Nitro configuration for SSG
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: false,
      routes: [
        '/',
        '/about', 
        '/blog',
        // Prerender first 10 blog posts like the SvelteKit version
        '/blog/1',
        '/blog/2', 
        '/blog/3',
        '/blog/4',
        '/blog/5',
        '/blog/6',
        '/blog/7',
        '/blog/8',
        '/blog/9',
        '/blog/10'
      ]
    }
  },
  
  // Route rules for SSG
  routeRules: {
    // Prerender static pages
    '/': { prerender: true },
    '/about': { prerender: true },
    '/blog': { prerender: true }
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
        { name: 'description', content: 'A Nuxt.js application demonstrating SSG (Static Site Generation)' },
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
  },  image: {
    // Disable image optimization during SSG to prevent ENOENT errors
    provider: 'none',
    staticFilename: "[publicPath]/img/[name]-[hash][ext]",
    domains: [
      ...cmsDomain,
      // add CMS CDN domain here
    ],
  },
});
