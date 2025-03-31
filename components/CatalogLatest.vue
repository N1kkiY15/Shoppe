<template>
  <div>
    <div class="catalog-latest">
      <template v-if="isLoading">
        <LoadingSkeletonCard 
          v-for="n in REQUIRED_NUMBER_OF_CARDS" 
          :key="`skeleton-${n}`" 
        />
      </template>
      <template v-else>
        <ItemCard
        v-for="cards in displayedItems"
        :key="cards.id"
        :title="cards.title"
        :price="cards.price"
        :image="cards.image"
        @click="goToPage(cards.id)"
        />
      </template>
  </div>
  </div>
</template>

<script lang="ts" setup>
const { isLoading, errorLoading, data, fetchByURL } = useFetch(
  "https://fakestoreapi.com/products"
);

import type { Product } from '~/types/product';
const { navigateToPage } = goToPageItem();

const goToPage = (value: number) => {
  navigateToPage(value);
}

const REQUIRED_NUMBER_OF_CARDS = 6;

onMounted(async () => {
  await fetchByURL();
});

const displayedItems = computed(() => {
  const products = data.value as Product[]; // Assert type
  const filteredProducts = products.filter((product) =>
      product.category === "electronics"
  );
  return filteredProducts.slice(0, REQUIRED_NUMBER_OF_CARDS);
});


</script>

<style lang="scss" scoped>
.catalog-latest {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 86px;
  column-gap: 57px;
  margin-bottom: 250px;
}

@media (width <= 376px) { 
  .catalog-latest {
    grid-template-columns: repeat(2, minmax(136px, 1fr));
    column-gap: 16px;
    row-gap: 24px;
    margin-bottom: 94px;
}

}
</style>
