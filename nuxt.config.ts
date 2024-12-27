import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  plugins: ['~/plugins/darkMode.client.js'],
  typescript: {
    shim: false,
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-graphql-client'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR' // Adiciona o atributo lang
      },
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Moon+Dance&display=swap' },
      ]
    }
  }
})
