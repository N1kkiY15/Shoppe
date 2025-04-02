<template>
  <div>
    <NuxtLayout>
    <div class="error-container">
      <h1 class="error-container__heading">404 ERROR</h1>
      <h3 class="error-container__description">
        This page not found; <br />
        back to home and start again
      </h3>
      <button-comp size="l" variant="secondary">
        <NuxtLink to="/">Homepage</NuxtLink>
      </button-comp>
    </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: "404 - Page Not Found",
});
</script>

<style lang="scss" scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: var(--font-main);
  margin: 250px auto;

  &__heading {
    font-size: 2.5rem;
    margin-bottom: 24px;
    color: black;
  }

  &__description {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 64px;
  }
}

@media (width <= 375px) {
  .error-container {
    margin: 205px auto;
  }
  
}
</style>
