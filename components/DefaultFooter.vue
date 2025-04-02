<template>
  <footer class="footer">
    <div class="footer__section">
      <FooterLinks class="footer__links" />

      <form class="footer__form" @submit.prevent="submitForm">
        <div class="footer__form-group">
          <DefaultTextInput
            v-model="footerEmail"
            size="small"
            placeholder="Give an email, get the newsletter."
            @blur="validateFooterEmail"
            :class="{ 'footer__input--error': errors.email }"
          />
          <button class="footer__submit-button" type="submit">
            <ArrowToRigth />
          </button>
        </div>

        <p v-if="errors.email" class="footer__error-message">
          {{ errors.email }}
        </p>

        <DefaultCheckbox
          form="rounded"
          size="small"
          class="footer__checkbox"
          text="i agree to the website's terms and conditions"
        />
      </form>
    </div>

    <div class="footer__section">
      <p class="footer__copyright">
        <span class="footer__accent-text">© 2021 Shelly.</span> Terms of
        <NuxtLink to="/privacypolice" class="footer__accent-text">use</NuxtLink>
        and privacy policy.
      </p>

      <FooterSocials class="footer__socials" />
    </div>

    <DefaultMessage
      :isOpen="isModalOpen"
      :status="status"
      @close="modalClose"
      :message="message"
    />
  </footer>
</template>

<script lang="ts" setup>
import ArrowToRigth from "SvgComponents/ArrowToRight.vue";
import useSaveToLocalStorage from "composables/saveToLocalStorage";
import useFormValidation from "composables/useFormValidation";
import useModalWindow from "composables/useModalWindow";

const { footerEmail, errors, validateFooterEmail } = useFormValidation();

const type = "footer";
const { saveFooterEmailToLocalStorage } = useSaveToLocalStorage(type);

const { isModalOpen, status, modalClose, modalOpen, message } =
  useModalWindow();

const submitForm = () => {
  validateFooterEmail();
  if (!errors.email && saveFooterEmailToLocalStorage) {
    saveFooterEmailToLocalStorage(footerEmail.value);
    status.value = "trueEmail";
    message.value =
      "Your email has been sent successfully! We will definitely contact you!";
  } else {
    status.value = "falseMessage";
    message.value = "Form has error";
  }
  modalOpen();
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

  &__links {
    gap: 40px;
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
    top: 0;
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
    color: var(--color-accent);
  }

  &__socials {
    /* Additional socials styling if needed */
  }

  @media (width <= 376px) {
    border-top: none;
    gap: 40px;
    padding: 0;

    &__section {
      flex-direction: column-reverse;
      gap: 40px;
    }

    &__links {
      display: flex;
      flex-direction: column;
      gap: 8px;
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
