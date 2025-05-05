<template>
  <div class="counter" :class="quantityClass">
    <button
      class="counter__button"
      :class="{ 'counter__button-disabled': quantity < 2 }"
      :disabled="quantity <= 1"
      @click="$emit('decrement')"
    >
      <DefaultMinus />
    </button>
    {{ quantity }}
    <button class="counter__button" @click="$emit('increment')">
      <DefaultPlus />
    </button>
  </div>
</template>

<script setup lang="ts">
import DefaultMinus from "SvgComponents/DefaultMinus.vue";
import DefaultPlus from "SvgComponents/DefaultPlus.vue";

type variant = "big" | "small";

interface Props {
  quantity: number;
  type: variant;
}

const props = defineProps<Props>();

defineEmits(["increment", "decrement"]);

const quantityClass = computed(() => ({
  counter__big: props.type === "big",
  counter__small: props.type === "small",
}));
</script>

<style scoped lang="scss">
.counter {
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 102px;
  background-color: var(--color-lite);
  border-radius: 4px;
  color: var(--color-text);
  outline: 2px solid #efefef;

  &__big {
    height: 53px;
  }

  &__small {
    height: 30px;
  }

  &__button {
    height: 100%;
    padding: 16px;

    &:disabled {
      cursor: not-allowed;
    }

    &-disabled {
      opacity: 0.5;
    }
  }
}

@media (width <= 375px) {
  .counter {
    width: 83px;
    height: 33px;
    font-size: 14px;

    &__button {
      padding: 11px;
    }
  }
}
</style>
