<template>
  <nav v-if="props.totalPages > 1" class="pagination">
    <button
      v-show="props.currentPage !== 1"
      @click="previousPage"
      class="pagination__item">
      <
    </button>
    <ul class="pagination">
      <li
        v-for="pageIndex in props.totalPages"
        :key="pageIndex"
        class="pagination__item"
        @click="changingPage(pageIndex)"
        :class="{ activePage: isActive(pageIndex) }">
        {{ pageIndex }}
      </li>
    </ul>
    <button
      v-show="props.totalPages !== props.currentPage"
      @click="nextPage"
      class="pagination__item">
      >
    </button>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<pages>();

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
  totalPages: number;
  currentPage: number;
}

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
    cursor: pointer;
  }
}
</style>
