<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

useHead({ 
  title: 'Shoppe', // задать title для каждой страницы (роутинг и метатеги в Nuxt)
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/SH.ico'
    }
  ]
}) 

</script>

<style scoped>

</style>
