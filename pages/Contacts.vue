<template>
  <div class="contacts">

    <DefaultModalWindow
      :isOpen="isModalOpen"
      message="Your message has been sent successfully."
      @close="closeModal"
    />

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
          <DefaultTextInput
            id="subject"
            v-model="form.subject"
            size="medium"
            placeholder="Subject"
            @blur="handleBlur('subject')"
          />
          <p v-if="errors.subject" class="error-message">
            {{ errors.subject }}
          </p>
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
  </div>
</template>

<script lang="ts" setup>
import useSaveToLocalStorage from "~/composables/saveToLocalStorage";
import useFormValidation from "~/composables/useFormValidation";

const isModalOpen = ref(false);

const closeModal = () => {
  isModalOpen.value = !isModalOpen.value; 
};

const { form, errors, validateField, validateForm } = useFormValidation();

const handleBlur = (field: keyof typeof form) => {
  validateField(field as string, form[field]);
};

const submitForm = () => {
  if (validateForm()) {
    saveToLocalStorage();
    isModalOpen.value = true; 
  } else {
    console.log("Form has errors"); // sdelat modalku
  }
};

const type = "contacts";

const { saveContactsToLocalStorage } = useSaveToLocalStorage(type, form);

const saveToLocalStorage = () => {
  if (saveContactsToLocalStorage) {
    saveContactsToLocalStorage();
  }
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
</style>
