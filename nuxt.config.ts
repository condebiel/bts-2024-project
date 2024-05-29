const STORYBLOK_TOKEN = 'uyavMjFjmJeQrdX5XaZZfwtt'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@zadigetvoltaire/nuxt-gtm',
    [
      '@storyblok/nuxt',
      {
        accessToken: STORYBLOK_TOKEN,
        apiOptions: {
           region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
  ],

  gtm: {
    id: 'GTM-5SLQ8434',
    debug: true,
  },
})
