<template>
  <div class="item-card">
    <div class="item-card__wrapper">
      <img src="pictures/Img 01.png" class="item-card__wrapper-image" />
      <div class="item-card__wrapper-details hover-details">
        <a class="hover-details__button">ADD TO CART</a>
      </div>
    </div>
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
  cursor: pointer;

  &__wrapper {
    position: relative;
    border-radius: 8px;

    &-image {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 8px;
    }

    &-details {
      height: 20%;
    }

    &:hover &-details {
      opacity: 1;
      visibility: visible;
    }
  }

  .hover-details {
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(216, 216, 216, 0.5);
    color: white;
    padding: 15px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    &__button {
      color: black;
      font-weight:var(--font-weight-bold);
    }
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
    gap: 6px;

    &__description {
      line-height: var(--line-height-body-small);
      gap: 4px;
    }
  }
}
</style>