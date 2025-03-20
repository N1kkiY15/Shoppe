<template>
  <div class="sidebar">
    <form  @submit.prevent="submitSearch" class="sidebar__form">
      <input type="text" v-model="item" placeholder="Search..." />
      <button type="submit" class="sidebar__form-button">
        <search-icon />
      </button>
    </form>

    <div class="sidebar__select">
      <div class="select">
        <select id="mySelect" name="mySelect" class="select-input">
          <option value="">Shop By</option>
          <option value="first">Первый элемент</option>
          <option value="second">Второй элемент</option>
          <option value="third">Третий элемент</option>
        </select>
        <div class="select-mark">
          <MarkDown />
        </div>
      </div>

      <select id="mySelect" name="mySelect" class="select-input">
        <option value="">Sort By</option>
        <option value="first">Первый элемент</option>
        <option value="second">Второй элемент</option>
        <option value="third">Третий элемент</option>
      </select>
    </div>

    <InputSlider />
    <CheckboxSlider v-model="isCheckedOnSale"/>
    <CheckboxSlider v-model="isCheckedInStock"/>
  </div>
</template>

<script lang="ts" setup>
import SearchIcon from "SvgComponents/SearchIcon.vue";
import MarkDown from "SvgComponents/MarkDown.vue";

const isCheckedOnSale = ref<boolean>(false); 
const isCheckedInStock = ref<boolean>(false); 

const item = ref<string>('')

//////////////////////////////////////////////////////////

const submitSearch = () => {
  const searchItem = item.value;
  console.log(searchItem);
  emit("submitSearch", searchItem); // pinia maybe? 
}

const emit = defineEmits(["submitSearch"]);

//////////////////////////////////////////////////////////

</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 100%;
}

.select-mark {
  position: absolute;
  right: 12px;
  bottom: 12px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 39px;
  max-width: 260px;
  width: 100%;

  &__checkbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

.sidebar__select {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
}

.sidebar__form {
  position: relative;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-decorative);
}

.sidebar__form-button {
  position: absolute;
  right: 0;
  bottom: 5px;
  background-color: transparent;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 33px;
  height: 20px;
  cursor: pointer;
}

.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-text);
  border-radius: 34px;
  transition: background-color 0.3s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 4px;
  bottom: 3.5px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

.toggle-input:checked + .slider {
  background-color: #4cd964;
}

.toggle-input:checked + .slider:before {
  transform: translateX(12px);
}
</style>
