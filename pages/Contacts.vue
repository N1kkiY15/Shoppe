<template>
  <div class="contacts">
    <div class="contacts__info">
      <h1 class="contacts__title">Contact us</h1>
      <h3 class="contacts__subtitle">
        Say Hello send us your thoughts about our products or share your ideas
        with our Team!
      </h3>
    </div>

    <form @submit.prevent="handleSubmit" class="contacts__form">
      <div class="contacts__form-grid">
        <DefaultTextInput
          v-model="form.firstName"
          id="firstname"
          size="medium"
          placeholder="First name"
          @blur="handleBlur('firstName')"
          :class="{ 'contacts__input--error': errors.firstName }"
          :error="errors.firstName"
        />

        <DefaultTextInput
          id="lastname"
          v-model="form.lastName"
          size="medium"
          placeholder="Last name"
          @blur="handleBlur('lastName')"
          :class="{ 'contacts__input--error': errors.lastName }"
          :error="errors.lastName"
        />

        <DefaultTextInput
          v-model="form.email"
          size="medium"
          placeholder="Email"
          @blur="handleBlur('email')"
          :class="{ 'contacts__input--error': errors.email }"
          :error="errors.email"
        />

        <DefaultSelect
          v-model="selectedSubject"
          :class="{ 'contacts__select--error': errors.subject }"
          :error="errors.subject"
        />

        <DefaultTextInput
          v-model="form.message"
          id="message"
          size="medium"
          placeholder="Message"
          @blur="handleBlur('message')"
          :class="{ 'contacts__input--error': errors.message }"
          :error="errors.message"
        />
      </div>

      <ButtonComp
        type="submit"
        variant="primary"
        size="xl"
        class="contacts__submit"
      >
        SEND
      </ButtonComp>
    </form>

    <DefaultNotification
      :isOpen="isModalOpen"
      :status="status"
      @close="modalClose"
      :message="message"
    />
  </div>
</template>

<script lang="ts" setup>
import useFormValidation from "composables/useFormValidation";
import useFormSubmit from "composables/useFormSubmit";
import DefaultSelect from "../components/DefaultSelect.vue";

const selectedSubject = ref("");

const { form, errors, handleBlur, validateForm, resetForm } = useFormValidation(
  {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  },
);

watch(selectedSubject, (newVal) => {
  form.subject = newVal;
});

const type = "contacts";

const { submitForm, isModalOpen, status, modalClose, message } =
  useFormSubmit();

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

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  max-width: 908px;
  gap: 108px;
  margin: auto;
  margin-bottom: 250px;

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 560px;
    gap: 39px;
  }

  &__title {
    font-size: 2rem;
    color: var(--color-primary);
  }

  &__subtitle {
    text-align: center;
    font-weight: normal;
    color: var(--color-text-secondary);
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 96px;
    align-items: center;
  }

  &__form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: end;
    column-gap: 116px;
    row-gap: 94px;
    width: 100%;

    & > *:last-child {
      grid-column: span 2;
    }
  }

  &__input--error {
    border-color: var(--color-error);
  }

  &__select--error {
    :deep(.select__control) {
      border-color: var(--color-error);
    }
  }

  &__submit {
    width: 100%;
  }

  @media (width <= 376px) {
    margin-bottom: 96px;
    gap: 48px;
    display: flex;
    justify-content: start;

    &__info {
      align-items: flex-start;
      width: 100%;
    }

    &__title {
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
    }

    &__form {
      gap: 24px;
    }

    &__form-grid {
      grid-template-columns: 1fr;
      row-gap: 47px;

      & > *:last-child {
        grid-column: span 1;
      }
    }

    &__subtitle {
      display: none;
    }
  }
}
</style>
