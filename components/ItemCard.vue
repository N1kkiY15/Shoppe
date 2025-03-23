<template>
  <div class="item-card">
    <img src="pictures/Img 01.png" class="item-card__image" />
    <div class="item-card__description">
      <h3 class="item-card__description-title">{{ props.title }}</h3>
      <span class="item-card__description-price span-accent"
        >$ {{ props.price }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface CardInfo {
  title: string;
  image: string;
  price: number;
}

const props = defineProps<CardInfo>();
</script>

<style lang="scss" scoped>
.item-card {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__image {
    max-height: 380px;
    max-width: 380px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 16px;

    &-title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: clamp(0.875rem, 0.768rem + 0.536vw, 1.25rem);
    }

    &-price {
      font-size: clamp(0.75rem, 0.607rem + 0.714vw, 1.25rem);
    }
  }
}
</style>
