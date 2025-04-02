<template>
  <div>
    <div class="shop-header">
      <h3 class="shop-header__heading">Shop</h3>
      <button @click="toggleDropFilters" class="shop-header__button">
        <SettingsGoldIcon />
        <span class="shop-header__button-heading">Filters</span>
      </button>
    </div>

    <transition name="slide">
      <div v-if="filtersIsOpen === true" class="filters">
        <div class="filters__header">
          <h1 class="filters__header-heading">Filters</h1>
          <button>
            <XIcon @click="toggleDropFilters" />
          </button>
        </div>

        <ShopSidebar />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import SettingsGoldIcon from "../assets/pictures/svg/SvgComponents/SettingsGoldIcon.vue";
import XIcon from "../assets/pictures/svg/SvgComponents/XIcon.vue";

const filtersIsOpen = ref<boolean>(false);

const toggleDropFilters = () => {
  filtersIsOpen.value = !filtersIsOpen.value;
  document.body.style.overflow = filtersIsOpen.value ? "hidden" : "";
};
</script>

<style scoped lang="scss">
.shop-header {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;

  &__heading {
    font-weight: 400;
    font-size: 20px;
  }

  &__button {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    &-heading {
      font-weight: 400;
      font-size: 12px;
      color: var(--color-accent);
    }
  }
}

.filters {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 3;
  overflow-y: auto;
  padding: 16px;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    &-heading {
      color: black;
      font-family: var(--font-logo);
    }
  }
}
</style>
