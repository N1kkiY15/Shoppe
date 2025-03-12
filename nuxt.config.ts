// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-03-12",
  devtools: { enabled: true },
  css: ['@/assets/styles/index.scss'],
  components: true
})