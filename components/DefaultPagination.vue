<template>
  <nav v-if="props.pageNumber > 1">
    <ul class="pagination">
      <li v-for="page in props.pageNumber" :key="page" class="pagination__item">{{ page }}</li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// :class="{ activePage: isActive(page) }"
// @click="changingPage(page)">{{ page }}

interface pageNumber {
  pageNumber: number;
}

const props = defineProps<pageNumber>();
console.log(props.pageNumber);

//  const emits = defineEmits(['changePage', 'isActive'])

//  const localNumber = ref(JSON.parse(JSON.stringify(props.pageNumber)))
//  pageNumber.value = Math.ceil(cardNumber.value / cardOnPage);

//  const changingPage = (page) => {
//   emits('changePage', page)
//  }

 const isActive = (page) => {
  emits('isActive', page2)
 }
</script>

<style lang="scss" scoped>
.pagination { 
  display: flex;
  flex-direction: row;
  gap: 8px;

  &__item { 
    width: 40px;
    height: 40px;
    border: 1px solid var(--color-decorative);
    justify-content: center; /* Горизонтальное выравнивание */
    align-content: center; 

  }
}

</style>
