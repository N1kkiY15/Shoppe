<template>
  <div class="reviews">
    <div class="reviews__list">
      <h3 class="reviews__title">
        {{ NUMBER_OF_ANSWERS }} Reviews for {{ title }}
      </h3>

      <ItemPageRewiewsAnswers />
    </div>

    <div class="reviews__form">
      <div class="reviews__form-header">
        <h3 class="reviews__form-title">Add a Review</h3>
        <p class="reviews__form-notice">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="reviews__form-content">
        <default-text-input
          v-model="form.message"
          placeholder="Your Review*"
          size="medium"
          :class="{ 'contacts__input--error': errors.message }"
          :error="errors.message"
          @blur="handleBlur('message')"
        />

        <default-text-input
          v-model="form.firstName"
          placeholder="Enter your name*"
          size="medium"
          :class="{ 'contacts__input--error': errors.firstName }"
          :error="errors.firstName"
          @blur="handleBlur('firstName')"
        />

        <div class="reviews__form-checkbox">
          <div>
            <default-text-input
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

    <default-notification
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

const type = "review";
const { submitForm, isModalOpen, status, modalClose, message } =
  useFormSubmit();

const handleSubmit = () => {
  submitForm(
    "Your review has been submitted successfully!",
    "Please fill all required fields correctly.",
    form,
    type,
    validateForm,
    resetForm,
    saveToLocalStorage,
  );
};

interface Props {
  title?: string;
  count?: number;
}

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
