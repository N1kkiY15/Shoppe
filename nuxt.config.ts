// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-03-12",
  devtools: { enabled: true },
  css: ['@/assets/styles/index.scss'],
  components: true,
  modules: ["vue3-carousel-nuxt"],
  // app: {
  //   baseURL: '/shoppe'
  // }
  // alias: {
  //   'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
  //   'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
  //   'data': fileURLToPath(new URL('./assets/other/data', import.meta.url))
  // }
})