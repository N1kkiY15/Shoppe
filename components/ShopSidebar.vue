<template>
  <div class="sidebar">
    <form @submit.prevent="submitSearch" class="sidebar__form">
      <input
        type="text"
        v-model="item"
        placeholder="Search..."
        class="sidebar__input"
      />
      <button type="submit" class="sidebar__submit">
        <search-icon class="sidebar__icon" />
      </button>
    </form>

    <div class="sidebar__selects">
      <div class="sidebar__select">
        <select id="mySelect" name="mySelect" class="sidebar__select-input">
          <option value="">Category</option>
          <option value="first">Первый элемент</option>
          <option value="second">Второй элемент</option>
          <option value="third">Третий элемент</option>
        </select>
        <button class="sidebar__select-mark">
          <MarkDown class="sidebar__select-icon" />
        </button>
      </div>

      <div class="sidebar__select">
        <select id="mySelect" name="mySelect" class="sidebar__select-input">
          <option value="">Sort By</option>
          <option value="first">Первый элемент</option>
          <option value="second">Второй элемент</option>
          <option value="third">Третий элемент</option>
        </select>
        <button class="sidebar__select-mark">
          <MarkDown class="sidebar__select-icon" />
        </button>
      </div>
    </div>

    <InputSlider class="sidebar__slider" />

    <CheckboxSlider
      v-model="isCheckedOnSale"
      label="On Sale"
      id="sale"
      class="sidebar__checkbox"
    />
    <CheckboxSlider
      v-model="isCheckedInStock"
      label="On Stock"
      id="stock"
      class="sidebar__checkbox"
    />
  </div>
</template>

<script lang="ts" setup>
import SearchIcon from "SvgComponents/SearchIcon.vue";
import MarkDown from "SvgComponents/MarkDown.vue";

const isCheckedOnSale = ref<boolean>(false);

const isCheckedInStock = ref<boolean>(false);

const item = ref<string>("");

//////////////////////////////////////////////////////////

const submitSearch = () => {
  const searchItem = item.value;
  console.log(searchItem);
  emit("submitSearch", searchItem); // pinia maybe?
};

const emit = defineEmits(["submitSearch"]);

//////////////////////////////////////////////////////////
</script>

<style lang="scss" scoped>
.sidebar__select {
  position: relative;
  width: 100%;

  &-input {
    border: 1px solid var(--color-decorative);
    padding: 15px 12px;
    border-radius: 4px;
    width: 100%;
  }
}

.sidebar__select-mark {
  position: absolute;
  right: 12px;
  bottom: 12px;
  pointer-events: none;
  background-color: transparent;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 39px;

  &__checkbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

.sidebar__selects {
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

.sidebar__submit {
  position: absolute;
  right: 0;
  bottom: 5px;
  background-color: transparent;
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

@media (width <= 376px) {
  .sidebar {
    display: none;
  }
}
</style>
