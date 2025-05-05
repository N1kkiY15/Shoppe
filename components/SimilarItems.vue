<template>
  <div class="similar-items">
    <h2 class="similar-items__heading">Similar Items</h2>
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
          :product="cards"
          class="mobile"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDisplayedItems from "composables/useDisplayedItems";

const REQUIRED_NUMBER_OF_CARDS_SIMILAR = 3;

interface PropsCategory {
  category: string;
}

const propsCategory = defineProps<PropsCategory>();

const { displayedItems, isLoading } = useDisplayedItems(
  REQUIRED_NUMBER_OF_CARDS_SIMILAR,
  propsCategory.category,
);
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
  .similar-items {
    gap: 13px;

    &__heading {
      font-size: 16px;
      line-height: 27px;
    }
  }
  .catalog-latest {
    display: flex;
    flex-direction: row;
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 16px;
    padding-right: 20px;
    margin-bottom: 10px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .mobile {
    flex: 0 0 calc(50% - 8px);
  }
}
</style>
