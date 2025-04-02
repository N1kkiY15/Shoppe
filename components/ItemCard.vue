<template>
  <article class="product-card">
    <div class="product-card__image-wrapper">
      <img
          src="pictures/Img 01.png"
          :alt="props.title"
          class="product-card__image"
      />
      <div class="product-card__overlay">
        <button class="product-card__add-button">
          ADD TO CART
        </button>
      </div>
    </div>
    <div class="product-card__info">
      <h3 class="product-card__title">{{ props.title }}</h3>
      <span class="product-card__price">$ {{ props.price }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
interface CardInfo {
  title: string;
  image: string;
  price: number;
}

const props = defineProps<CardInfo>();
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  cursor: pointer;

  &__image-wrapper {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(216, 216, 216, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    transform: translateY(10px);
  }

  &__add-button {
    background: transparent;
    border: none;
    color: black;
    font-weight: var(--font-weight-bold);
    cursor: pointer;
    padding: 8px 16px;
    pointer-events: all;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: clamp(0.875rem, 0.768rem + 0.536vw, 1.25rem);
    line-height: var(--line-height-h3);
    margin: 0;
  }

  &__price {
    font-size: clamp(0.75rem, 0.607rem + 0.714vw, 1.25rem);
    color: var(--color-accent);
  }

  &:hover &__overlay {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &:hover &__image {
    transform: scale(1.02);
  }
}

@media (width <= 376px) {
  .product-card {
    gap: 6px;

    &__info {
      gap: 4px;
    }

    &__title {
      line-height: var(--line-height-body-small);
    }
  }
}
</style>