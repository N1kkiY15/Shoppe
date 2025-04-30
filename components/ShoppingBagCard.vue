<template>
  <div class="product-card">
    <img src="pictures/Img01.png" class="product-card__image" />
    <div class="product-card__content">
      <div class="product-card__info">
        <p class="product-card__title">{{ product.title }}</p>
        <p class="product-card__details">Black / Medium</p>
        <p class="product-card__price">${{ product.qty * product.price }}</p>
      </div>

      <div class="product-card__quantity">
        <span class="product-card__quantity-label">QTY:</span>
        <div class="product-card__quantity-controls">
          <button
            @click="$emit('decrement')"
            class="product-card__quantity-button"
          >
            -
          </button>
          <span class="product-card__quantity-value">
            {{ product.qty }}
          </span>

          <button
            @click="$emit('increment')"
            class="product-card__quantity-button"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <button @click="$emit('remove')" class="product-card__delete-button">
      <Xicon2 />
    </button>
  </div>
</template>

<script setup lang="ts">
import Xicon2 from "../assets/pictures/svg/SvgComponents/Xicon2.vue";
import type { Product } from "~/types/product";

defineProps<{
  product: Product;
}>();

defineEmits(["increment", "decrement", "remove"]);

</script>

<style scoped lang="scss">
.product-card {
  position: relative;
  display: flex;
  gap: 8px;

  &__image {
    width: 136px;
    height: 136px;
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    margin: 0;
    max-width: 130px;
  }

  &__details {
    color: var(--color-text);
    font-size: 14px;
    margin: 0;
  }

  &__price {
    font-weight: bold;
    margin: 0;
    color: var(--color-accent);
  }

  &__quantity {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: var(--color-text);
  }

  &__quantity-label {
    display: inline-block;
  }

  &__quantity-controls {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__quantity-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 5px;
    font-size: 14px;
  }

  &__quantity-value {
    min-width: 20px;
    text-align: center;
  }

  &__delete-button {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
  }
}
</style>
