<template>
  <div class="shop">
    <ShopHeader />
    <div class="shop__items">
      <ShopSidebar class="shop__items-sidebar" />
      <CatalogShop class="shop__items-catalog" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop {
  display: flex;
  flex-direction: column;

  &__items {
    display: flex;
    flex-direction: row;
    gap: 35px;

    &-sidebar {
      flex: 0 0 260px;
    }

    &-catalog {
      display: flex;
      flex-grow: 1;
    }
  }
}
</style>
