<template>
  <label class="default-checkbox">
    <input
      v-model="checkboxValue"
      type="checkbox"
      class="default-checkbox__input"
      :class="CheckboxClass"
    />
    {{ props.text }}
  </label>
</template>

<script setup lang="ts">
type size = "small" | "medium";
type form = "rounded" | "square";

interface CheckboxProps {
  size: size;
  form: form;
  text: string;
}

const props = defineProps<CheckboxProps>();

const checkboxValue = defineModel();

const CheckboxClass = computed(() => ({
  "input-small": props.size === "small",
  "input-medium": props.size === "medium",
  "input-rounded": props.form === "rounded",
}));
</script>

<style scoped lang="scss">
.default-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: var(--font-size-text-small);

  &__input {
    border: 1px solid var(--color-text);
    cursor: pointer;

    &:checked {
      accent-color: var(--color-primary);
      background-color: darkred;
    }
  }
}

.input-small {
  width: 13px;
  height: 13px;
}

.input-medium {
  width: 18px;
  height: 18px;
}

.input-rounded {
  border-radius: 2px;
}
</style>
