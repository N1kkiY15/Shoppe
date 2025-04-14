<template>
  <div class="catalog-shop">
    <div v-if="!isLoading" class="catalog-shop__list">
      <ItemCard
        v-for="cards in displayedItems"
        :key="cards.id"
        :title="cards.title"
        :price="cards.price"
        :image="cards.image"
        @click="goToPage(cards.id)"
      />
    </div>

    <div v-else class="catalog-shop__list">
      <LoadingSkeletonCard v-for="cards in cardNumber" :key="cards" />
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
import type { Product } from "~/types/product";

const currentPage = ref<number>(1);
let cardNumber: number = 6;

const { navigateToPage } = goToPageItem();

const goToPage = (value: number) => {
  navigateToPage(value);
};

const { isLoading, errorLoading, data, fetchByURL } = useFetch<Product[]>(
  "https://fakestoreapi.com/products",
);

const REQUIRED_NUMBER_OF_CARDS = 6;

onMounted(async () => {
  await fetchByURL();
});

const totalPages = computed(() =>
  Math.ceil(productsLength.value / REQUIRED_NUMBER_OF_CARDS),
);

const productsLength = computed(() => data.value?.length);

const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * REQUIRED_NUMBER_OF_CARDS;
  return data.value?.slice(startIndex, startIndex + REQUIRED_NUMBER_OF_CARDS);
});


const changePage = (page: number) => {
  currentPage.value = page;
};

const previousPage = () => {
  currentPage.value = currentPage.value - 1;
};

const nextPage = () => {
  currentPage.value = currentPage.value + 1;
};

watch(
  () => currentPage.value,
  (newValue: number) => {
    scrollToTop();
  },
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
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-template-rows: min-content;
    row-gap: 70px;
    column-gap: 24px;
  }
}

@media (width <= 375px) {
  .catalog-shop {
    margin-bottom: 50px;
    gap: 0;

    &__list {
      grid-template-columns: repeat(2, minmax(136px, 1fr));
      column-gap: 16px;
      row-gap: 24px;
      margin-bottom: 94px;
    }
  }
}
</style>
