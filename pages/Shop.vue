<template>
  <div class="shop">
    <ShopHeader />
    <div class="shop__item-list">
      <ShopSidebar />
      <CatalogShop />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop {
  display: flex;
  flex-direction: column;

  &item-list {
    display: flex;
    flex-direction: row;
    gap: 35px;
  }
}
</style>
