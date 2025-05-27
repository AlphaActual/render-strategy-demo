import tailwindcss from "@tailwindcss/vite";

const cmsDomain = ["https://picsum.photos/"];
const APP_NAME = "Nuxt App";
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: APP_NAME,

      link: [{ rel: "icon", type: "image/png", href: "/img/favicon.png" }],
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
