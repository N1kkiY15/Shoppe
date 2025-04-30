<template>
  <div class="shop">
    <ShopHeader class="shop__desktop" />
    <ShopHeaderMobile class="shop__mobile" />

    <div class="shop__items">
      <ShopSidebar class="shop__items-sidebar" @submitSearch="handleSearch"  @category="handleCategory"
      />
      <CatalogShop class="shop__items-catalog" :name="name" :category="categoryOfProducts"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShopHeaderMobile from "../components/ShopHeaderMobile.vue";

const name = ref<string>();
const categoryOfProducts = ref<string>();

const handleSearch = (searchItem: string) => {
  name.value = searchItem;
};

const handleCategory = (category: string) => {
  categoryOfProducts.value = category;
};

</script>

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

  &__mobile {
    display: none;
  }
}

@media (width <= 375px) {
  .shop {
    &__desktop {
      display: none;
    }

    &__mobile {
      display: flex;
    }

    &__items {
      &-sidebar {
        display: none;
      }
    }
  }
}
</style>
