<template>
    <button class="button__special">
        <slot />
    </button>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.button__special {
  border-radius: 6px;
  border: 2px solid var(--color-contrast);
  color: var(--color-contrast);
  background-color: var(--color-transparent);
  padding: 12px 31px;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-h4);
}
</style>