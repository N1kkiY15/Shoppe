import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-03-12",
  devtools: { enabled: true },
  css: ['@/assets/styles/index.scss'],
  components: true,
  modules: ["vue3-carousel-nuxt"],
  vite: {
    resolve: {
      alias: {
        'images': path.resolve(__dirname, './assets/images'),
        'fonts': path.resolve(__dirname, './assets/fonts'),
        'style': path.resolve(__dirname, './assets/styles'),
        'svg': path.resolve(__dirname, './assets/pictures/svg'),
        'SvgComponents': path.resolve(__dirname, './assets/pictures/svg/SvgComponents'),
        'composables': path.resolve(__dirname, './composables'),
      },
    },
  },
})