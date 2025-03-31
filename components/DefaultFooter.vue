<template>
  <footer class="footer">
    <div class="footer__section">
      <FooterLinks class="footer__section-links" />

      <form
        class="footer__section-form footer-form"
        @submit.prevent="submitForm"
      >
        <DefaultTextInput
          v-model="footerEmail"
          size="small"
          placeholder="Give an email, get the newsletter."
          @blur="validateFooterEmail"
        />

        <button class="footer-form__button" type="submit">
          <ArrowToRigth />
        </button>

        <p v-if="errors.email" class="error-message">
          {{ errors.email }}
        </p>

        <DefaultCheckbox
          form="rounded"
          size="small"
          class="footer-form__checkbox"
          text="i agree to the website’s terms and conditions"
        />
      </form>
    </div>

    <div class="footer__section">
      <p class="footer__section-text">
        <span class="text__accent">© 2021 Shelly.</span> Terms of
        <NuxtLink to="/privacypolice" class="text__accent">use</NuxtLink>
        and privacy policy.
      </p>

      <FooterSocials />
    </div>

    <DefaultModalWindow
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
      "Your email has been sent successfully! We will definitely contact you!"; // funct to  clear message
  } else {
    console.log("Form has errors");
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
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;

    &-links {
      gap: 40px;
    }

    &-text {
      font-size: clamp(0.75rem, 0.679rem + 0.357vw, 1rem);
    }
  }

  &-form {
    position: relative;
    width: 100%;
    max-width: 396px;
  }
}

.footer-form__button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
}

.footer-form__checkbox {
  display: none;
  flex-direction: row;
  gap: 3px;
  font-family: DM Sans;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: black;
  margin-top: 15px;
}

@media (width <= 376px) {
  .footer {
    border-top: none;
    gap: 40px;
    padding: 0;

    &__section {
      display: flex;
      flex-direction: column-reverse;
      gap: 40px;
      font-size: 12px;

      &-links {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    }
  }

  .footer-form__checkbox {
    display: flex;
  }
}
</style>
