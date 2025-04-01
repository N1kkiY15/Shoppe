<template>
  <div class="auth">
    <form @submit.prevent class="auth__form">
      <div class="auth__form-inputs">
        <default-text-input size="medium" placeholder="Email" />
        <default-text-input size="medium" placeholder="Password" />
      </div>
      <DefaultCheckbox
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
        >SIGN IN
      </ButtonComp>
    </form>

    <NuxtLink to="/resetpass" class="auth__link">
      Have you forgotten your password?
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

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

  &__link {
    align-self: center;
  }
}
</style>
