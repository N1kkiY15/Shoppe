<template>
  <button
    :class="buttonClasses"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
type ButtonVariant = "primary" | "secondary" | "special";
type ButtonSize = "xl" | "l" | "m";

interface Props {
  variant: ButtonVariant;
  size: ButtonSize;
}

const props = defineProps<Props>();


const buttonClasses = computed(() => ({
  primary: props.variant === 'primary',
  secondary: props.variant === 'secondary',
  special: props.variant === 'special',
  'button__size-xl': props.size === 'xl',
  'button__size-l': props.size === 'l',
  'button__size-m': props.size === 'm'
}));

</script>

<style lang="scss" scoped>
@mixin base-button {
  border-radius: 4px;
  padding: 12px 31px;
  outline: 2px solid var(--color-main);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-h5);
  width: 100%;
  transition: background-color 0.4s ease, color 0.4s ease;
}

@mixin primary-colors {
  color: var(--color-contrast);
  background-color: var(--color-main);
}

@mixin secondary-colors {
  color: var(--color-main);
  background-color: var(--color-contrast);
}

.primary {
  @include base-button;
  @include primary-colors;

  &:hover {
    @include secondary-colors;
    outline: 2px solid var(--color-main);
  }
}

.secondary {
  @include base-button;
  @include secondary-colors;

  &:hover {
    @include primary-colors;
  }
}

.special {
  @include base-button;
  border-radius: 6px;
  outline: 2px solid var(--color-contrast);
  color: var(--color-contrast);
  background-color: var(--color-transparent);
  font-size: var(--font-size-h4);
}

.button__size-xl {
  max-width: 500px;
}

.button__size-l {
  max-width: 197px;
}

.button__size-m {
  max-width: 123px;
}
</style>
