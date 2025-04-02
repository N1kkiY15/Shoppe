<template>
  <div class="contacts">
    <div class="contacts__info">
      <h1 class="contacts__title">Contact us</h1>
      <h3 class="contacts__subtitle">
        Say Hello send us your thoughts about our products or share your ideas
        with our Team!
      </h3>
    </div>

    <form @submit.prevent="submitForm" class="contacts__form">
      <div class="contacts__form-grid">
        <div class="contacts__field">
          <DefaultTextInput
            v-model="form.firstName"
            id="firstname"
            size="medium"
            placeholder="First name"
            @blur="handleBlur('firstName')"
            :class="{ 'contacts__input--error': errors.firstName }"
          />
          <p v-if="errors.firstName" class="contacts__error">
            {{ errors.firstName }}
          </p>
        </div>

        <div class="contacts__field">
          <DefaultTextInput
            id="lastname"
            v-model="form.lastName"
            size="medium"
            placeholder="Last name"
            @blur="handleBlur('lastName')"
            :class="{ 'contacts__input--error': errors.lastName }"
          />
          <p v-if="errors.lastName" class="contacts__error">
            {{ errors.lastName }}
          </p>
        </div>

        <div class="contacts__field">
          <DefaultTextInput
            v-model="form.email"
            size="medium"
            placeholder="Email"
            @blur="handleBlur('email')"
            :class="{ 'contacts__input--error': errors.email }"
          />
          <p v-if="errors.email" class="contacts__error">
            {{ errors.email }}
          </p>
        </div>

        <div class="contacts__field">
          <DefaultSelect
            v-model="selectedSubject"
            :class="{ 'contacts__select--error': errors.subject }"
          />
          <p v-if="errors.subject" class="contacts__error">
            {{ errors.subject }}
          </p>
        </div>

        <div class="contacts__field contacts__field--full-width">
          <DefaultTextInput
            id="message"
            v-model="form.message"
            size="medium"
            placeholder="Message"
            @blur="handleBlur('message')"
            :class="{ 'contacts__input--error': errors.message }"
            style="padding-bottom: 65px"
          />
          <p v-if="errors.message" class="contacts__error">
            {{ errors.message }}
          </p>
        </div>
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

    <DefaultMessage
      :isOpen="isModalOpen"
      :status="status"
      @close="modalClose"
      :message="message"
    />
  </div>
</template>

<script lang="ts" setup>
import useSaveToLocalStorage from "composables/saveToLocalStorage";
import useFormValidation from "composables/useFormValidation";
import useModalWindow from "composables/useModalWindow";
import DefaultSelect from "../components/DefaultSelect.vue";

const selectedSubject = ref("");

const { form, errors, validateField, validateForm } = useFormValidation();

const handleBlur = (field: keyof typeof form) => {
  validateField(field as string, form[field]);
};

const type = "contacts";
const { saveContactsToLocalStorage } = useSaveToLocalStorage(type, form);

const saveToLocalStorage = () => {
  if (saveContactsToLocalStorage) {
    saveContactsToLocalStorage();
  }
};

const { isModalOpen, status, modalClose, modalOpen, message } =
  useModalWindow();

const submitForm = () => {
  if (validateForm()) {
    saveToLocalStorage();
    status.value = "trueMessage";
    message.value = "Your message has been sent successfully."; // funct to  clear message
  } else {
    status.value = "falseMessage";
    message.value = "Form has error"; // funct to  clear message
  }
  modalOpen();
  // clearMessage()
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
  }

  &__field {
    position: relative;

    &--full-width {
      grid-column: span 2;
    }
  }

  &__error {
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    color: var(--color-error);
    font-size: 0.875rem;
    margin-top: 0.25rem;
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
    }

    &__field--full-width {
      grid-column: span 1;
    }

    &__subtitle {
      display: none;
    }
  }
}
</style>
