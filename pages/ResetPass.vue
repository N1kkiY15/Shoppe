<template>
  <div>
    <h1 class="reset-pass-heading">Have you Forgotten Your Password ?</h1>
    <div class="reset-pass">
      <h3 class="reset-pass__description">
        If you've forgotten your password, enter your e-mail address and we'll
        send you an e-mail
      </h3>
      <form @submit.prevent class="reset-pass__form">
        <default-text-input size="medium" placeholder="Email" />
        <button-comp
          size="xl"
          variant="primary"
          type="submit"
          class="reset-pass__form-button"
          >RESET PASSWORD
        </button-comp>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">

.reset-pass-heading {
  text-align: center;
  margin-bottom: 40px;
}

.reset-pass {
  display: flex;
  flex-direction: column;
  margin: 0 auto 250px;
  max-width: 500px;

  &__description {
    text-align: center;
    margin-bottom: 76px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 64px;

    &-button {
      font-weight: 700;
      font-size: 16px;
    }
  }
}
</style>
