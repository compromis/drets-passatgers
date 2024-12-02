// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://forms.compromis.net/api/pax-rights/'
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ca',
      },
      meta: [
        { name: 'theme-color', content: '#006E50' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://compromis.net/sub/icons/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: 'https://compromis.net/sub/icons/favicon32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: 'https://compromis.net/sub/icons/favicon192.png',
        },
        {
          rel: 'stylesheet',
          href: 'https://compromis.net/sub/fonts/manrope.css?variable',
        },
        {
          rel: 'stylesheet',
          href: ' https://use.typekit.net/ato5abe.css',
        }
      ],
      script: [
        { src: 'https://cloud.umami.is/script.js', defer: true, 'data-website-id': 'e5c0625b-91b6-48d7-b015-28833271172c' },
      ]
    }
  },

  css: [
    '~/assets/scss/main.scss'
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/icon'
  ],

  vue: {
    defineModel: true,
    propsDestructure: true
  },

  i18n: {
    defaultLocale: 'val',
    locales: [
      { code: 'val', iso: 'ca', name: 'Valencià', file: 'val.js' },
      { code: 'cas', iso: 'es', name: 'Castellano', file: 'cas.js' },
      { code: 'eng', iso: 'en', name: 'English', file: 'eng.js' }
    ],
    lazy: true,
    langDir: 'lang',
    baseUrl: 'https://passatgersambdrets.com',
    detectBrowserLanguage: false
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use "@/assets/scss/helpers" as *;
          `
        }
      }
    }
  }
})