<template>
  <div class="error-container">
    <h1 class="error-container__heading">404 - Page Not Found</h1>
    <h3 class="error-container__description">This page doesn't exist or may have been moved</h3>
    <NuxtLink to="/MainPage" class="home-button">Go to Homepage</NuxtLink>
  </div>
</template>

<script setup>

useHead({
  title: '404 - Page Not Found'
})
</script>

<style lang="scss" scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
  font-family: var(--font-main);

  .error-container__heading { 
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #ff3e00;
  }
}

h1 {

}

h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.home-button {
  padding: 12px 24px;
  background-color: #00dc82;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #00c471;
}
</style>