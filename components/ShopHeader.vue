<template>
  <div class="items__header">
    <h1 class="items__header-heading">Shop The Latest</h1>
    <NuxtLink
      v-if="!showElement"
      class="span-accent items__header-span"
      to="/shop"
      >View All
    </NuxtLink>
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

  &-heading {
    font-size: clamp(1rem, 0.696rem + 1.518vw, 2.063rem);
  }

  &-span {
    font-size: clamp(0.75rem, 0.607rem + 0.714vw, 1.25rem);
  }
}

@media (width < 375px) {
  .items__header {
    display: none;
  }
}
</style>
