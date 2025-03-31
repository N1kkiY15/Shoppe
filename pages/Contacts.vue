<template>
  <div class="contacts">
    <div class="contacts__info">
      <h1>Contact us</h1>
      <h3>
        Say Hello send us your thoughts about our products or share your ideas
        with our Team!
      </h3>
    </div>
    <form @submit.prevent="submitForm" class="contacts__form">
      <div class="contacts__form-inputs">
        <div class="input-error">
          <DefaultTextInput
            v-model="form.firstName"
            id="firstname"
            size="medium"
            placeholder="First name"
            @blur="handleBlur('firstName')"
          />
          <p v-if="errors.firstName" class="error-message">
            {{ errors.firstName }}
          </p>
        </div>

        <div class="input-error">
          <DefaultTextInput
            id="lastname"
            v-model="form.lastName"
            size="medium"
            placeholder="Last name"
            @blur="handleBlur('lastName')"
          />
          <p v-if="errors.lastName" class="error-message">
            {{ errors.lastName }}
          </p>
        </div>

        <div class="input-error">
          <DefaultTextInput
            v-model="form.email"
            size="medium"
            placeholder="Email"
            @blur="handleBlur('email')"
          />
          <p v-if="errors.email" class="error-message">
            {{ errors.email }}
          </p>
        </div>

        <div class="input-error">
          <DefaultSelect v-model="selectedSubject"/>
        </div>

        <div class="input-error">
          <DefaultTextInput
            id="message"
            v-model="form.message"
            size="medium"
            placeholder="Message"
            @blur="handleBlur('message')"
          />
          <p v-if="errors.message" class="error-message">
            {{ errors.message }}
          </p>
        </div>
      </div>
      <ButtonComp type="submit" variant="primary" size="xl">SEND</ButtonComp>
    </form>

    <DefaultModalWindow
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
const selectedSubject = ref('');

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
.input-error {
  position: relative;
}

.input-error:last-child {
  grid-column: span 2;
}

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

    h3 {
      text-align: center;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 96px;
    align-items: center;

    &-inputs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: end;
      column-gap: 116px;
      row-gap: 94px;
      width: 100%;
    }
  }
}

@media (width <= 376px) {
  .contacts {
    margin-bottom: 96px;
  }

  .contacts__form-inputs {
    grid-template-columns: 1fr;
    row-gap: 47px;
  }

  h3 {
    display: none;
  }

  .input-error {
    grid-column: span 2;
  }
}
</style>
