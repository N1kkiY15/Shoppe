<template>
  <article v-if="product" class="product-card">
    <div class="product-card__image-wrapper">
      <img
        src="pictures/Img01.png"
        :alt="product.title"
        class="product-card__image"
        @click="navigateToPage(product.id)"
      />

      <button
        class="product-card__overlay"
        @click="shoppingCart.addToCart(product)"
      >
        ADD TO CART
      </button>
    </div>
    <div class="product-card__info">
      <h3 class="product-card__title">{{ product.title }}</h3>
      <span class="product-card__price">$ {{ product.price }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useShoppingCart } from "../stores/ShoppingCart";
import type { Product } from "~/types/product";
import goToPageItem from "composables/goToPageItem";

defineProps<{
  product: Product; // Указываем тип
}>();

const { navigateToPage } = goToPageItem();

const shoppingCart = useShoppingCart();
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
    opacity: 1;
    visibility: hidden;
    transition: all 0.3s ease;
    transform: translateY(100%);
    border: none;
    color: black;
    font-weight: var(--font-weight-bold);
    cursor: pointer;
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
    visibility: visible;
    transform: translateY(0);
  }

  &:hover &__image {
    transform: scale(1.05);
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

    &__overlay {
      //transform: translateY(20px);
      padding: 5px;
    }

    &:hover &__overlay {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
}
</style>
