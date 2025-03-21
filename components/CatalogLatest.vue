<template>
  <div>

    <div v-if="isLoading" class="catalog-latest">
      <LoadingSkeletonCard v-for="cards in cardNumber" :key="cards" />
    </div>

    <div v-else class="catalog-latest">
      <ItemCard
        v-for="cards in displayedItems"
        :key="cards.id"
        :title="cards.title"
        :price="cards.price"
        :image="cards.image"
      />
    </div>

  </div>
</template>

<script lang="ts" setup>

const { isLoading, cardsOnPage, errorLoading, products, fetchByURL } = useFetch(
  "https://fakestoreapi.com/products"
);

let cardNumber: number = 6;


onMounted(async () => {
  await fetchByURL();
});

const displayedItems = computed(() => {
  const filteredProducts = products.value.filter(
    (product: { category: string }) => product.category === "electronics"
  );
  return filteredProducts.slice(0, cardsOnPage);
});
</script>

<style lang="scss" scoped>
.catalog-latest {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 498px;
  row-gap: 86px;
  column-gap: 57px;
  margin-bottom: 250px;
}
</style>
