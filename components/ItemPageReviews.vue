<template>
  <div class="reviews">
    <div class="reviews__list">
      <h3>2 Reviews for lira earings</h3>
      <div class="reviews__list-container review-block">
        <div class="review-block__header">
          <h3>Scarlet withch</h3>
          <div class="review-block__header-date">6 May, 2020</div>
        </div>

        <div class="review-block__rating">
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarPool />
        </div>

        <h5 class="review-block__text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet.
        </h5>
      </div>

      <div class="reviews__list-container review-block">
        <div class="review-block__header">
          <h3>Scarlet withch</h3>
          <div class="review-block__header-date">6 May, 2020</div>
        </div>

        <div class="review-block__rating">
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarPool />
        </div>

        <h5 class="review-block__text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet.
        </h5>
      </div>
    </div>

    <div class="reviews__form">
      <div class="reviews__form-heading form-heading">
        <h3 class="form-heading__header">Add a Review</h3>
        <p class="form-heading__text">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      <form @submit.prevent class="reviews__form-block review-form">
        <default-text-input
          size="medium"
          placeholder="Your Review*"
          type="text"
          class="review-form__input"
          :style="'padding-bottom: 60px'"
        />

        <default-text-input
          size="medium"
          placeholder="Enter your name*"
          type="text"
          class="review-form__input"
        />

        <div class="review-form__email">
          <default-text-input
            size="medium"
            placeholder="Enter your Email*"
            type="text"
            class="review-form__input"
          />
          <div class="review-form__email-input review-checkbox">
            <input type="checkbox" class="review-checkbox__input" />
            <p class="review-checkbox__description">
              Save my name, email, and website in this browser for the next time
              I comment
            </p>
          </div>
        </div>

        <div class="review-form__rate">
          <p>Your Rating*</p>
          <star-pool />
          <star-pool />
          <star-pool />
          <star-pool />
          <star-pool />
        </div>

        <ButtonComp
          variant="primary"
          size="m"
          class="review-form__button"
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

    &-container {
      display: flex;
      flex-direction: column;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 46px;

    &-heading {
      display: flex;
      flex-direction: column;
      gap: 11px;
    }
  }
}

.form-heading {
  &__text {
    color: var(--color-text);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-text-medium);
  }
}

.review-block {
  border-bottom: 1px solid var(--color-decorative);
  width: 100%;

  &__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;

    &-date {
      color: var(--color-text);
      font-size: var(--font-size-text-medium);
      font-weight: var(--font-weight-regular);
    }
  }

  &__rating {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 24px;
  }

  &__text {
    color: var(--color-text);
    margin-bottom: 39px;
    font-weight: var(--font-weight-regular);
  }
}

.review-block:last-child {
  margin-bottom: 0;
  border-bottom: none;
}

.review-form {
  display: flex;
  flex-direction: column;
  gap: 46px;
  color: var(--color-text);
  font-weight: var(--font-weight-regular);

  &__email {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.review-checkbox {
  display: flex;
  flex-direction: row;
  gap: 8px;

  &__input {
    width: 18px;
    height: 18px;
    border: 1px solid var(--color-text);
  }

  &__description {
    font-size: var(--font-size-text-small);
  }
}
</style>
