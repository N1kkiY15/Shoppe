<template>
  <transition name="slide">
    <div v-if="props.isOpen" class="shopping-cart">
      <div class="shopping-cart__header">
        <div class="shopping-cart__header-line">
          <h5 class="shopping-cart__heading">Shopping bag</h5>
          <button @click="closeBag">
            <ExitButton />
          </button>
        </div>

        <span>{{ shoppingCart.productCart.length }} items</span>
      </div>

      <ul class="shopping-cart__list">
        <li v-for="(item, index) of shoppingCart.productCart" :key="index">
          <div class="card">
            <img src="../assets/pictures/Img01.png" class="card__image" />
            <div class="card__body">
              <div class="card__body-info">
                <p class="card__body-title">{{ item.title }}</p>
                <p>Black / Medium</p>
                <p class="span-accent">${{ item.price }}</p>
              </div>

              <div class="card__body-qty">
                <p>QTY:</p>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="shopping-cart__footer">
        <div class="shopping-cart__footer-total">
          <p>Subtotal ({{ shoppingCart.productCart.length }} items)</p>
          <span>100 dollars</span>
        </div>

        <button-comp variant="secondary" size="xl">VIEW CART</button-comp>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import ExitButton from "../assets/pictures/svg/SvgComponents/ExitButton.vue";

interface props {
  isOpen: boolean;
}

const props = defineProps<props>();

const emit = defineEmits<{
  (e: "closeBag"): void;
}>();

const closeBag = () => {
  emit("closeBag");
};

import { useShoppingCart } from "#imports";

const shoppingCart = useShoppingCart();
</script>

<style scoped lang="scss">
.shopping-cart {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
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

    &-line {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__heading {
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 36px 24px;
    border-bottom: 1px solid var(--color-decorative);

    &:last-child {
      border-bottom: 1px solid var(--color-decorative);
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: 21px;
    padding: 21px 36px 24px;

    &-total {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

.card {
  display: flex;
  flex-direction: row;
  gap: 8px;

  &__image {
    width: 136px;
    height: 136px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    &-title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
