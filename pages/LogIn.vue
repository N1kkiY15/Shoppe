<template>
  <div class="login">
    <h1 class="login__heading">My account</h1>

    <div class="login__console">
      <button
        class="login__console-button"
        :class="{ buttonPressed: isPressed === true }"
      ></button>

      <div class="login__console-variants">
        <a @click="moveButtonRight">Sign in</a>
        <a @click="moveButtonLeft">Register</a>
      </div>
    </div>

    <LogInAuth v-if="isPressed === false"/>
    <LogInCreateAccount v-if="isPressed === true"/>

  </div>
</template>

<script setup lang="ts">
/////
import LogInAuth from "../components/LogInAuth.vue";

const isPressed = ref(false);

const moveButtonLeft = () => {
  isPressed.value = true;
  console.log("moveButtonLeft:", isPressed.value);
};

const moveButtonRight = () => {
  isPressed.value = false;
  console.log("moveButtonRigth:", isPressed.value);
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
    }
  }
}

.buttonPressed {
  transform: translateX(255px);
}

</style>
