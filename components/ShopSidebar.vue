<template>
  <div class="sidebar">
    <input type="text" placeholder="Search..." class="text-input"/>

    <select id="mySelect" name="mySelect" class="select-input">
      <option value="">Shop By</option>
      <option value="first">Первый элемент</option>
      <option value="second">Второй элемент</option>
      <option value="third">Третий элемент</option>
    </select>

    <select id="mySelect" name="mySelect" class="select-input">
      <option value="">Sort By</option>
      <option value="first">Первый элемент</option>
      <option value="second">Второй элемент</option>
      <option value="third">Третий элемент</option>
    </select>

    <input
      type="range"
      id="priceRange"
      name="priceRange"
      min="0"
      max="5000"
      step="100"
      value="2500"
    />
    <div class="sidebar__checkbox">
        <label for="on-sale">On sale</label>
        <input type="checkbox" id="on-sale"/> 
    </div>
    <div class="sidebar__checkbox">
        <label for="in-stock">In stock</label>
        <input type="checkbox" id="in-stock"/> 
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 39px;
  max-width: 261px;
  width: 100%;

    &__checkbox { 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

    }
}
</style>
