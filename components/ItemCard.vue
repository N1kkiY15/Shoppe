<template>
  <div class="item-card">
    <img src="pictures/Img 01.png" class="item-card__image" />
    <div class="item-card__details">Info</div>
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
    position: relative;
  }

  &__details {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 15px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    opacity: 0;
    transform: translateY(0%);
    transition: all 0.3s ease;
  }

  &__description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    line-height: var(--line-height-h3);
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

@media (width <= 376px) {
  .item-card {
    display: flex;
    flex-direction: column;
    gap: 6px;

    &__description {
      line-height: var(--line-height-body-small);
      gap: 4px;
    }
  }
}
</style>
