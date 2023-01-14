// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.js",
    exposeConfig: true,
  },
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [
        {
          name: "description",
          content: "Everything about Nuxt 3",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/kute.js@2.2.4/dist/kute.min.js",
        },
      ],
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
  middleware: ["auth"],
  store: ["auth"],
});
