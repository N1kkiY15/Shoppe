<template>
  <div class="items">
    <div class="items__list">
      <ItemCard  
      v-for="cards in productsLength"
      :key="cards"
      :title="products[cards - 1].title"
      :price="products[cards - 1].price"
      :image="products[cards - 1].image"
      /> 
    </div>
 
  </div>
</template>

<script lang="ts" setup>
import useFetchProducts from '~/composables/useFetch';

const productsLength = computed(() => products.value.length)


const { isLoading, errorLoading, products, fetchByURL  } = useFetch(
  'https://fakestoreapi.com/products'
);

onMounted(async () => {
  await fetchByURL();
});

</script>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-direction: column;
  gap: 39px;
  margin-bottom: 250px;

  &__list {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap: wrap;
  }
}
</style>
