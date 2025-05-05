<template>
  <div class="auth">
    <form @submit.prevent="handleSubmit" class="auth__form">
      <div class="auth__form-inputs">
        <DefaultTextInput
          v-model="form.email"
          placeholder="Email"
          size="medium"
          :class="{ 'contacts__input--error': errors.email }"
          :error="errors.email"
          @blur="handleBlur('email')"
        />

        <DefaultTextInput
          v-model="form.password"
          placeholder="Password"
          size="medium"
          type="password"
          :class="{ 'contacts__input--error': errors.password }"
          :error="errors.password"
          @blur="handleBlur('password')"
        />
      </div>

      <DefaultCheckbox
        v-model="form.saveData"
        class="auth__form-checkbox"
        size="small"
        form="rounded"
        text="Remember me"
      />

      <ButtonComp
        class="auth__form-button"
        size="xl"
        variant="primary"
        type="submit"
      >
        SIGN IN
      </ButtonComp>
    </form>

    <NuxtLink to="/resetpass" class="auth__link">
      Have you forgotten your password?
    </NuxtLink>

    <DefaultNotification
      :isOpen="isModalOpen"
      :status="status"
      button-type="close"
      @close="modalClose"
      :message="message"
    />
  </div>
</template>

<script setup lang="ts">
import useFormValidation from "composables/useFormValidation";
import useFormSubmit from "composables/useFormSubmit";

const { form, errors, validateForm, handleBlur, resetForm } = useFormValidation(
  {
    email: "",
    password: "",
    saveData: false,
  },
);

const type = "LogIn";

const { submitForm, isModalOpen, status, modalClose, message } =
  useFormSubmit();

const handleSubmit = () => {
  submitForm(
    "GOOD",
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
.auth {
  display: flex;
  flex-direction: column;

  &__form {
    &-inputs {
      display: flex;
      flex-direction: column;
      gap: 46px;
      width: 100%;
      margin-bottom: 15px;
    }

    &-checkbox {
      margin-bottom: 70px;
    }

    &-button {
      margin-bottom: 15px;
    }
  }

  &__input--error {
    border-color: var(--color-error);
  }

  &__link {
    font-weight: 400;
    align-self: center;
    font-size: clamp(0.75rem, 0.662rem + 0.376vw, 1rem);
  }
}
</style>
