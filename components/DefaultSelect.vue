<template>
  <div >
    <select ref="selectElement" class="select" @click.stop v-model="selectedValue">
      <option value="">Object</option>
      <option value="first">Первый элемент</option>
      <option value="second">Второй элемент</option>
      <option value="third">Третий элемент</option>
    </select>
    <button class="select-button" type="button">
      <MarkDown class="select-mark" />
    </button>
  </div>
</template>

<script setup lang="ts">
import MarkDown from "../assets/pictures/svg/SvgComponents/MarkDown.vue";

const selectedValue =  defineModel();
</script>

<style scoped lang="scss">
.select {
  width: 100%;
  border-bottom: 1px solid var(--color-decorative);
  padding-bottom: 13px;
  font-size: var(--font-size-text-medium);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-h4);
  color: var(--color-text);
  position: relative;
  display: inline-block;
}

.select-button {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  pointer-events: none;
}
</style>
