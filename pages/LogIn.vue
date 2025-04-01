<template>
  <div class="login">
    <h1 class="login__heading">My account</h1>

    <div class="login__console">
      <button
        class="login__console-button"
        :class="{ buttonPressed: isPressed === true}"
      ></button>

      <div class="login__console-variants">
        <a @click="moveButtonRight">Sign in</a>
        <a @click="moveButtonLeft">Register</a>
      </div>
    </div>

    <form @submit.prevent class="login__form">
      <div class="login__form-inputs">
        <default-text-input size="medium" placeholder="Email" />
        <default-text-input size="medium" placeholder="Password" />
      </div>
      <DefaultCheckbox
        size="small"
        form="rounded"
        text="Remember me"
        class="login__form-checkbox"
      />
      <ButtonComp
        class="login__form-button"
        size="xl"
        variant="primary"
        type="submit"
        >SIGN IN
      </ButtonComp>
    </form>
    <NuxtLink  to="/resetpass" class="login__link">Have you forgotten your password?</NuxtLink>
  </div>
</template>

<script setup lang="ts">
/////
const isPressed = ref(false);

const moveButtonLeft = () => {
  isPressed.value = true;
  console.log("moveButtonLeft:", isPressed.value )
}

const moveButtonRight = () => {
  isPressed.value = false;
  console.log("moveButtonRigth:", isPressed.value )
}


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
  }

  &__console {
    position: relative;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    background-color: #efefef;
    margin-bottom: 126px;
    padding: 5px;

    &-variants {
      position: absolute;
      top: 30%;
      left: 20%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: center;
      width: 60%;
      z-index: 2;
      color: #000;
    }

    &-button {
      width: calc(100% / 2 - 10px);
      height: 100%;
      background-color: white;
      border-radius: inherit;
      transition: transform 0.3s ease;

      //& {
      //  transform: translateY(50px) scale(0.98);
      //  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      //  background-color: #3e8e41;
      //}
    }
  }

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

.buttonPressed {
  transform: translateX(255px);
}
</style>
