<template>
  <div>
    <div class="answers__item-header">
      <h3 class="answers__item-author">{{ props.author }}</h3>
      <div class="answers__item-date">6 May, 2020</div>
    </div>

    <div class="answers__item-rating">
      <StarFilled v-for="star in props.rating" :key="star" />

      <StarPool v-for="star in MAX_NUMBER_OF_STARS - props.rating" :key="star" />
    </div>

    <h5 class="answers__item-text">
      {{ props.text }}
    </h5>
  </div>
</template>

<script setup lang="ts">
import StarFilled from "../assets/pictures/svg/SvgComponents/StarFilled.vue";
import StarPool from "../assets/pictures/svg/SvgComponents/StarPool.vue";


const MAX_NUMBER_OF_STARS = 5;

interface Authors {
  author: string;
  text: string;
  rating: number;
}

const props = defineProps<Authors>();
</script>

<style scoped lang="scss">
.answers {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--color-decorative);
    width: 100%;
    padding-bottom: 39px;

    &:last-child {
      margin-bottom: 0;
      border-bottom: none;
    }
  }

  &__item-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  &__item-author {
    margin: 0;
  }

  &__item-date {
    color: var(--color-text);
    font-size: var(--font-size-text-medium);
    font-weight: var(--font-weight-regular);
  }

  &__item-rating {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 24px;
  }

  &__item-text {
    color: var(--color-text);
    margin: 0;
    font-weight: var(--font-weight-regular);
  }
}
</style>
