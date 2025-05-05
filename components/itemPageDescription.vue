<template>
  <p class="description">
    {{ description }}
  </p>
</template>

<script lang="ts" setup>
const description = inject("productDescription");
</script>

<style lang="scss" scoped>
@media (width < 376px) {
  .description {
    font-size: 12px;
  }

}
</style>
