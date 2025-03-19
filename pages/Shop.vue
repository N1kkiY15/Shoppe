<template>
  <div class="shop">
    <ShopHeader />
    <div class="shop__item-list">
      <ShopSidebar />
      <CatalogShop />
    </div>
  </div>
</template>

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
