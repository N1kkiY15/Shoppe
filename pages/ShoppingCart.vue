<template>
  <div class="shopping-cart">
    <h1 class="shopping-cart__header">Shopping cart</h1>
    <div class="shopping-cart__container">
      <div class="shopping-cart__view">
        <ul class="shopping-cart__list">
          <li
            v-for="(item, index) of shoppingCart.productCart"
            key="index"
            class="shopping-cart__list-item"
          >
            <CartCard
              :product="item"
              @increment="shoppingCart.incrementProduct(item.id)"
              @decrement="shoppingCart.decrementProduct(item.id)"
              @remove="shoppingCart.removeProduct(item.id)"
            />
          </li>
        </ul>

        <div class="shopping-cart__coupon">
          <default-text-input placeholder="Coupon Code" size="medium" />
          <button-comp variant="primary" size="l">APPLY COUPON</button-comp>
        </div>
      </div>

      <div class="shopping-cart__totals">
        <div class="shopping-cart__description">
          <h2 class="shopping-cart__totals-heading">Cart totals</h2>
          <div class="shopping-cart__totals-info totals-info">
            <h5 class="totals-info__text">SUBTOTAL</h5>
            <h5 class="totals-info__text">$ {{ shoppingCart.totalPrice }}</h5>
            <h5 class="totals-info__text">SHIPPING</h5>
            <span class="totals-info__text"
              >Shipping costs will be calculated once you have provided address.
            </span>
          </div>

          <div class="totals-info__total">
            <span class="totals-info__text">TOTAl</span>
            <span class="totals-info__text"
              >${{ shoppingCart.totalPrice }}</span
            >
          </div>
        </div>
        <NuxtLink to="/checkout">
          <button-comp variant="primary" size="xl"
            >PROCEED TO CHECKOUT
          </button-comp>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShoppingCart } from "#imports";
import CartCard from "../components/CartCard.vue";

const shoppingCart = useShoppingCart();
</script>

<style scoped lang="scss">
.shopping-cart {
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;

  &__header {
    margin: 0 auto 64px;
  }

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__view {
    display: flex;
    flex-direction: column;
    gap: 156px;
    width: 580px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 570px;

    &-item {
      padding-bottom: 40px;
      border-bottom: 1px solid #e4e4e4;
      width: 100%;
    }
  }

  &__coupon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__totals {
  }

  &__description {
    display: flex;
    max-width: 460px;
    gap: 25px;
    flex-direction: column;
    justify-content: start;
    padding: 15px 15px 20px;
    background-color: #e4e4e4;
    border-radius: 4px;
    margin-bottom: 24px;
  }
}

.totals-info {
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  column-gap: 128px;
  row-gap: 28px;
  padding-bottom: 23px;
  border-bottom: 1px solid var(--color-decorative);

  &__total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

@media (width <= 375px) {
  .shopping-cart {
    margin-bottom: 96px;

    &__header {
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      margin-right: auto;
      margin-bottom: 16px;
    }

    &__container {
      flex-direction: column;
    }

    &__view {
      width: 100%;
      gap: 24px;
      margin-bottom: 45px;
    }

    &__list {
      gap: 22px;

      &-item {
        padding-bottom: 0;
        border-bottom: none;
        width: 100%;
      }
    }

    &__coupon {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    &__totals {
      gap: 25px;

      &-heading {
        font-size: 16px;
      }
    }
  }

  .totals-info {
    column-gap: 45px;

    &__text {
      font-size: 12px;
    }
  }
}
</style>
