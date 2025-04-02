<template>
  <div class="login">
    <h1 class="login__heading">My account</h1>

    <div class="login__console">
      <button
        class="login__console-button"
        :class="{ 'login__console-button--active': isPressed }"
      ></button>

      <div class="login__options">
        <a class="login__option" @click="moveButtonRight">Sign in</a>
        <a class="login__option" @click="moveButtonLeft">Register</a>
      </div>
    </div>

    <LogInAuth v-if="!isPressed" />
    <LogInCreateAccount v-if="isPressed" />
  </div>
</template>

<script setup lang="ts">
import LogInAuth from "../components/LogInAuth.vue";

const isPressed = ref(false);

const moveButtonLeft = () => {
  isPressed.value = true;
};

const moveButtonRight = () => {
  isPressed.value = false;
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  margin: 0 auto 250px;
  max-width: 500px;

  &__heading {
    align-self: center;
    margin-bottom: 64px;
    font-size: clamp(1.25rem, 0.964rem + 1.221vw, 2.063rem);
  }

  &__console {
    position: relative;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    background-color: #efefef;
    margin-bottom: 126px;
    padding: 5px;

    &-button {
      position: absolute;
      width: calc(100% / 2 - 10px);
      height: 50px;
      background-color: white;
      border-radius: inherit;
      transition: transform 0.3s ease;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15); /* Button shadow */

      z-index: 1;

      &--active {
        transform: translateX(calc(100% + 10px));
      }
    }
  }

  &__options {
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    z-index: 2;
  }

  &__option {
    width: 50%;
    text-align: center;
    color: #000;
    cursor: pointer;
    font-size: clamp(0.75rem, 0.574rem + 0.751vw, 1.25rem);
  }
}

@media (width <= 375px) {
  .login {
    margin-bottom: 92px;

    &__heading {
      font-weight: 400;
      margin-bottom: 24px;
    }

    &__console {
      margin-bottom: 87px;
      padding: 2px;
      border-radius: 5px;
      height: 32px;

      &-button {
        width: calc(100% / 2 - 4px);
        height: calc(100% - 4px);

        &--active {
          transform: translateX(calc(100% + 4px));
        }
      }
    }

    &__options {
      justify-content: space-between;
    }
  }
}
</style>
