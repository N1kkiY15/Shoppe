<template>
  <div class="counter">
    <button @click="$emit('decrement')">
      <DefaultMinus />
    </button>
    {{ quantity }}
    <button @click="$emit('increment')">
      <DefaultPlus />
    </button>
  </div>
</template>

<script setup lang="ts">
import DefaultMinus from "SvgComponents/DefaultMinus.vue";
import DefaultPlus from "SvgComponents/DefaultPlus.vue";

interface Props {
  quantity: number;
}

defineProps<Props>();

defineEmits(["increment", "decrement"]);
</script>

<style scoped lang="scss">
.counter {
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 102px;
  padding: 16px;
  height: 53px;
  background-color: var(--color-lite);
  border-radius: 4px;
  color: var(--color-text);
  outline: 2px solid #efefef;
}

@media (width <= 375px) {
  .counter {
    width: 83px;
    height: 33px;
    gap: 17px;
    padding: 12px;
    font-size: 14px;
  }
}
</style>
