<template>
  <p class="description">
    {{ description }}
  </p>
</template>

<script lang="ts" setup>

const description = inject('productDescription');

</script>

<style lang="scss" scoped>
</style>