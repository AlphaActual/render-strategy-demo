import tailwindcss from "@tailwindcss/vite";

const cmsDomain = ["https://picsum.photos/"];
const APP_NAME = "Nuxt App SSR";
const BASE_APP_URL = "https://render-strategy-demo-nuxt-app-ssr.vercel.app"
export default defineNuxtConfig({
  // Enable pure SSR mode - disable SPA mode and hybrid rendering
  ssr: true,
  
  // Nitro configuration for pure SSR
  nitro: {
    preset: 'vercel'
  },
  
  // Route rules to ensure pure SSR for all routes
  routeRules: {
    // Disable prerendering and ensure SSR for all routes
    '/**': { ssr: true, prerender: false }
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
        { name: 'description', content: 'A Nuxt.js application demonstrating SSR' },
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
