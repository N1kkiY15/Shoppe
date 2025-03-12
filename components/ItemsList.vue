<template>
  <div class="items">
    <div class="items__list">
      <ItemCard
        v-for="cards in displayedItems"
        :key="cards.id"
        :title="cards.title"
        :price="cards.price"
        :image="cards.image"
      />
    </div>
    <DefaultPagination 
    v-if="totalPages !== undefined"
    :totalPages="totalPages"
    :currentPage="currentPage"
    @changePage="changePage"
    @previousPage="previousPage"
    @nextPage="nextPage"
    /> 
  </div>
</template>

<script lang="ts" setup>

const cardsOnPage: number = 6;
const currentPage = ref<number>(1);

const { isLoading, errorLoading, products, fetchByURL } = useFetch(
  "https://fakestoreapi.com/products"
);

onMounted(async () => {
  await fetchByURL();
});


const totalPages = computed(() => Math.ceil(productsLength.value / cardsOnPage));

const productsLength = computed(() => products.value.length);

const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * cardsOnPage;
  return products.value.slice(startIndex, startIndex + cardsOnPage);
});

const changePage = (page:number) => {
  currentPage.value = page;
};

const previousPage = () => { 
  currentPage.value = currentPage.value - 1;
};

const nextPage = () => { 
  currentPage.value = currentPage.value + 1;
};

</script>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  gap: 39px;
  margin-bottom: 250px;

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
