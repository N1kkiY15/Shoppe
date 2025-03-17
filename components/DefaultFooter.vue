<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__section">
        <ul class="footer__section-links">
          <li><NuxtLink to="/contacts">CONTACT</NuxtLink></li>
          <li><NuxtLink to="/contacts">TERMS OF SERVICES</NuxtLink></li>
          <li><NuxtLink to="/contacts">SHIPPING AND RETURNS</NuxtLink></li>
        </ul>
        <p>
          <span class="text__accent">© 2021 Shelly.</span> Terms of
          <NuxtLink to="/privacypolice" class="text__accent">use</NuxtLink> and
          privacy policy.
        </p>
      </div>
      <div class="footer__section footer__section--right">
        <form class="footer__section-form" @submit.prevent="submitForm">
          <div class="input-with-button">
            <DefaultTextInput
              v-model="footerEmail"
              size="small"
              placeholder="Give an email, get the newsletter."
              @blur="validateFooterEmail"
            />
            <button class="footer__section-form-button" type="submit">
              <ArrowToRigth />
            </button>
          </div>
          <p v-if="errors.email" class="error-message">
            {{ errors.email }}
          </p>
        </form>
        <ul class="footer__socials">
          <li>
            <a href="https://vk.com/nderevyanko15" target="blank"><InIcon /></a>
          </li>
          <li>
            <a href="https://vk.com/nderevyanko15" target="blank"
              ><FacebookIcon
            /></a>
          </li>
          <li>
            <a href="https://vk.com/nderevyanko15" target="blank"
              ><InstagramIcon
            /></a>
          </li>
          <li>
            <a href="https://vk.com/nderevyanko15" target="blank"
              ><TwitterIcon
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import FacebookIcon from "assets/pictures/svg/SvgComponents/FacebookIcon.vue";
import InIcon from "assets/pictures/svg/SvgComponents/InIcon.vue";
import InstagramIcon from "assets/pictures/svg/SvgComponents/InstagramIcon.vue";
import TwitterIcon from "assets/pictures/svg/SvgComponents/TwitterIcon.vue";
import ArrowToRigth from "~/assets/pictures/svg/SvgComponents/ArrowToRight.vue";

import useSaveToLocalStorage from "~/composables/saveToLocalStorage";
import useFormValidation from "~/composables/useFormValidation";

const { footerEmail, errors, validateFooterEmail } = useFormValidation();
const type = "footer";

const { saveFooterEmailToLocalStorage } = useSaveToLocalStorage(type);

const submitForm = () => {
  validateFooterEmail();
  if (!errors.email && saveFooterEmailToLocalStorage) {
    saveFooterEmailToLocalStorage(footerEmail.value);
    footerEmail.value = "";
  } else {
    console.log("Form has errors"); // Add modalka
  }
};
</script>

<style scoped lang="scss">
.footer {
  padding: 52px 0 10px;
  border-top: 1px solid var(--color-decorative);
  color: var(--color-text);

  .footer__container {
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

      &-form {
        position: relative;
        &-button {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: transparent;
        }
      }

      .footer__section-links {
        display: flex;
        flex-direction: row;
        gap: 41px;

        & li {
          transition: color 0.2s ease;
        }

        & li:hover {
          color: var(--color-main);
        }
      }

      .footer__input {
        height: 20px;
        width: 396px;
        border-bottom: 1px solid var(--color-decorative);
        padding-right: 30px;
      }

      .footer__socials {
        display: flex;
        flex-direction: row;
        gap: 30px;
      }
    }
  }
}

.text__accent {
  color: var(--color-main);
  font-weight: var(--font-weight-medium);
}

.input-with-button {
  position: relative;
}
</style>
