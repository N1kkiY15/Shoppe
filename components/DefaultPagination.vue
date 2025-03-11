<template>
  <nav v-if="props.pageNumber > 1" class="pagination">
    <button
      v-show="props.currentPage !== 1"
      @click="previousPage"
      class="pagination__item">
      <
    </button>
    <ul class="pagination">
      <li
        v-for="page in props.pageNumber"
        :key="page"
        class="pagination__item"
        @click="changingPage(page)"
        :class="{ activePage: isActive(page) }">
        {{ page }}
      </li>
    </ul>
    <button
      v-show="props.pageNumber !== props.currentPage"
      @click="nextPage"
      class="pagination__item">
      >
    </button>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emits = defineEmits<{
  (event: "changePage", page: number): void;
  (event: "previousPage"): void;
  (event: "nextPage"): void;
}>();

const changingPage = (page: number) => {
  emits("changePage", page);
};

const previousPage = () => {
  emits("previousPage");
};

const nextPage = () => {
  emits("nextPage");
};

interface pages {
  pageNumber: number;
  currentPage: number;
}

const props = defineProps<pages>();

const isActive = (page: number) => page === props.currentPage;
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: row;
  gap: 8px;

  &__item {
    width: 40px;
    height: 40px;
    border: 1px solid var(--color-decorative);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
