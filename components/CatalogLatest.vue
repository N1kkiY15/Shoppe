<template>
  <div>
    <div class="catalog-latest">
      <template v-if="isLoading">
        <LoadingSkeletonCard
          v-for="n in REQUIRED_NUMBER_OF_CARDS_LATEST"
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
const REQUIRED_NUMBER_OF_CARDS_LATEST = 6;

const { displayedItems, goToPage, isLoading } = useDisplayedItems(
  REQUIRED_NUMBER_OF_CARDS_LATEST,
);
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
