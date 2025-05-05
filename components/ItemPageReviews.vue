<template>
  <div class="reviews">
    <div class="reviews__list">
      <h3 class="reviews__title">
        {{ NUMBER_OF_ANSWERS }} Reviews for {{ title }}
      </h3>

      <ItemPageReviewsList />
    </div>

    <div class="reviews__form">
      <div class="reviews__form-header">
        <h3 class="reviews__form-title">Add a Review</h3>
        <p class="reviews__form-notice">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      <form @submit.prevent="handleSubmit(form)" class="reviews__form-content">
        <DefaultTextInput
          v-model="form.message"
          placeholder="Your Review*"
          size="medium"
          :class="{ 'contacts__input--error': errors.message }"
          :error="errors.message"
          @blur="handleBlur('message')"
        />

        <DefaultTextInput
          v-model="form.firstName"
          placeholder="Enter your name*"
          size="medium"
          :class="{ 'contacts__input--error': errors.firstName }"
          :error="errors.firstName"
          @blur="handleBlur('firstName')"
        />

        <div class="reviews__form-checkbox">
          <div>
            <DefaultTextInput
              v-model="form.email"
              placeholder="Enter your Email*"
              size="medium"
              :class="{ 'contacts__input--error': errors.email }"
              :error="errors.email"
              @blur="handleBlur('email')"
            />
          </div>

          <DefaultCheckbox
            v-model="form.saveData"
            text="Save my name, email, and website in this browser for the next time I comment"
            size="medium"
            form="square"
          />
        </div>

        <div class="reviews__form-rating">
          <p class="reviews__form-rating-label">Your Rating*</p>
          <div class="reviews__form-rating-stars">
            <span
              v-for="star in 5"
              :key="star"
              @click="form.rating = star"
              @mouseover="hoverRating = star"
              @mouseleave="hoverRating = 0"
            >
              <StarFilled v-if="star <= (hoverRating || form.rating || 0)" />
              <StarPool v-else />
            </span>
          </div>
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

    <DefaultNotification
      :isOpen="isModalOpen"
      :status="status"
      button-type="close"
      :message="message"
      @close="modalClose"
    />
  </div>
</template>

<script lang="ts" setup>
import useFormValidation from "composables/useFormValidation";
import StarFilled from "../assets/pictures/svg/SvgComponents/StarFilled.vue";
import StarPool from "../assets/pictures/svg/SvgComponents/StarPool.vue";
import { useReviewsStore } from "../stores/ReviewsStore";

const hoverRating = ref(0);

const title = inject("productTitle");
const NUMBER_OF_ANSWERS = inject("productRatingCount");

const { form, errors, validateForm, handleBlur, resetForm } = useFormValidation(
  {
    message: "",
    firstName: "",
    email: "",
    saveData: false,
    rating: 0,
  },
);

const { isModalOpen, status, message, modalOpen, modalClose } =
  useNotification();

const reviewsStore = useReviewsStore();

const handleSubmit = (formData: typeof form) => {
  if (!validateForm()) {
    status.value = "falseMessage";
    message.value = "Form has errors. Please check all fields.";
    modalOpen();
    return;
  }

  const reviewData = {
    author: formData.firstName as string,
    text: formData.message as string,
    rating: formData.rating as number,
    email: formData.email as string,
    saveData: formData.saveData as boolean,
  };

  reviewsStore.addToReviews(reviewData);

  status.value = "trueMessage";
  message.value = "Отзыв отправлен!";
  modalOpen();
  resetForm();
};
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

  &__form-checkbox {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__form-rating {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  &__form-rating-label {
    margin: 0;
  }

  &__form-rating-stars {
    display: flex;
    flex-direction: row;
    gap: 8px;
    cursor: pointer;

    span {
      transition: transform 0.6s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  @media (width <= 375px) {
    margin-top: 20px;
    flex-direction: column;
  }
}
</style>
