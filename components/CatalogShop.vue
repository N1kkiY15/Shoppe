<template>
  <div class="catalog-shop">
    <div class="catalog-shop__list">
      <ItemCard
        v-for="cards in displayedItems"
        :key="cards.id"
        :title="cards.title"
        :price="cards.price"
        :image="cards.image"
        size="medium"
      />
    </div>
    <DefaultPagination
      :totalPages="totalPages"
      :currentPage="currentPage"
      @changePage="changePage"
      @previousPage="previousPage"
      @nextPage="nextPage"
    />
  </div>
</template>

<script lang="ts" setup>
import useScrollToTop from "composables/scrollToTop";
const currentPage = ref<number>(1);

const { isLoading, cardsOnPage, errorLoading, products, fetchByURL } = useFetch(
  "https://fakestoreapi.com/products"
);

onMounted(async () => {
  await fetchByURL();
});

const totalPages = computed(() =>
  Math.ceil(productsLength.value / cardsOnPage)
);

const productsLength = computed(() => products.value.length);

const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * cardsOnPage;
  return products.value.slice(startIndex, startIndex + cardsOnPage);
});

const { scrollToTop } = useScrollToTop();

const changePage = (page: number) => {
  currentPage.value = page;
  // scrollToTop()
};

const previousPage = () => {
  currentPage.value = currentPage.value - 1;
  // scrollToTop()
};

const nextPage = () => {
  currentPage.value = currentPage.value + 1;
  // scrollToTop()
};

watch(
  () => currentPage.value,
  (newValue: number) => {
    scrollToTop();
  }
);
</script>

<style lang="scss" scoped>
.catalog-shop {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-bottom: 250px;

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
    column-gap: 24px;
  }
}
</style>
