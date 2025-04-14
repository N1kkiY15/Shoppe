import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-04-14',
  devtools: { enabled: true },
  css: ['@/assets/styles/index.scss'],
  components: true,
  modules: ['@pinia/nuxt'],
  vite: {
    resolve: {
      alias: {
        'images': path.resolve(__dirname, './assets/images'),
        'fonts': path.resolve(__dirname, './assets/fonts'),
        'style': path.resolve(__dirname, './assets/styles'),
        'pictures': path.resolve(__dirname, './assets/pictures'),
        'svg': path.resolve(__dirname, './assets/pictures/svg'),
        'SvgComponents': path.resolve(__dirname, './assets/pictures/svg/SvgComponents'),
        'composables': path.resolve(__dirname, './composables'),
      },
    },
  },
})