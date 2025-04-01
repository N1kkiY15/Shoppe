<template>
  <div class="similar-items">
    <h2>Similar Items</h2>
    <div class="catalog-latest">
      <template v-if="isLoading">
        <LoadingSkeletonCard
          v-for="n in REQUIRED_NUMBER_OF_CARDS_SIMILAR"
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

<script setup lang="ts">
// const { isLoading, data, fetchByURL } = useFetch(
//   "https://fakestoreapi.com/products",
// );
//
// import type { Product } from "~/types/product";
// const { navigateToPage } = goToPageItem();
// const goToPage = (value: number) => {
//   navigateToPage(value);
// };

const REQUIRED_NUMBER_OF_CARDS_SIMILAR = 3;

interface PropsCategory {
  category: string;
}

const propsCategory = defineProps<PropsCategory>();

const { displayedItems, goToPage, isLoading } =
    useDisplayedItems(REQUIRED_NUMBER_OF_CARDS_SIMILAR, propsCategory.category);
</script>

<style scoped lang="scss">


.similar-items {
  display: flex;
  flex-direction: column;
  gap: 3em;
}
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
