<template>
  <article class="review-card">
    <header class="review-card__header">
      <h3 class="review-card__author">{{ props.author }}</h3>
      <time class="review-card__date">6 May, 2020</time>
    </header>

    <div class="review-card__rating">
      <StarFilled v-for="star in props.rating" :key="star" />
      <StarPool v-for="star in MAX_NUMBER_OF_STARS - props.rating" :key="star" />
    </div>

    <blockquote class="review-card__content">
      {{ props.text }}
    </blockquote>
  </article>
</template>

<script setup lang="ts">
import StarFilled from "SvgComponents/StarFilled.vue";
import StarPool from "svg/SvgComponents/StarPool.vue";

interface ReviewProps {
  author: string;
  text: string;
  rating: number;
}

const props = defineProps<ReviewProps>();
const MAX_NUMBER_OF_STARS = 5;
</script>

<style scoped lang="scss">
.review-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--color-border);
  width: 100%;

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__author {
    margin: 0;
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);
  }

  &__date {
    color: var(--color-text-secondary);
    font-size: var(--font-size-small);
  }

  &__rating {
    display: flex;
    gap: 0.6rem;
  }

  &__content {
    margin: 0;
    color: var(--color-text-primary);
    font-size: var(--font-size-medium);
    line-height: 1.5;
  }
}
</style>