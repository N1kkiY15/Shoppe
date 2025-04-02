<template>
  <div class="create-account">
    <div class="create-account__inputs">
      <default-text-input size="medium" placeholder="Name" />
      <default-text-input size="medium" placeholder="Surname" />
      <default-text-input size="medium" placeholder="Email" />
      <default-text-input size="medium" placeholder="Password" />
    </div>
    <button-comp size="xl" variant="primary" type="submit">CREATE</button-comp>
  </div>
</template>

<script setup lang="ts"></script>

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
