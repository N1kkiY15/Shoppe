<template>
  <div class="coupon">
    <DefaultTextInput
      placeholder="Coupon Code"
      class="coupon__input"
      size="medium"
    />
    <ButtonComp class="coupon__button" variant="primary" size="xl"
      >APPLY COUPON
    </ButtonComp>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.coupon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  &__input {
    display: flex;
    flex-shrink: 0;
    width: 60%;
    margin-top: auto;
  }
}

@media (width <= 375px) {
  .coupon {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &__input {
      width: 100%;
    }
  }
}
</style>
