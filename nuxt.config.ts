// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16x",
          href: "/favicon-16x16.png",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "preload",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
          as: "style",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/styles/scss/main.scss"],
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
  ],
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL || "",
    public: {
      siteTitle: process.env.NUXT_PUBLIC_SITE_TITLE || "DM Rent Car",
    },
  },
  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ["stores"],
  },
  tailwindcss: {
    cssPath: "./assets/styles/scss/tailwind.scss",
  },
});
