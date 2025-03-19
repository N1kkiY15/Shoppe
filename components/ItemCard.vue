<template>
  <div
    class="item-card"
    :class="{
      'card-size-medium': props.size === 'medium',
      'card-size-big': props.size === 'big',
    }"
  >
    <img src="assets/pictures/Img 01.png" class="item-card__image" />
    <div class="item-card__description">
      <h3>{{ props.title }}</h3>
      <span>$ {{ props.price }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type cardSize = "medium" | "big";

interface CardInfo {
  title: string;
  image: string;
  price: number;
  size: cardSize;
}

const props = defineProps<CardInfo>();
</script>

<style lang="scss" scoped>
.item-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  &__image {
    background-color: aqua;
    max-height: 380px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 16px;
  }
}

.card-size-medium {
  max-width: 300px;
}

.card-size-big {
  max-width: 380px;
}
</style>
