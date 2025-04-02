<template>
  <div class="reviews">
    <div class="reviews__list">
      <h3 class="reviews__title">{{ props.count }} Reviews for {{ props.title }}</h3>
      <div class="reviews__item">
        <div class="reviews__item-header">
          <h3 class="reviews__item-author">Scarlet withch</h3>
          <div class="reviews__item-date">6 May, 2020</div>
        </div>

        <div class="reviews__item-rating">
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarPool />
        </div>

        <h5 class="reviews__item-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet.
        </h5>
      </div>

      <div class="reviews__item">
        <div class="reviews__item-header">
          <h3 class="reviews__item-author">Scarlet withch</h3>
          <div class="reviews__item-date">6 May, 2020</div>
        </div>

        <div class="reviews__item-rating">
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarPool />
        </div>

        <h5 class="reviews__item-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet.
        </h5>
      </div>
    </div>

    <div class="reviews__form">
      <div class="reviews__form-header">
        <h3 class="reviews__form-title">Add a Review</h3>
        <p class="reviews__form-notice">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      <form @submit.prevent class="reviews__form-content">
        <default-text-input
            size="medium"
            placeholder="Your Review*"
            type="text"
            class="reviews__form-input"
            :style="'padding-bottom: 60px'"
        />

        <default-text-input
            size="medium"
            placeholder="Enter your name*"
            type="text"
            class="reviews__form-input"
        />

        <div class="reviews__form-email">
          <default-text-input
              size="medium"
              placeholder="Enter your Email*"
              type="text"
              class="reviews__form-input"
          />

          <DefaultCheckbox
              v-model="checkboxValue"
              size="medium"
              form="square"
              text="Save my name, email, and website in this browser for the next time I comment"
          />
        </div>

        <div class="reviews__form-rating">
          <p class="reviews__form-rating-label">Your Rating*</p>
          <star-pool />
          <star-pool />
          <star-pool />
          <star-pool />
          <star-pool />
        </div>

        <ButtonComp
            variant="primary"
            size="m"
            class="reviews__form-button"
            type="submit"
        >Submit
        </ButtonComp>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import StarFilled from "SvgComponents/StarFilled.vue";
import StarPool from "SvgComponents/StarPool.vue";

interface Props {
  title?: string;
  count?: number;
}

const checkboxValue = ref<boolean>(false);

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.reviews {
  display: flex;
  flex-direction: row;
  gap: 87px;
  font-weight: var(--font-weight-regular);

  &__list {
    display: flex;
    flex-direction: column;
    max-width: 580px;
    gap: 76px;
  }

  &__title {
    margin: 0;
  }

  &__item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--color-decorative);
    width: 100%;
    padding-bottom: 39px;

    &:last-child {
      margin-bottom: 0;
      border-bottom: none;
    }
  }

  &__item-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  &__item-author {
    margin: 0;
  }

  &__item-date {
    color: var(--color-text);
    font-size: var(--font-size-text-medium);
    font-weight: var(--font-weight-regular);
  }

  &__item-rating {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 24px;
  }

  &__item-text {
    color: var(--color-text);
    margin: 0;
    font-weight: var(--font-weight-regular);
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 46px;
  }

  &__form-header {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  &__form-title {
    margin: 0;
  }

  &__form-notice {
    color: var(--color-text);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-text-medium);
    margin: 0;
  }

  &__form-content {
    display: flex;
    flex-direction: column;
    gap: 46px;
    color: var(--color-text);
    font-weight: var(--font-weight-regular);
  }

  &__form-email {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__form-rating {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__form-rating-label {
    margin: 0;
  }
}
</style>