<template>
  <div class="default__container">
    <default-header />
    <div class="default__container-page">
      <slot />
    </div>
    <default-footer />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.default__container {
  margin: 64px 96px 90px;
  font-family: var(--font-main);
}

.default__container-page {
  max-width: 1320px;
  margin: auto;
}

@media (width <= 376px) {
  .default__container {
    margin: 16px 16px 24px;
  }
}
</style>
