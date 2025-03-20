<template>
  <div class="shop">
    <ShopHeader />
    <div class="shop__items">
      <ShopSidebar />
      <CatalogShop />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop {
  display: flex;
  flex-direction: column;

  &__items{
    display: flex;
    flex-direction: row;
    gap: 35px;
  }
}
</style>
