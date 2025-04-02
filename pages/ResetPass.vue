<template>
  <div class="password-reset">
    <h1 class="password-reset__heading password-reset__heading--desktop">
      Have you Forgotten Your Password?
    </h1>
    <h1 class="password-reset__heading password-reset__heading--mobile">
      Lost password
    </h1>

    <div class="password-reset__content">
      <p
        class="password-reset__description password-reset__description--desktop"
      >
        If you've forgotten your password, enter your e-mail address and we'll
        send you an e-mail
      </p>

      <p
        class="password-reset__description password-reset__description--mobile"
      >
        If you've forgotten your password, enter your e-mail address and we'll
        send you an e-mail
      </p>

      <form @submit.prevent class="password-reset__form">
        <default-text-input
          size="medium"
          placeholder="Email"
          class="password-reset__input"
        />
        <button-comp
          size="xl"
          variant="primary"
          type="submit"
          class="password-reset__submit"
        >
          RESET PASSWORD
        </button-comp>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.password-reset {
  &__heading {
    text-align: center;
    margin-bottom: 40px;

    &--mobile {
      display: none;
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 16px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    margin: 0 auto 250px;
    max-width: 500px;
  }

  &__description {
    text-align: center;
    margin-bottom: 76px;

    &--mobile {
      display: none;
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 64px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  &__submit {
    font-weight: 700;
    font-size: 16px;
  }
}

@media (width <= 375px) {
  .password-reset {
    &__heading {
      &--desktop {
        display: none;
      }

      &--mobile {
        display: block;
      }
    }

    &__description {
      &--desktop {
        display: none;
      }

      &--mobile {
        display: flex;
        text-align: left;
      }
    }

    &__content {
      margin-bottom: 94px;
    }
  }
}
</style>
