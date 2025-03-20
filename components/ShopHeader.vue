<template>
  <div class="items__header">
    <h1>Shop The Latest</h1>
    <NuxtLink
      v-if="!showElement"
      to="/shop"
      class="span-accent items__header-span"
      >View All</NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const showElement = computed(() => !route.meta?.isHomePage);
</script>

<style lang="scss" scoped>
.items__header {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 39px;

  &-span {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-medium);
  }
}
</style>
