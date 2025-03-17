<template>
  <input
    type="text"
    class="input"
    :class="{
      'input-small': props.size === 'small',
      'input-medium': props.size === 'medium',
    }"
    v-model="model"
  />
</template>

<script lang="ts" setup>
import { defineProps, defineModel } from "vue";

const userInfo = ref<string>("");

type size = "small" | "medium";

interface Props {
  emailValidation?: boolean;
  size: size;
}

const props = defineProps<Props>();
const model = defineModel<string>();

const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
</script>

<style lang="scss" scoped>
.input {
  border-bottom: 1px solid var(--color-decorative);
}

.input-small {
  height: 20px;
  width: 396px;
  padding-right: 30px;
}

.input-medium {
  height: 40px;
  width: 100%;
  font-size: var(--font-size-text-medium);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-h4);
}

</style>
