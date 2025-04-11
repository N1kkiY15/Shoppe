<template>
  <ul class="footer-links">
    <li>
      <NuxtLink to="/contacts" class="footer-links__item">CONTACT</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/contacts" class="footer-links__item"
        >TERMS OF SERVICES
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/contacts" class="footer-links__item"
        >SHIPPING AND RETURNS
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.footer-links {
  display: flex;
  flex-direction: row;
  gap: 40px;

  &__item {
    transition: color 0.2s ease;
    font-size: 16px;

    &:hover {
      color: var(--color-main);
    }
  }
}

@media (width <= 375px) {
  .footer-links {
    flex-direction: column;
    gap: 8px;

    &__item {
      font-size: 12px;
    }
  }
}
</style>
