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
        { name: 'theme-color', content: '#1968A9' },
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
        { src: 'https://cloud.umami.is/script.js', defer: true, 'data-website-id': '211bc8de-e22a-4911-aeb7-e0201b95e8ae' },
      ]
    }
  },

  css: [
    '~/assets/scss/main.scss'
  ],

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@vueuse/nuxt', '@nuxt/icon', '@nuxtjs/google-fonts'],

  vue: {
    defineModel: true,
    propsDestructure: true
  },

  i18n: {
    defaultLocale: 'eng',
    locales: [
      {
        code: 'val',
        iso: 'ca',
        name: 'Valencià',
        language: 'ca-ES',
        file: 'val.js',
        domain: 'dretspassatgers.com'
      },
      {
        code: 'cas',
        iso: 'es',
        name: 'Castellano',
        language: 'es-ES',
        file: 'cas.js',
        domain: 'derechospasajeros.com'
      },
      {
        code: 'eng',
        iso: 'en',
        name: 'English',
        language: 'en',
        file: 'eng.js',
        domain: 'paxrights.com'
      }
    ],
    lazy: true,
    langDir: 'lang',
    baseUrl: 'https://dretspassatgers.com',
    detectBrowserLanguage: false,
    differentDomains: (process.env.NODE_ENV === 'production'),
    strategy: 'prefix_except_default'
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
  },

  googleFonts: {
    families: {
      'Space+Mono': [400]
    }
  }
})