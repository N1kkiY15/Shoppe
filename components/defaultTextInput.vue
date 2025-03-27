<template>
  <input
    v-model="model"
    type="text"
    class="input"
    :class="{
      'input-small': props.size === 'small',
      'input-medium': props.size === 'medium',
    }"
  />
</template>

<script lang="ts" setup>
type size = "small" | "medium";

interface Props {
  size: size;
}

const props = defineProps<Props>();
const model = defineModel<string>();
</script>

<style lang="scss" scoped>
.input {
  border-bottom: 1px solid var(--color-decorative);
  padding-bottom: 13px;

  &-small {
    max-width: 396px; 
    min-width: 200px; 
    width: 100%;
    padding-right: 30px;
  }

  &-medium {
    width: 100%;
    font-size: var(--font-size-text-medium);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-h4);
  }
}
</style>
