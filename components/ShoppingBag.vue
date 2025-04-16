<template>
  <transition name="slide">
    <div v-if="props.isOpen" class="shopping-cart">
      <div class="shopping-cart__header">
        <div class="shopping-cart__header-line">
          <button
            @click="closeBag"
            class="shopping-cart__close-button shopping-cart__close-button--left"
          >
            <mark-left />
          </button>
          <h5 class="shopping-cart__title">Shopping bag</h5>
          <button
            @click="closeBag"
            class="shopping-cart__close-button shopping-cart__close-button--right"
          >
            <ExitButton />
          </button>
        </div>

        <span class="shopping-cart__items-count">
          {{ shoppingCart.productCart.length }} items
        </span>
      </div>

      <ul class="shopping-cart__products-list">
        <li
          v-for="(item, index) of shoppingCart.productCart"
          :key="index"
          class="shopping-cart__product-item"
        >
          <div class="product-card">
            <img
              src="../assets/pictures/Img01.png"
              class="product-card__image"
            />
            <div class="product-card__content">
              <div class="product-card__info">
                <p class="product-card__title">{{ item.title }}</p>
                <p class="product-card__details">Black / Medium</p>
                <p class="product-card__price">${{ item.price }}</p>
              </div>

              <div class="product-card__quantity">
                <span class="product-card__quantity-label">QTY:</span>
                <div class="product-card__quantity-controls">
                  <button
                    @click="shoppingCart.incrementProduct(item.id)"
                    class="product-card__quantity-button"
                  >
                    +
                  </button>
                  <span class="product-card__quantity-value">{{
                    item.qty
                  }}</span>
                  <button
                    @click="shoppingCart.decrementProduct(item.id)"
                    class="product-card__quantity-button"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <button
              @click="shoppingCart.removeProduct(item.id)"
              class="product-card__delete-button"
            >
              <Xicon2 />
            </button>
          </div>
        </li>
      </ul>

      <div class="shopping-cart__footer">
        <div class="shopping-cart__summary">
          <p class="shopping-cart__summary-text">
            Subtotal ({{ shoppingCart.productCart.length }} items)
          </p>
          <span class="shopping-cart__summary-total">
            ${{ shoppingCart.totalPrice }}
          </span>
        </div>

        <button-comp
          variant="secondary"
          size="xl"
          class="shopping-cart__view-cart-button"
        >
          VIEW CART
        </button-comp>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import ExitButton from "../assets/pictures/svg/SvgComponents/ExitButton.vue";
import Xicon2 from "../assets/pictures/svg/SvgComponents/Xicon2.vue";
import MarkLeft from "../assets/pictures/svg/SvgComponents/MarkLeft.vue";
import { useShoppingCart } from "#imports";

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "closeBag"): void;
}>();

const closeBag = () => {
  emit("closeBag");
};

const shoppingCart = useShoppingCart();
</script>

<style scoped lang="scss">
.shopping-cart {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 100vh;
  background: white;
  z-index: 3;
  overflow-y: auto;
  border-left: 1px solid var(--color-decorative);

  &__header {
    display: flex;
    flex-direction: column;
    gap: 17px;
    padding: 72px 36px 5px;
  }

  &__header-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    margin: 0;
  }

  &__items-count {
    color: var(--color-text);
    font-size: 14px;
  }

  &__close-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    &--right {
      margin-left: auto;
    }

    &--left {
      display: none;
    }
  }

  &__products-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 36px 24px;
    margin: 0;
    list-style: none;
  }

  &__product-item {
    &:last-child {
      border-bottom: none;
    }
  }

  &__footer {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 21px;
    padding: 21px 36px 24px;
    border-top: 1px solid var(--color-decorative);
    background-color: white;
  }

  &__summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__summary-text {
    margin: 0;
    font-size: 14px;
  }

  &__summary-total {
    font-weight: bold;
  }

  &__view-cart-button {
    width: 100%;
  }
}

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

@media (width <= 375px) {
  .shopping-cart {
    width: 100%;
    border-left: none;

    &__header {
      padding: 16px 16px 3px;
    }

    &__title {
      margin: 0 auto;
    }

    &__close-button {
      &--left {
        display: block;
      }

      &--right {
        display: none;
      }
    }

    &__items-count {
      font-size: 12px;
    }

    &__products-list {
      padding: 0 16px 16px;
      margin-bottom: 135px;
      border-bottom: none;
    }

    &__footer {
      width: 100%;
      padding: 24px 12px 36px;
    }
  }
}
</style>
