import { resolve } from 'path';
import appStamp from './app/buildTime.js';
import appSEO from './data/seo.json';

export default defineNuxtConfig({
  srcDir: './app',
  app: {
    head: appSEO,
  },

  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: '404',
        path: '/:pathMatch(.*)*',
        file: '~/layouts/error.vue',
      });
    },
  },

  css: ['@/assets/styles/main.scss'],

  modules: [
    '@nuxt/test-utils',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
  ],

  elementPlus: {
    importStyle: 'scss',
  },

  alias: {
    '@': resolve(__dirname, './app'),
    '~~': resolve(__dirname, './'),
  },

  components: [
    {
      path: '@/components/shared',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '@/components/entities',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '@/components/features',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '@/components/widgets',
      pattern: '**/*.vue',
      prefix: '',
    },
  ],

  runtimeConfig: {
    public: {
      baseUrl:
        process.env.NODE_ENV === 'production'
          ? 'https://klimov-rv.github.io/ton-starter/'
          : 'http://localhost:3030',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
    },
  },

  devServer: {
    port: 3030,
  },

  ssr: false,
  target: 'static',

  nitro: {
    static: true,
    prerender: {
      routes: ['/'],
    },
  },

  compatibilityDate: '2025-01-23',
  devtools: { enabled: true },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        paths: {
          '@/*': ['./app/*'],
        },
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/styles/global/element.scss" as element;
          @use "~/assets/styles/global/_colors.scss" as *;
          `,
        },
      },
    },
    define: {
      __BUILD_TIME__: appStamp,
    },
  },

  i18n: {
    vueI18n: '~/providers/i18n/i18n.config.ts',
    defaultLocale: 'ru',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
});
