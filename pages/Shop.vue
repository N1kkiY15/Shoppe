<template>
  <div class="shop">
    <ShopHeader />
    <div class="shop__item-list">
      <ShopSidebar />
      <ItemsList />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.shop {
  display: flex;
  flex-direction: column;
}

.shop__item-list {
  display: flex;
  flex-direction: row;
  gap: 35px;
}
</style>
