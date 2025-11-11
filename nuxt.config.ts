import { resolve } from 'path';
import __BUILD_TIME__ from './app/buildTime.js';
import appSEO from './data/seo.json';

export default defineNuxtConfig({
  compatibilityDate: '2025-01-23',
  devtools: { enabled: true },
  srcDir: './app',
  rootDir: __dirname,

  app: {
    head: appSEO,
  },

  css: ['~/assets/styles/main.scss'],

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
      path: '~/components/shared',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '~/components/entities',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '~/components/features',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '~/components/widgets',
      pattern: '**/*.vue',
      prefix: '',
    },
  ],

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || '',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
    },
  },

  devServer: {
    port: 3030,
  },

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
      __BUILD_TIME__,
    },
  },

  i18n: {
    vueI18n: '~/providers/i18n/i18n.config.ts',
    defaultLocale: 'ru',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  // В Nuxt 3 с SSR ошибки 404 могут не попадать в error.vue, если сервер не настроен на это.
  // Кастомная обработка ошибок:
  hooks: {
    'app:error'(error) {
      // Принудительно перенаправляем на error.vue при 404
      if (error.statusCode === 404) {
        return sendRedirect(error.event, '/404', 404);
      }
    },
  },
});
