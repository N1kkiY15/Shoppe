<template>
  <div class="catalog-latest">
    <ItemCard
      v-for="cards in displayedItems"
      :key="cards.id"
      :title="cards.title"
      :price="cards.price"
      :image="cards.image"
      size="big"
    />
  </div>
</template>

<script lang="ts" setup>
const { isLoading, cardsOnPage, errorLoading, products, fetchByURL } = useFetch(
  "https://fakestoreapi.com/products"
);

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
  row-gap: 86px;
  column-gap: 57px;
  margin-bottom: 250px;
}
</style>
