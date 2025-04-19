<template>
  <div class="checkout">
    <h1 class="checkout__heading">Checkout</h1>
    <div class="checkout__container">
      <div class="checkout__coupon">
        <p>If you have a coupon code, please apply it below.</p>
        <div class="checkout__coupon-apply">
          <default-text-input placeholder="Coupon Code" size="medium" />
          <button-comp variant="primary" size="l">APPLY COUPON</button-comp>
        </div>
      </div>

      <div class="checkout__details">
        <h2>Billing Details</h2>
        <form class="checkout__form">
          <default-text-input
            placeholder="First name *"
            size="medium"
            class="checkout__form-item"
          />
          <default-text-input
            placeholder="last name *"
            size="medium"
            class="checkout__form-item"
          />
          <default-text-input
            placeholder="Company Name"
            size="medium"
            class="checkout__form-item"
          />
          <default-text-input
            placeholder="Country *"
            size="medium"
            class="checkout__form-item"
          />
          <default-text-input
            placeholder="Street Address *"
            size="medium"
            class="checkout__form-item"
          />
          <default-text-input
            placeholder="Postcode / ZIP *"
            size="medium"
            class="checkout__form-item"
          />
          <default-text-input
            placeholder="Town / City *"
            size="medium"
            class="checkout__form-item"
          />
          <default-text-input
            placeholder="Phone *"
            size="medium"
            class="checkout__form-item"
          />
          <default-text-input
            placeholder="Email *"
            size="medium"
            class="checkout__form-item"
          />

          <div class="checkout__form-checkbox">
            <default-checkbox
              text="Create an acoount?"
              form="rounded"
              size="medium"
            />
            <default-checkbox
              text="Ship to a different address?"
              form="rounded"
              size="medium"
            />
          </div>

          <default-text-input
            placeholder="Order notes"
            size="medium"
            class="checkout__form-item"
          />
        </form>
      </div>

      <div class="checkout__order">
        <h2>Your Order</h2>
        <div class="checkout__order-container order-container">
          <div class="order-container__info">
            <div class="order-container__total">
              <h5>PRODUCT</h5>
              <h5>TOTAL</h5>
            </div>

            <ul class="order-container__list">
              <li
                v-for="(item, index) of shoppingCart.productCart"
                key="index"
                class="order-container__item"
              >
                <h5 class="order-container__list-title">{{ item.title }}</h5>
                <h5>${{ item.price }}</h5>
              </li>
            </ul>

            <div class="order-container__total">
              <h5>SUBTOTAL</h5>
              <h5>${{ shoppingCart.totalPrice }}</h5>
            </div>

            <div class="order-container__total">
              <h5>SHIPPING</h5>
              <h5>Free shipping</h5>
            </div>

            <div class="order-container__total">
              <h5>TOTAL</h5>
              <h5>${{ shoppingCart.totalPrice }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShoppingCart } from "../stores/ShoppingCart";
import useFormValidation from "composables/useFormValidation";
import useFormSubmit from "composables/useFormSubmit";

const shoppingCart = useShoppingCart();

const { form, errors, handleBlur, validateForm, resetForm } = useFormValidation(
    {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      streetAddress: "",
      postcode: "",
      townAddress: "",
      phoneNumber: "",
      email: "",
      orderNotes: "",
    },
);

const { submitForm, isModalOpen, status, modalClose, message } =
    useFormSubmit();


const type = "order";

const handleSubmit = () => {
  submitForm(
      "Your message has been sent successfully.",
      "Form has errors. Please check all fields.",
      form,
      type,
      validateForm,
      resetForm,
      saveToLocalStorage,
  );
};
</script>

<style scoped lang="scss">
.checkout {
  display: flex;
  flex-direction: column;
  margin-bottom: 300px;

  &__heading {
    margin: 0 auto 96px;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 88px;
  }

  &__coupon {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 24px 24px 40px;
    border: 1px solid var(--color-decorative);

    &-apply {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 28px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    grid-column: 1;
    gap: 30px;
  }

  &__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    &-item:not(:nth-child(-n + 2)) {
      grid-column: span 2;
    }

    &-checkbox {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  &__order {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}

.order-container {
  display: flex;
  flex-direction: column;
  background-color: #efefef;
  padding: 39px 59px 50px;

  &__total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 18px;
    margin-bottom: 22px;
    border-bottom: 1px solid var(--color-decorative);
  }

  &__info {
  }

  &__line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 25px;
    padding-bottom: 18px;
    border-bottom: 1px solid var(--color-decorative);
  }

  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 26px;
    color: var(--color-text);
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-decorative);

    &-title {
      max-width: 280px;
    }
  }
}
</style>
