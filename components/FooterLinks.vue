<template>
  <ul class="footer-links">
    <li>
      <NuxtLink to="/contacts" class="footer-links__item">CONTACT</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/contacts" class="footer-links__item"
        >TERMS OF SERVICES</NuxtLink
      >
    </li>
    <li>
      <NuxtLink to="/contacts" class="footer-links__item"
        >SHIPPING AND RETURNS</NuxtLink
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.footer-links {
  display: flex;
  flex-direction: row;

  &__item {
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-main);
    }
  }
}
</style>
