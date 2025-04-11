<template>
  <nav v-if="props.totalPages > 1" class="pagination">
    <button
      v-show="props.currentPage !== 1"
      class="pagination__item pagination__nav-button--prev"
      aria-label="Previous page"
      @click="previousPage"
    >
      <MarkLeft class="pagination__icon" />
    </button>

    <ul class="pagination__list">
      <li
        v-for="pageIndex in props.totalPages"
        class="pagination__item"
        :key="pageIndex"
        :class="{
          'pagination__item--active': isActive(pageIndex),
        }"
        @click="changePage(pageIndex)"
      >
        {{ pageIndex }}
      </li>
    </ul>

    <button
      v-show="props.totalPages !== props.currentPage"
      class="pagination__item pagination__nav-button--next"
      aria-label="Next page"
      @click="nextPage"
    >
      <MarkRight class="pagination__icon" />
    </button>
  </nav>
</template>

<script setup lang="ts">
import MarkRight from "SvgComponents/MarkRight.vue";
import MarkLeft from "../assets/pictures/svg/SvgComponents/MarkLeft.vue";

const props = defineProps<pages>();

const emits = defineEmits<{
  (event: "changePage", page: number): void;
  (event: "previousPage"): void;
  (event: "nextPage"): void;
}>();

const changePage = (page: number) => {
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
  align-items: center;
  gap: 8px;

  &__list {
    display: flex;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    width: 40px;
    height: 40px;
    border: 1px solid var(--color-decorative);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &--active {
      background-color: var(--color-main);
      color: white;
    }

    &:hover:not(&--active) {
      background-color: var(--color-decorative-light);
    }
  }

  &__nav-button {
    &:hover {
      opacity: 0.8;
    }
  }

  &__icon {
    width: 16px;
    height: 16px;
  }
}

@media (width <= 376px) {
  .pagination {
    &__item {
      width: 20px;
      height: 20px;
      font-size: 10px;
    }

    &__icon {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
