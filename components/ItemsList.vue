<template>
  <div class="items">
    <ItemsListHeader /> 
    <div class="items__list">
      <ItemCard  />
    </div>
  </div>
</template>

<script lang="ts">

const items: number = 5;
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
    row-gap: 54px;
    column-gap: 86px;
  }
}
</style>
