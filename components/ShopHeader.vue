<template>
    <div class="items__header">
      <h1>Shop The Latest</h1>
      <NuxtLink v-if="!showElement" to="/shop">View All</NuxtLink>
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
    justify-content: space-between;
    margin-bottom: 39px;
  }
</style>