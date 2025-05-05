<template>
  <div v-for="(item, index) of productInfo" :key="index" class="product-info">
    <span>{{ item }}</span>
  </div>

</template>

<script setup lang="ts">
const productInfo = [
  'Weigth: 0,3kg',
  'Dimentions: 15 x 10 x 1 cm',
  'Colours: Black, Browns, White',
  'material: "Metal',
];
</script>

<style scoped lang="scss">
.product-info {
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (width <= 375px) {
    font-size: 12px;
  }
}

</style>
