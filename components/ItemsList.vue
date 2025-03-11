<template>
  <div class="items">
    <div class="items__list">
      <ItemCard
        v-for="cards in productsLength"
        :key="cards"
        :title="products[cards - 1].title"
        :price="products[cards - 1].price"
        :image="products[cards - 1].image"
      />
    </div>
    <DefaultPagination 
    v-if="pageNumber !== undefined"
    :pageNumber="pageNumber"
    /> 
  </div>
</template>

<script lang="ts" setup>
// import useFetchProducts from '~/composables/useFetch';

const cardsOnPage: number = 6;
const currentPage = ref<number>(1);

// const changePage = (page) => {
//   currentPage.value = page;
// };

// const isActive = (page) => page === currentPage.value;

const { isLoading, errorLoading, products, fetchByURL } = useFetch(
  "https://fakestoreapi.com/products"
);

onMounted(async () => {
  await fetchByURL();
});


const pageNumber = computed(() => Math.ceil(productsLength.value / cardsOnPage));

const productsLength = computed(() => products.value.length);




// const displayedItems = computed(() => {
//   const startIndex = (currentPage.value - 1) * cardsOnPage;
//   return products.value.slice(startIndex, startIndex + cardsOnPage);
// });

// console.log(displayedItems);
</script>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-direction: column;
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
