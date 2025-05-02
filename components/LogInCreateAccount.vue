<template>
  <form @submit.prevent="handleSubmit" class="create-account">
    <div class="create-account__inputs">
      <default-text-input
        v-model="form.firstName"
        placeholder="Name"
        size="medium"
        :class="{ 'contacts__input--error': errors.firstName }"
        :error="errors.firstName"
        @blur="handleBlur('firstName')"
      />
      <default-text-input
        v-model="form.lastName"
        placeholder="Surname"
        size="medium"
        :class="{ 'contacts__input--error': errors.lastName }"
        :error="errors.lastName"
        @blur="handleBlur('lastName')"
      />
      <default-text-input
        v-model="form.email"
        placeholder="Email"
        size="medium"
        :class="{ 'contacts__input--error': errors.email }"
        :error="errors.email"
        @blur="handleBlur('email')"
      />
      <default-text-input
        v-model="form.password"
        placeholder="Password"
        size="medium"
        type="password"
        :class="{ 'contacts__input--error': errors.password }"
        :error="errors.password"
        @blur="handleBlur('password')"
      />
    </div>
    <button-comp size="xl" variant="primary" type="submit">CREATE</button-comp>
  </form>

  <DefaultNotification
    :isOpen="isModalOpen"
    :status="status"
    :message="message"
    button-type="close"
    @close="modalClose"
  />
</template>

<script setup lang="ts">
import useFormValidation from "composables/useFormValidation";
import useFormSubmit from "composables/useFormSubmit";

const { form, errors, validateForm, handleBlur, resetForm } = useFormValidation(
  {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
);

const type = "createAccount";

const { submitForm, isModalOpen, status, modalClose, message } =
  useFormSubmit();

const handleSubmit = () => {
  submitForm(
    "Your account is created!",
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
.create-account {
  display: flex;
  flex-direction: column;
  gap: 80px;

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>
