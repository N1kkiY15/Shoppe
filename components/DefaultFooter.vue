<template>
  <footer class="footer">
    <div class="footer__section">
      <FooterLinks />

      <form class="footer__form" @submit.prevent="handleSubmit">
        <div class="footer__form-group">
          <DefaultTextInput
            v-model="form.email"
            placeholder="Give an email, get the newsletter."
            size="small"
            :class="{ 'contacts__input--error': errors.firstName }"
            :error="errors.email"
            @blur="handleBlur('email')"
          />
          <button class="footer__submit-button" type="submit">
            <ArrowToRight />
          </button>
        </div>

        <DefaultCheckbox
          v-model="form.saveData"
          class="footer__checkbox"
          text="i agree to the website's terms and conditions"
          form="rounded"
          size="small"
        />
      </form>
    </div>

    <div class="footer__section">
      <p class="footer__copyright">
        <span class="footer__accent-text">© 2021 Shelly.</span> Terms of
        <NuxtLink to="/privacypolice" class="footer__accent-text">use</NuxtLink>
        and privacy policy.
      </p>

      <FooterSocials />
    </div>

    <DefaultNotification
      :isOpen="isModalOpen"
      :status="status"
      :message="message"
      @close="modalClose"
    />
  </footer>
</template>

<script lang="ts" setup>
import ArrowToRight from "SvgComponents/ArrowToRight.vue";
// import useSaveToLocalStorage from "composables/saveToLocalStorage";
import useFormValidation from "composables/useFormValidation";
import useFormSubmit from "composables/useFormSubmit";
import { saveToLocalStorage } from "../utils/saveToLocalStorage";

const { form, errors, handleBlur, validateForm, resetForm } = useFormValidation(
  {
    email: "",
    saveData: false,
  },
);

const type = "footer";

const { submitForm, isModalOpen, status, modalClose, message } =
  useFormSubmit();

const handleSubmit = () => {
  submitForm(
    "Your email has been sent successfully! We will definitely contact you!",
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
.footer {
  display: flex;
  flex-direction: column;
  gap: 57px;
  padding: 52px 0 10px;
  border-top: 1px solid var(--color-decorative);
  color: var(--color-text);

  &__section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;
  }

  &__form {
    position: relative;
    width: 100%;
    max-width: 396px;
  }

  &__form-group {
    position: relative;
  }

  &__submit-button {
    position: absolute;
    top: 20%;
    right: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  &__error-message {
    color: var(--color-error);
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }

  &__input--error {
    border-color: var(--color-error);
  }

  &__checkbox {
    display: none;
    margin-top: 15px;
  }

  &__copyright {
    font-size: clamp(0.75rem, 0.679rem + 0.357vw, 1rem);
  }

  &__accent-text {
    color: var(--color-main);
  }

  @media (width <= 376px) {
    border-top: none;
    gap: 40px;
    padding: 0;

    &__section {
      flex-direction: column-reverse;
      gap: 40px;
    }

    &__checkbox {
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>
