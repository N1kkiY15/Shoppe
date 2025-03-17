<template>
  <div :class="{ header__border: showElement }" class="header">
    <div class="header__container">
      <NuxtLink to="/MainPage" class="header__logo">shoppe</NuxtLink>
      <div class="header__info">
        <nav>
          <ul class="header__info-navigation">
            <li>
              <NuxtLink to="/shop" :class="{ active: route.path === '/shop' }"
                >Shop</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/blog" :class="{ active: route.path === '/blog' }"
                >Blog</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/ourstory"
                :class="{ active: route.path === '/ourstory' }"
                >Our story</NuxtLink
              >
            </li>
          </ul>
        </nav>
        <span class="header__line"></span>
        <div class="header__info-links">
          <SearchIcon />
          <ShoppingCartIcon />
          <ProfileIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileIcon from "assets/pictures/svg/SvgComponents/ProfileIcon.vue";
import SearchIcon from "assets/pictures/svg/SvgComponents/SearchIcon.vue";
import ShoppingCartIcon from "assets/pictures/svg/SvgComponents/ShoppingCartIcon.vue";

const route = useRoute();
const showElement = computed(() => !route.meta?.isHomePage);
</script>

<style scoped lang="scss">
.active {
  position: relative;
  padding-bottom: 28px;
  border-bottom: 2px solid #000;
  z-index: 2;
}

.header {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.header__border::after {
  content: "";
  border-bottom: 1px solid var(--color-decorative);
  margin-bottom: 97px;
}

.header__container {
  display: flex;
  flex-direction: row;
  gap: 48px;
  justify-content: space-between;
  align-items: center;

  .header__logo {
    text-transform: uppercase;
    font-family: var(--font-logo), sans-serif;
    font-size: var(--font-size-logo);
    font-weight: var(--font-weight-regular);
    color: var(--color-main);

    &:first-letter {
      color: var(--color-accent);
    }
  }

  .header__info {
    display: flex;
    flex-direction: row;
    gap: 48px;
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-text-large);

    &-navigation {
      display: flex;
      flex-direction: row;
      gap: 64px;

      .header__line {
        position: relative;
      }
    }

    &-links {
      display: flex;
      flex-direction: row;
      gap: 39px;
    }

    .header__line::after {
      content: "";
      border-right: 1px solid var(--color-main);
    }
  }
}
</style>
