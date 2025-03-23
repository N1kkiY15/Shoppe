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
