// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@zadigetvoltaire/nuxt-gtm',
  ],

  gtm: {
    id: 'GTM-5SLQ8434',
    debug: true,
  },
})
