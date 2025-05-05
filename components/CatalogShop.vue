<template>
  <div class="catalog-shop">
    <div v-if="!isLoading" class="catalog-shop__list">
      <ItemCard
        v-for="cards in displayedItems"
        :key="cards.id"
        :product="cards"
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

interface Props {
  name?: string;
  categoryOfProducts?: string;
}

const props = defineProps<Props>();

const currentPage = ref<number>(1);
let cardNumber: number = 6;

const { isLoading, errorLoading, data, fetchByURL } = useFetch<Product[]>(
  "https://fakestoreapi.com/products",
);

const REQUIRED_NUMBER_OF_CARDS = 6;

onMounted(async () => {
  await fetchByURL();
});

const productsLength = computed(() => data.value?.length);

const totalPages = computed(() => {
  return productsLength.value
    ? Math.ceil(productsLength.value / REQUIRED_NUMBER_OF_CARDS)
    : 0;
});

const displayedItems = computed(() => {
  let filteredItems = data.value ?? [];

  if (props.categoryOfProducts) {
    filteredItems = filteredItems?.filter(
      (item) => item.category === props.categoryOfProducts,
    );
  }

  const searchTerm = props.name?.toLowerCase();
  filteredItems = filteredItems?.filter(
    (item) => !searchTerm || item.title.toLowerCase().includes(searchTerm),
  );

  const startIndex = (currentPage.value - 1) * REQUIRED_NUMBER_OF_CARDS;
  return filteredItems?.slice(
    startIndex,
    startIndex + REQUIRED_NUMBER_OF_CARDS,
  );
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
