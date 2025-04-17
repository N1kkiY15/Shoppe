<template>
  <div class="product__counter">
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
import DefaultMinus from "../../assets/pictures/svg/SvgComponents/DefaultMinus.vue";
import DefaultPlus from "../../assets/pictures/svg/SvgComponents/DefaultPlus.vue";

interface Props {
  quantity: number;
}

defineProps<Props>();

defineEmits(["increment", "decrement"]);
</script>

<style scoped lang="scss">
.product__counter {
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 102px;
  height: 53px;
  gap: 24px;
  padding: 15px;
  background-color: var(--color-lite);
  border-radius: 4px;
  color: var(--color-text);
}

@media (width <= 375px) {
  .product__counter {
    width: 83px;
    height: 33px;
    gap: 17px;
    padding: 12px;
    font-size: 14px;
  }
}
</style>
