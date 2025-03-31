<template>
  <div class="default-checkbox">
    <input
      type="checkbox"
      id="save-info"
      class="default-checkbox__input"
      :class="CheckboxClass"
      v-model="checkboxValue"
    />
    <label for="save-info" class="default-checkbox__description">
      {{ props.text }}
    </label>
  </div>
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

  &__input {
    border: 1px solid var(--color-text);
    cursor: pointer;

    &:checked {
      accent-color: var(--color-primary);
      background-color: var(--color-main);
    }
  }

  &__description {
    font-size: var(--font-size-text-small);
    margin: 0;
    cursor: pointer;
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
