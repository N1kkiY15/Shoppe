<template>
  <div class="header" :class="{ 'header--bordered': showElement }">
    <div class="header__container">
      <NuxtLink to="/MainPage" class="header__logo">shoppe</NuxtLink>

      <div class="header__desktop-nav">
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <NuxtLink
                to="/shop"
                :class="{ 'header__nav-link--active': route.path === '/shop' }"
                class="header__nav-link"
                >Shop
              </NuxtLink>
            </li>
            <li class="header__nav-item">
              <NuxtLink
                to="/blog"
                :class="{ 'header__nav-link--active': route.path === '/blog' }"
                class="header__nav-link"
                >Blog
              </NuxtLink>
            </li>
            <li class="header__nav-item">
              <NuxtLink
                to="/ourstory"
                :class="{
                  'header__nav-link--active': route.path === '/ourstory',
                }"
                class="header__nav-link"
                >Our story
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <span class="header__divider"></span>
        <div class="header__actions">
          <SearchIcon class="header__action-icon" />
          <button><ShoppingCartIcon class="header__action-icon" @click="toggleShoppingBag"/></button>
          <NuxtLink to="/login" class="header__action-icon">
            <ProfileIcon />
          </NuxtLink>
        </div>
      </div>

      <div class="header__mobile-controls">
        <ShoppingCartIcon class="header__mobile-icon" />
        <button @click="toggleDropdown" class="header__menu-button">
          <MenuList v-if="!isOpen" class="header__menu-icon" />
          <XIcon v-if="isOpen" class="header__menu-icon" />
        </button>
      </div>
    </div>
    <div class="header__search">
      <input type="text" class="header__search-input" placeholder="Search" />
      <SearchIconMobile class="header__search-icon" />
    </div>

    <MobileHeaderMenu :openMenu="isOpen" @toggle-dropdown="toggleDropdown" />

    <ShoppingBag :isOpen="openBag" @closeBag="toggleShoppingBag"/>
  </div>
</template>

<script setup lang="ts">
import ProfileIcon from "SvgComponents/ProfileIcon.vue";
import SearchIcon from "SvgComponents/SearchIcon.vue";
import ShoppingCartIcon from "SvgComponents/ShoppingCartIcon.vue";
import MenuList from "../assets/pictures/svg/SvgComponents/MenuList.vue";
import SearchIconMobile from "../assets/pictures/svg/SvgComponents/SearchIconMobile.vue";
import XIcon from "../assets/pictures/svg/SvgComponents/XIcon.vue";
import ShoppingBag from "./ShoppingBag.vue";

const route = useRoute();
const showElement = computed(() => !route.meta?.isHomePage);

const isOpen = ref<boolean>(false);

const toggleDropdown = () => {
  scrollToTop();
  isOpen.value = !isOpen.value;
  document.body.style.overflow = isOpen.value ? "hidden" : "";
};

const openBag = ref<boolean>(false);

const toggleShoppingBag = () => {
  openBag.value = !openBag.value;
}

</script>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  flex-direction: column;

  &--bordered {
    margin-bottom: 80px;
    border-bottom: 1px solid var(--color-decorative);
  }

  &__container {
    display: flex;
    flex-direction: row;
    gap: 48px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }

  &__logo {
    text-transform: uppercase;
    font-family: var(--font-logo);
    font-size: clamp(1.563rem, 1.384rem + 0.893vw, 2.188rem);
    font-weight: var(--font-weight-regular);
    color: var(--color-main);

    &:first-letter {
      color: var(--color-accent);
    }
  }

  &__desktop-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 48px;
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-text-large);
  }

  &__nav-list {
    display: flex;
    flex-direction: row;
    gap: 64px;
  }

  &__nav-link {
    &--active {
      cursor: pointer;
      padding-bottom: 31px;
      border-bottom: 2px solid #000;
      z-index: 2;
    }
  }

  &__divider::after {
    content: "";
    border-right: 1px solid var(--color-main);
  }

  &__actions {
    display: flex;
    flex-direction: row;
    gap: 39px;
  }

  &__mobile-controls {
    display: none;
    flex-direction: row;
    gap: 15px;
    align-content: center;
  }

  &__menu-button {
    display: flex;
    align-items: center;
  }

  &__search {
    display: none;
    position: relative;

    &-input {
      background-color: #efefef;
      border-radius: 4px;
      padding: 5px 0 5px 30px;
      height: 32px;
      width: 100%;
      margin-bottom: 16px;
    }

    &-icon {
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }
}

@media (width <= 376px) {
  .header {
    &__desktop-nav {
      display: none;
    }

    &__container {
      margin-bottom: 16px;
    }

    &__mobile-controls {
      display: flex;
    }

    &__search {
      display: block;
    }

    &--bordered {
      margin-bottom: 24px;
      border-bottom: none;
    }
  }
}
</style>
