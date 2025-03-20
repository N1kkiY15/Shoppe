<template>
  <footer class="footer">
    
    <div class="footer__section">
      <FooterLinks class="footer__section-links" />
      <p>
        <span class="text__accent">© 2021 Shelly.</span> Terms of
        <NuxtLink to="/privacypolice" class="text__accent">use</NuxtLink> and
        privacy policy.
      </p>
    </div>

    <div class="footer__section footer__section--right">
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
      </form>
      <FooterSocials class="footer__section-socials" />
    </div>

    <DefaultModalWindow
      :isOpen="isModalOpen"
      :status="status"
      @close="modalClose"
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

const { isModalOpen, status, modalClose, modalOpen } = useModalWindow();

const submitForm = () => {
  validateFooterEmail();
  if (!errors.email && saveFooterEmailToLocalStorage) {
    saveFooterEmailToLocalStorage(footerEmail.value);
    footerEmail.value = "";
    status.value = "trueEmail";
    modalOpen();
  } else {
    console.log("Form has errors");
    status.value = "falseMessage";
    modalOpen();
  }
};
</script>

<style scoped lang="scss">
.footer {
  padding: 52px 0 10px;
  border-top: 1px solid var(--color-decorative);
  color: var(--color-text);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .footer__section {
    display: flex;
    flex-direction: column;
    gap: 48px;

    &--right {
      align-items: end;
    }

    .footer__section-links {
      gap: 40px;
    }

    .footer__section-socials {
      gap: 30px;
    }
  }
}

.footer-form {
  position: relative;

  &__button {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
  }
}
</style>
