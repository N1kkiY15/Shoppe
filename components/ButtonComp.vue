<template>
  <button :class="buttonClasses">
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
  primary: props.variant === "primary",
  secondary: props.variant === "secondary",
  special: props.variant === "special",
  "button__size-xl": props.size === "xl",
  "button__size-l": props.size === "l",
  "button__size-m": props.size === "m",
}));
</script>

<style lang="scss" scoped>
@mixin base-button {
  border-radius: 4px;
  padding: 12px 31px;
  border: 2px solid var(--color-main);
  font-weight: var(--font-weight-bold);
  font-size: 16px;
  width: 100%;
  transition:
    background-color 0.4s ease,
    color 0.4s ease;
  font-family: DM Sans;

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
    border: 2px solid var(--color-main);
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
  border: 2px solid var(--color-contrast);
  color: var(--color-contrast);
  background-color: var(--color-transparent);
  font-size: clamp(0.75rem, 0.574rem + 0.751vw, 1.25rem);

  &:hover {
    @include secondary-colors;
  }
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

@media (width <= 375px) {
  @mixin base-button {
    border-radius: 4px;
    padding: 6px 9px;
    font-size: 12px;
    line-height: 20px;
  }

  .special {
    outline: 1px solid var(--color-contrast);
    max-width: 102px;
    max-height: 32px;
    padding: 6px 9px;
  }

  .primary,
  .secondary,
  .special {
    @include base-button;
  }
}
</style>
